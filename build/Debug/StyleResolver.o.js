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
H_BASE = parentModule["_malloc"](528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb;
var __ZN7WebCore13StyleResolverD1Ev;
var __ZN7WebCore13StyleResolver18CascadedPropertiesC1ENS_13TextDirectionENS_11WritingModeE;
/* memory initializer */ allocate([112,114,105,110,116,0,0,0,49,48,48,37,0,0,0,0,48,37,0,0,0,0,0,0,73,0,0,0,255,255,0,255,74,0,0,0,0,0,0,255,75,0,0,0,255,0,0,255,76,0,0,0,255,0,255,255,77,0,0,0,128,128,128,255,78,0,0,0,0,128,0,255,123,0,0,0,128,128,128,255,79,0,0,0,0,255,0,255,80,0,0,0,0,0,128,255,81,0,0,0,128,0,0,255,82,0,0,0,0,128,128,255,83,0,0,0,0,165,255,255,84,0,0,0,128,0,128,255,85,0,0,0,0,0,255,255,86,0,0,0,192,192,192,255,87,0,0,0,128,128,0,255,90,0,0,0,0,0,0,0,88,0,0,0,255,255,255,255,89,0,0,0,0,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiif(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiif"](index,a1,a2,a3,a4);
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
function invoke_viiiid(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiid"](index,a1,a2,a3,a4,a5);
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
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZTVN7WebCore24StyleCustomFilterProgramE=env.__ZTVN7WebCore24StyleCustomFilterProgramE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames8meterTagE=env.__ZN7WebCore9HTMLNames8meterTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN7WebCore9HTMLNames11progressTagE=env.__ZN7WebCore9HTMLNames11progressTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZTVN7WebCore31BasicColorMatrixFilterOperationE=env.__ZTVN7WebCore31BasicColorMatrixFilterOperationE|0;
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var __ZN7WebCore8SVGNames7textTagE=env.__ZN7WebCore8SVGNames7textTagE|0;
  var __ZN7WebCore9HTMLNames8langAttrE=env.__ZN7WebCore9HTMLNames8langAttrE|0;
  var __ZN7WebCore9HTMLNames5rtTagE=env.__ZN7WebCore9HTMLNames5rtTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZTVN7WebCore25DropShadowFilterOperationE=env.__ZTVN7WebCore25DropShadowFilterOperationE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames9legendTagE=env.__ZN7WebCore9HTMLNames9legendTagE|0;
  var __ZN7WebCore9HTMLNames10isindexTagE=env.__ZN7WebCore9HTMLNames10isindexTagE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZTVN7WebCore37BasicComponentTransferFilterOperationE=env.__ZTVN7WebCore37BasicComponentTransferFilterOperationE|0;
  var __ZN7WebCore8SVGNames16foreignObjectTagE=env.__ZN7WebCore8SVGNames16foreignObjectTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames12readonlyAttrE=env.__ZN7WebCore9HTMLNames12readonlyAttrE|0;
  var __ZTVN7WebCore19BlurFilterOperationE=env.__ZTVN7WebCore19BlurFilterOperationE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore11RenderStyle16initialTransformEvE3ops=(H_BASE+520)|0;
  var __ZTVN7WebCore5TimerINS_13StyleResolverEEE=(H_BASE+192)|0;
  var __ZTVN7WebCore26CustomFilterColorParameterE=(H_BASE+288)|0;
  var __ZTVN7WebCore17StylePendingImageE=(H_BASE+384)|0;
  var __ZTVN7WebCore27CustomFilterNumberParameterE=(H_BASE+256)|0;
  var __ZTVN7WebCore30CustomFilterTransformParameterE=(H_BASE+224)|0;
  var __ZTVN7WebCore21CustomFilterParameterE=(H_BASE+352)|0;
  var __ZTVN7WebCore26CustomFilterArrayParameterE=(H_BASE+320)|0;
  var __ZZN7WebCore11RenderStyle13initialFilterEvE3ops=(H_BASE+504)|0;
  var __ZN7WebCore13StyleResolver22s_styleNotYetAvailableE=(H_BASE+512)|0;
  var __ZZN7WebCore11RenderStyle16initialTransformEvE3ops=(H_BASE+496)|0;
  var __ZGVZN7WebCore11RenderStyle13initialFilterEvE3ops=(H_BASE+528)|0;
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
  var invoke_viiif=env.invoke_viiif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiid=env.invoke_viiiid;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iiif=env.invoke_iiif;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, d165 = +0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, d214 = +0, d215 = +0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, d239 = +0, d240 = +0, i241 = 0, i242 = 0, i243 = 0, i244 = 0, i245 = 0, d246 = +0, i247 = 0, i248 = 0, i249 = 0, i250 = 0, i251 = 0, i252 = 0, i253 = 0, i254 = 0, i255 = 0, i256 = 0, i257 = 0, i258 = 0, i259 = 0, i260 = 0, i261 = 0, i262 = 0, i263 = 0, i264 = 0, i265 = 0, i266 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 560 | 0;
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
 i35 = i4 + 240 | 0;
 i36 = i4 + 248 | 0;
 i37 = i4 + 256 | 0;
 i38 = i4 + 264 | 0;
 i39 = i4 + 272 | 0;
 i40 = i4 + 280 | 0;
 i41 = i4 + 288 | 0;
 i42 = i4 + 296 | 0;
 i43 = i4 + 304 | 0;
 i44 = i4 + 312 | 0;
 i45 = i4 + 328 | 0;
 i46 = i4 + 336 | 0;
 i47 = i4 + 344 | 0;
 i48 = i4 + 352 | 0;
 i49 = i4 + 360 | 0;
 i50 = i4 + 368 | 0;
 i51 = i4 + 376 | 0;
 i52 = i4 + 384 | 0;
 i53 = i4 + 392 | 0;
 i54 = i4 + 400 | 0;
 i55 = i4 + 408 | 0;
 i56 = i4 + 416 | 0;
 i57 = i4 + 424 | 0;
 i58 = i4 + 440 | 0;
 i59 = i4 + 448 | 0;
 i60 = i4 + 456 | 0;
 i61 = i4 + 472 | 0;
 i62 = i4 + 480 | 0;
 i63 = i4 + 488 | 0;
 i64 = i4 + 496 | 0;
 i65 = i4 + 504 | 0;
 i66 = i4 + 512 | 0;
 i67 = i4 + 528 | 0;
 i68 = i4 + 552 | 0;
 i69 = i68;
 i70 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i71 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i72 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i73 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i74 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i75 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i76 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i77 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i78 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i79 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i80 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i81 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i82 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i83 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i84 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i85 = i84;
 i86 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i87 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i88 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i89 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i90 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i91 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i92 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i93 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i94 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i95 = i94;
 i96 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i97 = i96;
 i98 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i99 = i98;
 i100 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i101 = i100;
 i102 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i103 = i102;
 i104 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i105 = i104;
 i106 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i107 = i106;
 i108 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i109 = i108;
 i110 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i111 = i110;
 i112 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i113 = i112;
 i114 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i115 = i114;
 i116 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i117 = i116;
 i118 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i119 = i118;
 i120 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i121 = i120;
 i122 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i123 = i122;
 i124 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i125 = i124;
 i126 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i127 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i128 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i129 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i130 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i131 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i132 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i133 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i134 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i135 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i136 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i137 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i138 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i139 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i140 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i141 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i142 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i143 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i144 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i145 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i146 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i147 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i148 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i149 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i150 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i151 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i152 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i153 = i1 + 308 | 0;
 if (__ZN7WebCore11CSSProperty24isDirectionAwarePropertyENS_13CSSPropertyIDE(i2) | 0) {
  i154 = HEAP32[i1 + 312 >> 2] | 0;
  __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(i2, (HEAP32[i154 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i154 + 44 >> 2] | 0) >>> 13 & 3) | 0, i3);
  STACKTOP = i4;
  return;
 }
 i154 = (HEAP32[i1 + 320 >> 2] | 0) == 0;
 i155 = HEAP32[i3 + 4 >> 2] | 0;
 if (i154) {
  i156 = 0;
 } else {
  i156 = (i155 & 516096 | 0) == 131072;
 }
 i157 = i3 + 4 | 0;
 i158 = i155 & 516096;
 if ((i158 | 0) == 139264) {
  i159 = 1;
 } else {
  i159 = i154 & (i158 | 0) == 131072;
 }
 L11 : do {
  if ((HEAP8[i1 + 341 | 0] & 1) == 0) {
   if ((HEAP8[i1 + 342 | 0] & 1) == 0) {
    STACKTOP = i4;
    return;
   }
   switch (i2 | 0) {
   case 23:
   case 49:
   case 54:
   case 60:
   case 35:
   case 1:
   case 105:
   case 229:
   case 332:
   case 337:
   case 340:
   case 343:
   case 388:
   case 397:
    {
     break L11;
     break;
    }
   default:
    {}
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if (i156) {
   i158 = i1 + 324 | 0;
   if ((HEAP32[(HEAP32[i158 >> 2] | 0) + 52 >> 2] & 524288 | 0) != 0) {
    break;
   }
   if (__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i2) | 0) {
    break;
   }
   i154 = (HEAP32[i158 >> 2] | 0) + 52 | 0;
   HEAP32[i154 >> 2] = HEAP32[i154 >> 2] | 524288;
  }
 } while (0);
 i154 = HEAP32[i1 + 256 >> 2] | 0;
 i158 = i2 - 1 | 0;
 i155 = HEAP32[i154 + (i158 * 12 & -1) >> 2] | 0;
 do {
  if ((i155 | 0) != 0) {
   i160 = HEAP32[i154 + (i158 * 12 & -1) + 4 >> 2] | 0;
   if ((i160 | 0) == 0) {
    break;
   }
   i161 = HEAP32[i154 + (i158 * 12 & -1) + 8 >> 2] | 0;
   if ((i161 | 0) == 0) {
    break;
   }
   if (i156) {
    FUNCTION_TABLE_vii[i155 & 15](i2, i1);
    STACKTOP = i4;
    return;
   }
   if (i159) {
    FUNCTION_TABLE_vii[i160 & 15](i2, i1);
    STACKTOP = i4;
    return;
   } else {
    FUNCTION_TABLE_viii[i161 & 7](i2, i1, i3);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i155 = HEAP32[i157 >> 2] | 0;
 i158 = i155 & 516096;
 i154 = (i158 | 0) == 0;
 if (i154) {
  i162 = i3;
 } else {
  i162 = 0;
 }
 i161 = i1 + 312 | 0;
 i160 = HEAP32[i161 >> 2] | 0;
 i163 = i160 + 24 | 0;
 i164 = HEAP32[i163 >> 2] | 0;
 d165 = +HEAPF32[i164 + 80 >> 2];
 L40 : do {
  switch (i2 | 0) {
  case 73:
   {
    if (i159) {
     __ZN7WebCore11RenderStyle12clearContentEv(i160);
     STACKTOP = i4;
     return;
    }
    if ((i155 & 491520) >>> 0 <= 221184 >>> 0) {
     STACKTOP = i4;
     return;
    }
    if ((i3 | 0) == 0) {
     i166 = 0;
    } else {
     i166 = i3;
    }
    i167 = (i166 | 0) == 0;
    i168 = i166 + 16 | 0;
    i169 = i166 + 8 | 0;
    i170 = i34 | 0;
    i171 = i32 | 0;
    i172 = i33 | 0;
    i173 = i31 | 0;
    i174 = i35 | 0;
    i175 = i36 | 0;
    i176 = i38 | 0;
    i177 = i37 | 0;
    i178 = i41 | 0;
    i179 = i30 | 0;
    i180 = i40 | 0;
    i181 = i153 | 0;
    i182 = i42 | 0;
    i183 = i42 | 0;
    i184 = i39 | 0;
    i185 = i1 + 48 | 0;
    i186 = i1 + 324 | 0;
    i187 = i47 | 0;
    i188 = i48 | 0;
    i189 = i46 | 0;
    i190 = i49 | 0;
    i191 = 0;
    i192 = 0;
    while (1) {
     if (i167) {
      i193 = 0;
     } else {
      i193 = HEAP32[i168 >> 2] | 0;
     }
     if (i192 >>> 0 >= i193 >>> 0) {
      break;
     }
     if ((HEAP32[i168 >> 2] | 0) >>> 0 <= i192 >>> 0) {
      i194 = 35;
      break;
     }
     i195 = HEAP32[(HEAP32[i169 >> 2] | 0) + (i192 << 2) >> 2] | 0;
     i196 = i195 + 4 | 0;
     i197 = (HEAP32[i196 >> 2] | 0) >>> 13 & 63;
     do {
      if ((i197 - 3 | 0) >>> 0 < 5 >>> 0) {
       i198 = HEAP32[i161 >> 2] | 0;
       if ((i197 - 6 | 0) >>> 0 >= 2 >>> 0) {
        i199 = i195 | 0;
        HEAP32[i199 >> 2] = (HEAP32[i199 >> 2] | 0) + 1;
        i199 = __ZN3WTF10fastMallocEj(28) | 0;
        HEAP32[i173 >> 2] = i195;
        __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i199, i31);
        HEAP32[i174 >> 2] = i199;
        __ZN7WebCore11RenderStyle10setContentEN3WTF10PassRefPtrINS_10StyleImageEEEb(i198, i35, i191);
        i199 = HEAP32[i174 >> 2] | 0;
        if ((i199 | 0) == 0) {
         i200 = 1;
         break;
        }
        i201 = i199 + 4 | 0;
        i199 = i201 | 0;
        i202 = (HEAP32[i199 >> 2] | 0) - 1 | 0;
        if ((i202 | 0) != 0) {
         HEAP32[i199 >> 2] = i202;
         i200 = 1;
         break;
        }
        i202 = i201 - 4 | 0;
        if ((i202 | 0) == 0) {
         i200 = 1;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i202 >> 2] | 0) + 4 >> 2] & 63](i202);
        i200 = 1;
        break;
       }
       __ZN7WebCore16CSSGradientValue26gradientWithStylesResolvedEPNS_13StyleResolverE(i34, i195, i1);
       i202 = HEAP32[i170 >> 2] | 0;
       i201 = i202 | 0;
       HEAP32[i201 >> 2] = (HEAP32[i201 >> 2] | 0) + 1;
       i201 = __ZN3WTF10fastMallocEj(28) | 0;
       HEAP32[i171 >> 2] = i202;
       __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i201, i32);
       HEAP32[i172 >> 2] = i201;
       __ZN7WebCore11RenderStyle10setContentEN3WTF10PassRefPtrINS_10StyleImageEEEb(i198, i33, i191);
       i198 = HEAP32[i172 >> 2] | 0;
       do {
        if ((i198 | 0) != 0) {
         i201 = i198 + 4 | 0;
         i202 = i201 | 0;
         i199 = (HEAP32[i202 >> 2] | 0) - 1 | 0;
         if ((i199 | 0) != 0) {
          HEAP32[i202 >> 2] = i199;
          break;
         }
         i199 = i201 - 4 | 0;
         if ((i199 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i199 >> 2] | 0) + 4 >> 2] & 63](i199);
        }
       } while (0);
       i198 = HEAP32[i170 >> 2] | 0;
       if ((i198 | 0) == 0) {
        i200 = 1;
        break;
       }
       i199 = i198 | 0;
       i201 = (HEAP32[i199 >> 2] | 0) - 1 | 0;
       if ((i201 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i198 | 0);
        i200 = 1;
        break;
       } else {
        HEAP32[i199 >> 2] = i201;
        i200 = 1;
        break;
       }
      } else {
       i200 = i191;
      }
     } while (0);
     i197 = HEAP32[i196 >> 2] | 0;
     i201 = i197 & 516096;
     do {
      if ((i201 | 0) == 8192) {
       i199 = HEAP32[i161 >> 2] | 0;
       __ZN7WebCore13StyleResolver24cachedOrPendingFromValueENS_13CSSPropertyIDEPNS_13CSSImageValueE(i36, i1, 73, i195);
       __ZN7WebCore11RenderStyle10setContentEN3WTF10PassRefPtrINS_10StyleImageEEEb(i199, i36, i200);
       i199 = HEAP32[i175 >> 2] | 0;
       if ((i199 | 0) == 0) {
        i203 = 1;
        break;
       }
       i198 = i199 + 4 | 0;
       i199 = i198 | 0;
       i202 = (HEAP32[i199 >> 2] | 0) - 1 | 0;
       if ((i202 | 0) != 0) {
        HEAP32[i199 >> 2] = i202;
        i203 = 1;
        break;
       }
       i202 = i198 - 4 | 0;
       if ((i202 | 0) == 0) {
        i203 = 1;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i202 >> 2] | 0) + 4 >> 2] & 63](i202);
       i203 = 1;
      } else if ((i201 | 0) == 0) {
       i202 = i195;
       i198 = i197 & 508;
       if ((i198 | 0) == 76) {
        i199 = HEAP32[i161 >> 2] | 0;
        __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i38, i202);
        i204 = HEAP32[i176 >> 2] | 0;
        HEAP32[i177 >> 2] = i204;
        if ((i204 | 0) != 0) {
         i205 = i204 | 0;
         HEAP32[i205 >> 2] = (HEAP32[i205 >> 2] | 0) + 2;
        }
        __ZN7WebCore11RenderStyle10setContentERKN3WTF6StringEb(i199, i37, i200);
        i199 = HEAP32[i177 >> 2] | 0;
        do {
         if ((i199 | 0) != 0) {
          i205 = i199 | 0;
          i204 = (HEAP32[i205 >> 2] | 0) - 2 | 0;
          if ((i204 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i199);
           break;
          } else {
           HEAP32[i205 >> 2] = i204;
           break;
          }
         }
        } while (0);
        i199 = HEAP32[i176 >> 2] | 0;
        if ((i199 | 0) == 0) {
         i203 = 1;
         break;
        }
        i204 = i199 | 0;
        i205 = (HEAP32[i204 >> 2] | 0) - 2 | 0;
        if ((i205 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i199);
         i203 = 1;
         break;
        } else {
         HEAP32[i204 >> 2] = i205;
         i203 = 1;
         break;
        }
       } else if ((i198 | 0) == 88) {
        i205 = (HEAP32[i161 >> 2] | 0) + 52 | 0;
        i204 = HEAP32[i205 >> 2] | 0;
        if ((i204 & 4032 | 0) == 0) {
         HEAP32[i205 >> 2] = i204 | 1048576;
        } else {
         i204 = (HEAP32[i186 >> 2] | 0) + 52 | 0;
         HEAP32[i204 >> 2] = HEAP32[i204 >> 2] | 1048576;
        }
        __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i41, i202);
        i204 = HEAP32[i178 >> 2] | 0;
        do {
         if ((i204 | 0) == 0) {
          HEAP32[i179 >> 2] = 0;
          i206 = 0;
         } else {
          if ((HEAP32[i204 + 16 >> 2] & 16 | 0) == 0) {
           __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i30, i204);
           i206 = HEAP32[i179 >> 2] | 0;
           break;
          } else {
           HEAP32[i179 >> 2] = i204;
           i205 = i204 | 0;
           HEAP32[i205 >> 2] = (HEAP32[i205 >> 2] | 0) + 2;
           i206 = i204;
           break;
          }
         }
        } while (0);
        HEAP32[i180 >> 2] = i206;
        __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i39, __ZN3WTF8nullAtomE, i40, __ZN3WTF8nullAtomE);
        i204 = HEAP32[i180 >> 2] | 0;
        do {
         if ((i204 | 0) != 0) {
          i202 = i204 | 0;
          i205 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
          if ((i205 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i204);
           break;
          } else {
           HEAP32[i202 >> 2] = i205;
           break;
          }
         }
        } while (0);
        i204 = HEAP32[i178 >> 2] | 0;
        do {
         if ((i204 | 0) != 0) {
          i205 = i204 | 0;
          i202 = (HEAP32[i205 >> 2] | 0) - 2 | 0;
          if ((i202 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i204);
           break;
          } else {
           HEAP32[i205 >> 2] = i202;
           break;
          }
         }
        } while (0);
        i204 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(HEAP32[i181 >> 2] | 0, i39) | 0;
        i202 = HEAP32[i161 >> 2] | 0;
        i205 = HEAP32[i204 >> 2] | 0;
        do {
         if ((i205 | 0) == 0) {
          i204 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
          HEAP32[i182 >> 2] = i204;
          if ((i204 | 0) != 0) {
           i199 = i204 | 0;
           HEAP32[i199 >> 2] = (HEAP32[i199 >> 2] | 0) + 2;
          }
          __ZN7WebCore11RenderStyle10setContentERKN3WTF6StringEb(i202, i183, i200);
          i199 = HEAP32[i182 >> 2] | 0;
          if ((i199 | 0) == 0) {
           break;
          }
          i204 = i199 | 0;
          i207 = (HEAP32[i204 >> 2] | 0) - 2 | 0;
          if ((i207 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i199);
           break;
          } else {
           HEAP32[i204 >> 2] = i207;
           break;
          }
         } else {
          HEAP32[i182 >> 2] = i205;
          i207 = i205 | 0;
          HEAP32[i207 >> 2] = (HEAP32[i207 >> 2] | 0) + 2;
          __ZN7WebCore11RenderStyle10setContentERKN3WTF6StringEb(i202, i183, i200);
          i207 = HEAP32[i182 >> 2] | 0;
          if ((i207 | 0) == 0) {
           break;
          }
          i204 = i207 | 0;
          i199 = (HEAP32[i204 >> 2] | 0) - 2 | 0;
          if ((i199 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i207);
           break;
          } else {
           HEAP32[i204 >> 2] = i199;
           break;
          }
         }
        } while (0);
        HEAP32[i43 >> 2] = HEAP32[(HEAP32[i184 >> 2] | 0) + 12 >> 2];
        __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i44, i185, i43, i43);
        __ZN7WebCore13QualifiedNameD1Ev(i39);
        i203 = 1;
        break;
       } else if ((i198 | 0) == 92) {
        i202 = HEAP32[i195 + 8 >> 2] | 0;
        HEAP32[i45 >> 2] = 80;
        i205 = HEAP32[i202 + 8 >> 2] | 0;
        do {
         if ((i205 | 0) == 0) {
          i208 = 0;
          i194 = 100;
         } else {
          if ((HEAP32[i205 + 4 >> 2] & 508 | 0) != 472) {
           i208 = 0;
           i194 = 100;
           break;
          }
          i199 = HEAP32[i205 + 8 >> 2] | 0;
          if ((i199 | 0) != 3) {
           i208 = i199;
           i194 = 100;
          }
         }
        } while (0);
        if ((i194 | 0) == 100) {
         i194 = 0;
         HEAP32[i45 >> 2] = i208 - 167;
        }
        i205 = HEAP32[i202 + 4 >> 2] | 0;
        if ((i205 | 0) == 0) {
         HEAP32[i187 >> 2] = 0;
        } else {
         __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i47, i205);
        }
        i205 = HEAP32[i202 + 12 >> 2] | 0;
        if ((i205 | 0) == 0) {
         HEAP32[i188 >> 2] = 0;
        } else {
         __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i48, i205);
        }
        __ZSt11make_uniqueIN7WebCore14CounterContentEJN3WTF6StringERNS0_14EListStyleTypeES3_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i46, i47, i45, i48);
        i205 = HEAP32[i188 >> 2] | 0;
        do {
         if ((i205 | 0) != 0) {
          i199 = i205 | 0;
          i204 = (HEAP32[i199 >> 2] | 0) - 2 | 0;
          if ((i204 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i205);
           break;
          } else {
           HEAP32[i199 >> 2] = i204;
           break;
          }
         }
        } while (0);
        i205 = HEAP32[i187 >> 2] | 0;
        do {
         if ((i205 | 0) != 0) {
          i202 = i205 | 0;
          i204 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
          if ((i204 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i205);
           break;
          } else {
           HEAP32[i202 >> 2] = i204;
           break;
          }
         }
        } while (0);
        i205 = HEAP32[i161 >> 2] | 0;
        i204 = HEAP32[i189 >> 2] | 0;
        HEAP32[i189 >> 2] = 0;
        HEAP32[i190 >> 2] = i204;
        __ZN7WebCore11RenderStyle10setContentENSt3__110unique_ptrINS_14CounterContentENS1_14default_deleteIS3_EEEEb(i205, i49, i200);
        i205 = HEAP32[i190 >> 2] | 0;
        HEAP32[i190 >> 2] = 0;
        if ((i205 | 0) != 0) {
         i204 = HEAP32[i205 + 8 >> 2] | 0;
         do {
          if ((i204 | 0) != 0) {
           i202 = i204 | 0;
           i199 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
           if ((i199 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i204);
            break;
           } else {
            HEAP32[i202 >> 2] = i199;
            break;
           }
          }
         } while (0);
         i204 = HEAP32[i205 >> 2] | 0;
         do {
          if ((i204 | 0) != 0) {
           i199 = i204 | 0;
           i202 = (HEAP32[i199 >> 2] | 0) - 2 | 0;
           if ((i202 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i204);
            break;
           } else {
            HEAP32[i199 >> 2] = i202;
            break;
           }
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i205);
        }
        HEAP32[i189 >> 2] = 0;
        i203 = 1;
        break;
       } else if ((i198 | 0) == 472) {
        i204 = HEAP32[i195 + 8 >> 2] | 0;
        if ((i204 | 0) == 350) {
         __ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb(HEAP32[i161 >> 2] | 0, 0, i200);
         i203 = 1;
         break;
        } else if ((i204 | 0) == 324) {
         __ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb(HEAP32[i161 >> 2] | 0, 1, i200);
         i203 = 1;
         break;
        } else if ((i204 | 0) == 348) {
         __ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb(HEAP32[i161 >> 2] | 0, 2, i200);
         i203 = 1;
         break;
        } else if ((i204 | 0) == 347) {
         __ZN7WebCore11RenderStyle10setContentENS_9QuoteTypeEb(HEAP32[i161 >> 2] | 0, 3, i200);
         i203 = 1;
         break;
        } else {
         i203 = i200;
         break;
        }
       } else {
        i203 = i200;
        break;
       }
      } else {
       i203 = i200;
      }
     } while (0);
     i191 = i203;
     i192 = i192 + 1 | 0;
    }
    if ((i194 | 0) == 35) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if (i191) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore11RenderStyle12clearContentEv(HEAP32[i161 >> 2] | 0);
    STACKTOP = i4;
    return;
   }
  case 170:
   {
    i192 = HEAP32[i162 + 4 >> 2] & 508;
    if ((i192 | 0) == 76) {
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i51, i162);
     i189 = i51 | 0;
     i190 = HEAP32[i189 >> 2] | 0;
     i187 = i50 | 0;
     HEAP32[i187 >> 2] = i190;
     if ((i190 | 0) != 0) {
      i188 = i190 | 0;
      HEAP32[i188 >> 2] = (HEAP32[i188 >> 2] | 0) + 2;
     }
     __ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE(i160, i50);
     i188 = HEAP32[i187 >> 2] | 0;
     do {
      if ((i188 | 0) != 0) {
       i187 = i188 | 0;
       i190 = (HEAP32[i187 >> 2] | 0) - 2 | 0;
       if ((i190 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i188);
        break;
       } else {
        HEAP32[i187 >> 2] = i190;
        break;
       }
      }
     } while (0);
     i188 = HEAP32[i189 >> 2] | 0;
     if ((i188 | 0) == 0) {
      break L40;
     }
     i191 = i188 | 0;
     i190 = (HEAP32[i191 >> 2] | 0) - 2 | 0;
     if ((i190 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i188);
      break L40;
     } else {
      HEAP32[i191 >> 2] = i190;
      break L40;
     }
    } else if ((i192 | 0) == 88) {
     i190 = i160 + 52 | 0;
     i191 = HEAP32[i190 >> 2] | 0;
     if ((i191 & 4032 | 0) == 0) {
      HEAP32[i190 >> 2] = i191 | 1048576;
     } else {
      i191 = (HEAP32[i1 + 324 >> 2] | 0) + 52 | 0;
      HEAP32[i191 >> 2] = HEAP32[i191 >> 2] | 1048576;
     }
     __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i54, i162);
     i191 = i54 | 0;
     i190 = HEAP32[i191 >> 2] | 0;
     do {
      if ((i190 | 0) == 0) {
       HEAP32[i29 >> 2] = 0;
       i209 = 0;
      } else {
       if ((HEAP32[i190 + 16 >> 2] & 16 | 0) == 0) {
        __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i29, i190);
        i209 = HEAP32[i29 >> 2] | 0;
        break;
       } else {
        HEAP32[i29 >> 2] = i190;
        i188 = i190 | 0;
        HEAP32[i188 >> 2] = (HEAP32[i188 >> 2] | 0) + 2;
        i209 = i190;
        break;
       }
      }
     } while (0);
     i190 = i53 | 0;
     HEAP32[i190 >> 2] = i209;
     __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i52, __ZN3WTF8nullAtomE, i53, __ZN3WTF8nullAtomE);
     i192 = HEAP32[i190 >> 2] | 0;
     do {
      if ((i192 | 0) != 0) {
       i190 = i192 | 0;
       i189 = (HEAP32[i190 >> 2] | 0) - 2 | 0;
       if ((i189 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i192);
        break;
       } else {
        HEAP32[i190 >> 2] = i189;
        break;
       }
      }
     } while (0);
     i192 = HEAP32[i191 >> 2] | 0;
     do {
      if ((i192 | 0) != 0) {
       i189 = i192 | 0;
       i190 = (HEAP32[i189 >> 2] | 0) - 2 | 0;
       if ((i190 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i192);
        break;
       } else {
        HEAP32[i189 >> 2] = i190;
        break;
       }
      }
     } while (0);
     i192 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(HEAP32[i153 >> 2] | 0, i52) | 0;
     i191 = HEAP32[i161 >> 2] | 0;
     i190 = HEAP32[i192 >> 2] | 0;
     i192 = i55 | 0;
     do {
      if ((i190 | 0) == 0) {
       i189 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
       HEAP32[i192 >> 2] = i189;
       if ((i189 | 0) != 0) {
        i188 = i189 | 0;
        HEAP32[i188 >> 2] = (HEAP32[i188 >> 2] | 0) + 2;
       }
       __ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE(i191, i55 | 0);
       i188 = HEAP32[i192 >> 2] | 0;
       if ((i188 | 0) == 0) {
        break;
       }
       i189 = i188 | 0;
       i187 = (HEAP32[i189 >> 2] | 0) - 2 | 0;
       if ((i187 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i188);
        break;
       } else {
        HEAP32[i189 >> 2] = i187;
        break;
       }
      } else {
       HEAP32[i192 >> 2] = i190;
       i187 = i190 | 0;
       HEAP32[i187 >> 2] = (HEAP32[i187 >> 2] | 0) + 2;
       __ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE(i191, i55 | 0);
       i187 = HEAP32[i192 >> 2] | 0;
       if ((i187 | 0) == 0) {
        break;
       }
       i189 = i187 | 0;
       i188 = (HEAP32[i189 >> 2] | 0) - 2 | 0;
       if ((i188 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i187);
        break;
       } else {
        HEAP32[i189 >> 2] = i188;
        break;
       }
      }
     } while (0);
     HEAP32[i56 >> 2] = HEAP32[(HEAP32[i52 >> 2] | 0) + 12 >> 2];
     __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i57, i1 + 48 | 0, i56, i56);
     __ZN7WebCore13QualifiedNameD1Ev(i52);
     break L40;
    } else {
     __ZN7WebCore11RenderStyle17setContentAltTextERKN3WTF6StringE(i160, __ZN3WTF9emptyAtomE | 0);
     break L40;
    }
    break;
   }
  case 124:
   {
    break;
   }
  case 4:
   {
    if (i156) {
     i192 = i1 + 324 | 0;
     __ZN7WebCore15FontDescriptionC2ERKS0_(i67, __ZNK7WebCore11RenderStyle15fontDescriptionEv(HEAP32[i192 >> 2] | 0) | 0);
     i191 = HEAP32[i161 >> 2] | 0;
     i190 = __ZNK7WebCore11RenderStyle19specifiedLineHeightEv(HEAP32[i192 >> 2] | 0) | 0;
     i192 = HEAP32[i190 >> 2] | 0;
     i188 = HEAP32[i190 + 4 >> 2] | 0;
     HEAP32[i68 >> 2] = i192;
     HEAP32[i68 + 4 >> 2] = i188;
     if ((i192 & 0 | 0) == 0 & (i188 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i69);
     }
     __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i191, i69);
     if ((HEAP8[i69 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i69);
     }
     HEAP32[i1 + 388 >> 2] = 0;
     i191 = (__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(HEAP32[i161 >> 2] | 0, i67) | 0) & 1;
     i188 = i1 + 392 | 0;
     HEAP8[i188] = HEAP8[i188] & 1 | i191;
     __ZN7WebCore15FontDescriptionD2Ev(i67);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i191 = __ZNK7WebCore8Document8settingsEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
     if ((i191 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     __ZN7WebCore13StyleResolver19initializeFontStyleEPNS_8SettingsE(i1, i191);
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) == 0) {
     if ((i158 | 0) != 106496) {
      STACKTOP = i4;
      return;
     }
     i191 = HEAP32[i3 + 8 >> 2] | 0;
     if ((i191 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i188 = i3 + 12 | 0;
     if ((HEAP32[i188 >> 2] | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i192 = i3 + 16 | 0;
     if ((HEAP32[i192 >> 2] | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i190 = i3 + 20 | 0;
     if ((HEAP32[i190 >> 2] | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i189 = i3 + 24 | 0;
     if ((HEAP32[i189 >> 2] | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i187 = i3 + 28 | 0;
     if ((HEAP32[i187 >> 2] | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 7, i191 | 0);
     __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 8, HEAP32[i188 >> 2] | 0);
     __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 9, HEAP32[i192 >> 2] | 0);
     __ZN7WebCore13StyleResolver10updateFontEv(i1);
     __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 6, HEAP32[i190 >> 2] | 0);
     HEAP32[i1 + 388 >> 2] = HEAP32[i189 >> 2];
     __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 5, HEAP32[i187 >> 2] | 0);
     STACKTOP = i4;
     return;
    }
    HEAP8[i70 + 4 | 0] = 0;
    i187 = i70 + 5 | 0;
    HEAP8[i187] = 2;
    HEAP8[i70 + 6 | 0] = 1;
    HEAPF32[i70 >> 2] = +-100;
    __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i160, i70);
    if ((HEAP8[i187] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i70);
    }
    HEAP32[i1 + 388 >> 2] = 0;
    i187 = __ZN3WTF10fastMallocEj(12) | 0;
    i189 = i71 | 0;
    HEAP32[i189 >> 2] = i187 + 8;
    HEAP32[i187 >> 2] = 1;
    HEAP32[(HEAP32[i189 >> 2] | 0) - 4 >> 2] = 1;
    i187 = HEAP32[i189 >> 2] | 0;
    if ((i187 | 0) == 0) {
     i210 = 0;
    } else {
     i210 = i187 + (HEAP32[i187 - 4 >> 2] << 2) | 0;
    }
    _memset(i187 | 0, 0, i210 - i187 | 0) | 0;
    HEAP32[i71 + 4 >> 2] = 0;
    i187 = i71 + 8 | 0;
    HEAPF32[i187 >> 2] = +0;
    i189 = i71 + 12 | 0;
    HEAPF32[i189 >> 2] = +0;
    i190 = i71 + 16 | 0;
    HEAP32[i190 >> 2] = 384;
    i192 = i71 + 20 | 0;
    HEAP32[i192 >> 2] = HEAP32[i192 >> 2] & -4096;
    __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i72, 0);
    i192 = i72 | 0;
    i188 = HEAP32[i192 >> 2] | 0;
    if ((HEAP32[i162 + 4 >> 2] & 508 | 0) == 472) {
     i211 = HEAP32[i162 + 8 >> 2] | 0;
    } else {
     i211 = 0;
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i188 >> 2] | 0) + 88 >> 2] & 7](i188, i211, i71);
    i188 = HEAP32[i192 >> 2] | 0;
    do {
     if ((i188 | 0) != 0) {
      i192 = i188 + 4 | 0;
      i191 = i192 | 0;
      i185 = (HEAP32[i191 >> 2] | 0) - 1 | 0;
      if ((i185 | 0) != 0) {
       HEAP32[i191 >> 2] = i185;
       break;
      }
      i185 = i192 - 4 | 0;
      if ((i185 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i185 >> 2] | 0) + 4 >> 2] & 63](i185);
     }
    } while (0);
    do {
     if ((HEAP32[i190 >> 2] & 64 | 0) != 0) {
      i188 = i1 + 216 | 0;
      i185 = __ZNK7WebCore8Document8settingsEv(HEAP32[i188 >> 2] | 0) | 0;
      if ((i185 | 0) == 0) {
       break;
      }
      i192 = (__ZNK7WebCore8Settings17fontRenderingModeEv(i185) | 0) << 19 & 524288;
      i191 = HEAP32[i190 >> 2] | 0;
      i184 = i191 & -524289 | i192;
      HEAP32[i190 >> 2] = i184;
      i192 = HEAP32[i188 >> 2] | 0;
      if ((HEAP8[i192 + 660 | 0] & 1) == 0) {
       i212 = (((HEAPU8[i185 + 194 | 0] | 0) >>> 2 & 1 ^ 1) & 255) << 18;
      } else {
       i212 = 262144;
      }
      HEAP32[i190 >> 2] = i184 & -262145 | i212;
      i184 = HEAP32[i1 + 308 >> 2] | 0;
      if ((i184 | 0) == 0) {
       i213 = 0;
      } else {
       i213 = (HEAP32[i184 + 12 >> 2] & 32 | 0) != 0;
      }
      d214 = +__ZN7WebCore5Style33computedFontSizeFromSpecifiedSizeEfbbPKNS_11RenderStyleERKNS_8DocumentE(+HEAPF32[i187 >> 2], (i191 & 64 | 0) != 0, i213, HEAP32[i161 >> 2] | 0, i192);
      do {
       if (d214 < 3.4028234663852886e+38) {
        if (d214 <= -3.4028234663852886e+38) {
         d215 = -3.4028234663852886e+38;
         break;
        }
        d215 = d214;
       } else {
        d215 = 3.4028234663852886e+38;
       }
      } while (0);
      HEAPF32[i189 >> 2] = d215;
      i192 = (__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(HEAP32[i161 >> 2] | 0, i71) | 0) & 1;
      i191 = i1 + 392 | 0;
      HEAP8[i191] = HEAP8[i191] & 1 | i192;
     }
    } while (0);
    __ZN7WebCore15FontDescriptionD2Ev(i71);
    STACKTOP = i4;
    return;
   }
  case 146:
  case 67:
  case 218:
   {
    if (i156) {
     i189 = i1 + 324 | 0;
     i187 = HEAP32[i189 >> 2] | 0;
     if ((i2 | 0) == 146) {
      if ((HEAP32[(HEAP32[i187 + 24 >> 2] | 0) + 60 >> 2] | 0) == 0) {
       HEAP32[i73 >> 2] = 0;
      } else {
       i190 = __ZN3WTF10fastMallocEj(36) | 0;
       __ZN7WebCore10ShadowDataC1ERKS0_(i190, HEAP32[(HEAP32[(HEAP32[i189 >> 2] | 0) + 24 >> 2] | 0) + 60 >> 2] | 0);
       HEAP32[i73 >> 2] = i190;
      }
      __ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i160, i73, 0);
      i190 = HEAP32[i73 >> 2] | 0;
      if ((i190 | 0) == 0) {
       STACKTOP = i4;
       return;
      }
      __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i190 + 32 | 0);
      __ZN3WTF8fastFreeEPv(i190);
      STACKTOP = i4;
      return;
     } else {
      if ((HEAP32[(HEAP32[i187 + 20 >> 2] | 0) + 100 >> 2] | 0) == 0) {
       HEAP32[i74 >> 2] = 0;
      } else {
       i187 = __ZN3WTF10fastMallocEj(36) | 0;
       __ZN7WebCore10ShadowDataC1ERKS0_(i187, HEAP32[(HEAP32[(HEAP32[i189 >> 2] | 0) + 20 >> 2] | 0) + 100 >> 2] | 0);
       HEAP32[i74 >> 2] = i187;
      }
      __ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i160, i74, 0);
      i187 = HEAP32[i74 >> 2] | 0;
      if ((i187 | 0) == 0) {
       STACKTOP = i4;
       return;
      }
      __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i187 + 32 | 0);
      __ZN3WTF8fastFreeEPv(i187);
      STACKTOP = i4;
      return;
     }
    }
    if (!((i162 | 0) == 0 & (i159 ^ 1))) {
     if ((i2 | 0) == 146) {
      i187 = i75 | 0;
      HEAP32[i187 >> 2] = 0;
      __ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i160, i75, 0);
      i189 = HEAP32[i187 >> 2] | 0;
      if ((i189 | 0) == 0) {
       STACKTOP = i4;
       return;
      }
      __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i189 + 32 | 0);
      __ZN3WTF8fastFreeEPv(i189);
      STACKTOP = i4;
      return;
     } else {
      i189 = i76 | 0;
      HEAP32[i189 >> 2] = 0;
      __ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i160, i76, 0);
      i187 = HEAP32[i189 >> 2] | 0;
      if ((i187 | 0) == 0) {
       STACKTOP = i4;
       return;
      }
      __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i187 + 32 | 0);
      __ZN3WTF8fastFreeEPv(i187);
      STACKTOP = i4;
      return;
     }
    }
    if ((i155 & 491520) >>> 0 <= 221184 >>> 0) {
     STACKTOP = i4;
     return;
    }
    if ((i3 | 0) == 0) {
     i216 = 0;
    } else {
     i216 = i3;
    }
    i187 = (i216 | 0) == 0;
    i189 = i216 + 16 | 0;
    i190 = i216 + 8 | 0;
    i192 = i1 + 328 | 0;
    i191 = i1 + 216 | 0;
    i184 = i16 + 4 | 0;
    i185 = i17 | 0;
    i188 = i13 + 4 | 0;
    i182 = i14 | 0;
    i183 = i78 | 0;
    i181 = i78 + 4 | 0;
    i178 = (i2 | 0) == 218 | 0;
    i180 = (i2 | 0) == 146;
    i179 = i79 | 0;
    i186 = i80 | 0;
    i176 = i77 | 0;
    i177 = i77 + 4 | 0;
    i175 = i8 + 4 | 0;
    i170 = i9 | 0;
    i172 = i11 + 4 | 0;
    i171 = i12 | 0;
    i174 = 0;
    while (1) {
     if (i187) {
      i217 = 0;
     } else {
      i217 = HEAP32[i189 >> 2] | 0;
     }
     if (i174 >>> 0 >= i217 >>> 0) {
      i194 = 983;
      break;
     }
     if ((HEAP32[i189 >> 2] | 0) >>> 0 <= i174 >>> 0) {
      i194 = 338;
      break;
     }
     i173 = HEAP32[(HEAP32[i190 >> 2] | 0) + (i174 << 2) >> 2] | 0;
     do {
      if ((HEAP32[i173 + 4 >> 2] & 516096 | 0) == 155648) {
       i169 = i173 + 8 | 0;
       i168 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i169 >> 2] | 0, HEAP32[i161 >> 2] | 0, HEAP32[i192 >> 2] | 0, d165, 0) | 0;
       i167 = (HEAP32[i169 >> 2] | 0) + 4 | 0;
       do {
        if ((((HEAP32[i167 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
         __ZNK7WebCore10RenderView12viewportSizeEv(i16, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i169 = ~~(+(Math_imul(HEAP32[i184 >> 2] | 0, i168) | 0) / +100);
         __ZNK7WebCore10RenderView12viewportSizeEv(i17, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i195 = ~~(+(Math_imul(HEAP32[i185 >> 2] | 0, i168) | 0) / +100);
         i197 = HEAP32[i167 >> 2] & 508;
         if ((i197 | 0) == 108) {
          i218 = i169;
          break;
         }
         if ((i197 | 0) == 116) {
          i218 = (i195 | 0) < (i169 | 0) ? i169 : i195;
          break;
         } else if ((i197 | 0) == 104) {
          i218 = i195;
          break;
         }
         if ((i197 | 0) != 112) {
          i218 = 0;
          break;
         }
         i218 = (i169 | 0) < (i195 | 0) ? i169 : i195;
        } else {
         i218 = i168;
        }
       } while (0);
       i168 = i173 + 12 | 0;
       i167 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i168 >> 2] | 0, HEAP32[i161 >> 2] | 0, HEAP32[i192 >> 2] | 0, d165, 0) | 0;
       i198 = (HEAP32[i168 >> 2] | 0) + 4 | 0;
       do {
        if ((((HEAP32[i198 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
         __ZNK7WebCore10RenderView12viewportSizeEv(i13, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i168 = ~~(+(Math_imul(HEAP32[i188 >> 2] | 0, i167) | 0) / +100);
         __ZNK7WebCore10RenderView12viewportSizeEv(i14, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i205 = ~~(+(Math_imul(HEAP32[i182 >> 2] | 0, i167) | 0) / +100);
         i195 = HEAP32[i198 >> 2] & 508;
         if ((i195 | 0) == 108) {
          i219 = i168;
          break;
         }
         if ((i195 | 0) == 116) {
          i219 = (i205 | 0) < (i168 | 0) ? i168 : i205;
          break;
         } else if ((i195 | 0) == 104) {
          i219 = i205;
          break;
         }
         if ((i195 | 0) != 112) {
          i219 = 0;
          break;
         }
         i219 = (i168 | 0) < (i205 | 0) ? i168 : i205;
        } else {
         i219 = i167;
        }
       } while (0);
       i167 = i173 + 16 | 0;
       i198 = HEAP32[i167 >> 2] | 0;
       do {
        if ((i198 | 0) == 0) {
         i220 = 0;
        } else {
         i205 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(i198, HEAP32[i161 >> 2] | 0, HEAP32[i192 >> 2] | 0, d165, 0) | 0;
         i168 = HEAP32[i167 >> 2] | 0;
         if ((i168 | 0) == 0) {
          i220 = i205;
          break;
         }
         i195 = i168 + 4 | 0;
         if ((((HEAP32[i195 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 >= 4 >>> 0) {
          i220 = i205;
          break;
         }
         __ZNK7WebCore10RenderView12viewportSizeEv(i11, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i168 = ~~(+(Math_imul(HEAP32[i172 >> 2] | 0, i205) | 0) / +100);
         __ZNK7WebCore10RenderView12viewportSizeEv(i12, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i169 = ~~(+(Math_imul(HEAP32[i171 >> 2] | 0, i205) | 0) / +100);
         i205 = HEAP32[i195 >> 2] & 508;
         if ((i205 | 0) == 108) {
          i220 = i168;
          break;
         }
         if ((i205 | 0) == 116) {
          i220 = (i169 | 0) < (i168 | 0) ? i168 : i169;
          break;
         } else if ((i205 | 0) == 104) {
          i220 = i169;
          break;
         }
         if ((i205 | 0) != 112) {
          i220 = 0;
          break;
         }
         i220 = (i168 | 0) < (i169 | 0) ? i168 : i169;
        }
       } while (0);
       i167 = i173 + 20 | 0;
       i198 = HEAP32[i167 >> 2] | 0;
       do {
        if ((i198 | 0) == 0) {
         i221 = 0;
        } else {
         i169 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(i198, HEAP32[i161 >> 2] | 0, HEAP32[i192 >> 2] | 0, d165, 0) | 0;
         i168 = HEAP32[i167 >> 2] | 0;
         if ((i168 | 0) == 0) {
          i221 = i169;
          break;
         }
         i205 = i168 + 4 | 0;
         if ((((HEAP32[i205 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 >= 4 >>> 0) {
          i221 = i169;
          break;
         }
         __ZNK7WebCore10RenderView12viewportSizeEv(i8, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i168 = ~~(+(Math_imul(HEAP32[i175 >> 2] | 0, i169) | 0) / +100);
         __ZNK7WebCore10RenderView12viewportSizeEv(i9, HEAP32[(HEAP32[i191 >> 2] | 0) + 1584 >> 2] | 0);
         i195 = ~~(+(Math_imul(HEAP32[i170 >> 2] | 0, i169) | 0) / +100);
         i169 = HEAP32[i205 >> 2] & 508;
         if ((i169 | 0) == 108) {
          i221 = i168;
          break;
         }
         if ((i169 | 0) == 116) {
          i221 = (i195 | 0) < (i168 | 0) ? i168 : i195;
          break;
         } else if ((i169 | 0) == 104) {
          i221 = i195;
          break;
         }
         if ((i169 | 0) != 112) {
          i221 = 0;
          break;
         }
         i221 = (i168 | 0) < (i195 | 0) ? i168 : i195;
        }
       } while (0);
       i167 = HEAP32[i173 + 24 >> 2] | 0;
       do {
        if ((i167 | 0) == 0) {
         i222 = 0;
        } else {
         if ((HEAP32[i167 + 4 >> 2] & 508 | 0) != 472) {
          i222 = 0;
          break;
         }
         i222 = (HEAP32[i167 + 8 >> 2] | 0) == 5 | 0;
        }
       } while (0);
       i167 = HEAP32[i173 + 28 >> 2] | 0;
       do {
        if ((i167 | 0) == 0) {
         i198 = HEAP32[i161 >> 2] | 0;
         if ((i198 | 0) == 0) {
          i195 = __ZN3WTF10fastMallocEj(36) | 0;
          i223 = 0;
          i224 = 0;
          i225 = 1;
          i226 = 0;
          i227 = i195;
          i228 = i195;
          break;
         } else {
          __ZNK7WebCore11RenderStyle5colorEv(i78, i198);
          i229 = HEAP32[i183 >> 2] | 0;
          i230 = HEAP8[i181] | 0;
          i194 = 376;
          break;
         }
        } else {
         __ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb(i77, i1, i167, 0);
         i229 = HEAP32[i176 >> 2] | 0;
         i230 = HEAP8[i177] | 0;
         i194 = 376;
        }
       } while (0);
       do {
        if ((i194 | 0) == 376) {
         i194 = 0;
         i167 = __ZN3WTF10fastMallocEj(36) | 0;
         i198 = i167;
         if ((i230 & 1) == 0) {
          i223 = 0;
          i224 = 0;
          i225 = 1;
          i226 = 0;
          i227 = i167;
          i228 = i198;
          break;
         }
         i223 = 0;
         i224 = i229;
         i225 = i230 & 255;
         i226 = 0;
         i227 = i167;
         i228 = i198;
        }
       } while (0);
       i198 = i227;
       HEAP32[i198 >> 2] = i218;
       HEAP32[i198 + 4 >> 2] = i219;
       HEAP32[i227 + 8 >> 2] = i220;
       HEAP32[i227 + 12 >> 2] = i221;
       i198 = i227 + 16 | 0;
       HEAP32[i198 >> 2] = i226 | i224;
       HEAP32[i198 + 4 >> 2] = i225 | i223;
       HEAP32[i227 + 24 >> 2] = i222;
       HEAP8[i227 + 28 | 0] = i178;
       HEAP32[i227 + 32 >> 2] = 0;
       i198 = HEAP32[i161 >> 2] | 0;
       if (i180) {
        HEAP32[i179 >> 2] = i228;
        __ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i198, i79, (i174 | 0) != 0);
        i167 = HEAP32[i179 >> 2] | 0;
        if ((i167 | 0) == 0) {
         break;
        }
        __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i167 + 32 | 0);
        __ZN3WTF8fastFreeEPv(i167);
        break;
       } else {
        HEAP32[i186 >> 2] = i228;
        __ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i198, i80, (i174 | 0) != 0);
        i198 = HEAP32[i186 >> 2] | 0;
        if ((i198 | 0) == 0) {
         break;
        }
        __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i198 + 32 | 0);
        __ZN3WTF8fastFreeEPv(i198);
        break;
       }
      }
     } while (0);
     i174 = i174 + 1 | 0;
    }
    if ((i194 | 0) == 338) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i194 | 0) == 983) {
     STACKTOP = i4;
     return;
    }
    break;
   }
  case 217:
   {
    if (i156) {
     i174 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0;
     i186 = i81 | 0;
     HEAP32[i186 >> 2] = i174;
     if ((i174 | 0) != 0) {
      i179 = i174 | 0;
      HEAP32[i179 >> 2] = (HEAP32[i179 >> 2] | 0) + 1;
     }
     __ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE(i160, i81);
     i179 = HEAP32[i186 >> 2] | 0;
     if ((i179 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i186 = i179 | 0;
     i174 = i179 | 0;
     i180 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
     if ((i180 | 0) != 0) {
      HEAP32[i174 >> 2] = i180;
      STACKTOP = i4;
      return;
     }
     __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i186 + 16 >> 2] | 0);
     if ((HEAP8[i179 + 13 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i186 + 8 | 0);
     }
     __ZN3WTF8fastFreeEPv(i179);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i179 = i82 | 0;
     HEAP32[i179 >> 2] = 0;
     __ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE(i160, i82);
     i186 = HEAP32[i179 >> 2] | 0;
     if ((i186 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i179 = i186 | 0;
     i180 = i186 | 0;
     i174 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
     if ((i174 | 0) != 0) {
      HEAP32[i180 >> 2] = i174;
      STACKTOP = i4;
      return;
     }
     __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i179 + 16 >> 2] | 0);
     if ((HEAP8[i186 + 13 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i179 + 8 | 0);
     }
     __ZN3WTF8fastFreeEPv(i186);
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) != 0) {
     i186 = i83 | 0;
     HEAP32[i186 >> 2] = 0;
     __ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE(i160, i83);
     i179 = HEAP32[i186 >> 2] | 0;
     if ((i179 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i186 = i179 | 0;
     i174 = i179 | 0;
     i180 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
     if ((i180 | 0) != 0) {
      HEAP32[i174 >> 2] = i180;
      STACKTOP = i4;
      return;
     }
     __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i186 + 16 >> 2] | 0);
     if ((HEAP8[i179 + 13 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i186 + 8 | 0);
     }
     __ZN3WTF8fastFreeEPv(i179);
     STACKTOP = i4;
     return;
    }
    if ((i158 | 0) != 147456) {
     STACKTOP = i4;
     return;
    }
    i179 = __ZN3WTF10fastMallocEj(20) | 0;
    i186 = i179;
    HEAP32[i179 >> 2] = 1;
    i180 = i179 + 4 | 0;
    HEAP32[i180 >> 2] = 0;
    i174 = i179 + 8 | 0;
    HEAP32[i174 >> 2] = 0;
    HEAP8[i179 + 12 | 0] = 0;
    HEAP8[i179 + 13 | 0] = 3;
    HEAP8[i179 + 14 | 0] = 0;
    i178 = i179 + 16 | 0;
    i179 = i178;
    __ZN7WebCore14NinePieceImageC1Ev(i179);
    __ZN7WebCore14NinePieceImage15setMaskDefaultsEv(i179);
    i179 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 8 >> 2] | 0;
    if ((i179 | 0) == 320) {
     i231 = 0;
    } else if ((i179 | 0) == 152) {
     i231 = 2;
    } else if ((i179 | 0) == 153) {
     i231 = 3;
    } else if ((i179 | 0) == 314) {
     i231 = 1;
    } else {
     i231 = 0;
    }
    HEAP32[i180 >> 2] = i231;
    i180 = HEAP32[i3 + 12 >> 2] | 0;
    do {
     if ((i180 | 0) != 0) {
      __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi41EEENS_6LengthEPKNS_11RenderStyleES5_db(i85, i180, HEAP32[i161 >> 2] | 0, HEAP32[i1 + 328 >> 2] | 0, d165, 0);
      if ((i174 | 0) != (i84 | 0)) {
       i179 = i174;
       i177 = HEAP32[i84 + 4 >> 2] | 0;
       HEAP32[i179 >> 2] = HEAP32[i84 >> 2];
       HEAP32[i179 + 4 >> 2] = i177;
       HEAP8[i85 + 5 | 0] = 0;
       break;
      }
      if ((HEAP8[i85 + 5 | 0] | 0) != 10) {
       break;
      }
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i85);
     }
    } while (0);
    __ZN7WebCore14NinePieceImageC1Ev(i86);
    __ZN7WebCore14NinePieceImage15setMaskDefaultsEv(i86);
    __ZN7WebCore13CSSToStyleMap17mapNinePieceImageENS_13CSSPropertyIDEPNS_8CSSValueERNS_14NinePieceImageE(i1 + 264 | 0, 217, HEAP32[i3 + 16 >> 2] | 0, i86);
    i174 = i86 | 0;
    i180 = HEAP32[i174 >> 2] | 0;
    i177 = i180 | 0;
    HEAP32[i177 >> 2] = (HEAP32[i177 >> 2] | 0) + 1;
    i177 = i178;
    __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i177 >> 2] | 0);
    HEAP32[i177 >> 2] = i180;
    i180 = HEAP32[i161 >> 2] | 0;
    i177 = i87 | 0;
    HEAP32[i177 >> 2] = i186;
    __ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE(i180, i87);
    i180 = HEAP32[i177 >> 2] | 0;
    do {
     if ((i180 | 0) != 0) {
      i177 = i180 | 0;
      i179 = i180 | 0;
      i176 = (HEAP32[i179 >> 2] | 0) - 1 | 0;
      if ((i176 | 0) != 0) {
       HEAP32[i179 >> 2] = i176;
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i177 + 16 >> 2] | 0);
      if ((HEAP8[i180 + 13 | 0] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i177 + 8 | 0);
      }
      __ZN3WTF8fastFreeEPv(i180);
     }
    } while (0);
    __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i174 >> 2] | 0);
    STACKTOP = i4;
    return;
   }
  case 15:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE(i160, (HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 24 >> 2] | 0) + 108 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     __ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE(i160, __ZN3WTF8nullAtomE);
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    do {
     if ((HEAP32[i162 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i162 + 8 >> 2] | 0) != 269) {
       i194 = 433;
       break;
      }
      __ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE(i160, __ZN3WTF8nullAtomE);
     } else {
      i194 = 433;
     }
    } while (0);
    do {
     if ((i194 | 0) == 433) {
      __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i89, i162);
      i174 = i89 | 0;
      i180 = HEAP32[i174 >> 2] | 0;
      do {
       if ((i180 | 0) == 0) {
        i186 = i5 | 0;
        HEAP32[i186 >> 2] = 0;
        i232 = i186;
       } else {
        if ((HEAP32[i180 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i180);
         i232 = i5 | 0;
         break;
        } else {
         i186 = i5 | 0;
         HEAP32[i186 >> 2] = i180;
         i178 = i180 | 0;
         HEAP32[i178 >> 2] = (HEAP32[i178 >> 2] | 0) + 2;
         i232 = i186;
         break;
        }
       }
      } while (0);
      i180 = i88 | 0;
      HEAP32[i180 >> 2] = HEAP32[i232 >> 2];
      __ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE(i160, i88);
      i186 = HEAP32[i180 >> 2] | 0;
      do {
       if ((i186 | 0) != 0) {
        i180 = i186 | 0;
        i178 = (HEAP32[i180 >> 2] | 0) - 2 | 0;
        if ((i178 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i186);
         break;
        } else {
         HEAP32[i180 >> 2] = i178;
         break;
        }
       }
      } while (0);
      i186 = HEAP32[i174 >> 2] | 0;
      if ((i186 | 0) == 0) {
       break;
      }
      i178 = i186 | 0;
      i180 = (HEAP32[i178 >> 2] | 0) - 2 | 0;
      if ((i180 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i186);
       break;
      } else {
       HEAP32[i178 >> 2] = i180;
       break;
      }
     }
    } while (0);
    __ZN7WebCore15FontDescriptionC2ERKS0_(i90, __ZNK7WebCore11RenderStyle15fontDescriptionEv(HEAP32[i161 >> 2] | 0) | 0);
    i180 = i90 + 20 | 0;
    i178 = (__ZN7WebCore34localeToScriptCodeForFontSelectionERKN3WTF6StringE((HEAP32[(HEAP32[i161 >> 2] | 0) + 24 >> 2] | 0) + 108 | 0) | 0) << 5 & 4064;
    HEAP32[i180 >> 2] = HEAP32[i180 >> 2] & -4065 | i178;
    i178 = (__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(HEAP32[i161 >> 2] | 0, i90) | 0) & 1;
    i180 = i1 + 392 | 0;
    HEAP8[i180] = HEAP8[i180] & 1 | i178;
    __ZN7WebCore15FontDescriptionD2Ev(i90);
    STACKTOP = i4;
    return;
   }
  case 372:
   {
    if (i156) {
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i91, (HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 44 | 0);
     __ZN7WebCore11RenderStyle19setDashboardRegionsEN3WTF6VectorINS_20StyleDashboardRegionELj0ENS1_15CrashOnOverflowEEE(i160, i91);
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i91);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i92, __ZN7WebCore11RenderStyle23initialDashboardRegionsEv() | 0);
     __ZN7WebCore11RenderStyle19setDashboardRegionsEN3WTF6VectorINS_20StyleDashboardRegionELj0ENS1_15CrashOnOverflowEEE(i160, i92);
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i92);
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i178 = HEAP32[i162 + 4 >> 2] & 508;
    if ((i178 | 0) == 472) {
     if ((HEAP32[i162 + 8 >> 2] | 0) != 3) {
      STACKTOP = i4;
      return;
     }
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i93, __ZN7WebCore11RenderStyle20noneDashboardRegionsEv() | 0);
     __ZN7WebCore11RenderStyle19setDashboardRegionsEN3WTF6VectorINS_20StyleDashboardRegionELj0ENS1_15CrashOnOverflowEEE(i160, i93);
     __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i93);
     STACKTOP = i4;
     return;
    } else if ((i178 | 0) == 404) {
     i178 = HEAP32[i162 + 8 >> 2] | 0;
     if ((i178 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i180 = i1 + 328 | 0;
     i186 = i94;
     i177 = i95 + 4 | 0;
     i176 = i95 + 5 | 0;
     i179 = i95 + 6 | 0;
     i181 = i96;
     i183 = i97 + 4 | 0;
     i170 = i97 + 5 | 0;
     i191 = i97 + 6 | 0;
     i175 = i98;
     i192 = i99 + 4 | 0;
     i171 = i99 + 5 | 0;
     i172 = i99 + 6 | 0;
     i182 = i100;
     i188 = i101 + 4 | 0;
     i185 = i101 + 5 | 0;
     i184 = i101 + 6 | 0;
     i190 = i102;
     i189 = i103 + 5 | 0;
     i187 = i104;
     i173 = i105 + 5 | 0;
     i198 = i106;
     i167 = i107 + 5 | 0;
     i195 = i108;
     i168 = i109 + 5 | 0;
     i169 = i125 + 5 | 0;
     i205 = i123 + 5 | 0;
     i197 = i121 + 5 | 0;
     i201 = i119 + 5 | 0;
     i196 = i117 + 5 | 0;
     i204 = i115 + 5 | 0;
     i202 = i113 + 5 | 0;
     i199 = i111 + 5 | 0;
     i207 = i178;
     while (1) {
      i233 = HEAP32[i207 >> 2] | 0;
      if ((i233 | 0) == 0) {
       HEAP32[i186 >> 2] = 0;
       HEAP8[i177] = 0;
       HEAP8[i176] = 15;
       HEAP8[i179] = 0;
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i95, i233, HEAP32[i161 >> 2] | 0, HEAP32[i180 >> 2] | 0, +1, 0);
      }
      i233 = HEAP32[i207 + 4 >> 2] | 0;
      if ((i233 | 0) == 0) {
       HEAP32[i181 >> 2] = 0;
       HEAP8[i183] = 0;
       HEAP8[i170] = 15;
       HEAP8[i191] = 0;
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i97, i233, HEAP32[i161 >> 2] | 0, HEAP32[i180 >> 2] | 0, +1, 0);
      }
      i233 = HEAP32[i207 + 8 >> 2] | 0;
      if ((i233 | 0) == 0) {
       HEAP32[i175 >> 2] = 0;
       HEAP8[i192] = 0;
       HEAP8[i171] = 15;
       HEAP8[i172] = 0;
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i99, i233, HEAP32[i161 >> 2] | 0, HEAP32[i180 >> 2] | 0, +1, 0);
      }
      i233 = HEAP32[i207 + 12 >> 2] | 0;
      if ((i233 | 0) == 0) {
       HEAP32[i182 >> 2] = 0;
       HEAP8[i188] = 0;
       HEAP8[i185] = 15;
       HEAP8[i184] = 0;
      } else {
       __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i101, i233, HEAP32[i161 >> 2] | 0, HEAP32[i180 >> 2] | 0, +1, 0);
      }
      if ((HEAP8[i176] | 0) == 15) {
       _memset(i190 | 0, 0, 7) | 0;
       i233 = HEAP32[i102 + 4 >> 2] | 0;
       HEAP32[i94 >> 2] = HEAP32[i102 >> 2];
       HEAP32[i94 + 4 >> 2] = i233;
       HEAP8[i189] = 0;
      }
      if ((HEAP8[i170] | 0) == 15) {
       _memset(i187 | 0, 0, 7) | 0;
       i233 = HEAP32[i104 + 4 >> 2] | 0;
       HEAP32[i96 >> 2] = HEAP32[i104 >> 2];
       HEAP32[i96 + 4 >> 2] = i233;
       HEAP8[i173] = 0;
      }
      if ((HEAP8[i171] | 0) == 15) {
       _memset(i198 | 0, 0, 7) | 0;
       i233 = HEAP32[i106 + 4 >> 2] | 0;
       HEAP32[i98 >> 2] = HEAP32[i106 >> 2];
       HEAP32[i98 + 4 >> 2] = i233;
       HEAP8[i167] = 0;
      }
      if ((HEAP8[i185] | 0) == 15) {
       _memset(i195 | 0, 0, 7) | 0;
       i233 = HEAP32[i108 + 4 >> 2] | 0;
       HEAP32[i100 >> 2] = HEAP32[i108 >> 2];
       HEAP32[i100 + 4 >> 2] = i233;
       HEAP8[i168] = 0;
      }
      i233 = HEAP8[i207 + 32 | 0] | 0;
      do {
       if ((i233 & 1) == 0) {
        if ((i233 & 2) == 0) {
         break;
        }
        i234 = HEAP32[i161 >> 2] | 0;
        i235 = HEAP32[i94 >> 2] | 0;
        i236 = HEAP32[i94 + 4 >> 2] | 0;
        HEAP32[i118 >> 2] = i235;
        HEAP32[i118 + 4 >> 2] = i236;
        if ((i235 & 0 | 0) == 0 & (i236 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i119);
        }
        i236 = HEAP32[i96 >> 2] | 0;
        i235 = HEAP32[i96 + 4 >> 2] | 0;
        HEAP32[i120 >> 2] = i236;
        HEAP32[i120 + 4 >> 2] = i235;
        if ((i236 & 0 | 0) == 0 & (i235 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i121);
        }
        i235 = HEAP32[i98 >> 2] | 0;
        i236 = HEAP32[i98 + 4 >> 2] | 0;
        HEAP32[i122 >> 2] = i235;
        HEAP32[i122 + 4 >> 2] = i236;
        if ((i235 & 0 | 0) == 0 & (i236 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i123);
        }
        i236 = HEAP32[i100 >> 2] | 0;
        i235 = HEAP32[i100 + 4 >> 2] | 0;
        HEAP32[i124 >> 2] = i236;
        HEAP32[i124 + 4 >> 2] = i235;
        if ((i236 & 0 | 0) == 0 & (i235 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i125);
        }
        __ZN7WebCore11RenderStyle18setDashboardRegionEiRKN3WTF6StringENS_6LengthES5_S5_S5_b(i234, 2, i207 + 24 | 0, i119, i121, i123, i125, (i207 | 0) != (i178 | 0));
        if ((HEAP8[i169] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i125);
        }
        if ((HEAP8[i205] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i123);
        }
        if ((HEAP8[i197] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i121);
        }
        if ((HEAP8[i201] | 0) != 10) {
         break;
        }
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i119);
       } else {
        i234 = HEAP32[i161 >> 2] | 0;
        i235 = HEAP32[i94 >> 2] | 0;
        i236 = HEAP32[i94 + 4 >> 2] | 0;
        HEAP32[i110 >> 2] = i235;
        HEAP32[i110 + 4 >> 2] = i236;
        if ((i235 & 0 | 0) == 0 & (i236 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i111);
        }
        i236 = HEAP32[i96 >> 2] | 0;
        i235 = HEAP32[i96 + 4 >> 2] | 0;
        HEAP32[i112 >> 2] = i236;
        HEAP32[i112 + 4 >> 2] = i235;
        if ((i236 & 0 | 0) == 0 & (i235 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i113);
        }
        i235 = HEAP32[i98 >> 2] | 0;
        i236 = HEAP32[i98 + 4 >> 2] | 0;
        HEAP32[i114 >> 2] = i235;
        HEAP32[i114 + 4 >> 2] = i236;
        if ((i235 & 0 | 0) == 0 & (i236 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i115);
        }
        i236 = HEAP32[i100 >> 2] | 0;
        i235 = HEAP32[i100 + 4 >> 2] | 0;
        HEAP32[i116 >> 2] = i236;
        HEAP32[i116 + 4 >> 2] = i235;
        if ((i236 & 0 | 0) == 0 & (i235 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i117);
        }
        __ZN7WebCore11RenderStyle18setDashboardRegionEiRKN3WTF6StringENS_6LengthES5_S5_S5_b(i234, 1, i207 + 24 | 0, i111, i113, i115, i117, (i207 | 0) != (i178 | 0));
        if ((HEAP8[i196] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i117);
        }
        if ((HEAP8[i204] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i115);
        }
        if ((HEAP8[i202] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i113);
        }
        if ((HEAP8[i199] | 0) != 10) {
         break;
        }
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i111);
       }
      } while (0);
      i207 = HEAP32[i207 + 20 >> 2] | 0;
      if ((HEAP8[i185] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i101);
      }
      if ((HEAP8[i171] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i99);
      }
      if ((HEAP8[i170] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i97);
      }
      if ((HEAP8[i176] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i95);
      }
      if ((i207 | 0) == 0) {
       break;
      }
     }
     HEAP8[(HEAP32[(HEAP32[(HEAP32[i153 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1408 | 0] = 1;
     STACKTOP = i4;
     return;
    } else {
     STACKTOP = i4;
     return;
    }
    break;
   }
  case 344:
   {
    if (i156) {
     d214 = +HEAPF32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2];
     if (+HEAPF32[i164 + 16 >> 2] == d214) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i237 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i6, i164);
      i207 = HEAP32[i6 >> 2] | 0;
      i176 = HEAP32[i163 >> 2] | 0;
      i170 = i176 | 0;
      i171 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
      if ((i171 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i176);
       __ZN3WTF8fastFreeEPv(i176);
      } else {
       HEAP32[i170 >> 2] = i171;
      }
      HEAP32[i163 >> 2] = i207;
      i237 = i207;
     }
     HEAPF32[i237 + 16 >> 2] = d214;
     STACKTOP = i4;
     return;
    }
    if (i159) {
     if (+HEAPF32[i164 + 16 >> 2] == +0) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i238 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i7, i164);
      i207 = HEAP32[i7 >> 2] | 0;
      i171 = HEAP32[i163 >> 2] | 0;
      i170 = i171 | 0;
      i176 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
      if ((i176 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i171);
       __ZN3WTF8fastFreeEPv(i171);
      } else {
       HEAP32[i170 >> 2] = i176;
      }
      HEAP32[i163 >> 2] = i207;
      i238 = i207;
     }
     HEAPF32[i238 + 16 >> 2] = +0;
     STACKTOP = i4;
     return;
    }
    do {
     if ((HEAP32[i162 + 4 >> 2] & 508 | 0) == 472) {
      i207 = HEAP32[i162 + 8 >> 2] | 0;
      if ((i207 | 0) == 362 | (i207 | 0) == 363) {
       d239 = (i207 | 0) == 362 ? +.10416666666666666 : +.020833333333333332;
      } else if ((i207 | 0) == 48) {
       d239 = +.0625;
      } else {
       i194 = 543;
       break;
      }
      i207 = __ZN3WTF10fastMallocEj(16) | 0;
      i176 = i207;
      __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i176, d239, 3);
      d214 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i176, HEAP32[i161 >> 2] | 0, HEAP32[i1 + 328 >> 2] | 0, d165, 0);
      i176 = i207;
      i170 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
      if ((i170 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i207);
       d240 = d214;
       break;
      } else {
       HEAP32[i176 >> 2] = i170;
       d240 = d214;
       break;
      }
     } else {
      i194 = 543;
     }
    } while (0);
    if ((i194 | 0) == 543) {
     d240 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i162, i160, HEAP32[i1 + 328 >> 2] | 0, d165, 0);
    }
    i170 = (HEAP32[i161 >> 2] | 0) + 24 | 0;
    i176 = HEAP32[i170 >> 2] | 0;
    if (+HEAPF32[i176 + 16 >> 2] == d240) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i176 >> 2] | 0) == 1) {
     i241 = i176;
    } else {
     __ZNK7WebCore22StyleRareInheritedData4copyEv(i10, i176);
     i176 = HEAP32[i10 >> 2] | 0;
     i207 = HEAP32[i170 >> 2] | 0;
     i171 = i207 | 0;
     i185 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
     if ((i185 | 0) == 0) {
      __ZN7WebCore22StyleRareInheritedDataD1Ev(i207);
      __ZN3WTF8fastFreeEPv(i207);
     } else {
      HEAP32[i171 >> 2] = i185;
     }
     HEAP32[i170 >> 2] = i176;
     i241 = i176;
    }
    HEAPF32[i241 + 16 >> 2] = d240;
    STACKTOP = i4;
    return;
   }
  case 345:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     if ((HEAP8[H_BASE + 520 | 0] | 0) == 0) {
      i176 = __ZN3WTF10fastMallocEj(12) | 0;
      __ZN7WebCore19TransformOperationsC1Eb(i176, 0);
      HEAP32[H_BASE + 496 >> 2] = i176;
      HEAP32[H_BASE + 520 >> 2] = 1;
      HEAP32[H_BASE + 524 >> 2] = 0;
      i242 = i176;
     } else {
      i242 = HEAP32[H_BASE + 496 >> 2] | 0;
     }
     __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i160, i242);
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore19TransformOperationsC1Eb(i126, 0);
    __ZN7WebCore18transformsForValueEPKNS_11RenderStyleES2_PNS_8CSSValueERNS_19TransformOperationsE(HEAP32[i161 >> 2] | 0, HEAP32[i1 + 328 >> 2] | 0, i3, i126) | 0;
    __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(HEAP32[i161 >> 2] | 0, i126);
    i176 = i126 + 8 | 0;
    i170 = HEAP32[i176 >> 2] | 0;
    i185 = i126 | 0;
    if ((i170 | 0) != 0) {
     i171 = HEAP32[i185 >> 2] | 0;
     i207 = i171 + (i170 << 2) | 0;
     i170 = i171;
     while (1) {
      i171 = HEAP32[i170 >> 2] | 0;
      do {
       if ((i171 | 0) != 0) {
        i199 = i171 + 4 | 0;
        i202 = i199 | 0;
        i204 = (HEAP32[i202 >> 2] | 0) - 1 | 0;
        if ((i204 | 0) != 0) {
         HEAP32[i202 >> 2] = i204;
         break;
        }
        i204 = i199 - 4 | 0;
        if ((i204 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i204 >> 2] | 0) + 4 >> 2] & 63](i204);
       }
      } while (0);
      i170 = i170 + 4 | 0;
      if ((i170 | 0) == (i207 | 0)) {
       break;
      }
     }
     HEAP32[i176 >> 2] = 0;
    }
    i207 = HEAP32[i185 >> 2] | 0;
    if ((i207 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i185 >> 2] = 0;
    HEAP32[i126 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i207);
    STACKTOP = i4;
    return;
   }
  case 321:
   {
    if (i156) {
     d214 = +HEAPF32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 16 >> 2];
     i207 = i160 + 20 | 0;
     i170 = HEAP32[i207 >> 2] | 0;
     if (+HEAPF32[i170 + 16 >> 2] == d214) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i170 >> 2] | 0) == 1) {
      i243 = i170;
     } else {
      __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i15, i170);
      i170 = HEAP32[i15 >> 2] | 0;
      i171 = HEAP32[i207 >> 2] | 0;
      i204 = i171 | 0;
      i199 = (HEAP32[i204 >> 2] | 0) - 1 | 0;
      if ((i199 | 0) == 0) {
       __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i171);
       __ZN3WTF8fastFreeEPv(i171);
      } else {
       HEAP32[i204 >> 2] = i199;
      }
      HEAP32[i207 >> 2] = i170;
      i243 = i170;
     }
     HEAPF32[i243 + 16 >> 2] = d214;
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i170 = i160 + 20 | 0;
     i207 = HEAP32[i170 >> 2] | 0;
     if (+HEAPF32[i207 + 16 >> 2] == +0) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i207 >> 2] | 0) == 1) {
      i244 = i207;
     } else {
      __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i18, i207);
      i207 = HEAP32[i18 >> 2] | 0;
      i199 = HEAP32[i170 >> 2] | 0;
      i204 = i199 | 0;
      i171 = (HEAP32[i204 >> 2] | 0) - 1 | 0;
      if ((i171 | 0) == 0) {
       __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i199);
       __ZN3WTF8fastFreeEPv(i199);
      } else {
       HEAP32[i204 >> 2] = i171;
      }
      HEAP32[i170 >> 2] = i207;
      i244 = i207;
     }
     HEAPF32[i244 + 16 >> 2] = +0;
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    do {
     if ((HEAP32[i162 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i162 + 8 >> 2] | 0) != 3) {
       break;
      }
      i207 = i160 + 20 | 0;
      i170 = HEAP32[i207 >> 2] | 0;
      if (+HEAPF32[i170 + 16 >> 2] == +0) {
       STACKTOP = i4;
       return;
      }
      if ((HEAP32[i170 >> 2] | 0) == 1) {
       i245 = i170;
      } else {
       __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i19, i170);
       i170 = HEAP32[i19 >> 2] | 0;
       i171 = HEAP32[i207 >> 2] | 0;
       i204 = i171 | 0;
       i199 = (HEAP32[i204 >> 2] | 0) - 1 | 0;
       if ((i199 | 0) == 0) {
        __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i171);
        __ZN3WTF8fastFreeEPv(i171);
       } else {
        HEAP32[i204 >> 2] = i199;
       }
       HEAP32[i207 >> 2] = i170;
       i245 = i170;
      }
      HEAPF32[i245 + 16 >> 2] = +0;
      STACKTOP = i4;
      return;
     }
    } while (0);
    i185 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i162) | 0;
    do {
     if ((i185 - 3 & 65535) >>> 0 < 8 >>> 0 | i185 << 16 >> 16 == 108 | i185 << 16 >> 16 == 109) {
      d246 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i162, HEAP32[i161 >> 2] | 0, HEAP32[i1 + 328 >> 2] | 0, d165, 0);
     } else {
      if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i162) | 0) << 16 >> 16 != 1) {
       STACKTOP = i4;
       return;
      }
      d214 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i162);
      i176 = __ZN3WTF10fastMallocEj(16) | 0;
      i170 = i176;
      __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i170, d214, 5);
      d214 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i170, HEAP32[i161 >> 2] | 0, HEAP32[i1 + 328 >> 2] | 0, d165, 0);
      i170 = i176;
      i207 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
      if ((i207 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i176);
       d246 = d214;
       break;
      } else {
       HEAP32[i170 >> 2] = i207;
       d246 = d214;
       break;
      }
     }
    } while (0);
    if (d246 < +0) {
     STACKTOP = i4;
     return;
    }
    i185 = (HEAP32[i161 >> 2] | 0) + 20 | 0;
    i207 = HEAP32[i185 >> 2] | 0;
    if (+HEAPF32[i207 + 16 >> 2] == d246) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i207 >> 2] | 0) == 1) {
     i247 = i207;
    } else {
     __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i20, i207);
     i207 = HEAP32[i20 >> 2] | 0;
     i170 = HEAP32[i185 >> 2] | 0;
     i176 = i170 | 0;
     i199 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
     if ((i199 | 0) == 0) {
      __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i170);
      __ZN3WTF8fastFreeEPv(i170);
     } else {
      HEAP32[i176 >> 2] = i199;
     }
     HEAP32[i185 >> 2] = i207;
     i247 = i207;
    }
    HEAPF32[i247 + 16 >> 2] = d246;
    STACKTOP = i4;
    return;
   }
  case 17:
   {
    if (i156) {
     i207 = (HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     i185 = i160 + 44 | 0;
     i199 = HEAP32[i185 >> 2] | 0;
     if ((i199 >>> 13 & 3 | 0) == (i207 | 0)) {
      STACKTOP = i4;
      return;
     }
     HEAP32[i185 >> 2] = i207 << 13 | i199 & -24577;
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i199 = i160 + 44 | 0;
     i207 = HEAP32[i199 >> 2] | 0;
     if ((i207 & 24576 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     HEAP32[i199 >> 2] = i207 & -24577;
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) != 0) {
     i207 = HEAP32[i162 + 8 >> 2] | 0;
     if ((i207 | 0) == 537) {
      i248 = 1;
     } else if ((i207 | 0) == 538) {
      i248 = 2;
     } else if ((i207 | 0) == 539) {
      i248 = 3;
     } else {
      i248 = 0;
     }
     i207 = i160 + 44 | 0;
     i199 = HEAP32[i207 >> 2] | 0;
     if ((i199 >>> 13 & 3 | 0) == (i248 | 0)) {
      i249 = 0;
     } else {
      HEAP32[i207 >> 2] = i199 & -24577 | i248 << 13;
      i249 = 1;
     }
     i199 = i1 + 392 | 0;
     HEAP8[i199] = HEAP8[i199] & 1 | i249;
    }
    i199 = HEAP32[i153 >> 2] | 0;
    if ((i199 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i207 = HEAP32[(HEAP32[i199 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i199 | 0) != (HEAP32[i207 + 692 >> 2] | 0)) {
     STACKTOP = i4;
     return;
    }
    HEAP8[i207 + 1949 | 0] = 1;
    STACKTOP = i4;
    return;
   }
  case 16:
   {
    if (i156) {
     i207 = (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 28 & 3;
     if (((HEAP32[i164 + 88 >> 2] | 0) >>> 28 & 3 | 0) == (i207 | 0)) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i250 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i21, i164);
      i199 = HEAP32[i21 >> 2] | 0;
      i185 = HEAP32[i163 >> 2] | 0;
      i176 = i185 | 0;
      i170 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
      if ((i170 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i185);
       __ZN3WTF8fastFreeEPv(i185);
      } else {
       HEAP32[i176 >> 2] = i170;
      }
      HEAP32[i163 >> 2] = i199;
      i250 = i199;
     }
     i199 = i250 + 88 | 0;
     HEAP32[i199 >> 2] = HEAP32[i199 >> 2] & -805306369 | i207 << 28;
     STACKTOP = i4;
     return;
    }
    if (i159) {
     if ((HEAP32[i164 + 88 >> 2] & 805306368 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i251 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i22, i164);
      i207 = HEAP32[i22 >> 2] | 0;
      i199 = HEAP32[i163 >> 2] | 0;
      i170 = i199 | 0;
      i176 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
      if ((i176 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i199);
       __ZN3WTF8fastFreeEPv(i199);
      } else {
       HEAP32[i170 >> 2] = i176;
      }
      HEAP32[i163 >> 2] = i207;
      i251 = i207;
     }
     i207 = i251 + 88 | 0;
     HEAP32[i207 >> 2] = HEAP32[i207 >> 2] & -805306369;
     STACKTOP = i4;
     return;
    }
    if ((i162 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i207 = HEAP32[i162 + 8 >> 2] | 0;
    if ((i207 | 0) == 556) {
     i252 = 3;
    } else if ((i207 | 0) == 558) {
     i252 = 0;
    } else if ((i207 | 0) == 557) {
     i252 = 1;
    } else if ((i207 | 0) == 555) {
     i252 = 2;
    } else {
     i252 = 0;
    }
    if (((HEAP32[i164 + 88 >> 2] | 0) >>> 28 & 3 | 0) == (i252 | 0)) {
     i253 = 0;
    } else {
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i254 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i23, i164);
      i207 = HEAP32[i23 >> 2] | 0;
      i176 = HEAP32[i163 >> 2] | 0;
      i170 = i176 | 0;
      i199 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
      if ((i199 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i176);
       __ZN3WTF8fastFreeEPv(i176);
      } else {
       HEAP32[i170 >> 2] = i199;
      }
      HEAP32[i163 >> 2] = i207;
      i254 = i207;
     }
     i207 = i254 + 88 | 0;
     HEAP32[i207 >> 2] = HEAP32[i207 >> 2] & -805306369 | i252 << 28;
     i253 = 1;
    }
    i207 = i1 + 392 | 0;
    HEAP8[i207] = HEAP8[i207] & 1 | i253;
    STACKTOP = i4;
    return;
   }
  case 269:
   {
    if (i156) {
     i207 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 127;
     if ((HEAP32[i164 + 92 >> 2] & 127 | 0) == (i207 | 0)) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i255 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i24, i164);
      i199 = HEAP32[i24 >> 2] | 0;
      i170 = HEAP32[i163 >> 2] | 0;
      i176 = i170 | 0;
      i185 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
      if ((i185 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i170);
       __ZN3WTF8fastFreeEPv(i170);
      } else {
       HEAP32[i176 >> 2] = i185;
      }
      HEAP32[i163 >> 2] = i199;
      i255 = i199;
     }
     i199 = i255 + 92 | 0;
     HEAP32[i199 >> 2] = HEAP32[i199 >> 2] & -128 | i207;
     STACKTOP = i4;
     return;
    }
    if (i159) {
     if ((HEAP32[i164 + 92 >> 2] & 127 | 0) == 19) {
      STACKTOP = i4;
      return;
     }
     if ((HEAP32[i164 >> 2] | 0) == 1) {
      i256 = i164;
     } else {
      __ZNK7WebCore22StyleRareInheritedData4copyEv(i25, i164);
      i207 = HEAP32[i25 >> 2] | 0;
      i199 = HEAP32[i163 >> 2] | 0;
      i185 = i199 | 0;
      i176 = (HEAP32[i185 >> 2] | 0) - 1 | 0;
      if ((i176 | 0) == 0) {
       __ZN7WebCore22StyleRareInheritedDataD1Ev(i199);
       __ZN3WTF8fastFreeEPv(i199);
      } else {
       HEAP32[i185 >> 2] = i176;
      }
      HEAP32[i163 >> 2] = i207;
      i256 = i207;
     }
     i207 = i256 + 92 | 0;
     HEAP32[i207 >> 2] = HEAP32[i207 >> 2] & -128 | 19;
     STACKTOP = i4;
     return;
    }
    do {
     if ((i162 | 0) != 0) {
      if ((HEAP32[i162 + 4 >> 2] & 508 | 0) != 472) {
       break;
      }
      if ((HEAP32[i162 + 8 >> 2] | 0) != 3) {
       break;
      }
      if ((HEAP32[i164 + 92 >> 2] & 127 | 0) == 0) {
       STACKTOP = i4;
       return;
      }
      if ((HEAP32[i164 >> 2] | 0) == 1) {
       i257 = i164;
      } else {
       __ZNK7WebCore22StyleRareInheritedData4copyEv(i26, i164);
       i207 = HEAP32[i26 >> 2] | 0;
       i176 = HEAP32[i163 >> 2] | 0;
       i185 = i176 | 0;
       i199 = (HEAP32[i185 >> 2] | 0) - 1 | 0;
       if ((i199 | 0) == 0) {
        __ZN7WebCore22StyleRareInheritedDataD1Ev(i176);
        __ZN3WTF8fastFreeEPv(i176);
       } else {
        HEAP32[i185 >> 2] = i199;
       }
       HEAP32[i163 >> 2] = i207;
       i257 = i207;
      }
      i207 = i257 + 92 | 0;
      HEAP32[i207 >> 2] = HEAP32[i207 >> 2] & -128;
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((i158 | 0) != 172032) {
     STACKTOP = i4;
     return;
    }
    i207 = HEAP32[i3 + 8 >> 2] | 0;
    if ((HEAP32[i164 + 92 >> 2] & 127 | 0) == (i207 | 0)) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i164 >> 2] | 0) == 1) {
     i258 = i164;
    } else {
     __ZNK7WebCore22StyleRareInheritedData4copyEv(i27, i164);
     i199 = HEAP32[i27 >> 2] | 0;
     i185 = HEAP32[i163 >> 2] | 0;
     i176 = i185 | 0;
     i170 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
     if ((i170 | 0) == 0) {
      __ZN7WebCore22StyleRareInheritedDataD1Ev(i185);
      __ZN3WTF8fastFreeEPv(i185);
     } else {
      HEAP32[i176 >> 2] = i170;
     }
     HEAP32[i163 >> 2] = i199;
     i258 = i199;
    }
    i199 = i258 + 92 | 0;
    HEAP32[i199 >> 2] = HEAP32[i199 >> 2] & -128 | i207 & 127;
    STACKTOP = i4;
    return;
   }
  case 11:
   {
    do {
     if ((i162 | 0) != 0) {
      if ((HEAP32[i162 + 4 >> 2] & 508 | 0) != 472) {
       break;
      }
      if ((HEAP32[i162 + 8 >> 2] | 0) != 32) {
       break;
      }
      __ZNK7WebCore15FontDescription25makeNormalFeatureSettingsEv(i127, __ZNK7WebCore11RenderStyle15fontDescriptionEv(i160) | 0);
      i207 = (__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(HEAP32[i161 >> 2] | 0, i127) | 0) & 1;
      i199 = i1 + 392 | 0;
      HEAP8[i199] = HEAP8[i199] & 1 | i207;
      __ZN7WebCore15FontDescriptionD2Ev(i127);
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((i155 & 491520) >>> 0 <= 221184 >>> 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore15FontDescriptionC2ERKS0_(i128, __ZNK7WebCore11RenderStyle15fontDescriptionEv(i160) | 0);
    i207 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore19FontFeatureSettingsC1Ev(i207);
    i199 = i3 + 16 | 0;
    i170 = HEAP32[i199 >> 2] | 0;
    L967 : do {
     if ((i170 | 0) > 0) {
      i176 = i3 + 8 | 0;
      i185 = i28 | 0;
      i204 = i130 | 0;
      i171 = i129 | 0;
      i202 = 0;
      i196 = i170;
      while (1) {
       if (i196 >>> 0 <= i202 >>> 0) {
        break;
       }
       i178 = HEAP32[(HEAP32[i176 >> 2] | 0) + (i202 << 2) >> 2] | 0;
       do {
        if ((HEAP32[i178 + 4 >> 2] & 516096 | 0) == 98304) {
         i201 = HEAP32[i178 + 8 >> 2] | 0;
         do {
          if ((i201 | 0) == 0) {
           HEAP32[i185 >> 2] = 0;
          } else {
           if ((HEAP32[i201 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i28, i201);
            break;
           } else {
            HEAP32[i185 >> 2] = i201;
            i197 = i201 | 0;
            HEAP32[i197 >> 2] = (HEAP32[i197 >> 2] | 0) + 2;
            break;
           }
          }
         } while (0);
         HEAP32[i204 >> 2] = HEAP32[i185 >> 2];
         __ZN7WebCore11FontFeatureC1ERKN3WTF12AtomicStringEi(i129, i130, HEAP32[i178 + 12 >> 2] | 0);
         __ZN7WebCore19FontFeatureSettings6appendERKNS_11FontFeatureE(i207, i129);
         i201 = HEAP32[i171 >> 2] | 0;
         do {
          if ((i201 | 0) != 0) {
           i197 = i201 | 0;
           i205 = (HEAP32[i197 >> 2] | 0) - 2 | 0;
           if ((i205 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i201);
            break;
           } else {
            HEAP32[i197 >> 2] = i205;
            break;
           }
          }
         } while (0);
         i201 = HEAP32[i204 >> 2] | 0;
         if ((i201 | 0) == 0) {
          break;
         }
         i205 = i201 | 0;
         i197 = (HEAP32[i205 >> 2] | 0) - 2 | 0;
         if ((i197 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i201);
          break;
         } else {
          HEAP32[i205 >> 2] = i197;
          break;
         }
        }
       } while (0);
       i178 = i202 + 1 | 0;
       if ((i178 | 0) >= (i170 | 0)) {
        break L967;
       }
       i202 = i178;
       i196 = HEAP32[i199 >> 2] | 0;
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    } while (0);
    i199 = i128 + 4 | 0;
    i170 = HEAP32[i199 >> 2] | 0;
    HEAP32[i199 >> 2] = i207;
    do {
     if ((i170 | 0) != 0) {
      i199 = i170 | 0;
      i196 = i170 | 0;
      i202 = (HEAP32[i196 >> 2] | 0) - 1 | 0;
      if ((i202 | 0) != 0) {
       HEAP32[i196 >> 2] = i202;
       break;
      }
      i202 = i199 + 12 | 0;
      i196 = HEAP32[i202 >> 2] | 0;
      i204 = i199 + 4 | 0;
      i171 = i204;
      if ((i196 | 0) != 0) {
       i185 = HEAP32[i171 >> 2] | 0;
       i176 = i185 + (i196 << 3) | 0;
       i196 = i185;
       while (1) {
        i185 = HEAP32[i196 >> 2] | 0;
        do {
         if ((i185 | 0) != 0) {
          i178 = i185 | 0;
          i197 = (HEAP32[i178 >> 2] | 0) - 2 | 0;
          if ((i197 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i185);
           break;
          } else {
           HEAP32[i178 >> 2] = i197;
           break;
          }
         }
        } while (0);
        i196 = i196 + 8 | 0;
        if ((i196 | 0) == (i176 | 0)) {
         break;
        }
       }
       HEAP32[i202 >> 2] = 0;
      }
      i176 = HEAP32[i171 >> 2] | 0;
      if ((i176 | 0) != 0) {
       HEAP32[i204 >> 2] = 0;
       HEAP32[i199 + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i176);
      }
      __ZN3WTF8fastFreeEPv(i170);
     }
    } while (0);
    i170 = (__ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(HEAP32[i161 >> 2] | 0, i128) | 0) & 1;
    i207 = i1 + 392 | 0;
    HEAP8[i207] = HEAP8[i207] & 1 | i170;
    __ZN7WebCore15FontDescriptionD2Ev(i128);
    STACKTOP = i4;
    return;
   }
  case 237:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     if ((HEAP8[H_BASE + 528 | 0] | 0) == 0) {
      i170 = __ZN3WTF10fastMallocEj(12) | 0;
      __ZN7WebCore16FilterOperationsC1Ev(i170);
      HEAP32[H_BASE + 504 >> 2] = i170;
      HEAP32[H_BASE + 528 >> 2] = 1;
      HEAP32[H_BASE + 532 >> 2] = 0;
      i259 = i170;
     } else {
      i259 = HEAP32[H_BASE + 504 >> 2] | 0;
     }
     __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(i160, i259);
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore16FilterOperationsC1Ev(i131);
    if (__ZN7WebCore13StyleResolver22createFilterOperationsEPNS_8CSSValueERNS_16FilterOperationsE(i1, i3, i131) | 0) {
     __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(HEAP32[i161 >> 2] | 0, i131);
    }
    i170 = i131 + 8 | 0;
    i207 = HEAP32[i170 >> 2] | 0;
    i176 = i131 | 0;
    if ((i207 | 0) != 0) {
     i196 = HEAP32[i176 >> 2] | 0;
     i185 = i196 + (i207 << 2) | 0;
     i207 = i196;
     while (1) {
      i196 = HEAP32[i207 >> 2] | 0;
      do {
       if ((i196 | 0) != 0) {
        i197 = i196 + 4 | 0;
        i178 = i197 | 0;
        i205 = (HEAP32[i178 >> 2] | 0) - 1 | 0;
        if ((i205 | 0) != 0) {
         HEAP32[i178 >> 2] = i205;
         break;
        }
        i205 = i197 - 4 | 0;
        if ((i205 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i205 >> 2] | 0) + 4 >> 2] & 63](i205);
       }
      } while (0);
      i207 = i207 + 4 | 0;
      if ((i207 | 0) == (i185 | 0)) {
       break;
      }
     }
     HEAP32[i170 >> 2] = 0;
    }
    i185 = HEAP32[i176 >> 2] | 0;
    if ((i185 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i176 >> 2] = 0;
    HEAP32[i131 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i185);
    STACKTOP = i4;
    return;
   }
  case 251:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle18setGridAutoColumnsERKNS_13GridTrackSizeE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 128 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i132, 0);
     __ZN7WebCore11RenderStyle18setGridAutoColumnsERKNS_13GridTrackSizeE(i160, i132);
     if ((HEAP8[i132 + 37 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i132 + 32 | 0);
     }
     if ((HEAP8[i132 + 13 | 0] | 0) != 10) {
      STACKTOP = i4;
      return;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i132 + 8 | 0);
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i133, 15);
    if (__ZN7WebCoreL19createGridTrackSizeEPNS_8CSSValueERNS_13GridTrackSizeERKNS_13StyleResolver5StateE(i3, i133, i153) | 0) {
     __ZN7WebCore11RenderStyle18setGridAutoColumnsERKNS_13GridTrackSizeE(HEAP32[i161 >> 2] | 0, i133);
    }
    if ((HEAP8[i133 + 37 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i133 + 32 | 0);
    }
    if ((HEAP8[i133 + 13 | 0] | 0) != 10) {
     STACKTOP = i4;
     return;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i133 + 8 | 0);
    STACKTOP = i4;
    return;
   }
  case 252:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle15setGridAutoRowsERKNS_13GridTrackSizeE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 72 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i134, 0);
     __ZN7WebCore11RenderStyle15setGridAutoRowsERKNS_13GridTrackSizeE(i160, i134);
     if ((HEAP8[i134 + 37 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i134 + 32 | 0);
     }
     if ((HEAP8[i134 + 13 | 0] | 0) != 10) {
      STACKTOP = i4;
      return;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i134 + 8 | 0);
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i135, 15);
    if (__ZN7WebCoreL19createGridTrackSizeEPNS_8CSSValueERNS_13GridTrackSizeERKNS_13StyleResolver5StateE(i3, i135, i153) | 0) {
     __ZN7WebCore11RenderStyle15setGridAutoRowsERKNS_13GridTrackSizeE(HEAP32[i161 >> 2] | 0, i135);
    }
    if ((HEAP8[i135 + 37 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i135 + 32 | 0);
    }
    if ((HEAP8[i135 + 13 | 0] | 0) != 10) {
     STACKTOP = i4;
     return;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i135 + 8 | 0);
    STACKTOP = i4;
    return;
   }
  case 255:
   {
    if (i156) {
     i185 = i1 + 324 | 0;
     __ZN7WebCore11RenderStyle14setGridColumnsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i160, (HEAP32[(HEAP32[(HEAP32[i185 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 4 | 0);
     __ZN7WebCore11RenderStyle23setNamedGridColumnLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(HEAP32[i161 >> 2] | 0, (HEAP32[(HEAP32[(HEAP32[i185 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 28 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i185 = i136 | 0;
     HEAP32[i185 >> 2] = 0;
     i207 = i136 + 4 | 0;
     HEAP32[i207 >> 2] = 0;
     i196 = i136 + 8 | 0;
     HEAP32[i196 >> 2] = 0;
     __ZN7WebCore11RenderStyle14setGridColumnsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i160, i136);
     i199 = HEAP32[i196 >> 2] | 0;
     if ((i199 | 0) != 0) {
      i204 = HEAP32[i185 >> 2] | 0;
      i171 = i204 + (i199 * 56 & -1) | 0;
      i199 = i204;
      while (1) {
       if ((HEAP8[i199 + 37 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i199 + 32 | 0);
       }
       if ((HEAP8[i199 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i199 + 8 | 0);
       }
       i199 = i199 + 56 | 0;
       if ((i199 | 0) == (i171 | 0)) {
        break;
       }
      }
      HEAP32[i196 >> 2] = 0;
     }
     i171 = HEAP32[i185 >> 2] | 0;
     if ((i171 | 0) != 0) {
      HEAP32[i185 >> 2] = 0;
      HEAP32[i207 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i171);
     }
     i171 = HEAP32[i161 >> 2] | 0;
     _memset(i137 | 0, 0, 20) | 0;
     __ZN7WebCore11RenderStyle23setNamedGridColumnLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(i171, i137);
     i171 = HEAP32[i137 >> 2] | 0;
     if ((i171 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i199 = HEAP32[i137 + 4 >> 2] | 0;
     if ((i199 | 0) > 0) {
      i176 = 0;
      while (1) {
       i170 = i171 + (i176 << 4) | 0;
       i204 = HEAP32[i170 >> 2] | 0;
       do {
        if ((i204 | 0) != -1) {
         i202 = i171 + (i176 << 4) + 12 | 0;
         if ((HEAP32[i202 >> 2] | 0) != 0) {
          HEAP32[i202 >> 2] = 0;
         }
         i202 = i171 + (i176 << 4) + 4 | 0;
         i205 = HEAP32[i202 >> 2] | 0;
         if ((i205 | 0) == 0) {
          i260 = i204;
         } else {
          HEAP32[i202 >> 2] = 0;
          HEAP32[i171 + (i176 << 4) + 8 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i205);
          i260 = HEAP32[i170 >> 2] | 0;
         }
         if ((i260 | 0) == 0) {
          break;
         }
         i205 = i260 | 0;
         i202 = (HEAP32[i205 >> 2] | 0) - 2 | 0;
         if ((i202 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i260);
          break;
         } else {
          HEAP32[i205 >> 2] = i202;
          break;
         }
        }
       } while (0);
       i176 = i176 + 1 | 0;
       if ((i176 | 0) >= (i199 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i171);
     STACKTOP = i4;
     return;
    }
    i199 = i138 | 0;
    HEAP32[i199 >> 2] = 0;
    i176 = i138 + 4 | 0;
    HEAP32[i176 >> 2] = 0;
    i207 = i138 + 8 | 0;
    HEAP32[i207 >> 2] = 0;
    _memset(i139 | 0, 0, 20) | 0;
    if (__ZN7WebCoreL19createGridTrackListEPNS_8CSSValueERN3WTF6VectorINS_13GridTrackSizeELj0ENS2_15CrashOnOverflowEEERNS2_7HashMapINS2_6StringENS3_IjLj0ES5_EENS2_10StringHashENS2_10HashTraitsIS9_EENSC_ISA_EEEERKNS_13StyleResolver5StateE(i3, i138, i139, i153) | 0) {
     __ZN7WebCore11RenderStyle14setGridColumnsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(HEAP32[i161 >> 2] | 0, i138);
     __ZN7WebCore11RenderStyle23setNamedGridColumnLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(HEAP32[i161 >> 2] | 0, i139);
    }
    i185 = HEAP32[i139 >> 2] | 0;
    if ((i185 | 0) != 0) {
     i196 = HEAP32[i139 + 4 >> 2] | 0;
     if ((i196 | 0) > 0) {
      i170 = 0;
      while (1) {
       i204 = i185 + (i170 << 4) | 0;
       i202 = HEAP32[i204 >> 2] | 0;
       do {
        if ((i202 | 0) != -1) {
         i205 = i185 + (i170 << 4) + 12 | 0;
         if ((HEAP32[i205 >> 2] | 0) != 0) {
          HEAP32[i205 >> 2] = 0;
         }
         i205 = i185 + (i170 << 4) + 4 | 0;
         i197 = HEAP32[i205 >> 2] | 0;
         if ((i197 | 0) == 0) {
          i261 = i202;
         } else {
          HEAP32[i205 >> 2] = 0;
          HEAP32[i185 + (i170 << 4) + 8 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i197);
          i261 = HEAP32[i204 >> 2] | 0;
         }
         if ((i261 | 0) == 0) {
          break;
         }
         i197 = i261 | 0;
         i205 = (HEAP32[i197 >> 2] | 0) - 2 | 0;
         if ((i205 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i261);
          break;
         } else {
          HEAP32[i197 >> 2] = i205;
          break;
         }
        }
       } while (0);
       i170 = i170 + 1 | 0;
       if ((i170 | 0) >= (i196 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i185);
    }
    i196 = HEAP32[i207 >> 2] | 0;
    if ((i196 | 0) != 0) {
     i170 = HEAP32[i199 >> 2] | 0;
     i171 = i170 + (i196 * 56 & -1) | 0;
     i196 = i170;
     while (1) {
      if ((HEAP8[i196 + 37 | 0] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i196 + 32 | 0);
      }
      if ((HEAP8[i196 + 13 | 0] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i196 + 8 | 0);
      }
      i196 = i196 + 56 | 0;
      if ((i196 | 0) == (i171 | 0)) {
       break;
      }
     }
     HEAP32[i207 >> 2] = 0;
    }
    i171 = HEAP32[i199 >> 2] | 0;
    if ((i171 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i199 >> 2] = 0;
    HEAP32[i176 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i171);
    STACKTOP = i4;
    return;
   }
  case 256:
   {
    if (i156) {
     i171 = i1 + 324 | 0;
     __ZN7WebCore11RenderStyle11setGridRowsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i160, (HEAP32[(HEAP32[(HEAP32[i171 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 16 | 0);
     __ZN7WebCore11RenderStyle20setNamedGridRowLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(HEAP32[i161 >> 2] | 0, (HEAP32[(HEAP32[(HEAP32[i171 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 48 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     i171 = i140 | 0;
     HEAP32[i171 >> 2] = 0;
     i196 = i140 + 4 | 0;
     HEAP32[i196 >> 2] = 0;
     i185 = i140 + 8 | 0;
     HEAP32[i185 >> 2] = 0;
     __ZN7WebCore11RenderStyle11setGridRowsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i160, i140);
     i170 = HEAP32[i185 >> 2] | 0;
     if ((i170 | 0) != 0) {
      i204 = HEAP32[i171 >> 2] | 0;
      i202 = i204 + (i170 * 56 & -1) | 0;
      i170 = i204;
      while (1) {
       if ((HEAP8[i170 + 37 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i170 + 32 | 0);
       }
       if ((HEAP8[i170 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i170 + 8 | 0);
       }
       i170 = i170 + 56 | 0;
       if ((i170 | 0) == (i202 | 0)) {
        break;
       }
      }
      HEAP32[i185 >> 2] = 0;
     }
     i202 = HEAP32[i171 >> 2] | 0;
     if ((i202 | 0) != 0) {
      HEAP32[i171 >> 2] = 0;
      HEAP32[i196 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i202);
     }
     i202 = HEAP32[i161 >> 2] | 0;
     _memset(i141 | 0, 0, 20) | 0;
     __ZN7WebCore11RenderStyle20setNamedGridRowLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(i202, i141);
     i202 = HEAP32[i141 >> 2] | 0;
     if ((i202 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i170 = HEAP32[i141 + 4 >> 2] | 0;
     if ((i170 | 0) > 0) {
      i176 = 0;
      while (1) {
       i199 = i202 + (i176 << 4) | 0;
       i207 = HEAP32[i199 >> 2] | 0;
       do {
        if ((i207 | 0) != -1) {
         i204 = i202 + (i176 << 4) + 12 | 0;
         if ((HEAP32[i204 >> 2] | 0) != 0) {
          HEAP32[i204 >> 2] = 0;
         }
         i204 = i202 + (i176 << 4) + 4 | 0;
         i205 = HEAP32[i204 >> 2] | 0;
         if ((i205 | 0) == 0) {
          i262 = i207;
         } else {
          HEAP32[i204 >> 2] = 0;
          HEAP32[i202 + (i176 << 4) + 8 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i205);
          i262 = HEAP32[i199 >> 2] | 0;
         }
         if ((i262 | 0) == 0) {
          break;
         }
         i205 = i262 | 0;
         i204 = (HEAP32[i205 >> 2] | 0) - 2 | 0;
         if ((i204 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i262);
          break;
         } else {
          HEAP32[i205 >> 2] = i204;
          break;
         }
        }
       } while (0);
       i176 = i176 + 1 | 0;
       if ((i176 | 0) >= (i170 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i202);
     STACKTOP = i4;
     return;
    }
    i170 = i142 | 0;
    HEAP32[i170 >> 2] = 0;
    i176 = i142 + 4 | 0;
    HEAP32[i176 >> 2] = 0;
    i196 = i142 + 8 | 0;
    HEAP32[i196 >> 2] = 0;
    _memset(i143 | 0, 0, 20) | 0;
    if (__ZN7WebCoreL19createGridTrackListEPNS_8CSSValueERN3WTF6VectorINS_13GridTrackSizeELj0ENS2_15CrashOnOverflowEEERNS2_7HashMapINS2_6StringENS3_IjLj0ES5_EENS2_10StringHashENS2_10HashTraitsIS9_EENSC_ISA_EEEERKNS_13StyleResolver5StateE(i3, i142, i143, i153) | 0) {
     __ZN7WebCore11RenderStyle11setGridRowsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(HEAP32[i161 >> 2] | 0, i142);
     __ZN7WebCore11RenderStyle20setNamedGridRowLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(HEAP32[i161 >> 2] | 0, i143);
    }
    i171 = HEAP32[i143 >> 2] | 0;
    if ((i171 | 0) != 0) {
     i185 = HEAP32[i143 + 4 >> 2] | 0;
     if ((i185 | 0) > 0) {
      i199 = 0;
      while (1) {
       i207 = i171 + (i199 << 4) | 0;
       i204 = HEAP32[i207 >> 2] | 0;
       do {
        if ((i204 | 0) != -1) {
         i205 = i171 + (i199 << 4) + 12 | 0;
         if ((HEAP32[i205 >> 2] | 0) != 0) {
          HEAP32[i205 >> 2] = 0;
         }
         i205 = i171 + (i199 << 4) + 4 | 0;
         i197 = HEAP32[i205 >> 2] | 0;
         if ((i197 | 0) == 0) {
          i263 = i204;
         } else {
          HEAP32[i205 >> 2] = 0;
          HEAP32[i171 + (i199 << 4) + 8 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i197);
          i263 = HEAP32[i207 >> 2] | 0;
         }
         if ((i263 | 0) == 0) {
          break;
         }
         i197 = i263 | 0;
         i205 = (HEAP32[i197 >> 2] | 0) - 2 | 0;
         if ((i205 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i263);
          break;
         } else {
          HEAP32[i197 >> 2] = i205;
          break;
         }
        }
       } while (0);
       i199 = i199 + 1 | 0;
       if ((i199 | 0) >= (i185 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i171);
    }
    i185 = HEAP32[i196 >> 2] | 0;
    if ((i185 | 0) != 0) {
     i199 = HEAP32[i170 >> 2] | 0;
     i202 = i199 + (i185 * 56 & -1) | 0;
     i185 = i199;
     while (1) {
      if ((HEAP8[i185 + 37 | 0] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i185 + 32 | 0);
      }
      if ((HEAP8[i185 + 13 | 0] | 0) == 10) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i185 + 8 | 0);
      }
      i185 = i185 + 56 | 0;
      if ((i185 | 0) == (i202 | 0)) {
       break;
      }
     }
     HEAP32[i196 >> 2] = 0;
    }
    i202 = HEAP32[i170 >> 2] | 0;
    if ((i202 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP32[i170 >> 2] = 0;
    HEAP32[i176 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i202);
    STACKTOP = i4;
    return;
   }
  case 254:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 84 >> 2] | 0) + 4 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     HEAP32[i144 >> 2] = 0;
     HEAP32[i144 + 4 >> 2] = 0;
     i202 = i144 + 8 | 0;
     HEAP32[i202 >> 2] = 0;
     __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(i160, i144);
     i185 = HEAP32[i202 >> 2] | 0;
     if ((i185 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i202 = i185 | 0;
     i171 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
     if ((i171 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i185);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i202 >> 2] = i171;
      STACKTOP = i4;
      return;
     }
    } else {
     HEAP32[i145 >> 2] = 0;
     HEAP32[i145 + 4 >> 2] = 0;
     i171 = i145 + 8 | 0;
     HEAP32[i171 >> 2] = 0;
     __ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE(i3, i145);
     __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(HEAP32[i161 >> 2] | 0, i145);
     i202 = HEAP32[i171 >> 2] | 0;
     if ((i202 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i171 = i202 | 0;
     i185 = (HEAP32[i171 >> 2] | 0) - 2 | 0;
     if ((i185 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i202);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i171 >> 2] = i185;
      STACKTOP = i4;
      return;
     }
    }
    break;
   }
  case 253:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 84 >> 2] | 0) + 16 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     HEAP32[i146 >> 2] = 0;
     HEAP32[i146 + 4 >> 2] = 0;
     i185 = i146 + 8 | 0;
     HEAP32[i185 >> 2] = 0;
     __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(i160, i146);
     i171 = HEAP32[i185 >> 2] | 0;
     if ((i171 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i185 = i171 | 0;
     i202 = (HEAP32[i185 >> 2] | 0) - 2 | 0;
     if ((i202 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i171);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i185 >> 2] = i202;
      STACKTOP = i4;
      return;
     }
    } else {
     HEAP32[i147 >> 2] = 0;
     HEAP32[i147 + 4 >> 2] = 0;
     i202 = i147 + 8 | 0;
     HEAP32[i202 >> 2] = 0;
     __ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE(i3, i147);
     __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(HEAP32[i161 >> 2] | 0, i147);
     i185 = HEAP32[i202 >> 2] | 0;
     if ((i185 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i202 = i185 | 0;
     i171 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
     if ((i171 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i185);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i202 >> 2] = i171;
      STACKTOP = i4;
      return;
     }
    }
    break;
   }
  case 258:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 84 >> 2] | 0) + 28 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     HEAP32[i148 >> 2] = 0;
     HEAP32[i148 + 4 >> 2] = 0;
     i171 = i148 + 8 | 0;
     HEAP32[i171 >> 2] = 0;
     __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(i160, i148);
     i202 = HEAP32[i171 >> 2] | 0;
     if ((i202 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i171 = i202 | 0;
     i185 = (HEAP32[i171 >> 2] | 0) - 2 | 0;
     if ((i185 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i202);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i171 >> 2] = i185;
      STACKTOP = i4;
      return;
     }
    } else {
     HEAP32[i149 >> 2] = 0;
     HEAP32[i149 + 4 >> 2] = 0;
     i185 = i149 + 8 | 0;
     HEAP32[i185 >> 2] = 0;
     __ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE(i3, i149);
     __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(HEAP32[i161 >> 2] | 0, i149);
     i171 = HEAP32[i185 >> 2] | 0;
     if ((i171 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i185 = i171 | 0;
     i202 = (HEAP32[i185 >> 2] | 0) - 2 | 0;
     if ((i202 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i171);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i185 >> 2] = i202;
      STACKTOP = i4;
      return;
     }
    }
    break;
   }
  case 257:
   {
    if (i156) {
     __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(i160, (HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 20 >> 2] | 0) + 84 >> 2] | 0) + 40 | 0);
     STACKTOP = i4;
     return;
    }
    if (i159) {
     HEAP32[i150 >> 2] = 0;
     HEAP32[i150 + 4 >> 2] = 0;
     i202 = i150 + 8 | 0;
     HEAP32[i202 >> 2] = 0;
     __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(i160, i150);
     i185 = HEAP32[i202 >> 2] | 0;
     if ((i185 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i202 = i185 | 0;
     i171 = (HEAP32[i202 >> 2] | 0) - 2 | 0;
     if ((i171 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i185);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i202 >> 2] = i171;
      STACKTOP = i4;
      return;
     }
    } else {
     HEAP32[i151 >> 2] = 0;
     HEAP32[i151 + 4 >> 2] = 0;
     i171 = i151 + 8 | 0;
     HEAP32[i171 >> 2] = 0;
     __ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE(i3, i151);
     __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(HEAP32[i161 >> 2] | 0, i151);
     i202 = HEAP32[i171 >> 2] | 0;
     if ((i202 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i171 = i202 | 0;
     i185 = (HEAP32[i171 >> 2] | 0) - 2 | 0;
     if ((i185 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i202);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i171 >> 2] = i185;
      STACKTOP = i4;
      return;
     }
    }
    break;
   }
  case 261:
   {
    if (i156) {
     i185 = i1 + 324 | 0;
     __ZN7WebCore11RenderStyle16setNamedGridAreaERKN3WTF7HashMapINS1_6StringENS_14GridCoordinateENS1_10StringHashENS1_10HashTraitsIS3_EENS6_IS4_EEEE(i160, (HEAP32[(HEAP32[(HEAP32[i185 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 184 | 0);
     __ZN7WebCore11RenderStyle24setNamedGridAreaRowCountEj(HEAP32[i161 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i185 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 204 >> 2] | 0);
     __ZN7WebCore11RenderStyle27setNamedGridAreaColumnCountEj(HEAP32[i161 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i185 >> 2] | 0) + 20 >> 2] | 0) + 80 >> 2] | 0) + 208 >> 2] | 0);
     STACKTOP = i4;
     return;
    }
    if (!i159) {
     if (i154) {
      STACKTOP = i4;
      return;
     }
     __ZN7WebCore11RenderStyle16setNamedGridAreaERKN3WTF7HashMapINS1_6StringENS_14GridCoordinateENS1_10StringHashENS1_10HashTraitsIS3_EENS6_IS4_EEEE(i160, i3 + 8 | 0);
     __ZN7WebCore11RenderStyle24setNamedGridAreaRowCountEj(HEAP32[i161 >> 2] | 0, HEAP32[i3 + 28 >> 2] | 0);
     __ZN7WebCore11RenderStyle27setNamedGridAreaColumnCountEj(HEAP32[i161 >> 2] | 0, HEAP32[i3 + 32 >> 2] | 0);
     STACKTOP = i4;
     return;
    }
    _memset(i152 | 0, 0, 20) | 0;
    __ZN7WebCore11RenderStyle16setNamedGridAreaERKN3WTF7HashMapINS1_6StringENS_14GridCoordinateENS1_10StringHashENS1_10HashTraitsIS3_EENS6_IS4_EEEE(i160, i152);
    i185 = HEAP32[i152 >> 2] | 0;
    if ((i185 | 0) != 0) {
     i171 = HEAP32[i152 + 4 >> 2] | 0;
     if ((i171 | 0) > 0) {
      i202 = 0;
      while (1) {
       i199 = HEAP32[i185 + (i202 * 20 & -1) >> 2] | 0;
       i207 = i199;
       do {
        if (!((i207 | 0) == (-1 | 0) | (i207 | 0) == 0)) {
         i204 = i199 | 0;
         i205 = (HEAP32[i204 >> 2] | 0) - 2 | 0;
         if ((i205 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i199);
          break;
         } else {
          HEAP32[i204 >> 2] = i205;
          break;
         }
        }
       } while (0);
       i202 = i202 + 1 | 0;
       if ((i202 | 0) >= (i171 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i185);
    }
    __ZN7WebCore11RenderStyle24setNamedGridAreaRowCountEj(HEAP32[i161 >> 2] | 0, 0);
    __ZN7WebCore11RenderStyle27setNamedGridAreaColumnCountEj(HEAP32[i161 >> 2] | 0, 0);
    STACKTOP = i4;
    return;
   }
  case 20:
  case 26:
  case 29:
  case 33:
  case 34:
  case 41:
  case 42:
  case 48:
  case 52:
  case 53:
  case 57:
  case 58:
  case 59:
  case 65:
  case 86:
  case 90:
  case 104:
  case 109:
  case 113:
  case 154:
  case 171:
  case 188:
  case 192:
  case 196:
  case 204:
  case 203:
  case 234:
  case 228:
  case 241:
  case 244:
  case 250:
  case 259:
  case 260:
  case 281:
  case 286:
  case 292:
  case 303:
  case 306:
  case 336:
  case 342:
  case 351:
  case 346:
  case 128:
  case 160:
  case 0:
  case 80:
  case 118:
  case 135:
  case 136:
  case 137:
  case 138:
  case 139:
  case 141:
  case 142:
  case 143:
  case 144:
  case 145:
  case 148:
  case 149:
  case 150:
  case 151:
  case 152:
  case 249:
  case 335:
  case 155:
  case 156:
  case 157:
  case 158:
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 27:
  case 28:
  case 30:
  case 31:
  case 32:
  case 35:
  case 36:
  case 37:
  case 38:
  case 39:
  case 40:
  case 43:
  case 44:
  case 45:
  case 46:
  case 47:
  case 49:
  case 50:
  case 51:
  case 54:
  case 55:
  case 56:
  case 60:
  case 61:
  case 62:
  case 63:
  case 64:
  case 66:
  case 68:
  case 69:
  case 70:
  case 71:
  case 1:
  case 74:
  case 75:
  case 76:
  case 2:
  case 3:
  case 78:
  case 79:
  case 6:
  case 7:
  case 8:
  case 9:
  case 82:
  case 83:
  case 84:
  case 85:
  case 19:
  case 87:
  case 88:
  case 89:
  case 91:
  case 92:
  case 93:
  case 94:
  case 95:
  case 96:
  case 97:
  case 98:
  case 101:
  case 102:
  case 103:
  case 105:
  case 106:
  case 107:
  case 108:
  case 110:
  case 111:
  case 112:
  case 114:
  case 115:
  case 116:
  case 117:
  case 119:
  case 120:
  case 121:
  case 122:
  case 123:
  case 125:
  case 126:
  case 127:
  case 129:
  case 131:
  case 130:
  case 132:
  case 133:
  case 134:
  case 140:
  case 10:
  case 147:
  case 153:
  case 159:
  case 161:
  case 162:
  case 172:
  case 173:
  case 174:
  case 175:
  case 176:
  case 177:
  case 178:
  case 179:
  case 180:
  case 181:
  case 182:
  case 184:
  case 185:
  case 186:
  case 187:
  case 200:
  case 201:
  case 202:
  case 208:
  case 209:
  case 235:
  case 210:
  case 211:
  case 212:
  case 213:
  case 214:
  case 215:
  case 216:
  case 219:
  case 220:
  case 221:
  case 222:
  case 223:
  case 224:
  case 226:
  case 227:
  case 229:
  case 230:
  case 231:
  case 232:
  case 233:
  case 77:
  case 238:
  case 239:
  case 240:
  case 242:
  case 243:
  case 245:
  case 246:
  case 247:
  case 248:
  case 316:
  case 360:
  case 359:
  case 12:
  case 13:
  case 14:
  case 263:
  case 264:
  case 265:
  case 266:
  case 267:
  case 268:
  case 270:
  case 271:
  case 272:
  case 273:
  case 274:
  case 287:
  case 288:
  case 289:
  case 290:
  case 291:
  case 293:
  case 294:
  case 295:
  case 296:
  case 297:
  case 298:
  case 299:
  case 300:
  case 301:
  case 302:
  case 304:
  case 305:
  case 307:
  case 308:
  case 309:
  case 310:
  case 315:
  case 322:
  case 323:
  case 324:
  case 325:
  case 362:
  case 363:
  case 364:
  case 361:
  case 326:
  case 327:
  case 328:
  case 330:
  case 331:
  case 332:
  case 333:
  case 334:
  case 337:
  case 338:
  case 339:
  case 340:
  case 341:
  case 343:
  case 347:
  case 348:
  case 349:
  case 350:
  case 352:
  case 353:
  case 354:
  case 355:
  case 356:
  case 357:
  case 358:
  case 72:
  case 367:
  case 368:
  case 369:
  case 365:
  case 366:
  case 370:
  case 371:
  case 99:
  case 100:
  case 163:
  case 164:
  case 165:
  case 166:
  case 167:
  case 168:
  case 169:
  case 18:
   {
    STACKTOP = i4;
    return;
   }
  default:
   {
    __ZN7WebCore13StyleResolver16applySVGPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if (i156) {
  i156 = HEAP32[i161 >> 2] | 0;
  i2 = HEAP32[(HEAP32[(HEAP32[i1 + 324 >> 2] | 0) + 24 >> 2] | 0) + 116 >> 2] | 0;
  i1 = i58 | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i152 = i2 | 0;
   HEAP32[i152 >> 2] = (HEAP32[i152 >> 2] | 0) + 1;
  }
  __ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE(i156, i58);
  i58 = HEAP32[i1 >> 2] | 0;
  if ((i58 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i1 = i58 | 0;
  i156 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i156 | 0) == 0) {
   __ZN7WebCore10QuotesDataD1Ev(i58);
   __ZN3WTF8fastFreeEPv(i58);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = i156;
   STACKTOP = i4;
   return;
  }
 }
 if (i159) {
  i159 = HEAP32[i161 >> 2] | 0;
  i156 = i59 | 0;
  HEAP32[i156 >> 2] = 0;
  __ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE(i159, i59);
  i59 = HEAP32[i156 >> 2] | 0;
  if ((i59 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i156 = i59 | 0;
  i159 = (HEAP32[i156 >> 2] | 0) - 1 | 0;
  if ((i159 | 0) == 0) {
   __ZN7WebCore10QuotesDataD1Ev(i59);
   __ZN3WTF8fastFreeEPv(i59);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i156 >> 2] = i159;
   STACKTOP = i4;
   return;
  }
 }
 if ((HEAP32[i157 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
  if ((i162 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i162 + 4 >> 2] & 508 | 0) != 472) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i162 + 8 >> 2] | 0) != 3) {
   STACKTOP = i4;
   return;
  }
  i162 = HEAP32[i161 >> 2] | 0;
  i157 = i66 | 0;
  HEAP32[i157 >> 2] = 0;
  i159 = i66 + 4 | 0;
  HEAP32[i159 >> 2] = 0;
  i156 = i66 + 8 | 0;
  HEAP32[i156 >> 2] = 0;
  __ZN7WebCore10QuotesData6createERKN3WTF6VectorINSt3__14pairINS1_6StringES5_EELj0ENS1_15CrashOnOverflowEEE(i65, i66);
  __ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE(i162, i65);
  i162 = HEAP32[i65 >> 2] | 0;
  do {
   if ((i162 | 0) != 0) {
    i65 = i162 | 0;
    i66 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
    if ((i66 | 0) == 0) {
     __ZN7WebCore10QuotesDataD1Ev(i162);
     __ZN3WTF8fastFreeEPv(i162);
     break;
    } else {
     HEAP32[i65 >> 2] = i66;
     break;
    }
   }
  } while (0);
  i162 = HEAP32[i156 >> 2] | 0;
  if ((i162 | 0) != 0) {
   i66 = HEAP32[i157 >> 2] | 0;
   i65 = i66 + (i162 << 3) | 0;
   i162 = i66;
   while (1) {
    i66 = HEAP32[i162 + 4 >> 2] | 0;
    do {
     if ((i66 | 0) != 0) {
      i59 = i66 | 0;
      i1 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
      if ((i1 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i66);
       break;
      } else {
       HEAP32[i59 >> 2] = i1;
       break;
      }
     }
    } while (0);
    i66 = HEAP32[i162 >> 2] | 0;
    do {
     if ((i66 | 0) != 0) {
      i185 = i66 | 0;
      i1 = (HEAP32[i185 >> 2] | 0) - 2 | 0;
      if ((i1 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i66);
       break;
      } else {
       HEAP32[i185 >> 2] = i1;
       break;
      }
     }
    } while (0);
    i162 = i162 + 8 | 0;
    if ((i162 | 0) == (i65 | 0)) {
     break;
    }
   }
   HEAP32[i156 >> 2] = 0;
  }
  i156 = HEAP32[i157 >> 2] | 0;
  if ((i156 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i157 >> 2] = 0;
  HEAP32[i159 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i156);
  STACKTOP = i4;
  return;
 }
 i156 = i60 | 0;
 HEAP32[i156 >> 2] = 0;
 i159 = i60 + 4 | 0;
 HEAP32[i159 >> 2] = 0;
 i157 = i60 + 8 | 0;
 HEAP32[i157 >> 2] = 0;
 i65 = i3 + 16 | 0;
 i162 = HEAP32[i65 >> 2] | 0;
 L1457 : do {
  if ((i162 | 0) != 0) {
   i66 = i3 + 8 | 0;
   i1 = i63 | 0;
   i185 = i61 | 0;
   i59 = i63 + 4 | 0;
   i58 = i62 | 0;
   i152 = i63;
   i2 = 0;
   i160 = i162;
   L1459 : while (1) {
    i154 = HEAP32[i66 >> 2] | 0;
    i151 = HEAP32[i154 + (i2 << 2) >> 2] | 0;
    i150 = i2 | 1;
    do {
     if (i160 >>> 0 > i150 >>> 0) {
      i149 = HEAP32[i154 + (i150 << 2) >> 2] | 0;
      if ((i149 | 0) == 0) {
       break;
      }
      __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i61, i151);
      __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i62, i149);
      i149 = HEAP32[i185 >> 2] | 0;
      HEAP32[i1 >> 2] = i149;
      if ((i149 | 0) != 0) {
       i148 = i149 | 0;
       HEAP32[i148 >> 2] = (HEAP32[i148 >> 2] | 0) + 2;
      }
      i148 = HEAP32[i58 >> 2] | 0;
      HEAP32[i59 >> 2] = i148;
      if ((i148 | 0) != 0) {
       i149 = i148 | 0;
       HEAP32[i149 >> 2] = (HEAP32[i149 >> 2] | 0) + 2;
      }
      i149 = HEAP32[i157 >> 2] | 0;
      if ((i149 | 0) == (HEAP32[i159 >> 2] | 0)) {
       i148 = i149 + 1 | 0;
       i147 = HEAP32[i156 >> 2] | 0;
       do {
        if (i147 >>> 0 > i63 >>> 0) {
         i194 = 199;
        } else {
         if ((i147 + (i149 << 3) | 0) >>> 0 <= i63 >>> 0) {
          i194 = 199;
          break;
         }
         i146 = i152 - i147 >> 3;
         i145 = i148 + (i149 >>> 2) | 0;
         i144 = i145 >>> 0 > 16 >>> 0 ? i145 : 16;
         i145 = i144 >>> 0 > i148 >>> 0 ? i144 : i148;
         do {
          if (i149 >>> 0 < i145 >>> 0) {
           if (i145 >>> 0 > 536870911 >>> 0) {
            i194 = 209;
            break L1459;
           }
           i144 = __ZN3WTF18fastMallocGoodSizeEj(i145 << 3) | 0;
           HEAP32[i159 >> 2] = i144 >>> 3;
           i263 = __ZN3WTF10fastMallocEj(i144) | 0;
           HEAP32[i156 >> 2] = i263;
           i144 = i147;
           _memcpy(i263 | 0, i144 | 0, i149 << 3) | 0;
           if ((i147 | 0) == 0) {
            break;
           }
           if ((HEAP32[i156 >> 2] | 0) == (i147 | 0)) {
            HEAP32[i156 >> 2] = 0;
            HEAP32[i159 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i144);
          }
         } while (0);
         i145 = HEAP32[i156 >> 2] | 0;
         i264 = i145 + (i146 << 3) | 0;
         i265 = i145;
        }
       } while (0);
       if ((i194 | 0) == 199) {
        i194 = 0;
        i145 = i148 + (i149 >>> 2) | 0;
        i144 = i145 >>> 0 > 16 >>> 0 ? i145 : 16;
        i145 = i144 >>> 0 > i148 >>> 0 ? i144 : i148;
        do {
         if (i149 >>> 0 < i145 >>> 0) {
          if (i145 >>> 0 > 536870911 >>> 0) {
           i194 = 201;
           break L1459;
          }
          i144 = __ZN3WTF18fastMallocGoodSizeEj(i145 << 3) | 0;
          HEAP32[i159 >> 2] = i144 >>> 3;
          i263 = __ZN3WTF10fastMallocEj(i144) | 0;
          HEAP32[i156 >> 2] = i263;
          i144 = i147;
          _memcpy(i263 | 0, i144 | 0, i149 << 3) | 0;
          if ((i147 | 0) == 0) {
           break;
          }
          if ((HEAP32[i156 >> 2] | 0) == (i147 | 0)) {
           HEAP32[i156 >> 2] = 0;
           HEAP32[i159 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i144);
         }
        } while (0);
        i264 = i63;
        i265 = HEAP32[i156 >> 2] | 0;
       }
       i147 = HEAP32[i157 >> 2] | 0;
       i145 = i264 | 0;
       i148 = HEAP32[i145 >> 2] | 0;
       HEAP32[i145 >> 2] = 0;
       HEAP32[i265 + (i147 << 3) >> 2] = i148;
       i148 = i264 + 4 | 0;
       i145 = HEAP32[i148 >> 2] | 0;
       HEAP32[i148 >> 2] = 0;
       HEAP32[i265 + (i147 << 3) + 4 >> 2] = i145;
       i266 = HEAP32[i157 >> 2] | 0;
      } else {
       i145 = HEAP32[i156 >> 2] | 0;
       i147 = HEAP32[i1 >> 2] | 0;
       HEAP32[i1 >> 2] = 0;
       HEAP32[i145 + (i149 << 3) >> 2] = i147;
       i147 = HEAP32[i59 >> 2] | 0;
       HEAP32[i59 >> 2] = 0;
       HEAP32[i145 + (i149 << 3) + 4 >> 2] = i147;
       i266 = HEAP32[i157 >> 2] | 0;
      }
      HEAP32[i157 >> 2] = i266 + 1;
      i147 = HEAP32[i59 >> 2] | 0;
      do {
       if ((i147 | 0) != 0) {
        i145 = i147 | 0;
        i148 = (HEAP32[i145 >> 2] | 0) - 2 | 0;
        if ((i148 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i147);
         break;
        } else {
         HEAP32[i145 >> 2] = i148;
         break;
        }
       }
      } while (0);
      i147 = HEAP32[i1 >> 2] | 0;
      do {
       if ((i147 | 0) != 0) {
        i149 = i147 | 0;
        i148 = (HEAP32[i149 >> 2] | 0) - 2 | 0;
        if ((i148 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i147);
         break;
        } else {
         HEAP32[i149 >> 2] = i148;
         break;
        }
       }
      } while (0);
      i147 = HEAP32[i58 >> 2] | 0;
      do {
       if ((i147 | 0) != 0) {
        i148 = i147 | 0;
        i149 = (HEAP32[i148 >> 2] | 0) - 2 | 0;
        if ((i149 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i147);
         break;
        } else {
         HEAP32[i148 >> 2] = i149;
         break;
        }
       }
      } while (0);
      i147 = HEAP32[i185 >> 2] | 0;
      if ((i147 | 0) == 0) {
       break;
      }
      i149 = i147 | 0;
      i148 = (HEAP32[i149 >> 2] | 0) - 2 | 0;
      if ((i148 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i147);
       break;
      } else {
       HEAP32[i149 >> 2] = i148;
       break;
      }
     }
    } while (0);
    i2 = i2 + 2 | 0;
    i160 = HEAP32[i65 >> 2] | 0;
    if (i2 >>> 0 >= i160 >>> 0) {
     break L1457;
    }
   }
   if ((i194 | 0) == 201) {
    _WTFCrash();
   } else if ((i194 | 0) == 209) {
    _WTFCrash();
   }
  }
 } while (0);
 i194 = HEAP32[i161 >> 2] | 0;
 __ZN7WebCore10QuotesData6createERKN3WTF6VectorINSt3__14pairINS1_6StringES5_EELj0ENS1_15CrashOnOverflowEEE(i64, i60);
 __ZN7WebCore11RenderStyle9setQuotesEN3WTF10PassRefPtrINS_10QuotesDataEEE(i194, i64);
 i194 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i194 | 0) != 0) {
   i64 = i194 | 0;
   i60 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
   if ((i60 | 0) == 0) {
    __ZN7WebCore10QuotesDataD1Ev(i194);
    __ZN3WTF8fastFreeEPv(i194);
    break;
   } else {
    HEAP32[i64 >> 2] = i60;
    break;
   }
  }
 } while (0);
 i194 = HEAP32[i157 >> 2] | 0;
 if ((i194 | 0) != 0) {
  i60 = HEAP32[i156 >> 2] | 0;
  i64 = i60 + (i194 << 3) | 0;
  i194 = i60;
  while (1) {
   i60 = HEAP32[i194 + 4 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i161 = i60 | 0;
     i65 = (HEAP32[i161 >> 2] | 0) - 2 | 0;
     if ((i65 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i161 >> 2] = i65;
      break;
     }
    }
   } while (0);
   i60 = HEAP32[i194 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i65 = i60 | 0;
     i161 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
     if ((i161 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i65 >> 2] = i161;
      break;
     }
    }
   } while (0);
   i194 = i194 + 8 | 0;
   if ((i194 | 0) == (i64 | 0)) {
    break;
   }
  }
  HEAP32[i157 >> 2] = 0;
 }
 i157 = HEAP32[i156 >> 2] | 0;
 if ((i157 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i156 >> 2] = 0;
 HEAP32[i159 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i157);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13StyleResolver17adjustRenderStyleERNS_11RenderStyleERKS1_PNS_7ElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
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
 i19 = i5 + 200 | 0;
 i20 = i5 + 248 | 0;
 i21 = i20;
 i22 = i2 + 48 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = i23 << 5 & 992 | i23 & -993;
 HEAP32[i22 >> 2] = i24;
 do {
  if ((i23 & 31 | 0) == 22) {
   i25 = i24;
  } else {
   i26 = i1 + 216 | 0;
   i27 = (i4 | 0) == 0;
   L3 : do {
    if ((HEAP32[(HEAP32[i26 >> 2] | 0) + 664 >> 2] | 0) != 0 | i27) {
     i28 = i24;
     i29 = 12;
    } else {
     i30 = HEAP32[i4 + 44 >> 2] | 0;
     i31 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
     do {
      if ((i30 | 0) != (i31 | 0)) {
       i32 = HEAP32[i30 + 12 >> 2] | 0;
       if ((i32 | 0) == (HEAP32[i31 + 12 >> 2] | 0)) {
        if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i31 + 16 >> 2] | 0)) {
         break;
        }
       }
       if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
        i28 = i24;
        i29 = 12;
        break L3;
       }
       if ((i32 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
        i33 = i24;
        i34 = i30;
        i35 = i31;
        i29 = 14;
        break L3;
       }
       switch (i23 & 31 | 0) {
       case 0:
       case 19:
       case 17:
       case 7:
       case 5:
       case 21:
        {
         i36 = 7;
         break;
        }
       default:
        {
         i36 = 6;
        }
       }
       i32 = i24 & -32 | i36;
       HEAP32[i22 >> 2] = i32;
       i28 = i32;
       i29 = 12;
       break L3;
      }
     } while (0);
     i31 = i24 & -100663328 | 14;
     HEAP32[i22 >> 2] = i31;
     i28 = i31;
     i29 = 12;
    }
   } while (0);
   do {
    if ((i29 | 0) == 12) {
     if (i27) {
      i37 = 0;
      i38 = i28;
      break;
     }
     i33 = i28;
     i34 = HEAP32[i4 + 44 >> 2] | 0;
     i35 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
     i29 = 14;
    }
   } while (0);
   do {
    if ((i29 | 0) == 14) {
     i27 = i4 + 44 | 0;
     do {
      if ((i34 | 0) == (i35 | 0)) {
       i29 = 20;
      } else {
       i31 = HEAP32[i34 + 12 >> 2] | 0;
       if ((i31 | 0) == (HEAP32[i35 + 12 >> 2] | 0)) {
        if ((HEAP32[i34 + 16 >> 2] | 0) == (HEAP32[i35 + 16 >> 2] | 0)) {
         i29 = 20;
         break;
        }
       }
       i30 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
       if ((i34 | 0) == (i30 | 0)) {
        i29 = 20;
        break;
       }
       if ((i31 | 0) != (HEAP32[i30 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i34 + 16 >> 2] | 0) == (HEAP32[i30 + 16 >> 2] | 0)) {
        i29 = 20;
       }
      }
     } while (0);
     do {
      if ((i29 | 0) == 20) {
       i30 = i2 + 44 | 0;
       i31 = HEAP32[i30 >> 2] | 0;
       if ((i31 & 7 | 0) != 5) {
        break;
       }
       i32 = i31 & -8;
       if ((HEAP8[(HEAP32[i2 + 4 >> 2] | 0) + 9 | 0] | 0) == 3) {
        HEAP32[i30 >> 2] = i32;
        break;
       } else {
        HEAP32[i30 >> 2] = i32 | 4;
        break;
       }
      }
     } while (0);
     do {
      if ((HEAP32[i4 + 12 >> 2] & 16 | 0) != 0) {
       if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       i32 = i2 + 40 | 0;
       i30 = HEAP32[i32 >> 2] | 0;
       if (((i30 >>> 13 & 15) - 4 | 0) >>> 0 >= 3 >>> 0) {
        break;
       }
       HEAP32[i32 >> 2] = i30 & -122881 | 57344;
      }
     } while (0);
     i30 = HEAP32[i27 >> 2] | 0;
     i32 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
     do {
      if ((i30 | 0) == (i32 | 0)) {
       i29 = 34;
      } else {
       i31 = HEAP32[i30 + 12 >> 2] | 0;
       if ((i31 | 0) == (HEAP32[i32 + 12 >> 2] | 0)) {
        if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i32 + 16 >> 2] | 0)) {
         i29 = 34;
         break;
        }
       }
       i39 = HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0;
       if ((i30 | 0) == (i39 | 0)) {
        i29 = 34;
        break;
       }
       if ((i31 | 0) != (HEAP32[i39 + 12 >> 2] | 0)) {
        i40 = i33;
        i41 = i30;
        break;
       }
       if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
        i29 = 34;
       } else {
        i40 = i33;
        i41 = i30;
       }
      }
     } while (0);
     if ((i29 | 0) == 34) {
      i30 = i33 & -29360160 | 1;
      HEAP32[i22 >> 2] = i30;
      i40 = i30;
      i41 = HEAP32[i27 >> 2] | 0;
     }
     i30 = HEAP32[__ZN7WebCore9HTMLNames5rtTagE >> 2] | 0;
     do {
      if ((i41 | 0) == (i30 | 0)) {
       i29 = 38;
      } else {
       if ((HEAP32[i41 + 12 >> 2] | 0) != (HEAP32[i30 + 12 >> 2] | 0)) {
        i42 = i40;
        i43 = i41;
        break;
       }
       if ((HEAP32[i41 + 16 >> 2] | 0) == (HEAP32[i30 + 16 >> 2] | 0)) {
        i29 = 38;
       } else {
        i42 = i40;
        i43 = i41;
       }
      }
     } while (0);
     if ((i29 | 0) == 38) {
      i30 = i40 & -130023425;
      HEAP32[i22 >> 2] = i30;
      i42 = i30;
      i43 = HEAP32[i27 >> 2] | 0;
     }
     i30 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
     do {
      if ((i43 | 0) == (i30 | 0)) {
       i29 = 42;
      } else {
       if ((HEAP32[i43 + 12 >> 2] | 0) != (HEAP32[i30 + 12 >> 2] | 0)) {
        i44 = i43;
        break;
       }
       if ((HEAP32[i43 + 16 >> 2] | 0) == (HEAP32[i30 + 16 >> 2] | 0)) {
        i29 = 42;
       } else {
        i44 = i43;
       }
      }
     } while (0);
     do {
      if ((i29 | 0) == 42) {
       i30 = i2 + 40 | 0;
       i32 = HEAP32[i30 >> 2] | 0;
       if ((i32 & 122880 | 0) != 57344) {
        i44 = i43;
        break;
       }
       HEAP32[i30 >> 2] = i32 & -122881 | 16384;
       i44 = HEAP32[i27 >> 2] | 0;
      }
     } while (0);
     i27 = HEAP32[__ZN7WebCore9HTMLNames9legendTagE >> 2] | 0;
     if ((i44 | 0) != (i27 | 0)) {
      if ((HEAP32[i44 + 12 >> 2] | 0) != (HEAP32[i27 + 12 >> 2] | 0)) {
       i37 = 1;
       i38 = i42;
       break;
      }
      if ((HEAP32[i44 + 16 >> 2] | 0) != (HEAP32[i27 + 16 >> 2] | 0)) {
       i37 = 1;
       i38 = i42;
       break;
      }
     }
     i27 = i42 & -32 | 1;
     HEAP32[i22 >> 2] = i27;
     i37 = 1;
     i38 = i27;
    }
   } while (0);
   i27 = i38 >>> 22 & 7;
   do {
    if ((i27 | 0) == 6 | (i27 | 0) == 2) {
     i29 = 52;
    } else {
     if ((i38 & 100663296 | 0) != 0) {
      i29 = 52;
      break;
     }
     if (!i37) {
      i45 = i38;
      break;
     }
     if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i4 | 0)) {
      i29 = 52;
     } else {
      i45 = i38;
     }
    }
   } while (0);
   if ((i29 | 0) == 52) {
    i27 = i38 & 31;
    switch (i27 | 0) {
    case 22:
     {
      i46 = 22;
      break;
     }
    case 1:
    case 6:
    case 16:
    case 18:
    case 20:
     {
      i46 = i27;
      break;
     }
    case 17:
     {
      i46 = 16;
      break;
     }
    case 19:
     {
      i46 = 18;
      break;
     }
    case 21:
     {
      i46 = 20;
      break;
     }
    case 0:
    case 3:
    case 4:
    case 5:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
     {
      i46 = 1;
      break;
     }
    case 7:
     {
      i46 = 6;
      break;
     }
    case 2:
     {
      i46 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 664 >> 2] | 0) != 0 | (i38 & 100663296 | 0) == 0 ? 2 : 1;
      break;
     }
    default:
     {
      i46 = 1;
     }
    }
    i27 = i38 & -32 | i46;
    HEAP32[i22 >> 2] = i27;
    i45 = i27;
   }
   do {
    if ((i45 & 31 | 0) == 0) {
     if ((HEAP32[i2 + 52 >> 2] & 4032 | 0) != 0) {
      i47 = i45;
      break;
     }
     if (((HEAP32[i3 + 44 >> 2] ^ HEAP32[i2 + 44 >> 2]) & 24576 | 0) == 0) {
      i47 = i45;
      break;
     }
     i27 = i45 & -32 | 5;
     HEAP32[i22 >> 2] = i27;
     i47 = i27;
    } else {
     i47 = i45;
    }
   } while (0);
   do {
    if (((i47 & 31) - 8 | 0) >>> 0 < 4 >>> 0) {
     i26 = i47 >>> 22 & 7;
     if (!((i26 | 0) == 3 | (i26 | 0) == 1)) {
      i48 = i47;
      break;
     }
     i26 = i47 & -29360129;
     HEAP32[i22 >> 2] = i26;
     i48 = i26;
    } else {
     i48 = i47;
    }
   } while (0);
   i26 = i48 & 31;
   do {
    if ((i26 - 8 | 0) >>> 0 < 7 >>> 0) {
     i27 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
     i32 = i2 + 44 | 0;
     i30 = HEAP32[i32 >> 2] | 0;
     if ((i30 >>> 13 & 3 | 0) == (i27 | 0)) {
      i49 = i30;
      break;
     }
     i39 = i27 << 13 | i30 & -24577;
     HEAP32[i32 >> 2] = i39;
     i49 = i39;
    } else {
     i49 = HEAP32[i2 + 44 >> 2] | 0;
    }
   } while (0);
   i39 = i2 + 44 | 0;
   do {
    if ((i49 & 24576 | 0) != 0) {
     if ((i26 - 16 | 0) >>> 0 >= 2 >>> 0) {
      break;
     }
     HEAP32[i39 >> 2] = i49 & -24577;
    }
   } while (0);
   if (((HEAP32[i3 + 48 >> 2] & 31) - 18 | 0) >>> 0 >= 2 >>> 0) {
    i25 = i48;
    break;
   }
   HEAP32[i22 >> 2] = i48 & -100663297;
   switch (i26 | 0) {
   case 7:
    {
     i50 = 6;
     i29 = 85;
     break;
    }
   case 17:
    {
     i50 = 16;
     i29 = 85;
     break;
    }
   case 19:
    {
     i50 = 18;
     i29 = 85;
     break;
    }
   case 21:
    {
     i50 = 20;
     i29 = 85;
     break;
    }
   case 0:
   case 3:
   case 4:
   case 5:
   case 8:
   case 9:
   case 10:
   case 11:
   case 12:
   case 13:
   case 14:
   case 15:
    {
     i50 = 1;
     i29 = 85;
     break;
    }
   case 22:
    {
     i50 = 22;
     i29 = 85;
     break;
    }
   case 1:
   case 6:
   case 16:
   case 18:
   case 20:
    {
     i50 = i26;
     i29 = 85;
     break;
    }
   case 2:
    {
     i51 = 2;
     break;
    }
   default:
    {
     i50 = 1;
     i29 = 85;
    }
   }
   if ((i29 | 0) == 85) {
    i51 = i50;
   }
   i39 = i48 & -100663328 | i51 & 31;
   HEAP32[i22 >> 2] = i39;
   i25 = i39;
  }
 } while (0);
 do {
  if ((i25 & 29360128 | 0) == 0) {
   if (((HEAP32[i3 + 48 >> 2] & 31) - 18 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   __ZN7WebCore11RenderStyle16setHasAutoZIndexEv(i2);
  }
 } while (0);
 i25 = i2 + 4 | 0;
 L120 : do {
  if ((HEAP32[(HEAP32[i25 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   i51 = (i4 | 0) != 0;
   if (i51) {
    if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) != (i4 | 0)) {
     i29 = 93;
    }
   } else {
    i29 = 93;
   }
   L124 : do {
    if ((i29 | 0) == 93) {
     i48 = i2 + 20 | 0;
     i50 = HEAP32[i48 >> 2] | 0;
     if (+HEAPF32[i50 + 4 >> 2] < +1) {
      break;
     }
     if ((HEAP32[(HEAP32[i50 + 72 >> 2] | 0) + 12 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i50 + 292 >> 2] & 512 | 0) != 0) {
      break;
     }
     if (+HEAPF32[i50 + 16 >> 2] > +0) {
      break;
     }
     i49 = i50 + 116 | 0;
     while (1) {
      if ((HEAP32[i49 + 4 >> 2] | 0) != 0) {
       break L124;
      }
      i49 = HEAP32[i49 >> 2] | 0;
      if ((i49 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i50 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i50 + 212 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i50 + 104 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[(HEAP32[i50 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i50 + 296 >> 2] & 4063232 | 0) != 0) {
      break;
     }
     i49 = (HEAP32[i22 >> 2] | 0) >>> 22 & 7;
     if ((i49 | 0) == 3) {
      break;
     }
     do {
      if (!((i49 | 0) != 6 | i51 ^ 1)) {
       i47 = i4 + 20 | 0;
       if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i47 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
        break;
       }
       if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i47 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 185 | 0] & 1) != 0) {
        break L124;
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i48 >> 2] | 0) + 288 >> 2] | 0) == 0) {
      break L120;
     }
    }
   } while (0);
   __ZN7WebCore11RenderStyle9setZIndexEi(i2, 0);
  }
 } while (0);
 i51 = (i4 | 0) != 0;
 do {
  if (i51) {
   if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i26 = HEAP32[i22 >> 2] | 0;
   i49 = i26 >>> 10 & 7;
   i50 = i26 >>> 13 & 7;
   HEAP32[i22 >> 2] = ((i49 | 0) == 0 ? 3072 : i49 << 10) | i26 & -64513 | ((i50 | 0) == 0 ? 24576 : i50 << 13);
  }
 } while (0);
 i50 = HEAP32[i22 >> 2] | 0;
 L151 : do {
  switch (i50 & 31 | 0) {
  case 6:
  case 7:
  case 3:
  case 5:
  case 17:
   {
    i29 = 121;
    break;
   }
  default:
   {
    do {
     if ((i4 | 0) != 0) {
      i26 = HEAP32[i4 + 16 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      if ((HEAP32[i26 + 12 >> 2] & 4096 | 0) == 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i26 | 0)) {
       i29 = 121;
       break L151;
      }
     }
    } while (0);
    if ((i50 & 100663296 | 0) != 0) {
     i29 = 121;
     break L151;
    }
    i26 = i50 >>> 22 & 7;
    i49 = (HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) >>> 1 & 15;
    if ((i26 | 0) == 6 | (i26 | 0) == 2) {
     i52 = i49;
     i29 = 123;
     break L151;
    }
    i26 = i2 + 40 | 0;
    HEAP32[i26 >> 2] = HEAP32[i26 >> 2] | i49 << 19;
   }
  }
 } while (0);
 if ((i29 | 0) == 121) {
  i52 = (HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) >>> 1 & 15;
  i29 = 123;
 }
 if ((i29 | 0) == 123) {
  i49 = i2 + 40 | 0;
  HEAP32[i49 >> 2] = HEAP32[i49 >> 2] & -7864321 | i52 << 19;
 }
 i52 = i50 & 7168;
 i49 = i50 & 57344;
 do {
  if ((i52 | 0) != 5120 | (i49 | 0) == 40960) {
   if (!((i49 | 0) != 40960 | (i52 | 0) == 5120)) {
    i26 = i50 & -7169 | 5120;
    HEAP32[i22 >> 2] = i26;
    i53 = i26;
    break;
   }
   if (!((i52 | 0) != 0 | (i49 | 0) == 0)) {
    i26 = i50 & -7169 | 3072;
    HEAP32[i22 >> 2] = i26;
    i53 = i26;
    break;
   }
   if ((i49 | 0) != 0 | (i52 | 0) == 0) {
    i53 = i50;
    break;
   }
   i26 = i50 & -57345 | 24576;
   HEAP32[i22 >> 2] = i26;
   i53 = i26;
  } else {
   i26 = i50 & -57345 | 40960;
   HEAP32[i22 >> 2] = i26;
   i53 = i26;
  }
 } while (0);
 L176 : do {
  if (((i53 >>> 13 & 7) - 6 | 0) >>> 0 < 2 >>> 0) {
   do {
    if (i51) {
     i50 = HEAP32[i4 + 44 >> 2] | 0;
     i52 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
     if ((i50 | 0) == (i52 | 0)) {
      i54 = i53;
      break L176;
     }
     i49 = HEAP32[i50 + 12 >> 2] | 0;
     if ((i49 | 0) == (HEAP32[i52 + 12 >> 2] | 0)) {
      if ((HEAP32[i50 + 16 >> 2] | 0) == (HEAP32[i52 + 16 >> 2] | 0)) {
       i54 = i53;
       break L176;
      }
     }
     i52 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i50 | 0) == (i52 | 0)) {
      i54 = i53;
      break L176;
     }
     if ((i49 | 0) != (HEAP32[i52 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i50 + 16 >> 2] | 0) == (HEAP32[i52 + 16 >> 2] | 0)) {
      i54 = i53;
      break L176;
     }
    }
   } while (0);
   HEAP32[i16 >> 2] = __ZN7WebCore28paginationModeForRenderStyleERKNS_11RenderStyleE(i2) | 0;
   __ZN7WebCore11RenderStyle33setColumnStylesFromPaginationModeERKNS_10Pagination4ModeE(i2, i16);
   i54 = HEAP32[i22 >> 2] | 0;
  } else {
   i54 = i53;
  }
 } while (0);
 i53 = i54 & 31;
 do {
  if ((i53 | 0) == 6 | (i53 | 0) == 7 | (i53 | 0) == 8 | (i53 | 0) == 11) {
   if ((i54 & 6144) >>> 0 < 2048 >>> 0) {
    i55 = i54;
   } else {
    i16 = i54 & -7169;
    HEAP32[i22 >> 2] = i16;
    i55 = i16;
   }
   if ((i55 & 49152) >>> 0 < 16384 >>> 0) {
    i56 = i55;
    break;
   }
   i16 = i55 & -57345;
   HEAP32[i22 >> 2] = i16;
   i56 = i16;
  } else {
   i56 = i54;
  }
 } while (0);
 i54 = i2 + 20 | 0;
 if ((HEAP32[(HEAP32[i54 >> 2] | 0) + 296 >> 2] & 63 | 0) == 34) {
  HEAP32[i22 >> 2] = i56 & -64513;
 }
 __ZN7WebCore11RenderStyle22adjustBackgroundLayersEv(i2);
 __ZN7WebCore11RenderStyle16adjustMaskLayersEv(i2);
 __ZN7WebCore11RenderStyle16adjustAnimationsEv(i2);
 __ZN7WebCore11RenderStyle17adjustTransitionsEv(i2);
 L198 : do {
  if (i51) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 448 >> 2] & 15](i4) | 0)) {
    break;
   }
   if ((__ZNK7WebCore11RenderStyle8fontSizeEv(i2) | 0) <= 10) {
    break;
   }
   do {
    if ((HEAP32[i4 + 12 >> 2] & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if (__ZNK7WebCore16HTMLInputElement13isImageButtonEv(i4) | 0) {
      break L198;
     }
    }
   } while (0);
   i56 = i10;
   i55 = i11;
   i53 = i12;
   i16 = i13;
   i52 = ~~(+HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2] * +2);
   i50 = HEAP8[(HEAP32[i25 >> 2] | 0) + 9 | 0] | 0;
   if (i50 << 24 >> 24 == 0 | (i50 - 4 & 255) >>> 0 < 2 >>> 0) {
    i29 = 157;
   } else {
    if (((i50 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
     i29 = 157;
    }
   }
   L208 : do {
    if ((i29 | 0) == 157) {
     i50 = i2 + 16 | 0;
     i49 = HEAP32[i50 >> 2] | 0;
     L210 : do {
      if ((HEAP8[i49 + 40 | 0] & 1) != 0) {
       HEAP32[i10 >> 2] = i52;
       HEAP8[i56 + 4 | 0] = 0;
       i26 = i56 + 5 | 0;
       HEAP8[i26] = 3;
       HEAP8[i56 + 6 | 0] = 0;
       do {
        if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i49 + 36 | 0, i56) | 0)) {
         i47 = HEAP32[i50 >> 2] | 0;
         if ((HEAP32[i47 >> 2] | 0) == 1) {
          i57 = i47;
         } else {
          __ZNK7WebCore17StyleSurroundData4copyEv(i8, i47);
          i47 = HEAP32[i8 >> 2] | 0;
          i45 = HEAP32[i50 >> 2] | 0;
          i46 = i45 | 0;
          i38 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          if ((i38 | 0) == 0) {
           __ZN7WebCore17StyleSurroundDataD2Ev(i45);
           __ZN3WTF8fastFreeEPv(i45);
          } else {
           HEAP32[i46 >> 2] = i38;
          }
          HEAP32[i50 >> 2] = i47;
          i57 = i47;
         }
         i47 = i57 + 36 | 0;
         if ((i47 | 0) == (i56 | 0)) {
          break;
         }
         i38 = i47;
         i47 = HEAP32[i10 + 4 >> 2] | 0;
         HEAP32[i38 >> 2] = HEAP32[i10 >> 2];
         HEAP32[i38 + 4 >> 2] = i47;
         HEAP8[i26] = 0;
         break L210;
        }
       } while (0);
       if ((HEAP8[i26] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i56);
      }
     } while (0);
     i49 = HEAP32[i50 >> 2] | 0;
     if ((HEAP8[i49 + 48 | 0] & 1) == 0) {
      break;
     }
     HEAP32[i11 >> 2] = i52;
     HEAP8[i55 + 4 | 0] = 0;
     i48 = i55 + 5 | 0;
     HEAP8[i48] = 3;
     HEAP8[i55 + 6 | 0] = 0;
     do {
      if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i49 + 44 | 0, i55) | 0)) {
       i47 = HEAP32[i50 >> 2] | 0;
       if ((HEAP32[i47 >> 2] | 0) == 1) {
        i58 = i47;
       } else {
        __ZNK7WebCore17StyleSurroundData4copyEv(i7, i47);
        i47 = HEAP32[i7 >> 2] | 0;
        i38 = HEAP32[i50 >> 2] | 0;
        i46 = i38 | 0;
        i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i45 | 0) == 0) {
         __ZN7WebCore17StyleSurroundDataD2Ev(i38);
         __ZN3WTF8fastFreeEPv(i38);
        } else {
         HEAP32[i46 >> 2] = i45;
        }
        HEAP32[i50 >> 2] = i47;
        i58 = i47;
       }
       i47 = i58 + 44 | 0;
       if ((i47 | 0) == (i55 | 0)) {
        break;
       }
       i45 = i47;
       i47 = HEAP32[i11 + 4 >> 2] | 0;
       HEAP32[i45 >> 2] = HEAP32[i11 >> 2];
       HEAP32[i45 + 4 >> 2] = i47;
       HEAP8[i48] = 0;
       break L208;
      }
     } while (0);
     if ((HEAP8[i48] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i55);
    }
   } while (0);
   if ((HEAP8[(HEAP32[i25 >> 2] | 0) + 17 | 0] | 0) != 0) {
    break;
   }
   i55 = i2 + 16 | 0;
   i56 = HEAP32[i55 >> 2] | 0;
   L240 : do {
    if ((HEAP8[i56 + 56 | 0] & 1) != 0) {
     HEAP32[i12 >> 2] = i52;
     HEAP8[i53 + 4 | 0] = 0;
     i50 = i53 + 5 | 0;
     HEAP8[i50] = 3;
     HEAP8[i53 + 6 | 0] = 0;
     do {
      if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i56 + 52 | 0, i53) | 0)) {
       i49 = HEAP32[i55 >> 2] | 0;
       if ((HEAP32[i49 >> 2] | 0) == 1) {
        i59 = i49;
       } else {
        __ZNK7WebCore17StyleSurroundData4copyEv(i6, i49);
        i49 = HEAP32[i6 >> 2] | 0;
        i47 = HEAP32[i55 >> 2] | 0;
        i45 = i47 | 0;
        i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        if ((i46 | 0) == 0) {
         __ZN7WebCore17StyleSurroundDataD2Ev(i47);
         __ZN3WTF8fastFreeEPv(i47);
        } else {
         HEAP32[i45 >> 2] = i46;
        }
        HEAP32[i55 >> 2] = i49;
        i59 = i49;
       }
       i49 = i59 + 52 | 0;
       if ((i49 | 0) == (i53 | 0)) {
        break;
       }
       i46 = i49;
       i49 = HEAP32[i12 + 4 >> 2] | 0;
       HEAP32[i46 >> 2] = HEAP32[i12 >> 2];
       HEAP32[i46 + 4 >> 2] = i49;
       HEAP8[i50] = 0;
       break L240;
      }
     } while (0);
     if ((HEAP8[i50] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i53);
    }
   } while (0);
   i53 = HEAP32[i55 >> 2] | 0;
   if ((HEAP8[i53 + 64 | 0] & 1) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = i52;
   HEAP8[i16 + 4 | 0] = 0;
   i56 = i16 + 5 | 0;
   HEAP8[i56] = 3;
   HEAP8[i16 + 6 | 0] = 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i53 + 60 | 0, i16) | 0)) {
     i48 = HEAP32[i55 >> 2] | 0;
     if ((HEAP32[i48 >> 2] | 0) == 1) {
      i60 = i48;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i9, i48);
      i48 = HEAP32[i9 >> 2] | 0;
      i49 = HEAP32[i55 >> 2] | 0;
      i46 = i49 | 0;
      i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      if ((i45 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i49);
       __ZN3WTF8fastFreeEPv(i49);
      } else {
       HEAP32[i46 >> 2] = i45;
      }
      HEAP32[i55 >> 2] = i48;
      i60 = i48;
     }
     i48 = i60 + 60 | 0;
     if ((i48 | 0) == (i16 | 0)) {
      break;
     }
     i45 = i48;
     i48 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i45 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i45 + 4 >> 2] = i48;
     HEAP8[i56] = 0;
     break L198;
    }
   } while (0);
   if ((HEAP8[i56] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i54 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0) {
   __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i17, 0);
   i13 = i17 | 0;
   i60 = HEAP32[i13 >> 2] | 0;
   i9 = (HEAP8[i1 + 393 | 0] & 1) != 0;
   __ZN7WebCore10BorderDataC2ERKS0_(i18, i1 + 396 | 0);
   __ZN7WebCore9FillLayerC1ERKS0_(i19, i1 + 496 | 0);
   i12 = i1 + 544 | 0;
   i59 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i20 + 4 >> 2] = i59;
   __ZN7WebCore11RenderTheme11adjustStyleERNS_13StyleResolverERNS_11RenderStyleEPNS_7ElementEbRKNS_10BorderDataERKNS_9FillLayerERKNS_5ColorE(i60, i1, i2, i4, i9, i18, i19, i21);
   __ZN7WebCore9FillLayerD1Ev(i19);
   __ZN7WebCore10BorderDataD2Ev(i18);
   i9 = HEAP32[i13 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i13 = i9 + 4 | 0;
   i9 = i13 | 0;
   i60 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i60 | 0) != 0) {
    HEAP32[i9 >> 2] = i60;
    break;
   }
   i60 = i13 - 4 | 0;
   if ((i60 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 63](i60);
  }
 } while (0);
 i18 = i2 + 52 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if ((i19 & 8192 | 0) != 0) {
  HEAP32[i18 >> 2] = i19 | 1048576;
 }
 i19 = HEAP32[i54 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 292 >> 2] & 512 | 0) != 0) {
   if ((HEAP32[i22 >> 2] & 64512 | 0) == 0) {
    if ((HEAP32[(HEAP32[i19 + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[i19 >> 2] | 0) == 1) {
    i61 = i19;
   } else {
    __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i14, i19);
    i18 = HEAP32[i14 >> 2] | 0;
    i21 = HEAP32[i54 >> 2] | 0;
    i1 = i21 | 0;
    i20 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i20 | 0) == 0) {
     __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i21);
     __ZN3WTF8fastFreeEPv(i21);
    } else {
     HEAP32[i1 >> 2] = i20;
    }
    HEAP32[i54 >> 2] = i18;
    i61 = i18;
   }
   i18 = i61 + 292 | 0;
   HEAP32[i18 >> 2] = HEAP32[i18 >> 2] & -513;
  }
 } while (0);
 if (!i51) {
  __ZNK7WebCore13StyleResolver22adjustGridItemPositionERNS_11RenderStyleERKS1_(0, i2, i3);
  STACKTOP = i5;
  return;
 }
 i51 = i4 + 44 | 0;
 i61 = HEAP32[i51 >> 2] | 0;
 i54 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 do {
  if ((i61 | 0) == (i54 | 0)) {
   i29 = 223;
  } else {
   if ((HEAP32[i61 + 12 >> 2] | 0) != (HEAP32[i54 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i61 + 16 >> 2] | 0) == (HEAP32[i54 + 16 >> 2] | 0)) {
    i29 = 223;
   }
  }
 } while (0);
 do {
  if ((i29 | 0) == 223) {
   if ((HEAP32[i22 >> 2] & 31 | 0) != 0) {
    break;
   }
   if (!(__ZNK7WebCore17HTMLIFrameElement23shouldDisplaySeamlesslyEv(i4) | 0)) {
    break;
   }
   HEAP32[i22 >> 2] = HEAP32[i22 >> 2] & -32 | 5;
  }
 } while (0);
 __ZNK7WebCore13StyleResolver22adjustGridItemPositionERNS_11RenderStyleERKS1_(0, i2, i3);
 if ((HEAP32[i4 + 12 >> 2] & 32 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i22 >> 2] | 0;
 i54 = i3 >>> 13 & 7;
 if ((i54 | 0) == 2) {
  i61 = i3 & -57345 | 8192;
  HEAP32[i22 >> 2] = i61;
  i62 = i61;
 } else if ((i54 | 0) == 3) {
  i54 = i3 & -57345;
  HEAP32[i22 >> 2] = i54;
  i62 = i54;
 } else {
  i62 = i3;
 }
 i3 = i62 >>> 10 & 7;
 if ((i3 | 0) == 2) {
  i54 = i62 & -7169 | 1024;
  HEAP32[i22 >> 2] = i54;
  i63 = i54;
 } else if ((i3 | 0) == 3) {
  i3 = i62 & -7169;
  HEAP32[i22 >> 2] = i3;
  i63 = i3;
 } else {
  i63 = i62;
 }
 i62 = HEAP32[i51 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i62 | 0) == (i3 | 0)) {
   i29 = 236;
  } else {
   if ((HEAP32[i62 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    i29 = 238;
    break;
   }
   if ((HEAP32[i62 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i29 = 236;
   } else {
    i29 = 238;
   }
  }
 } while (0);
 do {
  if ((i29 | 0) == 236) {
   i3 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i29 = 238;
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 32 | 0) == 0) {
    i64 = i62;
   } else {
    i29 = 238;
   }
  }
 } while (0);
 if ((i29 | 0) == 238) {
  HEAP32[i22 >> 2] = i63 & -29360129;
  i64 = HEAP32[i51 >> 2] | 0;
 }
 i63 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
 do {
  if ((i64 | 0) == (i63 | 0)) {
   i29 = 242;
  } else {
   if ((HEAP32[i64 + 12 >> 2] | 0) != (HEAP32[i63 + 12 >> 2] | 0)) {
    i65 = i64;
    i66 = i63;
    break;
   }
   if ((HEAP32[i64 + 16 >> 2] | 0) == (HEAP32[i63 + 16 >> 2] | 0)) {
    i29 = 242;
   } else {
    i65 = i64;
    i66 = i63;
   }
  }
 } while (0);
 do {
  if ((i29 | 0) == 242) {
   i62 = i2 + 24 | 0;
   i4 = HEAP32[i62 >> 2] | 0;
   if (+HEAPF32[i4 + 80 >> 2] == +1) {
    i65 = i64;
    i66 = i63;
    break;
   }
   if ((HEAP32[i4 >> 2] | 0) == 1) {
    i67 = i4;
   } else {
    __ZNK7WebCore22StyleRareInheritedData4copyEv(i15, i4);
    i4 = HEAP32[i15 >> 2] | 0;
    i3 = HEAP32[i62 >> 2] | 0;
    i54 = i3 | 0;
    i61 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
    if ((i61 | 0) == 0) {
     __ZN7WebCore22StyleRareInheritedDataD1Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
    } else {
     HEAP32[i54 >> 2] = i61;
    }
    HEAP32[i62 >> 2] = i4;
    i67 = i4;
   }
   HEAPF32[i67 + 80 >> 2] = +1;
   i65 = HEAP32[i51 >> 2] | 0;
   i66 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
  }
 } while (0);
 do {
  if ((i65 | 0) != (i66 | 0)) {
   i51 = HEAP32[i65 + 12 >> 2] | 0;
   if ((i51 | 0) == (HEAP32[i66 + 12 >> 2] | 0)) {
    if ((HEAP32[i65 + 16 >> 2] | 0) == (HEAP32[i66 + 16 >> 2] | 0)) {
     break;
    }
   }
   i67 = HEAP32[__ZN7WebCore8SVGNames7textTagE >> 2] | 0;
   if ((i65 | 0) == (i67 | 0)) {
    break;
   }
   if ((i51 | 0) != (HEAP32[i67 + 12 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i65 + 16 >> 2] | 0) == (HEAP32[i67 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i65 = HEAP32[i22 >> 2] | 0;
 switch (i65 & 31 | 0) {
 case 0:
 case 19:
 case 17:
 case 7:
 case 5:
 case 21:
  {
   break;
  }
 default:
  {
   STACKTOP = i5;
   return;
  }
 }
 HEAP32[i22 >> 2] = i65 & -32 | 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13StyleResolver22createFilterOperationsEPNS_8CSSValueERNS_16FilterOperationsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, d86 = +0, d87 = +0, d88 = +0, d89 = +0, d90 = +0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 56 | 0;
 i8 = i4 + 64 | 0;
 i9 = i4 + 72 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 120 | 0;
 i15 = i4 + 128 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 184 | 0;
 i18 = i4 + 192 | 0;
 i19 = i4 + 208 | 0;
 i20 = i4 + 216 | 0;
 i21 = i20;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = HEAP32[i1 + 312 >> 2] | 0;
 i28 = HEAP32[i1 + 328 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i29 = 0;
  STACKTOP = i4;
  return i29 | 0;
 }
 i30 = i2 + 4 | 0;
 i31 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i31 & 516604 | 0) == 472) {
   if ((HEAP32[i2 + 8 >> 2] | 0) == 3) {
    i29 = 1;
   } else {
    break;
   }
   STACKTOP = i4;
   return i29 | 0;
  }
 } while (0);
 if ((i31 & 491520) >>> 0 <= 221184 >>> 0) {
  i29 = 0;
  STACKTOP = i4;
  return i29 | 0;
 }
 if ((i27 | 0) == 0) {
  d32 = +1;
 } else {
  d32 = +HEAPF32[(HEAP32[i27 + 24 >> 2] | 0) + 80 >> 2];
 }
 __ZN7WebCore16FilterOperationsC1Ev(i12);
 if ((HEAP32[i30 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
  i33 = i2;
 } else {
  i33 = 0;
 }
 i2 = (i33 | 0) == 0;
 i30 = i33 + 16 | 0;
 i31 = i33 + 8 | 0;
 i33 = i12 + 8 | 0;
 i34 = i12 + 4 | 0;
 i35 = i12 | 0;
 i36 = i20;
 i37 = i21 + 4 | 0;
 i38 = i21 + 5 | 0;
 i39 = i21 + 6 | 0;
 i40 = i25 + 5 | 0;
 i41 = i22;
 i42 = i23 + 4 | 0;
 i43 = i23 + 5 | 0;
 i44 = i23 + 6 | 0;
 d45 = d32;
 i46 = i1 + 216 | 0;
 i47 = i6 + 4 | 0;
 i48 = i7 | 0;
 i49 = i8 + 4 | 0;
 i50 = i9 | 0;
 i51 = i26 + 4 | 0;
 i52 = i26 | 0;
 i53 = i10 + 4 | 0;
 i54 = i11 | 0;
 i55 = i1 + 308 | 0;
 i56 = i16 | 0;
 i57 = i5 | 0;
 i58 = i1 + 368 | 0;
 i59 = i18 + 8 | 0;
 i60 = i18 | 0;
 i61 = i19 | 0;
 i62 = i15 | 0;
 i63 = i13 | 0;
 i64 = 0;
 L17 : while (1) {
  if (i2) {
   i65 = 0;
  } else {
   i65 = HEAP32[i30 >> 2] | 0;
  }
  if (i64 >>> 0 >= i65 >>> 0) {
   i66 = 194;
   break;
  }
  if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i64 >>> 0) {
   i66 = 14;
   break;
  }
  i67 = HEAP32[(HEAP32[i31 >> 2] | 0) + (i64 << 2) >> 2] | 0;
  L24 : do {
   if ((HEAP32[i67 + 4 >> 2] & 516096 | 0) == 237568) {
    i68 = HEAP32[i67 + 36 >> 2] | 0;
    switch (i68 | 0) {
    case 7:
     {
      i69 = 6;
      i66 = 28;
      break;
     }
    case 12:
     {
      if ((HEAP32[i67 + 16 >> 2] | 0) == 0) {
       i66 = 30;
       break L17;
      }
      if ((HEAP32[(HEAP32[HEAP32[i67 + 8 >> 2] >> 2] | 0) + 4 >> 2] & 516096 | 0) == 0) {
       i66 = 32;
       break L17;
      }
      __ZN7WebCore13StyleResolver43createCustomFilterOperationWithInlineSyntaxEPNS_20WebKitCSSFilterValueE(i13, i1, i67);
      i70 = HEAP32[i63 >> 2] | 0;
      HEAP32[i63 >> 2] = 0;
      if ((i70 | 0) == 0) {
       i71 = 0;
       break L17;
      }
      i72 = HEAP32[i33 >> 2] | 0;
      if ((i72 | 0) == (HEAP32[i34 >> 2] | 0)) {
       i73 = i72 + 1 | 0;
       i74 = i73 + (i72 >>> 2) | 0;
       i75 = i74 >>> 0 > 16 >>> 0 ? i74 : 16;
       i74 = i75 >>> 0 > i73 >>> 0 ? i75 : i73;
       do {
        if (i72 >>> 0 < i74 >>> 0) {
         i73 = HEAP32[i35 >> 2] | 0;
         if (i74 >>> 0 > 1073741823 >>> 0) {
          i66 = 38;
          break L17;
         }
         i75 = __ZN3WTF18fastMallocGoodSizeEj(i74 << 2) | 0;
         HEAP32[i34 >> 2] = i75 >>> 2;
         i76 = __ZN3WTF10fastMallocEj(i75) | 0;
         HEAP32[i35 >> 2] = i76;
         i75 = i73;
         _memcpy(i76 | 0, i75 | 0, i72 << 2) | 0;
         if ((i73 | 0) == 0) {
          break;
         }
         if ((HEAP32[i35 >> 2] | 0) == (i73 | 0)) {
          HEAP32[i35 >> 2] = 0;
          HEAP32[i34 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i75);
        }
       } while (0);
       HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i70;
       i74 = i70 + 4 | 0;
       HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
       i77 = HEAP32[i33 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i35 >> 2] | 0) + (i72 << 2) >> 2] = i70;
       i74 = i70 + 4 | 0;
       HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
       i77 = HEAP32[i33 >> 2] | 0;
      }
      HEAP32[i33 >> 2] = i77 + 1;
      i74 = i70 + 4 | 0;
      i75 = i74 | 0;
      i73 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
      if ((i73 | 0) != 0) {
       HEAP32[i75 >> 2] = i73;
       break L24;
      }
      i73 = i74 - 4 | 0;
      if ((i73 | 0) == 0) {
       break L24;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i73 >> 2] | 0) + 4 >> 2] & 63](i73);
      break L24;
      break;
     }
    case 3:
     {
      i69 = 2;
      i66 = 28;
      break;
     }
    case 4:
     {
      i69 = 3;
      i66 = 28;
      break;
     }
    case 5:
     {
      i69 = 4;
      i66 = 28;
      break;
     }
    case 8:
     {
      i69 = 7;
      i66 = 28;
      break;
     }
    case 6:
     {
      i69 = 5;
      i66 = 28;
      break;
     }
    case 1:
     {
      if ((HEAP32[i67 + 16 >> 2] | 0) != 1) {
       break L24;
      }
      i73 = HEAP32[HEAP32[i67 + 8 >> 2] >> 2] | 0;
      if ((HEAP32[i73 + 4 >> 2] & 516096 | 0) != 221184) {
       break L24;
      }
      HEAP32[i14 >> 2] = i73;
      __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i15, HEAP32[(HEAP32[(HEAP32[i55 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i73 + 8 | 0);
      i74 = i73 + 8 | 0;
      i75 = i74;
      __ZNK7WebCore3URL18fragmentIdentifierEv(i16, i15);
      i76 = __ZN3WTF10fastMallocEj(28) | 0;
      i78 = i76;
      __ZN7WebCore24ReferenceFilterOperationC1ERKN3WTF6StringES4_NS_15FilterOperation13OperationTypeE(i78, i75, i16, 0);
      i79 = HEAP32[i56 >> 2] | 0;
      do {
       if ((i79 | 0) != 0) {
        i80 = i79 | 0;
        i81 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
        if ((i81 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i79);
         break;
        } else {
         HEAP32[i80 >> 2] = i81;
         break;
        }
       }
      } while (0);
      i79 = HEAP32[(HEAP32[(HEAP32[i55 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
      i70 = HEAP32[i74 >> 2] | 0;
      if ((i70 | 0) == 0) {
       i66 = 56;
      } else {
       if (!(__ZNK3WTF10StringImpl10startsWithEt(i70, 35) | 0)) {
        i66 = 56;
       }
      }
      L64 : do {
       if ((i66 | 0) == 56) {
        i66 = 0;
        __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i79, i75);
        i70 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i5, i79 + 356 | 0) | 0;
        i72 = HEAP32[i57 >> 2] | 0;
        do {
         if ((i72 | 0) == 0) {
          if (i70) {
           break L64;
          }
         } else {
          i81 = i72 | 0;
          i80 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
          if ((i80 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i72);
           if (i70) {
            break L64;
           } else {
            break;
           }
          } else {
           HEAP32[i81 >> 2] = i80;
           if (i70) {
            break L64;
           } else {
            break;
           }
          }
         }
        } while (0);
        if ((HEAP8[i73 + 16 | 0] & 1) != 0) {
         i70 = i73 + 12 | 0;
         if ((HEAP32[i70 >> 2] | 0) == 0) {
          break;
         }
         i72 = __ZN3WTF10fastMallocEj(8) | 0;
         __ZN7WebCore26CachedSVGDocumentReferenceC1EPNS_17CachedSVGDocumentE(i72, HEAP32[i70 >> 2] | 0);
         HEAP32[i61 >> 2] = i72;
         __ZN7WebCore24ReferenceFilterOperation29setCachedSVGDocumentReferenceEN3WTF10PassOwnPtrINS_26CachedSVGDocumentReferenceEEE(i78, i19);
         i72 = HEAP32[i61 >> 2] | 0;
         if ((i72 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 63](i72);
         break;
        }
        HEAP32[i17 >> 2] = i76;
        __ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RPS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i18, i58, i17, i14);
        if ((HEAP8[i59] & 1) != 0) {
         break;
        }
        i72 = HEAP32[i60 >> 2] | 0;
        i70 = HEAP32[i14 >> 2] | 0;
        if ((i70 | 0) != 0) {
         i80 = i70 | 0;
         HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
        }
        i80 = i72 + 4 | 0;
        i72 = HEAP32[i80 >> 2] | 0;
        HEAP32[i80 >> 2] = i70;
        if ((i72 | 0) == 0) {
         break;
        }
        i70 = i72 | 0;
        i80 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
        if ((i80 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i72 | 0);
         break;
        } else {
         HEAP32[i70 >> 2] = i80;
         break;
        }
       }
      } while (0);
      i78 = HEAP32[i33 >> 2] | 0;
      if ((i78 | 0) == (HEAP32[i34 >> 2] | 0)) {
       i73 = i78 + 1 | 0;
       i79 = i73 + (i78 >>> 2) | 0;
       i75 = i79 >>> 0 > 16 >>> 0 ? i79 : 16;
       i79 = i75 >>> 0 > i73 >>> 0 ? i75 : i73;
       do {
        if (i78 >>> 0 < i79 >>> 0) {
         i73 = HEAP32[i35 >> 2] | 0;
         if (i79 >>> 0 > 1073741823 >>> 0) {
          i66 = 78;
          break L17;
         }
         i75 = __ZN3WTF18fastMallocGoodSizeEj(i79 << 2) | 0;
         HEAP32[i34 >> 2] = i75 >>> 2;
         i74 = __ZN3WTF10fastMallocEj(i75) | 0;
         HEAP32[i35 >> 2] = i74;
         i75 = i73;
         _memcpy(i74 | 0, i75 | 0, i78 << 2) | 0;
         if ((i73 | 0) == 0) {
          break;
         }
         if ((HEAP32[i35 >> 2] | 0) == (i73 | 0)) {
          HEAP32[i35 >> 2] = 0;
          HEAP32[i34 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i75);
        }
       } while (0);
       HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i76;
       if ((i76 | 0) != 0) {
        i79 = i76 + 4 | 0;
        HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 1;
       }
       i82 = HEAP32[i33 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i35 >> 2] | 0) + (i78 << 2) >> 2] = i76;
       if ((i76 | 0) != 0) {
        i79 = i76 + 4 | 0;
        HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 1;
       }
       i82 = HEAP32[i33 >> 2] | 0;
      }
      HEAP32[i33 >> 2] = i82 + 1;
      do {
       if ((i76 | 0) != 0) {
        i79 = i76 + 4 | 0;
        i75 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
        if ((i75 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i76 >> 2] | 0) + 4 >> 2] & 63](i76);
         break;
        } else {
         HEAP32[i79 >> 2] = i75;
         break;
        }
       }
      } while (0);
      i76 = HEAP32[i62 >> 2] | 0;
      if ((i76 | 0) == 0) {
       break L24;
      }
      i78 = i76 | 0;
      i75 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
      if ((i75 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i76);
       break L24;
      } else {
       HEAP32[i78 >> 2] = i75;
       break L24;
      }
      break;
     }
    case 9:
     {
      i69 = 8;
      i66 = 28;
      break;
     }
    case 11:
     {
      i83 = 10;
      i84 = HEAP32[i67 + 16 >> 2] | 0;
      break;
     }
    case 2:
     {
      i69 = 1;
      i66 = 28;
      break;
     }
    case 10:
     {
      i69 = 9;
      i66 = 28;
      break;
     }
    case 0:
     {
      i69 = 14;
      i66 = 28;
      break;
     }
    default:
     {
      i69 = 14;
      i66 = 28;
     }
    }
    L120 : do {
     if ((i66 | 0) == 28) {
      i66 = 0;
      i75 = i67 + 16 | 0;
      i78 = HEAP32[i75 >> 2] | 0;
      i76 = i67 + 8 | 0;
      i79 = 0;
      while (1) {
       if (i79 >>> 0 >= i78 >>> 0) {
        break;
       }
       if ((HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + (i79 << 2) >> 2] | 0) + 4 >> 2] & 516096 | 0) == 0) {
        i79 = i79 + 1 | 0;
       } else {
        break L24;
       }
      }
      if ((i78 | 0) == 0) {
       i85 = 0;
      } else {
       i85 = HEAP32[HEAP32[i76 >> 2] >> 2] | 0;
      }
      switch (i68 | 0) {
      case 6:
      case 8:
      case 9:
      case 7:
       {
        d86 = +((i68 | 0) != 8 | 0);
        do {
         if ((i78 | 0) == 1) {
          d87 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i85);
          if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i85) | 0) << 16 >> 16 != 2) {
           d88 = d87;
           break;
          }
          d88 = d87 / +100;
         } else {
          d88 = d86;
         }
        } while (0);
        i76 = __ZN3WTF10fastMallocEj(24) | 0;
        HEAP32[i76 + 4 >> 2] = 1;
        HEAP32[i76 + 8 >> 2] = i69;
        HEAP32[i76 >> 2] = __ZTVN7WebCore37BasicComponentTransferFilterOperationE + 8;
        HEAPF64[i76 + 16 >> 3] = d88;
        i79 = HEAP32[i33 >> 2] | 0;
        if ((i79 | 0) != (HEAP32[i34 >> 2] | 0)) {
         HEAP32[(HEAP32[i35 >> 2] | 0) + (i79 << 2) >> 2] = i76;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
         break L24;
        }
        i73 = i79 + 1 | 0;
        i74 = i73 + (i79 >>> 2) | 0;
        i80 = i74 >>> 0 > 16 >>> 0 ? i74 : 16;
        i74 = i80 >>> 0 > i73 >>> 0 ? i80 : i73;
        do {
         if (i79 >>> 0 < i74 >>> 0) {
          i73 = HEAP32[i35 >> 2] | 0;
          if (i74 >>> 0 > 1073741823 >>> 0) {
           i66 = 131;
           break L17;
          }
          i80 = __ZN3WTF18fastMallocGoodSizeEj(i74 << 2) | 0;
          HEAP32[i34 >> 2] = i80 >>> 2;
          i70 = __ZN3WTF10fastMallocEj(i80) | 0;
          HEAP32[i35 >> 2] = i70;
          i80 = i73;
          _memcpy(i70 | 0, i80 | 0, i79 << 2) | 0;
          if ((i73 | 0) == 0) {
           break;
          }
          if ((HEAP32[i35 >> 2] | 0) == (i73 | 0)) {
           HEAP32[i35 >> 2] = 0;
           HEAP32[i34 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i80);
         }
        } while (0);
        HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i76;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        break L24;
        break;
       }
      case 5:
       {
        if ((i78 | 0) == 1) {
         d89 = +__ZN7WebCore17CSSPrimitiveValue14computeDegreesEv(i85);
        } else {
         d89 = +0;
        }
        i79 = __ZN3WTF10fastMallocEj(24) | 0;
        HEAP32[i79 + 4 >> 2] = 1;
        HEAP32[i79 + 8 >> 2] = i69;
        HEAP32[i79 >> 2] = __ZTVN7WebCore31BasicColorMatrixFilterOperationE + 8;
        HEAPF64[i79 + 16 >> 3] = d89;
        i74 = HEAP32[i33 >> 2] | 0;
        if ((i74 | 0) != (HEAP32[i34 >> 2] | 0)) {
         HEAP32[(HEAP32[i35 >> 2] | 0) + (i74 << 2) >> 2] = i79;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
         break L24;
        }
        i80 = i74 + 1 | 0;
        i73 = i80 + (i74 >>> 2) | 0;
        i70 = i73 >>> 0 > 16 >>> 0 ? i73 : 16;
        i73 = i70 >>> 0 > i80 >>> 0 ? i70 : i80;
        do {
         if (i74 >>> 0 < i73 >>> 0) {
          i80 = HEAP32[i35 >> 2] | 0;
          if (i73 >>> 0 > 1073741823 >>> 0) {
           i66 = 118;
           break L17;
          }
          i70 = __ZN3WTF18fastMallocGoodSizeEj(i73 << 2) | 0;
          HEAP32[i34 >> 2] = i70 >>> 2;
          i72 = __ZN3WTF10fastMallocEj(i70) | 0;
          HEAP32[i35 >> 2] = i72;
          i70 = i80;
          _memcpy(i72 | 0, i70 | 0, i74 << 2) | 0;
          if ((i80 | 0) == 0) {
           break;
          }
          if ((HEAP32[i35 >> 2] | 0) == (i80 | 0)) {
           HEAP32[i35 >> 2] = 0;
           HEAP32[i34 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i70);
         }
        } while (0);
        HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i79;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        break L24;
        break;
       }
      case 2:
      case 3:
      case 4:
       {
        do {
         if ((i78 | 0) == 1) {
          d86 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i85);
          if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i85) | 0) << 16 >> 16 != 2) {
           d90 = d86;
           break;
          }
          d90 = d86 / +100;
         } else {
          d90 = +1;
         }
        } while (0);
        i79 = __ZN3WTF10fastMallocEj(24) | 0;
        HEAP32[i79 + 4 >> 2] = 1;
        HEAP32[i79 + 8 >> 2] = i69;
        HEAP32[i79 >> 2] = __ZTVN7WebCore31BasicColorMatrixFilterOperationE + 8;
        HEAPF64[i79 + 16 >> 3] = d90;
        i74 = HEAP32[i33 >> 2] | 0;
        if ((i74 | 0) != (HEAP32[i34 >> 2] | 0)) {
         HEAP32[(HEAP32[i35 >> 2] | 0) + (i74 << 2) >> 2] = i79;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
         break L24;
        }
        i73 = i74 + 1 | 0;
        i76 = i73 + (i74 >>> 2) | 0;
        i70 = i76 >>> 0 > 16 >>> 0 ? i76 : 16;
        i76 = i70 >>> 0 > i73 >>> 0 ? i70 : i73;
        do {
         if (i74 >>> 0 < i76 >>> 0) {
          i73 = HEAP32[i35 >> 2] | 0;
          if (i76 >>> 0 > 1073741823 >>> 0) {
           i66 = 106;
           break L17;
          }
          i70 = __ZN3WTF18fastMallocGoodSizeEj(i76 << 2) | 0;
          HEAP32[i34 >> 2] = i70 >>> 2;
          i80 = __ZN3WTF10fastMallocEj(i70) | 0;
          HEAP32[i35 >> 2] = i80;
          i70 = i73;
          _memcpy(i80 | 0, i70 | 0, i74 << 2) | 0;
          if ((i73 | 0) == 0) {
           break;
          }
          if ((HEAP32[i35 >> 2] | 0) == (i73 | 0)) {
           HEAP32[i35 >> 2] = 0;
           HEAP32[i34 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i70);
         }
        } while (0);
        HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i79;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        break L24;
        break;
       }
      case 11:
       {
        i83 = i69;
        i84 = i78;
        break L120;
        break;
       }
      case 10:
       {
        HEAP32[i36 >> 2] = 0;
        HEAP8[i37] = 0;
        HEAP8[i38] = 3;
        HEAP8[i39] = 0;
        if ((HEAP32[i75 >> 2] | 0) != 0) {
         if ((i85 | 0) == 0) {
          HEAP32[i41 >> 2] = 0;
          HEAP8[i42] = 0;
          HEAP8[i43] = 15;
          HEAP8[i44] = 0;
         } else {
          __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi122EEENS_6LengthEPKNS_11RenderStyleES5_db(i23, i85, i27, i28, d45, 0);
         }
         i74 = HEAP32[i22 >> 2] | 0;
         i76 = HEAP32[i22 + 4 >> 2] | 0;
         HEAP32[i20 >> 2] = i74;
         HEAP32[i20 + 4 >> 2] = i76;
         HEAP8[i43] = 0;
         if ((i74 & 0 | 0) == 0 & (i76 & 65280 | 0) == 3840) {
          i71 = 0;
          break L17;
         }
        }
        i76 = HEAP32[i20 >> 2] | 0;
        i74 = HEAP32[i20 + 4 >> 2] | 0;
        HEAP32[i24 >> 2] = i76;
        HEAP32[i24 + 4 >> 2] = i74;
        if ((i76 & 0 | 0) == 0 & (i74 & 65280 | 0) == 2560) {
         __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
        }
        i74 = __ZN3WTF10fastMallocEj(20) | 0;
        i76 = HEAP32[i24 >> 2] | 0;
        i70 = HEAP32[i24 + 4 >> 2] | 0;
        HEAP8[i40] = 0;
        HEAP32[i74 + 4 >> 2] = 1;
        HEAP32[i74 + 8 >> 2] = i69;
        HEAP32[i74 >> 2] = __ZTVN7WebCore19BlurFilterOperationE + 8;
        i73 = i74 + 12 | 0;
        HEAP32[i73 >> 2] = i76;
        HEAP32[i73 + 4 >> 2] = i70;
        i70 = HEAP32[i33 >> 2] | 0;
        if ((i70 | 0) == (HEAP32[i34 >> 2] | 0)) {
         i73 = i70 + 1 | 0;
         i76 = i73 + (i70 >>> 2) | 0;
         i80 = i76 >>> 0 > 16 >>> 0 ? i76 : 16;
         i76 = i80 >>> 0 > i73 >>> 0 ? i80 : i73;
         do {
          if (i70 >>> 0 < i76 >>> 0) {
           i73 = HEAP32[i35 >> 2] | 0;
           if (i76 >>> 0 > 1073741823 >>> 0) {
            i66 = 148;
            break L17;
           }
           i80 = __ZN3WTF18fastMallocGoodSizeEj(i76 << 2) | 0;
           HEAP32[i34 >> 2] = i80 >>> 2;
           i72 = __ZN3WTF10fastMallocEj(i80) | 0;
           HEAP32[i35 >> 2] = i72;
           i80 = i73;
           _memcpy(i72 | 0, i80 | 0, i70 << 2) | 0;
           if ((i73 | 0) == 0) {
            break;
           }
           if ((HEAP32[i35 >> 2] | 0) == (i73 | 0)) {
            HEAP32[i35 >> 2] = 0;
            HEAP32[i34 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i80);
          }
         } while (0);
         HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i33 >> 2] << 2) >> 2] = i74;
         i91 = HEAP32[i33 >> 2] | 0;
        } else {
         HEAP32[(HEAP32[i35 >> 2] | 0) + (i70 << 2) >> 2] = i74;
         i91 = HEAP32[i33 >> 2] | 0;
        }
        HEAP32[i33 >> 2] = i91 + 1;
        if ((HEAP8[i40] | 0) == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
        }
        if ((HEAP8[i38] | 0) != 10) {
         break L24;
        }
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
        break L24;
        break;
       }
      default:
       {
        break L24;
       }
      }
     }
    } while (0);
    if ((i84 | 0) != 1) {
     i71 = 0;
     break L17;
    }
    i68 = HEAP32[HEAP32[i67 + 8 >> 2] >> 2] | 0;
    if ((HEAP32[i68 + 4 >> 2] & 516096 | 0) != 155648) {
     break;
    }
    i76 = i68 + 8 | 0;
    i75 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i76 >> 2] | 0, i27, i28, d32, 0) | 0;
    i78 = (HEAP32[i76 >> 2] | 0) + 4 | 0;
    do {
     if ((((HEAP32[i78 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
      __ZNK7WebCore10RenderView12viewportSizeEv(i6, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i76 = ~~(+(Math_imul(HEAP32[i47 >> 2] | 0, i75) | 0) / +100);
      __ZNK7WebCore10RenderView12viewportSizeEv(i7, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i79 = ~~(+(Math_imul(HEAP32[i48 >> 2] | 0, i75) | 0) / +100);
      i80 = HEAP32[i78 >> 2] & 508;
      if ((i80 | 0) == 108) {
       i92 = i76;
       break;
      }
      if ((i80 | 0) == 104) {
       i92 = i79;
       break;
      } else if ((i80 | 0) == 116) {
       i92 = (i79 | 0) < (i76 | 0) ? i76 : i79;
       break;
      }
      if ((i80 | 0) != 112) {
       i92 = 0;
       break;
      }
      i92 = (i76 | 0) < (i79 | 0) ? i76 : i79;
     } else {
      i92 = i75;
     }
    } while (0);
    i75 = i68 + 12 | 0;
    i78 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(HEAP32[i75 >> 2] | 0, i27, i28, d32, 0) | 0;
    i79 = (HEAP32[i75 >> 2] | 0) + 4 | 0;
    do {
     if ((((HEAP32[i79 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
      __ZNK7WebCore10RenderView12viewportSizeEv(i8, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i75 = ~~(+(Math_imul(HEAP32[i49 >> 2] | 0, i78) | 0) / +100);
      __ZNK7WebCore10RenderView12viewportSizeEv(i9, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i76 = ~~(+(Math_imul(HEAP32[i50 >> 2] | 0, i78) | 0) / +100);
      i80 = HEAP32[i79 >> 2] & 508;
      if ((i80 | 0) == 108) {
       i93 = i75;
       break;
      }
      if ((i80 | 0) == 104) {
       i93 = i76;
       break;
      } else if ((i80 | 0) == 116) {
       i93 = (i76 | 0) < (i75 | 0) ? i75 : i76;
       break;
      }
      if ((i80 | 0) != 112) {
       i93 = 0;
       break;
      }
      i93 = (i75 | 0) < (i76 | 0) ? i75 : i76;
     } else {
      i93 = i78;
     }
    } while (0);
    i78 = i68 + 16 | 0;
    i79 = HEAP32[i78 >> 2] | 0;
    do {
     if ((i79 | 0) == 0) {
      i94 = 0;
     } else {
      i76 = __ZNK7WebCore17CSSPrimitiveValue13computeLengthIiEET_PKNS_11RenderStyleES5_fb(i79, i27, i28, d32, 0) | 0;
      i75 = HEAP32[i78 >> 2] | 0;
      if ((i75 | 0) == 0) {
       i94 = i76;
       break;
      }
      i80 = i75 + 4 | 0;
      if ((((HEAP32[i80 >> 2] | 0) >>> 2 & 127) - 26 | 0) >>> 0 >= 4 >>> 0) {
       i94 = i76;
       break;
      }
      __ZNK7WebCore10RenderView12viewportSizeEv(i10, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i75 = ~~(+(Math_imul(HEAP32[i53 >> 2] | 0, i76) | 0) / +100);
      __ZNK7WebCore10RenderView12viewportSizeEv(i11, HEAP32[(HEAP32[i46 >> 2] | 0) + 1584 >> 2] | 0);
      i73 = ~~(+(Math_imul(HEAP32[i54 >> 2] | 0, i76) | 0) / +100);
      i76 = HEAP32[i80 >> 2] & 508;
      if ((i76 | 0) == 108) {
       i94 = i75;
       break;
      }
      if ((i76 | 0) == 116) {
       i94 = (i73 | 0) < (i75 | 0) ? i75 : i73;
       break;
      } else if ((i76 | 0) == 104) {
       i94 = i73;
       break;
      }
      if ((i76 | 0) != 112) {
       i94 = 0;
       break;
      }
      i94 = (i75 | 0) < (i73 | 0) ? i75 : i73;
     }
    } while (0);
    i78 = HEAP32[i68 + 28 >> 2] | 0;
    do {
     if ((i78 | 0) == 0) {
      i95 = 0;
      i96 = 0;
      i97 = 1;
      i98 = 0;
     } else {
      __ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb(i26, i1, i78, 0);
      i79 = HEAP8[i51] | 0;
      if ((i79 & 1) == 0) {
       i95 = 0;
       i96 = 0;
       i97 = 1;
       i98 = 0;
       break;
      }
      i95 = 0;
      i96 = HEAP32[i52 >> 2] | 0;
      i97 = i79 & 255;
      i98 = 0;
     }
    } while (0);
    i78 = __ZN3WTF10fastMallocEj(32) | 0;
    HEAP32[i78 + 4 >> 2] = 1;
    HEAP32[i78 + 8 >> 2] = i83;
    HEAP32[i78 >> 2] = __ZTVN7WebCore25DropShadowFilterOperationE + 8;
    i68 = i78 + 12 | 0;
    HEAP32[i68 >> 2] = i92;
    HEAP32[i68 + 4 >> 2] = i93;
    HEAP32[i78 + 20 >> 2] = i94;
    i68 = i78 + 24 | 0;
    HEAP32[i68 >> 2] = i98 | i96;
    HEAP32[i68 + 4 >> 2] = i97 | i95;
    i68 = i12 + 8 | 0;
    i79 = HEAP32[i68 >> 2] | 0;
    i73 = i12 + 4 | 0;
    if ((i79 | 0) != (HEAP32[i73 >> 2] | 0)) {
     HEAP32[(HEAP32[i12 >> 2] | 0) + (i79 << 2) >> 2] = i78;
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     break;
    }
    i75 = i79 + 1 | 0;
    i76 = i75 + (i79 >>> 2) | 0;
    i80 = i76 >>> 0 > 16 >>> 0 ? i76 : 16;
    i76 = i80 >>> 0 > i75 >>> 0 ? i80 : i75;
    i75 = i12 | 0;
    do {
     if (i79 >>> 0 < i76 >>> 0) {
      i80 = HEAP32[i75 >> 2] | 0;
      if (i76 >>> 0 > 1073741823 >>> 0) {
       i66 = 187;
       break L17;
      }
      i72 = __ZN3WTF18fastMallocGoodSizeEj(i76 << 2) | 0;
      HEAP32[i73 >> 2] = i72 >>> 2;
      i81 = __ZN3WTF10fastMallocEj(i72) | 0;
      HEAP32[i75 >> 2] = i81;
      i72 = i80;
      _memcpy(i81 | 0, i72 | 0, i79 << 2) | 0;
      if ((i80 | 0) == 0) {
       break;
      }
      if ((HEAP32[i75 >> 2] | 0) == (i80 | 0)) {
       HEAP32[i75 >> 2] = 0;
       HEAP32[i73 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i72);
     }
    } while (0);
    HEAP32[(HEAP32[i75 >> 2] | 0) + (HEAP32[i68 >> 2] << 2) >> 2] = i78;
    HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
   }
  } while (0);
  i64 = i64 + 1 | 0;
 }
 if ((i66 | 0) == 38) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i66 | 0) == 148) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 187) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 194) {
  __ZN7WebCore16FilterOperationsaSERKS0_(i3, i12) | 0;
  i71 = 1;
 } else if ((i66 | 0) == 78) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 118) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 30) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i66 | 0) == 106) {
  _WTFCrash();
  return 0;
 } else if ((i66 | 0) == 32) {
  HEAP32[i63 >> 2] = 0;
  i71 = 0;
 } else if ((i66 | 0) == 131) {
  _WTFCrash();
  return 0;
 }
 i66 = HEAP32[i33 >> 2] | 0;
 if ((i66 | 0) != 0) {
  i63 = HEAP32[i35 >> 2] | 0;
  i12 = i63 + (i66 << 2) | 0;
  i66 = i63;
  while (1) {
   i63 = HEAP32[i66 >> 2] | 0;
   do {
    if ((i63 | 0) != 0) {
     i3 = i63 + 4 | 0;
     i64 = i3 | 0;
     i95 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     if ((i95 | 0) != 0) {
      HEAP32[i64 >> 2] = i95;
      break;
     }
     i95 = i3 - 4 | 0;
     if ((i95 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i95 >> 2] | 0) + 4 >> 2] & 63](i95);
    }
   } while (0);
   i66 = i66 + 4 | 0;
   if ((i66 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i33 >> 2] = 0;
 }
 i33 = HEAP32[i35 >> 2] | 0;
 if ((i33 | 0) == 0) {
  i29 = i71;
  STACKTOP = i4;
  return i29 | 0;
 }
 HEAP32[i35 >> 2] = 0;
 HEAP32[i34 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i33);
 i29 = i71;
 STACKTOP = i4;
 return i29 | 0;
}
function __ZN7WebCore13StyleResolver17loadPendingImagesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = i1 + 344 | 0;
 if ((HEAP32[i1 + 356 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i27 = i26 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i1 + 348 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = i28 + (i30 << 3) | 0;
 L4 : do {
  if ((i30 | 0) == 0) {
   i32 = i28;
   i33 = 5;
  } else {
   i34 = i28;
   while (1) {
    i35 = HEAP32[i34 >> 2] | 0;
    if (!((i35 | 0) == 415 | (i35 | 0) == 0)) {
     i32 = i34;
     i33 = 5;
     break L4;
    }
    i35 = i34 + 8 | 0;
    if ((i35 | 0) == (i31 | 0)) {
     i36 = i28;
     break;
    } else {
     i34 = i35;
    }
   }
  }
 } while (0);
 do {
  if ((i33 | 0) == 5) {
   if ((i32 | 0) == (i31 | 0)) {
    i36 = i28;
    break;
   }
   i30 = i1 + 312 | 0;
   i34 = i7 | 0;
   i35 = i5 | 0;
   i37 = i8 | 0;
   i38 = i9 | 0;
   i39 = i10 | 0;
   i40 = i11 | 0;
   i41 = i12 | 0;
   i42 = i14 | 0;
   i43 = i15;
   i44 = i15 + 8 | 0;
   i45 = i44;
   i46 = i15 + 16 | 0;
   i47 = i46;
   i48 = i15 + 24 | 0;
   i49 = i48;
   i50 = i18;
   i51 = i18 + 8 | 0;
   i52 = i51;
   i53 = i18 + 16 | 0;
   i54 = i53;
   i55 = i18 + 24 | 0;
   i56 = i55;
   i57 = i21;
   i58 = i21 + 8 | 0;
   i59 = i58;
   i60 = i21 + 16 | 0;
   i61 = i60;
   i62 = i21 + 24 | 0;
   i63 = i62;
   i64 = i13 | 0;
   i65 = i23 + 29 | 0;
   i66 = i23 + 21 | 0;
   i67 = i23 + 13 | 0;
   i68 = i23 + 5 | 0;
   i69 = i20 + 29 | 0;
   i70 = i20 + 21 | 0;
   i71 = i20 + 13 | 0;
   i72 = i20 + 5 | 0;
   i73 = i17 + 29 | 0;
   i74 = i17 + 21 | 0;
   i75 = i17 + 13 | 0;
   i76 = i17 + 5 | 0;
   i77 = i24 | 0;
   i78 = i4 | 0;
   i79 = i3 | 0;
   i80 = i25 | 0;
   i81 = i6 | 0;
   i82 = i32;
   L11 : while (1) {
    L13 : do {
     switch (HEAP32[i82 >> 2] | 0) {
     case 24:
      {
       i83 = (HEAP32[i30 >> 2] | 0) + 12 | 0;
       i84 = HEAP32[i83 >> 2] | 0;
       if ((HEAP32[i84 >> 2] | 0) == 1) {
        i85 = i84;
       } else {
        __ZNK7WebCore19StyleBackgroundData4copyEv(i5, i84);
        i84 = HEAP32[i35 >> 2] | 0;
        i86 = HEAP32[i83 >> 2] | 0;
        i87 = i86 | 0;
        i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
        if ((i88 | 0) == 0) {
         __ZN7WebCore9FillLayerD1Ev(i86 + 4 | 0);
         __ZN3WTF8fastFreeEPv(i86);
        } else {
         HEAP32[i87 >> 2] = i88;
        }
        HEAP32[i83 >> 2] = i84;
        i85 = i84;
       }
       i84 = i85 + 4 | 0;
       if ((i84 | 0) == 0) {
        break L13;
       } else {
        i89 = i84;
       }
       while (1) {
        i84 = i89 + 4 | 0;
        i83 = HEAP32[i84 >> 2] | 0;
        do {
         if ((i83 | 0) != 0) {
          if ((HEAP8[i83 + 8 | 0] & 2) == 0) {
           break;
          }
          __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i7, i1, i83);
          i88 = HEAP32[i34 >> 2] | 0;
          HEAP32[i34 >> 2] = 0;
          i87 = HEAP32[i84 >> 2] | 0;
          HEAP32[i84 >> 2] = i88;
          do {
           if ((i87 | 0) != 0) {
            i88 = i87 + 4 | 0;
            i86 = i88 | 0;
            i90 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
            if ((i90 | 0) != 0) {
             HEAP32[i86 >> 2] = i90;
             break;
            }
            i90 = i88 - 4 | 0;
            if ((i90 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i90 >> 2] | 0) + 4 >> 2] & 63](i90);
           }
          } while (0);
          i87 = i89 + 40 | 0;
          HEAP32[i87 >> 2] = HEAP32[i87 >> 2] | 16777216;
         }
        } while (0);
        i89 = HEAP32[i89 >> 2] | 0;
        if ((i89 | 0) == 0) {
         break;
        }
       }
       break;
      }
     case 46:
      {
       i84 = HEAP32[i30 >> 2] | 0;
       i83 = HEAP32[(HEAP32[(HEAP32[i84 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break L13;
       }
       if ((HEAP8[i83 + 8 | 0] & 2) == 0) {
        break L13;
       }
       __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i11, i1, i83);
       __ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE(i84, i11);
       i84 = HEAP32[i40 >> 2] | 0;
       if ((i84 | 0) == 0) {
        break L13;
       }
       i83 = i84 + 4 | 0;
       i84 = i83 | 0;
       i87 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
       if ((i87 | 0) != 0) {
        HEAP32[i84 >> 2] = i87;
        break L13;
       }
       i87 = i83 - 4 | 0;
       if ((i87 | 0) == 0) {
        break L13;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] & 63](i87);
       break;
      }
     case 87:
      {
       if ((__ZNK7WebCore11RenderStyle14listStyleImageEv(HEAP32[i30 >> 2] | 0) | 0) == 0) {
        break L13;
       }
       if ((HEAP8[(__ZNK7WebCore11RenderStyle14listStyleImageEv(HEAP32[i30 >> 2] | 0) | 0) + 8 | 0] & 2) == 0) {
        break L13;
       }
       i87 = HEAP32[i30 >> 2] | 0;
       __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i10, i1, __ZNK7WebCore11RenderStyle14listStyleImageEv(i87) | 0);
       __ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE(i87, i10);
       i87 = HEAP32[i39 >> 2] | 0;
       if ((i87 | 0) == 0) {
        break L13;
       }
       i83 = i87 + 4 | 0;
       i87 = i83 | 0;
       i84 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
       if ((i84 | 0) != 0) {
        HEAP32[i87 >> 2] = i84;
        break L13;
       }
       i84 = i83 - 4 | 0;
       if ((i84 | 0) == 0) {
        break L13;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i84 >> 2] | 0) + 4 >> 2] & 63](i84);
       break;
      }
     case 76:
      {
       i84 = HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 24 >> 2] | 0) + 68 >> 2] | 0;
       if ((i84 | 0) == 0) {
        break L13;
       }
       i83 = i84 + 12 | 0;
       if ((HEAP32[i83 >> 2] | 0) == 0) {
        break L13;
       }
       i87 = i84 + 4 | 0;
       i84 = 0;
       while (1) {
        i90 = (HEAP32[i87 >> 2] | 0) + (i84 * 12 & -1) | 0;
        i88 = HEAP32[i90 >> 2] | 0;
        do {
         if ((i88 | 0) != 0) {
          if ((HEAP8[i88 + 8 | 0] & 2) == 0) {
           break;
          }
          __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i9, i1, i88);
          i86 = HEAP32[i38 >> 2] | 0;
          HEAP32[i38 >> 2] = 0;
          i91 = HEAP32[i90 >> 2] | 0;
          HEAP32[i90 >> 2] = i86;
          if ((i91 | 0) == 0) {
           break;
          }
          i86 = i91 + 4 | 0;
          i91 = i86 | 0;
          i92 = (HEAP32[i91 >> 2] | 0) - 1 | 0;
          if ((i92 | 0) != 0) {
           HEAP32[i91 >> 2] = i92;
           break;
          }
          i92 = i86 - 4 | 0;
          if ((i92 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i92 >> 2] | 0) + 4 >> 2] & 63](i92);
         }
        } while (0);
        i84 = i84 + 1 | 0;
        if (i84 >>> 0 >= (HEAP32[i83 >> 2] | 0) >>> 0) {
         break;
        }
       }
       break;
      }
     case 73:
      {
       i83 = HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 88 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break L13;
       } else {
        i93 = i83;
       }
       while (1) {
        do {
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i93 >> 2] | 0) + 12 >> 2] & 15](i93) | 0) {
          i83 = i93 + 12 | 0;
          i84 = i83;
          i87 = HEAP32[i84 >> 2] | 0;
          if ((HEAP8[i87 + 8 | 0] & 2) == 0) {
           break;
          }
          __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i8, i1, i87);
          i87 = HEAP32[i37 >> 2] | 0;
          HEAP32[i37 >> 2] = 0;
          if ((i87 | 0) == 0) {
           break;
          }
          i90 = HEAP32[i84 >> 2] | 0;
          HEAP32[i83 >> 2] = i87;
          if ((i90 | 0) == 0) {
           break;
          }
          i87 = i90 + 4 | 0;
          i90 = i87 | 0;
          i83 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
          if ((i83 | 0) != 0) {
           HEAP32[i90 >> 2] = i83;
           break;
          }
          i83 = i87 - 4 | 0;
          if ((i83 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i83 >> 2] | 0) + 4 >> 2] & 63](i83);
         }
        } while (0);
        i93 = HEAP32[i93 + 4 >> 2] | 0;
        if ((i93 | 0) == 0) {
         break;
        }
       }
       break;
      }
     case 217:
      {
       i83 = HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break L13;
       }
       i87 = i83 + 16 | 0;
       i83 = HEAP32[(HEAP32[i87 >> 2] | 0) + 8 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break L13;
       }
       if ((HEAP8[i83 + 8 | 0] & 2) == 0) {
        break L13;
       }
       __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i12, i1, i83);
       i83 = HEAP32[i41 >> 2] | 0;
       HEAP32[i41 >> 2] = 0;
       HEAP32[i42 >> 2] = i83;
       i83 = HEAP32[i87 >> 2] | 0;
       i90 = i83 + 12 | 0;
       i84 = HEAP32[i90 >> 2] | 0;
       i88 = HEAP32[i90 + 4 >> 2] | 0;
       HEAP32[i16 >> 2] = i84;
       HEAP32[i16 + 4 >> 2] = i88;
       if ((i84 & 0 | 0) == 0 & (i88 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i43);
       }
       i88 = i83 + 20 | 0;
       i84 = HEAP32[i88 >> 2] | 0;
       i90 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i44 >> 2] = i84;
       HEAP32[i44 + 4 >> 2] = i90;
       if ((i84 & 0 | 0) == 0 & (i90 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i45);
       }
       i90 = i83 + 28 | 0;
       i84 = HEAP32[i90 >> 2] | 0;
       i88 = HEAP32[i90 + 4 >> 2] | 0;
       HEAP32[i46 >> 2] = i84;
       HEAP32[i46 + 4 >> 2] = i88;
       if ((i84 & 0 | 0) == 0 & (i88 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i47);
       }
       i88 = i83 + 36 | 0;
       i83 = HEAP32[i88 >> 2] | 0;
       i84 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i48 >> 2] = i83;
       HEAP32[i48 + 4 >> 2] = i84;
       if ((i83 & 0 | 0) == 0 & (i84 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i49);
       }
       i84 = HEAP32[i87 >> 2] | 0;
       i83 = (HEAP8[i84 + 4 | 0] & 1) != 0;
       i88 = i84 + 44 | 0;
       i90 = HEAP32[i88 >> 2] | 0;
       i92 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i19 >> 2] = i90;
       HEAP32[i19 + 4 >> 2] = i92;
       if ((i90 & 0 | 0) == 0 & (i92 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i50);
       }
       i92 = i84 + 52 | 0;
       i90 = HEAP32[i92 >> 2] | 0;
       i88 = HEAP32[i92 + 4 >> 2] | 0;
       HEAP32[i51 >> 2] = i90;
       HEAP32[i51 + 4 >> 2] = i88;
       if ((i90 & 0 | 0) == 0 & (i88 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i52);
       }
       i88 = i84 + 60 | 0;
       i90 = HEAP32[i88 >> 2] | 0;
       i92 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i53 >> 2] = i90;
       HEAP32[i53 + 4 >> 2] = i92;
       if ((i90 & 0 | 0) == 0 & (i92 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i54);
       }
       i92 = i84 + 68 | 0;
       i84 = HEAP32[i92 >> 2] | 0;
       i90 = HEAP32[i92 + 4 >> 2] | 0;
       HEAP32[i55 >> 2] = i84;
       HEAP32[i55 + 4 >> 2] = i90;
       if ((i84 & 0 | 0) == 0 & (i90 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i56);
       }
       i90 = HEAP32[i87 >> 2] | 0;
       i84 = i90 + 76 | 0;
       i92 = HEAP32[i84 >> 2] | 0;
       i88 = HEAP32[i84 + 4 >> 2] | 0;
       HEAP32[i22 >> 2] = i92;
       HEAP32[i22 + 4 >> 2] = i88;
       if ((i92 & 0 | 0) == 0 & (i88 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i57);
       }
       i88 = i90 + 84 | 0;
       i92 = HEAP32[i88 >> 2] | 0;
       i84 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i58 >> 2] = i92;
       HEAP32[i58 + 4 >> 2] = i84;
       if ((i92 & 0 | 0) == 0 & (i84 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i59);
       }
       i84 = i90 + 92 | 0;
       i92 = HEAP32[i84 >> 2] | 0;
       i88 = HEAP32[i84 + 4 >> 2] | 0;
       HEAP32[i60 >> 2] = i92;
       HEAP32[i60 + 4 >> 2] = i88;
       if ((i92 & 0 | 0) == 0 & (i88 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i61);
       }
       i88 = i90 + 100 | 0;
       i90 = HEAP32[i88 >> 2] | 0;
       i92 = HEAP32[i88 + 4 >> 2] | 0;
       HEAP32[i62 >> 2] = i90;
       HEAP32[i62 + 4 >> 2] = i92;
       if ((i90 & 0 | 0) == 0 & (i92 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i63);
       }
       i92 = HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] | 0;
       __ZN7WebCore14NinePieceImageC1EN3WTF10PassRefPtrINS_10StyleImageEEENS_9LengthBoxEbS5_S5_NS_19ENinePieceImageRuleES6_(i13, i14, i17, i83, i20, i23, i92 >>> 1 & 3, i92 >>> 3 & 3);
       i92 = HEAP32[i64 >> 2] | 0;
       i83 = i92 | 0;
       HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
       __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i87 >> 2] | 0);
       HEAP32[i87 >> 2] = i92;
       __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i64 >> 2] | 0);
       if ((HEAP8[i65] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i63);
       }
       if ((HEAP8[i66] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i61);
       }
       if ((HEAP8[i67] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i59);
       }
       if ((HEAP8[i68] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i57);
       }
       if ((HEAP8[i69] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i56);
       }
       if ((HEAP8[i70] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i54);
       }
       if ((HEAP8[i71] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i52);
       }
       if ((HEAP8[i72] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i50);
       }
       if ((HEAP8[i73] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i49);
       }
       if ((HEAP8[i74] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i47);
       }
       if ((HEAP8[i75] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i45);
       }
       if ((HEAP8[i76] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i43);
       }
       i92 = HEAP32[i42 >> 2] | 0;
       if ((i92 | 0) == 0) {
        break L13;
       }
       i87 = i92 + 4 | 0;
       i92 = i87 | 0;
       i83 = (HEAP32[i92 >> 2] | 0) - 1 | 0;
       if ((i83 | 0) != 0) {
        HEAP32[i92 >> 2] = i83;
        break L13;
       }
       i83 = i87 - 4 | 0;
       if ((i83 | 0) == 0) {
        break L13;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i83 >> 2] | 0) + 4 >> 2] & 63](i83);
       break;
      }
     case 297:
      {
       i83 = (HEAP32[i30 >> 2] | 0) + 20 | 0;
       i87 = HEAP32[(HEAP32[(HEAP32[i83 >> 2] | 0) + 164 >> 2] | 0) + 8 >> 2] | 0;
       if ((i87 | 0) == 0) {
        break L13;
       }
       if ((HEAP8[i87 + 8 | 0] & 2) == 0) {
        break L13;
       }
       __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i24, i1, i87);
       i87 = HEAP32[i83 >> 2] | 0;
       if ((HEAP32[i87 >> 2] | 0) == 1) {
        i94 = i87;
       } else {
        __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i87);
        i87 = HEAP32[i79 >> 2] | 0;
        i92 = HEAP32[i83 >> 2] | 0;
        i90 = i92 | 0;
        i88 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
        if ((i88 | 0) == 0) {
         __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i92);
         __ZN3WTF8fastFreeEPv(i92);
        } else {
         HEAP32[i90 >> 2] = i88;
        }
        HEAP32[i83 >> 2] = i87;
        i94 = i87;
       }
       i87 = HEAP32[i77 >> 2] | 0;
       HEAP32[i77 >> 2] = 0;
       i83 = i94 + 164 | 0;
       i88 = HEAP32[i83 >> 2] | 0;
       if ((HEAP32[i88 >> 2] | 0) == 1) {
        i95 = i88;
       } else {
        __ZNK7WebCore18NinePieceImageData4copyEv(i4, i88);
        i88 = HEAP32[i78 >> 2] | 0;
        __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i83 >> 2] | 0);
        HEAP32[i83 >> 2] = i88;
        i95 = i88;
       }
       i88 = i95 + 8 | 0;
       i83 = HEAP32[i88 >> 2] | 0;
       HEAP32[i88 >> 2] = i87;
       if ((i83 | 0) == 0) {
        break L13;
       }
       i87 = i83 + 4 | 0;
       i83 = i87 | 0;
       i88 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
       if ((i88 | 0) != 0) {
        HEAP32[i83 >> 2] = i88;
        break L13;
       }
       i88 = i87 - 4 | 0;
       if ((i88 | 0) == 0) {
        break L13;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i88 >> 2] | 0) + 4 >> 2] & 63](i88);
       break;
      }
     case 301:
      {
       i88 = (HEAP32[i30 >> 2] | 0) + 20 | 0;
       i87 = HEAP32[i88 >> 2] | 0;
       if ((HEAP32[i87 >> 2] | 0) == 1) {
        i96 = i87;
       } else {
        __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i87);
        i87 = HEAP32[i81 >> 2] | 0;
        i83 = HEAP32[i88 >> 2] | 0;
        i90 = i83 | 0;
        i92 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
        if ((i92 | 0) == 0) {
         __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i83);
         __ZN3WTF8fastFreeEPv(i83);
        } else {
         HEAP32[i90 >> 2] = i92;
        }
        HEAP32[i88 >> 2] = i87;
        i96 = i87;
       }
       i87 = i96 + 116 | 0;
       if ((i87 | 0) == 0) {
        break L13;
       } else {
        i97 = i87;
       }
       while (1) {
        i87 = i97 + 4 | 0;
        i88 = HEAP32[i87 >> 2] | 0;
        do {
         if ((i88 | 0) != 0) {
          if ((HEAP8[i88 + 8 | 0] & 2) == 0) {
           break;
          }
          __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i25, i1, i88);
          i92 = HEAP32[i80 >> 2] | 0;
          HEAP32[i80 >> 2] = 0;
          i90 = HEAP32[i87 >> 2] | 0;
          HEAP32[i87 >> 2] = i92;
          do {
           if ((i90 | 0) != 0) {
            i92 = i90 + 4 | 0;
            i83 = i92 | 0;
            i84 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
            if ((i84 | 0) != 0) {
             HEAP32[i83 >> 2] = i84;
             break;
            }
            i84 = i92 - 4 | 0;
            if ((i84 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i84 >> 2] | 0) + 4 >> 2] & 63](i84);
           }
          } while (0);
          i90 = i97 + 40 | 0;
          HEAP32[i90 >> 2] = HEAP32[i90 >> 2] | 16777216;
         }
        } while (0);
        i97 = HEAP32[i97 >> 2] | 0;
        if ((i97 | 0) == 0) {
         break;
        }
       }
       break;
      }
     case 365:
      {
       __ZN7WebCore13StyleResolver21loadPendingShapeImageEPNS_10ShapeValueE(i1, HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 184 >> 2] | 0);
       break;
      }
     case 366:
      {
       __ZN7WebCore13StyleResolver21loadPendingShapeImageEPNS_10ShapeValueE(i1, HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 188 >> 2] | 0);
       break;
      }
     default:
      {}
     }
    } while (0);
    i87 = i82 + 8 | 0;
    if ((i87 | 0) == (i31 | 0)) {
     break;
    } else {
     i98 = i87;
    }
    while (1) {
     i87 = HEAP32[i98 >> 2] | 0;
     if (!((i87 | 0) == 415 | (i87 | 0) == 0)) {
      break;
     }
     i87 = i98 + 8 | 0;
     if ((i87 | 0) == (i31 | 0)) {
      break L11;
     } else {
      i98 = i87;
     }
    }
    if ((i98 | 0) == (i31 | 0)) {
     break;
    } else {
     i82 = i98;
    }
   }
   i36 = HEAP32[i27 >> 2] | 0;
  }
 } while (0);
 if ((i36 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i27 = HEAP32[i29 >> 2] | 0;
 if ((i27 | 0) > 0) {
  i29 = 0;
  while (1) {
   do {
    if ((HEAP32[i36 + (i29 << 3) >> 2] | 0) != 415) {
     i98 = HEAP32[i36 + (i29 << 3) + 4 >> 2] | 0;
     if ((i98 | 0) == 0) {
      break;
     }
     i31 = i98 | 0;
     i1 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i98);
      break;
     } else {
      HEAP32[i31 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i29 = i29 + 1 | 0;
   if ((i29 | 0) >= (i27 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i36);
 _memset(i26 | 0, 0, 16) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 13696 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 6856 | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i10 = 0;
   i11 = 0;
   i12 = 0;
   i13 = 0;
  } else {
   if ((HEAP8[i2 + 816 | 0] & 1) == 0) {
    i10 = 0;
    i11 = 0;
    i12 = 0;
    i13 = 0;
    break;
   }
   i14 = HEAP32[i2 + 8 >> 2] << 1 & 1073741822;
   if ((i14 | 0) == 0) {
    i15 = -1640531527;
   } else {
    i16 = i14;
    i14 = HEAP32[i2 >> 2] | 0;
    i17 = -1640531527;
    while (1) {
     i18 = i16 - 1 | 0;
     i19 = (HEAPU16[i14 >> 1] | 0) + i17 | 0;
     i20 = (HEAPU16[i14 + 2 >> 1] | 0) << 11 ^ i19 ^ i19 << 16;
     i19 = (i20 >>> 11) + i20 | 0;
     if ((i18 | 0) == 0) {
      i15 = i19;
      break;
     } else {
      i16 = i18;
      i14 = i14 + 4 | 0;
      i17 = i19;
     }
    }
   }
   i17 = i15 << 3 ^ i15;
   i14 = (i17 >>> 5) + i17 | 0;
   i17 = i14 << 2 ^ i14;
   i14 = (i17 >>> 15) + i17 | 0;
   i17 = (i14 << 10 ^ i14) & 16777215;
   i14 = (i17 | 0) == 0 ? 8388608 : i17;
   i17 = __ZN7WebCore13StyleResolver30findFromMatchedPropertiesCacheEjRKNS0_11MatchResultE(i1, i14, i2) | 0;
   if ((i17 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    i12 = i14;
    i13 = 1;
    break;
   }
   i16 = i1 + 312 | 0;
   i19 = i17 + 36 | 0;
   __ZN7WebCore11RenderStyle20copyNonInheritedFromEPKS0_(HEAP32[i16 >> 2] | 0, HEAP32[i19 >> 2] | 0);
   if (!(__ZNK7WebCore11RenderStyle19inheritedDataSharedEPKS0_(HEAP32[i1 + 324 >> 2] | 0, HEAP32[i17 + 40 >> 2] | 0) | 0)) {
    i10 = 1;
    i11 = i17;
    i12 = i14;
    i13 = 1;
    break;
   }
   do {
    if ((i3 | 0) != 0) {
     i18 = HEAP32[i3 + 16 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] & 4096 | 0) == 0) {
      break;
     }
     if ((HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i18 | 0)) {
      i10 = 1;
      i11 = i17;
      i12 = i14;
      i13 = 1;
      break L1;
     }
    }
   } while (0);
   i14 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i14 + 44 >> 2] | 0;
   __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(i14, HEAP32[i19 >> 2] | 0, 1);
   i14 = (HEAP32[i16 >> 2] | 0) + 44 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] & -6145 | i17 & 6144;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i15 = i1 + 312 | 0;
 __ZN7WebCoreL30extractDirectionAndWritingModeERKNS_11RenderStyleERKNS_13StyleResolver11MatchResultERNS_13TextDirectionERNS_11WritingModeE(HEAP32[i15 >> 2] | 0, i2, i6, i7);
 i4 = i1 + 308 | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i21 = 21;
  } else {
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11progressTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8meterTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10isindexTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i21 = 21;
    break;
   }
   i22 = HEAP32[i6 >> 2] | 0;
   i23 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i21 | 0) == 21) {
   HEAP32[i1 + 388 >> 2] = 0;
   i17 = HEAP32[i6 >> 2] | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   i18 = i8 + 6704 | 0;
   i20 = i8 + 6692 | 0;
   _memset(i8 + 6640 | 0, 0, 52) | 0;
   HEAP32[i20 >> 2] = i18;
   i24 = i8 + 6696 | 0;
   HEAP32[i24 >> 2] = 8;
   i25 = i8 + 6700 | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i8 + 6832 >> 2] = i17;
   HEAP32[i8 + 6836 >> 2] = i14;
   i26 = i2 + 792 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = i2 + 796 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   L28 : do {
    if ((i27 | 0) == -1) {
     i30 = 1;
    } else {
     i31 = i2 + 8 | 0;
     i32 = i2 | 0;
     i33 = i2 + 532 | 0;
     i34 = i27;
     while (1) {
      if ((i34 | 0) > (i29 | 0)) {
       i21 = 29;
       break;
      }
      if ((HEAP32[i31 >> 2] | 0) >>> 0 <= i34 >>> 0) {
       i21 = 25;
       break;
      }
      i35 = HEAP32[i32 >> 2] | 0;
      if ((HEAP32[i33 >> 2] | 0) >>> 0 <= i34 >>> 0) {
       i21 = 27;
       break;
      }
      i36 = HEAP32[i35 + (i34 << 3) + 4 >> 2] | 0;
      if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i8, HEAP32[i35 + (i34 << 3) >> 2] | 0, 0, 0, i10, i36 >>> 2 & 3, i36 & 3) | 0) {
       i34 = i34 + 1 | 0;
      } else {
       break;
      }
     }
     L35 : do {
      if ((i21 | 0) == 27) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i21 | 0) == 25) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i21 | 0) == 29) {
       i34 = HEAP32[i26 >> 2] | 0;
       i36 = HEAP32[i28 >> 2] | 0;
       if ((i34 | 0) == -1) {
        i30 = 1;
        break L28;
       } else {
        i37 = i34;
       }
       while (1) {
        if ((i37 | 0) > (i36 | 0)) {
         i30 = 1;
         break L28;
        }
        if ((HEAP32[i31 >> 2] | 0) >>> 0 <= i37 >>> 0) {
         i21 = 32;
         break;
        }
        i34 = HEAP32[i32 >> 2] | 0;
        if ((HEAP32[i33 >> 2] | 0) >>> 0 <= i37 >>> 0) {
         i21 = 34;
         break;
        }
        i35 = HEAP32[i34 + (i37 << 3) + 4 >> 2] | 0;
        if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i8, HEAP32[i34 + (i37 << 3) >> 2] | 0, 0, 1, i10, i35 >>> 2 & 3, i35 & 3) | 0) {
         i37 = i37 + 1 | 0;
        } else {
         break L35;
        }
       }
       if ((i21 | 0) == 34) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       } else if ((i21 | 0) == 32) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i1, i2, i3, 0);
     if ((HEAP32[i25 >> 2] | 0) != 0) {
      HEAP32[i25 >> 2] = 0;
     }
     i33 = HEAP32[i20 >> 2] | 0;
     if ((i18 | 0) == (i33 | 0) | (i33 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     HEAP32[i20 >> 2] = 0;
     HEAP32[i24 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i33);
     STACKTOP = i5;
     return;
    }
   } while (0);
   while (1) {
    if ((1 << i30 & HEAP32[i8 + 6640 + (i30 >>> 5 << 2) >> 2] | 0) != 0) {
     __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i8 + (i30 << 4) | 0, i1);
    }
    i30 = i30 + 1 | 0;
    if ((i30 | 0) > 19) {
     break;
    }
   }
   __ZN7WebCore13StyleResolver10updateFontEv(i1);
   i28 = 20;
   while (1) {
    if ((1 << (i28 & 31) & HEAP32[i8 + 6640 + (i28 >>> 5 << 2) >> 2] | 0) != 0) {
     __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i8 + (i28 << 4) | 0, i1);
    }
    i28 = i28 + 1 | 0;
    if ((i28 | 0) > 414) {
     break;
    }
   }
   i28 = HEAP32[i15 >> 2] | 0;
   i26 = (HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0;
   HEAP8[i1 + 393 | 0] = i26 & 1;
   if (i26) {
    __ZN7WebCore10BorderDataaSERKS0_(i1 + 396 | 0, (HEAP32[i28 + 16 >> 2] | 0) + 100 | 0) | 0;
    __ZN7WebCore9FillLayeraSERKS0_(i1 + 496 | 0, (HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0) | 0;
    i28 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0) + 52 | 0;
    i26 = i1 + 544 | 0;
    i29 = HEAP32[i28 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i28 >> 2];
    HEAP8[i26 + 4 | 0] = i29;
   }
   if ((HEAP32[i25 >> 2] | 0) != 0) {
    HEAP32[i25 >> 2] = 0;
   }
   i29 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) == (i29 | 0) | (i29 | 0) == 0) {
    i22 = i17;
    i23 = i14;
    break;
   }
   HEAP32[i20 >> 2] = 0;
   HEAP32[i24 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i29);
   i22 = i17;
   i23 = i14;
  }
 } while (0);
 i8 = i9 + 6704 | 0;
 i30 = i9 + 6692 | 0;
 _memset(i9 + 6640 | 0, 0, 52) | 0;
 HEAP32[i30 >> 2] = i8;
 i37 = i9 + 6696 | 0;
 HEAP32[i37 >> 2] = 8;
 i7 = i9 + 6700 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 + 6832 >> 2] = i22;
 HEAP32[i9 + 6836 >> 2] = i23;
 i23 = i2 + 8 | 0;
 i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 i6 = i2 | 0;
 i29 = i2 + 532 | 0;
 i26 = 0;
 while (1) {
  if ((i26 | 0) > (i22 | 0)) {
   i21 = 60;
   break;
  }
  if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i26 >>> 0) {
   i21 = 56;
   break;
  }
  i28 = HEAP32[i6 >> 2] | 0;
  if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i26 >>> 0) {
   i21 = 58;
   break;
  }
  i27 = HEAP32[i28 + (i26 << 3) + 4 >> 2] | 0;
  if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i9, HEAP32[i28 + (i26 << 3) >> 2] | 0, 0, 0, i10, i27 >>> 2 & 3, i27 & 3) | 0) {
   i26 = i26 + 1 | 0;
  } else {
   i21 = 81;
   break;
  }
 }
 L80 : do {
  if ((i21 | 0) == 56) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i21 | 0) == 60) {
   i26 = HEAP32[i2 + 800 >> 2] | 0;
   i22 = HEAP32[i2 + 804 >> 2] | 0;
   L83 : do {
    if ((i26 | 0) != -1) {
     i27 = i26;
     while (1) {
      if ((i27 | 0) > (i22 | 0)) {
       break L83;
      }
      if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i27 >>> 0) {
       i21 = 63;
       break;
      }
      i28 = HEAP32[i6 >> 2] | 0;
      if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i27 >>> 0) {
       i21 = 65;
       break;
      }
      i16 = HEAP32[i28 + (i27 << 3) + 4 >> 2] | 0;
      if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i9, HEAP32[i28 + (i27 << 3) >> 2] | 0, 0, 1, i10, i16 >>> 2 & 3, i16 & 3) | 0) {
       i27 = i27 + 1 | 0;
      } else {
       i21 = 81;
       break L80;
      }
     }
     if ((i21 | 0) == 65) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i21 | 0) == 63) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i22 = HEAP32[i2 + 808 >> 2] | 0;
   i26 = HEAP32[i2 + 812 >> 2] | 0;
   L93 : do {
    if ((i22 | 0) != -1) {
     i14 = i22;
     while (1) {
      if ((i14 | 0) > (i26 | 0)) {
       break L93;
      }
      if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i14 >>> 0) {
       i21 = 70;
       break;
      }
      i17 = HEAP32[i6 >> 2] | 0;
      if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i14 >>> 0) {
       i21 = 72;
       break;
      }
      i24 = HEAP32[i17 + (i14 << 3) + 4 >> 2] | 0;
      if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i9, HEAP32[i17 + (i14 << 3) >> 2] | 0, 0, 1, i10, i24 >>> 2 & 3, i24 & 3) | 0) {
       i14 = i14 + 1 | 0;
      } else {
       i21 = 81;
       break L80;
      }
     }
     if ((i21 | 0) == 72) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i21 | 0) == 70) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i26 = HEAP32[i2 + 792 >> 2] | 0;
   i22 = HEAP32[i2 + 796 >> 2] | 0;
   L103 : do {
    if ((i26 | 0) != -1) {
     i14 = i26;
     while (1) {
      if ((i14 | 0) > (i22 | 0)) {
       break L103;
      }
      if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i14 >>> 0) {
       i21 = 77;
       break;
      }
      i24 = HEAP32[i6 >> 2] | 0;
      if ((HEAP32[i29 >> 2] | 0) >>> 0 <= i14 >>> 0) {
       i21 = 79;
       break;
      }
      i17 = HEAP32[i24 + (i14 << 3) + 4 >> 2] | 0;
      if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i9, HEAP32[i24 + (i14 << 3) >> 2] | 0, 0, 1, i10, i17 >>> 2 & 3, i17 & 3) | 0) {
       i14 = i14 + 1 | 0;
      } else {
       i21 = 81;
       break L80;
      }
     }
     if ((i21 | 0) == 77) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i21 | 0) == 79) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i22 = i1 + 388 | 0;
   HEAP32[i22 >> 2] = 0;
   i26 = 1;
   while (1) {
    if ((1 << i26 & HEAP32[i9 + 6640 + (i26 >>> 5 << 2) >> 2] | 0) != 0) {
     __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9 + (i26 << 4) | 0, i1);
    }
    i26 = i26 + 1 | 0;
    if ((i26 | 0) > 19) {
     break;
    }
   }
   i26 = (i11 | 0) != 0;
   do {
    if (i26) {
     if (+HEAPF32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2] == +HEAPF32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) {
      break;
     }
     __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i1, i2, i3, 0);
     break L80;
    }
   } while (0);
   __ZN7WebCore13StyleResolver10updateFontEv(i1);
   i14 = HEAP32[i22 >> 2] | 0;
   if ((i14 | 0) != 0) {
    __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, 19, i14);
   }
   if (!i26) {
    i14 = 20;
    while (1) {
     if ((1 << (i14 & 31) & HEAP32[i9 + 6640 + (i14 >>> 5 << 2) >> 2] | 0) != 0) {
      __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9 + (i14 << 4) | 0, i1);
     }
     i14 = i14 + 1 | 0;
     if ((i14 | 0) > 414) {
      break;
     }
    }
    i14 = HEAP32[i30 >> 2] | 0;
    i26 = HEAP32[i7 >> 2] | 0;
    i22 = i14 + (i26 << 4) | 0;
    if ((i26 | 0) != 0) {
     i26 = i14;
     while (1) {
      __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i26, i1);
      i26 = i26 + 16 | 0;
      if ((i26 | 0) == (i22 | 0)) {
       break;
      }
     }
    }
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     __ZN7WebCore13StyleResolver17loadPendingImagesEv(i1);
     __ZN7WebCore13StyleResolver18loadPendingShadersEv(i1);
     __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i1);
    }
    if (!i13) {
     break;
    }
    i22 = HEAP32[i4 >> 2] | 0;
    i26 = HEAP32[i15 >> 2] | 0;
    i14 = HEAP32[i1 + 324 >> 2] | 0;
    i17 = HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((HEAP32[i17 + 692 >> 2] | 0) == (i22 | 0)) {
     if ((HEAP8[i17 + 1949 | 0] & 1) != 0) {
      break;
     }
    }
    i17 = HEAP32[i26 + 52 >> 2] | 0;
    if ((i17 & 1048576 | 0) != 0) {
     break;
    }
    if ((i17 & 4032 | 0) != 0) {
     if ((HEAP32[i14 + 52 >> 2] & 1048576 | 0) != 0) {
      break;
     }
    }
    if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0) {
     break;
    }
    if (+HEAPF32[(HEAP32[i26 + 8 >> 2] | 0) + 40 >> 2] != +1) {
     break;
    }
    if ((HEAP32[i26 + 44 >> 2] & 24576 | 0) != 0) {
     break;
    }
    if ((HEAP32[i14 + 52 >> 2] & 524288 | 0) != 0) {
     break;
    }
    __ZN7WebCore13StyleResolver27addToMatchedPropertiesCacheEPKNS_11RenderStyleES3_jRKNS0_11MatchResultE(i1, i26, i14, i12, i2);
    break;
   }
   i14 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(HEAP32[i11 + 36 >> 2] | 0) | 0;
   i26 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(HEAP32[i15 >> 2] | 0) | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   i22 = HEAP32[i26 >> 2] | 0;
   L153 : do {
    if ((i17 | 0) == (i22 | 0)) {
     i21 = 97;
    } else {
     if ((i17 | 0) == 0 | (i22 | 0) == 0) {
      break;
     }
     i24 = HEAP32[i17 - 4 >> 2] | 0;
     if ((i24 | 0) == (HEAP32[i22 - 4 >> 2] | 0)) {
      i38 = 0;
     } else {
      break;
     }
     while (1) {
      if (i38 >>> 0 >= i24 >>> 0) {
       i21 = 97;
       break L153;
      }
      if ((HEAP32[i17 + (i38 << 2) >> 2] | 0) == (HEAP32[i22 + (i38 << 2) >> 2] | 0)) {
       i38 = i38 + 1 | 0;
      } else {
       break;
      }
     }
    }
   } while (0);
   do {
    if ((i21 | 0) == 97) {
     if (+HEAPF32[i14 + 8 >> 2] != +HEAPF32[i26 + 8 >> 2]) {
      break;
     }
     if (+HEAPF32[i14 + 12 >> 2] != +HEAPF32[i26 + 12 >> 2]) {
      break;
     }
     i22 = HEAP32[i14 + 16 >> 2] | 0;
     i17 = HEAP32[i26 + 16 >> 2] | 0;
     i24 = i17 ^ i22;
     if ((i24 & 268435440 | 0) != 0) {
      break;
     }
     if ((i22 >>> 28 | 0) != (i17 >>> 28 | 0)) {
      break;
     }
     i17 = HEAP32[i26 + 20 >> 2] ^ HEAP32[i14 + 20 >> 2];
     if ((i17 & 31 | 0) != 0) {
      break;
     }
     if ((i24 & 15 | 0) != 0) {
      break;
     }
     if ((i17 & 4064 | 0) != 0) {
      break;
     }
     if ((HEAP32[i14 + 4 >> 2] | 0) == (HEAP32[i26 + 4 >> 2] | 0)) {
      i39 = 20;
     } else {
      break;
     }
     while (1) {
      if ((1 << (i39 & 31) & HEAP32[i9 + 6640 + (i39 >>> 5 << 2) >> 2] | 0) != 0) {
       __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9 + (i39 << 4) | 0, i1);
      }
      i39 = i39 + 1 | 0;
      if ((i39 | 0) > 414) {
       break;
      }
     }
     i17 = HEAP32[i30 >> 2] | 0;
     i24 = HEAP32[i7 >> 2] | 0;
     i22 = i17 + (i24 << 4) | 0;
     if ((i24 | 0) != 0) {
      i24 = i17;
      while (1) {
       __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i24, i1);
       i24 = i24 + 16 | 0;
       if ((i24 | 0) == (i22 | 0)) {
        break;
       }
      }
     }
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      break L80;
     }
     __ZN7WebCore13StyleResolver17loadPendingImagesEv(i1);
     __ZN7WebCore13StyleResolver18loadPendingShadersEv(i1);
     __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i1);
     break L80;
    }
   } while (0);
   __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i1, i2, i3, 0);
  } else if ((i21 | 0) == 58) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i21 | 0) == 81) {
  __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i1, i2, i3, 0);
 }
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i30 >> 2] | 0;
 if ((i8 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i30 >> 2] = 0;
 HEAP32[i37 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13StyleResolver43createCustomFilterOperationWithInlineSyntaxEPNS_20WebKitCSSFilterValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i3 + 16 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i3 + 8 | 0;
 i3 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
 i11 = i3 + 16 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = i3 + 8 | 0;
 i3 = HEAP32[HEAP32[i13 >> 2] >> 2] | 0;
 if ((HEAP32[i3 + 4 >> 2] & 516096 | 0) == 188416) {
  i14 = i3;
 } else {
  i14 = 0;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = 0;
 i15 = i6 + 4 | 0;
 HEAP32[i15 >> 2] = 5;
 L10 : do {
  if (i12 >>> 0 > 1 >>> 0) {
   if ((HEAP32[i11 >> 2] | 0) >>> 0 <= 1 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i16 = HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   i18 = i17 & 516096;
   if ((i18 | 0) == 188416) {
    i19 = i16;
    i20 = 0;
    break;
   } else if ((i18 | 0) != 262144) {
    i19 = 0;
    i20 = 0;
    break;
   }
   do {
    if ((i16 | 0) == 0) {
     i21 = 0;
    } else {
     if ((i17 & 491520) >>> 0 <= 221184 >>> 0) {
      i21 = 0;
      break;
     }
     i21 = i16;
    }
   } while (0);
   i16 = i21 + 16 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i17 = i21 + 8 | 0;
   i18 = HEAP32[HEAP32[i17 >> 2] >> 2] | 0;
   if ((HEAP32[i18 + 4 >> 2] & 516096 | 0) == 188416) {
    i22 = i18;
   } else {
    i22 = 0;
   }
   i18 = (i21 | 0) == 0;
   i23 = 1;
   while (1) {
    if (i18) {
     i24 = 0;
    } else {
     i24 = HEAP32[i16 >> 2] | 0;
    }
    if (i23 >>> 0 >= i24 >>> 0) {
     i19 = i22;
     i20 = 1;
     break L10;
    }
    if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i23 >>> 0) {
     break;
    }
    i25 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i23 << 2) >> 2] | 0;
    i26 = i25 + 4 | 0;
    if ((HEAP32[i26 >> 2] & 508 | 0) == 472) {
     i27 = HEAP32[i25 + 8 >> 2] | 0;
    } else {
     i27 = 0;
    }
    do {
     if (__ZN7WebCore9CSSParser11isBlendModeENS_10CSSValueIDE(i27) | 0) {
      switch (HEAP32[i25 + 8 >> 2] | 0) {
      case 585:
       {
        i28 = 4;
        break;
       }
      case 586:
       {
        i28 = 5;
        break;
       }
      case 587:
       {
        i28 = 6;
        break;
       }
      case 588:
       {
        i28 = 7;
        break;
       }
      case 593:
       {
        i28 = 12;
        break;
       }
      case 594:
       {
        i28 = 13;
        break;
       }
      case 595:
       {
        i28 = 14;
        break;
       }
      case 596:
       {
        i28 = 15;
        break;
       }
      case 583:
       {
        i28 = 1;
        break;
       }
      case 584:
       {
        i28 = 2;
        break;
       }
      case 351:
       {
        i28 = 3;
        break;
       }
      case 589:
       {
        i28 = 8;
        break;
       }
      case 590:
       {
        i28 = 9;
        break;
       }
      case 591:
       {
        i28 = 10;
        break;
       }
      case 592:
       {
        i28 = 11;
        break;
       }
      default:
       {
        i28 = 0;
       }
      }
      HEAP32[i3 >> 2] = i28;
     } else {
      if ((HEAP32[i26 >> 2] & 508 | 0) == 472) {
       i29 = HEAP32[i25 + 8 >> 2] | 0;
      } else {
       i29 = 0;
      }
      if (!(__ZN7WebCore9CSSParser19isCompositeOperatorENS_10CSSValueIDE(i29) | 0)) {
       break;
      }
      switch (HEAP32[i25 + 8 >> 2] | 0) {
      case 130:
       {
        i30 = 1;
        break;
       }
      case 131:
       {
        i30 = 2;
        break;
       }
      case 132:
       {
        i30 = 3;
        break;
       }
      case 133:
       {
        i30 = 4;
        break;
       }
      case 134:
       {
        i30 = 5;
        break;
       }
      case 135:
       {
        i30 = 6;
        break;
       }
      case 136:
       {
        i30 = 7;
        break;
       }
      case 137:
       {
        i30 = 8;
        break;
       }
      case 138:
       {
        i30 = 9;
        break;
       }
      case 139:
       {
        i30 = 10;
        break;
       }
      case 140:
       {
        i30 = 11;
        break;
       }
      case 141:
       {
        i30 = 12;
        break;
       }
      default:
       {
        i30 = 0;
       }
      }
      HEAP32[i15 >> 2] = i30;
     }
    } while (0);
    i23 = i23 + 1 | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i19 = 0;
   i20 = 1;
  }
 } while (0);
 if ((i14 | 0) == 0 & (i19 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) >>> 0 > 1 >>> 0) {
   i30 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((i30 | 0) == 0) {
     i31 = 1;
     i32 = 1;
     i33 = 0;
     i34 = 88;
    } else {
     if ((HEAP32[i30 + 4 >> 2] & 491520) >>> 0 < 221185 >>> 0) {
      i31 = 1;
      i32 = 1;
      i33 = 0;
      i34 = 88;
      break;
     }
     do {
      if ((HEAP32[i30 + 16 >> 2] | 0) == 0) {
       i35 = 1;
       i36 = 1;
       i37 = 0;
       i34 = 83;
      } else {
       i15 = i30 + 16 | 0;
       if ((HEAP32[i15 >> 2] | 0) == 0) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
       i29 = i30 + 8 | 0;
       i28 = HEAP32[HEAP32[i29 >> 2] >> 2] | 0;
       if ((HEAP32[i28 + 4 >> 2] & 516096 | 0) != 0) {
        i35 = 1;
        i36 = 1;
        i37 = 0;
        i34 = 83;
        break;
       }
       i3 = i28;
       if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i3) | 0) << 16 >> 16 != 1) {
        i35 = 1;
        i36 = 1;
        i37 = 0;
        i34 = 83;
        break;
       }
       d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i3);
       do {
        if (d38 < +2147483647) {
         if (d38 <= +-2147483648) {
          i39 = -2147483648;
          break;
         }
         i39 = ~~d38;
        } else {
         i39 = 2147483647;
        }
       } while (0);
       if ((HEAP32[i15 >> 2] | 0) >>> 0 <= 1 >>> 0) {
        i35 = i39;
        i36 = i39;
        i37 = 1;
        i34 = 83;
        break;
       }
       i3 = HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] | 0;
       if ((HEAP32[i3 + 4 >> 2] & 516096 | 0) != 0) {
        i35 = i39;
        i36 = i39;
        i37 = 1;
        i34 = 83;
        break;
       }
       i28 = i3;
       if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i28) | 0) << 16 >> 16 != 1) {
        i35 = i39;
        i36 = i39;
        i37 = 1;
        i34 = 83;
        break;
       }
       d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i28);
       if (d38 >= +2147483647) {
        i35 = i39;
        i36 = 2147483647;
        i37 = 2;
        i34 = 83;
        break;
       }
       if (d38 <= +-2147483648) {
        i35 = i39;
        i36 = -2147483648;
        i37 = 2;
        i34 = 83;
        break;
       }
       i40 = 2;
       i41 = ~~d38;
       i42 = i39;
       i43 = i15;
      }
     } while (0);
     if ((i34 | 0) == 83) {
      i40 = i37;
      i41 = i36;
      i42 = i35;
      i43 = i30 + 16 | 0;
     }
     do {
      if (i40 >>> 0 < (HEAP32[i43 >> 2] | 0) >>> 0) {
       i28 = HEAP32[(HEAP32[i30 + 8 >> 2] | 0) + (i40 << 2) >> 2] | 0;
       if ((HEAP32[i28 + 4 >> 2] & 516604 | 0) != 472) {
        i44 = 0;
        i45 = i40;
        break;
       }
       i3 = (HEAP32[i28 + 8 >> 2] | 0) == 582 | 0;
       i44 = i3;
       i45 = i3 + i40 | 0;
      } else {
       i44 = 0;
       i45 = i40;
      }
     } while (0);
     if ((i45 | 0) == 0) {
      i31 = i41;
      i32 = i42;
      i33 = i44;
      i34 = 88;
     } else {
      i46 = 0;
      i47 = i41;
      i48 = i42;
      i49 = i44;
     }
    }
   } while (0);
   do {
    if ((i34 | 0) == 88) {
     if ((HEAP32[i9 >> 2] | 0) >>> 0 > 1 >>> 0) {
      i46 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
      i47 = i31;
      i48 = i32;
      i49 = i33;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   if ((HEAP32[i9 >> 2] | 0) >>> 0 > 2 >>> 0 & (i46 | 0) == 0) {
    i50 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    i50 = i46;
   }
   __ZN7WebCore25CustomFilterParameterListC1Ev(i7);
   if ((i50 | 0) == 0) {
    i51 = i49;
    i52 = i48;
    i53 = i47;
    i34 = 96;
    break;
   }
   if (__ZN7WebCore13StyleResolver30parseCustomFilterParameterListEPNS_8CSSValueERNS_25CustomFilterParameterListE(i2, i50, i7) | 0) {
    i51 = i49;
    i52 = i48;
    i53 = i47;
    i34 = 96;
    break;
   }
   HEAP32[i1 >> 2] = 0;
  } else {
   __ZN7WebCore25CustomFilterParameterListC1Ev(i7);
   i51 = 0;
   i52 = 1;
   i53 = 1;
   i34 = 96;
  }
 } while (0);
 do {
  if ((i34 | 0) == 96) {
   __ZN7WebCore13StyleResolver25lookupCustomFilterProgramEPNS_20WebKitCSSShaderValueES2_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i8, i2, i14, i19, i20, i6, i51);
   i47 = i8 | 0;
   i48 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = 0;
   i47 = __ZN3WTF10fastMallocEj(36) | 0;
   i49 = i5 | 0;
   HEAP32[i49 >> 2] = i48;
   __ZN7WebCore21CustomFilterOperationC1EN3WTF10PassRefPtrINS_19CustomFilterProgramEEERKNS_25CustomFilterParameterListEjj(i47, i5, i7, i53, i52);
   HEAP32[i1 >> 2] = i47;
   i47 = HEAP32[i49 >> 2] | 0;
   if ((i47 | 0) == 0) {
    break;
   }
   i49 = i47 + 4 | 0;
   i47 = i49 | 0;
   i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   if ((i48 | 0) != 0) {
    HEAP32[i47 >> 2] = i48;
    break;
   }
   i48 = i49 - 4 | 0;
   if ((i48 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 63](i48);
  }
 } while (0);
 i1 = i7 + 8 | 0;
 i52 = HEAP32[i1 >> 2] | 0;
 i53 = i7 | 0;
 if ((i52 | 0) != 0) {
  i5 = HEAP32[i53 >> 2] | 0;
  i8 = i5 + (i52 << 2) | 0;
  i52 = i5;
  while (1) {
   i5 = HEAP32[i52 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i51 = i5 + 4 | 0;
     i6 = i51 | 0;
     i20 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i6 >> 2] = i20;
      break;
     }
     i20 = i51 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
   } while (0);
   i52 = i52 + 4 | 0;
   if ((i52 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i53 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i53 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13StyleResolver22adjustGridItemPositionERNS_11RenderStyleERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i1 | 0;
 i5 = i1 + 16 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 48 | 0;
 i8 = i1 + 64 | 0;
 i9 = i1 + 80 | 0;
 i10 = i1 + 96 | 0;
 i11 = i1 + 112 | 0;
 i12 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 84 >> 2] | 0;
 i13 = i12 + 16 | 0;
 i14 = i12 + 40 | 0;
 i15 = i12 + 4 | 0;
 do {
  if ((HEAP32[i15 >> 2] | 0) == 2) {
   if ((HEAP32[i13 >> 2] | 0) != 2) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   i16 = i4 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(i2, i4);
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i18;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   i17 = i5 + 8 | 0;
   HEAP32[i17 >> 2] = 0;
   __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(i2, i5);
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i17 = i18 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i17 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i5 = i12 + 28 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 2) {
   if ((HEAP32[i14 >> 2] | 0) != 2) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   i4 = i6 + 8 | 0;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(i2, i6);
   i16 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i4 = i16 | 0;
     i17 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i4 >> 2] = i17;
      break;
     }
    }
   } while (0);
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i16 = i7 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(i2, i7);
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 80 >> 2] | 0;
 i3 = i7 + 184 | 0;
 L29 : do {
  if ((HEAP32[i15 >> 2] | 0) == 3) {
   i6 = HEAP32[i12 + 12 >> 2] | 0;
   i4 = (i6 | 0) == 0;
   if (!i4) {
    i16 = i6 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = HEAP32[i3 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i19 = 1;
   } else {
    i17 = HEAP32[i7 + 192 >> 2] | 0;
    i18 = HEAP32[i6 + 16 >> 2] | 0;
    if (i18 >>> 0 > 127 >>> 0) {
     i20 = i18 >>> 7;
    } else {
     i20 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i6) | 0;
    }
    i18 = (i20 >>> 23) + ~i20 | 0;
    i21 = i18 << 12 ^ i18;
    i18 = i21 >>> 7 ^ i21;
    i21 = i18 << 2 ^ i18;
    i18 = i21 >>> 20 ^ i21 | 1;
    i21 = i20;
    i22 = 0;
    while (1) {
     i23 = i21 & i17;
     i24 = i16 + (i23 * 20 & -1) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     i26 = i25;
     if ((i26 | 0) == 0) {
      i27 = 0;
      break;
     } else if ((i26 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i25, i6) | 0) {
       i27 = i24;
       break;
      }
     }
     i24 = (i22 | 0) == 0 ? i18 : i22;
     i21 = i24 + i23 | 0;
     i22 = i24;
    }
    i19 = (i27 | 0) == 0;
   }
   do {
    if (i4) {
     if (!i19) {
      break L29;
     }
    } else {
     i22 = i6 | 0;
     i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      if (i19) {
       break;
      } else {
       break L29;
      }
     } else {
      HEAP32[i22 >> 2] = i21;
      if (i19) {
       break;
      } else {
       break L29;
      }
     }
    }
   } while (0);
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   i6 = i8 + 8 | 0;
   HEAP32[i6 >> 2] = 0;
   __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(i2, i8);
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = i4 | 0;
   i21 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i21;
    break;
   }
  }
 } while (0);
 L59 : do {
  if ((HEAP32[i13 >> 2] | 0) == 3) {
   i8 = HEAP32[i12 + 24 >> 2] | 0;
   i19 = (i8 | 0) == 0;
   if (!i19) {
    i27 = i8 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
   }
   i27 = HEAP32[i3 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i28 = 1;
   } else {
    i20 = HEAP32[i7 + 192 >> 2] | 0;
    i15 = HEAP32[i8 + 16 >> 2] | 0;
    if (i15 >>> 0 > 127 >>> 0) {
     i29 = i15 >>> 7;
    } else {
     i29 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i8) | 0;
    }
    i15 = (i29 >>> 23) + ~i29 | 0;
    i21 = i15 << 12 ^ i15;
    i15 = i21 >>> 7 ^ i21;
    i21 = i15 << 2 ^ i15;
    i15 = i21 >>> 20 ^ i21 | 1;
    i21 = i29;
    i6 = 0;
    while (1) {
     i4 = i21 & i20;
     i22 = i27 + (i4 * 20 & -1) | 0;
     i18 = HEAP32[i22 >> 2] | 0;
     i16 = i18;
     if ((i16 | 0) == 0) {
      i30 = 0;
      break;
     } else if ((i16 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, i8) | 0) {
       i30 = i22;
       break;
      }
     }
     i22 = (i6 | 0) == 0 ? i15 : i6;
     i21 = i22 + i4 | 0;
     i6 = i22;
    }
    i28 = (i30 | 0) == 0;
   }
   do {
    if (i19) {
     if (!i28) {
      break L59;
     }
    } else {
     i6 = i8 | 0;
     i21 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      if (i28) {
       break;
      } else {
       break L59;
      }
     } else {
      HEAP32[i6 >> 2] = i21;
      if (i28) {
       break;
      } else {
       break L59;
      }
     }
    }
   } while (0);
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   i8 = i9 + 8 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(i2, i9);
   i19 = HEAP32[i8 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i8 = i19 | 0;
   i21 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i8 >> 2] = i21;
    break;
   }
  }
 } while (0);
 L89 : do {
  if ((HEAP32[i5 >> 2] | 0) == 3) {
   i9 = HEAP32[i12 + 36 >> 2] | 0;
   i28 = (i9 | 0) == 0;
   if (!i28) {
    i30 = i9 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   i30 = HEAP32[i3 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i31 = 1;
   } else {
    i29 = HEAP32[i7 + 192 >> 2] | 0;
    i13 = HEAP32[i9 + 16 >> 2] | 0;
    if (i13 >>> 0 > 127 >>> 0) {
     i32 = i13 >>> 7;
    } else {
     i32 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
    }
    i13 = (i32 >>> 23) + ~i32 | 0;
    i21 = i13 << 12 ^ i13;
    i13 = i21 >>> 7 ^ i21;
    i21 = i13 << 2 ^ i13;
    i13 = i21 >>> 20 ^ i21 | 1;
    i21 = i32;
    i8 = 0;
    while (1) {
     i19 = i21 & i29;
     i6 = i30 + (i19 * 20 & -1) | 0;
     i15 = HEAP32[i6 >> 2] | 0;
     i27 = i15;
     if ((i27 | 0) == 0) {
      i33 = 0;
      break;
     } else if ((i27 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i15, i9) | 0) {
       i33 = i6;
       break;
      }
     }
     i6 = (i8 | 0) == 0 ? i13 : i8;
     i21 = i6 + i19 | 0;
     i8 = i6;
    }
    i31 = (i33 | 0) == 0;
   }
   do {
    if (i28) {
     if (!i31) {
      break L89;
     }
    } else {
     i8 = i9 | 0;
     i21 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      if (i31) {
       break;
      } else {
       break L89;
      }
     } else {
      HEAP32[i8 >> 2] = i21;
      if (i31) {
       break;
      } else {
       break L89;
      }
     }
    }
   } while (0);
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   i9 = i10 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(i2, i10);
   i28 = HEAP32[i9 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i9 = i28 | 0;
   i21 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i9 >> 2] = i21;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i14 >> 2] | 0) != 3) {
  STACKTOP = i1;
  return;
 }
 i14 = HEAP32[i12 + 48 >> 2] | 0;
 i12 = (i14 | 0) == 0;
 if (!i12) {
  i10 = i14 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 1;
 } else {
  i3 = HEAP32[i7 + 192 >> 2] | 0;
  i7 = HEAP32[i14 + 16 >> 2] | 0;
  if (i7 >>> 0 > 127 >>> 0) {
   i35 = i7 >>> 7;
  } else {
   i35 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i14) | 0;
  }
  i7 = (i35 >>> 23) + ~i35 | 0;
  i31 = i7 << 12 ^ i7;
  i7 = i31 >>> 7 ^ i31;
  i31 = i7 << 2 ^ i7;
  i7 = i31 >>> 20 ^ i31 | 1;
  i31 = i35;
  i35 = 0;
  while (1) {
   i33 = i31 & i3;
   i32 = i10 + (i33 * 20 & -1) | 0;
   i5 = HEAP32[i32 >> 2] | 0;
   i21 = i5;
   if ((i21 | 0) == 0) {
    i36 = 0;
    break;
   } else if ((i21 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i5, i14) | 0) {
     i36 = i32;
     break;
    }
   }
   i32 = (i35 | 0) == 0 ? i7 : i35;
   i31 = i32 + i33 | 0;
   i35 = i32;
  }
  i34 = (i36 | 0) == 0;
 }
 do {
  if (i12) {
   if (i34) {
    break;
   }
   STACKTOP = i1;
   return;
  } else {
   i36 = i14 | 0;
   i35 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    if (i34) {
     break;
    }
    STACKTOP = i1;
    return;
   } else {
    HEAP32[i36 >> 2] = i35;
    if (i34) {
     break;
    }
    STACKTOP = i1;
    return;
   }
  }
 } while (0);
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 i34 = i11 + 8 | 0;
 HEAP32[i34 >> 2] = 0;
 __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(i2, i11);
 i11 = HEAP32[i34 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i34 = i11 | 0;
 i2 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i34 >> 2] = i2;
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore13StyleResolver26keyframeStylesForAnimationEPNS_7ElementEPKNS_11RenderStyleERNS_12KeyframeListE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 120 | 0;
 i15 = i5 + 128 | 0;
 i16 = i5 + 136 | 0;
 i17 = i5 + 144 | 0;
 i18 = i5 + 176 | 0;
 __ZN7WebCore12KeyframeList5clearEv(i4);
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = HEAP32[i4 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i20 = i19;
 i21 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i22 = HEAP32[i1 + 108 >> 2] | 0;
  i23 = i22 << 3 | 0;
  i24 = 0;
  i25 = i22;
 } else {
  i22 = HEAP32[i1 + 112 >> 2] | 0;
  i26 = i19;
  i19 = i26 + ~(i26 << 15) | 0;
  i26 = (i19 >>> 10 ^ i19) * 9 & -1;
  i19 = i26 >>> 6 ^ i26;
  i26 = i19 + ~(i19 << 11) | 0;
  i19 = i26 >>> 16 ^ i26;
  i26 = i22 & i19;
  i27 = i21 + (i26 << 3) | 0;
  i28 = HEAP32[i27 >> 2] | 0;
  L12 : do {
   if ((i28 | 0) == (i20 | 0)) {
    i29 = i27;
   } else {
    i30 = (i19 >>> 23) + ~i19 | 0;
    i31 = i30 << 12 ^ i30;
    i30 = i31 >>> 7 ^ i31;
    i31 = i30 << 2 ^ i30;
    i30 = i31 >>> 20 ^ i31 | 1;
    i31 = 0;
    i32 = i26;
    i33 = i28;
    while (1) {
     if ((i33 | 0) == 0) {
      i29 = 0;
      break L12;
     }
     i34 = (i31 | 0) == 0 ? i30 : i31;
     i35 = i34 + i32 & i22;
     i36 = i21 + (i35 << 3) | 0;
     i37 = HEAP32[i36 >> 2] | 0;
     if ((i37 | 0) == (i20 | 0)) {
      i29 = i36;
      break;
     } else {
      i31 = i34;
      i32 = i35;
      i33 = i37;
     }
    }
   }
  } while (0);
  i20 = HEAP32[i1 + 108 >> 2] | 0;
  i23 = (i29 | 0) == 0 ? i21 + (i20 << 3) | 0 : i29;
  i24 = i21;
  i25 = i20;
 }
 if ((i23 | 0) == (i24 + (i25 << 3) | 0)) {
  STACKTOP = i5;
  return;
 }
 i25 = HEAP32[i23 + 4 >> 2] | 0;
 i23 = i25 + 16 | 0;
 L23 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   i24 = i1 + 308 | 0;
   i20 = i1 + 308 | 0;
   i21 = i1 + 216 | 0;
   i29 = i25 + 8 | 0;
   i22 = i8 | 0;
   i28 = i8 + 28 | 0;
   i26 = i9 | 0;
   i19 = i10 | 0;
   i27 = i10 + 4 | 0;
   i33 = i10 + 8 | 0;
   i32 = i8 + 8 | 0;
   i31 = i1 + 316 | 0;
   i30 = i1 + 336 | 0;
   i37 = i2 + 12 | 0;
   i35 = i2 + 20 | 0;
   i34 = i2;
   i36 = 0;
   while (1) {
    do {
     if ((HEAP32[i24 >> 2] | 0) != (i2 | 0)) {
      HEAP32[i24 >> 2] = i2;
      HEAP32[i31 >> 2] = (HEAP32[i37 >> 2] & 8 | 0) == 0 ? 0 : i34;
      if ((HEAP32[i37 >> 2] & 512 | 0) == 0) {
       i38 = 0;
      } else {
       i38 = __ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE(HEAP32[(HEAP32[(HEAP32[i35 >> 2] | 0) + 8 >> 2] | 0) + 952 >> 2] | 0, i2) | 0;
      }
      HEAP32[i30 >> 2] = i38;
      i39 = HEAP32[(HEAP32[i35 >> 2] | 0) + 8 >> 2] | 0;
      if ((HEAP32[i39 + 692 >> 2] | 0) != (i2 | 0)) {
       break;
      }
      HEAP8[i39 + 1948 | 0] = 0;
      HEAP8[(HEAP32[(HEAP32[i35 >> 2] | 0) + 8 >> 2] | 0) + 1949 | 0] = 0;
     }
    } while (0);
    __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i20, HEAP32[i21 >> 2] | 0, i2, 0, 0);
    if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i36 >>> 0) {
     break;
    }
    i39 = HEAP32[(HEAP32[i29 >> 2] | 0) + (i36 << 2) >> 2] | 0;
    _memset(i8 | 0, 0, 32) | 0;
    __ZN7WebCore13StyleResolver16styleForKeyframeEPKNS_11RenderStyleEPKNS_13StyleKeyframeERNS_13KeyframeValueE(i9, i1, i3, i39, i8);
    i40 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = HEAP32[i26 >> 2];
    do {
     if ((i40 | 0) != 0) {
      i41 = i40 | 0;
      i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i40);
       __ZN3WTF8fastFreeEPv(i40);
       break;
      } else {
       HEAP32[i41 >> 2] = i42;
       break;
      }
     }
    } while (0);
    HEAP32[i19 >> 2] = 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i33 >> 2] = 0;
    __ZN7WebCore13StyleKeyframe14parseKeyStringERKN3WTF6StringERNS1_6VectorIdLj0ENS1_15CrashOnOverflowEEE(i39 + 8 | 0, i10);
    do {
     if ((HEAP32[i33 >> 2] | 0) != 0) {
      i40 = 0;
      while (1) {
       HEAPF64[i22 >> 3] = +HEAPF64[(HEAP32[i19 >> 2] | 0) + (i40 << 3) >> 3];
       __ZN7WebCore12KeyframeList6insertERKNS_13KeyframeValueE(i4, i8);
       i40 = i40 + 1 | 0;
       i43 = HEAP32[i33 >> 2] | 0;
       if (i40 >>> 0 >= i43 >>> 0) {
        break;
       }
      }
      if ((i43 | 0) == 0) {
       break;
      }
      HEAP32[i33 >> 2] = 0;
     }
    } while (0);
    i39 = HEAP32[i19 >> 2] | 0;
    if ((i39 | 0) != 0) {
     HEAP32[i19 >> 2] = 0;
     HEAP32[i27 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i39);
    }
    i39 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i39 | 0) != 0) {
      i40 = i39 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i39);
       __ZN3WTF8fastFreeEPv(i39);
       break;
      } else {
       HEAP32[i40 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i39 = HEAP32[i32 >> 2] | 0;
    if ((i39 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i39);
    }
    i36 = i36 + 1 | 0;
    if (i36 >>> 0 >= (HEAP32[i23 >> 2] | 0) >>> 0) {
     break L23;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i23 = i4 + 12 | 0;
 i43 = HEAP32[i23 >> 2] | 0;
 if ((i43 | 0) <= 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i4 + 4 | 0;
 if (+HEAPF64[HEAP32[i8 >> 2] >> 3] != +0) {
  do {
   if ((HEAP32[H_BASE + 488 >> 2] | 0) == 0) {
    __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i11, 0);
    i10 = HEAP32[i11 >> 2] | 0;
    i9 = __ZN3WTF10fastMallocEj(12) | 0;
    i2 = i9;
    HEAP32[i6 >> 2] = i10;
    __ZN7WebCore13StyleKeyframeC1EN3WTF7PassRefINS_15StylePropertiesEEE(i2, i6);
    HEAP32[H_BASE + 488 >> 2] = i2;
    __ZN3WTF6StringC1EPKc(i12, H_BASE + 24 | 0);
    i2 = i12 | 0;
    i10 = HEAP32[i2 >> 2] | 0;
    if ((i10 | 0) != 0) {
     i38 = i10 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
    }
    i38 = i9 + 8 | 0;
    i9 = HEAP32[i38 >> 2] | 0;
    HEAP32[i38 >> 2] = i10;
    do {
     if ((i9 | 0) != 0) {
      i10 = i9 | 0;
      i38 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i10 >> 2] = i38;
       break;
      }
     }
    } while (0);
    i9 = HEAP32[i2 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i38 = i9 | 0;
    i10 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i38 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i12 = i13 + 28 | 0;
  _memset(i13 | 0, 0, 32) | 0;
  __ZN7WebCore13StyleResolver16styleForKeyframeEPKNS_11RenderStyleEPKNS_13StyleKeyframeERNS_13KeyframeValueE(i14, i1, i3, HEAP32[H_BASE + 488 >> 2] | 0, i13);
  i6 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
  do {
   if ((i6 | 0) != 0) {
    i14 = i6 | 0;
    i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i14 >> 2] = i11;
     break;
    }
   }
  } while (0);
  __ZN7WebCore12KeyframeList6insertERKNS_13KeyframeValueE(i4, i13);
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i12 = i6 | 0;
    i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i12 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i13 + 8 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  i44 = HEAP32[i23 >> 2] | 0;
 } else {
  i44 = i43;
 }
 i43 = _llvm_uadd_with_overflow_i32(i44 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (+HEAPF64[(HEAP32[i8 >> 2] | 0) + (i43 << 5) >> 3] == +1) {
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[H_BASE + 480 >> 2] | 0) == 0) {
   __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i15, 0);
   i43 = HEAP32[i15 >> 2] | 0;
   i8 = __ZN3WTF10fastMallocEj(12) | 0;
   i44 = i8;
   HEAP32[i7 >> 2] = i43;
   __ZN7WebCore13StyleKeyframeC1EN3WTF7PassRefINS_15StylePropertiesEEE(i44, i7);
   HEAP32[H_BASE + 480 >> 2] = i44;
   __ZN3WTF6StringC1EPKc(i16, H_BASE + 16 | 0);
   i44 = i16 | 0;
   i43 = HEAP32[i44 >> 2] | 0;
   if ((i43 | 0) != 0) {
    i23 = i43 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i23 = i8 + 8 | 0;
   i8 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i43;
   do {
    if ((i8 | 0) != 0) {
     i43 = i8 | 0;
     i23 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i43 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i44 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = i8 | 0;
   i23 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i23;
    break;
   }
  }
 } while (0);
 HEAPF64[i17 >> 3] = +1;
 i16 = i17 + 28 | 0;
 _memset(i17 + 8 | 0, 0, 24) | 0;
 __ZN7WebCore13StyleResolver16styleForKeyframeEPKNS_11RenderStyleEPKNS_13StyleKeyframeERNS_13KeyframeValueE(i18, i1, i3, HEAP32[H_BASE + 480 >> 2] | 0, i17);
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
 do {
  if ((i3 | 0) != 0) {
   i18 = i3 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12KeyframeList6insertERKNS_13KeyframeValueE(i4, i17);
 i4 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i16 = i4 | 0;
   i3 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i16 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i17 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i5;
 return;
}
function __ZNSt3__16__sortIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 4 | 0;
  i6 = i5 | 0;
  i7 = i4;
  L3 : while (1) {
   i8 = i7;
   i9 = i2 - i8 | 0;
   i10 = i9 >> 2;
   switch (i10 | 0) {
   case 3:
    {
     i11 = 6;
     break L1;
     break;
    }
   case 2:
    {
     i11 = 4;
     break L1;
     break;
    }
   case 4:
    {
     i11 = 14;
     break L1;
     break;
    }
   case 5:
    {
     i11 = 15;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i11 = 69;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i9 | 0) < 28) {
    i11 = 21;
    break L1;
   }
   i12 = (i10 | 0) / 2 & -1;
   i13 = i7 + (i12 << 2) | 0;
   do {
    if ((i9 | 0) > 3996) {
     i14 = (i10 | 0) / 4 & -1;
     i15 = i7 + (i14 << 2) | 0;
     i16 = i7 + (i14 + i12 << 2) | 0;
     i14 = __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i7, i15, i13, i16, i3) | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i16) | 0)) {
      i17 = i14;
      break;
     }
     i18 = i16 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = HEAP32[i6 >> 2];
     HEAP32[i6 >> 2] = i19;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i16, i13) | 0)) {
      i17 = i14 + 1 | 0;
      break;
     }
     i16 = i13 | 0;
     i19 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i19;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i13, i15) | 0)) {
      i17 = i14 + 2 | 0;
      break;
     }
     i19 = i15 | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i16 >> 2] = i18;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i15, i7) | 0)) {
      i17 = i14 + 3 | 0;
      break;
     }
     i15 = i7 | 0;
     i18 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i19 >> 2] = i18;
     i17 = i14 + 4 | 0;
    } else {
     i14 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i13, i7) | 0;
     i18 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i13) | 0;
     if (!i14) {
      if (!i18) {
       i17 = 0;
       break;
      }
      i14 = i13 | 0;
      i19 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
      HEAP32[i6 >> 2] = i19;
      if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i13, i7) | 0)) {
       i17 = 1;
       break;
      }
      i19 = i7 | 0;
      i15 = HEAP32[i19 >> 2] | 0;
      HEAP32[i19 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i14 >> 2] = i15;
      i17 = 2;
      break;
     }
     i15 = i7 | 0;
     if (i18) {
      i18 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i6 >> 2];
      HEAP32[i6 >> 2] = i18;
      i17 = 1;
      break;
     }
     i18 = i13 | 0;
     i14 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i14;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i13) | 0)) {
      i17 = 1;
      break;
     }
     i14 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = HEAP32[i6 >> 2];
     HEAP32[i6 >> 2] = i14;
     i17 = 2;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i13) | 0) {
     i20 = i5;
     i21 = i17;
    } else {
     i12 = i5;
     while (1) {
      i22 = i12 - 4 | 0;
      if ((i7 | 0) == (i22 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i22, i13) | 0) {
       i11 = 49;
       break;
      } else {
       i12 = i22;
      }
     }
     if ((i11 | 0) == 49) {
      i11 = 0;
      i12 = i7 | 0;
      i10 = i22 | 0;
      i9 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i10 >> 2] = i9;
      i20 = i22;
      i21 = i17 + 1 | 0;
      break;
     }
     i9 = i7 + 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i5) | 0) {
      i23 = i9;
     } else {
      i10 = i9;
      while (1) {
       if ((i10 | 0) == (i5 | 0)) {
        i11 = 72;
        break L1;
       }
       i24 = i10 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i10) | 0) {
        break;
       } else {
        i10 = i24;
       }
      }
      i9 = i10 | 0;
      i12 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
      HEAP32[i6 >> 2] = i12;
      i23 = i24;
     }
     if ((i23 | 0) == (i5 | 0)) {
      i11 = 73;
      break L1;
     } else {
      i25 = i5;
      i26 = i23;
     }
     while (1) {
      i12 = i26;
      while (1) {
       i27 = i12 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i12) | 0) {
        i28 = i25;
        break;
       } else {
        i12 = i27;
       }
      }
      while (1) {
       i28 = i28 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i28) | 0)) {
        break;
       }
      }
      if (i12 >>> 0 >= i28 >>> 0) {
       i7 = i12;
       continue L3;
      }
      i9 = i12 | 0;
      i14 = i28 | 0;
      i18 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i14 >> 2] = i18;
      i25 = i28;
      i26 = i27;
     }
    }
   } while (0);
   i10 = i7 + 4 | 0;
   L46 : do {
    if (i10 >>> 0 < i20 >>> 0) {
     i18 = i20;
     i14 = i10;
     i9 = i21;
     i15 = i13;
     while (1) {
      i19 = i14;
      while (1) {
       i29 = i19 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i19, i15) | 0) {
        i19 = i29;
       } else {
        i30 = i18;
        break;
       }
      }
      while (1) {
       i30 = i30 - 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i30, i15) | 0) {
        break;
       }
      }
      if (i19 >>> 0 > i30 >>> 0) {
       i31 = i19;
       i32 = i9;
       i33 = i15;
       break L46;
      }
      i12 = i19 | 0;
      i16 = i30 | 0;
      i34 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i16 >> 2] = i34;
      i18 = i30;
      i14 = i29;
      i9 = i9 + 1 | 0;
      i15 = (i15 | 0) == (i19 | 0) ? i30 : i15;
     }
    } else {
     i31 = i10;
     i32 = i21;
     i33 = i13;
    }
   } while (0);
   do {
    if ((i31 | 0) == (i33 | 0)) {
     i35 = i32;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i33, i31) | 0)) {
      i35 = i32;
      break;
     }
     i13 = i31 | 0;
     i10 = i33 | 0;
     i15 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i15;
     i35 = i32 + 1 | 0;
    }
   } while (0);
   if ((i35 | 0) == 0) {
    i36 = __ZNSt3__127__insertion_sort_incompleteIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEbT0_SC_T_(i7, i31, i3) | 0;
    i15 = i31 + 4 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEbT0_SC_T_(i15, i1, i3) | 0) {
     i11 = 61;
     break;
    }
    if (i36) {
     i7 = i15;
     continue;
    }
   }
   i15 = i31;
   if ((i15 - i8 | 0) >= (i2 - i15 | 0)) {
    i11 = 65;
    break;
   }
   __ZNSt3__16__sortIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i7, i31, i3);
   i7 = i31 + 4 | 0;
  }
  if ((i11 | 0) == 61) {
   i11 = 0;
   if (i36) {
    i11 = 74;
    break;
   } else {
    i4 = i7;
    i1 = i31;
    continue;
   }
  } else if ((i11 | 0) == 65) {
   i11 = 0;
   __ZNSt3__16__sortIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i31 + 4 | 0, i1, i3);
   i4 = i7;
   i1 = i31;
   continue;
  }
 }
 if ((i11 | 0) == 6) {
  i31 = i7 + 4 | 0;
  i4 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i31, i7) | 0;
  i36 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i31) | 0;
  if (!i4) {
   if (!i36) {
    return;
   }
   i4 = i31 | 0;
   i35 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i35;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i31, i7) | 0)) {
    return;
   }
   i35 = i7 | 0;
   i32 = HEAP32[i35 >> 2] | 0;
   HEAP32[i35 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i4 >> 2] = i32;
   return;
  }
  i32 = i7 | 0;
  if (i36) {
   i36 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i36;
   return;
  }
  i36 = i31 | 0;
  i4 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = HEAP32[i36 >> 2];
  HEAP32[i36 >> 2] = i4;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i31) | 0)) {
   return;
  }
  i31 = HEAP32[i36 >> 2] | 0;
  HEAP32[i36 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i31;
  return;
 } else if ((i11 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i7) | 0)) {
   return;
  }
  i31 = i7 | 0;
  i36 = HEAP32[i31 >> 2] | 0;
  HEAP32[i31 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i36;
  return;
 } else if ((i11 | 0) == 21) {
  __ZNSt3__118__insertion_sort_3IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i7, i1, i3);
  return;
 } else if ((i11 | 0) == 14) {
  __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i7, i7 + 4 | 0, i7 + 8 | 0, i5, i3) | 0;
  return;
 } else if ((i11 | 0) == 15) {
  i1 = i7 + 4 | 0;
  i36 = i7 + 8 | 0;
  i31 = i7 + 12 | 0;
  __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i7, i1, i36, i31, i3) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i31) | 0)) {
   return;
  }
  i5 = i31 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i4;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i31, i36) | 0)) {
   return;
  }
  i31 = i36 | 0;
  i4 = HEAP32[i31 >> 2] | 0;
  HEAP32[i31 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i4;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i36, i1) | 0)) {
   return;
  }
  i36 = i1 | 0;
  i4 = HEAP32[i36 >> 2] | 0;
  HEAP32[i36 >> 2] = HEAP32[i31 >> 2];
  HEAP32[i31 >> 2] = i4;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i1, i7) | 0)) {
   return;
  }
  i1 = i7 | 0;
  i7 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i36 >> 2];
  HEAP32[i36 >> 2] = i7;
  return;
 } else if ((i11 | 0) == 69) {
  return;
 } else if ((i11 | 0) == 72) {
  return;
 } else if ((i11 | 0) == 73) {
  return;
 } else if ((i11 | 0) == 74) {
  return;
 }
}
function __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 936 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = (i5 | 0) == 0;
 do {
  if (i16) {
   i5 = i3 + 20 | 0;
   if (__ZNK7WebCore8Document21haveStylesheetsLoadedEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) | 0) {
    break;
   }
   i17 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i18 = i17 | 0;
   } else {
    i18 = HEAP32[i17 >> 2] | 0;
   }
   if ((HEAP32[i18 >> 2] | 0) != 0) {
    break;
   }
   do {
    if ((HEAP32[H_BASE + 512 >> 2] | 0) == 0) {
     __ZN7WebCore11RenderStyle6createEv(i9);
     i17 = HEAP32[i9 >> 2] | 0;
     HEAP32[H_BASE + 512 >> 2] = i17;
     i19 = i17 + 48 | 0;
     HEAP32[i19 >> 2] = HEAP32[i19 >> 2] & -32 | 22;
     i19 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[H_BASE + 512 >> 2] | 0) | 0;
     i17 = i10 | 0;
     i20 = HEAP32[i2 + 240 >> 2] | 0;
     HEAP32[i17 >> 2] = i20;
     if ((i20 | 0) != 0) {
      i21 = i20 + 4 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i19, i10);
     i19 = HEAP32[i17 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i17 = i19 + 4 | 0;
     i19 = i17 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i19 >> 2] = i21;
      break;
     }
     i21 = i17 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
    }
   } while (0);
   HEAP8[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 325 | 0] = 1;
   i21 = HEAP32[H_BASE + 512 >> 2] | 0;
   HEAP32[i1 >> 2] = i21;
   i17 = i21 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   STACKTOP = i8;
   return;
  }
 } while (0);
 i10 = i2 + 308 | 0;
 i9 = i2 + 308 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) != (i3 | 0)) {
   HEAP32[i9 >> 2] = i3;
   if ((i3 | 0) == 0) {
    HEAP32[i2 + 316 >> 2] = 0;
    HEAP32[i2 + 336 >> 2] = 0;
    break;
   }
   i18 = i3 + 12 | 0;
   if ((HEAP32[i18 >> 2] & 8 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = i3;
   }
   HEAP32[i2 + 316 >> 2] = i22;
   i17 = i3 + 20 | 0;
   if ((HEAP32[i18 >> 2] & 512 | 0) == 0) {
    i23 = 0;
   } else {
    i23 = __ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0) + 952 >> 2] | 0, i3) | 0;
   }
   HEAP32[i2 + 336 >> 2] = i23;
   i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i18 + 692 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   HEAP8[i18 + 1948 | 0] = 0;
   HEAP8[(HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0) + 1949 | 0] = 0;
  }
 } while (0);
 i23 = i2 + 216 | 0;
 __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i10, HEAP32[i23 >> 2] | 0, i3, i4, i7);
 do {
  if (i16) {
   i4 = __ZN7WebCore13StyleResolver17locateSharedStyleEv(i2) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore13StyleResolver5State5clearEv(i10);
   HEAP32[i1 >> 2] = i4;
   i22 = i4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   STACKTOP = i8;
   return;
  }
 } while (0);
 i16 = i2 + 324 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   __ZN7WebCore13StyleResolver22defaultStyleForElementEv(i12, i2);
   i22 = i2 + 312 | 0;
   i4 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
   do {
    if ((i4 | 0) != 0) {
     i9 = i4 | 0;
     i17 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i4);
      __ZN3WTF8fastFreeEPv(i4);
      break;
     } else {
      HEAP32[i9 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i13, HEAP32[i22 >> 2] | 0);
   i4 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i17;
    break;
   }
  } else {
   __ZN7WebCore11RenderStyle6createEv(i11);
   i17 = i2 + 312 | 0;
   i5 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i17 >> 2] | 0;
   i22 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i24 = 1;
    } else {
     i9 = HEAP32[i3 + 16 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i24 = 1;
      break;
     }
     if ((HEAP32[i9 + 12 >> 2] & 4096 | 0) == 0) {
      i24 = 1;
      break;
     }
     i24 = (HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i9 | 0) | 0;
    }
   } while (0);
   __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(i5, i22, i24);
  }
 } while (0);
 if ((HEAP32[i3 + 12 >> 2] & 512 | 0) != 0) {
  i24 = i2 + 312 | 0;
  i11 = (HEAP32[i24 >> 2] | 0) + 52 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 134217728;
  i11 = HEAP32[i2 + 336 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i25 = 0;
   } else {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     i25 = i11;
     break;
    }
    i13 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i25 = i11;
     break;
    }
    i12 = __ZNK7WebCore8Document4pageEv(i13) | 0;
    do {
     if ((i12 | 0) == 0) {
      i17 = HEAP32[i13 + 2204 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i26 = 0;
       break;
      }
      i26 = __ZNK7WebCore8Document4pageEv(i17) | 0;
     } else {
      i26 = i12;
     }
    } while (0);
    i12 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i26) | 0;
    if ((i12 | 0) == 0) {
     i25 = i11;
     break;
    }
    i13 = __ZN7WebCore24InspectorInstrumentation20forcePseudoStateImplEPNS_19InstrumentingAgentsEPNS_7ElementENS_11CSSSelector10PseudoTypeE(i12, i3, 16) | 0;
    i25 = i13 ? 2 : i11;
   }
  } while (0);
  i11 = (HEAP32[i24 >> 2] | 0) + 44 | 0;
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -6145 | i25 << 11 & 6144;
 }
 HEAP8[i14] = 0;
 __ZN7WebCore21CSSDefaultStyleSheets34ensureDefaultStyleSheetsForElementEPNS_7ElementERb(i3, i14);
 i25 = i2 | 0;
 if ((HEAP8[i14] & 1) == 0) {
  i27 = i2 + 260 | 0;
 } else {
  i14 = i2 + 260 | 0;
  __ZN7WebCore16DocumentRuleSets15collectFeaturesEbPNS_18StyleScopeResolverE(i25, (HEAP8[(HEAP32[i23 >> 2] | 0) + 1579 | 0] & 1) != 0, HEAP32[i14 >> 2] | 0);
  i27 = i14;
 }
 HEAP32[i15 >> 2] = i10;
 HEAP32[i15 + 4 >> 2] = i25;
 i25 = i2 + 220 | 0;
 HEAP32[i15 + 8 >> 2] = i25;
 HEAP32[i15 + 12 >> 2] = i2 + 268;
 HEAP32[i15 + 16 >> 2] = HEAP32[i27 >> 2];
 i27 = i15 + 20 | 0;
 HEAP8[i27] = 0;
 i14 = i15 + 24 | 0;
 HEAP32[i15 + 44 >> 2] = 0;
 i11 = i15 + 48 | 0;
 _memset(i14 | 0, 0, 17) | 0;
 i24 = HEAP32[i2 + 320 >> 2] | 0;
 i26 = HEAP32[i2 + 228 >> 2] | 0;
 do {
  if ((i26 | 0) == 0) {
   i28 = 0;
  } else {
   i13 = _llvm_uadd_with_overflow_i32(i26 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i28 = (HEAP32[(HEAP32[i25 >> 2] | 0) + (i13 << 5) >> 2] | 0) == (i24 | 0) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 HEAP8[i11] = i28;
 _memset(i15 + 52 | 0, 0, 16) | 0;
 HEAP32[i15 + 68 >> 2] = i15 + 80;
 HEAP32[i15 + 72 >> 2] = 64;
 HEAP32[i15 + 76 >> 2] = 0;
 HEAP32[i15 + 592 >> 2] = i15 + 604;
 HEAP32[i15 + 596 >> 2] = 64;
 HEAP32[i15 + 600 >> 2] = 0;
 _memset(i15 + 860 | 0, -1 | 0, 24) | 0;
 HEAP8[i15 + 884 | 0] = 1;
 HEAP32[i14 >> 2] = i7;
 HEAP8[i27] = (__ZNK7WebCore19MediaQueryEvaluator22mediaTypeMatchSpecificEPKc(HEAP32[i2 + 208 >> 2] | 0, H_BASE + 8 | 0) | 0) & 1;
 if ((i6 | 0) == 2) {
  __ZN7WebCore20ElementRuleCollector12matchUARulesEv(i15);
 } else {
  __ZN7WebCore20ElementRuleCollector13matchAllRulesEbb(i15, (HEAP8[i2 + 236 | 0] & 1) != 0, (i6 | 0) != 1);
 }
 __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i2, __ZN7WebCore20ElementRuleCollector13matchedResultEv(i15) | 0, i3, 1);
 i6 = i2 + 312 | 0;
 __ZN7WebCore13StyleResolver17adjustRenderStyleERNS_11RenderStyleERKS1_PNS_7ElementE(i2, HEAP32[i6 >> 2] | 0, HEAP32[i16 >> 2] | 0, i3);
 __ZN7WebCore13StyleResolver5State5clearEv(i10);
 __ZN7WebCore8Document22didAccessStyleResolverEv(HEAP32[i23 >> 2] | 0);
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore20ElementRuleCollectorD2Ev(i15);
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore13StyleResolver24canShareStyleWithElementEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = i2 | 0;
 i4 = i2 + 12 | 0;
 i5 = i2 + 32 | 0;
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 236 >> 2] & 15](i3) | 0;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 768 | 0) == 256) {
    i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i7 = HEAP32[i5 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[i7 + 52 >> 2] & 1048576 | 0) != 0) {
  return 0;
 }
 if (__ZNK7WebCore11RenderStyle20hasUniquePseudoStyleEv(i7) | 0) {
  return 0;
 }
 i5 = i2 | 0;
 i6 = i1 + 308 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i2 + 44 | 0;
 if ((HEAP32[i9 >> 2] | 0) != (HEAP32[i8 + 44 >> 2] | 0)) {
  return 0;
 }
 i10 = i2 + 48 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 8 >> 2] | 0) == 0) {
    break;
   }
   return 0;
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 & 114688 | 0) != 0) {
  return 0;
 }
 do {
  if ((i11 & 32 | 0) == 0) {
   i12 = i11;
   i13 = i8;
  } else {
   if ((__ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv(i2) | 0) == 0) {
    i12 = HEAP32[i4 >> 2] | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    return 0;
   }
  }
 } while (0);
 i8 = HEAP32[i13 + 12 >> 2] | 0;
 if ((i12 & 512 | 0) != 0 ^ (i8 & 512 | 0) != 0) {
  return 0;
 }
 if ((i12 & 1024 | 0) == 0) {
  i14 = 0;
  i15 = i13;
  i16 = i8;
 } else {
  i8 = __ZNK7WebCore7Element26isUserActionElementHoveredEv(i5) | 0;
  i13 = HEAP32[i6 >> 2] | 0;
  i14 = i8;
  i15 = i13;
  i16 = HEAP32[i13 + 12 >> 2] | 0;
 }
 do {
  if ((i16 & 1024 | 0) == 0) {
   if (!i14) {
    break;
   }
   return 0;
  } else {
   if (!(i14 ^ (__ZNK7WebCore7Element26isUserActionElementHoveredEv(i15) | 0))) {
    break;
   }
   return 0;
  }
 } while (0);
 if ((HEAP32[i4 >> 2] & 1024 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = __ZNK7WebCore7Element25isUserActionElementActiveEv(i5) | 0;
 }
 i15 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i15 + 12 >> 2] & 1024 | 0) == 0) {
   if (!i17) {
    break;
   }
   return 0;
  } else {
   if (!(i17 ^ (__ZNK7WebCore7Element25isUserActionElementActiveEv(i15) | 0))) {
    break;
   }
   return 0;
  }
 } while (0);
 if ((HEAP32[i4 >> 2] & 1024 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = __ZNK7WebCore7Element26isUserActionElementFocusedEv(i5) | 0;
 }
 i15 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i15 + 12 >> 2] & 1024 | 0) == 0) {
   if (!i18) {
    break;
   }
   return 0;
  } else {
   if (!(i18 ^ (__ZNK7WebCore7Element26isUserActionElementFocusedEv(i15) | 0))) {
    break;
   }
   return 0;
  }
 } while (0);
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 328 >> 2] & 15](i5) | 0;
 i18 = HEAP32[i6 >> 2] | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 328 >> 2] & 15](i18) | 0;
 if ((HEAP32[i15 >> 2] | 0) != (HEAP32[i17 >> 2] | 0)) {
  return 0;
 }
 i17 = i2 + 20 | 0;
 if ((i5 | 0) == (HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0) + 1240 >> 2] | 0)) {
  return 0;
 }
 if (!(__ZNK7WebCore13StyleResolver52sharingCandidateHasIdenticalStyleAffectingAttributesEPNS_13StyledElementE(i1, i2) | 0)) {
  return 0;
 }
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 15](i2) | 0;
 i18 = HEAP32[i1 + 316 >> 2] | 0;
 if ((i15 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 564 >> 2] & 15](i18) | 0)) {
  return 0;
 }
 i18 = HEAP32[i10 >> 2] | 0;
 L79 : do {
  if ((i18 | 0) != 0) {
   i10 = HEAP32[i18 + 16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i15 = i10;
   i14 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i1 + 16 >> 2] | 0;
   i13 = i10;
   i10 = i13 + ~(i13 << 15) | 0;
   i13 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i13 >>> 6 ^ i13;
   i13 = i10 + ~(i10 << 11) | 0;
   i10 = i13 >>> 16 ^ i13;
   i13 = i16 & i10;
   i8 = i14 + (i13 << 2) | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == (i15 | 0)) {
    i19 = i8;
   } else {
    i8 = (i10 >>> 23) + ~i10 | 0;
    i10 = i8 << 12 ^ i8;
    i8 = i10 >>> 7 ^ i10;
    i10 = i8 << 2 ^ i8;
    i8 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0) {
      break L79;
     }
     i12 = (i10 | 0) == 0 ? i8 : i10;
     i20 = i12 + i11 & i16;
     i21 = i14 + (i20 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i15 | 0)) {
      i19 = i21;
      break;
     } else {
      i10 = i12;
      i11 = i20;
      i13 = i22;
     }
    }
   }
   if ((i19 | 0) == 0) {
    break;
   }
   return 0;
  }
 } while (0);
 do {
  if ((HEAP32[i4 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return 0;
   }
   if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 448 >> 2] & 15](i5) | 0;
 i19 = HEAP32[i6 >> 2] | 0;
 if (i3 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 448 >> 2] & 15](i19) | 0)) {
  return 0;
 }
 do {
  if (i3) {
   if (__ZNK7WebCore13StyleResolver24canShareStyleWithControlEPNS_13StyledElementE(i1, i2) | 0) {
    break;
   }
   return 0;
  }
 } while (0);
 i3 = HEAP32[i7 + 20 >> 2] | 0;
 if ((HEAP32[i3 + 112 >> 2] | 0) != 0) {
  return 0;
 }
 if ((HEAP32[i3 + 108 >> 2] | 0) != 0) {
  return 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 i19 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[__ZN7WebCore9HTMLNames9canvasTagE >> 2] | 0;
 if ((i3 | 0) == (i9 | 0)) {
  return 0;
 }
 do {
  if ((i19 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 & 16 | 0) == 0) {
   i23 = i9;
  } else {
   if (__ZNK7WebCore11HTMLElement16hasDirectionAutoEv(i2) | 0) {
    return 0;
   } else {
    i23 = HEAP32[i4 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i23 & 512 | 0) != 0) {
   if ((HEAP32[i1 + 336 >> 2] | 0) == ((HEAP32[i7 + 44 >> 2] | 0) >>> 11 & 3 | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 if ((i5 | 0) == (HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0) + 1688 >> 2] | 0)) {
  return 0;
 } else {
  i17 = HEAP32[i6 >> 2] | 0;
  return (i17 | 0) != (HEAP32[(HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1688 >> 2] | 0) | 0;
 }
 return 0;
}
function __ZNK7WebCore13StyleResolver24canShareStyleWithControlEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 208 >> 2] & 15](i2 | 0) | 0;
 i4 = i1 + 308 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 208 >> 2] & 15](i1 | 0) | 0;
 if ((i3 | 0) == 0 | (i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i3 + 48 >> 2] | 0;
 i7 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i1 | 0) != (i7 | 0)) {
   i8 = (i1 | 0) == 0;
   L6 : do {
    if (i8) {
     i9 = __ZN3WTF8nullAtomE;
    } else {
     i10 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i10 & 1 | 0) == 0) {
      i11 = i10 >>> 1 & 134217727;
      i12 = i1 + 20 | 0;
     } else {
      i10 = i1 + 24 | 0;
      i11 = HEAP32[i10 + 8 >> 2] | 0;
      i12 = HEAP32[i10 >> 2] | 0;
     }
     if ((i11 | 0) == 0) {
      i9 = __ZN3WTF8nullAtomE;
      break;
     }
     i10 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
     i13 = i10 + 12 | 0;
     i14 = i10 + 16 | 0;
     i15 = 0;
     while (1) {
      i16 = i12 + (i15 << 3) | 0;
      i17 = HEAP32[i16 >> 2] | 0;
      if ((i17 | 0) == (i10 | 0)) {
       break;
      }
      if ((HEAP32[i17 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
        break;
       }
      }
      i17 = i15 + 1 | 0;
      if (i17 >>> 0 < i11 >>> 0) {
       i15 = i17;
      } else {
       i9 = __ZN3WTF8nullAtomE;
       break L6;
      }
     }
     i9 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i12 + (i15 << 3) + 4 | 0;
    }
   } while (0);
   i14 = (i7 | 0) == 0;
   L21 : do {
    if (i14) {
     i18 = __ZN3WTF8nullAtomE;
    } else {
     i13 = HEAP32[i7 + 4 >> 2] | 0;
     if ((i13 & 1 | 0) == 0) {
      i19 = i13 >>> 1 & 134217727;
      i20 = i7 + 20 | 0;
     } else {
      i13 = i7 + 24 | 0;
      i19 = HEAP32[i13 + 8 >> 2] | 0;
      i20 = HEAP32[i13 >> 2] | 0;
     }
     if ((i19 | 0) == 0) {
      i18 = __ZN3WTF8nullAtomE;
      break;
     }
     i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
     i10 = i13 + 12 | 0;
     i17 = i13 + 16 | 0;
     i21 = 0;
     while (1) {
      i22 = i20 + (i21 << 3) | 0;
      i23 = HEAP32[i22 >> 2] | 0;
      if ((i23 | 0) == (i13 | 0)) {
       break;
      }
      if ((HEAP32[i23 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
       if ((HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
        break;
       }
      }
      i23 = i21 + 1 | 0;
      if (i23 >>> 0 < i19 >>> 0) {
       i21 = i23;
      } else {
       i18 = __ZN3WTF8nullAtomE;
       break L21;
      }
     }
     i18 = (i22 | 0) == 0 ? __ZN3WTF8nullAtomE : i20 + (i21 << 3) + 4 | 0;
    }
   } while (0);
   if ((HEAP32[i9 >> 2] | 0) != (HEAP32[i18 >> 2] | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   L39 : do {
    if (i8) {
     i24 = __ZN3WTF8nullAtomE;
    } else {
     i17 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i17 & 1 | 0) == 0) {
      i25 = i17 >>> 1 & 134217727;
      i26 = i1 + 20 | 0;
     } else {
      i17 = i1 + 24 | 0;
      i25 = HEAP32[i17 + 8 >> 2] | 0;
      i26 = HEAP32[i17 >> 2] | 0;
     }
     if ((i25 | 0) == 0) {
      i24 = __ZN3WTF8nullAtomE;
      break;
     }
     i17 = HEAP32[__ZN7WebCore9HTMLNames12readonlyAttrE >> 2] | 0;
     i10 = i17 + 12 | 0;
     i13 = i17 + 16 | 0;
     i15 = 0;
     while (1) {
      i27 = i26 + (i15 << 3) | 0;
      i23 = HEAP32[i27 >> 2] | 0;
      if ((i23 | 0) == (i17 | 0)) {
       break;
      }
      if ((HEAP32[i23 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
       if ((HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
        break;
       }
      }
      i23 = i15 + 1 | 0;
      if (i23 >>> 0 < i25 >>> 0) {
       i15 = i23;
      } else {
       i24 = __ZN3WTF8nullAtomE;
       break L39;
      }
     }
     i24 = (i27 | 0) == 0 ? __ZN3WTF8nullAtomE : i26 + (i15 << 3) + 4 | 0;
    }
   } while (0);
   L54 : do {
    if (i14) {
     i28 = __ZN3WTF8nullAtomE;
    } else {
     i8 = HEAP32[i7 + 4 >> 2] | 0;
     if ((i8 & 1 | 0) == 0) {
      i29 = i8 >>> 1 & 134217727;
      i30 = i7 + 20 | 0;
     } else {
      i8 = i7 + 24 | 0;
      i29 = HEAP32[i8 + 8 >> 2] | 0;
      i30 = HEAP32[i8 >> 2] | 0;
     }
     if ((i29 | 0) == 0) {
      i28 = __ZN3WTF8nullAtomE;
      break;
     }
     i8 = HEAP32[__ZN7WebCore9HTMLNames12readonlyAttrE >> 2] | 0;
     i13 = i8 + 12 | 0;
     i10 = i8 + 16 | 0;
     i17 = 0;
     while (1) {
      i31 = i30 + (i17 << 3) | 0;
      i21 = HEAP32[i31 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       break;
      }
      if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        break;
       }
      }
      i21 = i17 + 1 | 0;
      if (i21 >>> 0 < i29 >>> 0) {
       i17 = i21;
      } else {
       i28 = __ZN3WTF8nullAtomE;
       break L54;
      }
     }
     i28 = (i31 | 0) == 0 ? __ZN3WTF8nullAtomE : i30 + (i17 << 3) + 4 | 0;
    }
   } while (0);
   if ((HEAP32[i24 >> 2] | 0) == (HEAP32[i28 >> 2] | 0)) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 if ((HEAP8[i3 + 130 | 0] | 0) < 0 ^ (HEAP8[i5 + 130 | 0] | 0) < 0) {
  i6 = 0;
  return i6 | 0;
 }
 i28 = __ZNK7WebCore16HTMLInputElement19shouldAppearCheckedEv(i3) | 0;
 if (i28 ^ (__ZNK7WebCore16HTMLInputElement19shouldAppearCheckedEv(i5) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 444 >> 2] & 15](i3) | 0;
 if (i28 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 444 >> 2] & 15](i5) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i28 = __ZNK7WebCore22HTMLFormControlElement10isRequiredEv(i3 | 0) | 0;
 if (i28 ^ (__ZNK7WebCore22HTMLFormControlElement10isRequiredEv(i5 | 0) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i2 | 0;
 i28 = i2;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 496 >> 2] & 15](i5) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (i2 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 496 >> 2] & 15](i3) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 468 >> 2] & 15](i5) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i3 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] & 15](i2) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1087 | 0] & 1) != 0) {
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 472 >> 2] & 15](i5) | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if (i2 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 472 >> 2] & 15](i3) | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   do {
    if (i2) {
     i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 476 >> 2] & 15](i5) | 0;
     i24 = HEAP32[i4 >> 2] | 0;
     if (i3 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 476 >> 2] & 15](i24) | 0)) {
      i6 = 0;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 480 >> 2] & 15](i5) | 0;
   i24 = HEAP32[i4 >> 2] | 0;
   if (i2 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 480 >> 2] & 15](i24) | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 484 >> 2] & 15](i5) | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   if (i24 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 484 >> 2] & 15](i2) | 0)) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = 1;
 return i6 | 0;
}
function __ZN7WebCore13StyleResolverC2ERNS_8DocumentEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 __ZN7WebCore16DocumentRuleSetsC1Ev(i8);
 i9 = i1 + 152 | 0;
 _memset(i1 + 104 | 0, 0, 44) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i9);
 HEAP32[i9 >> 2] = H_BASE + 200;
 HEAP32[i1 + 196 >> 2] = i1;
 i9 = i1 + 200 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i1 + 208 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 212 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 216 | 0;
 HEAP32[i11 >> 2] = i2;
 _memset(i1 + 220 | 0, 0, 16) | 0;
 HEAP8[i1 + 236 | 0] = i3 & 1;
 i3 = __ZN3WTF10fastMallocEj(168) | 0;
 __ZN7WebCore15CSSFontSelectorC1EPNS_8DocumentE(i3, i2);
 i2 = i1 + 240 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i1 + 244 >> 2] = 0;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 HEAP32[i1 + 256 >> 2] = __ZN7WebCore22DeprecatedStyleBuilder18sharedStyleBuilderEv() | 0;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = i1;
 _memset(i1 + 268 | 0, 0, 73) | 0;
 HEAP8[i1 + 341 | 0] = 1;
 HEAP8[i1 + 342 | 0] = 0;
 HEAP32[i1 + 396 >> 2] = 0;
 _memset(i1 + 344 | 0, 0, 21) | 0;
 _memset(i1 + 368 | 0, 0, 26) | 0;
 HEAP32[i1 + 400 >> 2] = 6;
 HEAP32[i1 + 404 >> 2] = 0;
 HEAP32[i1 + 408 >> 2] = 6;
 HEAP32[i1 + 412 >> 2] = 0;
 HEAP32[i1 + 416 >> 2] = 6;
 HEAP32[i1 + 420 >> 2] = 0;
 HEAP32[i1 + 424 >> 2] = 6;
 __ZN7WebCore14NinePieceImageC1Ev(i1 + 428 | 0);
 i3 = i1 + 432 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 440 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 448 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 456 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 464 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 472 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 480 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 488 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 __ZN7WebCore9FillLayerC1ENS_14EFillLayerTypeE(i1 + 496 | 0, 0);
 HEAP32[i1 + 544 >> 2] = 0;
 HEAP8[i1 + 548 | 0] = 0;
 HEAP32[i1 + 552 >> 2] = 0;
 i3 = HEAP32[(HEAP32[i11 >> 2] | 0) + 692 >> 2] | 0;
 __ZN7WebCore21CSSDefaultStyleSheets16initDefaultStyleEPNS_7ElementE(i3);
 i12 = __ZNK7WebCore8Document4viewEv(HEAP32[i11 >> 2] | 0) | 0;
 i13 = (i12 | 0) != 0;
 i14 = __ZN3WTF10fastMallocEj(16) | 0;
 do {
  if (i13) {
   __ZNK7WebCore9FrameView9mediaTypeEv(i5, i12);
   __ZN7WebCore19MediaQueryEvaluatorC1ERKN3WTF6StringEb(i14, i5, 0);
   i15 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   if ((i15 | 0) != 0) {
    __ZN7WebCore19MediaQueryEvaluatorD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
   }
   i15 = HEAP32[i5 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i15 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  } else {
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i14, 1);
   i17 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN7WebCore19MediaQueryEvaluatorD1Ev(i17);
   __ZN3WTF8fastFreeEPv(i17);
  }
 } while (0);
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i6, i1, i3, 0, 1, 2, 0);
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
   if ((i14 | 0) == 0) {
    break;
   }
   i5 = i14 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    HEAP32[i5 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!((HEAP32[i10 >> 2] | 0) == 0 | i13 ^ 1)) {
   i6 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZNK7WebCore9FrameView9mediaTypeEv(i7, i12);
   __ZN7WebCore19MediaQueryEvaluatorC1ERKN3WTF6StringEPNS_5FrameEPNS_11RenderStyleE(i6, i7, HEAP32[i12 + 216 >> 2] | 0, HEAP32[i10 >> 2] | 0);
   i3 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i3 | 0) != 0) {
    __ZN7WebCore19MediaQueryEvaluatorD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   }
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i6 = i3 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16DocumentRuleSets16resetAuthorStyleEv(i8);
 i7 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore16DocumentRuleSets13initUserStyleERNS_28DocumentStyleSheetCollectionERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE(i8, i7 + 772 | 0, HEAP32[i9 >> 2] | 0, i1);
 if ((__ZN7WebCore8Document13svgExtensionsEv(HEAP32[i11 >> 2] | 0) | 0) == 0) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore8Document13svgExtensionsEv(HEAP32[i11 >> 2] | 0) | 0;
 i11 = HEAP32[i9 + 24 >> 2] | 0;
 i8 = HEAP32[i9 + 28 >> 2] | 0;
 i10 = i11 + (i8 << 2) | 0;
 if ((HEAP32[i9 + 36 >> 2] | 0) == 0) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
 L36 : do {
  if ((i8 | 0) == 0) {
   i19 = i11;
  } else {
   i9 = i11;
   while (1) {
    i12 = HEAP32[i9 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i19 = i9;
     break L36;
    }
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
   i18 = i7 + 788 | 0;
   __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i19 | 0) == (i10 | 0)) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else {
  i20 = i19;
 }
 L44 : while (1) {
  __ZN7WebCore15CSSFontSelector15addFontFaceRuleEPKNS_17StyleRuleFontFaceE(HEAP32[i2 >> 2] | 0, HEAP32[(HEAP32[i20 >> 2] | 0) + 92 >> 2] | 0);
  i19 = i20 + 4 | 0;
  if ((i19 | 0) == (i10 | 0)) {
   i21 = 37;
   break;
  } else {
   i22 = i19;
  }
  while (1) {
   i19 = HEAP32[i22 >> 2] | 0;
   if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
    break;
   }
   i19 = i22 + 4 | 0;
   if ((i19 | 0) == (i10 | 0)) {
    i21 = 39;
    break L44;
   } else {
    i22 = i19;
   }
  }
  if ((i22 | 0) == (i10 | 0)) {
   i21 = 38;
   break;
  } else {
   i20 = i22;
  }
 }
 if ((i21 | 0) == 37) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else if ((i21 | 0) == 38) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else if ((i21 | 0) == 39) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13StyleResolverC1ERNS_8DocumentEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 __ZN7WebCore16DocumentRuleSetsC1Ev(i8);
 i9 = i1 + 152 | 0;
 _memset(i1 + 104 | 0, 0, 44) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i9);
 HEAP32[i9 >> 2] = H_BASE + 200;
 HEAP32[i1 + 196 >> 2] = i1;
 i9 = i1 + 200 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i1 + 208 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 212 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 216 | 0;
 HEAP32[i11 >> 2] = i2;
 _memset(i1 + 220 | 0, 0, 16) | 0;
 HEAP8[i1 + 236 | 0] = i3 & 1;
 i3 = __ZN3WTF10fastMallocEj(168) | 0;
 __ZN7WebCore15CSSFontSelectorC1EPNS_8DocumentE(i3, i2);
 i2 = i1 + 240 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i1 + 244 >> 2] = 0;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 HEAP32[i1 + 256 >> 2] = __ZN7WebCore22DeprecatedStyleBuilder18sharedStyleBuilderEv() | 0;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = i1;
 _memset(i1 + 268 | 0, 0, 73) | 0;
 HEAP8[i1 + 341 | 0] = 1;
 HEAP8[i1 + 342 | 0] = 0;
 HEAP32[i1 + 396 >> 2] = 0;
 _memset(i1 + 344 | 0, 0, 21) | 0;
 _memset(i1 + 368 | 0, 0, 26) | 0;
 HEAP32[i1 + 400 >> 2] = 6;
 HEAP32[i1 + 404 >> 2] = 0;
 HEAP32[i1 + 408 >> 2] = 6;
 HEAP32[i1 + 412 >> 2] = 0;
 HEAP32[i1 + 416 >> 2] = 6;
 HEAP32[i1 + 420 >> 2] = 0;
 HEAP32[i1 + 424 >> 2] = 6;
 __ZN7WebCore14NinePieceImageC1Ev(i1 + 428 | 0);
 i3 = i1 + 432 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 440 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 448 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 456 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 464 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 472 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 480 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 i3 = i1 + 488 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 768;
 __ZN7WebCore9FillLayerC1ENS_14EFillLayerTypeE(i1 + 496 | 0, 0);
 HEAP32[i1 + 544 >> 2] = 0;
 HEAP8[i1 + 548 | 0] = 0;
 HEAP32[i1 + 552 >> 2] = 0;
 i3 = HEAP32[(HEAP32[i11 >> 2] | 0) + 692 >> 2] | 0;
 __ZN7WebCore21CSSDefaultStyleSheets16initDefaultStyleEPNS_7ElementE(i3);
 i12 = __ZNK7WebCore8Document4viewEv(HEAP32[i11 >> 2] | 0) | 0;
 i13 = (i12 | 0) != 0;
 i14 = __ZN3WTF10fastMallocEj(16) | 0;
 do {
  if (i13) {
   __ZNK7WebCore9FrameView9mediaTypeEv(i5, i12);
   __ZN7WebCore19MediaQueryEvaluatorC1ERKN3WTF6StringEb(i14, i5, 0);
   i15 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   if ((i15 | 0) != 0) {
    __ZN7WebCore19MediaQueryEvaluatorD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
   }
   i15 = HEAP32[i5 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i15 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  } else {
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i14, 1);
   i17 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i14;
   if ((i17 | 0) == 0) {
    break;
   }
   __ZN7WebCore19MediaQueryEvaluatorD1Ev(i17);
   __ZN3WTF8fastFreeEPv(i17);
  }
 } while (0);
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i6, i1, i3, 0, 1, 2, 0);
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
   if ((i14 | 0) == 0) {
    break;
   }
   i5 = i14 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    HEAP32[i5 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (!((HEAP32[i10 >> 2] | 0) == 0 | i13 ^ 1)) {
   i6 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZNK7WebCore9FrameView9mediaTypeEv(i7, i12);
   __ZN7WebCore19MediaQueryEvaluatorC1ERKN3WTF6StringEPNS_5FrameEPNS_11RenderStyleE(i6, i7, HEAP32[i12 + 216 >> 2] | 0, HEAP32[i10 >> 2] | 0);
   i3 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i3 | 0) != 0) {
    __ZN7WebCore19MediaQueryEvaluatorD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   }
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i6 = i3 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16DocumentRuleSets16resetAuthorStyleEv(i8);
 i7 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore16DocumentRuleSets13initUserStyleERNS_28DocumentStyleSheetCollectionERKNS_19MediaQueryEvaluatorERNS_13StyleResolverE(i8, i7 + 772 | 0, HEAP32[i9 >> 2] | 0, i1);
 if ((__ZN7WebCore8Document13svgExtensionsEv(HEAP32[i11 >> 2] | 0) | 0) == 0) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore8Document13svgExtensionsEv(HEAP32[i11 >> 2] | 0) | 0;
 i11 = HEAP32[i9 + 24 >> 2] | 0;
 i8 = HEAP32[i9 + 28 >> 2] | 0;
 i10 = i11 + (i8 << 2) | 0;
 if ((HEAP32[i9 + 36 >> 2] | 0) == 0) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
 L36 : do {
  if ((i8 | 0) == 0) {
   i19 = i11;
  } else {
   i9 = i11;
   while (1) {
    i12 = HEAP32[i9 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i19 = i9;
     break L36;
    }
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
   i18 = i7 + 788 | 0;
   __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i19 | 0) == (i10 | 0)) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else {
  i20 = i19;
 }
 L44 : while (1) {
  __ZN7WebCore15CSSFontSelector15addFontFaceRuleEPKNS_17StyleRuleFontFaceE(HEAP32[i2 >> 2] | 0, HEAP32[(HEAP32[i20 >> 2] | 0) + 92 >> 2] | 0);
  i19 = i20 + 4 | 0;
  if ((i19 | 0) == (i10 | 0)) {
   i21 = 37;
   break;
  } else {
   i22 = i19;
  }
  while (1) {
   i19 = HEAP32[i22 >> 2] | 0;
   if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
    break;
   }
   i19 = i22 + 4 | 0;
   if ((i19 | 0) == (i10 | 0)) {
    i21 = 39;
    break L44;
   } else {
    i22 = i19;
   }
  }
  if ((i22 | 0) == (i10 | 0)) {
   i21 = 38;
   break;
  } else {
   i20 = i22;
  }
 }
 if ((i21 | 0) == 37) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else if ((i21 | 0) == 38) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 } else if ((i21 | 0) == 39) {
  i18 = i7 + 788 | 0;
  __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, 0, i18);
  STACKTOP = i4;
  return;
 }
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEbT0_SC_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 switch (i2 - i1 >> 2 | 0) {
 case 3:
  {
   i6 = i1 + 4 | 0;
   i7 = i2 - 4 | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i1) | 0;
   i9 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i6) | 0;
   if (!i8) {
    if (!i9) {
     i10 = 1;
     STACKTOP = i4;
     return i10 | 0;
    }
    i8 = i6 | 0;
    i11 = i7 | 0;
    i12 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i11 >> 2] = i12;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i1) | 0)) {
     i10 = 1;
     STACKTOP = i4;
     return i10 | 0;
    }
    i12 = i1 | 0;
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i8 >> 2] = i11;
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i11 = i1 | 0;
   if (i9) {
    i9 = i7 | 0;
    i8 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i8;
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i8 = i6 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i6) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i6 = i7 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i7;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 2:
  {
   i7 = i2 - 4 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i1) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i6 = i1 | 0;
   i8 = i7 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i7;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 0:
 case 1:
  {
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i1, i1 + 4 | 0, i1 + 8 | 0, i2 - 4 | 0, i3) | 0;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 case 5:
  {
   i7 = i1 + 4 | 0;
   i8 = i1 + 8 | 0;
   i6 = i1 + 12 | 0;
   i9 = i2 - 4 | 0;
   __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i1, i7, i8, i6, i3) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i9, i6) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i11 = i6 | 0;
   i12 = i9 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i8) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i6 = i8 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i8, i7) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i1) | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i7 = i1 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i9;
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
 default:
  {
   i9 = i1 + 8 | 0;
   i8 = i1 + 4 | 0;
   i7 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i8, i1) | 0;
   i6 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i9, i8) | 0;
   do {
    if (i7) {
     i11 = i1 | 0;
     if (i6) {
      i12 = i9 | 0;
      i13 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i13;
      break;
     }
     i13 = i8 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i13 >> 2] = i12;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i9, i8) | 0)) {
      break;
     }
     i12 = i9 | 0;
     i11 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i11;
    } else {
     if (!i6) {
      break;
     }
     i11 = i8 | 0;
     i12 = i9 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i13;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i8, i1) | 0)) {
      break;
     }
     i13 = i1 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i11 >> 2] = i12;
    }
   } while (0);
   i8 = i1 + 12 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i10 = 1;
    STACKTOP = i4;
    return i10 | 0;
   }
   i6 = i5 | 0;
   i7 = i9;
   i9 = 0;
   i12 = 0;
   i11 = i8;
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i11, i7) | 0) {
     i8 = i11 | 0;
     i13 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     HEAP32[i6 >> 2] = i13;
     i13 = i7;
     i8 = i11;
     while (1) {
      i14 = i13 | 0;
      i15 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      i16 = i8 | 0;
      i17 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i15;
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
      if ((i13 | 0) == (i1 | 0)) {
       break;
      }
      i17 = i13 - 4 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i17) | 0) {
       i8 = i13;
       i13 = i17;
      } else {
       break;
      }
     }
     i13 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     i8 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i13;
     do {
      if ((i8 | 0) != 0) {
       i13 = i8 + 4 | 0;
       i17 = i13 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i18 | 0) != 0) {
        HEAP32[i17 >> 2] = i18;
        break;
       }
       i18 = i13 - 4 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
      }
     } while (0);
     i8 = i12 + 1 | 0;
     if ((i8 | 0) == 8) {
      i18 = i11 + 4 | 0;
      i19 = 1;
      i20 = i18;
      i21 = (i18 | 0) == (i2 | 0);
     } else {
      i19 = 0;
      i20 = i11;
      i21 = i9;
     }
     i18 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i13 = i18 + 4 | 0;
       i17 = i13 | 0;
       i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i15 | 0) != 0) {
        HEAP32[i17 >> 2] = i15;
        break;
       }
       i15 = i13 - 4 | 0;
       if ((i15 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
      }
     } while (0);
     if ((i19 | 0) == 1) {
      i10 = i21;
      i22 = 68;
      break;
     } else {
      i23 = i20;
      i24 = i8;
      i25 = i21;
     }
    } else {
     i23 = i11;
     i24 = i12;
     i25 = i9;
    }
    i18 = i23 + 4 | 0;
    if ((i18 | 0) == (i2 | 0)) {
     i10 = 1;
     i22 = 69;
     break;
    } else {
     i7 = i23;
     i9 = i25;
     i12 = i24;
     i11 = i18;
    }
   }
   if ((i22 | 0) == 68) {
    STACKTOP = i4;
    return i10 | 0;
   } else if ((i22 | 0) == 69) {
    STACKTOP = i4;
    return i10 | 0;
   }
  }
 }
 return 0;
}
function __ZNK7WebCore13StyleResolver52sharingCandidateHasIdenticalStyleAffectingAttributesEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = i1 + 308 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i4 + 48 >> 2] | 0;
 i6 = i2 | 0;
 i7 = i2 + 48 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == (i8 | 0)) {
  i9 = 1;
  return i9 | 0;
 }
 i10 = (i5 | 0) == 0;
 L4 : do {
  if (i10) {
   i11 = __ZN3WTF8nullAtomE;
  } else {
   i12 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i12 & 1 | 0) == 0) {
    i13 = i12 >>> 1 & 134217727;
    i14 = i5 + 20 | 0;
   } else {
    i12 = i5 + 24 | 0;
    i13 = HEAP32[i12 + 8 >> 2] | 0;
    i14 = HEAP32[i12 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i11 = __ZN3WTF8nullAtomE;
    break;
   }
   i12 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
   i15 = i12 + 12 | 0;
   i16 = i12 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i14 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i12 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i19 = i17 + 1 | 0;
    if (i19 >>> 0 < i13 >>> 0) {
     i17 = i19;
    } else {
     i11 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i11 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i17 << 3) + 4 | 0;
  }
 } while (0);
 i14 = (i8 | 0) == 0;
 L19 : do {
  if (i14) {
   i20 = __ZN3WTF8nullAtomE;
  } else {
   i18 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i18 & 1 | 0) == 0) {
    i21 = i18 >>> 1 & 134217727;
    i22 = i8 + 20 | 0;
   } else {
    i18 = i8 + 24 | 0;
    i21 = HEAP32[i18 + 8 >> 2] | 0;
    i22 = HEAP32[i18 >> 2] | 0;
   }
   if ((i21 | 0) == 0) {
    i20 = __ZN3WTF8nullAtomE;
    break;
   }
   i18 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
   i13 = i18 + 12 | 0;
   i16 = i18 + 16 | 0;
   i15 = 0;
   while (1) {
    i23 = i22 + (i15 << 3) | 0;
    i12 = HEAP32[i23 >> 2] | 0;
    if ((i12 | 0) == (i18 | 0)) {
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i12 = i15 + 1 | 0;
    if (i12 >>> 0 < i21 >>> 0) {
     i15 = i12;
    } else {
     i20 = __ZN3WTF8nullAtomE;
     break L19;
    }
   }
   i20 = (i23 | 0) == 0 ? __ZN3WTF8nullAtomE : i22 + (i15 << 3) + 4 | 0;
  }
 } while (0);
 if ((HEAP32[i11 >> 2] | 0) != (HEAP32[i20 >> 2] | 0)) {
  i9 = 0;
  return i9 | 0;
 }
 L37 : do {
  if (i10) {
   i24 = __ZN3WTF8nullAtomE;
  } else {
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i20 & 1 | 0) == 0) {
    i25 = i20 >>> 1 & 134217727;
    i26 = i5 + 20 | 0;
   } else {
    i20 = i5 + 24 | 0;
    i25 = HEAP32[i20 + 8 >> 2] | 0;
    i26 = HEAP32[i20 >> 2] | 0;
   }
   if ((i25 | 0) == 0) {
    i24 = __ZN3WTF8nullAtomE;
    break;
   }
   i20 = HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0;
   i11 = i20 + 12 | 0;
   i22 = i20 + 16 | 0;
   i23 = 0;
   while (1) {
    i27 = i26 + (i23 << 3) | 0;
    i21 = HEAP32[i27 >> 2] | 0;
    if ((i21 | 0) == (i20 | 0)) {
     break;
    }
    if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i22 >> 2] | 0)) {
      break;
     }
    }
    i21 = i23 + 1 | 0;
    if (i21 >>> 0 < i25 >>> 0) {
     i23 = i21;
    } else {
     i24 = __ZN3WTF8nullAtomE;
     break L37;
    }
   }
   i24 = (i27 | 0) == 0 ? __ZN3WTF8nullAtomE : i26 + (i23 << 3) + 4 | 0;
  }
 } while (0);
 L52 : do {
  if (i14) {
   i28 = __ZN3WTF8nullAtomE;
  } else {
   i26 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i26 & 1 | 0) == 0) {
    i29 = i26 >>> 1 & 134217727;
    i30 = i8 + 20 | 0;
   } else {
    i26 = i8 + 24 | 0;
    i29 = HEAP32[i26 + 8 >> 2] | 0;
    i30 = HEAP32[i26 >> 2] | 0;
   }
   if ((i29 | 0) == 0) {
    i28 = __ZN3WTF8nullAtomE;
    break;
   }
   i26 = HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0;
   i27 = i26 + 12 | 0;
   i25 = i26 + 16 | 0;
   i10 = 0;
   while (1) {
    i31 = i30 + (i10 << 3) | 0;
    i22 = HEAP32[i31 >> 2] | 0;
    if ((i22 | 0) == (i26 | 0)) {
     break;
    }
    if ((HEAP32[i22 + 12 >> 2] | 0) == (HEAP32[i27 >> 2] | 0)) {
     if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i25 >> 2] | 0)) {
      break;
     }
    }
    i22 = i10 + 1 | 0;
    if (i22 >>> 0 < i29 >>> 0) {
     i10 = i22;
    } else {
     i28 = __ZN3WTF8nullAtomE;
     break L52;
    }
   }
   i28 = (i31 | 0) == 0 ? __ZN3WTF8nullAtomE : i30 + (i10 << 3) + 4 | 0;
  }
 } while (0);
 if ((HEAP32[i24 >> 2] | 0) != (HEAP32[i28 >> 2] | 0)) {
  i9 = 0;
  return i9 | 0;
 }
 if (i14) {
  i32 = 0;
 } else {
  i32 = (HEAP32[i8 + 12 >> 2] | 0) != 0;
 }
 do {
  if ((HEAP8[i1 + 340 | 0] & 1) == 0) {
   if (!i32) {
    break;
   }
   if (__ZNK7WebCore13StyleResolver25classNamesAffectedByRulesERKNS_16SpaceSplitStringE(i1, i8 + 12 | 0) | 0) {
    i9 = 0;
   } else {
    break;
   }
   return i9 | 0;
  } else {
   if (!i32) {
    i9 = 0;
    return i9 | 0;
   }
   if ((HEAP32[i4 + 12 >> 2] & 32 | 0) == 0) {
    if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
     break;
    } else {
     i9 = 0;
    }
    return i9 | 0;
   } else {
    i14 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames9classAttrE) | 0;
    i28 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i6, __ZN7WebCore9HTMLNames9classAttrE) | 0;
    if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i28 >> 2] | 0)) {
     break;
    } else {
     i9 = 0;
    }
    return i9 | 0;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 316 >> 2] | 0;
 i1 = i4 + 48 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i33 = 0;
  } else {
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i5 & 536870912 | 0) == 0) {
    i34 = i8;
    i35 = i5;
   } else {
    __ZN7WebCore13StyledElement33rebuildPresentationAttributeStyleEv(i4);
    i5 = HEAP32[i1 >> 2] | 0;
    i34 = i5;
    i35 = HEAP32[i5 + 4 >> 2] | 0;
   }
   if ((i35 & 1 | 0) == 0) {
    i33 = 0;
    break;
   }
   i33 = HEAP32[i34 + 20 >> 2] | 0;
  }
 } while (0);
 i34 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   i36 = 0;
  } else {
   i35 = HEAP32[i34 + 4 >> 2] | 0;
   if ((i35 & 536870912 | 0) == 0) {
    i37 = i34;
    i38 = i35;
   } else {
    __ZN7WebCore13StyledElement33rebuildPresentationAttributeStyleEv(i2);
    i35 = HEAP32[i7 >> 2] | 0;
    i37 = i35;
    i38 = HEAP32[i35 + 4 >> 2] | 0;
   }
   if ((i38 & 1 | 0) == 0) {
    i36 = 0;
    break;
   }
   i36 = HEAP32[i37 + 20 >> 2] | 0;
  }
 } while (0);
 if ((i33 | 0) != (i36 | 0)) {
  i9 = 0;
  return i9 | 0;
 }
 i36 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i36 + 44 >> 2] | 0;
 i33 = HEAP32[__ZN7WebCore9HTMLNames11progressTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (i33 | 0)) {
   i39 = 71;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i33 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i33 + 16 >> 2] | 0)) {
    i39 = 71;
   }
  }
 } while (0);
 do {
  if ((i39 | 0) == 71) {
   i33 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 444 >> 2] & 15](i36) | 0;
   if (i33 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 444 >> 2] & 15](i6) | 0)) {
    i9 = 0;
   } else {
    break;
   }
   return i9 | 0;
  }
 } while (0);
 i9 = 1;
 return i9 | 0;
}
function __ZN7WebCore13StyleResolver25lookupCustomFilterProgramEPNS_20WebKitCSSShaderValueES2_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 96 | 0;
 i12 = i8 + 120 | 0;
 i13 = i8 + 128 | 0;
 i14 = i8 + 176 | 0;
 i15 = i8 + 184 | 0;
 i16 = i8 + 232 | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
 i18 = (i3 | 0) != 0;
 if (i18) {
  __ZNK7WebCore20WebKitCSSShaderValue11completeURLEPNS_20CachedResourceLoaderE(i9, i3, i17);
 } else {
  HEAP32[i9 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i9);
 }
 i19 = (i4 | 0) != 0;
 if (i19) {
  __ZNK7WebCore20WebKitCSSShaderValue11completeURLEPNS_20CachedResourceLoaderE(i10, i4, i17);
 } else {
  HEAP32[i10 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i10);
 }
 i17 = HEAP32[i2 + 552 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i20 = 20;
  } else {
   __ZN7WebCore23CustomFilterProgramInfoC1ERKN3WTF6StringES4_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i11, i9 | 0, i10 | 0, i5, i6, i7);
   i21 = __ZNK7WebCore29StyleCustomFilterProgramCache6lookupERKNS_23CustomFilterProgramInfoE(i17, i11) | 0;
   i22 = (i21 | 0) == 0;
   if (!i22) {
    i23 = i21 + 4 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = HEAP32[i11 + 4 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 | 0;
     i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i24;
      break;
     }
    }
   } while (0);
   if (i22) {
    i20 = 20;
    break;
   }
   i26 = i21;
   i27 = i10 | 0;
  }
 } while (0);
 do {
  if ((i20 | 0) == 20) {
   i11 = i13 | 0;
   i17 = HEAP32[i9 >> 2] | 0;
   HEAP32[i11 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i23 = i17 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   HEAP8[i13 + 4 | 0] = HEAP8[i9 + 4 | 0] & 3;
   HEAP32[i13 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   HEAP32[i13 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
   HEAP32[i13 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
   HEAP32[i13 + 24 >> 2] = HEAP32[i9 + 24 >> 2];
   HEAP32[i13 + 28 >> 2] = HEAP32[i9 + 28 >> 2];
   HEAP32[i13 + 32 >> 2] = HEAP32[i9 + 32 >> 2];
   HEAP32[i13 + 36 >> 2] = HEAP32[i9 + 36 >> 2];
   HEAP32[i13 + 40 >> 2] = HEAP32[i9 + 40 >> 2];
   HEAP32[i13 + 44 >> 2] = HEAP32[i9 + 44 >> 2];
   do {
    if (i18) {
     if ((HEAP32[i3 + 4 >> 2] & 516096 | 0) != 188416) {
      i20 = 27;
      break;
     }
     i23 = __ZN7WebCore20WebKitCSSShaderValue21cachedOrPendingShaderEv(i3) | 0;
     if ((i23 | 0) == 0) {
      i20 = 27;
      break;
     }
     if ((HEAP8[i23 + 8 | 0] & 2) != 0) {
      HEAP8[i2 + 364 | 0] = 1;
     }
     i17 = i14 | 0;
     HEAP32[i17 >> 2] = i23;
     i24 = i23 + 4 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i28 = i17;
    } else {
     i20 = 27;
    }
   } while (0);
   if ((i20 | 0) == 27) {
    i21 = i14 | 0;
    HEAP32[i21 >> 2] = 0;
    i28 = i21;
   }
   i21 = i15 | 0;
   i22 = i10 | 0;
   i17 = HEAP32[i22 >> 2] | 0;
   HEAP32[i21 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i24 = i17 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   HEAP8[i15 + 4 | 0] = HEAP8[i10 + 4 | 0] & 3;
   HEAP32[i15 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i15 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i15 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
   HEAP32[i15 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
   HEAP32[i15 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
   HEAP32[i15 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
   HEAP32[i15 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
   HEAP32[i15 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
   HEAP32[i15 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
   HEAP32[i15 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
   do {
    if (i19) {
     if ((HEAP32[i4 + 4 >> 2] & 516096 | 0) != 188416) {
      i20 = 36;
      break;
     }
     i24 = __ZN7WebCore20WebKitCSSShaderValue21cachedOrPendingShaderEv(i4) | 0;
     if ((i24 | 0) == 0) {
      i20 = 36;
      break;
     }
     if ((HEAP8[i24 + 8 | 0] & 2) != 0) {
      HEAP8[i2 + 364 | 0] = 1;
     }
     i17 = i16 | 0;
     HEAP32[i17 >> 2] = i24;
     i23 = i24 + 4 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     i29 = i17;
    } else {
     i20 = 36;
    }
   } while (0);
   if ((i20 | 0) == 36) {
    i17 = i16 | 0;
    HEAP32[i17 >> 2] = 0;
    i29 = i17;
   }
   __ZN7WebCore24StyleCustomFilterProgram6createENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i12, i13, i14, i15, i16, i5, i6, i7);
   i17 = i12 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i17 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i24 = i17 + 4 | 0;
     i25 = i24 | 0;
     i30 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i25 >> 2] = i30;
      break;
     }
     i30 = i24 - 4 | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
    }
   } while (0);
   i17 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i30 = i17 | 0;
     i24 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i30 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i21 = i17 + 4 | 0;
     i24 = i21 | 0;
     i30 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i24 >> 2] = i30;
      break;
     }
     i30 = i21 - 4 | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
    }
   } while (0);
   i17 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = i23;
    i27 = i22;
    break;
   }
   i30 = i17 | 0;
   i21 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i26 = i23;
    i27 = i22;
    break;
   } else {
    HEAP32[i30 >> 2] = i21;
    i26 = i23;
    i27 = i22;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i26;
 i26 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i27 = i26 | 0;
   i1 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i27 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i9 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i9 = i26 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i26);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore13StyleResolver27sweepMatchedPropertiesCacheEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 16;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i4 = i1 + 128 | 0;
 i9 = i1 + 140 | 0;
 i10 = i4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 132 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i11 + (i13 * 48 & -1) | 0;
 L1 : do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i15 = 46;
  } else {
   L3 : do {
    if ((i13 | 0) == 0) {
     i16 = i11;
    } else {
     i17 = i11;
     while (1) {
      i18 = HEAP32[i17 >> 2] | 0;
      if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
       i16 = i17;
       break L3;
      }
      i18 = i17 + 48 | 0;
      if ((i18 | 0) == (i14 | 0)) {
       i15 = 46;
       break L1;
      } else {
       i17 = i18;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i14 | 0)) {
    i15 = 46;
    break;
   } else {
    i19 = i16;
    i20 = 0;
   }
   L8 : while (1) {
    i17 = HEAP32[i19 + 12 >> 2] | 0;
    i18 = i19 + 4 | 0;
    i21 = 0;
    while (1) {
     if (i21 >>> 0 >= i17 >>> 0) {
      i22 = i20;
      break;
     }
     if ((HEAP32[HEAP32[(HEAP32[i18 >> 2] | 0) + (i21 << 3) >> 2] >> 2] | 0) == 1) {
      i15 = 11;
      break;
     } else {
      i21 = i21 + 1 | 0;
     }
    }
    do {
     if ((i15 | 0) == 11) {
      i15 = 0;
      i21 = i19 | 0;
      if ((i20 | 0) != (HEAP32[i7 >> 2] | 0)) {
       HEAP32[(HEAP32[i6 >> 2] | 0) + (i20 << 2) >> 2] = HEAP32[i21 >> 2];
       i18 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
       HEAP32[i8 >> 2] = i18;
       i22 = i18;
       break;
      }
      i18 = i20 + 1 | 0;
      i17 = HEAP32[i6 >> 2] | 0;
      do {
       if (i17 >>> 0 > i21 >>> 0) {
        i15 = 15;
       } else {
        if ((i17 + (i20 << 2) | 0) >>> 0 <= i21 >>> 0) {
         i15 = 15;
         break;
        }
        i23 = i19 - i17 >> 2;
        i24 = i18 + (i20 >>> 2) | 0;
        i25 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
        i24 = i25 >>> 0 > i18 >>> 0 ? i25 : i18;
        do {
         if (i20 >>> 0 < i24 >>> 0) {
          if (i24 >>> 0 > 16 >>> 0) {
           if (i24 >>> 0 > 1073741823 >>> 0) {
            i15 = 29;
            break L8;
           }
           i25 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
           HEAP32[i7 >> 2] = i25 >>> 2;
           i26 = __ZN3WTF10fastMallocEj(i25) | 0;
           HEAP32[i6 >> 2] = i26;
           i27 = i26;
          } else {
           HEAP32[i6 >> 2] = i5;
           HEAP32[i7 >> 2] = 16;
           i27 = i5;
          }
          i26 = i17;
          _memcpy(i27 | 0, i26 | 0, i20 << 2) | 0;
          if ((i5 | 0) == (i17 | 0) | (i17 | 0) == 0) {
           break;
          }
          if ((HEAP32[i6 >> 2] | 0) == (i17 | 0)) {
           HEAP32[i6 >> 2] = 0;
           HEAP32[i7 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i26);
         }
        } while (0);
        i24 = HEAP32[i6 >> 2] | 0;
        i28 = i24 + (i23 << 2) | 0;
        i29 = i24;
       }
      } while (0);
      if ((i15 | 0) == 15) {
       i15 = 0;
       i24 = i18 + (i20 >>> 2) | 0;
       i26 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
       i24 = i26 >>> 0 > i18 >>> 0 ? i26 : i18;
       do {
        if (i20 >>> 0 < i24 >>> 0) {
         if (i24 >>> 0 > 16 >>> 0) {
          if (i24 >>> 0 > 1073741823 >>> 0) {
           i15 = 18;
           break L8;
          }
          i26 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
          HEAP32[i7 >> 2] = i26 >>> 2;
          i25 = __ZN3WTF10fastMallocEj(i26) | 0;
          HEAP32[i6 >> 2] = i25;
          i30 = i25;
         } else {
          HEAP32[i6 >> 2] = i5;
          HEAP32[i7 >> 2] = 16;
          i30 = i5;
         }
         i25 = i17;
         _memcpy(i30 | 0, i25 | 0, i20 << 2) | 0;
         if ((i5 | 0) == (i17 | 0) | (i17 | 0) == 0) {
          break;
         }
         if ((HEAP32[i6 >> 2] | 0) == (i17 | 0)) {
          HEAP32[i6 >> 2] = 0;
          HEAP32[i7 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i25);
        }
       } while (0);
       i28 = i21;
       i29 = HEAP32[i6 >> 2] | 0;
      }
      HEAP32[i29 + (HEAP32[i8 >> 2] << 2) >> 2] = HEAP32[i28 >> 2];
      i17 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
      HEAP32[i8 >> 2] = i17;
      i22 = i17;
     }
    } while (0);
    i17 = i19 + 48 | 0;
    if ((i17 | 0) == (i14 | 0)) {
     i15 = 7;
     break;
    } else {
     i31 = i17;
    }
    while (1) {
     i17 = HEAP32[i31 >> 2] | 0;
     if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
      break;
     }
     i17 = i31 + 48 | 0;
     if ((i17 | 0) == (i14 | 0)) {
      i15 = 7;
      break L8;
     } else {
      i31 = i17;
     }
    }
    if ((i31 | 0) == (i14 | 0)) {
     i15 = 7;
     break;
    } else {
     i19 = i31;
     i20 = i22;
    }
   }
   if ((i15 | 0) == 18) {
    _WTFCrash();
   } else if ((i15 | 0) == 29) {
    _WTFCrash();
   } else if ((i15 | 0) == 7) {
    if ((i22 | 0) == 0) {
     i15 = 46;
     break;
    }
    i17 = i3 | 0;
    i24 = i4 | 0;
    i18 = i1 + 144 | 0;
    i25 = 0;
    while (1) {
     __ZN3WTF7HashMapIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i3, i4, (HEAP32[i6 >> 2] | 0) + (i25 << 2) | 0);
     i26 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i26 | 0) != ((HEAP32[i10 >> 2] | 0) + ((HEAP32[i12 >> 2] | 0) * 48 & -1) | 0)) {
       __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i26 + 4 | 0);
       HEAP32[i26 >> 2] = -1;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       i32 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i32;
       i33 = HEAP32[i12 >> 2] | 0;
       if (!((i32 * 6 & -1 | 0) < (i33 | 0) & (i33 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i24, (i33 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     i25 = i25 + 1 | 0;
     i34 = HEAP32[i8 >> 2] | 0;
     if (i25 >>> 0 >= i34 >>> 0) {
      break;
     }
    }
    HEAP32[i1 + 124 >> 2] = 0;
    if ((i34 | 0) == 0) {
     break;
    }
    HEAP32[i8 >> 2] = 0;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 46) {
  HEAP32[i1 + 124 >> 2] = 0;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL19createGridTrackListEPNS_8CSSValueERN3WTF6VectorINS_13GridTrackSizeELj0ENS2_15CrashOnOverflowEEERNS2_7HashMapINS2_6StringENS3_IjLj0ES5_EENS2_10StringHashENS2_10HashTraitsIS9_EENSC_ISA_EEEERKNS_13StyleResolver5StateE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i11 & 516096 | 0) == 0) {
  if ((i11 & 508 | 0) != 472) {
   i12 = 0;
   STACKTOP = i5;
   return i12 | 0;
  }
  i12 = (HEAP32[i1 + 8 >> 2] | 0) == 3;
  STACKTOP = i5;
  return i12 | 0;
 }
 if ((i11 & 491520) >>> 0 <= 221184 >>> 0) {
  i12 = 0;
  STACKTOP = i5;
  return i12 | 0;
 }
 HEAP32[i6 >> 2] = 0;
 if ((i1 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i1;
 }
 i1 = (i13 | 0) == 0;
 i11 = i13 + 16 | 0;
 i14 = i13 + 8 | 0;
 i13 = i9 | 0;
 i15 = i9 + 4 | 0;
 i16 = i9 + 8 | 0;
 i17 = i3 | 0;
 i3 = i8 | 0;
 i18 = i7 | 0;
 i19 = i6;
 i20 = i2 + 8 | 0;
 i21 = i2 + 4 | 0;
 i22 = i10 + 37 | 0;
 i23 = i10 + 32 | 0;
 i24 = i10 + 13 | 0;
 i25 = i10 + 8 | 0;
 i26 = i2 | 0;
 i27 = i10 | 0;
 i28 = i10 + 8 | 0;
 i29 = i10 + 16 | 0;
 i30 = i10 + 24 | 0;
 i31 = i10 + 32 | 0;
 i32 = i10 + 40 | 0;
 i33 = i10 + 48 | 0;
 i34 = 0;
 L14 : while (1) {
  if (i1) {
   i35 = 0;
  } else {
   i35 = HEAP32[i11 >> 2] | 0;
  }
  if (i34 >>> 0 >= i35 >>> 0) {
   i12 = 1;
   i36 = 50;
   break;
  }
  if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i34 >>> 0) {
   i36 = 12;
   break;
  }
  i37 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i34 << 2) >> 2] | 0;
  do {
   if ((HEAP32[i37 + 4 >> 2] & 516604 | 0) == 76) {
    __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i8, i37);
    HEAP32[i13 >> 2] = 0;
    HEAP32[i15 >> 2] = 0;
    HEAP32[i16 >> 2] = 0;
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i7, i17, i8, i9);
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
    }
    i38 = HEAP32[i13 >> 2] | 0;
    if ((i38 | 0) != 0) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i15 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i38);
    }
    i38 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i38 | 0) != 0) {
      i39 = i38 | 0;
      i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
      if ((i40 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i38);
       break;
      } else {
       HEAP32[i39 >> 2] = i40;
       break;
      }
     }
    } while (0);
    i38 = HEAP32[i18 >> 2] | 0;
    i40 = i38 + 4 | 0;
    i39 = i38 + 12 | 0;
    i41 = HEAP32[i39 >> 2] | 0;
    if ((i41 | 0) != (HEAP32[i38 + 8 >> 2] | 0)) {
     HEAP32[(HEAP32[i40 >> 2] | 0) + (i41 << 2) >> 2] = HEAP32[i6 >> 2];
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     break;
    }
    i38 = i41 + 1 | 0;
    i42 = i40 | 0;
    i43 = HEAP32[i42 >> 2] | 0;
    do {
     if (i43 >>> 0 > i6 >>> 0) {
      i36 = 26;
     } else {
      if ((i43 + (i41 << 2) | 0) >>> 0 <= i6 >>> 0) {
       i36 = 26;
       break;
      }
      __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i40, i38);
      i44 = HEAP32[i42 >> 2] | 0;
      i45 = i44 + (i19 - i43 >> 2 << 2) | 0;
      i46 = i44;
     }
    } while (0);
    if ((i36 | 0) == 26) {
     i36 = 0;
     __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i40, i38);
     i45 = i6;
     i46 = HEAP32[i42 >> 2] | 0;
    }
    HEAP32[i46 + (HEAP32[i39 >> 2] << 2) >> 2] = HEAP32[i45 >> 2];
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
   } else {
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i10, 15);
    if (!(__ZN7WebCoreL19createGridTrackSizeEPNS_8CSSValueERNS_13GridTrackSizeERKNS_13StyleResolver5StateE(i37, i10, i4) | 0)) {
     i36 = 42;
     break L14;
    }
    i43 = HEAP32[i20 >> 2] | 0;
    if ((i43 | 0) == (HEAP32[i21 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i2, i10);
    } else {
     i41 = HEAP32[i26 >> 2] | 0;
     HEAP32[i41 + (i43 * 56 & -1) >> 2] = HEAP32[i27 >> 2];
     i44 = i41 + (i43 * 56 & -1) + 8 | 0;
     i47 = i44;
     i48 = HEAP32[i28 >> 2] | 0;
     i49 = HEAP32[i28 + 4 >> 2] | 0;
     HEAP32[i47 >> 2] = i48;
     HEAP32[i47 + 4 >> 2] = i49;
     if ((i48 & 0 | 0) == 0 & (i49 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i44 | 0);
     }
     HEAPF64[i41 + (i43 * 56 & -1) + 16 >> 3] = +HEAPF64[i29 >> 3];
     HEAP32[i41 + (i43 * 56 & -1) + 24 >> 2] = HEAP32[i30 >> 2];
     i44 = i41 + (i43 * 56 & -1) + 32 | 0;
     i49 = i44;
     i48 = HEAP32[i31 >> 2] | 0;
     i47 = HEAP32[i31 + 4 >> 2] | 0;
     HEAP32[i49 >> 2] = i48;
     HEAP32[i49 + 4 >> 2] = i47;
     if ((i48 & 0 | 0) == 0 & (i47 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i44 | 0);
     }
     HEAPF64[i41 + (i43 * 56 & -1) + 40 >> 3] = +HEAPF64[i32 >> 3];
     HEAP32[i41 + (i43 * 56 & -1) + 48 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    if ((HEAP8[i22] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
    }
    if ((HEAP8[i24] | 0) != 10) {
     break;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
   }
  } while (0);
  i34 = i34 + 1 | 0;
 }
 if ((i36 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i36 | 0) == 42) {
  if ((HEAP8[i22] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
  }
  if ((HEAP8[i24] | 0) != 10) {
   i12 = 0;
   STACKTOP = i5;
   return i12 | 0;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
  i12 = 0;
  STACKTOP = i5;
  return i12 | 0;
 } else if ((i36 | 0) == 50) {
  STACKTOP = i5;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 HEAP32[i1 + 24 >> 2] = i5;
 i5 = (i3 | 0) != 0;
 do {
  if (i5) {
   i6 = i3 | 0;
   i7 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i7 & 4194304 | 0) == 0) {
     do {
      if ((i7 & 4096 | 0) == 0) {
       i8 = 6;
      } else {
       if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i6 | 0)) {
        i8 = 6;
        break;
       }
       i9 = HEAP32[i6 + 92 >> 2] | 0;
      }
     } while (0);
     if ((i8 | 0) == 6) {
      i9 = HEAP32[i3 + 16 >> 2] | 0;
     }
     if ((i9 | 0) != 0) {
      if ((HEAP32[i9 + 12 >> 2] & 4194304 | 0) != 0) {
       i8 = 9;
       break;
      }
     }
     i10 = i3 + 16 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i12 = i10;
    } else {
     i8 = 9;
    }
   } while (0);
   if ((i8 | 0) == 9) {
    i11 = __ZN7WebCore22NodeRenderingTraversal10parentSlowEPKNS_4NodeE(i6) | 0;
    i12 = i3 + 16 | 0;
   }
   HEAP32[i1 + 12 >> 2] = i11;
   i7 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i8 = 14;
    } else {
     if ((HEAP32[i7 + 12 >> 2] & 4096 | 0) == 0) {
      i8 = 14;
      break;
     }
     if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i7 | 0)) {
      i8 = 14;
      break;
     }
     i10 = i1 + 16 | 0;
     if ((HEAP32[i7 + 88 >> 2] & 2 | 0) == 0) {
      i13 = i10;
      i8 = 16;
     } else {
      i14 = i10;
      i15 = 0;
     }
    }
   } while (0);
   if ((i8 | 0) == 14) {
    i13 = i1 + 16 | 0;
    i8 = 16;
   }
   do {
    if ((i8 | 0) == 16) {
     if ((i4 | 0) == 0) {
      if ((i11 | 0) == 0) {
       i14 = i13;
       i15 = 0;
       break;
      }
      i7 = i11 + 32 | 0;
      if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
       i16 = i7 | 0;
      } else {
       i16 = HEAP32[i7 >> 2] | 0;
      }
      i7 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i7 | 0) == 0) {
        i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 236 >> 2] & 15](i11 | 0) | 0;
       } else {
        if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
         i17 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
         break;
        } else {
         i17 = HEAP32[i7 + 36 >> 2] | 0;
         break;
        }
       }
      } while (0);
      if ((i17 | 0) == 0) {
       i14 = i13;
       i15 = 0;
       break;
      } else {
       i18 = i17;
      }
     } else {
      i18 = i4;
     }
     i7 = i18 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     i14 = i13;
     i15 = i18;
    }
   } while (0);
   i7 = i14 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i15;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  } else {
   HEAP32[i1 + 12 >> 2] = 0;
   if ((i4 | 0) != 0) {
    i10 = i4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i1 + 16 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i4;
   if ((i7 | 0) == 0) {
    break;
   }
   i10 = i7 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 if (i5) {
  i19 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 } else {
  i19 = 0;
 }
 i5 = i19 | 0;
 i4 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i20 = i4 | 0;
 } else {
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 236 >> 2] & 15](i2 | 0) | 0;
  } else {
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    i21 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i21 = HEAP32[i4 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 0 | (i19 | 0) == (i3 | 0)) {
   i22 = i21;
  } else {
   i4 = i19 + 32 | 0;
   if ((HEAP32[i19 + 12 >> 2] & 2048 | 0) == 0) {
    i23 = i4 | 0;
   } else {
    i23 = HEAP32[i4 >> 2] | 0;
   }
   i4 = HEAP32[i23 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 236 >> 2] & 15](i5) | 0;
    break;
   }
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    i22 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i22 = HEAP32[i4 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 20 >> 2] = i22;
 i22 = i1 + 4 | 0;
 i5 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i22 = i5 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i22 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i5 = i1 + 36 | 0;
 i19 = HEAP32[i5 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i24 = i1 + 84 | 0;
  HEAP8[i24] = 0;
  return;
 }
 i22 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i22 | 0) > 0) {
  i23 = 0;
  while (1) {
   do {
    if ((HEAP32[i19 + (i23 << 3) >> 2] | 0) != 415) {
     i21 = HEAP32[i19 + (i23 << 3) + 4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i3 = i21 | 0;
     i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i21);
      break;
     } else {
      HEAP32[i3 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i23 = i23 + 1 | 0;
   if ((i23 | 0) >= (i22 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i19);
 _memset(i5 | 0, 0, 16) | 0;
 i24 = i1 + 84 | 0;
 HEAP8[i24] = 0;
 return;
}
function __ZN7WebCore13StyleResolver16styleForKeyframeEPKNS_11RenderStyleEPKNS_13StyleKeyframeERNS_13KeyframeValueE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 7712 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 848 | 0;
 i11 = i6 + 856 | 0;
 i12 = i6 + 864 | 0;
 i13 = i6 + 872 | 0;
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = i9 + 12;
 HEAP32[i9 + 4 >> 2] = 64;
 i15 = i9 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i9 + 524 >> 2] = i9 + 536;
 HEAP32[i9 + 528 >> 2] = 64;
 i16 = i9 + 532 | 0;
 HEAP32[i16 >> 2] = 0;
 _memset(i9 + 792 | 0, -1 | 0, 24) | 0;
 HEAP8[i9 + 816 | 0] = 1;
 i17 = i4 + 4 | 0;
 __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i9, HEAP32[i17 >> 2] | 0, 0, 3, 0);
 __ZN7WebCore11RenderStyle5cloneEPKS0_(i10, i3);
 i3 = i2 + 312 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i18 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i4 = i2 + 388 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCoreL30extractDirectionAndWritingModeERKNS_11RenderStyleERKNS_13StyleResolver11MatchResultERNS_13TextDirectionERNS_11WritingModeE(HEAP32[i3 >> 2] | 0, i9, i11, i12);
 i18 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i12 = i13 + 6704 | 0;
 i10 = i13 + 6692 | 0;
 _memset(i13 + 6640 | 0, 0, 52) | 0;
 HEAP32[i10 >> 2] = i12;
 i19 = i13 + 6696 | 0;
 HEAP32[i19 >> 2] = 8;
 i20 = i13 + 6700 | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i13 + 6832 >> 2] = i18;
 HEAP32[i13 + 6836 >> 2] = i11;
 i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 i18 = 0;
 while (1) {
  if ((i18 | 0) > (i11 | 0)) {
   i21 = 1;
   i22 = 12;
   break;
  }
  if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i18 >>> 0) {
   i22 = 8;
   break;
  }
  i23 = HEAP32[i14 >> 2] | 0;
  if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i18 >>> 0) {
   i22 = 10;
   break;
  }
  i24 = HEAP32[i23 + (i18 << 3) + 4 >> 2] | 0;
  if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i13, HEAP32[i23 + (i18 << 3) >> 2] | 0, 0, 0, 0, i24 >>> 2 & 3, i24 & 3) | 0) {
   i18 = i18 + 1 | 0;
  } else {
   i21 = 1;
   i22 = 12;
   break;
  }
 }
 if ((i22 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i22 | 0) == 12) {
  while (1) {
   i22 = 0;
   if ((1 << i21 & HEAP32[i13 + 6640 + (i21 >>> 5 << 2) >> 2] | 0) != 0) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i13 + (i21 << 4) | 0, i2);
   }
   i18 = i21 + 1 | 0;
   if ((i18 | 0) > 19) {
    break;
   } else {
    i21 = i18;
    i22 = 12;
   }
  }
  __ZN7WebCore13StyleResolver10updateFontEv(i2);
  i21 = HEAP32[i4 >> 2] | 0;
  if ((i21 | 0) == 0) {
   i25 = 20;
  } else {
   __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 19, i21);
   i25 = 20;
  }
  while (1) {
   if ((1 << (i25 & 31) & HEAP32[i13 + 6640 + (i25 >>> 5 << 2) >> 2] | 0) != 0) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i13 + (i25 << 4) | 0, i2);
   }
   i25 = i25 + 1 | 0;
   if ((i25 | 0) > 414) {
    break;
   }
  }
  __ZN7WebCore13StyleResolver10updateFontEv(i2);
  i25 = HEAP32[i10 >> 2] | 0;
  i13 = HEAP32[i20 >> 2] | 0;
  i21 = i25 + (i13 << 4) | 0;
  if ((i13 | 0) != 0) {
   i13 = i25;
   while (1) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i13, i2);
    i13 = i13 + 16 | 0;
    if ((i13 | 0) == (i21 | 0)) {
     break;
    }
   }
  }
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   __ZN7WebCore13StyleResolver17loadPendingImagesEv(i2);
   __ZN7WebCore13StyleResolver18loadPendingShadersEv(i2);
   __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i2);
  }
  i21 = HEAP32[i17 >> 2] | 0;
  i13 = HEAP32[i21 + 4 >> 2] | 0;
  if ((i13 & 4 | 0) == 0) {
   i26 = i13 >>> 3;
  } else {
   i26 = HEAP32[i21 + 16 >> 2] | 0;
  }
  L39 : do {
   if ((i26 | 0) != 0) {
    i25 = i5 + 8 | 0;
    i4 = 0;
    i18 = i21;
    i16 = i13;
    while (1) {
     if ((i16 & 4 | 0) == 0) {
      i27 = i18 + 8 + (i16 >>> 3 << 2) + (i4 << 1) | 0;
     } else {
      if ((HEAP32[i18 + 16 >> 2] | 0) >>> 0 <= i4 >>> 0) {
       break;
      }
      i27 = (HEAP32[i18 + 8 >> 2] | 0) + (i4 << 3) | 0;
     }
     i14 = HEAP16[i27 >> 1] & 1023;
     if (i14 << 16 >> 16 != 179) {
      HEAP32[i7 >> 2] = i14 & 65535;
      __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i8, i25, i7, i7);
     }
     i14 = i4 + 1 | 0;
     if (i14 >>> 0 >= i26 >>> 0) {
      break L39;
     }
     i15 = HEAP32[i17 >> 2] | 0;
     i4 = i14;
     i18 = i15;
     i16 = HEAP32[i15 + 4 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  __ZN7WebCore8Document22didAccessStyleResolverEv(HEAP32[i2 + 216 >> 2] | 0);
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = 0;
  if ((HEAP32[i20 >> 2] | 0) != 0) {
   HEAP32[i20 >> 2] = 0;
  }
  i20 = HEAP32[i10 >> 2] | 0;
  if ((i12 | 0) == (i20 | 0) | (i20 | 0) == 0) {
   __ZN7WebCore13StyleResolver11MatchResultD1Ev(i9);
   STACKTOP = i6;
   return;
  }
  HEAP32[i10 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i20);
  __ZN7WebCore13StyleResolver11MatchResultD1Ev(i9);
  STACKTOP = i6;
  return;
 } else if ((i22 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore13StyleResolver17locateSharedStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 316 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 324 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 8 >> 2] | 0) == 0) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i5 + 12 >> 2] & 32 | 0) == 0) {
   i8 = i7;
  } else {
   if ((__ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv(i5) | 0) == 0) {
    i8 = HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] | 0;
    break;
   } else {
    i6 = 0;
    STACKTOP = i2;
    return i6 | 0;
   }
  }
 } while (0);
 L17 : do {
  if ((i8 | 0) != 0) {
   i5 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5;
   i9 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i1 + 16 >> 2] | 0;
   i11 = i5;
   i5 = i11 + ~(i11 << 15) | 0;
   i11 = (i5 >>> 10 ^ i5) * 9 & -1;
   i5 = i11 >>> 6 ^ i11;
   i11 = i5 + ~(i5 << 11) | 0;
   i5 = i11 >>> 16 ^ i11;
   i11 = i10 & i5;
   i12 = i9 + (i11 << 2) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == (i7 | 0)) {
    i14 = i12;
   } else {
    i12 = (i5 >>> 23) + ~i5 | 0;
    i5 = i12 << 12 ^ i12;
    i12 = i5 >>> 7 ^ i5;
    i5 = i12 << 2 ^ i12;
    i12 = i5 >>> 20 ^ i5 | 1;
    i5 = 0;
    i15 = i11;
    i11 = i13;
    while (1) {
     if ((i11 | 0) == 0) {
      break L17;
     }
     i13 = (i5 | 0) == 0 ? i12 : i5;
     i16 = i13 + i15 & i10;
     i17 = i9 + (i16 << 2) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i7 | 0)) {
      i14 = i17;
      break;
     } else {
      i5 = i13;
      i15 = i16;
      i11 = i18;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i14 = i1 + 308 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 i11 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i19 = i8;
  } else {
   if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
    i19 = i8;
    break;
   }
   if (__ZNK7WebCore7Element34hasFlagsSetDuringStylingOfChildrenEv(i11) | 0) {
    i6 = 0;
    STACKTOP = i2;
    return i6 | 0;
   } else {
    i19 = HEAP32[i14 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == (HEAP32[(HEAP32[(HEAP32[i19 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1240 >> 2] | 0)) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 do {
  if ((HEAP32[i19 + 12 >> 2] & 16 | 0) == 0) {
   i20 = i19;
  } else {
   if (__ZNK7WebCore11HTMLElement16hasDirectionAutoEv(i19) | 0) {
    i6 = 0;
    STACKTOP = i2;
    return i6 | 0;
   } else {
    i20 = HEAP32[i14 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) == 0) {
   i21 = 0;
  } else {
   i19 = HEAP32[i20 + 48 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i21 = 0;
    break;
   }
   if ((HEAP32[i19 + 12 >> 2] | 0) == 0) {
    i21 = 0;
    break;
   }
   i21 = (__ZNK7WebCore13StyleResolver25classNamesAffectedByRulesERKNS_16SpaceSplitStringE(i1, i19 + 12 | 0) | 0) & 1;
  }
 } while (0);
 HEAP8[i1 + 340 | 0] = i21;
 HEAP32[i3 >> 2] = 0;
 i21 = HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 } else {
  i22 = 0;
  i23 = i21;
 }
 while (1) {
  i24 = i23;
  i21 = i22;
  while (1) {
   if ((HEAP32[i24 + 12 >> 2] & 8 | 0) == 0) {
    i25 = i21;
   } else {
    if (__ZNK7WebCore13StyleResolver24canShareStyleWithElementEPNS_13StyledElementE(i1, i24) | 0) {
     i26 = 34;
     break;
    }
    i4 = i21 + 1 | 0;
    if ((i21 | 0) == 10) {
     i27 = i4;
     break;
    } else {
     i25 = i4;
    }
   }
   i4 = HEAP32[i24 + 24 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i27 = i25;
    break;
   } else {
    i24 = i4;
    i21 = i25;
   }
  }
  if ((i26 | 0) == 34) {
   i26 = 0;
   if ((i24 | 0) == 0) {
    i27 = i21;
   } else {
    break;
   }
  }
  i4 = HEAP32[i23 + 16 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i28 = 0;
   } else {
    if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
     i28 = 0;
     break;
    }
    i28 = i4;
   }
  } while (0);
  i4 = __ZNK7WebCore13StyleResolver16locateCousinListEPNS_7ElementERj(i1, i28, i3) | 0;
  if ((i4 | 0) == 0) {
   i6 = 0;
   i26 = 66;
   break;
  } else {
   i22 = i27;
   i23 = i4;
  }
 }
 if ((i26 | 0) == 66) {
  STACKTOP = i2;
  return i6 | 0;
 }
 if (__ZN7WebCore13StyleResolver35styleSharingCandidateMatchesRuleSetEPNS_7RuleSetE(i1, HEAP32[i1 + 96 >> 2] | 0) | 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if (__ZN7WebCore13StyleResolver35styleSharingCandidateMatchesRuleSetEPNS_7RuleSetE(i1, HEAP32[i1 + 100 >> 2] | 0) | 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore7Element34hasFlagsSetDuringStylingOfChildrenEv(i1) | 0) {
    i6 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i1 = i24 + 32 | 0;
 if ((HEAP32[i24 + 12 >> 2] & 2048 | 0) == 0) {
  i29 = i1 | 0;
 } else {
  i29 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i29 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 236 >> 2] & 15](i24) | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver18loadPendingShadersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 364 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 312 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 20 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[(HEAP32[i5 + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
 if ((HEAP32[i5 >> 2] | 0) == 1) {
  i8 = i5;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i5);
  i5 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i9 = i3 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i6 >> 2] = i5;
  i8 = i5;
 }
 i5 = __ZN7WebCore7DataRefINS_15StyleFilterDataEE6accessEv(i8 + 76 | 0) | 0;
 i8 = i5 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i6 = i5 + 4 | 0;
  i5 = i1 + 552 | 0;
  i1 = 0;
  while (1) {
   i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   i9 = (i10 | 0) == 0;
   if (!i9) {
    i3 = i10 + 4 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   }
   L24 : do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 15](i10) | 0) == 11) {
     i3 = i10 + 12 | 0;
     i11 = i3;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = i12;
     i14 = i12 + 52 | 0;
     i15 = i14;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i17 = 16;
     } else {
      if ((HEAP8[i16 + 8 | 0] & 2) == 0) {
       i17 = 16;
      }
     }
     do {
      if ((i17 | 0) == 16) {
       i17 = 0;
       i16 = HEAP32[i12 + 56 >> 2] | 0;
       if ((i16 | 0) != 0) {
        if ((HEAP8[i16 + 8 | 0] & 2) != 0) {
         break;
        }
       }
       if ((HEAP32[i12 + 164 >> 2] | 0) != 0) {
        break L24;
       }
      }
     } while (0);
     i16 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i16 | 0) == 0) {
       i18 = __ZN3WTF10fastMallocEj(20) | 0;
       __ZN7WebCore29StyleCustomFilterProgramCacheC1Ev(i18);
       i19 = HEAP32[i5 >> 2] | 0;
       HEAP32[i5 >> 2] = i18;
       if ((i19 | 0) == 0) {
        i20 = i18;
        break;
       }
       __ZN7WebCore29StyleCustomFilterProgramCacheD1Ev(i19);
       __ZN3WTF8fastFreeEPv(i19);
       i20 = HEAP32[i5 >> 2] | 0;
      } else {
       i20 = i16;
      }
     } while (0);
     i16 = __ZNK7WebCore29StyleCustomFilterProgramCache6lookupEPNS_24StyleCustomFilterProgramE(i20, i13) | 0;
     if ((i16 | 0) != 0) {
      i19 = i16 + 4 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      i19 = HEAP32[i11 >> 2] | 0;
      HEAP32[i3 >> 2] = i16;
      if ((i19 | 0) == 0) {
       break;
      }
      i16 = i19 + 4 | 0;
      i19 = i16 | 0;
      i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      if ((i18 | 0) != 0) {
       HEAP32[i19 >> 2] = i18;
       break;
      }
      i18 = i16 - 4 | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
      break;
     }
     i18 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       if ((HEAP8[i18 + 8 | 0] & 2) == 0) {
        break;
       }
       i16 = __ZN7WebCore20WebKitCSSShaderValue12cachedShaderEPNS_20CachedResourceLoaderE(HEAP32[i18 + 12 >> 2] | 0, i7) | 0;
       if ((i16 | 0) != 0) {
        i19 = i16 + 4 | 0;
        HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       }
       i19 = HEAP32[i15 >> 2] | 0;
       HEAP32[i14 >> 2] = i16;
       if ((i19 | 0) == 0) {
        break;
       }
       i16 = i19 + 4 | 0;
       i19 = i16 | 0;
       i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) != 0) {
        HEAP32[i19 >> 2] = i21;
        break;
       }
       i21 = i16 - 4 | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
      }
     } while (0);
     i14 = i12 + 56 | 0;
     i15 = i14;
     i18 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       if ((HEAP8[i18 + 8 | 0] & 2) == 0) {
        break;
       }
       i3 = __ZN7WebCore20WebKitCSSShaderValue12cachedShaderEPNS_20CachedResourceLoaderE(HEAP32[i18 + 12 >> 2] | 0, i7) | 0;
       if ((i3 | 0) != 0) {
        i11 = i3 + 4 | 0;
        HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
       }
       i11 = HEAP32[i15 >> 2] | 0;
       HEAP32[i14 >> 2] = i3;
       if ((i11 | 0) == 0) {
        break;
       }
       i3 = i11 + 4 | 0;
       i11 = i3 | 0;
       i21 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) != 0) {
        HEAP32[i11 >> 2] = i21;
        break;
       }
       i21 = i3 - 4 | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
      }
     } while (0);
     __ZN7WebCore29StyleCustomFilterProgramCache3addEPNS_24StyleCustomFilterProgramE(HEAP32[i5 >> 2] | 0, i13);
    }
   } while (0);
   do {
    if (!i9) {
     i14 = i10 + 4 | 0;
     i15 = i14 | 0;
     i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i15 >> 2] = i18;
      break;
     }
     i18 = i14 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 HEAP8[i4] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 * 40 & -1) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 * 40 & -1) | 0;
    while (1) {
     if ((HEAP8[i9 + 33 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 28 | 0);
     }
     if ((HEAP8[i9 + 25 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 20 | 0);
     }
     if ((HEAP8[i9 + 17 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 12 | 0);
     }
     if ((HEAP8[i9 + 9 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 4 | 0);
     }
     i7 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i10 = i7 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i9 = i9 + 40 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i6;
   i12 = i6;
  } else {
   if (i6 >>> 0 <= (HEAP32[i1 + 4 >> 2] | 0) >>> 0) {
    i12 = i4;
    break;
   }
   __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE5clearEv(i1);
   __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i12 * 40 & -1) | 0;
 i8 = i1 | 0;
 if ((i12 | 0) == 0) {
  i13 = i2;
  i14 = 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i12 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 | 0;
     i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i2 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i11 = i12 + 4 | 0;
   i7 = i9 + 4 | 0;
   i2 = i11;
   i10 = HEAP32[i7 >> 2] | 0;
   i15 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   HEAP32[i2 + 4 >> 2] = i15;
   if ((i10 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
   }
   i11 = i12 + 12 | 0;
   i15 = i9 + 12 | 0;
   i10 = i11;
   i2 = HEAP32[i15 >> 2] | 0;
   i7 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i2;
   HEAP32[i10 + 4 >> 2] = i7;
   if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   i11 = i12 + 20 | 0;
   i7 = i9 + 20 | 0;
   i2 = i11;
   i10 = HEAP32[i7 >> 2] | 0;
   i15 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   HEAP32[i2 + 4 >> 2] = i15;
   if ((i10 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   i11 = i12 + 28 | 0;
   i15 = i9 + 28 | 0;
   i10 = i11;
   i2 = HEAP32[i15 >> 2] | 0;
   i7 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i2;
   HEAP32[i10 + 4 >> 2] = i7;
   if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   HEAP32[i12 + 36 >> 2] = HEAP32[i9 + 36 >> 2];
   i11 = i9 + 40 | 0;
   if ((i11 | 0) == (i6 | 0)) {
    break;
   } else {
    i12 = i12 + 40 | 0;
    i9 = i11;
   }
  }
  i13 = HEAP32[i4 >> 2] | 0;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i13 + (i4 * 40 & -1) | 0;
 if ((i14 | 0) == (i4 | 0)) {
  i16 = i14;
 } else {
  i4 = i13 + (i14 * 40 & -1) | 0;
  i13 = (HEAP32[i8 >> 2] | 0) + (i14 * 40 & -1) | 0;
  while (1) {
   i14 = HEAP32[i4 >> 2] | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i8 = i14 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i13 + 4 | 0;
   i14 = i4 + 4 | 0;
   i12 = i8;
   i6 = HEAP32[i14 >> 2] | 0;
   i11 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i6;
   HEAP32[i12 + 4 >> 2] = i11;
   if ((i6 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8 | 0);
   }
   i8 = i13 + 12 | 0;
   i11 = i4 + 12 | 0;
   i6 = i8;
   i12 = HEAP32[i11 >> 2] | 0;
   i14 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i12;
   HEAP32[i6 + 4 >> 2] = i14;
   if ((i12 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   i8 = i13 + 20 | 0;
   i14 = i4 + 20 | 0;
   i12 = i8;
   i6 = HEAP32[i14 >> 2] | 0;
   i11 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i6;
   HEAP32[i12 + 4 >> 2] = i11;
   if ((i6 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   i8 = i13 + 28 | 0;
   i11 = i4 + 28 | 0;
   i6 = i8;
   i12 = HEAP32[i11 >> 2] | 0;
   i14 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i12;
   HEAP32[i6 + 4 >> 2] = i14;
   if ((i12 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   HEAP32[i13 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
   i8 = i4 + 40 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = i8;
    i13 = i13 + 40 | 0;
   }
  }
  i16 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i16;
 return i1 | 0;
}
function __ZN7WebCore13StyleResolver30parseCustomFilterParameterListEPNS_8CSSValueERNS_25CustomFilterParameterListE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i2 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    i10 = 0;
    break;
   }
   i10 = i2;
  }
 } while (0);
 i2 = (i10 | 0) == 0;
 i11 = i10 + 16 | 0;
 i12 = i10 + 8 | 0;
 i10 = i6 | 0;
 i13 = i6 | 0;
 i14 = i9 | 0;
 i15 = i3 + 8 | 0;
 i16 = i3 + 4 | 0;
 i17 = i3 | 0;
 i18 = i3 | 0;
 i3 = i7 | 0;
 i19 = i6 + 8 | 0;
 i20 = 0;
 while (1) {
  if (i2) {
   i21 = 0;
  } else {
   i21 = HEAP32[i11 >> 2] | 0;
  }
  if (i20 >>> 0 >= i21 >>> 0) {
   i22 = 37;
   break;
  }
  if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i20 >>> 0) {
   i22 = 9;
   break;
  }
  i23 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i20 << 2) >> 2] | 0;
  if ((HEAP32[i23 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
   i24 = 0;
   break;
  }
  if ((i23 | 0) == 0) {
   i25 = 0;
  } else {
   i25 = i23;
  }
  i23 = i25 + 16 | 0;
  if ((HEAP32[i23 >> 2] | 0) == 0) {
   i22 = 14;
   break;
  }
  i26 = i25 + 8 | 0;
  i27 = HEAP32[HEAP32[i26 >> 2] >> 2] | 0;
  if ((HEAP32[i27 + 4 >> 2] & 516096 | 0) != 0) {
   i24 = 0;
   break;
  }
  i28 = i27;
  if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i28) | 0) << 16 >> 16 != 19) {
   i24 = 0;
   break;
  }
  __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i7, i28);
  i28 = HEAP32[i10 >> 2] | 0;
  L19 : do {
   if ((i28 | 0) == 0) {
    i22 = 26;
   } else {
    i27 = HEAP32[i19 >> 2] | 0;
    i29 = HEAP32[i3 >> 2] | 0;
    i30 = HEAP32[i29 + 16 >> 2] | 0;
    if (i30 >>> 0 > 127 >>> 0) {
     i31 = i30 >>> 7;
    } else {
     i31 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i29) | 0;
    }
    i29 = (i31 >>> 23) + ~i31 | 0;
    i30 = i29 << 12 ^ i29;
    i29 = i30 >>> 7 ^ i30;
    i30 = i29 << 2 ^ i29;
    i29 = i30 >>> 20 ^ i30 | 1;
    i30 = i31;
    i32 = 0;
    while (1) {
     i33 = i30 & i27;
     i34 = i28 + (i33 << 2) | 0;
     i35 = HEAP32[i34 >> 2] | 0;
     i36 = i35;
     if ((i36 | 0) == 0) {
      i22 = 26;
      break L19;
     } else if ((i36 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i35, HEAP32[i3 >> 2] | 0) | 0) {
       break;
      }
     }
     i35 = (i32 | 0) == 0 ? i29 : i32;
     i30 = i35 + i33 | 0;
     i32 = i35;
    }
    if ((i34 | 0) == 0) {
     i22 = 26;
    } else {
     i37 = 1;
    }
   }
  } while (0);
  do {
   if ((i22 | 0) == 26) {
    i22 = 0;
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i8, i13, i7, i7);
    if ((i25 | 0) == 0) {
     i37 = 1;
     break;
    }
    if ((HEAP32[i23 >> 2] | 0) >>> 0 <= 1 >>> 0) {
     i37 = 1;
     break;
    }
    __ZN7WebCore13StyleResolver26parseCustomFilterParameterERKN3WTF6StringEPNS_8CSSValueE(i9, i1, i7, HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] | 0);
    i28 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    if ((i28 | 0) == 0) {
     i37 = 1;
     break;
    }
    i32 = HEAP32[i15 >> 2] | 0;
    if ((i32 | 0) == (HEAP32[i16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i32 + 1 | 0);
     HEAP32[(HEAP32[i18 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i28;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i37 = 0;
     break;
    } else {
     HEAP32[(HEAP32[i18 >> 2] | 0) + (i32 << 2) >> 2] = i28;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i37 = 0;
     break;
    }
   }
  } while (0);
  i26 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i26 | 0) != 0) {
    i23 = i26 | 0;
    i28 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     break;
    } else {
     HEAP32[i23 >> 2] = i28;
     break;
    }
   }
  } while (0);
  if ((i37 | 0) == 0) {
   i20 = i20 + 1 | 0;
  } else {
   i24 = 0;
   break;
  }
 }
 if ((i22 | 0) == 37) {
  i20 = HEAP32[i18 >> 2] | 0;
  i18 = i20 + (HEAP32[i15 >> 2] << 2) | 0;
  HEAP32[i5 >> 2] = F_BASE_iii + 10;
  __ZNSt3__16__sortIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i20, i18, i5);
  i24 = 1;
 } else if ((i22 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i22 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i22 = HEAP32[i10 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i4;
  return i24 | 0;
 }
 i10 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i10 | 0) > 0) {
  i6 = 0;
  while (1) {
   i5 = HEAP32[i22 + (i6 << 2) >> 2] | 0;
   i18 = i5;
   do {
    if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
     i20 = i5 | 0;
     i15 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i20 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i10 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i22);
 STACKTOP = i4;
 return i24 | 0;
}
function __ZN7WebCoreL30extractDirectionAndWritingModeERKNS_11RenderStyleERKNS_13StyleResolver11MatchResultERNS_13TextDirectionERNS_11WritingModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 HEAP32[i3 >> 2] = (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i4 >> 2] = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i1 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1 + (i5 << 3) | 0;
 if ((i5 | 0) == 0) {
  return;
 } else {
  i6 = i1;
  i7 = 0;
  i8 = 0;
 }
 L3 : while (1) {
  i1 = i6 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  i9 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i9 & 4 | 0) == 0) {
   i10 = i9 >>> 3;
  } else {
   i10 = HEAP32[i5 + 16 >> 2] | 0;
  }
  L9 : do {
   if ((i10 | 0) == 0) {
    i11 = i7;
    i12 = i8;
   } else {
    i13 = i7;
    i14 = 0;
    i15 = i8;
    i16 = i5;
    i17 = i9;
    while (1) {
     i18 = i16 + 4 | 0;
     i19 = (i17 & 4 | 0) == 0;
     if (i19) {
      i20 = i16 + 8 + (i14 << 2) | 0;
     } else {
      if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
       i21 = 8;
       break L3;
      }
      i20 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) + 4 | 0;
     }
     do {
      if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 0) {
       if (i19) {
        i22 = i16 + 8 + (i17 >>> 3 << 2) + (i14 << 1) | 0;
       } else {
        if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
         i21 = 14;
         break L3;
        }
        i22 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) | 0;
       }
       i23 = HEAP16[i22 >> 1] & 1023;
       if ((i23 | 0) == 2) {
        if (i13) {
         if (i19) {
          i24 = i16 + 8 + (i17 >>> 3 << 2) + (i14 << 1) | 0;
         } else {
          if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
           i21 = 43;
           break L3;
          }
          i24 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) | 0;
         }
         if ((HEAP16[i24 >> 1] & 8192) == 0) {
          i25 = i15;
          i26 = 1;
          break;
         }
        }
        if (i19) {
         i27 = i16 + 8 + (i14 << 2) | 0;
        } else {
         if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
          i21 = 49;
          break L3;
         }
         i27 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) + 4 | 0;
        }
        HEAP32[i3 >> 2] = (HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0) != 305;
        i28 = HEAP32[i18 >> 2] | 0;
        if ((i28 & 4 | 0) == 0) {
         i29 = i16 + 8 + (i28 >>> 3 << 2) + (i14 << 1) | 0;
        } else {
         if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
          i21 = 54;
          break L3;
         }
         i29 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) | 0;
        }
        i25 = i15;
        i26 = (HEAP16[i29 >> 1] & 8192) != 0;
        break;
       } else if ((i23 | 0) != 17) {
        i25 = i15;
        i26 = i13;
        break;
       }
       if (i15) {
        if (i19) {
         i30 = i16 + 8 + (i17 >>> 3 << 2) + (i14 << 1) | 0;
        } else {
         if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
          i21 = 21;
          break L3;
         }
         i30 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) | 0;
        }
        if ((HEAP16[i30 >> 1] & 8192) == 0) {
         i25 = 1;
         i26 = i13;
         break;
        }
       }
       if (i19) {
        i31 = i16 + 8 + (i14 << 2) | 0;
       } else {
        if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
         i21 = 27;
         break L3;
        }
        i31 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) + 4 | 0;
       }
       i23 = HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] | 0;
       if ((i23 | 0) == 538) {
        i32 = 2;
       } else if ((i23 | 0) == 537) {
        i32 = 1;
       } else if ((i23 | 0) == 539) {
        i32 = 3;
       } else {
        i32 = 0;
       }
       HEAP32[i4 >> 2] = i32;
       i23 = HEAP32[i18 >> 2] | 0;
       if ((i23 & 4 | 0) == 0) {
        i33 = i16 + 8 + (i23 >>> 3 << 2) + (i14 << 1) | 0;
       } else {
        if ((HEAP32[i16 + 16 >> 2] | 0) >>> 0 <= i14 >>> 0) {
         i21 = 36;
         break L3;
        }
        i33 = (HEAP32[i16 + 8 >> 2] | 0) + (i14 << 3) | 0;
       }
       i25 = (HEAP16[i33 >> 1] & 8192) != 0;
       i26 = i13;
      } else {
       i25 = i15;
       i26 = i13;
      }
     } while (0);
     i18 = i14 + 1 | 0;
     if (i18 >>> 0 >= i10 >>> 0) {
      i11 = i26;
      i12 = i25;
      break L9;
     }
     i19 = HEAP32[i1 >> 2] | 0;
     i13 = i26;
     i14 = i18;
     i15 = i25;
     i16 = i19;
     i17 = HEAP32[i19 + 4 >> 2] | 0;
    }
   }
  } while (0);
  i1 = i6 + 8 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   i21 = 63;
   break;
  } else {
   i6 = i1;
   i7 = i11;
   i8 = i12;
  }
 }
 if ((i21 | 0) == 43) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 49) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 21) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 36) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 63) {
  return;
 } else if ((i21 | 0) == 54) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 27) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore13StyleResolver21pseudoStyleForElementEPNS_7ElementERKNS_18PseudoStyleRequestEPNS_11RenderStyleE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 912 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i11 = i2 + 308 | 0;
 i12 = i2 + 308 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) != (i3 | 0)) {
   HEAP32[i12 >> 2] = i3;
   i13 = i3 + 12 | 0;
   if ((HEAP32[i13 >> 2] & 8 | 0) == 0) {
    i14 = 0;
   } else {
    i14 = i3;
   }
   HEAP32[i2 + 316 >> 2] = i14;
   i15 = i3 + 20 | 0;
   if ((HEAP32[i13 >> 2] & 512 | 0) == 0) {
    i16 = 0;
   } else {
    i16 = __ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0) + 952 >> 2] | 0, i3) | 0;
   }
   HEAP32[i2 + 336 >> 2] = i16;
   i13 = HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i13 + 692 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   HEAP8[i13 + 1948 | 0] = 0;
   HEAP8[(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0) + 1949 | 0] = 0;
  }
 } while (0);
 i16 = i2 + 216 | 0;
 __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i11, HEAP32[i16 >> 2] | 0, i3, i5, 0);
 i5 = i2 + 324 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore13StyleResolver22defaultStyleForElementEv(i8, i2);
   i14 = i2 + 312 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
   do {
    if ((i12 | 0) != 0) {
     i15 = i12 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i15 >> 2] = i13;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i9, HEAP32[i14 >> 2] | 0);
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i15;
    break;
   }
  } else {
   __ZN7WebCore11RenderStyle6createEv(i7);
   i15 = i2 + 312 | 0;
   i13 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i15 >> 2] | 0, HEAP32[i5 >> 2] | 0, 1);
  }
 } while (0);
 HEAP32[i10 >> 2] = i11;
 HEAP32[i10 + 4 >> 2] = i2;
 i11 = i2 + 220 | 0;
 HEAP32[i10 + 8 >> 2] = i11;
 HEAP32[i10 + 12 >> 2] = i2 + 268;
 HEAP32[i10 + 16 >> 2] = HEAP32[i2 + 260 >> 2];
 i7 = i10 + 20 | 0;
 HEAP8[i7] = 0;
 HEAP32[i10 + 44 >> 2] = 0;
 i9 = i10 + 48 | 0;
 _memset(i10 + 24 | 0, 0, 17) | 0;
 i8 = HEAP32[i2 + 320 >> 2] | 0;
 i13 = HEAP32[i2 + 228 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i18 = 0;
  } else {
   i14 = _llvm_uadd_with_overflow_i32(i13 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i18 = (HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 5) >> 2] | 0) == (i8 | 0) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 HEAP8[i9] = i18;
 _memset(i10 + 52 | 0, 0, 16) | 0;
 HEAP32[i10 + 68 >> 2] = i10 + 80;
 HEAP32[i10 + 72 >> 2] = 64;
 HEAP32[i10 + 76 >> 2] = 0;
 HEAP32[i10 + 592 >> 2] = i10 + 604;
 HEAP32[i10 + 596 >> 2] = 64;
 HEAP32[i10 + 600 >> 2] = 0;
 _memset(i10 + 860 | 0, -1 | 0, 24) | 0;
 HEAP8[i10 + 884 | 0] = 1;
 i18 = i10 + 28 | 0;
 i9 = i4;
 HEAP32[i18 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP8[i7] = (__ZNK7WebCore19MediaQueryEvaluator22mediaTypeMatchSpecificEPKc(HEAP32[i2 + 208 >> 2] | 0, H_BASE + 8 | 0) | 0) & 1;
 __ZN7WebCore20ElementRuleCollector12matchUARulesEv(i10);
 if ((HEAP8[i2 + 236 | 0] & 1) != 0) {
  __ZN7WebCore20ElementRuleCollector14matchUserRulesEb(i10, 0);
  __ZN7WebCore20ElementRuleCollector16matchAuthorRulesEb(i10, 0);
 }
 if ((HEAP32[(__ZN7WebCore20ElementRuleCollector13matchedResultEv(i10) | 0) + 8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
 } else {
  i7 = i2 + 312 | 0;
  i9 = (HEAP32[i7 >> 2] | 0) + 52 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -4033 | HEAP32[i4 >> 2] << 6 & 4032;
  __ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE(i2, __ZN7WebCore20ElementRuleCollector13matchedResultEv(i10) | 0, i3, 1);
  __ZN7WebCore13StyleResolver17adjustRenderStyleERNS_11RenderStyleERKS1_PNS_7ElementE(i2, HEAP32[i7 >> 2] | 0, HEAP32[i5 >> 2] | 0, 0);
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   __ZN7WebCore13StyleResolver17loadPendingImagesEv(i2);
   __ZN7WebCore13StyleResolver18loadPendingShadersEv(i2);
   __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i2);
  }
  __ZN7WebCore8Document22didAccessStyleResolverEv(HEAP32[i16 >> 2] | 0);
  i16 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i16;
 }
 __ZN7WebCore20ElementRuleCollectorD2Ev(i10);
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 & 516096 | 0) == 0) {
  if ((i6 & 508 | 0) != 76) {
   STACKTOP = i3;
   return;
  }
  __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i4, i1);
  HEAP32[i2 >> 2] = 3;
  i7 = i4 | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i2 + 8 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i4;
  do {
   if ((i9 | 0) != 0) {
    i4 = i9 | 0;
    i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i4 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i7 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i9 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i8 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i7 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 }
 if ((i6 & 491520) >>> 0 > 221184 >>> 0) {
  i10 = i1;
 } else {
  i10 = 0;
 }
 i1 = i10 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i10 + 8 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i4 = i9;
 do {
  if ((HEAP32[i9 + 4 >> 2] & 508 | 0) == 472) {
   if ((HEAP32[i9 + 8 >> 2] | 0) != 600) {
    i11 = i4;
    i12 = 0;
    i13 = 1;
    i14 = 21;
    break;
   }
   if (!((i10 | 0) != 0 & i6 >>> 0 > 1 >>> 0)) {
    i15 = 1;
    i14 = 33;
    break;
   }
   i11 = HEAP32[i7 + 4 >> 2] | 0;
   i12 = 1;
   i13 = 2;
   i14 = 21;
  } else {
   i11 = i4;
   i12 = 0;
   i13 = 1;
   i14 = 21;
  }
 } while (0);
 L34 : do {
  if ((i14 | 0) == 21) {
   L36 : do {
    if ((i11 | 0) == 0) {
     i16 = 1;
     i14 = 31;
    } else {
     do {
      if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i11) | 0) << 16 >> 16 == 1) {
       d17 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i11);
       do {
        if (d17 < +2147483647) {
         if (d17 <= +-2147483648) {
          i18 = -2147483648;
          break;
         }
         i18 = ~~d17;
        } else {
         i18 = 2147483647;
        }
       } while (0);
       if ((i10 | 0) == 0) {
        i19 = 0;
       } else {
        i19 = HEAP32[i1 >> 2] | 0;
       }
       if (i13 >>> 0 >= i19 >>> 0) {
        i16 = i18;
        i14 = 31;
        break L36;
       }
       if ((HEAP32[i1 >> 2] | 0) >>> 0 > i13 >>> 0) {
        i4 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i13 << 2) >> 2] | 0;
        if ((i4 | 0) == 0) {
         i20 = 0;
         i21 = i18;
         break;
        } else {
         i22 = i18;
         i23 = i4;
         i14 = 35;
         break;
        }
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      } else {
       i22 = 1;
       i23 = i11;
       i14 = 35;
      }
     } while (0);
     do {
      if ((i14 | 0) == 35) {
       if ((HEAP32[i23 + 4 >> 2] & 508 | 0) != 76) {
        i20 = 0;
        i21 = i22;
        break;
       }
       __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i5, i23);
       i4 = i5 | 0;
       i7 = HEAP32[i4 >> 2] | 0;
       HEAP32[i4 >> 2] = 0;
       i20 = i7;
       i21 = i22;
      }
     } while (0);
     i7 = i2 | 0;
     if (i12) {
      HEAP32[i7 >> 2] = 2;
      HEAP32[i2 + 4 >> 2] = i21;
      if ((i20 | 0) == 0) {
       i24 = 0;
       i14 = 40;
       break L34;
      }
      i4 = i20 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
      i24 = i20;
      i14 = 40;
      break L34;
     } else {
      HEAP32[i7 >> 2] = 1;
      HEAP32[i2 + 4 >> 2] = i21;
      if ((i20 | 0) == 0) {
       i25 = 0;
       break;
      }
      i7 = i20 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
      i25 = i20;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 31) {
    if (i12) {
     i15 = i16;
     i14 = 33;
     break;
    }
    HEAP32[i2 >> 2] = 1;
    HEAP32[i2 + 4 >> 2] = i16;
    i25 = 0;
   }
   i7 = i2 + 8 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i25;
   if ((i4 | 0) == 0) {
    i26 = i25;
    break;
   }
   i7 = i4 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    i26 = i25;
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    i26 = i25;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 33) {
  HEAP32[i2 >> 2] = 2;
  HEAP32[i2 + 4 >> 2] = i15;
  i24 = 0;
  i14 = 40;
 }
 do {
  if ((i14 | 0) == 40) {
   i15 = i2 + 8 | 0;
   i25 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i24;
   if ((i25 | 0) == 0) {
    i26 = i24;
    break;
   }
   i15 = i25 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    i26 = i24;
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    i26 = i24;
    break;
   }
  }
 } while (0);
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i24 = i26 | 0;
 i2 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i26);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i24 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = i2 - 1;
 i10 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = i5 | 0;
  i12 = i5 + 4 | 0;
  i13 = i5 + 8 | 0;
  i14 = i5 + 12 | 0;
  i15 = i5 + 36 | 0;
  i16 = i5 + 40 | 0;
  i17 = 0;
  while (1) {
   _memset(i14 | 0, -1 | 0, 24) | 0;
   _memset(i10 + (i17 * 48 & -1) | 0, 0, 16) | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i10 + (i17 * 48 & -1) + 4 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 + (i17 * 48 & -1) + 8 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   i18 = i10 + (i17 * 48 & -1) + 16 | 0;
   HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   HEAP32[i18 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
   HEAP32[i18 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
   HEAP32[i15 >> 2] = 0;
   HEAP32[i10 + (i17 * 48 & -1) + 40 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i10 + (i17 * 48 & -1) + 44 >> 2] = 0;
   __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i5);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i8 >> 2] = i10;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i19 = 0;
  i20 = i9;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 } else {
  i21 = 0;
  i22 = 0;
 }
 while (1) {
  i10 = i9 + (i21 * 48 & -1) | 0;
  i2 = i10 | 0;
  i17 = HEAP32[i2 >> 2] | 0;
  if ((i17 | 0) == (-1 | 0) | (i17 | 0) == 0) {
   i23 = i22;
  } else {
   i5 = HEAP32[i8 >> 2] | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   i15 = i17 + ~(i17 << 15) | 0;
   i14 = (i15 >>> 10 ^ i15) * 9 & -1;
   i15 = i14 >>> 6 ^ i14;
   i14 = i15 + ~(i15 << 11) | 0;
   i15 = i14 >>> 16 ^ i14;
   i14 = i16 & i15;
   i12 = i5 + (i14 * 48 & -1) | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   L13 : do {
    if ((i11 | 0) == 0) {
     i24 = 0;
     i25 = i12;
     i26 = 9;
    } else {
     i13 = (i15 >>> 23) + ~i15 | 0;
     i18 = i13 << 12 ^ i13;
     i13 = i18 >>> 7 ^ i18;
     i18 = i13 << 2 ^ i13;
     i13 = i18 >>> 20 ^ i18 | 1;
     i18 = 0;
     i27 = 0;
     i28 = i14;
     i29 = i12;
     i30 = i11;
     while (1) {
      if ((i30 | 0) == (i17 | 0)) {
       i31 = i29;
       break L13;
      }
      i32 = (i30 | 0) == -1 ? i29 : i18;
      i33 = (i27 | 0) == 0 ? i13 : i27;
      i34 = i33 + i28 & i16;
      i35 = i5 + (i34 * 48 & -1) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i24 = i32;
       i25 = i35;
       i26 = 9;
       break;
      } else {
       i18 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
       i30 = i36;
      }
     }
    }
   } while (0);
   if ((i26 | 0) == 9) {
    i26 = 0;
    i31 = (i24 | 0) != 0 ? i24 : i25;
   }
   __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i31 + 4 | 0);
   HEAP32[i31 >> 2] = HEAP32[i2 >> 2];
   i5 = i31 + 4 | 0;
   HEAP32[i5 >> 2] = 0;
   i16 = i31 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   i17 = i31 + 12 | 0;
   HEAP32[i17 >> 2] = 0;
   i11 = i9 + (i21 * 48 & -1) + 12 | 0;
   HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = 0;
   i11 = i9 + (i21 * 48 & -1) + 4 | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i17;
   i17 = i9 + (i21 * 48 & -1) + 8 | 0;
   i11 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i17 >> 2] = i11;
   i11 = i31 + 16 | 0;
   i17 = i9 + (i21 * 48 & -1) + 16 | 0;
   HEAP32[i11 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   HEAP32[i11 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
   HEAP32[i11 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
   i17 = i9 + (i21 * 48 & -1) + 40 | 0;
   i11 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i31 + 40 >> 2] = i11;
   i11 = i9 + (i21 * 48 & -1) + 44 | 0;
   i17 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i31 + 44 >> 2] = i17;
   i23 = (i10 | 0) == (i3 | 0) ? i31 : i22;
  }
  i17 = i21 + 1 | 0;
  if ((i17 | 0) == (i7 | 0)) {
   break;
  } else {
   i21 = i17;
   i22 = i23;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i37 = 0;
 } else {
  i19 = i23;
  i20 = i9;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 while (1) {
  if ((HEAP32[i9 + (i37 * 48 & -1) >> 2] | 0) != -1) {
   __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i9 + (i37 * 48 & -1) + 4 | 0);
  }
  i1 = i37 + 1 | 0;
  if ((i1 | 0) < (i7 | 0)) {
   i37 = i1;
  } else {
   i19 = i23;
   break;
  }
 }
 i20 = i9;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i4;
 return i19 | 0;
}
function __ZN7WebCore11RenderStyle18setDashboardRegionEiRKN3WTF6StringENS_6LengthES5_S5_S5_b(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i12 + 12 | 0;
 _memset(i13 | 0, 0, 7) | 0;
 i14 = i12 + 20 | 0;
 _memset(i14 | 0, 0, 7) | 0;
 i15 = i12 + 28 | 0;
 _memset(i15 | 0, 0, 7) | 0;
 _memset(i12 | 0, 0, 11) | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i3 = i12 | 0;
   HEAP32[i3 >> 2] = i16;
   i17 = i3;
  } else {
   i3 = i16 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   i3 = i12 | 0;
   i18 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i16;
   if ((i18 | 0) == 0) {
    i17 = i3;
    break;
   }
   i19 = i18 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i17 = i3;
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    i17 = i3;
    break;
   }
  }
 } while (0);
 i16 = i4;
 i3 = i14;
 i20 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i3 + 4 >> 2] = i20;
 HEAP8[i4 + 5 | 0] = 0;
 i4 = i5;
 i20 = i13;
 i16 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i20 + 4 >> 2] = i16;
 HEAP8[i5 + 5 | 0] = 0;
 i5 = i6;
 i16 = i15;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i16 + 4 >> 2] = i4;
 HEAP8[i6 + 5 | 0] = 0;
 i6 = i12 + 4 | 0;
 i4 = i7;
 i5 = i6;
 i19 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i19;
 HEAP8[i7 + 5 | 0] = 0;
 i7 = i12 + 36 | 0;
 HEAP32[i7 >> 2] = i2;
 if (i8) {
  i21 = i1 + 20 | 0;
 } else {
  i8 = i1 + 20 | 0;
  i1 = HEAP32[i8 >> 2] | 0;
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i22 = i1;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i11, i1);
   i1 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i2 = i11 | 0;
   i19 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
   } else {
    HEAP32[i2 >> 2] = i19;
   }
   HEAP32[i8 >> 2] = i1;
   i22 = i1;
  }
  __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE5clearEv(i22 + 44 | 0);
  i21 = i8;
 }
 i8 = HEAP32[i21 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i23 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i10, i8);
  i8 = HEAP32[i10 >> 2] | 0;
  i10 = HEAP32[i21 >> 2] | 0;
  i22 = i10 | 0;
  i1 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
  } else {
   HEAP32[i22 >> 2] = i1;
  }
  HEAP32[i21 >> 2] = i8;
  i23 = i8;
 }
 i8 = i23 + 44 | 0;
 i21 = i23 + 52 | 0;
 i1 = HEAP32[i21 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i23 + 48 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i8, i12);
 } else {
  i23 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i17 >> 2] | 0;
  HEAP32[i23 + (i1 * 40 & -1) >> 2] = i8;
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
  }
  i22 = i23 + (i1 * 40 & -1) + 4 | 0;
  i8 = i12 + 4 | 0;
  i10 = i22;
  i19 = HEAP32[i8 >> 2] | 0;
  i2 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = i19;
  HEAP32[i10 + 4 >> 2] = i2;
  if ((i19 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i22 | 0);
  }
  i22 = i23 + (i1 * 40 & -1) + 12 | 0;
  i2 = i22;
  i19 = HEAP32[i20 >> 2] | 0;
  i10 = HEAP32[i20 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i19;
  HEAP32[i2 + 4 >> 2] = i10;
  if ((i19 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i22);
  }
  i22 = i23 + (i1 * 40 & -1) + 20 | 0;
  i10 = i22;
  i19 = HEAP32[i3 >> 2] | 0;
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = i19;
  HEAP32[i10 + 4 >> 2] = i2;
  if ((i19 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i22);
  }
  i22 = i23 + (i1 * 40 & -1) + 28 | 0;
  i2 = i22;
  i19 = HEAP32[i16 >> 2] | 0;
  i10 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i19;
  HEAP32[i2 + 4 >> 2] = i10;
  if ((i19 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i22);
  }
  HEAP32[i23 + (i1 * 40 & -1) + 36 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 if ((HEAP8[i12 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
 }
 if ((HEAP8[i12 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
 }
 if ((HEAP8[i12 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 if ((HEAP8[i12 + 9 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i17 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i17 = i6 | 0;
 i12 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i17 >> 2] = i12;
  STACKTOP = i9;
  return;
 }
}
function __ZNK7WebCore13StyleResolver16locateCousinListEPNS_7ElementERj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 > 99 >>> 0 | (i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i7 = i2 + 48 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 8 >> 2] | 0) == 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i9 = i2 | 0;
 do {
  if ((i6 & 32 | 0) == 0) {
   i10 = i8;
  } else {
   if ((__ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv(i2) | 0) == 0) {
    i10 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i4 = 0;
    return i4 | 0;
   }
  }
 } while (0);
 L17 : do {
  if ((i10 | 0) != 0) {
   i7 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7;
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i1 + 16 >> 2] | 0;
   i12 = i7;
   i7 = i12 + ~(i12 << 15) | 0;
   i12 = (i7 >>> 10 ^ i7) * 9 & -1;
   i7 = i12 >>> 6 ^ i12;
   i12 = i7 + ~(i7 << 11) | 0;
   i7 = i12 >>> 16 ^ i12;
   i12 = i11 & i7;
   i13 = i6 + (i12 << 2) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i8 | 0)) {
    i15 = i13;
   } else {
    i13 = (i7 >>> 23) + ~i7 | 0;
    i7 = i13 << 12 ^ i13;
    i13 = i7 >>> 7 ^ i7;
    i7 = i13 << 2 ^ i13;
    i13 = i7 >>> 20 ^ i7 | 1;
    i7 = 0;
    i16 = i12;
    i12 = i14;
    while (1) {
     if ((i12 | 0) == 0) {
      break L17;
     }
     i14 = (i7 | 0) == 0 ? i13 : i7;
     i17 = i14 + i16 & i11;
     i18 = i6 + (i17 << 2) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i8 | 0)) {
      i15 = i18;
      break;
     } else {
      i7 = i14;
      i16 = i17;
      i12 = i19;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i15 = i2 + 32 | 0;
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i20 = i15 | 0;
 } else {
  i20 = HEAP32[i15 >> 2] | 0;
 }
 i15 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 236 >> 2] & 15](i9) | 0;
  } else {
   if ((HEAP32[i15 + 20 >> 2] & 768 | 0) == 256) {
    i21 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i21 = HEAP32[i15 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 10;
 i2 = 0;
 i20 = i9;
 i9 = i15;
 L40 : while (1) {
  if ((i9 | 0) == 0) {
   i22 = i2;
  } else {
   i23 = i2;
   i15 = i9;
   while (1) {
    i5 = i23 + 1 | 0;
    i24 = i15 + 12 | 0;
    i10 = i15 + 32 | 0;
    if ((HEAP32[i24 >> 2] & 2048 | 0) == 0) {
     i25 = i10 | 0;
    } else {
     i25 = HEAP32[i10 >> 2] | 0;
    }
    i10 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i10 | 0) == 0) {
      i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 236 >> 2] & 15](i15) | 0;
     } else {
      if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
       i26 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i26 = HEAP32[i10 + 36 >> 2] | 0;
       break;
      }
     }
    } while (0);
    do {
     if ((i26 | 0) == (i21 | 0)) {
      i10 = HEAP32[i24 >> 2] | 0;
      if ((i10 & 2 | 0) == 0) {
       break;
      }
      if ((HEAP32[i15 + 40 >> 2] | 0) == 0) {
       break;
      }
      if ((i10 & 4 | 0) == 0) {
       break;
      }
      if ((i15 | 0) == 0) {
       i27 = 0;
       i28 = 40;
       break L40;
      }
      if (!(__ZNK7WebCore7Element34hasFlagsSetDuringStylingOfChildrenEv(i15) | 0)) {
       i27 = i15;
       i28 = 40;
       break L40;
      }
     }
    } while (0);
    if (i5 >>> 0 > 9 >>> 0) {
     i4 = 0;
     i28 = 51;
     break L40;
    }
    i10 = HEAP32[i15 + 24 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = i5;
     break;
    } else {
     i23 = i5;
     i15 = i10;
    }
   }
  }
  i15 = HEAP32[i20 + 16 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    i29 = 0;
   } else {
    if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
     i29 = 0;
     break;
    }
    i29 = i15;
   }
  } while (0);
  i15 = __ZNK7WebCore13StyleResolver16locateCousinListEPNS_7ElementERj(i1, i29, i3) | 0;
  if ((i15 | 0) == 0) {
   i4 = 0;
   i28 = 57;
   break;
  } else {
   i2 = i22;
   i20 = i15;
   i9 = i15;
  }
 }
 if ((i28 | 0) == 40) {
  HEAP32[i3 >> 2] = i23 - 9 + (HEAP32[i3 >> 2] | 0);
  if ((HEAP32[i24 >> 2] & 2 | 0) == 0) {
   i4 = 0;
   return i4 | 0;
  }
  i4 = HEAP32[i27 + 40 >> 2] | 0;
  return i4 | 0;
 } else if ((i28 | 0) == 51) {
  return i4 | 0;
 } else if ((i28 | 0) == 57) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver12styleForPageEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 7696 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 840 | 0;
 i8 = i4 + 848 | 0;
 i9 = i4 + 856 | 0;
 i10 = i2 + 308 | 0;
 i11 = i2 + 216 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i10, i12, HEAP32[i12 + 692 >> 2] | 0, 0, 0);
 __ZN7WebCore11RenderStyle6createEv(i5);
 i12 = i2 + 312 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
 do {
  if ((i13 | 0) != 0) {
   i5 = i13 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i5 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i12 >> 2] | 0, HEAP32[i2 + 328 >> 2] | 0, 1);
 HEAP32[i6 >> 2] = i10;
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 + 8 >> 2] = i6 + 20;
 HEAP32[i6 + 12 >> 2] = 64;
 i10 = i6 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i6 + 532 >> 2] = i6 + 544;
 HEAP32[i6 + 536 >> 2] = 64;
 i13 = i6 + 540 | 0;
 HEAP32[i13 >> 2] = 0;
 _memset(i6 + 800 | 0, -1 | 0, 24) | 0;
 HEAP8[i6 + 824 | 0] = 1;
 __ZN7WebCore17PageRuleCollector17matchAllPageRulesEi(i6, i3);
 i3 = i2 + 388 | 0;
 HEAP32[i3 >> 2] = 0;
 i14 = i6 + 8 | 0;
 __ZN7WebCoreL30extractDirectionAndWritingModeERKNS_11RenderStyleERKNS_13StyleResolver11MatchResultERNS_13TextDirectionERNS_11WritingModeE(HEAP32[i12 >> 2] | 0, i14, i7, i8);
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i8 = i9 + 6704 | 0;
 i5 = i9 + 6692 | 0;
 _memset(i9 + 6640 | 0, 0, 52) | 0;
 HEAP32[i5 >> 2] = i8;
 i15 = i9 + 6696 | 0;
 HEAP32[i15 >> 2] = 8;
 i16 = i9 + 6700 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i9 + 6832 >> 2] = i6;
 HEAP32[i9 + 6836 >> 2] = i7;
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 i6 = i14 | 0;
 i17 = 0;
 while (1) {
  if ((i17 | 0) > (i7 | 0)) {
   i18 = 1;
   i19 = 12;
   break;
  }
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i17 >>> 0) {
   i19 = 8;
   break;
  }
  i20 = HEAP32[i6 >> 2] | 0;
  if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i17 >>> 0) {
   i19 = 10;
   break;
  }
  i21 = HEAP32[i20 + (i17 << 3) + 4 >> 2] | 0;
  if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i9, HEAP32[i20 + (i17 << 3) >> 2] | 0, 0, 0, 0, i21 >>> 2 & 3, i21 & 3) | 0) {
   i17 = i17 + 1 | 0;
  } else {
   i18 = 1;
   i19 = 12;
   break;
  }
 }
 if ((i19 | 0) == 12) {
  while (1) {
   i19 = 0;
   if ((1 << i18 & HEAP32[i9 + 6640 + (i18 >>> 5 << 2) >> 2] | 0) != 0) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9 + (i18 << 4) | 0, i2);
   }
   i17 = i18 + 1 | 0;
   if ((i17 | 0) > 19) {
    break;
   } else {
    i18 = i17;
    i19 = 12;
   }
  }
  __ZN7WebCore13StyleResolver10updateFontEv(i2);
  i18 = HEAP32[i3 >> 2] | 0;
  if ((i18 | 0) == 0) {
   i22 = 20;
  } else {
   __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 19, i18);
   i22 = 20;
  }
  while (1) {
   if ((1 << (i22 & 31) & HEAP32[i9 + 6640 + (i22 >>> 5 << 2) >> 2] | 0) != 0) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9 + (i22 << 4) | 0, i2);
   }
   i22 = i22 + 1 | 0;
   if ((i22 | 0) > 414) {
    break;
   }
  }
  i22 = HEAP32[i5 >> 2] | 0;
  i9 = HEAP32[i16 >> 2] | 0;
  i18 = i22 + (i9 << 4) | 0;
  if ((i9 | 0) != 0) {
   i9 = i22;
   while (1) {
    __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i9, i2);
    i9 = i9 + 16 | 0;
    if ((i9 | 0) == (i18 | 0)) {
     break;
    }
   }
  }
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   __ZN7WebCore13StyleResolver17loadPendingImagesEv(i2);
   __ZN7WebCore13StyleResolver18loadPendingShadersEv(i2);
   __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i2);
  }
  __ZN7WebCore8Document22didAccessStyleResolverEv(HEAP32[i11 >> 2] | 0);
  HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i12 >> 2] = 0;
  if ((HEAP32[i16 >> 2] | 0) != 0) {
   HEAP32[i16 >> 2] = 0;
  }
  i16 = HEAP32[i5 >> 2] | 0;
  if ((i8 | 0) == (i16 | 0) | (i16 | 0) == 0) {
   __ZN7WebCore13StyleResolver11MatchResultD1Ev(i14);
   STACKTOP = i4;
   return;
  }
  HEAP32[i5 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
  __ZN7WebCore13StyleResolver11MatchResultD1Ev(i14);
  STACKTOP = i4;
  return;
 } else if ((i19 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore13StyleResolver26pseudoStyleRulesForElementEPNS_7ElementENS_8PseudoIdEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 888 | 0;
 i7 = i6 | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 20 | 0;
   if (!(__ZNK7WebCore8Document21haveStylesheetsLoadedEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
    break;
   }
   i9 = i2 + 308 | 0;
   do {
    if ((HEAP32[i9 >> 2] | 0) != (i3 | 0)) {
     HEAP32[i9 >> 2] = i3;
     i10 = i3 + 12 | 0;
     if ((HEAP32[i10 >> 2] & 8 | 0) == 0) {
      i11 = 0;
     } else {
      i11 = i3;
     }
     HEAP32[i2 + 316 >> 2] = i11;
     if ((HEAP32[i10 >> 2] & 512 | 0) == 0) {
      i12 = 0;
     } else {
      i12 = __ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 952 >> 2] | 0, i3) | 0;
     }
     HEAP32[i2 + 336 >> 2] = i12;
     i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
     if ((HEAP32[i10 + 692 >> 2] | 0) != (i3 | 0)) {
      break;
     }
     HEAP8[i10 + 1948 | 0] = 0;
     HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 1949 | 0] = 0;
    }
   } while (0);
   i8 = i2 + 308 | 0;
   __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i8, HEAP32[i2 + 216 >> 2] | 0, i3, 0, 0);
   HEAP32[i7 >> 2] = i8;
   HEAP32[i7 + 4 >> 2] = i2;
   i8 = i2 + 220 | 0;
   HEAP32[i7 + 8 >> 2] = i8;
   HEAP32[i7 + 12 >> 2] = i2 + 268;
   HEAP32[i7 + 16 >> 2] = HEAP32[i2 + 260 >> 2];
   i9 = i7 + 20 | 0;
   HEAP8[i9] = 0;
   i10 = i7 + 44 | 0;
   HEAP32[i10 >> 2] = 0;
   i13 = i7 + 48 | 0;
   _memset(i7 + 24 | 0, 0, 17) | 0;
   i14 = HEAP32[i2 + 320 >> 2] | 0;
   i15 = HEAP32[i2 + 228 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i16 = 0;
    } else {
     i17 = _llvm_uadd_with_overflow_i32(i15 | 0, -1 | 0) | 0;
     if (tempRet0) {
      i16 = (HEAP32[(HEAP32[i8 >> 2] | 0) + (i17 << 5) >> 2] | 0) == (i14 | 0) | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   HEAP8[i13] = i16;
   _memset(i7 + 52 | 0, 0, 16) | 0;
   HEAP32[i7 + 68 >> 2] = i7 + 80;
   HEAP32[i7 + 72 >> 2] = 64;
   HEAP32[i7 + 76 >> 2] = 0;
   HEAP32[i7 + 592 >> 2] = i7 + 604;
   HEAP32[i7 + 596 >> 2] = 64;
   HEAP32[i7 + 600 >> 2] = 0;
   _memset(i7 + 860 | 0, -1 | 0, 24) | 0;
   HEAP8[i7 + 884 | 0] = 1;
   HEAP32[i10 >> 2] = 1;
   HEAP32[i7 + 28 >> 2] = i4;
   HEAP32[i7 + 32 >> 2] = 0;
   HEAP32[i7 + 36 >> 2] = 0;
   HEAP8[i9] = (__ZNK7WebCore19MediaQueryEvaluator22mediaTypeMatchSpecificEPKc(HEAP32[i2 + 208 >> 2] | 0, H_BASE + 8 | 0) | 0) & 1;
   do {
    if ((i5 & 2 | 0) == 0) {
     i18 = i2 + 236 | 0;
    } else {
     __ZN7WebCore20ElementRuleCollector12matchUARulesEv(i7);
     i14 = i2 + 236 | 0;
     if ((HEAP8[i14] & 1) == 0) {
      i18 = i14;
      break;
     }
     __ZN7WebCore20ElementRuleCollector14matchUserRulesEb(i7, (i5 & 8 | 0) != 0);
     i18 = i14;
    }
   } while (0);
   do {
    if ((HEAP8[i18] & 1) != 0) {
     if ((i5 & 4 | 0) == 0) {
      break;
     }
     HEAP8[i7 + 40 | 0] = i5 >>> 4 & 1 ^ 1;
     __ZN7WebCore20ElementRuleCollector16matchAuthorRulesEb(i7, (i5 & 8 | 0) != 0);
    }
   } while (0);
   i9 = __ZNK7WebCore20ElementRuleCollector15matchedRuleListEv(i7) | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   i13 = i9 + 8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i8 = i1 | 0;
   HEAP32[i8 >> 2] = 0;
   i15 = i1 + 4 | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = i14;
   do {
    if ((i10 | 0) != 0) {
     if (i10 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
     HEAP32[i15 >> 2] = i14 >>> 2;
     i17 = __ZN3WTF10fastMallocEj(i14) | 0;
     i14 = i17;
     HEAP32[i8 >> 2] = i14;
     if ((i17 | 0) == 0) {
      break;
     }
     i17 = HEAP32[i9 >> 2] | 0;
     i19 = HEAP32[i13 >> 2] | 0;
     i20 = i17 + (i19 << 2) | 0;
     if ((i19 | 0) == 0) {
      break;
     } else {
      i21 = i17;
      i22 = i14;
     }
     while (1) {
      i14 = HEAP32[i21 >> 2] | 0;
      HEAP32[i22 >> 2] = i14;
      if ((i14 | 0) != 0) {
       i17 = i14 | 0;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
      }
      i17 = i21 + 4 | 0;
      if ((i17 | 0) == (i20 | 0)) {
       break;
      } else {
       i21 = i17;
       i22 = i22 + 4 | 0;
      }
     }
    }
   } while (0);
   __ZN7WebCore20ElementRuleCollectorD2Ev(i7);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = i2 + 4 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 & 4 | 0) == 0) {
  i9 = i8 >>> 3;
 } else {
  i9 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i9 | 0) == 0) {
  i10 = 1;
  return i10 | 0;
 }
 i11 = i2 + 8 | 0;
 i12 = i11;
 i13 = i11;
 i14 = i2 + 16 | 0;
 i2 = i11;
 i11 = (i6 | 0) == 1;
 i6 = i1 + 6832 | 0;
 i15 = i1 + 6836 | 0;
 i16 = (i7 | 0) == 3;
 i17 = 0;
 i18 = i8;
 L8 : while (1) {
  i8 = (i18 & 4 | 0) == 0;
  if (i8) {
   i19 = i12 + (i18 >>> 3 << 2) + (i17 << 1) | 0;
  } else {
   if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
    i20 = 8;
    break;
   }
   i19 = (HEAP32[i2 >> 2] | 0) + (i17 << 3) | 0;
  }
  L15 : do {
   if (!((HEAP16[i19 >> 1] & 8192) != 0 ^ i4)) {
    do {
     if (i5) {
      if (i8) {
       i21 = i12 + (i18 >>> 3 << 2) + (i17 << 1) | 0;
      } else {
       if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
        i20 = 15;
        break L8;
       }
       i21 = (HEAP32[i2 >> 2] | 0) + (i17 << 3) | 0;
      }
      if ((HEAP16[i21 >> 1] | 0) < 0) {
       break;
      }
      if (i8) {
       i22 = i13 + (i17 << 2) | 0;
      } else {
       if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
        i20 = 21;
        break L8;
       }
       i22 = (HEAP32[i2 >> 2] | 0) + (i17 << 3) + 4 | 0;
      }
      if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 131072) {
       i10 = 0;
       i20 = 52;
       break L8;
      } else {
       break L15;
      }
     }
    } while (0);
    if (i8) {
     i23 = i12 + (i18 >>> 3 << 2) + (i17 << 1) | 0;
    } else {
     if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
      i20 = 27;
      break L8;
     }
     i23 = (HEAP32[i2 >> 2] | 0) + (i17 << 3) | 0;
    }
    i24 = HEAP16[i23 >> 1] & 1023;
    if (i11) {
     if ((i24 | 0) == 1 | (i24 | 0) == 23) {
      i20 = 33;
     } else {
      break;
     }
    } else {
     switch (i24 | 0) {
     case 202:
     case 42:
     case 45:
     case 46:
     case 43:
     case 44:
     case 47:
     case 329:
     case 330:
     case 331:
     case 332:
     case 333:
     case 334:
     case 133:
      {
       i25 = 1;
       break;
      }
     default:
      {
       i20 = 33;
      }
     }
    }
    if ((i20 | 0) == 33) {
     i20 = 0;
     i25 = 0;
    }
    if (i8) {
     i26 = i13 + (i17 << 2) | 0;
    } else {
     if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
      i20 = 36;
      break L8;
     }
     i26 = (HEAP32[i2 >> 2] | 0) + (i17 << 3) + 4 | 0;
    }
    i27 = HEAP32[i26 >> 2] | 0;
    if (i25) {
     __ZN7WebCore13StyleResolver18CascadedProperties11setDeferredENS_13CSSPropertyIDERNS_8CSSValueEj(i1, i24, i27, i7);
     break;
    }
    if (__ZN7WebCore11CSSProperty24isDirectionAwarePropertyENS_13CSSPropertyIDE(i24) | 0) {
     i28 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(i24, HEAP32[i6 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0;
    } else {
     i28 = i24;
    }
    i24 = i1 + 6640 + (i28 >>> 5 << 2) | 0;
    i29 = 1 << (i28 & 31);
    i30 = HEAP32[i24 >> 2] | 0;
    if ((i29 & i30 | 0) == 0) {
     _memset(i1 + (i28 << 4) + 4 | 0, 0, 12) | 0;
     i31 = HEAP32[i24 >> 2] | 0;
    } else {
     i31 = i30;
    }
    HEAP32[i24 >> 2] = i31 | i29;
    HEAP32[i1 + (i28 << 4) >> 2] = i28;
    if (i16) {
     HEAP32[i1 + (i28 << 4) + 4 >> 2] = i27;
     HEAP32[i1 + (i28 << 4) + 8 >> 2] = i27;
     HEAP32[i1 + (i28 << 4) + 12 >> 2] = i27;
     break;
    } else {
     HEAP32[i1 + (i28 << 4) + 4 + (i7 << 2) >> 2] = i27;
     break;
    }
   }
  } while (0);
  i8 = i17 + 1 | 0;
  if (i8 >>> 0 >= i9 >>> 0) {
   i10 = 1;
   i20 = 53;
   break;
  }
  i17 = i8;
  i18 = HEAP32[i3 >> 2] | 0;
 }
 if ((i20 | 0) == 21) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 15) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 27) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 36) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 52) {
  return i10 | 0;
 } else if ((i20 | 0) == 53) {
  return i10 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10 + ~(i10 << 15) | 0;
 i9 = (i11 >>> 10 ^ i11) * 9 & -1;
 i11 = i9 >>> 6 ^ i9;
 i9 = i11 + ~(i11 << 11) | 0;
 i11 = i9 >>> 16 ^ i9;
 i9 = i11 & i8;
 i13 = i12 + (i9 * 48 & -1) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = 11;
  } else {
   i17 = (i11 >>> 23) + ~i11 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i9;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i16 = 8;
     break;
    }
    i23 = (i22 | 0) == -1 ? i21 : i19;
    i24 = (i18 | 0) == 0 ? i17 : i18;
    i25 = i24 + i20 & i8;
    i26 = i12 + (i25 * 48 & -1) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i16 = 10;
     break;
    } else {
     i18 = i24;
     i19 = i23;
     i20 = i25;
     i21 = i26;
     i22 = i27;
    }
   }
   if ((i16 | 0) == 8) {
    i22 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i16 | 0) == 10) {
    if ((i23 | 0) == 0) {
     i15 = i26;
     i16 = 11;
     break;
    }
    i22 = i6 + 12 | 0;
    _memset(i22 | 0, -1 | 0, 24) | 0;
    _memset(i23 | 0, 0, 16) | 0;
    HEAP32[i6 + 8 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i23 + 8 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = 0;
    i20 = i23 + 16 | 0;
    HEAP32[i20 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i20 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
    HEAP32[i20 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
    HEAP32[i20 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
    HEAP32[i20 + 16 >> 2] = HEAP32[i22 + 16 >> 2];
    HEAP32[i20 + 20 >> 2] = HEAP32[i22 + 20 >> 2];
    HEAP32[i6 + 36 >> 2] = 0;
    HEAP32[i23 + 40 >> 2] = 0;
    HEAP32[i6 + 40 >> 2] = 0;
    HEAP32[i23 + 44 >> 2] = 0;
    __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i6);
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i28 = i23;
    i29 = HEAP32[i3 >> 2] | 0;
    i30 = i22;
    break;
   }
  }
 } while (0);
 if ((i16 | 0) == 11) {
  i28 = i15;
  i29 = i10;
  i30 = i2 + 16 | 0;
 }
 HEAP32[i28 >> 2] = i29;
 __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemaSEOS1_(i28 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i29 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i29;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i30 >> 2] | 0) + i29 << 1 | 0) < (i10 | 0)) {
  i31 = i28;
  i32 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i33 = 8;
  } else {
   i30 = i10 << 1;
   i33 = (i29 * 6 & -1 | 0) < (i30 | 0) ? i10 : i30;
  }
  i30 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i33, i28) | 0;
  i31 = i30;
  i32 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i32 * 48 & -1) | 0;
 i32 = i1;
 HEAP32[i32 >> 2] = i31;
 HEAP32[i32 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13StyleGridDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 188 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 * 20 & -1) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((HEAP8[i1 + 165 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 160 | 0);
 }
 if ((HEAP8[i1 + 141 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 136 | 0);
 }
 if ((HEAP8[i1 + 109 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 104 | 0);
 }
 if ((HEAP8[i1 + 85 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 80 | 0);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 << 4) | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i6 | 0) != -1) {
      i8 = i2 + (i4 << 4) + 12 | 0;
      if ((HEAP32[i8 >> 2] | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
      }
      i8 = i2 + (i4 << 4) + 4 | 0;
      i7 = HEAP32[i8 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i9 = i6;
      } else {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i2 + (i4 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
       i9 = HEAP32[i5 >> 2] | 0;
      }
      if ((i9 | 0) == 0) {
       break;
      }
      i7 = i9 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i9 = i2 + (i4 << 4) | 0;
    i5 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i5 | 0) != -1) {
      i6 = i2 + (i4 << 4) + 12 | 0;
      if ((HEAP32[i6 >> 2] | 0) != 0) {
       HEAP32[i6 >> 2] = 0;
      }
      i6 = i2 + (i4 << 4) + 4 | 0;
      i8 = HEAP32[i6 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i10 = i5;
      } else {
       HEAP32[i6 >> 2] = 0;
       HEAP32[i2 + (i4 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
       i10 = HEAP32[i9 >> 2] | 0;
      }
      if ((i10 | 0) == 0) {
       break;
      }
      i8 = i10 | 0;
      i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i6 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i8 >> 2] = i6;
       break;
      }
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
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i10 = HEAP32[i4 >> 2] | 0;
  i9 = i10 + (i3 * 56 & -1) | 0;
  i3 = i10;
  while (1) {
   if ((HEAP8[i3 + 37 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 32 | 0);
   }
   if ((HEAP8[i3 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 8 | 0);
   }
   i3 = i3 + 56 | 0;
   if ((i3 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i9 = i1 + 4 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i9 >> 2] | 0;
  i10 = i3 + (i4 * 56 & -1) | 0;
  i4 = i3;
  while (1) {
   if ((HEAP8[i4 + 37 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 32 | 0);
   }
   if ((HEAP8[i4 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 8 | 0);
   }
   i4 = i4 + 56 | 0;
   if ((i4 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 * 56 & -1) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 * 56 & -1) | 0;
    while (1) {
     if ((HEAP8[i9 + 37 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 32 | 0);
     }
     if ((HEAP8[i9 + 13 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i9 + 8 | 0);
     }
     i9 = i9 + 56 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i6;
   i10 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i10 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     i7 = i1 | 0;
     if ((i4 | 0) != 0) {
      i11 = HEAP32[i7 >> 2] | 0;
      i12 = i11 + (i4 * 56 & -1) | 0;
      i13 = i11;
      while (1) {
       if ((HEAP8[i13 + 37 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i13 + 32 | 0);
       }
       if ((HEAP8[i13 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i13 + 8 | 0);
       }
       i13 = i13 + 56 | 0;
       if ((i13 | 0) == (i12 | 0)) {
        break;
       }
      }
      HEAP32[i3 >> 2] = 0;
     }
     i12 = HEAP32[i7 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     HEAP32[i7 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i12);
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i10 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i10 * 56 & -1) | 0;
 i8 = i1 | 0;
 if ((i10 | 0) == 0) {
  i14 = i2;
  i15 = 0;
 } else {
  i10 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   i2 = i10 + 8 | 0;
   i12 = i9 + 8 | 0;
   i13 = i2;
   i11 = HEAP32[i12 >> 2] | 0;
   i16 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   HEAP32[i13 + 4 >> 2] = i16;
   if ((i11 & 0 | 0) == 0 & (i16 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i2 | 0);
   }
   HEAPF64[i10 + 16 >> 3] = +HEAPF64[i9 + 16 >> 3];
   HEAP32[i10 + 24 >> 2] = HEAP32[i9 + 24 >> 2];
   i2 = i10 + 32 | 0;
   i16 = i9 + 32 | 0;
   i11 = i2;
   i13 = HEAP32[i16 >> 2] | 0;
   i12 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i13;
   HEAP32[i11 + 4 >> 2] = i12;
   if ((i13 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i2 | 0);
   }
   HEAPF64[i10 + 40 >> 3] = +HEAPF64[i9 + 40 >> 3];
   HEAP32[i10 + 48 >> 2] = HEAP32[i9 + 48 >> 2];
   i2 = i9 + 56 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i10 + 56 | 0;
    i9 = i2;
   }
  }
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i14 + (i4 * 56 & -1) | 0;
 if ((i15 | 0) == (i4 | 0)) {
  i17 = i15;
 } else {
  i4 = i14 + (i15 * 56 & -1) | 0;
  i14 = (HEAP32[i8 >> 2] | 0) + (i15 * 56 & -1) | 0;
  while (1) {
   HEAP32[i14 >> 2] = HEAP32[i4 >> 2];
   i15 = i14 + 8 | 0;
   i8 = i4 + 8 | 0;
   i10 = i15;
   i6 = HEAP32[i8 >> 2] | 0;
   i2 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i6;
   HEAP32[i10 + 4 >> 2] = i2;
   if ((i6 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i15 | 0);
   }
   HEAPF64[i14 + 16 >> 3] = +HEAPF64[i4 + 16 >> 3];
   HEAP32[i14 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
   i15 = i14 + 32 | 0;
   i2 = i4 + 32 | 0;
   i6 = i15;
   i10 = HEAP32[i2 >> 2] | 0;
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   HEAP32[i6 + 4 >> 2] = i8;
   if ((i10 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i15 | 0);
   }
   HEAPF64[i14 + 40 >> 3] = +HEAPF64[i4 + 40 >> 3];
   HEAP32[i14 + 48 >> 2] = HEAP32[i4 + 48 >> 2];
   i15 = i4 + 56 | 0;
   if ((i15 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = i15;
    i14 = i14 + 56 | 0;
   }
  }
  i17 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i17;
 return i1 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 + 4 | 0;
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
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i13 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i12 = HEAP32[i7 >> 2] | 0;
       i10 = i12 + (i4 << 2) | 0;
       i11 = i12;
       while (1) {
        i12 = HEAP32[i11 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i14 = i12 + 4 | 0;
          i15 = i14 | 0;
          i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
          if ((i16 | 0) != 0) {
           HEAP32[i15 >> 2] = i16;
           break;
          }
          i16 = i14 - 4 | 0;
          if ((i16 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
         }
        } while (0);
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i11 = i1 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i16 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i11 >> 2] = i10;
    i14 = i12;
    _memcpy(i10 | 0, i14 | 0, i16 << 2) | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    if ((HEAP32[i11 >> 2] | 0) == (i12 | 0)) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i13 << 2) | 0;
 i9 = i1 | 0;
 if ((i13 | 0) == 0) {
  i17 = i2;
  i18 = 0;
 } else {
  i13 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i13 | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 + 4 | 0;
     i14 = i2 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i14 >> 2] = i12;
      break;
     }
     i12 = i2 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
    }
   } while (0);
   i11 = i6 + 4 | 0;
   if ((i11 | 0) == (i4 | 0)) {
    break;
   } else {
    i13 = i13 + 4 | 0;
    i6 = i11;
   }
  }
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i17 + (i8 << 2) | 0;
 if ((i18 | 0) == (i8 | 0)) {
  i19 = i18;
 } else {
  i8 = i17 + (i18 << 2) | 0;
  i17 = (HEAP32[i9 >> 2] | 0) + (i18 << 2) | 0;
  while (1) {
   i18 = HEAP32[i8 >> 2] | 0;
   HEAP32[i17 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i9 = i18 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i17 = i17 + 4 | 0;
   }
  }
  i19 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i19;
 return i1 | 0;
}
function __ZN7WebCoreL22createGridTrackBreadthEPNS_17CSSPrimitiveValueERKNS_13StyleResolver5StateERNS_10GridLengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = i1 + 4 | 0;
 do {
  if ((HEAP32[i14 >> 2] & 508 | 0) == 472) {
   if ((HEAP32[i1 + 8 >> 2] | 0) == 406) {
    HEAP32[i6 >> 2] = 0;
    HEAP8[i7 + 4 | 0] = 0;
    i15 = i7 + 5 | 0;
    HEAP8[i15] = 6;
    HEAP8[i7 + 6 | 0] = 0;
    i16 = i5;
    i17 = HEAP32[i6 >> 2] | 0;
    i18 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    if ((i17 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
     i19 = HEAP32[i16 + 4 >> 2] | 0;
     i20 = HEAP32[i16 >> 2] | 0;
    } else {
     i19 = i18;
     i20 = i17;
    }
    HEAPF64[i5 + 8 >> 3] = +0;
    HEAP32[i5 + 16 >> 2] = 0;
    i17 = i3;
    HEAP32[i17 >> 2] = i20;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i5 + 5 | 0] = 0;
    HEAPF64[i3 + 8 >> 3] = +0;
    HEAP32[i3 + 16 >> 2] = 0;
    if ((HEAP8[i15] | 0) != 10) {
     i21 = 1;
     STACKTOP = i4;
     return i21 | 0;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
    i21 = 1;
    STACKTOP = i4;
    return i21 | 0;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 407) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP8[i10 + 4 | 0] = 0;
   i15 = i10 + 5 | 0;
   HEAP8[i15] = 7;
   HEAP8[i10 + 6 | 0] = 0;
   i17 = i8;
   i18 = HEAP32[i9 >> 2] | 0;
   i16 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = i18;
   HEAP32[i17 + 4 >> 2] = i16;
   if ((i18 & 0 | 0) == 0 & (i16 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8 | 0);
    i22 = HEAP32[i17 + 4 >> 2] | 0;
    i23 = HEAP32[i17 >> 2] | 0;
   } else {
    i22 = i16;
    i23 = i18;
   }
   HEAPF64[i8 + 8 >> 3] = +0;
   HEAP32[i8 + 16 >> 2] = 0;
   i18 = i3;
   HEAP32[i18 >> 2] = i23;
   HEAP32[i18 + 4 >> 2] = i22;
   HEAP8[i8 + 5 | 0] = 0;
   HEAPF64[i3 + 8 >> 3] = +0;
   HEAP32[i3 + 16 >> 2] = 0;
   if ((HEAP8[i15] | 0) != 10) {
    i21 = 1;
    STACKTOP = i4;
    return i21 | 0;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
   i21 = 1;
   STACKTOP = i4;
   return i21 | 0;
  }
 } while (0);
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i1) | 0) << 16 >> 16 == 33) {
  d24 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i1);
  HEAP32[i3 + 16 >> 2] = 1;
  HEAPF64[i3 + 8 >> 3] = d24;
  i21 = 1;
  STACKTOP = i4;
  return i21 | 0;
 }
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi77EEENS_6LengthEPKNS_11RenderStyleES5_db(i13, i1, i10, HEAP32[i2 + 20 >> 2] | 0, +HEAPF32[(HEAP32[i10 + 24 >> 2] | 0) + 80 >> 2], 0);
 i10 = i11;
 i2 = HEAP32[i12 >> 2] | 0;
 i8 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i10 + 4 >> 2] = i8;
 if ((i2 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
  i25 = HEAP32[i10 + 4 >> 2] | 0;
  i26 = HEAP32[i10 >> 2] | 0;
 } else {
  i25 = i8;
  i26 = i2;
 }
 HEAPF64[i11 + 8 >> 3] = +0;
 HEAP32[i11 + 16 >> 2] = 0;
 i2 = i3;
 HEAP32[i2 >> 2] = i26;
 HEAP32[i2 + 4 >> 2] = i25;
 HEAP8[i11 + 5 | 0] = 0;
 HEAPF64[i3 + 8 >> 3] = +0;
 HEAP32[i3 + 16 >> 2] = 0;
 if ((HEAP8[i13 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 if ((HEAP8[i3 + 5 | 0] | 0) == 15) {
  i21 = 0;
  STACKTOP = i4;
  return i21 | 0;
 }
 i13 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i1) | 0;
 if (!((i13 - 3 & 65535) >>> 0 < 8 >>> 0 | i13 << 16 >> 16 == 108 | i13 << 16 >> 16 == 109)) {
  i21 = 1;
  STACKTOP = i4;
  return i21 | 0;
 }
 HEAP8[i3 + 4 | 0] = (HEAP32[i14 >> 2] | 0) >>> 10 & 1;
 i21 = 1;
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN7WebCoreL19createGridTrackSizeEPNS_8CSSValueERNS_13GridTrackSizeERKNS_13StyleResolver5StateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 48 | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i8 & 516096 | 0) != 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i10 = i1;
 do {
  if ((i8 & 508 | 0) == 400) {
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   HEAP8[i6 + 4 | 0] = 0;
   i12 = i6 + 5 | 0;
   HEAP8[i12] = 15;
   HEAP8[i6 + 6 | 0] = 0;
   i13 = i6 + 8 | 0;
   HEAPF64[i13 >> 3] = +0;
   i14 = i6 + 16 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP8[i7 + 4 | 0] = 0;
   i15 = i7 + 5 | 0;
   HEAP8[i15] = 15;
   HEAP8[i7 + 6 | 0] = 0;
   i16 = i7 + 8 | 0;
   HEAPF64[i16 >> 3] = +0;
   i17 = i7 + 16 | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if (__ZN7WebCoreL22createGridTrackBreadthEPNS_17CSSPrimitiveValueERKNS_13StyleResolver5StateERNS_10GridLengthE(HEAP32[i11 + 8 >> 2] | 0, i3, i6) | 0) {
     if (!(__ZN7WebCoreL22createGridTrackBreadthEPNS_17CSSPrimitiveValueERKNS_13StyleResolver5StateERNS_10GridLengthE(HEAP32[i11 + 12 >> 2] | 0, i3, i7) | 0)) {
      i18 = 0;
      break;
     }
     HEAP32[i2 >> 2] = 1;
     i19 = i2 + 8 | 0;
     i20 = i6;
     i21 = i19;
     i22 = HEAP32[i20 >> 2] | 0;
     i23 = HEAP32[i20 + 4 >> 2] | 0;
     HEAP32[i21 >> 2] = i22;
     HEAP32[i21 + 4 >> 2] = i23;
     if ((i22 & 0 | 0) == 0 & (i23 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i19 | 0);
     }
     HEAPF64[i2 + 16 >> 3] = +HEAPF64[i13 >> 3];
     HEAP32[i2 + 24 >> 2] = HEAP32[i14 >> 2];
     i19 = i2 + 32 | 0;
     i23 = i7;
     i22 = i19;
     i21 = HEAP32[i23 >> 2] | 0;
     i20 = HEAP32[i23 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = i21;
     HEAP32[i22 + 4 >> 2] = i20;
     if ((i21 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i19 | 0);
     }
     HEAPF64[i2 + 40 >> 3] = +HEAPF64[i16 >> 3];
     HEAP32[i2 + 48 >> 2] = HEAP32[i17 >> 2];
     i18 = 1;
    } else {
     i18 = 0;
    }
   } while (0);
   if ((HEAP8[i15] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7 | 0);
   }
   if ((HEAP8[i12] | 0) != 10) {
    i9 = i18;
    STACKTOP = i4;
    return i9 | 0;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i6 | 0);
   i9 = i18;
   STACKTOP = i4;
   return i9 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 HEAP8[i5 + 4 | 0] = 0;
 i18 = i5 + 5 | 0;
 HEAP8[i18] = 15;
 HEAP8[i5 + 6 | 0] = 0;
 i6 = i5 + 8 | 0;
 HEAPF64[i6 >> 3] = +0;
 i7 = i5 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 if (__ZN7WebCoreL22createGridTrackBreadthEPNS_17CSSPrimitiveValueERKNS_13StyleResolver5StateERNS_10GridLengthE(i10, i3, i5) | 0) {
  HEAP32[i2 >> 2] = 0;
  i3 = i2 + 8 | 0;
  i10 = i5;
  i1 = i3;
  i8 = HEAP32[i10 >> 2] | 0;
  i17 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  HEAP32[i1 + 4 >> 2] = i17;
  if ((i8 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
   i24 = HEAP32[i10 + 4 >> 2] | 0;
   i25 = HEAP32[i10 >> 2] | 0;
  } else {
   i24 = i17;
   i25 = i8;
  }
  d26 = +HEAPF64[i6 >> 3];
  HEAPF64[i2 + 16 >> 3] = d26;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i2 + 24 >> 2] = i8;
  i17 = i2 + 32 | 0;
  i10 = i17;
  HEAP32[i10 >> 2] = i25;
  HEAP32[i10 + 4 >> 2] = i24;
  if ((i25 & 0 | 0) == 0 & (i24 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i17 | 0);
   d27 = +HEAPF64[i6 >> 3];
   i28 = HEAP32[i7 >> 2] | 0;
  } else {
   d27 = d26;
   i28 = i8;
  }
  HEAPF64[i2 + 40 >> 3] = d27;
  HEAP32[i2 + 48 >> 2] = i28;
  i29 = 1;
 } else {
  i29 = 0;
 }
 if ((HEAP8[i18] | 0) != 10) {
  i9 = i29;
  STACKTOP = i4;
  return i9 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5 | 0);
 i9 = i29;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 if (i11 >>> 0 > 127 >>> 0) {
  i13 = i11 >>> 7;
 } else {
  i13 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i13 >>> 23) + ~i13 | 0;
 i11 = i3 << 12 ^ i3;
 i3 = i11 >>> 7 ^ i11;
 i11 = i3 << 2 ^ i3;
 i3 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i9 = i13;
 i13 = 0;
 while (1) {
  i14 = i9 & i8;
  i15 = i12 + (i14 * 20 & -1) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  if ((i17 | 0) == (-1 | 0)) {
   i18 = i15;
  } else if ((i17 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i10 >> 2] | 0) | 0) {
    i19 = 11;
    break;
   } else {
    i18 = i11;
   }
  }
  i16 = (i13 | 0) == 0 ? i3 : i13;
  i11 = i18;
  i9 = i16 + i14 | 0;
  i13 = i16;
 }
 if ((i19 | 0) == 11) {
  i19 = (HEAP32[i7 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 20 & -1) | 0;
  i13 = i1;
  HEAP32[i13 >> 2] = i15;
  HEAP32[i13 + 4 >> 2] = i19;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i20 = i15;
 } else {
  i15 = i6;
  _llvm_lifetime_start(16, 0, i15 | 0);
  _memset(i15 | 0, 0, 16) | 0;
  HEAP32[i11 >> 2] = 0;
  i6 = i11 + 4 | 0;
  HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  _llvm_lifetime_end(16, 0, i15 | 0);
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i20 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i15 = i11 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = i20 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i11;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = i20 + 4 | 0;
 i15 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 i15 = i2 + 12 | 0;
 i6 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
 HEAP32[i15 >> 2] = i6;
 i15 = i2 + 4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i6 << 1 | 0) < (i4 | 0)) {
  i21 = i20;
  i22 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i23 = 8;
  } else {
   i11 = i4 << 1;
   i23 = (i6 * 6 & -1 | 0) < (i11 | 0) ? i4 : i11;
  }
  i11 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i23, i20) | 0;
  i21 = i11;
  i22 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i7 >> 2] | 0) + (i22 * 20 & -1) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 20 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 | 0;
  i11 = 0;
  while (1) {
   _llvm_lifetime_start(16, 0, i10 | 0);
   _memset(i10 | 0, 0, 16) | 0;
   HEAP32[i9 + (i11 * 20 & -1) >> 2] = 0;
   i12 = i9 + (i11 * 20 & -1) + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   _llvm_lifetime_end(16, 0, i10 | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i13 = 0;
  i14 = i8;
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i4;
  return i13 | 0;
 } else {
  i15 = 0;
  i16 = 0;
 }
 while (1) {
  i9 = i8 + (i15 * 20 & -1) | 0;
  i2 = i9 | 0;
  i11 = HEAP32[i2 >> 2] | 0;
  i10 = i11;
  if ((i10 | 0) == (-1 | 0) | (i10 | 0) == 0) {
   i17 = i16;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   i18 = HEAP32[i11 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
   }
   i11 = (i19 >>> 23) + ~i19 | 0;
   i18 = i11 << 12 ^ i11;
   i11 = i18 >>> 7 ^ i18;
   i18 = i11 << 2 ^ i11;
   i11 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i20 = 0;
   i21 = 0;
   while (1) {
    i22 = i18 & i12;
    i23 = i10 + (i22 * 20 & -1) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 12;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i2 >> 2] | 0) | 0) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i20 | 0) == 0 ? i11 : i20;
    i18 = i24 + i22 | 0;
    i20 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 12) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   i20 = i28 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i11 = i18 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i20 >> 2] = i18;
   i18 = i28 + 4 | 0;
   i21 = i8 + (i15 * 20 & -1) + 4 | 0;
   HEAP32[i18 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   i17 = (i9 | 0) == (i3 | 0) ? i28 : i16;
  }
  i21 = i15 + 1 | 0;
  if ((i21 | 0) == (i6 | 0)) {
   break;
  } else {
   i15 = i21;
   i16 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i29 = 0;
 } else {
  i13 = i17;
  i14 = i8;
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i4;
  return i13 | 0;
 }
 while (1) {
  i1 = HEAP32[i8 + (i29 * 20 & -1) >> 2] | 0;
  i16 = i1;
  do {
   if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
    i15 = i1 | 0;
    i28 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i15 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i29 = i1;
  } else {
   i13 = i17;
   break;
  }
 }
 i14 = i8;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore13StyleResolver27checkForGenericFamilyChangeEPNS_11RenderStyleES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, d19 = +0, i20 = 0, d21 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(i2) | 0;
 i7 = i6 + 16 | 0;
 if ((HEAP32[i7 >> 2] & 64 | 0) != 0 | (i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(i3) | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = (i3 & 229376 | 0) == 131072;
 do {
  if (i7) {
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i10 = 0;
    break;
   }
   if ((HEAP32[i9 - 4 >> 2] | 0) != 1) {
    i10 = 0;
    break;
   }
   i10 = (HEAP32[i9 >> 2] | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0);
  } else {
   i10 = 0;
  }
 } while (0);
 i9 = i8 + 16 | 0;
 i11 = (HEAP32[i9 >> 2] & 229376 | 0) == 131072;
 do {
  if (i11) {
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i13 = 9;
    break;
   }
   if ((HEAP32[i12 - 4 >> 2] | 0) != 1) {
    i13 = 9;
    break;
   }
   if ((i10 ^ (HEAP32[i12 >> 2] | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0)) & (i7 | i11)) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i13 = 9;
  }
 } while (0);
 do {
  if ((i13 | 0) == 9) {
   if (i10 & (i7 | i11)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i11 = i3 >>> 28;
 L18 : do {
  if ((i11 | 0) == 0) {
   i3 = __ZNK7WebCore8Document8settingsEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
   do {
    if ((i3 | 0) == 0) {
     d14 = +1;
    } else {
     i10 = HEAP32[i3 + 80 >> 2] | 0;
     if ((i10 | 0) == 0) {
      d14 = +1;
      break;
     }
     i12 = HEAP32[i3 + 84 >> 2] | 0;
     if ((i12 | 0) == 0) {
      d14 = +1;
      break;
     }
     d14 = +(i10 | 0) / +(i12 | 0);
    }
   } while (0);
   do {
    if ((HEAP32[i9 >> 2] & 229376 | 0) == 131072) {
     i3 = HEAP32[i8 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i13 = 24;
      break;
     }
     if ((HEAP32[i3 - 4 >> 2] | 0) != 1) {
      i13 = 24;
      break;
     }
     d15 = +HEAPF32[i6 + 8 >> 2];
     if ((HEAP32[i3 >> 2] | 0) != (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0)) {
      d16 = d15;
      break;
     }
     d17 = d15 / d14;
     break L18;
    } else {
     i13 = 24;
    }
   } while (0);
   if ((i13 | 0) == 24) {
    d16 = +HEAPF32[i6 + 8 >> 2];
   }
   d17 = d14 * d16;
  } else {
   i3 = i11 + 44 | 0;
   do {
    if (i7) {
     i12 = HEAP32[i6 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i18 = 0;
      break;
     }
     if ((HEAP32[i12 - 4 >> 2] | 0) != 1) {
      i18 = 0;
      break;
     }
     i18 = (HEAP32[i12 >> 2] | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0);
    } else {
     i18 = 0;
    }
   } while (0);
   d17 = +__ZN7WebCore5Style18fontSizeForKeywordEjbRKNS_8DocumentE(i3, i18, HEAP32[i1 + 216 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore15FontDescriptionC2ERKS0_(i5, i6);
 do {
  if (d17 < 3.4028234663852886e+38) {
   if (d17 <= -3.4028234663852886e+38) {
    d19 = -3.4028234663852886e+38;
    break;
   }
   d19 = d17;
  } else {
   d19 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i5 + 8 >> 2] = d19;
 i6 = HEAP32[i1 + 308 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = (HEAP32[i6 + 12 >> 2] & 32 | 0) != 0;
 }
 d19 = +__ZN7WebCore5Style33computedFontSizeFromSpecifiedSizeEfbbPKNS_11RenderStyleERKNS_8DocumentE(d17, (HEAP32[i5 + 16 >> 2] & 64 | 0) != 0, i20, HEAP32[i1 + 312 >> 2] | 0, HEAP32[i1 + 216 >> 2] | 0);
 do {
  if (d19 < 3.4028234663852886e+38) {
   if (d19 <= -3.4028234663852886e+38) {
    d21 = -3.4028234663852886e+38;
    break;
   }
   d21 = d19;
  } else {
   d21 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i5 + 12 >> 2] = d21;
 __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i2, i5) | 0;
 __ZN7WebCore15FontDescriptionD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RPS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
   if ((i21 | 0) == 10) {
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
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF24codePointCompareLessThanERKNS_6StringES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) != 0;
 if ((i3 | 0) == 0) {
  if (!i2) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = ((HEAP32[i1 + 4 >> 2] | 0) != 0) << 31 >> 31;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 if (!i2) {
  i4 = (HEAP32[i3 + 4 >> 2] | 0) != 0 | 0;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 i2 = (HEAP32[i1 + 16 >> 2] & 32 | 0) != 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  if (i2) {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   i7 = HEAP32[i3 + 4 >> 2] | 0;
   i8 = i7 >>> 0 > i6 >>> 0 ? i6 : i7;
   L16 : do {
    if ((i8 | 0) == 0) {
     i9 = 28;
    } else {
     i10 = HEAP32[i1 + 8 >> 2] | 0;
     i11 = HEAP32[i3 + 8 >> 2] | 0;
     i12 = 0;
     while (1) {
      i13 = HEAPU8[i10] | 0;
      i14 = HEAPU16[i11 >> 1] | 0;
      if ((i13 | 0) != (i14 | 0)) {
       break;
      }
      i15 = i12 + 1 | 0;
      if (i15 >>> 0 < i8 >>> 0) {
       i10 = i10 + 1 | 0;
       i11 = i11 + 2 | 0;
       i12 = i15;
      } else {
       i9 = 28;
       break L16;
      }
     }
     i16 = i13 >>> 0 > i14 >>> 0 ? 1 : -1;
    }
   } while (0);
   do {
    if ((i9 | 0) == 28) {
     if ((i7 | 0) == (i6 | 0)) {
      i16 = 0;
      break;
     }
     i16 = i7 >>> 0 < i6 >>> 0 ? 1 : -1;
    }
   } while (0);
   i4 = -i16 | 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i16 = HEAP32[i3 + 4 >> 2] | 0;
  i6 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i16 >>> 0 < i6 >>> 0 ? i16 : i6;
  L28 : do {
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i3 + 8 >> 2] | 0;
    i14 = HEAP32[i1 + 8 >> 2] | 0;
    i13 = 0;
    while (1) {
     i17 = HEAP16[i9 >> 1] | 0;
     i18 = HEAP16[i14 >> 1] | 0;
     if (i17 << 16 >> 16 != i18 << 16 >> 16) {
      break;
     }
     i8 = i13 + 1 | 0;
     if (i8 >>> 0 < i7 >>> 0) {
      i9 = i9 + 2 | 0;
      i14 = i14 + 2 | 0;
      i13 = i8;
     } else {
      break L28;
     }
    }
    i4 = (i17 & 65535) >>> 0 > (i18 & 65535) >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i16 | 0) == (i6 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i16 >>> 0 > i6 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i16 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if (i2) {
  i2 = i6 >>> 0 < i3 >>> 0 ? i6 : i3;
  L56 : do {
   if ((i2 | 0) != 0) {
    i18 = i16;
    i17 = HEAP32[i1 + 8 >> 2] | 0;
    i7 = 0;
    while (1) {
     i19 = HEAP8[i18] | 0;
     i20 = HEAP8[i17] | 0;
     if (i19 << 24 >> 24 != i20 << 24 >> 24) {
      break;
     }
     i13 = i7 + 1 | 0;
     if (i13 >>> 0 < i2 >>> 0) {
      i18 = i18 + 1 | 0;
      i17 = i17 + 1 | 0;
      i7 = i13;
     } else {
      break L56;
     }
    }
    i4 = (i19 & 255) >>> 0 > (i20 & 255) >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i6 | 0) == (i3 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i6 >>> 0 > i3 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 } else {
  i20 = i3 >>> 0 > i6 >>> 0 ? i6 : i3;
  L43 : do {
   if ((i20 | 0) != 0) {
    i19 = i16;
    i2 = HEAP32[i1 + 8 >> 2] | 0;
    i7 = 0;
    while (1) {
     i21 = HEAPU8[i19] | 0;
     i22 = HEAPU16[i2 >> 1] | 0;
     if ((i21 | 0) != (i22 | 0)) {
      break;
     }
     i17 = i7 + 1 | 0;
     if (i17 >>> 0 < i20 >>> 0) {
      i19 = i19 + 1 | 0;
      i2 = i2 + 2 | 0;
      i7 = i17;
     } else {
      break L43;
     }
    }
    i4 = i21 >>> 0 > i22 >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i3 | 0) == (i6 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i3 >>> 0 < i6 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RNS_10PassRefPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore13StyleRuleBase7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i4 | 0)) {
  i27 = i13;
  i28 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i4 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_13CSSImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == 415 ? i19 : i17;
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
   if ((i21 | 0) == 10) {
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
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i10);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_PNS1_22CSSImageGeneratorValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == 415 ? i19 : i17;
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
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_19CSSCursorImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == 415 ? i19 : i17;
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
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14NinePieceImage15setMaskDefaultsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i1 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i13 = i1;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i12 >> 2] | 0);
  HEAP32[i12 >> 2] = i1;
  i13 = i1;
 }
 i1 = i13 + 12 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i8 + 4 | 0] = 0;
 i5 = i8 + 5 | 0;
 HEAP8[i5] = 3;
 HEAP8[i8 + 6 | 0] = 0;
 i14 = i6 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP8[i8 + 12 | 0] = 0;
 i15 = i8 + 13 | 0;
 HEAP8[i15] = 3;
 HEAP8[i8 + 14 | 0] = 0;
 i16 = i6 + 16 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i8 + 20 | 0] = 0;
 i17 = i8 + 21 | 0;
 HEAP8[i17] = 3;
 HEAP8[i8 + 22 | 0] = 0;
 i18 = i6 + 24 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP8[i8 + 28 | 0] = 0;
 i19 = i8 + 29 | 0;
 HEAP8[i19] = 3;
 HEAP8[i8 + 30 | 0] = 0;
 if ((i1 | 0) != (i8 | 0)) {
  i8 = i1;
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 4 >> 2] = i1;
  HEAP8[i5] = 0;
  i1 = i13 + 20 | 0;
  i8 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i1 + 4 >> 2] = i8;
  HEAP8[i15] = 0;
  i8 = i13 + 28 | 0;
  i1 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i8 + 4 >> 2] = i1;
  HEAP8[i17] = 0;
  i1 = i13 + 36 | 0;
  i13 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i1 + 4 >> 2] = i13;
  HEAP8[i19] = 0;
 }
 if ((HEAP8[i17] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
 }
 if ((HEAP8[i15] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
 }
 if ((HEAP8[i5] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 1) {
  i20 = i6;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i12 >> 2] | 0);
  HEAP32[i12 >> 2] = i6;
  i20 = i6;
 }
 i6 = i20 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] | 1;
 i6 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 1) {
  i21 = i6;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i3, i6);
  i6 = HEAP32[i3 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i12 >> 2] | 0);
  HEAP32[i12 >> 2] = i6;
  i21 = i6;
 }
 i6 = i21 + 44 | 0;
 _memset(i9 | 0, 0, 7) | 0;
 i12 = i9 + 8 | 0;
 _memset(i12 | 0, 0, 7) | 0;
 i3 = i9 + 16 | 0;
 _memset(i3 | 0, 0, 7) | 0;
 i20 = i9 + 24 | 0;
 _memset(i20 | 0, 0, 7) | 0;
 if ((i6 | 0) != (i11 | 0)) {
  i4 = i6;
  i6 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i4 + 4 >> 2] = i6;
  HEAP8[i11 + 5 | 0] = 0;
  i6 = i21 + 52 | 0;
  i4 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i6 + 4 >> 2] = i4;
  HEAP8[i11 + 13 | 0] = 0;
  i4 = i21 + 60 | 0;
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i4 + 4 >> 2] = i6;
  HEAP8[i11 + 21 | 0] = 0;
  i6 = i21 + 68 | 0;
  i21 = HEAP32[i20 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i6 + 4 >> 2] = i21;
  HEAP8[i11 + 29 | 0] = 0;
 }
 if ((HEAP8[i11 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 if ((HEAP8[i11 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
 }
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i2;
 return;
}
function __ZN3WTFeqINS_6StringEN7WebCore14GridCoordinateENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i6 * 20 & -1) | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i8 + (i10 * 20 & -1) | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i12 = i5;
  } else {
   i3 = i5;
   while (1) {
    i13 = HEAP32[i3 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i12 = i3;
     break L7;
    }
    i13 = i3 + 20 | 0;
    if ((i13 | 0) == (i1 | 0)) {
     i4 = 1;
     break;
    } else {
     i3 = i13;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i12 | 0) == (i1 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = i2 + 8 | 0;
 i2 = i12;
 i12 = i8;
 i6 = i10;
 i10 = i8;
 L16 : while (1) {
  if ((i12 | 0) == 0) {
   i14 = i6 * 20 & -1 | 0;
   i15 = 0;
   i16 = i6;
   i17 = i10;
  } else {
   i8 = HEAP32[i5 >> 2] | 0;
   i3 = i2 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i18 = HEAP32[i13 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   L25 : do {
    if ((i10 | 0) == 0) {
     i20 = 0;
    } else {
     i13 = (i19 >>> 23) + ~i19 | 0;
     i18 = i13 << 12 ^ i13;
     i13 = i18 >>> 7 ^ i18;
     i18 = i13 << 2 ^ i13;
     i13 = i18 >>> 20 ^ i18 | 1;
     i18 = i19;
     i21 = 0;
     while (1) {
      i22 = i18 & i8;
      i23 = i10 + (i22 * 20 & -1) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      i25 = i24;
      if ((i25 | 0) == 0) {
       i20 = 0;
       break L25;
      } else if ((i25 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i3 >> 2] | 0) | 0) {
        i20 = i23;
        break L25;
       }
      }
      i23 = (i21 | 0) == 0 ? i13 : i21;
      i18 = i23 + i22 | 0;
      i21 = i23;
     }
    }
   } while (0);
   i3 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i14 = (i20 | 0) == 0 ? i3 + (i8 * 20 & -1) | 0 : i20;
   i15 = i3;
   i16 = i8;
   i17 = i3;
  }
  if ((i14 | 0) == (i11 | 0)) {
   i4 = 0;
   i26 = 33;
   break;
  }
  if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i14 + 4 >> 2] | 0)) {
   i4 = 0;
   i26 = 34;
   break;
  }
  if ((HEAP32[i2 + 8 >> 2] | 0) != (HEAP32[i14 + 8 >> 2] | 0)) {
   i4 = 0;
   i26 = 35;
   break;
  }
  if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
   i4 = 0;
   i26 = 36;
   break;
  }
  if ((HEAP32[i2 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
   i4 = 0;
   i26 = 37;
   break;
  }
  i3 = i2 + 20 | 0;
  if ((i3 | 0) == (i1 | 0)) {
   i4 = 1;
   i26 = 38;
   break;
  } else {
   i27 = i3;
  }
  while (1) {
   i3 = HEAP32[i27 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i27 + 20 | 0;
   if ((i3 | 0) == (i1 | 0)) {
    i4 = 1;
    i26 = 40;
    break L16;
   } else {
    i27 = i3;
   }
  }
  if ((i27 | 0) == (i1 | 0)) {
   i4 = 1;
   i26 = 39;
   break;
  } else {
   i2 = i27;
   i12 = i15;
   i6 = i16;
   i10 = i17;
  }
 }
 if ((i26 | 0) == 33) {
  return i4 | 0;
 } else if ((i26 | 0) == 34) {
  return i4 | 0;
 } else if ((i26 | 0) == 35) {
  return i4 | 0;
 } else if ((i26 | 0) == 36) {
  return i4 | 0;
 } else if ((i26 | 0) == 37) {
  return i4 | 0;
 } else if ((i26 | 0) == 38) {
  return i4 | 0;
 } else if ((i26 | 0) == 39) {
  return i4 | 0;
 } else if ((i26 | 0) == 40) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver19initializeFontStyleEPNS_8SettingsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i6 + 8;
 HEAP32[i6 >> 2] = 1;
 HEAP32[(HEAP32[i7 >> 2] | 0) - 4 >> 2] = 1;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i6 + (HEAP32[i6 - 4 >> 2] << 2) | 0;
 }
 _memset(i6 | 0, 0, i8 - i6 | 0) | 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i6 = i4 + 8 | 0;
 HEAPF32[i6 >> 2] = +0;
 i8 = i4 + 12 | 0;
 HEAPF32[i8 >> 2] = +0;
 i9 = i4 + 16 | 0;
 i10 = i4 + 20 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -4096;
 i10 = (__ZNK7WebCore8Settings17fontRenderingModeEv(i2) | 0) << 19 & 524288 | 33152;
 HEAP32[i9 >> 2] = i10;
 i11 = i1 + 216 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((HEAP8[i12 + 660 | 0] & 1) == 0) {
  i13 = (((HEAPU8[i2 + 194 | 0] | 0) >>> 2 & 1 ^ 1) & 255) << 18;
 } else {
  i13 = 262144;
 }
 HEAP32[i9 >> 2] = i10 | i13;
 i13 = HEAP32[(__ZNK7WebCore8Settings18standardFontFamilyE11UScriptCode(__ZNK7WebCore8Document8settingsEv(i12) | 0, 0) | 0) >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    break;
   }
   i12 = HEAP32[i7 >> 2] | 0;
   i10 = i13 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i10 = i12 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i13 & 268435455 | 1073741824;
 d14 = +__ZN7WebCore5Style18fontSizeForKeywordEjbRKNS_8DocumentE(48, 0, HEAP32[i11 >> 2] | 0);
 do {
  if (d14 < 3.4028234663852886e+38) {
   if (d14 <= -3.4028234663852886e+38) {
    d15 = -3.4028234663852886e+38;
    break;
   }
   d15 = d14;
  } else {
   d15 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i6 >> 2] = d15;
 i6 = HEAP32[i1 + 308 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = (HEAP32[i6 + 12 >> 2] & 32 | 0) != 0;
 }
 i6 = i1 + 312 | 0;
 d15 = +__ZN7WebCore5Style33computedFontSizeFromSpecifiedSizeEfbbPKNS_11RenderStyleERKNS_8DocumentE(d14, (i13 & 64 | 0) != 0, i16, HEAP32[i6 >> 2] | 0, HEAP32[i11 >> 2] | 0);
 do {
  if (d15 < 3.4028234663852886e+38) {
   if (d15 <= -3.4028234663852886e+38) {
    d17 = -3.4028234663852886e+38;
    break;
   }
   d17 = d15;
  } else {
   d17 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i8 >> 2] = d17;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP8[i5 + 4 | 0] = 0;
 i11 = i5 + 5 | 0;
 HEAP8[i11] = 2;
 HEAP8[i5 + 6 | 0] = 1;
 HEAPF32[i5 >> 2] = +-100;
 __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i8, i5);
 if ((HEAP8[i11] | 0) != 10) {
  i18 = i1 + 388 | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = HEAP32[i6 >> 2] | 0;
  i20 = __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i19, i4) | 0;
  i21 = i20 & 1;
  i22 = i1 + 392 | 0;
  i23 = HEAP8[i22] | 0;
  i24 = i23 & 1;
  i25 = i24 | i21;
  HEAP8[i22] = i25;
  __ZN7WebCore15FontDescriptionD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 i18 = i1 + 388 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = HEAP32[i6 >> 2] | 0;
 i20 = __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i19, i4) | 0;
 i21 = i20 & 1;
 i22 = i1 + 392 | 0;
 i23 = HEAP8[i22] | 0;
 i24 = i23 & 1;
 i25 = i24 | i21;
 HEAP8[i22] = i25;
 __ZN7WebCore15FontDescriptionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleResolverD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 240 | 0;
 __ZN7WebCore15CSSFontSelector13clearDocumentEv(HEAP32[i2 >> 2] | 0);
 i3 = HEAP32[i1 + 552 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore29StyleCustomFilterProgramCacheD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore13StyleResolver5StateD2Ev(i1 + 308 | 0);
 __ZN7WebCore22InspectorCSSOMWrappersD2Ev(i1 + 268 | 0);
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3 | 0);
 }
 i3 = i1 + 252 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 244 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore13MediaQueryExpD1Ev(i6 | 0);
    __ZN3WTF8fastFreeEPv(i6);
   }
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 248 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3 | 0);
 }
 i3 = i1 + 228 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i2 = i1 + 220 | 0;
 if ((i7 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  i4 = i5 + (i7 << 5) | 0;
  i7 = i5;
  while (1) {
   i5 = i7 + 12 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i7 + 4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if (!((i7 + 16 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   i7 = i7 + 32 | 0;
   if ((i7 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 224 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore19MediaQueryEvaluatorD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 152 | 0);
 i3 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 132 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i2 = 0;
   while (1) {
    if ((HEAP32[i3 + (i2 * 48 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i3 + (i2 * 48 & -1) + 4 | 0);
    }
    i2 = i2 + 1 | 0;
    if ((i2 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore16DocumentRuleSetsD1Ev(i8);
  return;
 }
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i2 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i2 << 3) >> 2] | 0) != -1) {
     i7 = HEAP32[i3 + (i2 << 3) + 4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i7 | 0);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i2 = i2 + 1 | 0;
   if ((i2 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i1 | 0;
 __ZN7WebCore16DocumentRuleSetsD1Ev(i8);
 return;
}
function __ZN7WebCore13StyleResolverD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 240 | 0;
 __ZN7WebCore15CSSFontSelector13clearDocumentEv(HEAP32[i2 >> 2] | 0);
 i3 = HEAP32[i1 + 552 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore29StyleCustomFilterProgramCacheD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore13StyleResolver5StateD2Ev(i1 + 308 | 0);
 __ZN7WebCore22InspectorCSSOMWrappersD2Ev(i1 + 268 | 0);
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3 | 0);
 }
 i3 = i1 + 252 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 244 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore13MediaQueryExpD1Ev(i6 | 0);
    __ZN3WTF8fastFreeEPv(i6);
   }
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 248 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3 | 0);
 }
 i3 = i1 + 228 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i2 = i1 + 220 | 0;
 if ((i7 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  i4 = i5 + (i7 << 5) | 0;
  i7 = i5;
  while (1) {
   i5 = i7 + 12 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i7 + 4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if (!((i7 + 16 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   i7 = i7 + 32 | 0;
   if ((i7 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 224 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore19MediaQueryEvaluatorD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 152 | 0);
 i3 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 132 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i2 = 0;
   while (1) {
    if ((HEAP32[i3 + (i2 * 48 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i3 + (i2 * 48 & -1) + 4 | 0);
    }
    i2 = i2 + 1 | 0;
    if ((i2 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore16DocumentRuleSetsD1Ev(i8);
  return;
 }
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i2 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i2 << 3) >> 2] | 0) != -1) {
     i7 = HEAP32[i3 + (i2 << 3) + 4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i7 | 0);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i2 = i2 + 1 | 0;
   if ((i2 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i1 | 0;
 __ZN7WebCore16DocumentRuleSetsD1Ev(i8);
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore13StyleRuleBase7destroyEv(i17 | 0);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
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
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore13StyleRuleBase7destroyEv(i1 | 0);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
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
function __ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i17 | 0);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
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
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i1 | 0);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
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
function __ZN7WebCore13StyleResolver16checkRegionStyleEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 104 | 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i11 + 232 >> 2] | 0;
 L1 : do {
  if ((i12 | 0) != 0) {
   i13 = (i2 | 0) == 0;
   i14 = i2 + 20 | 0;
   i15 = i5 | 0;
   i16 = i5 + 4 | 0;
   i17 = i5 + 8 | 0;
   i18 = 0;
   i19 = i11;
   i20 = i12;
   L3 : while (1) {
    if (i20 >>> 0 <= i18 >>> 0) {
     i21 = 4;
     break;
    }
    i22 = HEAP32[(HEAP32[i19 + 224 >> 2] | 0) + (i18 << 3) >> 2] | 0;
    if (!((i22 | 0) == 0 | i13)) {
     __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i4, HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0, 2);
     i23 = i22;
     while (1) {
      HEAP32[i15 >> 2] = i23;
      HEAP32[i16 >> 2] = i2;
      _memset(i17 | 0, 0, 27) | 0;
      HEAP32[i6 >> 2] = 0;
      if ((__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i4, i5, i6) | 0) == 0) {
       i24 = 1;
       i21 = 25;
       break L3;
      } else {
       i25 = i23;
      }
      while (1) {
       i26 = HEAP8[i25 + 2 | 0] | 0;
       i25 = i25 + 8 | 0;
       if ((i26 & 2) != 0) {
        break;
       }
      }
      i23 = (i26 & 1) != 0 ? 0 : i25;
      if ((i23 | 0) == 0) {
       break;
      }
     }
    }
    i23 = i18 + 1 | 0;
    if (i23 >>> 0 >= i12 >>> 0) {
     break L1;
    }
    i22 = HEAP32[i10 >> 2] | 0;
    i18 = i23;
    i19 = i22;
    i20 = HEAP32[i22 + 232 >> 2] | 0;
   }
   if ((i21 | 0) == 25) {
    STACKTOP = i3;
    return i24 | 0;
   } else if ((i21 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i10 = i1 + 4 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i24 = 0;
  STACKTOP = i3;
  return i24 | 0;
 }
 i12 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i24 = 0;
  STACKTOP = i3;
  return i24 | 0;
 }
 i25 = (i2 | 0) == 0;
 i26 = i2 + 20 | 0;
 i6 = i8 | 0;
 i5 = i8 + 4 | 0;
 i4 = i8 + 8 | 0;
 i11 = 0;
 i20 = i1;
 i1 = i12;
 L25 : while (1) {
  if (i1 >>> 0 <= i11 >>> 0) {
   i21 = 16;
   break;
  }
  i19 = HEAP32[(HEAP32[i20 + 224 >> 2] | 0) + (i11 << 3) >> 2] | 0;
  if (!((i19 | 0) == 0 | i25)) {
   __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i7, HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] | 0, 2);
   i18 = i19;
   while (1) {
    HEAP32[i6 >> 2] = i18;
    HEAP32[i5 >> 2] = i2;
    _memset(i4 | 0, 0, 27) | 0;
    HEAP32[i9 >> 2] = 0;
    if ((__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i7, i8, i9) | 0) == 0) {
     i24 = 1;
     i21 = 26;
     break L25;
    } else {
     i27 = i18;
    }
    while (1) {
     i28 = HEAP8[i27 + 2 | 0] | 0;
     i27 = i27 + 8 | 0;
     if ((i28 & 2) != 0) {
      break;
     }
    }
    i18 = (i28 & 1) != 0 ? 0 : i27;
    if ((i18 | 0) == 0) {
     break;
    }
   }
  }
  i18 = i11 + 1 | 0;
  if (i18 >>> 0 >= i12 >>> 0) {
   i24 = 0;
   i21 = 27;
   break;
  }
  i19 = HEAP32[i10 >> 2] | 0;
  i11 = i18;
  i20 = i19;
  i1 = HEAP32[i19 + 232 >> 2] | 0;
 }
 if ((i21 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i21 | 0) == 26) {
  STACKTOP = i3;
  return i24 | 0;
 } else if ((i21 | 0) == 27) {
  STACKTOP = i3;
  return i24 | 0;
 }
 return 0;
}
function __ZN7WebCore24StyleCustomFilterProgram6createENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i10 = i9 | 0;
 i11 = i9 + 48 | 0;
 i12 = i9 + 56 | 0;
 i13 = i9 + 104 | 0;
 i14 = __ZN3WTF10fastMallocEj(172) | 0;
 i15 = i10 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 HEAP32[i15 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i17 = i16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 HEAP8[i10 + 4 | 0] = HEAP8[i2 + 4 | 0] & 3;
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i10 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i10 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i10 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i10 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i10 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i10 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = i11 | 0;
 i17 = i3 | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i12 | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 HEAP8[i12 + 4 | 0] = HEAP8[i4 + 4 | 0] & 3;
 HEAP32[i12 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i12 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i12 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i12 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i12 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i12 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i12 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i12 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i12 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 i4 = i13 | 0;
 i16 = i5 | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore24StyleCustomFilterProgramC2ENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i14, i10, i11, i12, i13, i6, i7, i8);
 HEAP32[i1 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 + 4 | 0;
   i1 = i4 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i2 = i14 + 4 | 0;
   i8 = i2 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i2 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i15 = i14 | 0;
 i3 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i15 >> 2] = i3;
  STACKTOP = i9;
  return;
 }
}
function __ZN3WTFeqIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEEbRKNS_6VectorIT_XT0_ET1_EES9_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 } else {
  i6 = 0;
 }
 L6 : while (1) {
  if ((HEAP32[i5 + (i6 * 56 & -1) >> 2] | 0) != (HEAP32[i1 + (i6 * 56 & -1) >> 2] | 0)) {
   i4 = 0;
   i7 = 40;
   break;
  }
  i2 = i5 + (i6 * 56 & -1) + 8 | 0;
  i8 = i1 + (i6 * 56 & -1) + 8 | 0;
  if ((HEAP32[i5 + (i6 * 56 & -1) + 24 >> 2] | 0) != (HEAP32[i1 + (i6 * 56 & -1) + 24 >> 2] | 0)) {
   i4 = 0;
   i7 = 41;
   break;
  }
  if (+HEAPF64[i5 + (i6 * 56 & -1) + 16 >> 3] != +HEAPF64[i1 + (i6 * 56 & -1) + 16 >> 3]) {
   i4 = 0;
   i7 = 42;
   break;
  }
  i9 = i2 | 0;
  i10 = i8 | 0;
  i11 = HEAP8[i5 + (i6 * 56 & -1) + 13 | 0] | 0;
  if (i11 << 24 >> 24 != (HEAP8[i1 + (i6 * 56 & -1) + 13 | 0] | 0)) {
   i4 = 0;
   i7 = 43;
   break;
  }
  if (((HEAP8[i1 + (i6 * 56 & -1) + 12 | 0] ^ HEAP8[i5 + (i6 * 56 & -1) + 12 | 0]) & 1) != 0) {
   i4 = 0;
   i7 = 45;
   break;
  }
  do {
   if (i11 << 24 >> 24 != 15) {
    if ((HEAP8[i5 + (i6 * 56 & -1) + 14 | 0] & 1) == 0) {
     d12 = +(HEAP32[i2 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i2 >> 2];
    }
    if ((HEAP8[i1 + (i6 * 56 & -1) + 14 | 0] & 1) == 0) {
     d13 = +(HEAP32[i8 >> 2] | 0);
    } else {
     d13 = +HEAPF32[i8 >> 2];
    }
    if (d12 == d13) {
     break;
    }
    if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i10) | 0)) {
     i4 = 0;
     i7 = 34;
     break L6;
    }
   }
  } while (0);
  i10 = i5 + (i6 * 56 & -1) + 32 | 0;
  i9 = i1 + (i6 * 56 & -1) + 32 | 0;
  if ((HEAP32[i5 + (i6 * 56 & -1) + 48 >> 2] | 0) != (HEAP32[i1 + (i6 * 56 & -1) + 48 >> 2] | 0)) {
   i4 = 0;
   i7 = 33;
   break;
  }
  if (+HEAPF64[i5 + (i6 * 56 & -1) + 40 >> 3] != +HEAPF64[i1 + (i6 * 56 & -1) + 40 >> 3]) {
   i4 = 0;
   i7 = 32;
   break;
  }
  i8 = i10 | 0;
  i2 = i9 | 0;
  i11 = HEAP8[i5 + (i6 * 56 & -1) + 37 | 0] | 0;
  if (i11 << 24 >> 24 != (HEAP8[i1 + (i6 * 56 & -1) + 37 | 0] | 0)) {
   i4 = 0;
   i7 = 37;
   break;
  }
  if (((HEAP8[i1 + (i6 * 56 & -1) + 36 | 0] ^ HEAP8[i5 + (i6 * 56 & -1) + 36 | 0]) & 1) != 0) {
   i4 = 0;
   i7 = 36;
   break;
  }
  do {
   if (i11 << 24 >> 24 != 15) {
    if ((HEAP8[i5 + (i6 * 56 & -1) + 38 | 0] & 1) == 0) {
     d14 = +(HEAP32[i10 >> 2] | 0);
    } else {
     d14 = +HEAPF32[i10 >> 2];
    }
    if ((HEAP8[i1 + (i6 * 56 & -1) + 38 | 0] & 1) == 0) {
     d15 = +(HEAP32[i9 >> 2] | 0);
    } else {
     d15 = +HEAPF32[i9 >> 2];
    }
    if (d14 == d15) {
     break;
    }
    if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i8, i2) | 0)) {
     i4 = 0;
     i7 = 35;
     break L6;
    }
   }
  } while (0);
  i2 = i6 + 1 | 0;
  if (i2 >>> 0 < i3 >>> 0) {
   i6 = i2;
  } else {
   i4 = 1;
   i7 = 44;
   break;
  }
 }
 if ((i7 | 0) == 32) {
  return i4 | 0;
 } else if ((i7 | 0) == 33) {
  return i4 | 0;
 } else if ((i7 | 0) == 34) {
  return i4 | 0;
 } else if ((i7 | 0) == 35) {
  return i4 | 0;
 } else if ((i7 | 0) == 36) {
  return i4 | 0;
 } else if ((i7 | 0) == 37) {
  return i4 | 0;
 } else if ((i7 | 0) == 40) {
  return i4 | 0;
 } else if ((i7 | 0) == 41) {
  return i4 | 0;
 } else if ((i7 | 0) == 42) {
  return i4 | 0;
 } else if ((i7 | 0) == 43) {
  return i4 | 0;
 } else if ((i7 | 0) == 44) {
  return i4 | 0;
 } else if ((i7 | 0) == 45) {
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
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
  if ((i13 | 0) == 415 | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == 415 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != 415) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTFeqINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESH_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i6 << 4) | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i8 + (i10 << 4) | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i12 = i5;
  } else {
   i3 = i5;
   while (1) {
    i13 = HEAP32[i3 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i12 = i3;
     break L7;
    }
    i13 = i3 + 16 | 0;
    if ((i13 | 0) == (i1 | 0)) {
     i4 = 1;
     break;
    } else {
     i3 = i13;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i12 | 0) == (i1 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = i2 + 8 | 0;
 i2 = i12;
 i12 = i8;
 i6 = i10;
 i10 = i8;
 L16 : while (1) {
  if ((i12 | 0) == 0) {
   i14 = i6 << 4 | 0;
   i15 = 0;
   i16 = i6;
   i17 = i10;
  } else {
   i8 = HEAP32[i5 >> 2] | 0;
   i3 = i2 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i18 = HEAP32[i13 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   L25 : do {
    if ((i10 | 0) == 0) {
     i20 = 0;
    } else {
     i13 = (i19 >>> 23) + ~i19 | 0;
     i18 = i13 << 12 ^ i13;
     i13 = i18 >>> 7 ^ i18;
     i18 = i13 << 2 ^ i13;
     i13 = i18 >>> 20 ^ i18 | 1;
     i18 = i19;
     i21 = 0;
     while (1) {
      i22 = i18 & i8;
      i23 = i10 + (i22 << 4) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      i25 = i24;
      if ((i25 | 0) == 0) {
       i20 = 0;
       break L25;
      } else if ((i25 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i3 >> 2] | 0) | 0) {
        i20 = i23;
        break L25;
       }
      }
      i23 = (i21 | 0) == 0 ? i13 : i21;
      i18 = i23 + i22 | 0;
      i21 = i23;
     }
    }
   } while (0);
   i3 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i14 = (i20 | 0) == 0 ? i3 + (i8 << 4) | 0 : i20;
   i15 = i3;
   i16 = i8;
   i17 = i3;
  }
  if ((i14 | 0) == (i11 | 0)) {
   i4 = 0;
   i26 = 35;
   break;
  }
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i3 | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
   i4 = 0;
   i26 = 36;
   break;
  }
  if ((_memcmp(HEAP32[i2 + 4 >> 2] | 0, HEAP32[i14 + 4 >> 2] | 0, i3 << 2 | 0) | 0) != 0) {
   i4 = 0;
   i26 = 33;
   break;
  }
  i3 = i2 + 16 | 0;
  if ((i3 | 0) == (i1 | 0)) {
   i4 = 1;
   i26 = 31;
   break;
  } else {
   i27 = i3;
  }
  while (1) {
   i3 = HEAP32[i27 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i27 + 16 | 0;
   if ((i3 | 0) == (i1 | 0)) {
    i4 = 1;
    i26 = 32;
    break L16;
   } else {
    i27 = i3;
   }
  }
  if ((i27 | 0) == (i1 | 0)) {
   i4 = 1;
   i26 = 34;
   break;
  } else {
   i2 = i27;
   i12 = i15;
   i6 = i16;
   i10 = i17;
  }
 }
 if ((i26 | 0) == 31) {
  return i4 | 0;
 } else if ((i26 | 0) == 32) {
  return i4 | 0;
 } else if ((i26 | 0) == 33) {
  return i4 | 0;
 } else if ((i26 | 0) == 34) {
  return i4 | 0;
 } else if ((i26 | 0) == 35) {
  return i4 | 0;
 } else if ((i26 | 0) == 36) {
  return i4 | 0;
 }
 return 0;
}
function __ZNSt3__118__insertion_sort_3IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i1) | 0;
 i9 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i7) | 0;
 do {
  if (i8) {
   i10 = i1 | 0;
   if (i9) {
    i11 = i6 | 0;
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i11 >> 2] = i12;
    break;
   }
   i12 = i7 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i11;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i7) | 0)) {
    break;
   }
   i11 = i6 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
  } else {
   if (!i9) {
    break;
   }
   i10 = i7 | 0;
   i11 = i6 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i12;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i7, i1) | 0)) {
    break;
   }
   i12 = i1 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i11;
  }
 } while (0);
 i7 = i1 + 12 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 | 0;
 i8 = i6;
 i6 = i7;
 while (1) {
  do {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i6, i8) | 0) {
    i7 = i6 | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i9 >> 2] = i11;
    i11 = i8;
    i7 = i6;
    while (1) {
     i13 = i11 | 0;
     i10 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i12 = i7 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = i10;
     do {
      if ((i14 | 0) != 0) {
       i10 = i14 + 4 | 0;
       i12 = i10 | 0;
       i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i15 | 0) != 0) {
        HEAP32[i12 >> 2] = i15;
        break;
       }
       i15 = i10 - 4 | 0;
       if ((i15 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
      }
     } while (0);
     if ((i11 | 0) == (i1 | 0)) {
      break;
     }
     i14 = i11 - 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i5, i14) | 0) {
      i7 = i11;
      i11 = i14;
     } else {
      break;
     }
    }
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i7 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i11;
    do {
     if ((i7 | 0) != 0) {
      i11 = i7 + 4 | 0;
      i14 = i11 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i14 >> 2] = i15;
       break;
      }
      i15 = i11 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
     }
    } while (0);
    i7 = HEAP32[i9 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i15 = i7 + 4 | 0;
    i7 = i15 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i7 >> 2] = i11;
     break;
    }
    i11 = i15 - 4 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
   }
  } while (0);
  i11 = i6 + 4 | 0;
  if ((i11 | 0) == (i2 | 0)) {
   break;
  } else {
   i8 = i6;
   i6 = i11;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_EaSERKSG_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 4) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 16 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 16 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 16 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i12 + (i4 << 4) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != -1) {
     i5 = i12 + (i4 << 4) + 12 | 0;
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      HEAP32[i5 >> 2] = 0;
     }
     i5 = i12 + (i4 << 4) + 4 | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i14 = i9;
     } else {
      HEAP32[i5 >> 2] = 0;
      HEAP32[i12 + (i4 << 4) + 8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
      i14 = HEAP32[i8 >> 2] | 0;
     }
     if ((i14 | 0) == 0) {
      break;
     }
     i6 = i14 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_(i2, 0) | 0;
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
  i13 = i7 + (i12 << 4) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 16) | 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
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
 i13 = i18 + 12 | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i9;
 i9 = i18 + 4 | 0;
 i8 = i4 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i13;
 i13 = i18 + 8 | 0;
 i8 = i4 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i8;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __Z12compareEqualIN7WebCore13GridTrackSizeES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i4 + 8 | 0;
 i7 = i2 + 8 | 0;
 i8 = i6;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i8 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6 | 0);
 }
 i10 = i4 + 16 | 0;
 HEAPF64[i10 >> 3] = +HEAPF64[i2 + 16 >> 3];
 i9 = i4 + 24 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 24 >> 2];
 i8 = i4 + 32 | 0;
 i7 = i2 + 32 | 0;
 i11 = i8;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i11 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8 | 0);
 }
 i13 = i4 + 40 | 0;
 HEAPF64[i13 >> 3] = +HEAPF64[i2 + 40 >> 3];
 i12 = i4 + 48 | 0;
 i11 = HEAP32[i2 + 48 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 L7 : do {
  if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
   i2 = i1 + 8 | 0;
   if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i9 >> 2] | 0)) {
    i14 = 0;
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +HEAPF64[i10 >> 3]) {
    i14 = 0;
    break;
   }
   i7 = i2 | 0;
   i15 = i6 | 0;
   i16 = HEAP8[i1 + 13 | 0] | 0;
   if (i16 << 24 >> 24 != (HEAP8[i4 + 13 | 0] | 0)) {
    i14 = 0;
    break;
   }
   if (((HEAP8[i4 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
    i14 = 0;
    break;
   }
   do {
    if (i16 << 24 >> 24 == 15) {
     i17 = i11;
    } else {
     if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
      d18 = +(HEAP32[i2 >> 2] | 0);
     } else {
      d18 = +HEAPF32[i2 >> 2];
     }
     if ((HEAP8[i4 + 14 | 0] & 1) == 0) {
      d19 = +(HEAP32[i6 >> 2] | 0);
     } else {
      d19 = +HEAPF32[i6 >> 2];
     }
     if (d18 == d19) {
      i17 = i11;
      break;
     }
     if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i15) | 0)) {
      i14 = 0;
      break L7;
     }
     i17 = HEAP32[i12 >> 2] | 0;
    }
   } while (0);
   i15 = i1 + 32 | 0;
   if ((HEAP32[i1 + 48 >> 2] | 0) != (i17 | 0)) {
    i14 = 0;
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +HEAPF64[i13 >> 3]) {
    i14 = 0;
    break;
   }
   i7 = HEAP8[i1 + 37 | 0] | 0;
   if (i7 << 24 >> 24 != (HEAP8[i4 + 37 | 0] | 0)) {
    i14 = 0;
    break;
   }
   if (((HEAP8[i4 + 36 | 0] ^ HEAP8[i1 + 36 | 0]) & 1) != 0) {
    i14 = 0;
    break;
   }
   if (i7 << 24 >> 24 == 15) {
    i14 = 1;
    break;
   }
   if ((HEAP8[i1 + 38 | 0] & 1) == 0) {
    d20 = +(HEAP32[i15 >> 2] | 0);
   } else {
    d20 = +HEAPF32[i15 >> 2];
   }
   if ((HEAP8[i4 + 38 | 0] & 1) == 0) {
    d21 = +(HEAP32[i8 >> 2] | 0);
   } else {
    d21 = +HEAPF32[i8 >> 2];
   }
   if (d20 == d21) {
    i14 = 1;
    break;
   }
   i14 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i15 | 0, i8 | 0) | 0;
  } else {
   i14 = 0;
  }
 } while (0);
 if ((HEAP8[i4 + 37 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 32 | 0);
 }
 if ((HEAP8[i4 + 13 | 0] | 0) != 10) {
  STACKTOP = i3;
  return i14 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 8 | 0);
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN7WebCore30CustomFilterTransformParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i2 | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = i8;
   if ((i2 | 0) != 0) {
    break;
   }
   STACKTOP = i6;
   return;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i9 = i3 + 16 | 0;
   i10 = i2 + 16 | 0;
   if (__ZNK7WebCore19TransformOperationseqERKS0_(i9, i10) | 0) {
    HEAP32[i1 >> 2] = i8;
    i11 = i2 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    STACKTOP = i6;
    return;
   }
   i11 = __ZN3WTF10fastMallocEj(28) | 0;
   i12 = i11 + 4 | 0;
   HEAP32[i12 >> 2] = 1;
   i13 = i11;
   HEAP32[i13 >> 2] = H_BASE + 360;
   i14 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i11 + 8 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i15 = i14 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   HEAP32[i11 + 12 >> 2] = 4;
   HEAP32[i13 >> 2] = H_BASE + 232;
   i13 = i11 + 16 | 0;
   __ZN7WebCore19TransformOperationsC1Eb(i13, 0);
   do {
    if ((HEAP32[i3 + 24 >> 2] | 0) == 0) {
     i16 = 23;
    } else {
     if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
      i16 = 23;
      break;
     }
     __ZNK7WebCore19TransformOperations5blendERKS0_dRKNS_10LayoutSizeE(i7, i10, i9, d4, i5);
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i13, i7 | 0) | 0;
     i15 = i7 + 8 | 0;
     i14 = HEAP32[i15 >> 2] | 0;
     i17 = i7 | 0;
     if ((i14 | 0) != 0) {
      i18 = HEAP32[i17 >> 2] | 0;
      i19 = i18 + (i14 << 2) | 0;
      i14 = i18;
      while (1) {
       i18 = HEAP32[i14 >> 2] | 0;
       do {
        if ((i18 | 0) != 0) {
         i20 = i18 + 4 | 0;
         i21 = i20 | 0;
         i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
         if ((i22 | 0) != 0) {
          HEAP32[i21 >> 2] = i22;
          break;
         }
         i22 = i20 - 4 | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
        }
       } while (0);
       i14 = i14 + 4 | 0;
       if ((i14 | 0) == (i19 | 0)) {
        break;
       }
      }
      HEAP32[i15 >> 2] = 0;
     }
     i19 = HEAP32[i17 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     HEAP32[i17 >> 2] = 0;
     HEAP32[i7 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i19);
    }
   } while (0);
   if ((i16 | 0) == 23) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i13, (d4 > +.5 ? i10 : i9) | 0) | 0;
   }
   i19 = i11;
   HEAP32[i1 >> 2] = i19;
   if ((i11 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i14 + 1;
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i19);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i12 >> 2] = i14;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13StyleResolver27addToMatchedPropertiesCacheEPKNS_11RenderStyleES3_jRKNS0_11MatchResultE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 56 | 0;
 i10 = i6 + 64 | 0;
 i11 = i6 + 72 | 0;
 HEAP32[i7 >> 2] = i4;
 i4 = i1 + 124 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 do {
  if (i12 >>> 0 > 99 >>> 0) {
   if (+HEAPF64[i1 + 160 >> 3] != +0) {
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i1 + 152 | 0, +60, +0);
  }
 } while (0);
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i4 = i8 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i13 = i8 + 12 | 0;
 _memset(i13 | 0, -1 | 0, 24) | 0;
 i14 = i8 + 36 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i8 + 40 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = HEAP32[i5 >> 2] | 0;
 i17 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = 0;
 } else {
  __ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i8 | 0, i17 >>> 0 < 16 >>> 0 ? 16 : i17);
  i18 = HEAP32[i4 >> 2] | 0;
 }
 if (i17 >>> 0 < i18 >>> 0) {
  _WTFCrash();
 }
 i19 = HEAP32[i12 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i12 = 0;
  while (1) {
   i20 = i12 + i18 | 0;
   i21 = HEAP32[i16 + (i12 << 3) >> 2] | 0;
   HEAP32[i19 + (i20 << 3) >> 2] = i21;
   if ((i21 | 0) != 0) {
    i22 = i21 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   HEAP32[i19 + (i20 << 3) + 4 >> 2] = HEAP32[i16 + (i12 << 3) + 4 >> 2];
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i17 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = i17;
 i17 = i5 + 792 | 0;
 HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 HEAP32[i13 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
 HEAP32[i13 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
 __ZN7WebCore11RenderStyle5cloneEPKS0_(i9, i2);
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i9 >> 2];
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11RenderStyle5cloneEPKS0_(i10, i3);
 i3 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i10 >> 2];
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_(i11, i1 + 128 | 0, i7, i8);
 __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i8);
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_(i2, 0) | 0;
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
  i13 = i7 + (i12 << 4) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 16) | 0;
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
 __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_(i18 + 4 | 0, i4 + 4 | 0) | 0;
 i4 = i2 + 12 | 0;
 i17 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i17;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i17 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore20StyleDashboardRegioneqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0;
 if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 4 | 0;
 i5 = i2 + 4 | 0;
 i6 = i4 | 0;
 i7 = i5 | 0;
 i8 = HEAP8[i1 + 9 | 0] | 0;
 if (i8 << 24 >> 24 != (HEAP8[i2 + 9 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 8 | 0] ^ HEAP8[i1 + 8 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (i8 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 10 | 0] & 1) == 0) {
    d9 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d9 = +HEAPF32[i4 >> 2];
   }
   if ((HEAP8[i2 + 10 | 0] & 1) == 0) {
    d10 = +(HEAP32[i5 >> 2] | 0);
   } else {
    d10 = +HEAPF32[i5 >> 2];
   }
   if (d9 == d10) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = i1 + 12 | 0;
 i6 = i2 + 12 | 0;
 i5 = HEAP8[i1 + 17 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 17 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 16 | 0] ^ HEAP8[i1 + 16 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 18 | 0] & 1) == 0) {
    d11 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i7 >> 2];
   }
   if ((HEAP8[i2 + 18 | 0] & 1) == 0) {
    d12 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i6 >> 2];
   }
   if (d11 == d12) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = i1 + 20 | 0;
 i7 = i2 + 20 | 0;
 i5 = HEAP8[i1 + 25 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 25 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 24 | 0] ^ HEAP8[i1 + 24 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 26 | 0] & 1) == 0) {
    d13 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i6 >> 2];
   }
   if ((HEAP8[i2 + 26 | 0] & 1) == 0) {
    d14 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i7 >> 2];
   }
   if (d13 == d14) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i7) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i7 = i1 + 28 | 0;
 i6 = i2 + 28 | 0;
 i5 = HEAP8[i1 + 33 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 33 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 32 | 0] ^ HEAP8[i1 + 32 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 34 | 0] & 1) == 0) {
    d15 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d15 = +HEAPF32[i7 >> 2];
   }
   if ((HEAP8[i2 + 34 | 0] & 1) == 0) {
    d16 = +(HEAP32[i6 >> 2] | 0);
   } else {
    d16 = +HEAPF32[i6 >> 2];
   }
   if (d15 == d16) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i6) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 < i8 >>> 0) {
  i10 = i9 + 1 + (i9 >>> 2) | 0;
  i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
  __ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 | 0, i9 >>> 0 > i8 >>> 0 ? i9 : i8);
 }
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = HEAP32[i3 >> 2] | 0;
   i12 = i10 + (i8 << 3) | 0;
   if ((i11 | 0) == (i8 | 0)) {
    break;
   }
   i13 = i10 + (i11 << 3) | 0;
   while (1) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = 0;
    i13 = i13 + 8 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = i8;
 i3 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i3;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i9 = i2 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i3 + (i8 << 3) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i2;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i2 >> 2] = i9;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   }
  }
 } while (0);
 i10 = i3 + (i8 << 3) + 4 | 0;
 HEAP32[i10 >> 2] = i5 << 2 & 12 | i4 & 3 | HEAP32[i10 >> 2] & -16;
 i10 = i1 + 524 | 0;
 i4 = i1 + 532 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != (HEAP32[i1 + 528 >> 2] | 0)) {
  HEAP32[(HEAP32[i10 >> 2] | 0) + (i5 << 2) >> 2] = HEAP32[i7 >> 2];
  i14 = HEAP32[i4 >> 2] | 0;
  i15 = i14 + 1 | 0;
  HEAP32[i4 >> 2] = i15;
  STACKTOP = i6;
  return;
 }
 i1 = i5 + 1 | 0;
 i8 = i10 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if (i3 >>> 0 > i7 >>> 0) {
   i16 = 21;
  } else {
   if ((i3 + (i5 << 2) | 0) >>> 0 <= i7 >>> 0) {
    i16 = 21;
    break;
   }
   i9 = i1 + (i5 >>> 2) | 0;
   i2 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIPN7WebCore9StyleRuleELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i2 >>> 0 > i1 >>> 0 ? i2 : i1);
   i2 = HEAP32[i8 >> 2] | 0;
   i17 = i2 + (i7 - i3 >> 2 << 2) | 0;
   i18 = i2;
  }
 } while (0);
 if ((i16 | 0) == 21) {
  i16 = i1 + (i5 >>> 2) | 0;
  i5 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorIPN7WebCore9StyleRuleELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i5 >>> 0 > i1 >>> 0 ? i5 : i1);
  i17 = i7;
  i18 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i18 + (HEAP32[i4 >> 2] << 2) >> 2] = HEAP32[i17 >> 2];
 i14 = HEAP32[i4 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i4 >> 2] = i15;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 312 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 368 | 0;
 if ((HEAP32[i1 + 380 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 372 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i9 = i7 + (i1 << 3) | 0;
 L10 : do {
  if ((i1 | 0) == 0) {
   i10 = i7;
   i11 = 7;
  } else {
   i12 = i7;
   while (1) {
    i13 = HEAP32[i12 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i10 = i12;
     i11 = 7;
     break L10;
    }
    i13 = i12 + 8 | 0;
    if ((i13 | 0) == (i9 | 0)) {
     i14 = i7;
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 7) {
   if ((i10 | 0) == (i9 | 0)) {
    i14 = i7;
    break;
   }
   i1 = i3 | 0;
   i12 = i10;
   L17 : while (1) {
    i13 = HEAP32[i12 + 4 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i15 = __ZN7WebCore25WebKitCSSSVGDocumentValue4loadEPNS_20CachedResourceLoaderE(i13, i5) | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      i16 = HEAP32[i12 >> 2] | 0;
      i17 = __ZN3WTF10fastMallocEj(8) | 0;
      __ZN7WebCore26CachedSVGDocumentReferenceC1EPNS_17CachedSVGDocumentE(i17, i15);
      HEAP32[i1 >> 2] = i17;
      __ZN7WebCore24ReferenceFilterOperation29setCachedSVGDocumentReferenceEN3WTF10PassOwnPtrINS_26CachedSVGDocumentReferenceEEE(i16, i3);
      i16 = HEAP32[i1 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
     }
    } while (0);
    i13 = i12 + 8 | 0;
    if ((i13 | 0) == (i9 | 0)) {
     break;
    } else {
     i18 = i13;
    }
    while (1) {
     i13 = HEAP32[i18 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i18 + 8 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break L17;
     } else {
      i18 = i13;
     }
    }
    if ((i18 | 0) == (i9 | 0)) {
     break;
    } else {
     i12 = i18;
    }
   }
   i14 = HEAP32[i6 >> 2] | 0;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) > 0) {
  i8 = 0;
  while (1) {
   do {
    if ((HEAP32[i14 + (i8 << 3) >> 2] | 0) != -1) {
     i18 = HEAP32[i14 + (i8 << 3) + 4 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i9 = i18 | 0;
     i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i18 | 0);
      break;
     } else {
      HEAP32[i9 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i6 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i14);
 _memset(i4 | 0, 0, 16) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore26CustomFilterArrayParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = i7;
   if ((i2 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i8 = i2 + 24 | 0;
   i9 = i3 + 24 | 0;
   if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i9 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i7;
    i10 = i2 + 4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    STACKTOP = i5;
    return;
   }
   i10 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i10 + 4 >> 2] = 1;
   i11 = i10;
   HEAP32[i11 >> 2] = H_BASE + 360;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i10 + 8 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   HEAP32[i10 + 12 >> 2] = 0;
   HEAP32[i11 >> 2] = H_BASE + 328;
   i11 = i10 + 16 | 0;
   i13 = i11;
   HEAP32[i13 >> 2] = 0;
   i12 = i10 + 20 | 0;
   HEAP32[i12 >> 2] = 0;
   i14 = i10 + 24 | 0;
   HEAP32[i14 >> 2] = 0;
   L15 : do {
    if ((HEAP32[i8 >> 2] | 0) != 0) {
     i15 = i3 + 16 | 0;
     i16 = i2 + 16 | 0;
     i17 = i11;
     i18 = i6;
     i19 = 0;
     while (1) {
      if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i19 >>> 0) {
       break;
      }
      d20 = +HEAPF64[(HEAP32[i15 >> 2] | 0) + (i19 << 3) >> 3];
      d21 = d20 + (+HEAPF64[(HEAP32[i16 >> 2] | 0) + (i19 << 3) >> 3] - d20) * d4;
      HEAPF64[i6 >> 3] = d21;
      i22 = HEAP32[i14 >> 2] | 0;
      if ((i22 | 0) == (HEAP32[i12 >> 2] | 0)) {
       i23 = i22 + 1 | 0;
       i24 = HEAP32[i13 >> 2] | 0;
       do {
        if (i24 >>> 0 > i6 >>> 0) {
         i25 = 18;
        } else {
         if ((i24 + (i22 << 3) | 0) >>> 0 <= i6 >>> 0) {
          i25 = 18;
          break;
         }
         __ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i23);
         i26 = HEAP32[i13 >> 2] | 0;
         i27 = i26 + (i18 - i24 >> 3 << 3) | 0;
         i28 = i26;
        }
       } while (0);
       if ((i25 | 0) == 18) {
        i25 = 0;
        __ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i23);
        i27 = i6;
        i28 = HEAP32[i13 >> 2] | 0;
       }
       HEAPF64[i28 + (HEAP32[i14 >> 2] << 3) >> 3] = +HEAPF64[i27 >> 3];
      } else {
       HEAPF64[(HEAP32[i13 >> 2] | 0) + (i22 << 3) >> 3] = d21;
      }
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
       break L15;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   HEAP32[i1 >> 2] = i10;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
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
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
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
   if ((i26 | 0) == 9) {
    i26 = 0;
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
function __ZN7WebCore13StyleResolver31parseCustomFilterArrayParameterERKN3WTF6StringEPNS_12CSSValueListEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2 | 0;
 i7 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i7 + 4 | 0;
 HEAP32[i8 >> 2] = 1;
 i9 = i7;
 HEAP32[i9 >> 2] = H_BASE + 360;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 8 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 12 >> 2] = i5 ? 0 : 2;
 HEAP32[i9 >> 2] = H_BASE + 328;
 i9 = i7 + 16 | 0;
 i5 = i9;
 HEAP32[i5 >> 2] = 0;
 i3 = i7 + 20 | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = i7 + 24 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 16 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) != 0) {
   i13 = i4 + 8 | 0;
   i14 = i9;
   i15 = i6;
   i16 = 0;
   i17 = i12;
   while (1) {
    if (i17 >>> 0 <= i16 >>> 0) {
     i18 = 6;
     break;
    }
    i19 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i16 << 2) >> 2] | 0;
    if ((HEAP32[i19 + 4 >> 2] & 516096 | 0) != 0) {
     i18 = 8;
     break;
    }
    i20 = i19;
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i20) | 0) << 16 >> 16 != 1) {
     i18 = 10;
     break;
    }
    d21 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i20);
    HEAPF64[i6 >> 3] = d21;
    i20 = HEAP32[i10 >> 2] | 0;
    if ((i20 | 0) == (HEAP32[i3 >> 2] | 0)) {
     i19 = i20 + 1 | 0;
     i22 = HEAP32[i5 >> 2] | 0;
     do {
      if (i22 >>> 0 > i6 >>> 0) {
       i18 = 15;
      } else {
       if ((i22 + (i20 << 3) | 0) >>> 0 <= i6 >>> 0) {
        i18 = 15;
        break;
       }
       __ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i19);
       i23 = HEAP32[i5 >> 2] | 0;
       i24 = i23 + (i15 - i22 >> 3 << 3) | 0;
       i25 = i23;
      }
     } while (0);
     if ((i18 | 0) == 15) {
      i18 = 0;
      __ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i19);
      i24 = i6;
      i25 = HEAP32[i5 >> 2] | 0;
     }
     HEAPF64[i25 + (HEAP32[i10 >> 2] << 3) >> 3] = +HEAPF64[i24 >> 3];
    } else {
     HEAPF64[(HEAP32[i5 >> 2] | 0) + (i20 << 3) >> 3] = d21;
    }
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i22 = i16 + 1 | 0;
    if (i22 >>> 0 >= i12 >>> 0) {
     break L4;
    }
    i16 = i22;
    i17 = HEAP32[i11 >> 2] | 0;
   }
   if ((i18 | 0) == 6) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 8) {
    HEAP32[i1 >> 2] = 0;
   } else if ((i18 | 0) == 10) {
    HEAP32[i1 >> 2] = 0;
   }
   if ((i7 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i17 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i8 >> 2] = i17;
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i2;
 return;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 * 20 & -1) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 20 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 20 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 20 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = HEAP32[i12 + (i4 * 20 & -1) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __Z12compareEqualIN3WTF7HashMapINS0_6StringENS0_6VectorIjLj0ENS0_15CrashOnOverflowEEENS0_10StringHashENS0_10HashTraitsIS2_EENS7_IS5_EEEESA_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 4) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 16 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i4, i6, i13 | 0, i13);
    i11 = i13 + 16 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 16 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = __ZN3WTFeqINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESH_(i1, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i14 | 0;
 }
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i13 | 0) > 0) {
  i5 = 0;
  while (1) {
   i9 = i1 + (i5 << 4) | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i6 | 0) != -1) {
     i4 = i1 + (i5 << 4) + 12 | 0;
     if ((HEAP32[i4 >> 2] | 0) != 0) {
      HEAP32[i4 >> 2] = 0;
     }
     i4 = i1 + (i5 << 4) + 4 | 0;
     i10 = HEAP32[i4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i15 = i6;
     } else {
      HEAP32[i4 >> 2] = 0;
      HEAP32[i1 + (i5 << 4) + 8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
      i15 = HEAP32[i9 >> 2] | 0;
     }
     if ((i15 | 0) == 0) {
      break;
     }
     i10 = i15 | 0;
     i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i10 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN7WebCore10BorderDataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 24 | 0;
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 32 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i4 >> 2] | 0);
 HEAP32[i4 >> 2] = i3;
 i3 = i1 + 36 | 0;
 i4 = i2 + 36 | 0;
 i5 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 44 | 0;
 i7 = i2 + 44 | 0;
 i6 = i3;
 i5 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i5 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 }
 i3 = i1 + 52 | 0;
 i4 = i2 + 52 | 0;
 i5 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 60 | 0;
 i7 = i2 + 60 | 0;
 i6 = i3;
 i5 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i5 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 }
 i3 = i1 + 68 | 0;
 i4 = i2 + 68 | 0;
 i5 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 76 | 0;
 i7 = i2 + 76 | 0;
 i6 = i3;
 i5 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i4;
 if ((i5 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 }
 i3 = i1 + 84 | 0;
 i4 = i2 + 84 | 0;
 i5 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 92 | 0;
 i7 = i2 + 92 | 0;
 i2 = i3;
 i6 = HEAP32[i7 >> 2] | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 HEAP32[i2 + 4 >> 2] = i5;
 if (!((i6 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560)) {
  return i1 | 0;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 return i1 | 0;
}
function __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_((HEAP32[i8 + 72 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 72 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore18StyleTransformData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   if ((HEAP8[i4 + 29 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 24 | 0);
   }
   if ((HEAP8[i4 + 21 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 16 | 0);
   }
   i1 = i4 + 12 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i9 = i4 + 4 | 0;
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i9 >> 2] | 0;
    i13 = i6 + (i5 << 2) | 0;
    i5 = i6;
    while (1) {
     i6 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i14 = i6 + 4 | 0;
       i15 = i14 | 0;
       i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) != 0) {
        HEAP32[i15 >> 2] = i16;
        break;
       }
       i16 = i14 - 4 | 0;
       if ((i16 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i1 = HEAP32[i9 >> 2] | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i4 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i12 + 4 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i3 + 4 >> 2] & 508;
 if ((i7 | 0) == 100) {
  HEAP32[i1 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP8[i1 + 4 | 0] = 1;
  STACKTOP = i5;
  return;
 }
 i8 = i2 + 308 | 0;
 L5 : do {
  if ((i7 | 0) == 472) {
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   switch (i9 | 0) {
   case 122:
    {
     __ZNK7WebCore11RenderStyle5colorEv(i1, HEAP32[i2 + 312 >> 2] | 0);
     STACKTOP = i5;
     return;
    }
   case 91:
    {
     i10 = HEAP32[i8 >> 2] | 0;
     i11 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i12 = (HEAP32[i10 + 12 >> 2] & 512 | 0) == 0 | i4 ^ 1 ? i11 + 928 | 0 : i11 + 936 | 0;
     i11 = i1;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i11 + 4 >> 2] = i10;
     STACKTOP = i5;
     return;
    }
   case 0:
    {
     break L5;
     break;
    }
   case 92:
    {
     i10 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 944 | 0;
     i11 = i1;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i11 + 4 >> 2] = i12;
     STACKTOP = i5;
     return;
    }
   case 121:
    {
     __ZN7WebCore11RenderTheme14focusRingColorEv(i1);
     STACKTOP = i5;
     return;
    }
   case 124:
    {
     i12 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 672 | 0;
     i11 = i1;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i11 + 4 >> 2] = i10;
     STACKTOP = i5;
     return;
    }
   default:
    {
     i10 = H_BASE + 32 | 0;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      if ((i11 | 0) == (i9 | 0)) {
       i13 = 14;
       break;
      } else {
       i10 = i10 + 8 | 0;
      }
     }
     if ((i13 | 0) == 14) {
      HEAP32[i1 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP8[i1 + 4 | 0] = 1;
      STACKTOP = i5;
      return;
     }
     __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i6, 0);
     i11 = i6 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 92 >> 2] & 7](i1, i12, i9);
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     i11 = i12 + 4 | 0;
     i12 = i11 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i12 >> 2] = i14;
      STACKTOP = i5;
      return;
     }
     i14 = i11 - 4 | 0;
     if ((i14 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
     STACKTOP = i5;
     return;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi122EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2 + 4 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i10 | 0) == 3 | (i10 | 0) == 4 | (i10 | 0) == 108 | (i10 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i10 - 3 & 65535) >>> 0 < 8 >>> 0 | i10 << 16 >> 16 == 108 | i10 << 16 >> 16 == 109) {
  d11 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIdEET_PKNS_11RenderStyleES5_fb(i2, i3, i4, d5, 0);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 3;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d11;
  STACKTOP = i6;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d11 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d11;
  STACKTOP = i6;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 1) {
  d11 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2) * +100;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d11;
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 508 | 0) != 452) {
  if (((i10 >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
   __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i1, i2);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i6;
   return;
  }
 }
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i10 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i7, i2, i3, i4, d5);
 __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i8, i7, HEAP8[i10 + 12 | 0] & 1);
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 }
 __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i1, i8);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i1 | 0;
 i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i8 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10BorderDataC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 24 | 0;
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i3;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 36 | 0;
 i3 = i2 + 36 | 0;
 i5 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4 | 0);
 }
 i4 = i1 + 44 | 0;
 i7 = i2 + 44 | 0;
 i6 = i4;
 i5 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i3;
 if ((i5 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i4 = i1 + 52 | 0;
 i3 = i2 + 52 | 0;
 i5 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4 | 0);
 }
 i4 = i1 + 60 | 0;
 i7 = i2 + 60 | 0;
 i6 = i4;
 i5 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i3;
 if ((i5 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i4 = i1 + 68 | 0;
 i3 = i2 + 68 | 0;
 i5 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4 | 0);
 }
 i4 = i1 + 76 | 0;
 i7 = i2 + 76 | 0;
 i6 = i4;
 i5 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i3;
 if ((i5 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i4 = i1 + 84 | 0;
 i3 = i2 + 84 | 0;
 i5 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4 | 0);
 }
 i4 = i1 + 92 | 0;
 i1 = i2 + 92 | 0;
 i2 = i4;
 i7 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 + 4 >> 2] = i6;
 if (!((i7 & 0 | 0) == 0 & (i6 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 40 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 40 & -1) * 40 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i12 + (i6 * 40 & -1) + 4 | 0;
 i2 = i11 + 4 | 0;
 i8 = i5;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
 }
 i5 = i12 + (i6 * 40 & -1) + 12 | 0;
 i7 = i11 + 12 | 0;
 i1 = i5;
 i8 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i8 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i12 + (i6 * 40 & -1) + 20 | 0;
 i2 = i11 + 20 | 0;
 i8 = i5;
 i1 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i5 = i12 + (i6 * 40 & -1) + 28 | 0;
 i7 = i11 + 28 | 0;
 i1 = i5;
 i8 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i2;
 if (!((i8 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560)) {
  i13 = i12 + (i6 * 40 & -1) + 36 | 0;
  i14 = i11 + 36 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i13 >> 2] = i15;
  i16 = HEAP32[i3 >> 2] | 0;
  i17 = i16 + 1 | 0;
  HEAP32[i3 >> 2] = i17;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 i13 = i12 + (i6 * 40 & -1) + 36 | 0;
 i14 = i11 + 36 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function __ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = HEAP32[i8 + 84 >> 2] | 0;
 i8 = i2 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i11 = i2 + 8 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i12 = (i2 | 0) == 0;
 if (!i12) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) == (i10 | 0)) {
  i14 = (HEAP32[i1 + 20 >> 2] | 0) == (i6 | 0);
 } else {
  i14 = 0;
 }
 do {
  if (!i12) {
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i14) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i15 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i14);
  i14 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i2 = i5 | 0;
  i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i12;
  }
  HEAP32[i7 >> 2] = i14;
  i15 = i14;
 }
 i14 = i15 + 84 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i15 >> 2] | 0) == 1) {
  i16 = i15;
 } else {
  __ZNK7WebCore17StyleGridItemData4copyEv(i4, i15);
  i15 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  i7 = i4 | 0;
  i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleGridItemDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i12;
  }
  HEAP32[i14 >> 2] = i15;
  i16 = i15;
 }
 HEAP32[i16 + 16 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i16 + 20 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i16 + 24 | 0;
 i16 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i16 | 0;
 i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = HEAP32[i8 + 84 >> 2] | 0;
 i8 = i2 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i11 = i2 + 8 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i12 = (i2 | 0) == 0;
 if (!i12) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if ((HEAP32[i1 + 28 >> 2] | 0) == (i10 | 0)) {
  i14 = (HEAP32[i1 + 32 >> 2] | 0) == (i6 | 0);
 } else {
  i14 = 0;
 }
 do {
  if (!i12) {
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i14) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i15 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i14);
  i14 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i2 = i5 | 0;
  i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i12;
  }
  HEAP32[i7 >> 2] = i14;
  i15 = i14;
 }
 i14 = i15 + 84 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i15 >> 2] | 0) == 1) {
  i16 = i15;
 } else {
  __ZNK7WebCore17StyleGridItemData4copyEv(i4, i15);
  i15 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  i7 = i4 | 0;
  i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleGridItemDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i12;
  }
  HEAP32[i14 >> 2] = i15;
  i16 = i15;
 }
 HEAP32[i16 + 28 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i16 + 32 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i16 + 36 | 0;
 i16 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i16 | 0;
 i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = HEAP32[i8 + 84 >> 2] | 0;
 i8 = i2 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i11 = i2 + 8 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i12 = (i2 | 0) == 0;
 if (!i12) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == (i10 | 0)) {
  i14 = (HEAP32[i1 + 8 >> 2] | 0) == (i6 | 0);
 } else {
  i14 = 0;
 }
 do {
  if (!i12) {
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i14) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i15 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i14);
  i14 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i2 = i5 | 0;
  i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i12;
  }
  HEAP32[i7 >> 2] = i14;
  i15 = i14;
 }
 i14 = i15 + 84 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i15 >> 2] | 0) == 1) {
  i16 = i15;
 } else {
  __ZNK7WebCore17StyleGridItemData4copyEv(i4, i15);
  i15 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  i7 = i4 | 0;
  i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleGridItemDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i12;
  }
  HEAP32[i14 >> 2] = i15;
  i16 = i15;
 }
 HEAP32[i16 + 4 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i16 + 12 | 0;
 i16 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i16 | 0;
 i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = HEAP32[i8 + 84 >> 2] | 0;
 i8 = i2 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i11 = i2 + 8 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 i12 = (i2 | 0) == 0;
 if (!i12) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if ((HEAP32[i1 + 40 >> 2] | 0) == (i10 | 0)) {
  i14 = (HEAP32[i1 + 44 >> 2] | 0) == (i6 | 0);
 } else {
  i14 = 0;
 }
 do {
  if (!i12) {
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i14) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i15 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i14);
  i14 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i2 = i5 | 0;
  i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i12;
  }
  HEAP32[i7 >> 2] = i14;
  i15 = i14;
 }
 i14 = i15 + 84 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i15 >> 2] | 0) == 1) {
  i16 = i15;
 } else {
  __ZNK7WebCore17StyleGridItemData4copyEv(i4, i15);
  i15 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  i7 = i4 | 0;
  i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore17StyleGridItemDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i12;
  }
  HEAP32[i14 >> 2] = i15;
  i16 = i15;
 }
 HEAP32[i16 + 40 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i16 + 44 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i16 + 48 | 0;
 i16 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i16 | 0;
 i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
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
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8 + ~(i8 << 15) | 0;
 i9 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i9 >>> 6 ^ i9;
 i9 = i3 + ~(i3 << 11) | 0;
 i3 = i9 >>> 16 ^ i9;
 i9 = i3 & i6;
 i10 = i7 + (i9 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i3 >>> 23) + ~i3 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i9;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == 415 ? i18 : i16;
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
  i13 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, i25) | 0;
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
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i11 | 0) == 3 | (i11 | 0) == 4 | (i11 | 0) == 108 | (i11 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 i11 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i11 - 3 & 65535) >>> 0 < 8 >>> 0 | i11 << 16 >> 16 == 108 | i11 << 16 >> 16 == 109) {
  __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i1, i2, i3, i4, d5, i6);
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 1) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2) * +100;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 & 508 | 0) != 452) {
  if (((i6 >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
   __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i1, i2);
   STACKTOP = i7;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i6 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i8, i2, i3, i4, d5);
 __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i9, i8, HEAP8[i6 + 12 | 0] & 1);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 }
 __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i1, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i1 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i9 >> 2] = i6;
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderStyle14setGridColumnsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 20 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i1);
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i10 = i7 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i8 >> 2] = i1;
  i9 = i1;
 }
 i1 = (HEAP32[i9 + 80 >> 2] | 0) + 4 | 0;
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i6, i2);
 i9 = __ZN3WTFeqIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEEbRKNS_6VectorIT_XT0_ET1_EES9_(i1, i6) | 0;
 i1 = i6 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i10 = i6 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i12 = i7 + (i11 * 56 & -1) | 0;
  i11 = i7;
  while (1) {
   if ((HEAP8[i11 + 37 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 + 32 | 0);
   }
   if ((HEAP8[i11 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 + 8 | 0);
   }
   i11 = i11 + 56 | 0;
   if ((i11 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 if ((i7 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 >> 2] | 0) == 1) {
  i13 = i9;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i9);
  i9 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i7 = i5 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i7 >> 2] = i6;
  }
  HEAP32[i8 >> 2] = i9;
  i13 = i9;
 }
 i9 = i13 + 80 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i13);
  i13 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i9 >> 2] = i13;
  i14 = i13;
 }
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEaSERKS4_(i14 + 4 | 0, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle11setGridRowsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 20 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i1);
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i10 = i7 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i8 >> 2] = i1;
  i9 = i1;
 }
 i1 = (HEAP32[i9 + 80 >> 2] | 0) + 16 | 0;
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i6, i2);
 i9 = __ZN3WTFeqIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEEbRKNS_6VectorIT_XT0_ET1_EES9_(i1, i6) | 0;
 i1 = i6 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i10 = i6 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i12 = i7 + (i11 * 56 & -1) | 0;
  i11 = i7;
  while (1) {
   if ((HEAP8[i11 + 37 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 + 32 | 0);
   }
   if ((HEAP8[i11 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11 + 8 | 0);
   }
   i11 = i11 + 56 | 0;
   if ((i11 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 if ((i7 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 >> 2] | 0) == 1) {
  i13 = i9;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i9);
  i9 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i7 = i5 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i7 >> 2] = i6;
  }
  HEAP32[i8 >> 2] = i9;
  i13 = i9;
 }
 i9 = i13 + 80 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i13);
  i13 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i9 >> 2] = i13;
  i14 = i13;
 }
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEaSERKS4_(i14 + 16 | 0, i2) | 0;
 STACKTOP = i3;
 return;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
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
 i3 = __ZN3WTF10fastMallocEj(i5 << 4) | 0;
 if ((i5 | 0) > 0) {
  i8 = 0;
  while (1) {
   _memset(i3 + (i8 << 4) | 0, 0, 16) | 0;
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = i3;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i9 = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i3 = i7 + (i11 << 4) | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i13 = i12;
  } else {
   i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i3) | 0;
   i13 = (i3 | 0) == (i2 | 0) ? i4 : i12;
  }
  i4 = i11 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i11 = i4;
   i12 = i13;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i14 = 0;
 } else {
  i9 = i13;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 }
 while (1) {
  i1 = i7 + (i14 << 4) | 0;
  i12 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i12 | 0) != -1) {
    i11 = i7 + (i14 << 4) + 12 | 0;
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
    }
    i11 = i7 + (i14 << 4) + 4 | 0;
    i2 = HEAP32[i11 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i15 = i12;
    } else {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i7 + (i14 << 4) + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i2);
     i15 = HEAP32[i1 >> 2] | 0;
    }
    if ((i15 | 0) == 0) {
     break;
    }
    i2 = i15 | 0;
    i11 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i2 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i1 = i14 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i14 = i1;
  } else {
   i9 = i13;
   break;
  }
 }
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i9 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i1, i2) {
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
  if ((i13 | 0) == 415 | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == 415 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 2) | 0;
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
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i15 = i11 + 1 | 0;
  if ((i15 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i15;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 40 & -1) | 0;
 if (i2 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 40 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 40 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i10;
   i10 = i6 + 9 | 0;
   HEAP8[i10] = 0;
   i9 = i6 + 12 | 0;
   i8 = i9;
   i11 = i7 + 12 | 0;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i12;
   i12 = i6 + 17 | 0;
   HEAP8[i12] = 0;
   i11 = i6 + 20 | 0;
   i8 = i11;
   i13 = i7 + 20 | 0;
   i14 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i13 + 4 >> 2] = i14;
   i14 = i6 + 25 | 0;
   HEAP8[i14] = 0;
   i13 = i6 + 28 | 0;
   i8 = i13;
   i15 = i7 + 28 | 0;
   i16 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i15 + 4 >> 2] = i16;
   i16 = i6 + 33 | 0;
   HEAP8[i16] = 0;
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   if ((HEAP8[i16] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
   }
   if ((HEAP8[i14] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   if ((HEAP8[i12] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
   }
   if ((HEAP8[i10] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6 + 4 | 0);
   }
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i2 = i10 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i10 = i6 + 40 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 40 | 0;
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
function __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 56 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 56 & -1) * 56 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 56 & -1) >> 2] = HEAP32[i11 >> 2];
 i2 = i12 + (i6 * 56 & -1) + 8 | 0;
 i5 = i11 + 8 | 0;
 i8 = i2;
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 HEAP32[i8 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i2 | 0);
 }
 HEAPF64[i12 + (i6 * 56 & -1) + 16 >> 3] = +HEAPF64[i11 + 16 >> 3];
 HEAP32[i12 + (i6 * 56 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 i2 = i12 + (i6 * 56 & -1) + 32 | 0;
 i7 = i11 + 32 | 0;
 i1 = i2;
 i8 = HEAP32[i7 >> 2] | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!((i8 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560)) {
  i13 = i12 + (i6 * 56 & -1) + 40 | 0;
  i14 = i11 + 40 | 0;
  d15 = +HEAPF64[i14 >> 3];
  HEAPF64[i13 >> 3] = d15;
  i16 = i12 + (i6 * 56 & -1) + 48 | 0;
  i17 = i11 + 48 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  HEAP32[i16 >> 2] = i18;
  i19 = HEAP32[i3 >> 2] | 0;
  i20 = i19 + 1 | 0;
  HEAP32[i3 >> 2] = i20;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i2 | 0);
 i13 = i12 + (i6 * 56 & -1) + 40 | 0;
 i14 = i11 + 40 | 0;
 d15 = +HEAPF64[i14 >> 3];
 HEAPF64[i13 >> 3] = d15;
 i16 = i12 + (i6 * 56 & -1) + 48 | 0;
 i17 = i11 + 48 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i16 >> 2] = i18;
 i19 = HEAP32[i3 >> 2] | 0;
 i20 = i19 + 1 | 0;
 HEAP32[i3 >> 2] = i20;
 return;
}
function __Z12compareEqualIN3WTF7HashMapINS0_6StringEN7WebCore14GridCoordinateENS0_10StringHashENS0_10HashTraitsIS2_EENS6_IS4_EEEES9_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = i7 + (i8 * 20 & -1) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 20 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i13 = i10;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i6, i13 | 0, i13);
    i11 = i13 + 20 | 0;
    if ((i11 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 20 | 0;
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i9 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = __ZN3WTFeqINS_6StringEN7WebCore14GridCoordinateENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_(i1, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i14 | 0;
 }
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i13 | 0) > 0) {
  i5 = 0;
  while (1) {
   i9 = HEAP32[i1 + (i5 * 20 & -1) >> 2] | 0;
   i6 = i9;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i4 = i9 | 0;
     i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i4 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN7WebCore11RenderStyle18setGridAutoColumnsERKNS_13GridTrackSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN7WebCore13GridTrackSizeES1_EbRKT_RKT0_((HEAP32[i8 + 80 >> 2] | 0) + 128 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAP32[i12 + 128 >> 2] = HEAP32[i2 >> 2];
 i11 = i12 + 136 | 0;
 i8 = i2 + 8 | 0;
 i10 = i11;
 i7 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i7;
 HEAP32[i10 + 4 >> 2] = i4;
 if ((i7 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
 }
 HEAPF64[i12 + 144 >> 3] = +HEAPF64[i2 + 16 >> 3];
 HEAP32[i12 + 152 >> 2] = HEAP32[i2 + 24 >> 2];
 i11 = i12 + 160 | 0;
 i4 = i2 + 32 | 0;
 i7 = i11;
 i10 = HEAP32[i4 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i8;
 if ((i10 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
 }
 HEAPF64[i12 + 168 >> 3] = +HEAPF64[i2 + 40 >> 3];
 HEAP32[i12 + 176 >> 2] = HEAP32[i2 + 48 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle15setGridAutoRowsERKNS_13GridTrackSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN7WebCore13GridTrackSizeES1_EbRKT_RKT0_((HEAP32[i8 + 80 >> 2] | 0) + 72 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAP32[i12 + 72 >> 2] = HEAP32[i2 >> 2];
 i11 = i12 + 80 | 0;
 i8 = i2 + 8 | 0;
 i10 = i11;
 i7 = HEAP32[i8 >> 2] | 0;
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i7;
 HEAP32[i10 + 4 >> 2] = i4;
 if ((i7 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
 }
 HEAPF64[i12 + 88 >> 3] = +HEAPF64[i2 + 16 >> 3];
 HEAP32[i12 + 96 >> 2] = HEAP32[i2 + 24 >> 2];
 i11 = i12 + 104 | 0;
 i4 = i2 + 32 | 0;
 i7 = i11;
 i10 = HEAP32[i4 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i8;
 if ((i10 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11 | 0);
 }
 HEAPF64[i12 + 112 >> 3] = +HEAPF64[i2 + 40 >> 3];
 HEAP32[i12 + 120 >> 2] = HEAP32[i2 + 48 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24StyleCustomFilterProgramC2ENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 __ZN7WebCore19CustomFilterProgramC2ENS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i1 | 0, i6, i7, i8);
 HEAP32[i1 >> 2] = __ZTVN7WebCore24StyleCustomFilterProgramE + 8;
 HEAP32[i1 + 48 >> 2] = __ZTVN7WebCore24StyleCustomFilterProgramE + 48;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = i3;
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = i5;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 60 | 0);
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 64 | 0);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i2 + 4 | 0;
 i5 = i1 + 72 | 0;
 i8 = HEAP8[i5] & -2 | HEAP8[i3] & 1;
 HEAP8[i5] = i8;
 HEAP8[i5] = i8 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 112 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 + 4 | 0;
 i2 = i1 + 120 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i3] & 2;
 HEAP32[i1 + 124 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 128 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 132 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 136 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 140 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 144 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 148 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 152 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 156 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 160 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP8[i1 + 168 | 0] = 0;
 HEAP8[i1 + 169 | 0] = 0;
 return;
}
function __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 i1 = (HEAP32[i8 + 76 >> 2] | 0) + 4 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i5, i2) | 0;
 i6 = __ZNK7WebCore16FilterOperationseqERKS0_(i1, i5) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i1 = HEAP32[i8 >> 2] | 0;
  i11 = i1 + (i5 << 2) | 0;
  i5 = i1;
  while (1) {
   i1 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i12 = i1 + 4 | 0;
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
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i11 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 if (i6) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 1) {
  i15 = i6;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  i9 = i4 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i6;
  i15 = i6;
 }
 __ZN7WebCore16FilterOperationsaSERKS0_((__ZN7WebCore7DataRefINS_15StyleFilterDataEE6accessEv(i15 + 76 | 0) | 0) + 4 | 0, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleResolver26parseCustomFilterParameterERKN3WTF6StringEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i5 & 491520) >>> 0 <= 221184 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i6 = i4;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i9 = i5 & 516096;
 if ((i9 | 0) == 253952) {
  __ZN7WebCore13StyleResolver31parseCustomFilterArrayParameterERKN3WTF6StringEPNS_12CSSValueListEb(i1, 0, i3, i6, 0);
  return;
 } else if ((i9 | 0) == 245760) {
  __ZN7WebCore13StyleResolver31parseCustomFilterArrayParameterERKN3WTF6StringEPNS_12CSSValueListEb(i1, 0, i3, i6, 1);
  return;
 } else {
  i9 = i4 + 8 | 0;
  i4 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
  i5 = HEAP32[i4 + 4 >> 2] & 516096;
  if ((i5 | 0) == 270336) {
   __ZN7WebCore13StyleResolver35parseCustomFilterTransformParameterERKN3WTF6StringEPNS_12CSSValueListE(i1, i2, i3, i6);
   return;
  } else if ((i5 | 0) == 0) {
   i10 = 10;
  }
  do {
   if ((i10 | 0) == 10) {
    if (i8 >>> 0 > 4 >>> 0) {
     break;
    }
    i5 = i4;
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i5) | 0) << 16 >> 16 == 1) {
     __ZN7WebCore13StyleResolver32parseCustomFilterNumberParameterERKN3WTF6StringEPNS_12CSSValueListE(i1, 0, i3, i6);
     return;
    }
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i5) | 0) << 16 >> 16 != 25) {
     HEAP32[i1 >> 2] = 0;
     return;
    }
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i5 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
    i2 = __ZN3WTF10fastMallocEj(24) | 0;
    HEAP32[i2 + 4 >> 2] = 1;
    i11 = i2;
    HEAP32[i11 >> 2] = H_BASE + 360;
    i12 = HEAP32[i3 >> 2] | 0;
    HEAP32[i2 + 8 >> 2] = i12;
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    }
    HEAP32[i2 + 12 >> 2] = 1;
    HEAP32[i11 >> 2] = H_BASE + 296;
    i11 = i2 + 16 | 0;
    HEAP32[i11 >> 2] = 0;
    i13 = i2 + 20 | 0;
    HEAP8[i13] = 0;
    if ((HEAP32[i5 + 4 >> 2] & 508 | 0) == 100) {
     i14 = HEAP32[i5 + 8 >> 2] | 0;
    } else {
     i14 = 0;
    }
    HEAP32[i11 >> 2] = i14;
    HEAP8[i13] = 1;
    HEAP32[i1 >> 2] = i2;
    return;
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi41EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i11 | 0) == 3 | (i11 | 0) == 4 | (i11 | 0) == 108 | (i11 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 i11 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i11 - 3 & 65535) >>> 0 < 8 >>> 0 | i11 << 16 >> 16 == 108 | i11 << 16 >> 16 == 109) {
  __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i1, i2, i3, i4, d5, i6);
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i10 >> 2] & 508 | 0) != 452) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  STACKTOP = i7;
  return;
 }
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i10 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i8, i2, i3, i4, d5);
 __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i9, i8, HEAP8[i10 + 12 | 0] & 1);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 }
 __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i1, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i1 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i9 >> 2] = i10;
  STACKTOP = i7;
  return;
 }
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i8 = i15 + 4 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = i15 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i14 >> 2] = i13;
 HEAP32[i8 >> 2] = 0;
 i13 = i15 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i2 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = 0;
 i14 = i2 + 4 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore11RenderStyle23setNamedGridColumnLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN3WTF7HashMapINS0_6StringENS0_6VectorIjLj0ENS0_15CrashOnOverflowEEENS0_10StringHashENS0_10HashTraitsIS2_EENS7_IS5_EEEESA_EbRKT_RKT0_((HEAP32[i8 + 80 >> 2] | 0) + 28 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_EaSERKSG_(i12 + 28 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle20setNamedGridRowLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN3WTF7HashMapINS0_6StringENS0_6VectorIjLj0ENS0_15CrashOnOverflowEEENS0_10StringHashENS0_10HashTraitsIS2_EENS7_IS5_EEEESA_EbRKT_RKT0_((HEAP32[i8 + 80 >> 2] | 0) + 48 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_EaSERKSG_(i12 + 48 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 40 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 40 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 40 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i9 + 4 | 0;
  i5 = i8 + 4 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7 | 0);
  }
  i7 = i9 + 12 | 0;
  i3 = i8 + 12 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 20 | 0;
  i5 = i8 + 20 | 0;
  i2 = i7;
  i6 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  i7 = i9 + 28 | 0;
  i3 = i8 + 28 | 0;
  i6 = i7;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i5;
  if ((i2 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  }
  HEAP32[i9 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
  i7 = i8 + 40 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 40 | 0;
  }
 }
 return;
}
function __ZN7WebCore13StyleResolver21loadPendingShapeImageEPNS_10ShapeValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 12 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i2 + 8 | 0] & 2) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   if ((HEAP32[i6 + 4 >> 2] & 516096 | 0) != 8192) {
    i7 = 0;
    break;
   }
   i7 = i6;
  }
 } while (0);
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0;
 i1 = i4;
 i2 = __ZN7WebCore20CachedResourceLoader28defaultCachedResourceOptionsEv() | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i4 + 24 >> 2] = 2;
 HEAP32[i4 + 12 >> 2] = 1;
 i2 = __ZN7WebCore13CSSImageValue11cachedImageEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i7, i6, i4) | 0;
 i4 = i2 | 0;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == (i4 | 0)) {
  if (i6) {
   STACKTOP = i3;
   return;
  }
  i6 = i2 + 4 | 0;
  i2 = i6 | 0;
  i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) != 0) {
   HEAP32[i2 >> 2] = i1;
   STACKTOP = i3;
   return;
  }
  i1 = i6 - 4 | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i4 = i7 + 4 | 0;
  i7 = i4 | 0;
  i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i7 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
  i5 = i4 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle16setNamedGridAreaERKN3WTF7HashMapINS1_6StringENS_14GridCoordinateENS1_10StringHashENS1_10HashTraitsIS3_EENS6_IS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (__Z12compareEqualIN3WTF7HashMapINS0_6StringEN7WebCore14GridCoordinateENS0_10StringHashENS0_10HashTraitsIS2_EENS6_IS4_EEEES9_EbRKT_RKT0_((HEAP32[i8 + 80 >> 2] | 0) + 184 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_(i12 + 184 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleResolver16addKeyframeStyleEN3WTF10PassRefPtrINS_18StyleRuleKeyframesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i9 = 0;
  } else {
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   if ((HEAP32[i8 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i8);
    i11 = HEAP32[i4 >> 2] | 0;
   } else {
    i12 = i4 | 0;
    HEAP32[i12 >> 2] = i8;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    i11 = HEAP32[i12 >> 2] | 0;
   }
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i9 = i11;
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    i9 = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = i9;
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RNS_10PassRefPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i1 + 104 | 0, i5, i2);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i2 = HEAP32[i6 >> 2] | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i1 = i2 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i5;
   if ((i2 | 0) == 0) {
    break;
   }
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore13StyleRuleBase7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13StyleResolver22defaultStyleForElementEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore11RenderStyle6createEv(i4);
 i7 = i2 + 312 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = __ZNK7WebCore8Document8settingsEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i7 >> 2] | 0) | 0;
   i4 = i6 | 0;
   HEAP32[i4 >> 2] = 0;
   __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i9, i6);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i4 = i9 + 4 | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i4 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  } else {
   __ZN7WebCore13StyleResolver19initializeFontStyleEPNS_8SettingsE(i2, i8);
   i10 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i7 >> 2] | 0) | 0;
   i4 = HEAP32[i2 + 240 >> 2] | 0;
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i11 = i4 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i10, i5);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 + 4 | 0;
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
 HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = i7;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i9 >> 2] = i7 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = i11;
   HEAP32[i8 >> 2] = i7;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i7;
   }
   while (1) {
    i7 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i11 = i7 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = __ZNK7WebCore19TransformOperationseqERKS0_(i1, i4) | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i8 >> 2] | 0;
  i14 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i6 = i1 + 4 | 0;
     i2 = i6 | 0;
     i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i2 >> 2] = i5;
      break;
     }
     i5 = i6 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return i15 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCore13StyleResolver18CascadedProperties11setDeferredENS_13CSSPropertyIDERNS_8CSSValueEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 _memset(i6 + 4 | 0, 0, 12) | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i4 | 0) == 3) {
  HEAP32[i6 + 4 >> 2] = i3;
  HEAP32[i6 + 8 >> 2] = i3;
  HEAP32[i6 + 12 >> 2] = i3;
 } else {
  HEAP32[i6 + 4 + (i4 << 2) >> 2] = i3;
 }
 i3 = i1 + 6692 | 0;
 i4 = i1 + 6700 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i1 + 6696 >> 2] | 0)) {
  i1 = (HEAP32[i3 >> 2] | 0) + (i2 << 4) | 0;
  i7 = i6;
  HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i7 = i2 + 1 | 0;
 i1 = i3 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 do {
  if (i10 >>> 0 > i6 >>> 0) {
   i11 = 8;
  } else {
   if ((i10 + (i2 << 4) | 0) >>> 0 <= i6 >>> 0) {
    i11 = 8;
    break;
   }
   i12 = i7 + (i2 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIN7WebCore13StyleResolver18CascadedProperties8PropertyELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i13 >>> 0 > i7 >>> 0 ? i13 : i7);
   i13 = HEAP32[i1 >> 2] | 0;
   i14 = i13 + (i6 - i10 >> 4 << 4) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i11 | 0) == 8) {
  i11 = i7 + (i2 >>> 2) | 0;
  i2 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorIN7WebCore13StyleResolver18CascadedProperties8PropertyELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i2 >>> 0 > i7 >>> 0 ? i2 : i7);
  i14 = i6;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i15 + (HEAP32[i4 >> 2] << 4) | 0;
 i15 = i14;
 HEAP32[i1 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZSt11make_uniqueIN7WebCore14CounterContentEJN3WTF6StringERNS0_14EListStyleTypeES3_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(12) | 0;
 i9 = i8;
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i11 = i2;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i10);
    i11 = i7 | 0;
    break;
   } else {
    i2 = i7 | 0;
    HEAP32[i2 >> 2] = i10;
    i12 = i10 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    i11 = i2;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = i6 | 0;
   HEAP32[i4 >> 2] = 0;
   i13 = i4;
  } else {
   if ((HEAP32[i3 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i3);
    i13 = i6 | 0;
    break;
   } else {
    i4 = i6 | 0;
    HEAP32[i4 >> 2] = i3;
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
    i13 = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 i13 = (i10 | 0) == 0;
 if (!i13) {
  i6 = i10 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i8 + 4 >> 2] = i11;
 HEAP32[i8 + 8 >> 2] = i3;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = i9;
  } else {
   i8 = i3 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11 + 2;
   HEAP32[i1 >> 2] = i9;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if (i13) {
  STACKTOP = i5;
  return;
 }
 i13 = i10 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i13 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore13StyleResolver30findFromMatchedPropertiesCacheEjRKNS0_11MatchResultE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 128 | 0;
 __ZN3WTF7HashMapIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i6, i2, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i2 >> 2] | 0) + ((HEAP32[i1 + 132 >> 2] | 0) * 48 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i5 + 4 | 0;
 i2 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = i3 | 0;
 i8 = i1 | 0;
 i9 = 0;
 while (1) {
  if (i9 >>> 0 >= i2 >>> 0) {
   i10 = 7;
   break;
  }
  i11 = HEAP32[i6 >> 2] | 0;
  i12 = HEAP32[i8 >> 2] | 0;
  if ((HEAP32[i11 + (i9 << 3) >> 2] | 0) != (HEAP32[i12 + (i9 << 3) >> 2] | 0)) {
   i7 = 0;
   i10 = 23;
   break;
  }
  if (((HEAP32[i12 + (i9 << 3) + 4 >> 2] ^ HEAP32[i11 + (i9 << 3) + 4 >> 2]) & 3 | 0) == 0) {
   i9 = i9 + 1 | 0;
  } else {
   i7 = 0;
   i10 = 17;
   break;
  }
 }
 if ((i10 | 0) == 17) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i10 | 0) == 7) {
  if ((HEAP32[i5 + 16 >> 2] | 0) != (HEAP32[i3 + 792 >> 2] | 0)) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  if ((HEAP32[i5 + 20 >> 2] | 0) != (HEAP32[i3 + 796 >> 2] | 0)) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  if ((HEAP32[i5 + 24 >> 2] | 0) != (HEAP32[i3 + 800 >> 2] | 0)) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  if ((HEAP32[i5 + 28 >> 2] | 0) != (HEAP32[i3 + 804 >> 2] | 0)) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  if ((HEAP32[i5 + 32 >> 2] | 0) != (HEAP32[i3 + 808 >> 2] | 0)) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  i7 = (HEAP32[i5 + 36 >> 2] | 0) != (HEAP32[i3 + 812 >> 2] | 0) ? 0 : i1;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i10 | 0) == 23) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver27generatedOrPendingFromValueENS_13CSSPropertyIDERNS_22CSSImageGeneratorValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 HEAP32[i7 >> 2] = i3;
 i3 = i4 | 0;
 if ((HEAP32[i4 + 4 >> 2] & 516096 | 0) == 40960) {
  __ZN7WebCore19CSSFilterImageValue22createFilterOperationsEPNS_13StyleResolverE(i4, i2);
 }
 if (!(__ZNK7WebCore22CSSImageGeneratorValue9isPendingEv(i4) | 0)) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = __ZN3WTF10fastMallocEj(28) | 0;
  HEAP32[i6 >> 2] = i4;
  __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i10, i6);
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
 HEAP32[i8 >> 2] = i4;
 __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_PNS1_22CSSImageGeneratorValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i9, i2 + 344 | 0, i7, i8);
 do {
  if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
   i7 = HEAP32[i9 >> 2] | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i4 = i2 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = i7 + 4 | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i7 | 0) == 0) {
    break;
   }
   i2 = i7 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 1;
 i9 = i8 + 8 | 0;
 i4 = HEAP8[i9] & -16;
 HEAP32[i8 >> 2] = H_BASE + 392;
 HEAP32[i8 + 12 >> 2] = i3;
 HEAP8[i9] = i4 | 2;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13StyleResolver5StateD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore9FillLayerD1Ev(i1 + 188 | 0);
 __ZN7WebCore10BorderDataD2Ev(i1 + 88 | 0);
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 64 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != 415) {
      i7 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i6 = i7 | 0;
      i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i7);
       break;
      } else {
       HEAP32[i6 >> 2] = i5;
       break;
      }
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore15FontDescriptionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 + 12 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   i6 = i3 + 4 | 0;
   i7 = i6;
   if ((i4 | 0) != 0) {
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8 + (i4 << 3) | 0;
    i4 = i8;
    while (1) {
     i8 = HEAP32[i4 >> 2] | 0;
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
     i4 = i4 + 8 | 0;
     if ((i4 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i3 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i9 = i1 - 8 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) != 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = i1 + (HEAP32[i1 - 4 >> 2] << 2) | 0;
 }
 if ((i1 | 0) == (i12 | 0)) {
  i13 = i1;
 } else {
  i9 = i1;
  while (1) {
   i1 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i4 = i1 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i9 + 4 | 0;
   if ((i9 | 0) == (i12 | 0)) {
    break;
   }
  }
  i13 = HEAP32[i2 >> 2] | 0;
 }
 __ZN3WTF8fastFreeEPv(i13 - 8 | 0);
 return;
}
function __ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i2, i1) | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i3, i2) | 0;
 do {
  if (i6) {
   i8 = i1 | 0;
   if (i7) {
    i9 = i3 | 0;
    i10 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i10;
    i11 = 1;
    break;
   }
   i10 = i2 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i3, i2) | 0)) {
    i11 = 1;
    break;
   }
   i9 = i3 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i8;
   i11 = 2;
  } else {
   if (!i7) {
    i11 = 0;
    break;
   }
   i8 = i2 | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i10;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i2, i1) | 0)) {
    i11 = 1;
    break;
   }
   i10 = i1 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i9;
   i11 = 2;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i4, i3) | 0)) {
  i12 = i11;
  return i12 | 0;
 }
 i7 = i3 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i4;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i3, i2) | 0)) {
  i12 = i11 + 1 | 0;
  return i12 | 0;
 }
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i4;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 15](i2, i1) | 0)) {
  i12 = i11 + 2 | 0;
  return i12 | 0;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i1;
 i12 = i11 + 3 | 0;
 return i12 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viiidi + 8;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiidi + 4;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viiidi + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iiif + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viiif + 4;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viiif + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 4;
}
function __ZN7WebCore13StyleResolver10updateFontEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 40 | 0;
 i7 = i1 + 392 | 0;
 if ((HEAP8[i7] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i1 + 312 >> 2] | 0;
 i9 = i1 + 324 | 0;
 __ZN7WebCore13StyleResolver27checkForGenericFamilyChangeEPNS_11RenderStyleES2_(i1, i8, HEAP32[i9 >> 2] | 0);
 __ZN7WebCore13StyleResolver18checkForZoomChangeEPNS_11RenderStyleES2_(i1, i8, HEAP32[i9 >> 2] | 0);
 __ZN7WebCore11RenderStyle26getFontAndGlyphOrientationERNS_15FontOrientationERNS_22NonCJKGlyphOrientationE(i8, i3, i4);
 i9 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(i8) | 0;
 i10 = HEAP32[i9 + 16 >> 2] | 0;
 if ((i10 & 1 | 0) == (HEAP32[i3 >> 2] | 0)) {
  if ((i10 >>> 1 & 1 | 0) != (HEAP32[i4 >> 2] | 0)) {
   i11 = 4;
  }
 } else {
  i11 = 4;
 }
 if ((i11 | 0) == 4) {
  __ZN7WebCore15FontDescriptionC2ERKS0_(i5, i9);
  i9 = i5 + 16 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -4 | HEAP32[i4 >> 2] << 1 & 2 | HEAP32[i3 >> 2] & 1;
  __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i8, i5) | 0;
  __ZN7WebCore15FontDescriptionD2Ev(i5);
 }
 i5 = __ZNK7WebCore11RenderStyle4fontEv(i8) | 0;
 i8 = i6 | 0;
 i3 = HEAP32[i1 + 240 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i1 = i3 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i5 = i8 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i5 >> 2] = i1;
    break;
   }
   i1 = i8 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
  }
 } while (0);
 HEAP8[i7] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13StyleResolver5State5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i2 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i4 + (i5 << 3) >> 2] | 0) != 415) {
      i6 = HEAP32[i4 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i2 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
  _memset(i3 | 0, 0, 16) | 0;
 }
 HEAP8[i1 + 56 | 0] = 0;
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 _memset(i3 | 0, 0, 16) | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore13StyleResolver25classNamesAffectedByRulesERKNS_16SpaceSplitStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 28 | 0;
 i4 = i1 + 36 | 0;
 i1 = i3 + 8 | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i6 = 0;
 }
 L3 : while (1) {
  if (i6 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
   i5 = 0;
   i7 = 14;
   break;
  }
  if ((HEAP32[i1 >> 2] | 0) >>> 0 <= i6 >>> 0) {
   i7 = 4;
   break;
  }
  i8 = HEAP32[i3 + 12 + (i6 << 2) >> 2] | 0;
  i9 = i8;
  i10 = HEAP32[i2 >> 2] | 0;
  L7 : do {
   if ((i10 | 0) != 0) {
    i11 = HEAP32[i4 >> 2] | 0;
    i12 = i8;
    i13 = i12 + ~(i12 << 15) | 0;
    i12 = (i13 >>> 10 ^ i13) * 9 & -1;
    i13 = i12 >>> 6 ^ i12;
    i12 = i13 + ~(i13 << 11) | 0;
    i13 = i12 >>> 16 ^ i12;
    i12 = i11 & i13;
    i14 = i10 + (i12 << 2) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i9 | 0)) {
     i16 = i14;
    } else {
     i14 = (i13 >>> 23) + ~i13 | 0;
     i13 = i14 << 12 ^ i14;
     i14 = i13 >>> 7 ^ i13;
     i13 = i14 << 2 ^ i14;
     i14 = i13 >>> 20 ^ i13 | 1;
     i13 = 0;
     i17 = i12;
     i12 = i15;
     while (1) {
      if ((i12 | 0) == 0) {
       break L7;
      }
      i15 = (i13 | 0) == 0 ? i14 : i13;
      i18 = i15 + i17 & i11;
      i19 = i10 + (i18 << 2) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i9 | 0)) {
       i16 = i19;
       break;
      } else {
       i13 = i15;
       i17 = i18;
       i12 = i20;
      }
     }
    }
    if ((i16 | 0) != 0) {
     i5 = 1;
     i7 = 15;
     break L3;
    }
   }
  } while (0);
  i6 = i6 + 1 | 0;
 }
 if ((i7 | 0) == 4) {
  _WTFCrash();
  return 0;
 } else if ((i7 | 0) == 14) {
  return i5 | 0;
 } else if ((i7 | 0) == 15) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore27CustomFilterNumberParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i5 = i2 | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = i5;
   if ((i2 | 0) != 0) {
    break;
   }
   return;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i6 = i2 + 24 | 0;
   i7 = i3 + 24 | 0;
   if ((HEAP32[i6 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i5;
    i8 = i2 + 4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    return;
   }
   i8 = __ZN3WTF10fastMallocEj(64) | 0;
   i9 = i8;
   HEAP32[i8 + 4 >> 2] = 1;
   i10 = i8;
   HEAP32[i10 >> 2] = H_BASE + 360;
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i8 + 8 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i12 = i11 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   HEAP32[i8 + 12 >> 2] = 3;
   HEAP32[i10 >> 2] = H_BASE + 264;
   HEAP32[i8 + 16 >> 2] = i8 + 32;
   HEAP32[i8 + 20 >> 2] = 4;
   HEAP32[i8 + 24 >> 2] = 0;
   L13 : do {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i10 = i3 + 16 | 0;
     i12 = i2 + 16 | 0;
     i11 = 0;
     while (1) {
      if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i11 >>> 0) {
       break;
      }
      d13 = +HEAPF64[(HEAP32[i10 >> 2] | 0) + (i11 << 3) >> 3];
      __ZN7WebCore27CustomFilterNumberParameter8addValueEd(i9, d13 + (+HEAPF64[(HEAP32[i12 >> 2] | 0) + (i11 << 3) >> 3] - d13) * d4);
      i11 = i11 + 1 | 0;
      if (i11 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
       break L13;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   HEAP32[i1 >> 2] = i8;
   return;
  }
 } while (0);
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 64;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i8 = i9 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   HEAP32[i2 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i8 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i10 >> 2] = i9;
      break;
     }
     if ((HEAP32[i8 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     }
    }
   } while (0);
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore15FontDescriptionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 - 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] & -2 | HEAP32[i3 >> 2] & 1;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -3 | HEAP32[i3 >> 2] & 2;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -33 | HEAP32[i3 >> 2] & 32;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -65 | HEAP32[i3 >> 2] & 64;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -32641 | HEAP32[i3 >> 2] & 32640;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -229377 | HEAP32[i3 >> 2] & 229376;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -262145 | HEAP32[i3 >> 2] & 262144;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -524289 | HEAP32[i3 >> 2] & 524288;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -3145729 | HEAP32[i3 >> 2] & 3145728;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -12582913 | HEAP32[i3 >> 2] & 12582912;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -50331649 | HEAP32[i3 >> 2] & 50331648;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -201326593 | HEAP32[i3 >> 2] & 201326592;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & 268435455 | HEAP32[i3 >> 2] & -268435456;
 i3 = i2 + 20 | 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i2 >> 2] = i1;
 i6 = i1 & -13 | HEAP32[i3 >> 2] & 12;
 HEAP32[i2 >> 2] = i6;
 i1 = i6 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 >> 2] = i1 & -4065 | HEAP32[i3 >> 2] & 4064;
 return;
}
function __ZN7WebCore13StyleResolver35parseCustomFilterTransformParameterERKN3WTF6StringEPNS_12CSSValueListE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i7 + 4 >> 2] = 1;
 i8 = i7;
 HEAP32[i8 >> 2] = H_BASE + 360;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 + 8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 12 >> 2] = 4;
 HEAP32[i8 >> 2] = H_BASE + 232;
 i8 = i7 + 16 | 0;
 __ZN7WebCore19TransformOperationsC1Eb(i8, 0);
 __ZN7WebCore19TransformOperationsC1Eb(i6, 0);
 __ZN7WebCore18transformsForValueEPKNS_11RenderStyleES2_PNS_8CSSValueERNS_19TransformOperationsE(HEAP32[i2 + 312 >> 2] | 0, HEAP32[i2 + 328 >> 2] | 0, i4 | 0, i6) | 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i8, i6 | 0) | 0;
 HEAP32[i1 >> 2] = i7;
 i7 = i6 + 8 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = i6 | 0;
 if ((i1 | 0) != 0) {
  i4 = HEAP32[i8 >> 2] | 0;
  i2 = i4 + (i1 << 2) | 0;
  i1 = i4;
  while (1) {
   i4 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i3 = i4 + 4 | 0;
     i9 = i3 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i3 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
   HEAP32[i7 >> 2] = i13 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   i13 = i10;
   _memcpy(i8 | 0, i13 | 0, i12 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i4 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = HEAP32[i6 + 4 >> 2] | 0;
   i7 = i3 & 516096;
   if ((i7 | 0) == 8192) {
    i8 = __ZN7WebCore13CSSImageValue11cachedImageEPNS_20CachedResourceLoaderE(i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0) | 0;
    HEAP32[i1 >> 2] = i8;
    if ((i8 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i9 = i8 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    STACKTOP = i4;
    return;
   }
   if (((i3 >>> 13 & 63) - 3 | 0) >>> 0 < 5 >>> 0) {
    i3 = i6;
    __ZN7WebCore22CSSImageGeneratorValue13loadSubimagesEPNS_20CachedResourceLoaderE(i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0);
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    i9 = __ZN3WTF10fastMallocEj(28) | 0;
    HEAP32[i5 >> 2] = i3;
    __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i9, i5);
    HEAP32[i1 >> 2] = i9;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 16384) {
    break;
   }
   i7 = __ZN7WebCore19CSSCursorImageValue11cachedImageEPNS_20CachedResourceLoaderE(i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 308 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0) | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i7 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle27setNamedGridAreaColumnCountEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if ((HEAP32[(HEAP32[i8 + 80 >> 2] | 0) + 208 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAP32[i12 + 208 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle24setNamedGridAreaRowCountEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if ((HEAP32[(HEAP32[i8 + 80 >> 2] | 0) + 204 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 80 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore13StyleGridData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore13StyleGridDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAP32[i12 + 204 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = (HEAP32[i2 + 4 >> 2] | 0) * 48 & -1 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 * 48 & -1) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 * 48 & -1) | 0;
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
     i17 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 56 & -1) | 0;
 if (i2 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 56 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 56 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 8 | 0;
   i8 = i7 + 8 | 0;
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 13 | 0;
   HEAP8[i9] = 0;
   HEAPF64[i7 + 16 >> 3] = +HEAPF64[i6 + 16 >> 3];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   i8 = i6 + 32 | 0;
   i2 = i7 + 32 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i2 + 4 >> 2] = i10;
   i10 = i6 + 37 | 0;
   HEAP8[i10] = 0;
   HEAPF64[i7 + 40 >> 3] = +HEAPF64[i6 + 40 >> 3];
   HEAP32[i7 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   if ((HEAP8[i10] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6 + 32 | 0);
   }
   if ((HEAP8[i9] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6 + 8 | 0);
   }
   i9 = i6 + 56 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 56 | 0;
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
function __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 56 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 56 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 56 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  i5 = i9 + 8 | 0;
  i7 = i8 + 8 | 0;
  i2 = i5;
  i6 = HEAP32[i7 >> 2] | 0;
  i3 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  }
  HEAPF64[i9 + 16 >> 3] = +HEAPF64[i8 + 16 >> 3];
  HEAP32[i9 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
  i5 = i9 + 32 | 0;
  i3 = i8 + 32 | 0;
  i6 = i5;
  i2 = HEAP32[i3 >> 2] | 0;
  i7 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i7;
  if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  }
  HEAPF64[i9 + 40 >> 3] = +HEAPF64[i8 + 40 >> 3];
  HEAP32[i9 + 48 >> 2] = HEAP32[i8 + 48 >> 2];
  i5 = i8 + 56 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 56 | 0;
  }
 }
 return;
}
function __ZN7WebCore5blendERKNS_5ColorES2_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 do {
  if (d4 == +1) {
   if ((HEAP8[i3 + 4 | 0] & 1) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   return;
  }
 } while (0);
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!i5) {
  i5 = i7 >>> 16 & 255;
  i8 = i3 | 0;
  i9 = _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 16 & 255) - i5 | 0) * d4)) | 0;
  i5 = (HEAP32[i6 >> 2] | 0) >>> 8 & 255;
  i10 = _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 8 & 255) - i5 | 0) * d4)) | 0;
  i5 = HEAP32[i6 >> 2] & 255;
  i11 = _round(+(+(i5 | 0) + +((HEAP32[i8 >> 2] & 255) - i5 | 0) * d4)) | 0;
  i5 = (HEAP32[i6 >> 2] | 0) >>> 24;
  HEAP32[i1 >> 2] = __ZN7WebCore8makeRGBAEiiii(i9, i10, i11, _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 24) - i5 | 0) * d4)) | 0) | 0;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
 if (i7 >>> 0 < 16777216 >>> 0) {
  i12 = 0;
 } else {
  i12 = __ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE(i2) | 0;
 }
 if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  i13 = 0;
 } else {
  i13 = __ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE(i3) | 0;
 }
 i3 = i12 >>> 16 & 255;
 i2 = _round(+(+(i3 | 0) + +((i13 >>> 16 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 >>> 8 & 255;
 i7 = _round(+(+(i3 | 0) + +((i13 >>> 8 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 & 255;
 i5 = _round(+(+(i3 | 0) + +((i13 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 >>> 24;
 __ZN7WebCore26colorFromPremultipliedARGBEj(i1, __ZN7WebCore8makeRGBAEiiii(i2, i7, i5, _round(+(+(i3 | 0) + +((i13 >>> 24) - i3 | 0) * d4)) | 0) | 0);
 return;
}
function __ZN7WebCore19FontFeatureSettings6appendERKNS_11FontFeatureE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != (HEAP32[i1 + 8 >> 2] | 0)) {
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 + (i5 << 3) >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i1 + (i5 << 3) + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 }
 i1 = i5 + 1 | 0;
 i7 = i3 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if (i6 >>> 0 > i2 >>> 0) {
   i10 = 7;
  } else {
   if ((i6 + (i5 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i10 = 7;
    break;
   }
   i11 = i1 + (i5 >>> 2) | 0;
   i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   __ZN3WTF6VectorIN7WebCore11FontFeatureELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i12 >>> 0 > i1 >>> 0 ? i12 : i1);
   i12 = HEAP32[i7 >> 2] | 0;
   i13 = i12 + (i2 - i6 >> 3 << 3) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i10 | 0) == 7) {
  i10 = i1 + (i5 >>> 2) | 0;
  i5 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
  __ZN3WTF6VectorIN7WebCore11FontFeatureELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i5 >>> 0 > i1 >>> 0 ? i5 : i1);
  i13 = i2;
  i14 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i14 + (i7 << 3) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i1 = i2 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 HEAP32[i14 + (i7 << 3) + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 return;
}
function __ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) + 108 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8 + 2;
   i9 = (HEAP32[i1 >> 2] | 0) == (i2 | 0);
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    if (!i9) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i10 = i2;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i2);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i2;
  i10 = i2;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i10 + 108 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13StyleResolver32parseCustomFilterNumberParameterERKN3WTF6StringEPNS_12CSSValueListE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = __ZN3WTF10fastMallocEj(64) | 0;
 i5 = i2;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = 1;
 i7 = i2;
 HEAP32[i7 >> 2] = H_BASE + 360;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i2 + 12 >> 2] = 3;
 HEAP32[i7 >> 2] = H_BASE + 264;
 HEAP32[i2 + 16 >> 2] = i2 + 32;
 HEAP32[i2 + 20 >> 2] = 4;
 HEAP32[i2 + 24 >> 2] = 0;
 i7 = i4 + 16 | 0;
 L4 : do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i3 = i4 + 8 | 0;
   i8 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    if ((HEAP32[i9 + 4 >> 2] & 516096 | 0) != 0) {
     i10 = 6;
     break;
    }
    i11 = i9;
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i11) | 0) << 16 >> 16 != 1) {
     i10 = 8;
     break;
    }
    __ZN7WebCore27CustomFilterNumberParameter8addValueEd(i5, +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i11));
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     break L4;
    }
   }
   if ((i10 | 0) == 6) {
    HEAP32[i1 >> 2] = 0;
   } else if ((i10 | 0) == 8) {
    HEAP32[i1 >> 2] = 0;
   }
   if ((i2 | 0) == 0) {
    return;
   }
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
    return;
   } else {
    HEAP32[i6 >> 2] = i8;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore11RenderStyle19setDashboardRegionsEN3WTF6VectorINS_20StyleDashboardRegionELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_(i5, i2);
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) == (HEAP32[i5 + 8 >> 2] | 0)) {
   i8 = HEAP32[i1 + 44 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   i10 = 0;
   while (1) {
    if (i10 >>> 0 >= i7 >>> 0) {
     break;
    }
    if (__ZNK7WebCore20StyleDashboardRegioneqERKS0_(i8 + (i10 * 40 & -1) | 0, i9 + (i10 * 40 & -1) | 0) | 0) {
     i10 = i10 + 1 | 0;
    } else {
     break L1;
    }
   }
   __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i5);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i5 >> 2] | 0) == 1) {
  i11 = i5;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i5);
  i5 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i7 = i4 | 0;
  i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i1;
  }
  HEAP32[i6 >> 2] = i5;
  i11 = i5;
 }
 __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEaSERKS4_(i11 + 44 | 0, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleResolver24cursorOrPendingFromValueENS_13CSSPropertyIDEPNS_19CSSCursorImageValueE(i1, i2, i3, i4) {
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
 HEAP32[i6 >> 2] = i3;
 HEAP32[i7 >> 2] = i4;
 i3 = __ZN7WebCore19CSSCursorImageValue20cachedOrPendingImageERNS_8DocumentE(i4, HEAP32[i2 + 216 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   if ((HEAP8[i3 + 8 | 0] & 2) == 0) {
    break;
   }
   __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_19CSSCursorImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i8, i2 + 344 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
    break;
   }
   i4 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i4 + 4 | 0;
   i4 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i4 | 0) == 0) {
    break;
   }
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26CustomFilterColorParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i7 = __ZN3WTF10fastMallocEj(24) | 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 1;
   i9 = i7;
   HEAP32[i9 >> 2] = H_BASE + 360;
   i10 = HEAP32[i2 + 8 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   HEAP32[i7 + 12 >> 2] = 1;
   HEAP32[i9 >> 2] = H_BASE + 296;
   i9 = i7 + 16 | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP8[i7 + 20 | 0] = 0;
   __ZN7WebCore5blendERKNS_5ColorES2_db(i6, i3 + 16 | 0, i2 + 16 | 0, d4, 1);
   i11 = i6;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP8[i9 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
   i11 = i7;
   HEAP32[i1 >> 2] = i11;
   if ((i7 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9 + 1;
   if ((i9 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i11);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i8 >> 2] = i9;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     if ((HEAP32[i5 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
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
function __ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i2 >> 2] = i8;
      break;
     }
     if ((HEAP32[i9 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     }
    }
   } while (0);
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
function __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemaSEOS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 | 0;
 i4 = i2 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i3;
 i3 = i1 + 4 | 0;
 i4 = i2 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 + 12 | 0;
 i4 = i2 + 12 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 i4 = i2 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 36 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 40 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 40 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return i1 | 0;
 } else {
  HEAP32[i2 >> 2] = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver24cachedOrPendingFromValueENS_13CSSPropertyIDEPNS_13CSSImageValueE(i1, i2, i3, i4) {
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
 HEAP32[i6 >> 2] = i3;
 HEAP32[i7 >> 2] = i4;
 i3 = __ZN7WebCore13CSSImageValue20cachedOrPendingImageEv(i4) | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   if ((HEAP8[i3 + 8 | 0] & 2) == 0) {
    break;
   }
   __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_13CSSImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i8, i2 + 344 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
    break;
   }
   i4 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i4 + 4 | 0;
   i4 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i4 | 0) == 0) {
    break;
   }
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorCSSOMWrappersD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 + 4 | 0;
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
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
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -1) {
     i4 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = i4 + 4 | 0;
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i4 >> 2] = i6;
      break;
     }
     i6 = i5 - 4 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi77EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = i2 + 4 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i8 | 0) == 3 | (i8 | 0) == 4 | (i8 | 0) == 108 | (i8 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   return;
  }
 } while (0);
 i8 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i8 - 3 & 65535) >>> 0 < 8 >>> 0 | i8 << 16 >> 16 == 108 | i8 << 16 >> 16 == 109) {
  __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i1, i2, i3, i4, d5, i6);
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d5 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d5;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 & 508 | 0) == 472) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 269) {
    break;
   }
   _memset(i1 | 0, 0, 7) | 0;
   return;
  }
 } while (0);
 if (((i6 >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
  __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i1, i2);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  return;
 }
}
function __ZN7WebCore7DataRefINS_15StyleFilterDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15StyleFilterData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = i3 + 12 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = i3 + 4 | 0;
  if ((i9 | 0) != 0) {
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + (i9 << 2) | 0;
   i9 = i11;
   while (1) {
    i11 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 4 | 0;
      i14 = i13 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i14 >> 2] = i15;
       break;
      }
      i15 = i13 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i12 | 0)) {
     break;
    }
   }
   HEAP32[i8 >> 2] = 0;
  }
  i8 = HEAP32[i10 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i3 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 HEAP32[i1 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP8[i5 + 4 | 0] = 0;
 i9 = i5 + 5 | 0;
 i10 = i2 & 255;
 HEAP8[i9] = i10;
 HEAP8[i5 + 6 | 0] = 0;
 i2 = i8;
 i11 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 HEAP32[i2 + 4 >> 2] = i12;
 if ((i11 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8 | 0);
  i13 = HEAP8[i9] | 0;
 } else {
  i13 = i10;
 }
 HEAPF64[i1 + 16 >> 3] = +0;
 HEAP32[i1 + 24 >> 2] = 0;
 if (i13 << 24 >> 24 == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 }
 i5 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 i13 = i7 + 5 | 0;
 HEAP8[i13] = i10;
 HEAP8[i7 + 6 | 0] = 0;
 i9 = i5;
 i8 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i9 + 4 >> 2] = i12;
 if ((i8 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  i14 = HEAP8[i13] | 0;
 } else {
  i14 = i10;
 }
 HEAPF64[i1 + 40 >> 3] = +0;
 HEAP32[i1 + 48 >> 2] = 0;
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13StyleResolver10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 i8 = i7 & 516096;
 if ((i8 | 0) == 8192) {
  __ZN7WebCore13StyleResolver24cachedOrPendingFromValueENS_13CSSPropertyIDEPNS_13CSSImageValueE(i1, i2, i3, i4);
  STACKTOP = i5;
  return;
 }
 i9 = i7 >>> 13 & 63;
 if ((i9 - 3 | 0) >>> 0 >= 5 >>> 0) {
  if ((i8 | 0) == 16384) {
   __ZN7WebCore13StyleResolver24cursorOrPendingFromValueENS_13CSSPropertyIDEPNS_19CSSCursorImageValueE(i1, i2, i3, i4);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 }
 if ((i9 - 6 | 0) >>> 0 >= 2 >>> 0) {
  __ZN7WebCore13StyleResolver27generatedOrPendingFromValueENS_13CSSPropertyIDERNS_22CSSImageGeneratorValueE(i1, i2, i3, i4);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore16CSSGradientValue26gradientWithStylesResolvedEPNS_13StyleResolverE(i6, i4, i2);
 i4 = i6 | 0;
 __ZN7WebCore13StyleResolver27generatedOrPendingFromValueENS_13CSSPropertyIDERNS_22CSSImageGeneratorValueE(i1, i2, i3, HEAP32[i4 >> 2] | 0);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i3 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore13StyleResolver35styleSharingCandidateMatchesRuleSetEPNS_7RuleSetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 888 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 HEAP32[i4 >> 2] = i1 + 308;
 HEAP32[i4 + 4 >> 2] = i1;
 i6 = i1 + 220 | 0;
 HEAP32[i4 + 8 >> 2] = i6;
 HEAP32[i4 + 12 >> 2] = i1 + 268;
 HEAP32[i4 + 16 >> 2] = HEAP32[i1 + 260 >> 2];
 HEAP8[i4 + 20 | 0] = 0;
 HEAP32[i4 + 44 >> 2] = 0;
 i7 = i4 + 48 | 0;
 _memset(i4 + 24 | 0, 0, 17) | 0;
 i8 = HEAP32[i1 + 320 >> 2] | 0;
 i9 = HEAP32[i1 + 228 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   i1 = _llvm_uadd_with_overflow_i32(i9 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i10 = (HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 5) >> 2] | 0) == (i8 | 0) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 HEAP8[i7] = i10;
 _memset(i4 + 52 | 0, 0, 16) | 0;
 HEAP32[i4 + 68 >> 2] = i4 + 80;
 HEAP32[i4 + 72 >> 2] = 64;
 HEAP32[i4 + 76 >> 2] = 0;
 HEAP32[i4 + 592 >> 2] = i4 + 604;
 HEAP32[i4 + 596 >> 2] = 64;
 HEAP32[i4 + 600 >> 2] = 0;
 _memset(i4 + 860 | 0, -1 | 0, 24) | 0;
 HEAP8[i4 + 884 | 0] = 1;
 i10 = __ZN7WebCore20ElementRuleCollector19hasAnyMatchingRulesEPNS_7RuleSetE(i4, i2) | 0;
 __ZN7WebCore20ElementRuleCollectorD2Ev(i4);
 i5 = i10;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore13StyleResolver18checkForZoomChangeEPNS_11RenderStyleES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, d9 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if (+HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2] == +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2]) {
  STACKTOP = i4;
  return;
 }
 i3 = __ZNK7WebCore11RenderStyle15fontDescriptionEv(i2) | 0;
 __ZN7WebCore15FontDescriptionC2ERKS0_(i5, i3);
 d6 = +HEAPF32[i3 + 8 >> 2];
 do {
  if (d6 < 3.4028234663852886e+38) {
   if (d6 <= -3.4028234663852886e+38) {
    d7 = -3.4028234663852886e+38;
    break;
   }
   d7 = d6;
  } else {
   d7 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i5 + 8 >> 2] = d7;
 i3 = HEAP32[i1 + 308 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = (HEAP32[i3 + 12 >> 2] & 32 | 0) != 0;
 }
 d7 = +__ZN7WebCore5Style33computedFontSizeFromSpecifiedSizeEfbbPKNS_11RenderStyleERKNS_8DocumentE(d6, (HEAP32[i5 + 16 >> 2] & 64 | 0) != 0, i8, HEAP32[i1 + 312 >> 2] | 0, HEAP32[i1 + 216 >> 2] | 0);
 do {
  if (d7 < 3.4028234663852886e+38) {
   if (d7 <= -3.4028234663852886e+38) {
    d9 = -3.4028234663852886e+38;
    break;
   }
   d9 = d7;
  } else {
   d9 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i5 + 12 >> 2] = d9;
 __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i2, i5) | 0;
 __ZN7WebCore15FontDescriptionD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore27CustomFilterNumberParameter8addValueEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAPF64[i4 >> 3] = d2;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAPF64[(HEAP32[i5 >> 2] | 0) + (i7 << 3) >> 3] = d2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i1 = i7 + 1 | 0;
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if (i11 >>> 0 > i4 >>> 0) {
   i12 = 5;
  } else {
   if ((i11 + (i7 << 3) | 0) >>> 0 <= i4 >>> 0) {
    i12 = 5;
    break;
   }
   i13 = i1 + (i7 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   __ZN3WTF6VectorIdLj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i14 >>> 0 > i1 >>> 0 ? i14 : i1);
   i14 = HEAP32[i10 >> 2] | 0;
   i15 = i14 + (i4 - i11 >> 3 << 3) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i12 | 0) == 5) {
  i12 = i1 + (i7 >>> 2) | 0;
  i7 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
  __ZN3WTF6VectorIdLj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i1 >>> 0 ? i7 : i1);
  i15 = i4;
  i16 = HEAP32[i10 >> 2] | 0;
 }
 HEAPF64[i16 + (HEAP32[i6 >> 2] << 3) >> 3] = +HEAPF64[i15 >> 3];
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i2 = i5 + 5 | 0;
  i8 = HEAP8[i2] | 0;
  i9 = i2;
 } else {
  i8 = (i7 >>> 8 | 0 << 24) & 255;
  i9 = i5 + 5 | 0;
 }
 if ((HEAP8[i1 + 5 | 0] | 0) == i8 << 24 >> 24) {
  do {
   if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) == 0) {
    if (i8 << 24 >> 24 == 15) {
     i10 = 1;
     break;
    }
    if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i1 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i1 >> 2];
    }
    if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
     d12 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i4 >> 2];
    }
    if (d11 == d12) {
     i10 = 1;
     break;
    }
    i10 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i5) | 0;
   } else {
    i10 = 0;
   }
  } while (0);
  i13 = i10;
  i14 = HEAP8[i9] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 216 | 0;
 __ZN7WebCore16DocumentRuleSets23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEEPNS_19MediaQueryEvaluatorERNS_22InspectorCSSOMWrappersEbPNS_13StyleResolverE(i1 | 0, i2, i3, HEAP32[i1 + 208 >> 2] | 0, i1 + 268 | 0, (HEAP8[(HEAP32[i6 >> 2] | 0) + 1579 | 0] & 1) != 0, i1);
 i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 1584 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i3 + 36 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 240 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i6, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 104 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 104 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i8 + 16 >> 2] | 0);
 if ((HEAP8[i7 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8 + 8 | 0);
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
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
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  i6 = i1 + (i4 * 40 & -1) | 0;
  i4 = i1;
  while (1) {
   if ((HEAP8[i4 + 33 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 28 | 0);
   }
   if ((HEAP8[i4 + 25 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 20 | 0);
   }
   if ((HEAP8[i4 + 17 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 12 | 0);
   }
   if ((HEAP8[i4 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 4 | 0);
   }
   i1 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 40 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore11RenderStyle9setZIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 64 >> 2] & 1 | 0) == 0) {
  i7 = i1;
 } else {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i8 = i1;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
   i1 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i6 >> 2] = i1;
   i8 = i1;
  }
  i1 = i8 + 64 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 + 60 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i1 = i5 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 HEAP32[i11 + 60 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle16setHasAutoZIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 + 64 >> 2] & 1 | 0) == 0) {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i6 = i1;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i3, i1);
   i7 = HEAP32[i3 >> 2] | 0;
   i3 = HEAP32[i5 >> 2] | 0;
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   } else {
    HEAP32[i8 >> 2] = i9;
   }
   HEAP32[i5 >> 2] = i7;
   i6 = i7;
  }
  i7 = i6 + 64 | 0;
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 1;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i1;
 }
 if ((HEAP32[i10 + 60 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i10 >> 2] | 0) == 1) {
  i11 = i10;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i10);
  i10 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i10;
  i11 = i10;
 }
 HEAP32[i11 + 60 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore11FontFeatureELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
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
function __ZN7WebCore11RenderStyle16adjustMaskLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 + 116 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  i7 = i3 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 __ZN7WebCore9FillLayer15cullEmptyLayersEv(i6 + 116 | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 1) {
  i9 = i6;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i6;
  i9 = i6;
 }
 __ZN7WebCore9FillLayer19fillUnsetPropertiesEv(i9 + 116 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13StyleResolver11MatchResultD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 532 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 524 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!((i1 + 536 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 528 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i2 << 3) | 0;
  i2 = i5;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     if ((HEAP32[i5 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     }
    }
   } while (0);
   i2 = i2 + 8 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i1 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 40 & -1) | 0;
  i3 = i5;
  while (1) {
   if ((HEAP8[i3 + 33 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 28 | 0);
   }
   if ((HEAP8[i3 + 25 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 20 | 0);
   }
   if ((HEAP8[i3 + 17 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 12 | 0);
   }
   if ((HEAP8[i3 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 4 | 0);
   }
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 40 | 0;
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
function __ZN7WebCore13StyleResolver36addViewportDependentMediaQueryResultEPKNS_13MediaQueryExpEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 + 244 | 0;
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 i6 = i5;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 + 4 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP8[i5 + 8 | 0] = HEAP8[i2 + 8 | 0] & 1;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i5 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 16 | 0] = i3 & 1;
 i3 = i1 + 252 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 248 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore16MediaQueryResultEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i5 + 1 | 0);
  HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i6;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  return;
 } else {
  HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] = i6;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  return;
 }
}
function __ZN7WebCore11RenderStyle22adjustBackgroundLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i3, i1);
  i1 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  i7 = i3 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i3 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 __ZN7WebCore9FillLayer15cullEmptyLayersEv(i6 + 4 | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 1) {
  i9 = i6;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i4, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i1 = i4 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i6;
  i9 = i6;
 }
 __ZN7WebCore9FillLayer19fillUnsetPropertiesEv(i9 + 4 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore30CustomFilterTransformParameterD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 232;
 i3 = i1 + 24 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 16 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 + 4 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 360;
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
function __ZN7WebCore13StyleResolver18CascadedProperties10addMatchesERKNS0_11MatchResultEbiib(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i4 | 0) == -1) {
  i7 = 1;
  return i7 | 0;
 }
 i8 = i2 + 8 | 0;
 i9 = i2 | 0;
 i10 = i2 + 532 | 0;
 i2 = i4;
 while (1) {
  if ((i2 | 0) > (i5 | 0)) {
   i7 = 1;
   i11 = 12;
   break;
  }
  if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i11 = 5;
   break;
  }
  i4 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i11 = 7;
   break;
  }
  i12 = HEAP32[i4 + (i2 << 3) + 4 >> 2] | 0;
  if (__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj(i1, HEAP32[i4 + (i2 << 3) >> 2] | 0, 0, i3, i6, i12 >>> 2 & 3, i12 & 3) | 0) {
   i2 = i2 + 1 | 0;
  } else {
   i7 = 0;
   i11 = 10;
   break;
  }
 }
 if ((i11 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i11 | 0) == 10) {
  return i7 | 0;
 } else if ((i11 | 0) == 12) {
  return i7 | 0;
 } else if ((i11 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore20ElementRuleCollectorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN7WebCore13StyleResolver11MatchResultD1Ev(i1 + 68 | 0);
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 56 | 0;
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
      __ZN7WebCore13StyleRuleBase7destroyEv(i5);
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
  HEAP32[i1 + 60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (!((i2 + 12 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = (i5 | 0) != 0;
 if ((HEAP32[i3 >> 2] | 0) == 19) {
  if (!i6) {
   return;
  }
  HEAP32[i2 + 388 >> 2] = i5;
  return;
 }
 if (i6) {
  HEAP8[i2 + 341 | 0] = 1;
  HEAP8[i2 + 342 | 0] = 0;
  __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i2, HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 }
 if ((HEAP32[(HEAP32[i2 + 312 >> 2] | 0) + 44 >> 2] & 6144 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP8[i2 + 341 | 0] = 1;
  HEAP8[i2 + 342 | 0] = 0;
  __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i2, HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 }
 i4 = i1 + 12 | 0;
 i1 = i2 + 341 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i7 = i2 + 342 | 0;
 } else {
  HEAP8[i1] = 0;
  i6 = i2 + 342 | 0;
  HEAP8[i6] = 1;
  __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i2, HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0);
  i7 = i6;
 }
 HEAP8[i1] = 1;
 HEAP8[i7] = 0;
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
function __ZN7WebCore17StyleGridItemDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
function __ZNK7WebCore13StyleResolver24affectedByViewportChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 252 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 208 | 0;
 i5 = i1 + 244 | 0;
 i1 = 0;
 i6 = i3;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i7 = 0;
   i8 = 9;
   break;
  }
  if (i6 >>> 0 <= i1 >>> 0) {
   i8 = 4;
   break;
  }
  i9 = __ZNK7WebCore19MediaQueryEvaluator4evalEPKNS_13MediaQueryExpE(HEAP32[i4 >> 2] | 0, HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0;
  i10 = HEAP32[i2 >> 2] | 0;
  if (i10 >>> 0 <= i1 >>> 0) {
   i8 = 6;
   break;
  }
  if ((i9 & 1 | 0) == (HEAP8[(HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 16 | 0] & 1 | 0)) {
   i1 = i1 + 1 | 0;
   i6 = i10;
  } else {
   i7 = 1;
   i8 = 10;
   break;
  }
 }
 if ((i8 | 0) == 9) {
  return i7 | 0;
 } else if ((i8 | 0) == 10) {
  return i7 | 0;
 } else if ((i8 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver23viewportPercentageValueERNS_17CSSPrimitiveValueEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 216 | 0;
 __ZNK7WebCore10RenderView12viewportSizeEv(i5, HEAP32[(HEAP32[i7 >> 2] | 0) + 1584 >> 2] | 0);
 i1 = ~~(+(Math_imul(HEAP32[i5 + 4 >> 2] | 0, i3) | 0) / +100);
 __ZNK7WebCore10RenderView12viewportSizeEv(i6, HEAP32[(HEAP32[i7 >> 2] | 0) + 1584 >> 2] | 0);
 i7 = ~~(+(Math_imul(HEAP32[i6 >> 2] | 0, i3) | 0) / +100);
 i3 = HEAP32[i2 + 4 >> 2] & 508;
 if ((i3 | 0) == 108) {
  i8 = i1;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((i3 | 0) == 116) {
  i8 = (i7 | 0) < (i1 | 0) ? i1 : i7;
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i3 | 0) == 104) {
  i8 = i7;
  STACKTOP = i4;
  return i8 | 0;
 } else {
  if ((i3 | 0) != 112) {
   i8 = 0;
   STACKTOP = i4;
   return i8 | 0;
  }
  i8 = (i1 | 0) < (i7 | 0) ? i1 : i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore13StyleResolver18CascadedProperties8PropertyELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 8 >>> 0) {
   if (i2 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
    HEAP32[i3 >> 2] = i7 >>> 4;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 8;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 4) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13StyleResolver11setFontSizeERNS_15FontDescriptionEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var d4 = +0, i5 = 0, i6 = 0, d7 = +0, i8 = 0;
 do {
  if (d3 < 3.4028234663852886e+38) {
   if (d3 <= -3.4028234663852886e+38) {
    d4 = -3.4028234663852886e+38;
    break;
   }
   d4 = d3;
  } else {
   d4 = 3.4028234663852886e+38;
  }
 } while (0);
 HEAPF32[i2 + 8 >> 2] = d4;
 i5 = HEAP32[i1 + 308 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = (HEAP32[i5 + 12 >> 2] & 32 | 0) != 0;
 }
 d4 = +__ZN7WebCore5Style33computedFontSizeFromSpecifiedSizeEfbbPKNS_11RenderStyleERKNS_8DocumentE(d3, (HEAP32[i2 + 16 >> 2] & 64 | 0) != 0, i6, HEAP32[i1 + 312 >> 2] | 0, HEAP32[i1 + 216 >> 2] | 0);
 if (d4 >= 3.4028234663852886e+38) {
  d7 = 3.4028234663852886e+38;
  i8 = i2 + 12 | 0;
  HEAPF32[i8 >> 2] = d7;
  return;
 }
 if (d4 <= -3.4028234663852886e+38) {
  d7 = -3.4028234663852886e+38;
  i8 = i2 + 12 | 0;
  HEAPF32[i8 >> 2] = d7;
  return;
 }
 d7 = d4;
 i8 = i2 + 12 | 0;
 HEAPF32[i8 >> 2] = d7;
 return;
}
function __ZN7WebCore13StyleResolver20applyPropertyToStyleENS_13CSSPropertyIDEPNS_8CSSValueEPNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1 + 308 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 316 >> 2] = 0;
  HEAP32[i1 + 336 >> 2] = 0;
 }
 __ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE(i1 + 308 | 0, HEAP32[i1 + 216 >> 2] | 0, 0, i4, 0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 312 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3);
 return;
}
function __ZN7WebCore13StyleResolver31parseCustomFilterColorParameterERKN3WTF6StringEPNS_12CSSValueListE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP32[i4 + 16 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[HEAP32[i4 + 8 >> 2] >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i4 + 4 >> 2] = 1;
 i5 = i4;
 HEAP32[i5 >> 2] = H_BASE + 360;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i4 + 12 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 296;
 i5 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i4 + 20 | 0;
 HEAP8[i3] = 0;
 if ((HEAP32[i2 + 4 >> 2] & 508 | 0) != 100) {
  i7 = 0;
  HEAP32[i5 >> 2] = i7;
  HEAP8[i3] = 1;
  i8 = i1 | 0;
  i9 = i4;
  HEAP32[i8 >> 2] = i9;
  return;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 HEAP8[i3] = 1;
 i8 = i1 | 0;
 i9 = i4;
 HEAP32[i8 >> 2] = i9;
 return;
}
function __ZN3WTF6VectorIPN7WebCore9StyleRuleELj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 64;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13StyleResolver18CascadedProperties3setENS_13CSSPropertyIDERNS_8CSSValueEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (__ZN7WebCore11CSSProperty24isDirectionAwarePropertyENS_13CSSPropertyIDE(i2) | 0) {
  i5 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(i2, HEAP32[i1 + 6832 >> 2] | 0, HEAP32[i1 + 6836 >> 2] | 0) | 0;
 } else {
  i5 = i2;
 }
 i2 = i1 + 6640 + (i5 >>> 5 << 2) | 0;
 i6 = 1 << (i5 & 31);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i6 & i7 | 0) == 0) {
  _memset(i1 + (i5 << 4) + 4 | 0, 0, 12) | 0;
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 HEAP32[i2 >> 2] = i8 | i6;
 HEAP32[i1 + (i5 << 4) >> 2] = i5;
 if ((i4 | 0) == 3) {
  HEAP32[i1 + (i5 << 4) + 4 >> 2] = i3;
  HEAP32[i1 + (i5 << 4) + 8 >> 2] = i3;
  HEAP32[i1 + (i5 << 4) + 12 >> 2] = i3;
  return;
 } else {
  HEAP32[i1 + (i5 << 4) + 4 + (i4 << 2) >> 2] = i3;
  return;
 }
}
function __ZN3WTF6VectorIdLj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i7 >>> 3;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 16 | 0;
    break;
   }
  } else {
   i8 = i1 + 16 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 4;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 3) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore16MediaQueryResultEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i1 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 3) | 0;
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
function __ZN7WebCore27CustomFilterNumberParameterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 264;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 32 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i2 >> 2] = H_BASE + 360;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
}
function __ZN7WebCore26CustomFilterArrayParameterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 328;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i2 >> 2] = H_BASE + 360;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
}
function __ZN7WebCore13StyleResolver28computeMatchedPropertiesHashEPKNS0_17MatchedPropertiesEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 << 1 & 1073741822;
 if ((i3 | 0) == 0) {
  i4 = -1640531527;
 } else {
  i2 = i3;
  i3 = i1;
  i1 = -1640531527;
  while (1) {
   i5 = i2 - 1 | 0;
   i6 = (HEAPU16[i3 >> 1] | 0) + i1 | 0;
   i7 = (HEAPU16[i3 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
   i6 = (i7 >>> 11) + i7 | 0;
   if ((i5 | 0) == 0) {
    i4 = i6;
    break;
   } else {
    i2 = i5;
    i3 = i3 + 4 | 0;
    i1 = i6;
   }
  }
 }
 i1 = i4 << 3 ^ i4;
 i4 = (i1 >>> 5) + i1 | 0;
 i1 = i4 << 2 ^ i4;
 i4 = (i1 >>> 15) + i1 | 0;
 i1 = (i4 << 10 ^ i4) & 16777215;
 return ((i1 | 0) == 0 ? 8388608 : i1) | 0;
}
function __ZN7WebCore27CustomFilterNumberParameterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 264;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 32 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i2 >> 2] = H_BASE + 360;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCoreneERKNS_13StyleResolver11MatchRangesES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 20 >> 2] | 0) != (HEAP32[i2 + 20 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCoreeqERKNS_13StyleResolver11MatchRangesES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 20 >> 2] | 0) == (HEAP32[i2 + 20 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCore26CustomFilterArrayParameterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 328;
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i2 >> 2] = H_BASE + 360;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 128 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   if ((HEAP32[i3 + (i1 * 48 & -1) >> 2] | 0) != -1) {
    __ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev(i3 + (i1 * 48 & -1) + 4 | 0);
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
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
function __ZN7WebCore13StyleResolver23applyCascadedPropertiesERNS0_18CascadedPropertiesEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i3 | 0) > (i4 | 0)) {
  return;
 } else {
  i5 = i3;
 }
 while (1) {
  if ((HEAP32[i2 + 6640 + (i5 >>> 5 << 2) >> 2] & 1 << (i5 & 31) | 0) != 0) {
   __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i2 + (i5 << 4) | 0, i1);
  }
  i5 = i5 + 1 | 0;
  if ((i5 | 0) > (i4 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13StyleResolver27createCustomFilterOperationEPNS_20WebKitCSSFilterValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i3 + 16 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[HEAP32[i3 + 8 >> 2] >> 2] | 0) + 4 >> 2] & 516096 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore13StyleResolver43createCustomFilterOperationWithInlineSyntaxEPNS_20WebKitCSSFilterValueE(i1, i2, i3);
  return;
 }
}
function __ZN7WebCore13StyleResolver16popParentElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 220 | 0;
 i4 = HEAP32[i1 + 228 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 5) >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore14SelectorFilter19popParentStackFrameEv(i3);
 return;
}
function __ZN7WebCore13StyleResolver18CascadedProperties23applyDeferredPropertiesERS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 6692 >> 2] | 0;
 i4 = HEAP32[i1 + 6700 >> 2] | 0;
 i1 = i3 + (i4 << 4) | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i5 = i3;
 }
 while (1) {
  __ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_(i5, i2);
  i5 = i5 + 16 | 0;
  if ((i5 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13StyleResolver20convertToFloatLengthEPKNS_17CSSPrimitiveValueEPKNS_11RenderStyleES6_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  return;
 } else {
  __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi122EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, 0);
  return;
 }
}
function __ZN7WebCore13StyleResolver18convertToIntLengthEPKNS_17CSSPrimitiveValueEPKNS_11RenderStyleES6_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  return;
 } else {
  __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, 0);
  return;
 }
}
function __ZNK7WebCore27CustomFilterNumberParametereqERKNS_21CustomFilterParameterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (_memcmp(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0, i4 << 3 | 0) | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCore13StyleResolver11styleShaderEPNS_8CSSValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 4 >> 2] & 516096 | 0) != 188416) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZN7WebCore20WebKitCSSShaderValue21cachedOrPendingShaderEv(i2) | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i4 + 8 | 0] & 2) == 0) {
  i3 = i4;
  return i3 | 0;
 }
 HEAP8[i1 + 364 | 0] = 1;
 i3 = i4;
 return i3 | 0;
}
function __ZNK7WebCore26CustomFilterArrayParametereqERKNS_21CustomFilterParameterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (_memcmp(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0, i4 << 3 | 0) | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCore5TimerINS_13StyleResolverEE5firedEv(i1) {
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
function __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if ((__ZNK7WebCore4Node25parentOrShadowHostElementEv(i2 | 0) | 0) != 0) {
   if ((HEAP32[i1 + 228 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore14SelectorFilter10pushParentEPNS_7ElementE(i1 + 220 | 0, i2);
   return;
  }
 } while (0);
 __ZN7WebCore14SelectorFilter16setupParentStackEPNS_7ElementE(i1 + 220 | 0, i2);
 return;
}
function __ZN7WebCore26CustomFilterColorParameterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
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
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore21CustomFilterParameterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13StyleResolver43colorFromPrimitiveValueIsDerivedFromElementEPNS_17CSSPrimitiveValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP32[i1 + 4 >> 2] & 508 | 0) == 472) {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i2 | 0) == 124 | (i2 | 0) == 91 | (i2 | 0) == 92 | (i2 | 0) == 122) {
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
function __ZNK7WebCore26CustomFilterColorParametereqERKNS_21CustomFilterParameterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 20 | 0] & 1) != 0 ^ (HEAP8[i2 + 20 | 0] & 1) != 0 ^ 1;
 return i3 | 0;
}
function __ZN7WebCore13StyleResolver18CascadedProperties19setPropertyInternalERNS1_8PropertyENS_13CSSPropertyIDERNS_8CSSValueEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i4 | 0) == 3) {
  HEAP32[i1 + 4 >> 2] = i3;
  HEAP32[i1 + 8 >> 2] = i3;
  HEAP32[i1 + 12 >> 2] = i3;
  return;
 } else {
  HEAP32[i1 + 4 + (i4 << 2) >> 2] = i3;
  return;
 }
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
function __ZN7WebCore13StyleResolver35cachedOrPendingStyleShaderFromValueEPNS_20WebKitCSSShaderValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore20WebKitCSSShaderValue21cachedOrPendingShaderEv(i2) | 0;
 if ((i3 | 0) == 0) {
  return i3 | 0;
 }
 if ((HEAP8[i3 + 8 | 0] & 2) == 0) {
  return i3 | 0;
 }
 HEAP8[i1 + 364 | 0] = 1;
 return i3 | 0;
}
function __ZN7WebCore26CustomFilterColorParameterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
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
function __ZN7WebCore21CustomFilterParameterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
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
function __ZN7WebCore13StyleResolver18CascadedPropertiesC2ENS_13TextDirectionENS_11WritingModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 + 6640 | 0, 0, 52) | 0;
 HEAP32[i1 + 6692 >> 2] = i1 + 6704;
 HEAP32[i1 + 6696 >> 2] = 8;
 HEAP32[i1 + 6700 >> 2] = 0;
 HEAP32[i1 + 6832 >> 2] = i2;
 HEAP32[i1 + 6836 >> 2] = i3;
 return;
}
function __ZN7WebCore13StyleResolver18CascadedPropertiesC1ENS_13TextDirectionENS_11WritingModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 + 6640 | 0, 0, 52) | 0;
 HEAP32[i1 + 6692 >> 2] = i1 + 6704;
 HEAP32[i1 + 6696 >> 2] = 8;
 HEAP32[i1 + 6700 >> 2] = 0;
 HEAP32[i1 + 6832 >> 2] = i2;
 HEAP32[i1 + 6836 >> 2] = i3;
 return;
}
function __ZNK7WebCore30CustomFilterTransformParametereqERKNS_21CustomFilterParameterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore19TransformOperationseqERKS0_(i1 + 16 | 0, i2 + 16 | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore13StyleResolver20loadPendingResourcesEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 312 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolver17loadPendingImagesEv(i1);
 __ZN7WebCore13StyleResolver18loadPendingShadersEv(i1);
 __ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv(i1);
 return;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3);
 return;
}
function __ZN7WebCoreneERKNS_13StyleResolver17MatchedPropertiesES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = ((HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2]) & 3 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCoreeqERKNS_13StyleResolver17MatchedPropertiesES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ((HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2]) & 3 | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCoreL30sortParametersByNameComparatorERKN3WTF6RefPtrINS_21CustomFilterParameterEEES5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3WTF24codePointCompareLessThanERKNS_6StringES2_((HEAP32[i1 >> 2] | 0) + 8 | 0, (HEAP32[i2 >> 2] | 0) + 8 | 0) | 0;
}
function __ZNK7WebCore17StylePendingImage8cssValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore13StyleResolver20styleRulesForElementEPNS_7ElementEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyleResolver26pseudoStyleRulesForElementEPNS_7ElementENS_8PseudoIdEj(i1, i2, i3, 0, i4);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore13StyleResolver15useSVGZoomRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 308 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] & 32 | 0) != 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
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
function __ZN7WebCore13StyleResolver52createCustomFilterOperationWithAtRuleReferenceSyntaxEPNS_20WebKitCSSFilterValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 15](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function dynCall_viiiid(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiid[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
}
function __ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
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
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5);
}
function __ZN7WebCore30CustomFilterTransformParameterD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30CustomFilterTransformParameterD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 3](i2 | 0, i3 | 0, +d4) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_13StyleResolverEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore30CustomFilterTransformParameterD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30CustomFilterTransformParameterD2Ev(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return 1;
}
function __ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE(i1, i2) {
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
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore13StyleResolver20pushParentShadowRootEPKNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZN7WebCore13StyleResolver19popParentShadowRootEPKNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore5TimerINS_13StyleResolverEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function b6(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(6);
}
function b4(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(4);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZN7WebCore17StylePendingImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function __ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b0(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(0);
}
function __ZNK7WebCore10StyleImage16imageScaleFactorEv(i1) {
 i1 = i1 | 0;
 return +(+1);
}
function b11(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(11);
 return 0;
}
function __ZNK7WebCore17StylePendingImage4dataEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore10StyleImage13errorOccurredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10StyleImage11cachedImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore10StyleImage8isLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function __ZN7WebCore17StylePendingImageD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
}
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiif = [b0,b0,__ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf,b0,__ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore26CustomFilterColorParameterD0Ev,b3,__ZN7WebCore30CustomFilterTransformParameterD0Ev,b3,__ZN7WebCore27CustomFilterNumberParameterD0Ev,b3,__ZN7WebCore21CustomFilterParameterD0Ev,b3,__ZN7WebCore26CustomFilterColorParameterD1Ev,b3,__ZN7WebCore17StylePendingImageD0Ev,b3,__ZN7WebCore27CustomFilterNumberParameterD1Ev,b3,__ZN7WebCore17StylePendingImageD1Ev,b3,__ZN7WebCore5TimerINS_13StyleResolverEED0Ev,b3,__ZN7WebCore26CustomFilterArrayParameterD1Ev,b3,__ZN7WebCore5TimerINS_13StyleResolverEE5firedEv,b3,__ZN7WebCore26CustomFilterArrayParameterD0Ev,b3,__ZN7WebCore5TimerINS_13StyleResolverEED1Ev,b3,__ZN7WebCore21CustomFilterParameterD1Ev
  ,b3,__ZN7WebCore13StyleResolverD2Ev,b3,__ZN7WebCore30CustomFilterTransformParameterD1Ev,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viiidi = [b4,b4,__ZN7WebCore26CustomFilterColorParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE,b4,__ZN7WebCore27CustomFilterNumberParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE,b4,__ZN7WebCore26CustomFilterArrayParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE,b4,__ZN7WebCore30CustomFilterTransformParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE,b5,__ZN7WebCore13StyleResolver27sweepMatchedPropertiesCacheEPNS_5TimerIS0_EE,b5,__ZNK7WebCore17StylePendingImage8cssValueEv,b5,__ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viiiid = [b6,b6];
  var FUNCTION_TABLE_ii = [b7,b7,__ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv,b7,__ZNK7WebCore10StyleImage11cachedImageEv,b7,__ZNK7WebCore17StylePendingImage4dataEv,b7,__ZNK7WebCore10StyleImage8isLoadedEv,b7,__ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv,b7,__ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv,b7,__ZNK7WebCore10StyleImage13errorOccurredEv,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZN7WebCore13StyleResolver18CascadedPropertiesC2ENS_13TextDirectionENS_11WritingModeE,b8,__ZN7WebCore13StyleResolverC2ERNS_8DocumentEb,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v____cxa_pure_virtual__wrapper,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZNK7WebCore10StyleImage16imageScaleFactorEv,b10];
  var FUNCTION_TABLE_iiif = [b11,b11,__ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf,b11];
  var FUNCTION_TABLE_iii = [b12,b12,__ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE,b12,__ZNK7WebCore26CustomFilterArrayParametereqERKNS_21CustomFilterParameterE,b12,__ZNK7WebCore27CustomFilterNumberParametereqERKNS_21CustomFilterParameterE,b12,__ZNK7WebCore30CustomFilterTransformParametereqERKNS_21CustomFilterParameterE,b12,__ZN7WebCoreL30sortParametersByNameComparatorERKN3WTF6RefPtrINS_21CustomFilterParameterEEES5_,b12,__ZNK7WebCore26CustomFilterColorParametereqERKNS_21CustomFilterParameterE,b12,b12,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,__ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE,b13];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, _memmove: _memmove, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiif: dynCall_viiif, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_vii: dynCall_vii, dynCall_viiiid: dynCall_viiiid, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iiif: dynCall_iiif, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiif": invoke_viiif, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_vii": invoke_vii, "invoke_viiiid": invoke_viiiid, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iiif": invoke_iiif, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZTVN7WebCore24StyleCustomFilterProgramE": __ZTVN7WebCore24StyleCustomFilterProgramE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames8meterTagE": __ZN7WebCore9HTMLNames8meterTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN7WebCore9HTMLNames11progressTagE": __ZN7WebCore9HTMLNames11progressTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZTVN7WebCore31BasicColorMatrixFilterOperationE": __ZTVN7WebCore31BasicColorMatrixFilterOperationE, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE, "__ZN7WebCore8SVGNames7textTagE": __ZN7WebCore8SVGNames7textTagE, "__ZN7WebCore9HTMLNames8langAttrE": __ZN7WebCore9HTMLNames8langAttrE, "__ZN7WebCore9HTMLNames5rtTagE": __ZN7WebCore9HTMLNames5rtTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZTVN7WebCore25DropShadowFilterOperationE": __ZTVN7WebCore25DropShadowFilterOperationE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames9legendTagE": __ZN7WebCore9HTMLNames9legendTagE, "__ZN7WebCore9HTMLNames10isindexTagE": __ZN7WebCore9HTMLNames10isindexTagE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZTVN7WebCore37BasicComponentTransferFilterOperationE": __ZTVN7WebCore37BasicComponentTransferFilterOperationE, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames12readonlyAttrE": __ZN7WebCore9HTMLNames12readonlyAttrE, "__ZTVN7WebCore19BlurFilterOperationE": __ZTVN7WebCore19BlurFilterOperationE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE": __ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var _memmove = Module["_memmove"] = asm["_memmove"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiid = Module["dynCall_viiiid"] = asm["dynCall_viiiid"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore17StylePendingImage21imageHasRelativeWidthEv","__ZN7WebCore13StyleResolver36addViewportDependentMediaQueryResultEPKNS_13MediaQueryExpEb","__ZN7WebCore19FontFeatureSettings6appendERKNS_11FontFeatureE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver31parseCustomFilterArrayParameterERKN3WTF6StringEPNS_12CSSValueListEb","__ZN7WebCore11RenderStyle18setDashboardRegionEiRKN3WTF6StringENS_6LengthES5_S5_S5_b","__ZSt11make_uniqueIN7WebCore14CounterContentEJN3WTF6StringERNS0_14EListStyleTypeES3_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","_strlen","__ZNK7WebCore13StyleResolver52sharingCandidateHasIdenticalStyleAffectingAttributesEPNS_13StyledElementE","__ZN7WebCore14NinePieceImage15setMaskDefaultsEv","__ZN7WebCore13StyleResolver5State5clearEv","__ZNK7WebCore13StyleResolver24affectedByViewportChangeEv","__ZN7WebCore13StyleResolver15useSVGZoomRulesEv","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZN7WebCore13StyleResolver18checkForZoomChangeEPNS_11RenderStyleES2_","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore13StyleResolver18loadPendingShadersEv","__ZNSt3__17__sort4IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEjT0_SC_SC_SC_T_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_EaSERKSG_","__ZN7WebCore15FontDescriptionC2ERKS0_","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RNS_10PassRefPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCoreL30extractDirectionAndWritingModeERKNS_11RenderStyleERKNS_13StyleResolver11MatchResultERNS_13TextDirectionERNS_11WritingModeE","_memcpy","__ZN7WebCore11RenderStyle27setNamedGridAreaColumnCountEj","__ZN7WebCore13StyleResolver22applyMatchedPropertiesERKNS0_11MatchResultEPKNS_7ElementENS0_31ShouldUseMatchedPropertiesCacheE","__ZN7WebCore5TimerINS_13StyleResolverEE5firedEv","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6expandEPS6_","__ZN7WebCore11RenderStyle13setBoxReflectEN3WTF10PassRefPtrINS_15StyleReflectionEEE","__ZNK7WebCore17StylePendingImage22imageHasRelativeHeightEv","__ZNSt3__16__sortIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZN7WebCore13StyleResolver13applyPropertyENS_13CSSPropertyIDEPNS_8CSSValueE","__Z12compareEqualIN3WTF7HashMapINS0_6StringEN7WebCore14GridCoordinateENS0_10StringHashENS0_10HashTraitsIS2_EENS6_IS4_EEEES9_EbRKT_RKT0_","__ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemaSEOS1_","__ZN7WebCore11RenderStyle9setLocaleERKN3WTF12AtomicStringE","__ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore18StyleRuleKeyframesEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZNK7WebCore17StylePendingImage9imageSizeEPKNS_13RenderElementEf","__ZN7WebCore13StyleResolver17locateSharedStyleEv","__ZN7WebCore13StyleResolver27sweepMatchedPropertiesCacheEPNS_5TimerIS0_EE","__ZN7WebCore13StyleResolver16styleForKeyframeEPKNS_11RenderStyleEPKNS_13StyleKeyframeERNS_13KeyframeValueE","__ZN7WebCore13StyleResolver27createCustomFilterOperationEPNS_20WebKitCSSFilterValueE","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb","__ZN3WTF6VectorIdLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore17StylePendingImage8cssValueEv","__ZN7WebCore17StylePendingImageD1Ev","__ZN7WebCore13StyleResolver5StateD2Ev","__ZN7WebCoreeqERKNS_13StyleResolver11MatchRangesES3_","__ZNK7WebCore13StyleResolver16locateCousinListEPNS_7ElementERj","__ZN3WTF24codePointCompareLessThanERKNS_6StringES2_","__ZN7WebCore13StyleResolver27addToMatchedPropertiesCacheEPKNS_11RenderStyleES3_jRKNS0_11MatchResultE","__ZN7WebCore13StyleResolver25lookupCustomFilterProgramEPNS_20WebKitCSSShaderValueES2_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE","__ZNK7WebCore17StylePendingImage15knownToBeOpaqueEPKNS_13RenderElementE","__ZN7WebCore11RenderStyle22adjustBackgroundLayersEv","__ZN3WTF6VectorIN7WebCore13StyleResolver18CascadedProperties8PropertyELj8ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore30CustomFilterTransformParameterD1Ev","__ZN7WebCore13StyleResolver16checkRegionStyleEPNS_7ElementE","__ZNK7WebCore26CustomFilterColorParametereqERKNS_21CustomFilterParameterE","__ZN7WebCore27CustomFilterNumberParameter8addValueEd","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore13StyleResolver17loadPendingImagesEv","__ZN7WebCore7DataRefINS_15StyleFilterDataEE6accessEv","__ZN7WebCore13StyleResolver17adjustRenderStyleERNS_11RenderStyleERKS1_PNS_7ElementE","__ZN7WebCore13StyleResolver28computeMatchedPropertiesHashEPKNS0_17MatchedPropertiesEj","__ZN7WebCore13StyleResolver30parseCustomFilterParameterListEPNS_8CSSValueERNS_25CustomFilterParameterListE","__ZN7WebCore13StyleResolver35styleSharingCandidateMatchesRuleSetEPNS_7RuleSetE","__ZN7WebCore13StyleResolver23loadPendingSVGDocumentsEv","__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_","__ZN7WebCore17StylePendingImage12removeClientEPNS_13RenderElementE","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore16MediaQueryResultEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13StyleResolver23applyCascadedPropertiesERNS0_18CascadedPropertiesEii","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore10StyleImage8isLoadedEv","__ZN7WebCore24StyleCustomFilterProgram6createENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE","__ZN7WebCore13StyleResolver11setFontSizeERNS_15FontDescriptionEf","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore13StyleResolver22defaultStyleForElementEv","__ZN7WebCore13StyleResolver19popParentShadowRootEPKNS_10ShadowRootE","__ZN7WebCoreneERKNS_13StyleResolver17MatchedPropertiesES3_","__ZN7WebCore13StyleResolver16popParentElementEPNS_7ElementE","__ZN7WebCoreL19createGridTrackSizeEPNS_8CSSValueERNS_13GridTrackSizeERKNS_13StyleResolver5StateE","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13StyleResolver18CascadedProperties3setENS_13CSSPropertyIDERNS_8CSSValueEj","__ZN3WTF6VectorIPN7WebCore9StyleRuleELj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNSt3__127__insertion_sort_incompleteIRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEbT0_SC_T_","__Z12compareEqualIN3WTF7HashMapINS0_6StringENS0_6VectorIjLj0ENS0_15CrashOnOverflowEEENS0_10StringHashENS0_10HashTraitsIS2_EENS7_IS5_EEEESA_EbRKT_RKT0_","__ZN7WebCore17StylePendingImageD0Ev","__ZN7WebCore13StyleResolver26parseCustomFilterParameterERKN3WTF6StringEPNS_8CSSValueE","__ZN7WebCore21CustomFilterParameterD0Ev","__ZN7WebCore13StyleResolver11styleShaderEPNS_8CSSValueE","__ZN7WebCore21CustomFilterParameterD1Ev","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore13StyleResolver20loadPendingResourcesEv","__ZN7WebCore13StyleResolver18CascadedProperties8Property5applyERS0_","__ZN7WebCore13StyleResolver18CascadedPropertiesC2ENS_13TextDirectionENS_11WritingModeE","__ZN7WebCore13StyleResolver19initializeFontStyleEPNS_8SettingsE","__ZN7WebCore13StyleResolver18convertToIntLengthEPKNS_17CSSPrimitiveValueEPKNS_11RenderStyleES6_d","__ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore13StyleResolver20convertToFloatLengthEPKNS_17CSSPrimitiveValueEPKNS_11RenderStyleES6_d","__ZN7WebCore5TimerINS_13StyleResolverEED1Ev","__ZN7WebCore13StyleResolver43colorFromPrimitiveValueIsDerivedFromElementEPNS_17CSSPrimitiveValueE","__ZN7WebCore11RenderStyle16setHasAutoZIndexEv","__ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE","__ZN7WebCoreneERKNS_13StyleResolver11MatchRangesES3_","__ZN7WebCore30CustomFilterTransformParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE","__ZN7WebCore13StyleResolver20applyPropertyToStyleENS_13CSSPropertyIDEPNS_8CSSValueEPNS_11RenderStyleE","__ZN3WTF7HashMapIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj","__ZNK7WebCore10StyleImage13errorOccurredEv","__ZN7WebCore10BorderDataaSERKS0_","__ZN7WebCore13StyleResolver18CascadedProperties10addMatchesERKNS0_11MatchResultEbiib","__ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN7WebCore11RenderStyle20setGridItemColumnEndERKNS_12GridPositionE","__ZN7WebCore17StylePendingImage26computeIntrinsicDimensionsEPKNS_13RenderElementERNS_6LengthES5_RNS_9FloatSizeE","__ZN7WebCore13StyleResolverD2Ev","__ZN7WebCore24StyleCustomFilterProgramC2ENS_3URLEN3WTF10PassRefPtrINS_11StyleShaderEEES1_S5_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE","__ZN7WebCore11RenderStyle23setNamedGridColumnLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE","__ZN7WebCore13StyleResolver20pushParentShadowRootEPKNS_10ShadowRootE","__ZN7WebCore30CustomFilterTransformParameterD2Ev","__ZN7WebCoreL30sortParametersByNameComparatorERKN3WTF6RefPtrINS_21CustomFilterParameterEEES5_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_","__ZNK7WebCore10StyleImage11cachedImageEv","__ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE","__ZN7WebCoreL22createGridTrackBreadthEPNS_17CSSPrimitiveValueERKNS_13StyleResolver5StateERNS_10GridLengthE","__ZN7WebCore26CustomFilterColorParameterD0Ev","__ZN7WebCore13StyleResolver35parseCustomFilterTransformParameterERKN3WTF6StringEPNS_12CSSValueListE","__ZN7WebCore30CustomFilterTransformParameterD0Ev","__ZN7WebCore13StyleResolver23viewportPercentageValueERNS_17CSSPrimitiveValueEi","__ZN7WebCore26CustomFilterColorParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE","__ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEaSERKS4_","_memset","__ZNK7WebCore17StylePendingImage4dataEv","__ZN7WebCore20ElementRuleCollectorD2Ev","__ZN7WebCore27CustomFilterNumberParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE","__ZN7WebCore11RenderStyle22setGridItemColumnStartERKNS_12GridPositionE","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE5clearEv","__ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE","__ZN7WebCore11RenderStyle9setZIndexEi","__ZNK7WebCore13StyleResolver24canShareStyleWithElementEPNS_13StyledElementE","__ZN7WebCore27CustomFilterNumberParameterD1Ev","__ZN3WTF6VectorIdLj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore13StyleResolver10updateFontEv","__ZN7WebCore13StyleResolverC2ERNS_8DocumentEb","__ZN7WebCore13StyleGridDataD2Ev","__ZN7WebCore13StyleResolver24cachedOrPendingFromValueENS_13CSSPropertyIDEPNS_13CSSImageValueE","__ZN7WebCore13StyleResolver22createFilterOperationsEPNS_8CSSValueERNS_16FilterOperationsE","__ZNK7WebCore26CustomFilterArrayParametereqERKNS_21CustomFilterParameterE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore11RenderStyle19setDashboardRegionsEN3WTF6VectorINS_20StyleDashboardRegionELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore13StyleResolver16loadPendingImageEPNS_17StylePendingImageE","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi121EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZN7WebCore26CustomFilterArrayParameterD0Ev","__ZNK7WebCore27CustomFilterNumberParametereqERKNS_21CustomFilterParameterE","__ZN7WebCore11RenderStyle24setNamedGridAreaRowCountEj","__ZN7WebCore11RenderStyle15setGridAutoRowsERKNS_13GridTrackSizeE","__ZN3WTFeqIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEEbRKNS_6VectorIT_XT0_ET1_EES9_","__ZN7WebCore13StyleResolver26pseudoStyleRulesForElementEPNS_7ElementENS_8PseudoIdEj","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore11RenderStyle18setGridAutoColumnsERKNS_13GridTrackSizeE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver18CascadedProperties23applyDeferredPropertiesERS0_","__ZN7WebCore13StyleResolver18CascadedProperties11setDeferredENS_13CSSPropertyIDERNS_8CSSValueEj","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNSt3__118__insertion_sort_3IRPFbRKN3WTF6RefPtrIN7WebCore21CustomFilterParameterEEES7_EPS5_EEvT0_SC_T_","__ZNK7WebCore17StylePendingImage22usesImageContainerSizeEv","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_19CSSCursorImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver43createCustomFilterOperationWithInlineSyntaxEPNS_20WebKitCSSFilterValueE","__ZN7WebCore27CustomFilterNumberParameterD0Ev","__ZN3WTF6VectorIN7WebCore13StyleResolver17MatchedPropertiesELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcmp","__ZN7WebCore13StyleResolver52createCustomFilterOperationWithAtRuleReferenceSyntaxEPNS_20WebKitCSSFilterValueE","__ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv","__ZNK7WebCore13StyleResolver25classNamesAffectedByRulesERKNS_16SpaceSplitStringE","__ZN7WebCore13StyleResolver16addKeyframeStyleEN3WTF10PassRefPtrINS_18StyleRuleKeyframesEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore11RenderStyle17setGridItemRowEndERKNS_12GridPositionE","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_RPNS1_13CSSImageValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver26MatchedPropertiesCacheItemD2Ev","__ZNK7WebCore10StyleImage9canRenderEPKNS_12RenderObjectEf","__ZN7WebCore17StylePendingImage9addClientEPNS_13RenderElementE","__ZN7WebCore13StyleResolver18CascadedProperties19setPropertyInternalERNS1_8PropertyENS_13CSSPropertyIDERNS_8CSSValueEj","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi122EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore26CustomFilterColorParameterD1Ev","__ZN7WebCore13StyleResolver21loadPendingShapeImageEPNS_10ShapeValueE","__ZN7WebCore13StyleResolver26keyframeStylesForAnimationEPNS_7ElementEPKNS_11RenderStyleERNS_12KeyframeListE","__ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RPS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore22InspectorCSSOMWrappersD2Ev","__ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE","__Z12compareEqualIN7WebCore13GridTrackSizeES1_EbRKT_RKT0_","__ZN7WebCore13StyleResolver24cursorOrPendingFromValueENS_13CSSPropertyIDEPNS_19CSSCursorImageValueE","__ZNK7WebCore10StyleImage16imageScaleFactorEv","__ZN7WebCore13StyleResolver30findFromMatchedPropertiesCacheEjRKNS0_11MatchResultE","__ZN7WebCoreeqERKNS_13StyleResolver17MatchedPropertiesES3_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver18CascadedProperties18addStylePropertiesERKNS_15StylePropertiesERNS_9StyleRuleEbbNS_21PropertyWhitelistTypeEj","__ZN7WebCore13StyleResolver20styleRulesForElementEPNS_7ElementEj","__ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZN7WebCore11RenderStyle16adjustMaskLayersEv","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore13StyleResolver26MatchedPropertiesCacheItemEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZNK7WebCore17StylePendingImage5imageEPNS_13RenderElementERKNS_7IntSizeE","__ZN7WebCore13StyleResolver11MatchResultD1Ev","__ZN3WTFeqINS_6StringEN7WebCore14GridCoordinateENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESG_","__ZN7WebCore13StyleResolver12styleForPageEi","__ZNK7WebCore13StyleResolver22adjustGridItemPositionERNS_11RenderStyleERKS1_","__ZN7WebCore13StyleResolver10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN7WebCore26CustomFilterArrayParameter5blendEPKNS_21CustomFilterParameterEdRKNS_10LayoutSizeE","__ZN7WebCoreL19createGridTrackListEPNS_8CSSValueERN3WTF6VectorINS_13GridTrackSizeELj0ENS2_15CrashOnOverflowEEERNS2_7HashMapINS2_6StringENS3_IjLj0ES5_EENS2_10StringHashENS2_10HashTraitsIS9_EENSC_ISA_EEEERKNS_13StyleResolver5StateE","__ZN7WebCore17StyleGridItemDataD2Ev","__ZN7WebCore26CustomFilterArrayParameterD1Ev","__ZN7WebCore13StyleResolver27checkForGenericFamilyChangeEPNS_11RenderStyleES2_","__ZN7WebCore13StyleResolver21pseudoStyleForElementEPNS_7ElementERKNS_18PseudoStyleRequestEPNS_11RenderStyleE","__ZN7WebCore15FontDescriptionD2Ev","__ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi77EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZNK7WebCore13StyleResolver24canShareStyleWithControlEPNS_13StyledElementE","__ZN7WebCore13StyleResolver31parseCustomFilterColorParameterERKN3WTF6StringEPNS_12CSSValueListE","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILi41EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZN3WTFeqINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEEEbRKNS_7HashMapIT_T0_T1_T2_T3_EESH_","__ZN7WebCore5TimerINS_13StyleResolverEED0Ev","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore11RenderStyle20setNamedGridRowLinesERKN3WTF7HashMapINS1_6StringENS1_6VectorIjLj0ENS1_15CrashOnOverflowEEENS1_10StringHashENS1_10HashTraitsIS3_EENS8_IS6_EEEE","__ZN3WTF9HashTableIPN7WebCore15FilterOperationENS_12KeyValuePairIS3_NS_6RefPtrINS1_25WebKitCSSSVGDocumentValueEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE","__ZNK7WebCore30CustomFilterTransformParametereqERKNS_21CustomFilterParameterE","__ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_","__ZN7WebCoreL18createGridPositionEPNS_8CSSValueERNS_12GridPositionE","__ZN7WebCore11RenderStyle14setGridColumnsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDENS_12KeyValuePairIS2_NS_6RefPtrINS1_8CSSValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIS2_S6_SB_NS_10HashTraitsIS2_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS2_PNS1_22CSSImageGeneratorValueEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore11FontFeatureELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore17StylePendingImage27setContainerSizeForRendererEPKNS_13RenderElementERKNS_7IntSizeEf","__ZN7WebCore13StyleResolver35cachedOrPendingStyleShaderFromValueEPNS_20WebKitCSSShaderValueE","__ZN7WebCore13StyleResolver5State19initForStyleResolveERNS_8DocumentEPNS_7ElementEPNS_11RenderStyleEPNS_12RenderRegionE","__ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","_memmove","__ZN7WebCore13StyleResolver27generatedOrPendingFromValueENS_13CSSPropertyIDERNS_22CSSImageGeneratorValueE","__ZN7WebCore11RenderStyle16setNamedGridAreaERKN3WTF7HashMapINS1_6StringENS_14GridCoordinateENS1_10StringHashENS1_10HashTraitsIS3_EENS6_IS4_EEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","__ZN3WTF6VectorIN7WebCore20StyleDashboardRegionELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_","__ZN7WebCore13StyleResolver32parseCustomFilterNumberParameterERKN3WTF6StringEPNS_12CSSValueListE","__ZNK7WebCore20StyleDashboardRegioneqERKS0_","__ZN7WebCore10BorderDataC2ERKS0_","__ZN7WebCore11RenderStyle11setGridRowsERKN3WTF6VectorINS_13GridTrackSizeELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore11RenderStyle19setGridItemRowStartERKNS_12GridPositionE","__ZN7WebCore5blendERKNS_5ColorES2_db"]

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
H_BASE = parentModule["_malloc"](256 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 256;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19ReplacementFragmentC1ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE;
var __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE;
/* memory initializer */ allocate([65,112,112,108,101,45,105,110,116,101,114,99,104,97,110,103,101,45,110,101,119,108,105,110,101,0,0,0,0,0,0,0,65,112,112,108,101,45,112,97,115,116,101,45,97,115,45,113,117,111,116,97,116,105,111,110,0,0,0,0,0,0,0,0,65,112,112,108,101,45,99,111,110,118,101,114,116,101,100,45,115,112,97,99,101,0,0,0,65,112,112,108,101,45,116,97,98,45,115,112,97,110,0,0,32,0,0,0,0,0,0,0,110,111,110,101,0,0,0,0,105,110,108,105,110,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames7mainTagE=env.__ZN7WebCore9HTMLNames7mainTagE|0;
  var __ZN7WebCore9HTMLNames9footerTagE=env.__ZN7WebCore9HTMLNames9footerTagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames19contenteditableAttrE=env.__ZN7WebCore9HTMLNames19contenteditableAttrE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore9HTMLNames10sectionTagE=env.__ZN7WebCore9HTMLNames10sectionTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames13figcaptionTagE=env.__ZN7WebCore9HTMLNames13figcaptionTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames10addressTagE=env.__ZN7WebCore9HTMLNames10addressTagE|0;
  var __ZN7WebCore9HTMLNames9figureTagE=env.__ZN7WebCore9HTMLNames9figureTagE|0;
  var __ZN7WebCore9HTMLNames6dirTagE=env.__ZN7WebCore9HTMLNames6dirTagE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames10captionTagE=env.__ZN7WebCore9HTMLNames10captionTagE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames8asideTagE=env.__ZN7WebCore9HTMLNames8asideTagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames10articleTagE=env.__ZN7WebCore9HTMLNames10articleTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames9hgroupTagE=env.__ZN7WebCore9HTMLNames9hgroupTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames11fieldsetTagE=env.__ZN7WebCore9HTMLNames11fieldsetTagE|0;
  var __ZN7WebCore9HTMLNames9headerTagE=env.__ZN7WebCore9HTMLNames9headerTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore9HTMLNames7menuTagE=env.__ZN7WebCore9HTMLNames7menuTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames10summaryTagE=env.__ZN7WebCore9HTMLNames10summaryTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames10detailsTagE=env.__ZN7WebCore9HTMLNames10detailsTagE|0;
  var __ZN7WebCore9HTMLNames6navTagE=env.__ZN7WebCore9HTMLNames6navTagE|0;
  var __ZN7WebCore9HTMLNames9centerTagE=env.__ZN7WebCore9HTMLNames9centerTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23ReplaceSelectionCommandE=(H_BASE+136)|0;
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
function __ZN7WebCore23ReplaceSelectionCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 1672 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 72 | 0;
 i12 = i2 + 88 | 0;
 i13 = i2 + 96 | 0;
 i14 = i2 + 104 | 0;
 i15 = i2 + 112 | 0;
 i16 = i2 + 128 | 0;
 i17 = i2 + 144 | 0;
 i18 = i2 + 160 | 0;
 i19 = i2 + 176 | 0;
 i20 = i2 + 184 | 0;
 i21 = i2 + 192 | 0;
 i22 = i2 + 200 | 0;
 i23 = i2 + 208 | 0;
 i24 = i2 + 216 | 0;
 i25 = i2 + 224 | 0;
 i26 = i2 + 288 | 0;
 i27 = i2 + 304 | 0;
 i28 = i2 + 320 | 0;
 i29 = i2 + 336 | 0;
 i30 = i2 + 352 | 0;
 i31 = i2 + 368 | 0;
 i32 = i2 + 384 | 0;
 i33 = i2 + 448 | 0;
 i34 = i2 + 464 | 0;
 i35 = i2 + 480 | 0;
 i36 = i2 + 544 | 0;
 i37 = i2 + 560 | 0;
 i38 = i2 + 624 | 0;
 i39 = i2 + 640 | 0;
 i40 = i2 + 656 | 0;
 i41 = i2 + 664 | 0;
 i42 = i2 + 680 | 0;
 i43 = i2 + 688 | 0;
 i44 = i2 + 704 | 0;
 i45 = i2 + 720 | 0;
 i46 = i2 + 736 | 0;
 i47 = i2 + 752 | 0;
 i48 = i2 + 768 | 0;
 i49 = i2 + 784 | 0;
 i50 = i2 + 800 | 0;
 i51 = i2 + 816 | 0;
 i52 = i2 + 832 | 0;
 i53 = i2 + 848 | 0;
 i54 = i2 + 864 | 0;
 i55 = i2 + 880 | 0;
 i56 = i2 + 896 | 0;
 i57 = i2 + 904 | 0;
 i58 = i2 + 920 | 0;
 i59 = i2 + 928 | 0;
 i60 = i2 + 944 | 0;
 i61 = i2 + 952 | 0;
 i62 = i2 + 960 | 0;
 i63 = i2 + 968 | 0;
 i64 = i2 + 976 | 0;
 i65 = i2 + 984 | 0;
 i66 = i2 + 1e3 | 0;
 i67 = i2 + 1016 | 0;
 i68 = i2 + 1024 | 0;
 i69 = i2 + 1032 | 0;
 i70 = i2 + 1048 | 0;
 i71 = i2 + 1056 | 0;
 i72 = i2 + 1064 | 0;
 i73 = i2 + 1072 | 0;
 i74 = i2 + 1088 | 0;
 i75 = i2 + 1104 | 0;
 i76 = i2 + 1120 | 0;
 i77 = i2 + 1136 | 0;
 i78 = i2 + 1144 | 0;
 i79 = i2 + 1152 | 0;
 i80 = i2 + 1160 | 0;
 i81 = i2 + 1176 | 0;
 i82 = i2 + 1192 | 0;
 i83 = i2 + 1200 | 0;
 i84 = i2 + 1208 | 0;
 i85 = i2 + 1224 | 0;
 i86 = i2 + 1240 | 0;
 i87 = i2 + 1256 | 0;
 i88 = i2 + 1272 | 0;
 i89 = i2 + 1288 | 0;
 i90 = i2 + 1304 | 0;
 i91 = i2 + 1320 | 0;
 i92 = i2 + 1336 | 0;
 i93 = i2 + 1352 | 0;
 i94 = i2 + 1368 | 0;
 i95 = i2 + 1384 | 0;
 i96 = i2 + 1448 | 0;
 i97 = i2 + 1456 | 0;
 i98 = i2 + 1464 | 0;
 i99 = i2 + 1472 | 0;
 i100 = i2 + 1536 | 0;
 i101 = i2 + 1552 | 0;
 i102 = i2 + 1568 | 0;
 i103 = i2 + 1584 | 0;
 i104 = i2 + 1600 | 0;
 i105 = i2 + 1616 | 0;
 i106 = i2 + 1632 | 0;
 i107 = i2 + 1648 | 0;
 i108 = i2 + 1664 | 0;
 i109 = i1 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i25, i1 + 72 | 0);
 i110 = i25 + 52 | 0;
 if ((HEAP32[i110 >> 2] | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 i111 = i25 + 24 | 0;
 i112 = HEAP32[i111 >> 2] | 0;
 i113 = (i112 | 0) == 0;
 do {
  if (i113) {
   i114 = 5;
  } else {
   i115 = i112 + 8 | 0;
   i116 = (HEAP32[i115 >> 2] | 0) + 1 | 0;
   HEAP32[i115 >> 2] = i116;
   if ((HEAP32[i112 + 12 >> 2] & 256 | 0) != 0) {
    i114 = 5;
    break;
   }
   i115 = i112 + 8 | 0;
   i117 = 0;
   i118 = i116;
   i119 = i115;
   i120 = i115 | 0;
   i114 = 11;
  }
 } while (0);
 do {
  if ((i114 | 0) == 5) {
   i115 = HEAP32[i25 + 36 >> 2] | 0;
   do {
    if ((i115 | 0) == 0) {
     i121 = 1;
    } else {
     i116 = HEAP32[i115 + 8 >> 2] | 0;
     i122 = (HEAP32[i115 + 12 >> 2] & 256 | 0) != 0;
     i123 = i115 + 8 | 0;
     HEAP32[i123 >> 2] = i116;
     if ((i116 | 0) >= 1) {
      i121 = i122;
      break;
     }
     if ((HEAP32[i123 + 8 >> 2] | 0) != 0) {
      i121 = i122;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i123 - 8 | 0);
     i121 = i122;
    }
   } while (0);
   if (i113) {
    i124 = i121;
    i114 = 14;
    break;
   }
   i115 = i112 + 8 | 0;
   i122 = i115 | 0;
   i117 = i121;
   i118 = HEAP32[i122 >> 2] | 0;
   i119 = i115;
   i120 = i122;
   i114 = 11;
  }
 } while (0);
 do {
  if ((i114 | 0) == 11) {
   i121 = i118 - 1 | 0;
   HEAP32[i120 >> 2] = i121;
   if ((i121 | 0) >= 1) {
    i124 = i117;
    i114 = 14;
    break;
   }
   if ((HEAP32[i119 + 8 >> 2] | 0) != 0) {
    i124 = i117;
    i114 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i119 - 8 | 0);
   if (i117) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i25);
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i114 | 0) == 14) {
   if (i124) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i25);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i124 = HEAP32[i111 >> 2] | 0;
 i117 = (i124 | 0) == 0;
 if (i117) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 i119 = i124 + 8 | 0;
 HEAP32[i119 >> 2] = (HEAP32[i119 >> 2] | 0) + 1;
 i119 = i124 + 8 | 0;
 i124 = i119 - 8 | 0;
 i120 = i119 | 0;
 i118 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
 HEAP32[i120 >> 2] = i118;
 do {
  if ((i118 | 0) < 1) {
   if ((HEAP32[i119 + 8 >> 2] | 0) == 0) {
    __ZN7WebCore4Node14removedLastRefEv(i124);
    break;
   }
   if (!i117) {
    break;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i25);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i25) | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 i117 = i1 + 8 | 0;
 __ZN7WebCore19ReplacementFragmentC2ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE(i26, HEAP32[i117 >> 2] | 0, HEAP32[i1 + 184 >> 2] | 0, i25);
 do {
  if (!(__ZN7WebCore23ReplaceSelectionCommand21performTrivialReplaceERKNS_19ReplacementFragmentE(i1, i26) | 0)) {
   i124 = HEAP32[i111 >> 2] | 0;
   i119 = (i124 | 0) == 0;
   if (!i119) {
    i118 = i124 + 8 | 0;
    HEAP32[i118 >> 2] = (HEAP32[i118 >> 2] | 0) + 1;
   }
   i118 = i25 + 28 | 0;
   i120 = i25 + 32 | 0;
   i121 = i124 + 32 | 0;
   if ((HEAP32[i124 + 12 >> 2] & 2048 | 0) == 0) {
    i125 = i121 | 0;
   } else {
    i125 = HEAP32[i121 >> 2] | 0;
   }
   do {
    if ((HEAP32[i125 >> 2] | 0) == 0) {
     i126 = 0;
    } else {
     i121 = HEAP32[i111 >> 2] | 0;
     i112 = (i121 | 0) == 0;
     if (!i112) {
      i113 = i121 + 8 | 0;
      HEAP32[i113 >> 2] = (HEAP32[i113 >> 2] | 0) + 1;
     }
     i113 = i121 + 32 | 0;
     if ((HEAP32[i121 + 12 >> 2] & 2048 | 0) == 0) {
      i127 = i113 | 0;
     } else {
      i127 = HEAP32[i113 >> 2] | 0;
     }
     i113 = HEAP32[i127 >> 2] | 0;
     if ((HEAP32[i113 + 20 >> 2] & 768 | 0) == 256) {
      i128 = HEAP32[(HEAP32[i113 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i128 = HEAP32[i113 + 36 >> 2] | 0;
     }
     do {
      if ((HEAP32[(HEAP32[i128 + 24 >> 2] | 0) + 88 >> 2] & 48 | 0) == 32) {
       i113 = i25 + 36 | 0;
       i122 = HEAP32[i113 >> 2] | 0;
       i115 = (i122 | 0) == 0;
       if (!i115) {
        i123 = i122 + 8 | 0;
        HEAP32[i123 >> 2] = (HEAP32[i123 >> 2] | 0) + 1;
       }
       i123 = i122 + 32 | 0;
       if ((HEAP32[i122 + 12 >> 2] & 2048 | 0) == 0) {
        i129 = i123 | 0;
       } else {
        i129 = HEAP32[i123 >> 2] | 0;
       }
       do {
        if ((HEAP32[i129 >> 2] | 0) == 0) {
         i130 = 0;
        } else {
         i123 = HEAP32[i113 >> 2] | 0;
         i116 = (i123 | 0) == 0;
         if (!i116) {
          i131 = i123 + 8 | 0;
          HEAP32[i131 >> 2] = (HEAP32[i131 >> 2] | 0) + 1;
         }
         i131 = i123 + 32 | 0;
         if ((HEAP32[i123 + 12 >> 2] & 2048 | 0) == 0) {
          i132 = i131 | 0;
         } else {
          i132 = HEAP32[i131 >> 2] | 0;
         }
         i131 = HEAP32[i132 >> 2] | 0;
         if ((HEAP32[i131 + 20 >> 2] & 768 | 0) == 256) {
          i133 = HEAP32[(HEAP32[i131 + 8 >> 2] | 0) + 36 >> 2] | 0;
         } else {
          i133 = HEAP32[i131 + 36 >> 2] | 0;
         }
         i131 = (HEAP32[(HEAP32[i133 + 24 >> 2] | 0) + 88 >> 2] & 48 | 0) == 32;
         if (i116) {
          i130 = i131;
          break;
         }
         i116 = i123 + 8 | 0;
         i123 = i116 | 0;
         i134 = (HEAP32[i123 >> 2] | 0) - 1 | 0;
         HEAP32[i123 >> 2] = i134;
         if ((i134 | 0) >= 1) {
          i130 = i131;
          break;
         }
         if ((HEAP32[i116 + 8 >> 2] | 0) != 0) {
          i130 = i131;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i116 - 8 | 0);
         i130 = i131;
        }
       } while (0);
       if (i115) {
        i135 = i130;
        break;
       }
       i113 = i122 + 8 | 0;
       i131 = i113 | 0;
       i116 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
       HEAP32[i131 >> 2] = i116;
       if ((i116 | 0) >= 1) {
        i135 = i130;
        break;
       }
       if ((HEAP32[i113 + 8 >> 2] | 0) != 0) {
        i135 = i130;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i113 - 8 | 0);
       i135 = i130;
      } else {
       i135 = 0;
      }
     } while (0);
     if (i112) {
      i126 = i135;
      break;
     }
     i113 = i121 + 8 | 0;
     i116 = i113 | 0;
     i131 = (HEAP32[i116 >> 2] | 0) - 1 | 0;
     HEAP32[i116 >> 2] = i131;
     if ((i131 | 0) >= 1) {
      i126 = i135;
      break;
     }
     if ((HEAP32[i113 + 8 >> 2] | 0) != 0) {
      i126 = i135;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i113 - 8 | 0);
     i126 = i135;
    }
   } while (0);
   do {
    if (!i119) {
     i113 = i124 + 8 | 0;
     i131 = i113 | 0;
     i116 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
     HEAP32[i131 >> 2] = i116;
     if ((i116 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i113 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i113 - 8 | 0);
    }
   } while (0);
   i124 = i1 + 182 | 0;
   do {
    if (i126) {
     HEAP8[i124] = 0;
     i136 = i1 + 182 | 0;
    } else {
     i119 = i1 + 182 | 0;
     if ((HEAP8[i124] & 1) == 0) {
      i136 = i119;
      break;
     }
     i113 = i27 | 0;
     i116 = HEAP32[i111 >> 2] | 0;
     HEAP32[i113 >> 2] = i116;
     if ((i116 | 0) != 0) {
      i131 = i116 + 8 | 0;
      HEAP32[i131 >> 2] = (HEAP32[i131 >> 2] | 0) + 1;
     }
     HEAP32[i27 + 4 >> 2] = HEAP32[i118 >> 2];
     i131 = HEAP32[i120 >> 2] | 0;
     i116 = i27 + 8 | 0;
     i134 = i116;
     i123 = HEAP32[i134 >> 2] & -8 | i131 & 7;
     HEAP32[i134 >> 2] = i123;
     HEAP8[i116] = i123 & 255 & -9 | i131 & 8;
     i131 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i131, i27, 1);
     i123 = i1 + 176 | 0;
     i116 = HEAP32[i123 >> 2] | 0;
     HEAP32[i123 >> 2] = i131;
     do {
      if ((i116 | 0) != 0) {
       i131 = i116 | 0;
       i134 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
       if ((i134 | 0) == 0) {
        __ZN7WebCore12EditingStyleD1Ev(i116);
        __ZN3WTF8fastFreeEPv(i116);
        break;
       } else {
        HEAP32[i131 >> 2] = i134;
        break;
       }
      }
     } while (0);
     i116 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i116 | 0) != 0) {
       i121 = i116 + 8 | 0;
       i112 = i121 | 0;
       i134 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       HEAP32[i112 >> 2] = i134;
       if ((i134 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i121 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i121 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE(HEAP32[i123 >> 2] | 0, HEAP32[i117 >> 2] | 0);
     i136 = i119;
    }
   } while (0);
   if ((HEAP32[i110 >> 2] | 0) == 2) {
    i137 = 1;
   } else {
    i137 = HEAP32[i25 + 48 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i25 + 24 | 0, i137);
   if ((HEAP32[i110 >> 2] | 0) == 2) {
    i138 = 0;
   } else {
    i138 = HEAP32[i25 + 48 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i29, i25 + 36 | 0, i138);
   i124 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i29, 1) | 0;
   i116 = __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0;
   i113 = i28 | 0;
   i121 = HEAP32[i113 >> 2] | 0;
   i134 = (i121 | 0) == 0;
   if (!i134) {
    i112 = i121 + 8 | 0;
    HEAP32[i112 >> 2] = (HEAP32[i112 >> 2] | 0) + 1;
   }
   i112 = i28 + 4 | 0;
   i131 = i28 + 8 | 0;
   i139 = i131;
   i140 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i121, 1) | 0;
   i141 = i140 | 0;
   do {
    if (!i134) {
     i142 = i121 + 8 | 0;
     i143 = i142 | 0;
     i144 = (HEAP32[i143 >> 2] | 0) - 1 | 0;
     HEAP32[i143 >> 2] = i144;
     if ((i144 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i142 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i142 - 8 | 0);
    }
   } while (0);
   i121 = i30 | 0;
   i134 = HEAP32[i111 >> 2] | 0;
   HEAP32[i121 >> 2] = i134;
   if ((i134 | 0) != 0) {
    i142 = i134 + 8 | 0;
    HEAP32[i142 >> 2] = (HEAP32[i142 >> 2] | 0) + 1;
   }
   i142 = i30 + 4 | 0;
   HEAP32[i142 >> 2] = HEAP32[i118 >> 2];
   i134 = HEAP32[i120 >> 2] | 0;
   i144 = i30 + 8 | 0;
   i143 = i144;
   i145 = HEAP32[i143 >> 2] & -8 | i134 & 7;
   HEAP32[i143 >> 2] = i145;
   HEAP8[i144] = i145 & 255 & -9 | i134 & 8;
   i134 = (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i30, F_BASE_ii + 4 | 0, 0) | 0) != 0;
   i145 = __ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv(i25) | 0;
   if (i116 & i124 & (i134 ^ 1) | (i140 | 0) == (__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i25) | 0)) {
    i114 = 95;
   } else {
    if (__ZN7WebCore10isListItemEPKNS_4NodeE(i141) | 0 | i145 ^ 1) {
     i114 = 95;
    }
   }
   if ((i114 | 0) == 95) {
    HEAP8[i1 + 188 | 0] = 0;
   }
   if ((HEAP32[i110 >> 2] | 0) == 2) {
    do {
     if (i134) {
      i146 = 1;
     } else {
      if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i29, 1) | 0) {
       i146 = 1;
       break;
      }
      i146 = __ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i28) | 0;
     }
    } while (0);
    i141 = i1 | 0;
    __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i141, 0, i146, 1, 0, 1);
    if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
     i147 = 1;
    } else {
     i147 = HEAP32[i1 + 120 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i31, i1 + 96 | 0, i147);
    i140 = i31 | 0;
    i120 = HEAP32[i140 >> 2] | 0;
    HEAP32[i140 >> 2] = 0;
    i118 = HEAP32[i113 >> 2] | 0;
    HEAP32[i113 >> 2] = i120;
    do {
     if ((i118 | 0) != 0) {
      i120 = i118 + 8 | 0;
      i145 = i120 | 0;
      i148 = (HEAP32[i145 >> 2] | 0) - 1 | 0;
      HEAP32[i145 >> 2] = i148;
      if ((i148 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
     }
    } while (0);
    HEAP32[i112 >> 2] = HEAP32[i31 + 4 >> 2];
    i118 = HEAP32[i31 + 8 >> 2] | 0;
    i120 = HEAP32[i139 >> 2] & -8 | i118 & 7;
    HEAP32[i139 >> 2] = i120;
    HEAP8[i131] = i120 & 255 & -9 | i118 & 8;
    HEAP32[i28 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
    i118 = HEAP32[i140 >> 2] | 0;
    do {
     if ((i118 | 0) != 0) {
      i120 = i118 + 8 | 0;
      i148 = i120 | 0;
      i145 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
      HEAP32[i148 >> 2] = i145;
      if ((i145 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
     }
    } while (0);
    L158 : do {
     if ((HEAP8[i26 + 8 | 0] & 1) != 0) {
      do {
       if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
        if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
         break;
        }
        if (__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i28) | 0) {
         break L158;
        }
        __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i33, i28, 0);
        __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i32, i33, 0);
        __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i109, i32);
        __ZN7WebCore16VisibleSelectionD2Ev(i32);
        i118 = HEAP32[i33 >> 2] | 0;
        if ((i118 | 0) == 0) {
         break L158;
        }
        i140 = i118 + 8 | 0;
        i118 = i140 | 0;
        i120 = (HEAP32[i118 >> 2] | 0) - 1 | 0;
        HEAP32[i118 >> 2] = i120;
        if ((i120 | 0) >= 1) {
         break L158;
        }
        if ((HEAP32[i140 + 8 >> 2] | 0) != 0) {
         break L158;
        }
        __ZN7WebCore4Node14removedLastRefEv(i140 - 8 | 0);
        break L158;
       }
      } while (0);
      __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i141, 0, 0);
     }
    } while (0);
    i141 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i141 | 0) != 0) {
     i119 = i141 + 8 | 0;
     HEAP32[i119 >> 2] = (HEAP32[i119 >> 2] | 0) + 1;
    }
    i119 = HEAP32[i1 + 100 >> 2] | 0;
    i123 = HEAP32[i1 + 104 >> 2] | 0;
    i140 = i123 & 8;
    i120 = HEAP32[i121 >> 2] | 0;
    HEAP32[i121 >> 2] = i141;
    do {
     if ((i120 | 0) != 0) {
      i141 = i120 + 8 | 0;
      i118 = i141 | 0;
      i145 = (HEAP32[i118 >> 2] | 0) - 1 | 0;
      HEAP32[i118 >> 2] = i145;
      if ((i145 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
     }
    } while (0);
    HEAP32[i142 >> 2] = i119;
    i120 = HEAP32[i143 >> 2] & -8 | i123 & 7;
    HEAP32[i143 >> 2] = i120;
    i149 = i120 & 255 & -9 | i140;
   } else {
    do {
     if ((HEAP8[i26 + 8 | 0] & 1) != 0) {
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i34, i28, 1);
      do {
       if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
        if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
         i114 = 131;
         break;
        }
        if ((HEAP32[i34 >> 2] | 0) == 0) {
         i114 = 131;
         break;
        }
        __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i35, i34, 0);
        __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i109, i35);
        __ZN7WebCore16VisibleSelectionD2Ev(i35);
       } else {
        i114 = 131;
       }
      } while (0);
      do {
       if ((i114 | 0) == 131) {
        __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i1 | 0, 0, 0);
        if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
         i150 = 1;
        } else {
         i150 = HEAP32[i1 + 120 >> 2] | 0;
        }
        __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i36, i1 + 96 | 0, i150);
        i120 = i36 | 0;
        i141 = HEAP32[i120 >> 2] | 0;
        HEAP32[i120 >> 2] = 0;
        i145 = HEAP32[i113 >> 2] | 0;
        HEAP32[i113 >> 2] = i141;
        do {
         if ((i145 | 0) != 0) {
          i141 = i145 + 8 | 0;
          i118 = i141 | 0;
          i148 = (HEAP32[i118 >> 2] | 0) - 1 | 0;
          HEAP32[i118 >> 2] = i148;
          if ((i148 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
         }
        } while (0);
        HEAP32[i112 >> 2] = HEAP32[i36 + 4 >> 2];
        i145 = HEAP32[i36 + 8 >> 2] | 0;
        i122 = HEAP32[i139 >> 2] & -8 | i145 & 7;
        HEAP32[i139 >> 2] = i122;
        HEAP8[i131] = i122 & 255 & -9 | i145 & 8;
        HEAP32[i28 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
        i145 = HEAP32[i120 >> 2] | 0;
        if ((i145 | 0) == 0) {
         break;
        }
        i122 = i145 + 8 | 0;
        i145 = i122 | 0;
        i115 = (HEAP32[i145 >> 2] | 0) - 1 | 0;
        HEAP32[i145 >> 2] = i115;
        if ((i115 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i122 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i122 - 8 | 0);
       }
      } while (0);
      i122 = HEAP32[i34 >> 2] | 0;
      if ((i122 | 0) == 0) {
       break;
      }
      i115 = i122 + 8 | 0;
      i122 = i115 | 0;
      i145 = (HEAP32[i122 >> 2] | 0) - 1 | 0;
      HEAP32[i122 >> 2] = i145;
      if ((i145 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
     }
    } while (0);
    do {
     if (!((HEAP8[i1 + 188 | 0] & 1) == 0 | i134)) {
      if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
       break;
      }
      if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i28, 1) | 0) {
       break;
      }
      __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i1 | 0, 0, 0);
      if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
       i151 = 1;
      } else {
       i151 = HEAP32[i1 + 120 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i39, i1 + 96 | 0, i151);
      __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i38, i39, 0);
      __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i37, i38, 0);
      __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i109, i37);
      __ZN7WebCore16VisibleSelectionD2Ev(i37);
      i131 = HEAP32[i38 >> 2] | 0;
      do {
       if ((i131 | 0) != 0) {
        i139 = i131 + 8 | 0;
        i112 = i139 | 0;
        i140 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
        HEAP32[i112 >> 2] = i140;
        if ((i140 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
       }
      } while (0);
      i131 = HEAP32[i39 >> 2] | 0;
      if ((i131 | 0) == 0) {
       break;
      }
      i139 = i131 + 8 | 0;
      i131 = i139 | 0;
      i140 = (HEAP32[i131 >> 2] | 0) - 1 | 0;
      HEAP32[i131 >> 2] = i140;
      if ((i140 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
     }
    } while (0);
    i139 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i139 | 0) != 0) {
     i140 = i139 + 8 | 0;
     HEAP32[i140 >> 2] = (HEAP32[i140 >> 2] | 0) + 1;
    }
    i140 = HEAP32[i1 + 100 >> 2] | 0;
    i131 = HEAP32[i1 + 104 >> 2] | 0;
    i112 = i131 & 8;
    i123 = HEAP32[i121 >> 2] | 0;
    HEAP32[i121 >> 2] = i139;
    do {
     if ((i123 | 0) != 0) {
      i139 = i123 + 8 | 0;
      i119 = i139 | 0;
      i115 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
      HEAP32[i119 >> 2] = i115;
      if ((i115 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
     }
    } while (0);
    HEAP32[i142 >> 2] = i140;
    i123 = HEAP32[i143 >> 2] & -8 | i131 & 7;
    HEAP32[i143 >> 2] = i123;
    i149 = i123 & 255 & -9 | i112;
   }
   HEAP8[i144] = i149;
   do {
    if (i134) {
     if ((HEAP8[i1 + 188 | 0] & 1) == 0) {
      break;
     }
     if ((__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i30, F_BASE_ii + 24 | 0, 1) | 0) != 0) {
      break;
     }
     i123 = i1 | 0;
     i139 = HEAP32[i117 >> 2] | 0;
     i115 = __ZN3WTF10fastMallocEj(152) | 0;
     __ZN7WebCore22BreakBlockquoteCommandC1ERNS_8DocumentE(i115, i139);
     i139 = i40 | 0;
     HEAP32[i139 >> 2] = i115;
     __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i123, i40);
     i115 = HEAP32[i139 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i139 = i115 + 4 | 0;
       i119 = i139 | 0;
       i145 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
       if ((i145 | 0) != 0) {
        HEAP32[i119 >> 2] = i145;
        break;
       }
       i145 = i139 - 4 | 0;
       if ((i145 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i145 >> 2] | 0) + 4 >> 2] & 7](i145);
      }
     } while (0);
     i115 = HEAP32[i1 + 96 >> 2] | 0;
     i145 = (i115 | 0) == 0;
     do {
      if (!i145) {
       i139 = HEAP32[i115 + 8 >> 2] | 0;
       i119 = i115 + 8 | 0;
       HEAP32[i119 >> 2] = i139;
       if ((i139 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i119 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i119 - 8 | 0);
      }
     } while (0);
     i119 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i115) | 0;
     i139 = i24 | 0;
     HEAP32[i139 >> 2] = i119;
     if ((i119 | 0) != 0) {
      i122 = i119 + 8 | 0;
      HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i41, i24, __ZNK7WebCore4Node9nodeIndexEv(i115) | 0, 0);
     i122 = HEAP32[i139 >> 2] | 0;
     do {
      if ((i122 | 0) != 0) {
       i139 = i122 + 8 | 0;
       i119 = i139 | 0;
       i141 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
       HEAP32[i119 >> 2] = i141;
       if ((i141 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
      }
     } while (0);
     i122 = i41 | 0;
     i139 = HEAP32[i122 >> 2] | 0;
     HEAP32[i122 >> 2] = 0;
     i141 = HEAP32[i121 >> 2] | 0;
     HEAP32[i121 >> 2] = i139;
     do {
      if ((i141 | 0) != 0) {
       i139 = i141 + 8 | 0;
       i119 = i139 | 0;
       i148 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
       HEAP32[i119 >> 2] = i148;
       if ((i148 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
      }
     } while (0);
     HEAP32[i142 >> 2] = HEAP32[i41 + 4 >> 2];
     i141 = HEAP32[i41 + 8 >> 2] | 0;
     i139 = HEAP32[i143 >> 2] & -8 | i141 & 7;
     HEAP32[i143 >> 2] = i139;
     HEAP8[i144] = i139 & 255 & -9 | i141 & 8;
     i141 = HEAP32[i122 >> 2] | 0;
     do {
      if ((i141 | 0) != 0) {
       i139 = i141 + 8 | 0;
       i148 = i139 | 0;
       i119 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
       HEAP32[i148 >> 2] = i119;
       if ((i119 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
      }
     } while (0);
     i141 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
     i122 = i42 | 0;
     HEAP32[i122 >> 2] = i115;
     if (!i145) {
      i139 = i115 + 8 | 0;
      HEAP32[i139 >> 2] = (HEAP32[i139 >> 2] | 0) + 1;
     }
     FUNCTION_TABLE_viii[i141 & 3](i123, i42, 1);
     i141 = HEAP32[i122 >> 2] | 0;
     if ((i141 | 0) == 0) {
      break;
     }
     i122 = i141 + 8 | 0;
     i141 = i122 | 0;
     i139 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
     HEAP32[i141 >> 2] = i139;
     if ((i139 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i122 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i122 - 8 | 0);
    }
   } while (0);
   i112 = i1 | 0;
   __ZN7WebCore20CompositeEditCommand35prepareWhitespaceAtPositionForSplitERNS_8PositionE(i112, i30);
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i43, i30, 1);
   i131 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i131 | 0) != 0) {
     i140 = i131 + 8 | 0;
     i122 = i140 - 8 | 0;
     i139 = i140 | 0;
     i141 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
     HEAP32[i139 >> 2] = i141;
     do {
      if ((i141 | 0) < 1) {
       if ((HEAP32[i140 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i122);
      }
     } while (0);
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i44, i30, 1);
     i122 = i44 | 0;
     i140 = HEAP32[i122 >> 2] | 0;
     if ((HEAP32[i140 + 12 >> 2] & 4 | 0) == 0) {
      i152 = 1;
      i153 = 0;
      i154 = i140;
     } else {
      i141 = HEAP32[i140 + 44 >> 2] | 0;
      i140 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
      do {
       if ((i141 | 0) == (i140 | 0)) {
        i114 = 205;
       } else {
        if ((HEAP32[i141 + 12 >> 2] | 0) != (HEAP32[i140 + 12 >> 2] | 0)) {
         i155 = 1;
         i156 = 0;
         break;
        }
        if ((HEAP32[i141 + 16 >> 2] | 0) == (HEAP32[i140 + 16 >> 2] | 0)) {
         i114 = 205;
        } else {
         i155 = 1;
         i156 = 0;
        }
       }
      } while (0);
      do {
       if ((i114 | 0) == 205) {
        __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i45, i30, 1);
        i140 = i45 | 0;
        i141 = HEAP32[i140 >> 2] | 0;
        i123 = (i141 | 0) == 0;
        if (i123) {
         i155 = 1;
         i156 = 0;
         break;
        }
        i115 = i141 + 8 | 0;
        HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
        i115 = HEAP32[i140 >> 2] | 0;
        if ((i115 | 0) == 0) {
         i155 = 0;
         i156 = i141;
         break;
        }
        i140 = i115 + 8 | 0;
        i115 = i140 | 0;
        i145 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
        HEAP32[i115 >> 2] = i145;
        if ((i145 | 0) >= 1) {
         i155 = i123;
         i156 = i141;
         break;
        }
        if ((HEAP32[i140 + 8 >> 2] | 0) != 0) {
         i155 = i123;
         i156 = i141;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i140 - 8 | 0);
        i155 = i123;
        i156 = i141;
       }
      } while (0);
      i152 = i155;
      i153 = i156;
      i154 = HEAP32[i122 >> 2] | 0;
     }
     do {
      if ((i154 | 0) != 0) {
       i141 = i154 + 8 | 0;
       i123 = i141 | 0;
       i140 = (HEAP32[i123 >> 2] | 0) - 1 | 0;
       HEAP32[i123 >> 2] = i140;
       if ((i140 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
      }
     } while (0);
     i122 = i46 | 0;
     i141 = i46 + 4 | 0;
     i140 = i46 + 8 | 0;
     i123 = i140;
     i145 = i46 + 12 | 0;
     _memset(i46 | 0, 0, 12) | 0;
     HEAP32[i145 >> 2] = 1;
     do {
      if (!i152) {
       i115 = i23 | 0;
       HEAP32[i115 >> 2] = i153;
       i139 = i153 + 8 | 0;
       HEAP32[i139 >> 2] = (HEAP32[i139 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i49, i23, 1);
       i139 = HEAP32[i115 >> 2] | 0;
       do {
        if ((i139 | 0) != 0) {
         i115 = i139 + 8 | 0;
         i119 = i115 | 0;
         i148 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
         HEAP32[i119 >> 2] = i148;
         if ((i148 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i48, i49, 1);
       __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i47, i48, 0);
       i139 = i47 | 0;
       i120 = HEAP32[i139 >> 2] | 0;
       HEAP32[i139 >> 2] = 0;
       i115 = HEAP32[i122 >> 2] | 0;
       HEAP32[i122 >> 2] = i120;
       do {
        if ((i115 | 0) != 0) {
         i120 = i115 + 8 | 0;
         i148 = i120 | 0;
         i119 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
         HEAP32[i148 >> 2] = i119;
         if ((i119 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
        }
       } while (0);
       HEAP32[i141 >> 2] = HEAP32[i47 + 4 >> 2];
       i115 = HEAP32[i47 + 8 >> 2] | 0;
       i120 = HEAP32[i123 >> 2] & -8 | i115 & 7;
       HEAP32[i123 >> 2] = i120;
       HEAP8[i140] = i120 & 255 & -9 | i115 & 8;
       HEAP32[i145 >> 2] = HEAP32[i47 + 12 >> 2];
       i115 = HEAP32[i139 >> 2] | 0;
       do {
        if ((i115 | 0) != 0) {
         i120 = i115 + 8 | 0;
         i119 = i120 | 0;
         i148 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
         HEAP32[i119 >> 2] = i148;
         if ((i148 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
        }
       } while (0);
       i115 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i115 | 0) != 0) {
         i139 = i115 + 8 | 0;
         i120 = i139 | 0;
         i148 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i148;
         if ((i148 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
        }
       } while (0);
       i115 = HEAP32[i49 >> 2] | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       i139 = i115 + 8 | 0;
       i115 = i139 | 0;
       i148 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       HEAP32[i115 >> 2] = i148;
       if ((i148 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
      }
     } while (0);
     i145 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(HEAP32[i121 >> 2] | 0, 1) | 0;
     i140 = i145 | 0;
     i123 = (i145 | 0) == 0;
     do {
      if (!i123) {
       i141 = i145 + 8 | 0;
       HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
       if ((HEAP8[i1 + 188 | 0] & 1) == 0 | i123) {
        break;
       }
       if (__ZN7WebCore11isTableCellEPKNS_4NodeE(i140) | 0 | i134) {
        break;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i50, i30, 1);
       do {
        if (__ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i50) | 0) {
         if (__ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i50) | 0) {
          if ((HEAP8[i26 + 9 | 0] & 1) != 0) {
           i114 = 256;
           break;
          }
         }
         i141 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i140) | 0;
         i139 = i22 | 0;
         HEAP32[i139 >> 2] = i141;
         if ((i141 | 0) != 0) {
          i148 = i141 + 8 | 0;
          HEAP32[i148 >> 2] = (HEAP32[i148 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i51, i22, (__ZNK7WebCore4Node9nodeIndexEv(i140) | 0) + 1 | 0, 0);
         i148 = HEAP32[i139 >> 2] | 0;
         do {
          if ((i148 | 0) != 0) {
           i139 = i148 + 8 | 0;
           i141 = i139 | 0;
           i115 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
           HEAP32[i141 >> 2] = i115;
           if ((i115 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
          }
         } while (0);
         i148 = i51 | 0;
         i139 = HEAP32[i148 >> 2] | 0;
         HEAP32[i148 >> 2] = 0;
         i115 = HEAP32[i121 >> 2] | 0;
         HEAP32[i121 >> 2] = i139;
         do {
          if ((i115 | 0) != 0) {
           i139 = i115 + 8 | 0;
           i141 = i139 | 0;
           i120 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
           HEAP32[i141 >> 2] = i120;
           if ((i120 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
          }
         } while (0);
         HEAP32[i142 >> 2] = HEAP32[i51 + 4 >> 2];
         i115 = HEAP32[i51 + 8 >> 2] | 0;
         i139 = HEAP32[i143 >> 2] & -8 | i115 & 7;
         HEAP32[i143 >> 2] = i139;
         HEAP8[i144] = i139 & 255 & -9 | i115 & 8;
         i115 = HEAP32[i148 >> 2] | 0;
         if ((i115 | 0) == 0) {
          break;
         }
         i139 = i115 + 8 | 0;
         i115 = i139 | 0;
         i120 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
         HEAP32[i115 >> 2] = i120;
         if ((i120 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
        } else {
         i114 = 256;
        }
       } while (0);
       do {
        if ((i114 | 0) == 256) {
         if (!(__ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i50) | 0)) {
          break;
         }
         i139 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i140) | 0;
         i120 = i21 | 0;
         HEAP32[i120 >> 2] = i139;
         if ((i139 | 0) != 0) {
          i115 = i139 + 8 | 0;
          HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i52, i21, __ZNK7WebCore4Node9nodeIndexEv(i140) | 0, 0);
         i115 = HEAP32[i120 >> 2] | 0;
         do {
          if ((i115 | 0) != 0) {
           i120 = i115 + 8 | 0;
           i139 = i120 | 0;
           i141 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
           HEAP32[i139 >> 2] = i141;
           if ((i141 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
          }
         } while (0);
         i115 = i52 | 0;
         i148 = HEAP32[i115 >> 2] | 0;
         HEAP32[i115 >> 2] = 0;
         i120 = HEAP32[i121 >> 2] | 0;
         HEAP32[i121 >> 2] = i148;
         do {
          if ((i120 | 0) != 0) {
           i148 = i120 + 8 | 0;
           i141 = i148 | 0;
           i139 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
           HEAP32[i141 >> 2] = i139;
           if ((i139 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i148 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i148 - 8 | 0);
          }
         } while (0);
         HEAP32[i142 >> 2] = HEAP32[i52 + 4 >> 2];
         i120 = HEAP32[i52 + 8 >> 2] | 0;
         i148 = HEAP32[i143 >> 2] & -8 | i120 & 7;
         HEAP32[i143 >> 2] = i148;
         HEAP8[i144] = i148 & 255 & -9 | i120 & 8;
         i120 = HEAP32[i115 >> 2] | 0;
         if ((i120 | 0) == 0) {
          break;
         }
         i148 = i120 + 8 | 0;
         i120 = i148 | 0;
         i139 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i139;
         if ((i139 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i148 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i148 - 8 | 0);
        }
       } while (0);
       i148 = HEAP32[i50 >> 2] | 0;
       if ((i148 | 0) == 0) {
        break;
       }
       i139 = i148 + 8 | 0;
       i148 = i139 | 0;
       i120 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
       HEAP32[i148 >> 2] = i120;
       if ((i120 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i53, i112, i30);
     i139 = i53 | 0;
     i120 = HEAP32[i139 >> 2] | 0;
     HEAP32[i139 >> 2] = 0;
     i148 = HEAP32[i121 >> 2] | 0;
     HEAP32[i121 >> 2] = i120;
     do {
      if ((i148 | 0) != 0) {
       i120 = i148 + 8 | 0;
       i141 = i120 | 0;
       i119 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
       HEAP32[i141 >> 2] = i119;
       if ((i119 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
      }
     } while (0);
     HEAP32[i142 >> 2] = HEAP32[i53 + 4 >> 2];
     i148 = HEAP32[i53 + 8 >> 2] | 0;
     i120 = HEAP32[i143 >> 2] & -8 | i148 & 7;
     HEAP32[i143 >> 2] = i120;
     HEAP8[i144] = i120 & 255 & -9 | i148 & 8;
     i148 = HEAP32[i139 >> 2] | 0;
     do {
      if ((i148 | 0) != 0) {
       i120 = i148 + 8 | 0;
       i119 = i120 | 0;
       i141 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
       HEAP32[i119 >> 2] = i141;
       if ((i141 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
      }
     } while (0);
     i148 = (HEAP32[(__ZN7WebCore11EditCommand5frameEv(i109) | 0) + 468 >> 2] | 0) + 116 | 0;
     i139 = HEAP32[i148 >> 2] | 0;
     HEAP32[i148 >> 2] = 0;
     do {
      if ((i139 | 0) != 0) {
       i148 = i139 | 0;
       i120 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
       if ((i120 | 0) == 0) {
        __ZN7WebCore12EditingStyleD1Ev(i139);
        __ZN3WTF8fastFreeEPv(i139);
        break;
       } else {
        HEAP32[i148 >> 2] = i120;
        break;
       }
      }
     } while (0);
     i139 = i26 + 4 | 0;
     i120 = HEAP32[i139 >> 2] | 0;
     i148 = i26 + 8 | 0;
     i141 = HEAP8[i148] | 0;
     i119 = i26 + 9 | 0;
     i118 = HEAP8[i119] | 0;
     if ((i120 | 0) == 0) {
      i114 = 289;
     } else {
      if ((HEAP32[i120 + 36 >> 2] | 0) == 0) {
       i114 = 289;
      } else {
       i114 = 291;
      }
     }
     do {
      if ((i114 | 0) == 289) {
       if ((i141 & 1) != 0) {
        i114 = 291;
        break;
       }
       if ((i118 & 1) != 0) {
        i114 = 291;
       }
      }
     } while (0);
     L388 : do {
      if ((i114 | 0) == 291) {
       i118 = i120 + 36 | 0;
       while (1) {
        i157 = HEAP32[i118 >> 2] | 0;
        if ((i157 | 0) == 0) {
         break L388;
        }
        if ((HEAP32[i157 + 12 >> 2] & 4 | 0) != 0) {
         break;
        }
        i118 = i157 + 28 | 0;
       }
       i118 = i20;
       i141 = i120 | 0;
       i158 = 0;
       i159 = 0;
       i160 = 0;
       i161 = i157;
       L395 : while (1) {
        i162 = i161;
        i163 = HEAP32[i161 + 44 >> 2] | 0;
        i164 = HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0;
        L397 : do {
         if ((i163 | 0) == (i164 | 0)) {
          i165 = i161;
          i166 = i162;
         } else {
          i167 = i161;
          i168 = i162;
          i169 = i163;
          i170 = i164;
          while (1) {
           i171 = HEAP32[i169 + 12 >> 2] | 0;
           if ((i171 | 0) == (HEAP32[i170 + 12 >> 2] | 0)) {
            if ((HEAP32[i169 + 16 >> 2] | 0) == (HEAP32[i170 + 16 >> 2] | 0)) {
             i165 = i167;
             i166 = i168;
             break L397;
            }
           }
           i172 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
           if ((i169 | 0) == (i172 | 0)) {
            i165 = i167;
            i166 = i168;
            break L397;
           }
           if ((i171 | 0) == (HEAP32[i172 + 12 >> 2] | 0)) {
            if ((HEAP32[i169 + 16 >> 2] | 0) == (HEAP32[i172 + 16 >> 2] | 0)) {
             i165 = i167;
             i166 = i168;
             break L397;
            }
           }
           i172 = HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0;
           if ((i169 | 0) == (i172 | 0)) {
            i165 = i167;
            i166 = i168;
            break L397;
           }
           if ((i171 | 0) == (HEAP32[i172 + 12 >> 2] | 0)) {
            if ((HEAP32[i169 + 16 >> 2] | 0) == (HEAP32[i172 + 16 >> 2] | 0)) {
             i165 = i167;
             i166 = i168;
             break L397;
            }
           }
           i172 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
           if ((i169 | 0) == (i172 | 0)) {
            i165 = i167;
            i166 = i168;
            break L397;
           }
           if ((i171 | 0) == (HEAP32[i172 + 12 >> 2] | 0)) {
            if ((HEAP32[i169 + 16 >> 2] | 0) == (HEAP32[i172 + 16 >> 2] | 0)) {
             i165 = i167;
             i166 = i168;
             break L397;
            }
           }
           if ((HEAP32[i167 + 12 >> 2] & 16 | 0) != 0) {
            if ((i171 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
             i165 = i167;
             i166 = i168;
             break L397;
            }
           }
           i171 = HEAP32[i167 + 36 >> 2] | 0;
           do {
            if ((i171 | 0) == 0) {
             if ((i167 | 0) == (i141 | 0)) {
              i173 = i160;
              i174 = i158;
              i114 = 296;
              break L395;
             }
             i172 = HEAP32[i167 + 28 >> 2] | 0;
             if ((i172 | 0) != 0) {
              i175 = i172;
              break;
             }
             i172 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i167, i141) | 0;
             if ((i172 | 0) == 0) {
              i173 = i160;
              i174 = i158;
              i114 = 296;
              break L395;
             } else {
              i175 = i172;
             }
            } else {
             i175 = i171;
            }
           } while (0);
           if ((HEAP32[i175 + 12 >> 2] & 4 | 0) == 0) {
            i171 = i175;
            while (1) {
             if ((i171 | 0) == (i141 | 0)) {
              i173 = i160;
              i174 = i158;
              i114 = 296;
              break L395;
             }
             i172 = HEAP32[i171 + 28 >> 2] | 0;
             if ((i172 | 0) == 0) {
              i176 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i171, i141) | 0;
              if ((i176 | 0) == 0) {
               i173 = i160;
               i174 = i158;
               i114 = 296;
               break L395;
              } else {
               i177 = i176;
              }
             } else {
              i177 = i172;
             }
             if ((HEAP32[i177 + 12 >> 2] & 4 | 0) == 0) {
              i171 = i177;
             } else {
              i178 = i177;
              break;
             }
            }
           } else {
            i178 = i175;
           }
           i171 = i178;
           i172 = HEAP32[i178 + 44 >> 2] | 0;
           i176 = HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0;
           if ((i172 | 0) == (i176 | 0)) {
            i165 = i178;
            i166 = i171;
            break;
           } else {
            i167 = i178;
            i168 = i171;
            i169 = i172;
            i170 = i176;
           }
          }
         }
        } while (0);
        HEAP32[i20 >> 2] = i166;
        if ((i158 | 0) == (i159 | 0)) {
         i164 = i159 + 1 | 0;
         do {
          if (i160 >>> 0 > i20 >>> 0) {
           i114 = 316;
          } else {
           if ((i160 + (i159 << 2) | 0) >>> 0 <= i20 >>> 0) {
            i114 = 316;
            break;
           }
           i163 = i118 - i160 >> 2;
           i162 = i164 + (i159 >>> 2) | 0;
           i115 = i162 >>> 0 > 16 >>> 0 ? i162 : 16;
           i162 = i115 >>> 0 > i164 >>> 0 ? i115 : i164;
           do {
            if (i159 >>> 0 < i162 >>> 0) {
             if (i162 >>> 0 > 1073741823 >>> 0) {
              i114 = 323;
              break L395;
             }
             i115 = __ZN3WTF18fastMallocGoodSizeEj(i162 << 2) | 0;
             i170 = i115 >>> 2;
             i169 = __ZN3WTF10fastMallocEj(i115) | 0;
             i115 = i169;
             i168 = i160;
             _memcpy(i169 | 0, i168 | 0, i159 << 2) | 0;
             if ((i160 | 0) == 0) {
              i179 = i115;
              i180 = i170;
              break;
             }
             i169 = (i115 | 0) == (i160 | 0);
             __ZN3WTF8fastFreeEPv(i168);
             i179 = i169 ? 0 : i115;
             i180 = i169 ? 0 : i170;
            } else {
             i179 = i160;
             i180 = i159;
            }
           } while (0);
           i181 = i179 + (i163 << 2) | 0;
           i182 = i179;
           i183 = i180;
          }
         } while (0);
         do {
          if ((i114 | 0) == 316) {
           i114 = 0;
           i162 = i164 + (i159 >>> 2) | 0;
           i170 = i162 >>> 0 > 16 >>> 0 ? i162 : 16;
           i162 = i170 >>> 0 > i164 >>> 0 ? i170 : i164;
           if (i159 >>> 0 >= i162 >>> 0) {
            i181 = i20;
            i182 = i160;
            i183 = i159;
            break;
           }
           if (i162 >>> 0 > 1073741823 >>> 0) {
            i114 = 318;
            break L395;
           }
           i170 = __ZN3WTF18fastMallocGoodSizeEj(i162 << 2) | 0;
           i162 = i170 >>> 2;
           i169 = __ZN3WTF10fastMallocEj(i170) | 0;
           i170 = i169;
           i115 = i160;
           _memcpy(i169 | 0, i115 | 0, i159 << 2) | 0;
           if ((i160 | 0) == 0) {
            i181 = i20;
            i182 = i170;
            i183 = i162;
            break;
           }
           i169 = (i170 | 0) == (i160 | 0);
           __ZN3WTF8fastFreeEPv(i115);
           i181 = i20;
           i182 = i169 ? 0 : i170;
           i183 = i169 ? 0 : i162;
          }
         } while (0);
         HEAP32[i182 + (i159 << 2) >> 2] = HEAP32[i181 >> 2];
         i184 = i182;
         i185 = i183;
         i186 = i164;
        } else {
         HEAP32[i160 + (i158 << 2) >> 2] = i166;
         i184 = i160;
         i185 = i159;
         i186 = i158 + 1 | 0;
        }
        if ((i165 | 0) == (i141 | 0)) {
         i173 = i184;
         i174 = i186;
         i114 = 296;
         break;
        }
        i162 = HEAP32[i165 + 28 >> 2] | 0;
        if ((i162 | 0) == 0) {
         i169 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i165, i141) | 0;
         if ((i169 | 0) == 0) {
          i173 = i184;
          i174 = i186;
          i114 = 296;
          break;
         } else {
          i187 = i169;
         }
        } else {
         i187 = i162;
        }
        if ((HEAP32[i187 + 12 >> 2] & 4 | 0) == 0) {
         i188 = i187;
        } else {
         i158 = i186;
         i159 = i185;
         i160 = i184;
         i161 = i187;
         continue;
        }
        while (1) {
         if ((i188 | 0) == (i141 | 0)) {
          i173 = i184;
          i174 = i186;
          i114 = 296;
          break L395;
         }
         i162 = HEAP32[i188 + 28 >> 2] | 0;
         if ((i162 | 0) == 0) {
          i169 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i188, i141) | 0;
          if ((i169 | 0) == 0) {
           i173 = i184;
           i174 = i186;
           i114 = 296;
           break L395;
          } else {
           i189 = i169;
          }
         } else {
          i189 = i162;
         }
         if ((HEAP32[i189 + 12 >> 2] & 4 | 0) == 0) {
          i188 = i189;
         } else {
          i158 = i186;
          i159 = i185;
          i160 = i184;
          i161 = i189;
          continue L395;
         }
        }
       }
       if ((i114 | 0) == 296) {
        if ((i174 | 0) != 0) {
         i161 = i19 | 0;
         i160 = 0;
         while (1) {
          i159 = HEAP32[i173 + (i160 << 2) >> 2] | 0;
          i158 = i159 | 0;
          do {
           if ((i159 | 0) != 0) {
            i141 = i159 + 8 | 0;
            HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
            i141 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i158) | 0;
            if ((i141 | 0) != 0) {
             HEAP32[i161 >> 2] = 0;
             __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i141, i158, i161) | 0;
            }
            i141 = i159 + 8 | 0;
            i118 = i141 | 0;
            i164 = (HEAP32[i118 >> 2] | 0) - 1 | 0;
            HEAP32[i118 >> 2] = i164;
            if ((i164 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
           }
          } while (0);
          i160 = i160 + 1 | 0;
          if (i160 >>> 0 >= i174 >>> 0) {
           break;
          }
         }
        }
        if ((i173 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i173);
        break;
       } else if ((i114 | 0) == 318) {
        _WTFCrash();
       } else if ((i114 | 0) == 323) {
        _WTFCrash();
       }
      }
     } while (0);
     i120 = i54 | 0;
     i160 = HEAP32[i121 >> 2] | 0;
     HEAP32[i120 >> 2] = i160;
     if ((i160 | 0) == 0) {
      i190 = 0;
     } else {
      i161 = i160 + 8 | 0;
      HEAP32[i161 >> 2] = (HEAP32[i161 >> 2] | 0) + 1;
      i190 = HEAP32[i120 >> 2] | 0;
     }
     i161 = i54 + 4 | 0;
     i160 = HEAP32[i142 >> 2] | 0;
     HEAP32[i161 >> 2] = i160;
     i159 = HEAP32[i143 >> 2] | 0;
     i158 = i54 + 8 | 0;
     i141 = i158;
     i164 = HEAP32[i141 >> 2] & -8 | i159 & 7;
     HEAP32[i141 >> 2] = i164;
     HEAP8[i158] = i164 & 255 & -9 | i159 & 8;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i190 >> 2] | 0) + 132 >> 2] & 31](i190) | 0) {
      i159 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i54) | 0, 1) | 0;
      i164 = i159 | 0;
      i118 = i15 | 0;
      i162 = HEAP32[i120 >> 2] | 0;
      HEAP32[i118 >> 2] = i162;
      if ((i162 | 0) == 0) {
       i169 = i15 + 8 | 0;
       i191 = 0;
       i192 = i169;
       i193 = i169;
      } else {
       i169 = i162 + 8 | 0;
       HEAP32[i169 >> 2] = (HEAP32[i169 >> 2] | 0) + 1;
       i169 = i15 + 8 | 0;
       i162 = i169;
       i191 = HEAP32[i162 >> 2] & -8;
       i192 = i169;
       i193 = i162;
      }
      i162 = i15 + 4 | 0;
      HEAP32[i162 >> 2] = HEAP32[i161 >> 2];
      i169 = HEAP32[i141 >> 2] | 0;
      i170 = i169 & 7 | i191;
      HEAP32[i193 >> 2] = i170;
      HEAP8[i192] = i170 & 255 & -9 | i169 & 8;
      L489 : do {
       if ((__ZNK7WebCore8Position13containerNodeEv(i15) | 0) != (i164 | 0)) {
        i169 = i18 | 0;
        i170 = i17 | 0;
        i115 = i14 | 0;
        i168 = i16 | 0;
        i167 = i16 + 4 | 0;
        i176 = i16 + 8 | 0;
        while (1) {
         if (__ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE(i54) | 0) {
          break L489;
         }
         do {
          if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(__ZNK7WebCore8Position13containerNodeEv(i54) | 0) | 0) != 0) {
           i172 = __ZNK7WebCore8Position13containerNodeEv(i54) | 0;
           i171 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i172) | 0;
           HEAP32[i115 >> 2] = i171;
           if ((i171 | 0) != 0) {
            i194 = i171 + 8 | 0;
            HEAP32[i194 >> 2] = (HEAP32[i194 >> 2] | 0) + 1;
           }
           __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i16, i14, (__ZNK7WebCore4Node9nodeIndexEv(i172) | 0) + 1 | 0, 0);
           i172 = HEAP32[i115 >> 2] | 0;
           do {
            if ((i172 | 0) != 0) {
             i194 = i172 + 8 | 0;
             i171 = i194 | 0;
             i195 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
             HEAP32[i171 >> 2] = i195;
             if ((i195 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i194 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i194 - 8 | 0);
            }
           } while (0);
           i172 = HEAP32[i168 >> 2] | 0;
           HEAP32[i168 >> 2] = 0;
           i163 = HEAP32[i118 >> 2] | 0;
           HEAP32[i118 >> 2] = i172;
           do {
            if ((i163 | 0) != 0) {
             i172 = i163 + 8 | 0;
             i194 = i172 | 0;
             i195 = (HEAP32[i194 >> 2] | 0) - 1 | 0;
             HEAP32[i194 >> 2] = i195;
             if ((i195 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i172 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i172 - 8 | 0);
            }
           } while (0);
           HEAP32[i162 >> 2] = HEAP32[i167 >> 2];
           i163 = HEAP32[i176 >> 2] | 0;
           i172 = HEAP32[i193 >> 2] & -8 | i163 & 7;
           HEAP32[i193 >> 2] = i172;
           HEAP8[i192] = i172 & 255 & -9 | i163 & 8;
           i163 = HEAP32[i168 >> 2] | 0;
           if ((i163 | 0) == 0) {
            break;
           }
           i172 = i163 + 8 | 0;
           i163 = i172 | 0;
           i195 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
           HEAP32[i163 >> 2] = i195;
           if ((i195 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i172 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i172 - 8 | 0);
          }
         } while (0);
         do {
          if ((HEAP32[i118 >> 2] | 0) == (HEAP32[i120 >> 2] | 0)) {
           do {
            if ((HEAP8[i192] & 8) == 0) {
             i172 = HEAP32[i193 >> 2] & 7;
             if (!((i172 | 0) == 2 | (i172 | 0) == 4)) {
              i114 = 383;
              break;
             }
             i196 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i15) | 0;
            } else {
             i114 = 383;
            }
           } while (0);
           if ((i114 | 0) == 383) {
            i114 = 0;
            i196 = HEAP32[i162 >> 2] | 0;
           }
           do {
            if ((HEAP8[i158] & 8) == 0) {
             i172 = HEAP32[i141 >> 2] & 7;
             if (!((i172 | 0) == 2 | (i172 | 0) == 4)) {
              i114 = 387;
              break;
             }
             i197 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i54) | 0;
            } else {
             i114 = 387;
            }
           } while (0);
           if ((i114 | 0) == 387) {
            i114 = 0;
            i197 = HEAP32[i161 >> 2] | 0;
           }
           if ((i196 | 0) != (i197 | 0)) {
            break;
           }
           if (((HEAP32[i141 >> 2] ^ HEAP32[i193 >> 2]) & 7 | 0) == 0) {
            break L489;
           }
          }
         } while (0);
         if ((__ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i15) | 0, 1) | 0) != (i159 | 0)) {
          break L489;
         }
         __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i54, 1);
         __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i15, 1);
         i172 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i17, i18) | 0;
         i195 = HEAP32[i169 >> 2] | 0;
         do {
          if ((i195 | 0) != 0) {
           i163 = i195 + 8 | 0;
           i194 = i163 | 0;
           i171 = (HEAP32[i194 >> 2] | 0) - 1 | 0;
           HEAP32[i194 >> 2] = i171;
           if ((i171 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i163 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i163 - 8 | 0);
          }
         } while (0);
         i195 = HEAP32[i170 >> 2] | 0;
         do {
          if ((i195 | 0) == 0) {
           i114 = 400;
          } else {
           i163 = i195 + 8 | 0;
           i171 = i163 | 0;
           i194 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
           HEAP32[i171 >> 2] = i194;
           if ((i194 | 0) >= 1) {
            i114 = 400;
            break;
           }
           if ((HEAP32[i163 + 8 >> 2] | 0) != 0) {
            i114 = 400;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i163 - 8 | 0);
           if (!i172) {
            break L489;
           }
          }
         } while (0);
         if ((i114 | 0) == 400) {
          i114 = 0;
          if (!i172) {
           break L489;
          }
         }
         i195 = HEAP32[i118 >> 2] | 0;
         if ((i195 | 0) != 0) {
          i163 = i195 + 8 | 0;
          HEAP32[i163 >> 2] = (HEAP32[i163 >> 2] | 0) + 1;
         }
         i163 = HEAP32[i120 >> 2] | 0;
         HEAP32[i120 >> 2] = i195;
         do {
          if ((i163 | 0) != 0) {
           i195 = i163 + 8 | 0;
           i194 = i195 | 0;
           i171 = (HEAP32[i194 >> 2] | 0) - 1 | 0;
           HEAP32[i194 >> 2] = i171;
           if ((i171 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
          }
         } while (0);
         HEAP32[i161 >> 2] = HEAP32[i162 >> 2];
         i163 = HEAP32[i193 >> 2] | 0;
         i172 = HEAP32[i141 >> 2] & -8 | i163 & 7;
         HEAP32[i141 >> 2] = i172;
         HEAP8[i158] = i172 & 255 & -9 | i163 & 8;
         if ((__ZNK7WebCore8Position13containerNodeEv(i15) | 0) == (i164 | 0)) {
          break;
         }
        }
       }
      } while (0);
      i164 = HEAP32[i118 >> 2] | 0;
      do {
       if ((i164 | 0) != 0) {
        i158 = i164 + 8 | 0;
        i162 = i158 | 0;
        i159 = (HEAP32[i162 >> 2] | 0) - 1 | 0;
        HEAP32[i162 >> 2] = i159;
        if ((i159 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i158 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i158 - 8 | 0);
       }
      } while (0);
      i164 = HEAP32[i120 >> 2] | 0;
      HEAP32[i120 >> 2] = 0;
      i198 = i164;
      i199 = HEAP32[i161 >> 2] | 0;
     } else {
      HEAP32[i120 >> 2] = 0;
      i198 = i190;
      i199 = i160;
     }
     i164 = HEAP32[i141 >> 2] | 0;
     i118 = i164 & 255;
     i158 = HEAP32[i121 >> 2] | 0;
     HEAP32[i121 >> 2] = i198;
     do {
      if ((i158 | 0) != 0) {
       i159 = i158 + 8 | 0;
       i162 = i159 | 0;
       i170 = (HEAP32[i162 >> 2] | 0) - 1 | 0;
       HEAP32[i162 >> 2] = i170;
       if ((i170 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
      }
     } while (0);
     HEAP32[i142 >> 2] = i199;
     i158 = HEAP32[i143 >> 2] & -8 | i164 & 7;
     HEAP32[i143 >> 2] = i158;
     HEAP8[i144] = i158 & 255 & -9 | i118 & 8;
     i158 = HEAP32[i120 >> 2] | 0;
     do {
      if ((i158 | 0) != 0) {
       i141 = i158 + 8 | 0;
       i160 = i141 | 0;
       i161 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
       HEAP32[i160 >> 2] = i161;
       if ((i161 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i55, i112, i30);
     i158 = i55 | 0;
     i120 = HEAP32[i158 >> 2] | 0;
     HEAP32[i158 >> 2] = 0;
     i118 = HEAP32[i121 >> 2] | 0;
     HEAP32[i121 >> 2] = i120;
     do {
      if ((i118 | 0) != 0) {
       i120 = i118 + 8 | 0;
       i164 = i120 | 0;
       i141 = (HEAP32[i164 >> 2] | 0) - 1 | 0;
       HEAP32[i164 >> 2] = i141;
       if ((i141 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
      }
     } while (0);
     HEAP32[i142 >> 2] = HEAP32[i55 + 4 >> 2];
     i118 = HEAP32[i55 + 8 >> 2] | 0;
     i120 = HEAP32[i143 >> 2] & -8 | i118 & 7;
     HEAP32[i143 >> 2] = i120;
     HEAP8[i144] = i120 & 255 & -9 | i118 & 8;
     i118 = HEAP32[i158 >> 2] | 0;
     do {
      if ((i118 | 0) != 0) {
       i120 = i118 + 8 | 0;
       i141 = i120 | 0;
       i164 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
       HEAP32[i141 >> 2] = i164;
       if ((i164 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
      }
     } while (0);
     i118 = HEAP32[i139 >> 2] | 0;
     L577 : do {
      if ((i118 | 0) == 0) {
       i114 = 436;
      } else {
       i158 = HEAP32[i118 + 36 >> 2] | 0;
       if ((i158 | 0) == 0) {
        i114 = 436;
        break;
       }
       do {
        if ((HEAP32[i158 + 12 >> 2] & 4 | 0) != 0) {
         i120 = HEAP32[i158 + 44 >> 2] | 0;
         i164 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
         if ((i120 | 0) != (i164 | 0)) {
          if ((HEAP32[i120 + 12 >> 2] | 0) != (HEAP32[i164 + 12 >> 2] | 0)) {
           break;
          }
          if ((HEAP32[i120 + 16 >> 2] | 0) != (HEAP32[i164 + 16 >> 2] | 0)) {
           break;
          }
         }
         if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i158, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 40 | 0) | 0) {
          i200 = 0;
          break L577;
         }
        }
       } while (0);
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i158 >> 2] | 0) + 132 >> 2] & 31](i158) | 0) {
        __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i158);
        i201 = i158;
        i202 = 0;
        i114 = 443;
        break;
       }
       i164 = i9 | 0;
       HEAP32[i164 >> 2] = i158;
       i120 = i158 + 8 | 0;
       HEAP32[i120 >> 2] = (HEAP32[i120 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i9, 1);
       i120 = HEAP32[i164 >> 2] | 0;
       if ((i120 | 0) == 0) {
        i201 = i158;
        i202 = 0;
        i114 = 443;
        break;
       }
       i164 = i120 + 8 | 0;
       i120 = i164 | 0;
       i141 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
       HEAP32[i120 >> 2] = i141;
       if ((i141 | 0) >= 1) {
        i201 = i158;
        i202 = 0;
        i114 = 443;
        break;
       }
       if ((HEAP32[i164 + 8 >> 2] | 0) != 0) {
        i201 = i158;
        i202 = 0;
        i114 = 443;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i164 - 8 | 0);
       i201 = i158;
       i202 = 0;
       i114 = 443;
      }
     } while (0);
     if ((i114 | 0) == 436) {
      _memset(i10 | 0, 0, 12) | 0;
      i201 = 0;
      i202 = 1;
      i114 = 443;
     }
     L595 : do {
      if ((i114 | 0) == 443) {
       i118 = (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i10, F_BASE_ii + 4 | 0, 0) | 0) != 0;
       i164 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i164 | 0) == 0) {
         i114 = 447;
        } else {
         i141 = i164 + 8 | 0;
         i120 = i141 | 0;
         i161 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i161;
         if ((i161 | 0) >= 1) {
          i114 = 447;
          break;
         }
         if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
          i114 = 447;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
         if (i118) {
          i200 = 0;
          break L595;
         }
        }
       } while (0);
       if ((i114 | 0) == 447) {
        if (i118) {
         i200 = 0;
         break;
        }
       }
       if (!(__ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE(i201) | 0)) {
        i200 = 0;
        break;
       }
       __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i11, i30);
       i164 = __ZN3WTF10fastMallocEj(16) | 0;
       i158 = i164;
       __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i158, i11, 1);
       i141 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i141 | 0) != 0) {
         i161 = i141 + 8 | 0;
         i120 = i161 | 0;
         i160 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i160;
         if ((i160 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
        }
       } while (0);
       __ZNK7WebCore15StyleProperties6asTextEv(i12, HEAP32[i164 + 4 >> 2] | 0);
       i141 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i201, __ZN7WebCore9HTMLNames9styleAttrE) | 0;
       i118 = i12 | 0;
       do {
        if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i118 >> 2] | 0, HEAP32[i141 >> 2] | 0) | 0) {
         i161 = i13 | 0;
         HEAP32[i161 >> 2] = i201;
         if (!i202) {
          i160 = i201 + 8 | 0;
          HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
         }
         __ZN7WebCore19ReplacementFragment28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEE(i26, i13);
         i160 = HEAP32[i161 >> 2] | 0;
         if ((i160 | 0) == 0) {
          i203 = 1;
          break;
         }
         i161 = i160 + 8 | 0;
         i160 = i161 | 0;
         i120 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
         HEAP32[i160 >> 2] = i120;
         if ((i120 | 0) >= 1) {
          i203 = 1;
          break;
         }
         if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
          i203 = 1;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
         i203 = 1;
        } else {
         i203 = 0;
        }
       } while (0);
       i141 = HEAP32[i118 >> 2] | 0;
       do {
        if ((i141 | 0) != 0) {
         i161 = i141 | 0;
         i120 = (HEAP32[i161 >> 2] | 0) - 2 | 0;
         if ((i120 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i141);
          break;
         } else {
          HEAP32[i161 >> 2] = i120;
          break;
         }
        }
       } while (0);
       if ((i164 | 0) == 0) {
        i200 = i203;
        break;
       }
       i141 = i164;
       i118 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
       if ((i118 | 0) == 0) {
        __ZN7WebCore12EditingStyleD1Ev(i158);
        __ZN3WTF8fastFreeEPv(i164);
        i200 = i203;
        break;
       } else {
        HEAP32[i141 >> 2] = i118;
        i200 = i203;
        break;
       }
      }
     } while (0);
     i118 = HEAP32[i139 >> 2] | 0;
     i141 = (i118 | 0) == 0;
     if (i141) {
      i114 = 470;
     } else {
      if ((HEAP32[i118 + 36 >> 2] | 0) == 0) {
       i114 = 470;
      } else {
       i114 = 473;
      }
     }
     do {
      if ((i114 | 0) == 470) {
       if ((HEAP8[i148] & 1) == 0) {
        if ((HEAP8[i119] & 1) == 0 | i141) {
         break;
        } else {
         i114 = 473;
         break;
        }
       } else {
        if (i141) {
         break;
        } else {
         i114 = 473;
         break;
        }
       }
      }
     } while (0);
     do {
      if ((i114 | 0) == 473) {
       i141 = i118 + 36 | 0;
       if ((HEAP32[i141 >> 2] | 0) == 0) {
        break;
       }
       do {
        if ((HEAP8[i136] & 1) == 0) {
         if ((__ZN7WebCore13enclosingListEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i30) | 0) | 0) != 0) {
          break;
         }
         do {
          if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i30) | 0) + 12 >> 2] & 1 | 0) != 0) {
           if ((HEAP32[i142 >> 2] | 0) == 0) {
            break;
           }
           if (__ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i30) | 0) {
            break;
           }
           i139 = __ZNK7WebCore8Position13containerTextEv(i30) | 0;
           i120 = i56 | 0;
           HEAP32[i120 >> 2] = i139;
           if ((i139 | 0) != 0) {
            i161 = i139 + 8 | 0;
            HEAP32[i161 >> 2] = (HEAP32[i161 >> 2] | 0) + 1;
           }
           __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i112, i56, HEAP32[i142 >> 2] | 0);
           i161 = HEAP32[i120 >> 2] | 0;
           do {
            if ((i161 | 0) != 0) {
             i120 = i161 + 8 | 0;
             i139 = i120 | 0;
             i160 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
             HEAP32[i139 >> 2] = i160;
             if ((i160 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i57, __ZNK7WebCore8Position13containerNodeEv(i30) | 0);
           i161 = i57 | 0;
           i120 = HEAP32[i161 >> 2] | 0;
           HEAP32[i161 >> 2] = 0;
           i160 = HEAP32[i121 >> 2] | 0;
           HEAP32[i121 >> 2] = i120;
           do {
            if ((i160 | 0) != 0) {
             i120 = i160 + 8 | 0;
             i139 = i120 | 0;
             i159 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
             HEAP32[i139 >> 2] = i159;
             if ((i159 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
            }
           } while (0);
           HEAP32[i142 >> 2] = HEAP32[i57 + 4 >> 2];
           i160 = HEAP32[i57 + 8 >> 2] | 0;
           i120 = HEAP32[i143 >> 2] & -8 | i160 & 7;
           HEAP32[i143 >> 2] = i120;
           HEAP8[i144] = i120 & 255 & -9 | i160 & 8;
           i160 = HEAP32[i161 >> 2] | 0;
           if ((i160 | 0) == 0) {
            break;
           }
           i120 = i160 + 8 | 0;
           i160 = i120 | 0;
           i159 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
           HEAP32[i160 >> 2] = i159;
           if ((i159 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
          }
         } while (0);
         i120 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i30) | 0, 1) | 0;
         i159 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i30, F_BASE_ii + 2 | 0, 1, i120) | 0;
         if ((i159 | 0) == 0) {
          break;
         }
         i120 = i159 + 8 | 0;
         HEAP32[i120 >> 2] = (HEAP32[i120 >> 2] | 0) + 1;
         i120 = __ZNK7WebCore8Position13containerNodeEv(i30) | 0;
         i160 = i159 + 16 | 0;
         if ((i120 | 0) == (HEAP32[i160 >> 2] | 0)) {
          i204 = i159;
         } else {
          i120 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i30) | 0;
          if ((i120 | 0) == 0) {
           i205 = __ZNK7WebCore8Position13containerNodeEv(i30) | 0;
          } else {
           i205 = i120;
          }
          __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i58, i112, i205, HEAP32[i160 >> 2] | 0, 0);
          i160 = i58 | 0;
          i120 = HEAP32[i160 >> 2] | 0;
          i139 = (i120 | 0) == 0;
          if (!i139) {
           i170 = i120 + 8 | 0;
           HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) + 1;
          }
          i170 = i159 + 8 | 0;
          i159 = i170 - 8 | 0;
          i162 = i170 | 0;
          i169 = (HEAP32[i162 >> 2] | 0) - 1 | 0;
          HEAP32[i162 >> 2] = i169;
          do {
           if ((i169 | 0) < 1) {
            if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i159);
           }
          } while (0);
          i159 = HEAP32[i160 >> 2] | 0;
          do {
           if ((i159 | 0) != 0) {
            i170 = i159 + 8 | 0;
            i169 = i170 | 0;
            i162 = (HEAP32[i169 >> 2] | 0) - 1 | 0;
            HEAP32[i169 >> 2] = i162;
            if ((i162 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
           }
          } while (0);
          i159 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i120) | 0;
          i160 = i8 | 0;
          HEAP32[i160 >> 2] = i159;
          if ((i159 | 0) != 0) {
           i170 = i159 + 8 | 0;
           HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) + 1;
          }
          __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i59, i8, __ZNK7WebCore4Node9nodeIndexEv(i120) | 0, 0);
          i170 = HEAP32[i160 >> 2] | 0;
          do {
           if ((i170 | 0) != 0) {
            i160 = i170 + 8 | 0;
            i159 = i160 | 0;
            i162 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
            HEAP32[i159 >> 2] = i162;
            if ((i162 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
           }
          } while (0);
          i170 = i59 | 0;
          i160 = HEAP32[i170 >> 2] | 0;
          HEAP32[i170 >> 2] = 0;
          i162 = HEAP32[i121 >> 2] | 0;
          HEAP32[i121 >> 2] = i160;
          do {
           if ((i162 | 0) != 0) {
            i160 = i162 + 8 | 0;
            i159 = i160 | 0;
            i169 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
            HEAP32[i159 >> 2] = i169;
            if ((i169 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
           }
          } while (0);
          HEAP32[i142 >> 2] = HEAP32[i59 + 4 >> 2];
          i162 = HEAP32[i59 + 8 >> 2] | 0;
          i160 = HEAP32[i143 >> 2] & -8 | i162 & 7;
          HEAP32[i143 >> 2] = i160;
          HEAP8[i144] = i160 & 255 & -9 | i162 & 8;
          i162 = HEAP32[i170 >> 2] | 0;
          do {
           if ((i162 | 0) != 0) {
            i160 = i162 + 8 | 0;
            i169 = i160 | 0;
            i159 = (HEAP32[i169 >> 2] | 0) - 1 | 0;
            HEAP32[i169 >> 2] = i159;
            if ((i159 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
           }
          } while (0);
          if (i139) {
           break;
          } else {
           i204 = i120;
          }
         }
         i162 = i204 + 8 | 0;
         i170 = i162 | 0;
         i160 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
         HEAP32[i170 >> 2] = i160;
         if ((i160 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i162 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i162 - 8 | 0);
        }
       } while (0);
       i164 = i60 | 0;
       HEAP32[i164 >> 2] = 0;
       i158 = i60 + 4 | 0;
       HEAP32[i158 >> 2] = 0;
       i162 = HEAP32[i141 >> 2] | 0;
       if ((i162 | 0) == 0) {
        i206 = 0;
        i207 = 1;
       } else {
        i160 = i162 + 8 | 0;
        HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
        i206 = i162;
        i207 = 0;
       }
       i162 = HEAP32[i206 + 28 >> 2] | 0;
       if ((i162 | 0) != 0) {
        i160 = i162 + 8 | 0;
        HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
       }
       do {
        if (i207) {
        } else {
         i160 = i206 + 8 | 0;
         HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
         i160 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i206) | 0;
         if ((i160 | 0) != 0) {
          i170 = i7 | 0;
          HEAP32[i170 >> 2] = 0;
          __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i160, i206, i170) | 0;
         }
         i170 = i206 + 8 | 0;
         i160 = i170 | 0;
         i159 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
         HEAP32[i160 >> 2] = i159;
         if ((i159 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
        }
       } while (0);
       i141 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(HEAP32[i121 >> 2] | 0, 1) | 0;
       i170 = i141 | 0;
       do {
        if (__ZN7WebCore13isListElementEPNS_4NodeE(i206) | 0) {
         if ((i141 | 0) == 0) {
          i114 = 557;
         } else {
          i114 = 541;
         }
        } else {
         if (!(__ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE(i206) | 0)) {
          i114 = 557;
          break;
         }
         if ((HEAP32[i206 + 12 >> 2] & 2 | 0) == 0) {
          i208 = 0;
         } else {
          i208 = HEAP32[i206 + 36 >> 2] | 0;
         }
         if ((i141 | 0) == 0 | (__ZN7WebCore13isListElementEPNS_4NodeE(i208) | 0) ^ 1) {
          i114 = 557;
         } else {
          i114 = 541;
         }
        }
       } while (0);
       do {
        if ((i114 | 0) == 541) {
         i159 = i141 + 32 | 0;
         if ((HEAP32[i141 + 12 >> 2] & 2048 | 0) == 0) {
          i209 = i159 | 0;
         } else {
          i209 = HEAP32[i159 >> 2] | 0;
         }
         i159 = HEAP32[i209 >> 2] | 0;
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i159 >> 2] | 0) + 104 >> 2] & 31](i159) | 0)) {
          i114 = 557;
          break;
         }
         i159 = i61 | 0;
         HEAP32[i159 >> 2] = i206;
         if ((i206 | 0) != 0) {
          i160 = i206 + 8 | 0;
          HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
         }
         i160 = __ZN7WebCore23ReplaceSelectionCommand17insertAsListItemsEN3WTF10PassRefPtrINS_11HTMLElementEEEPNS_4NodeERKNS_8PositionERNS0_13InsertedNodesE(i1, i61, i170, i30, i60) | 0;
         if ((i160 | 0) != 0) {
          i169 = i160 + 8 | 0;
          HEAP32[i169 >> 2] = (HEAP32[i169 >> 2] | 0) + 1;
         }
         do {
          if (!i207) {
           i169 = i206 + 8 | 0;
           i168 = i169 | 0;
           i176 = (HEAP32[i168 >> 2] | 0) - 1 | 0;
           HEAP32[i168 >> 2] = i176;
           if ((i176 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i169 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i169 - 8 | 0);
          }
         } while (0);
         i120 = HEAP32[i159 >> 2] | 0;
         if ((i120 | 0) == 0) {
          i210 = i160;
          break;
         }
         i139 = i120 + 8 | 0;
         i120 = i139 | 0;
         i169 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i169;
         if ((i169 | 0) >= 1) {
          i210 = i160;
          break;
         }
         if ((HEAP32[i139 + 8 >> 2] | 0) != 0) {
          i210 = i160;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i139 - 8 | 0);
         i210 = i160;
        }
       } while (0);
       do {
        if ((i114 | 0) == 557) {
         i170 = i62 | 0;
         HEAP32[i170 >> 2] = i206;
         if (!i207) {
          i141 = i206 + 8 | 0;
          HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i112, i62, i30);
         i141 = HEAP32[i170 >> 2] | 0;
         do {
          if ((i141 | 0) != 0) {
           i170 = i141 + 8 | 0;
           i139 = i170 | 0;
           i169 = (HEAP32[i139 >> 2] | 0) - 1 | 0;
           HEAP32[i139 >> 2] = i169;
           if ((i169 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
          }
         } while (0);
         if (i207) {
          i210 = i206;
          break;
         }
         i141 = i206 + 8 | 0;
         HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
         HEAP32[i164 >> 2] = i206;
         HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
         HEAP32[i158 >> 2] = i206;
         i210 = i206;
        }
       } while (0);
       L759 : do {
        if ((HEAP32[i210 + 12 >> 2] & 256 | 0) == 0) {
         i211 = i162;
         i212 = i210;
         i114 = 937;
        } else {
         i141 = __ZN7WebCore17isPlainTextMarkupEPNS_4NodeE(i210) | 0;
         i160 = i63 | 0;
         i159 = i64 | 0;
         i170 = i6 | 0;
         i169 = i141;
         i141 = i162;
         i139 = i210;
         while (1) {
          if ((i141 | 0) == 0) {
           break;
          }
          i120 = HEAP32[i141 + 28 >> 2] | 0;
          i176 = (i120 | 0) == 0;
          if (!i176) {
           i168 = i120 + 8 | 0;
           HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
          }
          i168 = i141 + 8 | 0;
          HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
          i167 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i141) | 0;
          if ((i167 | 0) != 0) {
           HEAP32[i170 >> 2] = 0;
           __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i167, i141, i170) | 0;
          }
          i167 = i141 + 8 | 0;
          i115 = i167 - 8 | 0;
          i163 = i167 | 0;
          i172 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
          HEAP32[i163 >> 2] = i172;
          do {
           if ((i172 | 0) < 1) {
            if ((HEAP32[i167 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115);
           }
          } while (0);
          HEAP32[i160 >> 2] = i141;
          HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
          HEAP32[i159 >> 2] = i139;
          i172 = (i139 | 0) == 0;
          if (!i172) {
           i161 = i139 + 8 | 0;
           HEAP32[i161 >> 2] = (HEAP32[i161 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i112, i63, i64);
          i161 = HEAP32[i159 >> 2] | 0;
          do {
           if ((i161 | 0) != 0) {
            i195 = i161 + 8 | 0;
            i171 = i195 | 0;
            i194 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
            HEAP32[i171 >> 2] = i194;
            if ((i194 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
           }
          } while (0);
          i161 = HEAP32[i160 >> 2] | 0;
          do {
           if ((i161 | 0) != 0) {
            i195 = i161 + 8 | 0;
            i194 = i195 | 0;
            i171 = (HEAP32[i194 >> 2] | 0) - 1 | 0;
            HEAP32[i194 >> 2] = i171;
            if ((i171 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
           }
          } while (0);
          do {
           if ((HEAP32[i164 >> 2] | 0) == 0) {
            HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
            i161 = HEAP32[i164 >> 2] | 0;
            HEAP32[i164 >> 2] = i141;
            if ((i161 | 0) == 0) {
             break;
            }
            i195 = i161 + 8 | 0;
            i161 = i195 | 0;
            i171 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
            HEAP32[i161 >> 2] = i171;
            if ((i171 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
           }
          } while (0);
          HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
          i195 = HEAP32[i158 >> 2] | 0;
          HEAP32[i158 >> 2] = i141;
          do {
           if ((i195 | 0) != 0) {
            i171 = i195 + 8 | 0;
            i161 = i171 | 0;
            i194 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
            HEAP32[i161 >> 2] = i194;
            if ((i194 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i171 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i171 - 8 | 0);
           }
          } while (0);
          do {
           if ((HEAP32[i141 + 12 >> 2] & 256 | 0) == 0) {
            i213 = 1;
            i214 = i169;
            i215 = i141;
            i216 = i139;
           } else {
            HEAP32[i168 >> 2] = (HEAP32[i168 >> 2] | 0) + 1;
            do {
             if (!i172) {
              i195 = i139 + 8 | 0;
              i171 = i195 | 0;
              i194 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
              HEAP32[i171 >> 2] = i194;
              if ((i194 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
             }
            } while (0);
            if (i169) {
             i217 = __ZN7WebCore17isPlainTextMarkupEPNS_4NodeE(i141) | 0;
            } else {
             i217 = 0;
            }
            if (!i176) {
             i195 = i120 + 8 | 0;
             HEAP32[i195 >> 2] = (HEAP32[i195 >> 2] | 0) + 1;
            }
            i195 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
            HEAP32[i163 >> 2] = i195;
            if ((i195 | 0) >= 1) {
             i213 = 0;
             i214 = i217;
             i215 = i120;
             i216 = i141;
             break;
            }
            if ((HEAP32[i167 + 8 >> 2] | 0) != 0) {
             i213 = 0;
             i214 = i217;
             i215 = i120;
             i216 = i141;
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115);
            i213 = 0;
            i214 = i217;
            i215 = i120;
            i216 = i141;
           }
          } while (0);
          do {
           if (!i176) {
            i115 = i120 + 8 | 0;
            i167 = i115 | 0;
            i163 = (HEAP32[i167 >> 2] | 0) - 1 | 0;
            HEAP32[i167 >> 2] = i163;
            if ((i163 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
           }
          } while (0);
          if ((i213 | 0) == 0) {
           i169 = i214;
           i141 = i215;
           i139 = i216;
          } else {
           i211 = i215;
           i212 = i216;
           i114 = 937;
           break L759;
          }
         }
         __ZN7WebCore23ReplaceSelectionCommand31removeUnrenderedTextNodesAtEndsERNS0_13InsertedNodesE(i1, i60);
         if (!i200) {
          __ZN7WebCore23ReplaceSelectionCommand16handleStyleSpansERNS0_13InsertedNodesE(i1, i60);
         }
         i141 = HEAP32[i164 >> 2] | 0;
         if ((i141 | 0) == 0) {
          i218 = i139;
          break;
         }
         if ((HEAP32[i141 + 12 >> 2] & 256 | 0) == 0) {
          i218 = i139;
          break;
         }
         do {
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i141 >> 2] | 0) + 132 >> 2] & 31](i141) | 0) {
           __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i66, i141);
          } else {
           i160 = i5 | 0;
           HEAP32[i160 >> 2] = i141;
           i159 = i141 + 8 | 0;
           HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) + 1;
           __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i66, i5, 1);
           i159 = HEAP32[i160 >> 2] | 0;
           if ((i159 | 0) == 0) {
            break;
           }
           i160 = i159 + 8 | 0;
           i159 = i160 | 0;
           i170 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
           HEAP32[i159 >> 2] = i170;
           if ((i170 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
          }
         } while (0);
         __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i65, i66, 1);
         i141 = HEAP32[i66 >> 2] | 0;
         do {
          if ((i141 | 0) != 0) {
           i160 = i141 + 8 | 0;
           i170 = i160 | 0;
           i159 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
           HEAP32[i170 >> 2] = i159;
           if ((i159 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
          }
         } while (0);
         do {
          if (!i123) {
           if ((HEAP32[i121 >> 2] | 0) != (HEAP32[i145 + 16 >> 2] | 0)) {
            break;
           }
           do {
            if ((HEAP8[i144] & 8) == 0) {
             i141 = HEAP32[i143 >> 2] & 7;
             if (!((i141 | 0) == 2 | (i141 | 0) == 4)) {
              i114 = 629;
              break;
             }
             i219 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
            } else {
             i114 = 629;
            }
           } while (0);
           if ((i114 | 0) == 629) {
            i219 = HEAP32[i142 >> 2] | 0;
           }
           if (i219 >>> 0 >= (__ZNK7WebCore4Node9nodeIndexEv(i140) | 0) >>> 0) {
            break;
           }
           if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i65, 1) | 0) {
            break;
           }
           __ZN7WebCore18createBreakElementERNS_8DocumentE(i68, HEAP32[i117 >> 2] | 0);
           i141 = i67 | 0;
           i160 = i68 | 0;
           i159 = HEAP32[i160 >> 2] | 0;
           HEAP32[i160 >> 2] = 0;
           HEAP32[i141 >> 2] = i159;
           i159 = i69 | 0;
           i170 = HEAP32[i65 >> 2] | 0;
           HEAP32[i159 >> 2] = i170;
           if ((i170 | 0) != 0) {
            i120 = i170 + 8 | 0;
            HEAP32[i120 >> 2] = (HEAP32[i120 >> 2] | 0) + 1;
           }
           HEAP32[i69 + 4 >> 2] = HEAP32[i65 + 4 >> 2];
           i120 = HEAP32[i65 + 8 >> 2] | 0;
           i170 = i69 + 8 | 0;
           i176 = i170;
           i115 = HEAP32[i176 >> 2] & -8 | i120 & 7;
           HEAP32[i176 >> 2] = i115;
           HEAP8[i170] = i115 & 255 & -9 | i120 & 8;
           __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i112, i67, i69);
           i120 = HEAP32[i159 >> 2] | 0;
           do {
            if ((i120 | 0) != 0) {
             i159 = i120 + 8 | 0;
             i115 = i159 | 0;
             i170 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
             HEAP32[i115 >> 2] = i170;
             if ((i170 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
            }
           } while (0);
           i120 = HEAP32[i141 >> 2] | 0;
           do {
            if ((i120 | 0) != 0) {
             i159 = i120 + 8 | 0;
             i170 = i159 | 0;
             i115 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
             HEAP32[i170 >> 2] = i115;
             if ((i115 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
            }
           } while (0);
           i120 = HEAP32[i160 >> 2] | 0;
           if ((i120 | 0) == 0) {
            break;
           }
           i141 = i120 + 8 | 0;
           i120 = i141 | 0;
           i159 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
           HEAP32[i120 >> 2] = i159;
           if ((i159 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
          }
         } while (0);
         do {
          if (!i152) {
           if (!i169) {
            if (!(__ZN7WebCore23ReplaceSelectionCommand17shouldRemoveEndBREPNS_4NodeERKNS_15VisiblePositionE(i1, i153, i46) | 0)) {
             break;
            }
           }
           i141 = HEAP32[i153 + 16 >> 2] | 0;
           i159 = i141 | 0;
           i120 = (i141 | 0) == 0;
           if (!i120) {
            i115 = i141 + 8 | 0;
            HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
           }
           __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE(i60, i153);
           i115 = i1;
           i170 = HEAP32[(HEAP32[i115 >> 2] | 0) + 60 >> 2] | 0;
           i176 = i70 | 0;
           HEAP32[i176 >> 2] = i153;
           i163 = i153 + 8 | 0;
           HEAP32[i163 >> 2] = (HEAP32[i163 >> 2] | 0) + 1;
           FUNCTION_TABLE_viii[i170 & 3](i112, i70, 1);
           i170 = HEAP32[i176 >> 2] | 0;
           do {
            if ((i170 | 0) != 0) {
             i176 = i170 + 8 | 0;
             i163 = i176 | 0;
             i167 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
             HEAP32[i163 >> 2] = i167;
             if ((i167 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i176 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i176 - 8 | 0);
            }
           } while (0);
           i170 = __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(i159) | 0;
           do {
            if ((i170 | 0) != 0) {
             __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE(i60, i170);
             i160 = HEAP32[(HEAP32[i115 >> 2] | 0) + 60 >> 2] | 0;
             i176 = i71 | 0;
             HEAP32[i176 >> 2] = i170;
             i167 = i170 + 8 | 0;
             HEAP32[i167 >> 2] = (HEAP32[i167 >> 2] | 0) + 1;
             FUNCTION_TABLE_viii[i160 & 3](i112, i71, 1);
             i160 = HEAP32[i176 >> 2] | 0;
             if ((i160 | 0) == 0) {
              break;
             }
             i176 = i160 + 8 | 0;
             i160 = i176 | 0;
             i167 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
             HEAP32[i160 >> 2] = i167;
             if ((i167 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i176 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i176 - 8 | 0);
            }
           } while (0);
           if (i120) {
            break;
           }
           i170 = i141 + 8 | 0;
           i115 = i170 | 0;
           i159 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
           HEAP32[i115 >> 2] = i159;
           if ((i159 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
          }
         } while (0);
         __ZN7WebCore23ReplaceSelectionCommand52makeInsertedContentRoundTrippableWithHTMLTreeBuilderERNS0_13InsertedNodesE(i1, i60);
         __ZN7WebCore23ReplaceSelectionCommand43removeRedundantStylesAndKeepStyleSpanInlineERNS0_13InsertedNodesE(i1, i60);
         do {
          if ((HEAP8[i1 + 196 | 0] & 1) == 0) {
           i220 = HEAP32[i164 >> 2] | 0;
          } else {
           i170 = HEAP32[i117 >> 2] | 0;
           i159 = HEAP32[i164 >> 2] | 0;
           i115 = HEAP32[i158 >> 2] | 0;
           do {
            if ((i115 | 0) == 0) {
             i221 = 0;
            } else {
             i176 = __ZNK7WebCore4Node14lastDescendantEv(i115) | 0;
             if ((HEAP32[i176 + 12 >> 2] & 2 | 0) != 0) {
              i167 = HEAP32[i176 + 36 >> 2] | 0;
              if ((i167 | 0) != 0) {
               i221 = i167;
               break;
              }
             }
             i167 = HEAP32[i176 + 28 >> 2] | 0;
             if ((i167 | 0) != 0) {
              i221 = i167;
              break;
             }
             i221 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i176) | 0;
            }
           } while (0);
           i115 = __ZN3WTF10fastMallocEj(160) | 0;
           __ZN7WebCore21SimplifyMarkupCommandC1ERNS_8DocumentEPNS_4NodeES4_(i115, i170, i159, i221);
           i141 = i72 | 0;
           HEAP32[i141 >> 2] = i115;
           __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i112, i72);
           i115 = HEAP32[i141 >> 2] | 0;
           if ((i115 | 0) == 0) {
            i220 = i159;
            break;
           }
           i141 = i115 + 4 | 0;
           i115 = i141 | 0;
           i120 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
           if ((i120 | 0) != 0) {
            HEAP32[i115 >> 2] = i120;
            i220 = i159;
            break;
           }
           i120 = i141 - 4 | 0;
           if ((i120 | 0) == 0) {
            i220 = i159;
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i120 >> 2] | 0) + 4 >> 2] & 7](i120);
           i220 = i159;
          }
         } while (0);
         i120 = i1 + 152 | 0;
         do {
          if ((i220 | 0) == 0) {
           HEAP32[i73 >> 2] = 0;
           HEAP32[i73 + 4 >> 2] = 0;
           i141 = i73 + 8 | 0;
           i115 = i141;
           i176 = HEAP32[i115 >> 2] | 0;
           HEAP32[i115 >> 2] = i176 & -8;
           HEAP8[i141] = i176 & 255 & -16;
          } else {
           if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i220 >> 2] | 0) + 132 >> 2] & 31](i220) | 0) {
            __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i73, i220);
            break;
           }
           i176 = i4 | 0;
           HEAP32[i176 >> 2] = i220;
           i141 = i220 + 8 | 0;
           HEAP32[i141 >> 2] = (HEAP32[i141 >> 2] | 0) + 1;
           __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i73, i4, 1);
           i141 = HEAP32[i176 >> 2] | 0;
           if ((i141 | 0) == 0) {
            break;
           }
           i176 = i141 + 8 | 0;
           i141 = i176 | 0;
           i115 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
           HEAP32[i141 >> 2] = i115;
           if ((i115 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i176 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i176 - 8 | 0);
          }
         } while (0);
         i176 = i73 | 0;
         i115 = HEAP32[i176 >> 2] | 0;
         HEAP32[i176 >> 2] = 0;
         i141 = i120 | 0;
         i167 = HEAP32[i141 >> 2] | 0;
         HEAP32[i141 >> 2] = i115;
         do {
          if ((i167 | 0) != 0) {
           i115 = i167 + 8 | 0;
           i160 = i115 | 0;
           i163 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
           HEAP32[i160 >> 2] = i163;
           if ((i163 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
          }
         } while (0);
         i167 = i1 + 156 | 0;
         HEAP32[i167 >> 2] = HEAP32[i73 + 4 >> 2];
         i115 = HEAP32[i73 + 8 >> 2] | 0;
         i163 = i1 + 160 | 0;
         i160 = i163;
         i172 = HEAP32[i160 >> 2] & -8 | i115 & 7;
         HEAP32[i160 >> 2] = i172;
         HEAP8[i163] = i172 & 255 & -9 | i115 & 8;
         i115 = HEAP32[i176 >> 2] | 0;
         do {
          if ((i115 | 0) != 0) {
           i172 = i115 + 8 | 0;
           i168 = i172 | 0;
           i195 = (HEAP32[i168 >> 2] | 0) - 1 | 0;
           HEAP32[i168 >> 2] = i195;
           if ((i195 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i172 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i172 - 8 | 0);
          }
         } while (0);
         i115 = __ZNK7WebCore4Node14lastDescendantEv(HEAP32[i158 >> 2] | 0) | 0;
         do {
          if ((i115 | 0) == 0) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i74 + 4 >> 2] = 0;
           i176 = i74 + 8 | 0;
           i172 = i176;
           i195 = HEAP32[i172 >> 2] | 0;
           HEAP32[i172 >> 2] = i195 & -8;
           HEAP8[i176] = i195 & 255 & -16;
          } else {
           if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 132 >> 2] & 31](i115) | 0) {
            __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i74, i115);
            break;
           }
           i195 = i3 | 0;
           HEAP32[i195 >> 2] = i115;
           i176 = i115 + 8 | 0;
           HEAP32[i176 >> 2] = (HEAP32[i176 >> 2] | 0) + 1;
           __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i74, i3, 2);
           i176 = HEAP32[i195 >> 2] | 0;
           if ((i176 | 0) == 0) {
            break;
           }
           i195 = i176 + 8 | 0;
           i176 = i195 | 0;
           i172 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
           HEAP32[i176 >> 2] = i172;
           if ((i172 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
          }
         } while (0);
         i115 = i74 | 0;
         i195 = HEAP32[i115 >> 2] | 0;
         HEAP32[i115 >> 2] = 0;
         i172 = i1 + 164 | 0;
         i176 = HEAP32[i172 >> 2] | 0;
         HEAP32[i172 >> 2] = i195;
         do {
          if ((i176 | 0) != 0) {
           i195 = i176 + 8 | 0;
           i168 = i195 | 0;
           i194 = (HEAP32[i168 >> 2] | 0) - 1 | 0;
           HEAP32[i168 >> 2] = i194;
           if ((i194 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i195 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i195 - 8 | 0);
          }
         } while (0);
         i176 = i1 + 168 | 0;
         HEAP32[i176 >> 2] = HEAP32[i74 + 4 >> 2];
         i195 = HEAP32[i74 + 8 >> 2] | 0;
         i194 = i1 + 172 | 0;
         i168 = i194;
         i171 = HEAP32[i168 >> 2] & -8 | i195 & 7;
         HEAP32[i168 >> 2] = i171;
         HEAP8[i194] = i171 & 255 & -9 | i195 & 8;
         i195 = HEAP32[i115 >> 2] | 0;
         do {
          if ((i195 | 0) != 0) {
           i171 = i195 + 8 | 0;
           i161 = i171 | 0;
           i222 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
           HEAP32[i161 >> 2] = i222;
           if ((i222 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i171 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i171 - 8 | 0);
          }
         } while (0);
         i195 = i1 + 197 | 0;
         HEAP8[i195] = (__ZN7WebCore23ReplaceSelectionCommand14shouldMergeEndEb(i1, i124) | 0) & 1;
         L944 : do {
          if (__ZN7WebCore23ReplaceSelectionCommand16shouldMergeStartEbbb(i1, i116, (HEAP8[i148] & 1) != 0, i134) | 0) {
           __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i75, i120, 1);
           __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i76, i75, 0);
           i115 = i76 | 0;
           i171 = HEAP32[i115 >> 2] | 0;
           do {
            if ((i171 | 0) != 0) {
             i222 = HEAP32[i171 + 8 >> 2] | 0;
             i161 = i171 + 8 | 0;
             HEAP32[i161 >> 2] = i222;
             if ((i222 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
            }
           } while (0);
           do {
            if ((HEAP8[i195] & 1) != 0) {
             i159 = i171 + 16 | 0;
             i170 = HEAP32[i159 >> 2] | 0;
             L953 : do {
              if ((i170 | 0) == 0) {
               i223 = i171;
              } else {
               i161 = i171;
               i222 = i170;
               while (1) {
                i224 = i222 | 0;
                if (__ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i224) | 0) {
                 i223 = i161;
                 break L953;
                }
                do {
                 if ((HEAP32[i222 + 12 >> 2] & 4 | 0) == 0) {
                  i225 = i161;
                 } else {
                  i226 = HEAP32[i224 + 44 >> 2] | 0;
                  i227 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
                  if ((i226 | 0) == (i227 | 0)) {
                   i223 = i161;
                   break L953;
                  }
                  if ((HEAP32[i226 + 12 >> 2] | 0) != (HEAP32[i227 + 12 >> 2] | 0)) {
                   i225 = i161;
                   break;
                  }
                  if ((HEAP32[i226 + 16 >> 2] | 0) == (HEAP32[i227 + 16 >> 2] | 0)) {
                   i223 = i161;
                   break L953;
                  } else {
                   i225 = i161;
                  }
                 }
                } while (0);
                while (1) {
                 i227 = HEAP32[i225 + 24 >> 2] | 0;
                 if ((i227 | 0) == 0) {
                  break;
                 }
                 if (__ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i227) | 0) {
                  i223 = i161;
                  break L953;
                 } else {
                  i225 = i227;
                 }
                }
                i227 = HEAP32[i222 + 16 >> 2] | 0;
                if ((i227 | 0) == 0) {
                 i223 = i224;
                 break;
                } else {
                 i161 = i224;
                 i222 = i227;
                }
               }
              }
             } while (0);
             if ((i171 | 0) == (i223 | 0)) {
              break;
             }
             i170 = HEAP32[i159 >> 2] | 0;
             L967 : do {
              if ((i170 | 0) == 0) {
               i228 = i171;
              } else {
               i222 = i171;
               i161 = i170;
               while (1) {
                i227 = i161 | 0;
                if (__ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i227) | 0) {
                 i228 = i222;
                 break L967;
                }
                do {
                 if ((HEAP32[i161 + 12 >> 2] & 4 | 0) == 0) {
                  i229 = i222;
                 } else {
                  i226 = HEAP32[i227 + 44 >> 2] | 0;
                  i230 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
                  if ((i226 | 0) == (i230 | 0)) {
                   i228 = i222;
                   break L967;
                  }
                  if ((HEAP32[i226 + 12 >> 2] | 0) != (HEAP32[i230 + 12 >> 2] | 0)) {
                   i229 = i222;
                   break;
                  }
                  if ((HEAP32[i226 + 16 >> 2] | 0) == (HEAP32[i230 + 16 >> 2] | 0)) {
                   i228 = i222;
                   break L967;
                  } else {
                   i229 = i222;
                  }
                 }
                } while (0);
                while (1) {
                 i224 = HEAP32[i229 + 24 >> 2] | 0;
                 if ((i224 | 0) == 0) {
                  break;
                 }
                 if (__ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i224) | 0) {
                  i228 = i222;
                  break L967;
                 } else {
                  i229 = i224;
                 }
                }
                i224 = HEAP32[i161 + 16 >> 2] | 0;
                if ((i224 | 0) == 0) {
                 i228 = i227;
                 break;
                } else {
                 i222 = i227;
                 i161 = i224;
                }
               }
              }
             } while (0);
             if ((HEAP32[i228 + 28 >> 2] | 0) == 0) {
              break;
             }
             __ZN7WebCore18createBreakElementERNS_8DocumentE(i78, HEAP32[i117 >> 2] | 0);
             i170 = i77 | 0;
             i159 = i78 | 0;
             i161 = HEAP32[i159 >> 2] | 0;
             HEAP32[i159 >> 2] = 0;
             HEAP32[i170 >> 2] = i161;
             i161 = i79 | 0;
             HEAP32[i161 >> 2] = i139;
             if ((i139 | 0) != 0) {
              i222 = i139 + 8 | 0;
              HEAP32[i222 >> 2] = (HEAP32[i222 >> 2] | 0) + 1;
             }
             __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i112, i77, i79, 1);
             i222 = HEAP32[i161 >> 2] | 0;
             do {
              if ((i222 | 0) != 0) {
               i161 = i222 + 8 | 0;
               i224 = i161 | 0;
               i230 = (HEAP32[i224 >> 2] | 0) - 1 | 0;
               HEAP32[i224 >> 2] = i230;
               if ((i230 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
              }
             } while (0);
             i222 = HEAP32[i170 >> 2] | 0;
             do {
              if ((i222 | 0) != 0) {
               i161 = i222 + 8 | 0;
               i230 = i161 | 0;
               i224 = (HEAP32[i230 >> 2] | 0) - 1 | 0;
               HEAP32[i230 >> 2] = i224;
               if ((i224 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
              }
             } while (0);
             i222 = HEAP32[i159 >> 2] | 0;
             if ((i222 | 0) == 0) {
              break;
             }
             i170 = i222 + 8 | 0;
             i222 = i170 | 0;
             i161 = (HEAP32[i222 >> 2] | 0) - 1 | 0;
             HEAP32[i222 >> 2] = i161;
             if ((i161 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
            }
           } while (0);
           __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i80, i1);
           __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i81, i80, 1);
           i171 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i81, i75) | 0;
           i170 = HEAP32[i81 >> 2] | 0;
           do {
            if ((i170 | 0) != 0) {
             i161 = i170 + 8 | 0;
             i222 = i161 | 0;
             i224 = (HEAP32[i222 >> 2] | 0) - 1 | 0;
             HEAP32[i222 >> 2] = i224;
             if ((i224 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
            }
           } while (0);
           L1003 : do {
            if (i171) {
             __ZN7WebCore18createBreakElementERNS_8DocumentE(i83, HEAP32[i117 >> 2] | 0);
             i170 = i82 | 0;
             i161 = i83 | 0;
             i224 = HEAP32[i161 >> 2] | 0;
             HEAP32[i161 >> 2] = 0;
             HEAP32[i170 >> 2] = i224;
             i224 = i84 | 0;
             i222 = i80 | 0;
             i230 = HEAP32[i222 >> 2] | 0;
             HEAP32[i224 >> 2] = i230;
             if ((i230 | 0) != 0) {
              i226 = i230 + 8 | 0;
              HEAP32[i226 >> 2] = (HEAP32[i226 >> 2] | 0) + 1;
             }
             HEAP32[i84 + 4 >> 2] = HEAP32[i80 + 4 >> 2];
             i226 = HEAP32[i80 + 8 >> 2] | 0;
             i230 = i84 + 8 | 0;
             i231 = i230;
             i232 = HEAP32[i231 >> 2] & -8 | i226 & 7;
             HEAP32[i231 >> 2] = i232;
             HEAP8[i230] = i232 & 255 & -9 | i226 & 8;
             __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i112, i82, i84);
             i226 = HEAP32[i224 >> 2] | 0;
             do {
              if ((i226 | 0) != 0) {
               i224 = i226 + 8 | 0;
               i232 = i224 | 0;
               i230 = (HEAP32[i232 >> 2] | 0) - 1 | 0;
               HEAP32[i232 >> 2] = i230;
               if ((i230 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i224 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i224 - 8 | 0);
              }
             } while (0);
             i226 = HEAP32[i170 >> 2] | 0;
             do {
              if ((i226 | 0) != 0) {
               i159 = i226 + 8 | 0;
               i224 = i159 | 0;
               i230 = (HEAP32[i224 >> 2] | 0) - 1 | 0;
               HEAP32[i224 >> 2] = i230;
               if ((i230 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
              }
             } while (0);
             i226 = HEAP32[i161 >> 2] | 0;
             do {
              if ((i226 | 0) != 0) {
               i170 = i226 + 8 | 0;
               i159 = i170 | 0;
               i230 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
               HEAP32[i159 >> 2] = i230;
               if ((i230 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
              }
             } while (0);
             i226 = i75 | 0;
             i161 = HEAP32[i226 >> 2] | 0;
             L1023 : do {
              if ((i161 | 0) == 0) {
               if ((HEAP32[i161 + 12 >> 2] & 256 | 0) != 0) {
                break L1003;
               }
              } else {
               i170 = i161 + 8 | 0;
               HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) + 1;
               i170 = (HEAP32[i161 + 12 >> 2] & 256 | 0) == 0;
               i230 = i161 + 8 | 0;
               i159 = i230 - 8 | 0;
               i224 = i230 | 0;
               i232 = (HEAP32[i224 >> 2] | 0) - 1 | 0;
               HEAP32[i224 >> 2] = i232;
               do {
                if ((i232 | 0) < 1) {
                 if ((HEAP32[i230 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i159);
                 if (i170) {
                  break L1023;
                 } else {
                  break L1003;
                 }
                }
               } while (0);
               if (!i170) {
                break L1003;
               }
              }
             } while (0);
             i161 = HEAP32[i222 >> 2] | 0;
             do {
              if ((i161 | 0) != 0) {
               i159 = i161 + 8 | 0;
               i230 = i159 | 0;
               i232 = (HEAP32[i230 >> 2] | 0) - 1 | 0;
               HEAP32[i230 >> 2] = i232;
               if ((i232 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
              }
             } while (0);
             i161 = HEAP32[i115 >> 2] | 0;
             do {
              if ((i161 | 0) != 0) {
               i222 = i161 + 8 | 0;
               i159 = i222 | 0;
               i232 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
               HEAP32[i159 >> 2] = i232;
               if ((i232 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i222 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i222 - 8 | 0);
              }
             } while (0);
             i161 = HEAP32[i226 >> 2] | 0;
             if ((i161 | 0) == 0) {
              break L944;
             }
             i222 = i161 + 8 | 0;
             i161 = i222 | 0;
             i232 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
             HEAP32[i161 >> 2] = i232;
             if ((i232 | 0) >= 1) {
              break L944;
             }
             if ((HEAP32[i222 + 8 >> 2] | 0) != 0) {
              break L944;
             }
             __ZN7WebCore4Node14removedLastRefEv(i222 - 8 | 0);
             break L944;
            }
           } while (0);
           __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i85, i75, 1);
           __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i112, i75, i85, i76, 0, 1);
           i171 = HEAP32[i85 >> 2] | 0;
           do {
            if ((i171 | 0) != 0) {
             i222 = i171 + 8 | 0;
             i232 = i222 | 0;
             i161 = (HEAP32[i232 >> 2] | 0) - 1 | 0;
             HEAP32[i232 >> 2] = i161;
             if ((i161 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i222 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i222 - 8 | 0);
            }
           } while (0);
           i171 = i1 + 124 | 0;
           if ((HEAP32[i171 >> 2] | 0) == 2) {
            i233 = 1;
           } else {
            i233 = HEAP32[i1 + 120 >> 2] | 0;
           }
           __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i88, i1 + 96 | 0, i233);
           i222 = i87 | 0;
           i161 = i88 | 0;
           i232 = HEAP32[i161 >> 2] | 0;
           HEAP32[i222 >> 2] = i232;
           if ((i232 | 0) != 0) {
            i159 = i232 + 8 | 0;
            HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) + 1;
           }
           HEAP32[i87 + 4 >> 2] = HEAP32[i88 + 4 >> 2];
           i159 = HEAP32[i88 + 8 >> 2] | 0;
           i232 = i87 + 8 | 0;
           i230 = i232;
           i224 = HEAP32[i230 >> 2] & -8 | i159 & 7;
           HEAP32[i230 >> 2] = i224;
           HEAP8[i232] = i224 & 255 & -9 | i159 & 8;
           __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i86, i87, 1);
           i159 = i86 | 0;
           i224 = HEAP32[i159 >> 2] | 0;
           HEAP32[i159 >> 2] = 0;
           i232 = HEAP32[i141 >> 2] | 0;
           HEAP32[i141 >> 2] = i224;
           do {
            if ((i232 | 0) != 0) {
             i224 = i232 + 8 | 0;
             i230 = i224 | 0;
             i231 = (HEAP32[i230 >> 2] | 0) - 1 | 0;
             HEAP32[i230 >> 2] = i231;
             if ((i231 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i224 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i224 - 8 | 0);
            }
           } while (0);
           HEAP32[i167 >> 2] = HEAP32[i86 + 4 >> 2];
           i232 = HEAP32[i86 + 8 >> 2] | 0;
           i224 = HEAP32[i160 >> 2] & -8 | i232 & 7;
           HEAP32[i160 >> 2] = i224;
           HEAP8[i163] = i224 & 255 & -9 | i232 & 8;
           i232 = HEAP32[i159 >> 2] | 0;
           do {
            if ((i232 | 0) != 0) {
             i224 = i232 + 8 | 0;
             i231 = i224 | 0;
             i230 = (HEAP32[i231 >> 2] | 0) - 1 | 0;
             HEAP32[i231 >> 2] = i230;
             if ((i230 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i224 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i224 - 8 | 0);
            }
           } while (0);
           i232 = HEAP32[i222 >> 2] | 0;
           do {
            if ((i232 | 0) != 0) {
             i159 = i232 + 8 | 0;
             i224 = i159 | 0;
             i230 = (HEAP32[i224 >> 2] | 0) - 1 | 0;
             HEAP32[i224 >> 2] = i230;
             if ((i230 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
            }
           } while (0);
           i232 = HEAP32[i161 >> 2] | 0;
           do {
            if ((i232 | 0) != 0) {
             i222 = i232 + 8 | 0;
             i159 = i222 | 0;
             i230 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
             HEAP32[i159 >> 2] = i230;
             if ((i230 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i222 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i222 - 8 | 0);
            }
           } while (0);
           i232 = HEAP32[i172 >> 2] | 0;
           do {
            if ((i232 | 0) != 0) {
             if ((HEAP32[i232 + 12 >> 2] & 256 | 0) != 0) {
              break;
             }
             if ((HEAP32[i171 >> 2] | 0) == 2) {
              i234 = 0;
             } else {
              i234 = HEAP32[i1 + 120 >> 2] | 0;
             }
             __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i91, i1 + 108 | 0, i234);
             i161 = i90 | 0;
             i222 = i91 | 0;
             i230 = HEAP32[i222 >> 2] | 0;
             HEAP32[i161 >> 2] = i230;
             if ((i230 | 0) != 0) {
              i159 = i230 + 8 | 0;
              HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) + 1;
             }
             HEAP32[i90 + 4 >> 2] = HEAP32[i91 + 4 >> 2];
             i159 = HEAP32[i91 + 8 >> 2] | 0;
             i230 = i90 + 8 | 0;
             i224 = i230;
             i231 = HEAP32[i224 >> 2] & -8 | i159 & 7;
             HEAP32[i224 >> 2] = i231;
             HEAP8[i230] = i231 & 255 & -9 | i159 & 8;
             __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i89, i90, 1);
             i159 = i89 | 0;
             i231 = HEAP32[i159 >> 2] | 0;
             HEAP32[i159 >> 2] = 0;
             i230 = HEAP32[i172 >> 2] | 0;
             HEAP32[i172 >> 2] = i231;
             do {
              if ((i230 | 0) != 0) {
               i231 = i230 + 8 | 0;
               i224 = i231 | 0;
               i235 = (HEAP32[i224 >> 2] | 0) - 1 | 0;
               HEAP32[i224 >> 2] = i235;
               if ((i235 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i231 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i231 - 8 | 0);
              }
             } while (0);
             HEAP32[i176 >> 2] = HEAP32[i89 + 4 >> 2];
             i230 = HEAP32[i89 + 8 >> 2] | 0;
             i226 = HEAP32[i168 >> 2] & -8 | i230 & 7;
             HEAP32[i168 >> 2] = i226;
             HEAP8[i194] = i226 & 255 & -9 | i230 & 8;
             i230 = HEAP32[i159 >> 2] | 0;
             do {
              if ((i230 | 0) != 0) {
               i226 = i230 + 8 | 0;
               i231 = i226 | 0;
               i235 = (HEAP32[i231 >> 2] | 0) - 1 | 0;
               HEAP32[i231 >> 2] = i235;
               if ((i235 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i226 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i226 - 8 | 0);
              }
             } while (0);
             i230 = HEAP32[i161 >> 2] | 0;
             do {
              if ((i230 | 0) != 0) {
               i159 = i230 + 8 | 0;
               i226 = i159 | 0;
               i235 = (HEAP32[i226 >> 2] | 0) - 1 | 0;
               HEAP32[i226 >> 2] = i235;
               if ((i235 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i159 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i159 - 8 | 0);
              }
             } while (0);
             i230 = HEAP32[i222 >> 2] | 0;
             if ((i230 | 0) == 0) {
              break;
             }
             i161 = i230 + 8 | 0;
             i230 = i161 | 0;
             i159 = (HEAP32[i230 >> 2] | 0) - 1 | 0;
             HEAP32[i230 >> 2] = i159;
             if ((i159 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
            }
           } while (0);
           i171 = HEAP32[i80 >> 2] | 0;
           do {
            if ((i171 | 0) != 0) {
             i232 = i171 + 8 | 0;
             i161 = i232 | 0;
             i159 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
             HEAP32[i161 >> 2] = i159;
             if ((i159 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i232 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i232 - 8 | 0);
            }
           } while (0);
           i171 = HEAP32[i115 >> 2] | 0;
           do {
            if ((i171 | 0) != 0) {
             i232 = i171 + 8 | 0;
             i159 = i232 | 0;
             i161 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
             HEAP32[i159 >> 2] = i161;
             if ((i161 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i232 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i232 - 8 | 0);
            }
           } while (0);
           i171 = HEAP32[i75 >> 2] | 0;
           if ((i171 | 0) == 0) {
            i114 = 832;
            break;
           }
           i115 = i171 + 8 | 0;
           i171 = i115 | 0;
           i232 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
           HEAP32[i171 >> 2] = i232;
           if ((i232 | 0) >= 1) {
            i114 = 832;
            break;
           }
           if ((HEAP32[i115 + 8 >> 2] | 0) != 0) {
            i114 = 832;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i115 - 8 | 0);
           i114 = 832;
          } else {
           i114 = 832;
          }
         } while (0);
         do {
          if ((i114 | 0) == 832) {
           i194 = i92 | 0;
           HEAP32[i194 >> 2] = 0;
           i168 = i92 + 4 | 0;
           HEAP32[i168 >> 2] = 0;
           i176 = i92 + 8 | 0;
           i172 = i176;
           i163 = HEAP32[i172 >> 2] | 0;
           HEAP32[i172 >> 2] = i163 & -8;
           HEAP8[i176] = i163 & 255 & -16;
           do {
            if ((HEAP8[i119] & 1) == 0) {
             __ZN7WebCore23ReplaceSelectionCommand16mergeEndIfNeededEv(i1);
            } else {
             __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i93, i1);
             __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i94, i93, 1);
             do {
              if (i124) {
               i114 = 836;
              } else {
               if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i93, 1) | 0)) {
                i114 = 836;
                break;
               }
               i163 = HEAP32[i94 >> 2] | 0;
               if ((i163 | 0) == 0) {
                i114 = 836;
                break;
               }
               i160 = i105 | 0;
               HEAP32[i160 >> 2] = i163;
               i167 = i163 + 8 | 0;
               HEAP32[i167 >> 2] = (HEAP32[i167 >> 2] | 0) + 1;
               HEAP32[i105 + 4 >> 2] = HEAP32[i94 + 4 >> 2];
               i167 = HEAP32[i94 + 8 >> 2] | 0;
               i163 = i105 + 8 | 0;
               i141 = i163;
               i195 = HEAP32[i141 >> 2] & -8 | i167 & 7;
               HEAP32[i141 >> 2] = i195;
               HEAP8[i163] = i195 & 255 & -9 | i167 & 8;
               __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i104, i105, 1);
               i167 = i104 | 0;
               i195 = HEAP32[i167 >> 2] | 0;
               HEAP32[i167 >> 2] = 0;
               HEAP32[i194 >> 2] = i195;
               HEAP32[i168 >> 2] = HEAP32[i104 + 4 >> 2];
               i195 = HEAP32[i104 + 8 >> 2] | 0;
               i167 = HEAP32[i172 >> 2] & -8 | i195 & 7;
               HEAP32[i172 >> 2] = i167;
               HEAP8[i176] = i167 & 255 & -9 | i195 & 8;
               i195 = HEAP32[i160 >> 2] | 0;
               if ((i195 | 0) == 0) {
                break;
               }
               i160 = i195 + 8 | 0;
               i195 = i160 | 0;
               i167 = (HEAP32[i195 >> 2] | 0) - 1 | 0;
               HEAP32[i195 >> 2] = i167;
               if ((i167 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
              }
             } while (0);
             do {
              if ((i114 | 0) == 836) {
               if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i93, 1) | 0) {
                break;
               }
               __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i95, i93, 0);
               __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i109, i95);
               __ZN7WebCore16VisibleSelectionD2Ev(i95);
               i222 = i93 | 0;
               i160 = HEAP32[i222 >> 2] | 0;
               i167 = (i160 | 0) == 0;
               if (!i167) {
                i195 = i160 + 8 | 0;
                HEAP32[i195 >> 2] = (HEAP32[i195 >> 2] | 0) + 1;
               }
               i195 = i93 + 4 | 0;
               i163 = i93 + 8 | 0;
               i141 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i160, 1) | 0;
               i115 = i141 | 0;
               do {
                if (!i167) {
                 i232 = i160 + 8 | 0;
                 i171 = i232 | 0;
                 i161 = (HEAP32[i171 >> 2] | 0) - 1 | 0;
                 HEAP32[i171 >> 2] = i161;
                 if ((i161 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i232 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i232 - 8 | 0);
                }
               } while (0);
               do {
                if (__ZN7WebCore10isListItemEPKNS_4NodeE(i115) | 0) {
                 __ZN7WebCore21createListItemElementERNS_8DocumentE(i96, HEAP32[i117 >> 2] | 0);
                 i160 = i96 | 0;
                 i167 = HEAP32[i160 >> 2] | 0;
                 HEAP32[i160 >> 2] = 0;
                 i160 = i167 | 0;
                 i170 = i97 | 0;
                 HEAP32[i170 >> 2] = i160;
                 i232 = (i167 | 0) == 0;
                 if (!i232) {
                  i161 = i167 + 8 | 0;
                  HEAP32[i161 >> 2] = (HEAP32[i161 >> 2] | 0) + 1;
                 }
                 i161 = i98 | 0;
                 HEAP32[i161 >> 2] = i115;
                 if ((i141 | 0) != 0) {
                  i171 = i141 + 8 | 0;
                  HEAP32[i171 >> 2] = (HEAP32[i171 >> 2] | 0) + 1;
                 }
                 __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i112, i97, i98);
                 i171 = HEAP32[i161 >> 2] | 0;
                 do {
                  if ((i171 | 0) != 0) {
                   i161 = i171 + 8 | 0;
                   i159 = i161 | 0;
                   i230 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
                   HEAP32[i159 >> 2] = i230;
                   if ((i230 | 0) >= 1) {
                    break;
                   }
                   if ((HEAP32[i161 + 8 >> 2] | 0) != 0) {
                    break;
                   }
                   __ZN7WebCore4Node14removedLastRefEv(i161 - 8 | 0);
                  }
                 } while (0);
                 i171 = HEAP32[i170 >> 2] | 0;
                 do {
                  if ((i171 | 0) != 0) {
                   i227 = i171 + 8 | 0;
                   i161 = i227 | 0;
                   i230 = (HEAP32[i161 >> 2] | 0) - 1 | 0;
                   HEAP32[i161 >> 2] = i230;
                   if ((i230 | 0) >= 1) {
                    break;
                   }
                   if ((HEAP32[i227 + 8 >> 2] | 0) != 0) {
                    break;
                   }
                   __ZN7WebCore4Node14removedLastRefEv(i227 - 8 | 0);
                  }
                 } while (0);
                 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i101, i160);
                 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i100, i101, 1);
                 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i99, i100, 0);
                 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i109, i99);
                 __ZN7WebCore16VisibleSelectionD2Ev(i99);
                 i171 = HEAP32[i100 >> 2] | 0;
                 do {
                  if ((i171 | 0) != 0) {
                   i170 = i171 + 8 | 0;
                   i227 = i170 | 0;
                   i230 = (HEAP32[i227 >> 2] | 0) - 1 | 0;
                   HEAP32[i227 >> 2] = i230;
                   if ((i230 | 0) >= 1) {
                    break;
                   }
                   if ((HEAP32[i170 + 8 >> 2] | 0) != 0) {
                    break;
                   }
                   __ZN7WebCore4Node14removedLastRefEv(i170 - 8 | 0);
                  }
                 } while (0);
                 i171 = HEAP32[i101 >> 2] | 0;
                 do {
                  if ((i171 | 0) != 0) {
                   i160 = i171 + 8 | 0;
                   i170 = i160 | 0;
                   i230 = (HEAP32[i170 >> 2] | 0) - 1 | 0;
                   HEAP32[i170 >> 2] = i230;
                   if ((i230 | 0) >= 1) {
                    break;
                   }
                   if ((HEAP32[i160 + 8 >> 2] | 0) != 0) {
                    break;
                   }
                   __ZN7WebCore4Node14removedLastRefEv(i160 - 8 | 0);
                  }
                 } while (0);
                 if (i232) {
                  break;
                 }
                 i171 = i167 + 8 | 0;
                 i160 = i171 | 0;
                 i230 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
                 HEAP32[i160 >> 2] = i230;
                 if ((i230 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i171 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i171 - 8 | 0);
                } else {
                 if (i134) {
                  __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i112, 1, 0);
                  break;
                 }
                 i171 = i102 | 0;
                 i230 = HEAP32[i222 >> 2] | 0;
                 HEAP32[i171 >> 2] = i230;
                 if ((i230 | 0) != 0) {
                  i160 = i230 + 8 | 0;
                  HEAP32[i160 >> 2] = (HEAP32[i160 >> 2] | 0) + 1;
                 }
                 HEAP32[i102 + 4 >> 2] = HEAP32[i195 >> 2];
                 i160 = HEAP32[i163 >> 2] | 0;
                 i230 = i102 + 8 | 0;
                 i170 = i230;
                 i227 = HEAP32[i170 >> 2] & -8 | i160 & 7;
                 HEAP32[i170 >> 2] = i227;
                 HEAP8[i230] = i227 & 255 & -9 | i160 & 8;
                 __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i112, 1, (__ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i102, F_BASE_ii + 4 | 0, 1, HEAP32[(HEAP32[i164 >> 2] | 0) + 16 >> 2] | 0) | 0) != 0);
                 i160 = HEAP32[i171 >> 2] | 0;
                 if ((i160 | 0) == 0) {
                  break;
                 }
                 i171 = i160 + 8 | 0;
                 i160 = i171 | 0;
                 i227 = (HEAP32[i160 >> 2] | 0) - 1 | 0;
                 HEAP32[i160 >> 2] = i227;
                 if ((i227 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i171 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i171 - 8 | 0);
                }
               } while (0);
               if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
                i236 = 1;
               } else {
                i236 = HEAP32[i1 + 120 >> 2] | 0;
               }
               __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i103, i1 + 96 | 0, i236);
               i163 = i103 | 0;
               i195 = HEAP32[i163 >> 2] | 0;
               if ((i195 | 0) != 0) {
                i222 = i195 + 8 | 0;
                HEAP32[i222 >> 2] = (HEAP32[i222 >> 2] | 0) + 1;
               }
               i222 = HEAP32[i103 + 4 >> 2] | 0;
               i141 = HEAP32[i103 + 8 >> 2] | 0;
               HEAP32[i194 >> 2] = i195;
               HEAP32[i168 >> 2] = i222;
               i222 = HEAP32[i172 >> 2] & -8 | i141 & 7;
               HEAP32[i172 >> 2] = i222;
               HEAP8[i176] = i222 & 255 & -9 | i141 & 8;
               i141 = HEAP32[i163 >> 2] | 0;
               do {
                if ((i141 | 0) != 0) {
                 i163 = i141 + 8 | 0;
                 i222 = i163 | 0;
                 i115 = (HEAP32[i222 >> 2] | 0) - 1 | 0;
                 HEAP32[i222 >> 2] = i115;
                 if ((i115 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i163 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i163 - 8 | 0);
                }
               } while (0);
               __ZN7WebCore23ReplaceSelectionCommand19updateNodesInsertedEPNS_4NodeE(i1, i195);
              }
             } while (0);
             i141 = HEAP32[i94 >> 2] | 0;
             do {
              if ((i141 | 0) != 0) {
               i163 = i141 + 8 | 0;
               i115 = i163 | 0;
               i222 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
               HEAP32[i115 >> 2] = i222;
               if ((i222 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i163 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i163 - 8 | 0);
              }
             } while (0);
             i141 = HEAP32[i93 >> 2] | 0;
             if ((i141 | 0) == 0) {
              break;
             }
             i163 = i141 + 8 | 0;
             i141 = i163 | 0;
             i222 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
             HEAP32[i141 >> 2] = i222;
             if ((i222 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i163 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i163 - 8 | 0);
            }
           } while (0);
           __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i107, i120, 1);
           i176 = i106 | 0;
           i172 = i107 | 0;
           i168 = HEAP32[i172 >> 2] | 0;
           HEAP32[i176 >> 2] = i168;
           if ((i168 | 0) != 0) {
            i163 = i168 + 8 | 0;
            HEAP32[i163 >> 2] = (HEAP32[i163 >> 2] | 0) + 1;
           }
           HEAP32[i106 + 4 >> 2] = HEAP32[i107 + 4 >> 2];
           i163 = HEAP32[i107 + 8 >> 2] | 0;
           i168 = i106 + 8 | 0;
           i222 = i168;
           i141 = HEAP32[i222 >> 2] & -8 | i163 & 7;
           HEAP32[i222 >> 2] = i141;
           HEAP8[i168] = i141 & 255 & -9 | i163 & 8;
           i163 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i106, F_BASE_ii + 18 | 0, 1) | 0;
           i141 = HEAP32[i176 >> 2] | 0;
           do {
            if ((i141 | 0) != 0) {
             i176 = i141 + 8 | 0;
             i168 = i176 | 0;
             i222 = (HEAP32[i168 >> 2] | 0) - 1 | 0;
             HEAP32[i168 >> 2] = i222;
             if ((i222 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i176 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i176 - 8 | 0);
            }
           } while (0);
           i141 = HEAP32[i172 >> 2] | 0;
           do {
            if ((i141 | 0) != 0) {
             i176 = i141 + 8 | 0;
             i222 = i176 | 0;
             i168 = (HEAP32[i222 >> 2] | 0) - 1 | 0;
             HEAP32[i222 >> 2] = i168;
             if ((i168 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i176 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i176 - 8 | 0);
            }
           } while (0);
           do {
            if ((i163 | 0) != 0) {
             i141 = i108 | 0;
             HEAP32[i141 >> 2] = i163;
             i172 = i163 + 8 | 0;
             HEAP32[i172 >> 2] = (HEAP32[i172 >> 2] | 0) + 1;
             __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i112, i108, __ZN7WebCore9HTMLNames9classAttrE);
             i172 = HEAP32[i141 >> 2] | 0;
             if ((i172 | 0) == 0) {
              break;
             }
             i141 = i172 + 8 | 0;
             i172 = i141 | 0;
             i176 = (HEAP32[i172 >> 2] | 0) - 1 | 0;
             HEAP32[i172 >> 2] = i176;
             if ((i176 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
            }
           } while (0);
           if (__ZNK7WebCore23ReplaceSelectionCommand25shouldPerformSmartReplaceEv(i1) | 0) {
            __ZN7WebCore23ReplaceSelectionCommand24addSpacesForSmartReplaceEv(i1);
           }
           if (i169) {
            HEAP8[i136] = 0;
           }
           __ZN7WebCore23ReplaceSelectionCommand23completeHTMLReplacementERKNS_8PositionE(i1, i92);
           i163 = HEAP32[i194 >> 2] | 0;
           if ((i163 | 0) == 0) {
            break;
           }
           i141 = i163 + 8 | 0;
           i163 = i141 | 0;
           i176 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
           HEAP32[i163 >> 2] = i176;
           if ((i176 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i141 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i141 - 8 | 0);
          }
         } while (0);
         i169 = HEAP32[i65 >> 2] | 0;
         if ((i169 | 0) == 0) {
          i218 = i139;
          break;
         }
         i120 = i169 + 8 | 0;
         i169 = i120 | 0;
         i141 = (HEAP32[i169 >> 2] | 0) - 1 | 0;
         HEAP32[i169 >> 2] = i141;
         if ((i141 | 0) >= 1) {
          i218 = i139;
          break;
         }
         if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
          i218 = i139;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
         i218 = i139;
        }
       } while (0);
       do {
        if ((i114 | 0) == 937) {
         if ((i211 | 0) == 0) {
          i218 = i212;
          break;
         }
         i162 = i211 + 8 | 0;
         i120 = i162 | 0;
         i141 = (HEAP32[i120 >> 2] | 0) - 1 | 0;
         HEAP32[i120 >> 2] = i141;
         if ((i141 | 0) >= 1) {
          i218 = i212;
          break;
         }
         if ((HEAP32[i162 + 8 >> 2] | 0) != 0) {
          i218 = i212;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i162 - 8 | 0);
         i218 = i212;
        }
       } while (0);
       do {
        if ((i218 | 0) != 0) {
         i162 = i218 + 8 | 0;
         i141 = i162 | 0;
         i120 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
         HEAP32[i141 >> 2] = i120;
         if ((i120 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i162 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i162 - 8 | 0);
        }
       } while (0);
       i162 = HEAP32[i158 >> 2] | 0;
       do {
        if ((i162 | 0) != 0) {
         i120 = i162 + 8 | 0;
         i141 = i120 | 0;
         i169 = (HEAP32[i141 >> 2] | 0) - 1 | 0;
         HEAP32[i141 >> 2] = i169;
         if ((i169 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i120 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i120 - 8 | 0);
        }
       } while (0);
       i162 = HEAP32[i164 >> 2] | 0;
       if ((i162 | 0) == 0) {
        break;
       }
       i158 = i162 + 8 | 0;
       i162 = i158 | 0;
       i120 = (HEAP32[i162 >> 2] | 0) - 1 | 0;
       HEAP32[i162 >> 2] = i120;
       if ((i120 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i158 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i158 - 8 | 0);
      }
     } while (0);
     do {
      if (!i123) {
       i119 = i145 + 8 | 0;
       i148 = i119 | 0;
       i140 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
       HEAP32[i148 >> 2] = i140;
       if ((i140 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i119 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i119 - 8 | 0);
      }
     } while (0);
     i145 = HEAP32[i122 >> 2] | 0;
     do {
      if ((i145 | 0) != 0) {
       i123 = i145 + 8 | 0;
       i119 = i123 | 0;
       i140 = (HEAP32[i119 >> 2] | 0) - 1 | 0;
       HEAP32[i119 >> 2] = i140;
       if ((i140 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i123 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i123 - 8 | 0);
      }
     } while (0);
     if (i152) {
      break;
     }
     i145 = i153 + 8 | 0;
     i122 = i145 | 0;
     i123 = (HEAP32[i122 >> 2] | 0) - 1 | 0;
     HEAP32[i122 >> 2] = i123;
     if ((i123 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i145 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i145 - 8 | 0);
    }
   } while (0);
   i112 = HEAP32[i121 >> 2] | 0;
   do {
    if ((i112 | 0) != 0) {
     i134 = i112 + 8 | 0;
     i124 = i134 | 0;
     i116 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
     HEAP32[i124 >> 2] = i116;
     if ((i116 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i134 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i134 - 8 | 0);
    }
   } while (0);
   i112 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i112 | 0) != 0) {
     i121 = i112 + 8 | 0;
     i134 = i121 | 0;
     i116 = (HEAP32[i134 >> 2] | 0) - 1 | 0;
     HEAP32[i134 >> 2] = i116;
     if ((i116 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i121 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i121 - 8 | 0);
    }
   } while (0);
   i112 = HEAP32[i113 >> 2] | 0;
   if ((i112 | 0) == 0) {
    break;
   }
   i121 = i112 + 8 | 0;
   i112 = i121 | 0;
   i116 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
   HEAP32[i112 >> 2] = i116;
   if ((i116 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i121 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i121 - 8 | 0);
  }
 } while (0);
 i29 = HEAP32[i26 + 4 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i153 = i29 + 8 | 0;
   i152 = i153 | 0;
   i218 = (HEAP32[i152 >> 2] | 0) - 1 | 0;
   HEAP32[i152 >> 2] = i218;
   if ((i218 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i153 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i153 - 8 | 0);
  }
 } while (0);
 i29 = HEAP32[i26 >> 2] | 0;
 if ((i29 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 i26 = i29 + 8 | 0;
 i29 = i26 | 0;
 i153 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
 HEAP32[i29 >> 2] = i153;
 if ((i153 | 0) >= 1) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i25);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i25);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand43removeRedundantStylesAndKeepStyleSpanInlineERNS0_13InsertedNodesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 112 | 0;
 i16 = i3 + 128 | 0;
 i17 = i3 + 144 | 0;
 i18 = i3 + 160 | 0;
 i19 = i3 + 176 | 0;
 i20 = i3 + 192 | 0;
 i21 = i3 + 208 | 0;
 i22 = i3 + 224 | 0;
 i23 = i3 + 232 | 0;
 i24 = i3 + 240 | 0;
 i25 = i3 + 248 | 0;
 i26 = i3 + 256 | 0;
 i27 = i3 + 264 | 0;
 i28 = i3 + 272 | 0;
 i29 = i2 + 4 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 L1 : do {
  if ((i30 | 0) == 0) {
   i31 = 0;
   i32 = 1;
  } else {
   i33 = __ZNK7WebCore4Node14lastDescendantEv(i30) | 0;
   if ((HEAP32[i33 + 12 >> 2] & 2 | 0) == 0) {
    i34 = 4;
   } else {
    i35 = HEAP32[i33 + 36 >> 2] | 0;
    if ((i35 | 0) == 0) {
     i34 = 4;
    } else {
     i36 = i35;
     i34 = 5;
    }
   }
   do {
    if ((i34 | 0) == 4) {
     i35 = HEAP32[i33 + 28 >> 2] | 0;
     if ((i35 | 0) != 0) {
      i36 = i35;
      i34 = 5;
      break;
     }
     i35 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i33) | 0;
     if ((i35 | 0) == 0) {
      i31 = 0;
      i32 = 1;
      break L1;
     } else {
      i37 = i35;
      i38 = 0;
     }
    }
   } while (0);
   if ((i34 | 0) == 5) {
    i37 = i36;
    i38 = (i36 | 0) == 0;
   }
   i33 = i37 + 8 | 0;
   HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   i31 = i37;
   i32 = i38;
  }
 } while (0);
 i38 = i2 | 0;
 i37 = HEAP32[i38 >> 2] | 0;
 L12 : do {
  if ((i37 | 0) != 0) {
   i36 = i37 + 8 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   i36 = i8 | 0;
   i30 = i1 | 0;
   i33 = i11 | 0;
   i35 = i13 | 0;
   i39 = i4 | 0;
   i40 = i12 | 0;
   i41 = i1 + 8 | 0;
   i42 = i5 | 0;
   i43 = i5 + 4 | 0;
   i44 = i5 + 8 | 0;
   i45 = i6 | 0;
   i46 = i7 | 0;
   i47 = i9 | 0;
   i48 = i10 | 0;
   i49 = i20 | 0;
   i50 = i21 | 0;
   i51 = i18 | 0;
   i52 = i19 | 0;
   i53 = i16 | 0;
   i54 = i17 | 0;
   i55 = i14 | 0;
   i56 = i15 | 0;
   i57 = i22 | 0;
   i58 = i23 | 0;
   i59 = i24 | 0;
   i60 = i26 | 0;
   i61 = i25 | 0;
   i62 = i28 | 0;
   i63 = i27 | 0;
   i64 = 0;
   i65 = i37;
   L14 : while (1) {
    if ((i65 | 0) == (i31 | 0)) {
     i34 = 11;
     break;
    }
    i66 = i65 + 12 | 0;
    if ((HEAP32[i66 >> 2] & 2 | 0) == 0) {
     i34 = 16;
    } else {
     i67 = HEAP32[i65 + 36 >> 2] | 0;
     if ((i67 | 0) == 0) {
      i34 = 16;
     } else {
      i68 = i67;
      i34 = 17;
     }
    }
    do {
     if ((i34 | 0) == 16) {
      i34 = 0;
      i67 = HEAP32[i65 + 28 >> 2] | 0;
      if ((i67 | 0) != 0) {
       i68 = i67;
       i34 = 17;
       break;
      }
      i67 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i65) | 0;
      if ((i67 | 0) == 0) {
       i69 = 0;
       i70 = 1;
      } else {
       i71 = i67;
       i72 = 0;
       i34 = 19;
      }
     }
    } while (0);
    if ((i34 | 0) == 17) {
     i34 = 0;
     i71 = i68;
     i72 = (i68 | 0) == 0;
     i34 = 19;
    }
    if ((i34 | 0) == 19) {
     i34 = 0;
     i67 = i71 + 8 | 0;
     HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     i69 = i71;
     i70 = i72;
    }
    do {
     if ((i64 | 0) != 0) {
      i67 = i64 + 8 | 0;
      i73 = i67 | 0;
      i74 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
      HEAP32[i73 >> 2] = i74;
      if ((i74 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i66 >> 2] & 8 | 0) == 0) {
      i75 = i65;
     } else {
      i67 = i65;
      i74 = HEAP32[i65 + 48 >> 2] | 0;
      if ((i74 | 0) == 0) {
       i76 = 0;
      } else {
       i76 = HEAP32[i74 + 8 >> 2] | 0;
      }
      i74 = __ZN3WTF10fastMallocEj(16) | 0;
      i73 = i74;
      __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i73, i76);
      do {
       if ((i76 | 0) == 0) {
        i77 = i65;
        i78 = i67;
        i34 = 91;
       } else {
        do {
         if ((HEAP32[i66 >> 2] & 16 | 0) == 0) {
          i79 = i67;
          i80 = i65;
         } else {
          HEAP32[i42 >> 2] = 0;
          HEAP32[i43 >> 2] = 0;
          HEAP32[i44 >> 2] = 0;
          i81 = i65;
          do {
           if (__ZNK7WebCore12EditingStyle35conflictsWithImplicitStyleOfElementEPNS_11HTMLElementEPS0_NS0_26ShouldExtractMatchingStyleE(i73, i81, 0, 1) | 0) {
            HEAP32[i45 >> 2] = i81;
            if ((i65 | 0) != 0) {
             i82 = i65 + 8 | 0;
             HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
            }
            i82 = __ZN7WebCore20CompositeEditCommand53replaceElementWithSpanPreservingChildrenAndAttributesEN3WTF10PassRefPtrINS_11HTMLElementEEE(i30, i6) | 0;
            i83 = i82 | 0;
            i84 = (i82 | 0) == 0;
            if (!i84) {
             i85 = i82 + 8 | 0;
             HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
            }
            i85 = i65 + 8 | 0;
            i86 = i85 - 8 | 0;
            i87 = i85 | 0;
            i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
            HEAP32[i87 >> 2] = i88;
            do {
             if ((i88 | 0) < 1) {
              if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i86);
             }
            } while (0);
            i86 = HEAP32[i45 >> 2] | 0;
            do {
             if ((i86 | 0) != 0) {
              i85 = i86 + 8 | 0;
              i88 = i85 | 0;
              i87 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
              HEAP32[i88 >> 2] = i87;
              if ((i87 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
             }
            } while (0);
            i86 = i82 | 0;
            do {
             if ((HEAP32[i38 >> 2] | 0) == (i65 | 0)) {
              if (i84) {
               i89 = i65;
              } else {
               i85 = i82 + 8 | 0;
               HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
               i89 = HEAP32[i38 >> 2] | 0;
              }
              HEAP32[i38 >> 2] = i83;
              if ((i89 | 0) == 0) {
               break;
              }
              i85 = i89 + 8 | 0;
              i87 = i85 | 0;
              i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
              HEAP32[i87 >> 2] = i88;
              if ((i88 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
             }
            } while (0);
            if ((HEAP32[i29 >> 2] | 0) != (i65 | 0)) {
             i90 = i86;
             i91 = i83;
             i34 = 71;
             break;
            }
            if (i84) {
             i92 = i65;
            } else {
             i85 = i82 + 8 | 0;
             HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
             i92 = HEAP32[i29 >> 2] | 0;
            }
            HEAP32[i29 >> 2] = i83;
            if ((i92 | 0) == 0) {
             i90 = i86;
             i91 = i83;
             i34 = 71;
             break;
            }
            i85 = i92 + 8 | 0;
            i88 = i85 | 0;
            i87 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            HEAP32[i88 >> 2] = i87;
            if ((i87 | 0) >= 1) {
             i90 = i86;
             i91 = i83;
             i34 = 71;
             break;
            }
            if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
             i90 = i86;
             i91 = i83;
             i34 = 71;
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
            i90 = i86;
            i91 = i83;
            i34 = 71;
           } else {
            if (!(__ZNK7WebCore12EditingStyle43extractConflictingImplicitStyleOfAttributesEPNS_11HTMLElementENS0_30ShouldPreserveWritingDirectionEPS0_RN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEENS0_26ShouldExtractMatchingStyleE(i73, i81, 0, 0, i5, 1) | 0)) {
             i90 = i67;
             i91 = i65;
             i34 = 71;
             break;
            }
            i85 = HEAP32[i44 >> 2] | 0;
            if ((i85 | 0) == 0) {
             i93 = i65;
             i94 = i67;
             break;
            }
            i87 = i65;
            i88 = i65 + 8 | 0;
            if ((i65 | 0) == 0) {
             i95 = 0;
             i96 = i85;
             while (1) {
              HEAP32[i46 >> 2] = i87;
              if (i96 >>> 0 <= i95 >>> 0) {
               i34 = 223;
               break L14;
              }
              __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i30, i7, (HEAP32[i42 >> 2] | 0) + (i95 << 2) | 0);
              i85 = HEAP32[i46 >> 2] | 0;
              do {
               if ((i85 | 0) != 0) {
                i97 = i85 + 8 | 0;
                i98 = i97 | 0;
                i99 = (HEAP32[i98 >> 2] | 0) - 1 | 0;
                HEAP32[i98 >> 2] = i99;
                if ((i99 | 0) >= 1) {
                 break;
                }
                if ((HEAP32[i97 + 8 >> 2] | 0) != 0) {
                 break;
                }
                __ZN7WebCore4Node14removedLastRefEv(i97 - 8 | 0);
               }
              } while (0);
              i85 = i95 + 1 | 0;
              i97 = HEAP32[i44 >> 2] | 0;
              if (i85 >>> 0 < i97 >>> 0) {
               i95 = i85;
               i96 = i97;
              } else {
               i100 = i67;
               i101 = i65;
               i102 = i97;
               i34 = 72;
               break;
              }
             }
            } else {
             i96 = 0;
             while (1) {
              HEAP32[i46 >> 2] = i87;
              HEAP32[i88 >> 2] = (HEAP32[i88 >> 2] | 0) + 1;
              if ((HEAP32[i44 >> 2] | 0) >>> 0 <= i96 >>> 0) {
               i34 = 222;
               break L14;
              }
              __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i30, i7, (HEAP32[i42 >> 2] | 0) + (i96 << 2) | 0);
              i95 = HEAP32[i46 >> 2] | 0;
              do {
               if ((i95 | 0) != 0) {
                i83 = i95 + 8 | 0;
                i86 = i83 | 0;
                i82 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
                HEAP32[i86 >> 2] = i82;
                if ((i82 | 0) >= 1) {
                 break;
                }
                if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
                 break;
                }
                __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
               }
              } while (0);
              i95 = i96 + 1 | 0;
              i83 = HEAP32[i44 >> 2] | 0;
              if (i95 >>> 0 < i83 >>> 0) {
               i96 = i95;
              } else {
               i100 = i67;
               i101 = i65;
               i102 = i83;
               i34 = 72;
               break;
              }
             }
            }
           }
          } while (0);
          if ((i34 | 0) == 71) {
           i34 = 0;
           i100 = i90;
           i101 = i91;
           i102 = HEAP32[i44 >> 2] | 0;
           i34 = 72;
          }
          do {
           if ((i34 | 0) == 72) {
            i34 = 0;
            if ((i102 | 0) == 0) {
             i93 = i101;
             i94 = i100;
             break;
            }
            i81 = HEAP32[i42 >> 2] | 0;
            i96 = i81 + (i102 << 2) | 0;
            i88 = i81;
            while (1) {
             __ZN7WebCore13QualifiedNameD1Ev(i88);
             i88 = i88 + 4 | 0;
             if ((i88 | 0) == (i96 | 0)) {
              break;
             }
            }
            HEAP32[i44 >> 2] = 0;
            i93 = i101;
            i94 = i100;
           }
          } while (0);
          i96 = HEAP32[i42 >> 2] | 0;
          if ((i96 | 0) == 0) {
           i79 = i94;
           i80 = i93;
           break;
          }
          HEAP32[i42 >> 2] = 0;
          HEAP32[i43 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i96);
          i79 = i94;
          i80 = i93;
         }
        } while (0);
        i96 = HEAP32[i79 + 16 >> 2] | 0;
        i88 = i96 | 0;
        do {
         if ((i96 | 0) == 0) {
          i34 = 84;
         } else {
          if ((HEAP32[i96 + 12 >> 2] & 4 | 0) == 0) {
           i34 = 84;
           break;
          }
          i81 = HEAP32[i88 + 44 >> 2] | 0;
          i87 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
          if ((i81 | 0) != (i87 | 0)) {
           if ((HEAP32[i81 + 12 >> 2] | 0) != (HEAP32[i87 + 12 >> 2] | 0)) {
            i34 = 84;
            break;
           }
           if ((HEAP32[i81 + 16 >> 2] | 0) != (HEAP32[i87 + 16 >> 2] | 0)) {
            i34 = 84;
            break;
           }
          }
          if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i96, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 40 | 0) | 0) {
           i103 = i88;
          } else {
           i34 = 84;
          }
         }
        } while (0);
        do {
         if ((i34 | 0) == 84) {
          i34 = 0;
          __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i8, i88);
          i96 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i8, F_BASE_ii + 4 | 0, 0) | 0;
          i87 = HEAP32[i36 >> 2] | 0;
          if ((i87 | 0) == 0) {
           i103 = i96;
           break;
          }
          i81 = i87 + 8 | 0;
          i87 = i81 | 0;
          i83 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
          HEAP32[i87 >> 2] = i83;
          if ((i83 | 0) >= 1) {
           i103 = i96;
           break;
          }
          if ((HEAP32[i81 + 8 >> 2] | 0) != 0) {
           i103 = i96;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i81 - 8 | 0);
          i103 = i96;
         }
        } while (0);
        if ((i103 | 0) != 0) {
         __ZN7WebCore12EditingStyle30removeStyleFromRulesAndContextEPNS_13StyledElementEPNS_4NodeE(i73, i79, HEAP32[(HEAP32[i41 >> 2] | 0) + 692 >> 2] | 0);
        }
        __ZN7WebCore12EditingStyle30removeStyleFromRulesAndContextEPNS_13StyledElementEPNS_4NodeE(i73, i79, i88);
        if (__ZNK7WebCore12EditingStyle7isEmptyEv(i73) | 0) {
         i77 = i80;
         i78 = i79;
         i34 = 91;
         break;
        }
        i96 = i74 + 4 | 0;
        i81 = HEAP32[i76 + 4 >> 2] | 0;
        if ((i81 & 4 | 0) == 0) {
         i104 = i81 >>> 3;
        } else {
         i104 = HEAP32[i76 + 16 >> 2] | 0;
        }
        if ((HEAP32[(HEAP32[i96 >> 2] | 0) + 16 >> 2] | 0) == (i104 | 0)) {
         i105 = i80;
         i106 = i79;
         i34 = 128;
         break;
        }
        HEAP32[i33 >> 2] = i79;
        if ((i79 | 0) != 0) {
         i81 = i79 + 8 | 0;
         HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
        }
        __ZNK7WebCore15StyleProperties6asTextEv(i13, HEAP32[i96 >> 2] | 0);
        i96 = HEAP32[i35 >> 2] | 0;
        do {
         if ((i96 | 0) == 0) {
          HEAP32[i39 >> 2] = 0;
         } else {
          if ((HEAP32[i96 + 16 >> 2] & 16 | 0) == 0) {
           __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i96);
           break;
          } else {
           HEAP32[i39 >> 2] = i96;
           i81 = i96 | 0;
           HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 2;
           break;
          }
         }
        } while (0);
        HEAP32[i40 >> 2] = HEAP32[i39 >> 2];
        __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i30, i11, __ZN7WebCore9HTMLNames9styleAttrE, i12);
        i96 = HEAP32[i40 >> 2] | 0;
        do {
         if ((i96 | 0) != 0) {
          i88 = i96 | 0;
          i81 = (HEAP32[i88 >> 2] | 0) - 2 | 0;
          if ((i81 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i96);
           break;
          } else {
           HEAP32[i88 >> 2] = i81;
           break;
          }
         }
        } while (0);
        i96 = HEAP32[i35 >> 2] | 0;
        do {
         if ((i96 | 0) != 0) {
          i81 = i96 | 0;
          i88 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
          if ((i88 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i96);
           break;
          } else {
           HEAP32[i81 >> 2] = i88;
           break;
          }
         }
        } while (0);
        i96 = HEAP32[i33 >> 2] | 0;
        if ((i96 | 0) == 0) {
         i105 = i80;
         i106 = i79;
         i34 = 128;
         break;
        }
        i88 = i96 + 8 | 0;
        i96 = i88 | 0;
        i81 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
        HEAP32[i96 >> 2] = i81;
        if ((i81 | 0) >= 1) {
         i105 = i80;
         i106 = i79;
         i34 = 128;
         break;
        }
        if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
         i105 = i80;
         i106 = i79;
         i34 = 128;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
        i105 = i80;
        i106 = i79;
        i34 = 128;
       }
      } while (0);
      L152 : do {
       if ((i34 | 0) == 91) {
        i34 = 0;
        i67 = i78 | 0;
        do {
         if (!(__ZN7WebCore39isStyleSpanOrSpanWithOnlyStyleAttributeEPKNS_7ElementE(i67) | 0)) {
          if (__ZN7WebCore14isEmptyFontTagEPKNS_7ElementENS_27ShouldStyleAttributeBeEmptyE(i67, 0) | 0) {
           break;
          }
          HEAP32[i48 >> 2] = i67;
          if ((i78 | 0) != 0) {
           i88 = i78 + 8 | 0;
           HEAP32[i88 >> 2] = (HEAP32[i88 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i30, i10, __ZN7WebCore9HTMLNames9styleAttrE);
          i88 = HEAP32[i48 >> 2] | 0;
          if ((i88 | 0) == 0) {
           i105 = i77;
           i106 = i78;
           i34 = 128;
           break L152;
          }
          i81 = i88 + 8 | 0;
          i88 = i81 | 0;
          i96 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
          HEAP32[i88 >> 2] = i96;
          if ((i96 | 0) >= 1) {
           i105 = i77;
           i106 = i78;
           i34 = 128;
           break L152;
          }
          if ((HEAP32[i81 + 8 >> 2] | 0) != 0) {
           i105 = i77;
           i106 = i78;
           i34 = 128;
           break L152;
          }
          __ZN7WebCore4Node14removedLastRefEv(i81 - 8 | 0);
          i105 = i77;
          i106 = i78;
          i34 = 128;
          break L152;
         }
        } while (0);
        i67 = i78 | 0;
        __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE(i2, i67);
        HEAP32[i47 >> 2] = i67;
        if ((i78 | 0) != 0) {
         i67 = i78 + 8 | 0;
         HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
        }
        __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i30, i9, 1);
        i67 = HEAP32[i47 >> 2] | 0;
        if ((i67 | 0) == 0) {
         i107 = i77;
         break;
        }
        i81 = i67 + 8 | 0;
        i67 = i81 | 0;
        i96 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        HEAP32[i67 >> 2] = i96;
        if ((i96 | 0) >= 1) {
         i107 = i77;
         break;
        }
        if ((HEAP32[i81 + 8 >> 2] | 0) != 0) {
         i107 = i77;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i81 - 8 | 0);
        i107 = i77;
       }
      } while (0);
      L170 : do {
       if ((i34 | 0) == 128) {
        i34 = 0;
        i81 = i106 | 0;
        i96 = i106 + 16 | 0;
        L172 : do {
         if (__ZN7WebCore30isNonTableCellHTMLBlockElementEPKNS_4NodeE(i81) | 0) {
          if (!(__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i81, HEAP32[i96 >> 2] | 0) | 0)) {
           break;
          }
          __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i15, HEAP32[i96 >> 2] | 0);
          __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, 1);
          __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i17, i81);
          __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, 1);
          do {
           if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i14, i16) | 0) {
            __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i19, HEAP32[i96 >> 2] | 0);
            __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i19, 1);
            __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i21, i81);
            __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i21, 1);
            i67 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i18, i20) | 0;
            i88 = HEAP32[i49 >> 2] | 0;
            do {
             if ((i88 | 0) != 0) {
              i83 = i88 + 8 | 0;
              i87 = i83 | 0;
              i95 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
              HEAP32[i87 >> 2] = i95;
              if ((i95 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
             }
            } while (0);
            i88 = HEAP32[i50 >> 2] | 0;
            do {
             if ((i88 | 0) != 0) {
              i83 = i88 + 8 | 0;
              i95 = i83 | 0;
              i87 = (HEAP32[i95 >> 2] | 0) - 1 | 0;
              HEAP32[i95 >> 2] = i87;
              if ((i87 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
             }
            } while (0);
            i88 = HEAP32[i51 >> 2] | 0;
            do {
             if ((i88 | 0) != 0) {
              i83 = i88 + 8 | 0;
              i87 = i83 | 0;
              i95 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
              HEAP32[i87 >> 2] = i95;
              if ((i95 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
             }
            } while (0);
            i88 = HEAP32[i52 >> 2] | 0;
            if ((i88 | 0) == 0) {
             i108 = i67;
             break;
            }
            i83 = i88 + 8 | 0;
            i88 = i83 | 0;
            i95 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            HEAP32[i88 >> 2] = i95;
            if ((i95 | 0) >= 1) {
             i108 = i67;
             break;
            }
            if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
             i108 = i67;
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
            i108 = i67;
           } else {
            i108 = 0;
           }
          } while (0);
          i83 = HEAP32[i53 >> 2] | 0;
          do {
           if ((i83 | 0) != 0) {
            i95 = i83 + 8 | 0;
            i88 = i95 | 0;
            i87 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            HEAP32[i88 >> 2] = i87;
            if ((i87 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
           }
          } while (0);
          i83 = HEAP32[i54 >> 2] | 0;
          do {
           if ((i83 | 0) != 0) {
            i95 = i83 + 8 | 0;
            i87 = i95 | 0;
            i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
            HEAP32[i87 >> 2] = i88;
            if ((i88 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
           }
          } while (0);
          i83 = HEAP32[i55 >> 2] | 0;
          do {
           if ((i83 | 0) != 0) {
            i95 = i83 + 8 | 0;
            i88 = i95 | 0;
            i87 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            HEAP32[i88 >> 2] = i87;
            if ((i87 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
           }
          } while (0);
          i83 = HEAP32[i56 >> 2] | 0;
          do {
           if ((i83 | 0) == 0) {
            i34 = 163;
           } else {
            i95 = i83 + 8 | 0;
            i87 = i95 | 0;
            i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
            HEAP32[i87 >> 2] = i88;
            if ((i88 | 0) >= 1) {
             i34 = 163;
             break;
            }
            if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
             i34 = 163;
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
            if (!i108) {
             break L172;
            }
           }
          } while (0);
          if ((i34 | 0) == 163) {
           i34 = 0;
           if (!i108) {
            break;
           }
          }
          __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE(i2, i81);
          HEAP32[i57 >> 2] = i81;
          if ((i106 | 0) != 0) {
           i83 = i106 + 8 | 0;
           HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i30, i22, 1);
          i83 = HEAP32[i57 >> 2] | 0;
          if ((i83 | 0) == 0) {
           i107 = i105;
           break L170;
          }
          i95 = i83 + 8 | 0;
          i83 = i95 | 0;
          i88 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
          HEAP32[i83 >> 2] = i88;
          if ((i88 | 0) >= 1) {
           i107 = i105;
           break L170;
          }
          if ((HEAP32[i95 + 8 >> 2] | 0) != 0) {
           i107 = i105;
           break L170;
          }
          __ZN7WebCore4Node14removedLastRefEv(i95 - 8 | 0);
          i107 = i105;
          break L170;
         }
        } while (0);
        do {
         if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i96 >> 2] | 0, 1, 1) | 0) {
          HEAP32[i58 >> 2] = i106;
          if ((i106 | 0) != 0) {
           i95 = i106 + 8 | 0;
           HEAP32[i95 >> 2] = (HEAP32[i95 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i30, i23, __ZN7WebCore9HTMLNames19contenteditableAttrE);
          i95 = HEAP32[i58 >> 2] | 0;
          if ((i95 | 0) == 0) {
           break;
          }
          i88 = i95 + 8 | 0;
          i95 = i88 | 0;
          i83 = (HEAP32[i95 >> 2] | 0) - 1 | 0;
          HEAP32[i95 >> 2] = i83;
          if ((i83 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
         }
        } while (0);
        if (!(__ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE(i81) | 0)) {
         i107 = i105;
         break;
        }
        if ((HEAP32[i106 + 36 >> 2] | 0) == 0) {
         __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE(i2, i81);
         HEAP32[i59 >> 2] = i81;
         if ((i106 | 0) != 0) {
          i96 = i106 + 8 | 0;
          HEAP32[i96 >> 2] = (HEAP32[i96 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i30, i24, 1);
         i96 = HEAP32[i59 >> 2] | 0;
         if ((i96 | 0) == 0) {
          i107 = i105;
          break;
         }
         i88 = i96 + 8 | 0;
         i96 = i88 | 0;
         i83 = (HEAP32[i96 >> 2] | 0) - 1 | 0;
         HEAP32[i96 >> 2] = i83;
         if ((i83 | 0) >= 1) {
          i107 = i105;
          break;
         }
         if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
          i107 = i105;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
         i107 = i105;
         break;
        }
        do {
         if (__ZN7WebCore7isBlockEPKNS_4NodeE(i81) | 0) {
          i88 = __ZN7WebCore13StyledElement5styleEv(i106) | 0;
          i83 = HEAP32[(HEAP32[i88 >> 2] | 0) + 72 >> 2] | 0;
          __ZN3WTF6StringC1EPKc(i25, H_BASE + 128 | 0);
          HEAP32[i60 >> 2] = 0;
          FUNCTION_TABLE_viiiii[i83 & 3](i88, 3, i25, 0, i60);
          i88 = HEAP32[i61 >> 2] | 0;
          if ((i88 | 0) == 0) {
           break;
          }
          i83 = i88 | 0;
          i96 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
          if ((i96 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i88);
           break;
          } else {
           HEAP32[i83 >> 2] = i96;
           break;
          }
         }
        } while (0);
        i81 = (HEAP32[i106 + 12 >> 2] & 2048 | 0) == 0;
        i96 = i106 + 32 | 0;
        if (i81) {
         i109 = i96 | 0;
        } else {
         i109 = HEAP32[i96 >> 2] | 0;
        }
        if ((HEAP32[i109 >> 2] | 0) == 0) {
         i107 = i105;
         break;
        }
        if (i81) {
         i110 = i96 | 0;
        } else {
         i110 = HEAP32[i96 >> 2] | 0;
        }
        if ((HEAP32[(HEAP32[(HEAP32[i110 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] & 100663296 | 0) == 0) {
         i107 = i105;
         break;
        }
        i96 = __ZN7WebCore13StyledElement5styleEv(i106) | 0;
        i81 = HEAP32[(HEAP32[i96 >> 2] | 0) + 72 >> 2] | 0;
        __ZN3WTF6StringC1EPKc(i27, H_BASE + 120 | 0);
        HEAP32[i62 >> 2] = 0;
        FUNCTION_TABLE_viiiii[i81 & 3](i96, 79, i27, 0, i62);
        i96 = HEAP32[i63 >> 2] | 0;
        if ((i96 | 0) == 0) {
         i107 = i105;
         break;
        }
        i81 = i96 | 0;
        i83 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
        if ((i83 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i96);
         i107 = i105;
         break;
        } else {
         HEAP32[i81 >> 2] = i83;
         i107 = i105;
         break;
        }
       }
      } while (0);
      if ((i74 | 0) == 0) {
       i75 = i107;
       break;
      }
      i83 = i74;
      i81 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
      if ((i81 | 0) == 0) {
       __ZN7WebCore12EditingStyleD1Ev(i73);
       __ZN3WTF8fastFreeEPv(i74);
       i75 = i107;
       break;
      } else {
       HEAP32[i83 >> 2] = i81;
       i75 = i107;
       break;
      }
     }
    } while (0);
    if (!i70) {
     i66 = i69 + 8 | 0;
     HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
    }
    do {
     if ((i75 | 0) != 0) {
      i66 = i75 + 8 | 0;
      i81 = i66 | 0;
      i83 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
      HEAP32[i81 >> 2] = i83;
      if ((i83 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
     }
    } while (0);
    if ((i69 | 0) == 0) {
     break L12;
    } else {
     i64 = i69;
     i65 = i69;
    }
   }
   if ((i34 | 0) == 11) {
    i65 = i31 + 8 | 0;
    i63 = i65 - 8 | 0;
    i62 = i65 | 0;
    i61 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
    HEAP32[i62 >> 2] = i61;
    do {
     if ((i61 | 0) < 1) {
      if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i63);
     }
    } while (0);
    if ((i64 | 0) == 0) {
     break;
    }
    i63 = i64 + 8 | 0;
    i65 = i63 | 0;
    i61 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
    HEAP32[i65 >> 2] = i61;
    if ((i61 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
    break;
   } else if ((i34 | 0) == 222) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i34 | 0) == 223) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if (i32) {
  STACKTOP = i3;
  return;
 }
 i32 = i31 + 8 | 0;
 i31 = i32 | 0;
 i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
 HEAP32[i31 >> 2] = i34;
 if ((i34 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand52makeInsertedContentRoundTrippableWithHTMLTreeBuilderERNS0_13InsertedNodesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 848 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 120 | 0;
 i13 = i3 + 136 | 0;
 i14 = i3 + 152 | 0;
 i15 = i3 + 168 | 0;
 i16 = i3 + 184 | 0;
 i17 = i3 + 200 | 0;
 i18 = i3 + 216 | 0;
 i19 = i3 + 232 | 0;
 i20 = i3 + 248 | 0;
 i21 = i3 + 264 | 0;
 i22 = i3 + 280 | 0;
 i23 = i3 + 296 | 0;
 i24 = i3 + 312 | 0;
 i25 = i3 + 328 | 0;
 i26 = i3 + 344 | 0;
 i27 = i3 + 360 | 0;
 i28 = i3 + 376 | 0;
 i29 = i3 + 392 | 0;
 i30 = i3 + 408 | 0;
 i31 = i3 + 424 | 0;
 i32 = i3 + 440 | 0;
 i33 = i3 + 456 | 0;
 i34 = i3 + 472 | 0;
 i35 = i3 + 488 | 0;
 i36 = i3 + 504 | 0;
 i37 = i3 + 520 | 0;
 i38 = i3 + 536 | 0;
 i39 = i3 + 552 | 0;
 i40 = i3 + 568 | 0;
 i41 = i3 + 584 | 0;
 i42 = i3 + 600 | 0;
 i43 = i3 + 616 | 0;
 i44 = i3 + 632 | 0;
 i45 = i3 + 648 | 0;
 i46 = i3 + 664 | 0;
 i47 = i3 + 680 | 0;
 i48 = i3 + 696 | 0;
 i49 = i3 + 712 | 0;
 i50 = i3 + 728 | 0;
 i51 = i3 + 744 | 0;
 i52 = i3 + 760 | 0;
 i53 = i3 + 776 | 0;
 i54 = i3 + 784 | 0;
 i55 = i3 + 800 | 0;
 i56 = i3 + 808 | 0;
 i57 = i3 + 816 | 0;
 i58 = i3 + 832 | 0;
 i59 = i3 + 840 | 0;
 i60 = HEAP32[i2 + 4 >> 2] | 0;
 L1 : do {
  if ((i60 | 0) == 0) {
   i61 = 0;
   i62 = 1;
  } else {
   i63 = __ZNK7WebCore4Node14lastDescendantEv(i60) | 0;
   if ((HEAP32[i63 + 12 >> 2] & 2 | 0) == 0) {
    i64 = 4;
   } else {
    i65 = HEAP32[i63 + 36 >> 2] | 0;
    if ((i65 | 0) == 0) {
     i64 = 4;
    } else {
     i66 = i65;
     i64 = 5;
    }
   }
   do {
    if ((i64 | 0) == 4) {
     i65 = HEAP32[i63 + 28 >> 2] | 0;
     if ((i65 | 0) != 0) {
      i66 = i65;
      i64 = 5;
      break;
     }
     i65 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i63) | 0;
     if ((i65 | 0) == 0) {
      i61 = 0;
      i62 = 1;
      break L1;
     } else {
      i67 = i65;
      i68 = 0;
     }
    }
   } while (0);
   if ((i64 | 0) == 5) {
    i67 = i66;
    i68 = (i66 | 0) == 0;
   }
   i63 = i67 + 8 | 0;
   HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
   i61 = i67;
   i62 = i68;
  }
 } while (0);
 i68 = HEAP32[i2 >> 2] | 0;
 L12 : do {
  if ((i68 | 0) != 0) {
   i2 = i68 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = i4 | 0;
   i67 = i54 | 0;
   i66 = i55 | 0;
   i60 = i56 | 0;
   i63 = i53 | 0;
   i65 = i57 | 0;
   i69 = i58 | 0;
   i70 = i59 | 0;
   i71 = 0;
   i72 = i68;
   while (1) {
    if ((i72 | 0) == (i61 | 0)) {
     break;
    }
    i73 = i72 + 12 | 0;
    if ((HEAP32[i73 >> 2] & 2 | 0) == 0) {
     i64 = 16;
    } else {
     i74 = HEAP32[i72 + 36 >> 2] | 0;
     if ((i74 | 0) == 0) {
      i64 = 16;
     } else {
      i75 = i74;
      i64 = 17;
     }
    }
    do {
     if ((i64 | 0) == 16) {
      i64 = 0;
      i74 = HEAP32[i72 + 28 >> 2] | 0;
      if ((i74 | 0) != 0) {
       i75 = i74;
       i64 = 17;
       break;
      }
      i74 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i72) | 0;
      if ((i74 | 0) == 0) {
       i76 = 0;
       i77 = 1;
      } else {
       i78 = i74;
       i79 = 0;
       i64 = 19;
      }
     }
    } while (0);
    if ((i64 | 0) == 17) {
     i64 = 0;
     i78 = i75;
     i79 = (i75 | 0) == 0;
     i64 = 19;
    }
    if ((i64 | 0) == 19) {
     i64 = 0;
     i74 = i78 + 8 | 0;
     HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
     i76 = i78;
     i77 = i79;
    }
    do {
     if ((i71 | 0) != 0) {
      i74 = i71 + 8 | 0;
      i80 = i74 | 0;
      i81 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
      HEAP32[i80 >> 2] = i81;
      if ((i81 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i73 >> 2] & 16 | 0) != 0) {
      i74 = HEAP32[i72 + 44 >> 2] | 0;
      if (HEAP8[H_BASE + 224 | 0] | 0) {
       i82 = HEAP32[H_BASE + 248 >> 2] | 0;
      } else {
       i81 = __ZN3WTF10fastMallocEj(20) | 0;
       i80 = i81;
       _memset(i81 | 0, 0, 20) | 0;
       HEAP32[H_BASE + 248 >> 2] = i80;
       HEAP8[H_BASE + 224 | 0] = 1;
       i82 = i80;
      }
      if ((HEAP32[i82 + 12 >> 2] | 0) == 0) {
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i82 | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10articleTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames8asideTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i8, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i9, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames9centerTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i10, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i11, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i12, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i13, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10detailsTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i14, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6dirTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i15, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i16, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i17, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i18, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames11fieldsetTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i19, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames13figcaptionTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i20, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames9figureTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i21, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames9footerTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i22, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i23, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i24, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i25, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i26, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i27, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i28, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i29, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames9headerTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i30, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames9hgroupTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i31, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i32, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i33, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i34, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames7mainTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i35, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i36, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6navTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i37, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i38, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i39, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i40, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i41, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10sectionTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i42, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames10summaryTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i43, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i44, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i45, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i46, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i47, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i48, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i49, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i50, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i51, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i80 = (HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0) + 12 | 0;
       __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i52, HEAP32[H_BASE + 248 >> 2] | 0, i80, i80);
       i83 = HEAP32[H_BASE + 248 >> 2] | 0;
      } else {
       i83 = i82;
      }
      i80 = HEAP32[i83 >> 2] | 0;
      if ((i80 | 0) == 0) {
       i84 = 0;
      } else {
       i81 = HEAP32[i83 + 8 >> 2] | 0;
       i85 = HEAP32[i74 + 12 >> 2] | 0;
       i74 = HEAP32[i85 + 16 >> 2] | 0;
       i86 = i74 >>> 7;
       i87 = (i74 >>> 30) + ~i86 | 0;
       i74 = i87 << 12 ^ i87;
       i87 = i74 >>> 7 ^ i74;
       i74 = i87 << 2 ^ i87;
       i87 = i74 >>> 20 ^ i74 | 1;
       i74 = i86;
       i86 = 0;
       while (1) {
        i88 = i74 & i81;
        i89 = i80 + (i88 << 2) | 0;
        i90 = HEAP32[i89 >> 2] | 0;
        i91 = i90;
        if ((i91 | 0) == 0) {
         i92 = 0;
         break;
        } else if ((i91 | 0) != (-1 | 0)) {
         if ((i90 | 0) == (i85 | 0)) {
          i92 = i89;
          break;
         }
        }
        i89 = (i86 | 0) == 0 ? i87 : i86;
        i74 = i89 + i88 | 0;
        i86 = i89;
       }
       i84 = (i92 | 0) != 0;
      }
      do {
       if (i84) {
        i86 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i72) | 0;
        HEAP32[i2 >> 2] = i86;
        if ((i86 | 0) != 0) {
         i74 = i86 + 8 | 0;
         HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i54, i4, __ZNK7WebCore4Node9nodeIndexEv(i72) | 0, 0);
        i74 = HEAP32[i2 >> 2] | 0;
        do {
         if ((i74 | 0) != 0) {
          i86 = i74 + 8 | 0;
          i87 = i86 | 0;
          i85 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
          HEAP32[i87 >> 2] = i85;
          if ((i85 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
         }
        } while (0);
        i74 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i54, __ZN7WebCore9HTMLNames4pTagE) | 0;
        i86 = HEAP32[i67 >> 2] | 0;
        do {
         if ((i86 | 0) != 0) {
          i85 = i86 + 8 | 0;
          i87 = i85 | 0;
          i80 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
          HEAP32[i87 >> 2] = i80;
          if ((i80 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
         }
        } while (0);
        if ((i74 | 0) == 0) {
         break;
        }
        HEAP32[i66 >> 2] = i72;
        i86 = i72 + 8 | 0;
        HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
        HEAP32[i60 >> 2] = i74;
        i86 = i74 + 8 | 0;
        HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
        __ZN7WebCore23ReplaceSelectionCommand21moveNodeOutOfAncestorEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i55, i56);
        i86 = HEAP32[i60 >> 2] | 0;
        do {
         if ((i86 | 0) != 0) {
          i85 = i86 + 8 | 0;
          i80 = i85 | 0;
          i87 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
          HEAP32[i80 >> 2] = i87;
          if ((i87 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
         }
        } while (0);
        i86 = HEAP32[i66 >> 2] | 0;
        if ((i86 | 0) == 0) {
         break;
        }
        i74 = i86 + 8 | 0;
        i86 = i74 | 0;
        i85 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
        HEAP32[i86 >> 2] = i85;
        if ((i85 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
       }
      } while (0);
      if (!(__ZN7WebCoreL15isHeaderElementEPKNS_4NodeE(i72) | 0)) {
       break;
      }
      i74 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i72) | 0;
      HEAP32[i63 >> 2] = i74;
      if ((i74 | 0) != 0) {
       i85 = i74 + 8 | 0;
       HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i57, i53, __ZNK7WebCore4Node9nodeIndexEv(i72) | 0, 0);
      i85 = HEAP32[i63 >> 2] | 0;
      do {
       if ((i85 | 0) != 0) {
        i74 = i85 + 8 | 0;
        i86 = i74 | 0;
        i87 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
        HEAP32[i86 >> 2] = i87;
        if ((i87 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
       }
      } while (0);
      i85 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i57, F_BASE_ii + 20 | 0, 1, 0) | 0;
      i74 = HEAP32[i65 >> 2] | 0;
      do {
       if ((i74 | 0) != 0) {
        i87 = i74 + 8 | 0;
        i86 = i87 | 0;
        i80 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
        HEAP32[i86 >> 2] = i80;
        if ((i80 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i87 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i87 - 8 | 0);
       }
      } while (0);
      if ((i85 | 0) == 0) {
       break;
      }
      HEAP32[i69 >> 2] = i72;
      i74 = i72 + 8 | 0;
      HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
      HEAP32[i70 >> 2] = i85;
      i74 = i85 + 8 | 0;
      HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
      __ZN7WebCore23ReplaceSelectionCommand21moveNodeOutOfAncestorEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i58, i59);
      i74 = HEAP32[i70 >> 2] | 0;
      do {
       if ((i74 | 0) != 0) {
        i87 = i74 + 8 | 0;
        i80 = i87 | 0;
        i86 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
        HEAP32[i80 >> 2] = i86;
        if ((i86 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i87 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i87 - 8 | 0);
       }
      } while (0);
      i74 = HEAP32[i69 >> 2] | 0;
      if ((i74 | 0) == 0) {
       break;
      }
      i85 = i74 + 8 | 0;
      i74 = i85 | 0;
      i87 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
      HEAP32[i74 >> 2] = i87;
      if ((i87 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
     }
    } while (0);
    if (!i77) {
     i73 = i76 + 8 | 0;
     HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
    }
    i73 = i72 + 8 | 0;
    i85 = i73 - 8 | 0;
    i87 = i73 | 0;
    i74 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
    HEAP32[i87 >> 2] = i74;
    do {
     if ((i74 | 0) < 1) {
      if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i85);
     }
    } while (0);
    if ((i76 | 0) == 0) {
     break L12;
    } else {
     i71 = i76;
     i72 = i76;
    }
   }
   i72 = i61 + 8 | 0;
   i69 = i72 - 8 | 0;
   i70 = i72 | 0;
   i65 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
   HEAP32[i70 >> 2] = i65;
   do {
    if ((i65 | 0) < 1) {
     if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i69);
    }
   } while (0);
   if ((i71 | 0) == 0) {
    break;
   }
   i69 = i71 + 8 | 0;
   i72 = i69 | 0;
   i65 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
   HEAP32[i72 >> 2] = i65;
   if ((i65 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
  }
 } while (0);
 if (i62) {
  STACKTOP = i3;
  return;
 }
 i62 = i61 + 8 | 0;
 i61 = i62 | 0;
 i76 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
 HEAP32[i61 >> 2] = i76;
 if ((i76 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand24addSpacesForSmartReplaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 104 | 0;
 i13 = i2 + 112 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 160 | 0;
 i17 = i2 + 168 | 0;
 i18 = i2 + 176 | 0;
 i19 = i2 + 184 | 0;
 i20 = i2 + 192 | 0;
 i21 = i2 + 200 | 0;
 i22 = i2 + 208 | 0;
 i23 = i1 + 152 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i23, 1);
 __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i4, i1);
 i24 = i6 | 0;
 i25 = i4 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i24 >> 2] = i26;
 if ((i26 | 0) == 0) {
  i27 = i6 + 8 | 0;
  i28 = 0;
  i29 = i27;
  i30 = i27;
 } else {
  i27 = i26 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
  i27 = i6 + 8 | 0;
  i26 = i27;
  i28 = HEAP32[i26 >> 2] & -8;
  i29 = i27;
  i30 = i26;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i26 = HEAP32[i4 + 8 >> 2] | 0;
 i27 = i28 | i26 & 7;
 HEAP32[i30 >> 2] = i27;
 HEAP8[i29] = i27 & 255 & -9 | i26 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i6, 1);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i26 = i24 | 0;
   i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i6 = __ZNK7WebCore8Position25computeNodeBeforePositionEv(i5) | 0;
 do {
  if ((i6 | 0) == 0) {
   i31 = 0;
  } else {
   if ((HEAP32[i6 + 12 >> 2] & 1 | 0) == 0) {
    i31 = 0;
    break;
   }
   i24 = HEAP32[i6 + 36 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i31 = 0;
    break;
   }
   i31 = HEAP32[i24 + 4 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[i5 + 8 >> 2] & 7 | 0) == 0) {
  i24 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
  i32 = i24;
  i33 = HEAP32[i5 + 4 >> 2] | 0;
 } else {
  i32 = i6;
  i33 = i31;
 }
 do {
  if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0)) {
   i31 = __ZNK7WebCore15VisiblePosition14characterAfterEv(i4) | 0;
   if (__ZN7WebCore29isCharacterSmartReplaceExemptEib((i31 | 0) == 160 ? 32 : i31, 0) | 0 | (i32 | 0) == 0) {
    break;
   }
   i31 = HEAP32[i32 + 12 >> 2] | 0;
   i6 = (i31 & 2048 | 0) == 0;
   i24 = i32 + 32 | 0;
   if (i6) {
    i34 = i24 | 0;
   } else {
    i34 = HEAP32[i24 >> 2] | 0;
   }
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    i35 = 1;
   } else {
    if (i6) {
     i36 = i24 | 0;
    } else {
     i36 = HEAP32[i24 >> 2] | 0;
    }
    i24 = HEAP32[i36 >> 2] | 0;
    if ((HEAP32[i24 + 20 >> 2] & 768 | 0) == 256) {
     i37 = HEAP32[(HEAP32[i24 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i37 = HEAP32[i24 + 36 >> 2] | 0;
    }
    i35 = ((HEAP32[i37 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0;
   }
   if ((i31 & 1 | 0) != 0) {
    i31 = i1 | 0;
    i24 = i7 | 0;
    HEAP32[i24 >> 2] = i32;
    i6 = i32 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    do {
     if (i35) {
      i6 = i8 | 0;
      i27 = HEAP32[(__ZN7WebCore22nonBreakingSpaceStringEv() | 0) >> 2] | 0;
      HEAP32[i6 >> 2] = i27;
      if ((i27 | 0) != 0) {
       i26 = i27 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
      }
      __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i31, i7, i33, i8);
      i26 = HEAP32[i6 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      i6 = i26 | 0;
      i27 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i6 >> 2] = i27;
       break;
      }
     } else {
      __ZN3WTF6StringC1EPKc(i8, H_BASE + 112 | 0);
      __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i31, i7, i33, i8);
      i27 = HEAP32[i8 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      i6 = i27 | 0;
      i26 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i6 >> 2] = i26;
       break;
      }
     }
    } while (0);
    i31 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i31 | 0) != 0) {
      i26 = i31 + 8 | 0;
      i6 = i26 | 0;
      i27 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    i31 = i1 + 164 | 0;
    if ((__ZNK7WebCore8Position13containerNodeEv(i31) | 0) != (i32 | 0)) {
     break;
    }
    __ZN7WebCore8Position12moveToOffsetEi(i31, (HEAP32[i1 + 168 >> 2] | 0) + 1 | 0);
    break;
   }
   i31 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if (i35) {
     i24 = HEAP32[(__ZN7WebCore22nonBreakingSpaceStringEv() | 0) >> 2] | 0;
     HEAP32[i10 >> 2] = i24;
     if ((i24 | 0) == 0) {
      i38 = 0;
      i39 = 1;
      break;
     }
     i26 = i24 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
     i38 = 0;
     i39 = 1;
    } else {
     __ZN3WTF6StringC1EPKc(i10, H_BASE + 112 | 0);
     i38 = 1;
     i39 = 0;
    }
   } while (0);
   __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i9, i31, i10);
   i26 = i9 | 0;
   i24 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i26 = i24 | 0;
   do {
    if (i38) {
     i27 = HEAP32[i10 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i6 = i27 | 0;
     i29 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i6 >> 2] = i29;
      break;
     }
    }
   } while (0);
   do {
    if (i39) {
     i31 = HEAP32[i10 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i29 = i31 | 0;
     i6 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i29 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i6 = i11 | 0;
   HEAP32[i6 >> 2] = i26;
   i29 = (i24 | 0) == 0;
   if (!i29) {
    i31 = i24 + 8 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   }
   i31 = i12 | 0;
   HEAP32[i31 >> 2] = i32;
   i27 = i32 + 8 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1 | 0, i11, i12);
   i27 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i31 = i27 + 8 | 0;
     i30 = i31 | 0;
     i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
    }
   } while (0);
   i27 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i31 = i27 + 8 | 0;
     i28 = i31 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore23ReplaceSelectionCommand19updateNodesInsertedEPNS_4NodeE(i1, i26);
   if (i29) {
    break;
   }
   i27 = i24 + 8 | 0;
   i6 = i27 | 0;
   i31 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 i12 = i1 + 8 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[i12 >> 2] | 0);
 i11 = i14 | 0;
 i32 = i3 | 0;
 i10 = HEAP32[i32 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i39 = i10 + 8 | 0;
  HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
 }
 HEAP32[i14 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i39 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = i14 + 8 | 0;
 i38 = i10;
 i9 = HEAP32[i38 >> 2] & -8 | i39 & 7;
 HEAP32[i38 >> 2] = i9;
 HEAP8[i10] = i9 & 255 & -9 | i39 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i13, i14, 1);
 i14 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i11 = i14 + 8 | 0;
   i39 = i11 | 0;
   i9 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   HEAP32[i39 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i14 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i13) | 0;
 if ((HEAP32[i13 + 8 >> 2] & 7 | 0) == 0) {
  i11 = __ZNK7WebCore8Position13containerNodeEv(i13) | 0;
  i40 = HEAP32[i13 + 4 >> 2] | 0;
  i41 = i11;
 } else {
  i40 = 0;
  i41 = i14;
 }
 do {
  if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, 1) | 0)) {
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i15, i3, 0);
   i14 = __ZNK7WebCore15VisiblePosition14characterAfterEv(i15) | 0;
   i11 = __ZN7WebCore29isCharacterSmartReplaceExemptEib((i14 | 0) == 160 ? 32 : i14, 1) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 + 8 | 0;
     i39 = i9 | 0;
     i10 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if (i11 | (i41 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i41 + 12 >> 2] | 0;
   i24 = (i14 & 2048 | 0) == 0;
   i29 = i41 + 32 | 0;
   if (i24) {
    i42 = i29 | 0;
   } else {
    i42 = HEAP32[i29 >> 2] | 0;
   }
   if ((HEAP32[i42 >> 2] | 0) == 0) {
    i43 = 1;
   } else {
    if (i24) {
     i44 = i29 | 0;
    } else {
     i44 = HEAP32[i29 >> 2] | 0;
    }
    i29 = HEAP32[i44 >> 2] | 0;
    if ((HEAP32[i29 + 20 >> 2] & 768 | 0) == 256) {
     i45 = HEAP32[(HEAP32[i29 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i45 = HEAP32[i29 + 36 >> 2] | 0;
    }
    i43 = ((HEAP32[i45 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0;
   }
   if ((i14 & 1 | 0) != 0) {
    i14 = i1 | 0;
    i29 = i16 | 0;
    HEAP32[i29 >> 2] = i41;
    i24 = i41 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    do {
     if (i43) {
      i24 = i17 | 0;
      i26 = HEAP32[(__ZN7WebCore22nonBreakingSpaceStringEv() | 0) >> 2] | 0;
      HEAP32[i24 >> 2] = i26;
      if ((i26 | 0) != 0) {
       i9 = i26 | 0;
       HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
      }
      __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i14, i16, i40, i17);
      i9 = HEAP32[i24 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i24 = i9 | 0;
      i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i24 >> 2] = i26;
       break;
      }
     } else {
      __ZN3WTF6StringC1EPKc(i17, H_BASE + 112 | 0);
      __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i14, i16, i40, i17);
      i26 = HEAP32[i17 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      i24 = i26 | 0;
      i9 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i24 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i14 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i11 = i14 + 8 | 0;
      i9 = i11 | 0;
      i24 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     }
    } while (0);
    i14 = i1 + 164 | 0;
    if ((__ZNK7WebCore8Position13containerNodeEv(i14) | 0) != (i41 | 0)) {
     break;
    }
    i29 = HEAP32[i1 + 168 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
    __ZN7WebCore8Position12moveToOffsetEi(i14, i29 + 1 | 0);
    break;
   }
   i29 = HEAP32[i12 >> 2] | 0;
   do {
    if (i43) {
     i14 = HEAP32[(__ZN7WebCore22nonBreakingSpaceStringEv() | 0) >> 2] | 0;
     HEAP32[i19 >> 2] = i14;
     if ((i14 | 0) == 0) {
      i46 = 0;
      i47 = 1;
      break;
     }
     i11 = i14 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i46 = 0;
     i47 = 1;
    } else {
     __ZN3WTF6StringC1EPKc(i19, H_BASE + 112 | 0);
     i46 = 1;
     i47 = 0;
    }
   } while (0);
   __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i18, i29, i19);
   i11 = i18 | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = i14 | 0;
   do {
    if (i46) {
     i24 = HEAP32[i19 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i9 = i24 | 0;
     i26 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i9 >> 2] = i26;
      break;
     }
    }
   } while (0);
   do {
    if (i47) {
     i29 = HEAP32[i19 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i26 = i29 | 0;
     i9 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i9 = i20 | 0;
   HEAP32[i9 >> 2] = i11;
   i26 = (i14 | 0) == 0;
   if (!i26) {
    i29 = i14 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   i29 = i21 | 0;
   HEAP32[i29 >> 2] = i41;
   i24 = i41 + 8 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i20, i21, 1);
   i24 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i29 = i24 + 8 | 0;
     i10 = i29 | 0;
     i39 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i29 = i24 + 8 | 0;
     i39 = i29 | 0;
     i10 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i22, i11);
   i24 = i22 | 0;
   i9 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i29 = i23 | 0;
   i10 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = i9;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 8 | 0;
     i29 = i9 | 0;
     i39 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 156 >> 2] = HEAP32[i22 + 4 >> 2];
   i10 = HEAP32[i22 + 8 >> 2] | 0;
   i11 = i1 + 160 | 0;
   i9 = i11;
   i39 = HEAP32[i9 >> 2] & -8 | i10 & 7;
   HEAP32[i9 >> 2] = i39;
   HEAP8[i11] = i39 & 255 & -9 | i10 & 8;
   i10 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i39 = i10 + 8 | 0;
     i11 = i39 | 0;
     i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
    }
   } while (0);
   if (i26) {
    break;
   }
   i10 = i14 + 8 | 0;
   i24 = i10 | 0;
   i39 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i39;
   if ((i39 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 + 8 | 0;
   i22 = i13 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 8 | 0;
   i13 = i5 | 0;
   i23 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i25 = i1 + 8 | 0;
   i5 = i25 | 0;
   i23 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i32 = i1 + 8 | 0;
 i1 = i32 | 0;
 i25 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i25;
 if ((i25 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand16mergeEndIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 88 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 160 | 0;
 i16 = i2 + 176 | 0;
 if ((HEAP8[i1 + 197 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i17 = i1 + 152 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i17, 1);
 __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i5, i1);
 do {
  if ((HEAP8[i1 + 189 | 0] & 1) == 0) {
   do {
    if (__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i4, i5, 1) | 0) {
     if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
      i18 = 7;
      break;
     }
     i19 = HEAP32[i5 >> 2] | 0;
     HEAP32[i6 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i20 = i19 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
     i20 = HEAP32[i5 + 8 >> 2] | 0;
     i19 = i6 + 8 | 0;
     i21 = i19;
     i22 = HEAP32[i21 >> 2] & -8 | i20 & 7;
     HEAP32[i21 >> 2] = i22;
     HEAP8[i19] = i22 & 255 & -9 | i20 & 8;
     HEAP32[i6 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i5, 0);
     i23 = 0;
    } else {
     i18 = 7;
    }
   } while (0);
   if ((i18 | 0) == 7) {
    __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i6, i5, 0);
    __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, i5, 1);
    i23 = 1;
   }
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, i7, 1);
   i20 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i6) | 0;
   i22 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i19 = i22 + 8 | 0;
     i21 = i19 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   do {
    if (i20) {
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i9, HEAP32[i1 + 8 >> 2] | 0);
     i22 = i9 | 0;
     i19 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i22 = i19 | 0;
     i24 = i1 | 0;
     i21 = i10 | 0;
     HEAP32[i21 >> 2] = i22;
     i25 = (i19 | 0) == 0;
     if (!i25) {
      i26 = i19 + 8 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     }
     i26 = HEAP32[i7 >> 2] | 0;
     i27 = (i26 | 0) == 0;
     if (i27) {
      i28 = i11 | 0;
      HEAP32[i28 >> 2] = i26;
      i29 = i28;
     } else {
      i28 = i26 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      i28 = i11 | 0;
      HEAP32[i28 >> 2] = i26;
      i30 = i26 + 8 | 0;
      HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      i29 = i28;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i24, i10, i11, 1);
     i28 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i30 = i28 + 8 | 0;
       i31 = i30 | 0;
       i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     do {
      if (!i27) {
       i28 = i26 + 8 | 0;
       i30 = i28 | 0;
       i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i26 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i27 = i26 + 8 | 0;
       i28 = i27 | 0;
       i32 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     i26 = i3 | 0;
     HEAP32[i26 >> 2] = i22;
     if (!i25) {
      i21 = i19 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i13, i3, 1);
     i21 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i26 = i21 + 8 | 0;
       i27 = i26 | 0;
       i32 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
     i21 = i12 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     i26 = i6 | 0;
     i32 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = i22;
     do {
      if ((i32 | 0) != 0) {
       i22 = i32 + 8 | 0;
       i26 = i22 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     HEAP32[i6 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
     i32 = HEAP32[i12 + 8 >> 2] | 0;
     i22 = i6 + 8 | 0;
     i27 = i22;
     i26 = HEAP32[i27 >> 2] & -8 | i32 & 7;
     HEAP32[i27 >> 2] = i26;
     HEAP8[i22] = i26 & 255 & -9 | i32 & 8;
     HEAP32[i6 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
     i32 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i26 = i32 + 8 | 0;
       i22 = i26 | 0;
       i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i21 = i32 + 8 | 0;
       i26 = i21 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     if (i25) {
      i33 = i24;
      break;
     }
     i32 = i19 + 8 | 0;
     i21 = i32 | 0;
     i27 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      i33 = i24;
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      i33 = i24;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     i33 = i24;
    } else {
     i33 = i1 | 0;
    }
   } while (0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i14, i7, 1);
   __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i33, i7, i14, i6, 0, 1);
   i20 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i32 = i20 + 8 | 0;
     i27 = i32 | 0;
     i21 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   do {
    if (i23) {
     i20 = i17 | 0;
     i32 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       if ((HEAP32[i32 + 12 >> 2] & 256 | 0) != 0) {
        break;
       }
       if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
        i34 = 1;
       } else {
        i34 = HEAP32[i1 + 120 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i1 + 96 | 0, i34);
       i21 = i15 | 0;
       i27 = HEAP32[i21 >> 2] | 0;
       if ((i27 | 0) != 0) {
        i26 = i27 + 8 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       }
       i26 = HEAP32[i15 + 4 >> 2] | 0;
       i22 = HEAP32[i15 + 8 >> 2] | 0;
       i28 = i22 & 8;
       i30 = HEAP32[i20 >> 2] | 0;
       HEAP32[i20 >> 2] = i27;
       do {
        if ((i30 | 0) != 0) {
         i27 = i30 + 8 | 0;
         i31 = i27 | 0;
         i35 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i35;
         if ((i35 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
        }
       } while (0);
       HEAP32[i1 + 156 >> 2] = i26;
       i30 = i1 + 160 | 0;
       i27 = i30;
       i35 = HEAP32[i27 >> 2] & -8 | i22 & 7;
       HEAP32[i27 >> 2] = i35;
       HEAP8[i30] = i35 & 255 & -9 | i28;
       i35 = HEAP32[i21 >> 2] | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       i30 = i35 + 8 | 0;
       i35 = i30 | 0;
       i27 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       HEAP32[i35 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
      i36 = 0;
     } else {
      i36 = HEAP32[i1 + 120 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i1 + 108 | 0, i36);
     i32 = i16 | 0;
     i24 = HEAP32[i32 >> 2] | 0;
     if ((i24 | 0) != 0) {
      i19 = i24 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     i19 = HEAP32[i16 + 4 >> 2] | 0;
     i25 = HEAP32[i16 + 8 >> 2] | 0;
     i30 = i25 & 8;
     i27 = i1 + 164 | 0;
     i35 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i24;
     do {
      if ((i35 | 0) != 0) {
       i24 = i35 + 8 | 0;
       i31 = i24 | 0;
       i37 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
      }
     } while (0);
     i35 = i1 + 168 | 0;
     HEAP32[i35 >> 2] = i19;
     i24 = i1 + 172 | 0;
     i37 = i24;
     i31 = HEAP32[i37 >> 2] & -8 | i25 & 7;
     HEAP32[i37 >> 2] = i31;
     HEAP8[i24] = i31 & 255 & -9 | i30;
     i31 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i38 = i31 + 8 | 0;
       i39 = i38 | 0;
       i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       HEAP32[i39 >> 2] = i40;
       if ((i40 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i27 >> 2] | 0) != 0) {
      break;
     }
     i31 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i31 | 0) == 0) {
       HEAP32[i27 >> 2] = i31;
      } else {
       i32 = i31 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       i32 = HEAP32[i27 >> 2] | 0;
       HEAP32[i27 >> 2] = i31;
       if ((i32 | 0) == 0) {
        break;
       }
       i30 = i32 + 8 | 0;
       i32 = i30 | 0;
       i25 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
      }
     } while (0);
     HEAP32[i35 >> 2] = HEAP32[i1 + 156 >> 2];
     i31 = HEAP32[i1 + 160 >> 2] | 0;
     i27 = HEAP32[i37 >> 2] & -8 | i31 & 7;
     HEAP32[i37 >> 2] = i27;
     HEAP8[i24] = i27 & 255 & -9 | i31 & 8;
    }
   } while (0);
   i31 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i27 = i31 + 8 | 0;
     i20 = i27 | 0;
     i30 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   i31 = HEAP32[i6 >> 2] | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   i27 = i31 + 8 | 0;
   i31 = i27 | 0;
   i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 8 | 0;
   i7 = i5 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand17insertAsListItemsEN3WTF10PassRefPtrINS_11HTMLElementEEEPNS_4NodeERKNS_8PositionERNS0_13InsertedNodesE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i6 + 80 | 0;
 i16 = i2 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i2 | 0;
 i17 = i2 + 36 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 L1 : do {
  if ((i18 | 0) == 0) {
   i19 = i2;
   i20 = i16;
   i21 = i17;
  } else {
   i22 = i2;
   i23 = i16;
   i24 = i17;
   i25 = i18;
   while (1) {
    if (!(__ZN7WebCore13isListElementEPNS_4NodeE(i25) | 0)) {
     i19 = i22;
     i20 = i23;
     i21 = i24;
     break L1;
    }
    if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i23) | 0) != 1) {
     i19 = i22;
     i20 = i23;
     i21 = i24;
     break L1;
    }
    i26 = HEAP32[i24 >> 2] | 0;
    i27 = i26;
    if ((i26 | 0) != 0) {
     i28 = i26 + 8 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    }
    do {
     if ((i22 | 0) != 0) {
      i28 = i22 + 8 | 0;
      i29 = i28 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    i28 = i26;
    i30 = i26 + 36 | 0;
    i29 = HEAP32[i30 >> 2] | 0;
    if ((i29 | 0) == 0) {
     i19 = i27;
     i20 = i28;
     i21 = i30;
     break;
    } else {
     i22 = i27;
     i23 = i28;
     i24 = i30;
     i25 = i29;
    }
   }
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i4, 1);
 i18 = __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, 1) | 0;
 i17 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 + 8 | 0;
   i16 = i7 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i4, 1);
 i17 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i2 = i8 | 0;
   i16 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if (i18 | i17) {
   i31 = i1 | 0;
  } else {
   i7 = HEAP32[i4 + 4 >> 2] | 0;
   i8 = i4 | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   i2 = i1 | 0;
   do {
    if ((HEAP32[i16 + 12 >> 2] & 1 | 0) != 0 & (i7 | 0) > 0) {
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i24 = i16 + 8 | 0;
      HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i2, i9, i7);
     i24 = HEAP32[i25 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i25 = i24 + 8 | 0;
     i24 = i25 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i10, i2, HEAP32[i8 >> 2] | 0, i3, 1);
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i31 = i2;
    break;
   }
   i16 = i7 + 8 | 0;
   i7 = i16 | 0;
   i25 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    i31 = i2;
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    i31 = i2;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   i31 = i2;
  }
 } while (0);
 i10 = i11 | 0;
 i11 = i18 | i17 ^ 1;
 i18 = i12 | 0;
 i9 = i13 | 0;
 i1 = i5 | 0;
 i4 = i5 + 4 | 0;
 i5 = i14 | 0;
 i16 = i15 | 0;
 i25 = i3;
 L41 : while (1) {
  i3 = (i25 | 0) == 0;
  i7 = i25 + 8 | 0;
  i23 = HEAP32[i21 >> 2] | 0;
  i24 = (i23 | 0) == 0;
  do {
   if (i11) {
    if (i24) {
     i32 = 78;
     break L41;
    }
    i22 = i23 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    HEAP32[i10 >> 2] = 0;
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i20, i23, i10) | 0;
    HEAP32[i18 >> 2] = i23;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    HEAP32[i9 >> 2] = i25;
    if (!i3) {
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i31, i12, i13, 1);
    i22 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i29 = i22 + 8 | 0;
      i30 = i29 | 0;
      i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i22 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i27 = i22 + 8 | 0;
      i26 = i27 | 0;
      i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    i22 = i23 + 8 | 0;
    do {
     if ((HEAP32[i1 >> 2] | 0) == 0) {
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      i27 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = i23;
      if ((i27 | 0) == 0) {
       break;
      }
      i29 = i27 + 8 | 0;
      i27 = i29 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    i29 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i23;
    if ((i29 | 0) == 0) {
     i33 = i25;
     break;
    }
    i26 = i29 + 8 | 0;
    i29 = i26 | 0;
    i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    HEAP32[i29 >> 2] = i27;
    if ((i27 | 0) >= 1) {
     i33 = i25;
     break;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     i33 = i25;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    i33 = i25;
   } else {
    if (i24) {
     i34 = i25;
     break L41;
    }
    i26 = i23 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    HEAP32[i10 >> 2] = 0;
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i20, i23, i10) | 0;
    if (!i17) {
     i33 = i25;
     break;
    }
    HEAP32[i5 >> 2] = i23;
    i26 = i23 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    HEAP32[i16 >> 2] = i25;
    if (!i3) {
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i31, i14, i15);
    i27 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i29 = i27 + 8 | 0;
      i28 = i29 | 0;
      i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i27 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i22 = i27 + 8 | 0;
      i29 = i22 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i1 >> 2] | 0) == 0) {
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
      i27 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = i23;
      if ((i27 | 0) == 0) {
       break;
      }
      i22 = i27 + 8 | 0;
      i27 = i22 | 0;
      i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i22 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i23;
    if ((i22 | 0) == 0) {
     i33 = i23;
     break;
    }
    i30 = i22 + 8 | 0;
    i22 = i30 | 0;
    i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i27;
    if ((i27 | 0) >= 1) {
     i33 = i23;
     break;
    }
    if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
     i33 = i23;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    i33 = i23;
   }
  } while (0);
  i7 = i23 + 8 | 0;
  i3 = i7 | 0;
  i24 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  HEAP32[i3 >> 2] = i24;
  if ((i24 | 0) >= 1) {
   i25 = i33;
   continue;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   i25 = i33;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  i25 = i33;
 }
 if ((i32 | 0) == 78) {
  i34 = HEAP32[i25 + 24 >> 2] | 0;
 }
 if ((i19 | 0) == 0) {
  STACKTOP = i6;
  return i34 | 0;
 }
 i25 = i19 + 8 | 0;
 i19 = i25 | 0;
 i32 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 HEAP32[i19 >> 2] = i32;
 if ((i32 | 0) >= 1) {
  STACKTOP = i6;
  return i34 | 0;
 }
 if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return i34 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
 STACKTOP = i6;
 return i34 | 0;
}
function __ZN7WebCore23ReplaceSelectionCommand21moveNodeOutOfAncestorEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 96 | 0;
 i14 = i4 + 104 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 144 | 0;
 i20 = i2 | 0;
 i2 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i3 | 0;
 i3 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = (i2 | 0) == 0;
 do {
  if (i20) {
   _memset(i7 | 0, 0, 12) | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
    __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i7, i2);
    break;
   }
   i21 = i5 | 0;
   HEAP32[i21 >> 2] = i2;
   i22 = i2 + 8 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i5, 2);
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i22 + 8 | 0;
   i22 = i21 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, 1);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i21 = i7 | 0;
   i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i9, i3);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i7 = i9 | 0;
   i23 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i1 | 0;
 do {
  if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i8) | 0) {
   i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i23 = i10 | 0;
   HEAP32[i23 >> 2] = i2;
   if (!i20) {
    i7 = i2 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i9 & 3](i5, i10, 1);
   i9 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i23 = i9 + 8 | 0;
     i7 = i23 | 0;
     i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i9 = i3 + 28 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i23 = i13 | 0;
    HEAP32[i23 >> 2] = i2;
    if (!i20) {
     i21 = i2 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    i21 = HEAP32[i3 + 16 >> 2] | 0;
    i7 = i14 | 0;
    HEAP32[i7 >> 2] = i21;
    if ((i21 | 0) != 0) {
     i22 = i21 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i5, i13, i14);
    i22 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i7 = i22 + 8 | 0;
      i21 = i7 | 0;
      i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     }
    } while (0);
    i22 = HEAP32[i23 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i7 = i22 + 8 | 0;
    i22 = i7 | 0;
    i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    break;
   } else {
    i7 = i11 | 0;
    HEAP32[i7 >> 2] = i2;
    if (!i20) {
     i24 = i2 + 8 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    }
    i24 = HEAP32[i9 >> 2] | 0;
    i22 = i12 | 0;
    HEAP32[i22 >> 2] = i24;
    if ((i24 | 0) != 0) {
     i21 = i24 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i5, i11, i12, 1);
    i21 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i22 = i21 + 8 | 0;
      i24 = i22 | 0;
      i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    i21 = HEAP32[i7 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    i9 = i21 + 8 | 0;
    i21 = i9 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    break;
   }
  } else {
   __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i15, i5, i2, i3, 1);
   i9 = i15 | 0;
   i23 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = i2;
   if (!i20) {
    i22 = i2 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i9 & 3](i5, i16, 1);
   i9 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i21 = i9 + 8 | 0;
     i22 = i21 | 0;
     i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i9 = i17 | 0;
   HEAP32[i9 >> 2] = i2;
   if (!i20) {
    i7 = i2 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   i7 = i18 | 0;
   HEAP32[i7 >> 2] = i23;
   i21 = (i23 | 0) == 0;
   if (!i21) {
    i25 = i23 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i5, i17, i18, 1);
   i25 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i7 = i25 + 8 | 0;
     i22 = i7 | 0;
     i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i25 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i7 = i25 + 8 | 0;
     i24 = i7 | 0;
     i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   if (i21) {
    break;
   }
   i25 = i23 + 8 | 0;
   i9 = i25 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
  i26 = 73;
 } else {
  if ((HEAP32[i3 + 36 >> 2] | 0) == 0) {
   i26 = 73;
  } else {
   i27 = i3;
  }
 }
 do {
  if ((i26 | 0) == 73) {
   i18 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i17 = i19 | 0;
   HEAP32[i17 >> 2] = i3;
   FUNCTION_TABLE_viii[i18 & 3](i5, i19, 1);
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i27 = 0;
    break;
   }
   i17 = i18 + 8 | 0;
   i18 = i17 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    i27 = 0;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i27 = 0;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i27 = 0;
  }
 } while (0);
 i19 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i8 = i19 + 8 | 0;
   i5 = i8 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i19 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i6 = i19 + 8 | 0;
   i8 = i6 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 do {
  if ((i27 | 0) != 0) {
   i19 = i27 + 8 | 0;
   i6 = i19 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 if (i20) {
  STACKTOP = i4;
  return;
 }
 i20 = i2 + 8 | 0;
 i2 = i20 | 0;
 i27 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand28mergeTextNodesAroundPositionERNS_8PositionES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = (HEAP32[i3 + 8 >> 2] & 7 | 0) == 0;
 i14 = (HEAP32[i2 + 8 >> 2] & 7 | 0) == 0;
 do {
  if (i14) {
   if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) == 0) {
    i15 = 6;
    break;
   }
   if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i2) | 0) + 12 >> 2] & 1 | 0) == 0) {
    i15 = 6;
    break;
   }
   i16 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    i17 = i16 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i18 = i16;
    break;
   }
  } else {
   i15 = 6;
  }
 } while (0);
 L8 : do {
  if ((i15 | 0) == 6) {
   i16 = __ZNK7WebCore8Position25computeNodeBeforePositionEv(i2) | 0;
   do {
    if ((i16 | 0) != 0) {
     if ((HEAP32[i16 + 12 >> 2] & 1 | 0) == 0) {
      break;
     }
     i17 = i16 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i18 = i16;
     break L8;
    }
   } while (0);
   i16 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i2) | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i16 + 12 >> 2] & 1 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    i17 = i16 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i18 = i16;
    break;
   }
  }
 } while (0);
 i16 = i18;
 i17 = (i18 | 0) == 0;
 i19 = HEAP32[i18 + 24 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP32[i19 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i20 = i19 + 8 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   i20 = i1 | 0;
   i21 = i5 | 0;
   HEAP32[i21 >> 2] = i16;
   if (!i17) {
    i22 = i18 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   i22 = i6 | 0;
   i23 = i19 + 36 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i22 >> 2] = i24;
   if ((i24 | 0) != 0) {
    i25 = i24 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i20, i5, 0, i6);
   i25 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i22 = i25 | 0;
     i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i22 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i24 = i25 + 8 | 0;
     i22 = i24 | 0;
     i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   if (i14) {
    i25 = HEAP32[i23 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i27 = 0;
    } else {
     i27 = HEAP32[i25 + 4 >> 2] | 0;
    }
    __ZN7WebCore8Position12moveToOffsetEi(i2, (HEAP32[i2 + 4 >> 2] | 0) + i27 | 0);
   } else {
    __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i2, i19);
   }
   do {
    if (i13) {
     if ((i18 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
      i25 = HEAP32[i23 >> 2] | 0;
      if ((i25 | 0) == 0) {
       i28 = 0;
      } else {
       i28 = HEAP32[i25 + 4 >> 2] | 0;
      }
      __ZN7WebCore8Position12moveToOffsetEi(i3, (HEAP32[i3 + 4 >> 2] | 0) + i28 | 0);
      break;
     }
     if ((i19 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
      break;
     }
     i25 = i7 | 0;
     HEAP32[i25 >> 2] = i18;
     if (!i17) {
      i21 = i18 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     __ZN7WebCore8Position14moveToPositionEN3WTF10PassRefPtrINS_4NodeEEEi(i3, i7, HEAP32[i3 + 4 >> 2] | 0);
     i21 = HEAP32[i25 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i25 = i21 + 8 | 0;
     i21 = i25 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    } else {
     __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i3, i19);
    }
   } while (0);
   i23 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i25 = i8 | 0;
   HEAP32[i25 >> 2] = i19;
   i24 = i19 + 8 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i23 & 3](i20, i8, 1);
   i23 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 + 8 | 0;
     i24 = i25 | 0;
     i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   i23 = i19 + 8 | 0;
   i20 = i23 | 0;
   i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i19 = HEAP32[i18 + 28 >> 2] | 0;
 do {
  if ((i19 | 0) == 0) {
   i15 = 85;
  } else {
   if ((HEAP32[i19 + 12 >> 2] & 1 | 0) == 0) {
    i15 = 85;
    break;
   }
   i8 = i19 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[i18 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i1 | 0;
   i7 = i9 | 0;
   HEAP32[i7 >> 2] = i16;
   if (!i17) {
    i28 = i18 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i28 = i10 | 0;
   i27 = HEAP32[i19 + 36 >> 2] | 0;
   HEAP32[i28 >> 2] = i27;
   if ((i27 | 0) != 0) {
    i6 = i27 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i8, i9, i29, i10);
   i6 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i28 = i6 | 0;
     i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i28 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i27 = i6 + 8 | 0;
     i28 = i27 | 0;
     i5 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   if (!i14) {
    __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i2, i19);
   }
   do {
    if (i13) {
     if ((i19 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
      i15 = 77;
      break;
     }
     i6 = i11 | 0;
     HEAP32[i6 >> 2] = i18;
     if (!i17) {
      i7 = i18 + 8 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     }
     __ZN7WebCore8Position14moveToPositionEN3WTF10PassRefPtrINS_4NodeEEEi(i3, i11, (HEAP32[i3 + 4 >> 2] | 0) + i29 | 0);
     i7 = HEAP32[i6 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 + 8 | 0;
     i7 = i6 | 0;
     i27 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    } else {
     i15 = 77;
    }
   } while (0);
   if ((i15 | 0) == 77) {
    __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i3, i19);
   }
   i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i27 = i12 | 0;
   HEAP32[i27 >> 2] = i19;
   i7 = i19 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i6 & 3](i8, i12, 1);
   i6 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i27 = i6 + 8 | 0;
     i7 = i27 | 0;
     i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   i6 = i19 + 8 | 0;
   i8 = i6 | 0;
   i27 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    i15 = 85;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i15 = 85;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   if (!i17) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i15 | 0) == 85) {
   if (!i17) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i17 = i18 + 8 | 0;
 i18 = i17 | 0;
 i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
 HEAP32[i18 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand21performTrivialReplaceERKNS_19ReplacementFragmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 112 | 0;
 i13 = i3 + 128 | 0;
 i14 = i3 + 136 | 0;
 i15 = i2 + 4 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 i18 = HEAP32[i16 + 36 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((i18 | 0) != (HEAP32[i16 + 40 >> 2] | 0)) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP32[i18 + 12 >> 2] & 1 | 0) == 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP8[i1 + 181 | 0] & 1) != 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP8[i2 + 8 | 0] & 1) != 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP8[i2 + 9 | 0] & 1) != 0) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 i2 = i1 | 0;
 i18 = i5 | 0;
 i16 = i1 + 96 | 0;
 i19 = HEAP32[i16 >> 2] | 0;
 HEAP32[i18 >> 2] = i19;
 if ((i19 | 0) == 0) {
  i20 = i5 + 8 | 0;
  i21 = 0;
  i22 = i20;
  i23 = i20;
 } else {
  i20 = i19 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  i20 = i5 + 8 | 0;
  i19 = i20;
  i21 = HEAP32[i19 >> 2] & -8;
  i22 = i20;
  i23 = i19;
 }
 i19 = i1 + 100 | 0;
 HEAP32[i5 + 4 >> 2] = HEAP32[i19 >> 2];
 i20 = i1 + 104 | 0;
 i24 = HEAP32[i20 >> 2] | 0;
 i25 = i21 | i24 & 7;
 HEAP32[i23 >> 2] = i25;
 HEAP8[i22] = i25 & 255 & -9 | i24 & 8;
 i24 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i5) | 0, 1) | 0;
 i25 = (__ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i5, F_BASE_ii + 2 | 0, 1, i24) | 0) == 0;
 i24 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i18 = i24 + 8 | 0;
   i5 = i18 | 0;
   i22 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 if (!i25) {
  i17 = 0;
  STACKTOP = i3;
  return i17 | 0;
 }
 i25 = i7 | 0;
 i24 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i25 >> 2] = i24;
 if ((i24 | 0) != 0) {
  i18 = i24 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i18 = HEAP32[i1 + 116 >> 2] | 0;
 i24 = i7 + 8 | 0;
 i22 = i24;
 i5 = HEAP32[i22 >> 2] & -8 | i18 & 7;
 HEAP32[i22 >> 2] = i5;
 HEAP8[i24] = i5 & 255 & -9 | i18 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i6, i7, 1);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i18 = (i6 | 0) == 0;
 do {
  if (!i18) {
   i5 = i6 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i24 = i5 + 8 | 0;
   i5 = i24 | 0;
   i22 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i25 = i7 + 8 | 0;
   i24 = i25 | 0;
   i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i15 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = HEAP32[i7 + 36 >> 2] | 0;
 }
 i7 = i8 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 HEAP32[i7 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i16 = i15 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i19 >> 2];
 i19 = HEAP32[i20 >> 2] | 0;
 i20 = i8 + 8 | 0;
 i16 = i20;
 i15 = HEAP32[i16 >> 2] & -8 | i19 & 7;
 HEAP32[i16 >> 2] = i15;
 HEAP8[i20] = i15 & 255 & -9 | i19 & 8;
 i19 = i1 | 0;
 i15 = i10 | 0;
 i20 = HEAP32[i26 + 36 >> 2] | 0;
 HEAP32[i15 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i26 = i20 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 __ZN7WebCore20CompositeEditCommand25replaceSelectedTextInNodeERKN3WTF6StringE(i9, i19, i10);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i26 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i10 = i9 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i27 = 0;
  } else {
   L65 : do {
    if (!i18) {
     if ((HEAP32[i6 + 16 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i26 = HEAP32[i6 + 44 >> 2] | 0;
     i15 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i26 | 0) != (i15 | 0)) {
      if ((HEAP32[i26 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i26 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
       break;
      }
     }
     i15 = i4 | 0;
     HEAP32[i15 >> 2] = i6;
     i26 = i6 + 8 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i4, 1);
     i26 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i15 = i26 + 8 | 0;
       i20 = i15 | 0;
       i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i16;
       if ((i16 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
     i26 = __ZN7WebCore23ReplaceSelectionCommand17shouldRemoveEndBREPNS_4NodeERKNS_15VisiblePositionE(i1, i6, i11) | 0;
     i15 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i16 = i15 + 8 | 0;
       i20 = i16 | 0;
       i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     i15 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i15 | 0) == 0) {
       i28 = 56;
      } else {
       i16 = i15 + 8 | 0;
       i25 = i16 | 0;
       i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        i28 = 56;
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        i28 = 56;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       if (!i26) {
        break L65;
       }
      }
     } while (0);
     if ((i28 | 0) == 56) {
      if (!i26) {
       break;
      }
     }
     i15 = i13 | 0;
     HEAP32[i15 >> 2] = i6;
     i16 = i6 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i19, i13);
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 + 8 | 0;
     i16 = i15 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i14, (HEAP8[i1 + 180 | 0] & 1) != 0 ? i8 : i9, i9, 1, 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i2, i14);
   __ZN7WebCore16VisibleSelectionD2Ev(i14);
   i15 = HEAP32[i10 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i27 = 1;
    break;
   }
   i20 = i15 + 8 | 0;
   i15 = i20 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    i27 = 1;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i27 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i27 = 1;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 + 8 | 0;
   i14 = i7 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (i18) {
  i17 = i27;
  STACKTOP = i3;
  return i17 | 0;
 }
 i18 = i6 + 8 | 0;
 i6 = i18 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  i17 = i27;
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
  i17 = i27;
  STACKTOP = i3;
  return i17 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
 i17 = i27;
 STACKTOP = i3;
 return i17 | 0;
}
function __ZN7WebCore19ReplacementFragmentC2ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 88 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 104 | 0;
 i13 = i5 + 112 | 0;
 i14 = i5 + 120 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i15 = i2 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i1 + 4 | 0;
 HEAP32[i15 >> 2] = i3;
 if ((i3 | 0) == 0) {
  HEAP8[i1 + 8 | 0] = 0;
  HEAP8[i1 + 9 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 i2 = i3 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP8[i1 + 9 | 0] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i4) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i2 | 0;
 i16 = __ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i3) | 0;
 i17 = i2 | 0;
 L17 : do {
  if ((__ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i17, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 428 | 0) | 0) == 0) {
   do {
    if ((i16 | 0) != 0) {
     i18 = (HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0;
     i19 = i16 + 32 | 0;
     if (i18) {
      i20 = i19 | 0;
     } else {
      i20 = HEAP32[i19 >> 2] | 0;
     }
     if ((HEAP32[i20 >> 2] | 0) == 0) {
      break;
     }
     if (i18) {
      i21 = i19 | 0;
     } else {
      i21 = HEAP32[i19 >> 2] | 0;
     }
     i19 = HEAP32[i21 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 208 >> 2] & 31](i19) | 0) {
      i22 = 20;
      break L17;
     }
    }
   } while (0);
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 1, 1) | 0)) {
    i22 = 20;
    break;
   }
   __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, HEAP32[i15 >> 2] | 0);
  } else {
   i22 = 20;
  }
 } while (0);
 do {
  if ((i22 | 0) == 20) {
   __ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE(i6, i1, i3);
   i21 = i6 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, HEAP32[i15 >> 2] | 0);
    break;
   }
   i21 = i20 | 0;
   __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i8, i21);
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, i8);
   i16 = i7 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i8);
   __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i9, i19, 40, 0);
   __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, i21);
   __ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE(i1, i21);
   __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i20);
   i21 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore23BeforeTextInsertedEventC1ERKN3WTF6StringE(i21, i9);
   i16 = i10 | 0;
   i18 = i21;
   HEAP32[i16 >> 2] = i18;
   i23 = (i21 | 0) == 0;
   if (!i23) {
    i24 = i21 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   i24 = i11 | 0;
   HEAP32[i24 >> 2] = 0;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i17, i10, i24) | 0;
   i24 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i16 = i24 + 8 | 0;
     i25 = i16 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) != 0) {
      HEAP32[i25 >> 2] = i26;
      break;
     }
     i26 = i16 - 8 | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 7](i26);
    }
   } while (0);
   i24 = i21 + 52 | 0;
   i26 = i24;
   i16 = i9 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i16 >> 2] | 0, HEAP32[i24 >> 2] | 0) | 0) {
    if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 1, 1) | 0) {
     i27 = i20;
    } else {
     i22 = 31;
    }
   } else {
    i22 = 31;
   }
   do {
    if ((i22 | 0) == 31) {
     __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i20);
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i12, i4);
     i24 = i12 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     if ((i25 | 0) == 0) {
      i27 = i20;
      break;
     }
     __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i13, i25, i26);
     i24 = i13 | 0;
     i28 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     i29 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i28;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i30 = i28 | 0;
       i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i29 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i31 = i28 | 0;
       i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) == 0) {
      i32 = i20;
     } else {
      __ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE(i14, i1, i3);
      i29 = i14 | 0;
      i24 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = 0;
      i29 = i20 + 8 | 0;
      i28 = i29 - 8 | 0;
      i30 = i29 | 0;
      i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i31;
      do {
       if ((i31 | 0) < 1) {
        if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28);
       }
      } while (0);
      i28 = i24 | 0;
      __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, i28);
      __ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE(i1, i28);
      __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i24);
      i32 = i24;
     }
     i28 = i25 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      i27 = i32;
      break;
     } else {
      HEAP32[i28 >> 2] = i29;
      i27 = i32;
      break;
     }
    }
   } while (0);
   do {
    if (!i23) {
     i20 = i21 + 8 | 0;
     i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 7](i18);
      break;
     } else {
      HEAP32[i20 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if ((i27 | 0) == 0) {
    break;
   }
   i19 = i27 + 8 | 0;
   i16 = i19 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i27 = i2 + 8 | 0;
 i2 = i27 | 0;
 i32 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i32;
 if ((i32 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19ReplacementFragmentC1ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 88 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 104 | 0;
 i13 = i5 + 112 | 0;
 i14 = i5 + 120 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i15 = i2 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i1 + 4 | 0;
 HEAP32[i15 >> 2] = i3;
 if ((i3 | 0) == 0) {
  HEAP8[i1 + 8 | 0] = 0;
  HEAP8[i1 + 9 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 i2 = i3 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP8[i1 + 9 | 0] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i4) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i2 | 0;
 i16 = __ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i3) | 0;
 i17 = i2 | 0;
 L17 : do {
  if ((__ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i17, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 428 | 0) | 0) == 0) {
   do {
    if ((i16 | 0) != 0) {
     i18 = (HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0;
     i19 = i16 + 32 | 0;
     if (i18) {
      i20 = i19 | 0;
     } else {
      i20 = HEAP32[i19 >> 2] | 0;
     }
     if ((HEAP32[i20 >> 2] | 0) == 0) {
      break;
     }
     if (i18) {
      i21 = i19 | 0;
     } else {
      i21 = HEAP32[i19 >> 2] | 0;
     }
     i19 = HEAP32[i21 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 208 >> 2] & 31](i19) | 0) {
      i22 = 20;
      break L17;
     }
    }
   } while (0);
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 1, 1) | 0)) {
    i22 = 20;
    break;
   }
   __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, HEAP32[i15 >> 2] | 0);
  } else {
   i22 = 20;
  }
 } while (0);
 do {
  if ((i22 | 0) == 20) {
   __ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE(i6, i1, i3);
   i21 = i6 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, HEAP32[i15 >> 2] | 0);
    break;
   }
   i21 = i20 | 0;
   __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i8, i21);
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i7, i8);
   i16 = i7 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i8);
   __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i9, i19, 40, 0);
   __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, i21);
   __ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE(i1, i21);
   __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i20);
   i21 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore23BeforeTextInsertedEventC1ERKN3WTF6StringE(i21, i9);
   i16 = i10 | 0;
   i18 = i21;
   HEAP32[i16 >> 2] = i18;
   i23 = (i21 | 0) == 0;
   if (!i23) {
    i24 = i21 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   i24 = i11 | 0;
   HEAP32[i24 >> 2] = 0;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i17, i10, i24) | 0;
   i24 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i16 = i24 + 8 | 0;
     i25 = i16 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) != 0) {
      HEAP32[i25 >> 2] = i26;
      break;
     }
     i26 = i16 - 8 | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 7](i26);
    }
   } while (0);
   i24 = i21 + 52 | 0;
   i26 = i24;
   i16 = i9 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i16 >> 2] | 0, HEAP32[i24 >> 2] | 0) | 0) {
    if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 1, 1) | 0) {
     i27 = i20;
    } else {
     i22 = 31;
    }
   } else {
    i22 = 31;
   }
   do {
    if ((i22 | 0) == 31) {
     __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i20);
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i12, i4);
     i24 = i12 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     if ((i25 | 0) == 0) {
      i27 = i20;
      break;
     }
     __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i13, i25, i26);
     i24 = i13 | 0;
     i28 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     i29 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i28;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i30 = i28 | 0;
       i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i29 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i31 = i28 | 0;
       i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) == 0) {
      i32 = i20;
     } else {
      __ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE(i14, i1, i3);
      i29 = i14 | 0;
      i24 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = 0;
      i29 = i20 + 8 | 0;
      i28 = i29 - 8 | 0;
      i30 = i29 | 0;
      i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i31;
      do {
       if ((i31 | 0) < 1) {
        if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28);
       }
      } while (0);
      i28 = i24 | 0;
      __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, i28);
      __ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE(i1, i28);
      __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i24);
      i32 = i24;
     }
     i28 = i25 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      i27 = i32;
      break;
     } else {
      HEAP32[i28 >> 2] = i29;
      i27 = i32;
      break;
     }
    }
   } while (0);
   do {
    if (!i23) {
     i20 = i21 + 8 | 0;
     i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 7](i18);
      break;
     } else {
      HEAP32[i20 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i21 = i18 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if ((i27 | 0) == 0) {
    break;
   }
   i19 = i27 + 8 | 0;
   i16 = i19 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i27 = i2 + 8 | 0;
 i2 = i27 | 0;
 i32 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i32;
 if ((i32 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 8 | 0;
 HEAP8[i7] = 0;
 i8 = i1 + 9 | 0;
 HEAP8[i8] = 0;
 i9 = i2 + 12 | 0;
 L1 : do {
  if ((HEAP32[i9 >> 2] & 2 | 0) != 0) {
   i10 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i11 = i10;
   }
   L3 : while (1) {
    if (!(HEAP8[H_BASE + 232 | 0] | 0)) {
     i10 = __Znwj(4) | 0;
     __ZN3WTF6StringC1EPKc(i10, H_BASE + 8 | 0);
     HEAP32[H_BASE + 256 >> 2] = i10;
     HEAP8[H_BASE + 232 | 0] = 1;
    }
    i10 = i11 + 12 | 0;
    i12 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i12 & 4 | 0) == 0) {
      i13 = i12;
     } else {
      i14 = HEAP32[i11 + 44 >> 2] | 0;
      i15 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
      if ((i14 | 0) != (i15 | 0)) {
       if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
        i13 = i12;
        break;
       }
       if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
        i13 = i12;
        break;
       }
      }
      i15 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i11, __ZN7WebCore9HTMLNames9classAttrE) | 0;
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 >> 2] | 0, HEAP32[HEAP32[H_BASE + 256 >> 2] >> 2] | 0) | 0) {
       break L3;
      }
      i13 = HEAP32[i10 >> 2] | 0;
     }
    } while (0);
    if ((i13 & 2 | 0) == 0) {
     break L1;
    }
    i10 = HEAP32[i11 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L1;
    } else {
     i11 = i10;
    }
   }
   HEAP8[i7] = 1;
   i10 = i11 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i11) | 0;
   if ((i10 | 0) != 0) {
    i12 = i5 | 0;
    HEAP32[i12 >> 2] = 0;
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i10, i11, i12) | 0;
   }
   i12 = i11 + 8 | 0;
   i10 = i12 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i9 >> 2] & 2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i2 + 36 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i2 + 40 >> 2] | 0;
 L30 : do {
  if ((i5 | 0) != 0) {
   i2 = i5;
   L31 : while (1) {
    if (!(HEAP8[H_BASE + 232 | 0] | 0)) {
     i7 = __Znwj(4) | 0;
     __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
     HEAP32[H_BASE + 256 >> 2] = i7;
     HEAP8[H_BASE + 232 | 0] = 1;
    }
    i7 = i2 + 12 | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i13 & 4 | 0) == 0) {
      i16 = i13;
     } else {
      i12 = HEAP32[i2 + 44 >> 2] | 0;
      i15 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
      if ((i12 | 0) != (i15 | 0)) {
       if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
        i16 = i13;
        break;
       }
       if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
        i16 = i13;
        break;
       }
      }
      i15 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames9classAttrE) | 0;
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 >> 2] | 0, HEAP32[HEAP32[H_BASE + 256 >> 2] >> 2] | 0) | 0) {
       break L31;
      }
      i16 = HEAP32[i7 >> 2] | 0;
     }
    } while (0);
    if ((i16 & 2 | 0) == 0) {
     break L30;
    }
    i7 = HEAP32[i2 + 40 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L30;
    } else {
     i2 = i7;
    }
   }
   HEAP8[i8] = 1;
   i7 = i2 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i2) | 0;
   if ((i7 | 0) != 0) {
    i13 = i4 | 0;
    HEAP32[i13 >> 2] = 0;
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i7, i2, i13) | 0;
   }
   i13 = i2 + 8 | 0;
   i7 = i13 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i9 >> 2] & 2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 | 0;
 i4 = i9;
 while (1) {
  i9 = i4 + 12 | 0;
  if ((HEAP32[i9 >> 2] & 2 | 0) == 0) {
   i17 = 41;
  } else {
   i8 = HEAP32[i4 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i17 = 41;
   } else {
    i18 = i8;
    i17 = 42;
   }
  }
  do {
   if ((i17 | 0) == 41) {
    i17 = 0;
    i8 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i18 = i8;
     i17 = 42;
     break;
    }
    i8 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
    if ((i8 | 0) == 0) {
     i19 = 0;
     i20 = 1;
    } else {
     i21 = i8;
     i22 = 0;
     i17 = 44;
    }
   }
  } while (0);
  if ((i17 | 0) == 42) {
   i17 = 0;
   i21 = i18;
   i22 = (i18 | 0) == 0;
   i17 = 44;
  }
  if ((i17 | 0) == 44) {
   i17 = 0;
   i2 = i21 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i19 = i21;
   i20 = i22;
  }
  if (!(HEAP8[H_BASE + 216 | 0] | 0)) {
   i2 = __Znwj(4) | 0;
   __ZN3WTF6StringC1EPKc(i2, H_BASE + 72 | 0);
   HEAP32[H_BASE + 240 >> 2] = i2;
   HEAP8[H_BASE + 216 | 0] = 1;
  }
  do {
   if ((HEAP32[i9 >> 2] & 16 | 0) == 0) {
    i23 = i19;
   } else {
    i2 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames9classAttrE) | 0;
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[HEAP32[H_BASE + 240 >> 2] >> 2] | 0) | 0)) {
     i23 = i19;
     break;
    }
    i2 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i8 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
     if ((i8 | 0) == 0) {
      i24 = 0;
     } else {
      i25 = i8;
      i17 = 51;
     }
    } else {
     i25 = i2;
     i17 = 51;
    }
    if ((i17 | 0) == 51) {
     i17 = 0;
     i2 = i25 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     i24 = i25;
    }
    do {
     if (!i20) {
      i2 = i19 + 8 | 0;
      i8 = i2 | 0;
      i16 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      HEAP32[i8 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
     }
    } while (0);
    HEAP32[i11 >> 2] = i4;
    i2 = i4 + 8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    __ZN7WebCore19ReplacementFragment28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEE(i1, i6);
    i2 = HEAP32[i11 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i23 = i24;
     break;
    }
    i16 = i2 + 8 | 0;
    i2 = i16 | 0;
    i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     i23 = i24;
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     i23 = i24;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    i23 = i24;
   }
  } while (0);
  if ((i23 | 0) == 0) {
   break;
  }
  i9 = i23 + 8 | 0;
  i16 = i9 | 0;
  i8 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
  HEAP32[i16 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   i4 = i23;
   continue;
  }
  if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
   i4 = i23;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  i4 = i23;
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand11shouldMergeERKNS_15VisiblePositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 32 | 0;
 i8 = i1 + 48 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 i12 = i3 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  i11 = 0;
  STACKTOP = i1;
  return i11 | 0;
 }
 i13 = HEAP32[i10 + 8 >> 2] | 0;
 i14 = i2 + 4 | 0;
 i15 = i2 + 8 | 0;
 i2 = i10 + 8 | 0;
 i16 = i2 - 8 | 0;
 HEAP32[i2 >> 2] = i13;
 do {
  if ((i13 | 0) < 1) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16);
  }
 } while (0);
 i16 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i17 = i3 + 4 | 0;
   i18 = i3 + 8 | 0;
  } else {
   i2 = i16 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = i3 + 4 | 0;
   i13 = i3 + 8 | 0;
   i19 = i16 + 8 | 0;
   i20 = i19 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    i17 = i2;
    i18 = i13;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i17 = i2;
    i18 = i13;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i17 = i2;
   i18 = i13;
  }
 } while (0);
 i3 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i10, 1) | 0;
 i13 = i3 | 0;
 i2 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i16, 1) | 0;
 i19 = i6 | 0;
 i21 = HEAP32[i9 >> 2] | 0;
 HEAP32[i19 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i20 = i21 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i14 >> 2];
 i20 = HEAP32[i15 >> 2] | 0;
 i21 = i6 + 8 | 0;
 i22 = i21;
 i23 = HEAP32[i22 >> 2] & -8 | i20 & 7;
 HEAP32[i22 >> 2] = i23;
 HEAP8[i21] = i23 & 255 & -9 | i20 & 8;
 L20 : do {
  if ((__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i6, F_BASE_ii + 18 | 0, 1) | 0) != 0 | (i3 | 0) == 0) {
   i24 = 0;
  } else {
   i20 = i3 + 12 | 0;
   do {
    if ((HEAP32[i20 >> 2] & 4 | 0) != 0) {
     i23 = HEAP32[i13 + 44 >> 2] | 0;
     i21 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
     if ((i23 | 0) != (i21 | 0)) {
      if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i21 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i23 + 16 >> 2] | 0) != (HEAP32[i21 + 16 >> 2] | 0)) {
       break;
      }
     }
     if (!(__ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i13) | 0)) {
      i24 = 0;
      break L20;
     }
    }
   } while (0);
   i21 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i13) | 0;
   if ((i21 | 0) != (__ZN7WebCore18enclosingListChildEPNS_4NodeE(i16) | 0)) {
    i24 = 0;
    break;
   }
   i21 = i7 | 0;
   i23 = HEAP32[i9 >> 2] | 0;
   HEAP32[i21 >> 2] = i23;
   if ((i23 | 0) != 0) {
    i22 = i23 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   HEAP32[i7 + 4 >> 2] = HEAP32[i14 >> 2];
   i22 = HEAP32[i15 >> 2] | 0;
   i23 = i7 + 8 | 0;
   i25 = i23;
   i26 = HEAP32[i25 >> 2] & -8 | i22 & 7;
   HEAP32[i25 >> 2] = i26;
   HEAP8[i23] = i26 & 255 & -9 | i22 & 8;
   i22 = __ZN7WebCore18enclosingTableCellERKNS_8PositionE(i7) | 0;
   i26 = i8 | 0;
   i23 = HEAP32[i12 >> 2] | 0;
   HEAP32[i26 >> 2] = i23;
   if ((i23 | 0) != 0) {
    i25 = i23 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
   }
   HEAP32[i8 + 4 >> 2] = HEAP32[i17 >> 2];
   i25 = HEAP32[i18 >> 2] | 0;
   i23 = i8 + 8 | 0;
   i27 = i23;
   i28 = HEAP32[i27 >> 2] & -8 | i25 & 7;
   HEAP32[i27 >> 2] = i28;
   HEAP8[i23] = i28 & 255 & -9 | i25 & 8;
   L36 : do {
    if ((i22 | 0) == (__ZN7WebCore18enclosingTableCellERKNS_8PositionE(i8) | 0)) {
     do {
      if (__ZN7WebCoreL15isHeaderElementEPKNS_4NodeE(i13) | 0) {
       if ((i2 | 0) == 0) {
        i29 = 0;
        break L36;
       }
       if ((HEAP32[i20 >> 2] & 4 | 0) == 0) {
        i29 = 0;
        break L36;
       }
       if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
        i29 = 0;
        break L36;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 3](i4, i3);
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] & 3](i5, i2);
       i25 = i4 | 0;
       i28 = i5 | 0;
       i23 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i25 >> 2] | 0, HEAP32[i28 >> 2] | 0) | 0;
       i27 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i27 | 0) != 0) {
         i28 = i27 | 0;
         i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
         if ((i30 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i27);
          break;
         } else {
          HEAP32[i28 >> 2] = i30;
          break;
         }
        }
       } while (0);
       i27 = HEAP32[i25 >> 2] | 0;
       if ((i27 | 0) == 0) {
        if (i23) {
         break;
        } else {
         i29 = 0;
         break L36;
        }
       }
       i30 = i27 | 0;
       i28 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        if (i23) {
         break;
        } else {
         i29 = 0;
         break L36;
        }
       } else {
        HEAP32[i30 >> 2] = i28;
        if (i23) {
         break;
        } else {
         i29 = 0;
         break L36;
        }
       }
      }
     } while (0);
     if (__ZN7WebCore7isBlockEPKNS_4NodeE(i10) | 0) {
      i29 = 0;
      break;
     }
     i29 = (__ZN7WebCore7isBlockEPKNS_4NodeE(i16) | 0) ^ 1;
    } else {
     i29 = 0;
    }
   } while (0);
   i20 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i22 = i20 + 8 | 0;
     i28 = i22 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i21 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i24 = i29;
    break;
   }
   i26 = i20 + 8 | 0;
   i20 = i26 | 0;
   i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    i24 = i29;
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    i24 = i29;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
   i24 = i29;
  }
 } while (0);
 i29 = HEAP32[i19 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i11 = i24;
  STACKTOP = i1;
  return i11 | 0;
 }
 i19 = i29 + 8 | 0;
 i29 = i19 | 0;
 i16 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
 HEAP32[i29 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  i11 = i24;
  STACKTOP = i1;
  return i11 | 0;
 }
 if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
  i11 = i24;
  STACKTOP = i1;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
 i11 = i24;
 STACKTOP = i1;
 return i11 | 0;
}
function __ZN7WebCore23ReplaceSelectionCommand16shouldMergeStartEbbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 if ((HEAP8[i1 + 189 | 0] & 1) != 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i1 + 152 | 0, 1);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i9, i8, 1);
 i12 = i9 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i13 = 0;
  } else {
   L6 : do {
    if ((__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0) & i4) {
     i14 = HEAP32[i12 >> 2] | 0;
     i15 = (i14 | 0) == 0;
     if (!i15) {
      i16 = i14 + 8 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     i16 = HEAP32[i9 + 4 >> 2] | 0;
     i17 = HEAP32[i9 + 8 >> 2] | 0;
     __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i10, i1);
     i18 = i6 | 0;
     HEAP32[i18 >> 2] = i14;
     if (i15) {
      i19 = i6 + 8 | 0;
      i20 = 0;
      i21 = i19;
      i22 = i19;
     } else {
      i19 = i14 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      i19 = i6 + 8 | 0;
      i23 = i19;
      i20 = HEAP32[i23 >> 2] & -8;
      i21 = i19;
      i22 = i23;
     }
     HEAP32[i6 + 4 >> 2] = i16;
     i16 = i20 | i17 & 7;
     HEAP32[i22 >> 2] = i16;
     HEAP8[i21] = i16 & 255 & -9 | i17 & 8;
     i17 = i7 | 0;
     i16 = i10 | 0;
     i23 = HEAP32[i16 >> 2] | 0;
     HEAP32[i17 >> 2] = i23;
     if ((i23 | 0) != 0) {
      i19 = i23 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     HEAP32[i7 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i19 = HEAP32[i10 + 8 >> 2] | 0;
     i23 = i7 + 8 | 0;
     i24 = i23;
     i25 = HEAP32[i24 >> 2] & -8 | i19 & 7;
     HEAP32[i24 >> 2] = i25;
     HEAP8[i23] = i25 & 255 & -9 | i19 & 8;
     if ((__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i7, F_BASE_ii + 4 | 0, 0) | 0) == 0) {
      i26 = 0;
     } else {
      i19 = __ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE(i6) | 0;
      i26 = (i19 | 0) == (__ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE(i7) | 0);
     }
     i19 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i17 = i19 + 8 | 0;
       i25 = i17 | 0;
       i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     i19 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i17 = i19 + 8 | 0;
       i23 = i17 | 0;
       i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     i19 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i18 = i19 + 8 | 0;
       i17 = i18 | 0;
       i25 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       HEAP32[i17 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     do {
      if (!i15) {
       i19 = i14 + 8 | 0;
       i16 = i19 | 0;
       i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       if (i26) {
        i27 = 1;
        break L6;
       } else {
        i28 = 30;
        break L6;
       }
      }
     } while (0);
     if (i26) {
      i27 = 1;
     } else {
      i28 = 30;
     }
    } else {
     i28 = 30;
    }
   } while (0);
   do {
    if ((i28 | 0) == 30) {
     if (i2 | i3) {
      i27 = 0;
      break;
     }
     if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0)) {
      i27 = 0;
      break;
     }
     i14 = HEAP32[i8 >> 2] | 0;
     i15 = (i14 | 0) == 0;
     if (!i15) {
      i19 = i14 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     do {
      if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
       i28 = 38;
      } else {
       i19 = HEAP32[i14 + 44 >> 2] | 0;
       i18 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
       if ((i19 | 0) == (i18 | 0)) {
        i29 = 0;
        break;
       }
       if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i18 + 12 >> 2] | 0)) {
        i28 = 38;
        break;
       }
       if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
        i29 = 0;
       } else {
        i28 = 38;
       }
      }
     } while (0);
     if ((i28 | 0) == 38) {
      i29 = __ZN7WebCore23ReplaceSelectionCommand11shouldMergeERKNS_15VisiblePositionES3_(0, i8, i9) | 0;
     }
     if (i15) {
      i27 = i29;
      break;
     }
     i18 = i14 + 8 | 0;
     i19 = i18 | 0;
     i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      i27 = i29;
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      i27 = i29;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     i27 = i29;
    }
   } while (0);
   i18 = HEAP32[i12 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i13 = i27;
    break;
   }
   i16 = i18 + 8 | 0;
   i18 = i16 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    i13 = i27;
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    i13 = i27;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   i13 = i27;
  }
 } while (0);
 i27 = HEAP32[i8 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i11 = i13;
  STACKTOP = i5;
  return i11 | 0;
 }
 i8 = i27 + 8 | 0;
 i27 = i8 | 0;
 i12 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 HEAP32[i27 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  i11 = i13;
  STACKTOP = i5;
  return i11 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i11 = i13;
  STACKTOP = i5;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i11 = i13;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore23ReplaceSelectionCommand23completeHTMLReplacementERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 128 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 152 | 0, 1);
 i10 = i4 | 0;
 i11 = i5 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i10 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i13 = i4 + 8 | 0;
  i14 = 0;
  i15 = 0;
  i16 = i13;
  i17 = i13;
 } else {
  i13 = i12 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i13 = i4 + 8 | 0;
  i12 = i13;
  i14 = HEAP32[i12 >> 2] & -8;
  i15 = HEAP32[i11 >> 2] | 0;
  i16 = i13;
  i17 = i12;
 }
 i12 = i4 + 4 | 0;
 HEAP32[i12 >> 2] = HEAP32[i5 + 4 >> 2];
 i13 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = i14 | i13 & 7;
 HEAP32[i17 >> 2] = i5;
 HEAP8[i16] = i5 & 255 & -9 | i13 & 8;
 do {
  if ((i15 | 0) != 0) {
   i13 = i15 + 8 | 0;
   i5 = i13 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i7, i1);
 i15 = i6 | 0;
 i13 = i7 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i15 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i18 = 0;
 } else {
  i5 = i14 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i18 = HEAP32[i13 >> 2] | 0;
 }
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 + 4 >> 2];
 i5 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i6 + 8 | 0;
 i14 = i7;
 i11 = HEAP32[i14 >> 2] & -8 | i5 & 7;
 HEAP32[i14 >> 2] = i11;
 HEAP8[i7] = i11 & 255 & -9 | i5 & 8;
 do {
  if ((i18 | 0) != 0) {
   i5 = i18 + 8 | 0;
   i11 = i5 | 0;
   i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i18 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i20 = 27;
  } else {
   if ((HEAP32[i18 + 12 >> 2] & 256 | 0) == 0) {
    i20 = 27;
    break;
   }
   i5 = HEAP32[i15 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i20 = 27;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
    i20 = 27;
    break;
   }
   i5 = i1 | 0;
   __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i5, i4);
   __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i5, i6);
   if ((HEAP8[i1 + 182 | 0] & 1) != 0) {
    __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleERKNS_8PositionES6_NS_10EditActionE(i5, HEAP32[i1 + 176 >> 2] | 0, i4, i6, 14);
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i19 = i5 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i19 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = i5;
    do {
     if ((i19 | 0) != 0) {
      i5 = i19 + 8 | 0;
      i11 = i5 | 0;
      i21 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
     }
    } while (0);
    HEAP32[i13 >> 2] = HEAP32[i2 + 4 >> 2];
    i19 = HEAP32[i2 + 8 >> 2] | 0;
    i5 = HEAP32[i14 >> 2] & -8 | i19 & 7;
    HEAP32[i14 >> 2] = i5;
    HEAP8[i7] = i5 & 255 & -9 | i19 & 8;
   }
   __ZN7WebCore23ReplaceSelectionCommand28mergeTextNodesAroundPositionERNS_8PositionES2_(i1, i4, i6);
   __ZN7WebCore23ReplaceSelectionCommand28mergeTextNodesAroundPositionERNS_8PositionES2_(i1, i6, i4);
   i20 = 39;
  }
 } while (0);
 do {
  if ((i20 | 0) == 27) {
   i18 = HEAP32[i2 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = i18 + 8 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i18;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 + 8 | 0;
     i5 = i18 | 0;
     i21 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i2 + 4 >> 2];
   i19 = HEAP32[i2 + 8 >> 2] | 0;
   i18 = HEAP32[i14 >> 2] & -8 | i19 & 7;
   HEAP32[i14 >> 2] = i18;
   HEAP8[i7] = i18 & 255 & -9 | i19 & 8;
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 | 0) != 0) {
    i18 = i19 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i19;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 + 8 | 0;
     i21 = i19 | 0;
     i5 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = HEAP32[i17 >> 2] & -8 | i18 & 7;
   HEAP32[i17 >> 2] = i19;
   HEAP8[i16] = i19 & 255 & -9 | i18 & 8;
   i20 = 39;
  }
 } while (0);
 do {
  if ((i20 | 0) == 39) {
   i16 = i1 | 0;
   i17 = (HEAP8[i1 + 128 | 0] & 2) != 0;
   if ((HEAP8[i1 + 180 | 0] & 1) == 0) {
    __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i9, i6, 1, i17);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i16, i9);
    __ZN7WebCore16VisibleSelectionD2Ev(i9);
    break;
   } else {
    __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i8, i4, i6, 1, i17);
    __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i16, i8);
    __ZN7WebCore16VisibleSelectionD2Ev(i8);
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i15 = i8 + 8 | 0;
   i6 = i15 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i8 + 8 | 0;
 i8 = i10 | 0;
 i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand16handleStyleSpansERNS0_13InsertedNodesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i12 = i11;
 }
 while (1) {
  if (__ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE(i12) | 0) {
   break;
  }
  if ((HEAP32[i12 + 12 >> 2] & 2 | 0) != 0) {
   i11 = HEAP32[i12 + 36 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i11;
    continue;
   }
  }
  i11 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i11 | 0) != 0) {
   i12 = i11;
   continue;
  }
  i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i12) | 0;
  if ((i11 | 0) == 0) {
   i13 = 55;
   break;
  } else {
   i12 = i11;
  }
 }
 if ((i13 | 0) == 55) {
  STACKTOP = i3;
  return;
 }
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = HEAP32[i12 + 48 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i11 + 8 >> 2] | 0;
 }
 i11 = __ZN3WTF10fastMallocEj(16) | 0;
 i15 = i11;
 __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i15, i14);
 i14 = HEAP32[i12 + 16 >> 2] | 0;
 i16 = i14 | 0;
 do {
  if ((i14 | 0) == 0) {
   i13 = 16;
  } else {
   if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
    i13 = 16;
    break;
   }
   i17 = HEAP32[i16 + 44 >> 2] | 0;
   i18 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
   if ((i17 | 0) != (i18 | 0)) {
    if ((HEAP32[i17 + 12 >> 2] | 0) != (HEAP32[i18 + 12 >> 2] | 0)) {
     i13 = 16;
     break;
    }
    if ((HEAP32[i17 + 16 >> 2] | 0) != (HEAP32[i18 + 16 >> 2] | 0)) {
     i13 = 16;
     break;
    }
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i14, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 40 | 0) | 0) {
    i19 = i16;
   } else {
    i13 = 16;
   }
  }
 } while (0);
 do {
  if ((i13 | 0) == 16) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i5, i16);
   i18 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i5, F_BASE_ii + 4 | 0, 0) | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i19 = i18;
    break;
   }
   i20 = i17 + 8 | 0;
   i17 = i20 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    i19 = i18;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i19 = i18;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i19 = i18;
  }
 } while (0);
 if ((i19 | 0) == 0) {
  i22 = i14;
 } else {
  i22 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 692 >> 2] | 0;
 }
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i22 | 0);
 __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i15, i6, 1);
 i22 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i6 = i22 + 8 | 0;
   i14 = i6 | 0;
   i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12EditingStyle21removeBlockPropertiesEv(i15);
 do {
  if (__ZNK7WebCore12EditingStyle7isEmptyEv(i15) | 0) {
   i13 = 28;
  } else {
   if ((HEAP32[i12 + 36 >> 2] | 0) == 0) {
    i13 = 28;
    break;
   }
   i22 = i1 | 0;
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = i12;
   i19 = i12 + 8 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   __ZNK7WebCore15StyleProperties6asTextEv(i10, HEAP32[i11 + 4 >> 2] | 0);
   i19 = i10 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i5 = i4 | 0;
     HEAP32[i5 >> 2] = 0;
     i23 = i5;
    } else {
     if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i14);
      i23 = i4 | 0;
      break;
     } else {
      i5 = i4 | 0;
      HEAP32[i5 >> 2] = i14;
      i16 = i14 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
      i23 = i5;
      break;
     }
    }
   } while (0);
   i14 = i9 | 0;
   HEAP32[i14 >> 2] = HEAP32[i23 >> 2];
   __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i22, i8, __ZN7WebCore9HTMLNames9styleAttrE, i9);
   i5 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i14 = i5 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i14 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i22 = i5 | 0;
     i16 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i22 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i19 = i5 + 8 | 0;
   i5 = i19 | 0;
   i16 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 do {
  if ((i13 | 0) == 28) {
   __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE(i2, i12);
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i12;
   i8 = i12 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i7, 1);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   i8 = i9 | 0;
   i23 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i11;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i15);
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore23ReplaceSelectionCommand31removeUnrenderedTextNodesAtEndsERNS0_13InsertedNodesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
 i10 = __ZNK7WebCore4Node14lastDescendantEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 L1 : do {
  if ((i10 | 0) != 0) {
   i11 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i11 & 1 | 0) == 0) {
    break;
   }
   i12 = (i11 & 2048 | 0) == 0;
   i11 = i10 + 32 | 0;
   if (i12) {
    i13 = i11 | 0;
   } else {
    i13 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    if (i12) {
     i14 = i11 | 0;
    } else {
     i14 = HEAP32[i11 >> 2] | 0;
    }
    if (__ZNK7WebCore10RenderText15hasRenderedTextEv(HEAP32[i14 >> 2] | 0) | 0) {
     break;
    }
   }
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 31](i10) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i10);
    } else {
     i11 = i5 | 0;
     HEAP32[i11 >> 2] = i10;
     i12 = i10 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 1);
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i11 = i12 + 8 | 0;
     i12 = i11 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   do {
    if ((__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i6, __ZN7WebCore9HTMLNames9selectTagE) | 0) == 0) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 31](i10) | 0) {
       __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i7, i10);
      } else {
       i11 = i4 | 0;
       HEAP32[i11 >> 2] = i10;
       i15 = i10 + 8 | 0;
       HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i4, 1);
       i15 = HEAP32[i11 >> 2] | 0;
       if ((i15 | 0) == 0) {
        break;
       }
       i11 = i15 + 8 | 0;
       i15 = i11 | 0;
       i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
      }
     } while (0);
     i11 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames9scriptTagE) | 0) == 0;
     i12 = HEAP32[i7 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i16 = i11;
      break;
     }
     i15 = i12 + 8 | 0;
     i12 = i15 | 0;
     i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      i16 = i11;
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      i16 = i11;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     i16 = i11;
    } else {
     i16 = 0;
    }
   } while (0);
   i11 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i18 = 32;
    } else {
     i15 = i11 + 8 | 0;
     i17 = i15 | 0;
     i12 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      i18 = 32;
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      i18 = 32;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     if (!i16) {
      break L1;
     }
    }
   } while (0);
   if ((i18 | 0) == 32) {
    if (!i16) {
     break;
    }
   }
   __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE(i2, i10);
   i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i15 = i8 | 0;
   HEAP32[i15 >> 2] = i10;
   i12 = i10 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i11 & 3](i1 | 0, i8, 1);
   i11 = HEAP32[i15 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i15 = i11 + 8 | 0;
   i11 = i15 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i8 + 12 >> 2] | 0;
 if ((i10 & 1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = (i10 & 2048 | 0) == 0;
 i10 = i8 + 32 | 0;
 if (i16) {
  i19 = i10 | 0;
 } else {
  i19 = HEAP32[i10 >> 2] | 0;
 }
 do {
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   if (i16) {
    i20 = i10 | 0;
   } else {
    i20 = HEAP32[i10 >> 2] | 0;
   }
   if (!(__ZNK7WebCore10RenderText15hasRenderedTextEv(HEAP32[i20 >> 2] | 0) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE(i2, i8);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i20 = i9 | 0;
 HEAP32[i20 >> 2] = i8;
 i10 = i8 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 FUNCTION_TABLE_viii[i2 & 3](i1 | 0, i9, 1);
 i9 = HEAP32[i20 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i20 = i9 + 8 | 0;
 i9 = i20 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand19updateNodesInsertedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 152 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i2);
    } else {
     i9 = i5 | 0;
     HEAP32[i9 >> 2] = i2;
     i10 = i2 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 1);
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i9 = i10 + 8 | 0;
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i9 = i6 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
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
   HEAP32[i1 + 156 >> 2] = HEAP32[i6 + 4 >> 2];
   i10 = HEAP32[i6 + 8 >> 2] | 0;
   i11 = i1 + 160 | 0;
   i13 = i11;
   i12 = HEAP32[i13 >> 2] & -8 | i10 & 7;
   HEAP32[i13 >> 2] = i12;
   HEAP8[i11] = i12 & 255 & -9 | i10 & 8;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i12 = i10 + 8 | 0;
   i10 = i12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = __ZNK7WebCore4Node14lastDescendantEv(i2) | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i2 = i7 + 8 | 0;
   i8 = i2;
   i5 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i5 & -8;
   HEAP8[i2] = i5 & 255 & -16;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 132 >> 2] & 31](i6) | 0) {
    __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i7, i6);
    break;
   }
   i5 = i4 | 0;
   HEAP32[i5 >> 2] = i6;
   i2 = i6 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i4, 2);
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i5 = i2 + 8 | 0;
   i2 = i5 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i7 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 164 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 + 8 | 0;
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 168 >> 2] = HEAP32[i7 + 4 >> 2];
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i1 + 172 | 0;
 i1 = i7;
 i6 = HEAP32[i1 >> 2] & -8 | i8 & 7;
 HEAP32[i1 >> 2] = i6;
 HEAP8[i7] = i6 & 255 & -9 | i8 & 8;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i8 + 8 | 0;
 i8 = i4 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i1;
  return;
 } else {
  i5 = 0;
  i6 = 0;
  i7 = 0;
  i8 = i4;
 }
 L6 : while (1) {
  do {
   if (__ZN7WebCore14isNodeRenderedEPKNS_4NodeE(i8) | 0) {
    i9 = i7;
    i10 = i6;
    i11 = i5;
   } else {
    if (__ZN7WebCore20isTableStructureNodeEPKNS_4NodeE(i8) | 0) {
     i9 = i7;
     i10 = i6;
     i11 = i5;
     break;
    }
    if ((i5 | 0) != (i6 | 0)) {
     HEAP32[i7 + (i5 << 2) >> 2] = i8;
     i4 = i8 + 8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i9 = i7;
     i10 = i6;
     i11 = i5 + 1 | 0;
     break;
    }
    i4 = i6 + 1 | 0;
    i12 = i4 + (i6 >>> 2) | 0;
    i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
    i12 = i13 >>> 0 > i4 >>> 0 ? i13 : i4;
    do {
     if (i6 >>> 0 < i12 >>> 0) {
      if (i12 >>> 0 > 1073741823 >>> 0) {
       i14 = 11;
       break L6;
      }
      i13 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
      i15 = i13 >>> 2;
      i16 = __ZN3WTF10fastMallocEj(i13) | 0;
      i13 = i16;
      i17 = i7;
      _memcpy(i16 | 0, i17 | 0, i6 << 2) | 0;
      if ((i7 | 0) == 0) {
       i18 = i13;
       i19 = i15;
       break;
      }
      i16 = (i13 | 0) == (i7 | 0);
      __ZN3WTF8fastFreeEPv(i17);
      i18 = i16 ? 0 : i13;
      i19 = i16 ? 0 : i15;
     } else {
      i18 = i7;
      i19 = i6;
     }
    } while (0);
    HEAP32[i18 + (i6 << 2) >> 2] = i8;
    i12 = i8 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i9 = i18;
    i10 = i19;
    i11 = i4;
   }
  } while (0);
  if ((HEAP32[i8 + 12 >> 2] & 2 | 0) != 0) {
   i12 = HEAP32[i8 + 36 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i5 = i11;
    i6 = i10;
    i7 = i9;
    i8 = i12;
    continue;
   }
  }
  if ((i8 | 0) == (i2 | 0)) {
   break;
  }
  i12 = HEAP32[i8 + 28 >> 2] | 0;
  if ((i12 | 0) != 0) {
   i5 = i11;
   i6 = i10;
   i7 = i9;
   i8 = i12;
   continue;
  }
  i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i8, i2) | 0;
  if ((i12 | 0) == 0) {
   break;
  } else {
   i5 = i11;
   i6 = i10;
   i7 = i9;
   i8 = i12;
  }
 }
 if ((i14 | 0) == 11) {
  _WTFCrash();
 }
 i14 = (i11 | 0) == 0;
 do {
  if (!i14) {
   i8 = i3 | 0;
   i7 = 0;
   while (1) {
    i10 = HEAP32[i9 + (i7 << 2) >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i6 = i10 + 8 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
      i6 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i10) | 0;
      if ((i6 | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
       __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i6, i10, i8) | 0;
      }
      i6 = i10 + 8 | 0;
      i5 = i6 | 0;
      i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i2;
      if ((i2 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   if (i14) {
    break;
   }
   i7 = i9 + (i11 << 2) | 0;
   i8 = i9;
   while (1) {
    i10 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i4 = i10 + 8 | 0;
      i6 = i4 | 0;
      i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i2;
      if ((i2 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
     }
    } while (0);
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore19ReplacementFragment28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 24 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i6 = i2;
   i7 = i4;
  } else {
   i8 = i3 | 0;
   i9 = i1 + 16 | 0;
   i10 = i1 | 0;
   i11 = i2;
   while (1) {
    i12 = HEAP32[i11 + 36 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = i11;
     break;
    }
    i14 = i12 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    i14 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i12) | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i10 >> 2] = 0;
     __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i14, i12, i10) | 0;
    }
    i14 = i12 + 8 | 0;
    i15 = i14 - 8 | 0;
    i16 = i14 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i17;
    do {
     if ((i17 | 0) < 1) {
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15);
     }
    } while (0);
    i17 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i17 | 0) == 0) {
      i18 = 18;
     } else {
      i19 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i17) | 0;
      if ((i19 | 0) == 0) {
       i18 = 18;
       break;
      }
      HEAP32[i8 >> 2] = i12;
      HEAP32[i9 >> 2] = 0;
      __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i19, i3, i17, i9) | 0;
      i19 = HEAP32[i8 >> 2] | 0;
      if ((i19 | 0) == 0) {
       break;
      }
      i20 = i19 + 8 | 0;
      i19 = i20 | 0;
      i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     }
    } while (0);
    do {
     if ((i18 | 0) == 18) {
      i18 = 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15);
     }
    } while (0);
    i15 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i15 + 12 >> 2] & 2 | 0) == 0) {
     i13 = i15;
     break;
    } else {
     i11 = i15;
    }
   }
   HEAP32[i5 >> 2] = 0;
   if ((i13 | 0) != 0) {
    i6 = i13;
    i7 = i4;
    break;
   }
   STACKTOP = i1;
   return;
  }
 } while (0);
 i7 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i6) | 0;
 if ((i7 | 0) != 0) {
  i13 = i4 | 0;
  HEAP32[i13 >> 2] = 0;
  __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i7, i6, i13) | 0;
 }
 i13 = i6 + 8 | 0;
 i6 = i13 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 STACKTOP = i1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 6;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 6) {
    i25 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
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
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 2) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore23ReplaceSelectionCommand17shouldRemoveEndBREPNS_4NodeERKNS_15VisiblePositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 if ((i2 | 0) == 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i2;
 i11 = i2 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i5, 1);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i11 = i10 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, 1);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i10 = i7 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i8, i6, 0);
 i5 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i3) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 L22 : do {
  if (i5) {
   i12 = 0;
  } else {
   do {
    if ((HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 664 >> 2] | 0) != 2) {
     if (!(__ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i6) | 0)) {
      break;
     }
     if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, 1) | 0)) {
      i12 = 1;
      break L22;
     }
    }
   } while (0);
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, 1) | 0)) {
    i12 = 0;
    break;
   }
   i12 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, 1) | 0;
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 }
 i6 = i1 + 8 | 0;
 i1 = i6 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i9 = i12;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i7 = (i3 >>> 30) + ~i9 | 0;
 i3 = i7 << 12 ^ i7;
 i7 = i3 >>> 7 ^ i3;
 i3 = i7 << 2 ^ i7;
 i7 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i7 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i3 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i3 | 0)) {
  i19 = i18;
  i20 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i3 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i3 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
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
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCoreL15isHeaderElementEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i3) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZN7WebCore23ReplaceSelectionCommand14shouldMergeEndEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i4, i1);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i5, i4, 1);
 i1 = i5 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i6 = 0;
  } else {
   do {
    if (i2) {
     i7 = 0;
    } else {
     if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0)) {
      i7 = 0;
      break;
     }
     i8 = HEAP32[i4 >> 2] | 0;
     i9 = (i8 | 0) == 0;
     if (!i9) {
      i10 = i8 + 8 | 0;
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     }
     do {
      if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
       i11 = 10;
      } else {
       i10 = HEAP32[i8 + 44 >> 2] | 0;
       i12 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
       if ((i10 | 0) == (i12 | 0)) {
        i13 = 0;
        break;
       }
       if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
        i11 = 10;
        break;
       }
       if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
        i13 = 0;
       } else {
        i11 = 10;
       }
      }
     } while (0);
     if ((i11 | 0) == 10) {
      i13 = __ZN7WebCore23ReplaceSelectionCommand11shouldMergeERKNS_15VisiblePositionES3_(0, i4, i5) | 0;
     }
     if (i9) {
      i7 = i13;
      break;
     }
     i12 = i8 + 8 | 0;
     i10 = i12 | 0;
     i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      i7 = i13;
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      i7 = i13;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     i7 = i13;
    }
   } while (0);
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i6 = i7;
    break;
   }
   i14 = i12 + 8 | 0;
   i12 = i14 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    i6 = i7;
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i6 = i7;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i6 = i7;
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i7 + 8 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 164 | 0;
 i7 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i6, __ZN7WebCore9HTMLNames9selectTagE) | 0;
 if ((i7 | 0) == 0) {
  i8 = i5 | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i8 >> 2] = i9;
  if ((i9 | 0) == 0) {
   i6 = i5 + 8 | 0;
   i10 = 0;
   i11 = i6;
   i12 = i6;
  } else {
   i6 = i9 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = i5 + 8 | 0;
   i9 = i6;
   i10 = HEAP32[i9 >> 2] & -8;
   i11 = i6;
   i12 = i9;
  }
  HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 168 >> 2];
  i9 = HEAP32[i2 + 172 >> 2] | 0;
  i2 = i10 | i9 & 7;
  HEAP32[i12 >> 2] = i2;
  HEAP8[i11] = i2 & 255 & -9 | i9 & 8;
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i5, 1);
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i9 + 8 | 0;
  i9 = i8 | 0;
  i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  HEAP32[i9 >> 2] = i2;
  if ((i2 | 0) >= 1) {
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
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 132 >> 2] & 31](i7) | 0) {
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i5, i7);
  } else {
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i7;
   i2 = i7 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i5, i4, 2);
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i8 = i2 + 8 | 0;
   i2 = i8 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i5, 1);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
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
function __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
   if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
    i4 = 4;
   } else {
    i5 = HEAP32[i2 + 36 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i4 = 4;
    } else {
     i6 = i5;
     i4 = 6;
    }
   }
   do {
    if ((i4 | 0) == 4) {
     i5 = HEAP32[i2 + 28 >> 2] | 0;
     if ((i5 | 0) != 0) {
      i6 = i5;
      i4 = 6;
      break;
     }
     i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
     if ((i5 | 0) == 0) {
      i7 = 0;
     } else {
      i6 = i5;
      i4 = 6;
     }
    }
   } while (0);
   if ((i4 | 0) == 6) {
    i5 = i6 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i7 = i6;
   }
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   i8 = i5 + 8 | 0;
   i5 = i8 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i7 = i1 + 4 | 0;
 if ((HEAP32[i7 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
  i4 = 14;
 } else {
  i1 = HEAP32[i2 + 40 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 14;
  } else {
   i10 = i1;
   i4 = 16;
  }
 }
 do {
  if ((i4 | 0) == 14) {
   i1 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i1 | 0) != 0) {
    i10 = i1;
    i4 = 16;
    break;
   }
   i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
   if ((i1 | 0) == 0) {
    i11 = 0;
   } else {
    i10 = i1;
    i4 = 16;
   }
  }
 } while (0);
 if ((i4 | 0) == 16) {
  i4 = i10 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i11 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i11;
 if ((i10 | 0) == 0) {
  return;
 }
 i11 = i10 + 8 | 0;
 i10 = i11 | 0;
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 return;
}
function __ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i2 | 0;
  i9 = i3 + 8 | 0;
  i10 = i1 + 4 | 0;
  i1 = i5 | 0;
  i11 = i3 + 24 | 0;
  i12 = i7;
  while (1) {
   i7 = i12 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i8, i12, i9) | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   HEAP32[i11 >> 2] = 0;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i13, i5, i11) | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i7 = i13 + 8 | 0;
     i14 = i7 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i13 = i12 + 8 | 0;
   i7 = i13 - 8 | 0;
   i15 = i13 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i14;
   do {
    if ((i14 | 0) < 1) {
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7);
    }
   } while (0);
   i12 = HEAP32[i6 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
  }
 }
 i12 = i2 | 0;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i12) | 0;
 if ((i6 | 0) != 0) {
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i6, i12, i1) | 0;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) == (i2 | 0);
 if ((HEAP32[i3 >> 2] | 0) != (i2 | 0)) {
  if (!i1) {
   return;
  }
  i5 = __ZN7WebCore13NodeTraversal24previousSkippingChildrenEPKNS_4NodeES3_(i2, 0) | 0;
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  if ((i6 | 0) == 0) {
   return;
  }
  i5 = i6 + 8 | 0;
  i6 = i5 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  return;
 }
 if (!i1) {
  i1 = HEAP32[i2 + 28 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
   if ((i5 | 0) == 0) {
    i8 = 0;
   } else {
    i9 = i5;
    i10 = 13;
   }
  } else {
   i9 = i1;
   i10 = 13;
  }
  if ((i10 | 0) == 13) {
   i10 = i9 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i8 = i9;
  }
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  if ((i9 | 0) == 0) {
   return;
  }
  i8 = i9 + 8 | 0;
  i9 = i8 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  HEAP32[i9 >> 2] = i10;
  if ((i10 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  return;
 }
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i8 = i3 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 return;
}
function __ZNK7WebCore23ReplaceSelectionCommand25shouldPerformSmartReplaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 if ((HEAP8[i1 + 181 | 0] & 1) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 152 | 0, 1);
 i1 = i3 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i3 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i3 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i7 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i9 | i7 & 7;
 HEAP32[i11 >> 2] = i4;
 HEAP8[i10] = i4 & 255 & -9 | i7 & 8;
 i7 = __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i3) | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i4 = i1 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i1 = i6 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if (__ZNK7WebCore16HTMLInputElement15isPasswordFieldEv(i7) | 0) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 i5 = 1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i2 | 0;
 __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i5, HEAP32[i9 >> 2] | 0);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i5 | 0;
 i11 = i6 | 0;
 i12 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i2 = i12 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i4 + 16 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i5 | 0, i6, i2) | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 + 8 | 0;
   i6 = i11 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i11 = i5 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i3, i7, i11) | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 + 8 | 0;
   i7 = i2 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i9 >> 2] | 0);
 HEAP32[i1 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
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
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
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
function __ZN7WebCore23ReplaceSelectionCommandD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = HEAP32[i1 + 184 >> 2] | 0;
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
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore20CompositeEditCommandD2Ev(i6);
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
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
function __ZN7WebCore23ReplaceSelectionCommandC2ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 144;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 i2 = i1 + 160 | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -8;
 HEAP8[i2] = i7 & 255 & -16;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 i7 = i1 + 172 | 0;
 i2 = i7;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 & -8;
 HEAP8[i7] = i6 & 255 & -16;
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP8[i1 + 180 | 0] = i4 & 1;
 HEAP8[i1 + 181 | 0] = i4 >>> 1 & 1;
 HEAP8[i1 + 182 | 0] = i4 >>> 2 & 1;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 184 >> 2] = i3;
 HEAP8[i1 + 188 | 0] = i4 >>> 3 & 1;
 HEAP8[i1 + 189 | 0] = i4 >>> 4 & 1;
 HEAP32[i1 + 192 >> 2] = i5;
 HEAP8[i1 + 196 | 0] = i4 >>> 5 & 1;
 HEAP8[i1 + 197 | 0] = 0;
 return;
}
function __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 144;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 i2 = i1 + 160 | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -8;
 HEAP8[i2] = i7 & 255 & -16;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 i7 = i1 + 172 | 0;
 i2 = i7;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 & -8;
 HEAP8[i7] = i6 & 255 & -16;
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP8[i1 + 180 | 0] = i4 & 1;
 HEAP8[i1 + 181 | 0] = i4 >>> 1 & 1;
 HEAP8[i1 + 182 | 0] = i4 >>> 2 & 1;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 184 >> 2] = i3;
 HEAP8[i1 + 188 | 0] = i4 >>> 3 & 1;
 HEAP8[i1 + 189 | 0] = i4 >>> 4 & 1;
 HEAP32[i1 + 192 >> 2] = i5;
 HEAP8[i1 + 196 | 0] = i4 >>> 5 & 1;
 HEAP8[i1 + 197 | 0] = 0;
 return;
}
function __ZN7WebCore19ReplacementFragment16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 i5 = i2 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0 | (i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i2 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i3) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i2, i4, i3, i7) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i1;
 return;
}
function __ZN7WebCoreL21isInlineNodeWithStyleEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (__ZN7WebCore7isBlockEPKNS_4NodeE(i1) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames9classAttrE) | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 96 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZN7WebCore12EditingStyle35elementIsStyledSpanOrHTMLEquivalentEPKNS_11HTMLElementE(i1) | 0;
 return i2 | 0;
}
function __ZN7WebCoreL26isMailPasteAsQuotationNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i2 = 0;
    return i2 | 0;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 40 | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore19ReplacementFragment10removeNodeEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i4 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i2) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i4, i2, i3) | 0;
 STACKTOP = i1;
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
function __ZNK7WebCore19ReplacementFragment7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 9 | 0] & 1) == 0;
 return i3 | 0;
}
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore19ReplacementFragment10firstChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore19ReplacementFragment9lastChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore23ReplaceSelectionCommand32positionAtStartOfInsertedContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 152 | 0, 1);
 return;
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function ii___ZN7WebCore20isTableStructureNodeEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20isTableStructureNodeEPKNS_4NodeE(i1 | 0) | 0;
}
function __ZN7WebCore23ReplaceSelectionCommandD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23ReplaceSelectionCommandD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZN7WebCore23ReplaceSelectionCommandD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23ReplaceSelectionCommandD2Ev(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore23ReplaceSelectionCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 192 >> 2] | 0;
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
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore23ReplaceSelectionCommandC2ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore23ReplaceSelectionCommandD0Ev,b1,__ZN7WebCore23ReplaceSelectionCommand7doApplyEv,b1,__ZN7WebCore23ReplaceSelectionCommandD1Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCoreL21isInlineNodeWithStyleEPKNS_4NodeE,b3,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore23ReplaceSelectionCommand13editingActionEv,b3,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,__ZN7WebCoreL26isMailPasteAsQuotationNodeEPKNS_4NodeE,b3,__ZN7WebCoreL15isHeaderElementEPKNS_4NodeE,b3,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b3,ii___ZN7WebCore20isTableStructureNodeEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv
  ,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7,__ZN7WebCore19ReplacementFragmentC2ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames7mainTagE": __ZN7WebCore9HTMLNames7mainTagE, "__ZN7WebCore9HTMLNames9footerTagE": __ZN7WebCore9HTMLNames9footerTagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames19contenteditableAttrE": __ZN7WebCore9HTMLNames19contenteditableAttrE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore9HTMLNames10sectionTagE": __ZN7WebCore9HTMLNames10sectionTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames13figcaptionTagE": __ZN7WebCore9HTMLNames13figcaptionTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames10addressTagE": __ZN7WebCore9HTMLNames10addressTagE, "__ZN7WebCore9HTMLNames9figureTagE": __ZN7WebCore9HTMLNames9figureTagE, "__ZN7WebCore9HTMLNames6dirTagE": __ZN7WebCore9HTMLNames6dirTagE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames10captionTagE": __ZN7WebCore9HTMLNames10captionTagE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames8asideTagE": __ZN7WebCore9HTMLNames8asideTagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames10articleTagE": __ZN7WebCore9HTMLNames10articleTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames9hgroupTagE": __ZN7WebCore9HTMLNames9hgroupTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames11fieldsetTagE": __ZN7WebCore9HTMLNames11fieldsetTagE, "__ZN7WebCore9HTMLNames9headerTagE": __ZN7WebCore9HTMLNames9headerTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore9HTMLNames7menuTagE": __ZN7WebCore9HTMLNames7menuTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames10summaryTagE": __ZN7WebCore9HTMLNames10summaryTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames10detailsTagE": __ZN7WebCore9HTMLNames10detailsTagE, "__ZN7WebCore9HTMLNames6navTagE": __ZN7WebCore9HTMLNames6navTagE, "__ZN7WebCore9HTMLNames9centerTagE": __ZN7WebCore9HTMLNames9centerTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL21isInlineNodeWithStyleEPKNS_4NodeE","__ZN7WebCore19ReplacementFragment21removeUnrenderedNodesEPNS_4NodeE","_strlen","__ZN7WebCore19ReplacementFragment28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore23ReplaceSelectionCommand16shouldMergeStartEbbb","__ZNK7WebCore23ReplaceSelectionCommand13editingActionEv","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore23ReplaceSelectionCommand23completeHTMLReplacementERKNS_8PositionE","__ZN7WebCore23ReplaceSelectionCommandD2Ev","__ZNK7WebCore23ReplaceSelectionCommand30positionAtEndOfInsertedContentEv","__ZN7WebCore23ReplaceSelectionCommand13InsertedNodes32willRemoveNodePreservingChildrenEPNS_4NodeE","__ZN7WebCore23ReplaceSelectionCommand17shouldRemoveEndBREPNS_4NodeERKNS_15VisiblePositionE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore23ReplaceSelectionCommandD0Ev","__ZN7WebCore23ReplaceSelectionCommand28mergeTextNodesAroundPositionERNS_8PositionES2_","__ZN7WebCore23ReplaceSelectionCommand16mergeEndIfNeededEv","__ZN7WebCore23ReplaceSelectionCommand14shouldMergeEndEb","__ZN7WebCore23ReplaceSelectionCommand31removeUnrenderedTextNodesAtEndsERNS0_13InsertedNodesE","__ZN7WebCore23ReplaceSelectionCommand19updateNodesInsertedEPNS_4NodeE","__ZNK7WebCore19ReplacementFragment9lastChildEv","__ZN7WebCore23ReplaceSelectionCommand7doApplyEv","_memcpy","__ZN7WebCore23ReplaceSelectionCommand24addSpacesForSmartReplaceEv","__ZN7WebCore23ReplaceSelectionCommand21moveNodeOutOfAncestorEN3WTF10PassRefPtrINS_4NodeEEES4_","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZNK7WebCore23ReplaceSelectionCommand32positionAtStartOfInsertedContentEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore23ReplaceSelectionCommandD1Ev","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore23ReplaceSelectionCommandC2ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZN7WebCore23ReplaceSelectionCommand52makeInsertedContentRoundTrippableWithHTMLTreeBuilderERNS0_13InsertedNodesE","__ZN7WebCore23ReplaceSelectionCommand11shouldMergeERKNS_15VisiblePositionES3_","__ZN7WebCore19ReplacementFragmentC2ERNS_8DocumentEPNS_16DocumentFragmentERKNS_16VisibleSelectionE","__ZN7WebCore19ReplacementFragment30insertFragmentForTestRenderingEPNS_4NodeE","__ZN7WebCore23ReplaceSelectionCommand21performTrivialReplaceERKNS_19ReplacementFragmentE","__ZN7WebCoreL15isHeaderElementEPKNS_4NodeE","__ZN7WebCore23ReplaceSelectionCommand13InsertedNodes14willRemoveNodeEPNS_4NodeE","__ZN7WebCore23ReplaceSelectionCommand17insertAsListItemsEN3WTF10PassRefPtrINS_11HTMLElementEEEPNS_4NodeERKNS_8PositionERNS0_13InsertedNodesE","__ZN7WebCore23ReplaceSelectionCommand43removeRedundantStylesAndKeepStyleSpanInlineERNS0_13InsertedNodesE","__ZN7WebCore19ReplacementFragment16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore23ReplaceSelectionCommand16handleStyleSpansERNS0_13InsertedNodesE","__ZNK7WebCore19ReplacementFragment7isEmptyEv","__ZNK7WebCore23ReplaceSelectionCommand25shouldPerformSmartReplaceEv","__ZN7WebCore19ReplacementFragment44restoreAndRemoveTestRenderingNodesToFragmentEPNS_13StyledElementE","_memset","__ZN7WebCoreL26isMailPasteAsQuotationNodeEPKNS_4NodeE","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN3WTF9HashTableINS_12AtomicStringES1_NS_17IdentityExtractorENS_16AtomicStringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZNK7WebCore19ReplacementFragment10firstChildEv","__ZN7WebCore19ReplacementFragment10removeNodeEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore19ReplacementFragment22removeInterchangeNodesEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE;
var __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE;
var __ZN7WebCore15HTMLTreeBuilderD1Ev;
var __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC1Ev;
var __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC1ERNS_16DocumentFragmentEPNS_7ElementE;
var __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextD1Ev;
/* memory initializer */ allocate([120,109,108,110,115,58,120,108,105,110,107,0,0,0,0,0,104,105,100,100,101,110,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames9footerTagE=env.__ZN7WebCore9HTMLNames9footerTagE|0;
  var __ZN7WebCore9HTMLNames9figureTagE=env.__ZN7WebCore9HTMLNames9figureTagE|0;
  var __ZN7WebCore9HTMLNames10sectionTagE=env.__ZN7WebCore9HTMLNames10sectionTagE|0;
  var __ZN7WebCore9HTMLNames10addressTagE=env.__ZN7WebCore9HTMLNames10addressTagE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames10actionAttrE=env.__ZN7WebCore9HTMLNames10actionAttrE|0;
  var __ZN7WebCore11MathMLNames8mtextTagE=env.__ZN7WebCore11MathMLNames8mtextTagE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames10summaryTagE=env.__ZN7WebCore9HTMLNames10summaryTagE|0;
  var __ZN7WebCore9HTMLNames4sTagE=env.__ZN7WebCore9HTMLNames4sTagE|0;
  var __ZN7WebCore9HTMLNames7nobrTagE=env.__ZN7WebCore9HTMLNames7nobrTagE|0;
  var __ZN7WebCore11MathMLNames18mathmlNamespaceURIE=env.__ZN7WebCore11MathMLNames18mathmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames10isindexTagE=env.__ZN7WebCore9HTMLNames10isindexTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames7menuTagE=env.__ZN7WebCore9HTMLNames7menuTagE|0;
  var __ZN7WebCore8SVGNames16foreignObjectTagE=env.__ZN7WebCore8SVGNames16foreignObjectTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
  var __ZN7WebCore9HTMLNames8faceAttrE=env.__ZN7WebCore9HTMLNames8faceAttrE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames7fontTagE=env.__ZN7WebCore9HTMLNames7fontTagE|0;
  var __ZN7WebCore9HTMLNames10detailsTagE=env.__ZN7WebCore9HTMLNames10detailsTagE|0;
  var __ZN7WebCore9HTMLNames4bTagE=env.__ZN7WebCore9HTMLNames4bTagE|0;
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore11MathMLNames13malignmarkTagE=env.__ZN7WebCore11MathMLNames13malignmarkTagE|0;
  var __ZN7WebCore9HTMLNames6supTagE=env.__ZN7WebCore9HTMLNames6supTagE|0;
  var __ZN7WebCore9HTMLNames8imageTagE=env.__ZN7WebCore9HTMLNames8imageTagE|0;
  var __ZN7WebCore9HTMLNames11fieldsetTagE=env.__ZN7WebCore9HTMLNames11fieldsetTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames7codeTagE=env.__ZN7WebCore9HTMLNames7codeTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames6varTagE=env.__ZN7WebCore9HTMLNames6varTagE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var __ZN7WebCore9HTMLNames10captionTagE=env.__ZN7WebCore9HTMLNames10captionTagE|0;
  var __ZN7WebCore9HTMLNames9strongTagE=env.__ZN7WebCore9HTMLNames9strongTagE|0;
  var __ZN7WebCore9HTMLNames8asideTagE=env.__ZN7WebCore9HTMLNames8asideTagE|0;
  var __ZN7WebCore11MathMLNames5moTagE=env.__ZN7WebCore11MathMLNames5moTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames9keygenTagE=env.__ZN7WebCore9HTMLNames9keygenTagE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore8SVGNames15svgNamespaceURIE=env.__ZN7WebCore8SVGNames15svgNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames6wbrTagE=env.__ZN7WebCore9HTMLNames6wbrTagE|0;
  var __ZN7WebCore9HTMLNames9strikeTagE=env.__ZN7WebCore9HTMLNames9strikeTagE|0;
  var __ZN7WebCore9HTMLNames8smallTagE=env.__ZN7WebCore9HTMLNames8smallTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames10marqueeTagE=env.__ZN7WebCore9HTMLNames10marqueeTagE|0;
  var __ZN7WebCore9HTMLNames4uTagE=env.__ZN7WebCore9HTMLNames4uTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames10bgsoundTagE=env.__ZN7WebCore9HTMLNames10bgsoundTagE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames4iTagE=env.__ZN7WebCore9HTMLNames4iTagE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore9HTMLNames9centerTagE=env.__ZN7WebCore9HTMLNames9centerTagE|0;
  var __ZN7WebCore11MathMLNames17annotation_xmlTagE=env.__ZN7WebCore11MathMLNames17annotation_xmlTagE|0;
  var __ZN7WebCore11MathMLNames5mnTagE=env.__ZN7WebCore11MathMLNames5mnTagE|0;
  var __ZN7WebCore9HTMLNames9sourceTagE=env.__ZN7WebCore9HTMLNames9sourceTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames5emTagE=env.__ZN7WebCore9HTMLNames5emTagE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN7WebCore11MathMLNames5miTagE=env.__ZN7WebCore11MathMLNames5miTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames7rubyTagE=env.__ZN7WebCore9HTMLNames7rubyTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore8SVGNames7descTagE=env.__ZN7WebCore8SVGNames7descTagE|0;
  var __ZN7WebCore9HTMLNames6navTagE=env.__ZN7WebCore9HTMLNames6navTagE|0;
  var __ZN7WebCore11MathMLNames7mathTagE=env.__ZN7WebCore11MathMLNames7mathTagE|0;
  var __ZN7WebCore9HTMLNames6dirTagE=env.__ZN7WebCore9HTMLNames6dirTagE|0;
  var __ZN7WebCore8SVGNames9scriptTagE=env.__ZN7WebCore8SVGNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE=env.__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore9HTMLNames8sizeAttrE=env.__ZN7WebCore9HTMLNames8sizeAttrE|0;
  var __ZN7WebCore9HTMLNames10articleTagE=env.__ZN7WebCore9HTMLNames10articleTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore10XMLNSNames9xmlnsAttrE=env.__ZN7WebCore10XMLNSNames9xmlnsAttrE|0;
  var __ZN7WebCore11MathMLNames5msTagE=env.__ZN7WebCore11MathMLNames5msTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames5ttTagE=env.__ZN7WebCore9HTMLNames5ttTagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore9HTMLNames6subTagE=env.__ZN7WebCore9HTMLNames6subTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore8SVGNames8titleTagE=env.__ZN7WebCore8SVGNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames9colorAttrE=env.__ZN7WebCore9HTMLNames9colorAttrE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames11noframesTagE=env.__ZN7WebCore9HTMLNames11noframesTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames13figcaptionTagE=env.__ZN7WebCore9HTMLNames13figcaptionTagE|0;
  var __ZN7WebCore9HTMLNames8trackTagE=env.__ZN7WebCore9HTMLNames8trackTagE|0;
  var __ZN7WebCore9HTMLNames7mainTagE=env.__ZN7WebCore9HTMLNames7mainTagE|0;
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames10commandTagE=env.__ZN7WebCore9HTMLNames10commandTagE|0;
  var __ZN7WebCore9HTMLNames10promptAttrE=env.__ZN7WebCore9HTMLNames10promptAttrE|0;
  var __ZN7WebCore11MathMLNames9mglyphTagE=env.__ZN7WebCore11MathMLNames9mglyphTagE|0;
  var __ZN3WTF7xmlAtomE=env.__ZN3WTF7xmlAtomE|0;
  var __ZN7WebCore9HTMLNames11basefontTagE=env.__ZN7WebCore9HTMLNames11basefontTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames9hgroupTagE=env.__ZN7WebCore9HTMLNames9hgroupTagE|0;
  var __ZN3WTF9xlinkAtomE=env.__ZN3WTF9xlinkAtomE|0;
  var __ZN7WebCore9HTMLNames5rtTagE=env.__ZN7WebCore9HTMLNames5rtTagE|0;
  var __ZN7WebCore9HTMLNames8paramTagE=env.__ZN7WebCore9HTMLNames8paramTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore9HTMLNames9headerTagE=env.__ZN7WebCore9HTMLNames9headerTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames6bigTagE=env.__ZN7WebCore9HTMLNames6bigTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames8labelTagE=env.__ZN7WebCore9HTMLNames8labelTagE|0;
  var __ZN7WebCore9HTMLNames5rpTagE=env.__ZN7WebCore9HTMLNames5rpTagE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
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
function __ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  STACKTOP = i3;
  return;
 }
 do {
  if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10bgsoundTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10commandTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i9 = i1 + 28 | 0;
    if (!(__ZNK7WebCore16HTMLElementStack30secondElementIsHTMLBodyElementEv(i9) | 0)) {
     STACKTOP = i3;
     return;
    }
    if (__ZNK7WebCore16HTMLElementStack17hasOnlyOneElementEv(i9) | 0) {
     STACKTOP = i3;
     return;
    }
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i9) | 0) {
     STACKTOP = i3;
     return;
    }
    HEAP8[i1 | 0] = 0;
    __ZN7WebCore20HTMLConstructionSite28insertHTMLBodyStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i9 = i1 + 28 | 0;
    if (!(__ZNK7WebCore16HTMLElementStack30secondElementIsHTMLBodyElementEv(i9) | 0)) {
     STACKTOP = i3;
     return;
    }
    if (__ZNK7WebCore16HTMLElementStack17hasOnlyOneElementEv(i9) | 0) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP8[i1 | 0] & 1) == 0) {
     STACKTOP = i3;
     return;
    }
    i10 = __ZNK7WebCore16HTMLElementStack11bodyElementEv(i9) | 0;
    i11 = i4 | 0;
    HEAP32[i11 >> 2] = 0;
    __ZN7WebCore4Node6removeERi(i10, i11);
    __ZN7WebCore16HTMLElementStack8popUntilEPNS_7ElementE(i9, __ZNK7WebCore16HTMLElementStack11bodyElementEv(i9) | 0);
    __ZN7WebCore16HTMLElementStack18popHTMLBodyElementEv(i9);
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    HEAP32[i1 + 104 >> 2] = 19;
    STACKTOP = i3;
    return;
   }
   do {
    if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10articleTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8asideTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9centerTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10detailsTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6dirTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11fieldsetTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13figcaptionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9figureTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9footerTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9headerTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9hgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7mainTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6navTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10sectionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10summaryTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     do {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0) + 12 >> 2] | 0) != (i8 | 0)) {
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
        break;
       }
       do {
        if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 >> 2] | 0)) {
         if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0) + 12 >> 2] | 0)) {
          break;
         }
         if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
          i9 = i1 + 12 | 0;
          do {
           if ((HEAP32[i1 + 24 >> 2] | 0) != 0) {
            if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
             break;
            }
            STACKTOP = i3;
            return;
           }
          } while (0);
          __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
          __ZN7WebCore20HTMLConstructionSite21insertHTMLFormElementEPNS_15AtomicHTMLTokenEb(i9, i2, 0);
          STACKTOP = i3;
          return;
         }
         if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0) + 12 >> 2] | 0)) {
          HEAP8[i1 | 0] = 0;
          i11 = __ZNK7WebCore16HTMLElementStack9topRecordEv(i1 + 28 | 0) | 0;
          while (1) {
           i10 = HEAP32[i11 >> 2] | 0;
           i12 = (i10 | 0) == 0;
           if (!i12) {
            i13 = i10 | 0;
            HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
           }
           i13 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
           i14 = HEAP32[i10 + 8 >> 2] | 0;
           do {
            if ((i14 | 0) == (HEAP32[i13 + 12 >> 2] | 0)) {
             if ((HEAP32[i10 + 24 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
              i15 = 87;
              break;
             }
             __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, i10 + 8 | 0);
             i16 = 3;
             i17 = i11;
            } else {
             i15 = 87;
            }
           } while (0);
           L97 : do {
            if ((i15 | 0) == 87) {
             i15 = 0;
             do {
              if (__ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(i10) | 0) {
               i13 = HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0;
               if ((i14 | 0) == (HEAP32[i13 + 12 >> 2] | 0)) {
                if ((HEAP32[i10 + 24 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
                 break;
                }
               }
               i13 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
               if ((i14 | 0) == (HEAP32[i13 + 12 >> 2] | 0)) {
                if ((HEAP32[i10 + 24 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
                 break;
                }
               }
               i13 = HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0;
               if ((i14 | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
                i16 = 3;
                i17 = i11;
                break L97;
               }
               if ((HEAP32[i10 + 24 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
                i16 = 3;
                i17 = i11;
                break L97;
               }
              }
             } while (0);
             i16 = 0;
             i17 = HEAP32[i11 + 4 >> 2] | 0;
            }
           } while (0);
           do {
            if (!i12) {
             i14 = i10 | 0;
             i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
             if ((i13 | 0) == 0) {
              __ZN7WebCore13HTMLStackItemD2Ev(i10);
              __ZN3WTF8fastFreeEPv(i10);
              break;
             } else {
              HEAP32[i14 >> 2] = i13;
              break;
             }
            }
           } while (0);
           if ((i16 | 0) == 3) {
            break;
           } else {
            i11 = i17;
           }
          }
          __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
          __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
          STACKTOP = i3;
          return;
         }
         do {
          if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0) + 12 >> 2] | 0)) {
           if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0) + 12 >> 2] | 0)) {
            break;
           }
           if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0) + 12 >> 2] | 0)) {
            __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
            __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
            i11 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
            if ((i11 | 0) == 0) {
             STACKTOP = i3;
             return;
            }
            HEAP32[i11 >> 2] = 6;
            STACKTOP = i3;
            return;
           }
           if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 >> 2] | 0)) {
            i11 = i1 + 12 | 0;
            if (__ZNK7WebCore16HTMLElementStack7inScopeERKNS_13QualifiedNameE(i1 + 28 | 0, __ZN7WebCore9HTMLNames9buttonTagE) | 0) {
             __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 | 0);
             __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
             STACKTOP = i3;
             return;
            } else {
             __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i11);
             __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i11, i2);
             HEAP8[i1 | 0] = 0;
             STACKTOP = i3;
             return;
            }
           }
           i11 = HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0;
           if ((i8 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
            i9 = i1 + 12 | 0;
            i10 = i1 + 48 | 0;
            i12 = __ZN7WebCore25HTMLFormattingElementList29closestElementInScopeWithNameERKN3WTF12AtomicStringE(i10, i11 + 12 | 0) | 0;
            do {
             if ((i12 | 0) != 0) {
              __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 | 0);
              __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i10, i12);
              i11 = i1 + 28 | 0;
              if (!(__ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE(i11, i12) | 0)) {
               break;
              }
              __ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE(i11, i12);
             }
            } while (0);
            __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i9);
            __ZN7WebCore20HTMLConstructionSite23insertFormattingElementEPNS_15AtomicHTMLTokenE(i9, i2);
            STACKTOP = i3;
            return;
           }
           do {
            if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4bTagE >> 2] | 0) + 12 >> 2] | 0) != (i8 | 0)) {
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6bigTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7codeTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5emTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4iTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4sTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8smallTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strikeTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strongTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ttTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4uTagE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
              break;
             }
             if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7nobrTagE >> 2] | 0) + 12 >> 2] | 0)) {
              i12 = i1 + 12 | 0;
              __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i12);
              if (__ZNK7WebCore16HTMLElementStack7inScopeERKNS_13QualifiedNameE(i1 + 28 | 0, __ZN7WebCore9HTMLNames7nobrTagE) | 0) {
               __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames7nobrTagE >> 2] | 0) + 12 | 0);
               __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i12);
              }
              __ZN7WebCore20HTMLConstructionSite23insertFormattingElementEPNS_15AtomicHTMLTokenE(i12, i2);
              STACKTOP = i3;
              return;
             }
             i12 = (i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0);
             do {
              if (i12) {
               i15 = 157;
              } else {
               if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
                i15 = 157;
                break;
               }
               if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
                i15 = 157;
               } else {
                i15 = 159;
               }
              }
             } while (0);
             do {
              if ((i15 | 0) == 157) {
               if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
                STACKTOP = i3;
                return;
               } else {
                if (i12) {
                 break;
                } else {
                 i15 = 159;
                 break;
                }
               }
              }
             } while (0);
             do {
              if ((i15 | 0) == 159) {
               if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0) + 12 >> 2] | 0)) {
                break;
               }
               if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
                break;
               }
               if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
                i12 = i1 + 12 | 0;
                do {
                 if (!(__ZN7WebCore20HTMLConstructionSite12inQuirksModeEv(i12) | 0)) {
                  if (!(__ZNK7WebCore16HTMLElementStack13inButtonScopeERKNS_13QualifiedNameE(i1 + 28 | 0, __ZN7WebCore9HTMLNames4pTagE) | 0)) {
                   break;
                  }
                  __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 | 0);
                 }
                } while (0);
                __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i12, i2);
                HEAP8[i1 | 0] = 0;
                HEAP32[i1 + 104 >> 2] = 9;
                STACKTOP = i3;
                return;
               }
               do {
                if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8imageTagE >> 2] | 0) + 12 >> 2] | 0)) {
                 i10 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0;
                 if ((i10 | 0) == 0) {
                  i18 = i8;
                  i19 = i2 + 4 | 0;
                 } else {
                  i11 = i10 | 0;
                  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
                  i11 = i2 + 4 | 0;
                  i18 = HEAP32[i11 >> 2] | 0;
                  i19 = i11;
                 }
                 HEAP32[i19 >> 2] = i10;
                 if ((i18 | 0) == 0) {
                  break;
                 }
                 i10 = i18 | 0;
                 i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
                 if ((i11 | 0) == 0) {
                  __ZN3WTF10StringImpl7destroyEPS0_(i18);
                  break;
                 } else {
                  HEAP32[i10 >> 2] = i11;
                  break;
                 }
                }
               } while (0);
               i12 = HEAP32[i7 >> 2] | 0;
               do {
                if ((i12 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  break;
                 }
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  break;
                 }
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  break;
                 }
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9keygenTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  break;
                 }
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6wbrTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  break;
                 }
                 if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
                  i11 = HEAP32[i2 + 40 >> 2] | 0;
                  L205 : do {
                   if ((i11 | 0) == 0) {
                    i20 = 0;
                   } else {
                    i10 = HEAP32[i2 + 32 >> 2] | 0;
                    i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
                    i14 = i13 + 12 | 0;
                    i21 = i13 + 16 | 0;
                    i22 = 0;
                    while (1) {
                     i23 = HEAP32[i10 + (i22 << 3) >> 2] | 0;
                     if ((i23 | 0) == (i13 | 0)) {
                      break;
                     }
                     if ((HEAP32[i23 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
                      if ((HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i21 >> 2] | 0)) {
                       break;
                      }
                     }
                     i23 = i22 + 1 | 0;
                     if (i23 >>> 0 < i11 >>> 0) {
                      i22 = i23;
                     } else {
                      i20 = 0;
                      break L205;
                     }
                    }
                    if (i11 >>> 0 > i22 >>> 0) {
                     i20 = i10 + (i22 << 3) | 0;
                     break;
                    } else {
                     __ZN3WTF15CrashOnOverflow10overflowedEv();
                    }
                   }
                  } while (0);
                  i11 = i1 + 12 | 0;
                  __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i11);
                  __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i11, i2);
                  do {
                   if ((i20 | 0) != 0) {
                    if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i20 + 4 >> 2] | 0, H_BASE + 24 | 0) | 0)) {
                     break;
                    }
                    STACKTOP = i3;
                    return;
                   }
                  } while (0);
                  HEAP8[i1 | 0] = 0;
                  STACKTOP = i3;
                  return;
                 }
                 do {
                  if ((i12 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8paramTagE >> 2] | 0) + 12 >> 2] | 0)) {
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9sourceTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    break;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8trackTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    break;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
                    __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                    HEAP8[i1 | 0] = 0;
                    STACKTOP = i3;
                    return;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10isindexTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    __ZN7WebCore15HTMLTreeBuilder31processIsindexStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
                    STACKTOP = i3;
                    return;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                    HEAP8[i1 + 148 | 0] = 1;
                    i11 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
                    if ((i11 | 0) != 0) {
                     HEAP32[i11 >> 2] = 2;
                    }
                    i11 = i1 + 104 | 0;
                    HEAP32[i1 + 108 >> 2] = HEAP32[i11 >> 2];
                    HEAP8[i1 | 0] = 0;
                    HEAP32[i11 >> 2] = 8;
                    STACKTOP = i3;
                    return;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
                    i11 = i1 + 12 | 0;
                    __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i11);
                    HEAP8[i1 | 0] = 0;
                    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i11, i2);
                    i11 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
                    if ((i11 | 0) != 0) {
                     HEAP32[i11 >> 2] = 4;
                    }
                    i11 = i1 + 104 | 0;
                    HEAP32[i1 + 108 >> 2] = HEAP32[i11 >> 2];
                    HEAP32[i11 >> 2] = 8;
                    STACKTOP = i3;
                    return;
                   }
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    HEAP8[i1 | 0] = 0;
                    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                    i11 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
                    if ((i11 | 0) != 0) {
                     HEAP32[i11 >> 2] = 4;
                    }
                    i11 = i1 + 104 | 0;
                    HEAP32[i1 + 108 >> 2] = HEAP32[i11 >> 2];
                    HEAP32[i11 >> 2] = 8;
                    STACKTOP = i3;
                    return;
                   }
                   do {
                    if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0) + 12 >> 2] | 0)) {
                     if ((HEAP8[i1 + 169 | 0] & 1) == 0) {
                      break;
                     }
                     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                     i11 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
                     if ((i11 | 0) != 0) {
                      HEAP32[i11 >> 2] = 4;
                     }
                     i11 = i1 + 104 | 0;
                     HEAP32[i1 + 108 >> 2] = HEAP32[i11 >> 2];
                     HEAP32[i11 >> 2] = 8;
                     STACKTOP = i3;
                     return;
                    }
                   } while (0);
                   do {
                    if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
                     if ((HEAP8[i1 + 168 | 0] & 1) == 0) {
                      break;
                     }
                     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                     i22 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
                     if ((i22 | 0) != 0) {
                      HEAP32[i22 >> 2] = 4;
                     }
                     i22 = i1 + 104 | 0;
                     HEAP32[i1 + 108 >> 2] = HEAP32[i22 >> 2];
                     HEAP32[i22 >> 2] = 8;
                     STACKTOP = i3;
                     return;
                    }
                   } while (0);
                   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
                    i22 = i1 + 12 | 0;
                    __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i22);
                    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i22, i2);
                    HEAP8[i1 | 0] = 0;
                    i22 = i1 + 104 | 0;
                    switch (HEAP32[i22 >> 2] | 0) {
                    case 9:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                     {
                      HEAP32[i22 >> 2] = 17;
                      STACKTOP = i3;
                      return;
                     }
                    default:
                     {
                      HEAP32[i22 >> 2] = 16;
                      STACKTOP = i3;
                      return;
                     }
                    }
                   }
                   do {
                    if ((i12 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
                     if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
                      break;
                     }
                     do {
                      if ((i12 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5rpTagE >> 2] | 0) + 12 >> 2] | 0)) {
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5rtTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        break;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore11MathMLNames7mathTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        i22 = i1 + 12 | 0;
                        __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i22);
                        __ZN7WebCoreL22adjustMathMLAttributesEPNS_15AtomicHTMLTokenE(i2);
                        __ZN7WebCoreL23adjustForeignAttributesEPNS_15AtomicHTMLTokenE(i2);
                        __ZN7WebCore20HTMLConstructionSite20insertForeignElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i22, i2, __ZN7WebCore11MathMLNames18mathmlNamespaceURIE);
                        STACKTOP = i3;
                        return;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        i22 = i1 + 12 | 0;
                        __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i22);
                        __ZN7WebCoreL19adjustSVGAttributesEPNS_15AtomicHTMLTokenE(i2);
                        __ZN7WebCoreL23adjustForeignAttributesEPNS_15AtomicHTMLTokenE(i2);
                        __ZN7WebCore20HTMLConstructionSite20insertForeignElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i22, i2, __ZN7WebCore8SVGNames15svgNamespaceURIE);
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i12 | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        STACKTOP = i3;
                        return;
                       }
                       if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
                        __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
                        STACKTOP = i3;
                        return;
                       } else {
                        i22 = i1 + 12 | 0;
                        __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i22);
                        __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i22, i2);
                        STACKTOP = i3;
                        return;
                       }
                      }
                     } while (0);
                     i22 = i1 + 12 | 0;
                     do {
                      if (__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, (HEAP32[__ZN7WebCore9HTMLNames7rubyTagE >> 2] | 0) + 12 | 0) | 0) {
                       __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i22);
                       i10 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
                       if ((i10 | 0) == 0) {
                        break;
                       }
                       i11 = i10 | 0;
                       i21 = HEAP32[i11 >> 2] | 0;
                       HEAP32[i11 >> 2] = i21 + 1;
                       if ((i21 | 0) == 0) {
                        __ZN7WebCore13HTMLStackItemD2Ev(i10);
                        __ZN3WTF8fastFreeEPv(i10);
                        break;
                       } else {
                        HEAP32[i11 >> 2] = i21;
                        break;
                       }
                      }
                     } while (0);
                     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i22, i2);
                     STACKTOP = i3;
                     return;
                    }
                   } while (0);
                   i21 = i1 + 12 | 0;
                   i11 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
                   do {
                    if ((i11 | 0) != 0) {
                     i10 = i11 | 0;
                     i14 = HEAP32[i10 >> 2] | 0;
                     HEAP32[i10 >> 2] = i14 + 1;
                     if ((i14 | 0) == 0) {
                      __ZN7WebCore13HTMLStackItemD2Ev(i11);
                      __ZN3WTF8fastFreeEPv(i11);
                      break;
                     } else {
                      HEAP32[i10 >> 2] = i14;
                      break;
                     }
                    }
                   } while (0);
                   i14 = HEAP32[i11 + 4 >> 2] | 0;
                   do {
                    if ((HEAP32[i14 + 12 >> 2] & 16 | 0) != 0) {
                     i10 = HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0;
                     if ((HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
                      break;
                     }
                     i13 = i6 | 0;
                     HEAP32[i13 >> 2] = 0;
                     i23 = i6 + 4 | 0;
                     HEAP32[i23 >> 2] = 0;
                     i24 = i6 + 8 | 0;
                     HEAP32[i24 >> 2] = 0;
                     __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i5, 3, i10 + 12 | 0, i6);
                     i10 = HEAP32[i24 >> 2] | 0;
                     i25 = HEAP32[i13 >> 2] | 0;
                     if ((i10 | 0) != 0) {
                      i26 = i25 + (i10 << 3) | 0;
                      i10 = i25;
                      while (1) {
                       i27 = HEAP32[i10 + 4 >> 2] | 0;
                       do {
                        if ((i27 | 0) != 0) {
                         i28 = i27 | 0;
                         i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
                         if ((i29 | 0) == 0) {
                          __ZN3WTF10StringImpl7destroyEPS0_(i27);
                          break;
                         } else {
                          HEAP32[i28 >> 2] = i29;
                          break;
                         }
                        }
                       } while (0);
                       __ZN7WebCore13QualifiedNameD1Ev(i10 | 0);
                       i10 = i10 + 8 | 0;
                       if ((i10 | 0) == (i26 | 0)) {
                        break;
                       }
                      }
                      HEAP32[i24 >> 2] = 0;
                     }
                     if ((i25 | 0) != 0) {
                      HEAP32[i13 >> 2] = 0;
                      HEAP32[i23 >> 2] = 0;
                      __ZN3WTF8fastFreeEPv(i25);
                     }
                     __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i5);
                     __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
                    }
                   } while (0);
                   __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i21);
                   __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i21, i2);
                   STACKTOP = i3;
                   return;
                  }
                 } while (0);
                 __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
                 STACKTOP = i3;
                 return;
                }
               } while (0);
               i12 = i1 + 12 | 0;
               __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i12);
               __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i12, i2);
               HEAP8[i1 | 0] = 0;
               STACKTOP = i3;
               return;
              }
             } while (0);
             i12 = i1 + 12 | 0;
             __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i12);
             __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i12, i2);
             __ZN7WebCore25HTMLFormattingElementList12appendMarkerEv(i1 + 48 | 0);
             HEAP8[i1 | 0] = 0;
             STACKTOP = i3;
             return;
            }
           } while (0);
           i9 = i1 + 12 | 0;
           __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i9);
           __ZN7WebCore20HTMLConstructionSite23insertFormattingElementEPNS_15AtomicHTMLTokenE(i9, i2);
           STACKTOP = i3;
           return;
          }
         } while (0);
         HEAP8[i1 | 0] = 0;
         i9 = __ZNK7WebCore16HTMLElementStack9topRecordEv(i1 + 28 | 0) | 0;
         while (1) {
          i12 = HEAP32[i9 >> 2] | 0;
          i14 = (i12 | 0) == 0;
          if (!i14) {
           i11 = i12 | 0;
           HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
          }
          i11 = HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0;
          i26 = HEAP32[i12 + 8 >> 2] | 0;
          if ((i26 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
           if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
            i15 = 110;
           } else {
            i15 = 108;
           }
          } else {
           i15 = 108;
          }
          L385 : do {
           if ((i15 | 0) == 108) {
            i15 = 0;
            i11 = HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0;
            if ((i26 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
             if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
              i15 = 110;
              break;
             }
            }
            do {
             if (__ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(i12) | 0) {
              i11 = HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0;
              if ((i26 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
               if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
                break;
               }
              }
              i11 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
              if ((i26 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
               if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
                break;
               }
              }
              i11 = HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0;
              if ((i26 | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
               i30 = 3;
               i31 = i9;
               break L385;
              }
              if ((HEAP32[i12 + 24 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
               i30 = 3;
               i31 = i9;
               break L385;
              }
             }
            } while (0);
            i30 = 0;
            i31 = HEAP32[i9 + 4 >> 2] | 0;
           }
          } while (0);
          if ((i15 | 0) == 110) {
           i15 = 0;
           __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, i12 + 8 | 0);
           i30 = 3;
           i31 = i9;
          }
          do {
           if (!i14) {
            i26 = i12 | 0;
            i11 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
            if ((i11 | 0) == 0) {
             __ZN7WebCore13HTMLStackItemD2Ev(i12);
             __ZN3WTF8fastFreeEPv(i12);
             break;
            } else {
             HEAP32[i26 >> 2] = i11;
             break;
            }
           }
          } while (0);
          if ((i30 | 0) == 3) {
           break;
          } else {
           i9 = i31;
          }
         }
         __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
         __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
         STACKTOP = i3;
         return;
        }
       } while (0);
       __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
       __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
       HEAP8[i1 + 148 | 0] = 1;
       HEAP8[i1 | 0] = 0;
       STACKTOP = i3;
       return;
      }
     } while (0);
     __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
     i9 = i1 + 12 | 0;
     i12 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i14 = i12 | 0;
       i11 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = i11 + 1;
       if ((i11 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i12);
        __ZN3WTF8fastFreeEPv(i12);
        break;
       } else {
        HEAP32[i14 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i11 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
     i14 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i14 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
      if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
       i15 = 71;
      } else {
       i15 = 61;
      }
     } else {
      i15 = 61;
     }
     do {
      if ((i15 | 0) == 61) {
       i11 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
       if ((i14 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         i15 = 71;
         break;
        }
       }
       i11 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
       if ((i14 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         i15 = 71;
         break;
        }
       }
       i11 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
       if ((i14 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         i15 = 71;
         break;
        }
       }
       i11 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
       if ((i14 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         i15 = 71;
         break;
        }
       }
       i11 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
       if ((i14 | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i12 + 24 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
        i15 = 71;
       }
      }
     } while (0);
     if ((i15 | 0) == 71) {
      __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
     }
     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i9, i2);
     STACKTOP = i3;
     return;
    }
   } while (0);
   __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1);
   __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 456 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 72 | 0;
 i8 = i3 + 120 | 0;
 i9 = i3 + 136 | 0;
 i10 = i3 + 184 | 0;
 i11 = i3 + 200 | 0;
 i12 = i3 + 248 | 0;
 i13 = i3 + 264 | 0;
 i14 = i3 + 312 | 0;
 i15 = i3 + 328 | 0;
 i16 = i3 + 376 | 0;
 i17 = i3 + 392 | 0;
 i18 = i3 + 440 | 0;
 i19 = i1 + 104 | 0;
 L1 : do {
  switch (HEAP32[i19 >> 2] | 0) {
  case 2:
   {
    i20 = i2 + 4 | 0;
    i21 = 8;
    break;
   }
  case 5:
   {
    i21 = 16;
    break;
   }
  case 3:
   {
    i21 = 14;
    break;
   }
  case 15:
   {
    i22 = HEAP32[i2 + 4 >> 2] | 0;
    do {
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) != (i22 | 0)) {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((i22 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i22 | 0)) {
       break;
      }
      __ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    i22 = i1 + 28 | 0;
    do {
     if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i22, __ZN7WebCore9HTMLNames5tdTagE) | 0)) {
      if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i22, __ZN7WebCore9HTMLNames5thTagE) | 0) {
       break;
      }
      STACKTOP = i3;
      return;
     }
    } while (0);
    if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i22, __ZN7WebCore9HTMLNames5tdTagE) | 0) {
     __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 | 0);
    } else {
     __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 | 0);
    }
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 18:
  case 21:
   {
    if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     HEAP32[i19 >> 2] = 7;
     __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
     STACKTOP = i3;
     return;
    }
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   }
  case 4:
   {
    i23 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    do {
     if ((i23 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10bgsoundTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
       STACKTOP = i3;
       return;
      }
      __ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv(i1);
      __ZN7WebCore15HTMLTreeBuilder12processTokenEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
    STACKTOP = i3;
    return;
   }
  case 19:
   {
    i23 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
     STACKTOP = i3;
     return;
    }
    if ((i23 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 20:
  case 22:
   {
    i23 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    } else {
     if ((i23 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
     STACKTOP = i3;
     return;
    }
    break;
   }
  case 17:
   {
    i23 = HEAP32[i2 + 4 >> 2] | 0;
    do {
     if ((i23 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
       break;
      }
      if ((i23 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) != (i23 | 0)) {
       i24 = i23;
       i21 = 179;
       break L1;
      }
     }
    } while (0);
    i23 = (HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 | 0;
    i22 = i8 | 0;
    HEAP32[i22 >> 2] = 0;
    i25 = i8 + 4 | 0;
    HEAP32[i25 >> 2] = 0;
    i26 = i8 + 8 | 0;
    HEAP32[i26 >> 2] = 0;
    __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i7, 3, i23, i8);
    i23 = HEAP32[i26 >> 2] | 0;
    i27 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) != 0) {
     i28 = i27 + (i23 << 3) | 0;
     i23 = i27;
     while (1) {
      i29 = HEAP32[i23 + 4 >> 2] | 0;
      do {
       if ((i29 | 0) != 0) {
        i30 = i29 | 0;
        i31 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i29);
         break;
        } else {
         HEAP32[i30 >> 2] = i31;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i23 | 0);
      i23 = i23 + 8 | 0;
      if ((i23 | 0) == (i28 | 0)) {
       break;
      }
     }
     HEAP32[i26 >> 2] = 0;
    }
    if ((i27 | 0) != 0) {
     HEAP32[i22 >> 2] = 0;
     HEAP32[i25 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i27);
    }
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i7);
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    __ZN7WebCore15AtomicHTMLTokenD2Ev(i7);
    STACKTOP = i3;
    return;
   }
  case 13:
   {
    i28 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
    i23 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i23 | 0) == (HEAP32[i28 + 12 >> 2] | 0)) {
     __ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv(i1 + 28 | 0);
     __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     HEAP32[i19 >> 2] = 14;
     STACKTOP = i3;
     return;
    }
    do {
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) != (i23 | 0)) {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
       break;
      }
      do {
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) != (i23 | 0)) {
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i23 | 0)) {
         break;
        }
        __ZN7WebCore15HTMLTreeBuilder25processStartTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
        STACKTOP = i3;
        return;
       }
      } while (0);
      i29 = i1 + 28 | 0;
      do {
       if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i29, __ZN7WebCore9HTMLNames8tbodyTagE) | 0)) {
        if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i29, __ZN7WebCore9HTMLNames8theadTagE) | 0) {
         break;
        }
        if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i29, __ZN7WebCore9HTMLNames8tfootTagE) | 0) {
         break;
        }
        STACKTOP = i3;
        return;
       }
      } while (0);
      __ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv(i29);
      i31 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
      do {
       if ((i31 | 0) != 0) {
        i30 = i31 | 0;
        i32 = HEAP32[i30 >> 2] | 0;
        HEAP32[i30 >> 2] = i32 + 1;
        if ((i32 | 0) == 0) {
         __ZN7WebCore13HTMLStackItemD2Ev(i31);
         __ZN3WTF8fastFreeEPv(i31);
         break;
        } else {
         HEAP32[i30 >> 2] = i32;
         break;
        }
       }
      } while (0);
      __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, i31 + 8 | 0);
      __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    i23 = i6 | 0;
    HEAP32[i23 >> 2] = 0;
    i27 = i6 + 4 | 0;
    HEAP32[i27 >> 2] = 0;
    i25 = i6 + 8 | 0;
    HEAP32[i25 >> 2] = 0;
    __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 2, i28 + 12 | 0, i6);
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i4);
    __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
    i22 = HEAP32[i25 >> 2] | 0;
    i26 = HEAP32[i23 >> 2] | 0;
    if ((i22 | 0) != 0) {
     i29 = i26 + (i22 << 3) | 0;
     i22 = i26;
     while (1) {
      i32 = HEAP32[i22 + 4 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i30 = i32 | 0;
        i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
        if ((i33 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i30 >> 2] = i33;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i22 | 0);
      i22 = i22 + 8 | 0;
      if ((i22 | 0) == (i29 | 0)) {
       break;
      }
     }
     HEAP32[i25 >> 2] = 0;
    }
    if ((i26 | 0) != 0) {
     HEAP32[i23 >> 2] = 0;
     HEAP32[i27 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i26);
    }
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 14:
   {
    i29 = HEAP32[i2 + 4 >> 2] | 0;
    do {
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) != (i29 | 0)) {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
       break;
      }
      do {
       if ((i29 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i29 | 0)) {
         break;
        }
        __ZN7WebCore15HTMLTreeBuilder25processStartTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
        STACKTOP = i3;
        return;
       }
      } while (0);
      i22 = i1 + 28 | 0;
      if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i22, __ZN7WebCore9HTMLNames5trTagE) | 0)) {
       STACKTOP = i3;
       return;
      }
      __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i22);
      __ZN7WebCore16HTMLElementStack3popEv(i22);
      HEAP32[i19 >> 2] = 13;
      __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i1 + 28 | 0);
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    HEAP32[i19 >> 2] = 15;
    __ZN7WebCore25HTMLFormattingElementList12appendMarkerEv(i1 + 48 | 0);
    STACKTOP = i3;
    return;
   }
  case 12:
   {
    i29 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i29 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    if ((i29 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     STACKTOP = i3;
     return;
    }
    if ((i29 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
     STACKTOP = i3;
     return;
    }
    i29 = i1 + 28 | 0;
    i26 = HEAP32[(HEAP32[HEAP32[i29 >> 2] >> 2] | 0) + 4 >> 2] | 0;
    if ((i26 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i29) | 0)) {
     STACKTOP = i3;
     return;
    }
    i26 = HEAP32[(HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0) + 4 >> 2] | 0;
    do {
     if ((HEAP32[i26 + 12 >> 2] & 4 | 0) != 0) {
      i27 = HEAP32[i26 + 44 >> 2] | 0;
      i23 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
      if ((i27 | 0) == (i23 | 0)) {
       STACKTOP = i3;
       return;
      }
      if ((HEAP32[i27 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i27 + 16 >> 2] | 0) != (HEAP32[i23 + 16 >> 2] | 0)) {
       break;
      }
      STACKTOP = i3;
      return;
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack3popEv(i29);
    HEAP32[i19 >> 2] = 9;
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 16:
   {
    i24 = HEAP32[i2 + 4 >> 2] | 0;
    i21 = 179;
    break;
   }
  case 0:
   {
    __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i1 + 12 | 0);
    HEAP32[i19 >> 2] = 1;
    i21 = 5;
    break;
   }
  case 1:
   {
    i21 = 5;
    break;
   }
  case 7:
   {
    break;
   }
  case 9:
   {
    __ZN7WebCore15HTMLTreeBuilder25processStartTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 11:
   {
    i26 = HEAP32[i2 + 4 >> 2] | 0;
    i23 = HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0;
    do {
     if ((HEAP32[i23 + 12 >> 2] | 0) != (i26 | 0)) {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
       break;
      }
      if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      __ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    i26 = i1 + 28 | 0;
    if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i26, i23 + 12 | 0) | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
    __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i26, (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0);
    __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
    HEAP32[i19 >> 2] = 9;
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 10:
   {
    __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 6:
   {
    i26 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
     STACKTOP = i3;
     return;
    }
    do {
     if ((i26 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      do {
       if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
        i34 = 19;
       } else {
        if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
         i34 = 12;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 9;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 9;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 9;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 9;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 9;
         break;
        }
        if ((i26 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
         i34 = 13;
         break;
        }
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0)) {
         i34 = 14;
         break;
        }
        i34 = (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i26 | 0) ? 14 : 7;
       }
      } while (0);
      i29 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 120 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      HEAP32[(HEAP32[i1 + 112 >> 2] | 0) + (i29 << 2) >> 2] = i34;
      HEAP32[i19 >> 2] = i34;
      __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
    } while (0);
    __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
    STACKTOP = i3;
    return;
   }
  default:
   {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 179) {
   if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   }
   if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i34 = i1 + 12 | 0;
    i4 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i6 = i4 | 0;
      i7 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i7 + 1;
      if ((i7 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i4);
       __ZN3WTF8fastFreeEPv(i4);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i7 = HEAP32[i4 + 4 >> 2] | 0;
    do {
     if ((HEAP32[i7 + 12 >> 2] & 16 | 0) != 0) {
      i6 = HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0;
      if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
       break;
      }
      i8 = i10 | 0;
      HEAP32[i8 >> 2] = 0;
      i26 = i10 + 4 | 0;
      HEAP32[i26 >> 2] = 0;
      i23 = i10 + 8 | 0;
      HEAP32[i23 >> 2] = 0;
      __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i9, 3, i6 + 12 | 0, i10);
      i6 = HEAP32[i23 >> 2] | 0;
      i29 = HEAP32[i8 >> 2] | 0;
      if ((i6 | 0) != 0) {
       i27 = i29 + (i6 << 3) | 0;
       i6 = i29;
       while (1) {
        i25 = HEAP32[i6 + 4 >> 2] | 0;
        do {
         if ((i25 | 0) != 0) {
          i22 = i25 | 0;
          i28 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
          if ((i28 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i25);
           break;
          } else {
           HEAP32[i22 >> 2] = i28;
           break;
          }
         }
        } while (0);
        __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
        i6 = i6 + 8 | 0;
        if ((i6 | 0) == (i27 | 0)) {
         break;
        }
       }
       HEAP32[i23 >> 2] = 0;
      }
      if ((i29 | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i26 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i29);
      }
      __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i9);
      __ZN7WebCore15AtomicHTMLTokenD2Ev(i9);
     }
    } while (0);
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i34, i2);
    STACKTOP = i3;
    return;
   }
   if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i7 = i1 + 12 | 0;
    i4 = i1 + 28 | 0;
    i27 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i6 = i27 | 0;
      i25 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i25 + 1;
      if ((i25 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i27);
       __ZN3WTF8fastFreeEPv(i27);
       break;
      } else {
       HEAP32[i6 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i34 = HEAP32[i27 + 4 >> 2] | 0;
    do {
     if ((HEAP32[i34 + 12 >> 2] & 16 | 0) != 0) {
      i25 = HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0;
      if ((HEAP32[(HEAP32[i34 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
       break;
      }
      i6 = i12 | 0;
      HEAP32[i6 >> 2] = 0;
      i28 = i12 + 4 | 0;
      HEAP32[i28 >> 2] = 0;
      i22 = i12 + 8 | 0;
      HEAP32[i22 >> 2] = 0;
      __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i11, 3, i25 + 12 | 0, i12);
      i25 = HEAP32[i22 >> 2] | 0;
      i32 = HEAP32[i6 >> 2] | 0;
      if ((i25 | 0) != 0) {
       i31 = i32 + (i25 << 3) | 0;
       i25 = i32;
       while (1) {
        i33 = HEAP32[i25 + 4 >> 2] | 0;
        do {
         if ((i33 | 0) != 0) {
          i30 = i33 | 0;
          i35 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
          if ((i35 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i33);
           break;
          } else {
           HEAP32[i30 >> 2] = i35;
           break;
          }
         }
        } while (0);
        __ZN7WebCore13QualifiedNameD1Ev(i25 | 0);
        i25 = i25 + 8 | 0;
        if ((i25 | 0) == (i31 | 0)) {
         break;
        }
       }
       HEAP32[i22 >> 2] = 0;
      }
      if ((i32 | 0) != 0) {
       HEAP32[i6 >> 2] = 0;
       HEAP32[i28 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i32);
      }
      __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i11);
      __ZN7WebCore15AtomicHTMLTokenD2Ev(i11);
     }
    } while (0);
    i34 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
    do {
     if ((i34 | 0) != 0) {
      i27 = i34 | 0;
      i31 = HEAP32[i27 >> 2] | 0;
      HEAP32[i27 >> 2] = i31 + 1;
      if ((i31 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i34);
       __ZN3WTF8fastFreeEPv(i34);
       break;
      } else {
       HEAP32[i27 >> 2] = i31;
       break;
      }
     }
    } while (0);
    i4 = HEAP32[i34 + 4 >> 2] | 0;
    do {
     if ((HEAP32[i4 + 12 >> 2] & 16 | 0) != 0) {
      i31 = HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0;
      if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[i31 + 12 >> 2] | 0)) {
       break;
      }
      i27 = i14 | 0;
      HEAP32[i27 >> 2] = 0;
      i25 = i14 + 4 | 0;
      HEAP32[i25 >> 2] = 0;
      i29 = i14 + 8 | 0;
      HEAP32[i29 >> 2] = 0;
      __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i13, 3, i31 + 12 | 0, i14);
      i31 = HEAP32[i29 >> 2] | 0;
      i26 = HEAP32[i27 >> 2] | 0;
      if ((i31 | 0) != 0) {
       i8 = i26 + (i31 << 3) | 0;
       i31 = i26;
       while (1) {
        i23 = HEAP32[i31 + 4 >> 2] | 0;
        do {
         if ((i23 | 0) != 0) {
          i33 = i23 | 0;
          i35 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
          if ((i35 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i23);
           break;
          } else {
           HEAP32[i33 >> 2] = i35;
           break;
          }
         }
        } while (0);
        __ZN7WebCore13QualifiedNameD1Ev(i31 | 0);
        i31 = i31 + 8 | 0;
        if ((i31 | 0) == (i8 | 0)) {
         break;
        }
       }
       HEAP32[i29 >> 2] = 0;
      }
      if ((i26 | 0) != 0) {
       HEAP32[i27 >> 2] = 0;
       HEAP32[i25 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i26);
      }
      __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i13);
      __ZN7WebCore15AtomicHTMLTokenD2Ev(i13);
     }
    } while (0);
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i7, i2);
    STACKTOP = i3;
    return;
   }
   i4 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   if ((i24 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
    i34 = i16 | 0;
    HEAP32[i34 >> 2] = 0;
    i8 = i16 + 4 | 0;
    HEAP32[i8 >> 2] = 0;
    i31 = i16 + 8 | 0;
    HEAP32[i31 >> 2] = 0;
    __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i15, 3, i4 + 12 | 0, i16);
    i4 = HEAP32[i31 >> 2] | 0;
    i32 = HEAP32[i34 >> 2] | 0;
    if ((i4 | 0) != 0) {
     i28 = i32 + (i4 << 3) | 0;
     i4 = i32;
     while (1) {
      i6 = HEAP32[i4 + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i22 = i6 | 0;
        i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
        if ((i23 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i22 >> 2] = i23;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
      i4 = i4 + 8 | 0;
      if ((i4 | 0) == (i28 | 0)) {
       break;
      }
     }
     HEAP32[i31 >> 2] = 0;
    }
    if ((i32 | 0) != 0) {
     HEAP32[i34 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i32);
    }
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i15);
    __ZN7WebCore15AtomicHTMLTokenD2Ev(i15);
    STACKTOP = i3;
    return;
   }
   do {
    if ((i24 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9keygenTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i24 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
      __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
      STACKTOP = i3;
      return;
     }
     if ((i24 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (!(__ZNK7WebCore16HTMLElementStack13inSelectScopeERKNS_13QualifiedNameE(i1 + 28 | 0, __ZN7WebCore9HTMLNames9selectTagE) | 0)) {
    STACKTOP = i3;
    return;
   }
   i32 = (HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 | 0;
   i8 = i18 | 0;
   HEAP32[i8 >> 2] = 0;
   i34 = i18 + 4 | 0;
   HEAP32[i34 >> 2] = 0;
   i31 = i18 + 8 | 0;
   HEAP32[i31 >> 2] = 0;
   __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i17, 3, i32, i18);
   i32 = HEAP32[i31 >> 2] | 0;
   i28 = HEAP32[i8 >> 2] | 0;
   if ((i32 | 0) != 0) {
    i4 = i28 + (i32 << 3) | 0;
    i32 = i28;
    while (1) {
     i7 = HEAP32[i32 + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i6 = i7 | 0;
       i26 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i6 >> 2] = i26;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i32 | 0);
     i32 = i32 + 8 | 0;
     if ((i32 | 0) == (i4 | 0)) {
      break;
     }
    }
    HEAP32[i31 >> 2] = 0;
   }
   if ((i28 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i34 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i28);
   }
   __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i17);
   __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
   __ZN7WebCore15AtomicHTMLTokenD2Ev(i17);
   STACKTOP = i3;
   return;
  } else if ((i21 | 0) == 5) {
   i4 = i2 + 4 | 0;
   if ((HEAP32[i4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv(i1);
    i20 = i4;
    i21 = 8;
    break;
   }
   __ZN7WebCore20HTMLConstructionSite32insertHTMLHtmlStartTagBeforeHTMLEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
   HEAP32[i19 >> 2] = 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if ((i21 | 0) == 8) {
   i17 = HEAP32[i20 >> 2] | 0;
   if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   } else {
    if ((i17 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv(i1);
     i21 = 14;
     break;
    }
    __ZN7WebCore20HTMLConstructionSite21insertHTMLHeadElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    HEAP32[i19 >> 2] = 3;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 14) {
   if (__ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0) {
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv(i1);
    i21 = 16;
    break;
   }
  }
 } while (0);
 L428 : do {
  if ((i21 | 0) == 16) {
   i20 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   }
   if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    HEAP8[i1 | 0] = 0;
    __ZN7WebCore20HTMLConstructionSite21insertHTMLBodyElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    HEAP32[i19 >> 2] = 7;
    STACKTOP = i3;
    return;
   }
   if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    HEAP32[i19 >> 2] = 19;
    STACKTOP = i3;
    return;
   }
   do {
    if ((i20 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10bgsoundTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
      STACKTOP = i3;
      return;
     } else {
      __ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv(i1);
      break L428;
     }
    }
   } while (0);
   i20 = i1 + 28 | 0;
   i28 = i1 + 20 | 0;
   i34 = HEAP32[i28 >> 2] | 0;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i31 = i34 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   }
   __ZN7WebCore16HTMLElementStack19pushHTMLHeadElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i20, i5);
   i31 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i8 = i31 | 0;
     i34 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i31);
      __ZN3WTF8fastFreeEPv(i31);
      break;
     } else {
      HEAP32[i8 >> 2] = i34;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
   __ZN7WebCore16HTMLElementStack21removeHTMLHeadElementEPNS_7ElementE(i20, HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i1 + 148 | 0;
 i13 = i1 + 104 | 0;
 i14 = i2 | 0;
 i15 = i2 + 4 | 0;
 i16 = i6 | 0;
 i17 = i1 + 28 | 0;
 i18 = i17 | 0;
 i19 = i1 + 28 | 0;
 i20 = i1 + 12 | 0;
 i21 = i2 + 8 | 0;
 i22 = i8 | 0;
 L1 : while (1) {
  if ((HEAP8[i12] & 1) != 0) {
   HEAP8[i12] = 0;
   i23 = HEAP32[i14 >> 2] | 0;
   if ((HEAP16[i23 >> 1] | 0) == 10) {
    i24 = i23 + 2 | 0;
    HEAP32[i14 >> 2] = i24;
    i25 = i24;
   } else {
    i25 = i23;
   }
   if ((i25 | 0) == (HEAP32[i15 >> 2] | 0)) {
    i26 = 202;
    break;
   }
  }
  switch (HEAP32[i13 >> 2] | 0) {
  case 7:
  case 11:
  case 6:
  case 15:
   {
    break L1;
    break;
   }
  case 22:
   {
    i26 = 172;
    break L1;
    break;
   }
  case 19:
  case 20:
   {
    i26 = 159;
    break L1;
    break;
   }
  case 3:
   {
    i26 = 25;
    break L1;
    break;
   }
  case 10:
   {
    i26 = 101;
    break L1;
    break;
   }
  case 12:
   {
    i23 = HEAP32[i14 >> 2] | 0;
    i24 = i23;
    L11 : while (1) {
     i27 = HEAP16[i24 >> 1] | 0;
     if ((i27 & 65535) >>> 0 >= 33 >>> 0) {
      i28 = i24;
      break;
     }
     switch (i27 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i28 = i24;
       break L11;
      }
     }
     i27 = i24 + 2 | 0;
     HEAP32[i14 >> 2] = i27;
     if ((i27 | 0) == (HEAP32[i15 >> 2] | 0)) {
      i28 = i27;
      break;
     } else {
      i24 = i27;
     }
    }
    do {
     if ((i23 | 0) == (i28 | 0)) {
      HEAP32[i16 >> 2] = 0;
     } else {
      i24 = i28 - i23 >> 1;
      if ((HEAP8[i21] & 1) == 0) {
       __ZN3WTF6StringC1EPKtj(i6, i23, i24);
      } else {
       __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i6, i23, i24);
      }
      i24 = HEAP32[i16 >> 2] | 0;
      if ((i24 | 0) == 0) {
       break;
      }
      if ((HEAP32[i24 + 4 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i6, 0);
     }
    } while (0);
    do {
     if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
      i29 = 1;
     } else {
      i23 = HEAP32[(HEAP32[HEAP32[i18 >> 2] >> 2] | 0) + 4 >> 2] | 0;
      L28 : do {
       if ((i23 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i17) | 0)) {
        i26 = 121;
       } else {
        i24 = HEAP32[(HEAP32[HEAP32[i19 >> 2] >> 2] | 0) + 4 >> 2] | 0;
        do {
         if ((HEAP32[i24 + 12 >> 2] & 4 | 0) != 0) {
          i27 = HEAP32[i24 + 44 >> 2] | 0;
          i30 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
          if ((i27 | 0) == (i30 | 0)) {
           i26 = 121;
           break L28;
          }
          if ((HEAP32[i27 + 12 >> 2] | 0) != (HEAP32[i30 + 12 >> 2] | 0)) {
           break;
          }
          if ((HEAP32[i27 + 16 >> 2] | 0) == (HEAP32[i30 + 16 >> 2] | 0)) {
           i26 = 121;
           break L28;
          }
         }
        } while (0);
        __ZN7WebCore16HTMLElementStack3popEv(i17);
        HEAP32[i13 >> 2] = 9;
       }
      } while (0);
      if ((i26 | 0) == 121) {
       i26 = 0;
       i23 = HEAP32[i14 >> 2] | 0;
       L37 : while (1) {
        i24 = HEAP16[i23 >> 1] | 0;
        if ((i24 & 65535) >>> 0 < 33 >>> 0) {
         switch (i24 << 16 >> 16) {
         case 32:
         case 10:
         case 9:
         case 13:
         case 12:
          {
           i31 = i23;
           break L37;
           break;
          }
         default:
          {}
         }
        }
        i24 = i23 + 2 | 0;
        HEAP32[i14 >> 2] = i24;
        if ((i24 | 0) == (HEAP32[i15 >> 2] | 0)) {
         i31 = i24;
         break;
        } else {
         i23 = i24;
        }
       }
       if ((i31 | 0) == (HEAP32[i15 >> 2] | 0)) {
        i29 = 1;
        break;
       }
      }
      i29 = 2;
     }
    } while (0);
    i23 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i24 = i23 | 0;
      i30 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i24 >> 2] = i30;
       break;
      }
     }
    } while (0);
    if ((i29 | 0) == 2) {
     continue L1;
    } else {
     i26 = 195;
     break L1;
    }
    break;
   }
  case 18:
  case 21:
   {
    HEAP32[i13 >> 2] = 7;
    continue L1;
    break;
   }
  case 8:
   {
    i26 = 133;
    break L1;
    break;
   }
  case 1:
   {
    i26 = 13;
    break L1;
    break;
   }
  case 17:
  case 16:
   {
    i26 = 165;
    break L1;
    break;
   }
  case 4:
   {
    i23 = HEAP32[i14 >> 2] | 0;
    i30 = i23;
    L53 : while (1) {
     i24 = HEAP16[i30 >> 1] | 0;
     if ((i24 & 65535) >>> 0 >= 33 >>> 0) {
      i32 = i30;
      break;
     }
     switch (i24 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i32 = i30;
       break L53;
      }
     }
     i24 = i30 + 2 | 0;
     HEAP32[i14 >> 2] = i24;
     if ((i24 | 0) == (HEAP32[i15 >> 2] | 0)) {
      i32 = i24;
      break;
     } else {
      i30 = i24;
     }
    }
    do {
     if ((i23 | 0) == (i32 | 0)) {
      HEAP32[i22 >> 2] = 0;
     } else {
      i30 = i32 - i23 >> 1;
      if ((HEAP8[i21] & 1) == 0) {
       __ZN3WTF6StringC1EPKtj(i8, i23, i30);
      } else {
       __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i8, i23, i30);
      }
      i30 = HEAP32[i22 >> 2] | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      if ((HEAP32[i30 + 4 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i8, 0);
     }
    } while (0);
    if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
     i33 = 1;
    } else {
     __ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv(i1);
     i33 = 2;
    }
    i23 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i30 = i23 | 0;
      i24 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i30 >> 2] = i24;
       break;
      }
     }
    } while (0);
    if ((i33 | 0) == 2) {
     continue L1;
    } else {
     i26 = 189;
     break L1;
    }
    break;
   }
  case 5:
   {
    i26 = 44;
    break L1;
    break;
   }
  case 2:
   {
    i26 = 19;
    break L1;
    break;
   }
  case 0:
   {
    i26 = 7;
    break L1;
    break;
   }
  case 9:
  case 13:
  case 14:
   {
    i26 = 64;
    break L1;
    break;
   }
  default:
   {
    i26 = 192;
    break L1;
   }
  }
 }
 L77 : do {
  if ((i26 | 0) == 172) {
   __ZN7WebCore15HTMLTreeBuilder28ExternalCharacterTokenBuffer23takeRemainingWhitespaceEv(i11, i2);
   i33 = i11 | 0;
   i22 = HEAP32[i33 >> 2] | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
     i34 = i22;
    } else {
     __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i20);
     __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i11, 0);
     i8 = HEAP32[i33 >> 2] | 0;
     if ((i8 | 0) != 0) {
      i34 = i8;
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i33 = i34 | 0;
   i22 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i33 >> 2] = i22;
    STACKTOP = i3;
    return;
   }
  } else if ((i26 | 0) == 159) {
   __ZN7WebCore15HTMLTreeBuilder28ExternalCharacterTokenBuffer23takeRemainingWhitespaceEv(i9, i2);
   i22 = i9 | 0;
   i33 = HEAP32[i22 >> 2] | 0;
   if ((i33 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   do {
    if ((HEAP32[i33 + 4 >> 2] | 0) == 0) {
     i35 = i33;
    } else {
     __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i9, 0);
     i8 = HEAP32[i22 >> 2] | 0;
     if ((i8 | 0) != 0) {
      i35 = i8;
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i22 = i35 | 0;
   i33 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i22 >> 2] = i33;
    STACKTOP = i3;
    return;
   }
  } else if ((i26 | 0) == 133) {
   i33 = HEAP32[i14 >> 2] | 0;
   i22 = HEAP32[i15 >> 2] | 0;
   HEAP32[i14 >> 2] = i22;
   i8 = i22 - i33 >> 1;
   if ((HEAP8[i21] & 1) == 0) {
    __ZN3WTF6StringC1EPKtj(i7, i33, i8);
   } else {
    __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i7, i33, i8);
   }
   __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i7, 2);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i33 = i8 | 0;
   i22 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i33 >> 2] = i22;
    STACKTOP = i3;
    return;
   }
  } else if ((i26 | 0) == 189) {
   STACKTOP = i3;
   return;
  } else if ((i26 | 0) == 192) {
   STACKTOP = i3;
   return;
  } else if ((i26 | 0) == 195) {
   STACKTOP = i3;
   return;
  } else if ((i26 | 0) == 202) {
   STACKTOP = i3;
   return;
  } else if ((i26 | 0) == 165) {
   i22 = HEAP32[i14 >> 2] | 0;
   i33 = HEAP32[i15 >> 2] | 0;
   HEAP32[i14 >> 2] = i33;
   i8 = i33 - i22 >> 1;
   if ((HEAP8[i21] & 1) == 0) {
    __ZN3WTF6StringC1EPKtj(i10, i22, i8);
   } else {
    __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i10, i22, i8);
   }
   __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i10, 2);
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i22 = i8 | 0;
   i33 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i22 >> 2] = i33;
    STACKTOP = i3;
    return;
   }
  } else if ((i26 | 0) == 7) {
   i33 = HEAP32[i14 >> 2] | 0;
   L135 : while (1) {
    i22 = HEAP16[i33 >> 1] | 0;
    if ((i22 & 65535) >>> 0 >= 33 >>> 0) {
     i36 = i33;
     break;
    }
    switch (i22 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i36 = i33;
      break L135;
     }
    }
    i22 = i33 + 2 | 0;
    HEAP32[i14 >> 2] = i22;
    if ((i22 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i36 = i22;
     break;
    } else {
     i33 = i22;
    }
   }
   if ((i36 | 0) == (HEAP32[i15 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i20);
    HEAP32[i13 >> 2] = 1;
    i26 = 13;
    break;
   }
  } else if ((i26 | 0) == 64) {
   i33 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i22 = i33 | 0;
     i8 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i8 + 1;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i33);
      __ZN3WTF8fastFreeEPv(i33);
      break;
     } else {
      HEAP32[i22 >> 2] = i8;
      break;
     }
    }
   } while (0);
   L150 : do {
    if ((HEAP8[i33 + 28 | 0] & 1) == 0) {
     i8 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i22 = i8 | 0;
       i32 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = i32 + 1;
       if ((i32 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i8);
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i22 >> 2] = i32;
        break;
       }
      }
     } while (0);
     i32 = HEAP32[i8 + 4 >> 2] | 0;
     if ((HEAP32[i32 + 12 >> 2] & 16 | 0) == 0) {
      i26 = 75;
     } else {
      if ((HEAP32[(HEAP32[i32 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i26 = 75;
      }
     }
     do {
      if ((i26 | 0) == 75) {
       i32 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i22 = i32 | 0;
         i29 = HEAP32[i22 >> 2] | 0;
         HEAP32[i22 >> 2] = i29 + 1;
         if ((i29 | 0) == 0) {
          __ZN7WebCore13HTMLStackItemD2Ev(i32);
          __ZN3WTF8fastFreeEPv(i32);
          break;
         } else {
          HEAP32[i22 >> 2] = i29;
          break;
         }
        }
       } while (0);
       i29 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
       if ((HEAP32[i32 + 8 >> 2] | 0) == (HEAP32[i29 + 12 >> 2] | 0)) {
        if ((HEAP32[i32 + 24 >> 2] | 0) == (HEAP32[i29 + 16 >> 2] | 0)) {
         break;
        }
       }
       i29 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i22 = i29 | 0;
         i16 = HEAP32[i22 >> 2] | 0;
         HEAP32[i22 >> 2] = i16 + 1;
         if ((i16 | 0) == 0) {
          __ZN7WebCore13HTMLStackItemD2Ev(i29);
          __ZN3WTF8fastFreeEPv(i29);
          break;
         } else {
          HEAP32[i22 >> 2] = i16;
          break;
         }
        }
       } while (0);
       i32 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
       if ((HEAP32[i29 + 8 >> 2] | 0) == (HEAP32[i32 + 12 >> 2] | 0)) {
        if ((HEAP32[i29 + 24 >> 2] | 0) == (HEAP32[i32 + 16 >> 2] | 0)) {
         break;
        }
       }
       i32 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i16 = i32 | 0;
         i22 = HEAP32[i16 >> 2] | 0;
         HEAP32[i16 >> 2] = i22 + 1;
         if ((i22 | 0) == 0) {
          __ZN7WebCore13HTMLStackItemD2Ev(i32);
          __ZN3WTF8fastFreeEPv(i32);
          break;
         } else {
          HEAP32[i16 >> 2] = i22;
          break;
         }
        }
       } while (0);
       i29 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
       if ((HEAP32[i32 + 8 >> 2] | 0) == (HEAP32[i29 + 12 >> 2] | 0)) {
        if ((HEAP32[i32 + 24 >> 2] | 0) == (HEAP32[i29 + 16 >> 2] | 0)) {
         break;
        }
       }
       i29 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i22 = i29 | 0;
         i16 = HEAP32[i22 >> 2] | 0;
         HEAP32[i22 >> 2] = i16 + 1;
         if ((i16 | 0) == 0) {
          __ZN7WebCore13HTMLStackItemD2Ev(i29);
          __ZN3WTF8fastFreeEPv(i29);
          break;
         } else {
          HEAP32[i22 >> 2] = i16;
          break;
         }
        }
       } while (0);
       i32 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
       if ((HEAP32[i29 + 8 >> 2] | 0) != (HEAP32[i32 + 12 >> 2] | 0)) {
        break L150;
       }
       if ((HEAP32[i29 + 24 >> 2] | 0) != (HEAP32[i32 + 16 >> 2] | 0)) {
        break L150;
       }
      }
     } while (0);
     HEAP32[i1 + 108 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i13 >> 2] = 10;
     i26 = 101;
     break L77;
    }
   } while (0);
   i33 = i1 + 93 | 0;
   i8 = HEAP8[i33] & 1;
   HEAP8[i33] = 1;
   __ZN7WebCore15HTMLTreeBuilder31processCharacterBufferForInBodyERNS0_28ExternalCharacterTokenBufferE(i1, i2);
   HEAP8[i33] = i8;
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i26 | 0) == 101) {
  i13 = HEAP32[i14 >> 2] | 0;
  __ZN3WTF13StringBuilder6appendEPKtj(i1 + 124 | 0, i13, (HEAP32[i15 >> 2] | 0) - i13 >> 1);
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  STACKTOP = i3;
  return;
 }
 do {
  if ((i26 | 0) == 13) {
   i13 = HEAP32[i14 >> 2] | 0;
   L204 : while (1) {
    i19 = HEAP16[i13 >> 1] | 0;
    if ((i19 & 65535) >>> 0 >= 33 >>> 0) {
     i37 = i13;
     break;
    }
    switch (i19 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i37 = i13;
      break L204;
     }
    }
    i19 = i13 + 2 | 0;
    HEAP32[i14 >> 2] = i19;
    if ((i19 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i37 = i19;
     break;
    } else {
     i13 = i19;
    }
   }
   if ((i37 | 0) == (HEAP32[i15 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv(i1);
    i26 = 19;
    break;
   }
  }
 } while (0);
 do {
  if ((i26 | 0) == 19) {
   i37 = HEAP32[i14 >> 2] | 0;
   L214 : while (1) {
    i13 = HEAP16[i37 >> 1] | 0;
    if ((i13 & 65535) >>> 0 >= 33 >>> 0) {
     i38 = i37;
     break;
    }
    switch (i13 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i38 = i37;
      break L214;
     }
    }
    i13 = i37 + 2 | 0;
    HEAP32[i14 >> 2] = i13;
    if ((i13 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i38 = i13;
     break;
    } else {
     i37 = i13;
    }
   }
   if ((i38 | 0) == (HEAP32[i15 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv(i1);
    i26 = 25;
    break;
   }
  }
 } while (0);
 do {
  if ((i26 | 0) == 25) {
   i38 = HEAP32[i14 >> 2] | 0;
   i37 = i38;
   L224 : while (1) {
    i13 = HEAP16[i37 >> 1] | 0;
    if ((i13 & 65535) >>> 0 >= 33 >>> 0) {
     i39 = i37;
     break;
    }
    switch (i13 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i39 = i37;
      break L224;
     }
    }
    i13 = i37 + 2 | 0;
    HEAP32[i14 >> 2] = i13;
    if ((i13 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i39 = i13;
     break;
    } else {
     i37 = i13;
    }
   }
   do {
    if ((i38 | 0) == (i39 | 0)) {
     HEAP32[i4 >> 2] = 0;
    } else {
     i37 = i39 - i38 >> 1;
     if ((HEAP8[i21] & 1) == 0) {
      __ZN3WTF6StringC1EPKtj(i4, i38, i37);
      break;
     } else {
      __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i4, i38, i37);
      break;
     }
    }
   } while (0);
   i38 = i4 | 0;
   i37 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     if ((HEAP32[i37 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i4, 0);
    }
   } while (0);
   if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
    i40 = 1;
   } else {
    __ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv(i1);
    i40 = 0;
   }
   i37 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i13 = i37 | 0;
     i19 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i37);
      break;
     } else {
      HEAP32[i13 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if ((i40 | 0) != 1) {
    i26 = 44;
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if ((i26 | 0) == 44) {
   i40 = HEAP32[i14 >> 2] | 0;
   i4 = i40;
   L252 : while (1) {
    i39 = HEAP16[i4 >> 1] | 0;
    if ((i39 & 65535) >>> 0 >= 33 >>> 0) {
     i41 = i4;
     break;
    }
    switch (i39 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i41 = i4;
      break L252;
     }
    }
    i39 = i4 + 2 | 0;
    HEAP32[i14 >> 2] = i39;
    if ((i39 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i41 = i39;
     break;
    } else {
     i4 = i39;
    }
   }
   do {
    if ((i40 | 0) == (i41 | 0)) {
     HEAP32[i5 >> 2] = 0;
    } else {
     i4 = i41 - i40 >> 1;
     if ((HEAP8[i21] & 1) == 0) {
      __ZN3WTF6StringC1EPKtj(i5, i40, i4);
      break;
     } else {
      __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i5, i40, i4);
      break;
     }
    }
   } while (0);
   i40 = i5 | 0;
   i4 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i20, i5, 0);
    }
   } while (0);
   if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
    i42 = 1;
   } else {
    __ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv(i1);
    i42 = 0;
   }
   i4 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i39 = i4 | 0;
     i37 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i39 >> 2] = i37;
      break;
     }
    }
   } while (0);
   if ((i42 | 0) != 1) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder31processCharacterBufferForInBodyERNS0_28ExternalCharacterTokenBufferE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i1 + 104 | 0;
 L1 : do {
  switch (HEAP32[i6 >> 2] | 0) {
  case 8:
   {
    if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
     HEAP32[i6 >> 2] = HEAP32[i1 + 108 >> 2];
     STACKTOP = i3;
     return;
    }
    do {
     if (((HEAP32[i1 + 88 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
      i7 = HEAP32[(HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0) + 4 >> 2] | 0;
      if ((i7 | 0) != 0) {
       i8 = i7 + 8 | 0;
       HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
      }
      i8 = i1 + 156 | 0;
      i9 = HEAP32[i8 >> 2] | 0;
      HEAP32[i8 >> 2] = i7;
      if ((i9 | 0) == 0) {
       break;
      }
      i7 = i9 + 8 | 0;
      i9 = i7 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i8;
      if ((i8 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
    HEAP32[i6 >> 2] = HEAP32[i1 + 108 >> 2];
    i7 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
    if ((i7 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    HEAP32[i7 >> 2] = 0;
    STACKTOP = i3;
    return;
   }
  case 7:
   {
    break;
   }
  case 9:
   {
    __ZN7WebCore15HTMLTreeBuilder23processEndTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 10:
   {
    __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 6:
   {
    if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
    STACKTOP = i3;
    return;
   }
  case 12:
   {
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i8 = i1 + 28 | 0;
     i9 = HEAP32[(HEAP32[HEAP32[i8 >> 2] >> 2] | 0) + 4 >> 2] | 0;
     if ((i9 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i8) | 0)) {
      STACKTOP = i3;
      return;
     }
     i9 = HEAP32[(HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((HEAP32[i9 + 12 >> 2] & 4 | 0) != 0) {
       i10 = HEAP32[i9 + 44 >> 2] | 0;
       i11 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
       if ((i10 | 0) == (i11 | 0)) {
        STACKTOP = i3;
        return;
       }
       if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
        break;
       }
       STACKTOP = i3;
       return;
      }
     } while (0);
     __ZN7WebCore16HTMLElementStack3popEv(i8);
     HEAP32[i6 >> 2] = 9;
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
     STACKTOP = i3;
     return;
    }
    i9 = i1 + 28 | 0;
    if ((HEAP32[(HEAP32[HEAP32[i9 >> 2] >> 2] | 0) + 4 >> 2] | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i9) | 0)) {
     STACKTOP = i3;
     return;
    }
    i11 = HEAP32[(HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0) + 4 >> 2] | 0;
    do {
     if ((HEAP32[i11 + 12 >> 2] & 4 | 0) != 0) {
      i10 = HEAP32[i11 + 44 >> 2] | 0;
      i12 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
      if ((i10 | 0) == (i12 | 0)) {
       STACKTOP = i3;
       return;
      }
      if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
       break;
      }
      STACKTOP = i3;
      return;
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack3popEv(i9);
    HEAP32[i6 >> 2] = 9;
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 11:
   {
    i11 = HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0;
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
     i8 = i1 + 28 | 0;
     if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i8, i11 + 12 | 0) | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
     __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i8, (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0);
     __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
     HEAP32[i6 >> 2] = 9;
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i8 = i1 + 28 | 0;
     if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i8, i11 + 12 | 0) | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
     __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i8, (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0);
     __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
     HEAP32[i6 >> 2] = 9;
     __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
     STACKTOP = i3;
     return;
    }
    if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 5:
   {
    i13 = i2 + 4 | 0;
    i14 = 25;
    break;
   }
  case 1:
   {
    i14 = 7;
    break;
   }
  case 19:
   {
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i7 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
     STACKTOP = i3;
     return;
    }
    i7 = i1 + 28 | 0;
    if ((HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i7) | 0)) {
     STACKTOP = i3;
     return;
    }
    if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i7) | 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore16HTMLElementStack3popEv(i7);
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     STACKTOP = i3;
     return;
    }
    i7 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i8 = i7 | 0;
      i11 = HEAP32[i8 >> 2] | 0;
      HEAP32[i8 >> 2] = i11 + 1;
      if ((i11 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i7);
       __ZN3WTF8fastFreeEPv(i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0;
    do {
     if ((HEAP32[i7 + 8 >> 2] | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
      if ((HEAP32[i7 + 24 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
       break;
      }
      STACKTOP = i3;
      return;
     }
    } while (0);
    HEAP32[i6 >> 2] = 20;
    STACKTOP = i3;
    return;
   }
  case 3:
   {
    i15 = i2 + 4 | 0;
    i14 = 17;
    break;
   }
  case 2:
   {
    i16 = i2 + 4 | 0;
    i14 = 12;
    break;
   }
  case 21:
   {
    i14 = 70;
    break;
   }
  case 4:
   {
    i9 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
     __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
     HEAP32[i6 >> 2] = 3;
     STACKTOP = i3;
     return;
    }
    if ((i9 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv(i1);
    __ZN7WebCore15HTMLTreeBuilder12processTokenEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 20:
   {
    if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     STACKTOP = i3;
     return;
    }
    HEAP32[i6 >> 2] = 22;
    STACKTOP = i3;
    return;
   }
  case 17:
   {
    i9 = i2 + 4 | 0;
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
       break;
      }
      if ((i7 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i7 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) != (i7 | 0)) {
       i17 = i7;
       i14 = 121;
       break L1;
      }
     }
    } while (0);
    if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, i9) | 0)) {
     STACKTOP = i3;
     return;
    }
    i7 = (HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 | 0;
    i11 = i5 | 0;
    HEAP32[i11 >> 2] = 0;
    i8 = i5 + 4 | 0;
    HEAP32[i8 >> 2] = 0;
    i12 = i5 + 8 | 0;
    HEAP32[i12 >> 2] = 0;
    __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 3, i7, i5);
    i7 = HEAP32[i12 >> 2] | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i18 = i10 + (i7 << 3) | 0;
     i7 = i10;
     while (1) {
      i19 = HEAP32[i7 + 4 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i20 = i19 | 0;
        i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
        if ((i21 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i19);
         break;
        } else {
         HEAP32[i20 >> 2] = i21;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
      i7 = i7 + 8 | 0;
      if ((i7 | 0) == (i18 | 0)) {
       break;
      }
     }
     HEAP32[i12 >> 2] = 0;
    }
    if ((i10 | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i4);
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
    __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
    STACKTOP = i3;
    return;
   }
  case 0:
   {
    __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i1 + 12 | 0);
    HEAP32[i6 >> 2] = 1;
    i14 = 7;
    break;
   }
  case 16:
   {
    i17 = HEAP32[i2 + 4 >> 2] | 0;
    i14 = 121;
    break;
   }
  case 14:
   {
    __ZN7WebCore15HTMLTreeBuilder21processEndTagForInRowEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 15:
   {
    __ZN7WebCore15HTMLTreeBuilder22processEndTagForInCellEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 13:
   {
    __ZN7WebCore15HTMLTreeBuilder27processEndTagForInTableBodyEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
  case 18:
   {
    if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i14 = 70;
     break L1;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     STACKTOP = i3;
     return;
    }
    HEAP32[i6 >> 2] = 21;
    STACKTOP = i3;
    return;
   }
  default:
   {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 7) {
  i4 = i2 + 4 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv(i1);
  i16 = i4;
  i14 = 12;
 } else if ((i14 | 0) == 70) {
  HEAP32[i6 >> 2] = 7;
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
  STACKTOP = i3;
  return;
 } else if ((i14 | 0) == 121) {
  i4 = i2 + 4 | 0;
  if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i5 = i1 + 28 | 0;
   i18 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i7 = i18 | 0;
     i9 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i9 + 1;
     if ((i9 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i18 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i9 + 12 >> 2] & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     i18 = i1 + 28 | 0;
     if ((__ZNK7WebCore16HTMLElementStack11oneBelowTopEv(i18) | 0) == 0) {
      break;
     }
     i7 = HEAP32[(__ZNK7WebCore16HTMLElementStack11oneBelowTopEv(i18) | 0) + 4 >> 2] | 0;
     if ((HEAP32[i7 + 12 >> 2] & 16 | 0) == 0) {
      break;
     }
     if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 | 0);
    }
   } while (0);
   i9 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i5 = i9 | 0;
     i7 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i7 + 1;
     if ((i7 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i5 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 12 >> 2] & 16 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
   STACKTOP = i3;
   return;
  } else {
   if ((i17 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i7 = i1 + 28 | 0;
     if (!(__ZNK7WebCore16HTMLElementStack13inSelectScopeERKN3WTF12AtomicStringE(i7, i4) | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i7, (HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 | 0);
     __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
     STACKTOP = i3;
     return;
    } else {
     if ((i17 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
     STACKTOP = i3;
     return;
    }
   }
   i17 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i7 = i17 | 0;
     i4 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i4 + 1;
     if ((i4 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i7 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i17 + 4 >> 2] | 0;
   if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
   STACKTOP = i3;
   return;
  }
 }
 if ((i14 | 0) == 12) {
  i4 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv(i1);
  i15 = i16;
  i14 = 17;
 }
 if ((i14 | 0) == 17) {
  i16 = HEAP32[i15 >> 2] | 0;
  if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
   __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
   STACKTOP = i3;
   return;
  }
  if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
   __ZN7WebCore16HTMLElementStack18popHTMLHeadElementEv(i1 + 28 | 0);
   HEAP32[i6 >> 2] = 5;
   STACKTOP = i3;
   return;
  }
  do {
   if ((i16 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv(i1);
  i13 = i15;
  i14 = 25;
 }
 if ((i14 | 0) == 25) {
  i14 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i14 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv(i1);
 }
 __ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 160 | 0;
 i9 = i3 + 168 | 0;
 i10 = i3 + 184 | 0;
 i11 = i2 + 4 | 0;
 i12 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
 i13 = i11 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
  if (!(__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, i12 + 12 | 0) | 0)) {
   STACKTOP = i3;
   return;
  }
  HEAP32[i1 + 104 >> 2] = 18;
  STACKTOP = i3;
  return;
 }
 if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i15 = i7 | 0;
  HEAP32[i15 >> 2] = 0;
  i16 = i7 + 4 | 0;
  HEAP32[i16 >> 2] = 0;
  i17 = i7 + 8 | 0;
  HEAP32[i17 >> 2] = 0;
  __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i6, 3, i12 + 12 | 0, i7);
  i7 = HEAP32[i17 >> 2] | 0;
  i12 = HEAP32[i15 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i18 = i12 + (i7 << 3) | 0;
   i7 = i12;
   while (1) {
    i19 = HEAP32[i7 + 4 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i20 = i19 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i20 >> 2] = i21;
       break;
      }
     }
    } while (0);
    __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    i7 = i7 + 8 | 0;
    if ((i7 | 0) == (i18 | 0)) {
     break;
    }
   }
   HEAP32[i17 >> 2] = 0;
  }
  if ((i12 | 0) != 0) {
   HEAP32[i15 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
  if (__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0) | 0) {
   HEAP32[i1 + 104 >> 2] = 18;
   __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
  }
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i6);
  STACKTOP = i3;
  return;
 }
 do {
  if ((i14 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10articleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8asideTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9centerTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10detailsTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6dirTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11fieldsetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13figcaptionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9figureTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9footerTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9headerTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9hgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7mainTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6navTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10sectionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10summaryTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   do {
    if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i6 = i1 + 28 | 0;
     i12 = i1 + 12 | 0;
     if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i6) | 0) {
      if (__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i6, i11) | 0) {
       __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i12);
       __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i6, i11);
       break;
      } else {
       STACKTOP = i3;
       return;
      }
     }
     __ZN7WebCore20HTMLConstructionSite8takeFormEv(i8, i12);
     i16 = i8 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     i16 = i15 | 0;
     if ((i15 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     if (__ZNK7WebCore16HTMLElementStack7inScopeEPNS_7ElementE(i6, i16) | 0) {
      __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i12);
      __ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE(i6, i16);
      i22 = 0;
     } else {
      i22 = 1;
     }
     i16 = i15 + 8 | 0;
     i15 = i16 - 8 | 0;
     i6 = i16 | 0;
     i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i12;
     do {
      if ((i12 | 0) < 1) {
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15);
      }
     } while (0);
     if ((i22 | 0) != 1) {
      break;
     }
     STACKTOP = i3;
     return;
    }
   } while (0);
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i16 = i1 + 28 | 0;
    if (__ZNK7WebCore16HTMLElementStack13inButtonScopeERKN3WTF12AtomicStringE(i16, i11) | 0) {
     __ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE(i1 + 12 | 0, i11);
     i12 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i6 = i12 | 0;
       i17 = HEAP32[i6 >> 2] | 0;
       HEAP32[i6 >> 2] = i17 + 1;
       if ((i17 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i12);
        __ZN3WTF8fastFreeEPv(i12);
        break;
       } else {
        HEAP32[i6 >> 2] = i17;
        break;
       }
      }
     } while (0);
     __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i16, i11);
     STACKTOP = i3;
     return;
    }
    i12 = i9 | 0;
    HEAP32[i12 >> 2] = 0;
    i17 = i9 + 4 | 0;
    HEAP32[i17 >> 2] = 0;
    i6 = i9 + 8 | 0;
    HEAP32[i6 >> 2] = 0;
    __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 2, (HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 | 0, i9);
    __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i4);
    __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
    i18 = HEAP32[i6 >> 2] | 0;
    i7 = HEAP32[i12 >> 2] | 0;
    if ((i18 | 0) != 0) {
     i19 = i7 + (i18 << 3) | 0;
     i18 = i7;
     while (1) {
      i21 = HEAP32[i18 + 4 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i20 = i21 | 0;
        i23 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
        if ((i23 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i21);
         break;
        } else {
         HEAP32[i20 >> 2] = i23;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i18 | 0);
      i18 = i18 + 8 | 0;
      if ((i18 | 0) == (i19 | 0)) {
       break;
      }
     }
     HEAP32[i6 >> 2] = 0;
    }
    if ((i7 | 0) != 0) {
     HEAP32[i12 >> 2] = 0;
     HEAP32[i17 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i7);
    }
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
    STACKTOP = i3;
    return;
   }
   if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i19 = i1 + 28 | 0;
    if (!(__ZNK7WebCore16HTMLElementStack15inListItemScopeERKN3WTF12AtomicStringE(i19, i11) | 0)) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE(i1 + 12 | 0, i11);
    i18 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i16 = i18 | 0;
      i21 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i21 + 1;
      if ((i21 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i18);
       __ZN3WTF8fastFreeEPv(i18);
       break;
      } else {
       HEAP32[i16 >> 2] = i21;
       break;
      }
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i19, i11);
    STACKTOP = i3;
    return;
   }
   do {
    if ((i15 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     do {
      if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0) + 12 >> 2] | 0) != (i15 | 0)) {
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
        break;
       }
       if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
        break;
       }
       do {
        if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0) != (i15 | 0)) {
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7nobrTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4bTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6bigTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7codeTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5emTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4iTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4sTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8smallTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strikeTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strongTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ttTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4uTagE >> 2] | 0) + 12 >> 2] | 0) == (i15 | 0)) {
          break;
         }
         do {
          if ((i15 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
           if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0) + 12 >> 2] | 0)) {
            break;
           }
           if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
            break;
           }
           i18 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
           if ((i15 | 0) != (HEAP32[i18 + 12 >> 2] | 0)) {
            if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
             __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0;
             STACKTOP = i3;
             return;
            } else {
             __ZN7WebCore15HTMLTreeBuilder30processAnyOtherEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
             STACKTOP = i3;
             return;
            }
           }
           i7 = i10 | 0;
           HEAP32[i7 >> 2] = 0;
           i17 = i10 + 4 | 0;
           HEAP32[i17 >> 2] = 0;
           i12 = i10 + 8 | 0;
           HEAP32[i12 >> 2] = 0;
           __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i5, 2, i18 + 12 | 0, i10);
           __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i5);
           __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
           i18 = HEAP32[i12 >> 2] | 0;
           i6 = HEAP32[i7 >> 2] | 0;
           if ((i18 | 0) != 0) {
            i21 = i6 + (i18 << 3) | 0;
            i18 = i6;
            while (1) {
             i16 = HEAP32[i18 + 4 >> 2] | 0;
             do {
              if ((i16 | 0) != 0) {
               i23 = i16 | 0;
               i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
               if ((i20 | 0) == 0) {
                __ZN3WTF10StringImpl7destroyEPS0_(i16);
                break;
               } else {
                HEAP32[i23 >> 2] = i20;
                break;
               }
              }
             } while (0);
             __ZN7WebCore13QualifiedNameD1Ev(i18 | 0);
             i18 = i18 + 8 | 0;
             if ((i18 | 0) == (i21 | 0)) {
              break;
             }
            }
            HEAP32[i12 >> 2] = 0;
           }
           if ((i6 | 0) == 0) {
            STACKTOP = i3;
            return;
           }
           HEAP32[i7 >> 2] = 0;
           HEAP32[i17 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i6);
           STACKTOP = i3;
           return;
          }
         } while (0);
         i21 = i1 + 28 | 0;
         if (!(__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i21, i11) | 0)) {
          STACKTOP = i3;
          return;
         }
         __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
         i18 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
         do {
          if ((i18 | 0) != 0) {
           i16 = i18 | 0;
           i20 = HEAP32[i16 >> 2] | 0;
           HEAP32[i16 >> 2] = i20 + 1;
           if ((i20 | 0) == 0) {
            __ZN7WebCore13HTMLStackItemD2Ev(i18);
            __ZN3WTF8fastFreeEPv(i18);
            break;
           } else {
            HEAP32[i16 >> 2] = i20;
            break;
           }
          }
         } while (0);
         __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i21, i11);
         __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
         STACKTOP = i3;
         return;
        }
       } while (0);
       __ZN7WebCore15HTMLTreeBuilder21callTheAdoptionAgencyEPNS_15AtomicHTMLTokenE(i1, i2);
       STACKTOP = i3;
       return;
      }
     } while (0);
     i18 = i1 + 28 | 0;
     if (!(__ZNK7WebCore16HTMLElementStack31hasNumberedHeaderElementInScopeEv(i18) | 0)) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
     i20 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i16 = i20 | 0;
       i23 = HEAP32[i16 >> 2] | 0;
       HEAP32[i16 >> 2] = i23 + 1;
       if ((i23 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i20);
        __ZN3WTF8fastFreeEPv(i20);
        break;
       } else {
        HEAP32[i16 >> 2] = i23;
        break;
       }
      }
     } while (0);
     __ZN7WebCore16HTMLElementStack35popUntilNumberedHeaderElementPoppedEv(i18);
     STACKTOP = i3;
     return;
    }
   } while (0);
   i15 = i1 + 28 | 0;
   if (!(__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i15, i11) | 0)) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE(i1 + 12 | 0, i11);
   i19 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 | 0;
     i23 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i23 + 1;
     if ((i23 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i20 >> 2] = i23;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i15, i11);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i2, i11) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
 i5 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10 + 1;
   if ((i10 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i2, i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder28processTokenInForeignContentEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 2) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  L3 : do {
   if ((i6 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4bTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6bigTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9centerTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7codeTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5emTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4iTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7nobrTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7rubyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4sTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8smallTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strongTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9strikeTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6subTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6supTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ttTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4uTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6varTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    L48 : do {
     if ((i6 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = HEAP32[i2 + 40 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = HEAP32[i2 + 32 >> 2] | 0;
      i9 = HEAP32[__ZN7WebCore9HTMLNames9colorAttrE >> 2] | 0;
      i10 = i9 + 12 | 0;
      i11 = i9 + 16 | 0;
      i12 = 0;
      while (1) {
       i13 = HEAP32[i8 + (i12 << 3) >> 2] | 0;
       if ((i13 | 0) == (i9 | 0)) {
        i14 = 52;
        break;
       }
       if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
         i14 = 52;
         break;
        }
       }
       i13 = i12 + 1 | 0;
       if (i13 >>> 0 < i7 >>> 0) {
        i12 = i13;
       } else {
        break;
       }
      }
      do {
       if ((i14 | 0) == 52) {
        if (i7 >>> 0 > i12 >>> 0) {
         if ((i8 + (i12 << 3) | 0) == 0) {
          break;
         } else {
          break L3;
         }
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      i12 = HEAP32[__ZN7WebCore9HTMLNames8faceAttrE >> 2] | 0;
      i11 = i12 + 12 | 0;
      i10 = i12 + 16 | 0;
      i9 = 0;
      while (1) {
       i13 = HEAP32[i8 + (i9 << 3) >> 2] | 0;
       if ((i13 | 0) == (i12 | 0)) {
        i14 = 60;
        break;
       }
       if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
        if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
         i14 = 60;
         break;
        }
       }
       i13 = i9 + 1 | 0;
       if (i13 >>> 0 < i7 >>> 0) {
        i9 = i13;
       } else {
        break;
       }
      }
      do {
       if ((i14 | 0) == 60) {
        if (i7 >>> 0 > i9 >>> 0) {
         if ((i8 + (i9 << 3) | 0) == 0) {
          break;
         } else {
          break L3;
         }
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      i9 = HEAP32[__ZN7WebCore9HTMLNames8sizeAttrE >> 2] | 0;
      i10 = i9 + 12 | 0;
      i11 = i9 + 16 | 0;
      i12 = 0;
      while (1) {
       i13 = HEAP32[i8 + (i12 << 3) >> 2] | 0;
       if ((i13 | 0) == (i9 | 0)) {
        break;
       }
       if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
         break;
        }
       }
       i13 = i12 + 1 | 0;
       if (i13 >>> 0 < i7 >>> 0) {
        i12 = i13;
       } else {
        break L48;
       }
      }
      if (i7 >>> 0 > i12 >>> 0) {
       if ((i8 + (i12 << 3) | 0) == 0) {
        break;
       } else {
        break L3;
       }
      } else {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    } while (0);
    i11 = i1 + 12 | 0;
    i10 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i9 = i10 | 0;
      i13 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = i13 + 1;
      if ((i13 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i10);
       __ZN3WTF8fastFreeEPv(i10);
       break;
      } else {
       HEAP32[i9 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i13 = i10 + 24 | 0;
    i9 = i13 | 0;
    i15 = HEAP32[i9 >> 2] | 0;
    if ((i15 | 0) == (HEAP32[__ZN7WebCore11MathMLNames18mathmlNamespaceURIE >> 2] | 0)) {
     __ZN7WebCoreL22adjustMathMLAttributesEPNS_15AtomicHTMLTokenE(i2);
     i16 = HEAP32[i9 >> 2] | 0;
    } else {
     i16 = i15;
    }
    if ((i16 | 0) == (HEAP32[__ZN7WebCore8SVGNames15svgNamespaceURIE >> 2] | 0)) {
     __ZN7WebCoreL20adjustSVGTagNameCaseEPNS_15AtomicHTMLTokenE(i2);
     __ZN7WebCoreL19adjustSVGAttributesEPNS_15AtomicHTMLTokenE(i2);
    }
    __ZN7WebCoreL23adjustForeignAttributesEPNS_15AtomicHTMLTokenE(i2);
    __ZN7WebCore20HTMLConstructionSite20insertForeignElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i11, i2, i13);
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore16HTMLElementStack33popUntilForeignContentScopeMarkerEv(i1 + 28 | 0);
  __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
  STACKTOP = i3;
  return;
 } else if ((i5 | 0) == 3) {
  i16 = i1 + 28 | 0;
  i6 = HEAP32[HEAP32[i16 >> 2] >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i13 = i6 | 0;
    i15 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i15 + 1;
    if ((i15 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i13 >> 2] = i15;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i6 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore8SVGNames15svgNamespaceURIE >> 2] | 0)) {
   __ZN7WebCoreL20adjustSVGTagNameCaseEPNS_15AtomicHTMLTokenE(i2);
  }
  i6 = i2 + 4 | 0;
  do {
   if ((HEAP32[i6 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore8SVGNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i15 = HEAP32[HEAP32[i16 >> 2] >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i13 = i15 | 0;
      i9 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = i9 + 1;
      if ((i9 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i15);
       __ZN3WTF8fastFreeEPv(i15);
       break;
      } else {
       HEAP32[i13 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[__ZN7WebCore8SVGNames9scriptTagE >> 2] | 0;
    if ((HEAP32[i15 + 8 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i15 + 24 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
     break;
    }
    do {
     if (((HEAP32[i1 + 88 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
      i11 = HEAP32[(HEAP32[HEAP32[i16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
      if ((i11 | 0) != 0) {
       i10 = i11 + 8 | 0;
       HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
      }
      i10 = i1 + 156 | 0;
      i9 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = i11;
      if ((i9 | 0) == 0) {
       break;
      }
      i11 = i9 + 8 | 0;
      i9 = i11 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i10;
      if ((i10 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack3popEv(i1 + 28 | 0);
    STACKTOP = i3;
    return;
   }
  } while (0);
  i15 = HEAP32[HEAP32[i16 >> 2] >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i16 = i15 | 0;
    i11 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i11 + 1;
    if ((i11 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i15);
     __ZN3WTF8fastFreeEPv(i15);
     break;
    } else {
     HEAP32[i16 >> 2] = i11;
     break;
    }
   }
  } while (0);
  L138 : do {
   if ((HEAP32[i15 + 24 >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    if ((HEAP8[i15 + 28 | 0] & 1) != 0) {
     break;
    }
    i11 = i1 + 28 | 0;
    i16 = __ZNK7WebCore16HTMLElementStack9topRecordEv(i11) | 0;
    i10 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i10 | 0) == 0) {
      i17 = i16;
     } else {
      i9 = i10 | 0;
      i13 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = i13 + 1;
      if ((i13 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i10);
       __ZN3WTF8fastFreeEPv(i10);
       i17 = i16;
       break;
      } else {
       HEAP32[i9 >> 2] = i13;
       i17 = i16;
       break;
      }
     }
    } while (0);
    L146 : while (1) {
     i18 = i17 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i16 | 0) == 0) {
       i10 = abort(8) | 0;
       if ((i10 | 0) == (HEAP32[i6 >> 2] | 0)) {
        break L146;
       }
      } else {
       i10 = i16 | 0;
       i13 = HEAP32[i10 >> 2] | 0;
       HEAP32[i10 >> 2] = i13 + 1;
       i9 = (HEAP32[i16 + 8 >> 2] | 0) == (HEAP32[i6 >> 2] | 0);
       if ((i13 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i16);
        __ZN3WTF8fastFreeEPv(i16);
        if (i9) {
         break L146;
        } else {
         break;
        }
       } else {
        HEAP32[i10 >> 2] = i13;
        if (i9) {
         break L146;
        } else {
         break;
        }
       }
      }
     } while (0);
     i17 = HEAP32[i17 + 4 >> 2] | 0;
     i16 = HEAP32[i17 >> 2] | 0;
     i12 = (i16 | 0) == 0;
     if (!i12) {
      i8 = i16 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     }
     if ((HEAP32[i16 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
      i19 = 1;
     } else {
      i19 = (HEAP8[i16 + 28 | 0] & 1) != 0;
     }
     do {
      if (!i12) {
       i8 = i16 | 0;
       i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i7 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i16);
        __ZN3WTF8fastFreeEPv(i16);
        break;
       } else {
        HEAP32[i8 >> 2] = i7;
        break;
       }
      }
     } while (0);
     if (i19) {
      break L138;
     }
    }
    __ZN7WebCore16HTMLElementStack14popUntilPoppedEPNS_7ElementE(i11, HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] | 0);
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
  STACKTOP = i3;
  return;
 } else if ((i5 | 0) == 4) {
  __ZN7WebCore20HTMLConstructionSite13insertCommentEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  STACKTOP = i3;
  return;
 } else if ((i5 | 0) == 5) {
  __ZN3WTF6StringC1EPKtj(i4, HEAP32[i2 + 12 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0);
  __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i1 + 12 | 0, i4, 2);
  i2 = i1 | 0;
  i1 = HEAP32[i4 >> 2] | 0;
  L174 : do {
   if ((HEAP8[i2] & 1) == 0) {
    i14 = 144;
   } else {
    if ((i1 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i4 = HEAP32[i1 + 4 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    L180 : do {
     if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
      i5 = HEAP32[i1 + 8 >> 2] | 0;
      i18 = 0;
      while (1) {
       i19 = HEAP16[i5 + (i18 << 1) >> 1] | 0;
       if ((i19 & 65535) >>> 0 < 33 >>> 0) {
        switch (i19 << 16 >> 16) {
        case 32:
        case 10:
        case 9:
        case 13:
        case 12:
         {
          break;
         }
        default:
         {
          break L180;
         }
        }
       } else {
        if (i19 << 16 >> 16 != -3) {
         break L180;
        }
       }
       i19 = i18 + 1 | 0;
       if (i19 >>> 0 < i4 >>> 0) {
        i18 = i19;
       } else {
        i14 = 144;
        break L174;
       }
      }
     } else {
      i18 = HEAP32[i1 + 8 >> 2] | 0;
      i5 = 0;
      while (1) {
       i19 = HEAP8[i18 + i5 | 0] | 0;
       if ((i19 & 255) >>> 0 >= 33 >>> 0) {
        break L180;
       }
       switch (i19 & 255) {
       case 32:
       case 10:
       case 9:
       case 13:
       case 12:
        {
         break;
        }
       default:
        {
         break L180;
        }
       }
       i19 = i5 + 1 | 0;
       if (i19 >>> 0 < i4 >>> 0) {
        i5 = i19;
       } else {
        i14 = 144;
        break L174;
       }
      }
     }
    } while (0);
    HEAP8[i2] = 0;
    i14 = 144;
   }
  } while (0);
  do {
   if ((i14 | 0) == 144) {
    if ((i1 | 0) != 0) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  i14 = i1 | 0;
  i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i14 >> 2] = i2;
   STACKTOP = i3;
   return;
  }
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[__ZN7WebCore11MathMLNames5miTagE >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore11MathMLNames5moTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore11MathMLNames5mnTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore11MathMLNames5msTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore11MathMLNames8mtextTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore11MathMLNames17annotation_xmlTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore8SVGNames7descTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore8SVGNames8titleTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10addressTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10articleTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8asideTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10bgsoundTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9centerTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10commandTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10detailsTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6dirTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11fieldsetTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13figcaptionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9figureTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9footerTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9headerTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9hgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10isindexTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7mainTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6navTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8paramTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10sectionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10summaryTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((i2 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6wbrTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0) + 12 >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder21callTheAdoptionAgencyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
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
 i14 = i3 + 80 | 0;
 i15 = i1 + 12 | 0;
 i16 = i1 + 48 | 0;
 i17 = i2 + 4 | 0;
 i18 = i1 + 28 | 0;
 i19 = i5 | 0;
 i20 = i6 | 0;
 i21 = i4 | 0;
 i22 = i4 + 4 | 0;
 i23 = i7 | 0;
 i24 = i8 | 0;
 i25 = i11 | 0;
 i26 = i12 | 0;
 i27 = i13 | 0;
 i28 = i14 | 0;
 i29 = i9 | 0;
 i30 = i10 | 0;
 i31 = 0;
 while (1) {
  i32 = __ZN7WebCore25HTMLFormattingElementList29closestElementInScopeWithNameERKN3WTF12AtomicStringE(i16, i17) | 0;
  if ((i32 | 0) == 0) {
   i33 = 3;
   break;
  }
  if (__ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE(i18, i32) | 0) {
   if (!(__ZNK7WebCore16HTMLElementStack7inScopeEPNS_7ElementE(i18, i32) | 0)) {
    i33 = 108;
    break;
   }
  }
  i34 = __ZNK7WebCore16HTMLElementStack4findEPNS_7ElementE(i18, i32) | 0;
  if ((i34 | 0) == 0) {
   i33 = 7;
   break;
  }
  i35 = __ZNK7WebCore16HTMLElementStack33furthestBlockForFormattingElementEPNS_7ElementE(i18, i32) | 0;
  if ((i35 | 0) == 0) {
   i33 = 9;
   break;
  }
  i36 = HEAP32[HEAP32[i34 + 4 >> 2] >> 2] | 0;
  i37 = (i36 | 0) == 0;
  if (!i37) {
   i38 = i36 | 0;
   HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
  }
  __ZN7WebCore25HTMLFormattingElementList11bookmarkForEPNS_7ElementE(i4, i16, i32);
  i38 = 0;
  i39 = i35;
  i40 = HEAP32[i35 + 4 >> 2] | 0;
  L12 : while (1) {
   i41 = HEAP32[i40 + 4 >> 2] | 0;
   i42 = i40 | 0;
   do {
    if (__ZN7WebCore25HTMLFormattingElementList8containsEPNS_7ElementE(i16, HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] | 0) | 0) {
     if ((i40 | 0) == (i34 | 0)) {
      i43 = i39;
      break L12;
     }
     i44 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i44 | 0) == 0) {
       __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i5, i15, i44);
       i45 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       i46 = i45;
      } else {
       i45 = i44 | 0;
       HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
       __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i5, i15, i44);
       i45 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       i47 = i44 | 0;
       i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       if ((i48 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i44);
        __ZN3WTF8fastFreeEPv(i44);
        i46 = i45;
        break;
       } else {
        HEAP32[i47 >> 2] = i48;
        i46 = i45;
        break;
       }
      }
     } while (0);
     i44 = __ZN7WebCore25HTMLFormattingElementList4findEPNS_7ElementE(i16, HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] | 0) | 0;
     if ((i46 | 0) != 0) {
      i45 = i46 | 0;
      HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
     }
     i45 = i44 | 0;
     i48 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = i46;
     do {
      if ((i48 | 0) != 0) {
       i45 = i48 | 0;
       i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       if ((i47 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i48);
        __ZN3WTF8fastFreeEPv(i48);
        break;
       } else {
        HEAP32[i45 >> 2] = i47;
        break;
       }
      }
     } while (0);
     HEAP32[i20 >> 2] = i46;
     __ZN7WebCore16HTMLElementStack13ElementRecord14replaceElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i40, i6);
     i48 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i47 = i48 | 0;
       i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       if ((i45 | 0) == 0) {
        __ZN7WebCore13HTMLStackItemD2Ev(i48);
        __ZN3WTF8fastFreeEPv(i48);
        break;
       } else {
        HEAP32[i47 >> 2] = i45;
        break;
       }
      }
     } while (0);
     if ((i39 | 0) == (i35 | 0)) {
      HEAP8[i21] = 1;
      HEAP32[i22 >> 2] = i44;
     }
     i48 = i39 | 0;
     i45 = HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] | 0;
     i47 = HEAP32[i45 + 16 >> 2] | 0;
     if ((i47 | 0) == 0) {
      i49 = i45;
     } else {
      __ZN7WebCore13ContainerNode17parserRemoveChildERNS_4NodeE(i47, i45 | 0);
      i49 = HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] | 0;
     }
     i48 = HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] | 0;
     HEAP32[i23 >> 2] = i49;
     if ((i49 | 0) != 0) {
      i45 = i49 + 8 | 0;
      HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
     }
     __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i48, i7);
     i48 = HEAP32[i23 >> 2] | 0;
     if ((i48 | 0) == 0) {
      i50 = i40;
      break;
     }
     i45 = i48 + 8 | 0;
     i48 = i45 | 0;
     i47 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      i50 = i40;
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      i50 = i40;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     i50 = i40;
    } else {
     __ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE(i18, HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] | 0);
     i50 = i39;
    }
   } while (0);
   i42 = i38 + 1 | 0;
   if ((i42 | 0) < 3) {
    i38 = i42;
    i39 = i50;
    i40 = i41;
   } else {
    i43 = i50;
    break;
   }
  }
  i40 = i43 | 0;
  i39 = HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0;
  i38 = HEAP32[i39 + 16 >> 2] | 0;
  if ((i38 | 0) != 0) {
   __ZN7WebCore13ContainerNode17parserRemoveChildERNS_4NodeE(i38, i39 | 0);
  }
  i39 = HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0;
  i38 = HEAP32[i36 + 8 >> 2] | 0;
  if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
   if ((HEAP32[i36 + 24 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
    i33 = 54;
   } else {
    i33 = 46;
   }
  } else {
   i33 = 46;
  }
  L59 : do {
   if ((i33 | 0) == 46) {
    i33 = 0;
    i39 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
    if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
     if ((HEAP32[i36 + 24 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
      i33 = 54;
      break;
     }
    }
    i39 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
    if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
     if ((HEAP32[i36 + 24 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
      i33 = 54;
      break;
     }
    }
    i39 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
    if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
     if ((HEAP32[i36 + 24 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
      i33 = 54;
      break;
     }
    }
    i39 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
    if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
     if ((HEAP32[i36 + 24 >> 2] | 0) == (HEAP32[i39 + 16 >> 2] | 0)) {
      i33 = 54;
      break;
     }
    }
    i39 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
    do {
     if ((i38 | 0) == (HEAP32[i39 + 12 >> 2] | 0)) {
      i42 = HEAP32[i36 + 4 >> 2] | 0;
      if ((HEAP32[i36 + 24 >> 2] | 0) != (HEAP32[i39 + 16 >> 2] | 0)) {
       i51 = i42;
       break;
      }
      i45 = __ZNK7WebCore19HTMLTemplateElement7contentEv(i42) | 0;
      i42 = HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0;
      HEAP32[i29 >> 2] = i42;
      if ((i42 | 0) != 0) {
       i47 = i42 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i45, i9);
      i45 = HEAP32[i29 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break L59;
      }
      i47 = i45 + 8 | 0;
      i45 = i47 | 0;
      i42 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
      HEAP32[i45 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break L59;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break L59;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      break L59;
     } else {
      i51 = HEAP32[i36 + 4 >> 2] | 0;
     }
    } while (0);
    i39 = HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0;
    HEAP32[i30 >> 2] = i39;
    if ((i39 | 0) != 0) {
     i41 = i39 + 8 | 0;
     HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
    }
    __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i51, i10);
    i41 = HEAP32[i30 >> 2] | 0;
    if ((i41 | 0) == 0) {
     break;
    }
    i39 = i41 + 8 | 0;
    i41 = i39 | 0;
    i47 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
    HEAP32[i41 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
   }
  } while (0);
  do {
   if ((i33 | 0) == 54) {
    i33 = 0;
    i38 = HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = i38;
    if ((i38 | 0) != 0) {
     i39 = i38 + 8 | 0;
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
    }
    __ZN7WebCore20HTMLConstructionSite12fosterParentEN3WTF10PassRefPtrINS_4NodeEEE(i15, i8);
    i39 = HEAP32[i24 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i38 = i39 + 8 | 0;
    i39 = i38 | 0;
    i47 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i47;
    if ((i47 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
   }
  } while (0);
  i40 = HEAP32[i34 >> 2] | 0;
  do {
   if ((i40 | 0) == 0) {
    __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i11, i15, i40);
    i38 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    i52 = i38;
   } else {
    i38 = i40 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
    __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i11, i15, i40);
    i38 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    i47 = i40 | 0;
    i39 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
    if ((i39 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     i52 = i38;
     break;
    } else {
     HEAP32[i47 >> 2] = i39;
     i52 = i38;
     break;
    }
   }
  } while (0);
  i40 = i52 + 4 | 0;
  i34 = i35 | 0;
  __ZN7WebCore13ContainerNode19takeAllChildrenFromEPS0_(HEAP32[i40 >> 2] | 0, HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0);
  i38 = HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0;
  i34 = HEAP32[i40 >> 2] | 0;
  HEAP32[i26 >> 2] = i34;
  if ((i34 | 0) != 0) {
   i40 = i34 + 8 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
  }
  __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i38, i12);
  i38 = HEAP32[i26 >> 2] | 0;
  do {
   if ((i38 | 0) != 0) {
    i40 = i38 + 8 | 0;
    i34 = i40 | 0;
    i39 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
    HEAP32[i34 >> 2] = i39;
    if ((i39 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
   }
  } while (0);
  HEAP32[i27 >> 2] = i52;
  i38 = (i52 | 0) == 0;
  if (!i38) {
   i40 = i52 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
  }
  __ZN7WebCore25HTMLFormattingElementList6swapToEPNS_7ElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEERKNS0_8BookmarkE(i16, i32, i13, i4);
  i40 = HEAP32[i27 >> 2] | 0;
  do {
   if ((i40 | 0) != 0) {
    i39 = i40 | 0;
    i34 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    if ((i34 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     break;
    } else {
     HEAP32[i39 >> 2] = i34;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE(i18, i32);
  HEAP32[i28 >> 2] = i52;
  if (!i38) {
   i40 = i52 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
  }
  __ZN7WebCore16HTMLElementStack11insertAboveEN3WTF10PassRefPtrINS_13HTMLStackItemEEEPNS0_13ElementRecordE(i18, i14, i35);
  i40 = HEAP32[i28 >> 2] | 0;
  do {
   if ((i40 | 0) != 0) {
    i34 = i40 | 0;
    i39 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
    if ((i39 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     break;
    } else {
     HEAP32[i34 >> 2] = i39;
     break;
    }
   }
  } while (0);
  do {
   if (!i38) {
    i40 = i52 | 0;
    i35 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i35 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i52);
     __ZN3WTF8fastFreeEPv(i52);
     break;
    } else {
     HEAP32[i40 >> 2] = i35;
     break;
    }
   }
  } while (0);
  do {
   if (!i37) {
    i38 = i36 | 0;
    i35 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
    if ((i35 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i36);
     __ZN3WTF8fastFreeEPv(i36);
     break;
    } else {
     HEAP32[i38 >> 2] = i35;
     break;
    }
   }
  } while (0);
  i36 = i31 + 1 | 0;
  if ((i36 | 0) < 8) {
   i31 = i36;
  } else {
   i33 = 111;
   break;
  }
 }
 if ((i33 | 0) == 3) {
  __ZN7WebCore15HTMLTreeBuilder30processAnyOtherEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 9) {
  __ZN7WebCore16HTMLElementStack14popUntilPoppedEPNS_7ElementE(i18, i32);
  __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i16, i32);
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 108) {
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 111) {
  STACKTOP = i3;
  return;
 } else if ((i33 | 0) == 7) {
  __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i16, i32);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 i5 = __ZNK7WebCore16HTMLElementStack9topRecordEv(i4) | 0;
 i6 = i1 + 4 | 0;
 i7 = i1 + 8 | 0;
 i8 = i3 | 0;
 i9 = i1 + 120 | 0;
 i10 = i1 + 112 | 0;
 i11 = i1 + 104 | 0;
 i12 = i1 + 20 | 0;
 i1 = 0;
 i13 = i5;
 L1 : while (1) {
  i5 = HEAP32[i13 >> 2] | 0;
  i14 = (i5 | 0) == 0;
  if (!i14) {
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = HEAP32[i5 + 4 >> 2] | 0;
  do {
   if ((i15 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i4) | 0)) {
    if ((HEAP32[i6 >> 2] | 0) == 0) {
     i16 = 1;
     i17 = i5;
     break;
    }
    i18 = HEAP32[i7 >> 2] | 0;
    if ((i18 | 0) != 0) {
     i19 = i18 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    i19 = __ZN3WTF10fastMallocEj(32) | 0;
    HEAP32[i8 >> 2] = i18;
    __ZN7WebCore13HTMLStackItemC2EN3WTF10PassRefPtrINS_13ContainerNodeEEENS0_8ItemTypeE(i19, i3, 0);
    i18 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i20 = i18 + 8 | 0;
      i21 = i20 | 0;
      i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     }
    } while (0);
    if (i14) {
     i16 = 1;
     i17 = i19;
     break;
    }
    i18 = i5 | 0;
    i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i20 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i5);
     __ZN3WTF8fastFreeEPv(i5);
     i16 = 1;
     i17 = i19;
     break;
    } else {
     HEAP32[i18 >> 2] = i20;
     i16 = 1;
     i17 = i19;
     break;
    }
   } else {
    i16 = i1;
    i17 = i5;
   }
  } while (0);
  i5 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
  i14 = HEAP32[i17 + 8 >> 2] | 0;
  do {
   if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
     i23 = 21;
     break;
    }
    i15 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i23 = 19;
     break L1;
    }
    HEAP32[i11 >> 2] = HEAP32[(HEAP32[i10 >> 2] | 0) + (i15 << 2) >> 2];
    i24 = 1;
    i25 = i13;
    i26 = i17;
    i23 = 82;
   } else {
    i23 = 21;
   }
  } while (0);
  L26 : do {
   if ((i23 | 0) == 21) {
    i23 = 0;
    i5 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
    do {
     if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
      if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
       break;
      }
      L31 : do {
       if (i16) {
        i27 = i13;
        i28 = i17;
       } else {
        i15 = HEAP32[i17 + 4 >> 2] | 0;
        if ((i15 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i4) | 0)) {
         i27 = i13;
         i28 = i17;
         break;
        } else {
         i29 = i17;
         i30 = i13;
        }
        while (1) {
         i15 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
         if ((HEAP32[i29 + 8 >> 2] | 0) == (HEAP32[i15 + 12 >> 2] | 0)) {
          if ((HEAP32[i29 + 24 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
           i27 = i30;
           i28 = i29;
           break L31;
          }
         }
         i31 = HEAP32[i30 + 4 >> 2] | 0;
         i32 = HEAP32[i31 >> 2] | 0;
         if ((i32 | 0) != 0) {
          i15 = i32 | 0;
          HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
         }
         do {
          if ((i29 | 0) != 0) {
           i15 = i29 | 0;
           i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
           if ((i20 | 0) == 0) {
            __ZN7WebCore13HTMLStackItemD2Ev(i29);
            __ZN3WTF8fastFreeEPv(i29);
            break;
           } else {
            HEAP32[i15 >> 2] = i20;
            break;
           }
          }
         } while (0);
         i20 = HEAP32[i32 + 4 >> 2] | 0;
         if ((HEAP32[i20 + 12 >> 2] & 16 | 0) != 0) {
          if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
           break;
          }
         }
         if ((i20 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i4) | 0)) {
          i27 = i31;
          i28 = i32;
          break L31;
         } else {
          i29 = i32;
          i30 = i31;
         }
        }
        HEAP32[i11 >> 2] = 17;
        i24 = 1;
        i25 = i31;
        i26 = i32;
        i23 = 82;
        break L26;
       }
      } while (0);
      HEAP32[i11 >> 2] = 16;
      i24 = 1;
      i25 = i27;
      i26 = i28;
      i23 = 82;
      break L26;
     }
    } while (0);
    i5 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
    if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
     if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
      i23 = 40;
     }
    } else {
     i23 = 40;
    }
    do {
     if ((i23 | 0) == 40) {
      i23 = 0;
      i5 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
      if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
       if ((HEAP32[i17 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
        break;
       }
      }
      i5 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
      do {
       if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
        if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
         break;
        }
        HEAP32[i11 >> 2] = 14;
        i24 = 1;
        i25 = i13;
        i26 = i17;
        i23 = 82;
        break L26;
       }
      } while (0);
      i5 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
      if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
       if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
        i23 = 48;
       }
      } else {
       i23 = 48;
      }
      do {
       if ((i23 | 0) == 48) {
        i23 = 0;
        i5 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
        if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
         if ((HEAP32[i17 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
          break;
         }
        }
        i5 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
        if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
         if ((HEAP32[i17 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
          break;
         }
        }
        i5 = HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
          HEAP32[i11 >> 2] = 11;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i5 = HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
          HEAP32[i11 >> 2] = 12;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i5 = HEAP32[i17 + 4 >> 2] | 0;
        do {
         if ((HEAP32[i5 + 12 >> 2] & 16 | 0) != 0) {
          if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
           break;
          }
          HEAP32[i11 >> 2] = 9;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i19 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
          do {
           if ((HEAP32[i6 >> 2] | 0) != 0) {
            if ((HEAP32[i7 >> 2] | 0) != (i5 | 0)) {
             break;
            }
            HEAP32[i11 >> 2] = 7;
            i33 = i17;
            i34 = i13;
            i35 = 1;
            i23 = 83;
            break L26;
           }
          } while (0);
          HEAP32[i11 >> 2] = 3;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i5 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
          HEAP32[i11 >> 2] = 7;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i5 = HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
          HEAP32[i11 >> 2] = 19;
          i24 = 1;
          i25 = i13;
          i26 = i17;
          i23 = 82;
          break L26;
         }
        } while (0);
        i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
        do {
         if ((i14 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i17 + 24 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
          if ((HEAP32[i12 >> 2] | 0) == 0) {
           HEAP32[i11 >> 2] = 2;
           i24 = 1;
           i25 = i13;
           i26 = i17;
           i23 = 82;
           break L26;
          } else {
           HEAP32[i11 >> 2] = 5;
           i24 = 1;
           i25 = i13;
           i26 = i17;
           i23 = 82;
           break L26;
          }
         }
        } while (0);
        if (i16) {
         HEAP32[i11 >> 2] = 7;
         i24 = 1;
         i25 = i13;
         i26 = i17;
         i23 = 82;
         break L26;
        } else {
         i24 = 0;
         i25 = HEAP32[i13 + 4 >> 2] | 0;
         i26 = i17;
         i23 = 82;
         break L26;
        }
       }
      } while (0);
      HEAP32[i11 >> 2] = 13;
      i24 = 1;
      i25 = i13;
      i26 = i17;
      i23 = 82;
      break L26;
     }
    } while (0);
    HEAP32[i11 >> 2] = 15;
    i24 = 1;
    i25 = i13;
    i26 = i17;
    i23 = 82;
   }
  } while (0);
  if ((i23 | 0) == 82) {
   i23 = 0;
   if ((i26 | 0) == 0) {
    i36 = i25;
    i37 = i24;
   } else {
    i33 = i26;
    i34 = i25;
    i35 = i24;
    i23 = 83;
   }
  }
  do {
   if ((i23 | 0) == 83) {
    i23 = 0;
    i14 = i33 | 0;
    i5 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i33);
     __ZN3WTF8fastFreeEPv(i33);
     i36 = i34;
     i37 = i35;
     break;
    } else {
     HEAP32[i14 >> 2] = i5;
     i36 = i34;
     i37 = i35;
     break;
    }
   }
  } while (0);
  if ((i37 | 0) == 1) {
   i23 = 87;
   break;
  } else {
   i1 = i16;
   i13 = i36;
  }
 }
 if ((i23 | 0) == 19) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i23 | 0) == 87) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilder31processIsindexStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 360 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 160 | 0;
 i9 = i3 + 176 | 0;
 i10 = i3 + 224 | 0;
 i11 = i3 + 272 | 0;
 i12 = i3 + 288 | 0;
 i13 = i3 + 304 | 0;
 i14 = i3 + 320 | 0;
 i15 = i3 + 328 | 0;
 i16 = i3 + 344 | 0;
 i17 = i1 + 24 | 0;
 do {
  if ((HEAP32[i17 >> 2] | 0) != 0) {
   if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i18 = i11 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i11 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i11 + 8 | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 2, (HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 | 0, i11);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i4);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
 i4 = HEAP32[i20 >> 2] | 0;
 i11 = HEAP32[i18 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i21 = i11 + (i4 << 3) | 0;
  i4 = i11;
  while (1) {
   i22 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i23 = i22 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i21 | 0)) {
    break;
   }
  }
  HEAP32[i20 >> 2] = 0;
 }
 if ((i11 | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = i2 + 40 | 0;
 i19 = HEAP32[i11 >> 2] | 0;
 L20 : do {
  if ((i19 | 0) != 0) {
   i18 = HEAP32[i2 + 32 >> 2] | 0;
   i20 = HEAP32[__ZN7WebCore9HTMLNames10actionAttrE >> 2] | 0;
   i21 = i20 + 12 | 0;
   i4 = i20 + 16 | 0;
   i22 = 0;
   while (1) {
    i24 = HEAP32[i18 + (i22 << 3) >> 2] | 0;
    if ((i24 | 0) == (i20 | 0)) {
     break;
    }
    if ((HEAP32[i24 + 12 >> 2] | 0) == (HEAP32[i21 >> 2] | 0)) {
     if ((HEAP32[i24 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
      break;
     }
    }
    i24 = i22 + 1 | 0;
    if (i24 >>> 0 < i19 >>> 0) {
     i22 = i24;
    } else {
     break L20;
    }
   }
   if (i19 >>> 0 <= i22 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i18 + (i22 << 3) | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(HEAP32[i17 >> 2] | 0, __ZN7WebCore9HTMLNames10actionAttrE, i18 + (i22 << 3) + 4 | 0);
  }
 } while (0);
 i17 = i12 | 0;
 HEAP32[i17 >> 2] = 0;
 i19 = i12 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i4 = i12 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i5, 2, (HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 | 0, i12);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i5);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i17 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i21 = i12 + (i5 << 3) | 0;
  i5 = i12;
  while (1) {
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i24 = i20 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i24 >> 2] = i23;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i5 | 0);
   i5 = i5 + 8 | 0;
   if ((i5 | 0) == (i21 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 if ((i12 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i13 | 0;
 HEAP32[i12 >> 2] = 0;
 i19 = i13 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i17 = i13 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i6, 2, (HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0) + 12 | 0, i13);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i6);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i6);
 i6 = HEAP32[i17 >> 2] | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i4 = i13 + (i6 << 3) | 0;
  i6 = i13;
  while (1) {
   i21 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i5 = i21 | 0;
     i20 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i5 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
   i6 = i6 + 8 | 0;
   if ((i6 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i17 >> 2] = 0;
 }
 if ((i13 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i19 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = HEAP32[i11 >> 2] | 0;
 L64 : do {
  if ((i13 | 0) == 0) {
   i25 = 62;
  } else {
   i11 = HEAP32[i2 + 32 >> 2] | 0;
   i19 = HEAP32[__ZN7WebCore9HTMLNames10promptAttrE >> 2] | 0;
   i12 = i19 + 12 | 0;
   i17 = i19 + 16 | 0;
   i4 = 0;
   while (1) {
    i6 = HEAP32[i11 + (i4 << 3) >> 2] | 0;
    if ((i6 | 0) == (i19 | 0)) {
     break;
    }
    if ((HEAP32[i6 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
      break;
     }
    }
    i6 = i4 + 1 | 0;
    if (i6 >>> 0 < i13 >>> 0) {
     i4 = i6;
    } else {
     i25 = 62;
     break L64;
    }
   }
   if (i13 >>> 0 <= i4 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i11 + (i4 << 3) | 0) == 0) {
    i25 = 62;
    break;
   }
   i17 = i7 | 0;
   i12 = i11 + (i4 << 3) + 4 | 0;
   i19 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i26 = 0;
    } else {
     if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
      i26 = HEAP32[i19 + 8 >> 2] | 0;
      break;
     } else {
      i26 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i19) | 0;
      break;
     }
    }
   } while (0);
   HEAP32[i17 >> 2] = i26;
   i19 = HEAP32[i12 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = HEAP32[i19 + 4 >> 2] | 0;
   }
   HEAP32[i7 + 4 >> 2] = i26 + (i27 << 1);
   i19 = i7 + 8 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i28 = 0;
    } else {
     if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
      i28 = 0;
      break;
     }
     i28 = (HEAP32[i4 + 16 >> 2] | 0) >>> 5 & 1;
    }
   } while (0);
   HEAP8[i19] = i28;
   __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i7);
  }
 } while (0);
 do {
  if ((i25 | 0) == 62) {
   __ZN7WebCore27searchableIndexIntroductionEv(i14);
   i7 = i8 | 0;
   i28 = i14 | 0;
   i27 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     HEAP32[i7 >> 2] = 0;
     i29 = 0;
     i30 = i8 + 4 | 0;
     i25 = 68;
    } else {
     if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
      i31 = HEAP32[i27 + 8 >> 2] | 0;
      i32 = i27;
     } else {
      i26 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i27) | 0;
      i31 = i26;
      i32 = HEAP32[i28 >> 2] | 0;
     }
     HEAP32[i7 >> 2] = i31;
     i26 = i8 + 4 | 0;
     if ((i32 | 0) == 0) {
      i29 = i31;
      i30 = i26;
      i25 = 68;
      break;
     }
     HEAP32[i26 >> 2] = i31 + (HEAP32[i32 + 4 >> 2] << 1);
     i26 = i8 + 8 | 0;
     if ((HEAP32[i32 + 4 >> 2] | 0) == 0) {
      i33 = 0;
      i34 = i26;
      break;
     }
     i33 = (HEAP32[i32 + 16 >> 2] | 0) >>> 5 & 1;
     i34 = i26;
    }
   } while (0);
   if ((i25 | 0) == 68) {
    HEAP32[i30 >> 2] = i29;
    i33 = 0;
    i34 = i8 + 8 | 0;
   }
   HEAP8[i34] = i33;
   __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i8);
   i7 = HEAP32[i28 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i27 = i7 | 0;
   i19 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i27 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder25attributesForIsindexInputEPNS_15AtomicHTMLTokenE(i15, 0, i2);
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i9, 2, (HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 | 0, i15);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i9);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i9);
 i9 = i15 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i8 = i15 | 0;
 if ((i2 | 0) != 0) {
  i33 = HEAP32[i8 >> 2] | 0;
  i34 = i33 + (i2 << 3) | 0;
  i2 = i33;
  while (1) {
   i33 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i29 = i33 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i29 >> 2] = i30;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i2 | 0);
   i2 = i2 + 8 | 0;
   if ((i2 | 0) == (i34 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0) + 12 | 0);
 i9 = i16 | 0;
 HEAP32[i9 >> 2] = 0;
 i15 = i16 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i8 = i16 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i10, 2, (HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 | 0, i16);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i10);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i10);
 i10 = HEAP32[i8 >> 2] | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i34 = i16 + (i10 << 3) | 0;
  i10 = i16;
  while (1) {
   i2 = HEAP32[i10 + 4 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i33 = i2 | 0;
     i28 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i33 >> 2] = i28;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i10 | 0);
   i10 = i10 + 8 | 0;
   if ((i10 | 0) == (i34 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i16 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
 }
 __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder25processStartTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 112 | 0;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  __ZN7WebCore16HTMLElementStack24popUntilTableScopeMarkerEv(i1 + 28 | 0);
  __ZN7WebCore25HTMLFormattingElementList12appendMarkerEv(i1 + 48 | 0);
  __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  HEAP32[i1 + 104 >> 2] = 11;
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
  __ZN7WebCore16HTMLElementStack24popUntilTableScopeMarkerEv(i1 + 28 | 0);
  __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  HEAP32[i1 + 104 >> 2] = 12;
  STACKTOP = i3;
  return;
 }
 if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i11 = i6 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i6 + 4 | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = i6 + 8 | 0;
  HEAP32[i13 >> 2] = 0;
  __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 2, i10 + 12 | 0, i6);
  __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i4);
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
  i4 = HEAP32[i13 >> 2] | 0;
  i6 = HEAP32[i11 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i10 = i6 + (i4 << 3) | 0;
   i4 = i6;
   while (1) {
    i14 = HEAP32[i4 + 4 >> 2] | 0;
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
    __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
    i4 = i4 + 8 | 0;
    if ((i4 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
  if ((i6 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] | 0) != (i9 | 0)) {
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i9 | 0)) {
    break;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i9 | 0)) {
    break;
   }
   do {
    if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) != (i9 | 0)) {
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i9 | 0)) {
      break;
     }
     if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i12 = i1 + 28 | 0;
      if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i12, __ZN7WebCore9HTMLNames8tableTagE) | 0)) {
       STACKTOP = i3;
       return;
      }
      __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i12, (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0);
      __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
      __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return;
     }
     do {
      if ((i9 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
       if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       L46 : do {
        if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
         i12 = HEAP32[i2 + 40 >> 2] | 0;
         if ((i12 | 0) == 0) {
          i17 = i9;
          break;
         }
         i11 = HEAP32[i2 + 32 >> 2] | 0;
         i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
         i10 = i13 + 12 | 0;
         i4 = i13 + 16 | 0;
         i14 = 0;
         while (1) {
          i16 = HEAP32[i11 + (i14 << 3) >> 2] | 0;
          if ((i16 | 0) == (i13 | 0)) {
           break;
          }
          if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
           if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
            break;
           }
          }
          i16 = i14 + 1 | 0;
          if (i16 >>> 0 < i12 >>> 0) {
           i14 = i16;
          } else {
           i17 = i9;
           break L46;
          }
         }
         if (i12 >>> 0 <= i14 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((i11 + (i14 << 3) | 0) == 0) {
          i17 = i9;
          break;
         }
         if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i11 + (i14 << 3) + 4 >> 2] | 0, H_BASE + 24 | 0) | 0)) {
          i17 = HEAP32[i8 >> 2] | 0;
          break;
         }
         __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
         STACKTOP = i3;
         return;
        } else {
         i17 = i9;
        }
       } while (0);
       if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
        i4 = i1 + 12 | 0;
        i10 = i1 + 28 | 0;
        do {
         if ((HEAP32[i1 + 24 >> 2] | 0) != 0) {
          if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i10) | 0) {
           break;
          }
          STACKTOP = i3;
          return;
         }
        } while (0);
        __ZN7WebCore20HTMLConstructionSite21insertHTMLFormElementEPNS_15AtomicHTMLTokenEb(i4, i2, 1);
        __ZN7WebCore16HTMLElementStack3popEv(i10);
        STACKTOP = i3;
        return;
       } else {
        if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
         __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
         STACKTOP = i3;
         return;
        } else {
         i13 = i1 + 93 | 0;
         i16 = HEAP8[i13] & 1;
         HEAP8[i13] = 1;
         __ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
         HEAP8[i13] = i16;
         STACKTOP = i3;
         return;
        }
       }
      }
     } while (0);
     __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) | 0;
     STACKTOP = i3;
     return;
    }
   } while (0);
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = 0;
   i13 = i7 + 4 | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i7 + 8 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i5, 2, i6 + 12 | 0, i7);
   __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i5);
   __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
   i18 = HEAP32[i15 >> 2] | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i20 = i19 + (i18 << 3) | 0;
    i18 = i19;
    while (1) {
     i21 = HEAP32[i18 + 4 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i22 = i21 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i22 >> 2] = i23;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i18 | 0);
     i18 = i18 + 8 | 0;
     if ((i18 | 0) == (i20 | 0)) {
      break;
     }
    }
    HEAP32[i15 >> 2] = 0;
   }
   if ((i19 | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
    HEAP32[i13 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i19);
   }
   __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack24popUntilTableScopeMarkerEv(i1 + 28 | 0);
 __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 HEAP32[i1 + 104 >> 2] = 13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder25attributesForIsindexInputEPNS_15AtomicHTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i3 + 36 >> 2] | 0;
 i6 = i3 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = i7;
 do {
  if ((i5 | 0) == 0) {
   i11 = i7;
  } else {
   if (i5 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
   HEAP32[i9 >> 2] = i12 >>> 3;
   i13 = __ZN3WTF10fastMallocEj(i12) | 0;
   i12 = i13;
   HEAP32[i8 >> 2] = i12;
   if ((i13 | 0) == 0) {
    i11 = i7;
    break;
   }
   i13 = HEAP32[i3 + 32 >> 2] | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   i15 = i13 + (i14 << 3) | 0;
   if ((i14 | 0) == 0) {
    i11 = i7;
    break;
   } else {
    i16 = i13;
    i17 = i12;
   }
   while (1) {
    i12 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 >> 2] = i12;
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    i13 = HEAP32[i16 + 4 >> 2] | 0;
    HEAP32[i17 + 4 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    }
    i12 = i16 + 8 | 0;
    if ((i12 | 0) == (i15 | 0)) {
     break;
    } else {
     i16 = i12;
     i17 = i17 + 8 | 0;
    }
   }
   i11 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 i17 = i11 - 1 | 0;
 L14 : do {
  if ((i17 | 0) > -1) {
   i16 = i11;
   i7 = i17;
   i6 = i11;
   while (1) {
    if (i6 >>> 0 <= i7 >>> 0) {
     break;
    }
    i3 = HEAP32[i8 >> 2] | 0;
    i5 = HEAP32[i3 + (i7 << 3) >> 2] | 0;
    i15 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
    do {
     if ((i5 | 0) == (i15 | 0)) {
      i18 = 23;
     } else {
      i12 = HEAP32[i5 + 12 >> 2] | 0;
      if ((i12 | 0) == (HEAP32[i15 + 12 >> 2] | 0)) {
       if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
        i18 = 23;
        break;
       }
      }
      i13 = HEAP32[__ZN7WebCore9HTMLNames10actionAttrE >> 2] | 0;
      if ((i5 | 0) == (i13 | 0)) {
       i18 = 23;
       break;
      }
      if ((i12 | 0) == (HEAP32[i13 + 12 >> 2] | 0)) {
       if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
        i18 = 23;
        break;
       }
      }
      i13 = HEAP32[__ZN7WebCore9HTMLNames10promptAttrE >> 2] | 0;
      if ((i5 | 0) == (i13 | 0)) {
       i18 = 23;
       break;
      }
      if ((i12 | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
       i19 = i6;
       break;
      }
      if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
       i18 = 23;
      } else {
       i19 = i6;
      }
     }
    } while (0);
    if ((i18 | 0) == 23) {
     i18 = 0;
     i5 = i3 + (i7 << 3) | 0;
     i15 = HEAP32[i3 + (i7 << 3) + 4 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i13 = i15 | 0;
       i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i13 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i5 | 0);
     __ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_(i3 + (i16 << 3) | 0, i3 + (i6 << 3) | 0, i5);
     i15 = i6 - 1 | 0;
     HEAP32[i10 >> 2] = i15;
     i19 = i15;
    }
    i15 = i7 - 1 | 0;
    if ((i15 | 0) > -1) {
     i16 = i7;
     i7 = i15;
     i6 = i19;
    } else {
     i20 = i19;
     break L14;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   i20 = i11;
  }
 } while (0);
 i11 = HEAP32[__ZN7WebCore9HTMLNames10isindexTagE >> 2] | 0;
 i19 = i4 | 0;
 i17 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
 HEAP32[i19 >> 2] = i17;
 i6 = i17 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i4 + 4 | 0;
 i17 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i11 = i17 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 do {
  if ((i20 | 0) == (HEAP32[i9 >> 2] | 0)) {
   i11 = i20 + 1 | 0;
   i17 = HEAP32[i8 >> 2] | 0;
   do {
    if (i17 >>> 0 > i4 >>> 0) {
     i18 = 35;
    } else {
     if ((i17 + (i20 << 3) | 0) >>> 0 <= i4 >>> 0) {
      i18 = 35;
      break;
     }
     i7 = i11 + (i20 >>> 2) | 0;
     i16 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
     __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i16 >>> 0 > i11 >>> 0 ? i16 : i11);
     i16 = HEAP32[i8 >> 2] | 0;
     i21 = i16 + (i4 - i17 >> 3 << 3) | 0;
     i22 = i16;
    }
   } while (0);
   if ((i18 | 0) == 35) {
    i17 = i11 + (i20 >>> 2) | 0;
    i16 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
    __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i16 >>> 0 > i11 >>> 0 ? i16 : i11);
    i21 = i4;
    i22 = HEAP32[i8 >> 2] | 0;
   }
   i16 = HEAP32[i10 >> 2] | 0;
   i17 = HEAP32[i21 >> 2] | 0;
   HEAP32[i22 + (i16 << 3) >> 2] = i17;
   i7 = i17 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i22 + (i16 << 3) + 4 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i23 = i16;
    break;
   }
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   i23 = i16;
  } else {
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i16 + (i20 << 3) >> 2] = i17;
   i7 = i17 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i16 + (i20 << 3) + 4 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i23 = i20;
    break;
   }
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i20;
  }
 } while (0);
 HEAP32[i10 >> 2] = i23 + 1;
 i23 = HEAP32[i6 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i24 = i4 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i24);
  STACKTOP = i2;
  return;
 }
 i6 = i23 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i23);
  i24 = i4 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i24);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i10;
  i24 = i4 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i24);
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 1;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 1 | 0;
 }
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i15 = 9;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i15 = 9;
  }
 }
 do {
  if ((i15 | 0) == 9) {
   if (!i12) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i13 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i15 = 28;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i16 = i8;
     i17 = 0;
    } else {
     if (i13 >>> 0 > 4294967275 >>> 0) {
      i15 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i13 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i15 = 28;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i13;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i16 = i9;
     i17 = i8;
    }
   } while (0);
   if ((i15 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 4 | 0] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i18 = 0;
    } else {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i17 + i19 | 0] = HEAP8[i10 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i14 = HEAP32[i7 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i14 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i17 + i18 | 0] = i8;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i20 = 1;
   } else {
    i20 = (HEAP32[i9 + 4 >> 2] | 0) + 1 | 0;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i21 = 0;
     }
     while (1) {
      HEAP8[i17 + (i21 + i20) | 0] = HEAP8[i10 + i21 | 0] | 0;
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i13 | 0) == 0) {
   i16 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i16 | 0) == 0) {
    i15 = 52;
    break;
   }
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   i22 = i16;
   i23 = 0;
  } else {
   if (i13 >>> 0 > 2147483637 >>> 0) {
    i15 = 52;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i13 << 1) + 20 | 0);
   i16 = i5 | 0;
   i21 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i15 = 52;
    break;
   }
   i16 = i21 + 20 | 0;
   HEAP32[i21 >> 2] = 2;
   HEAP32[i21 + 4 >> 2] = i13;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i21 + 12 >> 2] = 0;
   HEAP32[i21 + 16 >> 2] = 0;
   i22 = i21;
   i23 = i16;
  }
 } while (0);
 if ((i15 | 0) == 52) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i15 = HEAP8[i2 + 4 | 0] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i24 = 0;
  } else {
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP16[i23 + (i25 << 1) >> 1] = HEAP16[i5 + (i25 << 1) >> 1] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i23 + (i26 << 1) >> 1] = HEAPU8[i5 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i13 = HEAP32[i7 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i13 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i23 + (i24 << 1) >> 1] = i15 & 255;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i27 = 1;
 } else {
  i27 = (HEAP32[i15 + 4 >> 2] | 0) + 1 | 0;
 }
 i15 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i23 + (i28 + i27 << 1) >> 1] = HEAP16[i7 + (i28 << 1) >> 1] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   } else {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     HEAP16[i23 + (i29 + i27 << 1) >> 1] = HEAPU8[i7 + i29 | 0] | 0;
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL18addNamesWithPrefixEPN3WTF7HashMapINS0_12AtomicStringENS_13QualifiedNameENS0_16AtomicStringHashENS0_10HashTraitsIS2_EENS5_IS3_EEEERKS2_PKPKS3_j(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i2 | 0;
 i13 = i9 | 0;
 i14 = i9 + 4 | 0;
 i15 = i9 + 8 | 0;
 i16 = i7 | 0;
 i17 = i6 | 0;
 i18 = i8 | 0;
 i19 = i1 | 0;
 i1 = 0;
 while (1) {
  i20 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
  i21 = (HEAP32[i20 >> 2] | 0) + 12 | 0;
  i22 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i22 | 0) == 0) {
    i23 = 0;
   } else {
    i24 = i22 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = i25 + 2 | 0;
    HEAP32[i24 >> 2] = i25 + 4;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     i23 = i22;
     break;
    } else {
     HEAP32[i24 >> 2] = i26;
     i23 = i22;
     break;
    }
   }
  } while (0);
  i22 = HEAP32[i21 >> 2] | 0;
  i26 = (i22 | 0) == 0;
  if (!i26) {
   i24 = i22 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
  }
  i24 = (i23 | 0) == 0;
  if (!i24) {
   i25 = i23 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
  }
  if (!i26) {
   i25 = i22 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
  }
  HEAP32[i13 >> 2] = i23;
  if (!i24) {
   i25 = i23 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
  }
  HEAP8[i14] = 58;
  HEAP32[i15 >> 2] = i22;
  do {
   if (!i26) {
    i25 = i22 | 0;
    i27 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = i27 + 2;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i25 >> 2] = i27;
     break;
    }
   }
  } while (0);
  do {
   if (!i24) {
    i27 = i23 | 0;
    i25 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i27 >> 2] = i25;
     break;
    }
   }
  } while (0);
  __ZNK3WTF12StringAppendINS0_INS_6StringEcEENS_12AtomicStringEEcvS1_Ev(i7, i9);
  i25 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i25 | 0) == 0) {
    HEAP32[i17 >> 2] = 0;
    HEAP32[i18 >> 2] = 0;
   } else {
    if ((HEAP32[i25 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i25);
     HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
     i28 = i25 | 0;
    } else {
     HEAP32[i17 >> 2] = i25;
     i27 = i25 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
     i28 = i27;
    }
    i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i28 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i27 = i25 | 0;
    i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i27 >> 2] = i29;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i29 = i25 | 0;
    i27 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i29 >> 2] = i27;
     break;
    }
   }
  } while (0);
  do {
   if (!i26) {
    i25 = i22 | 0;
    i27 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i25 >> 2] = i27;
     break;
    }
   }
  } while (0);
  do {
   if (!i24) {
    i22 = i23 | 0;
    i26 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i22 >> 2] = i26;
     break;
    }
   }
  } while (0);
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i10, i2, i21, (HEAP32[i20 >> 2] | 0) + 16 | 0);
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i11, i19, i8, i10);
  __ZN7WebCore13QualifiedNameD1Ev(i10);
  i24 = HEAP32[i18 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i26 = i24 | 0;
    i22 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i26 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
   STACKTOP = i3;
   return 1;
  }
  __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  STACKTOP = i3;
  return 1;
 }
 do {
  if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10bgsoundTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10commandTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    i6 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i6 >> 2] = 2;
    }
    i6 = i1 + 104 | 0;
    HEAP32[i1 + 108 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i6 >> 2] = 8;
    STACKTOP = i3;
    return 1;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = (HEAP8[i1 + 168 | 0] & 1) == 0;
    __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    if (i6) {
     HEAP32[i1 + 104 >> 2] = 4;
     STACKTOP = i3;
     return 1;
    }
    i6 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i6 >> 2] = 4;
    }
    i6 = i1 + 104 | 0;
    HEAP32[i1 + 108 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i6 >> 2] = 8;
    STACKTOP = i3;
    return 1;
   }
   do {
    if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i6 = (i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0);
       STACKTOP = i3;
       return i6 | 0;
      }
      __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
      STACKTOP = i3;
      return 1;
     }
     __ZN7WebCore20HTMLConstructionSite19insertScriptElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
     i6 = i1 + 152 | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     i8 = HEAP32[i7 + 128 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i9 = i7;
     } else {
      HEAP32[i8 >> 2] = 5;
      i9 = HEAP32[i6 >> 2] | 0;
     }
     i6 = i1 + 104 | 0;
     HEAP32[i1 + 108 >> 2] = HEAP32[i6 >> 2];
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 1](i4, i9);
     i8 = i1 + 160 | 0;
     i7 = HEAP32[i4 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
     HEAP32[i8 + 4 >> 2] = i7;
     HEAP32[i6 >> 2] = 8;
     if ((HEAP8[i1 + 170 | 0] & 1) == 0) {
      STACKTOP = i3;
      return 1;
     }
     if ((HEAP8[i2 + 28 | 0] & 1) == 0) {
      STACKTOP = i3;
      return 1;
     }
     __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 | 0);
     STACKTOP = i3;
     return 1;
    }
   } while (0);
   __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
   i6 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i6 >> 2] = 4;
   }
   i6 = i1 + 104 | 0;
   HEAP32[i1 + 108 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = 8;
   STACKTOP = i3;
   return 1;
  }
 } while (0);
 __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 STACKTOP = i3;
 return 1;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 i9 = i11 >>> 7;
 i13 = (i11 >>> 30) + ~i9 | 0;
 i11 = i13 << 12 ^ i13;
 i13 = i11 >>> 7 ^ i11;
 i11 = i13 << 2 ^ i13;
 i13 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i14 = i9;
 i9 = 0;
 while (1) {
  i15 = i14 & i8;
  i16 = i12 + (i15 << 3) | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i17;
  if ((i18 | 0) == 0) {
   break;
  } else if ((i18 | 0) == (-1 | 0)) {
   i19 = i16;
  } else {
   if ((i17 | 0) == (i3 | 0)) {
    i20 = 8;
    break;
   } else {
    i19 = i11;
   }
  }
  i17 = (i9 | 0) == 0 ? i13 : i9;
  i11 = i19;
  i14 = i17 + i15 | 0;
  i9 = i17;
 }
 if ((i20 | 0) == 8) {
  i20 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i12 = i1;
  HEAP32[i12 >> 2] = i16;
  HEAP32[i12 + 4 >> 2] = i20;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i21 = i16;
  i22 = i3;
 } else {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv(i6);
  i3 = i6 | 0;
  i16 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i11 >> 2] = i16;
  i16 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + 4 >> 2] = i16;
  i20 = i16 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  __ZN7WebCore13QualifiedNameD1Ev(i6 + 4 | 0);
  i6 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    i20 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i3 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i6 = i2 + 16 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
  i21 = i11;
  i22 = HEAP32[i10 >> 2] | 0;
 }
 if ((i22 | 0) != 0) {
  i10 = i22 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i21 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i22;
 do {
  if ((i11 | 0) != 0) {
   i22 = i11 | 0;
   i10 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i22 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = i21 + 4 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i11);
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 i10 = i2 + 12 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i11;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i11 << 1 | 0) < (i4 | 0)) {
  i23 = i21;
  i24 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i25 = 8;
  } else {
   i22 = i4 << 1;
   i25 = (i11 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i25, i21) | 0;
  i23 = i22;
  i24 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) + (i24 << 3) | 0;
 i24 = i1;
 HEAP32[i24 >> 2] = i23;
 HEAP32[i24 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 i9 = i11 >>> 7;
 i13 = (i11 >>> 30) + ~i9 | 0;
 i11 = i13 << 12 ^ i13;
 i13 = i11 >>> 7 ^ i11;
 i11 = i13 << 2 ^ i13;
 i13 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i14 = i9;
 i9 = 0;
 while (1) {
  i15 = i14 & i8;
  i16 = i12 + (i15 << 3) | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i17;
  if ((i18 | 0) == (-1 | 0)) {
   i19 = i16;
  } else if ((i18 | 0) == 0) {
   break;
  } else {
   if ((i17 | 0) == (i3 | 0)) {
    i20 = 8;
    break;
   } else {
    i19 = i11;
   }
  }
  i17 = (i9 | 0) == 0 ? i13 : i9;
  i11 = i19;
  i14 = i17 + i15 | 0;
  i9 = i17;
 }
 if ((i20 | 0) == 8) {
  i20 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i12 = i1;
  HEAP32[i12 >> 2] = i16;
  HEAP32[i12 + 4 >> 2] = i20;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i21 = i16;
  i22 = i3;
 } else {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv(i6);
  i3 = i6 | 0;
  i16 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i11 >> 2] = i16;
  i16 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + 4 >> 2] = i16;
  i20 = i16 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  __ZN7WebCore13QualifiedNameD1Ev(i6 + 4 | 0);
  i6 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    i20 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i3 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i6 = i2 + 16 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
  i21 = i11;
  i22 = HEAP32[i10 >> 2] | 0;
 }
 if ((i22 | 0) != 0) {
  i10 = i22 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i21 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i22;
 do {
  if ((i11 | 0) != 0) {
   i22 = i11 | 0;
   i10 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i22 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = i21 + 4 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i11);
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 i10 = i2 + 12 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i11;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i11 << 1 | 0) < (i4 | 0)) {
  i23 = i21;
  i24 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i25 = 8;
  } else {
   i22 = i4 << 1;
   i25 = (i11 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i25, i21) | 0;
  i23 = i22;
  i24 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) + (i24 << 3) | 0;
 i24 = i1;
 HEAP32[i24 >> 2] = i23;
 HEAP32[i24 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 i9 = i11 >>> 7;
 i13 = (i11 >>> 30) + ~i9 | 0;
 i11 = i13 << 12 ^ i13;
 i13 = i11 >>> 7 ^ i11;
 i11 = i13 << 2 ^ i13;
 i13 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i14 = i9;
 i9 = 0;
 while (1) {
  i15 = i14 & i8;
  i16 = i12 + (i15 << 3) | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i17;
  if ((i18 | 0) == (-1 | 0)) {
   i19 = i16;
  } else if ((i18 | 0) == 0) {
   break;
  } else {
   if ((i17 | 0) == (i3 | 0)) {
    i20 = 8;
    break;
   } else {
    i19 = i11;
   }
  }
  i17 = (i9 | 0) == 0 ? i13 : i9;
  i11 = i19;
  i14 = i17 + i15 | 0;
  i9 = i17;
 }
 if ((i20 | 0) == 8) {
  i20 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i12 = i1;
  HEAP32[i12 >> 2] = i16;
  HEAP32[i12 + 4 >> 2] = i20;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i21 = i16;
  i22 = i3;
 } else {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv(i6);
  i3 = i6 | 0;
  i16 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i11 >> 2] = i16;
  i16 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + 4 >> 2] = i16;
  i20 = i16 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  __ZN7WebCore13QualifiedNameD1Ev(i6 + 4 | 0);
  i6 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i3 = i6 | 0;
    i20 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i3 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i6 = i2 + 16 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
  i21 = i11;
  i22 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i10 >> 2] = 0;
 i10 = i21 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i22;
 do {
  if ((i11 | 0) != 0) {
   i22 = i11 | 0;
   i10 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i22 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = i21 + 4 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i11);
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 i10 = i2 + 12 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i11;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i11 << 1 | 0) < (i4 | 0)) {
  i23 = i21;
  i24 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i25 = 8;
  } else {
   i22 = i4 << 1;
   i25 = (i11 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i25, i21) | 0;
  i23 = i22;
  i24 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) + (i24 << 3) | 0;
 i24 = i1;
 HEAP32[i24 >> 2] = i23;
 HEAP32[i24 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder16processEndOfFileEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 104 | 0;
 i4 = i1 + 28 | 0;
 i5 = i1 + 28 | 0;
 i6 = i1 + 108 | 0;
 L1 : while (1) {
  i7 = HEAP32[i3 >> 2] | 0;
  L3 : while (1) {
   switch (i7 | 0) {
   case 6:
    {
     i8 = 27;
     break L1;
     break;
    }
   case 3:
    {
     i8 = 7;
     break L1;
     break;
    }
   case 5:
    {
     i8 = 8;
     break L1;
     break;
    }
   case 0:
    {
     i8 = 4;
     break L1;
     break;
    }
   case 12:
    {
     i8 = 12;
     break L1;
     break;
    }
   case 8:
    {
     break;
    }
   case 10:
    {
     i8 = 21;
     break L3;
     break;
    }
   case 1:
    {
     i8 = 5;
     break L1;
     break;
    }
   case 16:
   case 19:
   case 9:
   case 13:
   case 17:
    {
     i8 = 19;
     break L1;
     break;
    }
   case 7:
   case 15:
   case 11:
   case 14:
    {
     i8 = 9;
     break L1;
     break;
    }
   case 4:
    {
     i8 = 11;
     break L3;
     break;
    }
   case 2:
    {
     i8 = 6;
     break L1;
     break;
    }
   default:
    {
     break L1;
    }
   }
   i9 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i11 + 1;
     if ((i11 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16HTMLElementStack3popEv(i5);
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   i7 = i9;
  }
  if ((i8 | 0) == 21) {
   i8 = 0;
   __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
   continue;
  } else if ((i8 | 0) == 11) {
   i8 = 0;
   __ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv(i1);
   continue;
  }
 }
 L15 : do {
  if ((i8 | 0) == 27) {
   if (!(__ZN7WebCore15HTMLTreeBuilder37processEndOfFileForInTemplateContentsEPNS_15AtomicHTMLTokenE(i1, i2) | 0)) {
    break;
   }
   return;
  } else if ((i8 | 0) == 4) {
   __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i1 + 12 | 0);
   HEAP32[i3 >> 2] = 1;
   i8 = 5;
  } else if ((i8 | 0) == 12) {
   i6 = i5 | 0;
   i7 = HEAP32[(HEAP32[HEAP32[i6 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   if ((i7 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i5) | 0)) {
    return;
   }
   i7 = HEAP32[(HEAP32[HEAP32[i6 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   if ((i7 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i5) | 0)) {
    i8 = 19;
    break;
   }
   i7 = HEAP32[(HEAP32[HEAP32[i4 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
     i6 = HEAP32[i7 + 44 >> 2] | 0;
     i9 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
     if ((i6 | 0) == (i9 | 0)) {
      i8 = 19;
      break L15;
     }
     if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
      i8 = 19;
      break L15;
     }
    }
   } while (0);
   __ZN7WebCore16HTMLElementStack3popEv(i5);
   HEAP32[i3 >> 2] = 9;
   i8 = 19;
  }
 } while (0);
 do {
  if ((i8 | 0) == 5) {
   __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv(i1);
   i8 = 6;
  } else if ((i8 | 0) == 19) {
   __ZNK7WebCore16HTMLElementStack8rootNodeEv(i5) | 0;
   if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
    break;
   }
   if (!(__ZN7WebCore15HTMLTreeBuilder37processEndOfFileForInTemplateContentsEPNS_15AtomicHTMLTokenE(i1, i2) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == 6) {
  __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv(i1);
  i8 = 7;
 }
 if ((i8 | 0) == 7) {
  __ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv(i1);
  i8 = 8;
 }
 if ((i8 | 0) == 8) {
  __ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv(i1);
  i8 = 9;
 }
 do {
  if ((i8 | 0) == 9) {
   if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
    break;
   }
   if (!(__ZN7WebCore15HTMLTreeBuilder37processEndOfFileForInTemplateContentsEPNS_15AtomicHTMLTokenE(i1, i2) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack6popAllEv(i5);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder28ExternalCharacterTokenBuffer23takeRemainingWhitespaceEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = i4;
 i7 = i2 + 4 | 0;
 i2 = 0;
 i8 = 0;
 i9 = 0;
 i10 = HEAP32[i5 >> 2] | 0;
 L1 : while (1) {
  HEAP32[i5 >> 2] = i10 + 2;
  i11 = HEAP16[i10 >> 1] | 0;
  HEAP16[i4 >> 1] = i11;
  L3 : do {
   if ((i11 & 65535) >>> 0 < 33 >>> 0) {
    switch (i11 << 16 >> 16) {
    case 32:
    case 10:
    case 9:
    case 13:
    case 12:
     {
      break;
     }
    default:
     {
      i12 = i2;
      i13 = i8;
      i14 = i9;
      break L3;
     }
    }
    if ((i9 | 0) != (i8 | 0)) {
     HEAP16[i2 + (i9 << 1) >> 1] = i11;
     i12 = i2;
     i13 = i8;
     i14 = i9 + 1 | 0;
     break;
    }
    i15 = i9 + 1 | 0;
    do {
     if (i2 >>> 0 > i4 >>> 0) {
      i16 = 8;
     } else {
      if ((i2 + (i9 << 1) | 0) >>> 0 <= i4 >>> 0) {
       i16 = 8;
       break;
      }
      i17 = i6 - i2 >> 1;
      i18 = i15 + (i9 >>> 2) | 0;
      i19 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
      i18 = i19 >>> 0 > i15 >>> 0 ? i19 : i15;
      do {
       if (i9 >>> 0 < i18 >>> 0) {
        if ((i18 | 0) < 0) {
         i16 = 15;
         break L1;
        }
        i19 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 1) | 0;
        i20 = i19 >>> 1;
        i21 = __ZN3WTF10fastMallocEj(i19) | 0;
        i19 = i21;
        i22 = i2;
        _memcpy(i21 | 0, i22 | 0, i9 << 1) | 0;
        if ((i2 | 0) == 0) {
         i23 = i19;
         i24 = i20;
         break;
        }
        i21 = (i19 | 0) == (i2 | 0);
        __ZN3WTF8fastFreeEPv(i22);
        i23 = i21 ? 0 : i19;
        i24 = i21 ? 0 : i20;
       } else {
        i23 = i2;
        i24 = i9;
       }
      } while (0);
      i25 = i23 + (i17 << 1) | 0;
      i26 = i23;
      i27 = i24;
     }
    } while (0);
    do {
     if ((i16 | 0) == 8) {
      i16 = 0;
      i18 = i15 + (i9 >>> 2) | 0;
      i20 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
      i18 = i20 >>> 0 > i15 >>> 0 ? i20 : i15;
      if (i9 >>> 0 >= i18 >>> 0) {
       i25 = i4;
       i26 = i2;
       i27 = i9;
       break;
      }
      if ((i18 | 0) < 0) {
       i16 = 10;
       break L1;
      }
      i20 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 1) | 0;
      i18 = i20 >>> 1;
      i21 = __ZN3WTF10fastMallocEj(i20) | 0;
      i20 = i21;
      i19 = i2;
      _memcpy(i21 | 0, i19 | 0, i9 << 1) | 0;
      if ((i2 | 0) == 0) {
       i25 = i4;
       i26 = i20;
       i27 = i18;
       break;
      }
      i21 = (i20 | 0) == (i2 | 0);
      __ZN3WTF8fastFreeEPv(i19);
      i25 = i4;
      i26 = i21 ? 0 : i20;
      i27 = i21 ? 0 : i18;
     }
    } while (0);
    HEAP16[i26 + (i9 << 1) >> 1] = HEAP16[i25 >> 1] | 0;
    i12 = i26;
    i13 = i27;
    i14 = i15;
   } else {
    i12 = i2;
    i13 = i8;
    i14 = i9;
   }
  } while (0);
  i11 = HEAP32[i5 >> 2] | 0;
  if (i11 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
   i2 = i12;
   i8 = i13;
   i9 = i14;
   i10 = i11;
  } else {
   i16 = 21;
   break;
  }
 }
 if ((i16 | 0) == 15) {
  _WTFCrash();
 } else if ((i16 | 0) == 10) {
  _WTFCrash();
 } else if ((i16 | 0) == 21) {
  if ((i14 | 0) != 0) {
   i16 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i14;
   HEAP32[i16 + 8 >> 2] = i12;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 1;
   __ZN3WTF8fastFreeEPv(0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i3;
   return;
  }
  HEAP32[i1 >> 2] = 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 HEAP8[i1 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = i4;
 i10 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSiteC1ERNS_16DocumentFragmentENS_19ParserContentPolicyEj(i10, i3, i5, HEAP32[i6 + 4 >> 2] | 0);
 i5 = i1 + 112 | 0;
 i11 = i5 | 0;
 i12 = i1 + 116 | 0;
 i13 = i1 + 120 | 0;
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = -2;
 HEAP32[i1 + 164 >> 2] = 0;
 i2 = i6;
 i6 = i1 + 168 | 0;
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = i14;
 if ((i4 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((i3 | 0) != 0) {
  i14 = i3 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i14 >> 2] = 1;
 HEAP32[i14 + 4 >> 2] = i3;
 _memset(i14 + 8 | 0, 0, 20) | 0;
 HEAP8[i14 + 28 | 0] = 1;
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = i14;
 __ZN7WebCore16HTMLElementStack12pushRootNodeEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 28 | 0, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i4 + 44 >> 2] | 0;
 i14 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
 do {
  if ((i8 | 0) == (i14 | 0)) {
   i15 = 11;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
    i15 = 11;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 11) {
   HEAP32[i9 >> 2] = 6;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) != (HEAP32[i12 >> 2] | 0)) {
    HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] = 6;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    break;
   }
   i8 = i14 + 1 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   do {
    if (i3 >>> 0 > i9 >>> 0) {
     i15 = 15;
    } else {
     if ((i3 + (i14 << 2) | 0) >>> 0 <= i9 >>> 0) {
      i15 = 15;
      break;
     }
     __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
     i6 = HEAP32[i11 >> 2] | 0;
     i16 = i6 + (i9 - i3 >> 2 << 2) | 0;
     i17 = i6;
    }
   } while (0);
   if ((i15 | 0) == 15) {
    __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
    i16 = i9;
    i17 = HEAP32[i11 >> 2] | 0;
   }
   HEAP32[i17 + (HEAP32[i13 >> 2] << 2) >> 2] = HEAP32[i16 >> 2];
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
 do {
  if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
   i15 = 21;
  } else {
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i15 = 21;
    break;
   }
   i18 = i4;
  }
 } while (0);
 if ((i15 | 0) == 21) {
  i18 = __ZN7WebCore15HTMLFormElement23findClosestFormAncestorERKNS_7ElementE(i4) | 0;
 }
 __ZN7WebCore20HTMLConstructionSite7setFormEPNS_15HTMLFormElementE(i10, i18);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 HEAP8[i1 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = i4;
 i10 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSiteC1ERNS_16DocumentFragmentENS_19ParserContentPolicyEj(i10, i3, i5, HEAP32[i6 + 4 >> 2] | 0);
 i5 = i1 + 112 | 0;
 i11 = i5 | 0;
 i12 = i1 + 116 | 0;
 i13 = i1 + 120 | 0;
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = -2;
 HEAP32[i1 + 164 >> 2] = 0;
 i2 = i6;
 i6 = i1 + 168 | 0;
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = i14;
 if ((i4 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((i3 | 0) != 0) {
  i14 = i3 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i14 >> 2] = 1;
 HEAP32[i14 + 4 >> 2] = i3;
 _memset(i14 + 8 | 0, 0, 20) | 0;
 HEAP8[i14 + 28 | 0] = 1;
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = i14;
 __ZN7WebCore16HTMLElementStack12pushRootNodeEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 28 | 0, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i4 + 44 >> 2] | 0;
 i14 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
 do {
  if ((i8 | 0) == (i14 | 0)) {
   i15 = 11;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
    i15 = 11;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 11) {
   HEAP32[i9 >> 2] = 6;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) != (HEAP32[i12 >> 2] | 0)) {
    HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] = 6;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    break;
   }
   i8 = i14 + 1 | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   do {
    if (i3 >>> 0 > i9 >>> 0) {
     i15 = 15;
    } else {
     if ((i3 + (i14 << 2) | 0) >>> 0 <= i9 >>> 0) {
      i15 = 15;
      break;
     }
     __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
     i6 = HEAP32[i11 >> 2] | 0;
     i16 = i6 + (i9 - i3 >> 2 << 2) | 0;
     i17 = i6;
    }
   } while (0);
   if ((i15 | 0) == 15) {
    __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
    i16 = i9;
    i17 = HEAP32[i11 >> 2] | 0;
   }
   HEAP32[i17 + (HEAP32[i13 >> 2] << 2) >> 2] = HEAP32[i16 >> 2];
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
 do {
  if ((HEAP32[i4 + 12 >> 2] & 16 | 0) == 0) {
   i15 = 21;
  } else {
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i15 = 21;
    break;
   }
   i18 = i4;
  }
 } while (0);
 if ((i15 | 0) == 21) {
  i18 = __ZN7WebCore15HTMLFormElement23findClosestFormAncestorERKNS_7ElementE(i4) | 0;
 }
 __ZN7WebCore20HTMLConstructionSite7setFormEPNS_15HTMLFormElementE(i10, i18);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 124 | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i4);
 i5 = i1 + 128 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i4);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i8 = i7;
    i9 = 5;
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
  } else {
   HEAP32[i3 >> 2] = i6;
   i8 = i6;
   i9 = 5;
  }
 } while (0);
 do {
  if ((i9 | 0) == 5) {
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i5 = i1 + 132 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = 0;
 i4 = i3 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 L18 : do {
  if ((i8 | 0) == 0) {
   i9 = 25;
  } else {
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 25;
    break;
   }
   L21 : do {
    if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
     i10 = HEAP32[i8 + 8 >> 2] | 0;
     i7 = 0;
     while (1) {
      i6 = HEAP16[i10 + (i7 << 1) >> 1] | 0;
      if ((i6 & 65535) >>> 0 >= 33 >>> 0) {
       break L21;
      }
      switch (i6 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 13:
      case 12:
       {
        break;
       }
      default:
       {
        break L21;
       }
      }
      i6 = i7 + 1 | 0;
      if (i6 >>> 0 < i5 >>> 0) {
       i7 = i6;
      } else {
       i9 = 25;
       break L18;
      }
     }
    } else {
     i7 = HEAP32[i8 + 8 >> 2] | 0;
     i10 = 0;
     while (1) {
      i6 = HEAP8[i7 + i10 | 0] | 0;
      if ((i6 & 255) >>> 0 >= 33 >>> 0) {
       break L21;
      }
      switch (i6 & 255) {
      case 32:
      case 10:
      case 9:
      case 13:
      case 12:
       {
        break;
       }
      default:
       {
        break L21;
       }
      }
      i6 = i10 + 1 | 0;
      if (i6 >>> 0 < i5 >>> 0) {
       i10 = i6;
      } else {
       i9 = 25;
       break L18;
      }
     }
    }
   } while (0);
   i5 = i1 + 12 | 0;
   i10 = i1 + 93 | 0;
   i7 = HEAP8[i10] & 1;
   HEAP8[i10] = 1;
   __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i5);
   __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i5, i3, 1);
   HEAP8[i1 | 0] = 0;
   HEAP32[i1 + 104 >> 2] = HEAP32[i1 + 108 >> 2];
   HEAP8[i10] = i7;
  }
 } while (0);
 if ((i9 | 0) == 25) {
  __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i1 + 12 | 0, i3, 2);
  HEAP32[i1 + 104 >> 2] = HEAP32[i1 + 108 >> 2];
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCoreL23adjustForeignAttributesEPNS_15AtomicHTMLTokenE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 56 | 0;
 do {
  if ((HEAP32[H_BASE + 32 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(20) | 0;
   i8 = i7;
   _memset(i7 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 32 >> 2] = i8;
   i7 = __ZN7WebCore10XLinkNames13getXLinkAttrsEv() | 0;
   __ZN7WebCoreL18addNamesWithPrefixEPN3WTF7HashMapINS0_12AtomicStringENS_13QualifiedNameENS0_16AtomicStringHashENS0_10HashTraitsIS2_EENS5_IS3_EEEERKS2_PKPKS3_j(i8, __ZN3WTF9xlinkAtomE, i7, 7);
   i7 = HEAP32[H_BASE + 32 >> 2] | 0;
   i8 = __ZN7WebCore8XMLNames11getXMLAttrsEv() | 0;
   __ZN7WebCoreL18addNamesWithPrefixEPN3WTF7HashMapINS0_12AtomicStringENS_13QualifiedNameENS0_16AtomicStringHashENS0_10HashTraitsIS2_EENS5_IS3_EEEERKS2_PKPKS3_j(i7, __ZN3WTF7xmlAtomE, i8, 3);
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i2 + 8 | 0, HEAP32[H_BASE + 32 >> 2] | 0, __ZN3WTF9xmlnsAtomE, __ZN7WebCore10XMLNSNames9xmlnsAttrE);
   i8 = HEAP32[H_BASE + 32 >> 2] | 0;
   __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 8 | 0);
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF9xmlnsAtomE, __ZN3WTF9xlinkAtomE, __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE);
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i2 + 40 | 0, i8 | 0, i4, i5);
   __ZN7WebCore13QualifiedNameD1Ev(i5);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = i1 + 40 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 32 | 0;
 i1 = i6 | 0;
 i3 = 0;
 while (1) {
  i9 = (HEAP32[i4 >> 2] | 0) + (i3 << 3) | 0;
  i7 = i9 | 0;
  __ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_(i6, HEAP32[H_BASE + 32 >> 2] | 0, (HEAP32[i7 >> 2] | 0) + 12 | 0);
  i8 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i8 + 12 >> 2] | 0) != 0) {
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i9 | 0);
   HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
  }
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  i3 = i3 + 1 | 0;
  if (i3 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder27processEndTagForInTableBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) != (i4 | 0)) {
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    break;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = i1 + 28 | 0;
    do {
     if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames8tbodyTagE) | 0)) {
      if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames8theadTagE) | 0) {
       break;
      }
      if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames8tfootTagE) | 0) {
       break;
      }
      return;
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv(i5);
    i6 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i8 + 1;
      if ((i8 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, i6 + 8 | 0);
    __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
    return;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   __ZN7WebCore15HTMLTreeBuilder23processEndTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
   return;
  }
 } while (0);
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i2, i3) | 0)) {
  return;
 }
 __ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv(i2);
 __ZN7WebCore16HTMLElementStack3popEv(i2);
 HEAP32[i1 + 104 >> 2] = 9;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22processEndTagForInCellEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) != (i4 | 0)) {
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   do {
    if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
      break;
     }
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
      break;
     }
     if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
      break;
     }
     __ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
     return;
    }
   } while (0);
   i5 = i1 + 28 | 0;
   if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i5, i3) | 0)) {
    return;
   }
   if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames5tdTagE) | 0) {
    __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 | 0);
   } else {
    __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 | 0);
   }
   __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
   return;
  }
 } while (0);
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i2, i3) | 0)) {
  return;
 }
 __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
 i4 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6 + 1;
   if ((i6 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i2, i3);
 __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
 HEAP32[i1 + 104 >> 2] = 14;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder21processEndTagForInRowEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i5 = i1 + 28 | 0;
  if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames5trTagE) | 0)) {
   return;
  }
  __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i5);
  __ZN7WebCore16HTMLElementStack3popEv(i5);
  HEAP32[i1 + 104 >> 2] = 13;
  return;
 }
 if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i5 = i1 + 28 | 0;
  if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i5, __ZN7WebCore9HTMLNames5trTagE) | 0)) {
   return;
  }
  __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i5);
  __ZN7WebCore16HTMLElementStack3popEv(i5);
  HEAP32[i1 + 104 >> 2] = 13;
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
  return;
 }
 do {
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) != (i4 | 0)) {
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    break;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i4 | 0)) {
    return;
   }
   __ZN7WebCore15HTMLTreeBuilder23processEndTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2);
   return;
  }
 } while (0);
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, i3) | 0)) {
  return;
 }
 __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0);
 __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder12processTokenEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 4:
  {
   HEAP8[i1 + 148 | 0] = 0;
   i5 = i1 + 104 | 0;
   L3 : while (1) {
    switch (HEAP32[i5 >> 2] | 0) {
    case 10:
     {
      break;
     }
    case 0:
    case 1:
    case 21:
    case 22:
     {
      i6 = 10;
      break L3;
      break;
     }
    case 18:
     {
      i6 = 11;
      break L3;
      break;
     }
    default:
     {
      i6 = 13;
      break L3;
     }
    }
    __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
   }
   if ((i6 | 0) == 10) {
    __ZN7WebCore20HTMLConstructionSite23insertCommentOnDocumentEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   } else if ((i6 | 0) == 11) {
    __ZN7WebCore20HTMLConstructionSite30insertCommentOnHTMLHtmlElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   } else if ((i6 | 0) == 13) {
    __ZN7WebCore20HTMLConstructionSite13insertCommentEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 3:
  {
   HEAP8[i1 + 148 | 0] = 0;
   __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i2);
   STACKTOP = i3;
   return;
  }
 case 5:
  {
   i5 = HEAP32[i2 + 12 >> 2] | 0;
   HEAP32[i4 >> 2] = i5;
   HEAP32[i4 + 4 >> 2] = i5 + (HEAP32[i2 + 16 >> 2] << 1);
   HEAP8[i4 + 8 | 0] = HEAP8[i2 + 20 | 0] & 1;
   __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i4);
   STACKTOP = i3;
   return;
  }
 case 6:
  {
   HEAP8[i1 + 148 | 0] = 0;
   __ZN7WebCore15HTMLTreeBuilder16processEndOfFileEPNS_15AtomicHTMLTokenE(i1, i2);
   STACKTOP = i3;
   return;
  }
 case 2:
  {
   HEAP8[i1 + 148 | 0] = 0;
   __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i2);
   STACKTOP = i3;
   return;
  }
 case 1:
  {
   HEAP8[i1 + 148 | 0] = 0;
   i4 = i1 + 104 | 0;
   while (1) {
    i5 = HEAP32[i4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    } else if ((i5 | 0) != 10) {
     i6 = 18;
     break;
    }
    __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
   }
   if ((i6 | 0) == 18) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore20HTMLConstructionSite13insertDoctypeEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
   HEAP32[i4 >> 2] = 1;
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
function __ZN7WebCore15HTMLTreeBuilder31processCharacterBufferForInBodyERNS0_28ExternalCharacterTokenBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i5);
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 i6 = i8 - i7 >> 1;
 if ((HEAP8[i2 + 8 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKtj(i4, i7, i6);
 } else {
  __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i4, i7, i6);
 }
 __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i5, i4, 2);
 i5 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 L5 : do {
  if ((HEAP8[i5] & 1) == 0) {
   i9 = 18;
  } else {
   if ((i1 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   L11 : do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i6 = HEAP32[i1 + 8 >> 2] | 0;
     i7 = 0;
     while (1) {
      i2 = HEAP16[i6 + (i7 << 1) >> 1] | 0;
      if ((i2 & 65535) >>> 0 < 33 >>> 0) {
       switch (i2 << 16 >> 16) {
       case 32:
       case 10:
       case 9:
       case 13:
       case 12:
        {
         break;
        }
       default:
        {
         break L11;
        }
       }
      } else {
       if (i2 << 16 >> 16 != -3) {
        break L11;
       }
      }
      i2 = i7 + 1 | 0;
      if (i2 >>> 0 < i4 >>> 0) {
       i7 = i2;
      } else {
       i9 = 18;
       break L5;
      }
     }
    } else {
     i7 = HEAP32[i1 + 8 >> 2] | 0;
     i6 = 0;
     while (1) {
      i2 = HEAP8[i7 + i6 | 0] | 0;
      if ((i2 & 255) >>> 0 >= 33 >>> 0) {
       break L11;
      }
      switch (i2 & 255) {
      case 32:
      case 10:
      case 9:
      case 13:
      case 12:
       {
        break;
       }
      default:
       {
        break L11;
       }
      }
      i2 = i6 + 1 | 0;
      if (i2 >>> 0 < i4 >>> 0) {
       i6 = i2;
      } else {
       i9 = 18;
       break L5;
      }
     }
    }
   } while (0);
   HEAP8[i5] = 0;
   i9 = 18;
  }
 } while (0);
 do {
  if ((i9 | 0) == 18) {
   if ((i1 | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i9 = i1 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilder13constructTreeEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (__ZN7WebCore15HTMLTreeBuilder34shouldProcessTokenInForeignContentEPNS_15AtomicHTMLTokenE(i1, i2) | 0) {
  __ZN7WebCore15HTMLTreeBuilder28processTokenInForeignContentEPNS_15AtomicHTMLTokenE(i1, i2);
 } else {
  __ZN7WebCore15HTMLTreeBuilder12processTokenEPNS_15AtomicHTMLTokenE(i1, i2);
 }
 i2 = i1 + 152 | 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 128 >> 2] | 0) == 0) {
  i3 = i1 + 12 | 0;
  __ZN7WebCore20HTMLConstructionSite18executeQueuedTasksEv(i3);
  return;
 }
 do {
  if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
   i4 = 0;
  } else {
   i5 = i1 + 28 | 0;
   i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i8 + 1;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i6 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 0;
    break;
   }
   if ((HEAP8[i6 + 28 | 0] & 1) != 0) {
    i4 = 0;
    break;
   }
   i8 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 | 0;
     i9 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i9 + 1;
     if ((i9 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if (__ZN7WebCore16HTMLElementStack22isHTMLIntegrationPointEPNS_13HTMLStackItemE(i8) | 0) {
    i4 = 0;
    break;
   }
   i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i9 = i6 | 0;
     i7 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i7 + 1;
     if ((i7 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i9 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i4 = (__ZN7WebCore16HTMLElementStack28isMathMLTextIntegrationPointEPNS_13HTMLStackItemE(i6) | 0) ^ 1;
  }
 } while (0);
 HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 128 >> 2] | 0) + 4 | 0] = ((HEAP32[i1 + 104 >> 2] | 0) == 8 | i4) & 1;
 HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 128 >> 2] | 0) + 5 | 0] = i4 & 1;
 i3 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSite18executeQueuedTasksEv(i3);
 return;
}
function __ZN7WebCoreL20adjustSVGTagNameCaseEPNS_15AtomicHTMLTokenE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = HEAP32[H_BASE + 40 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 40 >> 2] = i7;
  i8 = __ZN7WebCore8SVGNames10getSVGTagsEv() | 0;
  i9 = i3 | 0;
  i10 = i7;
  i7 = 0;
  while (1) {
   i11 = HEAP32[i8 + (i7 << 2) >> 2] | 0;
   i12 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
   __ZNK3WTF12AtomicString5lowerEv(i3, i12);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == (HEAP32[i12 >> 2] | 0)) {
    i14 = i13;
   } else {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i10, i3, i11);
    i14 = HEAP32[i9 >> 2] | 0;
   }
   do {
    if ((i14 | 0) != 0) {
     i11 = i14 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= 81 >>> 0) {
    break;
   }
  }
  i15 = HEAP32[H_BASE + 40 >> 2] | 0;
 } else {
  i15 = i6;
 }
 __ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_(i5, i15, i1 + 4 | 0);
 i15 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 if ((i15 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i2;
  return;
 }
 i6 = i15 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i15;
 if ((i1 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i2;
  return;
 }
 i15 = i1 | 0;
 i6 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i15 >> 2] = i6;
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCoreL22adjustMathMLAttributesEPNS_15AtomicHTMLTokenE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 if ((HEAP32[H_BASE + 56 >> 2] | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i6;
  i7 = __ZN7WebCore11MathMLNames14getMathMLAttrsEv() | 0;
  i8 = i3 | 0;
  i9 = i6;
  i6 = 0;
  while (1) {
   i10 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
   i11 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
   __ZNK3WTF12AtomicString5lowerEv(i3, i11);
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == (HEAP32[i11 >> 2] | 0)) {
    i13 = i12;
   } else {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i9, i3, i10);
    i13 = HEAP32[i8 >> 2] | 0;
   }
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= 31 >>> 0) {
    break;
   }
  }
 }
 i6 = i1 + 40 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 + 32 | 0;
 i1 = i5 | 0;
 i8 = 0;
 while (1) {
  i3 = (HEAP32[i13 >> 2] | 0) + (i8 << 3) | 0;
  i9 = i3 | 0;
  __ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_(i5, HEAP32[H_BASE + 56 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + 12 | 0);
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i3 | 0);
   HEAP32[i9 >> 2] = HEAP32[i1 >> 2];
  }
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  i8 = i8 + 1 | 0;
  if (i8 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL19adjustSVGAttributesEPNS_15AtomicHTMLTokenE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 if ((HEAP32[H_BASE + 48 >> 2] | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i6;
  i7 = __ZN7WebCore8SVGNames11getSVGAttrsEv() | 0;
  i8 = i3 | 0;
  i9 = i6;
  i6 = 0;
  while (1) {
   i10 = HEAP32[i7 + (i6 << 2) >> 2] | 0;
   i11 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
   __ZNK3WTF12AtomicString5lowerEv(i3, i11);
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == (HEAP32[i11 >> 2] | 0)) {
    i13 = i12;
   } else {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i9, i3, i10);
    i13 = HEAP32[i8 >> 2] | 0;
   }
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= 247 >>> 0) {
    break;
   }
  }
 }
 i6 = i1 + 40 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 + 32 | 0;
 i1 = i5 | 0;
 i8 = 0;
 while (1) {
  i3 = (HEAP32[i13 >> 2] | 0) + (i8 << 3) | 0;
  i9 = i3 | 0;
  __ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_(i5, HEAP32[H_BASE + 48 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + 12 | 0);
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i3 | 0);
   HEAP32[i9 >> 2] = HEAP32[i1 >> 2];
  }
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  i8 = i8 + 1 | 0;
  if (i8 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E13allocateTableEi(i2) | 0;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
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
    __ZN7WebCore13QualifiedNameD1Ev(i7 + (i13 << 3) + 4 | 0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN7WebCore15HTMLTreeBuilder34shouldProcessTokenInForeignContentEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i5 + 1;
   if ((i5 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i5 = i4 + 24 | 0;
 if ((HEAP32[i5 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i4 + 28 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (__ZN7WebCore16HTMLElementStack28isMathMLTextIntegrationPointEPNS_13HTMLStackItemE(i4) | 0) {
   i1 = HEAP32[i2 >> 2] | 0;
   if ((i1 | 0) == 5) {
    i3 = 0;
    return i3 | 0;
   } else if ((i1 | 0) != 2) {
    break;
   }
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore11MathMLNames9mglyphTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore11MathMLNames13malignmarkTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore11MathMLNames17annotation_xmlTagE >> 2] | 0;
 do {
  if ((HEAP32[i4 + 8 >> 2] | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i2 >> 2] | 0) != 2) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = __ZN7WebCore16HTMLElementStack22isHTMLIntegrationPointEPNS_13HTMLStackItemE(i4) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if (i1) {
   if ((i4 | 0) == 2 | (i4 | 0) == 5) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (i4 | 0) != 6;
 return i3 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder23processEndTagForInTableEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = i1 + 28 | 0;
  if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames8tableTagE) | 0)) {
   return;
  }
  __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i4, (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0);
  __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
  return;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0) == (i3 | 0)) {
  return;
 }
 if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
  return;
 }
 i3 = i1 + 93 | 0;
 i4 = HEAP8[i3] & 1;
 HEAP8[i3] = 1;
 __ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2);
 HEAP8[i3] = i4;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder30processAnyOtherEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 12 | 0;
 i4 = i1 + 28 | 0;
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i6 = i1 + 28 | 0;
 i1 = __ZNK7WebCore16HTMLElementStack9topRecordEv(i4) | 0;
 while (1) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = (i7 | 0) == 0;
  if (!i8) {
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  do {
   if ((HEAP32[i7 + 8 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
    if ((HEAP32[i7 + 24 >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
     i10 = 11;
     break;
    }
    __ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE(i3, i5);
    i9 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i11 = i9 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = i12 + 1;
      if ((i12 | 0) == 0) {
       __ZN7WebCore13HTMLStackItemD2Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
       break;
      } else {
       HEAP32[i11 >> 2] = i12;
       break;
      }
     }
    } while (0);
    __ZN7WebCore16HTMLElementStack14popUntilPoppedEPNS_7ElementE(i4, HEAP32[i7 + 4 >> 2] | 0);
    i13 = 1;
    i14 = i1;
   } else {
    i10 = 11;
   }
  } while (0);
  do {
   if ((i10 | 0) == 11) {
    i10 = 0;
    if (__ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(i7) | 0) {
     i13 = 1;
     i14 = i1;
     break;
    }
    i13 = 0;
    i14 = HEAP32[i1 + 4 >> 2] | 0;
   }
  } while (0);
  do {
   if (!i8) {
    i9 = i7 | 0;
    i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i12;
     break;
    }
   }
  } while (0);
  if ((i13 | 0) == 1) {
   break;
  } else {
   i1 = i14;
  }
 }
 return;
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
function __ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = i4 + 4 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i5 + 4 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 | 0;
     i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i7 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i8 = i4 + 8 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i8;
    i5 = i5 + 8 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 3 << 3) | 0;
 while (1) {
  i2 = i5 - 8 | 0;
  i3 = i4 - 8 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  i6 = i8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i5 - 8 + 4 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 - 8 + 4 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i8;
     break;
    }
   }
  } while (0);
  __ZN7WebCore13QualifiedNameD1Ev(i2 | 0);
  if ((i2 | 0) == (i1 | 0)) {
   break;
  } else {
   i5 = i2;
   i4 = i3;
  }
 }
 return;
}
function __ZN7WebCore13HTMLStackItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i2 = i1 + 20 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder37processEndOfFileForInTemplateContentsEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = (HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 3, i6, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i10 = i6 + (i5 << 3) | 0;
  i5 = i6;
  while (1) {
   i11 = HEAP32[i5 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i5 | 0);
   i5 = i5 + 8 | 0;
   if ((i5 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 if (!(__ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, 0) | 0)) {
  i14 = 0;
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
  STACKTOP = i3;
  return i14 | 0;
 }
 __ZN7WebCore15HTMLTreeBuilder16processEndOfFileEPNS_15AtomicHTMLTokenE(i1, i2);
 i14 = 1;
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) {
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
  if ((i13 | 0) == (-1 | 0)) {
   i14 = i11;
  } else if ((i13 | 0) == 0) {
   i15 = 3;
   break;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i14 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i14;
 }
 if ((i15 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 __ZN7WebCore13QualifiedNameD1Ev(i16 + 4 | 0);
 i11 = i16 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i15 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i16 + 4 >> 2] = i9;
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return i16 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 2, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i3);
  i13 = i1 | 0;
  HEAP8[i13] = 1;
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i3);
 i13 = i1 | 0;
 HEAP8[i13] = 1;
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore25HTMLFormattingElementList12appendMarkerEv(i1 + 48 | 0);
 __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 i2 = i1 + 112 | 0;
 HEAP32[i4 >> 2] = 6;
 i5 = i1 + 120 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 116 >> 2] | 0)) {
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i6 << 2) >> 2] = 6;
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i9 = i1 + 104 | 0;
  HEAP32[i9 >> 2] = 6;
  STACKTOP = i3;
  return;
 }
 i10 = i6 + 1 | 0;
 i11 = i2 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if (i12 >>> 0 > i4 >>> 0) {
   i13 = 5;
  } else {
   if ((i12 + (i6 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i13 = 5;
    break;
   }
   __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i10);
   i14 = HEAP32[i11 >> 2] | 0;
   i15 = i14 + (i4 - i12 >> 2 << 2) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i13 | 0) == 5) {
  __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i10);
  i15 = i4;
  i16 = HEAP32[i11 >> 2] | 0;
 }
 HEAP32[i16 + (HEAP32[i5 >> 2] << 2) >> 2] = HEAP32[i15 >> 2];
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = i7 + 1 | 0;
 HEAP32[i5 >> 2] = i8;
 i9 = i1 + 104 | 0;
 HEAP32[i9 >> 2] = 6;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack13inButtonScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, (HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i5 = (HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 3, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i3);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i8 = i3 >>> 7;
 L1 : do {
  if ((i7 | 0) != 0) {
   i9 = (i3 >>> 30) + ~i8 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = i8;
   i11 = 0;
   while (1) {
    i12 = i10 & i6;
    i13 = i7 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     break L1;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((i14 | 0) == (i2 | 0)) {
      break;
     }
    }
    i14 = (i11 | 0) == 0 ? i9 : i11;
    i10 = i14 + i12 | 0;
    i11 = i14;
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i7 + (i12 << 3) + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i11;
   i10 = i11 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i12 = i5 | 0;
 i7 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i12 >> 2] = i7;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i1 >> 2] = i13;
 i1 = i13 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = (HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 3, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i3);
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i3);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 2, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i3);
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i3);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = (HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 3, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i3);
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i3);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13HTMLStackItemC2EN3WTF10PassRefPtrINS_13ContainerNodeEEENS0_8ItemTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 1;
 i4 = i1 + 4 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = i2;
 i5 = i1 + 8 | 0;
 i6 = i1 + 24 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 if ((i3 | 0) == 1) {
  HEAP8[i1 + 28 | 0] = 1;
  return;
 } else if ((i3 | 0) == 0) {
  i3 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 88 >> 2] & 1](i2 | 0) | 0) >> 2] | 0;
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  do {
   if ((i2 | 0) != 0) {
    i3 = i2 | 0;
    i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i3 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 1](i2 | 0) | 0) >> 2] | 0;
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
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
  HEAP8[i1 + 28 | 0] = 0;
  return;
 } else {
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
function __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 13) | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 36 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 3) | 0;
 HEAP32[i7 >> 2] = i5 >>> 3;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i7 + (i4 << 3) | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i5;
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i9 + 4 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  }
  i5 = i8 + 8 | 0;
  if ((i5 | 0) == (i2 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 8 | 0;
  }
 }
 return;
}
function __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i4, 3, i2, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i9 = i2 + (i5 << 3) | 0;
  i5 = i2;
  while (1) {
   i10 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i5 | 0);
   i5 = i5 + 8 | 0;
   if ((i5 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i2 | 0) == 0) {
  __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i4);
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 __ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE(i1, i4);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = (HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i3, 2, i5, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore20HTMLConstructionSite32insertHTMLHtmlStartTagBeforeHTMLEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i3);
 HEAP32[i1 + 104 >> 2] = 2;
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEcEENS_12AtomicStringEEcvS1_Ev(i1, i2) {
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
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E13allocateTableEi(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN3WTF10fastMallocEj(i1 << 3) | 0;
 if ((i1 | 0) <= 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i3 | 0;
 i6 = i3 + 4 | 0;
 i7 = i3 + 4 | 0;
 i8 = 0;
 while (1) {
  __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv(i3);
  i9 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + (i8 << 3) >> 2] = i9;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 + (i8 << 3) + 4 >> 2] = i9;
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  __ZN7WebCore13QualifiedNameD1Ev(i7);
  i10 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
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
  i8 = i8 + 1 | 0;
  if ((i8 | 0) >= (i1 | 0)) {
   break;
  }
 }
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore15HTMLTreeBuilderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 + 120 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i1 + 12 | 0;
  __ZN7WebCore20HTMLConstructionSiteD1Ev(i6);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i6 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSiteD1Ev(i6);
 return;
}
function __ZN7WebCore15HTMLTreeBuilderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 + 120 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i1 + 12 | 0;
  __ZN7WebCore20HTMLConstructionSiteD1Ev(i6);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i6 = i1 + 12 | 0;
 __ZN7WebCore20HTMLConstructionSiteD1Ev(i6);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder21processFakeCharactersERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
   i7 = 0;
   i8 = i4 + 4 | 0;
   i9 = 7;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = i2;
   } else {
    i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i10 = i12;
    i11 = HEAP32[i6 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   i12 = i4 + 4 | 0;
   if ((i11 | 0) == 0) {
    i7 = i10;
    i8 = i12;
    i9 = 7;
    break;
   }
   HEAP32[i12 >> 2] = i10 + (HEAP32[i11 + 4 >> 2] << 1);
   i12 = i4 + 8 | 0;
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    i13 = 0;
    i14 = i12;
    break;
   }
   i13 = (HEAP32[i11 + 16 >> 2] | 0) >>> 5 & 1;
   i14 = i12;
  }
 } while (0);
 if ((i9 | 0) == 7) {
  HEAP32[i8 >> 2] = i7;
  i13 = 0;
  i14 = i4 + 8 | 0;
 }
 HEAP8[i14] = i13;
 __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = i3 + 4 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedNameD1Ev(i3 + 4 | 0);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  STACKTOP = i2;
  return;
 }
 i7 = i3 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
 i4 = HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6 + 1;
   if ((i6 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i2, (HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 | 0);
 __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
 i2 = i1 + 120 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 HEAP32[i2 >> 2] = i4 - 1;
 __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder37processColgroupEndTagForInColumnGroupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 if ((i3 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i2) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[HEAP32[i1 + 28 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) != 0) {
   i5 = HEAP32[i3 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 __ZN7WebCore16HTMLElementStack3popEv(i2);
 HEAP32[i1 + 104 >> 2] = 9;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder14processCommentEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 104 | 0;
 L1 : while (1) {
  switch (HEAP32[i3 >> 2] | 0) {
  case 0:
  case 1:
  case 21:
  case 22:
   {
    i4 = 3;
    break L1;
    break;
   }
  case 10:
   {
    break;
   }
  case 18:
   {
    i4 = 4;
    break L1;
    break;
   }
  default:
   {
    i4 = 6;
    break L1;
   }
  }
  __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
 }
 if ((i4 | 0) == 3) {
  __ZN7WebCore20HTMLConstructionSite23insertCommentOnDocumentEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  return;
 } else if ((i4 | 0) == 6) {
  __ZN7WebCore20HTMLConstructionSite13insertCommentEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  return;
 } else if ((i4 | 0) == 4) {
  __ZN7WebCore20HTMLConstructionSite30insertCommentOnHTMLHtmlElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP8[i1 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore20HTMLConstructionSiteC1ERNS_8DocumentENS_19ParserContentPolicyEj(i1 + 12 | 0, i3 | 0, i4, HEAP32[i5 + 4 >> 2] | 0);
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = -2;
 HEAP32[i1 + 164 >> 2] = 0;
 i2 = i5;
 i5 = i1 + 168 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP8[i1 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore20HTMLConstructionSiteC1ERNS_8DocumentENS_19ParserContentPolicyEj(i1 + 12 | 0, i3 | 0, i4, HEAP32[i5 + 4 >> 2] | 0);
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAP8[i1 + 136 | 0] = 1;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = -2;
 HEAP32[i1 + 164 >> 2] = 0;
 i2 = i5;
 i5 = i1 + 168 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder21processScriptStartTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore20HTMLConstructionSite19insertScriptElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 i2 = i1 + 152 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = HEAP32[i5 + 128 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i5;
 } else {
  HEAP32[i6 >> 2] = 5;
  i7 = HEAP32[i2 >> 2] | 0;
 }
 i2 = i1 + 104 | 0;
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] & 1](i4, i7);
 i7 = i1 + 160 | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 HEAP32[i2 >> 2] = 8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder32processCaptionEndTagForInCaptionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i2, (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1 + 12 | 0);
 __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i2, (HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0) + 12 | 0);
 __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1 + 48 | 0);
 HEAP32[i1 + 104 >> 2] = 9;
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder19processFakeStartTagERKNS_13QualifiedNameERKN3WTF6VectorINS_9AttributeELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE(i5, 2, (HEAP32[i2 >> 2] | 0) + 12 | 0, i3);
 __ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE(i1, i5);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
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
function __ZN7WebCore15HTMLTreeBuilder19processDoctypeTokenEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 104 | 0;
 while (1) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  } else if ((i4 | 0) != 10) {
   i5 = 6;
   break;
  }
  __ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv(i1);
 }
 if ((i5 | 0) == 6) {
  return;
 }
 __ZN7WebCore20HTMLConstructionSite13insertDoctypeEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 HEAP32[i3 >> 2] = 1;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder28processTableEndTagForInTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames8tableTagE) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i2, (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0);
 __ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv(i1);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder12closeTheCellEv(i1) {
 i1 = i1 | 0;
 if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i1 + 28 | 0, __ZN7WebCore9HTMLNames5tdTagE) | 0) {
  __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 | 0);
  return;
 } else {
  __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 | 0);
  return;
 }
}
function __ZN7WebCore15HTMLTreeBuilder16processCharacterEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i5 + (HEAP32[i2 + 16 >> 2] << 1);
 HEAP8[i4 + 8 | 0] = HEAP8[i2 + 20 | 0] & 1;
 __ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder23processTrEndTagForInRowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 28 | 0;
 if (!(__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames5trTagE) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i2);
 __ZN7WebCore16HTMLElementStack3popEv(i2);
 HEAP32[i1 + 104 >> 2] = 13;
 i3 = 1;
 return i3 | 0;
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
function __ZN7WebCore15HTMLTreeBuilder29processGenericRawTextStartTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 i2 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i2 >> 2] = 4;
 }
 i2 = i1 + 104 | 0;
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = 8;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder28processGenericRCDATAStartTagEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 i2 = HEAP32[(HEAP32[i1 + 152 >> 2] | 0) + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i2 >> 2] = 2;
 }
 i2 = i1 + 104 | 0;
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = 8;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder19takeScriptToProcessERN3WTF12TextPositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 160 | 0;
 i5 = i3;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 HEAP32[i4 >> 2] = -2;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i2 + 156 | 0;
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = 0;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder26processBodyEndTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i1 + 28 | 0, (HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 HEAP32[i1 + 104 >> 2] = 18;
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore15HTMLTreeBuilder28processHtmlStartTagForInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1 + 28 | 0) | 0) {
  return;
 }
 __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1 + 12 | 0, i2);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE(i1, (HEAP32[i2 >> 2] | 0) + 12 | 0);
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2ERNS_16DocumentFragmentEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC1ERNS_16DocumentFragmentEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
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
function __ZN7WebCore15HTMLTreeBuilder8finishedEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore20HTMLConstructionSite15finishedParsingEv(i1 + 12 | 0);
 return;
}
function __ZN7WebCore15HTMLTreeBuilder17defaultForInitialEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i1 + 12 | 0);
 HEAP32[i1 + 104 >> 2] = 1;
 return;
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
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder6detachEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20HTMLConstructionSite6detachEv(i1 + 12 | 0);
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
function __ZN7WebCore15HTMLTreeBuilder10parseErrorEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15HTMLTreeBuilderD2Ev,b1,__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2Ev,b1,__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2ERNS_16DocumentFragmentEPNS_7ElementE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames9footerTagE": __ZN7WebCore9HTMLNames9footerTagE, "__ZN7WebCore9HTMLNames9figureTagE": __ZN7WebCore9HTMLNames9figureTagE, "__ZN7WebCore9HTMLNames10sectionTagE": __ZN7WebCore9HTMLNames10sectionTagE, "__ZN7WebCore9HTMLNames10addressTagE": __ZN7WebCore9HTMLNames10addressTagE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames10actionAttrE": __ZN7WebCore9HTMLNames10actionAttrE, "__ZN7WebCore11MathMLNames8mtextTagE": __ZN7WebCore11MathMLNames8mtextTagE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames10summaryTagE": __ZN7WebCore9HTMLNames10summaryTagE, "__ZN7WebCore9HTMLNames4sTagE": __ZN7WebCore9HTMLNames4sTagE, "__ZN7WebCore9HTMLNames7nobrTagE": __ZN7WebCore9HTMLNames7nobrTagE, "__ZN7WebCore11MathMLNames18mathmlNamespaceURIE": __ZN7WebCore11MathMLNames18mathmlNamespaceURIE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames10isindexTagE": __ZN7WebCore9HTMLNames10isindexTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames7menuTagE": __ZN7WebCore9HTMLNames7menuTagE, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE, "__ZN7WebCore9HTMLNames8faceAttrE": __ZN7WebCore9HTMLNames8faceAttrE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames7fontTagE": __ZN7WebCore9HTMLNames7fontTagE, "__ZN7WebCore9HTMLNames10detailsTagE": __ZN7WebCore9HTMLNames10detailsTagE, "__ZN7WebCore9HTMLNames4bTagE": __ZN7WebCore9HTMLNames4bTagE, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore11MathMLNames13malignmarkTagE": __ZN7WebCore11MathMLNames13malignmarkTagE, "__ZN7WebCore9HTMLNames6supTagE": __ZN7WebCore9HTMLNames6supTagE, "__ZN7WebCore9HTMLNames8imageTagE": __ZN7WebCore9HTMLNames8imageTagE, "__ZN7WebCore9HTMLNames11fieldsetTagE": __ZN7WebCore9HTMLNames11fieldsetTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames7codeTagE": __ZN7WebCore9HTMLNames7codeTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames6varTagE": __ZN7WebCore9HTMLNames6varTagE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE, "__ZN7WebCore9HTMLNames10captionTagE": __ZN7WebCore9HTMLNames10captionTagE, "__ZN7WebCore9HTMLNames9strongTagE": __ZN7WebCore9HTMLNames9strongTagE, "__ZN7WebCore9HTMLNames8asideTagE": __ZN7WebCore9HTMLNames8asideTagE, "__ZN7WebCore11MathMLNames5moTagE": __ZN7WebCore11MathMLNames5moTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames9keygenTagE": __ZN7WebCore9HTMLNames9keygenTagE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore8SVGNames15svgNamespaceURIE": __ZN7WebCore8SVGNames15svgNamespaceURIE, "__ZN7WebCore9HTMLNames6wbrTagE": __ZN7WebCore9HTMLNames6wbrTagE, "__ZN7WebCore9HTMLNames9strikeTagE": __ZN7WebCore9HTMLNames9strikeTagE, "__ZN7WebCore9HTMLNames8smallTagE": __ZN7WebCore9HTMLNames8smallTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames10marqueeTagE": __ZN7WebCore9HTMLNames10marqueeTagE, "__ZN7WebCore9HTMLNames4uTagE": __ZN7WebCore9HTMLNames4uTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames10bgsoundTagE": __ZN7WebCore9HTMLNames10bgsoundTagE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames4iTagE": __ZN7WebCore9HTMLNames4iTagE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore9HTMLNames9centerTagE": __ZN7WebCore9HTMLNames9centerTagE, "__ZN7WebCore11MathMLNames17annotation_xmlTagE": __ZN7WebCore11MathMLNames17annotation_xmlTagE, "__ZN7WebCore11MathMLNames5mnTagE": __ZN7WebCore11MathMLNames5mnTagE, "__ZN7WebCore9HTMLNames9sourceTagE": __ZN7WebCore9HTMLNames9sourceTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames5emTagE": __ZN7WebCore9HTMLNames5emTagE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN7WebCore11MathMLNames5miTagE": __ZN7WebCore11MathMLNames5miTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames7rubyTagE": __ZN7WebCore9HTMLNames7rubyTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore8SVGNames7descTagE": __ZN7WebCore8SVGNames7descTagE, "__ZN7WebCore9HTMLNames6navTagE": __ZN7WebCore9HTMLNames6navTagE, "__ZN7WebCore11MathMLNames7mathTagE": __ZN7WebCore11MathMLNames7mathTagE, "__ZN7WebCore9HTMLNames6dirTagE": __ZN7WebCore9HTMLNames6dirTagE, "__ZN7WebCore8SVGNames9scriptTagE": __ZN7WebCore8SVGNames9scriptTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE": __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore9HTMLNames8sizeAttrE": __ZN7WebCore9HTMLNames8sizeAttrE, "__ZN7WebCore9HTMLNames10articleTagE": __ZN7WebCore9HTMLNames10articleTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore10XMLNSNames9xmlnsAttrE": __ZN7WebCore10XMLNSNames9xmlnsAttrE, "__ZN7WebCore11MathMLNames5msTagE": __ZN7WebCore11MathMLNames5msTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames5ttTagE": __ZN7WebCore9HTMLNames5ttTagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore9HTMLNames6subTagE": __ZN7WebCore9HTMLNames6subTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore8SVGNames8titleTagE": __ZN7WebCore8SVGNames8titleTagE, "__ZN7WebCore9HTMLNames9colorAttrE": __ZN7WebCore9HTMLNames9colorAttrE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames11noframesTagE": __ZN7WebCore9HTMLNames11noframesTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames13figcaptionTagE": __ZN7WebCore9HTMLNames13figcaptionTagE, "__ZN7WebCore9HTMLNames8trackTagE": __ZN7WebCore9HTMLNames8trackTagE, "__ZN7WebCore9HTMLNames7mainTagE": __ZN7WebCore9HTMLNames7mainTagE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames10commandTagE": __ZN7WebCore9HTMLNames10commandTagE, "__ZN7WebCore9HTMLNames10promptAttrE": __ZN7WebCore9HTMLNames10promptAttrE, "__ZN7WebCore11MathMLNames9mglyphTagE": __ZN7WebCore11MathMLNames9mglyphTagE, "__ZN3WTF7xmlAtomE": __ZN3WTF7xmlAtomE, "__ZN7WebCore9HTMLNames11basefontTagE": __ZN7WebCore9HTMLNames11basefontTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames9hgroupTagE": __ZN7WebCore9HTMLNames9hgroupTagE, "__ZN3WTF9xlinkAtomE": __ZN3WTF9xlinkAtomE, "__ZN7WebCore9HTMLNames5rtTagE": __ZN7WebCore9HTMLNames5rtTagE, "__ZN7WebCore9HTMLNames8paramTagE": __ZN7WebCore9HTMLNames8paramTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore9HTMLNames9headerTagE": __ZN7WebCore9HTMLNames9headerTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames6bigTagE": __ZN7WebCore9HTMLNames6bigTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames8labelTagE": __ZN7WebCore9HTMLNames8labelTagE, "__ZN7WebCore9HTMLNames5rpTagE": __ZN7WebCore9HTMLNames5rpTagE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15AtomicHTMLTokenD2Ev","__ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHeadEv","__ZN7WebCore15AtomicHTMLTokenC1ENS_9HTMLToken4TypeERKN3WTF12AtomicStringERKNS3_6VectorINS_9AttributeELj0ENS3_15CrashOnOverflowEEE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore15HTMLTreeBuilder34shouldProcessTokenInForeignContentEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder27processEndTagForInTableBodyEPNS_15AtomicHTMLTokenE","__ZN3WTF6VectorIN7WebCore15HTMLTreeBuilder13InsertionModeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore15HTMLTreeBuilder6detachEv","_memcpy","__ZN7WebCore15HTMLTreeBuilder16processEndOfFileEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder15processStartTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore13HTMLStackItemC2EN3WTF10PassRefPtrINS_13ContainerNodeEEENS0_8ItemTypeE","__ZN7WebCore15HTMLTreeBuilder28processGenericRCDATAStartTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKNS_13QualifiedNameE","__ZN7WebCoreL23adjustForeignAttributesEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder21processScriptStartTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilderD2Ev","__ZN7WebCore15HTMLTreeBuilder34processFakePEndTagIfPInButtonScopeEv","__ZNK3WTF12StringAppendINS0_INS_6StringEcEENS_12AtomicStringEEcvS1_Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore15HTMLTreeBuilder31processCharacterBufferForInBodyERNS0_28ExternalCharacterTokenBufferE","__ZN7WebCore15HTMLTreeBuilder19defaultForAfterHeadEv","__ZN7WebCore15HTMLTreeBuilder37processEndOfFileForInTemplateContentsEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextD2Ev","__ZN7WebCore15HTMLTreeBuilder26processBodyEndTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_","__ZN7WebCore15HTMLTreeBuilder17defaultForInitialEv","__ZN7WebCore15HTMLTreeBuilder16processCharacterEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder22processEndTagForInCellEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder21defaultForInTableTextEv","__ZN7WebCore15HTMLTreeBuilder28ExternalCharacterTokenBuffer23takeRemainingWhitespaceEv","__ZN7WebCore15HTMLTreeBuilder37processColgroupEndTagForInColumnGroupEv","__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2Ev","__ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE","__ZN7WebCore13HTMLStackItemD2Ev","__ZN7WebCore15HTMLTreeBuilder22processCharacterBufferERNS0_28ExternalCharacterTokenBufferE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_","__ZN7WebCore15HTMLTreeBuilder22FragmentParsingContextC2ERNS_16DocumentFragmentEPNS_7ElementE","__ZN7WebCoreL20adjustSVGTagNameCaseEPNS_15AtomicHTMLTokenE","__ZNK7WebCore13HTMLStackItem13isSpecialNodeEv","__ZN7WebCore15HTMLTreeBuilder19processDoctypeTokenEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder19takeScriptToProcessERN3WTF12TextPositionE","__ZN7WebCore15HTMLTreeBuilder30processAnyOtherEndTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCoreL22adjustMathMLAttributesEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder23processTrEndTagForInRowEv","__ZN7WebCore15HTMLTreeBuilder23processTemplateStartTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder13constructTreeEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder23processEndTagForInTableEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder20defaultForBeforeHTMLEv","_memset","__ZN7WebCore15HTMLTreeBuilder8finishedEv","__ZN7WebCore15HTMLTreeBuilder19processFakeStartTagERKNS_13QualifiedNameERKN3WTF6VectorINS_9AttributeELj0ENS4_15CrashOnOverflowEEE","__ZN7WebCore15HTMLTreeBuilder28processHtmlStartTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder21processFakeCharactersERKN3WTF6StringE","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCoreL19adjustSVGAttributesEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder14processCommentEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder29processGenericRawTextStartTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder31resetInsertionModeAppropriatelyEv","__ZN7WebCore15HTMLTreeBuilder17processFakeEndTagERKN3WTF12AtomicStringE","__ZN3WTF22KeyValuePairHashTraitsINS_10HashTraitsINS_12AtomicStringEEENS1_IN7WebCore13QualifiedNameEEEE10emptyValueEv","__ZN7WebCoreL18addNamesWithPrefixEPN3WTF7HashMapINS0_12AtomicStringENS_13QualifiedNameENS0_16AtomicStringHashENS0_10HashTraitsIS2_EENS5_IS3_EEEERKS2_PKPKS3_j","__ZN7WebCore15HTMLTreeBuilder13processEndTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder28processTokenInForeignContentEPNS_15AtomicHTMLTokenE","__ZNK3WTF7HashMapINS_12AtomicStringEN7WebCore13QualifiedNameENS_16AtomicStringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3getERKS1_","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15HTMLTreeBuilder24processStartTagForInHeadEPNS_15AtomicHTMLTokenE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E13allocateTableEi","__ZN7WebCore15HTMLTreeBuilder31processIsindexStartTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder22processEndTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder28processTableEndTagForInTableEv","__ZN7WebCore15HTMLTreeBuilder16defaultForInHeadEv","__ZN7WebCore15HTMLTreeBuilderC2ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE","__ZN7WebCore15HTMLTreeBuilder32processCaptionEndTagForInCaptionEv","__ZN7WebCore15HTMLTreeBuilder12processTokenEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder21callTheAdoptionAgencyEPNS_15AtomicHTMLTokenE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15HTMLTreeBuilder25attributesForIsindexInputEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder24processStartTagForInBodyEPNS_15AtomicHTMLTokenE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore15HTMLTreeBuilder21processTemplateEndTagEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder24defaultForInHeadNoscriptEv","__ZN7WebCore15HTMLTreeBuilder10parseErrorEPNS_15AtomicHTMLTokenE","__ZN7WebCore15HTMLTreeBuilder12closeTheCellEv","__ZN7WebCore15HTMLTreeBuilder25processStartTagForInTableEPNS_15AtomicHTMLTokenE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_N7WebCore13QualifiedNameEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN7WebCore15HTMLTreeBuilder21processEndTagForInRowEPNS_15AtomicHTMLTokenE"]

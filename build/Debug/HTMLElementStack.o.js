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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16HTMLElementStack13ElementRecordC1EN3WTF10PassRefPtrINS_13HTMLStackItemEEENS2_6OwnPtrIS1_EE;
var __ZN7WebCore16HTMLElementStack13ElementRecordD1Ev;
var __ZN7WebCore16HTMLElementStackC1Ev;
var __ZN7WebCore16HTMLElementStackD1Ev;
/* memory initializer */ allocate([97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore9HTMLNames10sectionTagE=env.__ZN7WebCore9HTMLNames10sectionTagE|0;
  var __ZN7WebCore9HTMLNames10articleTagE=env.__ZN7WebCore9HTMLNames10articleTagE|0;
  var __ZN7WebCore8SVGNames7descTagE=env.__ZN7WebCore8SVGNames7descTagE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames10summaryTagE=env.__ZN7WebCore9HTMLNames10summaryTagE|0;
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
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames10detailsTagE=env.__ZN7WebCore9HTMLNames10detailsTagE|0;
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames11fieldsetTagE=env.__ZN7WebCore9HTMLNames11fieldsetTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var __ZN7WebCore9HTMLNames10captionTagE=env.__ZN7WebCore9HTMLNames10captionTagE|0;
  var __ZN7WebCore9HTMLNames8asideTagE=env.__ZN7WebCore9HTMLNames8asideTagE|0;
  var __ZN7WebCore11MathMLNames5moTagE=env.__ZN7WebCore11MathMLNames5moTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore9HTMLNames6wbrTagE=env.__ZN7WebCore9HTMLNames6wbrTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames10marqueeTagE=env.__ZN7WebCore9HTMLNames10marqueeTagE|0;
  var __ZN7WebCore9HTMLNames10bgsoundTagE=env.__ZN7WebCore9HTMLNames10bgsoundTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames9centerTagE=env.__ZN7WebCore9HTMLNames9centerTagE|0;
  var __ZN7WebCore11MathMLNames12encodingAttrE=env.__ZN7WebCore11MathMLNames12encodingAttrE|0;
  var __ZN7WebCore11MathMLNames5mnTagE=env.__ZN7WebCore11MathMLNames5mnTagE|0;
  var __ZN7WebCore9HTMLNames6navTagE=env.__ZN7WebCore9HTMLNames6navTagE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN7WebCore11MathMLNames5miTagE=env.__ZN7WebCore11MathMLNames5miTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore11MathMLNames8mtextTagE=env.__ZN7WebCore11MathMLNames8mtextTagE|0;
  var __ZN7WebCore9HTMLNames10addressTagE=env.__ZN7WebCore9HTMLNames10addressTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames6dirTagE=env.__ZN7WebCore9HTMLNames6dirTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore11MathMLNames5msTagE=env.__ZN7WebCore11MathMLNames5msTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore8SVGNames8titleTagE=env.__ZN7WebCore8SVGNames8titleTagE|0;
  var __ZN7WebCore11MathMLNames17annotation_xmlTagE=env.__ZN7WebCore11MathMLNames17annotation_xmlTagE|0;
  var __ZN7WebCore9HTMLNames11noframesTagE=env.__ZN7WebCore9HTMLNames11noframesTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames13figcaptionTagE=env.__ZN7WebCore9HTMLNames13figcaptionTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames7mainTagE=env.__ZN7WebCore9HTMLNames7mainTagE|0;
  var __ZN7WebCore9HTMLNames9figureTagE=env.__ZN7WebCore9HTMLNames9figureTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames10commandTagE=env.__ZN7WebCore9HTMLNames10commandTagE|0;
  var __ZN7WebCore9HTMLNames11basefontTagE=env.__ZN7WebCore9HTMLNames11basefontTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames9hgroupTagE=env.__ZN7WebCore9HTMLNames9hgroupTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames8paramTagE=env.__ZN7WebCore9HTMLNames8paramTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore9HTMLNames9headerTagE=env.__ZN7WebCore9HTMLNames9headerTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
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
function __ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames10captionTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore11MathMLNames5miTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
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
 i2 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore16HTMLElementStack33popUntilForeignContentScopeMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 L1 : while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i5 = i1 + 28 | 0;
  do {
   if ((HEAP8[i5] & 1) == 0) {
    i4 = HEAP32[__ZN7WebCore11MathMLNames5miTagE >> 2] | 0;
    i6 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
      i7 = 25;
      break L1;
     }
    }
    i4 = HEAP32[__ZN7WebCore11MathMLNames5moTagE >> 2] | 0;
    if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
      i7 = 29;
      break L1;
     }
    }
    i4 = HEAP32[__ZN7WebCore11MathMLNames5mnTagE >> 2] | 0;
    if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
      i7 = 22;
      break L1;
     }
    }
    i4 = HEAP32[__ZN7WebCore11MathMLNames5msTagE >> 2] | 0;
    if ((i6 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
      i7 = 28;
      break L1;
     }
    }
    i4 = HEAP32[__ZN7WebCore11MathMLNames8mtextTagE >> 2] | 0;
    if ((i6 | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
     i7 = 27;
     break L1;
    }
   }
  } while (0);
  if (__ZN7WebCore16HTMLElementStack22isHTMLIntegrationPointEPNS_13HTMLStackItemE(i1) | 0) {
   i7 = 26;
   break;
  }
  if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
   i7 = 23;
   break;
  }
  if ((HEAP8[i5] & 1) != 0) {
   i7 = 24;
   break;
  }
  i4 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 136 >> 2] & 7](i4);
  i4 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i4);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 }
 if ((i7 | 0) == 22) {
  return;
 } else if ((i7 | 0) == 23) {
  return;
 } else if ((i7 | 0) == 24) {
  return;
 } else if ((i7 | 0) == 25) {
  return;
 } else if ((i7 | 0) == 26) {
  return;
 } else if ((i7 | 0) == 27) {
  return;
 } else if ((i7 | 0) == 28) {
  return;
 } else if ((i7 | 0) == 29) {
  return;
 }
}
function __ZNK7WebCore16HTMLElementStack31hasNumberedHeaderElementInScopeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 26;
   break;
  }
  i5 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i7 + 1;
    if ((i7 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i5);
     __ZN3WTF8fastFreeEPv(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
  i6 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 28;
    break;
   }
  }
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 21;
    break;
   }
  }
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 22;
    break;
   }
  }
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 25;
    break;
   }
  }
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 23;
    break;
   }
  }
  i7 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
   if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    i3 = 1;
    i4 = 24;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i5) | 0) {
   i3 = 0;
   i4 = 27;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i4 | 0) == 21) {
  return i3 | 0;
 } else if ((i4 | 0) == 22) {
  return i3 | 0;
 } else if ((i4 | 0) == 23) {
  return i3 | 0;
 } else if ((i4 | 0) == 24) {
  return i3 | 0;
 } else if ((i4 | 0) == 25) {
  return i3 | 0;
 } else if ((i4 | 0) == 26) {
  return i3 | 0;
 } else if ((i4 | 0) == 27) {
  return i3 | 0;
 } else if ((i4 | 0) == 28) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack22isHTMLIntegrationPointEPNS_13HTMLStackItemE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[__ZN7WebCore11MathMLNames17annotation_xmlTagE >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   }
   i5 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i2 = 0;
    return i2 | 0;
   }
   i6 = HEAP32[i1 + 12 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore11MathMLNames12encodingAttrE >> 2] | 0;
   i8 = i7 + 12 | 0;
   i9 = i7 + 16 | 0;
   i10 = 0;
   while (1) {
    i11 = HEAP32[i6 + (i10 << 3) >> 2] | 0;
    if ((i11 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i11 = i10 + 1 | 0;
    if (i11 >>> 0 < i5 >>> 0) {
     i10 = i11;
    } else {
     i2 = 0;
     i12 = 26;
     break;
    }
   }
   if ((i12 | 0) == 26) {
    return i2 | 0;
   }
   if (i5 >>> 0 <= i10 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if ((i6 + (i10 << 3) | 0) == 0) {
    i2 = 0;
    return i2 | 0;
   }
   i9 = i6 + (i10 << 3) + 4 | 0;
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    i2 = 1;
    return i2 | 0;
   }
   i2 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 8 | 0) | 0;
   return i2 | 0;
  }
 } while (0);
 i12 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i12 = HEAP32[__ZN7WebCore8SVGNames7descTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i12 = HEAP32[__ZN7WebCore8SVGNames8titleTagE >> 2] | 0;
 if ((i4 | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZN7WebCore16HTMLElementStack35popUntilNumberedHeaderElementPoppedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 1;
   } else {
    i7 = 8;
   }
  } else {
   i7 = 8;
  }
  do {
   if ((i7 | 0) == 8) {
    i7 = 0;
    i5 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
    if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i6 = 1;
      break;
     }
    }
    i5 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
    if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i6 = 1;
      break;
     }
    }
    i5 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
    if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i6 = 1;
      break;
     }
    }
    i5 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
    if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
     if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i6 = 1;
      break;
     }
    }
    i5 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
    if ((i4 | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
     i6 = 0;
     break;
    }
    i6 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   }
  } while (0);
  i1 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 7](i1);
  i1 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  if (i6) {
   break;
  }
 }
 return;
}
function __ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 19;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 20;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 21;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 22;
    break;
   }
  }
  if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
   i6 = 23;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 24;
    break;
   }
  }
  i5 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 136 >> 2] & 7](i5);
  i5 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 }
 if ((i6 | 0) == 19) {
  return;
 } else if ((i6 | 0) == 20) {
  return;
 } else if ((i6 | 0) == 21) {
  return;
 } else if ((i6 | 0) == 22) {
  return;
 } else if ((i6 | 0) == 23) {
  return;
 } else if ((i6 | 0) == 24) {
  return;
 }
}
function __ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 18;
    break;
   }
  }
  i5 = HEAP32[i3 + 4 >> 2] | 0;
  if ((HEAP32[i5 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 0;
    i7 = 20;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 19;
    break;
   }
  }
  if ((HEAP8[i3 + 28 | 0] & 1) != 0) {
   i4 = 0;
   i7 = 22;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 23;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 24;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 22) {
  return i4 | 0;
 } else if ((i7 | 0) == 20) {
  return i4 | 0;
 } else if ((i7 | 0) == 19) {
  return i4 | 0;
 } else if ((i7 | 0) == 18) {
  return i4 | 0;
 } else if ((i7 | 0) == 23) {
  return i4 | 0;
 } else if ((i7 | 0) == 24) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack24popUntilTableScopeMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  if ((HEAP32[i5 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = 15;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 16;
    break;
   }
  }
  if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
   i6 = 17;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 18;
    break;
   }
  }
  i5 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 136 >> 2] & 7](i5);
  i5 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 }
 if ((i6 | 0) == 15) {
  return;
 } else if ((i6 | 0) == 16) {
  return;
 } else if ((i6 | 0) == 17) {
  return;
 } else if ((i6 | 0) == 18) {
  return;
 }
}
function __ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 16;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 18;
    break;
   }
  }
  if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
   i6 = 17;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 15;
    break;
   }
  }
  i5 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 136 >> 2] & 7](i5);
  i5 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 }
 if ((i6 | 0) == 15) {
  return;
 } else if ((i6 | 0) == 16) {
  return;
 } else if ((i6 | 0) == 17) {
  return;
 } else if ((i6 | 0) == 18) {
  return;
 }
}
function __ZNK7WebCore16HTMLElementStack15inListItemScopeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 18;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i3) | 0) {
   i4 = 0;
   i7 = 17;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 16;
    break;
   }
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 20;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 21;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 21) {
  return i4 | 0;
 } else if ((i7 | 0) == 16) {
  return i4 | 0;
 } else if ((i7 | 0) == 20) {
  return i4 | 0;
 } else if ((i7 | 0) == 18) {
  return i4 | 0;
 } else if ((i7 | 0) == 17) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack11insertAboveEN3WTF10PassRefPtrINS_13HTMLStackItemEEEPNS0_13ElementRecordE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (i3 | 0)) {
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i6 = i1 + 16 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = __ZN3WTF10fastMallocEj(8) | 0;
  i8 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 >> 2] = i7;
  HEAP32[i6 + 4 >> 2] = i8;
  i8 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i6;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i8);
  return;
 } else {
  i9 = i5;
 }
 while (1) {
  if ((i9 | 0) == 0) {
   i10 = 9;
   break;
  }
  i11 = i9 + 4 | 0;
  i9 = HEAP32[i11 >> 2] | 0;
  if ((i9 | 0) == (i3 | 0)) {
   break;
  }
 }
 if ((i10 | 0) == 9) {
  return;
 }
 i10 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = __ZN3WTF10fastMallocEj(8) | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i10 + 4 >> 2] = i1;
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 __ZN7WebCore7Element20beginParsingChildrenEv(HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 4 >> 2] | 0);
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
function __ZNK7WebCore16HTMLElementStack13inSelectScopeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i3 + 8 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 16;
    break;
   }
  }
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  if ((HEAP32[i6 + 12 >> 2] & 16 | 0) == 0) {
   i4 = 0;
   i7 = 15;
   break;
  }
  i5 = HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0;
  if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 0;
    i7 = 14;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 17;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 16) {
  return i4 | 0;
 } else if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 17) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack13inSelectScopeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i3 + 8 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 15;
    break;
   }
  }
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  if ((HEAP32[i6 + 12 >> 2] & 16 | 0) == 0) {
   i4 = 0;
   i7 = 14;
   break;
  }
  i5 = HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0;
  if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i5 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 0;
    i7 = 18;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 17;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 } else if ((i7 | 0) == 17) {
  return i4 | 0;
 } else if ((i7 | 0) == 18) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack13inButtonScopeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 14;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i3) | 0) {
   i4 = 0;
   i7 = 15;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 16;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 17;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 } else if ((i7 | 0) == 17) {
  return i4 | 0;
 } else if ((i7 | 0) == 16) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack13inButtonScopeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 15;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i3) | 0) {
   i4 = 0;
   i7 = 14;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 0;
    i7 = 18;
    break;
   }
  }
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i7 = 17;
   break;
  } else {
   i2 = i5;
  }
 }
 if ((i7 | 0) == 17) {
  return i4 | 0;
 } else if ((i7 | 0) == 18) {
  return i4 | 0;
 } else if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack28isMathMLTextIntegrationPointEPNS_13HTMLStackItemE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[__ZN7WebCore11MathMLNames5miTagE >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore11MathMLNames5moTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore11MathMLNames5mnTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore11MathMLNames5msTagE >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore11MathMLNames8mtextTagE >> 2] | 0;
 if ((i4 | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = (HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 | 0;
 i4 = i2;
 while (1) {
  i2 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i5 = i2 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i2);
     __ZN3WTF8fastFreeEPv(i2);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i2 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i3 = 1;
    i7 = 15;
    break;
   }
  }
  if ((HEAP8[i2 + 28 | 0] & 1) != 0) {
   i3 = 0;
   i7 = 14;
   break;
  }
  i5 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i2 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i3 = 0;
    i7 = 17;
    break;
   }
  }
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i3 = 0;
   i7 = 18;
   break;
  } else {
   i4 = i5;
  }
 }
 if ((i7 | 0) == 15) {
  return i3 | 0;
 } else if ((i7 | 0) == 18) {
  return i3 | 0;
 } else if ((i7 | 0) == 17) {
  return i3 | 0;
 } else if ((i7 | 0) == 14) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack21removeHTMLHeadElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 | 0;
 i6 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0);
 HEAP32[i1 + 8 >> 2] = 0;
 if (i6) {
  i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 136 >> 2] & 7](i6);
  i6 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i6);
  i6 = i1 + 16 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
  return;
 } else {
  i7 = i4;
 }
 while (1) {
  if ((i7 | 0) == 0) {
   i8 = 9;
   break;
  }
  i9 = i7 + 4 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
   break;
  }
 }
 if ((i8 | 0) == 9) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 136 >> 2] & 7](i2);
 i2 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i2);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 136 >> 2] & 7](i2);
  i5 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i6;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
  i5 = i1 + 16 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
  return;
 } else {
  i7 = i4;
 }
 while (1) {
  if ((i7 | 0) == 0) {
   i8 = 9;
   break;
  }
  i9 = i7 + 4 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
   break;
  }
 }
 if ((i8 | 0) == 9) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 136 >> 2] & 7](i2);
 i2 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i2);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack14popUntilPoppedEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i5 = i4;
 i6 = i1 + 16 | 0;
 if ((i5 | 0) == (i2 | 0)) {
  i7 = i4;
 } else {
  i1 = i4;
  i4 = i5;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 7](i4);
   i5 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i8;
   __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
   i5 = HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   i8 = i5;
   if ((i8 | 0) == (i2 | 0)) {
    i7 = i5;
    break;
   } else {
    i1 = i5;
    i4 = i8;
   }
  }
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 136 >> 2] & 7](i7);
 i7 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i7);
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
 return;
}
function __ZNK7WebCore16HTMLElementStack7inScopeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i3 + 8 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 14;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i3) | 0) {
   i4 = 0;
   i7 = 13;
   break;
  }
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i4 = 0;
   i7 = 15;
   break;
  } else {
   i2 = i6;
  }
 }
 if ((i7 | 0) == 13) {
  return i4 | 0;
 } else if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i3 + 8 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i3 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i4 = 1;
    i7 = 13;
    break;
   }
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i3) | 0) {
   i4 = 0;
   i7 = 15;
   break;
  }
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i4 = 0;
   i7 = 12;
   break;
  } else {
   i2 = i6;
  }
 }
 if ((i7 | 0) == 12) {
  return i4 | 0;
 } else if ((i7 | 0) == 13) {
  return i4 | 0;
 } else if ((i7 | 0) == 15) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack8popUntilERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i2 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i5 = i1 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i1 + 8 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    break;
   }
  }
  i6 = HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 136 >> 2] & 7](i6);
  i6 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i6);
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 }
 return;
}
function __ZNK7WebCore16HTMLElementStack33furthestBlockForFormattingElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = 0;
  i6 = i3;
 }
 while (1) {
  i3 = HEAP32[i6 >> 2] | 0;
  if ((HEAP32[i3 + 4 >> 2] | 0) == (i2 | 0)) {
   i4 = i5;
   i7 = 10;
   break;
  }
  do {
   if ((i3 | 0) == 0) {
    i8 = __ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(0) | 0;
   } else {
    i1 = i3 | 0;
    i9 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = i9 + 1;
    i10 = __ZNK7WebCore13HTMLStackItem13isSpecialNodeEv(i3) | 0;
    if ((i9 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     i8 = i10;
     break;
    } else {
     HEAP32[i1 >> 2] = i9;
     i8 = i10;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i7 = 11;
   break;
  } else {
   i5 = i8 ? i6 : i5;
   i6 = i3;
  }
 }
 if ((i7 | 0) == 11) {
  return i4 | 0;
 } else if ((i7 | 0) == 10) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack8containsERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i2 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 14;
   break;
  }
  i6 = HEAP32[i1 >> 2] | 0;
  i7 = (i6 | 0) == 0;
  if (!i7) {
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
   i9 = (HEAP32[i6 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0);
  } else {
   i9 = 0;
  }
  do {
   if (!i7) {
    i8 = i6 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i8 >> 2] = i10;
     break;
    }
   }
  } while (0);
  if (i9) {
   i4 = i1;
   i5 = 13;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i5 | 0) == 13) {
  i11 = (i4 | 0) != 0;
  return i11 | 0;
 } else if ((i5 | 0) == 14) {
  i11 = (i4 | 0) != 0;
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack11oneBelowTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   if (((abort(28) | 0) & 1) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   i4 = i1 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i5 + 1;
   i6 = (HEAP8[i1 + 28 | 0] & 1) == 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    if (i6) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    HEAP32[i4 >> 2] = i5;
    if (i6) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  }
 } while (0);
 i1 = HEAP32[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 1;
 if ((i6 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  i3 = i1;
  return i3 | 0;
 } else {
  HEAP32[i2 >> 2] = i6;
  i3 = i1;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack7topmostERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 14;
   break;
  }
  i6 = HEAP32[i1 >> 2] | 0;
  i7 = (i6 | 0) == 0;
  if (!i7) {
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
   i9 = (HEAP32[i6 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0);
  } else {
   i9 = 0;
  }
  do {
   if (!i7) {
    i8 = i6 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i8 >> 2] = i10;
     break;
    }
   }
  } while (0);
  if (i9) {
   i4 = i1;
   i5 = 13;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i5 | 0) == 14) {
  return i4 | 0;
 } else if ((i5 | 0) == 13) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore16HTMLElementStack7inScopeEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 10;
   break;
  }
  i6 = HEAP32[i1 >> 2] | 0;
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
  if ((HEAP32[i6 + 4 >> 2] | 0) == (i3 | 0)) {
   i4 = 1;
   i5 = 11;
   break;
  }
  if (__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE(i6) | 0) {
   i4 = 0;
   i5 = 12;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i5 | 0) == 11) {
  return i4 | 0;
 } else if ((i5 | 0) == 10) {
  return i4 | 0;
 } else if ((i5 | 0) == 12) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack18removeNonTopCommonEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 while (1) {
  if ((i3 | 0) == 0) {
   i4 = 6;
   break;
  }
  i5 = i3 + 4 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
   break;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 136 >> 2] & 7](i2);
 i2 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i2);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack10pushCommonEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 return;
}
function __ZN7WebCore16HTMLElementStack8popUntilEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i5 = i4;
 if ((i5 | 0) == (i2 | 0)) {
  return;
 }
 i6 = i1 + 16 | 0;
 i1 = i4;
 i4 = i5;
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 7](i4);
  i5 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i7;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i5);
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1;
  i1 = HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  i4 = i1;
  if ((i4 | 0) == (i2 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore16HTMLElementStack6popAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 _memset(i1 + 4 | 0, 0, 16) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 7](i1 | 0);
  i1 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i4;
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
  __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore16HTMLElementStack8popUntilERKN3WTF12AtomicStringE(i1, i2);
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 7](i3);
 i3 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i3);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack19pushHTMLBodyElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZN7WebCore16HTMLElementStack19pushHTMLHeadElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZN7WebCore16HTMLElementStack18pushRootNodeCommonEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZN7WebCore16HTMLElementStack19pushHTMLHtmlElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZN7WebCore16HTMLElementStack9popCommonEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 7](i3);
 i3 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i3);
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(0);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack12pushRootNodeEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(HEAP32[i1 + 4 >> 2] | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore16HTMLElementStack18popHTMLBodyElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 7](i3);
 i3 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i3);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack18popHTMLHeadElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 7](i3);
 i3 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i3);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i1);
 return;
}
function __ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 5;
   break;
  }
  if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) == (i3 | 0)) {
   i4 = i1;
   i5 = 6;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i5 | 0) == 6) {
  i6 = (i4 | 0) != 0;
  return i6 | 0;
 } else if ((i5 | 0) == 5) {
  i6 = (i4 | 0) != 0;
  return i6 | 0;
 }
 return 0;
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
function __ZN7WebCore16HTMLElementStack3popEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 7](i3);
 i3 = (HEAP32[i2 >> 2] | 0) + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(i3);
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore16HTMLElementStack13ElementRecord14replaceElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore16HTMLElementStack4findEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 5;
   break;
  }
  if ((HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) == (i3 | 0)) {
   i4 = i1;
   i5 = 6;
   break;
  } else {
   i2 = i1 + 4 | 0;
  }
 }
 if ((i5 | 0) == 5) {
  return i4 | 0;
 } else if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16HTMLElementStack13ElementRecordD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(HEAP32[i1 + 4 >> 2] | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore16HTMLElementStack13ElementRecordD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(HEAP32[i1 + 4 >> 2] | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore16HTMLElementStack13ElementRecord7isAboveEPS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1;
 while (1) {
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 6;
   break;
  }
  if ((i1 | 0) == (i2 | 0)) {
   i4 = 1;
   i5 = 5;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i5 | 0) == 5) {
  return i4 | 0;
 } else if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
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
function __ZN7WebCore16HTMLElementStack13ElementRecordC2EN3WTF10PassRefPtrINS_13HTMLStackItemEEENS2_6OwnPtrIS1_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore16HTMLElementStack13ElementRecordC1EN3WTF10PassRefPtrINS_13HTMLStackItemEEENS2_6OwnPtrIS1_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZNK7WebCore16HTMLElementStack15inListItemScopeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore16HTMLElementStack15inListItemScopeERKN3WTF12AtomicStringE(i1, (HEAP32[i2 >> 2] | 0) + 12 | 0) | 0;
}
function __ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE(i1, (HEAP32[i2 >> 2] | 0) + 12 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore16HTMLElementStackD2Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(HEAP32[i1 >> 2] | 0);
 return;
}
function __ZN7WebCore16HTMLElementStackD1Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_(HEAP32[i1 >> 2] | 0);
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
function __ZNK7WebCore16HTMLElementStack17hasOnlyOneElementEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0) == 0 | 0;
}
function __ZNK7WebCore16HTMLElementStack30secondElementIsHTMLBodyElementEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 12 >> 2] | 0) != 0 | 0;
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
function __ZNK7WebCore16HTMLElementStack11bodyElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZNK7WebCore16HTMLElementStack11htmlElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZNK7WebCore16HTMLElementStack11headElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore16HTMLElementStack8rootNodeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZNK7WebCore16HTMLElementStack9topRecordEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 >> 2] | 0;
}
function __ZN7WebCore16HTMLElementStackC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore16HTMLElementStackC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16HTMLElementStackD2Ev,b0,__ZN7WebCore16HTMLElementStackC2Ev,b0,__ZN7WebCore16HTMLElementStack13ElementRecordD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore16HTMLElementStack13ElementRecordC2EN3WTF10PassRefPtrINS_13HTMLStackItemEEENS2_6OwnPtrIS1_EE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames9footerTagE": __ZN7WebCore9HTMLNames9footerTagE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore9HTMLNames10sectionTagE": __ZN7WebCore9HTMLNames10sectionTagE, "__ZN7WebCore9HTMLNames10articleTagE": __ZN7WebCore9HTMLNames10articleTagE, "__ZN7WebCore8SVGNames7descTagE": __ZN7WebCore8SVGNames7descTagE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames10summaryTagE": __ZN7WebCore9HTMLNames10summaryTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames10isindexTagE": __ZN7WebCore9HTMLNames10isindexTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames7menuTagE": __ZN7WebCore9HTMLNames7menuTagE, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames10detailsTagE": __ZN7WebCore9HTMLNames10detailsTagE, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames11fieldsetTagE": __ZN7WebCore9HTMLNames11fieldsetTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE, "__ZN7WebCore9HTMLNames10captionTagE": __ZN7WebCore9HTMLNames10captionTagE, "__ZN7WebCore9HTMLNames8asideTagE": __ZN7WebCore9HTMLNames8asideTagE, "__ZN7WebCore11MathMLNames5moTagE": __ZN7WebCore11MathMLNames5moTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore9HTMLNames6wbrTagE": __ZN7WebCore9HTMLNames6wbrTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames10marqueeTagE": __ZN7WebCore9HTMLNames10marqueeTagE, "__ZN7WebCore9HTMLNames10bgsoundTagE": __ZN7WebCore9HTMLNames10bgsoundTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames9centerTagE": __ZN7WebCore9HTMLNames9centerTagE, "__ZN7WebCore11MathMLNames12encodingAttrE": __ZN7WebCore11MathMLNames12encodingAttrE, "__ZN7WebCore11MathMLNames5mnTagE": __ZN7WebCore11MathMLNames5mnTagE, "__ZN7WebCore9HTMLNames6navTagE": __ZN7WebCore9HTMLNames6navTagE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN7WebCore11MathMLNames5miTagE": __ZN7WebCore11MathMLNames5miTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore11MathMLNames8mtextTagE": __ZN7WebCore11MathMLNames8mtextTagE, "__ZN7WebCore9HTMLNames10addressTagE": __ZN7WebCore9HTMLNames10addressTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames6dirTagE": __ZN7WebCore9HTMLNames6dirTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore11MathMLNames5msTagE": __ZN7WebCore11MathMLNames5msTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore8SVGNames8titleTagE": __ZN7WebCore8SVGNames8titleTagE, "__ZN7WebCore11MathMLNames17annotation_xmlTagE": __ZN7WebCore11MathMLNames17annotation_xmlTagE, "__ZN7WebCore9HTMLNames11noframesTagE": __ZN7WebCore9HTMLNames11noframesTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames13figcaptionTagE": __ZN7WebCore9HTMLNames13figcaptionTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames7mainTagE": __ZN7WebCore9HTMLNames7mainTagE, "__ZN7WebCore9HTMLNames9figureTagE": __ZN7WebCore9HTMLNames9figureTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames10commandTagE": __ZN7WebCore9HTMLNames10commandTagE, "__ZN7WebCore9HTMLNames11basefontTagE": __ZN7WebCore9HTMLNames11basefontTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames9hgroupTagE": __ZN7WebCore9HTMLNames9hgroupTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames8paramTagE": __ZN7WebCore9HTMLNames8paramTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore9HTMLNames9headerTagE": __ZN7WebCore9HTMLNames9headerTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore16HTMLElementStack11headElementEv","_strlen","__ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE","__ZN7WebCore16HTMLElementStack13ElementRecord14replaceElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZN7WebCore16HTMLElementStack10pushCommonEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZNK7WebCore16HTMLElementStack12inTableScopeERKN3WTF12AtomicStringE","__ZN7WebCore16HTMLElementStack24popUntilTableScopeMarkerEv","__ZN7WebCore16HTMLElementStack35popUntilNumberedHeaderElementPoppedEv","__ZNK7WebCore16HTMLElementStack7inScopeEPNS_7ElementE","__ZN7WebCore16HTMLElementStack18popHTMLHeadElementEv","__ZN7WebCore16HTMLElementStack13ElementRecordC2EN3WTF10PassRefPtrINS_13HTMLStackItemEEENS2_6OwnPtrIS1_EE","__ZNK7WebCore16HTMLElementStack7inScopeERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack7inScopeERKNS_13QualifiedNameE","__ZN7WebCore16HTMLElementStackC2Ev","__ZN7WebCore16HTMLElementStack13ElementRecordD2Ev","__ZN7WebCore12_GLOBAL__N_113isScopeMarkerEPNS_13HTMLStackItemE","__ZNK7WebCore16HTMLElementStack13inButtonScopeERKN3WTF12AtomicStringE","__ZN7WebCore16HTMLElementStack28isMathMLTextIntegrationPointEPNS_13HTMLStackItemE","__ZN3WTF14deleteOwnedPtrIN7WebCore16HTMLElementStack13ElementRecordEEEvPT_","__ZN7WebCore16HTMLElementStack22isHTMLIntegrationPointEPNS_13HTMLStackItemE","__ZNK7WebCore16HTMLElementStack30secondElementIsHTMLBodyElementEv","__ZN7WebCore16HTMLElementStack19pushHTMLHeadElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZN7WebCore16HTMLElementStack12pushRootNodeEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZNK7WebCore16HTMLElementStack11htmlElementEv","_memset","__ZN7WebCore16HTMLElementStack19pushHTMLHtmlElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZNK7WebCore16HTMLElementStack7topmostERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack8rootNodeEv","_memcpy","__ZNK7WebCore16HTMLElementStack13inSelectScopeERKNS_13QualifiedNameE","__ZNK7WebCore16HTMLElementStack13inButtonScopeERKNS_13QualifiedNameE","__ZN7WebCore16HTMLElementStack6popAllEv","__ZN7WebCore16HTMLElementStack28popUntilTableBodyScopeMarkerEv","__ZN7WebCore16HTMLElementStackD2Ev","__ZNK7WebCore16HTMLElementStack31hasNumberedHeaderElementInScopeEv","__ZNK7WebCore16HTMLElementStack15inListItemScopeERKNS_13QualifiedNameE","__ZN7WebCore16HTMLElementStack14popUntilPoppedERKN3WTF12AtomicStringE","__ZN7WebCore16HTMLElementStack18popHTMLBodyElementEv","__ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore16HTMLElementStack17hasOnlyOneElementEv","__ZN7WebCore16HTMLElementStack8popUntilERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE","__ZNK7WebCore16HTMLElementStack11oneBelowTopEv","__ZN7WebCore16HTMLElementStack18removeNonTopCommonEPNS_7ElementE","__ZN7WebCore16HTMLElementStack9popCommonEv","__ZN7WebCore16HTMLElementStack21removeHTMLHeadElementEPNS_7ElementE","__ZNK7WebCore16HTMLElementStack11bodyElementEv","__ZNK7WebCore16HTMLElementStack8containsERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack15inListItemScopeERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack13ElementRecord7isAboveEPS1_","__ZNK7WebCore16HTMLElementStack33furthestBlockForFormattingElementEPNS_7ElementE","__ZN7WebCore16HTMLElementStack18pushRootNodeCommonEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZNK7WebCore16HTMLElementStack4findEPNS_7ElementE","__ZN7WebCore16HTMLElementStack3popEv","__ZN7WebCore13HTMLStackItemD2Ev","__ZN7WebCore16HTMLElementStack27popUntilTableRowScopeMarkerEv","__ZN7WebCore16HTMLElementStack11insertAboveEN3WTF10PassRefPtrINS_13HTMLStackItemEEEPNS0_13ElementRecordE","__ZN7WebCore16HTMLElementStack19pushHTMLBodyElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZNK7WebCore16HTMLElementStack13inSelectScopeERKN3WTF12AtomicStringE","__ZNK7WebCore16HTMLElementStack9topRecordEv","__ZNK7WebCore16HTMLElementStack22hasTemplateInHTMLScopeEv","__ZN7WebCore16HTMLElementStack6removeEPNS_7ElementE","__ZNK7WebCore13HTMLStackItem13isSpecialNodeEv","__ZN7WebCore16HTMLElementStack14popUntilPoppedEPNS_7ElementE","__ZN7WebCore16HTMLElementStack33popUntilForeignContentScopeMarkerEv","__ZN7WebCore16HTMLElementStack8popUntilEPNS_7ElementE"]

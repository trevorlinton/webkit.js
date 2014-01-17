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
H_BASE = parentModule["_malloc"](1072 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1072;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames6bdoTagE=env.__ZN7WebCore9HTMLNames6bdoTagE|0;
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames9footerTagE=env.__ZN7WebCore9HTMLNames9footerTagE|0;
  var __ZN7WebCore22JSHTMLTableCellElement6s_infoE=env.__ZN7WebCore22JSHTMLTableCellElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLAppletElement6s_infoE=env.__ZN7WebCore19JSHTMLAppletElement6s_infoE|0;
  var __ZN7WebCore17JSHTMLMenuElement6s_infoE=env.__ZN7WebCore17JSHTMLMenuElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLAnchorElement6s_infoE=env.__ZN7WebCore19JSHTMLAnchorElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLEmbedElement6s_infoE=env.__ZN7WebCore18JSHTMLEmbedElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore22JSHTMLDirectoryElement6s_infoE=env.__ZN7WebCore22JSHTMLDirectoryElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames10sectionTagE=env.__ZN7WebCore9HTMLNames10sectionTagE|0;
  var __ZN7WebCore17JSHTMLFormElement6s_infoE=env.__ZN7WebCore17JSHTMLFormElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLImageElement6s_infoE=env.__ZN7WebCore18JSHTMLImageElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLCanvasElement6s_infoE=env.__ZN7WebCore19JSHTMLCanvasElement6s_infoE|0;
  var __ZN7WebCore21JSHTMLOptGroupElement6s_infoE=env.__ZN7WebCore21JSHTMLOptGroupElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames10addressTagE=env.__ZN7WebCore9HTMLNames10addressTagE|0;
  var __ZN7WebCore15JSHTMLHRElement6s_infoE=env.__ZN7WebCore15JSHTMLHRElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames10summaryTagE=env.__ZN7WebCore9HTMLNames10summaryTagE|0;
  var __ZN7WebCore15JSHTMLLIElement6s_infoE=env.__ZN7WebCore15JSHTMLLIElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames4sTagE=env.__ZN7WebCore9HTMLNames4sTagE|0;
  var __ZN7WebCore9HTMLNames7nobrTagE=env.__ZN7WebCore9HTMLNames7nobrTagE|0;
  var __ZN7WebCore17JSHTMLFontElement6s_infoE=env.__ZN7WebCore17JSHTMLFontElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore21JSHTMLTableRowElement6s_infoE=env.__ZN7WebCore21JSHTMLTableRowElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9headerTagE=env.__ZN7WebCore9HTMLNames9headerTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore16JSHTMLPreElement6s_infoE=env.__ZN7WebCore16JSHTMLPreElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames10isindexTagE=env.__ZN7WebCore9HTMLNames10isindexTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames7menuTagE=env.__ZN7WebCore9HTMLNames7menuTagE|0;
  var __ZN7WebCore21JSHTMLTableColElement6s_infoE=env.__ZN7WebCore21JSHTMLTableColElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
  var __ZN7WebCore9HTMLNames6bdiTagE=env.__ZN7WebCore9HTMLNames6bdiTagE|0;
  var __ZN7WebCore17JSHTMLSpanElement6s_infoE=env.__ZN7WebCore17JSHTMLSpanElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames7fontTagE=env.__ZN7WebCore9HTMLNames7fontTagE|0;
  var __ZN7WebCore9HTMLNames10detailsTagE=env.__ZN7WebCore9HTMLNames10detailsTagE|0;
  var __ZN7WebCore18JSHTMLTitleElement6s_infoE=env.__ZN7WebCore18JSHTMLTitleElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames4bTagE=env.__ZN7WebCore9HTMLNames4bTagE|0;
  var __ZN7WebCore18JSHTMLInputElement6s_infoE=env.__ZN7WebCore18JSHTMLInputElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames7rubyTagE=env.__ZN7WebCore9HTMLNames7rubyTagE|0;
  var __ZN7WebCore9HTMLNames8imageTagE=env.__ZN7WebCore9HTMLNames8imageTagE|0;
  var __ZN7WebCore9HTMLNames11fieldsetTagE=env.__ZN7WebCore9HTMLNames11fieldsetTagE|0;
  var __ZN7WebCore9HTMLNames7abbrTagE=env.__ZN7WebCore9HTMLNames7abbrTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore17JSHTMLBodyElement6s_infoE=env.__ZN7WebCore17JSHTMLBodyElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames7codeTagE=env.__ZN7WebCore9HTMLNames7codeTagE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames6varTagE=env.__ZN7WebCore9HTMLNames6varTagE|0;
  var __ZN7WebCore9HTMLNames6mapTagE=env.__ZN7WebCore9HTMLNames6mapTagE|0;
  var __ZN7WebCore16JSHTMLDivElement6s_infoE=env.__ZN7WebCore16JSHTMLDivElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLOptionElement6s_infoE=env.__ZN7WebCore19JSHTMLOptionElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLTableElement6s_infoE=env.__ZN7WebCore18JSHTMLTableElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var __ZN7WebCore16JSHTMLModElement6s_infoE=env.__ZN7WebCore16JSHTMLModElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames10captionTagE=env.__ZN7WebCore9HTMLNames10captionTagE|0;
  var __ZN7WebCore13JSHTMLElement6s_infoE=env.__ZN7WebCore13JSHTMLElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9strongTagE=env.__ZN7WebCore9HTMLNames9strongTagE|0;
  var __ZN7WebCore9HTMLNames8asideTagE=env.__ZN7WebCore9HTMLNames8asideTagE|0;
  var __ZN7WebCore9HTMLNames7markTagE=env.__ZN7WebCore9HTMLNames7markTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames9keygenTagE=env.__ZN7WebCore9HTMLNames9keygenTagE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore9HTMLNames6wbrTagE=env.__ZN7WebCore9HTMLNames6wbrTagE|0;
  var __ZN7WebCore9HTMLNames9strikeTagE=env.__ZN7WebCore9HTMLNames9strikeTagE|0;
  var __ZN7WebCore9HTMLNames8smallTagE=env.__ZN7WebCore9HTMLNames8smallTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames10marqueeTagE=env.__ZN7WebCore9HTMLNames10marqueeTagE|0;
  var __ZN7WebCore22JSHTMLParagraphElement6s_infoE=env.__ZN7WebCore22JSHTMLParagraphElement6s_infoE|0;
  var __ZN7WebCore17JSHTMLAreaElement6s_infoE=env.__ZN7WebCore17JSHTMLAreaElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames4uTagE=env.__ZN7WebCore9HTMLNames4uTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames10bgsoundTagE=env.__ZN7WebCore9HTMLNames10bgsoundTagE|0;
  var __ZN7WebCore9HTMLNames7sampTagE=env.__ZN7WebCore9HTMLNames7sampTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames4iTagE=env.__ZN7WebCore9HTMLNames4iTagE|0;
  var __ZN7WebCore19JSHTMLSelectElement6s_infoE=env.__ZN7WebCore19JSHTMLSelectElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9centerTagE=env.__ZN7WebCore9HTMLNames9centerTagE|0;
  var __ZN7WebCore9HTMLNames22webkitShadowContentTagE=env.__ZN7WebCore9HTMLNames22webkitShadowContentTagE|0;
  var __ZN7WebCore9HTMLNames9outputTagE=env.__ZN7WebCore9HTMLNames9outputTagE|0;
  var __ZN7WebCore9HTMLNames6navTagE=env.__ZN7WebCore9HTMLNames6navTagE|0;
  var __ZN7WebCore9HTMLNames5emTagE=env.__ZN7WebCore9HTMLNames5emTagE|0;
  var __ZN7WebCore17JSHTMLBaseElement6s_infoE=env.__ZN7WebCore17JSHTMLBaseElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore16JSHTMLMapElement6s_infoE=env.__ZN7WebCore16JSHTMLMapElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore18JSHTMLQuoteElement6s_infoE=env.__ZN7WebCore18JSHTMLQuoteElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames6insTagE=env.__ZN7WebCore9HTMLNames6insTagE|0;
  var __ZN7WebCore18JSHTMLDListElement6s_infoE=env.__ZN7WebCore18JSHTMLDListElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLOListElement6s_infoE=env.__ZN7WebCore18JSHTMLOListElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLOutputElement6s_infoE=env.__ZN7WebCore19JSHTMLOutputElement6s_infoE|0;
  var __ZN7WebCore21JSHTMLTextAreaElement6s_infoE=env.__ZN7WebCore21JSHTMLTextAreaElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames8layerTagE=env.__ZN7WebCore9HTMLNames8layerTagE|0;
  var __ZN7WebCore9HTMLNames6dirTagE=env.__ZN7WebCore9HTMLNames6dirTagE|0;
  var __ZN7WebCore9HTMLNames8meterTagE=env.__ZN7WebCore9HTMLNames8meterTagE|0;
  var __ZN7WebCore9HTMLNames6kbdTagE=env.__ZN7WebCore9HTMLNames6kbdTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN7WebCore9HTMLNames6supTagE=env.__ZN7WebCore9HTMLNames6supTagE|0;
  var __ZN7WebCore21JSHTMLFieldSetElement6s_infoE=env.__ZN7WebCore21JSHTMLFieldSetElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLUListElement6s_infoE=env.__ZN7WebCore18JSHTMLUListElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLParamElement6s_infoE=env.__ZN7WebCore18JSHTMLParamElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames6subTagE=env.__ZN7WebCore9HTMLNames6subTagE|0;
  var __ZN7WebCore9HTMLNames6bigTagE=env.__ZN7WebCore9HTMLNames6bigTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore19JSHTMLIFrameElement6s_infoE=env.__ZN7WebCore19JSHTMLIFrameElement6s_infoE|0;
  var __ZN7WebCore21JSHTMLProgressElement6s_infoE=env.__ZN7WebCore21JSHTMLProgressElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore18JSHTMLLabelElement6s_infoE=env.__ZN7WebCore18JSHTMLLabelElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLKeygenElement6s_infoE=env.__ZN7WebCore19JSHTMLKeygenElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLFrameElement6s_infoE=env.__ZN7WebCore18JSHTMLFrameElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames10articleTagE=env.__ZN7WebCore9HTMLNames10articleTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames10acronymTagE=env.__ZN7WebCore9HTMLNames10acronymTagE|0;
  var __ZN7WebCore17JSHTMLMetaElement6s_infoE=env.__ZN7WebCore17JSHTMLMetaElement6s_infoE|0;
  var __ZN7WebCore17JSHTMLLinkElement6s_infoE=env.__ZN7WebCore17JSHTMLLinkElement6s_infoE|0;
  var __ZN7WebCore17JSHTMLHeadElement6s_infoE=env.__ZN7WebCore17JSHTMLHeadElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames6delTagE=env.__ZN7WebCore9HTMLNames6delTagE|0;
  var __ZN7WebCore18JSHTMLMeterElement6s_infoE=env.__ZN7WebCore18JSHTMLMeterElement6s_infoE|0;
  var __ZTVN7WebCore11JSNodeOwnerE=env.__ZTVN7WebCore11JSNodeOwnerE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN7WebCore9HTMLNames4qTagE=env.__ZN7WebCore9HTMLNames4qTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames5ttTagE=env.__ZN7WebCore9HTMLNames5ttTagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore9HTMLNames10nolayerTagE=env.__ZN7WebCore9HTMLNames10nolayerTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore19JSHTMLButtonElement6s_infoE=env.__ZN7WebCore19JSHTMLButtonElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLLegendElement6s_infoE=env.__ZN7WebCore19JSHTMLLegendElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore21JSHTMLBaseFontElement6s_infoE=env.__ZN7WebCore21JSHTMLBaseFontElement6s_infoE|0;
  var __ZN7WebCore25JSHTMLTableSectionElement6s_infoE=env.__ZN7WebCore25JSHTMLTableSectionElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames11noframesTagE=env.__ZN7WebCore9HTMLNames11noframesTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore20JSHTMLUnknownElement6s_infoE=env.__ZN7WebCore20JSHTMLUnknownElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore20JSHTMLDetailsElement6s_infoE=env.__ZN7WebCore20JSHTMLDetailsElement6s_infoE|0;
  var __ZN7WebCore19JSHTMLScriptElement6s_infoE=env.__ZN7WebCore19JSHTMLScriptElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames7mainTagE=env.__ZN7WebCore9HTMLNames7mainTagE|0;
  var __ZN7WebCore9HTMLNames9figureTagE=env.__ZN7WebCore9HTMLNames9figureTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames10commandTagE=env.__ZN7WebCore9HTMLNames10commandTagE|0;
  var __ZN7WebCore9HTMLNames11progressTagE=env.__ZN7WebCore9HTMLNames11progressTagE|0;
  var __ZN7WebCore9HTMLNames11basefontTagE=env.__ZN7WebCore9HTMLNames11basefontTagE|0;
  var __ZN7WebCore21JSHTMLFrameSetElement6s_infoE=env.__ZN7WebCore21JSHTMLFrameSetElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames9hgroupTagE=env.__ZN7WebCore9HTMLNames9hgroupTagE|0;
  var __ZN7WebCore19JSHTMLObjectElement6s_infoE=env.__ZN7WebCore19JSHTMLObjectElement6s_infoE|0;
  var __ZN7WebCore15JSHTMLBRElement6s_infoE=env.__ZN7WebCore15JSHTMLBRElement6s_infoE|0;
  var __ZN7WebCore18JSHTMLStyleElement6s_infoE=env.__ZN7WebCore18JSHTMLStyleElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5rtTagE=env.__ZN7WebCore9HTMLNames5rtTagE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZN7WebCore9HTMLNames8paramTagE=env.__ZN7WebCore9HTMLNames8paramTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore20JSHTMLMarqueeElement6s_infoE=env.__ZN7WebCore20JSHTMLMarqueeElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames9legendTagE=env.__ZN7WebCore9HTMLNames9legendTagE|0;
  var __ZN7WebCore17JSHTMLHtmlElement6s_infoE=env.__ZN7WebCore17JSHTMLHtmlElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames7citeTagE=env.__ZN7WebCore9HTMLNames7citeTagE|0;
  var __ZN7WebCore9HTMLNames13figcaptionTagE=env.__ZN7WebCore9HTMLNames13figcaptionTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
  var __ZN7WebCore9HTMLNames8labelTagE=env.__ZN7WebCore9HTMLNames8labelTagE|0;
  var __ZN7WebCore20JSHTMLHeadingElement6s_infoE=env.__ZN7WebCore20JSHTMLHeadingElement6s_infoE|0;
  var __ZN7WebCore9HTMLNames5rpTagE=env.__ZN7WebCore9HTMLNames5rpTagE|0;
  var __ZN7WebCore9HTMLNames6dfnTagE=env.__ZN7WebCore9HTMLNames6dfnTagE|0;
  var __ZN7WebCore21JSHTMLTemplateElement6s_infoE=env.__ZN7WebCore21JSHTMLTemplateElement6s_infoE|0;
  var __ZN7WebCore25JSHTMLTableCaptionElement6s_infoE=env.__ZN7WebCore25JSHTMLTableCaptionElement6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+1072)|0;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+1064)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 8 >> 2] = __ZN7WebCore9HTMLNames4aTagE;
 HEAP32[H_BASE + 12 >> 2] = F_BASE_iiii + 60;
 HEAP32[H_BASE + 16 >> 2] = __ZN7WebCore9HTMLNames7abbrTagE;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 24 >> 2] = __ZN7WebCore9HTMLNames10acronymTagE;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 32 >> 2] = __ZN7WebCore9HTMLNames10addressTagE;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 40 >> 2] = __ZN7WebCore9HTMLNames9appletTagE;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiii + 28;
 HEAP32[H_BASE + 48 >> 2] = __ZN7WebCore9HTMLNames7areaTagE;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iiii + 52;
 HEAP32[H_BASE + 56 >> 2] = __ZN7WebCore9HTMLNames10articleTagE;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 64 >> 2] = __ZN7WebCore9HTMLNames8asideTagE;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 72 >> 2] = __ZN7WebCore9HTMLNames4bTagE;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 80 >> 2] = __ZN7WebCore9HTMLNames7baseTagE;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiii + 112;
 HEAP32[H_BASE + 88 >> 2] = __ZN7WebCore9HTMLNames11basefontTagE;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 56;
 HEAP32[H_BASE + 96 >> 2] = __ZN7WebCore9HTMLNames6bdiTagE;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 104 >> 2] = __ZN7WebCore9HTMLNames6bdoTagE;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 112 >> 2] = __ZN7WebCore9HTMLNames10bgsoundTagE;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 120 >> 2] = __ZN7WebCore9HTMLNames6bigTagE;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 128 >> 2] = __ZN7WebCore9HTMLNames13blockquoteTagE;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_iiii + 42;
 HEAP32[H_BASE + 136 >> 2] = __ZN7WebCore9HTMLNames7bodyTagE;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_iiii + 54;
 HEAP32[H_BASE + 144 >> 2] = __ZN7WebCore9HTMLNames5brTagE;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iiii + 74;
 HEAP32[H_BASE + 152 >> 2] = __ZN7WebCore9HTMLNames9buttonTagE;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iiii + 62;
 HEAP32[H_BASE + 160 >> 2] = __ZN7WebCore9HTMLNames9canvasTagE;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iiii + 46;
 HEAP32[H_BASE + 168 >> 2] = __ZN7WebCore9HTMLNames10captionTagE;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iiii + 100;
 HEAP32[H_BASE + 176 >> 2] = __ZN7WebCore9HTMLNames9centerTagE;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 184 >> 2] = __ZN7WebCore9HTMLNames7citeTagE;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 192 >> 2] = __ZN7WebCore9HTMLNames7codeTagE;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 200 >> 2] = __ZN7WebCore9HTMLNames6colTagE;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iiii + 66;
 HEAP32[H_BASE + 208 >> 2] = __ZN7WebCore9HTMLNames11colgroupTagE;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_iiii + 66;
 HEAP32[H_BASE + 216 >> 2] = __ZN7WebCore9HTMLNames10commandTagE;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 224 >> 2] = __ZN7WebCore9HTMLNames5ddTagE;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 232 >> 2] = __ZN7WebCore9HTMLNames6delTagE;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iiii + 90;
 HEAP32[H_BASE + 240 >> 2] = __ZN7WebCore9HTMLNames10detailsTagE;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iiii + 16;
 HEAP32[H_BASE + 248 >> 2] = __ZN7WebCore9HTMLNames6dfnTagE;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 256 >> 2] = __ZN7WebCore9HTMLNames6dirTagE;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iiii + 86;
 HEAP32[H_BASE + 264 >> 2] = __ZN7WebCore9HTMLNames6divTagE;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 272 >> 2] = __ZN7WebCore9HTMLNames5dlTagE;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iiii + 34;
 HEAP32[H_BASE + 280 >> 2] = __ZN7WebCore9HTMLNames5dtTagE;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 288 >> 2] = __ZN7WebCore9HTMLNames5emTagE;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 296 >> 2] = __ZN7WebCore9HTMLNames8embedTagE;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_iiii + 36;
 HEAP32[H_BASE + 304 >> 2] = __ZN7WebCore9HTMLNames11fieldsetTagE;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iiii + 12;
 HEAP32[H_BASE + 312 >> 2] = __ZN7WebCore9HTMLNames13figcaptionTagE;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 320 >> 2] = __ZN7WebCore9HTMLNames9figureTagE;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 328 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_iiii + 120;
 HEAP32[H_BASE + 336 >> 2] = __ZN7WebCore9HTMLNames9footerTagE;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 344 >> 2] = __ZN7WebCore9HTMLNames7formTagE;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iiii + 102;
 HEAP32[H_BASE + 352 >> 2] = __ZN7WebCore9HTMLNames8frameTagE;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 360 >> 2] = __ZN7WebCore9HTMLNames11framesetTagE;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_iiii + 24;
 HEAP32[H_BASE + 368 >> 2] = __ZN7WebCore9HTMLNames5h1TagE;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 376 >> 2] = __ZN7WebCore9HTMLNames5h2TagE;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 384 >> 2] = __ZN7WebCore9HTMLNames5h3TagE;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 392 >> 2] = __ZN7WebCore9HTMLNames5h4TagE;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 400 >> 2] = __ZN7WebCore9HTMLNames5h5TagE;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 408 >> 2] = __ZN7WebCore9HTMLNames5h6TagE;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 416 >> 2] = __ZN7WebCore9HTMLNames7headTagE;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iiii + 88;
 HEAP32[H_BASE + 424 >> 2] = __ZN7WebCore9HTMLNames9headerTagE;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 432 >> 2] = __ZN7WebCore9HTMLNames9hgroupTagE;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 440 >> 2] = __ZN7WebCore9HTMLNames5hrTagE;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiii + 72;
 HEAP32[H_BASE + 448 >> 2] = __ZN7WebCore9HTMLNames7htmlTagE;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iiii + 84;
 HEAP32[H_BASE + 456 >> 2] = __ZN7WebCore9HTMLNames4iTagE;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 464 >> 2] = __ZN7WebCore9HTMLNames9iframeTagE;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iiii + 96;
 HEAP32[H_BASE + 472 >> 2] = __ZN7WebCore9HTMLNames8imageTagE;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 480 >> 2] = __ZN7WebCore9HTMLNames6imgTagE;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_iiii + 22;
 HEAP32[H_BASE + 488 >> 2] = __ZN7WebCore9HTMLNames8inputTagE;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiii + 30;
 HEAP32[H_BASE + 496 >> 2] = __ZN7WebCore9HTMLNames6insTagE;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiii + 90;
 HEAP32[H_BASE + 504 >> 2] = __ZN7WebCore9HTMLNames10isindexTagE;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_iiii + 40;
 HEAP32[H_BASE + 512 >> 2] = __ZN7WebCore9HTMLNames6kbdTagE;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 520 >> 2] = __ZN7WebCore9HTMLNames9keygenTagE;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iiii + 20;
 HEAP32[H_BASE + 528 >> 2] = __ZN7WebCore9HTMLNames8labelTagE;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iiii + 106;
 HEAP32[H_BASE + 536 >> 2] = __ZN7WebCore9HTMLNames8layerTagE;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 544 >> 2] = __ZN7WebCore9HTMLNames9legendTagE;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iiii + 68;
 HEAP32[H_BASE + 552 >> 2] = __ZN7WebCore9HTMLNames5liTagE;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iiii + 92;
 HEAP32[H_BASE + 560 >> 2] = __ZN7WebCore9HTMLNames7linkTagE;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iiii + 58;
 HEAP32[H_BASE + 568 >> 2] = __ZN7WebCore9HTMLNames10listingTagE;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_iiii + 82;
 HEAP32[H_BASE + 576 >> 2] = __ZN7WebCore9HTMLNames7mainTagE;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 584 >> 2] = __ZN7WebCore9HTMLNames6mapTagE;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 592 >> 2] = __ZN7WebCore9HTMLNames7markTagE;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 600 >> 2] = __ZN7WebCore9HTMLNames10marqueeTagE;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iiii + 38;
 HEAP32[H_BASE + 608 >> 2] = __ZN7WebCore9HTMLNames7menuTagE;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 110;
 HEAP32[H_BASE + 616 >> 2] = __ZN7WebCore9HTMLNames7metaTagE;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iiii + 94;
 HEAP32[H_BASE + 624 >> 2] = __ZN7WebCore9HTMLNames8meterTagE;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 632 >> 2] = __ZN7WebCore9HTMLNames6navTagE;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 640 >> 2] = __ZN7WebCore9HTMLNames7nobrTagE;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 648 >> 2] = __ZN7WebCore9HTMLNames10noembedTagE;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 656 >> 2] = __ZN7WebCore9HTMLNames11noframesTagE;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 664 >> 2] = __ZN7WebCore9HTMLNames10nolayerTagE;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 672 >> 2] = __ZN7WebCore9HTMLNames11noscriptTagE;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 680 >> 2] = __ZN7WebCore9HTMLNames9objectTagE;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_iiii + 48;
 HEAP32[H_BASE + 688 >> 2] = __ZN7WebCore9HTMLNames5olTagE;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_iiii + 118;
 HEAP32[H_BASE + 696 >> 2] = __ZN7WebCore9HTMLNames11optgroupTagE;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_iiii + 104;
 HEAP32[H_BASE + 704 >> 2] = __ZN7WebCore9HTMLNames9optionTagE;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_iiii + 18;
 HEAP32[H_BASE + 712 >> 2] = __ZN7WebCore9HTMLNames9outputTagE;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_iiii + 78;
 HEAP32[H_BASE + 720 >> 2] = __ZN7WebCore9HTMLNames4pTagE;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_iiii + 32;
 HEAP32[H_BASE + 728 >> 2] = __ZN7WebCore9HTMLNames8paramTagE;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_iiii + 64;
 HEAP32[H_BASE + 736 >> 2] = __ZN7WebCore9HTMLNames12plaintextTagE;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 744 >> 2] = __ZN7WebCore9HTMLNames6preTagE;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_iiii + 82;
 HEAP32[H_BASE + 752 >> 2] = __ZN7WebCore9HTMLNames11progressTagE;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_iiii + 14;
 HEAP32[H_BASE + 760 >> 2] = __ZN7WebCore9HTMLNames4qTagE;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_iiii + 42;
 HEAP32[H_BASE + 768 >> 2] = __ZN7WebCore9HTMLNames5rpTagE;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 776 >> 2] = __ZN7WebCore9HTMLNames5rtTagE;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 784 >> 2] = __ZN7WebCore9HTMLNames7rubyTagE;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 792 >> 2] = __ZN7WebCore9HTMLNames4sTagE;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 800 >> 2] = __ZN7WebCore9HTMLNames7sampTagE;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 808 >> 2] = __ZN7WebCore9HTMLNames9scriptTagE;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_iiii + 50;
 HEAP32[H_BASE + 816 >> 2] = __ZN7WebCore9HTMLNames10sectionTagE;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 824 >> 2] = __ZN7WebCore9HTMLNames9selectTagE;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_iiii + 116;
 HEAP32[H_BASE + 832 >> 2] = __ZN7WebCore9HTMLNames8smallTagE;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 840 >> 2] = __ZN7WebCore9HTMLNames7spanTagE;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 848 >> 2] = __ZN7WebCore9HTMLNames9strikeTagE;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 856 >> 2] = __ZN7WebCore9HTMLNames9strongTagE;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 864 >> 2] = __ZN7WebCore9HTMLNames8styleTagE;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_iiii + 44;
 HEAP32[H_BASE + 872 >> 2] = __ZN7WebCore9HTMLNames6subTagE;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 880 >> 2] = __ZN7WebCore9HTMLNames10summaryTagE;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 888 >> 2] = __ZN7WebCore9HTMLNames6supTagE;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 896 >> 2] = __ZN7WebCore9HTMLNames8tableTagE;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_iiii + 122;
 HEAP32[H_BASE + 904 >> 2] = __ZN7WebCore9HTMLNames8tbodyTagE;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_iiii + 70;
 HEAP32[H_BASE + 912 >> 2] = __ZN7WebCore9HTMLNames5tdTagE;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_iiii + 108;
 HEAP32[H_BASE + 920 >> 2] = __ZN7WebCore9HTMLNames11templateTagE;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_iiii + 126;
 HEAP32[H_BASE + 928 >> 2] = __ZN7WebCore9HTMLNames11textareaTagE;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iiii + 114;
 HEAP32[H_BASE + 936 >> 2] = __ZN7WebCore9HTMLNames8tfootTagE;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_iiii + 70;
 HEAP32[H_BASE + 944 >> 2] = __ZN7WebCore9HTMLNames5thTagE;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iiii + 108;
 HEAP32[H_BASE + 952 >> 2] = __ZN7WebCore9HTMLNames8theadTagE;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iiii + 70;
 HEAP32[H_BASE + 960 >> 2] = __ZN7WebCore9HTMLNames8titleTagE;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_iiii + 124;
 HEAP32[H_BASE + 968 >> 2] = __ZN7WebCore9HTMLNames5trTagE;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_iiii + 26;
 HEAP32[H_BASE + 976 >> 2] = __ZN7WebCore9HTMLNames5ttTagE;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 984 >> 2] = __ZN7WebCore9HTMLNames4uTagE;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 992 >> 2] = __ZN7WebCore9HTMLNames5ulTagE;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_iiii + 76;
 HEAP32[H_BASE + 1e3 >> 2] = __ZN7WebCore9HTMLNames6varTagE;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 1008 >> 2] = __ZN7WebCore9HTMLNames6wbrTagE;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 1016 >> 2] = __ZN7WebCore9HTMLNames22webkitShadowContentTagE;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 1024 >> 2] = __ZN7WebCore9HTMLNames6xmpTagE;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iiii + 82;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i3 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i3;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
  }
  i6 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19createJSHTMLWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (HEAP8[H_BASE + 1032 | 0] | 0) {
  if ((HEAP32[H_BASE + 1052 >> 2] | 0) == 0) {
   i7 = 4;
  }
 } else {
  _memset(H_BASE + 1040 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1032 | 0] = 1;
  i7 = 4;
 }
 if ((i7 | 0) == 4) {
  __ZN7WebCoreL22populateHTMLWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_11HTMLElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE(H_BASE + 1040);
 }
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
 i9 = i8;
 i10 = HEAP32[H_BASE + 1048 >> 2] | 0;
 i11 = HEAP32[H_BASE + 1040 >> 2] | 0;
 i12 = i8;
 i8 = i12 + ~(i12 << 15) | 0;
 i12 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i12 >>> 6 ^ i12;
 i12 = i8 + ~(i8 << 11) | 0;
 i8 = i12 >>> 16 ^ i12;
 L7 : do {
  if ((i11 | 0) != 0) {
   i12 = i8 & i10;
   i13 = i11 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i9 | 0)) {
    i15 = i13;
   } else {
    i13 = (i8 >>> 23) + ~i8 | 0;
    i16 = i13 << 12 ^ i13;
    i13 = i16 >>> 7 ^ i16;
    i16 = i13 << 2 ^ i13;
    i13 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i12;
    i12 = i14;
    while (1) {
     if ((i12 | 0) == 0) {
      break L7;
     }
     i14 = (i16 | 0) == 0 ? i13 : i16;
     i18 = i14 + i17 & i10;
     i19 = i11 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i9 | 0)) {
      i15 = i19;
      break;
     } else {
      i16 = i14;
      i17 = i18;
      i12 = i20;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i17 = i6 | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i17 >> 2] = i3;
   i16 = FUNCTION_TABLE_iiii[i12 & 127](i1, i2, i6) | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i21 = i16;
    STACKTOP = i4;
    return i21 | 0;
   }
   i17 = i12 + 8 | 0;
   i12 = i17 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i21 = i16;
    STACKTOP = i4;
    return i21 | 0;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i21 = i16;
    STACKTOP = i4;
    return i21 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i21 = i16;
   STACKTOP = i4;
   return i21 | 0;
  }
 } while (0);
 i6 = i3;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_20JSHTMLUnknownElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i15 = i5 | 0;
 HEAP32[i15 >> 2] = i6;
 if ((i3 | 0) != 0) {
  i9 = i3 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSHTMLUnknownElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLUnknownElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 + 8 | 0;
   i2 = i15 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_18HTMLUnknownElementENS_20JSHTMLUnknownElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i6, i9);
 i21 = i9 | 0;
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
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
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
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
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
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
function __ZN7WebCore12cacheWrapperINS_17HTMLOutputElementENS_19JSHTMLOutputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 if ((i2 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i2 + 4 | 0;
 }
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i14 = 0;
  } else {
   i11 = i3;
   i10 = (i11 & -65536) + 1060 | 0;
   i15 = i10 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i10) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i11;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i14 = i17;
  }
  i17 = i7 | 0;
  i7 = i13 | 0;
  i13 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i17 >> 2] = i13;
  if ((i13 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i13 = i3 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i14;
  }
  HEAP32[i13 >> 2] = HEAP32[i19 >> 2];
  i13 = i19;
  HEAP32[i13 >> 2] = i17;
  HEAP32[i13 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLFrameElementENS_18JSHTMLFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 if ((i2 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i2 + 4 | 0;
 }
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i14 = 0;
  } else {
   i11 = i3;
   i10 = (i11 & -65536) + 1060 | 0;
   i15 = i10 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i10) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i11;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i14 = i17;
  }
  i17 = i7 | 0;
  i7 = i13 | 0;
  i13 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i17 >> 2] = i13;
  if ((i13 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i13 = i3 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i14;
  }
  HEAP32[i13 >> 2] = HEAP32[i19 >> 2];
  i13 = i19;
  HEAP32[i13 >> 2] = i17;
  HEAP32[i13 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_23HTMLTableSectionElementENS_25JSHTMLTableSectionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_23HTMLTableCaptionElementENS_25JSHTMLTableCaptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_20HTMLTableCellElementENS_22JSHTMLTableCellElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_20HTMLParagraphElementENS_22JSHTMLParagraphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_20HTMLDirectoryElementENS_22JSHTMLDirectoryElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLTextAreaElementENS_21JSHTMLTextAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLTemplateElementENS_21JSHTMLTemplateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLTableRowElementENS_21JSHTMLTableRowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLTableColElementENS_21JSHTMLTableColElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLProgressElementENS_21JSHTMLProgressElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLOptGroupElementENS_21JSHTMLOptGroupElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLFrameSetElementENS_21JSHTMLFrameSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLFieldSetElementENS_21JSHTMLFieldSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19HTMLBaseFontElementENS_21JSHTMLBaseFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_18HTMLUnknownElementENS_20JSHTMLUnknownElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_18HTMLMarqueeElementENS_20JSHTMLMarqueeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_18HTMLHeadingElementENS_20JSHTMLHeadingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_18HTMLDetailsElementENS_20JSHTMLDetailsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLSelectElementENS_19JSHTMLSelectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLScriptElementENS_19JSHTMLScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLOptionElementENS_19JSHTMLOptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLObjectElementENS_19JSHTMLObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLLegendElementENS_19JSHTMLLegendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLKeygenElementENS_19JSHTMLKeygenElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLIFrameElementENS_19JSHTMLIFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLCanvasElementENS_19JSHTMLCanvasElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLButtonElementENS_19JSHTMLButtonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLAppletElementENS_19JSHTMLAppletElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_17HTMLAnchorElementENS_19JSHTMLAnchorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLUListElementENS_18JSHTMLUListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLTitleElementENS_18JSHTMLTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLTableElementENS_18JSHTMLTableElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLStyleElementENS_18JSHTMLStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLQuoteElementENS_18JSHTMLQuoteElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLParamElementENS_18JSHTMLParamElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLOListElementENS_18JSHTMLOListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLMeterElementENS_18JSHTMLMeterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLLabelElementENS_18JSHTMLLabelElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLInputElementENS_18JSHTMLInputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLImageElementENS_18JSHTMLImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLEmbedElementENS_18JSHTMLEmbedElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16HTMLDListElementENS_18JSHTMLDListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLSpanElementENS_17JSHTMLSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLMetaElementENS_17JSHTMLMetaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLMenuElementENS_17JSHTMLMenuElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLLinkElementENS_17JSHTMLLinkElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLHtmlElementENS_17JSHTMLHtmlElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLHeadElementENS_17JSHTMLHeadElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLFormElementENS_17JSHTMLFormElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLFontElementENS_17JSHTMLFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLBodyElementENS_17JSHTMLBodyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLBaseElementENS_17JSHTMLBaseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15HTMLAreaElementENS_17JSHTMLAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_14HTMLPreElementENS_16JSHTMLPreElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_14HTMLModElementENS_16JSHTMLModElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_14HTMLMapElementENS_16JSHTMLMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_14HTMLDivElementENS_16JSHTMLDivElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_13HTMLLIElementENS_15JSHTMLLIElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_13HTMLHRElementENS_15JSHTMLHRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_13HTMLBRElementENS_15JSHTMLBRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_11HTMLElementENS_13JSHTMLElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 1072 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 1064 >> 2] = i11;
  HEAP32[H_BASE + 1072 >> 2] = 1;
  HEAP32[H_BASE + 1076 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 1064 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15getDOMStructureINS_25JSHTMLTableSectionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore25JSHTMLTableSectionElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore25JSHTMLTableSectionElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore25JSHTMLTableSectionElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore25JSHTMLTableSectionElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_25JSHTMLTableCaptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore25JSHTMLTableCaptionElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore25JSHTMLTableCaptionElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore25JSHTMLTableCaptionElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore25JSHTMLTableCaptionElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_22JSHTMLTableCellElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore22JSHTMLTableCellElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore22JSHTMLTableCellElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore22JSHTMLTableCellElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore22JSHTMLTableCellElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_22JSHTMLParagraphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore22JSHTMLParagraphElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore22JSHTMLParagraphElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore22JSHTMLParagraphElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore22JSHTMLParagraphElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_22JSHTMLDirectoryElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore22JSHTMLDirectoryElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore22JSHTMLDirectoryElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore22JSHTMLDirectoryElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore22JSHTMLDirectoryElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLTextAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLTextAreaElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLTextAreaElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLTextAreaElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLTextAreaElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLTemplateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLTemplateElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLTemplateElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLTemplateElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLTemplateElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLTableRowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLTableRowElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLTableRowElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLTableRowElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLTableRowElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLTableColElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLTableColElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLTableColElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLTableColElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLTableColElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLProgressElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLProgressElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLProgressElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLProgressElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLProgressElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLOptGroupElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLOptGroupElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLOptGroupElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLOptGroupElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLOptGroupElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLFrameSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLFrameSetElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLFrameSetElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 4;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLFrameSetElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLFrameSetElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLFieldSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLFieldSetElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLFieldSetElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLFieldSetElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLFieldSetElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSHTMLBaseFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSHTMLBaseFontElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSHTMLBaseFontElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSHTMLBaseFontElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSHTMLBaseFontElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSHTMLUnknownElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSHTMLUnknownElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSHTMLUnknownElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSHTMLUnknownElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSHTMLUnknownElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSHTMLMarqueeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSHTMLMarqueeElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSHTMLMarqueeElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSHTMLMarqueeElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSHTMLMarqueeElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSHTMLHeadingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSHTMLHeadingElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSHTMLHeadingElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSHTMLHeadingElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSHTMLHeadingElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSHTMLDetailsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSHTMLDetailsElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSHTMLDetailsElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSHTMLDetailsElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSHTMLDetailsElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLSelectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLSelectElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLSelectElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 1;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLSelectElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLSelectElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLScriptElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLScriptElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLScriptElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLScriptElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLOutputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLOutputElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLOutputElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLOutputElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLOutputElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLOptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLOptionElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLOptionElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLOptionElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLOptionElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLObjectElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLObjectElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLObjectElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLObjectElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLLegendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLLegendElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLLegendElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLLegendElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLLegendElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLKeygenElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLKeygenElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLKeygenElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLKeygenElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLKeygenElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLIFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLIFrameElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLIFrameElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLIFrameElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLIFrameElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLCanvasElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLCanvasElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLCanvasElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLCanvasElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLCanvasElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLButtonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLButtonElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLButtonElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLButtonElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLButtonElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLAppletElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLAppletElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLAppletElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLAppletElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLAppletElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSHTMLAnchorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSHTMLAnchorElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSHTMLAnchorElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSHTMLAnchorElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSHTMLAnchorElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLUListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLUListElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLUListElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLUListElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLUListElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLTitleElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLTitleElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLTitleElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLTitleElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLTableElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLTableElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLTableElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLTableElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLTableElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLStyleElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLStyleElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLStyleElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLStyleElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLQuoteElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLQuoteElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLQuoteElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLQuoteElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLQuoteElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLParamElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLParamElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLParamElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLParamElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLParamElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLOListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLOListElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLOListElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLOListElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLOListElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLMeterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLMeterElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLMeterElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLMeterElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLMeterElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLLabelElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLLabelElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLLabelElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLLabelElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLLabelElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLInputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLInputElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLInputElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLInputElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLInputElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLImageElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLImageElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLImageElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLImageElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLFrameElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLFrameElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLFrameElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLFrameElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLEmbedElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLEmbedElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLEmbedElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLEmbedElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLEmbedElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSHTMLDListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSHTMLDListElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSHTMLDListElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSHTMLDListElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSHTMLDListElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLSpanElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLSpanElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLSpanElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLSpanElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLMetaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLMetaElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLMetaElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLMetaElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLMetaElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLMenuElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLMenuElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLMenuElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLMenuElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLMenuElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLLinkElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLLinkElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLLinkElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLLinkElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLLinkElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLHtmlElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLHtmlElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLHtmlElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLHtmlElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLHtmlElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLHeadElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLHeadElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLHeadElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLHeadElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLHeadElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLFormElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLFormElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLFormElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 5;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLFormElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLFormElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLFontElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLFontElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLFontElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLFontElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLBodyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLBodyElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLBodyElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLBodyElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLBodyElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLBaseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLBaseElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLBaseElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLBaseElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLBaseElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSHTMLAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSHTMLAreaElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSHTMLAreaElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSHTMLAreaElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSHTMLAreaElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSHTMLPreElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSHTMLPreElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSHTMLPreElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSHTMLPreElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSHTMLPreElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSHTMLModElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSHTMLModElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSHTMLModElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSHTMLModElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSHTMLModElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSHTMLMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSHTMLMapElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSHTMLMapElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSHTMLMapElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSHTMLMapElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSHTMLDivElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSHTMLDivElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSHTMLDivElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSHTMLDivElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSHTMLDivElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSHTMLLIElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSHTMLLIElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSHTMLLIElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSHTMLLIElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSHTMLLIElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSHTMLHRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSHTMLHRElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSHTMLHRElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSHTMLHRElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSHTMLHRElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSHTMLBRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSHTMLBRElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSHTMLBRElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSHTMLBRElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSHTMLBRElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_13JSHTMLElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore13JSHTMLElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore13JSHTMLElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore13JSHTMLElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore13JSHTMLElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCoreL36createHTMLTableSectionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_25JSHTMLTableSectionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore25JSHTMLTableSectionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableSectionElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_23HTMLTableSectionElementENS_25JSHTMLTableSectionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL36createHTMLTableCaptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_25JSHTMLTableCaptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore25JSHTMLTableCaptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableCaptionElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_23HTMLTableCaptionElementENS_25JSHTMLTableCaptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL33createHTMLTableCellElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_22JSHTMLTableCellElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore22JSHTMLTableCellElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLTableCellElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_20HTMLTableCellElementENS_22JSHTMLTableCellElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL33createHTMLParagraphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_22JSHTMLParagraphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore22JSHTMLParagraphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLParagraphElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_20HTMLParagraphElementENS_22JSHTMLParagraphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL33createHTMLDirectoryElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_22JSHTMLDirectoryElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore22JSHTMLDirectoryElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLDirectoryElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_20HTMLDirectoryElementENS_22JSHTMLDirectoryElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSHTMLTableSectionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableSectionElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore25JSHTMLTableSectionElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableSectionElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore25JSHTMLTableSectionElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSHTMLTableCaptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableCaptionElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore25JSHTMLTableCaptionElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableCaptionElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore25JSHTMLTableCaptionElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLTextAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLTextAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLTextAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTextAreaElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLTextAreaElementENS_21JSHTMLTextAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLTemplateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLTemplateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLTemplateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTemplateElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLTemplateElementENS_21JSHTMLTemplateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLTableRowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLTableRowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLTableRowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableRowElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLTableRowElementENS_21JSHTMLTableRowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLTableColElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLTableColElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLTableColElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableColElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLTableColElementENS_21JSHTMLTableColElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLProgressElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLProgressElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLProgressElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLProgressElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLProgressElementENS_21JSHTMLProgressElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLOptGroupElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLOptGroupElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLOptGroupElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLOptGroupElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLOptGroupElementENS_21JSHTMLOptGroupElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLFrameSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLFrameSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLFrameSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFrameSetElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLFrameSetElementENS_21JSHTMLFrameSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLFieldSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLFieldSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLFieldSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFieldSetElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLFieldSetElementENS_21JSHTMLFieldSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL32createHTMLBaseFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_21JSHTMLBaseFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore21JSHTMLBaseFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLBaseFontElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_19HTMLBaseFontElementENS_21JSHTMLBaseFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createHTMLUnknownElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_20JSHTMLUnknownElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSHTMLUnknownElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLUnknownElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_18HTMLUnknownElementENS_20JSHTMLUnknownElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createHTMLMarqueeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_20JSHTMLMarqueeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSHTMLMarqueeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLMarqueeElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_18HTMLMarqueeElementENS_20JSHTMLMarqueeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createHTMLHeadingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_20JSHTMLHeadingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSHTMLHeadingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLHeadingElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_18HTMLHeadingElementENS_20JSHTMLHeadingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createHTMLDetailsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_20JSHTMLDetailsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSHTMLDetailsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLDetailsElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_18HTMLDetailsElementENS_20JSHTMLDetailsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore22JSHTMLTableCellElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLTableCellElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore22JSHTMLTableCellElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLTableCellElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore22JSHTMLTableCellElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore22JSHTMLParagraphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLParagraphElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore22JSHTMLParagraphElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLParagraphElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore22JSHTMLParagraphElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore22JSHTMLDirectoryElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLDirectoryElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore22JSHTMLDirectoryElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLDirectoryElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore22JSHTMLDirectoryElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLSelectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLSelectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLSelectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLSelectElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLSelectElementENS_19JSHTMLSelectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLScriptElementENS_19JSHTMLScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLOptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLOptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLOptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOptionElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLOptionElementENS_19JSHTMLOptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLObjectElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLObjectElementENS_19JSHTMLObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLLegendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLLegendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLLegendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLLegendElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLLegendElementENS_19JSHTMLLegendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLKeygenElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLKeygenElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLKeygenElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLKeygenElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLKeygenElementENS_19JSHTMLKeygenElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLIFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLIFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLIFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLIFrameElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLIFrameElementENS_19JSHTMLIFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLCanvasElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLCanvasElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLCanvasElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLCanvasElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLCanvasElementENS_19JSHTMLCanvasElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLButtonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLButtonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLButtonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLButtonElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLButtonElementENS_19JSHTMLButtonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLAppletElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLAppletElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLAppletElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAppletElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLAppletElementENS_19JSHTMLAppletElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLAnchorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLAnchorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLAnchorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAnchorElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLAnchorElementENS_19JSHTMLAnchorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLTextAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTextAreaElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLTextAreaElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTextAreaElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLTextAreaElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLTemplateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTemplateElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLTemplateElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTemplateElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLTemplateElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLTableRowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableRowElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLTableRowElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableRowElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLTableRowElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLTableColElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableColElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLTableColElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableColElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLTableColElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLProgressElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLProgressElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLProgressElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLProgressElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLProgressElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLOptGroupElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLOptGroupElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLOptGroupElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLOptGroupElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLOptGroupElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLFrameSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFrameSetElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLFrameSetElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFrameSetElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLFrameSetElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLFieldSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFieldSetElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLFieldSetElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFieldSetElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLFieldSetElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSHTMLBaseFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLBaseFontElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSHTMLBaseFontElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLBaseFontElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore21JSHTMLBaseFontElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLUListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLUListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLUListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLUListElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLUListElementENS_18JSHTMLUListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTitleElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLTitleElementENS_18JSHTMLTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLTableElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLTableElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLTableElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTableElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLTableElementENS_18JSHTMLTableElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLStyleElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLStyleElementENS_18JSHTMLStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLQuoteElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLQuoteElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLQuoteElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLQuoteElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLQuoteElementENS_18JSHTMLQuoteElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLParamElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLParamElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLParamElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLParamElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLParamElementENS_18JSHTMLParamElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLOListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLOListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLOListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLOListElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLOListElementENS_18JSHTMLOListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLMeterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLMeterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLMeterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLMeterElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLMeterElementENS_18JSHTMLMeterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLLabelElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLLabelElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLLabelElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLLabelElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLLabelElementENS_18JSHTMLLabelElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLInputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLInputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLInputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLInputElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLInputElementENS_18JSHTMLInputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLImageElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLImageElementENS_18JSHTMLImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLEmbedElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLEmbedElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLEmbedElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLEmbedElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLEmbedElementENS_18JSHTMLEmbedElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLDListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLDListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLDListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLDListElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLDListElementENS_18JSHTMLDListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSHTMLUnknownElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLUnknownElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore20JSHTMLUnknownElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLUnknownElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20JSHTMLUnknownElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSHTMLMarqueeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLMarqueeElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore20JSHTMLMarqueeElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLMarqueeElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20JSHTMLMarqueeElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSHTMLHeadingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLHeadingElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore20JSHTMLHeadingElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLHeadingElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20JSHTMLHeadingElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSHTMLDetailsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLDetailsElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore20JSHTMLDetailsElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLDetailsElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20JSHTMLDetailsElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLSpanElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLSpanElementENS_17JSHTMLSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLMetaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLMetaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLMetaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMetaElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLMetaElementENS_17JSHTMLMetaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLMenuElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLMenuElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLMenuElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMenuElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLMenuElementENS_17JSHTMLMenuElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLLinkElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLLinkElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLLinkElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLLinkElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLLinkElementENS_17JSHTMLLinkElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLHtmlElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLHtmlElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLHtmlElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHtmlElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLHtmlElementENS_17JSHTMLHtmlElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLHeadElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLHeadElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLHeadElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHeadElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLHeadElementENS_17JSHTMLHeadElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLFormElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLFormElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLFormElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFormElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLFormElementENS_17JSHTMLFormElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFontElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLFontElementENS_17JSHTMLFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLBodyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLBodyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLBodyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBodyElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLBodyElementENS_17JSHTMLBodyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLBaseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLBaseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLBaseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBaseElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLBaseElementENS_17JSHTMLBaseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createHTMLAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_17JSHTMLAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSHTMLAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLAreaElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_15HTMLAreaElementENS_17JSHTMLAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLSelectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLSelectElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLSelectElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLSelectElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLSelectElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLScriptElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLScriptElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLOptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOptionElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLOptionElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOptionElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLOptionElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLObjectElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLObjectElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLObjectElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLObjectElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLLegendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLLegendElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLLegendElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLLegendElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLLegendElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLKeygenElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLKeygenElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLKeygenElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLKeygenElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLKeygenElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLIFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLIFrameElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLIFrameElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLIFrameElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLIFrameElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLCanvasElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLCanvasElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLCanvasElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLCanvasElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLCanvasElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLButtonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLButtonElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLButtonElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLButtonElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLButtonElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLAppletElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAppletElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLAppletElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAppletElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLAppletElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLAnchorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAnchorElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLAnchorElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAnchorElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19JSHTMLAnchorElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createHTMLPreElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_16JSHTMLPreElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSHTMLPreElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLPreElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_14HTMLPreElementENS_16JSHTMLPreElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createHTMLModElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_16JSHTMLModElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSHTMLModElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLModElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_14HTMLModElementENS_16JSHTMLModElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createHTMLMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_16JSHTMLMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSHTMLMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLMapElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_14HTMLMapElementENS_16JSHTMLMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createHTMLDivElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_16JSHTMLDivElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSHTMLDivElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLDivElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_14HTMLDivElementENS_16JSHTMLDivElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLUListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLUListElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLUListElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLUListElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLUListElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTitleElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLTitleElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTitleElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLTitleElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLTableElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTableElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLTableElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTableElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLTableElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLStyleElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLStyleElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLStyleElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLStyleElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLQuoteElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLQuoteElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLQuoteElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLQuoteElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLQuoteElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLParamElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLParamElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLParamElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLParamElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLParamElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLOListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLOListElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLOListElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLOListElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLOListElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLMeterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLMeterElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLMeterElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLMeterElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLMeterElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLLabelElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLLabelElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLLabelElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLLabelElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLLabelElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLInputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLInputElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLInputElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLInputElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLInputElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLImageElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLImageElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLImageElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLImageElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLEmbedElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLEmbedElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLEmbedElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLEmbedElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLEmbedElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLDListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLDListElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLDListElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLDListElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSHTMLDListElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createHTMLOutputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_19JSHTMLOutputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSHTMLOutputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOutputElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_17HTMLOutputElementENS_19JSHTMLOutputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLSpanElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLSpanElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLSpanElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLSpanElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLMetaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMetaElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLMetaElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMetaElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLMetaElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLMenuElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMenuElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLMenuElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMenuElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLMenuElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLLinkElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLLinkElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLLinkElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLLinkElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLLinkElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLHtmlElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHtmlElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLHtmlElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHtmlElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLHtmlElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLHeadElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHeadElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLHeadElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHeadElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLHeadElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLFormElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFormElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLFormElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFormElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLFormElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFontElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLFontElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFontElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLFontElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLBodyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBodyElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLBodyElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBodyElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLBodyElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLBaseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBaseElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLBaseElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBaseElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLBaseElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSHTMLAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLAreaElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSHTMLAreaElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLAreaElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSHTMLAreaElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createHTMLLIElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_15JSHTMLLIElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSHTMLLIElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLLIElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_13HTMLLIElementENS_15JSHTMLLIElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createHTMLHRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_15JSHTMLHRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSHTMLHRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLHRElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_13HTMLHRElementENS_15JSHTMLHRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createHTMLBRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_15JSHTMLBRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSHTMLBRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLBRElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_13HTMLBRElementENS_15JSHTMLBRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSHTMLPreElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLPreElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore16JSHTMLPreElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLPreElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16JSHTMLPreElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSHTMLModElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLModElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore16JSHTMLModElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLModElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16JSHTMLModElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSHTMLMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLMapElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore16JSHTMLMapElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLMapElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16JSHTMLMapElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSHTMLDivElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLDivElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore16JSHTMLDivElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLDivElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16JSHTMLDivElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createHTMLFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6;
 i7 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_18JSHTMLFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSHTMLFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLFrameElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_16HTMLFrameElementENS_18JSHTMLFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSHTMLLIElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLLIElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore15JSHTMLLIElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLLIElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15JSHTMLLIElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSHTMLHRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLHRElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore15JSHTMLHRElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLHRElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15JSHTMLHRElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSHTMLBRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLBRElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore15JSHTMLBRElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLBRElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15JSHTMLBRElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSHTMLOutputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOutputElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore19JSHTMLOutputElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOutputElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 __ZN7WebCore19JSHTMLOutputElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSHTMLFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLFrameElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSHTMLFrameElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLFrameElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 __ZN7WebCore18JSHTMLFrameElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore13JSHTMLElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore13JSHTMLElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13JSHTMLElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL24createHTMLElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_13JSHTMLElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i3 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN7WebCore13JSHTMLElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i5) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i2 = i7 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12cacheWrapperINS_11HTMLElementENS_13JSHTMLElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i6, i8);
 STACKTOP = i4;
 return i8 | 0;
}
function __ZN7WebCoreL22populateHTMLWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_11HTMLElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i1 = 0;
 while (1) {
  HEAP32[i3 >> 2] = HEAP32[(HEAP32[HEAP32[H_BASE + 8 + (i1 << 3) >> 2] >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_(i4, i5, i3, H_BASE + 8 + (i1 << 3) + 4 | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 128 >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 127](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCoreL27createHTMLMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLMeterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL27createHTMLDivElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLFieldSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLProgressElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL31createHTMLDetailsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLOptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLKeygenElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLFrameSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLTableRowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLAppletElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE
  ,b0,__ZN7WebCoreL29createHTMLInputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL33createHTMLParagraphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLDListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLEmbedElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL31createHTMLMarqueeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL31createHTMLUnknownElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLQuoteElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLCanvasElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLBodyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLBaseFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLLinkElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE
  ,b0,__ZN7WebCoreL30createHTMLAnchorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLButtonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLParamElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLTableColElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLLegendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL36createHTMLTableSectionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL26createHTMLHRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL26createHTMLBRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLUListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLOutputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL31createHTMLHeadingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL27createHTMLPreElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLHtmlElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL33createHTMLDirectoryElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLHeadElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE
  ,b0,__ZN7WebCoreL27createHTMLModElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL26createHTMLLIElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLMetaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLIFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL24createHTMLElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL36createHTMLTableCaptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLFormElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLOptGroupElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLLabelElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL33createHTMLTableCellElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLMenuElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL28createHTMLBaseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLTextAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL30createHTMLSelectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLOListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE
  ,b0,__ZN7WebCoreL28createHTMLFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLTableElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL29createHTMLTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0,__ZN7WebCoreL32createHTMLTemplateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames6bdoTagE": __ZN7WebCore9HTMLNames6bdoTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames9footerTagE": __ZN7WebCore9HTMLNames9footerTagE, "__ZN7WebCore22JSHTMLTableCellElement6s_infoE": __ZN7WebCore22JSHTMLTableCellElement6s_infoE, "__ZN7WebCore19JSHTMLAppletElement6s_infoE": __ZN7WebCore19JSHTMLAppletElement6s_infoE, "__ZN7WebCore17JSHTMLMenuElement6s_infoE": __ZN7WebCore17JSHTMLMenuElement6s_infoE, "__ZN7WebCore19JSHTMLAnchorElement6s_infoE": __ZN7WebCore19JSHTMLAnchorElement6s_infoE, "__ZN7WebCore18JSHTMLEmbedElement6s_infoE": __ZN7WebCore18JSHTMLEmbedElement6s_infoE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore22JSHTMLDirectoryElement6s_infoE": __ZN7WebCore22JSHTMLDirectoryElement6s_infoE, "__ZN7WebCore9HTMLNames10sectionTagE": __ZN7WebCore9HTMLNames10sectionTagE, "__ZN7WebCore17JSHTMLFormElement6s_infoE": __ZN7WebCore17JSHTMLFormElement6s_infoE, "__ZN7WebCore18JSHTMLImageElement6s_infoE": __ZN7WebCore18JSHTMLImageElement6s_infoE, "__ZN7WebCore19JSHTMLCanvasElement6s_infoE": __ZN7WebCore19JSHTMLCanvasElement6s_infoE, "__ZN7WebCore21JSHTMLOptGroupElement6s_infoE": __ZN7WebCore21JSHTMLOptGroupElement6s_infoE, "__ZN7WebCore9HTMLNames10addressTagE": __ZN7WebCore9HTMLNames10addressTagE, "__ZN7WebCore15JSHTMLHRElement6s_infoE": __ZN7WebCore15JSHTMLHRElement6s_infoE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames10summaryTagE": __ZN7WebCore9HTMLNames10summaryTagE, "__ZN7WebCore15JSHTMLLIElement6s_infoE": __ZN7WebCore15JSHTMLLIElement6s_infoE, "__ZN7WebCore9HTMLNames4sTagE": __ZN7WebCore9HTMLNames4sTagE, "__ZN7WebCore9HTMLNames7nobrTagE": __ZN7WebCore9HTMLNames7nobrTagE, "__ZN7WebCore17JSHTMLFontElement6s_infoE": __ZN7WebCore17JSHTMLFontElement6s_infoE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore21JSHTMLTableRowElement6s_infoE": __ZN7WebCore21JSHTMLTableRowElement6s_infoE, "__ZN7WebCore9HTMLNames9headerTagE": __ZN7WebCore9HTMLNames9headerTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore16JSHTMLPreElement6s_infoE": __ZN7WebCore16JSHTMLPreElement6s_infoE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames10isindexTagE": __ZN7WebCore9HTMLNames10isindexTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames7menuTagE": __ZN7WebCore9HTMLNames7menuTagE, "__ZN7WebCore21JSHTMLTableColElement6s_infoE": __ZN7WebCore21JSHTMLTableColElement6s_infoE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE, "__ZN7WebCore9HTMLNames6bdiTagE": __ZN7WebCore9HTMLNames6bdiTagE, "__ZN7WebCore17JSHTMLSpanElement6s_infoE": __ZN7WebCore17JSHTMLSpanElement6s_infoE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames7fontTagE": __ZN7WebCore9HTMLNames7fontTagE, "__ZN7WebCore9HTMLNames10detailsTagE": __ZN7WebCore9HTMLNames10detailsTagE, "__ZN7WebCore18JSHTMLTitleElement6s_infoE": __ZN7WebCore18JSHTMLTitleElement6s_infoE, "__ZN7WebCore9HTMLNames4bTagE": __ZN7WebCore9HTMLNames4bTagE, "__ZN7WebCore18JSHTMLInputElement6s_infoE": __ZN7WebCore18JSHTMLInputElement6s_infoE, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames7rubyTagE": __ZN7WebCore9HTMLNames7rubyTagE, "__ZN7WebCore9HTMLNames8imageTagE": __ZN7WebCore9HTMLNames8imageTagE, "__ZN7WebCore9HTMLNames11fieldsetTagE": __ZN7WebCore9HTMLNames11fieldsetTagE, "__ZN7WebCore9HTMLNames7abbrTagE": __ZN7WebCore9HTMLNames7abbrTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore17JSHTMLBodyElement6s_infoE": __ZN7WebCore17JSHTMLBodyElement6s_infoE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames7codeTagE": __ZN7WebCore9HTMLNames7codeTagE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames6varTagE": __ZN7WebCore9HTMLNames6varTagE, "__ZN7WebCore9HTMLNames6mapTagE": __ZN7WebCore9HTMLNames6mapTagE, "__ZN7WebCore16JSHTMLDivElement6s_infoE": __ZN7WebCore16JSHTMLDivElement6s_infoE, "__ZN7WebCore19JSHTMLOptionElement6s_infoE": __ZN7WebCore19JSHTMLOptionElement6s_infoE, "__ZN7WebCore18JSHTMLTableElement6s_infoE": __ZN7WebCore18JSHTMLTableElement6s_infoE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE, "__ZN7WebCore16JSHTMLModElement6s_infoE": __ZN7WebCore16JSHTMLModElement6s_infoE, "__ZN7WebCore9HTMLNames10captionTagE": __ZN7WebCore9HTMLNames10captionTagE, "__ZN7WebCore13JSHTMLElement6s_infoE": __ZN7WebCore13JSHTMLElement6s_infoE, "__ZN7WebCore9HTMLNames9strongTagE": __ZN7WebCore9HTMLNames9strongTagE, "__ZN7WebCore9HTMLNames8asideTagE": __ZN7WebCore9HTMLNames8asideTagE, "__ZN7WebCore9HTMLNames7markTagE": __ZN7WebCore9HTMLNames7markTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames9keygenTagE": __ZN7WebCore9HTMLNames9keygenTagE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore9HTMLNames6wbrTagE": __ZN7WebCore9HTMLNames6wbrTagE, "__ZN7WebCore9HTMLNames9strikeTagE": __ZN7WebCore9HTMLNames9strikeTagE, "__ZN7WebCore9HTMLNames8smallTagE": __ZN7WebCore9HTMLNames8smallTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames10marqueeTagE": __ZN7WebCore9HTMLNames10marqueeTagE, "__ZN7WebCore22JSHTMLParagraphElement6s_infoE": __ZN7WebCore22JSHTMLParagraphElement6s_infoE, "__ZN7WebCore17JSHTMLAreaElement6s_infoE": __ZN7WebCore17JSHTMLAreaElement6s_infoE, "__ZN7WebCore9HTMLNames4uTagE": __ZN7WebCore9HTMLNames4uTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames10bgsoundTagE": __ZN7WebCore9HTMLNames10bgsoundTagE, "__ZN7WebCore9HTMLNames7sampTagE": __ZN7WebCore9HTMLNames7sampTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames4iTagE": __ZN7WebCore9HTMLNames4iTagE, "__ZN7WebCore19JSHTMLSelectElement6s_infoE": __ZN7WebCore19JSHTMLSelectElement6s_infoE, "__ZN7WebCore9HTMLNames9centerTagE": __ZN7WebCore9HTMLNames9centerTagE, "__ZN7WebCore9HTMLNames22webkitShadowContentTagE": __ZN7WebCore9HTMLNames22webkitShadowContentTagE, "__ZN7WebCore9HTMLNames9outputTagE": __ZN7WebCore9HTMLNames9outputTagE, "__ZN7WebCore9HTMLNames6navTagE": __ZN7WebCore9HTMLNames6navTagE, "__ZN7WebCore9HTMLNames5emTagE": __ZN7WebCore9HTMLNames5emTagE, "__ZN7WebCore17JSHTMLBaseElement6s_infoE": __ZN7WebCore17JSHTMLBaseElement6s_infoE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore16JSHTMLMapElement6s_infoE": __ZN7WebCore16JSHTMLMapElement6s_infoE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore18JSHTMLQuoteElement6s_infoE": __ZN7WebCore18JSHTMLQuoteElement6s_infoE, "__ZN7WebCore9HTMLNames6insTagE": __ZN7WebCore9HTMLNames6insTagE, "__ZN7WebCore18JSHTMLDListElement6s_infoE": __ZN7WebCore18JSHTMLDListElement6s_infoE, "__ZN7WebCore18JSHTMLOListElement6s_infoE": __ZN7WebCore18JSHTMLOListElement6s_infoE, "__ZN7WebCore19JSHTMLOutputElement6s_infoE": __ZN7WebCore19JSHTMLOutputElement6s_infoE, "__ZN7WebCore21JSHTMLTextAreaElement6s_infoE": __ZN7WebCore21JSHTMLTextAreaElement6s_infoE, "__ZN7WebCore9HTMLNames8layerTagE": __ZN7WebCore9HTMLNames8layerTagE, "__ZN7WebCore9HTMLNames6dirTagE": __ZN7WebCore9HTMLNames6dirTagE, "__ZN7WebCore9HTMLNames8meterTagE": __ZN7WebCore9HTMLNames8meterTagE, "__ZN7WebCore9HTMLNames6kbdTagE": __ZN7WebCore9HTMLNames6kbdTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN7WebCore9HTMLNames6supTagE": __ZN7WebCore9HTMLNames6supTagE, "__ZN7WebCore21JSHTMLFieldSetElement6s_infoE": __ZN7WebCore21JSHTMLFieldSetElement6s_infoE, "__ZN7WebCore18JSHTMLUListElement6s_infoE": __ZN7WebCore18JSHTMLUListElement6s_infoE, "__ZN7WebCore18JSHTMLParamElement6s_infoE": __ZN7WebCore18JSHTMLParamElement6s_infoE, "__ZN7WebCore9HTMLNames6subTagE": __ZN7WebCore9HTMLNames6subTagE, "__ZN7WebCore9HTMLNames6bigTagE": __ZN7WebCore9HTMLNames6bigTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore19JSHTMLIFrameElement6s_infoE": __ZN7WebCore19JSHTMLIFrameElement6s_infoE, "__ZN7WebCore21JSHTMLProgressElement6s_infoE": __ZN7WebCore21JSHTMLProgressElement6s_infoE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore18JSHTMLLabelElement6s_infoE": __ZN7WebCore18JSHTMLLabelElement6s_infoE, "__ZN7WebCore19JSHTMLKeygenElement6s_infoE": __ZN7WebCore19JSHTMLKeygenElement6s_infoE, "__ZN7WebCore18JSHTMLFrameElement6s_infoE": __ZN7WebCore18JSHTMLFrameElement6s_infoE, "__ZN7WebCore9HTMLNames10articleTagE": __ZN7WebCore9HTMLNames10articleTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames10acronymTagE": __ZN7WebCore9HTMLNames10acronymTagE, "__ZN7WebCore17JSHTMLMetaElement6s_infoE": __ZN7WebCore17JSHTMLMetaElement6s_infoE, "__ZN7WebCore17JSHTMLLinkElement6s_infoE": __ZN7WebCore17JSHTMLLinkElement6s_infoE, "__ZN7WebCore17JSHTMLHeadElement6s_infoE": __ZN7WebCore17JSHTMLHeadElement6s_infoE, "__ZN7WebCore9HTMLNames6delTagE": __ZN7WebCore9HTMLNames6delTagE, "__ZN7WebCore18JSHTMLMeterElement6s_infoE": __ZN7WebCore18JSHTMLMeterElement6s_infoE, "__ZTVN7WebCore11JSNodeOwnerE": __ZTVN7WebCore11JSNodeOwnerE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN7WebCore9HTMLNames4qTagE": __ZN7WebCore9HTMLNames4qTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames5ttTagE": __ZN7WebCore9HTMLNames5ttTagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore9HTMLNames10nolayerTagE": __ZN7WebCore9HTMLNames10nolayerTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore19JSHTMLButtonElement6s_infoE": __ZN7WebCore19JSHTMLButtonElement6s_infoE, "__ZN7WebCore19JSHTMLLegendElement6s_infoE": __ZN7WebCore19JSHTMLLegendElement6s_infoE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore21JSHTMLBaseFontElement6s_infoE": __ZN7WebCore21JSHTMLBaseFontElement6s_infoE, "__ZN7WebCore25JSHTMLTableSectionElement6s_infoE": __ZN7WebCore25JSHTMLTableSectionElement6s_infoE, "__ZN7WebCore9HTMLNames11noframesTagE": __ZN7WebCore9HTMLNames11noframesTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore20JSHTMLUnknownElement6s_infoE": __ZN7WebCore20JSHTMLUnknownElement6s_infoE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore20JSHTMLDetailsElement6s_infoE": __ZN7WebCore20JSHTMLDetailsElement6s_infoE, "__ZN7WebCore19JSHTMLScriptElement6s_infoE": __ZN7WebCore19JSHTMLScriptElement6s_infoE, "__ZN7WebCore9HTMLNames7mainTagE": __ZN7WebCore9HTMLNames7mainTagE, "__ZN7WebCore9HTMLNames9figureTagE": __ZN7WebCore9HTMLNames9figureTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames10commandTagE": __ZN7WebCore9HTMLNames10commandTagE, "__ZN7WebCore9HTMLNames11progressTagE": __ZN7WebCore9HTMLNames11progressTagE, "__ZN7WebCore9HTMLNames11basefontTagE": __ZN7WebCore9HTMLNames11basefontTagE, "__ZN7WebCore21JSHTMLFrameSetElement6s_infoE": __ZN7WebCore21JSHTMLFrameSetElement6s_infoE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames9hgroupTagE": __ZN7WebCore9HTMLNames9hgroupTagE, "__ZN7WebCore19JSHTMLObjectElement6s_infoE": __ZN7WebCore19JSHTMLObjectElement6s_infoE, "__ZN7WebCore15JSHTMLBRElement6s_infoE": __ZN7WebCore15JSHTMLBRElement6s_infoE, "__ZN7WebCore18JSHTMLStyleElement6s_infoE": __ZN7WebCore18JSHTMLStyleElement6s_infoE, "__ZN7WebCore9HTMLNames5rtTagE": __ZN7WebCore9HTMLNames5rtTagE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZN7WebCore9HTMLNames8paramTagE": __ZN7WebCore9HTMLNames8paramTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore20JSHTMLMarqueeElement6s_infoE": __ZN7WebCore20JSHTMLMarqueeElement6s_infoE, "__ZN7WebCore9HTMLNames9legendTagE": __ZN7WebCore9HTMLNames9legendTagE, "__ZN7WebCore17JSHTMLHtmlElement6s_infoE": __ZN7WebCore17JSHTMLHtmlElement6s_infoE, "__ZN7WebCore9HTMLNames7citeTagE": __ZN7WebCore9HTMLNames7citeTagE, "__ZN7WebCore9HTMLNames13figcaptionTagE": __ZN7WebCore9HTMLNames13figcaptionTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE, "__ZN7WebCore9HTMLNames8labelTagE": __ZN7WebCore9HTMLNames8labelTagE, "__ZN7WebCore20JSHTMLHeadingElement6s_infoE": __ZN7WebCore20JSHTMLHeadingElement6s_infoE, "__ZN7WebCore9HTMLNames5rpTagE": __ZN7WebCore9HTMLNames5rpTagE, "__ZN7WebCore9HTMLNames6dfnTagE": __ZN7WebCore9HTMLNames6dfnTagE, "__ZN7WebCore21JSHTMLTemplateElement6s_infoE": __ZN7WebCore21JSHTMLTemplateElement6s_infoE, "__ZN7WebCore25JSHTMLTableCaptionElement6s_infoE": __ZN7WebCore25JSHTMLTableCaptionElement6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18JSHTMLStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLStyleElementEEE","__ZN7WebCore20JSHTMLHeadingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLHeadingElementEEE","__ZN7WebCore20JSHTMLDetailsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLDetailsElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLInputElementENS_18JSHTMLInputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_15HTMLHtmlElementENS_17JSHTMLHtmlElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL27createHTMLDivElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","_strlen","__ZN7WebCoreL32createHTMLProgressElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL30createHTMLOptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_21JSHTMLTableColElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore17JSHTMLHeadElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHeadElementEEE","__ZN7WebCore18JSHTMLInputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLInputElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLEmbedElementENS_18JSHTMLEmbedElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_17HTMLLegendElementENS_19JSHTMLLegendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_15JSHTMLLIElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLEmbedElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore18JSHTMLDListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLDListElementEEE","__ZN7WebCore15JSHTMLBRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLBRElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLAppletElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_20JSHTMLMarqueeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore17JSHTMLLinkElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLLinkElementEEE","__ZN7WebCore12cacheWrapperINS_19HTMLOptGroupElementENS_21JSHTMLOptGroupElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSHTMLLegendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLLegendElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLTableElementENS_18JSHTMLTableElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_19HTMLTableColElementENS_21JSHTMLTableColElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL30createHTMLObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","_memcpy","__ZN7WebCore17JSHTMLMenuElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMenuElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLEmbedElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_17JSHTMLMenuElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore21JSHTMLTableRowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableRowElementEEE","__ZN7WebCoreL36createHTMLTableSectionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_17HTMLCanvasElementENS_19JSHTMLCanvasElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSHTMLButtonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLButtonElementEEE","__ZN7WebCoreL26createHTMLHRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_17HTMLOutputElementENS_19JSHTMLOutputElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_20HTMLTableCellElementENS_22JSHTMLTableCellElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore18JSHTMLQuoteElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLQuoteElementEEE","__ZN7WebCoreL28createHTMLBaseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_18HTMLHeadingElementENS_20JSHTMLHeadingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLLabelElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_15HTMLMetaElementENS_17JSHTMLMetaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSHTMLObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLObjectElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSHTMLSelectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore13JSHTMLElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL22populateHTMLWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_11HTMLElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLLinkElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15JSHTMLHRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLHRElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLOutputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSHTMLUListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLUListElementEEE","__ZN7WebCore17JSHTMLFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFontElementEEE","__ZN7WebCoreL33createHTMLTableCellElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore22JSHTMLTableCellElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLTableCellElementEEE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore12cacheWrapperINS_19HTMLTemplateElementENS_21JSHTMLTemplateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_","__ZN7WebCoreL28createHTMLAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL30createHTMLSelectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_23HTMLTableCaptionElementENS_25JSHTMLTableCaptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore18JSHTMLEmbedElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLEmbedElementEEE","__ZN7WebCore12cacheWrapperINS_13HTMLHRElementENS_15JSHTMLHRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createHTMLTableElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL29createHTMLTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLBaseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSHTMLMeterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLMeterElementEEE","__ZN7WebCore15getDOMStructureINS_20JSHTMLHeadingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_15HTMLAreaElementENS_17JSHTMLAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSHTMLPreElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLPreElementEEE","__ZN7WebCoreL32createHTMLFieldSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL31createHTMLDetailsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLKeygenElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_15HTMLLinkElementENS_17JSHTMLLinkElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_19JSHTMLAnchorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_18HTMLMarqueeElementENS_20JSHTMLMarqueeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore21JSHTMLTextAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTextAreaElementEEE","__ZN7WebCore19JSHTMLOptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOptionElementEEE","__ZN7WebCore15getDOMStructureINS_16JSHTMLPreElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_13HTMLLIElementENS_15JSHTMLLIElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_14HTMLDivElementENS_16JSHTMLDivElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createHTMLQuoteElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLOptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSHTMLOListElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLOListElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLDListElementENS_18JSHTMLDListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSHTMLSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLSpanElementEEE","__ZN7WebCore15getDOMStructureINS_15JSHTMLBRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_14HTMLMapElementENS_16JSHTMLMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLInputElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore21JSHTMLTemplateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTemplateElementEEE","__ZN7WebCoreL28createHTMLSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_25JSHTMLTableCaptionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL28createHTMLBodyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_22JSHTMLParagraphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_15HTMLSpanElementENS_17JSHTMLSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSHTMLFormElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLFormElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLTableElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL28createHTMLMenuElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore19JSHTMLKeygenElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLKeygenElementEEE","__ZN7WebCore16JSHTMLDivElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLDivElementEEE","__ZN7WebCoreL29createHTMLParamElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore19JSHTMLScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16HTMLQuoteElementENS_18JSHTMLQuoteElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_11HTMLElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_","__ZN7WebCore15getDOMStructureINS_21JSHTMLTemplateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL26createHTMLBRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLKeygenElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_19HTMLTableRowElementENS_21JSHTMLTableRowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSHTMLAnchorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAnchorElementEEE","__ZN7WebCore15getDOMStructureINS_20JSHTMLDetailsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL27createHTMLPreElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL28createHTMLHtmlElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_19HTMLFieldSetElementENS_21JSHTMLFieldSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createHTMLMetaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLHeadElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16HTMLFrameElementENS_18JSHTMLFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSHTMLObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore17JSHTMLAreaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLAreaElementEEE","__ZN7WebCore18JSHTMLImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLImageElementEEE","__ZN7WebCoreL36createHTMLTableCaptionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLIFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16HTMLTitleElementENS_18JSHTMLTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_25JSHTMLTableSectionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLInputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_22JSHTMLTableCellElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_17HTMLAnchorElementENS_19JSHTMLAnchorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLMeterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore19JSHTMLCanvasElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLCanvasElementEEE","__ZN7WebCoreL29createHTMLMeterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_13HTMLBRElementENS_15JSHTMLBRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore25JSHTMLTableSectionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableSectionElementEEE","__ZN7WebCore12cacheWrapperINS_18HTMLUnknownElementENS_20JSHTMLUnknownElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_17HTMLSelectElementENS_19JSHTMLSelectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_19JSHTMLLegendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_19HTMLFrameSetElementENS_21JSHTMLFrameSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL32createHTMLFrameSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLParamElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_21JSHTMLBaseFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL33createHTMLParagraphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore22JSHTMLDirectoryElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLDirectoryElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL31createHTMLMarqueeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLUListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_13JSHTMLElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL31createHTMLUnknownElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_16JSHTMLMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore22JSHTMLParagraphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_20HTMLParagraphElementEEE","__ZN7WebCore12cacheWrapperINS_23HTMLTableSectionElementENS_25JSHTMLTableSectionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_16HTMLLabelElementENS_18JSHTMLLabelElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_17JSHTMLAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore16JSHTMLModElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLModElementEEE","__ZN7WebCore12cacheWrapperINS_17HTMLButtonElementENS_19JSHTMLButtonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_17HTMLIFrameElementENS_19JSHTMLIFrameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createHTMLLinkElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore18JSHTMLFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLFrameElementEEE","__ZN7WebCoreL30createHTMLButtonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore19JSHTMLOutputElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLOutputElementEEE","__ZN7WebCore21JSHTMLProgressElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLProgressElementEEE","__ZN7WebCore15getDOMStructureINS_21JSHTMLTableRowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLLegendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore18JSHTMLTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTitleElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLUListElementENS_18JSHTMLUListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore21JSHTMLTableColElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLTableColElementEEE","__ZN7WebCoreL30createHTMLOutputElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore17JSHTMLBaseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBaseElementEEE","__ZN7WebCoreL31createHTMLHeadingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_21JSHTMLFieldSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore21JSHTMLFrameSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFrameSetElementEEE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore17JSHTMLBodyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLBodyElementEEE","__ZN7WebCore25JSHTMLTableCaptionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23HTMLTableCaptionElementEEE","__ZN7WebCore19createJSHTMLWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_18HTMLDetailsElementENS_20JSHTMLDetailsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_20JSHTMLUnknownElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLIFrameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL24createHTMLElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLMeterElementENS_18JSHTMLMeterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL32createHTMLOptGroupElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLImageElementENS_18JSHTMLImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_21JSHTMLFrameSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore17JSHTMLMetaElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLMetaElementEEE","__ZN7WebCoreL32createHTMLTextAreaElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore19JSHTMLSelectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLSelectElementEEE","__ZN7WebCore12cacheWrapperINS_19HTMLBaseFontElementENS_21JSHTMLBaseFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_15HTMLFormElementENS_17JSHTMLFormElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_17HTMLOptionElementENS_19JSHTMLOptionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_11HTMLElementENS_13JSHTMLElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_14HTMLModElementENS_16JSHTMLModElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSHTMLHtmlElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15HTMLHtmlElementEEE","__ZN7WebCoreL27createHTMLModElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore21JSHTMLFieldSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLFieldSetElementEEE","__ZN7WebCore15getDOMStructureINS_21JSHTMLOptGroupElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL27createHTMLMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_22JSHTMLDirectoryElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLLabelElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore16JSHTMLMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14HTMLMapElementEEE","__ZN7WebCore12cacheWrapperINS_16HTMLStyleElementENS_18JSHTMLStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLDListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL32createHTMLTableColElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_15HTMLHeadElementENS_17JSHTMLHeadElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSHTMLAppletElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLAppletElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLMetaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSHTMLCanvasElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_18JSHTMLFrameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_21JSHTMLProgressElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL33createHTMLDirectoryElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL30createHTMLAppletElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL32createHTMLTableRowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore18JSHTMLTableElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLTableElementEEE","__ZN7WebCore12cacheWrapperINS_15HTMLBodyElementENS_17JSHTMLBodyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createHTMLDListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_19HTMLProgressElementENS_21JSHTMLProgressElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_16HTMLOListElementENS_18JSHTMLOListElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_15HTMLFontElementENS_17JSHTMLFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore20JSHTMLMarqueeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLMarqueeElementEEE","__ZN7WebCore21JSHTMLOptGroupElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLOptGroupElementEEE","__ZN7WebCore15JSHTMLLIElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13HTMLLIElementEEE","__ZN7WebCore15getDOMStructureINS_21JSHTMLTextAreaElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLCanvasElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_20HTMLParagraphElementENS_22JSHTMLParagraphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSHTMLModElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL32createHTMLBaseFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLBodyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createHTMLAnchorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_19JSHTMLButtonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16HTMLParamElementENS_18JSHTMLParamElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_19HTMLTextAreaElementENS_21JSHTMLTextAreaElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_15HTMLMenuElementENS_17JSHTMLMenuElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore18JSHTMLParamElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLParamElementEEE","__ZN7WebCore12cacheWrapperINS_14HTMLPreElementENS_16JSHTMLPreElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","_memset","__ZN7WebCore21JSHTMLBaseFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19HTMLBaseFontElementEEE","__ZN7WebCore12cacheWrapperINS_17HTMLKeygenElementENS_19JSHTMLKeygenElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createHTMLUListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore18JSHTMLLabelElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16HTMLLabelElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLFormElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_17HTMLAppletElementENS_19JSHTMLAppletElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createHTMLHeadElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_15HTMLBaseElementENS_17JSHTMLBaseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSHTMLTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_18JSHTMLOListElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL26createHTMLLIElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_17JSHTMLHtmlElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore20JSHTMLUnknownElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18HTMLUnknownElementEEE","__ZN7WebCore15getDOMStructureINS_18JSHTMLQuoteElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL28createHTMLFormElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore12cacheWrapperINS_17HTMLObjectElementENS_19JSHTMLObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_20HTMLDirectoryElementENS_22JSHTMLDirectoryElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createHTMLStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore19JSHTMLIFrameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17HTMLIFrameElementEEE","__ZN7WebCore15getDOMStructureINS_16JSHTMLDivElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createHTMLOListElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore15getDOMStructureINS_15JSHTMLHRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_17HTMLScriptElementENS_19JSHTMLScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createHTMLFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCoreL32createHTMLTemplateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE"]

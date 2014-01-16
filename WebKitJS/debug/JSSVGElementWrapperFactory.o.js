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
H_BASE = parentModule["_malloc"](688 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 688;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore19JSSVGFEFuncBElement6s_infoE=env.__ZN7WebCore19JSSVGFEFuncBElement6s_infoE|0;
  var __ZN7WebCore20JSSVGMetadataElement6s_infoE=env.__ZN7WebCore20JSSVGMetadataElement6s_infoE|0;
  var __ZN7WebCore8SVGNames17feDistantLightTagE=env.__ZN7WebCore8SVGNames17feDistantLightTagE|0;
  var __ZN7WebCore12JSSVGElement6s_infoE=env.__ZN7WebCore12JSSVGElement6s_infoE|0;
  var __ZN7WebCore15JSSVGSetElement6s_infoE=env.__ZN7WebCore15JSSVGSetElement6s_infoE|0;
  var __ZN7WebCore24JSSVGFEDropShadowElement6s_infoE=env.__ZN7WebCore24JSSVGFEDropShadowElement6s_infoE|0;
  var __ZN7WebCore8SVGNames11glyphRefTagE=env.__ZN7WebCore8SVGNames11glyphRefTagE|0;
  var __ZN7WebCore8SVGNames9circleTagE=env.__ZN7WebCore8SVGNames9circleTagE|0;
  var __ZN7WebCore19JSSVGEllipseElement6s_infoE=env.__ZN7WebCore19JSSVGEllipseElement6s_infoE|0;
  var __ZN7WebCore8SVGNames7pathTagE=env.__ZN7WebCore8SVGNames7pathTagE|0;
  var __ZN7WebCore8SVGNames10patternTagE=env.__ZN7WebCore8SVGNames10patternTagE|0;
  var __ZN7WebCore15JSSVGSVGElement6s_infoE=env.__ZN7WebCore15JSSVGSVGElement6s_infoE|0;
  var __ZN7WebCore8SVGNames7fontTagE=env.__ZN7WebCore8SVGNames7fontTagE|0;
  var __ZN7WebCore8SVGNames20feDiffuseLightingTagE=env.__ZN7WebCore8SVGNames20feDiffuseLightingTagE|0;
  var __ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE=env.__ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE|0;
  var __ZN7WebCore8SVGNames10animateTagE=env.__ZN7WebCore8SVGNames10animateTagE|0;
  var __ZN7WebCore8SVGNames7descTagE=env.__ZN7WebCore8SVGNames7descTagE|0;
  var __ZN7WebCore25JSSVGAnimateMotionElement6s_infoE=env.__ZN7WebCore25JSSVGAnimateMotionElement6s_infoE|0;
  var __ZN7WebCore24JSSVGFEPointLightElement6s_infoE=env.__ZN7WebCore24JSSVGFEPointLightElement6s_infoE|0;
  var __ZN7WebCore18JSSVGFETileElement6s_infoE=env.__ZN7WebCore18JSSVGFETileElement6s_infoE|0;
  var __ZN7WebCore24JSSVGMissingGlyphElement6s_infoE=env.__ZN7WebCore24JSSVGMissingGlyphElement6s_infoE|0;
  var __ZN7WebCore25JSSVGForeignObjectElement6s_infoE=env.__ZN7WebCore25JSSVGForeignObjectElement6s_infoE|0;
  var __ZN7WebCore19JSSVGFEFloodElement6s_infoE=env.__ZN7WebCore19JSSVGFEFloodElement6s_infoE|0;
  var __ZN7WebCore8SVGNames9feTileTagE=env.__ZN7WebCore8SVGNames9feTileTagE|0;
  var __ZN7WebCore8SVGNames16font_face_srcTagE=env.__ZN7WebCore8SVGNames16font_face_srcTagE|0;
  var __ZN7WebCore24JSSVGAnimateColorElement6s_infoE=env.__ZN7WebCore24JSSVGAnimateColorElement6s_infoE|0;
  var __ZN7WebCore8SVGNames9scriptTagE=env.__ZN7WebCore8SVGNames9scriptTagE|0;
  var __ZN7WebCore8SVGNames10feFloodTagE=env.__ZN7WebCore8SVGNames10feFloodTagE|0;
  var __ZN7WebCore8SVGNames8tspanTagE=env.__ZN7WebCore8SVGNames8tspanTagE|0;
  var __ZN7WebCore8SVGNames21feSpecularLightingTagE=env.__ZN7WebCore8SVGNames21feSpecularLightingTagE|0;
  var __ZN7WebCore8SVGNames7defsTagE=env.__ZN7WebCore8SVGNames7defsTagE|0;
  var __ZN7WebCore8SVGNames16foreignObjectTagE=env.__ZN7WebCore8SVGNames16foreignObjectTagE|0;
  var __ZN7WebCore8SVGNames11polylineTagE=env.__ZN7WebCore8SVGNames11polylineTagE|0;
  var __ZN7WebCore8SVGNames14feCompositeTagE=env.__ZN7WebCore8SVGNames14feCompositeTagE|0;
  var __ZN7WebCore8SVGNames6setTagE=env.__ZN7WebCore8SVGNames6setTagE|0;
  var __ZN7WebCore8SVGNames11altGlyphTagE=env.__ZN7WebCore8SVGNames11altGlyphTagE|0;
  var __ZN7WebCore8SVGNames16missing_glyphTagE=env.__ZN7WebCore8SVGNames16missing_glyphTagE|0;
  var __ZN7WebCore20JSSVGPolylineElement6s_infoE=env.__ZN7WebCore20JSSVGPolylineElement6s_infoE|0;
  var __ZN7WebCore17JSSVGVKernElement6s_infoE=env.__ZN7WebCore17JSSVGVKernElement6s_infoE|0;
  var __ZN7WebCore8SVGNames4gTagE=env.__ZN7WebCore8SVGNames4gTagE|0;
  var __ZN7WebCore8SVGNames15feTurbulenceTagE=env.__ZN7WebCore8SVGNames15feTurbulenceTagE|0;
  var __ZN7WebCore16JSSVGDescElement6s_infoE=env.__ZN7WebCore16JSSVGDescElement6s_infoE|0;
  var __ZN7WebCore16JSSVGStopElement6s_infoE=env.__ZN7WebCore16JSSVGStopElement6s_infoE|0;
  var __ZN7WebCore18JSSVGCursorElement6s_infoE=env.__ZN7WebCore18JSSVGCursorElement6s_infoE|0;
  var __ZN7WebCore17JSSVGGlyphElement6s_infoE=env.__ZN7WebCore17JSSVGGlyphElement6s_infoE|0;
  var __ZN7WebCore8SVGNames15fePointLightTagE=env.__ZN7WebCore8SVGNames15fePointLightTagE|0;
  var __ZN7WebCore17JSSVGTitleElement6s_infoE=env.__ZN7WebCore17JSSVGTitleElement6s_infoE|0;
  var __ZN7WebCore8SVGNames8styleTagE=env.__ZN7WebCore8SVGNames8styleTagE|0;
  var __ZN7WebCore13JSSVGAElement6s_infoE=env.__ZN7WebCore13JSSVGAElement6s_infoE|0;
  var __ZN7WebCore8SVGNames7trefTagE=env.__ZN7WebCore8SVGNames7trefTagE|0;
  var __ZN7WebCore8SVGNames8hkernTagE=env.__ZN7WebCore8SVGNames8hkernTagE|0;
  var __ZN7WebCore20JSSVGAltGlyphElement6s_infoE=env.__ZN7WebCore20JSSVGAltGlyphElement6s_infoE|0;
  var __ZN7WebCore8SVGNames9filterTagE=env.__ZN7WebCore8SVGNames9filterTagE|0;
  var __ZN7WebCore8SVGNames7rectTagE=env.__ZN7WebCore8SVGNames7rectTagE|0;
  var __ZN7WebCore8SVGNames7stopTagE=env.__ZN7WebCore8SVGNames7stopTagE|0;
  var __ZN7WebCore8SVGNames11textPathTagE=env.__ZN7WebCore8SVGNames11textPathTagE|0;
  var __ZN7WebCore8SVGNames16animateMotionTagE=env.__ZN7WebCore8SVGNames16animateMotionTagE|0;
  var __ZN7WebCore8SVGNames15altGlyphItemTagE=env.__ZN7WebCore8SVGNames15altGlyphItemTagE|0;
  var __ZN7WebCore24JSSVGFEMorphologyElement6s_infoE=env.__ZN7WebCore24JSSVGFEMorphologyElement6s_infoE|0;
  var __ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE=env.__ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE|0;
  var __ZN7WebCore19JSSVGFEFuncRElement6s_infoE=env.__ZN7WebCore19JSSVGFEFuncRElement6s_infoE|0;
  var __ZN7WebCore8SVGNames11feOffsetTagE=env.__ZN7WebCore8SVGNames11feOffsetTagE|0;
  var __ZN7WebCore16JSSVGDefsElement6s_infoE=env.__ZN7WebCore16JSSVGDefsElement6s_infoE|0;
  var __ZN7WebCore8SVGNames10polygonTagE=env.__ZN7WebCore8SVGNames10polygonTagE|0;
  var __ZN7WebCore8SVGNames11clipPathTagE=env.__ZN7WebCore8SVGNames11clipPathTagE|0;
  var __ZN7WebCore8SVGNames9symbolTagE=env.__ZN7WebCore8SVGNames9symbolTagE|0;
  var __ZN7WebCore8SVGNames10ellipseTagE=env.__ZN7WebCore8SVGNames10ellipseTagE|0;
  var __ZN7WebCore8SVGNames8imageTagE=env.__ZN7WebCore8SVGNames8imageTagE|0;
  var __ZN7WebCore8SVGNames10feImageTagE=env.__ZN7WebCore8SVGNames10feImageTagE|0;
  var __ZN7WebCore16JSSVGPathElement6s_infoE=env.__ZN7WebCore16JSSVGPathElement6s_infoE|0;
  var __ZN7WebCore20JSSVGClipPathElement6s_infoE=env.__ZN7WebCore20JSSVGClipPathElement6s_infoE|0;
  var __ZN7WebCore19JSSVGFEFuncAElement6s_infoE=env.__ZN7WebCore19JSSVGFEFuncAElement6s_infoE|0;
  var __ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE=env.__ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE|0;
  var __ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE=env.__ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE|0;
  var __ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE=env.__ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE|0;
  var __ZN7WebCore8SVGNames12font_faceTagE=env.__ZN7WebCore8SVGNames12font_faceTagE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore18JSSVGMarkerElement6s_infoE=env.__ZN7WebCore18JSSVGMarkerElement6s_infoE|0;
  var __ZN7WebCore8SVGNames10feFuncATagE=env.__ZN7WebCore8SVGNames10feFuncATagE|0;
  var __ZN7WebCore19JSSVGFEMergeElement6s_infoE=env.__ZN7WebCore19JSSVGFEMergeElement6s_infoE|0;
  var __ZN7WebCore8SVGNames7viewTagE=env.__ZN7WebCore8SVGNames7viewTagE|0;
  var __ZN7WebCore19JSSVGFEBlendElement6s_infoE=env.__ZN7WebCore19JSSVGFEBlendElement6s_infoE|0;
  var __ZN7WebCore23JSSVGFontFaceUriElement6s_infoE=env.__ZN7WebCore23JSSVGFontFaceUriElement6s_infoE|0;
  var __ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE=env.__ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE|0;
  var __ZN7WebCore28JSSVGAnimateTransformElement6s_infoE=env.__ZN7WebCore28JSSVGAnimateTransformElement6s_infoE|0;
  var __ZN7WebCore16JSSVGTRefElement6s_infoE=env.__ZN7WebCore16JSSVGTRefElement6s_infoE|0;
  var __ZN7WebCore26JSSVGLinearGradientElement6s_infoE=env.__ZN7WebCore26JSSVGLinearGradientElement6s_infoE|0;
  var __ZN7WebCore8SVGNames4aTagE=env.__ZN7WebCore8SVGNames4aTagE|0;
  var __ZN7WebCore16JSSVGLineElement6s_infoE=env.__ZN7WebCore16JSSVGLineElement6s_infoE|0;
  var __ZN7WebCore20JSSVGFEOffsetElement6s_infoE=env.__ZN7WebCore20JSSVGFEOffsetElement6s_infoE|0;
  var __ZN7WebCore18JSSVGScriptElement6s_infoE=env.__ZN7WebCore18JSSVGScriptElement6s_infoE|0;
  var __ZN7WebCore16JSSVGViewElement6s_infoE=env.__ZN7WebCore16JSSVGViewElement6s_infoE|0;
  var __ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE=env.__ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE|0;
  var __ZN7WebCore8SVGNames16font_face_uriTagE=env.__ZN7WebCore8SVGNames16font_face_uriTagE|0;
  var __ZN7WebCore8SVGNames15feMorphologyTagE=env.__ZN7WebCore8SVGNames15feMorphologyTagE|0;
  var __ZN7WebCore8SVGNames8vkernTagE=env.__ZN7WebCore8SVGNames8vkernTagE|0;
  var __ZN7WebCore8SVGNames10feFuncBTagE=env.__ZN7WebCore8SVGNames10feFuncBTagE|0;
  var __ZTVN7WebCore11JSNodeOwnerE=env.__ZTVN7WebCore11JSNodeOwnerE|0;
  var __ZN7WebCore8SVGNames7lineTagE=env.__ZN7WebCore8SVGNames7lineTagE|0;
  var __ZN7WebCore8SVGNames7textTagE=env.__ZN7WebCore8SVGNames7textTagE|0;
  var __ZN7WebCore23JSSVGFECompositeElement6s_infoE=env.__ZN7WebCore23JSSVGFECompositeElement6s_infoE|0;
  var __ZN7WebCore19JSSVGPolygonElement6s_infoE=env.__ZN7WebCore19JSSVGPolygonElement6s_infoE|0;
  var __ZN7WebCore8SVGNames19animateTransformTagE=env.__ZN7WebCore8SVGNames19animateTransformTagE|0;
  var __ZN7WebCore8SVGNames10feFuncGTagE=env.__ZN7WebCore8SVGNames10feFuncGTagE|0;
  var __ZN7WebCore17JSSVGMPathElement6s_infoE=env.__ZN7WebCore17JSSVGMPathElement6s_infoE|0;
  var __ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE=env.__ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE|0;
  var __ZN7WebCore8SVGNames20feDisplacementMapTagE=env.__ZN7WebCore8SVGNames20feDisplacementMapTagE|0;
  var __ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE=env.__ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE|0;
  var __ZN7WebCore20JSSVGGlyphRefElement6s_infoE=env.__ZN7WebCore20JSSVGGlyphRefElement6s_infoE|0;
  var __ZN7WebCore8SVGNames15animateColorTagE=env.__ZN7WebCore8SVGNames15animateColorTagE|0;
  var __ZN7WebCore16JSSVGRectElement6s_infoE=env.__ZN7WebCore16JSSVGRectElement6s_infoE|0;
  var __ZN7WebCore8SVGNames17font_face_nameTagE=env.__ZN7WebCore8SVGNames17font_face_nameTagE|0;
  var __ZN7WebCore15JSSVGUseElement6s_infoE=env.__ZN7WebCore15JSSVGUseElement6s_infoE|0;
  var __ZN7WebCore26JSSVGRadialGradientElement6s_infoE=env.__ZN7WebCore26JSSVGRadialGradientElement6s_infoE|0;
  var __ZN7WebCore17JSSVGImageElement6s_infoE=env.__ZN7WebCore17JSSVGImageElement6s_infoE|0;
  var __ZN7WebCore26JSSVGFEDistantLightElement6s_infoE=env.__ZN7WebCore26JSSVGFEDistantLightElement6s_infoE|0;
  var __ZN7WebCore8SVGNames22feComponentTransferTagE=env.__ZN7WebCore8SVGNames22feComponentTransferTagE|0;
  var __ZN7WebCore16JSSVGMaskElement6s_infoE=env.__ZN7WebCore16JSSVGMaskElement6s_infoE|0;
  var __ZN7WebCore8SVGNames9switchTagE=env.__ZN7WebCore8SVGNames9switchTagE|0;
  var __ZN7WebCore19JSSVGFEImageElement6s_infoE=env.__ZN7WebCore19JSSVGFEImageElement6s_infoE|0;
  var __ZN7WebCore20JSSVGTextPathElement6s_infoE=env.__ZN7WebCore20JSSVGTextPathElement6s_infoE|0;
  var __ZN7WebCore8SVGNames14feMergeNodeTagE=env.__ZN7WebCore8SVGNames14feMergeNodeTagE|0;
  var __ZN7WebCore20JSSVGFontFaceElement6s_infoE=env.__ZN7WebCore20JSSVGFontFaceElement6s_infoE|0;
  var __ZN7WebCore8SVGNames16feColorMatrixTagE=env.__ZN7WebCore8SVGNames16feColorMatrixTagE|0;
  var __ZN7WebCore16JSSVGFontElement6s_infoE=env.__ZN7WebCore16JSSVGFontElement6s_infoE|0;
  var __ZN7WebCore18JSSVGSymbolElement6s_infoE=env.__ZN7WebCore18JSSVGSymbolElement6s_infoE|0;
  var __ZN7WebCore8SVGNames10feMergeTagE=env.__ZN7WebCore8SVGNames10feMergeTagE|0;
  var __ZN7WebCore8SVGNames17linearGradientTagE=env.__ZN7WebCore8SVGNames17linearGradientTagE|0;
  var __ZN7WebCore8SVGNames8titleTagE=env.__ZN7WebCore8SVGNames8titleTagE|0;
  var __ZN7WebCore8SVGNames14feSpotLightTagE=env.__ZN7WebCore8SVGNames14feSpotLightTagE|0;
  var __ZN7WebCore24JSSVGFETurbulenceElement6s_infoE=env.__ZN7WebCore24JSSVGFETurbulenceElement6s_infoE|0;
  var __ZN7WebCore18JSSVGSwitchElement6s_infoE=env.__ZN7WebCore18JSSVGSwitchElement6s_infoE|0;
  var __ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE=env.__ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE|0;
  var __ZN7WebCore18JSSVGFilterElement6s_infoE=env.__ZN7WebCore18JSSVGFilterElement6s_infoE|0;
  var __ZN7WebCore19JSSVGFEFuncGElement6s_infoE=env.__ZN7WebCore19JSSVGFEFuncGElement6s_infoE|0;
  var __ZN7WebCore18JSSVGCircleElement6s_infoE=env.__ZN7WebCore18JSSVGCircleElement6s_infoE|0;
  var __ZN7WebCore8SVGNames19feConvolveMatrixTagE=env.__ZN7WebCore8SVGNames19feConvolveMatrixTagE|0;
  var __ZN7WebCore8SVGNames9cursorTagE=env.__ZN7WebCore8SVGNames9cursorTagE|0;
  var __ZN7WebCore8SVGNames15feDropShadowTagE=env.__ZN7WebCore8SVGNames15feDropShadowTagE|0;
  var __ZN7WebCore17JSSVGTSpanElement6s_infoE=env.__ZN7WebCore17JSSVGTSpanElement6s_infoE|0;
  var __ZN7WebCore23JSSVGFESpotLightElement6s_infoE=env.__ZN7WebCore23JSSVGFESpotLightElement6s_infoE|0;
  var __ZN7WebCore16JSSVGTextElement6s_infoE=env.__ZN7WebCore16JSSVGTextElement6s_infoE|0;
  var __ZN7WebCore8SVGNames14altGlyphDefTagE=env.__ZN7WebCore8SVGNames14altGlyphDefTagE|0;
  var __ZN7WebCore8SVGNames8mpathTagE=env.__ZN7WebCore8SVGNames8mpathTagE|0;
  var __ZN7WebCore8SVGNames10feFuncRTagE=env.__ZN7WebCore8SVGNames10feFuncRTagE|0;
  var __ZN7WebCore8SVGNames7maskTagE=env.__ZN7WebCore8SVGNames7maskTagE|0;
  var __ZN7WebCore8SVGNames9markerTagE=env.__ZN7WebCore8SVGNames9markerTagE|0;
  var __ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE=env.__ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE|0;
  var __ZN7WebCore8SVGNames8glyphTagE=env.__ZN7WebCore8SVGNames8glyphTagE|0;
  var __ZN7WebCore24JSSVGFontFaceNameElement6s_infoE=env.__ZN7WebCore24JSSVGFontFaceNameElement6s_infoE|0;
  var __ZN7WebCore8SVGNames17radialGradientTagE=env.__ZN7WebCore8SVGNames17radialGradientTagE|0;
  var __ZN7WebCore8SVGNames10feBlendTagE=env.__ZN7WebCore8SVGNames10feBlendTagE|0;
  var __ZN7WebCore13JSSVGGElement6s_infoE=env.__ZN7WebCore13JSSVGGElement6s_infoE|0;
  var __ZN7WebCore19JSSVGAnimateElement6s_infoE=env.__ZN7WebCore19JSSVGAnimateElement6s_infoE|0;
  var __ZN7WebCore17JSSVGHKernElement6s_infoE=env.__ZN7WebCore17JSSVGHKernElement6s_infoE|0;
  var __ZN7WebCore8SVGNames6useTagE=env.__ZN7WebCore8SVGNames6useTagE|0;
  var __ZN7WebCore8SVGNames17feGaussianBlurTagE=env.__ZN7WebCore8SVGNames17feGaussianBlurTagE|0;
  var __ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE=env.__ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE|0;
  var __ZN7WebCore8SVGNames11metadataTagE=env.__ZN7WebCore8SVGNames11metadataTagE|0;
  var __ZN7WebCore8SVGNames19font_face_formatTagE=env.__ZN7WebCore8SVGNames19font_face_formatTagE|0;
  var __ZN7WebCore19JSSVGPatternElement6s_infoE=env.__ZN7WebCore19JSSVGPatternElement6s_infoE|0;
  var __ZN7WebCore17JSSVGStyleElement6s_infoE=env.__ZN7WebCore17JSSVGStyleElement6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+688)|0;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+680)|0;
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
 HEAP32[H_BASE + 8 >> 2] = __ZN7WebCore8SVGNames4aTagE;
 HEAP32[H_BASE + 12 >> 2] = F_BASE_iiii + 114;
 HEAP32[H_BASE + 16 >> 2] = __ZN7WebCore8SVGNames11altGlyphTagE;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_iiii + 78;
 HEAP32[H_BASE + 24 >> 2] = __ZN7WebCore8SVGNames14altGlyphDefTagE;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iiii + 72;
 HEAP32[H_BASE + 32 >> 2] = __ZN7WebCore8SVGNames15altGlyphItemTagE;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiii + 92;
 HEAP32[H_BASE + 40 >> 2] = __ZN7WebCore8SVGNames10animateTagE;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiii + 76;
 HEAP32[H_BASE + 48 >> 2] = __ZN7WebCore8SVGNames15animateColorTagE;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iiii + 152;
 HEAP32[H_BASE + 56 >> 2] = __ZN7WebCore8SVGNames16animateMotionTagE;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiii + 28;
 HEAP32[H_BASE + 64 >> 2] = __ZN7WebCore8SVGNames19animateTransformTagE;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 72 >> 2] = __ZN7WebCore8SVGNames9circleTagE;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iiii + 108;
 HEAP32[H_BASE + 80 >> 2] = __ZN7WebCore8SVGNames11clipPathTagE;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiii + 102;
 HEAP32[H_BASE + 88 >> 2] = __ZN7WebCore8SVGNames9cursorTagE;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 20;
 HEAP32[H_BASE + 96 >> 2] = __ZN7WebCore8SVGNames7defsTagE;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iiii + 68;
 HEAP32[H_BASE + 104 >> 2] = __ZN7WebCore8SVGNames7descTagE;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 112 >> 2] = __ZN7WebCore8SVGNames10ellipseTagE;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iiii + 18;
 HEAP32[H_BASE + 120 >> 2] = __ZN7WebCore8SVGNames10feBlendTagE;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_iiii + 26;
 HEAP32[H_BASE + 128 >> 2] = __ZN7WebCore8SVGNames16feColorMatrixTagE;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_iiii + 66;
 HEAP32[H_BASE + 136 >> 2] = __ZN7WebCore8SVGNames22feComponentTransferTagE;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_iiii + 106;
 HEAP32[H_BASE + 144 >> 2] = __ZN7WebCore8SVGNames14feCompositeTagE;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iiii + 64;
 HEAP32[H_BASE + 152 >> 2] = __ZN7WebCore8SVGNames19feConvolveMatrixTagE;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iiii + 46;
 HEAP32[H_BASE + 160 >> 2] = __ZN7WebCore8SVGNames20feDiffuseLightingTagE;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iiii + 160;
 HEAP32[H_BASE + 168 >> 2] = __ZN7WebCore8SVGNames20feDisplacementMapTagE;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iiii + 146;
 HEAP32[H_BASE + 176 >> 2] = __ZN7WebCore8SVGNames17feDistantLightTagE;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiii + 12;
 HEAP32[H_BASE + 184 >> 2] = __ZN7WebCore8SVGNames15feDropShadowTagE;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iiii + 86;
 HEAP32[H_BASE + 192 >> 2] = __ZN7WebCore8SVGNames10feFloodTagE;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 200 >> 2] = __ZN7WebCore8SVGNames10feFuncATagE;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 208 >> 2] = __ZN7WebCore8SVGNames10feFuncBTagE;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_iiii + 144;
 HEAP32[H_BASE + 216 >> 2] = __ZN7WebCore8SVGNames10feFuncGTagE;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_iiii + 58;
 HEAP32[H_BASE + 224 >> 2] = __ZN7WebCore8SVGNames10feFuncRTagE;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_iiii + 116;
 HEAP32[H_BASE + 232 >> 2] = __ZN7WebCore8SVGNames17feGaussianBlurTagE;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iiii + 36;
 HEAP32[H_BASE + 240 >> 2] = __ZN7WebCore8SVGNames10feImageTagE;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iiii + 148;
 HEAP32[H_BASE + 248 >> 2] = __ZN7WebCore8SVGNames10feMergeTagE;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_iiii + 24;
 HEAP32[H_BASE + 256 >> 2] = __ZN7WebCore8SVGNames14feMergeNodeTagE;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iiii + 124;
 HEAP32[H_BASE + 264 >> 2] = __ZN7WebCore8SVGNames15feMorphologyTagE;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iiii + 94;
 HEAP32[H_BASE + 272 >> 2] = __ZN7WebCore8SVGNames11feOffsetTagE;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iiii + 84;
 HEAP32[H_BASE + 280 >> 2] = __ZN7WebCore8SVGNames15fePointLightTagE;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_iiii + 88;
 HEAP32[H_BASE + 288 >> 2] = __ZN7WebCore8SVGNames21feSpecularLightingTagE;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_iiii + 52;
 HEAP32[H_BASE + 296 >> 2] = __ZN7WebCore8SVGNames14feSpotLightTagE;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_iiii + 80;
 HEAP32[H_BASE + 304 >> 2] = __ZN7WebCore8SVGNames9feTileTagE;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iiii + 134;
 HEAP32[H_BASE + 312 >> 2] = __ZN7WebCore8SVGNames15feTurbulenceTagE;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_iiii + 62;
 HEAP32[H_BASE + 320 >> 2] = __ZN7WebCore8SVGNames9filterTagE;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iiii + 122;
 HEAP32[H_BASE + 328 >> 2] = __ZN7WebCore8SVGNames7fontTagE;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_iiii + 30;
 HEAP32[H_BASE + 336 >> 2] = __ZN7WebCore8SVGNames12font_faceTagE;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iiii + 100;
 HEAP32[H_BASE + 344 >> 2] = __ZN7WebCore8SVGNames19font_face_formatTagE;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iiii + 154;
 HEAP32[H_BASE + 352 >> 2] = __ZN7WebCore8SVGNames17font_face_nameTagE;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iiii + 60;
 HEAP32[H_BASE + 360 >> 2] = __ZN7WebCore8SVGNames16font_face_srcTagE;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_iiii + 42;
 HEAP32[H_BASE + 368 >> 2] = __ZN7WebCore8SVGNames16font_face_uriTagE;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_iiii + 96;
 HEAP32[H_BASE + 376 >> 2] = __ZN7WebCore8SVGNames16foreignObjectTagE;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_iiii + 132;
 HEAP32[H_BASE + 384 >> 2] = __ZN7WebCore8SVGNames4gTagE;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iiii + 82;
 HEAP32[H_BASE + 392 >> 2] = __ZN7WebCore8SVGNames8glyphTagE;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iiii + 14;
 HEAP32[H_BASE + 400 >> 2] = __ZN7WebCore8SVGNames11glyphRefTagE;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iiii + 142;
 HEAP32[H_BASE + 408 >> 2] = __ZN7WebCore8SVGNames8hkernTagE;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iiii + 32;
 HEAP32[H_BASE + 416 >> 2] = __ZN7WebCore8SVGNames8imageTagE;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iiii + 50;
 HEAP32[H_BASE + 424 >> 2] = __ZN7WebCore8SVGNames7lineTagE;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_iiii + 136;
 HEAP32[H_BASE + 432 >> 2] = __ZN7WebCore8SVGNames17linearGradientTagE;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_iiii + 90;
 HEAP32[H_BASE + 440 >> 2] = __ZN7WebCore8SVGNames9markerTagE;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiii + 128;
 HEAP32[H_BASE + 448 >> 2] = __ZN7WebCore8SVGNames7maskTagE;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iiii + 138;
 HEAP32[H_BASE + 456 >> 2] = __ZN7WebCore8SVGNames11metadataTagE;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiii + 38;
 HEAP32[H_BASE + 464 >> 2] = __ZN7WebCore8SVGNames16missing_glyphTagE;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iiii + 34;
 HEAP32[H_BASE + 472 >> 2] = __ZN7WebCore8SVGNames8mpathTagE;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiii + 70;
 HEAP32[H_BASE + 480 >> 2] = __ZN7WebCore8SVGNames7pathTagE;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_iiii + 110;
 HEAP32[H_BASE + 488 >> 2] = __ZN7WebCore8SVGNames10patternTagE;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiii + 40;
 HEAP32[H_BASE + 496 >> 2] = __ZN7WebCore8SVGNames10polygonTagE;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 504 >> 2] = __ZN7WebCore8SVGNames11polylineTagE;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_iiii + 156;
 HEAP32[H_BASE + 512 >> 2] = __ZN7WebCore8SVGNames17radialGradientTagE;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_iiii + 112;
 HEAP32[H_BASE + 520 >> 2] = __ZN7WebCore8SVGNames7rectTagE;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iiii + 104;
 HEAP32[H_BASE + 528 >> 2] = __ZN7WebCore8SVGNames9scriptTagE;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iiii + 140;
 HEAP32[H_BASE + 536 >> 2] = __ZN7WebCore8SVGNames6setTagE;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_iiii + 74;
 HEAP32[H_BASE + 544 >> 2] = __ZN7WebCore8SVGNames7stopTagE;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iiii + 16;
 HEAP32[H_BASE + 552 >> 2] = __ZN7WebCore8SVGNames8styleTagE;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iiii + 22;
 HEAP32[H_BASE + 560 >> 2] = __ZN7WebCore8SVGNames6svgTagE;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iiii + 158;
 HEAP32[H_BASE + 568 >> 2] = __ZN7WebCore8SVGNames9switchTagE;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_iiii + 98;
 HEAP32[H_BASE + 576 >> 2] = __ZN7WebCore8SVGNames9symbolTagE;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_iiii + 150;
 HEAP32[H_BASE + 584 >> 2] = __ZN7WebCore8SVGNames7textTagE;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iiii + 118;
 HEAP32[H_BASE + 592 >> 2] = __ZN7WebCore8SVGNames11textPathTagE;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iiii + 126;
 HEAP32[H_BASE + 600 >> 2] = __ZN7WebCore8SVGNames8titleTagE;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iiii + 56;
 HEAP32[H_BASE + 608 >> 2] = __ZN7WebCore8SVGNames7trefTagE;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 54;
 HEAP32[H_BASE + 616 >> 2] = __ZN7WebCore8SVGNames8tspanTagE;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iiii + 48;
 HEAP32[H_BASE + 624 >> 2] = __ZN7WebCore8SVGNames6useTagE;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiii + 44;
 HEAP32[H_BASE + 632 >> 2] = __ZN7WebCore8SVGNames7viewTagE;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iiii + 130;
 HEAP32[H_BASE + 640 >> 2] = __ZN7WebCore8SVGNames8vkernTagE;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iiii + 120;
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
function __ZN7WebCore18createJSSVGWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (HEAP8[H_BASE + 648 | 0] | 0) {
  if ((HEAP32[H_BASE + 668 >> 2] | 0) == 0) {
   i7 = 4;
  }
 } else {
  _memset(H_BASE + 656 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 648 | 0] = 1;
  i7 = 4;
 }
 if ((i7 | 0) == 4) {
  __ZN7WebCoreL21populateSVGWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_10SVGElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE(H_BASE + 656);
 }
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
 i9 = i8;
 i10 = HEAP32[H_BASE + 664 >> 2] | 0;
 i11 = HEAP32[H_BASE + 656 >> 2] | 0;
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
   i16 = FUNCTION_TABLE_iiii[i12 & 255](i1, i2, i6) | 0;
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
 i6 = i1 + 16 | 0;
 i1 = __ZN7WebCore15getDOMStructureINS_12JSSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i15 = i3 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = __ZN7WebCore12JSSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_10SVGElementENS_12JSSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i6 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i15);
 i21 = i15 | 0;
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i2, 0) | 0;
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
  i8 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i2, i26) | 0;
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
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_(i1, i2) {
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
function __ZN7WebCore12cacheWrapperINS_26SVGAnimateTransformElementENS_28JSSVGAnimateTransformElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_23SVGAnimateMotionElementENS_25JSSVGAnimateMotionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGAnimateColorElementENS_24JSSVGAnimateColorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGAnimateElementENS_19JSSVGAnimateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_29SVGFEComponentTransferElementENS_31JSSVGFEComponentTransferElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_28SVGFESpecularLightingElementENS_30JSSVGFESpecularLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_27SVGFEDisplacementMapElementENS_29JSSVGFEDisplacementMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_27SVGFEDiffuseLightingElementENS_29JSSVGFEDiffuseLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_13SVGSetElementENS_15JSSVGSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_26SVGFEConvolveMatrixElementENS_28JSSVGFEConvolveMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_24SVGRadialGradientElementENS_26JSSVGRadialGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_24SVGLinearGradientElementENS_26JSSVGLinearGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_24SVGFontFaceFormatElementENS_26JSSVGFontFaceFormatElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_24SVGFEGaussianBlurElementENS_26JSSVGFEGaussianBlurElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_24SVGFEDistantLightElementENS_26JSSVGFEDistantLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_23SVGForeignObjectElementENS_25JSSVGForeignObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_23SVGFEColorMatrixElementENS_25JSSVGFEColorMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGMissingGlyphElementENS_24JSSVGMissingGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGFontFaceNameElementENS_24JSSVGFontFaceNameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGFETurbulenceElementENS_24JSSVGFETurbulenceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGFEPointLightElementENS_24JSSVGFEPointLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGFEMorphologyElementENS_24JSSVGFEMorphologyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGFEDropShadowElementENS_24JSSVGFEDropShadowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_22SVGAltGlyphItemElementENS_24JSSVGAltGlyphItemElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGFontFaceUriElementENS_23JSSVGFontFaceUriElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGFontFaceSrcElementENS_23JSSVGFontFaceSrcElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGFESpotLightElementENS_23JSSVGFESpotLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGFEMergeNodeElementENS_23JSSVGFEMergeNodeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGFECompositeElementENS_23JSSVGFECompositeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_21SVGAltGlyphDefElementENS_23JSSVGAltGlyphDefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGTextPathElementENS_20JSSVGTextPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGPolylineElementENS_20JSSVGPolylineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGMetadataElementENS_20JSSVGMetadataElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGGlyphRefElementENS_20JSSVGGlyphRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGFontFaceElementENS_20JSSVGFontFaceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGFEOffsetElementENS_20JSSVGFEOffsetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGClipPathElementENS_20JSSVGClipPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_18SVGAltGlyphElementENS_20JSSVGAltGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGPolygonElementENS_19JSSVGPolygonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGPatternElementENS_19JSSVGPatternElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEMergeElementENS_19JSSVGFEMergeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEImageElementENS_19JSSVGFEImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEFuncRElementENS_19JSSVGFEFuncRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEFuncGElementENS_19JSSVGFEFuncGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEFuncBElementENS_19JSSVGFEFuncBElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEFuncAElementENS_19JSSVGFEFuncAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEFloodElementENS_19JSSVGFEFloodElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGFEBlendElementENS_19JSSVGFEBlendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_17SVGEllipseElementENS_19JSSVGEllipseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGSymbolElementENS_18JSSVGSymbolElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGSwitchElementENS_18JSSVGSwitchElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGScriptElementENS_18JSSVGScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGMarkerElementENS_18JSSVGMarkerElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGFilterElementENS_18JSSVGFilterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGFETileElementENS_18JSSVGFETileElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGCursorElementENS_18JSSVGCursorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_16SVGCircleElementENS_18JSSVGCircleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGVKernElementENS_17JSSVGVKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGTitleElementENS_17JSSVGTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGTSpanElementENS_17JSSVGTSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGStyleElementENS_17JSSVGStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGMPathElementENS_17JSSVGMPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGImageElementENS_17JSSVGImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGHKernElementENS_17JSSVGHKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_15SVGGlyphElementENS_17JSSVGGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGViewElementENS_16JSSVGViewElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGTextElementENS_16JSSVGTextElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGTRefElementENS_16JSSVGTRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGStopElementENS_16JSSVGStopElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGRectElementENS_16JSSVGRectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGPathElementENS_16JSSVGPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGMaskElementENS_16JSSVGMaskElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGLineElementENS_16JSSVGLineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGFontElementENS_16JSSVGFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGDescElementENS_16JSSVGDescElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_14SVGDefsElementENS_16JSSVGDefsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_13SVGUseElementENS_15JSSVGUseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_13SVGSVGElementENS_15JSSVGSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_11SVGGElementENS_13JSSVGGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_11SVGAElementENS_13JSSVGAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore12cacheWrapperINS_10SVGElementENS_12JSSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
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
 if ((HEAP8[H_BASE + 688 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore11JSNodeOwnerE + 8;
  HEAP32[H_BASE + 680 >> 2] = i11;
  HEAP32[H_BASE + 688 >> 2] = 1;
  HEAP32[H_BASE + 692 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 680 >> 2] | 0;
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
function __ZN7WebCore15getDOMStructureINS_31JSSVGFEComponentTransferElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore31JSSVGFEComponentTransferElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_30JSSVGFESpecularLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore30JSSVGFESpecularLightingElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_29JSSVGFEDisplacementMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore29JSSVGFEDisplacementMapElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_29JSSVGFEDiffuseLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore29JSSVGFEDiffuseLightingElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_28JSSVGFEConvolveMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore28JSSVGFEConvolveMatrixElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_28JSSVGAnimateTransformElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore28JSSVGAnimateTransformElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore28JSSVGAnimateTransformElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore28JSSVGAnimateTransformElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore28JSSVGAnimateTransformElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSSVGRadialGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSSVGRadialGradientElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSSVGRadialGradientElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSSVGRadialGradientElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSSVGRadialGradientElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSSVGLinearGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSSVGLinearGradientElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSSVGLinearGradientElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSSVGLinearGradientElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSSVGLinearGradientElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSSVGFontFaceFormatElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSSVGFontFaceFormatElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSSVGFEGaussianBlurElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSSVGFEGaussianBlurElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSSVGFEDistantLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSSVGFEDistantLightElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSSVGFEDistantLightElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSSVGFEDistantLightElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSSVGFEDistantLightElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_25JSSVGForeignObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore25JSSVGForeignObjectElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore25JSSVGForeignObjectElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore25JSSVGForeignObjectElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore25JSSVGForeignObjectElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_25JSSVGFEColorMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore25JSSVGFEColorMatrixElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_25JSSVGAnimateMotionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore25JSSVGAnimateMotionElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore25JSSVGAnimateMotionElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore25JSSVGAnimateMotionElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore25JSSVGAnimateMotionElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGMissingGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGMissingGlyphElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGMissingGlyphElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGMissingGlyphElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGMissingGlyphElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGFontFaceNameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGFontFaceNameElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGFontFaceNameElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGFontFaceNameElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGFontFaceNameElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGFETurbulenceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGFETurbulenceElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGFETurbulenceElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGFETurbulenceElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGFETurbulenceElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGFEPointLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGFEPointLightElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGFEPointLightElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGFEPointLightElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGFEPointLightElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGFEMorphologyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGFEMorphologyElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGFEMorphologyElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGFEMorphologyElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGFEMorphologyElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGFEDropShadowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGFEDropShadowElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGFEDropShadowElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGFEDropShadowElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGFEDropShadowElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGAnimateColorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGAnimateColorElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGAnimateColorElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGAnimateColorElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGAnimateColorElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_24JSSVGAltGlyphItemElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore24JSSVGAltGlyphItemElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceUriElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGFontFaceUriElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGFontFaceUriElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGFontFaceUriElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGFontFaceUriElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceSrcElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGFontFaceSrcElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGFESpotLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGFESpotLightElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGFESpotLightElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGFESpotLightElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGFESpotLightElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGFEMergeNodeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGFEMergeNodeElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGFECompositeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGFECompositeElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGFECompositeElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGFECompositeElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGFECompositeElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSSVGAltGlyphDefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSSVGAltGlyphDefElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGTextPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGTextPathElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGTextPathElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGTextPathElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGTextPathElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGPolylineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGPolylineElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGPolylineElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGPolylineElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGPolylineElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGMetadataElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGMetadataElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGMetadataElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGMetadataElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGMetadataElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGGlyphRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGGlyphRefElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGGlyphRefElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGGlyphRefElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGGlyphRefElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGFontFaceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGFontFaceElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGFontFaceElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGFontFaceElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGFontFaceElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGFEOffsetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGFEOffsetElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGFEOffsetElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGFEOffsetElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGFEOffsetElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGClipPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGClipPathElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGClipPathElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGClipPathElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGClipPathElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_20JSSVGAltGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore20JSSVGAltGlyphElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore20JSSVGAltGlyphElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore20JSSVGAltGlyphElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore20JSSVGAltGlyphElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGPolygonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGPolygonElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGPolygonElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGPolygonElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGPolygonElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGPatternElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGPatternElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGPatternElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGPatternElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGPatternElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEMergeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEMergeElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEMergeElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEMergeElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEMergeElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEImageElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEImageElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEImageElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEImageElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEFuncRElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEFuncRElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEFuncRElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEFuncRElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEFuncGElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEFuncGElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEFuncGElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEFuncGElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncBElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEFuncBElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEFuncBElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEFuncBElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEFuncBElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEFuncAElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEFuncAElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEFuncAElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEFuncAElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEFloodElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEFloodElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEFloodElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEFloodElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEFloodElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGFEBlendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGFEBlendElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGFEBlendElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGFEBlendElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGFEBlendElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGEllipseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGEllipseElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGEllipseElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGEllipseElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGEllipseElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_19JSSVGAnimateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore19JSSVGAnimateElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore19JSSVGAnimateElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore19JSSVGAnimateElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore19JSSVGAnimateElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGSymbolElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGSymbolElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGSymbolElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGSymbolElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGSymbolElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGSwitchElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGSwitchElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGSwitchElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGSwitchElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGSwitchElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGScriptElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGScriptElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGScriptElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGScriptElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGMarkerElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGMarkerElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGMarkerElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGMarkerElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGMarkerElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGFilterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGFilterElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGFilterElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGFilterElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGFilterElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGFETileElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGFETileElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGFETileElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGFETileElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGFETileElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGCursorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGCursorElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGCursorElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGCursorElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGCursorElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGCircleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGCircleElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGCircleElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGCircleElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGCircleElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCoreL42createSVGFEComponentTransferElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_31JSSVGFEComponentTransferElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore31JSSVGFEComponentTransferElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGFEComponentTransferElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_29SVGFEComponentTransferElementENS_31JSSVGFEComponentTransferElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGVKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGVKernElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGVKernElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGVKernElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGVKernElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGTitleElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGTitleElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGTitleElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGTitleElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGTSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGTSpanElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGTSpanElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGTSpanElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGTSpanElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGStyleElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGStyleElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGStyleElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGStyleElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGMPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGMPathElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGMPathElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGMPathElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGMPathElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGImageElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGImageElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGImageElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGImageElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGHKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGHKernElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGHKernElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGHKernElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGHKernElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSVGGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSSVGGlyphElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSVGGlyphElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSSVGGlyphElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSSVGGlyphElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGViewElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGViewElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGViewElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGViewElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGViewElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGTextElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGTextElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGTextElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGTextElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGTextElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGTRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGTRefElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGTRefElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGTRefElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGTRefElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGStopElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGStopElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGStopElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGStopElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGStopElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGRectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGRectElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGRectElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGRectElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGRectElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGPathElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGPathElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGPathElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGPathElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGMaskElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGMaskElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGMaskElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGMaskElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGMaskElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGLineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGLineElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGLineElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGLineElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGLineElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGFontElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGFontElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGFontElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGFontElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGDescElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGDescElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGDescElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGDescElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGDescElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_16JSSVGDefsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore16JSSVGDefsElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore16JSSVGDefsElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore16JSSVGDefsElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore16JSSVGDefsElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCoreL41createSVGFESpecularLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_30JSSVGFESpecularLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore30JSSVGFESpecularLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_28SVGFESpecularLightingElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_28SVGFESpecularLightingElementENS_30JSSVGFESpecularLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSSVGUseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSSVGUseElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSSVGUseElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSSVGUseElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSSVGUseElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSSVGSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSSVGSetElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSSVGSetElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSSVGSetElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSSVGSetElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_15JSSVGSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore15JSSVGSVGElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore15JSSVGSVGElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore15JSSVGSVGElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore15JSSVGSVGElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCoreL40createSVGFEDisplacementMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_29JSSVGFEDisplacementMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore29JSSVGFEDisplacementMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDisplacementMapElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_27SVGFEDisplacementMapElementENS_29JSSVGFEDisplacementMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL40createSVGFEDiffuseLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_29JSSVGFEDiffuseLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore29JSSVGFEDiffuseLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDiffuseLightingElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_27SVGFEDiffuseLightingElementENS_29JSSVGFEDiffuseLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL39createSVGFEConvolveMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_28JSSVGFEConvolveMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore28JSSVGFEConvolveMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGFEConvolveMatrixElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_26SVGFEConvolveMatrixElementENS_28JSSVGFEConvolveMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_13JSSVGGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore13JSSVGGElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore13JSSVGGElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore13JSSVGGElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore13JSSVGGElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_13JSSVGAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore13JSSVGAElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore13JSSVGAElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore13JSSVGAElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore13JSSVGAElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore31JSSVGFEComponentTransferElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGFEComponentTransferElementEEE(i1, i2, i3) {
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
 __ZN7WebCore31JSSVGFEComponentTransferElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGFEComponentTransferElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore31JSSVGFEComponentTransferElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_12JSSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore12JSSVGElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore12JSSVGElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
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
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore12JSSVGElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore12JSSVGElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore30JSSVGFESpecularLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_28SVGFESpecularLightingElementEEE(i1, i2, i3) {
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
 __ZN7WebCore30JSSVGFESpecularLightingElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_28SVGFESpecularLightingElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore30JSSVGFESpecularLightingElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL37createSVGRadialGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_26JSSVGRadialGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore26JSSVGRadialGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGRadialGradientElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_24SVGRadialGradientElementENS_26JSSVGRadialGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL37createSVGLinearGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_26JSSVGLinearGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore26JSSVGLinearGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGLinearGradientElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_24SVGLinearGradientElementENS_26JSSVGLinearGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL37createSVGFontFaceFormatElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_26JSSVGFontFaceFormatElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore26JSSVGFontFaceFormatElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFontFaceFormatElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_24SVGFontFaceFormatElementENS_26JSSVGFontFaceFormatElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL37createSVGFEGaussianBlurElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_26JSSVGFEGaussianBlurElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore26JSSVGFEGaussianBlurElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEGaussianBlurElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_24SVGFEGaussianBlurElementENS_26JSSVGFEGaussianBlurElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL37createSVGFEDistantLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_26JSSVGFEDistantLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore26JSSVGFEDistantLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEDistantLightElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_24SVGFEDistantLightElementENS_26JSSVGFEDistantLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore29JSSVGFEDisplacementMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDisplacementMapElementEEE(i1, i2, i3) {
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
 __ZN7WebCore29JSSVGFEDisplacementMapElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDisplacementMapElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore29JSSVGFEDisplacementMapElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore29JSSVGFEDiffuseLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDiffuseLightingElementEEE(i1, i2, i3) {
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
 __ZN7WebCore29JSSVGFEDiffuseLightingElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDiffuseLightingElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore29JSSVGFEDiffuseLightingElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL36createSVGForeignObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_25JSSVGForeignObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore25JSSVGForeignObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGForeignObjectElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_23SVGForeignObjectElementENS_25JSSVGForeignObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL36createSVGFEColorMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_25JSSVGFEColorMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore25JSSVGFEColorMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGFEColorMatrixElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_23SVGFEColorMatrixElementENS_25JSSVGFEColorMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore28JSSVGFEConvolveMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGFEConvolveMatrixElementEEE(i1, i2, i3) {
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
 __ZN7WebCore28JSSVGFEConvolveMatrixElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGFEConvolveMatrixElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore28JSSVGFEConvolveMatrixElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL39createSVGAnimateTransformElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_28JSSVGAnimateTransformElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore28JSSVGAnimateTransformElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGAnimateTransformElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_26SVGAnimateTransformElementENS_28JSSVGAnimateTransformElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGMissingGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGMissingGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGMissingGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGMissingGlyphElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGMissingGlyphElementENS_24JSSVGMissingGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGFontFaceNameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGFontFaceNameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGFontFaceNameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFontFaceNameElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGFontFaceNameElementENS_24JSSVGFontFaceNameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGFETurbulenceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGFETurbulenceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGFETurbulenceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFETurbulenceElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGFETurbulenceElementENS_24JSSVGFETurbulenceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGFEPointLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGFEPointLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGFEPointLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEPointLightElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGFEPointLightElementENS_24JSSVGFEPointLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGFEMorphologyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGFEMorphologyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGFEMorphologyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEMorphologyElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGFEMorphologyElementENS_24JSSVGFEMorphologyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGFEDropShadowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGFEDropShadowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGFEDropShadowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEDropShadowElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGFEDropShadowElementENS_24JSSVGFEDropShadowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGAltGlyphItemElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGAltGlyphItemElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGAltGlyphItemElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAltGlyphItemElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGAltGlyphItemElementENS_24JSSVGAltGlyphItemElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGFontFaceUriElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceUriElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGFontFaceUriElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceUriElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGFontFaceUriElementENS_23JSSVGFontFaceUriElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGFontFaceSrcElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceSrcElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGFontFaceSrcElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceSrcElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGFontFaceSrcElementENS_23JSSVGFontFaceSrcElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGFESpotLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGFESpotLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGFESpotLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFESpotLightElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGFESpotLightElementENS_23JSSVGFESpotLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGFEMergeNodeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGFEMergeNodeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGFEMergeNodeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFEMergeNodeElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGFEMergeNodeElementENS_23JSSVGFEMergeNodeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGFECompositeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGFECompositeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGFECompositeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFECompositeElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGFECompositeElementENS_23JSSVGFECompositeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL34createSVGAltGlyphDefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_23JSSVGAltGlyphDefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore23JSSVGAltGlyphDefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGAltGlyphDefElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_21SVGAltGlyphDefElementENS_23JSSVGAltGlyphDefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore26JSSVGRadialGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGRadialGradientElementEEE(i1, i2, i3) {
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
 __ZN7WebCore26JSSVGRadialGradientElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGRadialGradientElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore26JSSVGRadialGradientElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore26JSSVGLinearGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGLinearGradientElementEEE(i1, i2, i3) {
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
 __ZN7WebCore26JSSVGLinearGradientElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGLinearGradientElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore26JSSVGLinearGradientElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore26JSSVGFontFaceFormatElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFontFaceFormatElementEEE(i1, i2, i3) {
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
 __ZN7WebCore26JSSVGFontFaceFormatElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFontFaceFormatElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore26JSSVGFontFaceFormatElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore26JSSVGFEGaussianBlurElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEGaussianBlurElementEEE(i1, i2, i3) {
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
 __ZN7WebCore26JSSVGFEGaussianBlurElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEGaussianBlurElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore26JSSVGFEGaussianBlurElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore26JSSVGFEDistantLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEDistantLightElementEEE(i1, i2, i3) {
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
 __ZN7WebCore26JSSVGFEDistantLightElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEDistantLightElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore26JSSVGFEDistantLightElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSSVGForeignObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGForeignObjectElementEEE(i1, i2, i3) {
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
 __ZN7WebCore25JSSVGForeignObjectElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGForeignObjectElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore25JSSVGForeignObjectElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSSVGFEColorMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGFEColorMatrixElementEEE(i1, i2, i3) {
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
 __ZN7WebCore25JSSVGFEColorMatrixElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGFEColorMatrixElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore25JSSVGFEColorMatrixElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL36createSVGAnimateMotionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_25JSSVGAnimateMotionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore25JSSVGAnimateMotionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGAnimateMotionElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_23SVGAnimateMotionElementENS_25JSSVGAnimateMotionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGMissingGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGMissingGlyphElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGMissingGlyphElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGMissingGlyphElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGMissingGlyphElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGFontFaceNameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFontFaceNameElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGFontFaceNameElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFontFaceNameElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGFontFaceNameElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGFETurbulenceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFETurbulenceElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGFETurbulenceElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFETurbulenceElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGFETurbulenceElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGFEPointLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEPointLightElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGFEPointLightElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEPointLightElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGFEPointLightElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGFEMorphologyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEMorphologyElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGFEMorphologyElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEMorphologyElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGFEMorphologyElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGFEDropShadowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEDropShadowElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGFEDropShadowElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEDropShadowElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGFEDropShadowElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGAltGlyphItemElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAltGlyphItemElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGAltGlyphItemElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAltGlyphItemElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGAltGlyphItemElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore28JSSVGAnimateTransformElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGAnimateTransformElementEEE(i1, i2, i3) {
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
 __ZN7WebCore28JSSVGAnimateTransformElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGAnimateTransformElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore28JSSVGAnimateTransformElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGFontFaceUriElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceUriElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGFontFaceUriElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceUriElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGFontFaceUriElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGFontFaceSrcElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceSrcElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGFontFaceSrcElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceSrcElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGFontFaceSrcElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGFESpotLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFESpotLightElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGFESpotLightElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFESpotLightElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGFESpotLightElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGFEMergeNodeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFEMergeNodeElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGFEMergeNodeElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFEMergeNodeElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGFEMergeNodeElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGFECompositeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFECompositeElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGFECompositeElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFECompositeElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGFECompositeElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSSVGAltGlyphDefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGAltGlyphDefElementEEE(i1, i2, i3) {
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
 __ZN7WebCore23JSSVGAltGlyphDefElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGAltGlyphDefElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore23JSSVGAltGlyphDefElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL35createSVGAnimateColorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_24JSSVGAnimateColorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore24JSSVGAnimateColorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAnimateColorElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_22SVGAnimateColorElementENS_24JSSVGAnimateColorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGTextPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGTextPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGTextPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGTextPathElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGTextPathElementENS_20JSSVGTextPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGPolylineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGPolylineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGPolylineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGPolylineElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGPolylineElementENS_20JSSVGPolylineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGMetadataElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGMetadataElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGMetadataElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGMetadataElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGMetadataElementENS_20JSSVGMetadataElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGGlyphRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGGlyphRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGGlyphRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGGlyphRefElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGGlyphRefElementENS_20JSSVGGlyphRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGFontFaceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGFontFaceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGFontFaceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFontFaceElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGFontFaceElementENS_20JSSVGFontFaceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGFEOffsetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGFEOffsetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGFEOffsetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFEOffsetElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGFEOffsetElementENS_20JSSVGFEOffsetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGClipPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGClipPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGClipPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGClipPathElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGClipPathElementENS_20JSSVGClipPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL31createSVGAltGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_20JSSVGAltGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore20JSSVGAltGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGAltGlyphElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_18SVGAltGlyphElementENS_20JSSVGAltGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGPolygonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGPolygonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGPolygonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPolygonElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGPolygonElementENS_19JSSVGPolygonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGPatternElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGPatternElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGPatternElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPatternElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGPatternElementENS_19JSSVGPatternElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEMergeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEMergeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEMergeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEMergeElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEMergeElementENS_19JSSVGFEMergeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEImageElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEImageElementENS_19JSSVGFEImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEFuncRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEFuncRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncRElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEFuncRElementENS_19JSSVGFEFuncRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEFuncGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEFuncGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncGElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEFuncGElementENS_19JSSVGFEFuncGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEFuncBElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncBElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEFuncBElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncBElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEFuncBElementENS_19JSSVGFEFuncBElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEFuncAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEFuncAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncAElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEFuncAElementENS_19JSSVGFEFuncAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEFloodElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEFloodElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEFloodElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFloodElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEFloodElementENS_19JSSVGFEFloodElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGFEBlendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGFEBlendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGFEBlendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEBlendElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGFEBlendElementENS_19JSSVGFEBlendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGEllipseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGEllipseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGEllipseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGEllipseElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGEllipseElementENS_19JSSVGEllipseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGSymbolElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGSymbolElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGSymbolElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSymbolElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGSymbolElementENS_18JSSVGSymbolElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGSwitchElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGSwitchElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGSwitchElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSwitchElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGSwitchElementENS_18JSSVGSwitchElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGScriptElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGScriptElementENS_18JSSVGScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGMarkerElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGMarkerElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGMarkerElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGMarkerElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGMarkerElementENS_18JSSVGMarkerElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGFilterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGFilterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGFilterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFilterElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGFilterElementENS_18JSSVGFilterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGFETileElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGFETileElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGFETileElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFETileElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGFETileElementENS_18JSSVGFETileElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGCursorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGCursorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGCursorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCursorElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGCursorElementENS_18JSSVGCursorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL29createSVGCircleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_18JSSVGCircleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore18JSSVGCircleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCircleElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_16SVGCircleElementENS_18JSSVGCircleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSSVGAnimateMotionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGAnimateMotionElementEEE(i1, i2, i3) {
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
 __ZN7WebCore25JSSVGAnimateMotionElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGAnimateMotionElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore25JSSVGAnimateMotionElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGTextPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGTextPathElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGTextPathElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGTextPathElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGTextPathElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGPolylineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGPolylineElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGPolylineElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGPolylineElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGPolylineElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGMetadataElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGMetadataElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGMetadataElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGMetadataElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGMetadataElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGGlyphRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGGlyphRefElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGGlyphRefElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGGlyphRefElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGGlyphRefElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGFontFaceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFontFaceElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGFontFaceElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFontFaceElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGFontFaceElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGFEOffsetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFEOffsetElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGFEOffsetElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFEOffsetElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGFEOffsetElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGClipPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGClipPathElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGClipPathElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGClipPathElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGClipPathElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20JSSVGAltGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGAltGlyphElementEEE(i1, i2, i3) {
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
 __ZN7WebCore20JSSVGAltGlyphElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGAltGlyphElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore20JSSVGAltGlyphElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore24JSSVGAnimateColorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAnimateColorElementEEE(i1, i2, i3) {
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
 __ZN7WebCore24JSSVGAnimateColorElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAnimateColorElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore24JSSVGAnimateColorElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGVKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGVKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGVKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGVKernElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGVKernElementENS_17JSSVGVKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTitleElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGTitleElementENS_17JSSVGTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGTSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGTSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGTSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTSpanElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGTSpanElementENS_17JSSVGTSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGStyleElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGStyleElementENS_17JSSVGStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGMPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGMPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGMPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGMPathElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGMPathElementENS_17JSSVGMPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGImageElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGImageElementENS_17JSSVGImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGHKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGHKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGHKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGHKernElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGHKernElementENS_17JSSVGHKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL28createSVGGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_17JSSVGGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore17JSSVGGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGGlyphElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_15SVGGlyphElementENS_17JSSVGGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGPolygonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPolygonElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGPolygonElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPolygonElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGPolygonElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGPatternElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPatternElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGPatternElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPatternElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGPatternElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEMergeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEMergeElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEMergeElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEMergeElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEMergeElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEImageElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEImageElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEImageElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEImageElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEFuncRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncRElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEFuncRElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncRElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEFuncRElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEFuncGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncGElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEFuncGElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncGElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEFuncGElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEFuncBElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncBElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEFuncBElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncBElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEFuncBElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEFuncAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncAElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEFuncAElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncAElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEFuncAElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEFloodElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFloodElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEFloodElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFloodElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEFloodElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGFEBlendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEBlendElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGFEBlendElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEBlendElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGFEBlendElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGEllipseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGEllipseElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGEllipseElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGEllipseElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGEllipseElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGSymbolElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSymbolElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGSymbolElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSymbolElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGSymbolElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGSwitchElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSwitchElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGSwitchElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSwitchElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGSwitchElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGScriptElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGScriptElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGScriptElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGScriptElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGMarkerElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGMarkerElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGMarkerElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGMarkerElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGMarkerElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGFilterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFilterElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGFilterElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFilterElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGFilterElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGFETileElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFETileElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGFETileElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFETileElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGFETileElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGCursorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCursorElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGCursorElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCursorElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGCursorElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGCircleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCircleElementEEE(i1, i2, i3) {
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
 __ZN7WebCore18JSSVGCircleElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCircleElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore18JSSVGCircleElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGViewElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGViewElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGViewElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGViewElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGViewElementENS_16JSSVGViewElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGTextElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGTextElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGTextElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTextElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGTextElementENS_16JSSVGTextElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGTRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGTRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGTRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTRefElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGTRefElementENS_16JSSVGTRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGStopElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGStopElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGStopElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGStopElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGStopElementENS_16JSSVGStopElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGRectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGRectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGRectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGRectElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGRectElementENS_16JSSVGRectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGPathElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGPathElementENS_16JSSVGPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGMaskElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGMaskElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGMaskElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGMaskElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGMaskElementENS_16JSSVGMaskElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGLineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGLineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGLineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGLineElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGLineElementENS_16JSSVGLineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGFontElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGFontElementENS_16JSSVGFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGDescElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGDescElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGDescElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDescElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGDescElementENS_16JSSVGDescElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL27createSVGDefsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_16JSSVGDefsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore16JSSVGDefsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDefsElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_14SVGDefsElementENS_16JSSVGDefsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGVKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGVKernElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGVKernElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGVKernElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGVKernElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTitleElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGTitleElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTitleElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGTitleElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGTSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTSpanElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGTSpanElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTSpanElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGTSpanElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGStyleElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGStyleElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGStyleElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGStyleElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGMPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGMPathElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGMPathElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGMPathElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGMPathElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGImageElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGImageElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGImageElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGImageElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGHKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGHKernElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGHKernElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGHKernElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGHKernElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSSVGGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGGlyphElementEEE(i1, i2, i3) {
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
 __ZN7WebCore17JSSVGGlyphElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGGlyphElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore17JSSVGGlyphElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL30createSVGAnimateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_19JSSVGAnimateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore19JSSVGAnimateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGAnimateElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_17SVGAnimateElementENS_19JSSVGAnimateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createSVGUseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_15JSSVGUseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSSVGUseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGUseElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_13SVGUseElementENS_15JSSVGUseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createSVGSVGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_15JSSVGSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSSVGSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSVGElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_13SVGSVGElementENS_15JSSVGSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGViewElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGViewElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGViewElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGViewElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGViewElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGTextElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTextElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGTextElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTextElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGTextElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGTRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTRefElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGTRefElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTRefElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGTRefElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGStopElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGStopElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGStopElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGStopElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGStopElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGRectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGRectElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGRectElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGRectElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGRectElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGPathElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGPathElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGPathElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGPathElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGMaskElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGMaskElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGMaskElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGMaskElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGMaskElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGLineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGLineElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGLineElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGLineElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGLineElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGFontElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGFontElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGFontElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGFontElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGDescElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDescElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGDescElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDescElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGDescElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore16JSSVGDefsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDefsElementEEE(i1, i2, i3) {
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
 __ZN7WebCore16JSSVGDefsElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDefsElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore16JSSVGDefsElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSSVGUseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGUseElementEEE(i1, i2, i3) {
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
 __ZN7WebCore15JSSVGUseElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGUseElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore15JSSVGUseElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSSVGSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSVGElementEEE(i1, i2, i3) {
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
 __ZN7WebCore15JSSVGSVGElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSVGElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore15JSSVGSVGElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL24createSVGGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_13JSSVGGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore13JSSVGGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGGElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_11SVGGElementENS_13JSSVGGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL24createSVGAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_13JSSVGAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore13JSSVGAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGAElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_11SVGAElementENS_13JSSVGAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore19JSSVGAnimateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGAnimateElementEEE(i1, i2, i3) {
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
 __ZN7WebCore19JSSVGAnimateElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGAnimateElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore19JSSVGAnimateElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore13JSSVGGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGGElementEEE(i1, i2, i3) {
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
 __ZN7WebCore13JSSVGGElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGGElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore13JSSVGGElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore13JSSVGAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGAElementEEE(i1, i2, i3) {
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
 __ZN7WebCore13JSSVGAElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGAElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore13JSSVGAElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL26createSVGSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 i1 = __ZN7WebCore15getDOMStructureINS_15JSSVGSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0, i2) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore15JSSVGSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSetElementEEE(i1, i2, i5) | 0;
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
 __ZN7WebCore12cacheWrapperINS_13SVGSetElementENS_15JSSVGSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i7 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i3, i9);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore12JSSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i1, i2, i3) {
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
 __ZN7WebCore12JSSVGElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore12JSSVGElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15JSSVGSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSetElementEEE(i1, i2, i3) {
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
 __ZN7WebCore15JSSVGSetElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSetElementEEE(i9, i1, i2, i5);
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
 __ZN7WebCore15JSSVGSetElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCoreL21populateSVGWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_10SVGElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE(i1) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_(i4, i5, i3, H_BASE + 8 + (i1 << 3) + 4 | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 80 >>> 0) {
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
 return FUNCTION_TABLE_iiii[i1 & 255](i2 | 0, i3 | 0, i4 | 0) | 0;
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
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCoreL30createSVGFEFuncAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEFloodElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGDescElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL39createSVGAnimateTransformElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGPolygonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL37createSVGFEDistantLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGStopElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGEllipseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGCursorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEMergeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEBlendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL36createSVGAnimateMotionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE
  ,b0,__ZN7WebCoreL27createSVGFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGHKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGMissingGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL37createSVGFEGaussianBlurElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGMetadataElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGPatternElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGFontFaceSrcElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL26createSVGUseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL39createSVGFEConvolveMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGTSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL41createSVGFESpecularLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGTRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEFuncGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE
  ,b0,__ZN7WebCoreL35createSVGFontFaceNameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGFETurbulenceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGFECompositeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL36createSVGFEColorMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGDefsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL28createSVGMPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGAltGlyphDefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL26createSVGSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGAnimateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGAltGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGFESpotLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL24createSVGGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGFEOffsetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGFEDropShadowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGFEPointLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE
  ,b0,__ZN7WebCoreL37createSVGLinearGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGAltGlyphItemElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGFEMorphologyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGFontFaceUriElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGSwitchElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGFontFaceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGClipPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGRectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL42createSVGFEComponentTransferElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGCircleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL37createSVGRadialGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL24createSVGAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEFuncRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGTextElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE
  ,b0,__ZN7WebCoreL28createSVGVKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGFilterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL34createSVGFEMergeNodeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGTextPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGMarkerElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGViewElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL36createSVGForeignObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGFETileElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGLineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL27createSVGMaskElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL29createSVGScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGGlyphRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEFuncBElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL40createSVGFEDisplacementMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL30createSVGFEImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE
  ,b0,__ZN7WebCoreL29createSVGSymbolElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL35createSVGAnimateColorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL37createSVGFontFaceFormatElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL31createSVGPolylineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL26createSVGSVGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,__ZN7WebCoreL40createSVGFEDiffuseLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19JSSVGFEFuncBElement6s_infoE": __ZN7WebCore19JSSVGFEFuncBElement6s_infoE, "__ZN7WebCore20JSSVGMetadataElement6s_infoE": __ZN7WebCore20JSSVGMetadataElement6s_infoE, "__ZN7WebCore8SVGNames17feDistantLightTagE": __ZN7WebCore8SVGNames17feDistantLightTagE, "__ZN7WebCore12JSSVGElement6s_infoE": __ZN7WebCore12JSSVGElement6s_infoE, "__ZN7WebCore15JSSVGSetElement6s_infoE": __ZN7WebCore15JSSVGSetElement6s_infoE, "__ZN7WebCore24JSSVGFEDropShadowElement6s_infoE": __ZN7WebCore24JSSVGFEDropShadowElement6s_infoE, "__ZN7WebCore8SVGNames11glyphRefTagE": __ZN7WebCore8SVGNames11glyphRefTagE, "__ZN7WebCore8SVGNames9circleTagE": __ZN7WebCore8SVGNames9circleTagE, "__ZN7WebCore19JSSVGEllipseElement6s_infoE": __ZN7WebCore19JSSVGEllipseElement6s_infoE, "__ZN7WebCore8SVGNames7pathTagE": __ZN7WebCore8SVGNames7pathTagE, "__ZN7WebCore8SVGNames10patternTagE": __ZN7WebCore8SVGNames10patternTagE, "__ZN7WebCore15JSSVGSVGElement6s_infoE": __ZN7WebCore15JSSVGSVGElement6s_infoE, "__ZN7WebCore8SVGNames7fontTagE": __ZN7WebCore8SVGNames7fontTagE, "__ZN7WebCore8SVGNames20feDiffuseLightingTagE": __ZN7WebCore8SVGNames20feDiffuseLightingTagE, "__ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE": __ZN7WebCore25JSSVGFEColorMatrixElement6s_infoE, "__ZN7WebCore8SVGNames10animateTagE": __ZN7WebCore8SVGNames10animateTagE, "__ZN7WebCore8SVGNames7descTagE": __ZN7WebCore8SVGNames7descTagE, "__ZN7WebCore25JSSVGAnimateMotionElement6s_infoE": __ZN7WebCore25JSSVGAnimateMotionElement6s_infoE, "__ZN7WebCore24JSSVGFEPointLightElement6s_infoE": __ZN7WebCore24JSSVGFEPointLightElement6s_infoE, "__ZN7WebCore18JSSVGFETileElement6s_infoE": __ZN7WebCore18JSSVGFETileElement6s_infoE, "__ZN7WebCore24JSSVGMissingGlyphElement6s_infoE": __ZN7WebCore24JSSVGMissingGlyphElement6s_infoE, "__ZN7WebCore25JSSVGForeignObjectElement6s_infoE": __ZN7WebCore25JSSVGForeignObjectElement6s_infoE, "__ZN7WebCore19JSSVGFEFloodElement6s_infoE": __ZN7WebCore19JSSVGFEFloodElement6s_infoE, "__ZN7WebCore8SVGNames9feTileTagE": __ZN7WebCore8SVGNames9feTileTagE, "__ZN7WebCore8SVGNames16font_face_srcTagE": __ZN7WebCore8SVGNames16font_face_srcTagE, "__ZN7WebCore24JSSVGAnimateColorElement6s_infoE": __ZN7WebCore24JSSVGAnimateColorElement6s_infoE, "__ZN7WebCore8SVGNames9scriptTagE": __ZN7WebCore8SVGNames9scriptTagE, "__ZN7WebCore8SVGNames10feFloodTagE": __ZN7WebCore8SVGNames10feFloodTagE, "__ZN7WebCore8SVGNames8tspanTagE": __ZN7WebCore8SVGNames8tspanTagE, "__ZN7WebCore8SVGNames21feSpecularLightingTagE": __ZN7WebCore8SVGNames21feSpecularLightingTagE, "__ZN7WebCore8SVGNames7defsTagE": __ZN7WebCore8SVGNames7defsTagE, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE, "__ZN7WebCore8SVGNames11polylineTagE": __ZN7WebCore8SVGNames11polylineTagE, "__ZN7WebCore8SVGNames14feCompositeTagE": __ZN7WebCore8SVGNames14feCompositeTagE, "__ZN7WebCore8SVGNames6setTagE": __ZN7WebCore8SVGNames6setTagE, "__ZN7WebCore8SVGNames11altGlyphTagE": __ZN7WebCore8SVGNames11altGlyphTagE, "__ZN7WebCore8SVGNames16missing_glyphTagE": __ZN7WebCore8SVGNames16missing_glyphTagE, "__ZN7WebCore20JSSVGPolylineElement6s_infoE": __ZN7WebCore20JSSVGPolylineElement6s_infoE, "__ZN7WebCore17JSSVGVKernElement6s_infoE": __ZN7WebCore17JSSVGVKernElement6s_infoE, "__ZN7WebCore8SVGNames4gTagE": __ZN7WebCore8SVGNames4gTagE, "__ZN7WebCore8SVGNames15feTurbulenceTagE": __ZN7WebCore8SVGNames15feTurbulenceTagE, "__ZN7WebCore16JSSVGDescElement6s_infoE": __ZN7WebCore16JSSVGDescElement6s_infoE, "__ZN7WebCore16JSSVGStopElement6s_infoE": __ZN7WebCore16JSSVGStopElement6s_infoE, "__ZN7WebCore18JSSVGCursorElement6s_infoE": __ZN7WebCore18JSSVGCursorElement6s_infoE, "__ZN7WebCore17JSSVGGlyphElement6s_infoE": __ZN7WebCore17JSSVGGlyphElement6s_infoE, "__ZN7WebCore8SVGNames15fePointLightTagE": __ZN7WebCore8SVGNames15fePointLightTagE, "__ZN7WebCore17JSSVGTitleElement6s_infoE": __ZN7WebCore17JSSVGTitleElement6s_infoE, "__ZN7WebCore8SVGNames8styleTagE": __ZN7WebCore8SVGNames8styleTagE, "__ZN7WebCore13JSSVGAElement6s_infoE": __ZN7WebCore13JSSVGAElement6s_infoE, "__ZN7WebCore8SVGNames7trefTagE": __ZN7WebCore8SVGNames7trefTagE, "__ZN7WebCore8SVGNames8hkernTagE": __ZN7WebCore8SVGNames8hkernTagE, "__ZN7WebCore20JSSVGAltGlyphElement6s_infoE": __ZN7WebCore20JSSVGAltGlyphElement6s_infoE, "__ZN7WebCore8SVGNames9filterTagE": __ZN7WebCore8SVGNames9filterTagE, "__ZN7WebCore8SVGNames7rectTagE": __ZN7WebCore8SVGNames7rectTagE, "__ZN7WebCore8SVGNames7stopTagE": __ZN7WebCore8SVGNames7stopTagE, "__ZN7WebCore8SVGNames11textPathTagE": __ZN7WebCore8SVGNames11textPathTagE, "__ZN7WebCore8SVGNames16animateMotionTagE": __ZN7WebCore8SVGNames16animateMotionTagE, "__ZN7WebCore8SVGNames15altGlyphItemTagE": __ZN7WebCore8SVGNames15altGlyphItemTagE, "__ZN7WebCore24JSSVGFEMorphologyElement6s_infoE": __ZN7WebCore24JSSVGFEMorphologyElement6s_infoE, "__ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE": __ZN7WebCore26JSSVGFEGaussianBlurElement6s_infoE, "__ZN7WebCore19JSSVGFEFuncRElement6s_infoE": __ZN7WebCore19JSSVGFEFuncRElement6s_infoE, "__ZN7WebCore8SVGNames11feOffsetTagE": __ZN7WebCore8SVGNames11feOffsetTagE, "__ZN7WebCore16JSSVGDefsElement6s_infoE": __ZN7WebCore16JSSVGDefsElement6s_infoE, "__ZN7WebCore8SVGNames10polygonTagE": __ZN7WebCore8SVGNames10polygonTagE, "__ZN7WebCore8SVGNames11clipPathTagE": __ZN7WebCore8SVGNames11clipPathTagE, "__ZN7WebCore8SVGNames9symbolTagE": __ZN7WebCore8SVGNames9symbolTagE, "__ZN7WebCore8SVGNames10ellipseTagE": __ZN7WebCore8SVGNames10ellipseTagE, "__ZN7WebCore8SVGNames8imageTagE": __ZN7WebCore8SVGNames8imageTagE, "__ZN7WebCore8SVGNames10feImageTagE": __ZN7WebCore8SVGNames10feImageTagE, "__ZN7WebCore16JSSVGPathElement6s_infoE": __ZN7WebCore16JSSVGPathElement6s_infoE, "__ZN7WebCore20JSSVGClipPathElement6s_infoE": __ZN7WebCore20JSSVGClipPathElement6s_infoE, "__ZN7WebCore19JSSVGFEFuncAElement6s_infoE": __ZN7WebCore19JSSVGFEFuncAElement6s_infoE, "__ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE": __ZN7WebCore29JSSVGFEDiffuseLightingElement6s_infoE, "__ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE": __ZN7WebCore23JSSVGFEMergeNodeElement6s_infoE, "__ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE": __ZN7WebCore29JSSVGFEDisplacementMapElement6s_infoE, "__ZN7WebCore8SVGNames12font_faceTagE": __ZN7WebCore8SVGNames12font_faceTagE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore18JSSVGMarkerElement6s_infoE": __ZN7WebCore18JSSVGMarkerElement6s_infoE, "__ZN7WebCore8SVGNames10feFuncATagE": __ZN7WebCore8SVGNames10feFuncATagE, "__ZN7WebCore19JSSVGFEMergeElement6s_infoE": __ZN7WebCore19JSSVGFEMergeElement6s_infoE, "__ZN7WebCore8SVGNames7viewTagE": __ZN7WebCore8SVGNames7viewTagE, "__ZN7WebCore19JSSVGFEBlendElement6s_infoE": __ZN7WebCore19JSSVGFEBlendElement6s_infoE, "__ZN7WebCore23JSSVGFontFaceUriElement6s_infoE": __ZN7WebCore23JSSVGFontFaceUriElement6s_infoE, "__ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE": __ZN7WebCore24JSSVGAltGlyphItemElement6s_infoE, "__ZN7WebCore28JSSVGAnimateTransformElement6s_infoE": __ZN7WebCore28JSSVGAnimateTransformElement6s_infoE, "__ZN7WebCore16JSSVGTRefElement6s_infoE": __ZN7WebCore16JSSVGTRefElement6s_infoE, "__ZN7WebCore26JSSVGLinearGradientElement6s_infoE": __ZN7WebCore26JSSVGLinearGradientElement6s_infoE, "__ZN7WebCore8SVGNames4aTagE": __ZN7WebCore8SVGNames4aTagE, "__ZN7WebCore16JSSVGLineElement6s_infoE": __ZN7WebCore16JSSVGLineElement6s_infoE, "__ZN7WebCore20JSSVGFEOffsetElement6s_infoE": __ZN7WebCore20JSSVGFEOffsetElement6s_infoE, "__ZN7WebCore18JSSVGScriptElement6s_infoE": __ZN7WebCore18JSSVGScriptElement6s_infoE, "__ZN7WebCore16JSSVGViewElement6s_infoE": __ZN7WebCore16JSSVGViewElement6s_infoE, "__ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE": __ZN7WebCore31JSSVGFEComponentTransferElement6s_infoE, "__ZN7WebCore8SVGNames16font_face_uriTagE": __ZN7WebCore8SVGNames16font_face_uriTagE, "__ZN7WebCore8SVGNames15feMorphologyTagE": __ZN7WebCore8SVGNames15feMorphologyTagE, "__ZN7WebCore8SVGNames8vkernTagE": __ZN7WebCore8SVGNames8vkernTagE, "__ZN7WebCore8SVGNames10feFuncBTagE": __ZN7WebCore8SVGNames10feFuncBTagE, "__ZTVN7WebCore11JSNodeOwnerE": __ZTVN7WebCore11JSNodeOwnerE, "__ZN7WebCore8SVGNames7lineTagE": __ZN7WebCore8SVGNames7lineTagE, "__ZN7WebCore8SVGNames7textTagE": __ZN7WebCore8SVGNames7textTagE, "__ZN7WebCore23JSSVGFECompositeElement6s_infoE": __ZN7WebCore23JSSVGFECompositeElement6s_infoE, "__ZN7WebCore19JSSVGPolygonElement6s_infoE": __ZN7WebCore19JSSVGPolygonElement6s_infoE, "__ZN7WebCore8SVGNames19animateTransformTagE": __ZN7WebCore8SVGNames19animateTransformTagE, "__ZN7WebCore8SVGNames10feFuncGTagE": __ZN7WebCore8SVGNames10feFuncGTagE, "__ZN7WebCore17JSSVGMPathElement6s_infoE": __ZN7WebCore17JSSVGMPathElement6s_infoE, "__ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE": __ZN7WebCore23JSSVGFontFaceSrcElement6s_infoE, "__ZN7WebCore8SVGNames20feDisplacementMapTagE": __ZN7WebCore8SVGNames20feDisplacementMapTagE, "__ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE": __ZN7WebCore30JSSVGFESpecularLightingElement6s_infoE, "__ZN7WebCore20JSSVGGlyphRefElement6s_infoE": __ZN7WebCore20JSSVGGlyphRefElement6s_infoE, "__ZN7WebCore8SVGNames15animateColorTagE": __ZN7WebCore8SVGNames15animateColorTagE, "__ZN7WebCore16JSSVGRectElement6s_infoE": __ZN7WebCore16JSSVGRectElement6s_infoE, "__ZN7WebCore8SVGNames17font_face_nameTagE": __ZN7WebCore8SVGNames17font_face_nameTagE, "__ZN7WebCore15JSSVGUseElement6s_infoE": __ZN7WebCore15JSSVGUseElement6s_infoE, "__ZN7WebCore26JSSVGRadialGradientElement6s_infoE": __ZN7WebCore26JSSVGRadialGradientElement6s_infoE, "__ZN7WebCore17JSSVGImageElement6s_infoE": __ZN7WebCore17JSSVGImageElement6s_infoE, "__ZN7WebCore26JSSVGFEDistantLightElement6s_infoE": __ZN7WebCore26JSSVGFEDistantLightElement6s_infoE, "__ZN7WebCore8SVGNames22feComponentTransferTagE": __ZN7WebCore8SVGNames22feComponentTransferTagE, "__ZN7WebCore16JSSVGMaskElement6s_infoE": __ZN7WebCore16JSSVGMaskElement6s_infoE, "__ZN7WebCore8SVGNames9switchTagE": __ZN7WebCore8SVGNames9switchTagE, "__ZN7WebCore19JSSVGFEImageElement6s_infoE": __ZN7WebCore19JSSVGFEImageElement6s_infoE, "__ZN7WebCore20JSSVGTextPathElement6s_infoE": __ZN7WebCore20JSSVGTextPathElement6s_infoE, "__ZN7WebCore8SVGNames14feMergeNodeTagE": __ZN7WebCore8SVGNames14feMergeNodeTagE, "__ZN7WebCore20JSSVGFontFaceElement6s_infoE": __ZN7WebCore20JSSVGFontFaceElement6s_infoE, "__ZN7WebCore8SVGNames16feColorMatrixTagE": __ZN7WebCore8SVGNames16feColorMatrixTagE, "__ZN7WebCore16JSSVGFontElement6s_infoE": __ZN7WebCore16JSSVGFontElement6s_infoE, "__ZN7WebCore18JSSVGSymbolElement6s_infoE": __ZN7WebCore18JSSVGSymbolElement6s_infoE, "__ZN7WebCore8SVGNames10feMergeTagE": __ZN7WebCore8SVGNames10feMergeTagE, "__ZN7WebCore8SVGNames17linearGradientTagE": __ZN7WebCore8SVGNames17linearGradientTagE, "__ZN7WebCore8SVGNames8titleTagE": __ZN7WebCore8SVGNames8titleTagE, "__ZN7WebCore8SVGNames14feSpotLightTagE": __ZN7WebCore8SVGNames14feSpotLightTagE, "__ZN7WebCore24JSSVGFETurbulenceElement6s_infoE": __ZN7WebCore24JSSVGFETurbulenceElement6s_infoE, "__ZN7WebCore18JSSVGSwitchElement6s_infoE": __ZN7WebCore18JSSVGSwitchElement6s_infoE, "__ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE": __ZN7WebCore28JSSVGFEConvolveMatrixElement6s_infoE, "__ZN7WebCore18JSSVGFilterElement6s_infoE": __ZN7WebCore18JSSVGFilterElement6s_infoE, "__ZN7WebCore19JSSVGFEFuncGElement6s_infoE": __ZN7WebCore19JSSVGFEFuncGElement6s_infoE, "__ZN7WebCore18JSSVGCircleElement6s_infoE": __ZN7WebCore18JSSVGCircleElement6s_infoE, "__ZN7WebCore8SVGNames19feConvolveMatrixTagE": __ZN7WebCore8SVGNames19feConvolveMatrixTagE, "__ZN7WebCore8SVGNames9cursorTagE": __ZN7WebCore8SVGNames9cursorTagE, "__ZN7WebCore8SVGNames15feDropShadowTagE": __ZN7WebCore8SVGNames15feDropShadowTagE, "__ZN7WebCore17JSSVGTSpanElement6s_infoE": __ZN7WebCore17JSSVGTSpanElement6s_infoE, "__ZN7WebCore23JSSVGFESpotLightElement6s_infoE": __ZN7WebCore23JSSVGFESpotLightElement6s_infoE, "__ZN7WebCore16JSSVGTextElement6s_infoE": __ZN7WebCore16JSSVGTextElement6s_infoE, "__ZN7WebCore8SVGNames14altGlyphDefTagE": __ZN7WebCore8SVGNames14altGlyphDefTagE, "__ZN7WebCore8SVGNames8mpathTagE": __ZN7WebCore8SVGNames8mpathTagE, "__ZN7WebCore8SVGNames10feFuncRTagE": __ZN7WebCore8SVGNames10feFuncRTagE, "__ZN7WebCore8SVGNames7maskTagE": __ZN7WebCore8SVGNames7maskTagE, "__ZN7WebCore8SVGNames9markerTagE": __ZN7WebCore8SVGNames9markerTagE, "__ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE": __ZN7WebCore26JSSVGFontFaceFormatElement6s_infoE, "__ZN7WebCore8SVGNames8glyphTagE": __ZN7WebCore8SVGNames8glyphTagE, "__ZN7WebCore24JSSVGFontFaceNameElement6s_infoE": __ZN7WebCore24JSSVGFontFaceNameElement6s_infoE, "__ZN7WebCore8SVGNames17radialGradientTagE": __ZN7WebCore8SVGNames17radialGradientTagE, "__ZN7WebCore8SVGNames10feBlendTagE": __ZN7WebCore8SVGNames10feBlendTagE, "__ZN7WebCore13JSSVGGElement6s_infoE": __ZN7WebCore13JSSVGGElement6s_infoE, "__ZN7WebCore19JSSVGAnimateElement6s_infoE": __ZN7WebCore19JSSVGAnimateElement6s_infoE, "__ZN7WebCore17JSSVGHKernElement6s_infoE": __ZN7WebCore17JSSVGHKernElement6s_infoE, "__ZN7WebCore8SVGNames6useTagE": __ZN7WebCore8SVGNames6useTagE, "__ZN7WebCore8SVGNames17feGaussianBlurTagE": __ZN7WebCore8SVGNames17feGaussianBlurTagE, "__ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE": __ZN7WebCore23JSSVGAltGlyphDefElement6s_infoE, "__ZN7WebCore8SVGNames11metadataTagE": __ZN7WebCore8SVGNames11metadataTagE, "__ZN7WebCore8SVGNames19font_face_formatTagE": __ZN7WebCore8SVGNames19font_face_formatTagE, "__ZN7WebCore19JSSVGPatternElement6s_infoE": __ZN7WebCore19JSSVGPatternElement6s_infoE, "__ZN7WebCore17JSSVGStyleElement6s_infoE": __ZN7WebCore17JSSVGStyleElement6s_infoE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL30createSVGFEFloodElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_13SVGUseElementENS_15JSSVGUseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore23JSSVGFECompositeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFECompositeElementEEE","__ZN7WebCoreL39createSVGAnimateTransformElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore26JSSVGFEGaussianBlurElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEGaussianBlurElementEEE","__ZN7WebCore15getDOMStructureINS_26JSSVGLinearGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore16JSSVGLineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGLineElementEEE","__ZN7WebCoreL28createSVGGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_21SVGFEMergeNodeElementENS_23JSSVGFEMergeNodeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore23JSSVGFontFaceSrcElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceSrcElementEEE","__ZN7WebCore15getDOMStructureINS_20JSSVGGlyphRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL26createSVGSVGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore20JSSVGPolylineElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGPolylineElementEEE","__ZN7WebCore12cacheWrapperINS_26SVGFEConvolveMatrixElementENS_28JSSVGFEConvolveMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","_memcpy","__ZN7WebCoreL37createSVGFEGaussianBlurElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL31createSVGMetadataElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGPathElementENS_16JSSVGPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore26JSSVGFontFaceFormatElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFontFaceFormatElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGFontElementENS_16JSSVGFontElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_15SVGMPathElementENS_17JSSVGMPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL37createSVGLinearGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore20JSSVGFontFaceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFontFaceElementEEE","__ZN7WebCore15getDOMStructureINS_17JSSVGImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceSrcElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_14SVGMaskElementENS_16JSSVGMaskElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSSVGImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGImageElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGFEFuncRElementENS_19JSSVGFEFuncRElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSSVGFontElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_15JSSVGUseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_22SVGAltGlyphItemElementENS_24JSSVGAltGlyphItemElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL30createSVGFEFuncGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL35createSVGAltGlyphItemElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_21SVGFontFaceSrcElementENS_23JSSVGFontFaceSrcElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSSVGDescElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E3addINS_17HashMapTranslatorISR_SL_EES2_RKSG_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SH_SJ_SL_SR_SO_EEEEOT0_OT1_","__ZN7WebCore15getDOMStructureINS_19JSSVGAnimateElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_15SVGGlyphElementENS_17JSSVGGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore20JSSVGFEOffsetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGFEOffsetElementEEE","__ZN7WebCore15getDOMStructureINS_23JSSVGFECompositeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_17SVGPatternElementENS_19JSSVGPatternElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL30createSVGAnimateElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_25JSSVGForeignObjectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_22SVGFEPointLightElementENS_24JSSVGFEPointLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSSVGStopElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGStopElementEEE","__ZN7WebCore15getDOMStructureINS_25JSSVGAnimateMotionElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore28JSSVGFEConvolveMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGFEConvolveMatrixElementEEE","__ZN7WebCore15getDOMStructureINS_20JSSVGTextPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_22SVGFontFaceNameElementENS_24JSSVGFontFaceNameElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore23JSSVGFontFaceUriElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFontFaceUriElementEEE","__ZN7WebCore31JSSVGFEComponentTransferElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGFEComponentTransferElementEEE","__ZN7WebCore24JSSVGAltGlyphItemElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAltGlyphItemElementEEE","__ZN7WebCore15getDOMStructureINS_18JSSVGCircleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore19JSSVGFEFloodElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFloodElementEEE","__ZN7WebCore15getDOMStructureINS_24JSSVGAnimateColorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore26JSSVGFEDistantLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGFEDistantLightElementEEE","__ZN7WebCore15getDOMStructureINS_19JSSVGPolygonElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_28JSSVGAnimateTransformElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore29JSSVGFEDisplacementMapElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDisplacementMapElementEEE","__ZN7WebCore15getDOMStructureINS_16JSSVGTextElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_16JSSVGLineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL34createSVGFECompositeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore19JSSVGAnimateElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGAnimateElementEEE","__ZN7WebCore12cacheWrapperINS_15SVGVKernElementENS_17JSSVGVKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_24JSSVGMissingGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_26SVGAnimateTransformElementENS_28JSSVGAnimateTransformElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_22SVGFEMorphologyElementENS_24JSSVGFEMorphologyElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createSVGVKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_17JSSVGStyleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore23JSSVGFEMergeNodeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFEMergeNodeElementEEE","__ZN7WebCore12cacheWrapperINS_21SVGAltGlyphDefElementENS_23JSSVGAltGlyphDefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createSVGMarkerElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_23SVGFEColorMatrixElementENS_25JSSVGFEColorMatrixElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore12cacheWrapperINS_17SVGFEFuncAElementENS_19JSSVGFEFuncAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_12JSSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSSVGCursorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCursorElementEEE","__ZN7WebCore17JSSVGTSpanElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTSpanElementEEE","__ZN7WebCore12cacheWrapperINS_18SVGMetadataElementENS_20JSSVGMetadataElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL30createSVGFEImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore20JSSVGClipPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGClipPathElementEEE","__ZN7WebCoreL31createSVGPolylineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore17JSSVGTitleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGTitleElementEEE","__ZN7WebCore12cacheWrapperINS_15SVGStyleElementENS_17JSSVGStyleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSSVGViewElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSSVGPatternElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_18SVGPolylineElementENS_20JSSVGPolylineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSSVGStopElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore24JSSVGFEPointLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEPointLightElementEEE","__ZN7WebCore24JSSVGAnimateColorElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGAnimateColorElementEEE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFPN7WebCore12JSDOMWrapperEPN3JSC9ExecStateEPNS4_17JSDOMGlobalObjectENS_10PassRefPtrINS4_10SVGElementEEEEEENS_24KeyValuePairKeyExtractorISH_EENS_7PtrHashIS2_EENS_7HashMapIS2_SG_SL_NS_10HashTraitsIS2_EENSN_ISG_EEE18KeyValuePairTraitsESO_E6expandEPSH_","__ZN7WebCore12cacheWrapperINS_24SVGFEDistantLightElementENS_26JSSVGFEDistantLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore23JSSVGFESpotLightElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGFESpotLightElementEEE","__ZN7WebCore15JSSVGSetElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSetElementEEE","__ZN7WebCoreL30createSVGEllipseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore17JSSVGGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGGlyphElementEEE","__ZN7WebCore15getDOMStructureINS_18JSSVGSymbolElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createSVGCursorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL28createSVGStyleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL30createSVGFEMergeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGDescElementENS_16JSSVGDescElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL36createSVGAnimateMotionElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL27createSVGFontElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL28createSVGHKernElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_24SVGLinearGradientElementENS_26JSSVGLinearGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_20JSSVGClipPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore16JSSVGTRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTRefElementEEE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore13JSSVGGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGGElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGStopElementENS_16JSSVGStopElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGMarkerElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16SVGScriptElementENS_18JSSVGScriptElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore13JSSVGAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11SVGAElementEEE","__ZN7WebCoreL39createSVGFEConvolveMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_27SVGFEDiffuseLightingElementENS_29JSSVGFEDiffuseLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_19JSSVGEllipseElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore20JSSVGAltGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGAltGlyphElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGRectElementENS_16JSSVGRectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_21SVGFESpotLightElementENS_23JSSVGFESpotLightElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_15JSSVGSetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL28createSVGTitleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGCircleElementENS_18JSSVGCircleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL35createSVGFontFaceNameElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_16JSSVGRectElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_24JSSVGFETurbulenceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_20JSSVGFEOffsetElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createSVGFETileElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_20JSSVGPolylineElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_23SVGAnimateMotionElementENS_25JSSVGAnimateMotionElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_31JSSVGFEComponentTransferElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_29SVGFEComponentTransferElementENS_31JSSVGFEComponentTransferElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore20JSSVGTextPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGTextPathElementEEE","__ZN7WebCore19JSSVGPatternElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPatternElementEEE","__ZN7WebCore15getDOMStructureINS_28JSSVGFEConvolveMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_26JSSVGRadialGradientElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL34createSVGFESpotLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_26JSSVGFontFaceFormatElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_26JSSVGFEDistantLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL35createSVGFEDropShadowElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_18SVGTextPathElementENS_20JSSVGTextPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_23JSSVGFEMergeNodeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_15JSSVGSVGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_16JSSVGPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL37createSVGFEDistantLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncRElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_22SVGFEDropShadowElementENS_24JSSVGFEDropShadowElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSSVGFEImageElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEImageElementEEE","__ZN7WebCore12cacheWrapperINS_24SVGRadialGradientElementENS_26JSSVGRadialGradientElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncBElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL27createSVGTextElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL37createSVGRadialGradientElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore24JSSVGFETurbulenceElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFETurbulenceElementEEE","__ZN7WebCore16JSSVGPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGPathElementEEE","__ZN7WebCoreL31createSVGTextPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_24JSSVGFontFaceNameElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL29createSVGFilterElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL34createSVGFEMergeNodeElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGDefsElementENS_16JSSVGDefsElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSSVGStyleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGStyleElementEEE","__ZN7WebCore15getDOMStructureINS_18JSSVGCursorElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL36createSVGForeignObjectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGTRefElementENS_16JSSVGTRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_16JSSVGTRefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL27createSVGTRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore19JSSVGEllipseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGEllipseElementEEE","__ZN7WebCoreL31createSVGGlyphRefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore18JSSVGSwitchElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSwitchElementEEE","__ZN7WebCore12cacheWrapperINS_24SVGFEGaussianBlurElementENS_26JSSVGFEGaussianBlurElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGFETileElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_15SVGHKernElementENS_17JSSVGHKernElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore25JSSVGAnimateMotionElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGAnimateMotionElementEEE","__ZN7WebCoreL35createSVGAnimateColorElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL35createSVGFEPointLightElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore18JSSVGFilterElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFilterElementEEE","__ZN7WebCore24JSSVGFontFaceNameElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFontFaceNameElementEEE","__ZN7WebCoreL40createSVGFEDiffuseLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL30createSVGFEFuncAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL27createSVGStopElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_13JSSVGAElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_24JSSVGFEDropShadowElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSSVGFETileElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGFETileElementEEE","__ZN7WebCoreL21populateSVGWrapperMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFPNS_12JSDOMWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectENS0_10PassRefPtrINS_10SVGElementEEEENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSI_ISF_EEEE","__ZN7WebCoreL30createSVGPolygonElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_29JSSVGFEDiffuseLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore19JSSVGFEBlendElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEBlendElementEEE","__ZN7WebCore15getDOMStructureINS_20JSSVGFontFaceElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","_memset","__ZN7WebCore12cacheWrapperINS_13SVGSVGElementENS_15JSSVGSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore24JSSVGFEDropShadowElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEDropShadowElementEEE","__ZN7WebCoreL27createSVGMaskElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore19JSSVGFEMergeElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEMergeElementEEE","__ZN7WebCoreL31createSVGFontFaceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_20JSSVGAltGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_18SVGGlyphRefElementENS_20JSSVGGlyphRefElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15JSSVGUseElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGUseElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGFEMergeElementENS_19JSSVGFEMergeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL34createSVGFontFaceSrcElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore16JSSVGTextElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGTextElementEEE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEMergeElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_20JSSVGMetadataElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_18SVGFontFaceElementENS_20JSSVGFontFaceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_11SVGGElementENS_13JSSVGGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL41createSVGFESpecularLightingElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGSwitchElementENS_18JSSVGSwitchElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore19JSSVGFEFuncGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncGElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGFEFloodElementENS_19JSSVGFEFloodElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_17JSSVGVKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore26JSSVGRadialGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGRadialGradientElementEEE","__ZN7WebCore12cacheWrapperINS_21SVGFontFaceUriElementENS_23JSSVGFontFaceUriElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL35createSVGFETurbulenceElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_21SVGFECompositeElementENS_23JSSVGFECompositeElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL36createSVGFEColorMatrixElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore18JSSVGSymbolElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGSymbolElementEEE","__ZN7WebCore12cacheWrapperINS_14SVGViewElementENS_16JSSVGViewElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSSVGViewElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGViewElementEEE","__ZN7WebCore15getDOMStructureINS_16JSSVGMaskElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore19JSSVGPolygonElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGPolygonElementEEE","__ZN7WebCore12cacheWrapperINS_15SVGImageElementENS_17JSSVGImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore24JSSVGMissingGlyphElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGMissingGlyphElementEEE","__ZN7WebCore30JSSVGFESpecularLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_28SVGFESpecularLightingElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGCursorElementENS_18JSSVGCursorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore12cacheWrapperINS_17SVGFEImageElementENS_19JSSVGFEImageElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSSVGFontElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGFontElementEEE","__ZN7WebCore12cacheWrapperINS_15SVGTSpanElementENS_17JSSVGTSpanElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL35createSVGFEMorphologyElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore16JSSVGMaskElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGMaskElementEEE","__ZN7WebCore15getDOMStructureINS_25JSSVGFEColorMatrixElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_17SVGFEFuncGElementENS_19JSSVGFEFuncGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL27createSVGRectElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore18JSSVGScriptElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGScriptElementEEE","__ZN7WebCore12cacheWrapperINS_22SVGAnimateColorElementENS_24JSSVGAnimateColorElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGFilterElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","_strlen","__ZN7WebCoreL27createSVGPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_23JSSVGAltGlyphDefElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL30createSVGFEFuncRElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEBlendElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEImageElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_14SVGTextElementENS_16JSSVGTextElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL27createSVGViewElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore19JSSVGFEFuncRElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncRElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGEllipseElementENS_19JSSVGEllipseElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_26JSSVGFEGaussianBlurElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSSVGCircleElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGCircleElementEEE","__ZN7WebCoreL30createSVGFEFuncBElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_17JSSVGTitleElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore17JSSVGHKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGHKernElementEEE","__ZN7WebCoreL24createSVGAElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL37createSVGFontFaceFormatElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore24JSSVGFEMorphologyElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_22SVGFEMorphologyElementEEE","__ZN7WebCore15getDOMStructureINS_23JSSVGFESpotLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_29JSSVGFEDisplacementMapElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore29JSSVGFEDiffuseLightingElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGFEDiffuseLightingElementEEE","__ZN7WebCore12cacheWrapperINS_22SVGMissingGlyphElementENS_24JSSVGMissingGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL27createSVGDescElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_17JSSVGHKernElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore20JSSVGMetadataElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGMetadataElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGFEBlendElementENS_19JSSVGFEBlendElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_23JSSVGFontFaceUriElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_19JSSVGFEFloodElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore16JSSVGDescElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDescElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGFEFuncBElementENS_19JSSVGFEFuncBElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSSVGRectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGRectElementEEE","__ZN7WebCore15JSSVGSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_13SVGSVGElementEEE","__ZN7WebCoreL30createSVGFEBlendElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore23JSSVGAltGlyphDefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21SVGAltGlyphDefElementEEE","__ZN7WebCore12JSSVGElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL35createSVGMissingGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore17JSSVGMPathElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGMPathElementEEE","__ZN7WebCore12cacheWrapperINS_23SVGForeignObjectElementENS_25JSSVGForeignObjectElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore25JSSVGFEColorMatrixElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGFEColorMatrixElementEEE","__ZN7WebCoreL30createSVGPatternElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_24JSSVGFEPointLightElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL42createSVGFEComponentTransferElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore25JSSVGForeignObjectElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_23SVGForeignObjectElementEEE","__ZN7WebCoreL26createSVGUseElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_13JSSVGGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_16JSSVGDefsElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL28createSVGTSpanElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL28createSVGImageElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore28JSSVGAnimateTransformElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_26SVGAnimateTransformElementEEE","__ZN7WebCore20JSSVGGlyphRefElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_18SVGGlyphRefElementEEE","__ZN7WebCore12cacheWrapperINS_17SVGAnimateElementENS_19JSSVGAnimateElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore18createJSSVGWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_24JSSVGAltGlyphItemElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16SVGFETileElementENS_18JSSVGFETileElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_14SVGLineElementENS_16JSSVGLineElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_17SVGPolygonElementENS_19JSSVGPolygonElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL28createSVGMPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_17JSSVGMPathElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL34createSVGAltGlyphDefElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL26createSVGSetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGFilterElementENS_18JSSVGFilterElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGScriptElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_17JSSVGTSpanElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL31createSVGAltGlyphElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL27createSVGDefsElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGMarkerElementENS_18JSSVGMarkerElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_17JSSVGGlyphElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_18SVGAltGlyphElementENS_20JSSVGAltGlyphElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL31createSVGFEOffsetElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_13SVGSetElementENS_15JSSVGSetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore16JSSVGDefsElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_14SVGDefsElementEEE","__ZN7WebCoreL29createSVGScriptElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore26JSSVGLinearGradientElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24SVGLinearGradientElementEEE","__ZN7WebCore15getDOMStructureINS_24JSSVGFEMorphologyElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL34createSVGFontFaceUriElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL29createSVGSwitchElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCoreL31createSVGClipPathElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore18JSSVGMarkerElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGMarkerElementEEE","__ZN7WebCore19JSSVGFEFuncBElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncBElementEEE","__ZN7WebCore12cacheWrapperINS_10SVGElementENS_12JSSVGElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_18SVGFEOffsetElementENS_20JSSVGFEOffsetElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_18SVGClipPathElementENS_20JSSVGClipPathElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_19JSSVGFEFuncGElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL27createSVGLineElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_16SVGSymbolElementENS_18JSSVGSymbolElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSSVGVKernElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SVGVKernElementEEE","__ZN7WebCore12cacheWrapperINS_11SVGAElementENS_13JSSVGAElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_28SVGFESpecularLightingElementENS_30JSSVGFESpecularLightingElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createSVGCircleElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_24SVGFontFaceFormatElementENS_26JSSVGFontFaceFormatElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_30JSSVGFESpecularLightingElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore19JSSVGFEFuncAElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_17SVGFEFuncAElementEEE","__ZN7WebCore12cacheWrapperINS_15SVGTitleElementENS_17JSSVGTitleElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL40createSVGFEDisplacementMapElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_27SVGFEDisplacementMapElementENS_29JSSVGFEDisplacementMapElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCoreL29createSVGSymbolElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore15getDOMStructureINS_18JSSVGSwitchElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCoreL24createSVGGElementWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE","__ZN7WebCore12cacheWrapperINS_22SVGFETurbulenceElementENS_24JSSVGFETurbulenceElementEEEvRNS_15DOMWrapperWorldEPT_PT0_"]

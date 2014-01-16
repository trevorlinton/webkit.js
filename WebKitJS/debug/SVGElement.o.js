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
H_BASE = parentModule["_malloc"](1632 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1632;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10SVGElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
var __ZN7WebCore10SVGElementD1Ev;
/* memory initializer */ allocate([73,110,118,97,108,105,100,32,118,97,108,117,101,32,102,111,114,32,0,0,0,0,0,0,73,110,118,97,108,105,100,32,110,101,103,97,116,105,118,101,32,118,97,108,117,101,32,102,111,114,32,0,0,0,0,0,34,0,0,0,0,0,0,0,61,34,0,0,0,0,0,0,62,32,97,116,116,114,105,98,117,116,101,32,0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore8SVGNames20transform_originAttrE=env.__ZN7WebCore8SVGNames20transform_originAttrE|0;
  var __ZN7WebCore9HTMLNames16onmouseleaveAttrE=env.__ZN7WebCore9HTMLNames16onmouseleaveAttrE|0;
  var __ZN7WebCore8SVGNames14onfocusoutAttrE=env.__ZN7WebCore8SVGNames14onfocusoutAttrE|0;
  var __ZN7WebCore8SVGNames14visibilityAttrE=env.__ZN7WebCore8SVGNames14visibilityAttrE|0;
  var __ZN7WebCore8SVGNames21dominant_baselineAttrE=env.__ZN7WebCore8SVGNames21dominant_baselineAttrE|0;
  var __ZN7WebCore8SVGNames18stroke_linecapAttrE=env.__ZN7WebCore8SVGNames18stroke_linecapAttrE|0;
  var __ZN7WebCore9HTMLNames13onmouseupAttrE=env.__ZN7WebCore9HTMLNames13onmouseupAttrE|0;
  var __ZN7WebCore8SVGNames13clip_ruleAttrE=env.__ZN7WebCore8SVGNames13clip_ruleAttrE|0;
  var __ZN7WebCore8SVGNames19color_renderingAttrE=env.__ZN7WebCore8SVGNames19color_renderingAttrE|0;
  var __ZN7WebCore8SVGNames13onfocusinAttrE=env.__ZN7WebCore8SVGNames13onfocusinAttrE|0;
  var __ZN7WebCore8SVGNames11kerningAttrE=env.__ZN7WebCore8SVGNames11kerningAttrE|0;
  var __ZN7WebCore8SVGNames19shape_renderingAttrE=env.__ZN7WebCore8SVGNames19shape_renderingAttrE|0;
  var __ZN7WebCore8SVGNames18stroke_opacityAttrE=env.__ZN7WebCore8SVGNames18stroke_opacityAttrE|0;
  var __ZN7WebCore8SVGNames8tspanTagE=env.__ZN7WebCore8SVGNames8tspanTagE|0;
  var __ZN7WebCore8SVGNames13fill_ruleAttrE=env.__ZN7WebCore8SVGNames13fill_ruleAttrE|0;
  var __ZN7WebCore8SVGNames21stroke_miterlimitAttrE=env.__ZN7WebCore8SVGNames21stroke_miterlimitAttrE|0;
  var __ZN7WebCore8SVGNames16foreignObjectTagE=env.__ZN7WebCore8SVGNames16foreignObjectTagE|0;
  var __ZN7WebCore8SVGNames9colorAttrE=env.__ZN7WebCore8SVGNames9colorAttrE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore8SVGNames18baseline_shiftAttrE=env.__ZN7WebCore8SVGNames18baseline_shiftAttrE|0;
  var __ZN7WebCore8SVGNames11altGlyphTagE=env.__ZN7WebCore8SVGNames11altGlyphTagE|0;
  var __ZN7WebCore8SVGNames8fillAttrE=env.__ZN7WebCore8SVGNames8fillAttrE|0;
  var __ZN7WebCore8XMLNames8baseAttrE=env.__ZN7WebCore8XMLNames8baseAttrE|0;
  var __ZN7WebCore8SVGNames18text_renderingAttrE=env.__ZN7WebCore8SVGNames18text_renderingAttrE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames15onmousedownAttrE=env.__ZN7WebCore9HTMLNames15onmousedownAttrE|0;
  var __ZN7WebCore8SVGNames16unicode_bidiAttrE=env.__ZN7WebCore8SVGNames16unicode_bidiAttrE|0;
  var __ZN7WebCore8SVGNames12overflowAttrE=env.__ZN7WebCore8SVGNames12overflowAttrE|0;
  var __ZN7WebCore8SVGNames7trefTagE=env.__ZN7WebCore8SVGNames7trefTagE|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore8SVGNames15text_anchorAttrE=env.__ZN7WebCore8SVGNames15text_anchorAttrE|0;
  var __ZN7WebCore8SVGNames16marker_startAttrE=env.__ZN7WebCore8SVGNames16marker_startAttrE|0;
  var __ZN7WebCore8SVGNames16font_variantAttrE=env.__ZN7WebCore8SVGNames16font_variantAttrE|0;
  var __ZN7WebCore8SVGNames19text_decorationAttrE=env.__ZN7WebCore8SVGNames19text_decorationAttrE|0;
  var __ZN7WebCore8SVGNames11textPathTagE=env.__ZN7WebCore8SVGNames11textPathTagE|0;
  var __ZN7WebCore8SVGNames8clipAttrE=env.__ZN7WebCore8SVGNames8clipAttrE|0;
  var __ZN7WebCore8SVGNames14font_styleAttrE=env.__ZN7WebCore8SVGNames14font_styleAttrE|0;
  var __ZN7WebCore8SVGNames13clip_pathAttrE=env.__ZN7WebCore8SVGNames13clip_pathAttrE|0;
  var __ZN7WebCore8SVGNames11opacityAttrE=env.__ZN7WebCore8SVGNames11opacityAttrE|0;
  var __ZN7WebCore8SVGNames13font_sizeAttrE=env.__ZN7WebCore8SVGNames13font_sizeAttrE|0;
  var __ZN7WebCore8SVGNames14onactivateAttrE=env.__ZN7WebCore8SVGNames14onactivateAttrE|0;
  var __ZN7WebCore8SVGNames10cursorAttrE=env.__ZN7WebCore8SVGNames10cursorAttrE|0;
  var __ZN7WebCore8SVGNames9symbolTagE=env.__ZN7WebCore8SVGNames9symbolTagE|0;
  var __ZN7WebCore8SVGNames8maskAttrE=env.__ZN7WebCore8SVGNames8maskAttrE|0;
  var __ZN7WebCore8SVGNames17color_profileAttrE=env.__ZN7WebCore8SVGNames17color_profileAttrE|0;
  var __ZN7WebCore8SVGNames8imageTagE=env.__ZN7WebCore8SVGNames8imageTagE|0;
  var __ZN7WebCore8SVGNames16stroke_widthAttrE=env.__ZN7WebCore8SVGNames16stroke_widthAttrE|0;
  var __ZN7WebCore8SVGNames11displayAttrE=env.__ZN7WebCore8SVGNames11displayAttrE|0;
  var __ZN7WebCore8SVGNames19image_renderingAttrE=env.__ZN7WebCore8SVGNames19image_renderingAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var __ZN7WebCore8SVGNames22alignment_baselineAttrE=env.__ZN7WebCore8SVGNames22alignment_baselineAttrE|0;
  var __ZN7WebCore9HTMLNames15onmousemoveAttrE=env.__ZN7WebCore9HTMLNames15onmousemoveAttrE|0;
  var __ZN7WebCore8SVGNames15font_familyAttrE=env.__ZN7WebCore8SVGNames15font_familyAttrE|0;
  var __ZN7WebCore8SVGNames17flood_opacityAttrE=env.__ZN7WebCore8SVGNames17flood_opacityAttrE|0;
  var __ZN7WebCore8SVGNames10strokeAttrE=env.__ZN7WebCore8SVGNames10strokeAttrE|0;
  var __ZN7WebCore8SVGNames16word_spacingAttrE=env.__ZN7WebCore8SVGNames16word_spacingAttrE|0;
  var __ZN7WebCore8SVGNames13mask_typeAttrE=env.__ZN7WebCore8SVGNames13mask_typeAttrE|0;
  var __ZN7WebCore9HTMLNames11onclickAttrE=env.__ZN7WebCore9HTMLNames11onclickAttrE|0;
  var __ZN7WebCore9HTMLNames14onmouseoutAttrE=env.__ZN7WebCore9HTMLNames14onmouseoutAttrE|0;
  var __ZN7WebCore8SVGNames21enable_backgroundAttrE=env.__ZN7WebCore8SVGNames21enable_backgroundAttrE|0;
  var __ZN7WebCore8SVGNames14marker_endAttrE=env.__ZN7WebCore8SVGNames14marker_endAttrE|0;
  var __ZN7WebCore8SVGNames18pointer_eventsAttrE=env.__ZN7WebCore8SVGNames18pointer_eventsAttrE|0;
  var __ZN7WebCore8SVGNames30glyph_orientation_verticalAttrE=env.__ZN7WebCore8SVGNames30glyph_orientation_verticalAttrE|0;
  var __ZN7WebCore8SVGNames14marker_midAttrE=env.__ZN7WebCore8SVGNames14marker_midAttrE|0;
  var __ZN7WebCore8SVGNames16fill_opacityAttrE=env.__ZN7WebCore8SVGNames16fill_opacityAttrE|0;
  var __ZN7WebCore8SVGNames15font_weightAttrE=env.__ZN7WebCore8SVGNames15font_weightAttrE|0;
  var __ZN7WebCore9HTMLNames16onmouseenterAttrE=env.__ZN7WebCore9HTMLNames16onmouseenterAttrE|0;
  var __ZN7WebCore8SVGNames16writing_modeAttrE=env.__ZN7WebCore8SVGNames16writing_modeAttrE|0;
  var __ZN7WebCore8SVGNames20stroke_dasharrayAttrE=env.__ZN7WebCore8SVGNames20stroke_dasharrayAttrE|0;
  var __ZN7WebCore8SVGNames15flood_colorAttrE=env.__ZN7WebCore8SVGNames15flood_colorAttrE|0;
  var __ZN7WebCore9HTMLNames15onmouseoverAttrE=env.__ZN7WebCore9HTMLNames15onmouseoverAttrE|0;
  var __ZN7WebCore8SVGNames14stop_colorAttrE=env.__ZN7WebCore8SVGNames14stop_colorAttrE|0;
  var __ZN7WebCore8SVGNames18lighting_colorAttrE=env.__ZN7WebCore8SVGNames18lighting_colorAttrE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore8SVGNames21stroke_dashoffsetAttrE=env.__ZN7WebCore8SVGNames21stroke_dashoffsetAttrE|0;
  var __ZN7WebCore8SVGNames16stop_opacityAttrE=env.__ZN7WebCore8SVGNames16stop_opacityAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames32glyph_orientation_horizontalAttrE=env.__ZN7WebCore8SVGNames32glyph_orientation_horizontalAttrE|0;
  var __ZN7WebCore8SVGNames8titleTagE=env.__ZN7WebCore8SVGNames8titleTagE|0;
  var __ZN7WebCore8SVGNames31color_interpolation_filtersAttrE=env.__ZN7WebCore8SVGNames31color_interpolation_filtersAttrE|0;
  var __ZN7WebCore8SVGNames18letter_spacingAttrE=env.__ZN7WebCore8SVGNames18letter_spacingAttrE|0;
  var __ZN7WebCore8SVGNames22buffered_renderingAttrE=env.__ZN7WebCore8SVGNames22buffered_renderingAttrE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore8SVGNames19stroke_linejoinAttrE=env.__ZN7WebCore8SVGNames19stroke_linejoinAttrE|0;
  var __ZN7WebCore8SVGNames13directionAttrE=env.__ZN7WebCore8SVGNames13directionAttrE|0;
  var __ZN7WebCore8SVGNames23color_interpolationAttrE=env.__ZN7WebCore8SVGNames23color_interpolationAttrE|0;
  var __ZN7WebCore8SVGNames16font_stretchAttrE=env.__ZN7WebCore8SVGNames16font_stretchAttrE|0;
  var __ZN7WebCore8SVGNames10filterAttrE=env.__ZN7WebCore8SVGNames10filterAttrE|0;
  var __ZN7WebCore8SVGNames17vector_effectAttrE=env.__ZN7WebCore8SVGNames17vector_effectAttrE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore8SVGNames6useTagE=env.__ZN7WebCore8SVGNames6useTagE|0;
  var __ZN7WebCore9HTMLNames10onloadAttrE=env.__ZN7WebCore9HTMLNames10onloadAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+1584)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+1632)|0;
  var __ZTVN7WebCore10SVGElementE=(H_BASE+824)|0;
  var __ZTVN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEE=(H_BASE+792)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 104 >> 2] = __ZN7WebCore8SVGNames22alignment_baselineAttrE;
 HEAP32[H_BASE + 112 >> 2] = __ZN7WebCore8SVGNames18baseline_shiftAttrE;
 HEAP32[H_BASE + 120 >> 2] = __ZN7WebCore8SVGNames22buffered_renderingAttrE;
 HEAP32[H_BASE + 128 >> 2] = __ZN7WebCore8SVGNames8clipAttrE;
 HEAP32[H_BASE + 136 >> 2] = __ZN7WebCore8SVGNames13clip_pathAttrE;
 HEAP32[H_BASE + 144 >> 2] = __ZN7WebCore8SVGNames13clip_ruleAttrE;
 HEAP32[H_BASE + 152 >> 2] = __ZN7WebCore8SVGNames9colorAttrE;
 HEAP32[H_BASE + 160 >> 2] = __ZN7WebCore8SVGNames23color_interpolationAttrE;
 HEAP32[H_BASE + 168 >> 2] = __ZN7WebCore8SVGNames31color_interpolation_filtersAttrE;
 HEAP32[H_BASE + 176 >> 2] = __ZN7WebCore8SVGNames17color_profileAttrE;
 HEAP32[H_BASE + 184 >> 2] = __ZN7WebCore8SVGNames19color_renderingAttrE;
 HEAP32[H_BASE + 192 >> 2] = __ZN7WebCore8SVGNames10cursorAttrE;
 HEAP32[H_BASE + 200 >> 2] = __ZN7WebCore8SVGNames11displayAttrE;
 HEAP32[H_BASE + 208 >> 2] = __ZN7WebCore8SVGNames21dominant_baselineAttrE;
 HEAP32[H_BASE + 216 >> 2] = __ZN7WebCore8SVGNames8fillAttrE;
 HEAP32[H_BASE + 224 >> 2] = __ZN7WebCore8SVGNames16fill_opacityAttrE;
 HEAP32[H_BASE + 232 >> 2] = __ZN7WebCore8SVGNames13fill_ruleAttrE;
 HEAP32[H_BASE + 240 >> 2] = __ZN7WebCore8SVGNames10filterAttrE;
 HEAP32[H_BASE + 248 >> 2] = __ZN7WebCore8SVGNames15flood_colorAttrE;
 HEAP32[H_BASE + 256 >> 2] = __ZN7WebCore8SVGNames17flood_opacityAttrE;
 HEAP32[H_BASE + 264 >> 2] = __ZN7WebCore8SVGNames15font_familyAttrE;
 HEAP32[H_BASE + 272 >> 2] = __ZN7WebCore8SVGNames13font_sizeAttrE;
 HEAP32[H_BASE + 280 >> 2] = __ZN7WebCore8SVGNames16font_stretchAttrE;
 HEAP32[H_BASE + 288 >> 2] = __ZN7WebCore8SVGNames14font_styleAttrE;
 HEAP32[H_BASE + 296 >> 2] = __ZN7WebCore8SVGNames16font_variantAttrE;
 HEAP32[H_BASE + 304 >> 2] = __ZN7WebCore8SVGNames15font_weightAttrE;
 HEAP32[H_BASE + 312 >> 2] = __ZN7WebCore8SVGNames19image_renderingAttrE;
 HEAP32[H_BASE + 320 >> 2] = __ZN7WebCore8SVGNames11kerningAttrE;
 HEAP32[H_BASE + 328 >> 2] = __ZN7WebCore8SVGNames18letter_spacingAttrE;
 HEAP32[H_BASE + 336 >> 2] = __ZN7WebCore8SVGNames18lighting_colorAttrE;
 HEAP32[H_BASE + 344 >> 2] = __ZN7WebCore8SVGNames14marker_endAttrE;
 HEAP32[H_BASE + 352 >> 2] = __ZN7WebCore8SVGNames14marker_midAttrE;
 HEAP32[H_BASE + 360 >> 2] = __ZN7WebCore8SVGNames16marker_startAttrE;
 HEAP32[H_BASE + 368 >> 2] = __ZN7WebCore8SVGNames8maskAttrE;
 HEAP32[H_BASE + 376 >> 2] = __ZN7WebCore8SVGNames13mask_typeAttrE;
 HEAP32[H_BASE + 384 >> 2] = __ZN7WebCore8SVGNames11opacityAttrE;
 HEAP32[H_BASE + 392 >> 2] = __ZN7WebCore8SVGNames12overflowAttrE;
 HEAP32[H_BASE + 400 >> 2] = __ZN7WebCore8SVGNames18pointer_eventsAttrE;
 HEAP32[H_BASE + 408 >> 2] = __ZN7WebCore8SVGNames19shape_renderingAttrE;
 HEAP32[H_BASE + 416 >> 2] = __ZN7WebCore8SVGNames14stop_colorAttrE;
 HEAP32[H_BASE + 424 >> 2] = __ZN7WebCore8SVGNames16stop_opacityAttrE;
 HEAP32[H_BASE + 432 >> 2] = __ZN7WebCore8SVGNames10strokeAttrE;
 HEAP32[H_BASE + 440 >> 2] = __ZN7WebCore8SVGNames20stroke_dasharrayAttrE;
 HEAP32[H_BASE + 448 >> 2] = __ZN7WebCore8SVGNames21stroke_dashoffsetAttrE;
 HEAP32[H_BASE + 456 >> 2] = __ZN7WebCore8SVGNames18stroke_linecapAttrE;
 HEAP32[H_BASE + 464 >> 2] = __ZN7WebCore8SVGNames19stroke_linejoinAttrE;
 HEAP32[H_BASE + 472 >> 2] = __ZN7WebCore8SVGNames21stroke_miterlimitAttrE;
 HEAP32[H_BASE + 480 >> 2] = __ZN7WebCore8SVGNames18stroke_opacityAttrE;
 HEAP32[H_BASE + 488 >> 2] = __ZN7WebCore8SVGNames16stroke_widthAttrE;
 HEAP32[H_BASE + 496 >> 2] = __ZN7WebCore8SVGNames15text_anchorAttrE;
 HEAP32[H_BASE + 504 >> 2] = __ZN7WebCore8SVGNames19text_decorationAttrE;
 HEAP32[H_BASE + 512 >> 2] = __ZN7WebCore8SVGNames18text_renderingAttrE;
 HEAP32[H_BASE + 520 >> 2] = __ZN7WebCore8SVGNames17vector_effectAttrE;
 HEAP32[H_BASE + 528 >> 2] = __ZN7WebCore8SVGNames14visibilityAttrE;
 HEAP32[H_BASE + 536 >> 2] = __ZN7WebCore8SVGNames16word_spacingAttrE;
 HEAP32[H_BASE + 544 >> 2] = __ZN7WebCore8SVGNames22alignment_baselineAttrE;
 HEAP32[H_BASE + 548 >> 2] = __ZN7WebCore8SVGNames18baseline_shiftAttrE;
 HEAP32[H_BASE + 552 >> 2] = __ZN7WebCore8SVGNames22buffered_renderingAttrE;
 HEAP32[H_BASE + 556 >> 2] = __ZN7WebCore8SVGNames8clipAttrE;
 HEAP32[H_BASE + 560 >> 2] = __ZN7WebCore8SVGNames13clip_pathAttrE;
 HEAP32[H_BASE + 564 >> 2] = __ZN7WebCore8SVGNames13clip_ruleAttrE;
 HEAP32[H_BASE + 568 >> 2] = __ZN7WebCore8SVGNames9colorAttrE;
 HEAP32[H_BASE + 572 >> 2] = __ZN7WebCore8SVGNames23color_interpolationAttrE;
 HEAP32[H_BASE + 576 >> 2] = __ZN7WebCore8SVGNames31color_interpolation_filtersAttrE;
 HEAP32[H_BASE + 580 >> 2] = __ZN7WebCore8SVGNames17color_profileAttrE;
 HEAP32[H_BASE + 584 >> 2] = __ZN7WebCore8SVGNames19color_renderingAttrE;
 HEAP32[H_BASE + 588 >> 2] = __ZN7WebCore8SVGNames10cursorAttrE;
 HEAP32[H_BASE + 592 >> 2] = __ZN7WebCore8SVGNames13directionAttrE;
 HEAP32[H_BASE + 596 >> 2] = __ZN7WebCore8SVGNames11displayAttrE;
 HEAP32[H_BASE + 600 >> 2] = __ZN7WebCore8SVGNames21dominant_baselineAttrE;
 HEAP32[H_BASE + 604 >> 2] = __ZN7WebCore8SVGNames21enable_backgroundAttrE;
 HEAP32[H_BASE + 608 >> 2] = __ZN7WebCore8SVGNames8fillAttrE;
 HEAP32[H_BASE + 612 >> 2] = __ZN7WebCore8SVGNames16fill_opacityAttrE;
 HEAP32[H_BASE + 616 >> 2] = __ZN7WebCore8SVGNames13fill_ruleAttrE;
 HEAP32[H_BASE + 620 >> 2] = __ZN7WebCore8SVGNames10filterAttrE;
 HEAP32[H_BASE + 624 >> 2] = __ZN7WebCore8SVGNames15flood_colorAttrE;
 HEAP32[H_BASE + 628 >> 2] = __ZN7WebCore8SVGNames17flood_opacityAttrE;
 HEAP32[H_BASE + 632 >> 2] = __ZN7WebCore8SVGNames15font_familyAttrE;
 HEAP32[H_BASE + 636 >> 2] = __ZN7WebCore8SVGNames13font_sizeAttrE;
 HEAP32[H_BASE + 640 >> 2] = __ZN7WebCore8SVGNames16font_stretchAttrE;
 HEAP32[H_BASE + 644 >> 2] = __ZN7WebCore8SVGNames14font_styleAttrE;
 HEAP32[H_BASE + 648 >> 2] = __ZN7WebCore8SVGNames16font_variantAttrE;
 HEAP32[H_BASE + 652 >> 2] = __ZN7WebCore8SVGNames15font_weightAttrE;
 HEAP32[H_BASE + 656 >> 2] = __ZN7WebCore8SVGNames32glyph_orientation_horizontalAttrE;
 HEAP32[H_BASE + 660 >> 2] = __ZN7WebCore8SVGNames30glyph_orientation_verticalAttrE;
 HEAP32[H_BASE + 664 >> 2] = __ZN7WebCore8SVGNames19image_renderingAttrE;
 HEAP32[H_BASE + 668 >> 2] = __ZN7WebCore8SVGNames11kerningAttrE;
 HEAP32[H_BASE + 672 >> 2] = __ZN7WebCore8SVGNames18letter_spacingAttrE;
 HEAP32[H_BASE + 676 >> 2] = __ZN7WebCore8SVGNames18lighting_colorAttrE;
 HEAP32[H_BASE + 680 >> 2] = __ZN7WebCore8SVGNames14marker_endAttrE;
 HEAP32[H_BASE + 684 >> 2] = __ZN7WebCore8SVGNames14marker_midAttrE;
 HEAP32[H_BASE + 688 >> 2] = __ZN7WebCore8SVGNames16marker_startAttrE;
 HEAP32[H_BASE + 692 >> 2] = __ZN7WebCore8SVGNames8maskAttrE;
 HEAP32[H_BASE + 696 >> 2] = __ZN7WebCore8SVGNames13mask_typeAttrE;
 HEAP32[H_BASE + 700 >> 2] = __ZN7WebCore8SVGNames11opacityAttrE;
 HEAP32[H_BASE + 704 >> 2] = __ZN7WebCore8SVGNames12overflowAttrE;
 HEAP32[H_BASE + 708 >> 2] = __ZN7WebCore8SVGNames18pointer_eventsAttrE;
 HEAP32[H_BASE + 712 >> 2] = __ZN7WebCore8SVGNames19shape_renderingAttrE;
 HEAP32[H_BASE + 716 >> 2] = __ZN7WebCore8SVGNames14stop_colorAttrE;
 HEAP32[H_BASE + 720 >> 2] = __ZN7WebCore8SVGNames16stop_opacityAttrE;
 HEAP32[H_BASE + 724 >> 2] = __ZN7WebCore8SVGNames10strokeAttrE;
 HEAP32[H_BASE + 728 >> 2] = __ZN7WebCore8SVGNames20stroke_dasharrayAttrE;
 HEAP32[H_BASE + 732 >> 2] = __ZN7WebCore8SVGNames21stroke_dashoffsetAttrE;
 HEAP32[H_BASE + 736 >> 2] = __ZN7WebCore8SVGNames18stroke_linecapAttrE;
 HEAP32[H_BASE + 740 >> 2] = __ZN7WebCore8SVGNames19stroke_linejoinAttrE;
 HEAP32[H_BASE + 744 >> 2] = __ZN7WebCore8SVGNames21stroke_miterlimitAttrE;
 HEAP32[H_BASE + 748 >> 2] = __ZN7WebCore8SVGNames18stroke_opacityAttrE;
 HEAP32[H_BASE + 752 >> 2] = __ZN7WebCore8SVGNames16stroke_widthAttrE;
 HEAP32[H_BASE + 756 >> 2] = __ZN7WebCore8SVGNames15text_anchorAttrE;
 HEAP32[H_BASE + 760 >> 2] = __ZN7WebCore8SVGNames19text_decorationAttrE;
 HEAP32[H_BASE + 764 >> 2] = __ZN7WebCore8SVGNames18text_renderingAttrE;
 HEAP32[H_BASE + 768 >> 2] = __ZN7WebCore8SVGNames16unicode_bidiAttrE;
 HEAP32[H_BASE + 772 >> 2] = __ZN7WebCore8SVGNames17vector_effectAttrE;
 HEAP32[H_BASE + 776 >> 2] = __ZN7WebCore8SVGNames14visibilityAttrE;
 HEAP32[H_BASE + 780 >> 2] = __ZN7WebCore8SVGNames16word_spacingAttrE;
 HEAP32[H_BASE + 784 >> 2] = __ZN7WebCore8SVGNames16writing_modeAttrE;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 1484 >> 2] = F_BASE_ii + 162;
}
function __ZN7WebCore10SVGElement27reportAttributeParsingErrorENS_15SVGParsingErrorERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 72 | 0;
 i13 = i5 + 96 | 0;
 i14 = i5 + 120 | 0;
 i15 = i5 + 128 | 0;
 i16 = i5 + 136 | 0;
 i17 = i5 + 144 | 0;
 i18 = i5 + 152 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 127](i14, i1 | 0);
 i19 = i14 | 0;
 i14 = HEAP32[i19 >> 2] | 0;
 if ((i14 | 0) == 0) {
  __ZNK7WebCore13QualifiedName8toStringEv(i15, i3);
  i20 = 0;
  i21 = 1;
 } else {
  i22 = i14 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i23 + 2 | 0;
  HEAP32[i22 >> 2] = i23 + 4;
  if ((i24 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i14);
   i25 = HEAP32[i22 >> 2] | 0;
  } else {
   HEAP32[i22 >> 2] = i24;
   i25 = i24;
  }
  i24 = i25 + 2 | 0;
  HEAP32[i22 >> 2] = i25 + 4;
  if ((i24 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i14);
   __ZNK7WebCore13QualifiedName8toStringEv(i15, i3);
  } else {
   HEAP32[i22 >> 2] = i24;
   __ZNK7WebCore13QualifiedName8toStringEv(i15, i3);
  }
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
  i20 = i14;
  i21 = 0;
 }
 i14 = i15 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i22 = (i15 | 0) == 0;
 if (!i22) {
  i3 = i15 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 if (!i21) {
  i3 = i20 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 do {
  if (!i22) {
   i3 = i15 | 0;
   i24 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i24 + 2;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i24;
    break;
   }
  }
 } while (0);
 if (!i21) {
  i24 = i20 | 0;
  i3 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i20);
   i26 = HEAP32[i24 >> 2] | 0;
  } else {
   HEAP32[i24 >> 2] = i3;
   i26 = i3;
  }
  HEAP32[i24 >> 2] = i26 + 2;
 }
 if (!i22) {
  i26 = i15 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 HEAP32[i13 >> 2] = H_BASE + 96;
 i26 = i13 + 4 | 0;
 HEAP32[i26 >> 2] = i20;
 if (!i21) {
  i24 = i20 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
 }
 HEAP32[i13 + 8 >> 2] = H_BASE + 80;
 i24 = i13 + 12 | 0;
 HEAP32[i24 >> 2] = i15;
 do {
  if (i22) {
   HEAP32[i13 + 16 >> 2] = H_BASE + 72;
  } else {
   i3 = i15 | 0;
   i25 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i25 + 2;
   HEAP32[i13 + 16 >> 2] = H_BASE + 72;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if (!i21) {
   i25 = i20 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i25 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i3 = i16 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i4 = i25 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_NS_12AtomicStringEEENS1_INS1_IT_T0_EET1_EERKSB_SC_(i12, i13, i16);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringES3_EENS1_INS1_IT_T0_EET1_EERKSC_SD_(i11, i12, H_BASE + 64 | 0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEEES2_EcvS3_Ev(i10, i11);
 i16 = HEAP32[i11 + 20 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i13 = i16 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i11 + 12 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i4 = i16 | 0;
   i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i4 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i11 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i11 = i16 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i12 + 20 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i13 = i16 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i12 + 12 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i11 = i16 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i12 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i12 = i16 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i3 = i16 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i24 = i16 | 0;
   i13 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i24 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i26 = i16 | 0;
   i13 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i26 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i22) {
   i16 = i15 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i21) {
   i15 = i20 | 0;
   i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i15 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i14 = i22 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i21) {
   i22 = i20 | 0;
   i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
   } else {
    HEAP32[i22 >> 2] = i15;
   }
   i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i22 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i19 = i20 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i19 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i20 = __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i2 | 0) == 2) {
   i1 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i1 | 0) == 0) {
     i27 = 0;
    } else {
     i21 = i1 | 0;
     i19 = HEAP32[i21 >> 2] | 0;
     i15 = i19 + 2 | 0;
     HEAP32[i21 >> 2] = i19 + 4;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      i27 = i1;
      break;
     } else {
      HEAP32[i21 >> 2] = i15;
      i27 = i1;
      break;
     }
    }
   } while (0);
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = i27;
   i21 = (i27 | 0) == 0;
   if (!i21) {
    i19 = i27 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i8, H_BASE + 32 | 0, i9);
   i19 = i8 | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i19 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i15 = i19 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i22 | 0) == 0) {
    _WTFCrash();
   }
   i19 = i17 | 0;
   HEAP32[i19 >> 2] = i22;
   __ZN7WebCore21SVGDocumentExtensions11reportErrorERKN3WTF6StringE(i20, i17);
   i14 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i19 = i14 | 0;
     i15 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i19 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if (i21) {
    i28 = i1;
    break;
   }
   i14 = i27 | 0;
   i22 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    i28 = i1;
    break;
   } else {
    HEAP32[i14 >> 2] = i22;
    i28 = i1;
    break;
   }
  } else if ((i2 | 0) == 1) {
   i22 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     i29 = 0;
    } else {
     i14 = i22 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     i19 = i15 + 2 | 0;
     HEAP32[i14 >> 2] = i15 + 4;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      i29 = i22;
      break;
     } else {
      HEAP32[i14 >> 2] = i19;
      i29 = i22;
      break;
     }
    }
   } while (0);
   i1 = i7 | 0;
   HEAP32[i1 >> 2] = i29;
   i21 = (i29 | 0) == 0;
   if (!i21) {
    i19 = i29 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, H_BASE + 8 | 0, i7);
   i19 = i6 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i19 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i1 = i19 | 0;
     i15 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i1 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 0) {
    _WTFCrash();
   }
   i19 = i18 | 0;
   HEAP32[i19 >> 2] = i14;
   __ZN7WebCore21SVGDocumentExtensions11reportErrorERKN3WTF6StringE(i20, i18);
   i15 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i19 = i15 | 0;
     i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i19 >> 2] = i1;
      break;
     }
    }
   } while (0);
   if (i21) {
    i28 = i22;
    break;
   }
   i15 = i29 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    i28 = i22;
    break;
   } else {
    HEAP32[i15 >> 2] = i14;
    i28 = i22;
    break;
   }
  } else {
   i28 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 if ((i28 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i28 | 0;
 i29 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i29 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i28);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i29;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 4 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
   i13 = 0;
  } else {
   i14 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i14 | 0) ? i11 : i14;
   i13 = i11;
  }
  HEAP32[i10 >> 2] = i12;
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = i12 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 * 12 & -1) | 0;
  L7 : do {
   if ((i13 | 0) != 0) {
    i12 = i6 | 0;
    i11 = 0;
    while (1) {
     i14 = i11 * 12 & -1 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else if ((i15 | 0) != (-1 | 0)) {
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i6, i2, i14 | 0);
      i15 = HEAP32[i12 >> 2] | 0;
      i16 = i14;
      HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     }
     i11 = i11 + 1 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break L7;
     }
    }
    _llvm_trap();
   }
  } while (0);
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = i10;
 } else {
  i17 = i9;
  i18 = i2 + 8 | 0;
 }
 i9 = HEAP32[i18 >> 2] | 0;
 i10 = i3;
 i13 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i10 + 2 >> 1] | 0) << 11 ^ i13 ^ i13 << 16;
 i13 = i3 + 4 | 0;
 i11 = i6 + (HEAPU16[i13 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i11 ^ (HEAPU16[i10 + 6 >> 1] | 0) << 11 ^ i11 << 16;
 i11 = (i6 >>> 11) + i6 | 0;
 i6 = i11 << 3 ^ i11;
 i11 = (i6 >>> 5) + i6 | 0;
 i6 = i11 << 2 ^ i11;
 i11 = (i6 >>> 15) + i6 | 0;
 i6 = (i11 << 10 ^ i11) & 16777215;
 i11 = (i6 | 0) == 0 ? 8388608 : i6;
 i6 = i3 | 0;
 i10 = (i11 >>> 23) + ~i11 | 0;
 i12 = i10 << 12 ^ i10;
 i10 = i12 >>> 7 ^ i12;
 i12 = i10 << 2 ^ i10;
 i10 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i16 = i11;
 i11 = 0;
 while (1) {
  i15 = i16 & i9;
  i19 = i17 + (i15 * 12 & -1) | 0;
  i14 = HEAP32[i19 >> 2] | 0;
  if ((i14 | 0) == 0) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   }
  }
  if ((i14 | 0) == (HEAP32[i6 >> 2] | 0)) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
    i20 = 17;
    break;
   }
  }
  i21 = (i11 | 0) == 0 ? i10 : i11;
  i12 = (i14 | 0) == -1 ? i19 : i12;
  i16 = i21 + i15 | 0;
  i11 = i21;
 }
 if ((i20 | 0) == 17) {
  i11 = i17 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = i19;
  HEAP32[i17 + 4 >> 2] = i11;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i12 | 0) == 0) {
  i22 = i19;
  i23 = i2 + 16 | 0;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i19 = i2 + 16 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
  i22 = i12;
  i23 = i19;
 }
 i19 = i3;
 i3 = i22;
 i12 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i3 + 4 >> 2] = i12;
 HEAP32[i22 + 8 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i12 << 1 | 0) < (i3 | 0)) {
  i24 = i22;
  i25 = i3;
 } else {
  i19 = (i3 | 0) == 0;
  if (i19) {
   i26 = 8;
  } else {
   i11 = i3 << 1;
   i26 = (i12 * 6 & -1 | 0) < (i11 | 0) ? i3 : i11;
  }
  i11 = HEAP32[i8 >> 2] | 0;
  HEAP32[i4 >> 2] = i26;
  HEAP32[i18 >> 2] = i26 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i26 * 12 & -1) | 0;
  if (i19) {
   i27 = 0;
  } else {
   i19 = i7 | 0;
   i26 = 0;
   i18 = 0;
   while (1) {
    i12 = i11 + (i26 * 12 & -1) | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    i16 = i17;
    if ((i16 | 0) == (-1 | 0)) {
     i28 = i18;
    } else if ((i16 | 0) == 0) {
     if ((HEAP32[i11 + (i26 * 12 & -1) + 4 >> 2] | 0) == 0 | (i17 | 0) == -1) {
      i28 = i18;
     } else {
      i20 = 29;
     }
    } else {
     i20 = 29;
    }
    if ((i20 | 0) == 29) {
     i20 = 0;
     __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i7, i2, i12 | 0);
     i17 = HEAP32[i19 >> 2] | 0;
     i16 = i17;
     i10 = i12;
     HEAP32[i16 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     i28 = (i12 | 0) == (i22 | 0) ? i17 : i18;
    }
    i17 = i26 + 1 | 0;
    if ((i17 | 0) == (i3 | 0)) {
     i27 = i28;
     break;
    } else {
     i26 = i17;
     i18 = i28;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
  i24 = i27;
  i25 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i8 >> 2] | 0) + (i25 * 12 & -1) | 0;
 i25 = i1;
 HEAP32[i25 >> 2] = i24;
 HEAP32[i25 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10SVGElement29buildPendingResourcesIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 580 >> 2] & 255](i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] & 8388864 | 0) != 256) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 20 | 0;
 i10 = __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) | 0;
 i11 = HEAP32[i1 + 48 >> 2] | 0;
 L7 : do {
  if ((i11 | 0) == 0) {
   i12 = __ZN3WTF8nullAtomE;
  } else {
   if ((HEAP32[i11 + 16 >> 2] | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i13 = i1 >>> 1 & 134217727;
    i14 = i11 + 20 | 0;
   } else {
    i1 = i11 + 24 | 0;
    i13 = HEAP32[i1 + 8 >> 2] | 0;
    i14 = HEAP32[i1 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
   i15 = i1 + 12 | 0;
   i16 = i1 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i14 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i1 | 0)) {
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
     i12 = __ZN3WTF8nullAtomE;
     break L7;
    }
   }
   i12 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i17 << 3) + 4 | 0;
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 i12 = (i14 | 0) == 0;
 do {
  if (i12) {
   i18 = i3 | 0;
   HEAP32[i18 >> 2] = 0;
   i20 = i18;
   i21 = i3;
  } else {
   i18 = i14 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i13 = i3;
   if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i14);
    i20 = i3 | 0;
    i21 = i13;
    break;
   } else {
    i9 = i3 | 0;
    HEAP32[i9 >> 2] = i14;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    i20 = i9;
    i21 = i13;
    break;
   }
  }
 } while (0);
 i21 = i6 | 0;
 HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
 i20 = __ZNK7WebCore21SVGDocumentExtensions18hasPendingResourceERKN3WTF12AtomicStringE(i10, i6) | 0;
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 L36 : do {
  if (i20) {
   do {
    if (i12) {
     i6 = i4 | 0;
     HEAP32[i6 >> 2] = 0;
     i22 = i6;
    } else {
     if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i14);
      i22 = i4 | 0;
      break;
     } else {
      i6 = i4 | 0;
      HEAP32[i6 >> 2] = i14;
      i3 = i14 | 0;
      HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
      i22 = i6;
      break;
     }
    }
   } while (0);
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = HEAP32[i22 >> 2];
   __ZN7WebCore21SVGDocumentExtensions30markPendingResourcesForRemovalERKN3WTF12AtomicStringE(i10, i7);
   i6 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i17 = i6 | 0;
     i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i17 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i6 = i5 | 0;
   i3 = i8 | 0;
   i17 = i14 + 16 | 0;
   i21 = i14 | 0;
   if (i12) {
    while (1) {
     HEAP32[i6 >> 2] = 0;
     HEAP32[i3 >> 2] = 0;
     i13 = __ZN7WebCore21SVGDocumentExtensions43removeElementFromPendingResourcesForRemovalERKN3WTF12AtomicStringE(i10, i8) | 0;
     i9 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i18 = i9 | 0;
       i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i18 >> 2] = i11;
        break;
       }
      }
     } while (0);
     if ((i13 | 0) == 0) {
      break L36;
     }
     if (!(__ZNK7WebCore7Element19hasPendingResourcesEv(i13) | 0)) {
      continue;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 500 >> 2] & 63](i13);
     __ZN7WebCore21SVGDocumentExtensions34clearHasPendingResourcesIfPossibleEPNS_7ElementE(i10, i13);
    }
   }
   while (1) {
    if ((HEAP32[i17 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i14);
    } else {
     HEAP32[i6 >> 2] = i14;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
    }
    HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
    i9 = __ZN7WebCore21SVGDocumentExtensions43removeElementFromPendingResourcesForRemovalERKN3WTF12AtomicStringE(i10, i8) | 0;
    i11 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i18 = i11 | 0;
      i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i18 >> 2] = i16;
       break;
      }
     }
    } while (0);
    if ((i9 | 0) == 0) {
     break L36;
    }
    if (!(__ZNK7WebCore7Element19hasPendingResourcesEv(i9) | 0)) {
     continue;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 500 >> 2] & 63](i9);
    __ZN7WebCore21SVGDocumentExtensions34clearHasPendingResourcesIfPossibleEPNS_7ElementE(i10, i9);
   }
  }
 } while (0);
 if (i12) {
  STACKTOP = i2;
  return;
 }
 i12 = i14 | 0;
 i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i12 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i1 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i3;
 i11 = (i3 | 0) == 0;
 if (!i11) {
  i12 = i3 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i9, i2, i6, i4) | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   i14 = i10 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
  }
 } while (0);
 do {
  if (i12) {
   _memset(i7 | 0, 0, 20) | 0;
   L13 : do {
    if ((__ZNK7WebCore4Node20containingShadowRootEv(i9) | 0) == 0) {
     i6 = HEAP32[i1 + 60 >> 2] | 0;
     do {
      if ((i6 | 0) == 0) {
       if (HEAP8[H_BASE + 1504 | 0] | 0) {
        i15 = HEAP32[H_BASE + 1552 >> 2] | 0;
        break;
       } else {
        i14 = __ZN3WTF10fastMallocEj(20) | 0;
        i10 = i14;
        _memset(i14 | 0, 0, 20) | 0;
        HEAP32[H_BASE + 1552 >> 2] = i10;
        HEAP8[H_BASE + 1504 | 0] = 1;
        i15 = i10;
        break;
       }
      } else {
       i15 = i6 | 0;
      }
     } while (0);
     __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_EaSERKS9_(i7 | 0, i15 | 0) | 0;
     i6 = i7 | 0;
     i10 = HEAP32[i6 >> 2] | 0;
     i14 = HEAP32[i7 + 4 >> 2] | 0;
     i13 = i10 + (i14 << 2) | 0;
     if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
      i16 = i6;
      break;
     }
     L24 : do {
      if ((i14 | 0) == 0) {
       i17 = i10;
      } else {
       i18 = i10;
       while (1) {
        i19 = HEAP32[i18 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i17 = i18;
         break L24;
        }
        i19 = i18 + 4 | 0;
        if ((i19 | 0) == (i13 | 0)) {
         i16 = i6;
         break L13;
        } else {
         i18 = i19;
        }
       }
      }
     } while (0);
     if ((i17 | 0) == (i13 | 0)) {
      i16 = i6;
      break;
     }
     i10 = i8 | 0;
     i14 = i3 + 4 | 0;
     if (i11) {
      i18 = i17;
      while (1) {
       i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 24 >> 2] | 0;
       HEAP32[i10 >> 2] = 0;
       __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i19, i2, i8, i4) | 0;
       i19 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i19 | 0) != 0) {
         i20 = i19 + 4 | 0;
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
       i19 = i18 + 4 | 0;
       if ((i19 | 0) == (i13 | 0)) {
        i16 = i6;
        break L13;
       } else {
        i23 = i19;
       }
       while (1) {
        i19 = HEAP32[i23 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         break;
        }
        i19 = i23 + 4 | 0;
        if ((i19 | 0) == (i13 | 0)) {
         i16 = i6;
         break L13;
        } else {
         i23 = i19;
        }
       }
       if ((i23 | 0) == (i13 | 0)) {
        i16 = i6;
        break;
       } else {
        i18 = i23;
       }
      }
     } else {
      i18 = i17;
      while (1) {
       i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 24 >> 2] | 0;
       HEAP32[i10 >> 2] = i3;
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i19, i2, i8, i4) | 0;
       i19 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i19 | 0) != 0) {
         i22 = i19 + 4 | 0;
         i20 = i22 | 0;
         i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
         if ((i21 | 0) != 0) {
          HEAP32[i20 >> 2] = i21;
          break;
         }
         i21 = i22 - 4 | 0;
         if ((i21 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
        }
       } while (0);
       i19 = i18 + 4 | 0;
       if ((i19 | 0) == (i13 | 0)) {
        i16 = i6;
        break L13;
       } else {
        i24 = i19;
       }
       while (1) {
        i19 = HEAP32[i24 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         break;
        }
        i19 = i24 + 4 | 0;
        if ((i19 | 0) == (i13 | 0)) {
         i16 = i6;
         break L13;
        } else {
         i24 = i19;
        }
       }
       if ((i24 | 0) == (i13 | 0)) {
        i16 = i6;
        break;
       } else {
        i18 = i24;
       }
      }
     }
    } else {
     i16 = i7 | 0;
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i25 = 1;
    break;
   }
   __ZN3WTF8fastFreeEPv(i18);
   i25 = 1;
  } else {
   i25 = 0;
  }
 } while (0);
 if (i11) {
  STACKTOP = i5;
  return i25 | 0;
 }
 i11 = i3 + 4 | 0;
 i3 = i11 | 0;
 i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i3 >> 2] = i16;
  STACKTOP = i5;
  return i25 | 0;
 }
 i16 = i11 - 4 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i5;
  return i25 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
 STACKTOP = i5;
 return i25 | 0;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 16 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 8 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 | 0;
 i13 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i14 = i2 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = (i15 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i15 + 4 >> 2] | 0;
 }
 i18 = i2 + 12 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = (i19 | 0) == 0;
 if (i20) {
  i21 = 0;
 } else {
  i21 = HEAP32[i19 + 4 >> 2] | 0;
 }
 i22 = i2 + 20 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = (i23 | 0) == 0;
 if (i24) {
  i25 = 0;
 } else {
  i25 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i26 = _llvm_uadd_with_overflow_i32(i11 + i9 + i13 + i17 + i21 + i25 | 0, i7 | 0) | 0;
 i25 = i26;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i16) {
  i27 = 11;
 } else {
  if ((HEAP32[i15 + 16 >> 2] & 32 | 0) != 0) {
   i27 = 11;
  }
 }
 do {
  if ((i27 | 0) == 11) {
   if (!i20) {
    if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i24) {
    if ((HEAP32[i23 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i25 | 0) == 0) {
     i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i15 | 0) == 0) {
      i27 = 28;
      break;
     }
     i16 = i15 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     i28 = i15;
     i29 = 0;
    } else {
     if (i25 >>> 0 > 4294967275 >>> 0) {
      i27 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i25 + 20 | 0);
     i15 = i6 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     if ((i16 | 0) == 0) {
      i27 = 28;
      break;
     }
     i15 = i16 + 20 | 0;
     HEAP32[i16 >> 2] = 2;
     HEAP32[i16 + 4 >> 2] = i25;
     HEAP32[i16 + 8 >> 2] = i15;
     HEAP32[i16 + 12 >> 2] = 0;
     HEAP32[i16 + 16 >> 2] = 32;
     i28 = i16;
     i29 = i15;
    }
   } while (0);
   if ((i27 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPh(i2, i29);
   i15 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i16 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i26 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
   i21 = HEAP32[i14 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i21 + 4 >> 2] | 0;
   }
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i21 + 4 >> 2] | 0;
   }
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i32 = 0;
   } else {
    i32 = HEAP32[i21 + 4 >> 2] | 0;
   }
   _memcpy(i29 + (i16 + i15 + i26 + i30 + i31 + i32) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i28;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i25 | 0) == 0) {
   i28 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i28 | 0) == 0) {
    i27 = 44;
    break;
   }
   i32 = i28 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   i33 = i28;
   i34 = 0;
  } else {
   if (i25 >>> 0 > 2147483637 >>> 0) {
    i27 = 44;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i25 << 1) + 20 | 0);
   i28 = i5 | 0;
   i32 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   if ((i32 | 0) == 0) {
    i27 = 44;
    break;
   }
   i28 = i32 + 20 | 0;
   HEAP32[i32 >> 2] = 2;
   HEAP32[i32 + 4 >> 2] = i25;
   HEAP32[i32 + 8 >> 2] = i28;
   HEAP32[i32 + 12 >> 2] = 0;
   HEAP32[i32 + 16 >> 2] = 0;
   i33 = i32;
   i34 = i28;
  }
 } while (0);
 if ((i27 | 0) == 44) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPt(i2, i34);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = HEAP32[i18 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = HEAP32[i22 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i37 = 0;
 } else {
  i37 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = i8 + i2 + i10 + i35 + i36 + i37 | 0;
 if ((i7 | 0) != 0) {
  i37 = 0;
  while (1) {
   HEAP16[i34 + (i12 + i37 << 1) >> 1] = HEAPU8[i3 + i37 | 0] | 0;
   i37 = i37 + 1 | 0;
   if (i37 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10SVGElement26sendSVGLoadEventIfPossibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i1 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i5 = i1;
 }
 i6 = i1 + 20 | 0;
 i1 = i4 | 0;
 i7 = i5;
 while (1) {
  if ((i7 | 0) == 0) {
   i8 = 41;
   break;
  }
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 640 >> 2] & 255](i7) | 0)) {
   i9 = i7;
   break;
  }
  do {
   if (i2) {
    i5 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i7 | 0) | 0;
    if ((i5 | 0) == 0) {
     i10 = 0;
     break;
    }
    i11 = i5 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    i10 = i5;
   } else {
    i10 = 0;
   }
  } while (0);
  i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 255](i7 | 0) | 0;
  do {
   if ((i11 | 0) == 0) {
    i8 = 12;
   } else {
    if (!(__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i11 | 0, i5 + 212 | 0) | 0)) {
     i8 = 12;
     break;
    }
    i12 = i7 | 0;
    i8 = 17;
   }
  } while (0);
  L15 : do {
   if ((i8 | 0) == 12) {
    i8 = 0;
    i5 = i7 | 0;
    i11 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i5) | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i13 = i11;
    }
    while (1) {
     i11 = __ZN7WebCore11EventTarget17getEventListenersERKN3WTF12AtomicStringE(i13 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0) | 0;
     i14 = HEAP32[i11 + 8 >> 2] | 0;
     i15 = i11 | 0;
     i11 = 0;
     while (1) {
      if (i11 >>> 0 >= i14 >>> 0) {
       break;
      }
      if ((HEAP8[(HEAP32[i15 >> 2] | 0) + (i11 << 3) + 4 | 0] & 1) == 0) {
       i11 = i11 + 1 | 0;
      } else {
       i12 = i5;
       i8 = 17;
       break L15;
      }
     }
     i13 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i13 | 0) | 0;
     if ((i13 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  do {
   if ((i8 | 0) == 17) {
    i8 = 0;
    i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
    i11 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
    i15 = __ZN3WTF10fastMallocEj(56) | 0;
    __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i15, i11, 0, 0);
    HEAP32[i1 >> 2] = i15;
    FUNCTION_TABLE_iii[i5 & 31](i12, i4) | 0;
    i5 = HEAP32[i1 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i15 = i5 + 8 | 0;
    i5 = i15 | 0;
    i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i5 >> 2] = i11;
     break;
    }
    i11 = i15 - 8 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
   }
  } while (0);
  i11 = (i10 | 0) == 0;
  do {
   if (i11) {
    i16 = 0;
   } else {
    if ((HEAP32[i10 + 12 >> 2] & 32 | 0) == 0) {
     i16 = 0;
     break;
    }
    i15 = i10 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i16 = i10;
   }
  } while (0);
  i15 = i7 + 8 | 0;
  i5 = i15 - 8 | 0;
  i14 = i15 | 0;
  i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  HEAP32[i14 >> 2] = i17;
  do {
   if ((i17 | 0) < 1) {
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5);
   }
  } while (0);
  i18 = (i16 | 0) == 0;
  do {
   if (i18) {
    i19 = 2;
   } else {
    if (!(__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i16) | 0)) {
     i19 = 2;
     break;
    }
    i19 = (HEAP8[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 1245 | 0] & 1) != 0 ? 0 : 3;
   }
  } while (0);
  do {
   if (!i11) {
    i5 = i10 + 8 | 0;
    i15 = i5 | 0;
    i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   }
  } while (0);
  if ((i19 | 0) == 3) {
   i8 = 36;
   break;
  } else {
   i7 = i16;
  }
 }
 if ((i8 | 0) == 41) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i8 | 0) == 36) {
   if (!i18) {
    i9 = i16;
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i16 = i9 + 8 | 0;
 i9 = i16 | 0;
 i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i18;
 if ((i18 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10onloadAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11onclickAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 56 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames15onmousedownAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 232 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16onmouseenterAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 236 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16onmouseleaveAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 240 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames15onmousemoveAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 244 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14onmouseoutAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 248 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames15onmouseoverAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 252 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13onmouseupAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore8SVGNames13onfocusinAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 156 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore8SVGNames14onfocusoutAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 160 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) == (HEAP32[__ZN7WebCore8SVGNames14onactivateAttrE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 388 | 0, i2, i3);
  return;
 }
 if ((i4 | 0) != (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
  __ZN7WebCore12SVGLangSpace14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 52 | 0, i2, i3) | 0;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 84 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
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
 i4 = i1 + 88 | 0;
 HEAP8[i4] = HEAP8[i4] | 2;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
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
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i3 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i11 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i9;
 }
 i9 = i14 & i8;
 i13 = i12 + (i9 << 2) | 0;
 i11 = i6 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i13 | 0;
 i3 = (HEAP32[i15 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 do {
  if (i3) {
   i16 = i13;
   i17 = 14;
  } else {
   i18 = (i14 >>> 23) + ~i14 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i9;
   i22 = i13;
   i23 = i15;
   while (1) {
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == -1) {
     i25 = i22;
    } else {
     if ((i24 | 0) == (HEAP32[i10 >> 2] | 0)) {
      i17 = 11;
      break;
     } else {
      i25 = i20;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i24 + i21 & i8;
    i27 = i12 + (i26 << 2) | 0;
    i28 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i11 >> 2] = i28;
    i29 = i28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i29 = i27 | 0;
    i28 = (HEAP32[i29 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i6);
    if (i28) {
     i17 = 13;
     break;
    } else {
     i19 = i24;
     i20 = i25;
     i21 = i26;
     i22 = i27;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 13) {
    if ((i25 | 0) == 0) {
     i16 = i27;
     i17 = 14;
     break;
    }
    i23 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i25 >> 2] = i23;
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i30 = i25;
    i31 = i21;
    break;
   } else if ((i17 | 0) == 11) {
    i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i17 | 0) == 14) {
  i30 = i16;
  i31 = i2 + 16 | 0;
 }
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i30);
 HEAP32[i30 >> 2] = HEAP32[i16 >> 2];
 i16 = i2 + 12 | 0;
 i4 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i4;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i31 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i32 = i30;
  i33 = i17;
 } else {
  if ((i17 | 0) == 0) {
   i34 = 8;
  } else {
   i31 = i17 << 1;
   i34 = (i4 * 6 & -1 | 0) < (i31 | 0) ? i17 : i31;
  }
  i31 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i34, i30) | 0;
  i32 = i31;
  i33 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i33 << 2) | 0;
 i33 = i1;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10SVGElement24getPresentationAttributeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i2 + 48 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 & 1 | 0) == 0) {
    i12 = i11 >>> 1 & 134217727;
   } else {
    i12 = HEAP32[i2 + 32 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i13 = i5 | 0;
     HEAP32[i13 >> 2] = 0;
     i14 = i13;
    } else {
     if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i11);
      i14 = i5 | 0;
      break;
     } else {
      i13 = i5 | 0;
      HEAP32[i13 >> 2] = i11;
      i15 = i11 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      i14 = i13;
      break;
     }
    }
   } while (0);
   i11 = i7 | 0;
   HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
   __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i6, __ZN3WTF8nullAtomE, i7, __ZN3WTF8nullAtomE);
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i11 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i15 & 1 | 0) == 0) {
    i16 = i15 >>> 1 & 134217727;
    i17 = i13 + 20 | 0;
   } else {
    i15 = i13 + 24 | 0;
    i16 = HEAP32[i15 + 8 >> 2] | 0;
    i17 = HEAP32[i15 >> 2] | 0;
   }
   L25 : do {
    if ((i16 | 0) == 0) {
     i18 = 26;
    } else {
     i15 = HEAP32[i6 >> 2] | 0;
     i13 = i15 + 12 | 0;
     i11 = i15 + 16 | 0;
     i19 = 0;
     while (1) {
      i20 = i17 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i15 | 0)) {
       break;
      }
      if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
        break;
       }
      }
      i21 = i19 + 1 | 0;
      if (i21 >>> 0 < i16 >>> 0) {
       i19 = i21;
      } else {
       i18 = 26;
       break L25;
      }
     }
     if ((i20 | 0) == 0) {
      i18 = 26;
      break;
     }
     __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i8, 2);
     i11 = HEAP32[i8 >> 2] | 0;
     i13 = __ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE(i20 | 0) | 0;
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i11, i13, i17 + (i19 << 3) + 4 | 0, 0, 0) | 0;
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i11 | 0, i13);
     i13 = i9 | 0;
     i15 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     do {
      if ((i15 | 0) == 0) {
       HEAP32[i1 >> 2] = 0;
      } else {
       __ZNK7WebCore8CSSValue13cloneForCSSOMEv(i1, i15);
       i13 = i15 | 0;
       i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i15);
        break;
       } else {
        HEAP32[i13 >> 2] = i21;
        break;
       }
      }
     } while (0);
     if ((i11 | 0) == 0) {
      break;
     }
     i15 = i11 | 0;
     i19 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i15 >> 2] = i19;
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
   if ((i18 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
   }
   __ZN7WebCore13QualifiedNameD1Ev(i6);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
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
  if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  } else if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i7 = i1 | 0;
 do {
  if ((__ZNK7WebCore4Node20containingShadowRootEv(i7) | 0) == 0) {
   i8 = HEAP32[i1 + 60 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     if (HEAP8[H_BASE + 1504 | 0] | 0) {
      i9 = HEAP32[H_BASE + 1552 >> 2] | 0;
      break;
     } else {
      i10 = __ZN3WTF10fastMallocEj(20) | 0;
      i11 = i10;
      _memset(i10 | 0, 0, 20) | 0;
      HEAP32[H_BASE + 1552 >> 2] = i11;
      HEAP8[H_BASE + 1504 | 0] = 1;
      i9 = i11;
      break;
     }
    } else {
     i9 = i8 | 0;
    }
   } while (0);
   __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_EaSERKS9_(i6 | 0, i9 | 0) | 0;
   i8 = i6 + 12 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    i12 = 8;
    break;
   }
   i11 = (i3 | 0) != 0;
   if (i11) {
    i10 = i3 + 4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   L14 : do {
    if (__ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i7, i2, i3, i4) | 0) {
     i10 = HEAP32[i6 >> 2] | 0;
     i13 = HEAP32[i6 + 4 >> 2] | 0;
     i14 = i10 + (i13 << 2) | 0;
     if ((HEAP32[i8 >> 2] | 0) == 0) {
      i15 = 1;
      break;
     }
     L17 : do {
      if ((i13 | 0) == 0) {
       i16 = i10;
      } else {
       i17 = i10;
       while (1) {
        i18 = HEAP32[i17 >> 2] | 0;
        if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
         i16 = i17;
         break L17;
        }
        i18 = i17 + 4 | 0;
        if ((i18 | 0) == (i14 | 0)) {
         i15 = 1;
         break L14;
        } else {
         i17 = i18;
        }
       }
      }
     } while (0);
     if ((i16 | 0) == (i14 | 0)) {
      i15 = 1;
      break;
     } else {
      i19 = i16;
     }
     while (1) {
      i10 = HEAP32[(HEAP32[i19 >> 2] | 0) + 24 >> 2] | 0;
      if (!(__ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i10, i2, i3, i4) | 0)) {
       __ZN7WebCore16EventListenerMap41removeFirstEventListenerCreatedFromMarkupERKN3WTF12AtomicStringE(__ZN7WebCore4Node15eventTargetDataEv(i10) | 0, i2);
      }
      i10 = i19 + 4 | 0;
      if ((i10 | 0) == (i14 | 0)) {
       i15 = 1;
       break L14;
      } else {
       i20 = i10;
      }
      while (1) {
       i10 = HEAP32[i20 >> 2] | 0;
       if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
        break;
       }
       i10 = i20 + 4 | 0;
       if ((i10 | 0) == (i14 | 0)) {
        i15 = 1;
        break L14;
       } else {
        i20 = i10;
       }
      }
      if ((i20 | 0) == (i14 | 0)) {
       i15 = 1;
       break;
      } else {
       i19 = i20;
      }
     }
    } else {
     i15 = 0;
    }
   } while (0);
   if (!i11) {
    i21 = i15;
    break;
   }
   i8 = i3 + 4 | 0;
   i14 = i8 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i14 >> 2] = i10;
    i21 = i15;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    i21 = i15;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   i21 = i15;
  } else {
   i12 = 8;
  }
 } while (0);
 if ((i12 | 0) == 8) {
  i21 = __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i7, i2, i3, i4) | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i21 | 0;
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i5;
 return i21 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
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
   i14 = 11;
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
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
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
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(32) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i2, i9, i13);
   HEAP32[i11 >> 2] = H_BASE + 800;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 63](i18);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6expandEPS6_(i2, 0) | 0;
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
   if ((i14 | 0) == 8) {
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
   } else if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i8 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6expandEPS6_(i2, i26) | 0;
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
function __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 __ZN7WebCore25SVGAttributeToPropertyMap32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 652 >> 2] & 255](i1) | 0, i2, i3);
 i1 = i3 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  return;
 }
 if (HEAP8[H_BASE + 1512 | 0] | 0) {
  if ((HEAP32[H_BASE + 1572 >> 2] | 0) == 0) {
   i4 = 5;
  }
 } else {
  _memset(H_BASE + 1560 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1512 | 0] = 1;
  i4 = 5;
 }
 if ((i4 | 0) == 5) {
  __ZN7WebCoreL46populateAttributeNameToAnimatedPropertyTypeMapERN3WTF7HashMapIPNS_13QualifiedName17QualifiedNameImplENS_20AnimatedPropertyTypeENS0_7PtrHashIS4_EENS0_10HashTraitsIS4_EENS8_IS5_EEEE(H_BASE + 1560);
 }
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[H_BASE + 1560 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = HEAP32[H_BASE + 1564 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = i6;
 } else {
  i6 = HEAP32[H_BASE + 1568 >> 2] | 0;
  i9 = i5;
  i10 = i9 + ~(i9 << 15) | 0;
  i9 = (i10 >>> 10 ^ i10) * 9 & -1;
  i10 = i9 >>> 6 ^ i9;
  i9 = i10 + ~(i10 << 11) | 0;
  i10 = i9 >>> 16 ^ i9;
  i9 = i6 & i10;
  i11 = i2 + (i9 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  L13 : do {
   if ((i12 | 0) == (i5 | 0)) {
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
      i13 = 0;
      break L13;
     }
     i18 = (i15 | 0) == 0 ? i14 : i15;
     i19 = i18 + i16 & i6;
     i20 = i2 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i5 | 0)) {
      i13 = i20;
      break;
     } else {
      i15 = i18;
      i16 = i19;
      i17 = i21;
     }
    }
   }
  } while (0);
  i5 = HEAP32[H_BASE + 1564 >> 2] | 0;
  i7 = (i13 | 0) == 0 ? i2 + (i5 << 3) | 0 : i13;
  i8 = i5;
 }
 if ((i7 | 0) == (i2 + (i8 << 3) | 0)) {
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i7 << 2) >> 2] = HEAP32[i8 >> 2];
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  return;
 }
 i2 = i7 + 1 | 0;
 i5 = i3 | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 do {
  if (i13 >>> 0 > i8 >>> 0) {
   i4 = 18;
  } else {
   if ((i13 + (i7 << 2) | 0) >>> 0 <= i8 >>> 0) {
    i4 = 18;
    break;
   }
   __ZN3WTF6VectorIN7WebCore20AnimatedPropertyTypeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
   i6 = HEAP32[i5 >> 2] | 0;
   i22 = i6 + (i8 - i13 >> 2 << 2) | 0;
   i23 = i6;
  }
 } while (0);
 if ((i4 | 0) == 18) {
  __ZN3WTF6VectorIN7WebCore20AnimatedPropertyTypeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
  i22 = i8;
  i23 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i23 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i22 >> 2];
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore10SVGElement5titleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i2) | 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 8388608 | 0) != 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) + 92 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i5 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
   if ((i6 | 0) != (i7 | 0)) {
    if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZNK7WebCore10SVGElement5titleEv(i4, i5);
   i5 = i4 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = i2 + 36 | 0;
 while (1) {
  i8 = HEAP32[i4 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i4 = i8 + 28 | 0;
  } else {
   i9 = 17;
   break;
  }
 }
 L24 : do {
  if ((i9 | 0) == 17) {
   i4 = i2 | 0;
   i6 = i8;
   L26 : while (1) {
    i10 = i6;
    i5 = HEAP32[i6 + 44 >> 2] | 0;
    i7 = HEAP32[__ZN7WebCore8SVGNames8titleTagE >> 2] | 0;
    if ((i5 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
      break;
     }
    }
    i7 = HEAP32[i6 + 36 >> 2] | 0;
    do {
     if ((i7 | 0) == 0) {
      if ((i6 | 0) == (i4 | 0)) {
       break L24;
      }
      i5 = HEAP32[i6 + 28 >> 2] | 0;
      if ((i5 | 0) != 0) {
       i11 = i5;
       break;
      }
      i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i4) | 0;
      if ((i5 | 0) == 0) {
       break L24;
      } else {
       i11 = i5;
      }
     } else {
      i11 = i7;
     }
    } while (0);
    if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
     i12 = i11;
    } else {
     i6 = i11;
     continue;
    }
    while (1) {
     if ((i12 | 0) == (i4 | 0)) {
      break L24;
     }
     i7 = HEAP32[i12 + 28 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i4) | 0;
      if ((i5 | 0) == 0) {
       break L24;
      } else {
       i13 = i5;
      }
     } else {
      i13 = i7;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
      i12 = i13;
     } else {
      i6 = i13;
      continue L26;
     }
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element9innerTextEv(i1, i10);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  i10 = 0;
  i11 = i1 + 16 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i10 | 0;
 } else {
  i13 = 0;
  i14 = 0;
 }
 while (1) {
  i8 = i7 + (i13 << 3) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i15 = i14;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i9 + ~(i9 << 15) | 0;
   i9 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i9 >>> 6 ^ i9;
   i9 = i18 + ~(i18 << 11) | 0;
   i18 = i9 >>> 16 ^ i9;
   i9 = i17 & i18;
   i19 = i16 + (i9 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
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
     i27 = i9;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i2 | 0)) {
       i30 = i28;
       break L11;
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
   i16 = i8;
   i17 = i30;
   i2 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i2;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i14;
  }
  i2 = i13 + 1 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   i10 = i15;
   break;
  } else {
   i13 = i2;
   i14 = i15;
  }
 }
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7;
 __ZN3WTF8fastFreeEPv(i12);
 return i10 | 0;
}
function __ZN7WebCore10SVGElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 832;
 i2 = i1 + 60 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 36 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i4 >> 2] = i6;
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
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i5 + 20 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = i5;
   } else {
    __ZN7WebCore16SVGCursorElement12removeClientEPNS_10SVGElementE(i6, i1);
    i7 = HEAP32[i2 >> 2] | 0;
   }
   i6 = HEAP32[i7 + 24 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i8 = i7;
   } else {
    __ZN7WebCore19CSSCursorImageValue23removeReferencedElementEPNS_10SVGElementE(i6, i1);
    i8 = HEAP32[i2 >> 2] | 0;
   }
   HEAP32[i2 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = i1 + 20 | 0;
 __ZN7WebCore21SVGDocumentExtensions36rebuildAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 __ZN7WebCore21SVGDocumentExtensions35removeAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 i8 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore18SVGElementRareDataD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 }
 i3 = i8 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 }
}
function __ZN7WebCore10SVGElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 832;
 i2 = i1 + 60 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 36 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i4 >> 2] = i6;
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
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i5 + 20 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = i5;
   } else {
    __ZN7WebCore16SVGCursorElement12removeClientEPNS_10SVGElementE(i6, i1);
    i7 = HEAP32[i2 >> 2] | 0;
   }
   i6 = HEAP32[i7 + 24 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i8 = i7;
   } else {
    __ZN7WebCore19CSSCursorImageValue23removeReferencedElementEPNS_10SVGElementE(i6, i1);
    i8 = HEAP32[i2 >> 2] | 0;
   }
   HEAP32[i2 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i8 = i1 + 20 | 0;
 __ZN7WebCore21SVGDocumentExtensions36rebuildAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 __ZN7WebCore21SVGDocumentExtensions35removeAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 i8 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore18SVGElementRareDataD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 }
 i3 = i8 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  i9 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i9);
  return;
 }
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6expandEPS6_(i1, i2) {
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
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 << 2) | 0;
 if ((i2 | 0) > 0) {
  i11 = 0;
  while (1) {
   i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i7 + (i11 << 2) >> 2] = i12;
   i13 = i12 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i14 = 0;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 i7 = i6 | 0;
 i9 = i5 | 0;
 i2 = 0;
 i11 = 0;
 while (1) {
  i13 = i10 + (i2 << 2) | 0;
  i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i12;
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i13 | 0;
  i12 = (HEAP32[i16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i12) {
    i17 = i11;
   } else {
    if ((HEAP32[i16 >> 2] | 0) == -1) {
     i17 = i11;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i5, i1, i13);
    i18 = HEAP32[i9 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i18);
    i19 = HEAP32[i16 >> 2] | 0;
    HEAP32[i18 >> 2] = i19;
    i20 = i19 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i17 = (i13 | 0) == (i3 | 0) ? i18 : i11;
   }
  } while (0);
  i13 = i2 + 1 | 0;
  if ((i13 | 0) == (i8 | 0)) {
   break;
  } else {
   i2 = i13;
   i11 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i21 = 0;
 } else {
  i14 = i17;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 while (1) {
  i1 = i10 + (i21 << 2) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1);
  }
  i1 = i21 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i21 = i1;
  } else {
   i14 = i17;
   break;
  }
 }
 i15 = i10;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if (HEAP8[H_BASE + 1496 | 0] | 0) {
  i3 = HEAP32[H_BASE + 1544 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1544 >> 2] = i5;
  HEAP8[H_BASE + 1496 | 0] = 1;
  i3 = i5;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 | 0, i3 | 0, __ZN7WebCore8SVGNames11textPathTagE, __ZN7WebCore8SVGNames11textPathTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 16 | 0, HEAP32[H_BASE + 1544 >> 2] | 0, __ZN7WebCore8SVGNames11altGlyphTagE, __ZN7WebCore8SVGNames11altGlyphTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 32 | 0, HEAP32[H_BASE + 1544 >> 2] | 0, __ZN7WebCore8SVGNames7trefTagE, __ZN7WebCore8SVGNames7trefTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 48 | 0, HEAP32[H_BASE + 1544 >> 2] | 0, __ZN7WebCore8SVGNames8tspanTagE, __ZN7WebCore8SVGNames8tspanTagE);
 }
 if ((HEAP32[i2 + 12 >> 2] & 32 | 0) == 0) {
  i6 = 0;
  STACKTOP = i1;
  return i6 | 0;
 }
 i3 = i2;
 i5 = HEAP32[H_BASE + 1544 >> 2] | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   if ((__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_(i5 | 0, i2 + 44 | 0) | 0) == 0) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i1;
   return i6 | 0;
  }
 } while (0);
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 608 >> 2] & 255](i3) | 0;
 STACKTOP = i1;
 return i6 | 0;
}
function __ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((__ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE(i2) | 0) > 0) {
  __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = i1 | 0;
 if ((i6 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
  i7 = __ZNK7WebCore10SVGElement9classNameEv(i1) | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i7 = i4 | 0;
    HEAP32[i7 >> 2] = 0;
    i9 = i7;
   } else {
    if ((HEAP32[i8 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i8);
     i9 = i4 | 0;
     break;
    } else {
     i7 = i4 | 0;
     HEAP32[i7 >> 2] = i8;
     i10 = i8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i9 = i7;
     break;
    }
   }
  } while (0);
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  __ZN7WebCore7Element21classAttributeChangedERKN3WTF12AtomicStringE(i2, i5);
  i5 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i8 = i5 | 0;
    i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i8 >> 2] = i2;
     break;
    }
   }
  } while (0);
  __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
  STACKTOP = i3;
  return;
 }
 if ((i6 | 0) != (HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 12 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
  i11 = i5 | 0;
 } else {
  i11 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 380 >> 2] & 255](i5) | 0)) {
    break;
   }
   __ZN7WebCore26RenderSVGResourceContainer9idChangedEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 392 >> 2] & 255](i5) | 0);
  }
 } while (0);
 if ((HEAP32[i6 >> 2] & 256 | 0) != 0) {
  __ZN7WebCore10SVGElement29buildPendingResourcesIfNeededEv(i1);
 }
 __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 64 | 0;
 do {
  if (i2) {
   __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4 + 8 | 0, i6 | 0, i5, i5);
  } else {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = HEAP32[i1 + 72 >> 2] | 0;
   i9 = i3;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i8 & i10;
   i11 = i7 + (i9 << 2) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L10 : do {
    if ((i12 | 0) == (i3 | 0)) {
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
      i19 = i18 + i16 & i8;
      i20 = i7 + (i19 << 2) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i3 | 0)) {
       i13 = i20;
       break L10;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    __ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i6, i5) | 0;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 588 >> 2] & 255](i6) | 0)) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 12 >> 2] & 32 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i6, i2, i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 1056814;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 1632 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 1584 >> 2] = i6;
    HEAP32[H_BASE + 1632 >> 2] = 1;
    HEAP32[H_BASE + 1636 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 1584 >> 2] | 0;
    break;
   }
  } else {
   i7 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i5 = i7 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 832;
 i4 = i1 + 88 | 0;
 _memset(i1 + 60 | 0, 0, 28) | 0;
 HEAP8[i4] = HEAP8[i4] & -4;
 if (HEAP8[H_BASE + 1528 | 0] | 0) {
  i8 = HEAP32[H_BASE + 1616 >> 2] | 0;
 } else {
  i4 = __Znwj(20) | 0;
  i1 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1616 >> 2] = i1;
  HEAP8[H_BASE + 1528 | 0] = 1;
  i8 = i1;
 }
 if ((HEAP32[i8 + 12 >> 2] | 0) != 0) {
  return;
 }
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i9 = HEAP32[H_BASE + 1624 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i1, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i1;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i9 = i1;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i8, i9);
 return;
}
function __ZN7WebCore10SVGElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 1056814;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 1632 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 1584 >> 2] = i6;
    HEAP32[H_BASE + 1632 >> 2] = 1;
    HEAP32[H_BASE + 1636 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 1584 >> 2] | 0;
    break;
   }
  } else {
   i7 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i5 = i7 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 832;
 i4 = i1 + 88 | 0;
 _memset(i1 + 60 | 0, 0, 28) | 0;
 HEAP8[i4] = HEAP8[i4] & -4;
 if (HEAP8[H_BASE + 1528 | 0] | 0) {
  i8 = HEAP32[H_BASE + 1616 >> 2] | 0;
 } else {
  i4 = __Znwj(20) | 0;
  i1 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1616 >> 2] = i1;
  HEAP8[H_BASE + 1528 | 0] = 1;
  i8 = i1;
 }
 if ((HEAP32[i8 + 12 >> 2] | 0) != 0) {
  return;
 }
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i9 = HEAP32[H_BASE + 1624 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i1, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i1;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i9 = i1;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i8, i9);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_EaSERKS9_(i1, i2) {
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
 i8 = i6 + (i7 << 2) | 0;
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
      i10 = i10 + 4 | 0;
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
    __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i5, i12, i12);
    i10 = i12 + 4 | 0;
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
     i10 = i13 + 4 | 0;
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
 i13 = i1 + 8 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 i8 = i5 + 8 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 i4 = i1 + 12 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i13 = i5 + 12 | 0;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i8;
 i8 = i1 + 16 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 16 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = i3 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i9;
 }
 i9 = i11 & i7;
 i10 = i6 + (i9 << 2) | 0;
 i8 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i12 = i3 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 L4 : do {
  if (i3) {
   i13 = 0;
   i14 = i10;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i10;
   i20 = i12;
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == -1) {
     i22 = i19;
    } else {
     if ((i21 | 0) == (HEAP32[i2 >> 2] | 0)) {
      break;
     } else {
      i22 = i16;
     }
    }
    i21 = (i17 | 0) == 0 ? i15 : i17;
    i23 = i21 + i18 & i7;
    i24 = i6 + (i23 << 2) | 0;
    i25 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i24 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i25) {
     i13 = i22;
     i14 = i24;
     break L4;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i26;
    }
   }
   HEAP32[i1 >> 2] = i19;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i13 | 0) != 0 ? i13 : i14;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10SVGElement15viewportElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 4096 | 0) == 0) {
   i3 = 4;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
    i3 = 4;
    break;
   }
   i4 = HEAP32[i2 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i3 | 0) == 4) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = HEAP32[__ZN7WebCore8SVGNames9symbolTagE >> 2] | 0;
 i2 = i1 + 12 | 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[__ZN7WebCore8SVGNames8imageTagE >> 2] | 0;
 i8 = i7 + 12 | 0;
 i9 = i7 + 16 | 0;
 i10 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 i11 = i10 + 12 | 0;
 i12 = i10 + 16 | 0;
 i13 = i4;
 L10 : while (1) {
  i4 = i13 | 0;
  i14 = HEAP32[i13 + 12 >> 2] | 0;
  i15 = (i14 & 4 | 0) == 0;
  do {
   if (!i15) {
    i16 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i16 | 0) == (i10 | 0)) {
     break L10;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break L10;
     }
    }
    if (i15) {
     break;
    }
    i16 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i16 | 0) == (i7 | 0)) {
     break L10;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break L10;
     }
    }
    if (i15) {
     break;
    }
    i16 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i16 | 0) == (i1 | 0)) {
     break L10;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     break L10;
    }
   }
  } while (0);
  do {
   if ((i14 & 4096 | 0) == 0) {
    i3 = 24;
   } else {
    if ((HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i13 | 0)) {
     i3 = 24;
     break;
    }
    i17 = HEAP32[i4 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i3 | 0) == 24) {
   i3 = 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
  }
  if ((i17 | 0) == 0) {
   i5 = 0;
   i3 = 26;
   break;
  } else {
   i13 = i17;
  }
 }
 if ((i3 | 0) == 26) {
  return i5 | 0;
 }
 i5 = i13;
 return i5 | 0;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1 | 0, i2);
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = _strlen(i7 | 0) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = _strlen(i10 | 0) | 0;
 i12 = i1 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i15 = i1 + 12 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i11 + i8 + i14 + i17 | 0;
 if ((i5 | 0) == 0) {
  i18 = i7;
  i19 = i10;
  i20 = i13;
 } else {
  i13 = 0;
  while (1) {
   HEAP16[i2 + (i16 + i13 << 1) >> 1] = HEAPU8[i4 + i13 | 0] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i18 = HEAP32[i6 >> 2] | 0;
  i19 = HEAP32[i9 >> 2] | 0;
  i20 = HEAP32[i12 >> 2] | 0;
 }
 i12 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(i18 | 0) | 0;
 i18 = _strlen(i19 | 0) | 0;
 if ((i20 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = HEAP32[i15 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = i3 + i12 + i18 + i21 + i22 | 0;
 i22 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i22 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i22 + 4 >> 2] | 0;
 if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
  i21 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i23 = 0;
  }
  while (1) {
   HEAP16[i2 + (i23 + i20 << 1) >> 1] = HEAP16[i21 + (i23 << 1) >> 1] | 0;
   i23 = i23 + 1 | 0;
   if (i23 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i23 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i24 = 0;
  }
  while (1) {
   HEAP16[i2 + (i24 + i20 << 1) >> 1] = HEAPU8[i23 + i24 | 0] | 0;
   i24 = i24 + 1 | 0;
   if (i24 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i2) | 0;
  HEAP32[i7 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i8;
 }
 if ((i6 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i8 = i10 & i5;
 i9 = i6 + (i8 << 2) | 0;
 i7 = i4 | 0;
 i2 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 i12 = i2 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i9 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 if (i2) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i2 = (i10 >>> 23) + ~i10 | 0;
 i10 = i2 << 12 ^ i2;
 i2 = i10 >>> 7 ^ i10;
 i10 = i2 << 2 ^ i2;
 i2 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i13 = i8;
 i8 = i9;
 i9 = i12;
 while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  if ((i12 | 0) != -1) {
   if ((i12 | 0) == (HEAP32[i1 >> 2] | 0)) {
    i11 = i8;
    i14 = 11;
    break;
   }
  }
  i12 = (i10 | 0) == 0 ? i2 : i10;
  i15 = i12 + i13 & i5;
  i16 = i6 + (i15 << 2) | 0;
  i17 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i16 | 0;
  i17 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  if (i17) {
   i11 = 0;
   i14 = 10;
   break;
  } else {
   i10 = i12;
   i13 = i15;
   i8 = i16;
   i9 = i18;
  }
 }
 if ((i14 | 0) == 11) {
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i14 | 0) == 10) {
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore10SVGElement20synchronizeClassNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = 0;
   i7 = i6;
  } else {
   i6 = i5 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i4 | 0;
    HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
    i9 = i8;
   } else {
    i8 = i3 | 0;
    HEAP32[i8 >> 2] = i5;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    i10 = i4 | 0;
    HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
    i9 = i10;
   }
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i7 = i9;
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    i7 = i9;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i11 = HEAP32[H_BASE + 1624 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i9, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i9;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i11 = i9;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i11 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i4 | 0;
 i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i11;
  STACKTOP = i2;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEEES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i9 = i5 + 20 | 0;
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 24 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
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
function __ZN3WTF7HashSetIPN7WebCore18SVGElementInstanceENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore10SVGElement22customStyleForRendererEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 60 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i2 | 0;
  } else {
   i8 = i2 | 0;
   if ((HEAP32[i6 + 28 >> 2] | 0) == 0) {
    i7 = i8;
    break;
   }
   i9 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i8) | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = 0;
    } else {
     i8 = i9 + 32 | 0;
     if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
      i11 = i8 | 0;
     } else {
      i11 = HEAP32[i8 >> 2] | 0;
     }
     i8 = HEAP32[i11 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = HEAP32[i8 + 36 >> 2] | 0;
    }
   } while (0);
   i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i8 = i9 + 320 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i9);
    i13 = HEAP32[i8 >> 2] | 0;
   } else {
    i13 = i12;
   }
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i14 = 0;
   } else {
    i14 = HEAP32[i12 + 28 >> 2] | 0;
   }
   __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i4, i13, i14 | 0, i10, 1, 0, 0);
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i7 = i4 + 320 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i4);
  i15 = HEAP32[i7 >> 2] | 0;
 } else {
  i15 = i10;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i15, i2 | 0, 0, 0, 0, 0);
 STACKTOP = i3;
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
function __ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 | 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (HEAP8[H_BASE + 1520 | 0] | 0) {
  if ((HEAP32[H_BASE + 1604 >> 2] | 0) == 0) {
   i4 = 5;
  }
 } else {
  _memset(H_BASE + 1592 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1520 | 0] = 1;
  i4 = 5;
 }
 if ((i4 | 0) == 5) {
  __ZN7WebCoreL39populateAttributeNameToCSSPropertyIDMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS_13CSSPropertyIDENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE(H_BASE + 1592);
 }
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0;
 i2 = i4;
 i1 = HEAP32[H_BASE + 1600 >> 2] | 0;
 i5 = HEAP32[H_BASE + 1592 >> 2] | 0;
 i6 = i4;
 i4 = i6 + ~(i6 << 15) | 0;
 i6 = (i4 >>> 10 ^ i4) * 9 & -1;
 i4 = i6 >>> 6 ^ i6;
 i6 = i4 + ~(i4 << 11) | 0;
 i4 = i6 >>> 16 ^ i6;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i6 = i4 & i1;
 i7 = i5 + (i6 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L13 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i4 >>> 23) + ~i4 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i6;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i3 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i1;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break L13;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i3 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 return i3 | 0;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i6 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i7 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
 i6 = i3 + 4 | 0;
 i8 = i7 + (HEAPU16[i6 >> 1] | 0) + (i7 >>> 11) | 0;
 i7 = i8 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i8 << 16;
 i8 = (i7 >>> 11) + i7 | 0;
 i7 = i8 << 3 ^ i8;
 i8 = (i7 >>> 5) + i7 | 0;
 i7 = i8 << 2 ^ i8;
 i8 = (i7 >>> 15) + i7 | 0;
 i7 = (i8 << 10 ^ i8) & 16777215;
 i8 = (i7 | 0) == 0 ? 8388608 : i7;
 i7 = i3 | 0;
 i3 = (i8 >>> 23) + ~i8 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = i8;
 i8 = 0;
 i9 = 0;
 while (1) {
  i10 = i2 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i13 = 4;
    break;
   }
  }
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = 7;
    break;
   }
  }
  i14 = (i8 | 0) == 0 ? i3 : i8;
  i2 = i14 + i10 | 0;
  i8 = i14;
  i9 = (i12 | 0) == -1 ? i11 : i9;
 }
 if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringES3_EENS1_INS1_IT_T0_EET1_EERKSC_SD_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = (i11 | 0) == 0;
 if (!i2) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 do {
  if (i2) {
   HEAP32[i1 + 24 >> 2] = i3;
  } else {
   i10 = i11 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i7 + 2;
   HEAP32[i1 + 24 >> 2] = i3;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 if ((i7 | 0) != 0) {
  i8 = 0;
  while (1) {
   HEAP16[i2 + (i8 << 1) >> 1] = HEAPU8[i6 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 + i7 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 + i7 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   i11 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = i11;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i11;
  }
 } while (0);
 i5 = i9 + i10 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i14 = 0;
 }
 while (1) {
  HEAP16[i2 + (i5 + i14 << 1) >> 1] = HEAPU8[i3 + i14 | 0] | 0;
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 11;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 10;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 11) {
  return i8 | 0;
 } else if ((i12 | 0) == 10) {
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1 | 0, i2);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _strlen(i9 | 0) | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i14 = i10 + i7 + i13 | 0;
 i13 = i1 + 12 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = i6;
   i16 = i9;
   i17 = i12;
  } else {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i15 = i6;
    i16 = i9;
    i17 = i12;
    break;
   } else {
    i18 = 0;
   }
   while (1) {
    HEAP8[i2 + (i14 + i18) | 0] = HEAP8[i10 + i18 | 0] | 0;
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   i15 = HEAP32[i5 >> 2] | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i11 = _strlen(i15 | 0) | 0;
 i15 = _strlen(i16 | 0) | 0;
 if ((i17 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i15 + i11 + i19 | 0;
 i19 = HEAP32[i13 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
  i21 = i17 + i20 | 0;
  i22 = i2 + i21 | 0;
  _memcpy(i22 | 0, i3 | 0, i4) | 0;
  return;
 }
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 i21 = i17 + i20 | 0;
 i22 = i2 + i21 | 0;
 _memcpy(i22 | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_NS_12AtomicStringEEENS1_INS1_IT_T0_EET1_EERKSB_SC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i11 = i2 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10 + 2;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore10SVGElement23isAnimatableCSSPropertyERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if (HEAP8[H_BASE + 1512 | 0] | 0) {
  if ((HEAP32[H_BASE + 1572 >> 2] | 0) == 0) {
   i2 = 4;
  }
 } else {
  _memset(H_BASE + 1560 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1512 | 0] = 1;
  i2 = 4;
 }
 if ((i2 | 0) == 4) {
  __ZN7WebCoreL46populateAttributeNameToAnimatedPropertyTypeMapERN3WTF7HashMapIPNS_13QualifiedName17QualifiedNameImplENS_20AnimatedPropertyTypeENS0_7PtrHashIS4_EENS0_10HashTraitsIS4_EENS8_IS5_EEEE(H_BASE + 1560);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[H_BASE + 1560 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i4 & i6;
 i7 = i1 + (i5 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L10 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i5;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L10;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i1 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCoreL39populateAttributeNameToCSSPropertyIDMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS_13CSSPropertyIDENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i1 | 0;
 i1 = 0;
 while (1) {
  i10 = (HEAP32[HEAP32[H_BASE + 544 + (i1 << 2) >> 2] >> 2] | 0) + 12 | 0;
  HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i4 >> 2] = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i10 | 0) | 0;
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i5, i9, i3, i4);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 61 >>> 0) {
   break;
  }
 }
 HEAP32[i6 >> 2] = HEAP32[(HEAP32[__ZN7WebCore8SVGNames20transform_originAttrE >> 2] | 0) + 12 >> 2];
 HEAP32[i7 >> 2] = 346;
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i8, i9, i6, i7);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10SVGElement9classNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i4 = HEAP32[H_BASE + 1624 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i5;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[i3 + 28 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 84 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 60 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(44) | 0;
   i6 = i5;
   i7 = i5 + 32 | 0;
   _memset(i5 | 0, 0, 32) | 0;
   HEAP8[i7] = HEAP8[i7] & -8;
   HEAP32[i5 + 36 >> 2] = 0;
   HEAP32[i5 + 40 >> 2] = 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i8 = i6;
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i8 = HEAP32[i4 >> 2] | 0;
  } else {
   i8 = i1;
  }
 } while (0);
 i1 = i8 + 36 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  STACKTOP = i2;
  return i9 | 0;
 }
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i3, 2);
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
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
 i9 = HEAP32[i1 >> 2] | 0;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZNK7WebCore10SVGElement15ownerSVGElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 4096 | 0) == 0) {
   i3 = 4;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
    i3 = 4;
    break;
   }
   i4 = HEAP32[i2 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i3 | 0) == 4) {
  i4 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 i2 = i1 + 12 | 0;
 i6 = i1 + 16 | 0;
 i7 = i4;
 L10 : while (1) {
  i4 = i7 | 0;
  i8 = HEAP32[i7 + 12 >> 2] | 0;
  do {
   if ((i8 & 4 | 0) != 0) {
    i9 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i9 | 0) == (i1 | 0)) {
     break L10;
    }
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     break L10;
    }
   }
  } while (0);
  do {
   if ((i8 & 4096 | 0) == 0) {
    i3 = 16;
   } else {
    if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i7 | 0)) {
     i3 = 16;
     break;
    }
    i10 = HEAP32[i4 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i3 | 0) == 16) {
   i3 = 0;
   i10 = HEAP32[i7 + 16 >> 2] | 0;
  }
  if ((i10 | 0) == 0) {
   i5 = 0;
   i3 = 20;
   break;
  } else {
   i7 = i10;
  }
 }
 if ((i3 | 0) == 20) {
  return i5 | 0;
 }
 i5 = i7;
 return i5 | 0;
}
function __ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i2 | 0) != (i3 | 0)) {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = i1 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 8388608 | 0) != 0) {
   if ((__ZNK7WebCore4Node25parentOrShadowHostElementEv(i3) | 0) == 0) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore4Node25parentOrShadowHostElementEv(i3) | 0) + 12 >> 2] & 32 | 0) == 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i1 & 4 | 0) != 0) {
   i2 = HEAP32[i3 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
   if ((i2 | 0) == (i5 | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (i1 & 32 | 0) == 0;
 return i4 | 0;
}
function __ZN7WebCore18SVGElementRareData21overrideComputedStyleEPNS_7ElementEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 32 | 0;
 i7 = HEAP8[i6] | 0;
 if ((i7 & 2) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = i1 + 40 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((i7 & 4) == 0) {
    i8 = i1;
   } else {
    break;
   }
   STACKTOP = i4;
   return i8 | 0;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i7 = i1 + 320 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i1);
  i11 = HEAP32[i7 >> 2] | 0;
 } else {
  i11 = i10;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i5, i11, i2, i3, 1, 1, 0);
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP8[i6] = HEAP8[i6] & -5;
 i8 = HEAP32[i9 >> 2] | 0;
 STACKTOP = i4;
 return i8 | 0;
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
function __ZNK7WebCore10SVGElement7xmlbaseEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i2 + 48 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == 0) {
   i4 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i5 = i2 >>> 1 & 134217727;
    i6 = i3 + 20 | 0;
   } else {
    i2 = i3 + 24 | 0;
    i5 = HEAP32[i2 + 8 >> 2] | 0;
    i6 = HEAP32[i2 >> 2] | 0;
   }
   if ((i5 | 0) == 0) {
    i4 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore8XMLNames8baseAttrE >> 2] | 0;
   i7 = i2 + 12 | 0;
   i8 = i2 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i6 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i5 >>> 0) {
     i9 = i11;
    } else {
     i4 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i4 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i6 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
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
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 _memcpy(i2 | 0, i6 | 0, i7) | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
   i9 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i1;
    i13 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i2 + (i14 + i7) | 0] = HEAP8[i11 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
    i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     i8 = 0;
     i9 = i14;
     break;
    } else {
     i12 = i10;
     i13 = i14;
    }
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = i13;
  }
 } while (0);
 _memcpy(i2 + (i8 + i9) | 0, i3 | 0, i4) | 0;
 return;
}
function __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = __ZN7WebCore17DOMImplementation10hasFeatureERKN3WTF6StringES4_(i4, i5) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return i2 | 0;
 }
 i6 = i5 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i1;
  return i2 | 0;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i1;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore10SVGElement10setXmlbaseERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i1);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i1;
    i8 = i1 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i6, __ZN7WebCore8XMLNames8baseAttrE, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i4 + i3 + i6 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = 0;
  }
  while (1) {
   HEAP16[i2 + (i7 + i5 << 1) >> 1] = HEAP16[i3 + (i7 << 1) >> 1] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i8 = 0;
  }
  while (1) {
   HEAP16[i2 + (i8 + i5 << 1) >> 1] = HEAPU8[i7 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore10SVGElement20mapInstanceToElementEPNS_18SVGElementInstanceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 60 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(44) | 0;
   i7 = i6;
   i8 = i6 + 32 | 0;
   _memset(i6 | 0, 0, 32) | 0;
   HEAP8[i8] = HEAP8[i8] & -8;
   HEAP32[i6 + 36 >> 2] = 0;
   HEAP32[i6 + 40 >> 2] = 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i6 | 0) == 0) {
    i9 = i7;
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   i9 = HEAP32[i2 >> 2] | 0;
  } else {
   i9 = i1;
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i9 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10SVGElement30lookupOrCreateClassNameWrapperEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i5 = HEAP32[H_BASE + 1624 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i6;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 84 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 16 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i4 + i3 + i5 + i7 + i8 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 i7 = HEAP32[i8 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i9 = 0;
 }
 while (1) {
  HEAP8[i2 + (i6 + i9) | 0] = HEAP8[i7 + i9 | 0] | 0;
  i9 = i9 + 1 | 0;
  if (i9 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2);
  __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
  return;
 } else {
  __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i1, 0, i1);
  __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2);
  i2 = i1 + 20 | 0;
  __ZN7WebCore21SVGDocumentExtensions36rebuildAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
  __ZN7WebCore21SVGDocumentExtensions35removeAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
  __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
  return;
 }
}
function __ZN7WebCore10SVGElement19setCursorImageValueEPNS_19CSSCursorImageValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(44) | 0;
   i6 = i5;
   i7 = i5 + 32 | 0;
   _memset(i5 | 0, 0, 32) | 0;
   HEAP8[i7] = HEAP8[i7] & -8;
   HEAP32[i5 + 36 >> 2] = 0;
   HEAP32[i5 + 40 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i8 = i6;
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i8 = HEAP32[i3 >> 2] | 0;
  } else {
   i8 = i4;
  }
 } while (0);
 i4 = i8 + 24 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((i8 | 0) == (i2 | 0)) {
    return;
   } else {
    __ZN7WebCore19CSSCursorImageValue23removeReferencedElementEPNS_10SVGElementE(i8, i1);
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP8[i4 + 32 | 0] & 2) == 0) {
    break;
   }
   i5 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i1 | 0) | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = 0;
    } else {
     i7 = i5 + 32 | 0;
     if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
      i8 = i7 | 0;
     } else {
      i8 = HEAP32[i7 >> 2] | 0;
     }
     i7 = HEAP32[i8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i6 = 0;
      break;
     }
     i6 = HEAP32[i7 + 36 >> 2] | 0;
    }
   } while (0);
   i9 = __ZN7WebCore18SVGElementRareData21overrideComputedStyleEPNS_7ElementEPNS_11RenderStyleE(HEAP32[i3 >> 2] | 0, i1 | 0, i6) | 0;
   return i9 | 0;
  }
 } while (0);
 i9 = __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1 | 0, i2) | 0;
 return i9 | 0;
}
function __ZN7WebCore10SVGElement16setCursorElementEPNS_16SVGCursorElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(44) | 0;
   i6 = i5;
   i7 = i5 + 32 | 0;
   _memset(i5 | 0, 0, 32) | 0;
   HEAP8[i7] = HEAP8[i7] & -8;
   HEAP32[i5 + 36 >> 2] = 0;
   HEAP32[i5 + 40 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i8 = i6;
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i8 = HEAP32[i3 >> 2] | 0;
  } else {
   i8 = i4;
  }
 } while (0);
 i4 = i8 + 20 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((i8 | 0) == (i2 | 0)) {
    return;
   } else {
    __ZN7WebCore16SVGCursorElement23removeReferencedElementEPNS_10SVGElementE(i8, i1);
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN7WebCoreL46populateAttributeNameToAnimatedPropertyTypeMapERN3WTF7HashMapIPNS_13QualifiedName17QualifiedNameImplENS_20AnimatedPropertyTypeENS0_7PtrHashIS4_EENS0_10HashTraitsIS4_EENS8_IS5_EEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i1 = 0;
 while (1) {
  HEAP32[i3 >> 2] = HEAP32[HEAP32[H_BASE + 104 + (i1 << 3) >> 2] >> 2];
  __ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i4, i5, i3, H_BASE + 104 + (i1 << 3) + 4 | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 55 >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18SVGElementRareDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 348 >> 2] & 255](i1 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 | 0;
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i5 = i1;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 255](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 156 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 255](i3) | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 160 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2, i3, 0);
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i3 + 1680 >> 2] | 0)) {
  __ZN7WebCore21SVGDocumentExtensions36rebuildAllElementReferencesForTargetEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(i3) | 0, i1);
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i6 = i5;
 }
 if ((i6 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 612 >> 2] & 127](i1, i2);
 return;
}
function __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 36 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i4 = 8;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 36 | 0) == 36) {
   i5 = i1;
   break;
  } else {
   i2 = i1 + 28 | 0;
  }
 }
 if ((i4 | 0) == 8) {
  return i3 | 0;
 }
 L6 : while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 640 >> 2] & 255](i5) | 0) {
   i6 = i5;
  } else {
   i3 = 0;
   i4 = 9;
   break;
  }
  while (1) {
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 1;
    i4 = 10;
    break L6;
   }
   if ((HEAP32[i2 + 12 >> 2] & 36 | 0) == 36) {
    i5 = i2;
    continue L6;
   } else {
    i6 = i2;
   }
  }
 }
 if ((i4 | 0) == 9) {
  return i3 | 0;
 } else if ((i4 | 0) == 10) {
  return i3 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore20AnimatedPropertyTypeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 32 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = i1 | 0;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i5 | 0) != (i1 | 0)) {
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i3, i2) | 0;
 return i4 | 0;
}
function __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) >= 0) {
  return;
 }
 i4 = (HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore7anyNameE >> 2] | 0);
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 652 >> 2] & 255](i1) | 0;
 if (i4) {
  __ZN7WebCore25SVGAttributeToPropertyMap21synchronizePropertiesEPNS_10SVGElementE(i5, i1);
  i4 = (HEAP32[i3 >> 2] | 0) + 4 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & 2147483647;
  return;
 } else {
  __ZN7WebCore25SVGAttributeToPropertyMap19synchronizePropertyEPNS_10SVGElementERKNS_13QualifiedNameE(i5, i1, i2) | 0;
  return;
 }
}
function __ZN7WebCore10SVGElement23setCorrespondingElementEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 60 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(44) | 0;
   i5 = i4;
   i6 = i4 + 32 | 0;
   _memset(i4 | 0, 0, 32) | 0;
   HEAP8[i6] = HEAP8[i6] & -8;
   HEAP32[i4 + 36 >> 2] = 0;
   HEAP32[i4 + 40 >> 2] = 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i4 | 0) == 0) {
    i7 = i5;
    break;
   }
   __ZN7WebCore18SVGElementRareDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i1;
  }
 } while (0);
 HEAP32[i7 + 28 >> 2] = i2;
 return;
}
function __ZN7WebCore10SVGElement14getBoundingBoxERNS_9FloatRectENS_12SVGLocatable19StyleUpdateStrategyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 588 >> 2] & 255](i1) | 0)) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 676 >> 2] & 31](i5, i1, i3);
 i3 = i2;
 i2 = i5;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i6 = 1;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN7WebCore10SVGElement21classNamePropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 1536 | 0] | 0) {
  i1 = HEAP32[H_BASE + 1624 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 15, 0, __ZN7WebCore9HTMLNames9classAttrE, (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 1624 >> 2] = i2;
  HEAP8[H_BASE + 1536 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEE10setBaseValERKS2_Ri(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i1 | 0);
 return;
}
function __ZN7WebCore10SVGElement17ensureSVGRareDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 60 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(44) | 0;
 i4 = i1;
 i5 = i1 + 32 | 0;
 _memset(i1 | 0, 0, 32) | 0;
 HEAP8[i5] = HEAP8[i5] & -8;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i3 = i4;
  return i3 | 0;
 }
 __ZN7WebCore18SVGElementRareDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 i3 = HEAP32[i2 >> 2] | 0;
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
function __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE(i2) | 0;
 if ((i5 | 0) <= 0) {
  return;
 }
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i4, i5, i3 | 0);
 return;
}
function __ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 do {
  if ((__ZNK7WebCore4Node25parentOrShadowHostElementEv(i3) | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node25parentOrShadowHostElementEv(i3) | 0) + 12 >> 2] & 32 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = __ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2) | 0;
 return i4 | 0;
}
function __ZNK7WebCore10SVGElement19instancesForElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  return i3 | 0;
 }
 if (HEAP8[H_BASE + 1504 | 0] | 0) {
  i3 = HEAP32[H_BASE + 1552 >> 2] | 0;
  return i3 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i1 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1552 >> 2] = i1;
  HEAP8[H_BASE + 1504 | 0] = 1;
  i3 = i1;
  return i3 | 0;
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
function __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2) | 0;
 __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i1, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i1) | 0, i1);
 __ZN7WebCore10SVGElement29buildPendingResourcesIfNeededEv(i1);
 return 0;
}
function __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return 1;
 }
 i4 = HEAP32[i1 + 12 >> 2] & 114688;
 if ((i4 | 0) == 49152) {
  return 1;
 }
 if (!((i2 | 0) > 0 | (i4 | 0) != 0)) {
  return 1;
 }
 i4 = i3 + 32 | 0;
 HEAP8[i4] = HEAP8[i4] | 4;
 return 1;
}
function __ZN7WebCore10SVGElement21removeInstanceMappingEPNS_18SVGElementInstanceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore18SVGElementInstanceENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(HEAP32[i1 + 60 >> 2] | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10SVGElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 1528 | 0] | 0) {
  i2 = HEAP32[H_BASE + 1616 >> 2] | 0;
  return i2 | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1616 >> 2] = i3;
  HEAP8[H_BASE + 1528 | 0] = 1;
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore10SVGElement22attributeToPropertyMapEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 1528 | 0] | 0) {
  i1 = HEAP32[H_BASE + 1616 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1616 >> 2] = i3;
  HEAP8[H_BASE + 1528 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2);
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1);
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element21finishParsingChildrenEv(i1 | 0);
 if (__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i1) | 0) {
  return;
 }
 __ZN7WebCore10SVGElement26sendSVGLoadEventIfPossibleEb(i1, 0);
 return;
}
function viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10SVGElement27setUseOverrideComputedStyleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 32 | 0;
 HEAP8[i1] = HEAP8[i1] & -3 | (i2 & 1) << 1;
 return;
}
function __ZN7WebCore10SVGElement15accessKeyActionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1 | 0, 0, i2 & 1, 1);
 return;
}
function __ZN7WebCore10SVGElement25setInstanceUpdatesBlockedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 32 | 0;
 HEAP8[i1] = HEAP8[i1] & -2 | i2 & 1;
 return;
}
function __ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore10SVGElement22instanceUpdatesBlockedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 32 | 0] & 1) != 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore10SVGElement20correspondingElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (__ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE(i2) | 0) > 0 | 0;
}
function __ZN7WebCore10SVGElement16isKnownAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i2 >> 2] | 0) == (HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0) | 0;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore10SVGElement40sendSVGLoadEventIfPossibleAsynchronouslyEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase5startEdd(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 620 >> 2] & 255](i1) | 0, +0, +0);
 return;
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1);
 return;
}
function __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 356 >> 2] & 255](i1) | 0;
}
function __ZN7WebCore10SVGElement27accessDocumentSVGExtensionsEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
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
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function __ZN7WebCore10SVGElement22svgLoadEventTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement26sendSVGLoadEventIfPossibleEb(i1, 0);
 return;
}
function v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function __ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEPS0_(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 632 >> 2] & 63](i1);
 return;
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEPS0_(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i1);
 return;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEPS0_(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 636 >> 2] & 63](i1);
 return;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore10SVGElement20synchronizeClassNameEPS0_(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement20synchronizeClassNameEv(i1);
 return;
}
function vii___ZNK7WebCore7Element8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element8nodeNameEv(i1 | 0, i2 | 0);
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
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function __ZN7WebCore10SVGElement23cursorImageValueRemovedEv(i1) {
 i1 = i1 | 0;
 HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 2] = 0;
 return;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function __ZN7WebCore10SVGElement20cursorElementRemovedEv(i1) {
 i1 = i1 | 0;
 HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + 20 >> 2] = 0;
 return;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore7Element8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZN7WebCore10SVGElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore10SVGElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement21supplementalTransformEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement15supportsMarkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isFilterEffectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isTextContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
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
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb,b0,__ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,__ZN7WebCore10SVGElementD2Ev,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore10SVGElement21finishParsingChildrenEv,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper
  ,b1,__ZN7WebCore10SVGElementD0Ev,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,__ZN7WebCore10SVGElement20synchronizeClassNameEPS0_,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED1Ev,b1,__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,__ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper
  ,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,__ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b2,__ZN7WebCore10SVGElement22customStyleForRendererEv,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,__ZNK7WebCore10SVGElement5titleEv,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,__ZN7WebCore10SVGElement15accessKeyActionEb,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore10SVGElement30lookupOrCreateClassNameWrapperEPS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper
  ,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,__ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore10SVGElement14isFilterEffectEv,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper
  ,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,__ZNK7WebCore10SVGElement15supportsMarkersEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZN7WebCore10SVGElement17svgLoadEventTimerEv,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore10SVGElement14isGradientStopEv
  ,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore10SVGElement13isTextContentEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv
  ,b3,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,__ZNK7WebCore10SVGElement13isSMILElementEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b3,__ZNK7WebCore10SVGElement16isMouseFocusableEv,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,__ZNK7WebCore7Element12willValidateEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper
  ,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore10SVGElement7isValidEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZN7WebCore10SVGElement21supplementalTransformEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,__ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE,b5,__ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEE10setBaseValERKS2_Ri,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,__ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b5,viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,__ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE,b7,__ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE,b7,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b7,__ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE,b7,__ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE,b7,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7,__ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE,b7,__ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,__ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE,b8,__ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames20transform_originAttrE": __ZN7WebCore8SVGNames20transform_originAttrE, "__ZN7WebCore9HTMLNames16onmouseleaveAttrE": __ZN7WebCore9HTMLNames16onmouseleaveAttrE, "__ZN7WebCore8SVGNames14onfocusoutAttrE": __ZN7WebCore8SVGNames14onfocusoutAttrE, "__ZN7WebCore8SVGNames14visibilityAttrE": __ZN7WebCore8SVGNames14visibilityAttrE, "__ZN7WebCore8SVGNames21dominant_baselineAttrE": __ZN7WebCore8SVGNames21dominant_baselineAttrE, "__ZN7WebCore8SVGNames18stroke_linecapAttrE": __ZN7WebCore8SVGNames18stroke_linecapAttrE, "__ZN7WebCore9HTMLNames13onmouseupAttrE": __ZN7WebCore9HTMLNames13onmouseupAttrE, "__ZN7WebCore8SVGNames13clip_ruleAttrE": __ZN7WebCore8SVGNames13clip_ruleAttrE, "__ZN7WebCore8SVGNames19color_renderingAttrE": __ZN7WebCore8SVGNames19color_renderingAttrE, "__ZN7WebCore8SVGNames13onfocusinAttrE": __ZN7WebCore8SVGNames13onfocusinAttrE, "__ZN7WebCore8SVGNames11kerningAttrE": __ZN7WebCore8SVGNames11kerningAttrE, "__ZN7WebCore8SVGNames19shape_renderingAttrE": __ZN7WebCore8SVGNames19shape_renderingAttrE, "__ZN7WebCore8SVGNames18stroke_opacityAttrE": __ZN7WebCore8SVGNames18stroke_opacityAttrE, "__ZN7WebCore8SVGNames8tspanTagE": __ZN7WebCore8SVGNames8tspanTagE, "__ZN7WebCore8SVGNames13fill_ruleAttrE": __ZN7WebCore8SVGNames13fill_ruleAttrE, "__ZN7WebCore8SVGNames21stroke_miterlimitAttrE": __ZN7WebCore8SVGNames21stroke_miterlimitAttrE, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE, "__ZN7WebCore8SVGNames9colorAttrE": __ZN7WebCore8SVGNames9colorAttrE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore8SVGNames18baseline_shiftAttrE": __ZN7WebCore8SVGNames18baseline_shiftAttrE, "__ZN7WebCore8SVGNames11altGlyphTagE": __ZN7WebCore8SVGNames11altGlyphTagE, "__ZN7WebCore8SVGNames8fillAttrE": __ZN7WebCore8SVGNames8fillAttrE, "__ZN7WebCore8XMLNames8baseAttrE": __ZN7WebCore8XMLNames8baseAttrE, "__ZN7WebCore8SVGNames18text_renderingAttrE": __ZN7WebCore8SVGNames18text_renderingAttrE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames15onmousedownAttrE": __ZN7WebCore9HTMLNames15onmousedownAttrE, "__ZN7WebCore8SVGNames16unicode_bidiAttrE": __ZN7WebCore8SVGNames16unicode_bidiAttrE, "__ZN7WebCore8SVGNames12overflowAttrE": __ZN7WebCore8SVGNames12overflowAttrE, "__ZN7WebCore8SVGNames7trefTagE": __ZN7WebCore8SVGNames7trefTagE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore8SVGNames15text_anchorAttrE": __ZN7WebCore8SVGNames15text_anchorAttrE, "__ZN7WebCore8SVGNames16marker_startAttrE": __ZN7WebCore8SVGNames16marker_startAttrE, "__ZN7WebCore8SVGNames16font_variantAttrE": __ZN7WebCore8SVGNames16font_variantAttrE, "__ZN7WebCore8SVGNames19text_decorationAttrE": __ZN7WebCore8SVGNames19text_decorationAttrE, "__ZN7WebCore8SVGNames11textPathTagE": __ZN7WebCore8SVGNames11textPathTagE, "__ZN7WebCore8SVGNames8clipAttrE": __ZN7WebCore8SVGNames8clipAttrE, "__ZN7WebCore8SVGNames14font_styleAttrE": __ZN7WebCore8SVGNames14font_styleAttrE, "__ZN7WebCore8SVGNames13clip_pathAttrE": __ZN7WebCore8SVGNames13clip_pathAttrE, "__ZN7WebCore8SVGNames11opacityAttrE": __ZN7WebCore8SVGNames11opacityAttrE, "__ZN7WebCore8SVGNames13font_sizeAttrE": __ZN7WebCore8SVGNames13font_sizeAttrE, "__ZN7WebCore8SVGNames14onactivateAttrE": __ZN7WebCore8SVGNames14onactivateAttrE, "__ZN7WebCore8SVGNames10cursorAttrE": __ZN7WebCore8SVGNames10cursorAttrE, "__ZN7WebCore8SVGNames9symbolTagE": __ZN7WebCore8SVGNames9symbolTagE, "__ZN7WebCore8SVGNames8maskAttrE": __ZN7WebCore8SVGNames8maskAttrE, "__ZN7WebCore8SVGNames17color_profileAttrE": __ZN7WebCore8SVGNames17color_profileAttrE, "__ZN7WebCore8SVGNames8imageTagE": __ZN7WebCore8SVGNames8imageTagE, "__ZN7WebCore8SVGNames16stroke_widthAttrE": __ZN7WebCore8SVGNames16stroke_widthAttrE, "__ZN7WebCore8SVGNames11displayAttrE": __ZN7WebCore8SVGNames11displayAttrE, "__ZN7WebCore8SVGNames19image_renderingAttrE": __ZN7WebCore8SVGNames19image_renderingAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE, "__ZN7WebCore8SVGNames22alignment_baselineAttrE": __ZN7WebCore8SVGNames22alignment_baselineAttrE, "__ZN7WebCore9HTMLNames15onmousemoveAttrE": __ZN7WebCore9HTMLNames15onmousemoveAttrE, "__ZN7WebCore8SVGNames15font_familyAttrE": __ZN7WebCore8SVGNames15font_familyAttrE, "__ZN7WebCore8SVGNames17flood_opacityAttrE": __ZN7WebCore8SVGNames17flood_opacityAttrE, "__ZN7WebCore8SVGNames10strokeAttrE": __ZN7WebCore8SVGNames10strokeAttrE, "__ZN7WebCore8SVGNames16word_spacingAttrE": __ZN7WebCore8SVGNames16word_spacingAttrE, "__ZN7WebCore8SVGNames13mask_typeAttrE": __ZN7WebCore8SVGNames13mask_typeAttrE, "__ZN7WebCore9HTMLNames11onclickAttrE": __ZN7WebCore9HTMLNames11onclickAttrE, "__ZN7WebCore9HTMLNames14onmouseoutAttrE": __ZN7WebCore9HTMLNames14onmouseoutAttrE, "__ZN7WebCore8SVGNames21enable_backgroundAttrE": __ZN7WebCore8SVGNames21enable_backgroundAttrE, "__ZN7WebCore8SVGNames14marker_endAttrE": __ZN7WebCore8SVGNames14marker_endAttrE, "__ZN7WebCore8SVGNames18pointer_eventsAttrE": __ZN7WebCore8SVGNames18pointer_eventsAttrE, "__ZN7WebCore8SVGNames30glyph_orientation_verticalAttrE": __ZN7WebCore8SVGNames30glyph_orientation_verticalAttrE, "__ZN7WebCore8SVGNames14marker_midAttrE": __ZN7WebCore8SVGNames14marker_midAttrE, "__ZN7WebCore8SVGNames16fill_opacityAttrE": __ZN7WebCore8SVGNames16fill_opacityAttrE, "__ZN7WebCore8SVGNames15font_weightAttrE": __ZN7WebCore8SVGNames15font_weightAttrE, "__ZN7WebCore9HTMLNames16onmouseenterAttrE": __ZN7WebCore9HTMLNames16onmouseenterAttrE, "__ZN7WebCore8SVGNames16writing_modeAttrE": __ZN7WebCore8SVGNames16writing_modeAttrE, "__ZN7WebCore8SVGNames20stroke_dasharrayAttrE": __ZN7WebCore8SVGNames20stroke_dasharrayAttrE, "__ZN7WebCore8SVGNames15flood_colorAttrE": __ZN7WebCore8SVGNames15flood_colorAttrE, "__ZN7WebCore9HTMLNames15onmouseoverAttrE": __ZN7WebCore9HTMLNames15onmouseoverAttrE, "__ZN7WebCore8SVGNames14stop_colorAttrE": __ZN7WebCore8SVGNames14stop_colorAttrE, "__ZN7WebCore8SVGNames18lighting_colorAttrE": __ZN7WebCore8SVGNames18lighting_colorAttrE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore8SVGNames21stroke_dashoffsetAttrE": __ZN7WebCore8SVGNames21stroke_dashoffsetAttrE, "__ZN7WebCore8SVGNames16stop_opacityAttrE": __ZN7WebCore8SVGNames16stop_opacityAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames32glyph_orientation_horizontalAttrE": __ZN7WebCore8SVGNames32glyph_orientation_horizontalAttrE, "__ZN7WebCore8SVGNames8titleTagE": __ZN7WebCore8SVGNames8titleTagE, "__ZN7WebCore8SVGNames31color_interpolation_filtersAttrE": __ZN7WebCore8SVGNames31color_interpolation_filtersAttrE, "__ZN7WebCore8SVGNames18letter_spacingAttrE": __ZN7WebCore8SVGNames18letter_spacingAttrE, "__ZN7WebCore8SVGNames22buffered_renderingAttrE": __ZN7WebCore8SVGNames22buffered_renderingAttrE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore8SVGNames19stroke_linejoinAttrE": __ZN7WebCore8SVGNames19stroke_linejoinAttrE, "__ZN7WebCore8SVGNames13directionAttrE": __ZN7WebCore8SVGNames13directionAttrE, "__ZN7WebCore8SVGNames23color_interpolationAttrE": __ZN7WebCore8SVGNames23color_interpolationAttrE, "__ZN7WebCore8SVGNames16font_stretchAttrE": __ZN7WebCore8SVGNames16font_stretchAttrE, "__ZN7WebCore8SVGNames10filterAttrE": __ZN7WebCore8SVGNames10filterAttrE, "__ZN7WebCore8SVGNames17vector_effectAttrE": __ZN7WebCore8SVGNames17vector_effectAttrE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore8SVGNames6useTagE": __ZN7WebCore8SVGNames6useTagE, "__ZN7WebCore9HTMLNames10onloadAttrE": __ZN7WebCore9HTMLNames10onloadAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore10SVGElement9classNameEv","_strlen","__ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv","__ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE","__ZN7WebCore10SVGElement10setXmlbaseERKN3WTF6StringERi","__ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE","__ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE","__ZNK7WebCore10SVGElement22instanceUpdatesBlockedEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN7WebCore10SVGElement20mapInstanceToElementEPNS_18SVGElementInstanceE","__ZNK7WebCore7Element6targetEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore10SVGElement26sendSVGLoadEventIfPossibleEb","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEPS0_","__ZN7WebCore10SVGElement22attributeToPropertyMapEv","__ZN7WebCore10SVGElement23isAnimatableCSSPropertyERKNS_13QualifiedNameE","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEPS0_","_memcpy","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN3WTF7HashSetIPN7WebCore10SVGElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore10SVGElement40sendSVGLoadEventIfPossibleAsynchronouslyEv","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6expandEPS6_","__ZNK7WebCore4Node14customPseudoIdEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZN7WebCore10SVGElement29buildPendingResourcesIfNeededEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE","__ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN3WTF7HashSetIPN7WebCore18SVGElementInstanceENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringES3_EENS1_INS1_IT_T0_EET1_EERKSC_SD_","__ZN7WebCore10SVGElementD2Ev","__ZNK7WebCore7Element6prefixEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEE10setBaseValERKS2_Ri","__ZNK7WebCore10SVGElement7xmlbaseEv","__ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore10SVGElement17ensureSVGRareDataEv","__ZN7WebCore10SVGElement21removeInstanceMappingEPNS_18SVGElementInstanceE","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore10SVGElement27setUseOverrideComputedStyleEb","__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEEES2_EcvS3_Ev","__ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEPS0_","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore18SVGElementRareDataD2Ev","__ZN3WTF6VectorIN7WebCore20AnimatedPropertyTypeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv","__ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZN7WebCore10SVGElement33ensureAnimatedSMILStylePropertiesEv","__ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_EaSERKS9_","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore18SVGElementRareData21overrideComputedStyleEPNS_7ElementEPNS_11RenderStyleE","__ZN7WebCore10SVGElement20correspondingElementEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore4Node11sheetLoadedEv","__ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_NS_12AtomicStringEEENS1_INS1_IT_T0_EET1_EERKSB_SC_","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED1Ev","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv","__ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore10SVGElement21classNamePropertyInfoEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPt","__ZN7WebCore10SVGElement17svgLoadEventTimerEv","__ZNK7WebCore10SVGElement5titleEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EENS_12AtomicStringEE7writeToEPh","__ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE","__ZN7WebCore10SVGElement16isKnownAttributeERKNS_13QualifiedNameE","__ZN7WebCore10SVGElement23cursorImageValueRemovedEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCoreL46populateAttributeNameToAnimatedPropertyTypeMapERN3WTF7HashMapIPNS_13QualifiedName17QualifiedNameImplENS_20AnimatedPropertyTypeENS0_7PtrHashIS4_EENS0_10HashTraitsIS4_EENS8_IS5_EEEE","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZN7WebCore10SVGElement14getBoundingBoxERNS_9FloatRectENS_12SVGLocatable19StyleUpdateStrategyE","__ZN7WebCore10SVGElement24getPresentationAttributeERKN3WTF6StringE","__ZN7WebCore10SVGElement22customStyleForRendererEv","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZN7WebCore10SVGElement21finishParsingChildrenEv","__ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCoreL39populateAttributeNameToCSSPropertyIDMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS_13CSSPropertyIDENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE","__ZN7WebCore10SVGElement20synchronizeClassNameEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore10SVGElement22svgLoadEventTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore10SVGElement15viewportElementEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore10SVGElement25setInstanceUpdatesBlockedEb","__ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore10SVGElement23setCorrespondingElementEPS0_","__ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZN7WebCore10SVGElement27accessDocumentSVGExtensionsEv","__ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv","__ZN7WebCore10SVGElementD0Ev","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore10SVGElement15accessKeyActionEb","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZNK7WebCore10SVGElement13isTextContentEv","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE","__ZNK7WebCore10SVGElement19instancesForElementEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN7WebCore10SVGElement20synchronizeClassNameEPS0_","__ZN7WebCore10SVGElement30lookupOrCreateClassNameWrapperEPS0_","__ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore10SVGElement27reportAttributeParsingErrorENS_15SVGParsingErrorERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZNK7WebCore10SVGElement16isMouseFocusableEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN3WTF9HashTableIPN7WebCore10SVGElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE","__ZN7WebCore10SVGElement19setCursorImageValueEPNS_19CSSCursorImageValueE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_N7WebCore13CSSPropertyIDEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS2_EENS_7HashMapIS2_S5_SA_NS_10HashTraitsIS2_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore10SVGElement20cursorElementRemovedEv","_memset","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZN7WebCore10SVGElement16setCursorElementEPNS_16SVGCursorElementE","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore10SVGElement15ownerSVGElementEv","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE","__ZN3WTF9HashTableIPN7WebCore13QualifiedName17QualifiedNameImplENS_12KeyValuePairIS4_NS1_20AnimatedPropertyTypeEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZNK7WebCore10SVGElement7isValidEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv","__ZN7WebCore10SVGElement32cssPropertyIdForSVGAttributeNameERKNS_13QualifiedNameE"]

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
H_BASE = parentModule["_malloc"](1224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([98,101,102,111,114,101,69,110,100,0,0,0,0,0,0,0,97,102,116,101,114,66,101,103,105,110,0,0,0,0,0,0,98,101,102,111,114,101,66,101,103,105,110,0,0,0,0,0,10,0,0,0,0,0,0,0,13,10,0,0,0,0,0,0,97,117,116,111,0,0,0,0,102,97,108,115,101,0,0,0,108,116,114,0,0,0,0,0,114,116,108,0,0,0,0,0,116,114,97,110,115,112,97,114,101,110,116,0,0,0,0,0,98,100,105,0,0,0,0,0,110,111,0,0,0,0,0,0,121,101,115,0,0,0,0,0,112,108,97,105,110,116,101,120,116,45,111,110,108,121,0,0,105,110,104,101,114,105,116,0,116,101,120,116,116,111,112,0,98,111,116,116,111,109,0,0,99,101,110,116,101,114,0,0,116,111,112,0,0,0,0,0,114,105,103,104,116,0,0,0,108,101,102,116,0,0,0,0,97,98,115,98,111,116,116,111,109,0,0,0,0,0,0,0,97,98,115,109,105,100,100,108,101,0,0,0,0,0,0,0,97,102,116,101,114,69,110,100,0,0,0,0,0,0,0,0,116,114,117,101,0,0,0,0,109,105,100,100,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames20onloadedmetadataAttrE=env.__ZN7WebCore9HTMLNames20onloadedmetadataAttrE|0;
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames26onwebkitanimationstartAttrE=env.__ZN7WebCore9HTMLNames26onwebkitanimationstartAttrE|0;
  var __ZN7WebCore9HTMLNames14onfocusoutAttrE=env.__ZN7WebCore9HTMLNames14onfocusoutAttrE|0;
  var __ZN7WebCore9HTMLNames16onmousewheelAttrE=env.__ZN7WebCore9HTMLNames16onmousewheelAttrE|0;
  var __ZN7WebCore9HTMLNames13onseekingAttrE=env.__ZN7WebCore9HTMLNames13onseekingAttrE|0;
  var __ZN7WebCore9HTMLNames13translateAttrE=env.__ZN7WebCore9HTMLNames13translateAttrE|0;
  var __ZN7WebCore9HTMLNames14onprogressAttrE=env.__ZN7WebCore9HTMLNames14onprogressAttrE|0;
  var __ZN7WebCore9HTMLNames16onmouseleaveAttrE=env.__ZN7WebCore9HTMLNames16onmouseleaveAttrE|0;
  var __ZN7WebCore9HTMLNames11onpasteAttrE=env.__ZN7WebCore9HTMLNames11onpasteAttrE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames25onwebkittransitionendAttrE=env.__ZN7WebCore9HTMLNames25onwebkittransitionendAttrE|0;
  var __ZN7WebCore9HTMLNames15ontouchmoveAttrE=env.__ZN7WebCore9HTMLNames15ontouchmoveAttrE|0;
  var __ZN7WebCore9HTMLNames13onmouseupAttrE=env.__ZN7WebCore9HTMLNames13onmouseupAttrE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames17onselectstartAttrE=env.__ZN7WebCore9HTMLNames17onselectstartAttrE|0;
  var __ZN7WebCore9HTMLNames10isindexTagE=env.__ZN7WebCore9HTMLNames10isindexTagE|0;
  var __ZN7WebCore9HTMLNames13onplayingAttrE=env.__ZN7WebCore9HTMLNames13onplayingAttrE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames13oninvalidAttrE=env.__ZN7WebCore9HTMLNames13oninvalidAttrE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames16ontimeupdateAttrE=env.__ZN7WebCore9HTMLNames16ontimeupdateAttrE|0;
  var __ZN7WebCore9HTMLNames6bdiTagE=env.__ZN7WebCore9HTMLNames6bdiTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames13onfocusinAttrE=env.__ZN7WebCore9HTMLNames13onfocusinAttrE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames16onbeforecopyAttrE=env.__ZN7WebCore9HTMLNames16onbeforecopyAttrE|0;
  var __ZN7WebCore9HTMLNames13ondragendAttrE=env.__ZN7WebCore9HTMLNames13ondragendAttrE|0;
  var __ZN7WebCore9HTMLNames14ontouchendAttrE=env.__ZN7WebCore9HTMLNames14ontouchendAttrE|0;
  var __ZN7WebCore9HTMLNames20ondurationchangeAttrE=env.__ZN7WebCore9HTMLNames20ondurationchangeAttrE|0;
  var __ZN7WebCore9HTMLNames11basefontTagE=env.__ZN7WebCore9HTMLNames11basefontTagE|0;
  var __ZN7WebCore9HTMLNames8imageTagE=env.__ZN7WebCore9HTMLNames8imageTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames15onmousedownAttrE=env.__ZN7WebCore9HTMLNames15onmousedownAttrE|0;
  var __ZN7WebCore9HTMLNames12tabindexAttrE=env.__ZN7WebCore9HTMLNames12tabindexAttrE|0;
  var __ZN7WebCore9HTMLNames16onloadeddataAttrE=env.__ZN7WebCore9HTMLNames16onloadeddataAttrE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames19ontransitionendAttrE=env.__ZN7WebCore9HTMLNames19ontransitionendAttrE|0;
  var __ZN7WebCore9HTMLNames11onwheelAttrE=env.__ZN7WebCore9HTMLNames11onwheelAttrE|0;
  var __ZN7WebCore9HTMLNames11onfocusAttrE=env.__ZN7WebCore9HTMLNames11onfocusAttrE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames13onemptiedAttrE=env.__ZN7WebCore9HTMLNames13onemptiedAttrE|0;
  var __ZN7WebCore9HTMLNames10ondropAttrE=env.__ZN7WebCore9HTMLNames10ondropAttrE|0;
  var __ZN7WebCore9HTMLNames17oncontextmenuAttrE=env.__ZN7WebCore9HTMLNames17oncontextmenuAttrE|0;
  var __ZN7WebCore9HTMLNames15ondragleaveAttrE=env.__ZN7WebCore9HTMLNames15ondragleaveAttrE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var __ZN7WebCore9HTMLNames13onsuspendAttrE=env.__ZN7WebCore9HTMLNames13onsuspendAttrE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames24onwebkitanimationendAttrE=env.__ZN7WebCore9HTMLNames24onwebkitanimationendAttrE|0;
  var __ZN7WebCore9HTMLNames14ondragoverAttrE=env.__ZN7WebCore9HTMLNames14ondragoverAttrE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore9HTMLNames6wbrTagE=env.__ZN7WebCore9HTMLNames6wbrTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames9titleAttrE=env.__ZN7WebCore9HTMLNames9titleAttrE|0;
  var __ZN7WebCore9HTMLNames12onseekedAttrE=env.__ZN7WebCore9HTMLNames12onseekedAttrE|0;
  var __ZN7WebCore9HTMLNames10oncopyAttrE=env.__ZN7WebCore9HTMLNames10oncopyAttrE|0;
  var __ZN7WebCore9HTMLNames9oncutAttrE=env.__ZN7WebCore9HTMLNames9oncutAttrE|0;
  var __ZN7WebCore9HTMLNames15onmousemoveAttrE=env.__ZN7WebCore9HTMLNames15onmousemoveAttrE|0;
  var __ZN7WebCore9HTMLNames9outputTagE=env.__ZN7WebCore9HTMLNames9outputTagE|0;
  var __ZN7WebCore9HTMLNames9sourceTagE=env.__ZN7WebCore9HTMLNames9sourceTagE|0;
  var __ZN7WebCore9HTMLNames17ontouchcancelAttrE=env.__ZN7WebCore9HTMLNames17ontouchcancelAttrE|0;
  var __ZN7WebCore9HTMLNames27onwebkitfullscreenerrorAttrE=env.__ZN7WebCore9HTMLNames27onwebkitfullscreenerrorAttrE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames16onratechangeAttrE=env.__ZN7WebCore9HTMLNames16onratechangeAttrE|0;
  var __ZN7WebCore9HTMLNames11onkeyupAttrE=env.__ZN7WebCore9HTMLNames11onkeyupAttrE|0;
  var __ZN7WebCore9HTMLNames11onclickAttrE=env.__ZN7WebCore9HTMLNames11onclickAttrE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore9HTMLNames11onresetAttrE=env.__ZN7WebCore9HTMLNames11onresetAttrE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames14onmouseoutAttrE=env.__ZN7WebCore9HTMLNames14onmouseoutAttrE|0;
  var __ZN7WebCore9HTMLNames11onabortAttrE=env.__ZN7WebCore9HTMLNames11onabortAttrE|0;
  var __ZN7WebCore9HTMLNames10onplayAttrE=env.__ZN7WebCore9HTMLNames10onplayAttrE|0;
  var __ZN7WebCore9HTMLNames9alignAttrE=env.__ZN7WebCore9HTMLNames9alignAttrE|0;
  var __ZN7WebCore9HTMLNames15onloadstartAttrE=env.__ZN7WebCore9HTMLNames15onloadstartAttrE|0;
  var __ZN7WebCore9HTMLNames12onscrollAttrE=env.__ZN7WebCore9HTMLNames12onscrollAttrE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames13onstalledAttrE=env.__ZN7WebCore9HTMLNames13onstalledAttrE|0;
  var __ZN7WebCore9HTMLNames6bdoTagE=env.__ZN7WebCore9HTMLNames6bdoTagE|0;
  var __ZN7WebCore9HTMLNames20oncanplaythroughAttrE=env.__ZN7WebCore9HTMLNames20oncanplaythroughAttrE|0;
  var __ZN7WebCore9HTMLNames11oninputAttrE=env.__ZN7WebCore9HTMLNames11oninputAttrE|0;
  var __ZN7WebCore9HTMLNames13onwaitingAttrE=env.__ZN7WebCore9HTMLNames13onwaitingAttrE|0;
  var __ZN7WebCore9HTMLNames16onmouseenterAttrE=env.__ZN7WebCore9HTMLNames16onmouseenterAttrE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames15onbeforecutAttrE=env.__ZN7WebCore9HTMLNames15onbeforecutAttrE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore9HTMLNames28onwebkitfullscreenchangeAttrE=env.__ZN7WebCore9HTMLNames28onwebkitfullscreenchangeAttrE|0;
  var __ZN7WebCore9HTMLNames15onmouseoverAttrE=env.__ZN7WebCore9HTMLNames15onmouseoverAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var __ZN7WebCore9HTMLNames18onvolumechangeAttrE=env.__ZN7WebCore9HTMLNames18onvolumechangeAttrE|0;
  var __ZN7WebCore9HTMLNames13onkeydownAttrE=env.__ZN7WebCore9HTMLNames13onkeydownAttrE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames13oncanplayAttrE=env.__ZN7WebCore9HTMLNames13oncanplayAttrE|0;
  var __ZN7WebCore9HTMLNames16ontouchstartAttrE=env.__ZN7WebCore9HTMLNames16ontouchstartAttrE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames19contenteditableAttrE=env.__ZN7WebCore9HTMLNames19contenteditableAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore9HTMLNames11onendedAttrE=env.__ZN7WebCore9HTMLNames11onendedAttrE|0;
  var __ZN7WebCore9HTMLNames14ondblclickAttrE=env.__ZN7WebCore9HTMLNames14ondblclickAttrE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames15ondragenterAttrE=env.__ZN7WebCore9HTMLNames15ondragenterAttrE|0;
  var __ZN7WebCore9HTMLNames12onselectAttrE=env.__ZN7WebCore9HTMLNames12onselectAttrE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames12onchangeAttrE=env.__ZN7WebCore9HTMLNames12onchangeAttrE|0;
  var __ZN7WebCore9HTMLNames10hiddenAttrE=env.__ZN7WebCore9HTMLNames10hiddenAttrE|0;
  var __ZN7WebCore9HTMLNames13draggableAttrE=env.__ZN7WebCore9HTMLNames13draggableAttrE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames11onpauseAttrE=env.__ZN7WebCore9HTMLNames11onpauseAttrE|0;
  var __ZN7WebCore9HTMLNames14spellcheckAttrE=env.__ZN7WebCore9HTMLNames14spellcheckAttrE|0;
  var __ZN7WebCore9HTMLNames8langAttrE=env.__ZN7WebCore9HTMLNames8langAttrE|0;
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var __ZN7WebCore9HTMLNames15ondragstartAttrE=env.__ZN7WebCore9HTMLNames15ondragstartAttrE|0;
  var __ZN7WebCore9HTMLNames30onwebkitanimationiterationAttrE=env.__ZN7WebCore9HTMLNames30onwebkitanimationiterationAttrE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZN7WebCore9HTMLNames8paramTagE=env.__ZN7WebCore9HTMLNames8paramTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames10onblurAttrE=env.__ZN7WebCore9HTMLNames10onblurAttrE|0;
  var __ZN7WebCore9HTMLNames17onbeforepasteAttrE=env.__ZN7WebCore9HTMLNames17onbeforepasteAttrE|0;
  var __ZN7WebCore9HTMLNames14onkeypressAttrE=env.__ZN7WebCore9HTMLNames14onkeypressAttrE|0;
  var __ZN7WebCore9HTMLNames12onsubmitAttrE=env.__ZN7WebCore9HTMLNames12onsubmitAttrE|0;
  var __ZN7WebCore9HTMLNames11onerrorAttrE=env.__ZN7WebCore9HTMLNames11onerrorAttrE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames10onloadAttrE=env.__ZN7WebCore9HTMLNames10onloadAttrE|0;
  var __ZN7WebCore9HTMLNames10ondragAttrE=env.__ZN7WebCore9HTMLNames10ondragAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11HTMLElementE=(H_BASE+560)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+1192)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+1224)|0;
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
function __ZN7WebCore11HTMLElement19addHTMLColorToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i1 | 0;
 i6 = i1 + 144 | 0;
 i7 = i1 + 152 | 0;
 i8 = i1 + 160 | 0;
 i9 = i1 + 168 | 0;
 i10 = i1 + 176 | 0;
 i11 = i1 + 184 | 0;
 i12 = i1 + 192 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZNK3WTF6String15stripWhiteSpaceEv(i9, i4);
 i4 = i9 | 0;
 do {
  if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 104 | 0) | 0)) {
   __ZN7WebCore5ColorC1ERKN3WTF6StringE(i10, i9);
   i13 = i10 + 4 | 0;
   if ((HEAP8[i13] & 1) == 0) {
    i14 = i5 + 12 | 0;
    i15 = i5 | 0;
    HEAP32[i15 >> 2] = i14;
    i16 = i5 + 4 | 0;
    HEAP32[i16 >> 2] = 130;
    i17 = i5 + 8 | 0;
    HEAP32[i17 >> 2] = 0;
    i18 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i18 | 0) == 0) {
      i19 = 0;
     } else {
      if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
       i19 = 0;
       break;
      }
      i20 = i18 + 8 | 0;
      if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
       i19 = HEAP16[HEAP32[i20 >> 2] >> 1] | 0;
       break;
      } else {
       i19 = HEAPU8[HEAP32[i20 >> 2] | 0] | 0;
       break;
      }
     }
    } while (0);
    i20 = i19 << 16 >> 16 == 35 | 0;
    i21 = i18;
    while (1) {
     i22 = (i21 | 0) == 0;
     if (i22) {
      i23 = 0;
     } else {
      i23 = HEAP32[i21 + 4 >> 2] | 0;
     }
     i24 = HEAP32[i17 >> 2] | 0;
     if (i20 >>> 0 >= i23 >>> 0) {
      i25 = 43;
      break;
     }
     if (i24 >>> 0 >= 128 >>> 0) {
      i25 = 44;
      break;
     }
     do {
      if (i22) {
       i26 = 0;
       i25 = 22;
      } else {
       if ((HEAP32[i21 + 4 >> 2] | 0) >>> 0 <= i20 >>> 0) {
        i26 = 0;
        i25 = 22;
        break;
       }
       i27 = i21 + 8 | 0;
       if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
        i28 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i20 << 1) >> 1] | 0;
       } else {
        i28 = HEAPU8[(HEAP32[i27 >> 2] | 0) + i20 | 0] | 0;
       }
       if ((i28 - 48 & 65535) >>> 0 < 10 >>> 0) {
        i25 = 26;
       } else {
        i26 = i28;
        i25 = 22;
       }
      }
     } while (0);
     do {
      if ((i25 | 0) == 22) {
       i25 = 0;
       if (((i26 & 65535 | 32) - 97 | 0) >>> 0 < 6 >>> 0) {
        i25 = 26;
        break;
       }
       HEAP8[i6] = 48;
       if ((i24 | 0) == (HEAP32[i16 >> 2] | 0)) {
        __ZN3WTF6VectorIcLj130ENS_15CrashOnOverflowEE14appendSlowCaseIcEEvOT_(i5, i6);
        break;
       } else {
        HEAP8[(HEAP32[i15 >> 2] | 0) + i24 | 0] = 48;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        break;
       }
      }
     } while (0);
     do {
      if ((i25 | 0) == 26) {
       i25 = 0;
       do {
        if (i22) {
         i29 = 0;
        } else {
         if ((HEAP32[i21 + 4 >> 2] | 0) >>> 0 <= i20 >>> 0) {
          i29 = 0;
          break;
         }
         i27 = i21 + 8 | 0;
         if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
          i29 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i20 << 1) >> 1] & 255;
          break;
         } else {
          i29 = HEAP8[(HEAP32[i27 >> 2] | 0) + i20 | 0] | 0;
          break;
         }
        }
       } while (0);
       if ((i24 | 0) != (HEAP32[i16 >> 2] | 0)) {
        HEAP8[(HEAP32[i15 >> 2] | 0) + i24 | 0] = i29;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        break;
       }
       i27 = i24 + 1 | 0;
       i30 = i27 + (i24 >>> 2) | 0;
       i31 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
       i30 = i31 >>> 0 > i27 >>> 0 ? i31 : i27;
       do {
        if (i24 >>> 0 < i30 >>> 0) {
         i27 = HEAP32[i15 >> 2] | 0;
         if (i30 >>> 0 > 130 >>> 0) {
          i31 = __ZN3WTF18fastMallocGoodSizeEj(i30) | 0;
          HEAP32[i16 >> 2] = i31;
          i32 = __ZN3WTF10fastMallocEj(i31) | 0;
          HEAP32[i15 >> 2] = i32;
          i33 = i32;
         } else {
          HEAP32[i15 >> 2] = i14;
          HEAP32[i16 >> 2] = 130;
          i33 = i14;
         }
         _memcpy(i33 | 0, i27 | 0, i24) | 0;
         if ((i14 | 0) == (i27 | 0) | (i27 | 0) == 0) {
          break;
         }
         if ((HEAP32[i15 >> 2] | 0) == (i27 | 0)) {
          HEAP32[i15 >> 2] = 0;
          HEAP32[i16 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i27);
        }
       } while (0);
       HEAP8[(HEAP32[i15 >> 2] | 0) + (HEAP32[i17 >> 2] | 0) | 0] = i29;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
      }
     } while (0);
     i20 = i20 + 1 | 0;
     i21 = HEAP32[i4 >> 2] | 0;
    }
    if ((i25 | 0) == 43) {
     if ((i24 | 0) == 0) {
      i34 = -16777216;
     } else {
      i25 = 44;
     }
    }
    do {
     if ((i25 | 0) == 44) {
      HEAP8[i7] = 48;
      if ((i24 | 0) == (HEAP32[i16 >> 2] | 0)) {
       __ZN3WTF6VectorIcLj130ENS_15CrashOnOverflowEE14appendSlowCaseIcEEvOT_(i5, i7);
       i35 = HEAP32[i17 >> 2] | 0;
      } else {
       HEAP8[(HEAP32[i15 >> 2] | 0) + i24 | 0] = 48;
       i21 = (HEAP32[i17 >> 2] | 0) + 1 | 0;
       HEAP32[i17 >> 2] = i21;
       i35 = i21;
      }
      HEAP8[i8] = 48;
      if ((i35 | 0) == (HEAP32[i16 >> 2] | 0)) {
       __ZN3WTF6VectorIcLj130ENS_15CrashOnOverflowEE14appendSlowCaseIcEEvOT_(i5, i8);
       i36 = HEAP32[i17 >> 2] | 0;
      } else {
       HEAP8[(HEAP32[i15 >> 2] | 0) + i35 | 0] = 48;
       i21 = (HEAP32[i17 >> 2] | 0) + 1 | 0;
       HEAP32[i17 >> 2] = i21;
       i36 = i21;
      }
      do {
       if (i36 >>> 0 < 6 >>> 0) {
        if ((i36 | 0) == 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        i21 = HEAP32[i15 >> 2] | 0;
        i20 = HEAP8[i21] | 0;
        i18 = i20 << 24 >> 24;
        if (i20 << 24 >> 24 < 65) {
         i37 = i18 - 48 | 0;
        } else {
         i37 = i18 + 9 & 15;
        }
        if (i36 >>> 0 <= 1 >>> 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        i18 = HEAP8[i21 + 1 | 0] | 0;
        i20 = i18 << 24 >> 24;
        if (i18 << 24 >> 24 < 65) {
         i38 = i20 - 48 | 0;
        } else {
         i38 = i20 + 9 & 15;
        }
        if (i36 >>> 0 <= 2 >>> 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        i20 = HEAP8[i21 + 2 | 0] | 0;
        i21 = i20 << 24 >> 24;
        if (i20 << 24 >> 24 < 65) {
         i39 = i21 - 48 | 0;
        } else {
         i39 = i21 + 9 & 15;
        }
        i40 = __ZN7WebCore7makeRGBEiii(i37, i38, i39) | 0;
       } else {
        i21 = (i36 >>> 0) / 3 & -1;
        i20 = i21 >>> 0 > 8 >>> 0 ? 8 : i21;
        i18 = i21 - i20 | 0;
        if (i36 >>> 0 <= i18 >>> 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        i22 = HEAP32[i15 >> 2] | 0;
        i30 = i18;
        i18 = (i21 << 1) - i20 | 0;
        i27 = (i21 * 3 & -1) - i20 | 0;
        while (1) {
         i20 = HEAP8[i22 + i30 | 0] | 0;
         if (i20 << 24 >> 24 != 48) {
          i41 = i20;
          i25 = 79;
          break;
         }
         if (i36 >>> 0 <= i18 >>> 0) {
          i25 = 72;
          break;
         }
         if ((HEAP8[i22 + i18 | 0] | 0) != 48) {
          i41 = 48;
          i25 = 79;
          break;
         }
         if (i36 >>> 0 <= i27 >>> 0) {
          i25 = 75;
          break;
         }
         if ((HEAP8[i22 + i27 | 0] | 0) != 48) {
          i41 = 48;
          i25 = 79;
          break;
         }
         if ((i21 - i30 | 0) >>> 0 <= 2 >>> 0) {
          i41 = 48;
          i25 = 79;
          break;
         }
         i20 = i30 + 1 | 0;
         if (i36 >>> 0 > i20 >>> 0) {
          i30 = i20;
          i18 = i18 + 1 | 0;
          i27 = i27 + 1 | 0;
         } else {
          i25 = 129;
          break;
         }
        }
        if ((i25 | 0) == 72) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        } else if ((i25 | 0) == 75) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        } else if ((i25 | 0) == 79) {
         if (i36 >>> 0 <= i30 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i21 = i30 + 1 | 0;
         if (i36 >>> 0 <= i21 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i20 = HEAP8[i22 + i21 | 0] | 0;
         i21 = i41 << 24 >> 24;
         if (i41 << 24 >> 24 < 65) {
          i42 = i21 - 48 | 0;
         } else {
          i42 = i21 + 9 & 15;
         }
         i21 = i20 << 24 >> 24;
         if (i20 << 24 >> 24 < 65) {
          i43 = i21 - 48 | 0;
         } else {
          i43 = i21 + 9 & 15;
         }
         if (i36 >>> 0 <= i18 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i21 = HEAP8[i22 + i18 | 0] | 0;
         i20 = i18 + 1 | 0;
         if (i36 >>> 0 <= i20 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i32 = HEAP8[i22 + i20 | 0] | 0;
         i20 = i21 << 24 >> 24;
         if (i21 << 24 >> 24 < 65) {
          i44 = i20 - 48 | 0;
         } else {
          i44 = i20 + 9 & 15;
         }
         i20 = i32 << 24 >> 24;
         if (i32 << 24 >> 24 < 65) {
          i45 = i20 - 48 | 0;
         } else {
          i45 = i20 + 9 & 15;
         }
         if (i36 >>> 0 <= i27 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i20 = HEAP8[i22 + i27 | 0] | 0;
         i32 = i27 + 1 | 0;
         if (i36 >>> 0 <= i32 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i21 = HEAP8[i22 + i32 | 0] | 0;
         i32 = i20 << 24 >> 24;
         if (i20 << 24 >> 24 < 65) {
          i46 = i32 - 48 | 0;
         } else {
          i46 = i32 + 9 & 15;
         }
         i32 = i21 << 24 >> 24;
         if (i21 << 24 >> 24 < 65) {
          i47 = i32 - 48 | 0;
         } else {
          i47 = i32 + 9 & 15;
         }
         i40 = __ZN7WebCore7makeRGBEiii(i43 | i42 << 4 & 240, i45 | i44 << 4 & 240, i47 | i46 << 4 & 240) | 0;
         break;
        } else if ((i25 | 0) == 129) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      if ((HEAP32[i17 >> 2] | 0) == 0) {
       i34 = i40;
       break;
      }
      HEAP32[i17 >> 2] = 0;
      i34 = i40;
     }
    } while (0);
    i17 = HEAP32[i15 >> 2] | 0;
    if (!((i14 | 0) == (i17 | 0) | (i17 | 0) == 0)) {
     HEAP32[i15 >> 2] = 0;
     HEAP32[i16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i17);
    }
    HEAP32[i10 >> 2] = i34;
    HEAP8[i13] = 1;
    i48 = i34;
   } else {
    i48 = HEAP32[i10 >> 2] | 0;
   }
   __ZN7WebCore12CSSValuePool16createColorValueEj(i12, __ZN7WebCore12cssValuePoolEv() | 0, i48);
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = HEAP32[i12 >> 2];
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEb(i2, i3, i11, 0);
   i32 = HEAP32[i17 >> 2] | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   i17 = i32 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i32);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i4 = i11 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i1;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 280 >> 2] = __ZN7WebCore9HTMLNames11onabortAttrE;
 HEAP32[H_BASE + 284 >> 2] = __ZN7WebCore9HTMLNames16onbeforecopyAttrE;
 HEAP32[H_BASE + 288 >> 2] = __ZN7WebCore9HTMLNames15onbeforecutAttrE;
 HEAP32[H_BASE + 292 >> 2] = __ZN7WebCore9HTMLNames17onbeforepasteAttrE;
 HEAP32[H_BASE + 296 >> 2] = __ZN7WebCore9HTMLNames10onblurAttrE;
 HEAP32[H_BASE + 300 >> 2] = __ZN7WebCore9HTMLNames13oncanplayAttrE;
 HEAP32[H_BASE + 304 >> 2] = __ZN7WebCore9HTMLNames20oncanplaythroughAttrE;
 HEAP32[H_BASE + 308 >> 2] = __ZN7WebCore9HTMLNames12onchangeAttrE;
 HEAP32[H_BASE + 312 >> 2] = __ZN7WebCore9HTMLNames11onclickAttrE;
 HEAP32[H_BASE + 316 >> 2] = __ZN7WebCore9HTMLNames17oncontextmenuAttrE;
 HEAP32[H_BASE + 320 >> 2] = __ZN7WebCore9HTMLNames10oncopyAttrE;
 HEAP32[H_BASE + 324 >> 2] = __ZN7WebCore9HTMLNames9oncutAttrE;
 HEAP32[H_BASE + 328 >> 2] = __ZN7WebCore9HTMLNames14ondblclickAttrE;
 HEAP32[H_BASE + 332 >> 2] = __ZN7WebCore9HTMLNames10ondragAttrE;
 HEAP32[H_BASE + 336 >> 2] = __ZN7WebCore9HTMLNames13ondragendAttrE;
 HEAP32[H_BASE + 340 >> 2] = __ZN7WebCore9HTMLNames15ondragenterAttrE;
 HEAP32[H_BASE + 344 >> 2] = __ZN7WebCore9HTMLNames15ondragleaveAttrE;
 HEAP32[H_BASE + 348 >> 2] = __ZN7WebCore9HTMLNames14ondragoverAttrE;
 HEAP32[H_BASE + 352 >> 2] = __ZN7WebCore9HTMLNames15ondragstartAttrE;
 HEAP32[H_BASE + 356 >> 2] = __ZN7WebCore9HTMLNames10ondropAttrE;
 HEAP32[H_BASE + 360 >> 2] = __ZN7WebCore9HTMLNames20ondurationchangeAttrE;
 HEAP32[H_BASE + 364 >> 2] = __ZN7WebCore9HTMLNames13onemptiedAttrE;
 HEAP32[H_BASE + 368 >> 2] = __ZN7WebCore9HTMLNames11onendedAttrE;
 HEAP32[H_BASE + 372 >> 2] = __ZN7WebCore9HTMLNames11onerrorAttrE;
 HEAP32[H_BASE + 376 >> 2] = __ZN7WebCore9HTMLNames11onfocusAttrE;
 HEAP32[H_BASE + 380 >> 2] = __ZN7WebCore9HTMLNames13onfocusinAttrE;
 HEAP32[H_BASE + 384 >> 2] = __ZN7WebCore9HTMLNames14onfocusoutAttrE;
 HEAP32[H_BASE + 388 >> 2] = __ZN7WebCore9HTMLNames11oninputAttrE;
 HEAP32[H_BASE + 392 >> 2] = __ZN7WebCore9HTMLNames13oninvalidAttrE;
 HEAP32[H_BASE + 396 >> 2] = __ZN7WebCore9HTMLNames13onkeydownAttrE;
 HEAP32[H_BASE + 400 >> 2] = __ZN7WebCore9HTMLNames14onkeypressAttrE;
 HEAP32[H_BASE + 404 >> 2] = __ZN7WebCore9HTMLNames11onkeyupAttrE;
 HEAP32[H_BASE + 408 >> 2] = __ZN7WebCore9HTMLNames10onloadAttrE;
 HEAP32[H_BASE + 412 >> 2] = __ZN7WebCore9HTMLNames16onloadeddataAttrE;
 HEAP32[H_BASE + 416 >> 2] = __ZN7WebCore9HTMLNames20onloadedmetadataAttrE;
 HEAP32[H_BASE + 420 >> 2] = __ZN7WebCore9HTMLNames15onloadstartAttrE;
 HEAP32[H_BASE + 424 >> 2] = __ZN7WebCore9HTMLNames15onmousedownAttrE;
 HEAP32[H_BASE + 428 >> 2] = __ZN7WebCore9HTMLNames16onmouseenterAttrE;
 HEAP32[H_BASE + 432 >> 2] = __ZN7WebCore9HTMLNames16onmouseleaveAttrE;
 HEAP32[H_BASE + 436 >> 2] = __ZN7WebCore9HTMLNames15onmousemoveAttrE;
 HEAP32[H_BASE + 440 >> 2] = __ZN7WebCore9HTMLNames14onmouseoutAttrE;
 HEAP32[H_BASE + 444 >> 2] = __ZN7WebCore9HTMLNames15onmouseoverAttrE;
 HEAP32[H_BASE + 448 >> 2] = __ZN7WebCore9HTMLNames13onmouseupAttrE;
 HEAP32[H_BASE + 452 >> 2] = __ZN7WebCore9HTMLNames16onmousewheelAttrE;
 HEAP32[H_BASE + 456 >> 2] = __ZN7WebCore9HTMLNames11onpasteAttrE;
 HEAP32[H_BASE + 460 >> 2] = __ZN7WebCore9HTMLNames11onpauseAttrE;
 HEAP32[H_BASE + 464 >> 2] = __ZN7WebCore9HTMLNames10onplayAttrE;
 HEAP32[H_BASE + 468 >> 2] = __ZN7WebCore9HTMLNames13onplayingAttrE;
 HEAP32[H_BASE + 472 >> 2] = __ZN7WebCore9HTMLNames14onprogressAttrE;
 HEAP32[H_BASE + 476 >> 2] = __ZN7WebCore9HTMLNames16onratechangeAttrE;
 HEAP32[H_BASE + 480 >> 2] = __ZN7WebCore9HTMLNames11onresetAttrE;
 HEAP32[H_BASE + 484 >> 2] = __ZN7WebCore9HTMLNames12onscrollAttrE;
 HEAP32[H_BASE + 488 >> 2] = __ZN7WebCore9HTMLNames12onseekedAttrE;
 HEAP32[H_BASE + 492 >> 2] = __ZN7WebCore9HTMLNames13onseekingAttrE;
 HEAP32[H_BASE + 496 >> 2] = __ZN7WebCore9HTMLNames12onselectAttrE;
 HEAP32[H_BASE + 500 >> 2] = __ZN7WebCore9HTMLNames17onselectstartAttrE;
 HEAP32[H_BASE + 504 >> 2] = __ZN7WebCore9HTMLNames13onstalledAttrE;
 HEAP32[H_BASE + 508 >> 2] = __ZN7WebCore9HTMLNames12onsubmitAttrE;
 HEAP32[H_BASE + 512 >> 2] = __ZN7WebCore9HTMLNames13onsuspendAttrE;
 HEAP32[H_BASE + 516 >> 2] = __ZN7WebCore9HTMLNames16ontimeupdateAttrE;
 HEAP32[H_BASE + 520 >> 2] = __ZN7WebCore9HTMLNames17ontouchcancelAttrE;
 HEAP32[H_BASE + 524 >> 2] = __ZN7WebCore9HTMLNames14ontouchendAttrE;
 HEAP32[H_BASE + 528 >> 2] = __ZN7WebCore9HTMLNames15ontouchmoveAttrE;
 HEAP32[H_BASE + 532 >> 2] = __ZN7WebCore9HTMLNames16ontouchstartAttrE;
 HEAP32[H_BASE + 536 >> 2] = __ZN7WebCore9HTMLNames18onvolumechangeAttrE;
 HEAP32[H_BASE + 540 >> 2] = __ZN7WebCore9HTMLNames13onwaitingAttrE;
 HEAP32[H_BASE + 544 >> 2] = __ZN7WebCore9HTMLNames11onwheelAttrE;
 HEAP32[H_BASE + 548 >> 2] = __ZN7WebCore9HTMLNames28onwebkitfullscreenchangeAttrE;
 HEAP32[H_BASE + 552 >> 2] = __ZN7WebCore9HTMLNames27onwebkitfullscreenerrorAttrE;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_ii + 122;
}
function __ZN7WebCore11HTMLElement12setInnerTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 if (__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i1) | 0) {
  HEAP32[i3 >> 2] = 7;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i12 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i12 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i13 = i2 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   L16 : do {
    if ((i14 | 0) == 0) {
     i15 = i1 | 0;
    } else {
     i16 = (HEAP32[i14 + 16 >> 2] & 32 | 0) == 0;
     L19 : do {
      if (i16) {
       i17 = HEAP32[i14 + 8 >> 2] | 0;
       i18 = HEAP32[i14 + 4 >> 2] | 0;
       i19 = i17;
       i20 = 0;
       while (1) {
        if (i20 >>> 0 >= i18 >>> 0) {
         i21 = i17;
         i22 = i18;
         i23 = i19;
         i24 = 23;
         break L19;
        }
        if ((HEAP16[i17 + (i20 << 1) >> 1] | 0) == 10) {
         i25 = i20;
         i26 = i17;
         i27 = i18;
         i28 = i19;
         i24 = 22;
         break;
        } else {
         i20 = i20 + 1 | 0;
        }
       }
      } else {
       i20 = HEAP32[i14 + 8 >> 2] | 0;
       i19 = HEAP32[i14 + 4 >> 2] | 0;
       i18 = i20;
       i17 = 0;
       while (1) {
        if (i17 >>> 0 >= i19 >>> 0) {
         i21 = i18;
         i22 = i19;
         i23 = i20;
         i24 = 23;
         break L19;
        }
        if ((HEAP8[i20 + i17 | 0] | 0) == 10) {
         i25 = i17;
         i26 = i18;
         i27 = i19;
         i28 = i20;
         i24 = 22;
         break;
        } else {
         i17 = i17 + 1 | 0;
        }
       }
      }
     } while (0);
     if ((i24 | 0) == 22) {
      if ((i25 | 0) == -1) {
       i21 = i26;
       i22 = i27;
       i23 = i28;
       i24 = 23;
      }
     }
     do {
      if ((i24 | 0) == 23) {
       L32 : do {
        if (i16) {
         i17 = 0;
         while (1) {
          if (i17 >>> 0 >= i22 >>> 0) {
           break L32;
          }
          if ((HEAP16[i21 + (i17 << 1) >> 1] | 0) == 13) {
           i29 = i17;
           i24 = 28;
           break;
          } else {
           i17 = i17 + 1 | 0;
          }
         }
        } else {
         i17 = 0;
         while (1) {
          if (i17 >>> 0 >= i22 >>> 0) {
           break L32;
          }
          if ((HEAP8[i23 + i17 | 0] | 0) == 13) {
           i29 = i17;
           i24 = 28;
           break;
          } else {
           i17 = i17 + 1 | 0;
          }
         }
        }
       } while (0);
       if ((i24 | 0) == 28) {
        if ((i29 | 0) != -1) {
         break;
        }
       }
       i17 = i1 | 0;
       if ((i22 | 0) == 0) {
        i15 = i17;
        break L16;
       }
       __ZN7WebCore23replaceChildrenWithTextERNS_13ContainerNodeERKN3WTF6StringERi(i17, i2, i3);
       STACKTOP = i4;
       return;
      }
     } while (0);
     i16 = i1 | 0;
     i17 = HEAP32[i1 + 12 >> 2] | 0;
     i20 = i1 + 32 | 0;
     if ((i17 & 2048 | 0) == 0) {
      i30 = i20 | 0;
     } else {
      i30 = HEAP32[i20 >> 2] | 0;
     }
     i20 = HEAP32[i30 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i24 = 38;
     } else {
      i19 = HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 44 >> 2] & 7;
      if ((i19 | 0) == 4 | (i19 | 0) == 0) {
       i24 = 38;
      } else {
       i31 = i14;
      }
     }
     L51 : do {
      if ((i24 | 0) == 38) {
       do {
        if ((i17 & 256 | 0) != 0) {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 588 >> 2] & 255](i1) | 0)) {
          break;
         }
         i31 = HEAP32[i13 >> 2] | 0;
         break L51;
        }
       } while (0);
       HEAP32[i3 >> 2] = 0;
       __ZN7WebCore11HTMLElement14textToFragmentERKN3WTF6StringERi(i10, i1, i2, i3);
       i19 = i10 | 0;
       i20 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       if ((HEAP32[i3 >> 2] | 0) == 0) {
        i19 = i11 | 0;
        HEAP32[i19 >> 2] = i20;
        __ZN7WebCore27replaceChildrenWithFragmentERNS_13ContainerNodeEN3WTF10PassRefPtrINS_16DocumentFragmentEEERi(i16, i11, i3);
        i18 = HEAP32[i19 >> 2] | 0;
        if ((i18 | 0) == 0) {
         STACKTOP = i4;
         return;
        }
        i19 = i18 + 8 | 0;
        i18 = i19 | 0;
        i32 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i32;
        if ((i32 | 0) >= 1) {
         STACKTOP = i4;
         return;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         STACKTOP = i4;
         return;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
        STACKTOP = i4;
        return;
       } else {
        if ((i20 | 0) == 0) {
         STACKTOP = i4;
         return;
        }
        i19 = i20 + 8 | 0;
        i20 = i19 | 0;
        i32 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i32;
        if ((i32 | 0) >= 1) {
         STACKTOP = i4;
         return;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         STACKTOP = i4;
         return;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
        STACKTOP = i4;
        return;
       }
      }
     } while (0);
     L81 : do {
      if ((i31 | 0) != 0) {
       if ((HEAP32[i31 + 16 >> 2] & 32 | 0) == 0) {
        i17 = HEAP32[i31 + 8 >> 2] | 0;
        i19 = HEAP32[i31 + 4 >> 2] | 0;
        i32 = 0;
        while (1) {
         if (i32 >>> 0 >= i19 >>> 0) {
          break L81;
         }
         if ((HEAP16[i17 + (i32 << 1) >> 1] | 0) == 13) {
          i33 = i32;
          break;
         } else {
          i32 = i32 + 1 | 0;
         }
        }
       } else {
        i32 = HEAP32[i31 + 8 >> 2] | 0;
        i17 = HEAP32[i31 + 4 >> 2] | 0;
        i19 = 0;
        while (1) {
         if (i19 >>> 0 >= i17 >>> 0) {
          break L81;
         }
         if ((HEAP8[i32 + i19 | 0] | 0) == 13) {
          i33 = i19;
          break;
         } else {
          i19 = i19 + 1 | 0;
         }
        }
       }
       if ((i33 | 0) == -1) {
        break;
       }
       i19 = i7 | 0;
       HEAP32[i19 >> 2] = i31;
       i32 = i31 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
       i32 = HEAP32[i19 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i8, H_BASE + 64 | 0);
       __ZN3WTF6StringC1EPKc(i9, H_BASE + 56 | 0);
       do {
        if ((i32 | 0) == 0) {
         i34 = i9 | 0;
        } else {
         i17 = i9 | 0;
         __ZN3WTF10StringImpl7replaceEPS0_S1_(i5, i32, HEAP32[i8 >> 2] | 0, HEAP32[i17 >> 2] | 0);
         i20 = HEAP32[i19 >> 2] | 0;
         HEAP32[i19 >> 2] = HEAP32[i5 >> 2];
         if ((i20 | 0) == 0) {
          i34 = i17;
          break;
         }
         i18 = i20 | 0;
         i35 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
         if ((i35 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i20);
          i34 = i17;
          break;
         } else {
          HEAP32[i18 >> 2] = i35;
          i34 = i17;
          break;
         }
        }
       } while (0);
       i32 = HEAP32[i34 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i17 = i32 | 0;
         i35 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
         if ((i35 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i32);
          break;
         } else {
          HEAP32[i17 >> 2] = i35;
          break;
         }
        }
       } while (0);
       i32 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i35 = i32 | 0;
         i17 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
         if ((i17 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i32);
          break;
         } else {
          HEAP32[i35 >> 2] = i17;
          break;
         }
        }
       } while (0);
       i32 = HEAP32[i19 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         __ZN3WTF10StringImpl7replaceEtt(i6, i32, 13, 10);
         i17 = HEAP32[i19 >> 2] | 0;
         HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
         if ((i17 | 0) == 0) {
          break;
         }
         i35 = i17 | 0;
         i18 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
         if ((i18 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i17);
          break;
         } else {
          HEAP32[i35 >> 2] = i18;
          break;
         }
        }
       } while (0);
       __ZN7WebCore23replaceChildrenWithTextERNS_13ContainerNodeERKN3WTF6StringERi(i16, i7, i3);
       i32 = HEAP32[i19 >> 2] | 0;
       if ((i32 | 0) == 0) {
        STACKTOP = i4;
        return;
       }
       i18 = i32 | 0;
       i35 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i32);
        STACKTOP = i4;
        return;
       } else {
        HEAP32[i18 >> 2] = i35;
        STACKTOP = i4;
        return;
       }
      }
     } while (0);
     __ZN7WebCore23replaceChildrenWithTextERNS_13ContainerNodeERKN3WTF6StringERi(i16, i2, i3);
     STACKTOP = i4;
     return;
    }
   } while (0);
   __ZN7WebCore13ContainerNode14removeChildrenEv(i15);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9alignAttrE >> 2] | 0)) {
  i2 = i1 | 0;
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 272 | 0) | 0) {
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i2, i4, 132, 154);
   STACKTOP = i5;
   return;
  } else {
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i2, i4, 132, i3 | 0);
   STACKTOP = i5;
   return;
  }
 }
 if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames19contenteditableAttrE >> 2] | 0)) {
  i2 = i3 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
     break;
    }
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i9, H_BASE + 264 | 0) | 0) {
     break;
    }
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 144 | 0) | 0) {
     i10 = i1 | 0;
     __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i10, i4, 357, 401);
     __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i10, i4, 168, 419);
     __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i10, i4, 315, 420);
     __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i10, i4, 271, 423);
     STACKTOP = i5;
     return;
    }
    if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 80 | 0) | 0)) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 357, 399);
    STACKTOP = i5;
    return;
   }
  } while (0);
  i2 = i1 | 0;
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i2, i4, 357, 400);
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i2, i4, 168, 419);
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i2, i4, 315, 420);
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i2, i4, 271, 423);
  STACKTOP = i5;
  return;
 }
 if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10hiddenAttrE >> 2] | 0)) {
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 3, 3);
  STACKTOP = i5;
  return;
 }
 if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13draggableAttrE >> 2] | 0)) {
  i2 = i3 | 0;
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 264 | 0) | 0) {
   i9 = i1 | 0;
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i9, i4, 356, 402);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i9, i4, 358, 3);
   STACKTOP = i5;
   return;
  }
  if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 80 | 0) | 0)) {
   STACKTOP = i5;
   return;
  }
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 356, 3);
  STACKTOP = i5;
  return;
 }
 if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0)) {
  i2 = i3 | 0;
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 72 | 0) | 0) {
   i9 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
   if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i11 = 335;
   } else {
    i11 = (i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0) ? 335 : 333;
   }
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 159, i11);
   STACKTOP = i5;
   return;
  }
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 96 | 0) | 0) {
   i12 = 28;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 88 | 0) | 0) {
    i12 = 28;
   }
  }
  if ((i12 | 0) == 28) {
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i4, 2, i3 | 0);
  }
  i12 = HEAP32[i1 + 44 >> 2] | 0;
  i2 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
  if ((i12 | 0) == (i2 | 0)) {
   STACKTOP = i5;
   return;
  }
  i11 = HEAP32[i12 + 12 >> 2] | 0;
  do {
   if ((i11 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
     break;
    }
    STACKTOP = i5;
    return;
   }
  } while (0);
  i2 = HEAP32[__ZN7WebCore9HTMLNames6bdoTagE >> 2] | 0;
  if ((i12 | 0) == (i2 | 0)) {
   STACKTOP = i5;
   return;
  }
  do {
   if ((i11 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
     break;
    }
    STACKTOP = i5;
    return;
   }
  } while (0);
  i2 = HEAP32[__ZN7WebCore9HTMLNames9outputTagE >> 2] | 0;
  if ((i12 | 0) == (i2 | 0)) {
   STACKTOP = i5;
   return;
  }
  do {
   if ((i11 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
     break;
    }
    STACKTOP = i5;
    return;
   }
  } while (0);
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 159, 327);
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
 do {
  if ((i8 | 0) != (i2 | 0)) {
   i12 = HEAP32[i2 + 12 >> 2] | 0;
   if ((HEAP32[i8 + 12 >> 2] | 0) == (i12 | 0)) {
    if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
     break;
    }
   }
   if ((i8 | 0) != (HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   i11 = HEAP32[i1 + 48 >> 2] | 0;
   L86 : do {
    if ((i11 | 0) != 0) {
     i9 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i9 & 1 | 0) == 0) {
      i13 = i9 >>> 1 & 134217727;
      i14 = i11 + 20 | 0;
     } else {
      i9 = i11 + 24 | 0;
      i13 = HEAP32[i9 + 8 >> 2] | 0;
      i14 = HEAP32[i9 >> 2] | 0;
     }
     if ((i13 | 0) == 0) {
      break;
     }
     i9 = i2 + 16 | 0;
     i10 = 0;
     while (1) {
      i15 = i14 + (i10 << 3) | 0;
      i16 = HEAP32[i15 >> 2] | 0;
      if ((i16 | 0) == (i2 | 0)) {
       break;
      }
      if ((HEAP32[i16 + 12 >> 2] | 0) == (i12 | 0)) {
       if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
        break;
       }
      }
      i10 = i10 + 1 | 0;
      if (i10 >>> 0 >= i13 >>> 0) {
       break L86;
      }
     }
     if ((i15 | 0) == 0) {
      break;
     }
     STACKTOP = i5;
     return;
    }
   } while (0);
   i12 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i17 = i1 | 0;
    } else {
     i11 = i1 | 0;
     if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
      i17 = i11;
      break;
     }
     __ZN7WebCore14quoteCSSStringERKN3WTF6StringE(i7, i3 | 0);
     __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i11, i4, 15, i7);
     i11 = HEAP32[i7 >> 2] | 0;
     if ((i11 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     i10 = i11 | 0;
     i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      STACKTOP = i5;
      return;
     } else {
      HEAP32[i10 >> 2] = i9;
      STACKTOP = i5;
      return;
     }
    }
   } while (0);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i17, i4, 15, 269);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i17 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = i1 | 0;
  } else {
   i7 = i1 | 0;
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    i18 = i7;
    break;
   }
   __ZN7WebCore14quoteCSSStringERKN3WTF6StringE(i6, i3 | 0);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i7, i4, 15, i6);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i15 = i7 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i15 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i18, i4, 15, 269);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11HTMLElement12setOuterTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if (__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i1) | 0) {
  HEAP32[i3 >> 2] = 7;
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i9 = i1 | 0;
   i10 = i1 + 16 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i3 >> 2] = 7;
    STACKTOP = i4;
    return;
   }
   i12 = i11 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = HEAP32[i1 + 24 >> 2] | 0;
   i13 = (i12 | 0) == 0;
   if (!i13) {
    i14 = i12 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = HEAP32[i1 + 28 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (!i15) {
    i16 = i14 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   HEAP32[i3 >> 2] = 0;
   i16 = HEAP32[i2 >> 2] | 0;
   L26 : do {
    if ((i16 | 0) == 0) {
     i17 = 35;
    } else {
     i18 = (HEAP32[i16 + 16 >> 2] & 32 | 0) == 0;
     L28 : do {
      if (i18) {
       i19 = HEAP32[i16 + 8 >> 2] | 0;
       i20 = HEAP32[i16 + 4 >> 2] | 0;
       i21 = i19;
       i22 = 0;
       while (1) {
        if (i22 >>> 0 >= i20 >>> 0) {
         i23 = i19;
         i24 = i20;
         i25 = i21;
         i17 = 29;
         break L28;
        }
        if ((HEAP16[i19 + (i22 << 1) >> 1] | 0) == 13) {
         i26 = i22;
         i27 = i19;
         i28 = i20;
         i29 = i21;
         i17 = 28;
         break;
        } else {
         i22 = i22 + 1 | 0;
        }
       }
      } else {
       i22 = HEAP32[i16 + 8 >> 2] | 0;
       i21 = HEAP32[i16 + 4 >> 2] | 0;
       i20 = i22;
       i19 = 0;
       while (1) {
        if (i19 >>> 0 >= i21 >>> 0) {
         i23 = i20;
         i24 = i21;
         i25 = i22;
         i17 = 29;
         break L28;
        }
        if ((HEAP8[i22 + i19 | 0] | 0) == 13) {
         i26 = i19;
         i27 = i20;
         i28 = i21;
         i29 = i22;
         i17 = 28;
         break;
        } else {
         i19 = i19 + 1 | 0;
        }
       }
      }
     } while (0);
     if ((i17 | 0) == 28) {
      if ((i26 | 0) == -1) {
       i23 = i27;
       i24 = i28;
       i25 = i29;
       i17 = 29;
      }
     }
     if ((i17 | 0) == 29) {
      if (i18) {
       i19 = 0;
       while (1) {
        if (i19 >>> 0 >= i24 >>> 0) {
         i17 = 35;
         break L26;
        }
        if ((HEAP16[i23 + (i19 << 1) >> 1] | 0) == 10) {
         i30 = i19;
         break;
        } else {
         i19 = i19 + 1 | 0;
        }
       }
      } else {
       i19 = 0;
       while (1) {
        if (i19 >>> 0 >= i24 >>> 0) {
         i17 = 35;
         break L26;
        }
        if ((HEAP8[i25 + i19 | 0] | 0) == 10) {
         i30 = i19;
         break;
        } else {
         i19 = i19 + 1 | 0;
        }
       }
      }
      if ((i30 | 0) == -1) {
       i17 = 35;
       break;
      }
     }
     __ZN7WebCore11HTMLElement14textToFragmentERKN3WTF6StringERi(i5, i1, i2, i3);
     i19 = i5 | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     i19 = i18 | 0;
     if ((i1 | 0) == 0) {
      i31 = i19;
      i17 = 38;
     } else {
      i32 = i19;
      i17 = 37;
     }
    }
   } while (0);
   if ((i17 | 0) == 35) {
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i6, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
    i16 = i6 | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i32 = i19 | 0;
    i17 = 37;
   }
   do {
    if ((i17 | 0) == 37) {
     if ((HEAP32[i10 >> 2] | 0) == 0) {
      i31 = i32;
      i17 = 38;
      break;
     }
     if ((HEAP32[i3 >> 2] | 0) != 0) {
      i33 = i32;
      i17 = 58;
      break;
     }
     i19 = i7 | 0;
     HEAP32[i19 >> 2] = i32;
     __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i11, i7, i9, i3) | 0;
     i16 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i19 = i16 + 8 | 0;
       i18 = i19 | 0;
       i22 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     do {
      if (i15) {
       i34 = 0;
       i35 = 1;
      } else {
       i16 = HEAP32[i14 + 24 >> 2] | 0;
       if ((i16 | 0) == 0) {
        i34 = 0;
        i35 = 1;
        break;
       }
       i19 = i16 + 8 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       i34 = i16;
       i35 = 0;
      }
     } while (0);
     do {
      if ((HEAP32[i3 >> 2] | 0) == 0) {
       do {
        if (i35) {
         i36 = 0;
        } else {
         if ((HEAP32[i34 + 12 >> 2] & 1 | 0) == 0) {
          i36 = 0;
          break;
         }
         __ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi(i34, i3);
         i36 = (HEAP32[i3 >> 2] | 0) != 0;
        }
       } while (0);
       if (i36 | i13) {
        break;
       }
       if ((HEAP32[i12 + 12 >> 2] & 1 | 0) == 0) {
        break;
       }
       __ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi(i12, i3);
      }
     } while (0);
     if (i35) {
      break;
     }
     i16 = i34 + 8 | 0;
     i19 = i16 | 0;
     i22 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   if ((i17 | 0) == 38) {
    HEAP32[i3 >> 2] = 3;
    i33 = i31;
    i17 = 58;
   }
   do {
    if ((i17 | 0) == 58) {
     if ((i33 | 0) == 0) {
      break;
     }
     i9 = i33 + 8 | 0;
     i10 = i9 | 0;
     i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   do {
    if (!i15) {
     i9 = i14 + 8 | 0;
     i16 = i9 | 0;
     i10 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   do {
    if (!i13) {
     i14 = i12 + 8 | 0;
     i15 = i14 | 0;
     i9 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i12 = i11 + 8 | 0;
   i13 = i12 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 7;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i1 | 0) | 0) {
  i9 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 63](i5, i9);
  i10 = i5 | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    HEAP8[i4] = 0;
    i11 = 0;
   } else {
    i12 = __ZN3WTF10StringImpl23defaultWritingDirectionEPb(i5, i4) | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i11 = i12;
     break;
    }
    i14 = i13 | 0;
    i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     i11 = i12;
     break;
    } else {
     HEAP32[i14 >> 2] = i15;
     i11 = i12;
     break;
    }
   }
  } while (0);
  if ((i2 | 0) != 0) {
   HEAP32[i2 >> 2] = (HEAP8[i4] & 1) != 0 ? i9 : 0;
  }
  i16 = (i11 | 0) == 0 | 0;
  STACKTOP = i3;
  return i16 | 0;
 }
 i11 = HEAP32[i1 + 36 >> 2] | 0;
 L16 : do {
  if ((i11 | 0) != 0) {
   i9 = i6 | 0;
   i4 = i1 | 0;
   i10 = i8 | 0;
   i5 = i11;
   L18 : while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 64 >> 2] & 63](i6, i5);
    do {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 120 | 0) | 0) {
      i17 = 1;
     } else {
      i12 = (HEAP32[i5 + 12 >> 2] & 4 | 0) == 0;
      if (i12) {
       i17 = 0;
       break;
      }
      i15 = HEAP32[i5 + 44 >> 2] | 0;
      i14 = HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0;
      if ((i15 | 0) == (i14 | 0)) {
       i17 = 1;
       break;
      }
      if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
       i13 = (HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0);
       if (i13 | i12) {
        i17 = i13;
        break;
       }
      } else {
       if (i12) {
        i17 = 0;
        break;
       }
      }
      i13 = HEAP32[i5 + 44 >> 2] | 0;
      i14 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
      if ((i13 | 0) == (i14 | 0)) {
       i17 = 1;
       break;
      }
      if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
       i15 = (HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0);
       if (i15 | i12) {
        i17 = i15;
        break;
       }
      } else {
       if (i12) {
        i17 = 0;
        break;
       }
      }
      i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] & 255](i5) | 0;
     }
    } while (0);
    i12 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i15 = i12 | 0;
      i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i15 >> 2] = i14;
       break;
      }
     }
    } while (0);
    do {
     if (i17) {
      if ((i5 | 0) == (i4 | 0)) {
       break L16;
      }
      i12 = HEAP32[i5 + 28 >> 2] | 0;
      if ((i12 | 0) != 0) {
       i5 = i12;
       continue L18;
      }
      i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i5, i4) | 0;
     } else {
      i12 = HEAP32[i5 + 12 >> 2] | 0;
      if ((i12 & 4 | 0) == 0) {
       i19 = i5;
       i20 = i12;
      } else {
       i12 = HEAP32[i5 + 48 >> 2] | 0;
       L44 : do {
        if ((i12 | 0) == 0) {
         i21 = __ZN3WTF8nullAtomE;
        } else {
         i14 = HEAP32[i12 + 4 >> 2] | 0;
         if ((i14 & 1 | 0) == 0) {
          i22 = i14 >>> 1 & 134217727;
          i23 = i12 + 20 | 0;
         } else {
          i14 = i12 + 24 | 0;
          i22 = HEAP32[i14 + 8 >> 2] | 0;
          i23 = HEAP32[i14 >> 2] | 0;
         }
         if ((i22 | 0) == 0) {
          i21 = __ZN3WTF8nullAtomE;
          break;
         }
         i14 = HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0;
         i15 = i14 + 12 | 0;
         i13 = i14 + 16 | 0;
         i24 = 0;
         while (1) {
          i25 = i23 + (i24 << 3) | 0;
          i26 = HEAP32[i25 >> 2] | 0;
          if ((i26 | 0) == (i14 | 0)) {
           break;
          }
          if ((HEAP32[i26 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
           if ((HEAP32[i26 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
            break;
           }
          }
          i26 = i24 + 1 | 0;
          if (i26 >>> 0 < i22 >>> 0) {
           i24 = i26;
          } else {
           i21 = __ZN3WTF8nullAtomE;
           break L44;
          }
         }
         i21 = (i25 | 0) == 0 ? __ZN3WTF8nullAtomE : i23 + (i24 << 3) + 4 | 0;
        }
       } while (0);
       i12 = HEAP32[i21 >> 2] | 0;
       i13 = (i12 | 0) == 0;
       if (!i13) {
        i15 = i12 | 0;
        HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
       }
       do {
        if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i12, H_BASE + 96 | 0) | 0) {
         i27 = 49;
        } else {
         if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i12, H_BASE + 88 | 0) | 0) {
          i27 = 49;
          break;
         }
         if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i12, H_BASE + 72 | 0) | 0) {
          i27 = 49;
         } else {
          i28 = 0;
          i29 = i5;
         }
        }
       } while (0);
       do {
        if ((i27 | 0) == 49) {
         i27 = 0;
         if ((i5 | 0) == (i4 | 0)) {
          i28 = 1;
          i29 = 0;
          break;
         }
         i15 = HEAP32[i5 + 28 >> 2] | 0;
         if ((i15 | 0) != 0) {
          i28 = 1;
          i29 = i15;
          break;
         }
         i28 = 1;
         i29 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i5, i4) | 0;
        }
       } while (0);
       do {
        if (!i13) {
         i15 = i12 | 0;
         i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
         if ((i14 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i12);
          break;
         } else {
          HEAP32[i15 >> 2] = i14;
          break;
         }
        }
       } while (0);
       if (i28) {
        i18 = i29;
        break;
       }
       i19 = i29;
       i20 = HEAP32[i29 + 12 >> 2] | 0;
      }
      i12 = i19 + 12 | 0;
      if ((i20 & 1 | 0) == 0) {
       i30 = i20;
      } else {
       __ZNK7WebCore4Node11textContentEb(i8, i19, 1);
       i13 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i13 | 0) == 0) {
         HEAP8[i7] = 0;
         i31 = 0;
        } else {
         i14 = __ZN3WTF10StringImpl23defaultWritingDirectionEPb(i13, i7) | 0;
         i15 = HEAP32[i10 >> 2] | 0;
         if ((i15 | 0) == 0) {
          i31 = i14;
          break;
         }
         i26 = i15 | 0;
         i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
         if ((i32 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i15);
          i31 = i14;
          break;
         } else {
          HEAP32[i26 >> 2] = i32;
          i31 = i14;
          break;
         }
        }
       } while (0);
       if ((HEAP8[i7] & 1) != 0) {
        break L18;
       }
       i30 = HEAP32[i12 >> 2] | 0;
      }
      if ((i30 & 2 | 0) != 0) {
       i13 = HEAP32[i19 + 36 >> 2] | 0;
       if ((i13 | 0) != 0) {
        i5 = i13;
        continue L18;
       }
      }
      if ((i19 | 0) == (i4 | 0)) {
       break L16;
      }
      i13 = HEAP32[i19 + 28 >> 2] | 0;
      if ((i13 | 0) != 0) {
       i5 = i13;
       continue L18;
      }
      i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i19, i4) | 0;
     }
    } while (0);
    if ((i18 | 0) == 0) {
     break L16;
    } else {
     i5 = i18;
    }
   }
   if ((i2 | 0) != 0) {
    HEAP32[i2 >> 2] = i19;
   }
   i16 = (i31 | 0) == 0 | 0;
   STACKTOP = i3;
   return i16 | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 HEAP32[i2 >> 2] = 0;
 i16 = 1;
 STACKTOP = i3;
 return i16 | 0;
}
function __ZN7WebCore11HTMLElement14textToFragmentERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i2 + 20 | 0;
 __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i6, HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i3 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i13 | 0) == 0) {
   i14 = 47;
  } else {
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i14 = 47;
    break;
   }
   i16 = i6 | 0;
   i17 = i7 | 0;
   i18 = i8 | 0;
   i19 = i9 | 0;
   i20 = i10 | 0;
   i21 = i11 | 0;
   i22 = 0;
   i23 = 0;
   L4 : while (1) {
    L6 : do {
     if (i23 >>> 0 < i15 >>> 0) {
      i24 = HEAP32[i2 >> 2] | 0;
      i25 = i24 + 4 | 0;
      i26 = i24 + 16 | 0;
      i27 = i24 + 8 | 0;
      i28 = i27;
      i29 = i27 | 0;
      if ((i24 | 0) == 0) {
       i24 = i23;
       while (1) {
        i27 = i24 + 1 | 0;
        if (i27 >>> 0 < i15 >>> 0) {
         i24 = i27;
        } else {
         i30 = 0;
         i31 = i27;
         break L6;
        }
       }
      } else {
       i32 = i23;
      }
      while (1) {
       if ((HEAP32[i25 >> 2] | 0) >>> 0 > i32 >>> 0) {
        if ((HEAP32[i26 >> 2] & 32 | 0) == 0) {
         i33 = HEAP16[(HEAP32[i28 >> 2] | 0) + (i32 << 1) >> 1] | 0;
        } else {
         i33 = HEAPU8[(HEAP32[i29 >> 2] | 0) + i32 | 0] | 0;
        }
        if ((i33 << 16 >> 16 | 0) == 13 | (i33 << 16 >> 16 | 0) == 10) {
         i30 = i33;
         i31 = i32;
         break L6;
        } else {
         i34 = i33;
        }
       } else {
        i34 = 0;
       }
       i24 = i32 + 1 | 0;
       if (i24 >>> 0 < i15 >>> 0) {
        i32 = i24;
       } else {
        i30 = i34;
        i31 = i24;
        break;
       }
      }
     } else {
      i30 = i22;
      i31 = i23;
     }
    } while (0);
    i29 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
    __ZNK3WTF6String9substringEjj(i9, i3, i23, i31 - i23 | 0);
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i8, i29, i9);
    i29 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i17 >> 2] = i29;
    __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i16, i7, i4) | 0;
    i29 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i28 = i29 + 8 | 0;
      i26 = i28 | 0;
      i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    i29 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i28 = i29 + 8 | 0;
      i25 = i28 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    i29 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i28 = i29 | 0;
      i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i29);
       break;
      } else {
       HEAP32[i28 >> 2] = i26;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i4 >> 2] | 0) != 0) {
     i14 = 26;
     break;
    }
    i29 = i30 << 16 >> 16 == 13;
    do {
     if ((i30 << 16 >> 16 | 0) == 13 | (i30 << 16 >> 16 | 0) == 10) {
      __ZN7WebCore13HTMLBRElement6createERNS_8DocumentE(i11, HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0);
      i26 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = 0;
      HEAP32[i20 >> 2] = i26;
      __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i16, i10, i4) | 0;
      i26 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i28 = i26 + 8 | 0;
        i25 = i28 | 0;
        i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
        HEAP32[i25 >> 2] = i24;
        if ((i24 | 0) >= 1) {
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
        i28 = i26 + 8 | 0;
        i24 = i28 | 0;
        i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i25;
        if ((i25 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      if ((HEAP32[i4 >> 2] | 0) != 0) {
       i14 = 37;
       break L4;
      }
      if (!i29) {
       i35 = i31;
       break;
      }
      i26 = i31 + 1 | 0;
      if (i26 >>> 0 >= i15 >>> 0) {
       i35 = i31;
       break;
      }
      i28 = HEAP32[i2 >> 2] | 0;
      do {
       if ((i28 | 0) == 0) {
        i36 = 0;
       } else {
        if ((HEAP32[i28 + 4 >> 2] | 0) >>> 0 <= i26 >>> 0) {
         i36 = 0;
         break;
        }
        i25 = i28 + 8 | 0;
        if ((HEAP32[i28 + 16 >> 2] & 32 | 0) == 0) {
         i36 = HEAP16[(HEAP32[i25 >> 2] | 0) + (i26 << 1) >> 1] | 0;
         break;
        } else {
         i36 = HEAPU8[(HEAP32[i25 >> 2] | 0) + i26 | 0] | 0;
         break;
        }
       }
      } while (0);
      i35 = i36 << 16 >> 16 == 10 ? i26 : i31;
     } else {
      i35 = i31;
     }
    } while (0);
    i29 = i35 + 1 | 0;
    if (i29 >>> 0 < i15 >>> 0) {
     i22 = i30;
     i23 = i29;
    } else {
     i14 = 47;
     break L1;
    }
   }
   if ((i14 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
   } else if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
   }
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   } else {
    i23 = i6 + 8 | 0;
    i22 = i23 | 0;
    i37 = HEAP32[i22 >> 2] | 0;
    i38 = i23;
    i39 = i22;
    break;
   }
  }
 } while (0);
 do {
  if ((i14 | 0) == 47) {
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   } else {
    i30 = i6 + 8 | 0;
    i35 = (HEAP32[i30 >> 2] | 0) + 1 | 0;
    HEAP32[i30 >> 2] = i35;
    i30 = i6 + 8 | 0;
    i37 = i35;
    i38 = i30;
    i39 = i30 | 0;
    break;
   }
  }
 } while (0);
 i6 = i37 - 1 | 0;
 HEAP32[i39 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11HTMLElement48adjustDirectionalityIfNeededAfterChildrenChangedEPNS_7ElementENS_13ContainerNode15ChildChangeTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) != 0) {
   if (!((i3 | 0) == 3 | (i3 | 0) == 1)) {
    break;
   }
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i7 = i6;
   }
   while (1) {
    i6 = HEAP32[i7 + 12 >> 2] | 0;
    L7 : do {
     if ((i6 & 16 | 0) == 0) {
      i8 = 11;
     } else {
      do {
       if ((i6 & 4 | 0) != 0) {
        i9 = HEAP32[i7 + 44 >> 2] | 0;
        i10 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
        if ((i9 | 0) == (i10 | 0)) {
         break L7;
        }
        if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
         break L7;
        }
       }
      } while (0);
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames7dirAttrE) | 0)) {
       i8 = 11;
      }
     }
    } while (0);
    if ((i8 | 0) == 11) {
     i8 = 0;
     __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i7, 0, 0);
    }
    i7 = HEAP32[i7 + 28 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i7 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] & 536870912 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 L21 : do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 28 | 0;
   L23 : do {
    if ((i3 | 0) == 0) {
     i10 = i6;
     while (1) {
      i9 = HEAP32[i10 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break L21;
      }
      if ((HEAP32[i9 + 12 >> 2] & 4 | 0) != 0) {
       i11 = i9;
       break L23;
      }
      i10 = i9 + 28 | 0;
     }
    } else {
     i10 = HEAP32[i6 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break L21;
     } else {
      i11 = i10;
     }
    }
   } while (0);
   while (1) {
    i6 = HEAP32[i11 + 12 >> 2] | 0;
    if ((i6 & 16 | 0) == 0) {
     break;
    }
    do {
     if ((i6 & 4 | 0) == 0) {
      i8 = 25;
     } else {
      i10 = HEAP32[i11 + 44 >> 2] | 0;
      i9 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
      if ((i10 | 0) == (i9 | 0)) {
       break;
      }
      if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
       i8 = 25;
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
       i8 = 25;
      }
     }
    } while (0);
    if ((i8 | 0) == 25) {
     i8 = 0;
     if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i11, __ZN7WebCore9HTMLNames7dirAttrE) | 0)) {
      break;
     }
    }
    i6 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break L21;
    } else {
     i11 = i6;
    }
   }
   __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i11, 0, 0);
  }
 } while (0);
 do {
  if ((HEAP32[i7 >> 2] & 16 | 0) == 0) {
   i11 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i3 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i3 & 4 | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    i12 = i11;
    i13 = i3;
   }
   while (1) {
    if ((i13 & 16 | 0) != 0) {
     i8 = 32;
     break;
    }
    i3 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i8 = 70;
     break;
    }
    i11 = HEAP32[i3 + 12 >> 2] | 0;
    if ((i11 & 4 | 0) == 0) {
     i8 = 59;
     break;
    } else {
     i12 = i3;
     i13 = i11;
    }
   }
   if ((i8 | 0) == 32) {
    i14 = i12;
    break;
   } else if ((i8 | 0) == 59) {
    STACKTOP = i4;
    return;
   } else if ((i8 | 0) == 70) {
    STACKTOP = i4;
    return;
   }
  } else {
   i14 = i1;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i15 = i14;
 }
 L59 : while (1) {
  i16 = i15 | 0;
  i17 = i15 + 12 | 0;
  i14 = HEAP32[i17 >> 2] | 0;
  if ((i14 & 16 | 0) != 0) {
   do {
    if ((i14 & 4 | 0) != 0) {
     i1 = HEAP32[i16 + 44 >> 2] | 0;
     i12 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
     if ((i1 | 0) == (i12 | 0)) {
      i8 = 42;
      break L59;
     }
     if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
      i8 = 42;
      break L59;
     }
    }
   } while (0);
   if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i15 | 0, __ZN7WebCore9HTMLNames7dirAttrE) | 0) {
    i8 = 42;
    break;
   }
  }
  i14 = HEAP32[i15 + 16 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i8 = 63;
   break;
  }
  i12 = HEAP32[i14 + 12 >> 2] | 0;
  if ((i12 & 4 | 0) == 0) {
   i8 = 65;
   break;
  } else {
   i18 = i14;
   i19 = i12;
  }
  while (1) {
   if ((i19 & 16 | 0) != 0) {
    break;
   }
   i12 = HEAP32[i18 + 16 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i8 = 66;
    break L59;
   }
   i14 = HEAP32[i12 + 12 >> 2] | 0;
   if ((i14 & 4 | 0) == 0) {
    i8 = 67;
    break L59;
   } else {
    i18 = i12;
    i19 = i14;
   }
  }
  if ((i18 | 0) == 0) {
   i8 = 64;
   break;
  } else {
   i15 = i18;
  }
 }
 if ((i8 | 0) == 42) {
  i18 = __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i15, i5) | 0;
  __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i16, 1, HEAP32[i5 >> 2] | 0);
  i5 = (HEAP32[i17 >> 2] & 2048 | 0) == 0;
  i17 = i15 + 32 | 0;
  if (i5) {
   i20 = i17 | 0;
  } else {
   i20 = HEAP32[i17 >> 2] | 0;
  }
  if ((HEAP32[i20 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if (i5) {
   i21 = i17 | 0;
  } else {
   i21 = HEAP32[i17 >> 2] | 0;
  }
  if (((HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 | 0) == (i18 | 0)) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i16, 32768);
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 63) {
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 64) {
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 65) {
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 66) {
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 67) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL41populateEventNameForAttributeLocalNameMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS0_12AtomicStringENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 56 | 0;
 i10 = i5 | 0;
 i11 = i3 | 0;
 i12 = i4 | 0;
 i13 = i1 | 0;
 i1 = 0;
 while (1) {
  i14 = (HEAP32[HEAP32[H_BASE + 280 + (i1 << 2) >> 2] >> 2] | 0) + 12 | 0;
  __ZNK3WTF6String9substringEjj(i5, i14 | 0, 2, -1);
  i15 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    HEAP32[i11 >> 2] = 0;
   } else {
    if ((HEAP32[i15 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i15);
     break;
    } else {
     HEAP32[i11 >> 2] = i15;
     i16 = i15 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     break;
    }
   }
  } while (0);
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  i15 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i16 = i15 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i16 >> 2] = i17;
     break;
    }
   }
  } while (0);
  HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i7, i13, i6, i4);
  i15 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i17 = i15 | 0;
    i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i17 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 69 >>> 0) {
   break;
  }
 }
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 616 | 0;
 i12 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 604 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 612 | 0;
 i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 608 | 0;
 i7 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 616 | 0;
 HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames19ontransitionendAttrE >> 2] | 0) + 12 >> 2];
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i13, i8, i1);
 HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames24onwebkitanimationendAttrE >> 2] | 0) + 12 >> 2];
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i13, i8, i12);
 HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames30onwebkitanimationiterationAttrE >> 2] | 0) + 12 >> 2];
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i13, i8, i4);
 HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames26onwebkitanimationstartAttrE >> 2] | 0) + 12 >> 2];
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i13, i8, i6);
 HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames25onwebkittransitionendAttrE >> 2] | 0) + 12 >> 2];
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i13, i8, i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11HTMLElement12setOuterHTMLERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 12 >> 2] & 20 | 0) != 20) {
    break;
   }
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = HEAP32[i1 + 24 >> 2] | 0;
   i10 = (i9 | 0) == 0;
   if (!i10) {
    i11 = i9 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = HEAP32[i1 + 28 >> 2] | 0;
   i12 = (i11 | 0) == 0;
   if (!i12) {
    i13 = i11 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi(i5, i2, i8, 2, i3);
   i13 = i5 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   do {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i13 = i6 | 0;
     HEAP32[i13 >> 2] = i14;
     __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i8, i6, i7, i3) | 0;
     i15 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i13 = i15 + 8 | 0;
       i16 = i13 | 0;
       i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
      }
     } while (0);
     do {
      if (i12) {
       i18 = 0;
       i19 = 1;
      } else {
       i15 = HEAP32[i11 + 24 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i18 = 0;
        i19 = 1;
        break;
       }
       i13 = i15 + 8 | 0;
       HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
       i18 = i15;
       i19 = 0;
      }
     } while (0);
     do {
      if ((HEAP32[i3 >> 2] | 0) == 0) {
       do {
        if (i19) {
         i20 = 0;
        } else {
         if ((HEAP32[i18 + 12 >> 2] & 1 | 0) == 0) {
          i20 = 0;
          break;
         }
         __ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi(i18, i3);
         i20 = (HEAP32[i3 >> 2] | 0) != 0;
        }
       } while (0);
       if (i20 | i10) {
        break;
       }
       if ((HEAP32[i9 + 12 >> 2] & 1 | 0) == 0) {
        break;
       }
       __ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi(i9, i3);
      }
     } while (0);
     if (i19) {
      break;
     }
     i15 = i18 + 8 | 0;
     i13 = i15 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    } else {
     if ((i14 | 0) == 0) {
      break;
     }
     i15 = i14 + 8 | 0;
     i17 = i15 | 0;
     i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   do {
    if (!i12) {
     i14 = i11 + 8 | 0;
     i15 = i14 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   do {
    if (!i10) {
     i11 = i9 + 8 | 0;
     i12 = i11 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i9 = i8 + 8 | 0;
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11HTMLElement14insertAdjacentERKN3WTF6StringEPNS_4NodeERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i11 = 0;
   STACKTOP = i5;
   return i11 | 0;
  }
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i13 = i3 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  i13 = __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i2, i6, i1 | 0, i4) | 0;
  i6 = i13 ? i3 : 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i11 = i6;
   STACKTOP = i5;
   return i11 | 0;
  }
  i12 = i13 + 8 | 0;
  i13 = i12 | 0;
  i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  HEAP32[i13 >> 2] = i2;
  if ((i2 | 0) >= 1) {
   i11 = i6;
   STACKTOP = i5;
   return i11 | 0;
  }
  if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
   i11 = i6;
   STACKTOP = i5;
   return i11 | 0;
  }
  __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  i11 = i6;
  STACKTOP = i5;
  return i11 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 24 | 0) | 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i12 = i3 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  i12 = __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1 | 0, i7, HEAP32[i1 + 36 >> 2] | 0, i4) | 0;
  i7 = i12 ? i3 : 0;
  i12 = HEAP32[i6 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i11 = i7;
   STACKTOP = i5;
   return i11 | 0;
  }
  i6 = i12 + 8 | 0;
  i12 = i6 | 0;
  i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  HEAP32[i12 >> 2] = i2;
  if ((i2 | 0) >= 1) {
   i11 = i7;
   STACKTOP = i5;
   return i11 | 0;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   i11 = i7;
   STACKTOP = i5;
   return i11 | 0;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  i11 = i7;
  STACKTOP = i5;
  return i11 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 8 | 0) | 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1 | 0, i8, i4) | 0;
  i8 = i6 ? i3 : 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i11 = i8;
   STACKTOP = i5;
   return i11 | 0;
  }
  i7 = i6 + 8 | 0;
  i6 = i7 | 0;
  i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i2;
  if ((i2 | 0) >= 1) {
   i11 = i8;
   STACKTOP = i5;
   return i11 | 0;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   i11 = i8;
   STACKTOP = i5;
   return i11 | 0;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  i11 = i8;
  STACKTOP = i5;
  return i11 | 0;
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 248 | 0) | 0)) {
  HEAP32[i4 >> 2] = 9;
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i7 = i3 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i10, i9, HEAP32[i1 + 28 >> 2] | 0, i4) | 0;
 i4 = i7 ? i3 : 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = i4;
  STACKTOP = i5;
  return i11 | 0;
 }
 i8 = i3 + 8 | 0;
 i3 = i8 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i11 = i4;
  STACKTOP = i5;
  return i11 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i11 = i4;
  STACKTOP = i5;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i11 = i4;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
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
  i22 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
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
  i22 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
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
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
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
function __ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i9 = i7 + 16 | 0;
   i10 = i7 + 8 | 0;
   i11 = i10;
   i12 = i10 | 0;
   i10 = 0;
   while (1) {
    i13 = i10 >>> 0 < i8 >>> 0;
    if (!i13) {
     i14 = i10;
     break;
    }
    if ((HEAP32[i9 >> 2] & 32 | 0) == 0) {
     i15 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i10 << 1) >> 1] | 0;
    } else {
     i15 = HEAPU8[(HEAP32[i12 >> 2] | 0) + i10 | 0] | 0;
    }
    if ((i15 & 65535) >>> 0 < 33 >>> 0) {
     i10 = i10 + 1 | 0;
    } else {
     i16 = 8;
     break;
    }
   }
   L10 : do {
    if ((i16 | 0) == 8) {
     if (!i13) {
      i14 = i10;
      break;
     }
     L13 : do {
      if ((HEAP32[i9 >> 2] & 32 | 0) == 0) {
       i17 = i10;
       while (1) {
        i18 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i17 << 1) >> 1] | 0;
        if ((i18 & 65535) >>> 0 > 57 >>> 0) {
         i14 = i17;
         break L10;
        }
        if ((i18 & 65535) >>> 0 < 48 >>> 0) {
         if ((i18 << 16 >> 16 | 0) == 37 | (i18 << 16 >> 16 | 0) == 42) {
          i19 = i17;
          break L13;
         } else if ((i18 << 16 >> 16 | 0) != 46) {
          i14 = i17;
          break L10;
         }
        }
        i18 = i17 + 1 | 0;
        if (i18 >>> 0 < i8 >>> 0) {
         i17 = i18;
        } else {
         i14 = i18;
         break L10;
        }
       }
      } else {
       i17 = i10;
       while (1) {
        i18 = HEAP8[(HEAP32[i12 >> 2] | 0) + i17 | 0] | 0;
        i20 = i18 & 255;
        if ((i18 & 255) >>> 0 > 57 >>> 0) {
         i14 = i17;
         break L10;
        }
        if ((i18 & 255) >>> 0 < 48 >>> 0) {
         if ((i20 << 16 >> 16 | 0) == 37 | (i20 << 16 >> 16 | 0) == 42) {
          i19 = i17;
          break L13;
         } else if ((i20 << 16 >> 16 | 0) != 46) {
          i14 = i17;
          break L10;
         }
        }
        i20 = i17 + 1 | 0;
        if (i20 >>> 0 < i8 >>> 0) {
         i17 = i20;
        } else {
         i14 = i20;
         break L10;
        }
       }
      }
     } while (0);
     i14 = i19 + 1 | 0;
    }
   } while (0);
   if ((i14 | 0) == (i8 | 0)) {
    break;
   }
   __ZN3WTF10StringImpl9substringEjj(i6, i7, 0, i14);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i2, i3, i6);
   i12 = HEAP32[i6 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i10 = i12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i2, i3, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11HTMLElement18setContentEditableERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i11 >> 2] | 0, H_BASE + 264 | 0) | 0) {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i7, H_BASE + 264 | 0, 4);
  i2 = i8 | 0;
  i12 = i7 | 0;
  i7 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i2 >> 2] = i7;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore9HTMLNames19contenteditableAttrE, i8);
  i8 = HEAP32[i2 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i2 = i8 | 0;
  i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i8);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i2 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i11 >> 2] | 0, H_BASE + 80 | 0) | 0) {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i6, H_BASE + 80 | 0, 5);
  i7 = i9 | 0;
  i2 = i6 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i7 >> 2] = i6;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore9HTMLNames19contenteditableAttrE, i9);
  i9 = HEAP32[i7 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i9 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i7 >> 2] = i6;
   STACKTOP = i4;
   return;
  }
 }
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i11 >> 2] | 0, H_BASE + 144 | 0) | 0)) {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i11 >> 2] | 0, H_BASE + 160 | 0) | 0) {
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1 | 0, __ZN7WebCore9HTMLNames19contenteditableAttrE);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i3 >> 2] = 12;
   STACKTOP = i4;
   return;
  }
 }
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 144 | 0, 14);
 i3 = i10 | 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i3 >> 2] = i5;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore9HTMLNames19contenteditableAttrE, i10);
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i10 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11basefontTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8imageTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10isindexTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8paramTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9sourceTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6wbrTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i2 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9canvasTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i4 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP8[i4 + 194 | 0] & 1) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0) | (i10 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0) | (i10 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((i10 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0)) {
  __ZN7WebCore11HTMLElement19dirAttributeChangedERKN3WTF12AtomicStringE(i1, i3);
  STACKTOP = i4;
  return;
 }
 if ((i10 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12tabindexAttrE >> 2] | 0)) {
  HEAP32[i5 >> 2] = 0;
  i11 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
     break;
    }
    if (!(__ZN7WebCore16parseHTMLIntegerERKN3WTF6StringERi(i3 | 0, i5) | 0)) {
     STACKTOP = i4;
     return;
    }
    i12 = HEAP32[i5 >> 2] | 0;
    i13 = (i12 | 0) > 32767 ? 32767 : i12;
    __ZN7WebCore7Element21setTabIndexExplicitlyEs(i8, (i13 | 0) > -32768 ? i13 & 65535 : -32768);
    STACKTOP = i4;
    return;
   }
  } while (0);
  __ZN7WebCore7Element31clearTabIndexExplicitlyIfNeededEv(i8);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i10 + 16 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if (HEAP8[H_BASE + 1184 | 0] | 0) {
  if ((HEAP32[H_BASE + 1212 >> 2] | 0) == 0) {
   i14 = 14;
  }
 } else {
  _memset(H_BASE + 1200 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1184 | 0] = 1;
  i14 = 14;
 }
 if ((i14 | 0) == 14) {
  __ZN7WebCoreL41populateEventNameForAttributeLocalNameMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS0_12AtomicStringENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE(H_BASE + 1200);
 }
 HEAP32[i7 >> 2] = HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2];
 __ZNK3WTF7HashMapIPNS_16AtomicStringImplENS_12AtomicStringENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENS6_IS3_EEE3getERKS2_(i6, H_BASE + 1200, i7);
 i7 = i6 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1 | 0, i6, i2, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = -(i2 & 1) & 536870912;
 HEAP32[i4 >> 2] = i5 & -536870913 | i6;
 if ((i5 & 2 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 } else {
  i7 = i5;
 }
 L6 : while (1) {
  i5 = i7 + 12 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if (!((i4 & 536870912 | 0) != 0 ^ i2)) {
   i8 = 22;
   break;
  }
  L9 : do {
   if ((i4 & 16 | 0) == 0) {
    i9 = i4;
    i8 = 15;
   } else {
    do {
     if ((i4 & 4 | 0) == 0) {
      i8 = 9;
     } else {
      i10 = HEAP32[i7 + 44 >> 2] | 0;
      i11 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
      if ((i10 | 0) == (i11 | 0)) {
       break;
      }
      if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
       i8 = 9;
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
       i8 = 9;
      }
     }
    } while (0);
    do {
     if ((i8 | 0) == 9) {
      i8 = 0;
      if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames7dirAttrE) | 0) {
       break;
      }
      i9 = HEAP32[i5 >> 2] | 0;
      i8 = 15;
      break L9;
     }
    } while (0);
    if ((i7 | 0) == (i3 | 0) | (i7 | 0) == (i1 | 0)) {
     i8 = 28;
     break L6;
    }
    i11 = HEAP32[i7 + 28 >> 2] | 0;
    if ((i11 | 0) != 0) {
     i7 = i11;
     continue L6;
    }
    i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i7, i1) | 0;
   }
  } while (0);
  if ((i8 | 0) == 15) {
   i8 = 0;
   HEAP32[i5 >> 2] = i9 & -536870913 | i6;
   if ((i7 | 0) == (i3 | 0)) {
    i8 = 23;
    break;
   }
   if ((i9 & 2 | 0) != 0) {
    i4 = HEAP32[i7 + 36 >> 2] | 0;
    if ((i4 | 0) != 0) {
     i7 = i4;
     continue;
    }
   }
   if ((i7 | 0) == (i1 | 0)) {
    i8 = 26;
    break;
   }
   i4 = HEAP32[i7 + 28 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i7 = i4;
    continue;
   }
   i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i7, i1) | 0;
  }
  if ((i12 | 0) == 0) {
   i8 = 25;
   break;
  } else {
   i7 = i12;
  }
 }
 if ((i8 | 0) == 23) {
  return;
 } else if ((i8 | 0) == 25) {
  return;
 } else if ((i8 | 0) == 26) {
  return;
 } else if ((i8 | 0) == 22) {
  return;
 } else if ((i8 | 0) == 28) {
  return;
 }
}
function __ZN3WTF6VectorIcLj130ENS_15CrashOnOverflowEE14appendSlowCaseIcEEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + i4 | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = i2 - i7 | 0;
   i10 = i1 + 4 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + 1 + (i11 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   i12 = i13 >>> 0 > i5 >>> 0 ? i13 : i5;
   do {
    if (i11 >>> 0 < i12 >>> 0) {
     if (i12 >>> 0 > 130 >>> 0) {
      i13 = __ZN3WTF18fastMallocGoodSizeEj(i12) | 0;
      HEAP32[i10 >> 2] = i13;
      i14 = __ZN3WTF10fastMallocEj(i13) | 0;
      HEAP32[i6 >> 2] = i14;
      i15 = i14;
      i16 = i1 + 12 | 0;
     } else {
      i14 = i1 + 12 | 0;
      HEAP32[i6 >> 2] = i14;
      HEAP32[i10 >> 2] = 130;
      i15 = i14;
      i16 = i14;
     }
     _memcpy(i15 | 0, i7 | 0, i4) | 0;
     if ((i16 | 0) == (i7 | 0) | (i7 | 0) == 0) {
      break;
     }
     if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
      HEAP32[i6 >> 2] = 0;
      HEAP32[i10 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   i17 = (HEAP32[i6 >> 2] | 0) + i9 | 0;
  }
 } while (0);
 do {
  if ((i8 | 0) == 3) {
   i16 = i1 + 4 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i10 = i15 + 1 + (i15 >>> 2) | 0;
   i12 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   i10 = i12 >>> 0 > i5 >>> 0 ? i12 : i5;
   if (i15 >>> 0 >= i10 >>> 0) {
    i17 = i2;
    break;
   }
   if (i10 >>> 0 > 130 >>> 0) {
    i15 = __ZN3WTF18fastMallocGoodSizeEj(i10) | 0;
    HEAP32[i16 >> 2] = i15;
    i10 = __ZN3WTF10fastMallocEj(i15) | 0;
    HEAP32[i6 >> 2] = i10;
    i18 = i10;
    i19 = i1 + 12 | 0;
   } else {
    i10 = i1 + 12 | 0;
    HEAP32[i6 >> 2] = i10;
    HEAP32[i16 >> 2] = 130;
    i18 = i10;
    i19 = i10;
   }
   _memcpy(i18 | 0, i7 | 0, i4) | 0;
   if ((i19 | 0) == (i7 | 0) | (i7 | 0) == 0) {
    i17 = i2;
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i16 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i7);
   i17 = i2;
  }
 } while (0);
 HEAP8[(HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0] = HEAP8[i17] | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore11HTMLElement15contentEditableEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i2 + 48 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i11 = i2 >>> 1 & 134217727;
    i12 = i9 + 20 | 0;
   } else {
    i2 = i9 + 24 | 0;
    i11 = HEAP32[i2 + 8 >> 2] | 0;
    i12 = HEAP32[i2 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    i10 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore9HTMLNames19contenteditableAttrE >> 2] | 0;
   i13 = i2 + 12 | 0;
   i14 = i2 + 16 | 0;
   i15 = 0;
   while (1) {
    i16 = i12 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
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
     i10 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i10 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i12 + (i15 << 3) + 4 | 0;
  }
 } while (0);
 i12 = i10 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAP32[i4 >> 2] = H_BASE + 160;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i4);
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i10, H_BASE + 264 | 0) | 0) {
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 80 | 0) | 0) {
    HEAP32[i6 >> 2] = H_BASE + 80;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i6);
    STACKTOP = i3;
    return;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 144 | 0) | 0) {
    HEAP32[i7 >> 2] = H_BASE + 144;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i7);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i8 >> 2] = H_BASE + 160;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i8);
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 264;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11HTMLElement9translateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 1;
    return i3 | 0;
   }
   i4 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i4 & 4 | 0) == 0) {
    i3 = 1;
    return i3 | 0;
   } else {
    i5 = i2;
    i6 = i4;
   }
   while (1) {
    if ((i6 & 16 | 0) != 0) {
     i7 = 7;
     break;
    }
    i4 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i3 = 1;
     i7 = 19;
     break;
    }
    i2 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i2 & 4 | 0) == 0) {
     i3 = 1;
     i7 = 18;
     break;
    } else {
     i5 = i4;
     i6 = i2;
    }
   }
   if ((i7 | 0) == 7) {
    if ((i5 | 0) == 0) {
     i3 = 1;
    } else {
     i8 = i5;
     break;
    }
    return i3 | 0;
   } else if ((i7 | 0) == 18) {
    return i3 | 0;
   } else if ((i7 | 0) == 19) {
    return i3 | 0;
   }
  } else {
   i8 = i1;
  }
 } while (0);
 L17 : while (1) {
  i9 = __ZNK7WebCore11HTMLElement22translateAttributeModeEv(i8) | 0;
  if ((i9 | 0) != 2) {
   i7 = 9;
   break;
  }
  i1 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i7 = 27;
   break;
  }
  i5 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i5 & 4 | 0) == 0) {
   i3 = 1;
   i7 = 26;
   break;
  } else {
   i10 = i1;
   i11 = i5;
  }
  while (1) {
   if ((i11 & 16 | 0) != 0) {
    break;
   }
   i5 = HEAP32[i10 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i3 = 1;
    i7 = 23;
    break L17;
   }
   i1 = HEAP32[i5 + 12 >> 2] | 0;
   if ((i1 & 4 | 0) == 0) {
    i3 = 1;
    i7 = 24;
    break L17;
   } else {
    i10 = i5;
    i11 = i1;
   }
  }
  if ((i10 | 0) == 0) {
   i3 = 1;
   i7 = 22;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i7 | 0) == 27) {
  return i3 | 0;
 } else if ((i7 | 0) == 23) {
  return i3 | 0;
 } else if ((i7 | 0) == 24) {
  return i3 | 0;
 } else if ((i7 | 0) == 9) {
  i3 = (i9 | 0) == 0;
  return i3 | 0;
 } else if ((i7 | 0) == 22) {
  return i3 | 0;
 } else if ((i7 | 0) == 26) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11HTMLElement54adjustDirectionalityIfNeededAfterChildAttributeChangedEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i1, i3 | 0) | 0;
 __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i2 | 0, 0, 0);
 i2 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i5 = i1 + 32 | 0;
 if (i2) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i2) {
  i7 = i5 | 0;
 } else {
  i7 = HEAP32[i5 >> 2] | 0;
 }
 if (((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 | 0) == (i4 | 0) | (i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 L15 : while (1) {
  i8 = i4 | 0;
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  if ((i1 & 16 | 0) != 0) {
   do {
    if ((i1 & 4 | 0) != 0) {
     i7 = HEAP32[i8 + 44 >> 2] | 0;
     i5 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
     if ((i7 | 0) == (i5 | 0)) {
      i9 = 16;
      break L15;
     }
     if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i9 = 16;
      break L15;
     }
    }
   } while (0);
   if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames7dirAttrE) | 0) {
    i9 = 16;
    break;
   }
  }
  i1 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i9 = 24;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i9 = 26;
   break;
  }
  if ((i1 | 0) == 0) {
   i9 = 23;
   break;
  } else {
   i4 = i1;
  }
 }
 if ((i9 | 0) == 26) {
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 16) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i8, 32768);
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 23) {
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 24) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11HTMLElement30applyAlignmentAttributeToStyleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i2 | 0;
 L1 : do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 232 | 0) | 0) {
   i5 = 143;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 216 | 0) | 0) {
    i5 = 149;
    break;
   }
   do {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 208 | 0) | 0) {
     i6 = 152;
    } else {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 200 | 0) | 0) {
      i6 = 153;
      break;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 192 | 0) | 0) {
      i5 = 148;
      break L1;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 272 | 0) | 0) {
      i5 = 150;
      break L1;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 184 | 0) | 0) {
      i5 = 143;
      break L1;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 176 | 0) | 0) {
      i5 = 142;
      break L1;
     }
     i2 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 168 | 0) | 0;
     if (i2) {
      i5 = i2 ? 146 : 0;
      break L1;
     }
     return;
    }
   } while (0);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i3, 79, i6);
   i5 = 148;
  }
 } while (0);
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i3, 161, i5);
 return;
}
function __ZN7WebCore11HTMLElement18insertAdjacentHTMLERKN3WTF6StringES4_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 i8 = i2 | 0;
 do {
  if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 40 | 0) | 0) {
   i9 = 3;
  } else {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 248 | 0) | 0) {
    i9 = 3;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 24 | 0) | 0) {
    i10 = i7;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 8 | 0) | 0) {
    i10 = i7;
    break;
   }
   HEAP32[i4 >> 2] = 12;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = HEAP32[i1 + 16 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    if ((HEAP32[i9 + 12 >> 2] & 4 | 0) != 0) {
     break;
    }
    HEAP32[i4 >> 2] = 7;
    STACKTOP = i5;
    return;
   }
  } while (0);
  i10 = i9;
 }
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi(i6, i3, i10, 2, i4);
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore11HTMLElement14insertAdjacentERKN3WTF6StringEPNS_4NodeERi(i1, i2, i6 | 0, i4) | 0;
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11HTMLElement16hasDirectionAutoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = __ZN3WTF8nullAtomE;
  } else {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 & 1 | 0) == 0) {
    i5 = i4 >>> 1 & 134217727;
    i6 = i2 + 20 | 0;
   } else {
    i4 = i2 + 24 | 0;
    i5 = HEAP32[i4 + 8 >> 2] | 0;
    i6 = HEAP32[i4 >> 2] | 0;
   }
   if ((i5 | 0) == 0) {
    i3 = __ZN3WTF8nullAtomE;
    break;
   }
   i4 = HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0;
   i7 = i4 + 12 | 0;
   i8 = i4 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i6 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i4 | 0)) {
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
     i3 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i3 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i6 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames6bdiTagE >> 2] | 0;
 do {
  if ((i6 | 0) == (i1 | 0)) {
   i12 = 15;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i12 = 15;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 15) {
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    i13 = 1;
   } else {
    break;
   }
   return i13 | 0;
  }
 } while (0);
 i13 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0;
 return i13 | 0;
}
function __ZNK7WebCore11HTMLElement22translateAttributeModeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i4 = i1 >>> 1 & 134217727;
    i5 = i2 + 20 | 0;
   } else {
    i1 = i2 + 24 | 0;
    i4 = HEAP32[i1 + 8 >> 2] | 0;
    i5 = HEAP32[i1 >> 2] | 0;
   }
   if ((i4 | 0) == 0) {
    i3 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore9HTMLNames13translateAttrE >> 2] | 0;
   i6 = i1 + 12 | 0;
   i7 = i1 + 16 | 0;
   i8 = 0;
   while (1) {
    i9 = i5 + (i8 << 3) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
      break;
     }
    }
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 < i4 >>> 0) {
     i8 = i10;
    } else {
     i3 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i3 = (i9 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i8 << 3) + 4 | 0;
  }
 } while (0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = 2;
  return i11 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i3, H_BASE + 136 | 0) | 0) {
  i11 = 0;
  return i11 | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = 0;
  return i11 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i11 = 0;
  return i11 | 0;
 }
 i5 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i3, H_BASE + 128 | 0) | 0;
 i11 = i5 ? 1 : 2;
 return i11 | 0;
}
function __ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 12 >> 2] & 1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i4 | 0;
 i7 = HEAP32[i5 + 36 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 __ZN7WebCore13CharacterData10appendDataERKN3WTF6StringERi(i1 | 0, i4, i2);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  __ZN7WebCore4Node6removeERi(i5, i2);
 }
 i2 = i5 + 8 | 0;
 i5 = i2 - 8 | 0;
 i4 = i2 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore11HTMLElement13setSpellcheckEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 if (i2) {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 264 | 0, 4);
  i2 = i6 | 0;
  i1 = i5 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 >> 2] = i5;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames14spellcheckAttrE, i6);
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i5 | 0;
  i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i1 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i5);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i2 >> 2] = i1;
   STACKTOP = i3;
   return;
  }
 } else {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 80 | 0, 5);
  i1 = i6 | 0;
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames14spellcheckAttrE, i6);
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i6 | 0;
  i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore11HTMLElement12setDraggableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 if (i2) {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 264 | 0, 4);
  i2 = i6 | 0;
  i1 = i5 | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 >> 2] = i5;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames13draggableAttrE, i6);
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i5 | 0;
  i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i1 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i5);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i2 >> 2] = i1;
   STACKTOP = i3;
   return;
  }
 } else {
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 80 | 0, 5);
  i1 = i6 | 0;
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames13draggableAttrE, i6);
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i6 | 0;
  i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZNK3WTF7HashMapIPNS_16AtomicStringImplENS_12AtomicStringENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENS6_IS3_EEE3getERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i6 & i4;
   i7 = i5 + (i3 << 3) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i6 >>> 23) + ~i6 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i3;
    i3 = i8;
    while (1) {
     if ((i3 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i3 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    return;
   }
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore11HTMLElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = __Znwj(52) | 0;
 i5 = i4;
 i6 = i4;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAP32[i6 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i4 + 12 >> 2] = 8222;
 HEAP32[i4 + 16 >> 2] = 0;
 i7 = i4 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 1224 | 0] | 0) == 0) {
    i8 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i8);
    HEAP32[H_BASE + 1192 >> 2] = i8;
    HEAP32[H_BASE + 1224 >> 2] = 1;
    HEAP32[H_BASE + 1228 >> 2] = 0;
    i9 = i8;
    break;
   } else {
    i9 = HEAP32[H_BASE + 1192 >> 2] | 0;
    break;
   }
  } else {
   i9 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = 0;
 i7 = i9 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i4 + 36 >> 2] = 0;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i6 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 + 44 >> 2] = i7;
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i4 + 48 >> 2] = 0;
 HEAP32[i6 >> 2] = H_BASE + 568;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZNK7WebCore11HTMLElement5titleEv(i1, i2) {
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
   i2 = HEAP32[__ZN7WebCore9HTMLNames9titleAttrE >> 2] | 0;
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
function __ZN7WebCore11HTMLElement19dirAttributeChangedERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 12 >> 2] & 536870932 | 0) != 536870932) {
    break;
   }
   __ZN7WebCore11HTMLElement54adjustDirectionalityIfNeededAfterChildAttributeChangedEPNS_7ElementE(i6, i1 | 0);
  }
 } while (0);
 if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 72 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i1, i4) | 0;
 __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i5, 1, HEAP32[i4 >> 2] | 0);
 i4 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i1 + 32 | 0;
 if (i4) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i4) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 if (((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11HTMLElement9draggableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i4 = i1 >>> 1 & 134217727;
    i5 = i2 + 20 | 0;
   } else {
    i1 = i2 + 24 | 0;
    i4 = HEAP32[i1 + 8 >> 2] | 0;
    i5 = HEAP32[i1 >> 2] | 0;
   }
   if ((i4 | 0) == 0) {
    i3 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore9HTMLNames13draggableAttrE >> 2] | 0;
   i6 = i1 + 12 | 0;
   i7 = i1 + 16 | 0;
   i8 = 0;
   while (1) {
    i9 = i5 + (i8 << 3) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
      break;
     }
    }
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 < i4 >>> 0) {
     i8 = i10;
    } else {
     i3 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i3 = (i9 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i8 << 3) + 4 | 0;
  }
 } while (0);
 return __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 264 | 0) | 0;
}
function __ZN7WebCore11HTMLElement27applyBorderAttributeToStyleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 4;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i9 = 4;
    break;
   }
   i10 = __ZN7WebCore27parseHTMLNonNegativeIntegerERKN3WTF6StringERj(i2 | 0, i5) | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   if (i10) {
    i12 = i11;
   } else {
    i8 = i11;
    i9 = 4;
   }
  }
 } while (0);
 if ((i9 | 0) == 4) {
  i12 = (HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0) ? 1 : i8;
 }
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesE(i6, i3, 65, +(i12 >>> 0 >>> 0), 5);
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i6, i3, 58, 11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11HTMLElement12setInnerHTMLERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi(i5, i2, i1 | 0, 2, i3);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i7 = __ZNK7WebCore19HTMLTemplateElement7contentEv(i1) | 0;
 } else {
  i7 = i1 | 0;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = i5;
 __ZN7WebCore27replaceChildrenWithFragmentERNS_13ContainerNodeEN3WTF10PassRefPtrINS_16DocumentFragmentEEERi(i7, i6, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11HTMLElement28mapLanguageAttributeToLocaleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i1 | 0;
  } else {
   i8 = i1 | 0;
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i7 = i8;
    break;
   }
   __ZN7WebCore14quoteCSSStringERKN3WTF6StringE(i5, i2 | 0);
   __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i8, i3, 15, i5);
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i9 >> 2] = i10;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i7, i3, 15, 269);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i5 + 460 >> 2] | 0, 1) | 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  } else {
   if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if (__ZN7WebCore14SubframeLoader12allowPluginsENS_28ReasonForCallingAllowPluginsE(HEAP32[i5 + 100 >> 2] | 0, 1) | 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = __ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE(i3, i2) | 0;
 return i6 | 0;
}
function __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6wbrTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i7 = __ZN3WTF10fastMallocEj(56) | 0;
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore15RenderLineBreakC1ERNS_11HTMLElementEN3WTF7PassRefINS_11RenderStyleEEE(i7, i2, i5);
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore13RenderElement9createForERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2 | 0, i6);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11HTMLElement32calculateAndAdjustDirectionalityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i1, i3) | 0;
 i5 = i1 | 0;
 __ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_(i5, 1, HEAP32[i3 >> 2] | 0);
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i1 + 32 | 0;
 if (i3) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (i3) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 if (((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 | 0) == (i4 | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9alignAttrE >> 2] | 0) | (i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames19contenteditableAttrE >> 2] | 0) | (i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10hiddenAttrE >> 2] | 0) | (i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0)) {
  return 1;
 }
 i2 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  return 1;
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
    break;
   }
   return 1;
  }
 } while (0);
 return (i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13draggableAttrE >> 2] | 0) | (i1 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0) | 0;
}
function __ZN7WebCore11HTMLElement18insertAdjacentTextERKN3WTF6StringES4_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i6, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i3);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore11HTMLElement14insertAdjacentERKN3WTF6StringEPNS_4NodeERi(i1, i2, i6 | 0, i4) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11HTMLElement25parseBorderWidthAttributeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    i6 = 0;
    break;
   }
   i7 = __ZN7WebCore27parseHTMLNonNegativeIntegerERKN3WTF6StringERj(i2 | 0, i4) | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   if (i7) {
    i9 = i8;
   } else {
    i6 = i8;
    break;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 i9 = (HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0) ? 1 : i6;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore11HTMLElement12setTranslateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3WTF12AtomicString3addEPKh(i4, i2 ? H_BASE + 136 | 0 : H_BASE + 128 | 0);
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore9HTMLNames13translateAttrE, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11HTMLElement8nodeNameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0) {
   i3 = i2 + 44 | 0;
   if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
    break;
   }
   i4 = HEAP32[(__ZNK7WebCore13QualifiedName14localNameUpperEv(i3) | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) == 0) {
    return;
   }
   i3 = i4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 __ZNK7WebCore7Element8nodeNameEv(i1, i2 | 0);
 return;
}
function __ZNK7WebCore11HTMLElement13supportsFocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (__ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1 | 0, 0, 1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3 | 0, 0, 1) | 0) ^ 1;
 return i2 | 0;
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
function __ZNK7WebCore11HTMLElement35directionalityIfhasDirAutoAttributeERb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 536870912 | 0) != 0) {
   if (!(__ZNK7WebCore11HTMLElement16hasDirectionAutoEv(i1) | 0)) {
    break;
   }
   HEAP8[i2] = 1;
   i3 = __ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE(i1, 0) | 0;
   return i3 | 0;
  }
 } while (0);
 HEAP8[i2] = 0;
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
function __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2);
 __ZN7WebCore11HTMLElement48adjustDirectionalityIfNeededAfterChildrenChangedEPNS_7ElementENS_13ContainerNode15ChildChangeTypeE(i1, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0);
 return;
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore11HTMLElement21insertAdjacentElementERKN3WTF6StringEPNS_7ElementERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 17;
  i5 = 0;
  return i5 | 0;
 } else {
  i5 = __ZN7WebCore11HTMLElement14insertAdjacentERKN3WTF6StringEPNS_4NodeERi(i1, i2, i3 | 0, i4) | 0;
  return i5 | 0;
 }
 return 0;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore11HTMLElement9outerHTMLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE(i1, i2 | 0, 0, 0, 0, 0, 0);
 return;
}
function __ZNK7WebCore11HTMLElement9innerHTMLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE(i1, i2 | 0, 1, 0, 0, 0, 0);
 return;
}
function __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 255](i1 | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 255](i1 | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 255](i1 | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
 return i2 | 0;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11HTMLElement8tabIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 344 >> 2] & 255](i1) | 0)) {
  i2 = -1;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore11HTMLElement15accessKeyActionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1 | 0, 0, i2 & 1, 1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
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
function __ZN7WebCore11HTMLElement5clickEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1 | 0, 0, 0, 0);
 return;
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore11HTMLElement11setTabIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i1 | 0, __ZN7WebCore9HTMLNames12tabindexAttrE, i2);
 return;
}
function iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
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
function iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
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
function vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function __ZN7WebCore11HTMLElement8childrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element26ensureCachedHTMLCollectionENS_14CollectionTypeE(i1, i2 | 0, 10);
 return;
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function __ZNK7WebCore11HTMLElement11virtualFormEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore15HTMLFormElement23findClosestFormAncestorERKNS_7ElementE(i1 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function __ZNK7WebCore11HTMLElement10spellcheckEv(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 504 >> 2] & 255](i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
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
function ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element16isMouseFocusableEv(i1 | 0) | 0;
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
function vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element21finishParsingChildrenEv(i1 | 0);
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
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
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
function __ZN7WebCore11HTMLElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
function v___ZN7WebCore7Element22customStyleForRendererEv__wrapper() {
 __ZN7WebCore7Element22customStyleForRendererEv();
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
function __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZN7WebCore11HTMLElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
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
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
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
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element23areAuthorShadowsAllowedEv(i1) {
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
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11HTMLElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
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
function __ZNK7WebCore11HTMLElement11isLabelableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore11HTMLElementD0Ev,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv
  ,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore11HTMLElementD1Ev,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore11HTMLElement15accessKeyActionEb,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,__ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb
  ,b2,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,__ZNK7WebCore11HTMLElement8nodeNameEv,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,__ZNK7WebCore11HTMLElement5titleEv,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,__ZNK7WebCore11HTMLElement8tabIndexEv,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper
  ,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZN7WebCore11HTMLElement15asFormNamedItemEv,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv
  ,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv,b3,__ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv
  ,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,__ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv,b3,__ZNK7WebCore11HTMLElement9draggableEv,b3,__ZNK7WebCore11HTMLElement13supportsFocusEv,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper,b3,__ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv,b3,__ZNK7WebCore4Node14customPseudoIdEv
  ,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,__ZNK7WebCore11HTMLElement11virtualFormEv,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore11HTMLElement11isLabelableEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b4,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b4,__ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b4,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b4,__ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b5,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b5,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b6,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b6,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b6,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b6,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b6,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper,b6,iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b6,__ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE,b6,__ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE,b6,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b6,__ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b7,__ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames20onloadedmetadataAttrE": __ZN7WebCore9HTMLNames20onloadedmetadataAttrE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames26onwebkitanimationstartAttrE": __ZN7WebCore9HTMLNames26onwebkitanimationstartAttrE, "__ZN7WebCore9HTMLNames14onfocusoutAttrE": __ZN7WebCore9HTMLNames14onfocusoutAttrE, "__ZN7WebCore9HTMLNames16onmousewheelAttrE": __ZN7WebCore9HTMLNames16onmousewheelAttrE, "__ZN7WebCore9HTMLNames13onseekingAttrE": __ZN7WebCore9HTMLNames13onseekingAttrE, "__ZN7WebCore9HTMLNames13translateAttrE": __ZN7WebCore9HTMLNames13translateAttrE, "__ZN7WebCore9HTMLNames14onprogressAttrE": __ZN7WebCore9HTMLNames14onprogressAttrE, "__ZN7WebCore9HTMLNames16onmouseleaveAttrE": __ZN7WebCore9HTMLNames16onmouseleaveAttrE, "__ZN7WebCore9HTMLNames11onpasteAttrE": __ZN7WebCore9HTMLNames11onpasteAttrE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames25onwebkittransitionendAttrE": __ZN7WebCore9HTMLNames25onwebkittransitionendAttrE, "__ZN7WebCore9HTMLNames15ontouchmoveAttrE": __ZN7WebCore9HTMLNames15ontouchmoveAttrE, "__ZN7WebCore9HTMLNames13onmouseupAttrE": __ZN7WebCore9HTMLNames13onmouseupAttrE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames17onselectstartAttrE": __ZN7WebCore9HTMLNames17onselectstartAttrE, "__ZN7WebCore9HTMLNames10isindexTagE": __ZN7WebCore9HTMLNames10isindexTagE, "__ZN7WebCore9HTMLNames13onplayingAttrE": __ZN7WebCore9HTMLNames13onplayingAttrE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames13oninvalidAttrE": __ZN7WebCore9HTMLNames13oninvalidAttrE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames16ontimeupdateAttrE": __ZN7WebCore9HTMLNames16ontimeupdateAttrE, "__ZN7WebCore9HTMLNames6bdiTagE": __ZN7WebCore9HTMLNames6bdiTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames13onfocusinAttrE": __ZN7WebCore9HTMLNames13onfocusinAttrE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames16onbeforecopyAttrE": __ZN7WebCore9HTMLNames16onbeforecopyAttrE, "__ZN7WebCore9HTMLNames13ondragendAttrE": __ZN7WebCore9HTMLNames13ondragendAttrE, "__ZN7WebCore9HTMLNames14ontouchendAttrE": __ZN7WebCore9HTMLNames14ontouchendAttrE, "__ZN7WebCore9HTMLNames20ondurationchangeAttrE": __ZN7WebCore9HTMLNames20ondurationchangeAttrE, "__ZN7WebCore9HTMLNames11basefontTagE": __ZN7WebCore9HTMLNames11basefontTagE, "__ZN7WebCore9HTMLNames8imageTagE": __ZN7WebCore9HTMLNames8imageTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames15onmousedownAttrE": __ZN7WebCore9HTMLNames15onmousedownAttrE, "__ZN7WebCore9HTMLNames12tabindexAttrE": __ZN7WebCore9HTMLNames12tabindexAttrE, "__ZN7WebCore9HTMLNames16onloadeddataAttrE": __ZN7WebCore9HTMLNames16onloadeddataAttrE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames19ontransitionendAttrE": __ZN7WebCore9HTMLNames19ontransitionendAttrE, "__ZN7WebCore9HTMLNames11onwheelAttrE": __ZN7WebCore9HTMLNames11onwheelAttrE, "__ZN7WebCore9HTMLNames11onfocusAttrE": __ZN7WebCore9HTMLNames11onfocusAttrE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames13onemptiedAttrE": __ZN7WebCore9HTMLNames13onemptiedAttrE, "__ZN7WebCore9HTMLNames10ondropAttrE": __ZN7WebCore9HTMLNames10ondropAttrE, "__ZN7WebCore9HTMLNames17oncontextmenuAttrE": __ZN7WebCore9HTMLNames17oncontextmenuAttrE, "__ZN7WebCore9HTMLNames15ondragleaveAttrE": __ZN7WebCore9HTMLNames15ondragleaveAttrE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE, "__ZN7WebCore9HTMLNames13onsuspendAttrE": __ZN7WebCore9HTMLNames13onsuspendAttrE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames24onwebkitanimationendAttrE": __ZN7WebCore9HTMLNames24onwebkitanimationendAttrE, "__ZN7WebCore9HTMLNames14ondragoverAttrE": __ZN7WebCore9HTMLNames14ondragoverAttrE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore9HTMLNames6wbrTagE": __ZN7WebCore9HTMLNames6wbrTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames9titleAttrE": __ZN7WebCore9HTMLNames9titleAttrE, "__ZN7WebCore9HTMLNames12onseekedAttrE": __ZN7WebCore9HTMLNames12onseekedAttrE, "__ZN7WebCore9HTMLNames10oncopyAttrE": __ZN7WebCore9HTMLNames10oncopyAttrE, "__ZN7WebCore9HTMLNames9oncutAttrE": __ZN7WebCore9HTMLNames9oncutAttrE, "__ZN7WebCore9HTMLNames15onmousemoveAttrE": __ZN7WebCore9HTMLNames15onmousemoveAttrE, "__ZN7WebCore9HTMLNames9outputTagE": __ZN7WebCore9HTMLNames9outputTagE, "__ZN7WebCore9HTMLNames9sourceTagE": __ZN7WebCore9HTMLNames9sourceTagE, "__ZN7WebCore9HTMLNames17ontouchcancelAttrE": __ZN7WebCore9HTMLNames17ontouchcancelAttrE, "__ZN7WebCore9HTMLNames27onwebkitfullscreenerrorAttrE": __ZN7WebCore9HTMLNames27onwebkitfullscreenerrorAttrE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames16onratechangeAttrE": __ZN7WebCore9HTMLNames16onratechangeAttrE, "__ZN7WebCore9HTMLNames11onkeyupAttrE": __ZN7WebCore9HTMLNames11onkeyupAttrE, "__ZN7WebCore9HTMLNames11onclickAttrE": __ZN7WebCore9HTMLNames11onclickAttrE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore9HTMLNames11onresetAttrE": __ZN7WebCore9HTMLNames11onresetAttrE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames14onmouseoutAttrE": __ZN7WebCore9HTMLNames14onmouseoutAttrE, "__ZN7WebCore9HTMLNames11onabortAttrE": __ZN7WebCore9HTMLNames11onabortAttrE, "__ZN7WebCore9HTMLNames10onplayAttrE": __ZN7WebCore9HTMLNames10onplayAttrE, "__ZN7WebCore9HTMLNames9alignAttrE": __ZN7WebCore9HTMLNames9alignAttrE, "__ZN7WebCore9HTMLNames15onloadstartAttrE": __ZN7WebCore9HTMLNames15onloadstartAttrE, "__ZN7WebCore9HTMLNames12onscrollAttrE": __ZN7WebCore9HTMLNames12onscrollAttrE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames13onstalledAttrE": __ZN7WebCore9HTMLNames13onstalledAttrE, "__ZN7WebCore9HTMLNames6bdoTagE": __ZN7WebCore9HTMLNames6bdoTagE, "__ZN7WebCore9HTMLNames20oncanplaythroughAttrE": __ZN7WebCore9HTMLNames20oncanplaythroughAttrE, "__ZN7WebCore9HTMLNames11oninputAttrE": __ZN7WebCore9HTMLNames11oninputAttrE, "__ZN7WebCore9HTMLNames13onwaitingAttrE": __ZN7WebCore9HTMLNames13onwaitingAttrE, "__ZN7WebCore9HTMLNames16onmouseenterAttrE": __ZN7WebCore9HTMLNames16onmouseenterAttrE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames15onbeforecutAttrE": __ZN7WebCore9HTMLNames15onbeforecutAttrE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore9HTMLNames28onwebkitfullscreenchangeAttrE": __ZN7WebCore9HTMLNames28onwebkitfullscreenchangeAttrE, "__ZN7WebCore9HTMLNames15onmouseoverAttrE": __ZN7WebCore9HTMLNames15onmouseoverAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE, "__ZN7WebCore9HTMLNames18onvolumechangeAttrE": __ZN7WebCore9HTMLNames18onvolumechangeAttrE, "__ZN7WebCore9HTMLNames13onkeydownAttrE": __ZN7WebCore9HTMLNames13onkeydownAttrE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames13oncanplayAttrE": __ZN7WebCore9HTMLNames13oncanplayAttrE, "__ZN7WebCore9HTMLNames16ontouchstartAttrE": __ZN7WebCore9HTMLNames16ontouchstartAttrE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames19contenteditableAttrE": __ZN7WebCore9HTMLNames19contenteditableAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore9HTMLNames11onendedAttrE": __ZN7WebCore9HTMLNames11onendedAttrE, "__ZN7WebCore9HTMLNames14ondblclickAttrE": __ZN7WebCore9HTMLNames14ondblclickAttrE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames15ondragenterAttrE": __ZN7WebCore9HTMLNames15ondragenterAttrE, "__ZN7WebCore9HTMLNames12onselectAttrE": __ZN7WebCore9HTMLNames12onselectAttrE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames12onchangeAttrE": __ZN7WebCore9HTMLNames12onchangeAttrE, "__ZN7WebCore9HTMLNames10hiddenAttrE": __ZN7WebCore9HTMLNames10hiddenAttrE, "__ZN7WebCore9HTMLNames13draggableAttrE": __ZN7WebCore9HTMLNames13draggableAttrE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames11onpauseAttrE": __ZN7WebCore9HTMLNames11onpauseAttrE, "__ZN7WebCore9HTMLNames14spellcheckAttrE": __ZN7WebCore9HTMLNames14spellcheckAttrE, "__ZN7WebCore9HTMLNames8langAttrE": __ZN7WebCore9HTMLNames8langAttrE, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE, "__ZN7WebCore9HTMLNames15ondragstartAttrE": __ZN7WebCore9HTMLNames15ondragstartAttrE, "__ZN7WebCore9HTMLNames30onwebkitanimationiterationAttrE": __ZN7WebCore9HTMLNames30onwebkitanimationiterationAttrE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZN7WebCore9HTMLNames8paramTagE": __ZN7WebCore9HTMLNames8paramTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames10onblurAttrE": __ZN7WebCore9HTMLNames10onblurAttrE, "__ZN7WebCore9HTMLNames17onbeforepasteAttrE": __ZN7WebCore9HTMLNames17onbeforepasteAttrE, "__ZN7WebCore9HTMLNames14onkeypressAttrE": __ZN7WebCore9HTMLNames14onkeypressAttrE, "__ZN7WebCore9HTMLNames12onsubmitAttrE": __ZN7WebCore9HTMLNames12onsubmitAttrE, "__ZN7WebCore9HTMLNames11onerrorAttrE": __ZN7WebCore9HTMLNames11onerrorAttrE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames10onloadAttrE": __ZN7WebCore9HTMLNames10onloadAttrE, "__ZN7WebCore9HTMLNames10ondragAttrE": __ZN7WebCore9HTMLNames10ondragAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore11HTMLElement18insertAdjacentTextERKN3WTF6StringES4_Ri","__ZN7WebCore11HTMLElement18setContentEditableERKN3WTF6StringERi","__ZN7WebCore11HTMLElement14textToFragmentERKN3WTF6StringERi","__ZNK7WebCore11HTMLElement8tabIndexEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCoreL21mergeWithNextTextNodeERNS_4TextERi","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore11HTMLElement8childrenEv","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore11HTMLElement9draggableEv","__ZNK7WebCore11HTMLElement35directionalityIfhasDirAutoAttributeERb","__ZN7WebCore11HTMLElement21insertAdjacentElementERKN3WTF6StringEPNS_7ElementERi","_memcpy","__ZN7WebCore11HTMLElement32calculateAndAdjustDirectionalityEv","__ZN7WebCore11HTMLElement18insertAdjacentHTMLERKN3WTF6StringES4_Ri","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES2_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF6VectorIcLj130ENS_15CrashOnOverflowEE14appendSlowCaseIcEEvOT_","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore11HTMLElement9translateEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK3WTF7HashMapIPNS_16AtomicStringImplENS_12AtomicStringENS_7PtrHashIS2_EENS_10HashTraitsIS2_EENS6_IS3_EEE3getERKS2_","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore11HTMLElement19dirAttributeChangedERKN3WTF12AtomicStringE","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore11HTMLElement13setSpellcheckEb","__ZNK7WebCore11HTMLElement13supportsFocusEv","__ZN7WebCore11HTMLElement14insertAdjacentERKN3WTF6StringEPNS_4NodeERi","__ZNK7WebCore11HTMLElement14directionalityEPPNS_4NodeE","__ZN7WebCore11HTMLElement15accessKeyActionEb","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore11HTMLElement25parseBorderWidthAttributeERKN3WTF12AtomicStringE","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv","__ZNK7WebCore11HTMLElement15contentEditableEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN7WebCore11HTMLElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore11HTMLElement9innerHTMLEv","__ZN7WebCore11HTMLElement19addHTMLColorToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE","__ZN7WebCore11HTMLElement30applyAlignmentAttributeToStyleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZN7WebCore11HTMLElement12setOuterTextERKN3WTF6StringERi","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore11HTMLElement12setDraggableEb","__ZNK7WebCore11HTMLElement10spellcheckEv","__ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE","__ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZNK7WebCore11HTMLElement22translateAttributeModeEv","__ZN7WebCore11HTMLElement12setTranslateEb","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore11HTMLElement12setInnerHTMLERKN3WTF6StringERi","__ZN7WebCoreL41populateEventNameForAttributeLocalNameMapERN3WTF7HashMapIPNS0_16AtomicStringImplENS0_12AtomicStringENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENS7_IS4_EEEE","__ZN7WebCore11HTMLElement27applyBorderAttributeToStyleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv","__ZN7WebCore11HTMLElementD0Ev","__ZN7WebCore11HTMLElement5clickEv","__ZNK7WebCore11HTMLElement11virtualFormEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore11HTMLElement54adjustDirectionalityIfNeededAfterChildAttributeChangedEPNS_7ElementE","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore11HTMLElement48adjustDirectionalityIfNeededAfterChildrenChangedEPNS_7ElementENS_13ContainerNode15ChildChangeTypeE","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZNK7WebCore11HTMLElement9outerHTMLEv","__ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore11HTMLElement12setInnerTextERKN3WTF6StringERi","__ZN7WebCore11HTMLElement11setTabIndexEi","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK7WebCore11HTMLElement8nodeNameEv","__ZN7WebCore11HTMLElement12setOuterHTMLERKN3WTF6StringERi","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZNK7WebCore11HTMLElement5titleEv","__ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_12AtomicStringEEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS2_EENS_7HashMapIS2_S4_S9_NS_10HashTraitsIS2_EENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv","__ZN7WebCore11HTMLElementD1Ev","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore11HTMLElement28mapLanguageAttributeToLocaleERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore11HTMLElement16hasDirectionAutoEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZN7WebCoreL28setHasDirAutoFlagRecursivelyEPNS_4NodeEbS1_","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

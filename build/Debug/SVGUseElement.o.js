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
H_BASE = parentModule["_malloc"](2184 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2184;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([102,97,108,115,101,0,0,0,116,114,117,101,0,0,0,0,71,69,84,0,0,0,0,0,78,111,116,32,97,108,108,111,119,101,100,32,116,111,32,117,115,101,32,105,110,100,105,114,101,99,116,32,114,101,102,101,114,101,110,99,101,32,105,110,32,60,99,108,105,112,45,112,97,116,104,62,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore8SVGNames10polygonTagE=env.__ZN7WebCore8SVGNames10polygonTagE|0;
  var __ZN7WebCore8SVGNames9switchTagE=env.__ZN7WebCore8SVGNames9switchTagE|0;
  var __ZN7WebCore8SVGNames9circleTagE=env.__ZN7WebCore8SVGNames9circleTagE|0;
  var __ZN7WebCore8SVGNames4gTagE=env.__ZN7WebCore8SVGNames4gTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames7descTagE=env.__ZN7WebCore8SVGNames7descTagE|0;
  var __ZN7WebCore8SVGNames10heightAttrE=env.__ZN7WebCore8SVGNames10heightAttrE|0;
  var __ZN7WebCore8SVGNames4aTagE=env.__ZN7WebCore8SVGNames4aTagE|0;
  var __ZN7WebCore8SVGNames7pathTagE=env.__ZN7WebCore8SVGNames7pathTagE|0;
  var __ZN7WebCore8SVGNames8titleTagE=env.__ZN7WebCore8SVGNames8titleTagE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN7WebCore8SVGNames7trefTagE=env.__ZN7WebCore8SVGNames7trefTagE|0;
  var __ZN7WebCore8SVGNames5yAttrE=env.__ZN7WebCore8SVGNames5yAttrE|0;
  var __ZN7WebCore8SVGNames5xAttrE=env.__ZN7WebCore8SVGNames5xAttrE|0;
  var __ZN7WebCore8SVGNames7rectTagE=env.__ZN7WebCore8SVGNames7rectTagE|0;
  var __ZN7WebCore8SVGNames11textPathTagE=env.__ZN7WebCore8SVGNames11textPathTagE|0;
  var __ZN7WebCore8SVGNames7lineTagE=env.__ZN7WebCore8SVGNames7lineTagE|0;
  var __ZN7WebCore8SVGNames7textTagE=env.__ZN7WebCore8SVGNames7textTagE|0;
  var __ZN7WebCore8SVGNames8tspanTagE=env.__ZN7WebCore8SVGNames8tspanTagE|0;
  var __ZN7WebCore8SVGNames9symbolTagE=env.__ZN7WebCore8SVGNames9symbolTagE|0;
  var __ZN7WebCore8SVGNames10ellipseTagE=env.__ZN7WebCore8SVGNames10ellipseTagE|0;
  var __ZN7WebCore8SVGNames8imageTagE=env.__ZN7WebCore8SVGNames8imageTagE|0;
  var __ZN7WebCore8SVGNames11polylineTagE=env.__ZN7WebCore8SVGNames11polylineTagE|0;
  var __ZN7WebCore8SVGNames6useTagE=env.__ZN7WebCore8SVGNames6useTagE|0;
  var __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE=env.__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE|0;
  var __ZN7WebCore8SVGNames11metadataTagE=env.__ZN7WebCore8SVGNames11metadataTagE|0;
  var __ZN7WebCore10XLinkNames8hrefAttrE=env.__ZN7WebCore10XLinkNames8hrefAttrE|0;
  var __ZN7WebCore8SVGNames9widthAttrE=env.__ZN7WebCore8SVGNames9widthAttrE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEEE=(H_BASE+184)|0;
  var __ZTCN7WebCore13SVGUseElementE92_NS_16SVGTransformableE=(H_BASE+1192)|0;
  var __ZTVN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEE=(H_BASE+152)|0;
  var __ZTVN7WebCore32SVGAnimatedStaticPropertyTearOffIbEE=(H_BASE+120)|0;
  var __ZTCN7WebCore13SVGUseElementE0_NS_18SVGGraphicsElementE=(H_BASE+1272)|0;
  var __ZTTN7WebCore13SVGUseElementE=(H_BASE+1160)|0;
  var __ZTVN7WebCore13SVGUseElementE=(H_BASE+216)|0;
  var __ZTVN7WebCore12SVGLocatableE=(H_BASE+1112)|0;
  var __ZTVN7WebCore5TimerINS_10SVGElementEEE=(H_BASE+88)|0;
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
  var invoke_did=env.invoke_did;
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
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 102;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 116;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vi + 120;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vi + 114;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 1160 >> 2] = H_BASE + 228;
 HEAP32[H_BASE + 1164 >> 2] = H_BASE + 1284;
 HEAP32[H_BASE + 1168 >> 2] = H_BASE + 1232;
 HEAP32[H_BASE + 1172 >> 2] = H_BASE + 1232;
 HEAP32[H_BASE + 1176 >> 2] = H_BASE + 2008;
 HEAP32[H_BASE + 1180 >> 2] = H_BASE + 2008;
 HEAP32[H_BASE + 1184 >> 2] = H_BASE + 980;
 HEAP32[H_BASE + 1188 >> 2] = H_BASE + 980;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1484 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1492 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1500 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1504 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 1508 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 1512 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 1516 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 1520 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1524 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1532 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 1536 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1540 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1544 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1548 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1552 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1556 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 1560 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1564 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1572 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1576 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1580 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1584 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1588 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 1592 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1596 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1600 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 1604 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1612 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 1616 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 1620 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 1624 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1628 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1632 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 1636 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1640 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 1644 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 1652 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 1656 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 1660 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 1664 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1668 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1672 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1676 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 1700 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 1704 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1780 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1784 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1804 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1820 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1860 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1864 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1900 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1904 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 1908 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 1912 >> 2] = F_BASE_vi + 120;
 HEAP32[H_BASE + 1916 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 1920 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 1924 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 1928 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 1932 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 1936 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1940 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 1944 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1948 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 1952 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 1956 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 2008 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 2012 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 2016 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 2020 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 2024 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 2028 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 2032 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 2036 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 2040 >> 2] = F_BASE_vii + 92;
}
function __ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 32 | 0) == 0) {
  i3 = 1;
  STACKTOP = i2;
  return i3 | 0;
 }
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2120 >> 2] = i6;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i4 = i6;
 }
 if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 | 0, i4 | 0, __ZN7WebCore8SVGNames4aTagE, __ZN7WebCore8SVGNames4aTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 16 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames9circleTagE, __ZN7WebCore8SVGNames9circleTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 32 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7descTagE, __ZN7WebCore8SVGNames7descTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 48 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames10ellipseTagE, __ZN7WebCore8SVGNames10ellipseTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 64 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames4gTagE, __ZN7WebCore8SVGNames4gTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 80 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames8imageTagE, __ZN7WebCore8SVGNames8imageTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 96 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7lineTagE, __ZN7WebCore8SVGNames7lineTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 112 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames11metadataTagE, __ZN7WebCore8SVGNames11metadataTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 128 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7pathTagE, __ZN7WebCore8SVGNames7pathTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 144 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames10polygonTagE, __ZN7WebCore8SVGNames10polygonTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 160 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames11polylineTagE, __ZN7WebCore8SVGNames11polylineTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 176 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7rectTagE, __ZN7WebCore8SVGNames7rectTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 192 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames6svgTagE, __ZN7WebCore8SVGNames6svgTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 208 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames9switchTagE, __ZN7WebCore8SVGNames9switchTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 224 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames9symbolTagE, __ZN7WebCore8SVGNames9symbolTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 240 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7textTagE, __ZN7WebCore8SVGNames7textTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 256 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames11textPathTagE, __ZN7WebCore8SVGNames11textPathTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 272 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames8titleTagE, __ZN7WebCore8SVGNames8titleTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 288 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames7trefTagE, __ZN7WebCore8SVGNames7trefTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 304 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames8tspanTagE, __ZN7WebCore8SVGNames8tspanTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 320 | 0, HEAP32[H_BASE + 2120 >> 2] | 0, __ZN7WebCore8SVGNames6useTagE, __ZN7WebCore8SVGNames6useTagE);
  i7 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i7 = i4;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i3 = 1;
  STACKTOP = i2;
  return i3 | 0;
 }
 i3 = (__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i7 | 0, i1 + 44 | 0) | 0) == 0;
 STACKTOP = i2;
 return i3 | 0;
}
function __ZN7WebCore13SVGUseElement29expandUseElementsInShadowTreeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
   i10 = i2;
  } else {
   i11 = HEAP32[i2 + 44 >> 2] | 0;
   i12 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
   if ((i11 | 0) != (i12 | 0)) {
    if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
     i10 = i2;
     break;
    }
    if ((HEAP32[i11 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
     i10 = i2;
     break;
    }
   }
   i12 = __ZNK7WebCore13SVGUseElement4hrefEv(i2) | 0;
   i11 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i12, __ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0, 0, 0) | 0;
   do {
    if ((i11 | 0) == 0) {
     i13 = 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] & 32 | 0) == 0) {
      i13 = 0;
      break;
     }
     i13 = i11;
    }
   } while (0);
   i11 = __ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0;
   __ZN7WebCore11SVGGElement6createERKNS_13QualifiedNameERNS_8DocumentE(i4, __ZN7WebCore8SVGNames4gTagE, i11);
   i11 = i4 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = i12 | 0;
   __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i2, i11);
   i14 = i12 | 0;
   i15 = i12 | 0;
   __ZN7WebCore7Element20cloneDataFromElementERKS0_(i15, i2);
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore8SVGNames5xAttrE);
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore8SVGNames5yAttrE);
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore8SVGNames9widthAttrE);
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore8SVGNames10heightAttrE);
   __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore10XLinkNames8hrefAttrE);
   do {
    if ((i13 | 0) != 0) {
     i15 = i13 | 0;
     if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i15) | 0) {
      break;
     }
     __ZN7WebCore7Element24cloneElementWithChildrenEv(i5, i15);
     i15 = i5 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     i15 = i6 | 0;
     HEAP32[i15 >> 2] = i16;
     i16 = i7 | 0;
     HEAP32[i16 >> 2] = 0;
     __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i11, i6, i16) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 + 8 | 0;
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i11 = i12 + 36 | 0;
   while (1) {
    i18 = HEAP32[i11 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i19 = 29;
     break;
    }
    if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
     i11 = i18 + 28 | 0;
    } else {
     i19 = 17;
     break;
    }
   }
   L21 : do {
    if ((i19 | 0) == 29) {
     i20 = i12 | 0;
    } else if ((i19 | 0) == 17) {
     i11 = i12 | 0;
     i15 = i18;
     L24 : while (1) {
      if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i15) | 0) {
       break;
      }
      i17 = HEAP32[i15 + 36 >> 2] | 0;
      do {
       if ((i17 | 0) == 0) {
        if ((i15 | 0) == (i11 | 0)) {
         i20 = i11;
         break L21;
        }
        i16 = HEAP32[i15 + 28 >> 2] | 0;
        if ((i16 | 0) != 0) {
         i21 = i16;
         break;
        }
        i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i15, i11) | 0;
        if ((i16 | 0) == 0) {
         i20 = i11;
         break L21;
        } else {
         i21 = i16;
        }
       } else {
        i21 = i17;
       }
      } while (0);
      if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
       i22 = i21;
      } else {
       i15 = i21;
       continue;
      }
      while (1) {
       if ((i22 | 0) == (i11 | 0)) {
        i20 = i11;
        break L21;
       }
       i17 = HEAP32[i22 + 28 >> 2] | 0;
       if ((i17 | 0) == 0) {
        i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i22, i11) | 0;
        if ((i16 | 0) == 0) {
         i20 = i11;
         break L21;
        } else {
         i23 = i16;
        }
       } else {
        i23 = i17;
       }
       if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
        i22 = i23;
       } else {
        i15 = i23;
        continue L24;
       }
      }
     }
     __ZN7WebCoreL35removeDisallowedElementsFromSubtreeERNS_10SVGElementE(i14);
     i20 = i11;
    }
   } while (0);
   i14 = (i12 | 0) == 0;
   if (!i14) {
    i15 = i12 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = HEAP32[i2 + 16 >> 2] | 0;
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = i20;
   i16 = i9 | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i15, i8, i2, i16) | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     i15 = i17 | 0;
     i24 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i17 = i16 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i17 = i16;
    while (1) {
     __ZN7WebCore13SVGUseElement29expandUseElementsInShadowTreeEPNS_4NodeE(i1, i17);
     i16 = HEAP32[i17 + 28 >> 2] | 0;
     i24 = (i16 | 0) == 0;
     if (!i24) {
      i15 = i16 + 8 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     }
     i15 = i17 + 8 | 0;
     i25 = i15 - 8 | 0;
     i26 = i15 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i27;
     do {
      if ((i27 | 0) < 1) {
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25);
      }
     } while (0);
     if (i24) {
      break;
     } else {
      i17 = i16;
     }
    }
   }
   if (i14) {
    i10 = 0;
    break;
   }
   i17 = i12 + 8 | 0;
   i25 = i17 | 0;
   i15 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    i10 = i20;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i10 = i20;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i10 = i20;
  }
 } while (0);
 if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i20 = HEAP32[i10 + 36 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i20 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i20;
 while (1) {
  __ZN7WebCore13SVGUseElement29expandUseElementsInShadowTreeEPNS_4NodeE(i1, i10);
  i20 = HEAP32[i10 + 28 >> 2] | 0;
  i2 = (i20 | 0) == 0;
  if (!i2) {
   i8 = i20 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = i10 + 8 | 0;
  i9 = i8 - 8 | 0;
  i23 = i8 | 0;
  i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
  HEAP32[i23 >> 2] = i22;
  do {
   if ((i22 | 0) < 1) {
    if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9);
   }
  } while (0);
  if (i2) {
   break;
  } else {
   i10 = i20;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElementC1ERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1 + 92 | 0;
 HEAP32[i10 >> 2] = H_BASE + 1120;
 __ZN7WebCore18SVGGraphicsElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, H_BASE + 1164 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 228;
 HEAP32[i10 >> 2] = H_BASE + 980;
 HEAP32[i1 + 176 >> 2] = H_BASE + 1024;
 HEAP32[i1 + 180 >> 2] = H_BASE + 1060;
 HEAP32[i1 + 184 >> 2] = H_BASE + 1080;
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 188 | 0, 0, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i9 = i1 + 196 | 0;
 HEAP8[i9] = HEAP8[i9] & -4;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 200 | 0, 1, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = i1 + 208 | 0;
 HEAP8[i8] = HEAP8[i8] & -4;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 212 | 0, 0, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = i1 + 220 | 0;
 HEAP8[i7] = HEAP8[i7] & -4;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 224 | 0, 1, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = i1 + 232 | 0;
 HEAP8[i6] = HEAP8[i6] & -4;
 HEAP32[i1 + 236 >> 2] = 0;
 i6 = i1 + 240 | 0;
 HEAP8[i6] = HEAP8[i6] & -4;
 i6 = i1 + 244 | 0;
 HEAP8[i6] = 0;
 i3 = i6 + 1 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 HEAP8[i1 + 246 | 0] = i4 & 1;
 HEAP8[i1 + 247 | 0] = 0;
 HEAP8[i1 + 248 | 0] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 256 | 0);
 i4 = i1 + 264 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 96;
 HEAP32[i1 + 308 >> 2] = i1;
 i4 = i1 + 312 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 52;
 HEAP32[i4 + 4 >> 2] = 0;
 if (HEAP8[H_BASE + 2064 | 0] | 0) {
  i11 = HEAP32[H_BASE + 2136 >> 2] | 0;
 } else {
  i4 = __Znwj(20) | 0;
  i1 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2136 >> 2] = i1;
  HEAP8[H_BASE + 2064 | 0] = 1;
  i11 = i1;
 }
 if ((HEAP32[i11 + 12 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 if (HEAP8[H_BASE + 2112 | 0] | 0) {
  i12 = HEAP32[H_BASE + 2184 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i1, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 46 | 0, F_BASE_vii + 12 | 0);
  HEAP32[H_BASE + 2184 >> 2] = i1;
  HEAP8[H_BASE + 2112 | 0] = 1;
  i12 = i1;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i12);
 if (HEAP8[H_BASE + 2104 | 0] | 0) {
  i13 = HEAP32[H_BASE + 2176 >> 2] | 0;
 } else {
  i12 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i12, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 6 | 0, F_BASE_vii + 40 | 0);
  HEAP32[H_BASE + 2176 >> 2] = i12;
  HEAP8[H_BASE + 2104 | 0] = 1;
  i13 = i12;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i13);
 if (HEAP8[H_BASE + 2088 | 0] | 0) {
  i14 = HEAP32[H_BASE + 2160 >> 2] | 0;
 } else {
  i13 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i13, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 42 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2160 >> 2] = i13;
  HEAP8[H_BASE + 2088 | 0] = 1;
  i14 = i13;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i14);
 if (HEAP8[H_BASE + 2080 | 0] | 0) {
  i15 = HEAP32[H_BASE + 2152 >> 2] | 0;
 } else {
  i14 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i14, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 14 | 0, F_BASE_vii + 58 | 0);
  HEAP32[H_BASE + 2152 >> 2] = i14;
  HEAP8[H_BASE + 2080 | 0] = 1;
  i15 = i14;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i15);
 if (HEAP8[H_BASE + 2096 | 0] | 0) {
  i16 = HEAP32[H_BASE + 2168 >> 2] | 0;
 } else {
  i15 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i15, 15, 0, __ZN7WebCore10XLinkNames8hrefAttrE, (HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 90 | 0, F_BASE_vii + 96 | 0);
  HEAP32[H_BASE + 2168 >> 2] = i15;
  HEAP8[H_BASE + 2096 | 0] = 1;
  i16 = i15;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i16);
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i17 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i16 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i16, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 2 | 0, F_BASE_vii + 64 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i16;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i17 = i16;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i17);
 __ZN7WebCore25SVGAttributeToPropertyMap13addPropertiesERKS0_(i11, __ZN7WebCore18SVGGraphicsElement22attributeToPropertyMapEv() | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13SVGUseElement19svgAttributeChangedERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 552 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 336 | 0;
 i8 = i3 + 520 | 0;
 i9 = i3 + 528 | 0;
 i10 = i3 + 536 | 0;
 i11 = i3 + 544 | 0;
 if (!(__ZN7WebCore13SVGUseElement20isSupportedAttributeERKNS_13QualifiedNameE(i1, i2) | 0)) {
  __ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2);
  STACKTOP = i3;
  return;
 }
 i12 = i1 | 0;
 i13 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i14 = i13 | 0;
 } else {
  i14 = HEAP32[i13 >> 2] | 0;
 }
 i13 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) | (i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) | (i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) | (i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0)) {
   __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i12, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i12) | 0, i12);
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore17RenderSVGResource42markForLayoutAndParentResourceInvalidationERNS_12RenderObjectEb(i13, 1);
  } else {
   i15 = i1 + 176 | 0;
   if (__ZN7WebCore28SVGExternalResourcesRequired21handleAttributeChangeEPNS_10SVGElementERKNS_13QualifiedNameE(i15, i12, i2) | 0) {
    break;
   }
   if (!(__ZN7WebCore15SVGURIReference16isKnownAttributeERKNS_13QualifiedNameE(i1 + 180 | 0, i2) | 0)) {
    if (!(__ZN7WebCore12SVGLangSpace16isKnownAttributeERKNS_13QualifiedNameE(i1 + 52 | 0, i2) | 0)) {
     if (!(__ZN7WebCore28SVGExternalResourcesRequired16isKnownAttributeERKNS_13QualifiedNameE(i15, i2) | 0)) {
      break;
     }
    }
    i15 = i1 + 248 | 0;
    if ((HEAP8[i15] & 1) != 0) {
     break;
    }
    HEAP8[i15] = 1;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
    __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i1);
    break;
   }
   i15 = __ZNK7WebCore13SVGUseElement4hrefEv(i1) | 0;
   i16 = i1 + 20 | 0;
   i17 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = 13;
   } else {
    if (__ZNK3WTF10StringImpl10startsWithEt(i18, 35) | 0) {
     i19 = 39;
    } else {
     i19 = 13;
    }
   }
   L21 : do {
    if ((i19 | 0) == 13) {
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, i17, i15);
     i18 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i4, i17 + 356 | 0) | 0;
     i20 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i20 | 0) == 0) {
       if (i18) {
        i19 = 39;
        break L21;
       }
      } else {
       i21 = i20 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        if (i18) {
         i19 = 39;
         break L21;
        } else {
         break;
        }
       } else {
        HEAP32[i21 >> 2] = i22;
        if (i18) {
         i19 = 39;
         break L21;
        } else {
         break;
        }
       }
      }
     } while (0);
     i18 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i18, __ZNK7WebCore13SVGUseElement4hrefEv(i1) | 0);
     if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i5) | 0) {
      __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i7, i5 | 0);
      i18 = i8 | 0;
      HEAP32[i18 >> 2] = 0;
      __ZN7WebCore21CachedResourceRequestC1ERKNS_15ResourceRequestERKN3WTF6StringENS_20ResourceLoadPriorityE(i6, i7, i8, -1);
      i20 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i18 = i20 | 0;
        i22 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
        if ((i22 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i18 >> 2] = i22;
         break;
        }
       }
      } while (0);
      __ZN7WebCore15ResourceRequestD2Ev(i7);
      i20 = i9 | 0;
      HEAP32[i20 >> 2] = i1;
      if ((i1 | 0) != 0) {
       i22 = i1 + 8 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      }
      __ZN7WebCore21CachedResourceRequest12setInitiatorEN3WTF10PassRefPtrINS_7ElementEEE(i6, i9);
      i22 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i20 = i22 + 8 | 0;
        i18 = i20 | 0;
        i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i21;
        if ((i21 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore20CachedResourceLoader18requestSVGDocumentERNS_21CachedResourceRequestE(i10, HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0, i6);
      i22 = i1 + 256 | 0;
      i20 = i22 | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      i18 = i10 | 0;
      i23 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i21 | 0) != (i23 | 0)) {
        if ((i21 | 0) == 0) {
         i24 = i23;
        } else {
         __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i21, i1 + 184 | 0);
         i24 = HEAP32[i18 >> 2] | 0;
        }
        __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i22 | 0, i24);
        i25 = HEAP32[i20 >> 2] | 0;
        if ((i25 | 0) == 0) {
         break;
        }
        __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i25, i1 + 184 | 0);
       }
      } while (0);
      __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10 | 0);
      __ZN7WebCore21CachedResourceRequestD1Ev(i6);
     }
     i20 = HEAP32[i5 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i22 = i20 | 0;
     i18 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i22 >> 2] = i18;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) == 39) {
    i16 = i11 | 0;
    __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i16, 0);
    i17 = i1 + 256 | 0;
    i15 = i17 | 0;
    i18 = HEAP32[i15 >> 2] | 0;
    i22 = i11 | 0;
    i20 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i18 | 0) != (i20 | 0)) {
      if ((i18 | 0) == 0) {
       i26 = i20;
      } else {
       __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i18, i1 + 184 | 0);
       i26 = HEAP32[i22 >> 2] | 0;
      }
      __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i17 | 0, i26);
      i21 = HEAP32[i15 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i21, i1 + 184 | 0);
     }
    } while (0);
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i16);
   }
   if ((HEAP8[i1 + 246 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore13SVGUseElement20buildPendingResourceEv(i1);
  }
 } while (0);
 __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i12);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement32expandSymbolElementsInShadowTreeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 + 12 | 0;
 do {
  if ((HEAP32[i10 >> 2] & 4 | 0) == 0) {
   i11 = i2;
  } else {
   i12 = HEAP32[i2 + 44 >> 2] | 0;
   i13 = HEAP32[__ZN7WebCore8SVGNames9symbolTagE >> 2] | 0;
   if ((i12 | 0) != (i13 | 0)) {
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
     i11 = i2;
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
     i11 = i2;
     break;
    }
   }
   i13 = __ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0;
   __ZN7WebCore13SVGSVGElement6createERKNS_13QualifiedNameERNS_8DocumentE(i4, __ZN7WebCore8SVGNames6svgTagE, i13);
   i13 = i4 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore7Element20cloneDataFromElementERKS0_(i12 | 0, i2);
   do {
    if ((HEAP32[i10 >> 2] & 2 | 0) != 0) {
     i13 = HEAP32[i2 + 36 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i14 = i5 | 0;
     i15 = i12 | 0;
     i16 = i6 | 0;
     i17 = i7 | 0;
     i18 = i13;
     while (1) {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i18 >> 2] | 0) + 84 >> 2] & 63](i5, i18, 1);
      i13 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      HEAP32[i16 >> 2] = i13;
      HEAP32[i17 >> 2] = 0;
      __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i15, i6, i17) | 0;
      i13 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i13 | 0) != 0) {
        i19 = i13 + 8 | 0;
        i20 = i19 | 0;
        i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i21;
        if ((i21 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       }
      } while (0);
      i18 = HEAP32[i18 + 28 >> 2] | 0;
      if ((i18 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i18 = i12 | 0;
   i16 = i12 + 36 | 0;
   while (1) {
    i22 = HEAP32[i16 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i23 = 28;
     break;
    }
    if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
     i16 = i22 + 28 | 0;
    } else {
     i23 = 16;
     break;
    }
   }
   L21 : do {
    if ((i23 | 0) == 16) {
     i16 = i12 | 0;
     i17 = i22;
     L23 : while (1) {
      if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i17) | 0) {
       break;
      }
      i15 = HEAP32[i17 + 36 >> 2] | 0;
      do {
       if ((i15 | 0) == 0) {
        if ((i17 | 0) == (i16 | 0)) {
         i24 = i16;
         break L21;
        }
        i14 = HEAP32[i17 + 28 >> 2] | 0;
        if ((i14 | 0) != 0) {
         i25 = i14;
         break;
        }
        i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i17, i16) | 0;
        if ((i14 | 0) == 0) {
         i24 = i16;
         break L21;
        } else {
         i25 = i14;
        }
       } else {
        i25 = i15;
       }
      } while (0);
      if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
       i26 = i25;
      } else {
       i17 = i25;
       continue;
      }
      while (1) {
       if ((i26 | 0) == (i16 | 0)) {
        i24 = i16;
        break L21;
       }
       i15 = HEAP32[i26 + 28 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i26, i16) | 0;
        if ((i14 | 0) == 0) {
         i24 = i16;
         break L21;
        } else {
         i27 = i14;
        }
       } else {
        i27 = i15;
       }
       if ((HEAP32[i27 + 12 >> 2] & 4 | 0) == 0) {
        i26 = i27;
       } else {
        i17 = i27;
        continue L23;
       }
      }
     }
     __ZN7WebCoreL35removeDisallowedElementsFromSubtreeERNS_10SVGElementE(i18);
     i24 = i16;
    } else if ((i23 | 0) == 28) {
     i24 = i12 | 0;
    }
   } while (0);
   i18 = (i12 | 0) == 0;
   if (!i18) {
    i17 = i12 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   i17 = HEAP32[i2 + 16 >> 2] | 0;
   i15 = i8 | 0;
   HEAP32[i15 >> 2] = i24;
   i14 = i9 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i17, i8, i2, i14) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
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
   i14 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i15 = i14 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = i14;
    while (1) {
     __ZN7WebCore13SVGUseElement32expandSymbolElementsInShadowTreeEPNS_4NodeE(i1, i15);
     i14 = HEAP32[i15 + 28 >> 2] | 0;
     i13 = (i14 | 0) == 0;
     if (!i13) {
      i17 = i14 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     i17 = i15 + 8 | 0;
     i19 = i17 - 8 | 0;
     i21 = i17 | 0;
     i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i20;
     do {
      if ((i20 | 0) < 1) {
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19);
      }
     } while (0);
     if (i13) {
      break;
     } else {
      i15 = i14;
     }
    }
   }
   if (i18) {
    i11 = 0;
    break;
   }
   i15 = i12 + 8 | 0;
   i19 = i15 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i11 = i24;
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    i11 = i24;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
   i11 = i24;
  }
 } while (0);
 if ((HEAP32[i11 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i24 = HEAP32[i11 + 36 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i24 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i24;
 while (1) {
  __ZN7WebCore13SVGUseElement32expandSymbolElementsInShadowTreeEPNS_4NodeE(i1, i11);
  i24 = HEAP32[i11 + 28 >> 2] | 0;
  i2 = (i24 | 0) == 0;
  if (!i2) {
   i8 = i24 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = i11 + 8 | 0;
  i9 = i8 - 8 | 0;
  i23 = i8 | 0;
  i27 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
  HEAP32[i23 >> 2] = i27;
  do {
   if ((i27 | 0) < 1) {
    if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9);
   }
  } while (0);
  if (i2) {
   break;
  } else {
   i11 = i24;
  }
 }
 STACKTOP = i3;
 return;
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
  L6 : do {
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
      break L6;
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
function __ZN7WebCoreL35removeDisallowedElementsFromSubtreeERNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 36 | 0;
 while (1) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 47;
   break;
  }
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
   i5 = i6 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i7 | 0) == 47) {
  STACKTOP = i2;
  return;
 }
 i5 = i3;
 i8 = i1 | 0;
 i1 = 0;
 i9 = 0;
 i10 = 0;
 i11 = i6;
 L7 : while (1) {
  i6 = i11;
  if (!(__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i6) | 0)) {
   i12 = HEAP32[i11 + 36 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     if ((i11 | 0) == (i8 | 0)) {
      i13 = i10;
      i14 = i1;
      i7 = 5;
      break L7;
     }
     i15 = HEAP32[i11 + 28 >> 2] | 0;
     if ((i15 | 0) != 0) {
      i16 = i15;
      break;
     }
     i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i8) | 0;
     if ((i15 | 0) == 0) {
      i13 = i10;
      i14 = i1;
      i7 = 5;
      break L7;
     } else {
      i16 = i15;
     }
    } else {
     i16 = i12;
    }
   } while (0);
   if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
    i17 = i16;
   } else {
    i1 = i1;
    i9 = i9;
    i10 = i10;
    i11 = i16;
    continue;
   }
   while (1) {
    if ((i17 | 0) == (i8 | 0)) {
     i13 = i10;
     i14 = i1;
     i7 = 5;
     break L7;
    }
    i12 = HEAP32[i17 + 28 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i17, i8) | 0;
     if ((i15 | 0) == 0) {
      i13 = i10;
      i14 = i1;
      i7 = 5;
      break L7;
     } else {
      i18 = i15;
     }
    } else {
     i18 = i12;
    }
    if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
     i17 = i18;
    } else {
     i1 = i1;
     i9 = i9;
     i10 = i10;
     i11 = i18;
     continue L7;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  if ((i1 | 0) == (i9 | 0)) {
   i12 = i9 + 1 | 0;
   do {
    if (i10 >>> 0 > i3 >>> 0) {
     i7 = 12;
    } else {
     if ((i10 + (i9 << 2) | 0) >>> 0 <= i3 >>> 0) {
      i7 = 12;
      break;
     }
     i15 = i5 - i10 >> 2;
     i19 = i12 + (i9 >>> 2) | 0;
     i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
     i19 = i20 >>> 0 > i12 >>> 0 ? i20 : i12;
     do {
      if (i9 >>> 0 < i19 >>> 0) {
       if (i19 >>> 0 > 1073741823 >>> 0) {
        i7 = 19;
        break L7;
       }
       i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
       i21 = i20 >>> 2;
       i22 = __ZN3WTF10fastMallocEj(i20) | 0;
       i20 = i22;
       i23 = i10;
       _memcpy(i22 | 0, i23 | 0, i9 << 2) | 0;
       if ((i10 | 0) == 0) {
        i24 = i20;
        i25 = i21;
        break;
       }
       i22 = (i20 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i23);
       i24 = i22 ? 0 : i20;
       i25 = i22 ? 0 : i21;
      } else {
       i24 = i10;
       i25 = i9;
      }
     } while (0);
     i26 = i24 + (i15 << 2) | 0;
     i27 = i24;
     i28 = i25;
    }
   } while (0);
   do {
    if ((i7 | 0) == 12) {
     i7 = 0;
     i19 = i12 + (i9 >>> 2) | 0;
     i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
     i19 = i21 >>> 0 > i12 >>> 0 ? i21 : i12;
     if (i9 >>> 0 >= i19 >>> 0) {
      i26 = i3;
      i27 = i10;
      i28 = i9;
      break;
     }
     if (i19 >>> 0 > 1073741823 >>> 0) {
      i7 = 14;
      break L7;
     }
     i21 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
     i19 = i21 >>> 2;
     i22 = __ZN3WTF10fastMallocEj(i21) | 0;
     i21 = i22;
     i20 = i10;
     _memcpy(i22 | 0, i20 | 0, i9 << 2) | 0;
     if ((i10 | 0) == 0) {
      i26 = i3;
      i27 = i21;
      i28 = i19;
      break;
     }
     i22 = (i21 | 0) == (i10 | 0);
     __ZN3WTF8fastFreeEPv(i20);
     i26 = i3;
     i27 = i22 ? 0 : i21;
     i28 = i22 ? 0 : i19;
    }
   } while (0);
   HEAP32[i27 + (i9 << 2) >> 2] = HEAP32[i26 >> 2];
   i29 = i27;
   i30 = i28;
   i31 = i12;
  } else {
   HEAP32[i10 + (i1 << 2) >> 2] = i6;
   i29 = i10;
   i30 = i9;
   i31 = i1 + 1 | 0;
  }
  if ((i11 | 0) == (i8 | 0)) {
   i13 = i29;
   i14 = i31;
   i7 = 5;
   break;
  }
  i19 = HEAP32[i11 + 28 >> 2] | 0;
  if ((i19 | 0) == 0) {
   i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i8) | 0;
   if ((i22 | 0) == 0) {
    i13 = i29;
    i14 = i31;
    i7 = 5;
    break;
   } else {
    i32 = i22;
   }
  } else {
   i32 = i19;
  }
  if ((HEAP32[i32 + 12 >> 2] & 4 | 0) == 0) {
   i33 = i32;
  } else {
   i1 = i31;
   i9 = i30;
   i10 = i29;
   i11 = i32;
   continue;
  }
  while (1) {
   if ((i33 | 0) == (i8 | 0)) {
    i13 = i29;
    i14 = i31;
    i7 = 5;
    break L7;
   }
   i19 = HEAP32[i33 + 28 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i33, i8) | 0;
    if ((i22 | 0) == 0) {
     i13 = i29;
     i14 = i31;
     i7 = 5;
     break L7;
    } else {
     i34 = i22;
    }
   } else {
    i34 = i19;
   }
   if ((HEAP32[i34 + 12 >> 2] & 4 | 0) == 0) {
    i33 = i34;
   } else {
    i1 = i31;
    i9 = i30;
    i10 = i29;
    i11 = i34;
    continue L7;
   }
  }
 }
 if ((i7 | 0) == 14) {
  _WTFCrash();
 } else if ((i7 | 0) == 5) {
  if ((i14 | 0) != 0) {
   i34 = i4 | 0;
   i4 = 0;
   while (1) {
    i11 = HEAP32[i13 + (i4 << 2) >> 2] | 0;
    i29 = HEAP32[i11 + 16 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i29, i11 | 0, i34) | 0;
    i4 = i4 + 1 | 0;
    if (i4 >>> 0 >= i14 >>> 0) {
     break;
    }
   }
  }
  if ((i13 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i2;
  return;
 } else if ((i7 | 0) == 19) {
  _WTFCrash();
 }
}
function __ZN7WebCore13SVGUseElement17buildInstanceTreeEPNS_10SVGElementEPNS_18SVGElementInstanceERbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i2 + 44 >> 2] | 0;
 i16 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
 do {
  if ((i15 | 0) == (i16 | 0)) {
   HEAP32[i7 >> 2] = 0;
   i17 = 6;
  } else {
   if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i16 + 12 >> 2] | 0)) {
    i18 = (HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0);
    HEAP32[i7 >> 2] = 0;
    if (i18) {
     i17 = 6;
     break;
    }
   } else {
    HEAP32[i7 >> 2] = 0;
   }
   if (!(__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i14) | 0)) {
    i19 = i5;
    i20 = 0;
    break;
   }
   HEAP8[i4] = 1;
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((i17 | 0) == 6) {
   i14 = __ZN7WebCore13SVGUseElement22hasCycleUseReferencingEPS0_PNS_18SVGElementInstanceERPNS_10SVGElementE(i1, i2, i3, i7) | 0;
   HEAP8[i4] = i14 & 1;
   if (i14) {
    STACKTOP = i6;
    return;
   }
   if (i5) {
    i19 = 1;
    i20 = 1;
    break;
   }
   __ZN7WebCore21SVGDocumentExtensions27addElementReferencingTargetEPNS_10SVGElementES2_(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1 | 0, i2);
   i19 = 1;
   i20 = 1;
  }
 } while (0);
 i5 = i2 + 36 | 0;
 while (1) {
  i21 = HEAP32[i5 >> 2] | 0;
  if ((i21 | 0) == 0) {
   break;
  }
  if ((HEAP32[i21 + 12 >> 2] & 36 | 0) == 36) {
   i17 = 14;
   break;
  } else {
   i5 = i21 + 28 | 0;
  }
 }
 L20 : do {
  if ((i17 | 0) == 14) {
   i5 = i9 | 0;
   i14 = i8 | 0;
   i16 = i10 | 0;
   i15 = i21;
   L22 : while (1) {
    i18 = i15;
    if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i15) | 0) {
     i22 = i15;
    } else {
     HEAP32[i5 >> 2] = i18;
     i23 = i15 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     __ZN7WebCore18SVGElementInstance6createEPNS_13SVGUseElementES2_N3WTF10PassRefPtrINS_10SVGElementEEE(i8, i1, 0, i9);
     i23 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     i24 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i25 = i24 + 8 | 0;
       i26 = i25 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i16 >> 2] = i23;
     __ZN7WebCore18SVGElementInstance11appendChildEN3WTF10PassRefPtrIS0_EE(i3, i10);
     i24 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i25 = i24 + 4 | 0;
       i27 = i25 | 0;
       i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 4 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore18SVGElementInstance14removedLastRefEv(i25 - 4 | 0);
      }
     } while (0);
     __ZN7WebCore13SVGUseElement17buildInstanceTreeEPNS_10SVGElementEPNS_18SVGElementInstanceERbb(i1, i18, i23, i4, i19);
     if ((HEAP8[i4] & 1) == 0) {
      i22 = i15;
     } else {
      break;
     }
    }
    while (1) {
     i24 = HEAP32[i22 + 28 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L20;
     }
     if ((HEAP32[i24 + 12 >> 2] & 36 | 0) == 36) {
      i15 = i24;
      continue L22;
     } else {
      i22 = i24;
     }
    }
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 if (!i20) {
  STACKTOP = i6;
  return;
 }
 i20 = HEAP32[i7 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i12 | 0;
 HEAP32[i7 >> 2] = i20;
 i22 = i20 + 8 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 __ZN7WebCore18SVGElementInstance6createEPNS_13SVGUseElementES2_N3WTF10PassRefPtrINS_10SVGElementEEE(i11, i1, i2, i12);
 i12 = i11 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 + 8 | 0;
   i2 = i7 | 0;
   i22 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i12 = i13 | 0;
 HEAP32[i12 >> 2] = i11;
 __ZN7WebCore18SVGElementInstance11appendChildEN3WTF10PassRefPtrIS0_EE(i3, i13);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 + 4 | 0;
   i3 = i12 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i12 - 4 | 0);
  }
 } while (0);
 __ZN7WebCore13SVGUseElement17buildInstanceTreeEPNS_10SVGElementEPNS_18SVGElementInstanceERbb(i1, i20, i11, i4, i19);
 STACKTOP = i6;
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
   if ((i17 | 0) == 11) {
    i23 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i22;
    HEAP32[i21 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i17 | 0) == 13) {
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
function __ZN7WebCore13SVGUseElement22hasCycleUseReferencingEPS0_PNS_18SVGElementInstanceERPNS_10SVGElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = __ZNK7WebCore13SVGUseElement4hrefEv(i2) | 0;
 i2 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i5, __ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0, 0, 0) | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 32 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i2;
 HEAP32[i4 >> 2] = i5;
 if ((i2 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i5 | 0) == (i1 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 L13 : do {
  if ((i1 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i5 & 1 | 0) == 0) {
    i8 = i5 >>> 1 & 134217727;
    i9 = i1 + 20 | 0;
   } else {
    i5 = i1 + 24 | 0;
    i8 = HEAP32[i5 + 8 >> 2] | 0;
    i9 = HEAP32[i5 >> 2] | 0;
   }
   if ((i8 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i5 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
   i10 = i5 + 12 | 0;
   i11 = i5 + 16 | 0;
   i12 = 0;
   while (1) {
    i13 = i9 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (i5 | 0)) {
     break;
    }
    if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
     if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      break;
     }
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     i12 = i14;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L13;
    }
   }
   i7 = (i13 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i12 << 3) + 4 | 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 i7 = (i9 | 0) == 0;
 if (!i7) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP32[i3 + 8 >> 2] | 0;
 L32 : do {
  if ((i13 | 0) == 0) {
   i15 = 0;
  } else {
   i3 = i13;
   while (1) {
    i8 = HEAP32[i3 + 20 >> 2] | 0;
    i2 = HEAP32[i8 + 48 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
       break;
      }
      i1 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i1 & 1 | 0) == 0) {
       i16 = i1 >>> 1 & 134217727;
       i17 = i2 + 20 | 0;
      } else {
       i1 = i2 + 24 | 0;
       i16 = HEAP32[i1 + 8 >> 2] | 0;
       i17 = HEAP32[i1 >> 2] | 0;
      }
      L42 : do {
       if ((i16 | 0) == 0) {
        i18 = __ZN3WTF8nullAtomE;
       } else {
        i1 = HEAP32[(HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
        i11 = i1 + 12 | 0;
        i10 = i1 + 16 | 0;
        i5 = 0;
        while (1) {
         i19 = i17 + (i5 << 3) | 0;
         i14 = HEAP32[i19 >> 2] | 0;
         if ((i14 | 0) == (i1 | 0)) {
          break;
         }
         if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
          if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
           break;
          }
         }
         i14 = i5 + 1 | 0;
         if (i14 >>> 0 < i16 >>> 0) {
          i5 = i14;
         } else {
          i18 = __ZN3WTF8nullAtomE;
          break L42;
         }
        }
        i18 = (i19 | 0) == 0 ? __ZN3WTF8nullAtomE : i17 + (i5 << 3) + 4 | 0;
       }
      } while (0);
      if ((HEAP32[i18 >> 2] | 0) != (i9 | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0)) {
       i15 = 1;
       break L32;
      }
     }
    } while (0);
    i8 = HEAP32[i3 + 8 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i15 = 0;
     break;
    } else {
     i3 = i8;
    }
   }
  }
 } while (0);
 if (i7) {
  i6 = i15;
  return i6 | 0;
 }
 i7 = i9 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  i6 = i15;
  return i6 | 0;
 } else {
  HEAP32[i7 >> 2] = i4;
  i6 = i15;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement26buildShadowAndInstanceTreeEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 8388608 | 0) != 0 | (i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i2;
 i9 = i2 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 __ZN7WebCore18SVGElementInstance6createEPNS_13SVGUseElementES2_N3WTF10PassRefPtrINS_10SVGElementEEE(i4, i1, i1, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i9 = i1 + 252 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i11 = i4 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i4 - 4 | 0);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 + 4 | 0;
   i4 = i5 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 + 8 | 0;
   i5 = i8 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP8[i6] = 0;
 __ZN7WebCore13SVGUseElement17buildInstanceTreeEPNS_10SVGElementEPNS_18SVGElementInstanceERbb(i1, i2, HEAP32[i9 >> 2] | 0, i6, 0);
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0;
 L22 : do {
  if ((i10 | 0) != 0) {
   i8 = i10;
   L23 : while (1) {
    i12 = HEAP32[i8 + 12 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i5 = HEAP32[i12 + 256 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      if ((HEAP8[i5 + 588 | 0] & 32) != 0) {
       break L23;
      }
     }
    } while (0);
    i8 = HEAP32[i8 + 32 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L22;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP8[i6] & 1) != 0) {
  __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1);
  STACKTOP = i3;
  return;
 }
 i6 = __ZNK7WebCore7Element10shadowRootEv(i1 | 0) | 0;
 __ZN7WebCore13SVGUseElement15buildShadowTreeEPNS_10SVGElementEPNS_18SVGElementInstanceE(i1, i2, HEAP32[i9 >> 2] | 0);
 i2 = i6 | 0;
 __ZN7WebCore13SVGUseElement29expandUseElementsInShadowTreeEPNS_4NodeE(i1, i2);
 __ZN7WebCore13SVGUseElement32expandSymbolElementsInShadowTreeEPNS_4NodeE(i1, i2);
 __ZN7WebCore13SVGUseElement40associateInstancesWithShadowTreeElementsEPNS_4NodeEPNS_18SVGElementInstanceE(i1, HEAP32[i6 + 36 >> 2] | 0, HEAP32[i9 >> 2] | 0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i6 + 24 >> 2] | 0) == 0) {
  __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore13SVGUseElement34transferEventListenersToShadowTreeEPNS_18SVGElementInstanceE(i1, i6);
  __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i7, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i7) | 0, i7);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
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
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
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
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 192;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   HEAP32[i11 + 32 >> 2] = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
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
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
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
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(32) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 160;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
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
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
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
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(32) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 128;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13SVGUseElement20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((__ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 8388608 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1);
 if ((HEAP32[i6 >> 2] & 256 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = __ZNK7WebCore13SVGUseElement4hrefEv(i1) | 0;
 i8 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = i1 + 256 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 0;
  } else {
   i12 = i10 + 588 | 0;
   if ((HEAP8[i12] & 32) != 0) {
    i11 = 0;
    break;
   }
   if ((((HEAP32[i12 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i11 = 0;
    break;
   }
   i11 = HEAP32[i10 + 640 >> 2] | 0;
  }
 } while (0);
 i10 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i7, i8, i4, i11) | 0;
 do {
  if ((i10 | 0) == 0) {
   i13 = 10;
  } else {
   i11 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i11 & 256 | 0) == 0) {
    i13 = 10;
    break;
   }
   if ((i11 & 32 | 0) == 0) {
    break;
   }
   __ZN7WebCore13SVGUseElement26buildShadowAndInstanceTreeEPNS_10SVGElementE(i1, i10);
   __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i1);
  }
 } while (0);
 L19 : do {
  if ((i13 | 0) == 10) {
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 588 | 0;
     if ((HEAP8[i11] & 32) != 0) {
      break;
     }
     if ((((HEAP32[i11 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
      break;
     }
     if ((HEAP32[i10 + 640 >> 2] | 0) != 0) {
      break L19;
     }
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   }
   i10 = __ZN7WebCore8Document19accessSVGExtensionsEv(__ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) | 0) | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i4 = i3 | 0;
     HEAP32[i4 >> 2] = 0;
     i14 = i4;
    } else {
     if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i11);
      i14 = i3 | 0;
      break;
     } else {
      i4 = i3 | 0;
      HEAP32[i4 >> 2] = i11;
      i8 = i11 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
      i14 = i4;
      break;
     }
    }
   } while (0);
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
   __ZN7WebCore21SVGDocumentExtensions18addPendingResourceERKN3WTF12AtomicStringEPNS_7ElementE(i10, i5, i1 | 0);
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i11 = i4 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCoreL17isDirectReferenceEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i2) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames7pathTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore8SVGNames7rectTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames9circleTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore8SVGNames10ellipseTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore8SVGNames10polygonTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore8SVGNames11polylineTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore8SVGNames7textTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCore13SVGUseElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 HEAP32[i5 >> 2] = 0;
 do {
  if (__ZN7WebCore13SVGUseElement20isSupportedAttributeERKNS_13QualifiedNameE(i1, i2) | 0) {
   i14 = HEAP32[i2 >> 2] | 0;
   if ((i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i7, 0, i3 | 0, i5, 0);
    i15 = i1 + 188 | 0;
    i16 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i15 + 4 >> 2] = i16;
    i16 = i1 + 196 | 0;
    HEAP8[i16] = HEAP8[i16] | 2;
    break;
   }
   if ((i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i9, 1, i3 | 0, i5, 0);
    i16 = i1 + 200 | 0;
    i15 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i16 + 4 >> 2] = i15;
    i15 = i1 + 208 | 0;
    HEAP8[i15] = HEAP8[i15] | 2;
    break;
   }
   if ((i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i11, 0, i3 | 0, i5, 1);
    i15 = i1 + 212 | 0;
    i16 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i15 + 4 >> 2] = i16;
    i16 = i1 + 220 | 0;
    HEAP8[i16] = HEAP8[i16] | 2;
    break;
   }
   if ((i14 | 0) == (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i13, 1, i3 | 0, i5, 1);
    i14 = i1 + 224 | 0;
    i16 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i14 + 4 >> 2] = i16;
    i16 = i1 + 232 | 0;
    HEAP8[i16] = HEAP8[i16] | 2;
    break;
   }
   if (__ZN7WebCore12SVGLangSpace14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 52 | 0, i2, i3) | 0) {
    break;
   }
   if (__ZN7WebCore28SVGExternalResourcesRequired14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 176 | 0, i2, i3) | 0) {
    break;
   }
   __ZN7WebCore15SVGURIReference14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 180 | 0, i2, i3) | 0;
  } else {
   __ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  }
 } while (0);
 __ZN7WebCore10SVGElement27reportAttributeParsingErrorENS_15SVGParsingErrorERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i5 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13SVGUseElement15buildShadowTreeEPNS_10SVGElementEPNS_18SVGElementInstanceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i2 | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore7Element24cloneElementWithChildrenEv(i5, HEAP32[i3 + 20 >> 2] | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i5;
 i2 = i5 + 36 | 0;
 while (1) {
  i8 = HEAP32[i2 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 17;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i8 + 28 | 0;
  } else {
   i9 = 5;
   break;
  }
 }
 L7 : do {
  if ((i9 | 0) == 5) {
   i2 = i5 | 0;
   i10 = i8;
   L9 : while (1) {
    i11 = i10;
    if (__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE(i11) | 0) {
     break;
    }
    i12 = HEAP32[i10 + 36 >> 2] | 0;
    do {
     if ((i12 | 0) == 0) {
      if ((i11 | 0) == (i5 | 0)) {
       i13 = i2;
       break L7;
      }
      i14 = HEAP32[i10 + 28 >> 2] | 0;
      if ((i14 | 0) != 0) {
       i15 = i14;
       break;
      }
      i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i2) | 0;
      if ((i14 | 0) == 0) {
       i13 = i2;
       break L7;
      } else {
       i15 = i14;
      }
     } else {
      i15 = i12;
     }
    } while (0);
    if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
     i16 = i15;
    } else {
     i10 = i15;
     continue;
    }
    while (1) {
     if ((i16 | 0) == (i2 | 0)) {
      i13 = i2;
      break L7;
     }
     i12 = HEAP32[i16 + 28 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i16, i2) | 0;
      if ((i11 | 0) == 0) {
       i13 = i2;
       break L7;
      } else {
       i17 = i11;
      }
     } else {
      i17 = i12;
     }
     if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
      i16 = i17;
     } else {
      i10 = i17;
      continue L9;
     }
    }
   }
   __ZN7WebCoreL35removeDisallowedElementsFromSubtreeERNS_10SVGElementE(i3);
   i13 = i2;
  } else if ((i9 | 0) == 17) {
   i13 = i5 | 0;
  }
 } while (0);
 i5 = __ZNK7WebCore7Element10shadowRootEv(i1 | 0) | 0;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = i13;
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i5, i6, i13) | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i13 + 8 | 0;
 i13 = i1 | 0;
 i6 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 HEAP32[i13 >> 2] = i6;
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
function __ZN7WebCore13SVGUseElement20isSupportedAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 if (HEAP8[H_BASE + 2072 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2144 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2144 >> 2] = i6;
  HEAP8[H_BASE + 2072 | 0] = 1;
  i4 = i6;
 }
 if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
  __ZN7WebCore12SVGLangSpace22addSupportedAttributesERN3WTF7HashSetINS_13QualifiedNameENS_17QualifiedNameHashENS1_10HashTraitsIS3_EEEE(i1 + 52 | 0, i4);
  __ZN7WebCore28SVGExternalResourcesRequired22addSupportedAttributesERN3WTF7HashSetINS_13QualifiedNameENS_17QualifiedNameHashENS1_10HashTraitsIS3_EEEE(i1 + 176 | 0, HEAP32[H_BASE + 2144 >> 2] | 0);
  __ZN7WebCore15SVGURIReference22addSupportedAttributesERN3WTF7HashSetINS_13QualifiedNameENS_17QualifiedNameHashENS1_10HashTraitsIS3_EEEE(i1 + 180 | 0, HEAP32[H_BASE + 2144 >> 2] | 0);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i3 | 0, HEAP32[H_BASE + 2144 >> 2] | 0, __ZN7WebCore8SVGNames5xAttrE, __ZN7WebCore8SVGNames5xAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i3 + 16 | 0, HEAP32[H_BASE + 2144 >> 2] | 0, __ZN7WebCore8SVGNames5yAttrE, __ZN7WebCore8SVGNames5yAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i3 + 32 | 0, HEAP32[H_BASE + 2144 >> 2] | 0, __ZN7WebCore8SVGNames9widthAttrE, __ZN7WebCore8SVGNames9widthAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i3 + 48 | 0, HEAP32[H_BASE + 2144 >> 2] | 0, __ZN7WebCore8SVGNames10heightAttrE, __ZN7WebCore8SVGNames10heightAttrE);
  i7 = HEAP32[H_BASE + 2144 >> 2] | 0;
 } else {
  i7 = i4;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i8 = (__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i7 | 0, i2) | 0) != 0;
 STACKTOP = i3;
 return i8 | 0;
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
function __ZN7WebCore13SVGUseElementD2Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + (HEAP32[i5 - 12 >> 2] | 0) >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 176 >> 2] = H_BASE + 1024;
 HEAP32[i1 + 180 >> 2] = H_BASE + 1060;
 HEAP32[i1 + 184 >> 2] = H_BASE + 1080;
 i5 = i4 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i5, 0);
 i6 = i1 + 256 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i10 = i6 | 0;
 do {
  if ((i8 | 0) != (i4 | 0)) {
   if ((i8 | 0) == 0) {
    i11 = i4;
   } else {
    __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i8, i1 + 184 | 0);
    i11 = HEAP32[i9 >> 2] | 0;
   }
   __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i10, i11);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i6, i1 + 184 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5);
 __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 264 | 0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10);
 i10 = HEAP32[i1 + 252 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 + 4 | 0;
   i7 = i5 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 i10 = HEAP32[i1 + 236 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i12 = i1 | 0;
  i13 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i12, i13);
  STACKTOP = i3;
  return;
 }
 i5 = i10 | 0;
 i11 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  i12 = i1 | 0;
  i13 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i12, i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i11;
  i12 = i1 | 0;
  i13 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i12, i13);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE(i2) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i2 | 0;
 i2 = i1 & i5;
 i9 = i6 + (i2 << 2) | 0;
 i10 = i4 | 0;
 i11 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i9 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 if (i11) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i11 = (i1 >>> 23) + ~i1 | 0;
 i1 = i11 << 12 ^ i11;
 i11 = i1 >>> 7 ^ i1;
 i1 = i11 << 2 ^ i11;
 i11 = i1 >>> 20 ^ i1 | 1;
 i1 = 0;
 i13 = i2;
 i2 = i9;
 i9 = i12;
 L7 : while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i12 | 0) != -1) {
    i14 = HEAP32[i8 >> 2] | 0;
    if ((i12 | 0) == (i14 | 0)) {
     i7 = i2;
     i15 = 10;
     break L7;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
     i7 = i2;
     i15 = 11;
     break L7;
    }
   }
  } while (0);
  i12 = (i1 | 0) == 0 ? i11 : i1;
  i14 = i12 + i13 & i5;
  i16 = i6 + (i14 << 2) | 0;
  i17 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i10 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i16 | 0;
  i17 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  if (i17) {
   i7 = 0;
   i15 = 12;
   break;
  } else {
   i1 = i12;
   i13 = i14;
   i2 = i16;
   i9 = i18;
  }
 }
 if ((i15 | 0) == 12) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 11) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 10) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 244 | 0;
 if ((HEAP8[i6 + 1 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, (HEAP8[i6] & 1) != 0 ? H_BASE + 16 | 0 : H_BASE + 8 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 2 | 0, F_BASE_vii + 64 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i8;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGUseElement17synchronizeHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 232 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 224 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2080 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2152 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 14 | 0, F_BASE_vii + 58 | 0);
  HEAP32[H_BASE + 2152 >> 2] = i8;
  HEAP8[H_BASE + 2080 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGUseElement16synchronizeWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 220 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 212 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2088 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2160 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 42 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2160 >> 2] = i8;
  HEAP8[H_BASE + 2088 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGUseElement12synchronizeXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 196 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 188 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2112 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2184 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 46 | 0, F_BASE_vii + 12 | 0);
  HEAP32[H_BASE + 2184 >> 2] = i8;
  HEAP8[H_BASE + 2112 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGUseElement12synchronizeYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 208 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 200 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2104 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2176 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 6 | 0, F_BASE_vii + 40 | 0);
  HEAP32[H_BASE + 2176 >> 2] = i8;
  HEAP8[H_BASE + 2104 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGUseElement15synchronizeHrefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 240 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 236 >> 2] | 0;
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
 if (HEAP8[H_BASE + 2096 | 0] | 0) {
  i11 = HEAP32[H_BASE + 2168 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i9, 15, 0, __ZN7WebCore10XLinkNames8hrefAttrE, (HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 90 | 0, F_BASE_vii + 96 | 0);
  HEAP32[H_BASE + 2168 >> 2] = i9;
  HEAP8[H_BASE + 2096 | 0] = 1;
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
function __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i2);
 i2 = i5 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i5 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 HEAP32[i4 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i4);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCore13SVGUseElement10toClipPathERNS_4PathE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i8 + 24 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 12 >> 2] & 32 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 588 >> 2] & 255](i9) | 0)) {
  STACKTOP = i3;
  return;
 }
 if (__ZN7WebCoreL17isDirectReferenceEPKNS_4NodeE(i9 | 0) | 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 680 >> 2] & 127](i9, i2);
  __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i5, i1 | 0);
  d10 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGUseElement1xEv(i1) | 0, i5);
  d11 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGUseElement1yEv(i1) | 0, i5);
  HEAPF32[i6 >> 2] = d10;
  HEAPF32[i6 + 4 >> 2] = d11;
  __ZN7WebCore4Path9translateERKNS_9FloatSizeE(i2, i6);
  __ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv(i7, i1 | 0);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i2, i7);
  STACKTOP = i3;
  return;
 }
 i7 = __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 32 | 0);
 __ZN7WebCore21SVGDocumentExtensions11reportErrorERKN3WTF6StringE(i7, i4);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i7 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
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
 if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 }
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
    i12 = 10;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 9;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 10) {
  return i8 | 0;
 } else if ((i12 | 0) == 9) {
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore13SVGUseElement18referencedDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore13SVGUseElement4hrefEv(i1) | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 3;
 } else {
  if (!(__ZNK3WTF10StringImpl10startsWithEt(i7, 35) | 0)) {
   i8 = 3;
  }
 }
 L3 : do {
  if ((i8 | 0) == 3) {
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i3, i6, i4);
   i7 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i3, i6 + 356 | 0) | 0;
   i9 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     if (i7) {
      break L3;
     }
    } else {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      if (i7) {
       break L3;
      } else {
       break;
      }
     } else {
      HEAP32[i10 >> 2] = i11;
      if (i7) {
       break L3;
      } else {
       break;
      }
     }
    }
   } while (0);
   i7 = HEAP32[i1 + 256 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = 0;
    STACKTOP = i2;
    return i12 | 0;
   }
   i9 = i7 + 588 | 0;
   if ((HEAP8[i9] & 32) != 0) {
    i12 = 0;
    STACKTOP = i2;
    return i12 | 0;
   }
   if ((((HEAP32[i9 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i12 = 0;
    STACKTOP = i2;
    return i12 | 0;
   }
   i12 = HEAP32[i7 + 640 >> 2] | 0;
   STACKTOP = i2;
   return i12 | 0;
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = __ZNK7WebCore10SVGElement19instancesForElementEv(i1 | 0) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i1 + (i3 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i1;
  } else {
   i2 = i1;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i2;
     break L4;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i1 = i5 + 248 | 0;
    if ((HEAP8[i1] & 1) != 0) {
     break;
    }
    HEAP8[i1] = 1;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5 | 0, 65536);
    __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i5);
   }
  } while (0);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 17;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 19;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 }
}
function __ZNK7WebCore13SVGUseElement6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2080 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2152 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 14 | 0, F_BASE_vii + 58 | 0);
  HEAP32[H_BASE + 2152 >> 2] = i5;
  HEAP8[H_BASE + 2080 | 0] = 1;
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
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 224 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGUseElement5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2088 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2160 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 42 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2160 >> 2] = i5;
  HEAP8[H_BASE + 2088 | 0] = 1;
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
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 212 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGUseElement1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2112 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2184 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 46 | 0, F_BASE_vii + 12 | 0);
  HEAP32[H_BASE + 2184 >> 2] = i5;
  HEAP8[H_BASE + 2112 | 0] = 1;
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
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 188 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGUseElement1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2104 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2176 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 6 | 0, F_BASE_vii + 40 | 0);
  HEAP32[H_BASE + 2176 >> 2] = i5;
  HEAP8[H_BASE + 2104 | 0] = 1;
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
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 200 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGUseElement4hrefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2096 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2168 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 15, 0, __ZN7WebCore10XLinkNames8hrefAttrE, (HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 90 | 0, F_BASE_vii + 96 | 0);
  HEAP32[H_BASE + 2168 >> 2] = i5;
  HEAP8[H_BASE + 2096 | 0] = 1;
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
 i6 = i1 + 236 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 248 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP8[i6] = 1;
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 65536);
  __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i1);
 }
 if ((((HEAP32[i2 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
  if ((HEAP8[i2 + 549 | 0] & 1) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore28SVGExternalResourcesRequired17dispatchLoadEventEPNS_10SVGElementE(i1 + 176 | 0, i1 | 0);
  STACKTOP = i3;
  return;
 }
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i2 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i2, i1, 0, 0);
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i5, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 + 8 | 0;
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i1 - 8 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement40associateInstancesWithShadowTreeElementsEPNS_4NodeEPNS_18SVGElementInstanceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 20 >> 2] | 0;
 i5 = i2 + 12 | 0;
 if ((HEAP32[i5 >> 2] & 32 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i2;
 }
 __ZN7WebCore18SVGElementInstance20setShadowTreeElementEPNS_10SVGElementE(i3, i6);
 __ZN7WebCore10SVGElement23setCorrespondingElementEPS0_(i6, i4);
 if ((HEAP32[i5 >> 2] & 2 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = HEAP32[i3 + 36 >> 2] | 0;
 if ((i5 | 0) == 0 | (i2 | 0) == 0) {
  return;
 } else {
  i7 = i5;
  i8 = i2;
 }
 L12 : while (1) {
  if ((i7 | 0) == 0) {
   i9 = 16;
   break;
  } else {
   i10 = i7;
  }
  while (1) {
   if ((HEAP32[i10 + 12 >> 2] & 32 | 0) != 0) {
    break;
   }
   i2 = HEAP32[i10 + 28 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i9 = 11;
    break L12;
   } else {
    i10 = i2;
   }
  }
  __ZN7WebCore13SVGUseElement40associateInstancesWithShadowTreeElementsEPNS_4NodeEPNS_18SVGElementInstanceE(i1, i10, i8);
  i2 = HEAP32[i10 + 28 >> 2] | 0;
  i5 = HEAP32[i8 + 32 >> 2] | 0;
  if ((i2 | 0) == 0 | (i5 | 0) == 0) {
   i9 = 14;
   break;
  } else {
   i7 = i2;
   i8 = i5;
  }
 }
 if ((i9 | 0) == 14) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 } else if ((i9 | 0) == 11) {
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13SVGUseElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 2 | 0, F_BASE_vii + 64 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i6;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 244 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement25lookupOrCreateHrefWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2096 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2168 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 15, 0, __ZN7WebCore10XLinkNames8hrefAttrE, (HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 90 | 0, F_BASE_vii + 96 | 0);
  HEAP32[H_BASE + 2168 >> 2] = i6;
  HEAP8[H_BASE + 2096 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 236 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2080 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2152 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 14 | 0, F_BASE_vii + 58 | 0);
  HEAP32[H_BASE + 2152 >> 2] = i6;
  HEAP8[H_BASE + 2080 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 224 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2088 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2160 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 42 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2160 >> 2] = i6;
  HEAP8[H_BASE + 2088 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 212 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement22lookupOrCreateXWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2112 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2184 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 46 | 0, F_BASE_vii + 12 | 0);
  HEAP32[H_BASE + 2184 >> 2] = i6;
  HEAP8[H_BASE + 2112 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 188 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGUseElement22lookupOrCreateYWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2104 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2176 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 6 | 0, F_BASE_vii + 40 | 0);
  HEAP32[H_BASE + 2176 >> 2] = i6;
  HEAP8[H_BASE + 2104 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 200 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) != (i1 | 0)) {
  i3 = i1;
  i1 = (i3 & 65535) - 1640531527 | 0;
  i4 = i3 >>> 16 << 11 ^ i1 ^ i1 << 16;
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  i3 = (i4 >>> 11) + i4 + (i1 & 65535) | 0;
  i4 = i3 ^ i1 >>> 16 << 11 ^ i3 << 16;
  i3 = HEAP32[i2 + 16 >> 2] | 0;
  i1 = i4 + (i3 & 65535) + (i4 >>> 11) | 0;
  i4 = i1 ^ i3 >>> 16 << 11 ^ i1 << 16;
  i1 = (i4 >>> 11) + i4 | 0;
  i4 = i1 << 3 ^ i1;
  i1 = (i4 >>> 5) + i4 | 0;
  i4 = i1 << 2 ^ i1;
  i1 = (i4 >>> 15) + i4 | 0;
  i4 = (i1 << 10 ^ i1) & 16777215;
  i5 = (i4 | 0) == 0 ? 8388608 : i4;
  return i5 | 0;
 }
 i4 = i2 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = i1;
  return i5 | 0;
 }
 i1 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i2) | 0;
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 return i5 | 0;
}
function __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __ZNK7WebCore7Element10shadowRootEv(i1 | 0) | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13ContainerNode14removeChildrenEv(i2 | 0);
 }
 i2 = i1 + 252 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore18SVGElementInstance6detachEv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 HEAP8[i1 + 248 | 0] = 0;
 __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1 | 0);
 return;
}
function __ZNK7WebCore13SVGUseElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGUseElement1xEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGUseElement1yEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGUseElement5widthEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGUseElement6heightEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 76 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore13SVGUseElement34transferEventListenersToShadowTreeEPNS_18SVGElementInstanceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = __ZN7WebCore4Node15eventTargetDataEv(HEAP32[i2 + 20 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore16EventListenerMap46copyEventListenersNotCreatedFromMarkupToTargetEPNS_11EventTargetE(i4 | 0, i3 | 0);
  }
 } while (0);
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i5 = i3;
 }
 while (1) {
  __ZN7WebCore13SVGUseElement34transferEventListenersToShadowTreeEPNS_18SVGElementInstanceE(i1, i5);
  i5 = HEAP32[i5 + 32 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeEPNS_18SVGElementInstanceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i3 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i4 | 0) == (i2 | 0)) {
  i5 = i3;
  return i5 | 0;
 }
 i4 = i3 + 36 | 0;
 while (1) {
  i3 = HEAP32[i4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 0;
   i6 = 8;
   break;
  }
  i7 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeEPNS_18SVGElementInstanceE(i1, i2, i3) | 0;
  if ((i7 | 0) == 0) {
   i4 = i3 + 32 | 0;
  } else {
   i5 = i7;
   i6 = 9;
   break;
  }
 }
 if ((i6 | 0) == 9) {
  return i5 | 0;
 } else if ((i6 | 0) == 8) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement17setCachedDocumentENS_20CachedResourceHandleINS_17CachedSVGDocumentEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 256 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  return;
 }
 if ((i5 | 0) == 0) {
  i7 = i2;
 } else {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i5, i1 + 184 | 0);
  i7 = HEAP32[i6 >> 2] | 0;
 }
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i3 | 0, i7);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i7, i1 + 184 | 0);
 return;
}
function __ZN7WebCore13SVGUseElement21instanceTreeIsLoadingEPNS_18SVGElementInstanceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i1 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i1;
 }
 L3 : while (1) {
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i2 = HEAP32[i1 + 256 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    if ((HEAP8[i2 + 588 | 0] & 32) != 0) {
     i3 = 1;
     i5 = 7;
     break L3;
    }
   }
  } while (0);
  i1 = HEAP32[i4 + 32 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i5 = 8;
   break;
  } else {
   i4 = i1;
  }
 }
 if ((i5 | 0) == 7) {
  return i3 | 0;
 } else if ((i5 | 0) == 8) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement37externalResourcesRequiredPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2128 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 2 | 0, F_BASE_vii + 64 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i2;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZNK7WebCore13SVGUseElement38transferUseAttributesToReplacedElementEPNS_10SVGElementES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i3 | 0;
 __ZN7WebCore7Element20cloneDataFromElementERKS0_(i1, i2 | 0);
 __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore8SVGNames5xAttrE);
 __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore8SVGNames5yAttrE);
 __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore8SVGNames9widthAttrE);
 __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore8SVGNames10heightAttrE);
 __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore10XLinkNames8hrefAttrE);
 return;
}
function __ZN7WebCore13SVGUseElement18heightPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2080 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2152 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 14 | 0, F_BASE_vii + 58 | 0);
  HEAP32[H_BASE + 2152 >> 2] = i2;
  HEAP8[H_BASE + 2080 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement16hrefPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2096 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2168 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 15, 0, __ZN7WebCore10XLinkNames8hrefAttrE, (HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 90 | 0, F_BASE_vii + 96 | 0);
  HEAP32[H_BASE + 2168 >> 2] = i2;
  HEAP8[H_BASE + 2096 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement17widthPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2088 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2160 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 42 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2160 >> 2] = i2;
  HEAP8[H_BASE + 2088 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZThn180_N7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 - 320 + 140 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i2 = i1 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i4 + 236 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i4 + 240 | 0;
 HEAP8[i5] = HEAP8[i5] & -3 | (i3 & 1) << 1;
 return;
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
function __ZN7WebCore13SVGUseElement13xPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2112 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2184 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 46 | 0, F_BASE_vii + 12 | 0);
  HEAP32[H_BASE + 2184 >> 2] = i2;
  HEAP8[H_BASE + 2112 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement13yPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2104 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2176 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 6 | 0, F_BASE_vii + 40 | 0);
  HEAP32[H_BASE + 2176 >> 2] = i2;
  HEAP8[H_BASE + 2104 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 236 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i1 + 240 | 0;
 HEAP8[i5] = HEAP8[i5] & -3 | (i3 & 1) << 1;
 return;
}
function __ZNK7WebCore13SVGUseElement17rendererClipChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 32 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(__ZN7WebCoreL17isDirectReferenceEPKNS_4NodeE(i1 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 32 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore13SVGUseElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(160) | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore31RenderSVGTransformableContainerC1ERNS_18SVGGraphicsElementEN3WTF7PassRefINS_11RenderStyleEEE(i6, i2 | 0, i5);
 HEAP32[i1 >> 2] = i6;
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
function __ZN7WebCore13SVGUseElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i3, i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  return 0;
 }
 if ((HEAP8[i1 + 246 | 0] & 1) == 0) {
  __ZN7WebCore13SVGUseElement20buildPendingResourceEv(i1);
 }
 __ZN7WebCore28SVGExternalResourcesRequired20insertedIntoDocumentEPNS_10SVGElementE(i1 + 176 | 0, i3);
 return 0;
}
function __ZN7WebCore5TimerINS_10SVGElementEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
  return;
 }
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
function __ZNK7WebCore13SVGUseElement16externalDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 256 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 588 | 0;
 if ((HEAP8[i1] & 32) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((((HEAP32[i1 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 640 >> 2] | 0;
 return i3 | 0;
}
function viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore13SVGUseElement6createERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = __ZN3WTF10fastMallocEj(320) | 0;
 i6 = i5;
 __ZN7WebCore13SVGUseElementC1ERKNS_13QualifiedNameERNS_8DocumentEb(i6, i2, i3, i4);
 __ZN7WebCore7Element25ensureUserAgentShadowRootEv(i5) | 0;
 HEAP32[i1 >> 2] = i6;
 return;
}
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore13SVGUseElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 2064 | 0] | 0) {
  i2 = HEAP32[H_BASE + 2136 >> 2] | 0;
  return i2 | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2136 >> 2] = i3;
  HEAP8[H_BASE + 2064 | 0] = 1;
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
 __ZN7WebCore28SVGExternalResourcesRequired21finishParsingChildrenEv(i1 + 176 | 0);
 i2 = i1 + 246 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 __ZN7WebCore13SVGUseElement20buildPendingResourceEv(i1);
 HEAP8[i2] = 0;
 return;
}
function __ZN7WebCore13SVGUseElement22attributeToPropertyMapEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 2064 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2136 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2136 >> 2] = i3;
  HEAP8[H_BASE + 2064 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGUseElement12instanceRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 252 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i4 = HEAP32[i2 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeEPNS_18SVGElementInstanceE(i1, i2, i3) | 0;
 return i4 | 0;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore13SVGUseElement20invalidateShadowTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 248 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
 __ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv(i1);
 return;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore13SVGUseElement28cachedDocumentIsStillLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 256 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 588 | 0] & 32) == 0) {
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
function __ZN7WebCore13SVGUseElement11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2);
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  return;
 }
 __ZN7WebCore13SVGUseElement23clearResourceReferencesEv(i1);
 return;
}
function viii___ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn176_N7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 320 + 388 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function viii___ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i2 - 176 + 176 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 127](i1, i3);
 return;
}
function __ZN7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 244 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function viii___ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i2 + 92 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 127](i1, i3);
 return;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[HEAP32[i1 + 24 >> 2] | 0] = HEAP8[i2] & 1;
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i1 | 0);
 return;
}
function __ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 127](i1, i2);
 return;
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZTv0_n12_N7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + (HEAP32[(HEAP32[i1 >> 2] | 0) - 12 >> 2] | 0) | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i2, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
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
function __ZThn184_N7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE(i1 - 320 + 136 | 0, i2);
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
function iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
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
function iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function vii___ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement22svgLoadEventTimerFiredEPNS_5TimerIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement22svgLoadEventTimerFiredEPNS_5TimerIS0_EE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
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
function ii___ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv(i1 | 0) | 0;
}
function __ZThn184_N7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 320 + 136 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i2, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn180_N7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 320 + 140 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i2, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn176_N7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 320 + 144 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i2, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn92_N7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 320 + 228 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i2, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore13SVGUseElement19willAttachRenderersEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 248 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore13SVGUseElement20buildPendingResourceEv(i1);
 return;
}
function vii___ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv(i1 | 0, i2 | 0);
}
function ii___ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv(i1 | 0) | 0;
}
function __ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests29synchronizeRequiredExtensionsEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEv(i1);
 return;
}
function __ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests27synchronizeRequiredFeaturesEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function vii___ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE(i1 | 0, i2 | 0);
}
function __ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests25synchronizeSystemLanguageEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function __ZN7WebCore13SVGUseElement27haveLoadedRequiredResourcesEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore28SVGExternalResourcesRequired27haveLoadedRequiredResourcesEv(i1 + 176 | 0) | 0;
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
function __ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1);
 return;
}
function __ZTv0_n12_N7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1 + (HEAP32[(HEAP32[i1 >> 2] | 0) - 12 >> 2] | 0) | 0, H_BASE + 1160 | 0);
 return;
}
function ii___ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv(i1 | 0) | 0;
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement22customStyleForRendererEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZN7WebCore18SVGGraphicsElement21supplementalTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore18SVGGraphicsElement21supplementalTransformEv(i1 | 0) | 0;
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
function ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1 | 0) | 0;
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
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore18SVGGraphicsElement22attributeToPropertyMapEv() | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
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
function __ZN7WebCore13SVGUseElement17synchronizeHeightEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement17synchronizeHeightEv(i1);
 return;
}
function __ZN7WebCore13SVGUseElement16synchronizeWidthEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement16synchronizeWidthEv(i1);
 return;
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGUseElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1, H_BASE + 1160 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13SVGUseElement15synchronizeHrefEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement15synchronizeHrefEv(i1);
 return;
}
function __ZThn176_N7WebCore13SVGUseElement21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 320 + 391 | 0] = i2 & 1;
 return;
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
function vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function __ZThn184_N7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1 - 320 + 136 | 0, H_BASE + 1160 | 0);
 return;
}
function __ZThn180_N7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1 - 320 + 140 | 0, H_BASE + 1160 | 0);
 return;
}
function __ZThn176_N7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1 - 320 + 144 | 0, H_BASE + 1160 | 0);
 return;
}
function __ZThn92_N7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1 - 320 + 228 | 0, H_BASE + 1160 | 0);
 return;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function __ZN7WebCore13SVGUseElement12synchronizeYEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement12synchronizeYEv(i1);
 return;
}
function __ZN7WebCore13SVGUseElement12synchronizeXEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElement12synchronizeXEv(i1);
 return;
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
function vii___ZNK7WebCore10SVGElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10SVGElement5titleEv(i1 | 0, i2 | 0);
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
function __ZN7WebCore5TimerINS_10SVGElementEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
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
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore13SVGUseElement21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 247 | 0] = i2 & 1;
 return;
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
function vi___ZThn92_N7WebCore18SVGGraphicsElementD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn92_N7WebCore18SVGGraphicsElementD1Ev(i1 | 0);
}
function vi___ZThn92_N7WebCore18SVGGraphicsElementD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn92_N7WebCore18SVGGraphicsElementD0Ev(i1 | 0);
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function __ZThn176_NK7WebCore13SVGUseElement18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 320 + 391 | 0] & 1) != 0 | 0;
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
function __ZThn176_NK7WebCore13SVGUseElement16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 320 + 390 | 0] & 1) != 0 | 0;
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
function __ZThn176_NK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 - 320 + 388 | 0;
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
function __ZNK7WebCore13SVGUseElement7isValidEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8SVGTests7isValidEv(i1 + 96 | 0) | 0;
}
function __ZN7WebCore13SVGUseElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGUseElementD2Ev(i1, H_BASE + 1160 | 0);
 return;
}
function vi___ZN7WebCore18SVGGraphicsElementD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18SVGGraphicsElementD1Ev(i1 | 0);
}
function vi___ZN7WebCore18SVGGraphicsElementD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18SVGGraphicsElementD0Ev(i1 | 0);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZNK7WebCore13SVGUseElement18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 247 | 0] & 1) != 0 | 0;
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
function __ZNK7WebCore13SVGUseElement16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 246 | 0] & 1) != 0 | 0;
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
function vi___ZN7WebCore16SVGTransformableD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SVGTransformableD1Ev(i1 | 0);
}
function vi___ZN7WebCore16SVGTransformableD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SVGTransformableD0Ev(i1 | 0);
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
function __ZNK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 + 244 | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
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
function __ZN7WebCore5TimerINS_10SVGElementEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
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
function __ZNK7WebCore23CachedSVGDocumentClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 4;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13SVGUseElement17svgLoadEventTimerEv(i1) {
 i1 = i1 | 0;
 return i1 + 264 | 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13SVGUseElement20animatedInstanceRootEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
function __ZNK7WebCore13SVGUseElement13supportsFocusEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZN7WebCore12SVGLocatableD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
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
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function __ZN7WebCore12SVGLocatableD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE,b2,__ZThn176_N7WebCore13SVGUseElementD1Ev,b2,__ZN7WebCore13SVGUseElement12synchronizeYEPNS_10SVGElementE,b2,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b2,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZN7WebCore13SVGUseElement17synchronizeHeightEPNS_10SVGElementE,b2,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b2,__ZN7WebCore5TimerINS_10SVGElementEE5firedEv,b2,vi___ZThn92_N7WebCore18SVGGraphicsElementD1Ev__wrapper,b2,__ZN7WebCore5TimerINS_10SVGElementEED1Ev,b2,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev,b2,__ZThn92_N7WebCore13SVGUseElementD0Ev,b2,vi___ZN7WebCore18SVGGraphicsElementD1Ev__wrapper
  ,b2,__ZN7WebCore7Element20buildPendingResourceEv,b2,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev,b2,__ZThn184_N7WebCore13SVGUseElementD0Ev,b2,__ZThn92_N7WebCore13SVGUseElementD1Ev,b2,__ZN7WebCore13SVGUseElementD0Ev,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,__ZN7WebCore13SVGUseElement16synchronizeWidthEPNS_10SVGElementE,b2,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b2,__ZN7WebCore13SVGUseElement12synchronizeXEPNS_10SVGElementE,b2,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b2,vi___ZThn92_N7WebCore18SVGGraphicsElementD0Ev__wrapper,b2,__ZN7WebCore12SVGLocatableD1Ev,b2,__ZN7WebCore5TimerINS_10SVGElementEED0Ev,b2,__ZN7WebCore13SVGUseElement21finishParsingChildrenEv,b2,__ZThn184_N7WebCore13SVGUseElementD1Ev
  ,b2,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b2,vi___ZN7WebCore16SVGTransformableD1Ev__wrapper,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b2,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev,b2,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b2,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b2,__ZThn180_N7WebCore13SVGUseElementD1Ev,b2,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b2,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b2,vi___ZN7WebCore16SVGTransformableD0Ev__wrapper,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,__ZN7WebCore12SVGLocatableD0Ev,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZN7WebCore13SVGUseElement20buildPendingResourceEv
  ,b2,__ZN7WebCore13SVGUseElement15synchronizeHrefEPNS_10SVGElementE,b2,__ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv,b2,__ZN7WebCore13SVGUseElementD1Ev,b2,vi___ZN7WebCore7Element4blurEv__wrapper,b2,__ZThn176_N7WebCore13SVGUseElementD0Ev,b2,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b2,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED1Ev,b2,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b2,vi___ZN7WebCore18SVGGraphicsElementD0Ev__wrapper,b2,__ZN7WebCore7Element22visibilityStateChangedEv,b2,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev,b2,__ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv,b2,__ZThn180_N7WebCore13SVGUseElementD0Ev,b2,__ZN7WebCore13SVGUseElement19willAttachRenderersEv,b2,__ZN7WebCore7Element26didBecomeFullscreenElementEv
  ,b2,__ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZNK7WebCore7Element6targetEv,b3,vii___ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper,b3,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b3,__ZN7WebCore13SVGUseElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE,b3,__ZN7WebCore13SVGUseElement22lookupOrCreateXWrapperEPNS_10SVGElementE,b3,vii___ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper,b3,__ZN7WebCore13SVGUseElement21setHaveFiredLoadEventEb,b3,__ZN7WebCore13SVGUseElement11removedFromERNS_13ContainerNodeE,b3,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b3,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper
  ,b3,__ZN7WebCore13SVGUseElement10toClipPathERNS_4PathE,b3,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b3,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZN7WebCore13SVGUseElement22lookupOrCreateYWrapperEPNS_10SVGElementE,b3,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b3,__ZN7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper,b3,vii___ZN7WebCore10SVGElement22svgLoadEventTimerFiredEPNS_5TimerIS0_EE__wrapper,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,__ZThn176_N7WebCore13SVGUseElement21setHaveFiredLoadEventEb,b3,__ZN7WebCore13SVGUseElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE
  ,b3,vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b3,vii___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b3,__ZN7WebCore13SVGUseElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE,b3,__ZThn184_N7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b3,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b3,vii___ZN7WebCore7Element8setFocusEb__wrapper,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b3,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b3,__ZN7WebCore13SVGUseElement19svgAttributeChangedERKNS_13QualifiedNameE,b3,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper
  ,b3,vii___ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE__wrapper,b3,vii___ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,__ZN7WebCore13SVGUseElement25lookupOrCreateHrefWrapperEPNS_10SVGElementE,b3,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b4,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b4,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b4,__ZNK7WebCore10SVGElement14isFilterEffectEv,b4,__ZThn176_NK7WebCore13SVGUseElement16isParserInsertedEv,b4,ii___ZN7WebCore7Element7onerrorEv__wrapper,b4,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b4,__ZNK7WebCore4Node14customPseudoIdEv,b4,__ZNK7WebCore4Node21isMediaControlElementEv,b4,__ZNK7WebCore4Node19isFrameOwnerElementEv,b4,__ZNK7WebCore4Node16nonRendererStyleEv,b4,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b4,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b4,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper
  ,b4,__ZNK7WebCore7Element21isRequiredFormControlEv,b4,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b4,__ZNK7WebCore7Element17isTextFormControlEv,b4,__ZNK7WebCore13SVGUseElement13supportsFocusEv,b4,ii___ZN7WebCore18SVGGraphicsElement21supplementalTransformEv__wrapper,b4,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b4,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b4,__ZNK7WebCore4Node15isPluginElementEv,b4,__ZNK7WebCore4Node20isInsertionPointNodeEv,b4,__ZNK7WebCore7Element21isDisabledFormControlEv,b4,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b4,__ZN7WebCore13SVGUseElement27localAttributeToPropertyMapEv,b4,__ZNK7WebCore7Element12namespaceURIEv,b4,__ZNK7WebCore13SVGUseElement18haveFiredLoadEventEv,b4,__ZNK7WebCore4Node22scriptExecutionContextEv
  ,b4,__ZNK7WebCore7Element12isOutOfRangeEv,b4,ii___ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper,b4,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b4,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b4,__ZNK7WebCore7Element23canContainRangeEndPointEv,b4,__ZNK7WebCore7Element6prefixEv,b4,ii___ZN7WebCore7Element6onloadEv__wrapper,b4,__ZNK7WebCore7Element9isInRangeEv,b4,__ZNK7WebCore7Element20isFormControlElementEv,b4,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b4,__ZNK7WebCore7Element18isFrameElementBaseEv,b4,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b4,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b4,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper
  ,b4,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b4,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b4,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b4,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b4,__ZNK7WebCore10SVGElement14isGradientStopEv,b4,__ZThn176_NK7WebCore13SVGUseElement18haveFiredLoadEventEv,b4,__ZNK7WebCore23CachedSVGDocumentClient18resourceClientTypeEv,b4,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b4,__ZNK7WebCore10SVGElement15supportsMarkersEv,b4,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b4,__ZNK7WebCore13SVGUseElement22selfHasRelativeLengthsEv,b4,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b4,__ZN7WebCore13SVGUseElement17svgLoadEventTimerEv,b4,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b4,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper
  ,b4,ii___ZN7WebCore7Element7onfocusEv__wrapper,b4,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b4,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b4,__ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv,b4,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b4,__ZNK7WebCore10SVGElement13isTextContentEv,b4,__ZThn176_NK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv,b4,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b4,__ZN7WebCore4Node11sheetLoadedEv,b4,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b4,__ZN7WebCore7Element25isValidFormControlElementEv,b4,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b4,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b4,__ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv,b4,__ZNK7WebCore10SVGElement13isSMILElementEv
  ,b4,ii___ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper,b4,__ZNK7WebCore7Element19isSpinButtonElementEv,b4,__ZN7WebCore13SVGUseElement27haveLoadedRequiredResourcesEv,b4,ii___ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper,b4,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b4,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b4,__ZNK7WebCore7Element21isOptionalFormControlEv,b4,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b4,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b4,__ZNK7WebCore13SVGUseElement16isParserInsertedEv,b4,__ZNK7WebCore4Node19isCharacterDataNodeEv,b4,__ZNK7WebCore7Element9localNameEv,b4,__ZNK7WebCore7Element12willValidateEv,b4,ii___ZN7WebCore4Node6toNodeEv__wrapper,b4,ii___ZN7WebCore7Element10scrollLeftEv__wrapper
  ,b4,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b4,ii___ZN7WebCore7Element6onblurEv__wrapper,b4,ii___ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper,b4,__ZNK7WebCore10SVGElement7isValidEv,b4,__ZNK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv,b4,__ZNK7WebCore4Node15isMediaControlsEv,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZNK7WebCore13SVGUseElement7isValidEv,b4,__ZNK7WebCore4Node15isAttributeNodeEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore13SVGUseElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b6,viii___ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b6,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi,b6,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b6,viii___ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b6,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b6,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b6,__ZThn176_N7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb,b6,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEE10setBaseValERKS2_Ri,b6,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b6,viii___ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,viii___ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b6,__ZN7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb
  ,b6,viii___ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,__ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b6,__ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE,b6,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b6,viii___ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,__ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b6,viii___ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,__ZThn180_N7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb,b6,viii___ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b6,__ZN7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb,b6,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b6,__ZN7WebCore13SVGUseElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZN7WebCore13SVGUseElement12insertedIntoERNS_13ContainerNodeE,b8,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b8,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b8,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b8,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b8,iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b8,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b8,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b8,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b8,iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper,b8,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b9,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames10polygonTagE": __ZN7WebCore8SVGNames10polygonTagE, "__ZN7WebCore8SVGNames9switchTagE": __ZN7WebCore8SVGNames9switchTagE, "__ZN7WebCore8SVGNames9circleTagE": __ZN7WebCore8SVGNames9circleTagE, "__ZN7WebCore8SVGNames4gTagE": __ZN7WebCore8SVGNames4gTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames7descTagE": __ZN7WebCore8SVGNames7descTagE, "__ZN7WebCore8SVGNames10heightAttrE": __ZN7WebCore8SVGNames10heightAttrE, "__ZN7WebCore8SVGNames4aTagE": __ZN7WebCore8SVGNames4aTagE, "__ZN7WebCore8SVGNames7pathTagE": __ZN7WebCore8SVGNames7pathTagE, "__ZN7WebCore8SVGNames8titleTagE": __ZN7WebCore8SVGNames8titleTagE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN7WebCore8SVGNames7trefTagE": __ZN7WebCore8SVGNames7trefTagE, "__ZN7WebCore8SVGNames5yAttrE": __ZN7WebCore8SVGNames5yAttrE, "__ZN7WebCore8SVGNames5xAttrE": __ZN7WebCore8SVGNames5xAttrE, "__ZN7WebCore8SVGNames7rectTagE": __ZN7WebCore8SVGNames7rectTagE, "__ZN7WebCore8SVGNames11textPathTagE": __ZN7WebCore8SVGNames11textPathTagE, "__ZN7WebCore8SVGNames7lineTagE": __ZN7WebCore8SVGNames7lineTagE, "__ZN7WebCore8SVGNames7textTagE": __ZN7WebCore8SVGNames7textTagE, "__ZN7WebCore8SVGNames8tspanTagE": __ZN7WebCore8SVGNames8tspanTagE, "__ZN7WebCore8SVGNames9symbolTagE": __ZN7WebCore8SVGNames9symbolTagE, "__ZN7WebCore8SVGNames10ellipseTagE": __ZN7WebCore8SVGNames10ellipseTagE, "__ZN7WebCore8SVGNames8imageTagE": __ZN7WebCore8SVGNames8imageTagE, "__ZN7WebCore8SVGNames11polylineTagE": __ZN7WebCore8SVGNames11polylineTagE, "__ZN7WebCore8SVGNames6useTagE": __ZN7WebCore8SVGNames6useTagE, "__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE": __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, "__ZN7WebCore8SVGNames11metadataTagE": __ZN7WebCore8SVGNames11metadataTagE, "__ZN7WebCore10XLinkNames8hrefAttrE": __ZN7WebCore10XLinkNames8hrefAttrE, "__ZN7WebCore8SVGNames9widthAttrE": __ZN7WebCore8SVGNames9widthAttrE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE","_strlen","__ZThn176_N7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb","__ZThn176_N7WebCore13SVGUseElementD1Ev","__ZN7WebCore13SVGUseElement12synchronizeYEPNS_10SVGElementE","__ZN7WebCore13SVGUseElement22hasCycleUseReferencingEPS0_PNS_18SVGElementInstanceERPNS_10SVGElementE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZN7WebCore13SVGUseElement6createERKNS_13QualifiedNameERNS_8DocumentEb","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev","__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZNK7WebCore13SVGUseElement1xEv","__ZN7WebCore13SVGUseElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZThn176_NK7WebCore13SVGUseElement16isParserInsertedEv","__ZNK7WebCore7Element6targetEv","__ZN7WebCore13SVGUseElement12synchronizeYEv","__ZNK7WebCore13SVGUseElement18haveFiredLoadEventEv","__ZN7WebCoreL19isDisallowedElementERKNS_7ElementE","__ZN7WebCore13SVGUseElement17synchronizeHeightEPNS_10SVGElementE","__ZNK7WebCore13SVGUseElement6heightEv","_memcpy","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore13SVGUseElement32expandSymbolElementsInShadowTreeEPNS_4NodeE","__ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv","__ZN7WebCore13SVGUseElement15buildShadowTreeEPNS_10SVGElementEPNS_18SVGElementInstanceE","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi","__ZTv0_n12_N7WebCore13SVGUseElementD0Ev","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN7WebCore13SVGUseElement30invalidateDependentShadowTreesEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore13SVGUseElement12insertedIntoERNS_13ContainerNodeE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore13SVGUseElement15synchronizeHrefEPNS_10SVGElementE","__ZN7WebCore5TimerINS_10SVGElementEED1Ev","__ZN7WebCore13SVGUseElementC1ERKNS_13QualifiedNameERNS_8DocumentEb","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev","__ZNK7WebCore7Element17isTextFormControlEv","__ZThn92_N7WebCore13SVGUseElementD0Ev","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore13SVGUseElement13supportsFocusEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore13SVGUseElement17setCachedDocumentENS_20CachedResourceHandleINS_17CachedSVGDocumentEEE","__ZThn180_N7WebCore13SVGUseElementD1Ev","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEE10setBaseValERKS2_Ri","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZN7WebCore13SVGUseElement27localAttributeToPropertyMapEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore13SVGUseElement10toClipPathERNS_4PathE","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev","__ZThn184_N7WebCore13SVGUseElementD0Ev","__ZN7WebCore13SVGUseElement37externalResourcesRequiredPropertyInfoEv","__ZN7WebCoreL17isDirectReferenceEPKNS_4NodeE","__ZThn92_N7WebCore13SVGUseElementD1Ev","__ZN7WebCore13SVGUseElementD0Ev","__ZN7WebCore13SVGUseElement36synchronizeExternalResourcesRequiredEv","__ZN7WebCore13SVGUseElement22attributeToPropertyMapEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore13SVGUseElement40associateInstancesWithShadowTreeElementsEPNS_4NodeEPNS_18SVGElementInstanceE","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore13SVGUseElement16synchronizeWidthEPNS_10SVGElementE","__ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE","__ZN7WebCore13SVGUseElement16hrefPropertyInfoEv","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore13SVGUseElement17rendererClipChildEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore13SVGUseElement13yPropertyInfoEv","__ZN7WebCore13SVGUseElement12instanceRootEv","__ZN7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore13SVGUseElement12synchronizeXEPNS_10SVGElementE","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE","__ZN7WebCore13SVGUseElement21instanceTreeIsLoadingEPNS_18SVGElementInstanceE","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore13SVGUseElement17synchronizeHeightEv","__ZNK7WebCore13SVGUseElement16isParserInsertedEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore13SVGUseElement23clearResourceReferencesEv","__ZN7WebCore13SVGUseElement29expandUseElementsInShadowTreeEPNS_4NodeE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore13SVGUseElement16synchronizeWidthEv","__ZNK7WebCore13SVGUseElement4hrefEv","__ZThn176_N7WebCore13SVGUseElement21setHaveFiredLoadEventEb","__ZN7WebCore12SVGLocatableD1Ev","__ZNK7WebCore13SVGUseElement20animatedInstanceRootEv","__ZN7WebCore13SVGUseElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE","__ZN7WebCore13SVGUseElement20isSupportedAttributeERKNS_13QualifiedNameE","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZN7WebCore13SVGUseElement21finishParsingChildrenEv","__ZThn184_N7WebCore13SVGUseElementD1Ev","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZNK7WebCore23CachedSVGDocumentClient18resourceClientTypeEv","__ZN7WebCore13SVGUseElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE","__ZThn184_N7WebCore13SVGUseElement14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGUseElement19svgAttributeChangedERKNS_13QualifiedNameE","__ZNK7WebCore13SVGUseElement22selfHasRelativeLengthsEv","__ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE","__ZN7WebCore13SVGUseElementD1Ev","__ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeEPNS_18SVGElementInstanceE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEEES5_EENS4_10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore13SVGUseElement17svgLoadEventTimerEv","__ZN7WebCore13SVGUseElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED1Ev","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN7WebCore13SVGUseElement15synchronizeHrefEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZN7WebCore13SVGUseElement27haveLoadedRequiredResourcesEv","__ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGUseElement22lookupOrCreateXWrapperEPNS_10SVGElementE","__ZThn180_N7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb","__ZN7WebCore5TimerINS_10SVGElementEE5firedEv","__ZN7WebCore13SVGUseElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore10SVGElement13isTextContentEv","__ZNK7WebCore10SVGElement7isValidEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore13SVGUseElement34transferEventListenersToShadowTreeEPNS_18SVGElementInstanceE","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIN3WTF6StringEED0Ev","__ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv","__ZNK7WebCore13SVGUseElement1yEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","__ZN7WebCore13SVGUseElementD2Ev","__ZN7WebCore13SVGUseElement17buildInstanceTreeEPNS_10SVGElementEPNS_18SVGElementInstanceERbb","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGUseElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore12SVGLocatableD0Ev","__ZNK7WebCore13SVGUseElement18referencedDocumentEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN7WebCore13SVGUseElement20buildPendingResourceEv","__ZN7WebCore13SVGUseElement37setExternalResourcesRequiredBaseValueERKbb","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore13SVGUseElement38transferUseAttributesToReplacedElementEPNS_10SVGElementES2_","__ZNK7WebCore13SVGUseElement16externalDocumentEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZNK7WebCore13SVGUseElement5widthEv","__ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv","__ZN7WebCore13SVGUseElement16setHrefBaseValueERKN3WTF6StringEb","__ZN7WebCore13SVGUseElement25lookupOrCreateHrefWrapperEPNS_10SVGElementE","__ZThn176_NK7WebCore13SVGUseElement18haveFiredLoadEventEv","__ZN7WebCore13SVGUseElement19willAttachRenderersEv","__ZN7WebCore13SVGUseElement26buildShadowAndInstanceTreeEPNS_10SVGElementE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore13SVGUseElement13xPropertyInfoEv","__ZN7WebCore13SVGUseElement12synchronizeXEv","__ZThn176_N7WebCore13SVGUseElementD0Ev","__ZN7WebCore13SVGUseElement28cachedDocumentIsStillLoadingEv","__ZN7WebCore13SVGUseElement17widthPropertyInfoEv","__ZN7WebCoreL35removeDisallowedElementsFromSubtreeERNS_10SVGElementE","_memset","__ZN7WebCore13SVGUseElement22lookupOrCreateYWrapperEPNS_10SVGElementE","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore13SVGUseElement21setHaveFiredLoadEventEb","__ZN7WebCore13SVGUseElement20invalidateShadowTreeEv","__ZN7WebCore5TimerINS_10SVGElementEED0Ev","__ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE","__ZN7WebCore13SVGUseElement11removedFromERNS_13ContainerNodeE","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev","__ZN7WebCore13SVGUseElement18heightPropertyInfoEv","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv","__ZThn176_NK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv","__ZNK7WebCore13SVGUseElement34externalResourcesRequiredBaseValueEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZThn180_N7WebCore13SVGUseElementD0Ev","__ZTv0_n12_N7WebCore13SVGUseElementD1Ev","__ZNK7WebCore13SVGUseElement7isValidEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv"]

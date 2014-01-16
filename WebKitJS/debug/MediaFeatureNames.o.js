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
H_BASE = parentModule["_malloc"](1168 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1168;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([100,101,118,105,99,101,45,97,115,112,101,99,116,45,114,97,116,105,111,0,0,0,0,0,97,115,112,101,99,116,45,114,97,116,105,111,0,0,0,0,111,114,105,101,110,116,97,116,105,111,110,0,0,0,0,0,119,105,100,116,104,0,0,0,104,111,118,101,114,0,0,0,45,119,101,98,107,105,116,45,118,105,101,119,45,109,111,100,101,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,118,105,100,101,111,45,112,108,97,121,97,98,108,101,45,105,110,108,105,110,101,0,0,0,45,119,101,98,107,105,116,45,97,110,105,109,97,116,105,111,110,0,0,0,0,0,0,0,104,101,105,103,104,116,0,0,45,119,101,98,107,105,116,45,116,114,97,110,115,105,116,105,111,110,0,0,0,0,0,0,45,119,101,98,107,105,116,45,116,114,97,110,115,102,111,114,109,45,51,100,0,0,0,0,45,119,101,98,107,105,116,45,116,114,97,110,115,102,111,114,109,45,50,100,0,0,0,0,114,101,115,111,108,117,116,105,111,110,0,0,0,0,0,0,112,111,105,110,116,101,114,0,109,105,110,45,114,101,115,111,108,117,116,105,111,110,0,0,109,105,110,45,119,105,100,116,104,0,0,0,0,0,0,0,109,105,110,45,109,111,110,111,99,104,114,111,109,101,0,0,109,105,110,45,104,101,105,103,104,116,0,0,0,0,0,0,109,105,110,45,100,101,118,105,99,101,45,119,105,100,116,104,0,0,0,0,0,0,0,0,109,111,110,111,99,104,114,111,109,101,0,0,0,0,0,0,109,105,110,45,100,101,118,105,99,101,45,104,101,105,103,104,116,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,109,105,110,45,100,101,118,105,99,101,45,112,105,120,101,108,45,114,97,116,105,111,0,0,109,105,110,45,100,101,118,105,99,101,45,97,115,112,101,99,116,45,114,97,116,105,111,0,109,105,110,45,97,115,112,101,99,116,45,114,97,116,105,111,0,0,0,0,0,0,0,0,109,105,110,45,99,111,108,111,114,45,105,110,100,101,120,0,109,105,110,45,99,111,108,111,114,0,0,0,0,0,0,0,109,97,120,45,114,101,115,111,108,117,116,105,111,110,0,0,109,97,120,45,119,105,100,116,104,0,0,0,0,0,0,0,109,97,120,45,109,111,110,111,99,104,114,111,109,101,0,0,109,97,120,45,104,101,105,103,104,116,0,0,0,0,0,0,103,114,105,100,0,0,0,0,109,97,120,45,100,101,118,105,99,101,45,119,105,100,116,104,0,0,0,0,0,0,0,0,109,97,120,45,100,101,118,105,99,101,45,104,101,105,103,104,116,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,109,97,120,45,100,101,118,105,99,101,45,112,105,120,101,108,45,114,97,116,105,111,0,0,109,97,120,45,100,101,118,105,99,101,45,97,115,112,101,99,116,45,114,97,116,105,111,0,109,97,120,45,97,115,112,101,99,116,45,114,97,116,105,111,0,0,0,0,0,0,0,0,109,97,120,45,99,111,108,111,114,45,105,110,100,101,120,0,109,97,120,45,99,111,108,111,114,0,0,0,0,0,0,0,100,101,118,105,99,101,45,119,105,100,116,104,0,0,0,0,100,101,118,105,99,101,45,104,101,105,103,104,116,0,0,0,45,119,101,98,107,105,116,45,100,101,118,105,99,101,45,112,105,120,101,108,45,114,97,116,105,111,0,0,0,0,0,0,99,111,108,111,114,45,105,110,100,101,120,0,0,0,0,0,99,111,108,111,114,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore17MediaFeatureNames28max_aspect_ratioMediaFeatureE=(H_BASE+928)|0;
  var __ZN7WebCore17MediaFeatureNames26max_monochromeMediaFeatureE=(H_BASE+976)|0;
  var __ZN7WebCore17MediaFeatureNames28min_device_widthMediaFeatureE=(H_BASE+904)|0;
  var __ZN7WebCore17MediaFeatureNames21view_modeMediaFeatureE=(H_BASE+1080)|0;
  var __ZN7WebCore17MediaFeatureNames23orientationMediaFeatureE=(H_BASE+1024)|0;
  var __ZN7WebCore17MediaFeatureNames29min_device_heightMediaFeatureE=(H_BASE+888)|0;
  var __ZN7WebCore17MediaFeatureNames28max_device_widthMediaFeatureE=(H_BASE+920)|0;
  var __ZN7WebCore17MediaFeatureNames28min_aspect_ratioMediaFeatureE=(H_BASE+912)|0;
  var __ZN7WebCore17MediaFeatureNames19pointerMediaFeatureE=(H_BASE+1128)|0;
  var __ZN7WebCore17MediaFeatureNames22transitionMediaFeatureE=(H_BASE+1040)|0;
  var __ZN7WebCore17MediaFeatureNames26min_monochromeMediaFeatureE=(H_BASE+960)|0;
  var __ZN7WebCore17MediaFeatureNames21max_colorMediaFeatureE=(H_BASE+1112)|0;
  var __ZN7WebCore17MediaFeatureNames34max_device_pixel_ratioMediaFeatureE=(H_BASE+856)|0;
  var __ZN7WebCore17MediaFeatureNames21max_widthMediaFeatureE=(H_BASE+1104)|0;
  var __ZN7WebCore17MediaFeatureNames25device_heightMediaFeatureE=(H_BASE+984)|0;
  var __ZN7WebCore17MediaFeatureNames21min_colorMediaFeatureE=(H_BASE+1096)|0;
  var __ZN7WebCore17MediaFeatureNames17widthMediaFeatureE=(H_BASE+1144)|0;
  var __ZN7WebCore17MediaFeatureNames31device_aspect_ratioMediaFeatureE=(H_BASE+872)|0;
  var __ZN7WebCore17MediaFeatureNames24transform_2dMediaFeatureE=(H_BASE+1000)|0;
  var __ZN7WebCore17MediaFeatureNames22max_heightMediaFeatureE=(H_BASE+1072)|0;
  var __ZN7WebCore17MediaFeatureNames24transform_3dMediaFeatureE=(H_BASE+992)|0;
  var __ZN7WebCore17MediaFeatureNames27min_color_indexMediaFeatureE=(H_BASE+936)|0;
  var __ZN7WebCore17MediaFeatureNames35min_device_aspect_ratioMediaFeatureE=(H_BASE+832)|0;
  var __ZN7WebCore17MediaFeatureNames26max_resolutionMediaFeatureE=(H_BASE+968)|0;
  var __ZN7WebCore17MediaFeatureNames33video_playable_inlineMediaFeatureE=(H_BASE+864)|0;
  var __ZN7WebCore17MediaFeatureNames22resolutionMediaFeatureE=(H_BASE+1048)|0;
  var __ZN7WebCore17MediaFeatureNames24aspect_ratioMediaFeatureE=(H_BASE+1016)|0;
  var __ZN7WebCore17MediaFeatureNames16gridMediaFeatureE=(H_BASE+1168)|0;
  var __ZN7WebCore17MediaFeatureNames35max_device_aspect_ratioMediaFeatureE=(H_BASE+840)|0;
  var __ZN7WebCore17MediaFeatureNames24device_widthMediaFeatureE=(H_BASE+1008)|0;
  var __ZN7WebCore17MediaFeatureNames22monochromeMediaFeatureE=(H_BASE+1056)|0;
  var __ZN7WebCore17MediaFeatureNames27max_color_indexMediaFeatureE=(H_BASE+944)|0;
  var __ZN7WebCore17MediaFeatureNames34min_device_pixel_ratioMediaFeatureE=(H_BASE+848)|0;
  var __ZN7WebCore17MediaFeatureNames23color_indexMediaFeatureE=(H_BASE+1032)|0;
  var __ZN7WebCore17MediaFeatureNames17colorMediaFeatureE=(H_BASE+1160)|0;
  var __ZN7WebCore17MediaFeatureNames21animationMediaFeatureE=(H_BASE+1120)|0;
  var __ZN7WebCore17MediaFeatureNames18heightMediaFeatureE=(H_BASE+1136)|0;
  var __ZN7WebCore17MediaFeatureNames17hoverMediaFeatureE=(H_BASE+1152)|0;
  var __ZN7WebCore17MediaFeatureNames22min_heightMediaFeatureE=(H_BASE+1064)|0;
  var __ZN7WebCore17MediaFeatureNames26min_resolutionMediaFeatureE=(H_BASE+952)|0;
  var __ZN7WebCore17MediaFeatureNames30device_pixel_ratioMediaFeatureE=(H_BASE+880)|0;
  var __ZN7WebCore17MediaFeatureNames21min_widthMediaFeatureE=(H_BASE+1088)|0;
  var __ZN7WebCore17MediaFeatureNames29max_device_heightMediaFeatureE=(H_BASE+896)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17MediaFeatureNames4initEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 344 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 40 | 0;
 i8 = i1 + 48 | 0;
 i9 = i1 + 56 | 0;
 i10 = i1 + 64 | 0;
 i11 = i1 + 72 | 0;
 i12 = i1 + 80 | 0;
 i13 = i1 + 88 | 0;
 i14 = i1 + 96 | 0;
 i15 = i1 + 104 | 0;
 i16 = i1 + 112 | 0;
 i17 = i1 + 120 | 0;
 i18 = i1 + 128 | 0;
 i19 = i1 + 136 | 0;
 i20 = i1 + 144 | 0;
 i21 = i1 + 152 | 0;
 i22 = i1 + 160 | 0;
 i23 = i1 + 168 | 0;
 i24 = i1 + 176 | 0;
 i25 = i1 + 184 | 0;
 i26 = i1 + 192 | 0;
 i27 = i1 + 200 | 0;
 i28 = i1 + 208 | 0;
 i29 = i1 + 216 | 0;
 i30 = i1 + 224 | 0;
 i31 = i1 + 232 | 0;
 i32 = i1 + 240 | 0;
 i33 = i1 + 248 | 0;
 i34 = i1 + 256 | 0;
 i35 = i1 + 264 | 0;
 i36 = i1 + 272 | 0;
 i37 = i1 + 280 | 0;
 i38 = i1 + 288 | 0;
 i39 = i1 + 296 | 0;
 i40 = i1 + 304 | 0;
 i41 = i1 + 312 | 0;
 i42 = i1 + 320 | 0;
 i43 = i1 + 328 | 0;
 i44 = i1 + 336 | 0;
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF12AtomicString4initEv();
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i44, H_BASE + 816 | 0, 5);
 i45 = i44 | 0;
 i44 = HEAP32[i45 >> 2] | 0;
 HEAP32[i45 >> 2] = 0;
 HEAP32[H_BASE + 1160 >> 2] = i44;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i43, H_BASE + 800 | 0, 11);
 i44 = i43 | 0;
 i43 = HEAP32[i44 >> 2] | 0;
 HEAP32[i44 >> 2] = 0;
 HEAP32[H_BASE + 1032 >> 2] = i43;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i42, H_BASE + 568 | 0, 4);
 i43 = i42 | 0;
 i42 = HEAP32[i43 >> 2] | 0;
 HEAP32[i43 >> 2] = 0;
 HEAP32[H_BASE + 1168 >> 2] = i42;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i41, H_BASE + 352 | 0, 10);
 i42 = i41 | 0;
 i41 = HEAP32[i42 >> 2] | 0;
 HEAP32[i42 >> 2] = 0;
 HEAP32[H_BASE + 1056 >> 2] = i41;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i40, H_BASE + 160 | 0, 6);
 i41 = i40 | 0;
 i40 = HEAP32[i41 >> 2] | 0;
 HEAP32[i41 >> 2] = 0;
 HEAP32[H_BASE + 1136 >> 2] = i40;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i39, H_BASE + 72 | 0, 5);
 i40 = i39 | 0;
 i39 = HEAP32[i40 >> 2] | 0;
 HEAP32[i40 >> 2] = 0;
 HEAP32[H_BASE + 1152 >> 2] = i39;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i38, H_BASE + 64 | 0, 5);
 i39 = i38 | 0;
 i38 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = 0;
 HEAP32[H_BASE + 1144 >> 2] = i38;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i37, H_BASE + 48 | 0, 11);
 i38 = i37 | 0;
 i37 = HEAP32[i38 >> 2] | 0;
 HEAP32[i38 >> 2] = 0;
 HEAP32[H_BASE + 1024 >> 2] = i37;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i36, H_BASE + 32 | 0, 12);
 i37 = i36 | 0;
 i36 = HEAP32[i37 >> 2] | 0;
 HEAP32[i37 >> 2] = 0;
 HEAP32[H_BASE + 1016 >> 2] = i36;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i35, H_BASE + 8 | 0, 19);
 i36 = i35 | 0;
 i35 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 HEAP32[H_BASE + 872 >> 2] = i35;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i34, H_BASE + 768 | 0, 26);
 i35 = i34 | 0;
 i34 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 HEAP32[H_BASE + 880 >> 2] = i34;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i33, H_BASE + 752 | 0, 13);
 i34 = i33 | 0;
 i33 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 HEAP32[H_BASE + 984 >> 2] = i33;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i32, H_BASE + 736 | 0, 12);
 i33 = i32 | 0;
 i32 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = 0;
 HEAP32[H_BASE + 1008 >> 2] = i32;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i31, H_BASE + 720 | 0, 9);
 i32 = i31 | 0;
 i31 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP32[H_BASE + 1112 >> 2] = i31;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i30, H_BASE + 704 | 0, 15);
 i31 = i30 | 0;
 i30 = HEAP32[i31 >> 2] | 0;
 HEAP32[i31 >> 2] = 0;
 HEAP32[H_BASE + 944 >> 2] = i30;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i29, H_BASE + 680 | 0, 16);
 i30 = i29 | 0;
 i29 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[H_BASE + 928 >> 2] = i29;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i28, H_BASE + 656 | 0, 23);
 i29 = i28 | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 HEAP32[H_BASE + 840 >> 2] = i28;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i27, H_BASE + 624 | 0, 30);
 i28 = i27 | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[H_BASE + 856 >> 2] = i27;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i26, H_BASE + 600 | 0, 17);
 i27 = i26 | 0;
 i26 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[H_BASE + 896 >> 2] = i26;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i25, H_BASE + 576 | 0, 16);
 i26 = i25 | 0;
 i25 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[H_BASE + 920 >> 2] = i25;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i24, H_BASE + 552 | 0, 10);
 i25 = i24 | 0;
 i24 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[H_BASE + 1072 >> 2] = i24;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i23, H_BASE + 536 | 0, 14);
 i24 = i23 | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[H_BASE + 976 >> 2] = i23;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i22, H_BASE + 520 | 0, 9);
 i23 = i22 | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[H_BASE + 1104 >> 2] = i22;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i21, H_BASE + 504 | 0, 14);
 i22 = i21 | 0;
 i21 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[H_BASE + 968 >> 2] = i21;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i20, H_BASE + 488 | 0, 9);
 i21 = i20 | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[H_BASE + 1096 >> 2] = i20;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i19, H_BASE + 472 | 0, 15);
 i20 = i19 | 0;
 i19 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[H_BASE + 936 >> 2] = i19;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i18, H_BASE + 448 | 0, 16);
 i19 = i18 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[H_BASE + 912 >> 2] = i18;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i17, H_BASE + 424 | 0, 23);
 i18 = i17 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[H_BASE + 832 >> 2] = i17;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i16, H_BASE + 392 | 0, 30);
 i17 = i16 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[H_BASE + 848 >> 2] = i16;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i15, H_BASE + 368 | 0, 17);
 i16 = i15 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[H_BASE + 888 >> 2] = i15;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i14, H_BASE + 328 | 0, 16);
 i15 = i14 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[H_BASE + 904 >> 2] = i14;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i13, H_BASE + 312 | 0, 10);
 i14 = i13 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[H_BASE + 1064 >> 2] = i13;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i12, H_BASE + 296 | 0, 14);
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[H_BASE + 960 >> 2] = i12;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i11, H_BASE + 280 | 0, 9);
 i12 = i11 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[H_BASE + 1088 >> 2] = i11;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i10, H_BASE + 264 | 0, 14);
 i11 = i10 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[H_BASE + 952 >> 2] = i10;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i9, H_BASE + 256 | 0, 7);
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[H_BASE + 1128 >> 2] = i9;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i8, H_BASE + 240 | 0, 10);
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[H_BASE + 1048 >> 2] = i8;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i7, H_BASE + 216 | 0, 20);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[H_BASE + 1e3 >> 2] = i7;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i6, H_BASE + 192 | 0, 20);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[H_BASE + 992 >> 2] = i6;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 168 | 0, 18);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[H_BASE + 1040 >> 2] = i5;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 136 | 0, 17);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[H_BASE + 1120 >> 2] = i4;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 104 | 0, 29);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[H_BASE + 864 >> 2] = i3;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 80 | 0, 17);
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[H_BASE + 1080 >> 2] = i2;
 HEAP8[H_BASE + 824 | 0] = 1;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","_memcpy","_memset","__ZN7WebCore17MediaFeatureNames4initEv"]

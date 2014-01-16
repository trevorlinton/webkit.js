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
H_BASE = parentModule["_malloc"](384 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 384;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
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
  var __ZN7WebCore11MathMLNames5mnTagE=env.__ZN7WebCore11MathMLNames5mnTagE|0;
  var __ZN7WebCore11MathMLNames14maligngroupTagE=env.__ZN7WebCore11MathMLNames14maligngroupTagE|0;
  var __ZN7WebCore11MathMLNames13malignmarkTagE=env.__ZN7WebCore11MathMLNames13malignmarkTagE|0;
  var __ZN7WebCore11MathMLNames9mstackTagE=env.__ZN7WebCore11MathMLNames9mstackTagE|0;
  var __ZN7WebCore11MathMLNames6mtdTagE=env.__ZN7WebCore11MathMLNames6mtdTagE|0;
  var __ZN7WebCore11MathMLNames5miTagE=env.__ZN7WebCore11MathMLNames5miTagE|0;
  var __ZN7WebCore11MathMLNames8mrootTagE=env.__ZN7WebCore11MathMLNames8mrootTagE|0;
  var __ZN7WebCore11MathMLNames9mslineTagE=env.__ZN7WebCore11MathMLNames9mslineTagE|0;
  var __ZN7WebCore11MathMLNames10mscarryTagE=env.__ZN7WebCore11MathMLNames10mscarryTagE|0;
  var __ZN7WebCore11MathMLNames7mrowTagE=env.__ZN7WebCore11MathMLNames7mrowTagE|0;
  var __ZN7WebCore11MathMLNames9mstyleTagE=env.__ZN7WebCore11MathMLNames9mstyleTagE|0;
  var __ZN7WebCore11MathMLNames8mfracTagE=env.__ZN7WebCore11MathMLNames8mfracTagE|0;
  var __ZN7WebCore11MathMLNames17annotation_xmlTagE=env.__ZN7WebCore11MathMLNames17annotation_xmlTagE|0;
  var __ZN7WebCore11MathMLNames10msubsupTagE=env.__ZN7WebCore11MathMLNames10msubsupTagE|0;
  var __ZN7WebCore11MathMLNames8mtextTagE=env.__ZN7WebCore11MathMLNames8mtextTagE|0;
  var __ZN7WebCore11MathMLNames10msgroupTagE=env.__ZN7WebCore11MathMLNames10msgroupTagE|0;
  var __ZN7WebCore11MathMLNames10mpaddedTagE=env.__ZN7WebCore11MathMLNames10mpaddedTagE|0;
  var __ZN7WebCore11MathMLNames12mscarriesTagE=env.__ZN7WebCore11MathMLNames12mscarriesTagE|0;
  var __ZN7WebCore11MathMLNames7mathTagE=env.__ZN7WebCore11MathMLNames7mathTagE|0;
  var __ZN7WebCore11MathMLNames6mtrTagE=env.__ZN7WebCore11MathMLNames6mtrTagE|0;
  var __ZN7WebCore11MathMLNames9merrorTagE=env.__ZN7WebCore11MathMLNames9merrorTagE|0;
  var __ZN7WebCore11MathMLNames12semanticsTagE=env.__ZN7WebCore11MathMLNames12semanticsTagE|0;
  var __ZN7WebCore11MathMLNames7msupTagE=env.__ZN7WebCore11MathMLNames7msupTagE|0;
  var __ZN7WebCore11MathMLNames10mfencedTagE=env.__ZN7WebCore11MathMLNames10mfencedTagE|0;
  var __ZN7WebCore11MathMLNames9mglyphTagE=env.__ZN7WebCore11MathMLNames9mglyphTagE|0;
  var __ZN7WebCore11MathMLNames8moverTagE=env.__ZN7WebCore11MathMLNames8moverTagE|0;
  var __ZN7WebCore11MathMLNames5moTagE=env.__ZN7WebCore11MathMLNames5moTagE|0;
  var __ZN7WebCore11MathMLNames11mphantomTagE=env.__ZN7WebCore11MathMLNames11mphantomTagE|0;
  var __ZN7WebCore11MathMLNames9mtableTagE=env.__ZN7WebCore11MathMLNames9mtableTagE|0;
  var __ZN7WebCore11MathMLNames13annotationTagE=env.__ZN7WebCore11MathMLNames13annotationTagE|0;
  var __ZN7WebCore11MathMLNames11mlongdivTagE=env.__ZN7WebCore11MathMLNames11mlongdivTagE|0;
  var __ZN7WebCore11MathMLNames14mprescriptsTagE=env.__ZN7WebCore11MathMLNames14mprescriptsTagE|0;
  var __ZN7WebCore11MathMLNames11mencloseTagE=env.__ZN7WebCore11MathMLNames11mencloseTagE|0;
  var __ZN7WebCore11MathMLNames13mlabeledtrTagE=env.__ZN7WebCore11MathMLNames13mlabeledtrTagE|0;
  var __ZN7WebCore11MathMLNames13munderoverTagE=env.__ZN7WebCore11MathMLNames13munderoverTagE|0;
  var __ZN7WebCore11MathMLNames9mspaceTagE=env.__ZN7WebCore11MathMLNames9mspaceTagE|0;
  var __ZN7WebCore11MathMLNames9munderTagE=env.__ZN7WebCore11MathMLNames9munderTagE|0;
  var __ZN7WebCore11MathMLNames7noneTagE=env.__ZN7WebCore11MathMLNames7noneTagE|0;
  var __ZN7WebCore11MathMLNames7msubTagE=env.__ZN7WebCore11MathMLNames7msubTagE|0;
  var __ZN7WebCore11MathMLNames16mmultiscriptsTagE=env.__ZN7WebCore11MathMLNames16mmultiscriptsTagE|0;
  var __ZN7WebCore11MathMLNames8msqrtTagE=env.__ZN7WebCore11MathMLNames8msqrtTagE|0;
  var __ZN7WebCore11MathMLNames10mactionTagE=env.__ZN7WebCore11MathMLNames10mactionTagE|0;
  var __ZN7WebCore11MathMLNames8msrowTagE=env.__ZN7WebCore11MathMLNames8msrowTagE|0;
  var __ZN7WebCore11MathMLNames5msTagE=env.__ZN7WebCore11MathMLNames5msTagE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 8 >> 2] = __ZN7WebCore11MathMLNames13annotationTagE;
 HEAP32[H_BASE + 12 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 16 >> 2] = __ZN7WebCore11MathMLNames17annotation_xmlTagE;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 24 >> 2] = __ZN7WebCore11MathMLNames10mactionTagE;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 32 >> 2] = __ZN7WebCore11MathMLNames14maligngroupTagE;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 40 >> 2] = __ZN7WebCore11MathMLNames13malignmarkTagE;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 48 >> 2] = __ZN7WebCore11MathMLNames7mathTagE;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 56 >> 2] = __ZN7WebCore11MathMLNames11mencloseTagE;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 64 >> 2] = __ZN7WebCore11MathMLNames9merrorTagE;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 72 >> 2] = __ZN7WebCore11MathMLNames10mfencedTagE;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 80 >> 2] = __ZN7WebCore11MathMLNames8mfracTagE;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 88 >> 2] = __ZN7WebCore11MathMLNames9mglyphTagE;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 96 >> 2] = __ZN7WebCore11MathMLNames5miTagE;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 104 >> 2] = __ZN7WebCore11MathMLNames13mlabeledtrTagE;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 112 >> 2] = __ZN7WebCore11MathMLNames11mlongdivTagE;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 120 >> 2] = __ZN7WebCore11MathMLNames16mmultiscriptsTagE;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 128 >> 2] = __ZN7WebCore11MathMLNames5mnTagE;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 136 >> 2] = __ZN7WebCore11MathMLNames5moTagE;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 144 >> 2] = __ZN7WebCore11MathMLNames8moverTagE;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 152 >> 2] = __ZN7WebCore11MathMLNames10mpaddedTagE;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 160 >> 2] = __ZN7WebCore11MathMLNames11mphantomTagE;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 168 >> 2] = __ZN7WebCore11MathMLNames14mprescriptsTagE;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 176 >> 2] = __ZN7WebCore11MathMLNames8mrootTagE;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 184 >> 2] = __ZN7WebCore11MathMLNames7mrowTagE;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 192 >> 2] = __ZN7WebCore11MathMLNames5msTagE;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 200 >> 2] = __ZN7WebCore11MathMLNames12mscarriesTagE;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 208 >> 2] = __ZN7WebCore11MathMLNames10mscarryTagE;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 216 >> 2] = __ZN7WebCore11MathMLNames10msgroupTagE;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 224 >> 2] = __ZN7WebCore11MathMLNames9mslineTagE;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 232 >> 2] = __ZN7WebCore11MathMLNames9mspaceTagE;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 240 >> 2] = __ZN7WebCore11MathMLNames8msqrtTagE;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 248 >> 2] = __ZN7WebCore11MathMLNames8msrowTagE;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 256 >> 2] = __ZN7WebCore11MathMLNames9mstackTagE;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 264 >> 2] = __ZN7WebCore11MathMLNames9mstyleTagE;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 272 >> 2] = __ZN7WebCore11MathMLNames7msubTagE;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 280 >> 2] = __ZN7WebCore11MathMLNames10msubsupTagE;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 288 >> 2] = __ZN7WebCore11MathMLNames7msupTagE;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 296 >> 2] = __ZN7WebCore11MathMLNames9mtableTagE;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 304 >> 2] = __ZN7WebCore11MathMLNames6mtdTagE;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 312 >> 2] = __ZN7WebCore11MathMLNames8mtextTagE;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 320 >> 2] = __ZN7WebCore11MathMLNames6mtrTagE;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 328 >> 2] = __ZN7WebCore11MathMLNames9munderTagE;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 336 >> 2] = __ZN7WebCore11MathMLNames13munderoverTagE;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 344 >> 2] = __ZN7WebCore11MathMLNames7noneTagE;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 352 >> 2] = __ZN7WebCore11MathMLNames12semanticsTagE;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viiii + 2;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E3addINS_17HashMapTranslatorISP_SJ_EES2_RKSE_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SF_SH_SJ_SP_SM_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E6expandEPSF_(i2, 0) | 0;
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
  i8 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E6expandEPSF_(i2, i26) | 0;
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
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E6expandEPSF_(i1, i2) {
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
function __ZN7WebCore20MathMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZNK7WebCore8Document8settingsEv(i3) | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP8[i7 + 194 | 0] & 1) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if (HEAP8[H_BASE + 360 | 0] | 0) {
  if ((HEAP32[H_BASE + 380 >> 2] | 0) == 0) {
   i8 = 7;
  }
 } else {
  _memset(H_BASE + 368 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 360 | 0] = 1;
  i8 = 7;
 }
 if ((i8 | 0) == 7) {
  __ZN7WebCoreL24populateMathMLFactoryMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFNS0_10PassRefPtrINS_13MathMLElementEEERKNS_13QualifiedNameERNS_8DocumentEbENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSG_ISD_EEEE(H_BASE + 368);
 }
 i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0;
 i7 = i8;
 i9 = HEAP32[H_BASE + 376 >> 2] | 0;
 i10 = HEAP32[H_BASE + 368 >> 2] | 0;
 i11 = i8;
 i8 = i11 + ~(i11 << 15) | 0;
 i11 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i11 >>> 6 ^ i11;
 i11 = i8 + ~(i8 << 11) | 0;
 i8 = i11 >>> 16 ^ i11;
 L12 : do {
  if ((i10 | 0) != 0) {
   i11 = i8 & i9;
   i12 = i10 + (i11 << 3) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == (i7 | 0)) {
    i14 = i12;
   } else {
    i12 = (i8 >>> 23) + ~i8 | 0;
    i15 = i12 << 12 ^ i12;
    i12 = i15 >>> 7 ^ i15;
    i15 = i12 << 2 ^ i12;
    i12 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i16 = i11;
    i11 = i13;
    while (1) {
     if ((i11 | 0) == 0) {
      break L12;
     }
     i13 = (i15 | 0) == 0 ? i12 : i15;
     i17 = i13 + i16 & i9;
     i18 = i10 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i7 | 0)) {
      i14 = i18;
      break;
     } else {
      i15 = i13;
      i16 = i17;
      i11 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viiii[i11 & 15](i6, i2, i3, i4);
   i11 = i6 | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i16 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore13MathMLElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL24populateMathMLFactoryMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFNS0_10PassRefPtrINS_13MathMLElementEEERKNS_13QualifiedNameERNS_8DocumentEbENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSG_ISD_EEEE(i1) {
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E3addINS_17HashMapTranslatorISP_SJ_EES2_RKSE_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SF_SH_SJ_SP_SM_EEEEOT0_OT1_(i4, i5, i3, H_BASE + 8 + (i1 << 3) + 4 | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= 44 >>> 0) {
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
function __ZN7WebCoreL26inlinecontainerConstructorERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore28MathMLInlineContainerElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, i2, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL17selectConstructorERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore19MathMLSelectElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, i2, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL15textConstructorERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore17MathMLTextElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, i2, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL15mathConstructorERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore17MathMLMathElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, i2, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL11ConstructorERKNS_13QualifiedNameERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13MathMLElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b2() {
 abort(2);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCoreL17selectConstructorERKNS_13QualifiedNameERNS_8DocumentEb,b4,__ZN7WebCoreL15mathConstructorERKNS_13QualifiedNameERNS_8DocumentEb,b4,__ZN7WebCoreL15textConstructorERKNS_13QualifiedNameERNS_8DocumentEb,b4,__ZN7WebCoreL11ConstructorERKNS_13QualifiedNameERNS_8DocumentEb,b4,__ZN7WebCoreL26inlinecontainerConstructorERKNS_13QualifiedNameERNS_8DocumentEb,b4,b4,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore11MathMLNames5mnTagE": __ZN7WebCore11MathMLNames5mnTagE, "__ZN7WebCore11MathMLNames14maligngroupTagE": __ZN7WebCore11MathMLNames14maligngroupTagE, "__ZN7WebCore11MathMLNames13malignmarkTagE": __ZN7WebCore11MathMLNames13malignmarkTagE, "__ZN7WebCore11MathMLNames9mstackTagE": __ZN7WebCore11MathMLNames9mstackTagE, "__ZN7WebCore11MathMLNames6mtdTagE": __ZN7WebCore11MathMLNames6mtdTagE, "__ZN7WebCore11MathMLNames5miTagE": __ZN7WebCore11MathMLNames5miTagE, "__ZN7WebCore11MathMLNames8mrootTagE": __ZN7WebCore11MathMLNames8mrootTagE, "__ZN7WebCore11MathMLNames9mslineTagE": __ZN7WebCore11MathMLNames9mslineTagE, "__ZN7WebCore11MathMLNames10mscarryTagE": __ZN7WebCore11MathMLNames10mscarryTagE, "__ZN7WebCore11MathMLNames7mrowTagE": __ZN7WebCore11MathMLNames7mrowTagE, "__ZN7WebCore11MathMLNames9mstyleTagE": __ZN7WebCore11MathMLNames9mstyleTagE, "__ZN7WebCore11MathMLNames8mfracTagE": __ZN7WebCore11MathMLNames8mfracTagE, "__ZN7WebCore11MathMLNames17annotation_xmlTagE": __ZN7WebCore11MathMLNames17annotation_xmlTagE, "__ZN7WebCore11MathMLNames10msubsupTagE": __ZN7WebCore11MathMLNames10msubsupTagE, "__ZN7WebCore11MathMLNames8mtextTagE": __ZN7WebCore11MathMLNames8mtextTagE, "__ZN7WebCore11MathMLNames10msgroupTagE": __ZN7WebCore11MathMLNames10msgroupTagE, "__ZN7WebCore11MathMLNames10mpaddedTagE": __ZN7WebCore11MathMLNames10mpaddedTagE, "__ZN7WebCore11MathMLNames12mscarriesTagE": __ZN7WebCore11MathMLNames12mscarriesTagE, "__ZN7WebCore11MathMLNames7mathTagE": __ZN7WebCore11MathMLNames7mathTagE, "__ZN7WebCore11MathMLNames6mtrTagE": __ZN7WebCore11MathMLNames6mtrTagE, "__ZN7WebCore11MathMLNames9merrorTagE": __ZN7WebCore11MathMLNames9merrorTagE, "__ZN7WebCore11MathMLNames12semanticsTagE": __ZN7WebCore11MathMLNames12semanticsTagE, "__ZN7WebCore11MathMLNames7msupTagE": __ZN7WebCore11MathMLNames7msupTagE, "__ZN7WebCore11MathMLNames10mfencedTagE": __ZN7WebCore11MathMLNames10mfencedTagE, "__ZN7WebCore11MathMLNames9mglyphTagE": __ZN7WebCore11MathMLNames9mglyphTagE, "__ZN7WebCore11MathMLNames8moverTagE": __ZN7WebCore11MathMLNames8moverTagE, "__ZN7WebCore11MathMLNames5moTagE": __ZN7WebCore11MathMLNames5moTagE, "__ZN7WebCore11MathMLNames11mphantomTagE": __ZN7WebCore11MathMLNames11mphantomTagE, "__ZN7WebCore11MathMLNames9mtableTagE": __ZN7WebCore11MathMLNames9mtableTagE, "__ZN7WebCore11MathMLNames13annotationTagE": __ZN7WebCore11MathMLNames13annotationTagE, "__ZN7WebCore11MathMLNames11mlongdivTagE": __ZN7WebCore11MathMLNames11mlongdivTagE, "__ZN7WebCore11MathMLNames14mprescriptsTagE": __ZN7WebCore11MathMLNames14mprescriptsTagE, "__ZN7WebCore11MathMLNames11mencloseTagE": __ZN7WebCore11MathMLNames11mencloseTagE, "__ZN7WebCore11MathMLNames13mlabeledtrTagE": __ZN7WebCore11MathMLNames13mlabeledtrTagE, "__ZN7WebCore11MathMLNames13munderoverTagE": __ZN7WebCore11MathMLNames13munderoverTagE, "__ZN7WebCore11MathMLNames9mspaceTagE": __ZN7WebCore11MathMLNames9mspaceTagE, "__ZN7WebCore11MathMLNames9munderTagE": __ZN7WebCore11MathMLNames9munderTagE, "__ZN7WebCore11MathMLNames7noneTagE": __ZN7WebCore11MathMLNames7noneTagE, "__ZN7WebCore11MathMLNames7msubTagE": __ZN7WebCore11MathMLNames7msubTagE, "__ZN7WebCore11MathMLNames16mmultiscriptsTagE": __ZN7WebCore11MathMLNames16mmultiscriptsTagE, "__ZN7WebCore11MathMLNames8msqrtTagE": __ZN7WebCore11MathMLNames8msqrtTagE, "__ZN7WebCore11MathMLNames10mactionTagE": __ZN7WebCore11MathMLNames10mactionTagE, "__ZN7WebCore11MathMLNames8msrowTagE": __ZN7WebCore11MathMLNames8msrowTagE, "__ZN7WebCore11MathMLNames5msTagE": __ZN7WebCore11MathMLNames5msTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCoreL17selectConstructorERKNS_13QualifiedNameERNS_8DocumentEb","_strlen","__ZN7WebCoreL15mathConstructorERKNS_13QualifiedNameERNS_8DocumentEb","__ZN7WebCoreL26inlinecontainerConstructorERKNS_13QualifiedNameERNS_8DocumentEb","__ZN7WebCoreL24populateMathMLFactoryMapERN3WTF7HashMapIPNS0_16AtomicStringImplEPFNS0_10PassRefPtrINS_13MathMLElementEEERKNS_13QualifiedNameERNS_8DocumentEbENS0_7PtrHashIS3_EENS0_10HashTraitsIS3_EENSG_ISD_EEEE","__ZN7WebCoreL15textConstructorERKNS_13QualifiedNameERNS_8DocumentEb","_memset","_memcpy","__ZN7WebCoreL11ConstructorERKNS_13QualifiedNameERNS_8DocumentEb","__ZN7WebCore20MathMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEb","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E6expandEPSF_","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_PFNS_10PassRefPtrIN7WebCore13MathMLElementEEERKNS5_13QualifiedNameERNS5_8DocumentEbEEENS_24KeyValuePairKeyExtractorISF_EENS_7PtrHashIS2_EENS_7HashMapIS2_SE_SJ_NS_10HashTraitsIS2_EENSL_ISE_EEE18KeyValuePairTraitsESM_E3addINS_17HashMapTranslatorISP_SJ_EES2_RKSE_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_SF_SH_SJ_SP_SM_EEEEOT0_OT1_"]

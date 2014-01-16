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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, d30 = +0, d31 = +0, d32 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i7 + 88 | 0;
 i20 = i7 + 96 | 0;
 i21 = i7 + 104 | 0;
 i22 = i7 + 112 | 0;
 i23 = i7 + 120 | 0;
 i24 = i7 + 128 | 0;
 i25 = i2 | 0;
 i26 = i3 | 0;
 i27 = i2 + 4 | 0;
 d28 = +HEAPF32[i27 >> 2];
 HEAPF32[i8 >> 2] = +HEAPF32[i25 >> 2] + +HEAPF32[i26 >> 2];
 HEAPF32[i8 + 4 >> 2] = d28;
 __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i1, i8);
 i8 = i2 + 8 | 0;
 i29 = i4 | 0;
 d28 = +HEAPF32[i27 >> 2];
 HEAPF32[i9 >> 2] = +HEAPF32[i25 >> 2] + +HEAPF32[i8 >> 2] - +HEAPF32[i29 >> 2];
 HEAPF32[i9 + 4 >> 2] = d28;
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i1, i9);
 d28 = +HEAPF32[i29 >> 2];
 d30 = +HEAPF32[i4 + 4 >> 2];
 if (d28 > +0 | d30 > +0) {
  d31 = +HEAPF32[i25 >> 2] + +HEAPF32[i8 >> 2];
  d32 = +HEAPF32[i27 >> 2];
  HEAPF32[i10 >> 2] = d31 - d28 * +.44771501421928406;
  HEAPF32[i10 + 4 >> 2] = d32;
  HEAPF32[i11 >> 2] = d31;
  HEAPF32[i11 + 4 >> 2] = d32 + d30 * +.44771501421928406;
  HEAPF32[i12 >> 2] = d31;
  HEAPF32[i12 + 4 >> 2] = d32 + d30;
  __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i1, i10, i11, i12);
 }
 i12 = i2 + 12 | 0;
 i2 = i6 + 4 | 0;
 d30 = +HEAPF32[i27 >> 2] + +HEAPF32[i12 >> 2] - +HEAPF32[i2 >> 2];
 HEAPF32[i13 >> 2] = +HEAPF32[i25 >> 2] + +HEAPF32[i8 >> 2];
 HEAPF32[i13 + 4 >> 2] = d30;
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i1, i13);
 d30 = +HEAPF32[i6 >> 2];
 d32 = +HEAPF32[i2 >> 2];
 if (d30 > +0 | d32 > +0) {
  d31 = +HEAPF32[i25 >> 2] + +HEAPF32[i8 >> 2];
  d28 = +HEAPF32[i27 >> 2] + +HEAPF32[i12 >> 2];
  HEAPF32[i14 >> 2] = d31;
  HEAPF32[i14 + 4 >> 2] = d28 - d32 * +.44771501421928406;
  HEAPF32[i15 >> 2] = d31 - d30 * +.44771501421928406;
  HEAPF32[i15 + 4 >> 2] = d28;
  HEAPF32[i16 >> 2] = d31 - d30;
  HEAPF32[i16 + 4 >> 2] = d28;
  __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i1, i14, i15, i16);
 }
 i16 = i5 | 0;
 d28 = +HEAPF32[i27 >> 2] + +HEAPF32[i12 >> 2];
 HEAPF32[i17 >> 2] = +HEAPF32[i25 >> 2] + +HEAPF32[i16 >> 2];
 HEAPF32[i17 + 4 >> 2] = d28;
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i1, i17);
 d28 = +HEAPF32[i16 >> 2];
 d30 = +HEAPF32[i5 + 4 >> 2];
 if (d28 > +0 | d30 > +0) {
  d31 = +HEAPF32[i25 >> 2];
  d32 = +HEAPF32[i27 >> 2] + +HEAPF32[i12 >> 2];
  HEAPF32[i18 >> 2] = d31 + d28 * +.44771501421928406;
  HEAPF32[i18 + 4 >> 2] = d32;
  HEAPF32[i19 >> 2] = d31;
  HEAPF32[i19 + 4 >> 2] = d32 - d30 * +.44771501421928406;
  HEAPF32[i20 >> 2] = d31;
  HEAPF32[i20 + 4 >> 2] = d32 - d30;
  __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i1, i18, i19, i20);
 }
 i20 = i3 + 4 | 0;
 d30 = +HEAPF32[i27 >> 2] + +HEAPF32[i20 >> 2];
 HEAPF32[i21 >> 2] = +HEAPF32[i25 >> 2];
 HEAPF32[i21 + 4 >> 2] = d30;
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i1, i21);
 d30 = +HEAPF32[i26 >> 2];
 d32 = +HEAPF32[i20 >> 2];
 if (!(d30 > +0 | d32 > +0)) {
  __ZN7WebCore4Path12closeSubpathEv(i1);
  STACKTOP = i7;
  return;
 }
 d31 = +HEAPF32[i25 >> 2];
 d28 = +HEAPF32[i27 >> 2];
 HEAPF32[i22 >> 2] = d31;
 HEAPF32[i22 + 4 >> 2] = d28 + d32 * +.44771501421928406;
 HEAPF32[i23 >> 2] = d31 + d30 * +.44771501421928406;
 HEAPF32[i23 + 4 >> 2] = d28;
 HEAPF32[i24 >> 2] = d31 + d30;
 HEAPF32[i24 + 4 >> 2] = d28;
 __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i1, i22, i23, i24);
 __ZN7WebCore4Path12closeSubpathEv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i4, i2 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i2 + 16 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i2 + 24 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, i2 + 32 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i8, i2 + 40 | 0);
 d9 = +HEAPF32[i4 + 8 >> 2];
 if (d9 <= +0) {
  STACKTOP = i3;
  return;
 }
 d10 = +HEAPF32[i4 + 12 >> 2];
 if (d10 <= +0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (d9 >= +HEAPF32[i5 >> 2] + +HEAPF32[i6 >> 2]) {
   if (d9 < +HEAPF32[i7 >> 2] + +HEAPF32[i8 >> 2]) {
    break;
   }
   if (d10 < +HEAPF32[i5 + 4 >> 2] + +HEAPF32[i7 + 4 >> 2]) {
    break;
   }
   if (d10 < +HEAPF32[i6 + 4 >> 2] + +HEAPF32[i8 + 4 >> 2]) {
    break;
   }
   __ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i4, i5, i6, i7, i8);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeENS0_19RoundedRectStrategyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 d7 = +HEAPF32[i2 + 8 >> 2];
 if (d7 <= +0) {
  STACKTOP = i4;
  return;
 }
 d8 = +HEAPF32[i2 + 12 >> 2];
 if (d8 <= +0) {
  STACKTOP = i4;
  return;
 }
 i9 = i3;
 i3 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i5 + 4 >> 2] = i10;
 d11 = d7 * +.5;
 d7 = d8 * +.5;
 i9 = i5;
 d8 = (HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]);
 d12 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
 if (d8 < +0) {
  d13 = d12 < +0 ? +0 : d12;
  HEAPF32[i9 >> 2] = d13;
  d14 = d13;
 } else {
  d14 = d8;
 }
 i10 = i6 + 4 | 0;
 if (d12 < +0) {
  HEAPF32[i10 >> 2] = d14;
  d15 = d14;
 } else {
  d15 = d12;
 }
 if (d14 > d11) {
  HEAPF32[i9 >> 2] = d11;
 }
 if (d15 > d7) {
  HEAPF32[i10 >> 2] = d7;
 }
 __ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i2, i6, i6, i6, i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL25pathLengthApplierFunctionEPvPKNS_11PathElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0;
 i3 = i1;
 if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 0:
  {
   d5 = +__ZN7WebCore18PathTraversalState6moveToERKNS_10FloatPointE(i3, i4);
   break;
  }
 case 1:
  {
   d5 = +__ZN7WebCore18PathTraversalState6lineToERKNS_10FloatPointE(i3, i4);
   break;
  }
 case 2:
  {
   d5 = +__ZN7WebCore18PathTraversalState17quadraticBezierToERKNS_10FloatPointES3_(i3, i4, i4 + 8 | 0);
   break;
  }
 case 3:
  {
   d5 = +__ZN7WebCore18PathTraversalState13cubicBezierToERKNS_10FloatPointES3_S3_(i3, i4, i4 + 8 | 0, i4 + 16 | 0);
   break;
  }
 case 4:
  {
   d5 = +__ZN7WebCore18PathTraversalState12closeSubpathEv(i3);
   break;
  }
 default:
  {
   d5 = +0;
  }
 }
 i4 = i1 + 40 | 0;
 HEAPF32[i4 >> 2] = d5 + +HEAPF32[i4 >> 2];
 __ZN7WebCore18PathTraversalState14processSegmentEv(i3);
 return;
}
function __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0, d9 = +0;
 d8 = +HEAPF32[i2 + 8 >> 2];
 if (d8 <= +0) {
  return;
 }
 d9 = +HEAPF32[i2 + 12 >> 2];
 if (d9 <= +0) {
  return;
 }
 do {
  if (d8 >= +HEAPF32[i3 >> 2] + +HEAPF32[i4 >> 2]) {
   if (d8 < +HEAPF32[i5 >> 2] + +HEAPF32[i6 >> 2]) {
    break;
   }
   if (d9 < +HEAPF32[i3 + 4 >> 2] + +HEAPF32[i5 + 4 >> 2]) {
    break;
   }
   if (d9 < +HEAPF32[i4 + 4 >> 2] + +HEAPF32[i6 + 4 >> 2]) {
    break;
   }
   __ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i2, i3, i4, i5, i6);
   return;
  }
 } while (0);
 __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i1, i2);
 return;
}
function __ZNK7WebCore4Path13pointAtLengthEfRb(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 __ZN7WebCore18PathTraversalStateC1ENS0_19PathTraversalActionE(i6, 1);
 HEAPF32[i6 + 48 >> 2] = d3;
 __ZNK7WebCore4Path5applyEPvPFvS1_PKNS_11PathElementEE(i2, i6, F_BASE_vii + 2 | 0);
 HEAP8[i4] = HEAP8[i6 + 4 | 0] & 1;
 i4 = i6 + 8 | 0;
 i6 = i1;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = i1;
 STACKTOP = i5;
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
function __ZNK7WebCore4Path19normalAngleAtLengthEfRb(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 __ZN7WebCore18PathTraversalStateC1ENS0_19PathTraversalActionE(i5, 3);
 HEAPF32[i5 + 48 >> 2] = d2 != +0 ? d2 : +1.1920928955078125e-7;
 __ZNK7WebCore4Path5applyEPvPFvS1_PKNS_11PathElementEE(i1, i5, F_BASE_vii + 2 | 0);
 HEAP8[i3] = HEAP8[i5 + 4 | 0] & 1;
 STACKTOP = i4;
 return +(+HEAPF32[i5 + 60 >> 2]);
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
function __ZN7WebCore4Path21addPathForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i2, i3, i4, i5, i6);
 return;
}
function __ZNK7WebCore4Path6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 __ZN7WebCore18PathTraversalStateC1ENS0_19PathTraversalActionE(i3, 0);
 __ZNK7WebCore4Path5applyEPvPFvS1_PKNS_11PathElementEE(i1, i3, F_BASE_vii + 2 | 0);
 STACKTOP = i2;
 return +(+HEAPF32[i3 + 40 >> 2]);
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
function __ZNK7WebCore4Path16fastBoundingRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Path12boundingRectEv(i1, i2);
 return;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCoreL25pathLengthApplierFunctionEPvPKNS_11PathElementE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore4Path19normalAngleAtLengthEfRb","_strlen","_memset","__ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeENS0_19RoundedRectStrategyE","__ZN7WebCore4Path21addPathForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE","__ZNK7WebCore4Path13pointAtLengthEfRb","__ZN7WebCoreL25pathLengthApplierFunctionEPvPKNS_11PathElementE","__ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE","_memcpy","__ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE","__ZN7WebCore4Path24addBeziersForRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_","__ZNK7WebCore4Path6lengthEv","__ZNK7WebCore4Path16fastBoundingRectEv"]

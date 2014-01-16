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
H_BASE = parentModule["_malloc"](648 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 648;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15HTMLBodyElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
var __ZN7WebCore15HTMLBodyElementD1Ev;
/* memory initializer */ allocate([102,105,120,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames21onselectionchangeAttrE=env.__ZN7WebCore9HTMLNames21onselectionchangeAttrE|0;
  var __ZN7WebCore9HTMLNames14leftmarginAttrE=env.__ZN7WebCore9HTMLNames14leftmarginAttrE|0;
  var __ZN7WebCore9HTMLNames18onbeforeunloadAttrE=env.__ZN7WebCore9HTMLNames18onbeforeunloadAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames12ononlineAttrE=env.__ZN7WebCore9HTMLNames12ononlineAttrE|0;
  var __ZN7WebCore9HTMLNames12onunloadAttrE=env.__ZN7WebCore9HTMLNames12onunloadAttrE|0;
  var __ZN7WebCore9HTMLNames14onpopstateAttrE=env.__ZN7WebCore9HTMLNames14onpopstateAttrE|0;
  var __ZN7WebCore9HTMLNames12onresizeAttrE=env.__ZN7WebCore9HTMLNames12onresizeAttrE|0;
  var __ZN7WebCore9HTMLNames15marginwidthAttrE=env.__ZN7WebCore9HTMLNames15marginwidthAttrE|0;
  var __ZN7WebCore9HTMLNames11onfocusAttrE=env.__ZN7WebCore9HTMLNames11onfocusAttrE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore9HTMLNames14backgroundAttrE=env.__ZN7WebCore9HTMLNames14backgroundAttrE|0;
  var __ZN7WebCore9HTMLNames16onhashchangeAttrE=env.__ZN7WebCore9HTMLNames16onhashchangeAttrE|0;
  var __ZN7WebCore9HTMLNames12onscrollAttrE=env.__ZN7WebCore9HTMLNames12onscrollAttrE|0;
  var __ZN7WebCore9HTMLNames11bgcolorAttrE=env.__ZN7WebCore9HTMLNames11bgcolorAttrE|0;
  var __ZN7WebCore9HTMLNames13onofflineAttrE=env.__ZN7WebCore9HTMLNames13onofflineAttrE|0;
  var __ZN7WebCore9HTMLNames13topmarginAttrE=env.__ZN7WebCore9HTMLNames13topmarginAttrE|0;
  var __ZN7WebCore9HTMLNames16bgpropertiesAttrE=env.__ZN7WebCore9HTMLNames16bgpropertiesAttrE|0;
  var __ZN7WebCore9HTMLNames14onpagehideAttrE=env.__ZN7WebCore9HTMLNames14onpagehideAttrE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames14onpageshowAttrE=env.__ZN7WebCore9HTMLNames14onpageshowAttrE|0;
  var __ZN7WebCore9HTMLNames9alinkAttrE=env.__ZN7WebCore9HTMLNames9alinkAttrE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames10onblurAttrE=env.__ZN7WebCore9HTMLNames10onblurAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var __ZN7WebCore9HTMLNames13onstorageAttrE=env.__ZN7WebCore9HTMLNames13onstorageAttrE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore9HTMLNames16marginheightAttrE=env.__ZN7WebCore9HTMLNames16marginheightAttrE|0;
  var __ZN7WebCore9HTMLNames8textAttrE=env.__ZN7WebCore9HTMLNames8textAttrE|0;
  var __ZN7WebCore9HTMLNames8linkAttrE=env.__ZN7WebCore9HTMLNames8linkAttrE|0;
  var __ZN7WebCore9HTMLNames9vlinkAttrE=env.__ZN7WebCore9HTMLNames9vlinkAttrE|0;
  var __ZN7WebCore9HTMLNames10onloadAttrE=env.__ZN7WebCore9HTMLNames10onloadAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15HTMLBodyElementE=(H_BASE+16)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+640)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+648)|0;
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
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15HTMLBodyElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9vlinkAttrE >> 2] | 0);
 i9 = (i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8linkAttrE >> 2] | 0);
 if (i8 | (i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9alinkAttrE >> 2] | 0) | i9) {
  do {
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    i10 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if (i9) {
     __ZN7WebCore8Document14resetLinkColorEv(i10);
     break;
    }
    if (i8) {
     __ZN7WebCore8Document21resetVisitedLinkColorEv(i10);
     break;
    } else {
     __ZN7WebCore8Document20resetActiveLinkColorEv(i10);
     break;
    }
   } else {
    i10 = i1 + 20 | 0;
    if (!(__ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i5, i3 | 0, (HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) != 0) | 0)) {
     break;
    }
    i11 = HEAP32[i6 >> 2] | 0;
    if ((i11 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8linkAttrE >> 2] | 0)) {
     i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
     HEAP32[i12 + 928 >> 2] = HEAP32[i5 >> 2];
     HEAP8[i12 + 932 | 0] = 1;
     break;
    }
    i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
    i10 = HEAP32[i5 >> 2] | 0;
    if ((i11 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9vlinkAttrE >> 2] | 0)) {
     HEAP32[i12 + 936 >> 2] = i10;
     HEAP8[i12 + 940 | 0] = 1;
     break;
    } else {
     HEAP32[i12 + 944 >> 2] = i10;
     HEAP8[i12 + 948 | 0] = 1;
     break;
    }
   }
  } while (0);
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 32768);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10onloadAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames18onbeforeunloadAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 24 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onunloadAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 348 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14onpagehideAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 288 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14onpageshowAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 292 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14onpopstateAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 300 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10onblurAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11onfocusAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16onhashchangeAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 184 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onresizeAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 312 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onscrollAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 316 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames21onselectionchangeAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 332 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13onstorageAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 336 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12ononlineAttrE >> 2] | 0)) {
  i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i5, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 276 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 if ((i7 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13onofflineAttrE >> 2] | 0)) {
  i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i7, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 272 | 0, i2, i3);
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 118;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i2 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 8;
    i12 = 1;
   } else {
    i13 = i10 << 1;
    i11 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i10 : i13;
    i12 = (i10 | 0) == 0;
   }
   HEAP32[i9 >> 2] = i11;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = i11 - 1;
   HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i11 << 2) | 0;
   if (i12) {
    HEAP32[i2 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(0);
    i14 = HEAP32[i7 >> 2] | 0;
    i15 = i9;
    break;
   } else {
    _llvm_trap();
   }
  } else {
   i14 = i8;
   i15 = i2 + 8 | 0;
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 i12 = i3 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i9 = HEAP32[i11 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i16 = i9 >>> 7;
 } else {
  i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
 }
 i11 = (i16 >>> 23) + ~i16 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i10 = i16;
 i16 = 0;
 while (1) {
  i13 = i10 & i8;
  i17 = i14 + (i13 << 2) | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18;
  if ((i19 | 0) == (-1 | 0)) {
   i20 = i17;
  } else if ((i19 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i18 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
    i21 = 14;
    break;
   } else {
    i20 = i9;
   }
  }
  i18 = (i16 | 0) == 0 ? i11 : i16;
  i9 = i20;
  i10 = i18 + i13 | 0;
  i16 = i18;
 }
 if ((i21 | 0) == 14) {
  i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i16 = i1;
  HEAP32[i16 >> 2] = i17;
  HEAP32[i16 + 4 >> 2] = i21;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i9 | 0) == 0) {
  i22 = i17;
 } else {
  HEAP32[i9 >> 2] = 0;
  i17 = i2 + 16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - 1;
  i22 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = i9 | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i23 = __ZN3WTF10fastMallocEj(56) | 0;
 } else {
  i21 = HEAP32[i17 + 52 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i16 = i9 + 4 | 0;
    if ((HEAP8[i16] & 1) != 0) {
     i24 = 0;
     break;
    }
    i10 = i17 + 56 | 0;
    if ((i10 | 0) != (i9 + 14344 | 0)) {
     i24 = i10;
     break;
    }
    HEAP8[i16] = 1;
    i24 = 0;
   } else {
    i24 = i21;
   }
  } while (0);
  HEAP32[i4 >> 2] = i24;
  i23 = i17;
 }
 i17 = HEAP32[i12 >> 2] | 0;
 HEAP32[i23 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i12 = i17 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i3 + 4 | 0;
 i17 = i23 + 4 | 0;
 i24 = HEAP8[i17] & -2 | HEAP8[i12] & 1;
 HEAP8[i17] = i24;
 HEAP8[i17] = i24 & -3 | HEAP8[i12] & 2;
 HEAP32[i23 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i23 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i23 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i23 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i23 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i23 + 28 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i23 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i23 + 36 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i23 + 40 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i23 + 44 >> 2] = HEAP32[i3 + 44 >> 2];
 HEAP32[i23 + 48 >> 2] = 0;
 HEAP32[i23 + 52 >> 2] = 0;
 HEAP32[i22 >> 2] = i23;
 i23 = i2 + 12 | 0;
 i3 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i3;
 i23 = i2 + 16 | 0;
 i12 = i2 + 4 | 0;
 i24 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i3 << 1 | 0) < (i24 | 0)) {
  i25 = i22;
  i26 = i24;
 } else {
  i17 = (i24 | 0) == 0;
  if (i17) {
   i27 = 8;
  } else {
   i4 = i24 << 1;
   i27 = (i3 * 6 & -1 | 0) < (i4 | 0) ? i24 : i4;
  }
  i4 = HEAP32[i7 >> 2] | 0;
  HEAP32[i12 >> 2] = i27;
  HEAP32[i15 >> 2] = i27 - 1;
  HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i27 << 2) | 0;
  if (i17) {
   i28 = 0;
  } else {
   i17 = i6 | 0;
   i27 = 0;
   i15 = 0;
   while (1) {
    i3 = i4 + (i27 << 2) | 0;
    i21 = HEAP32[i3 >> 2] | 0;
    if ((i21 | 0) == (-1 | 0) | (i21 | 0) == 0) {
     i29 = i15;
    } else {
     __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i6, i2, i3);
     i21 = HEAP32[i17 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i3 >> 2];
     i29 = (i3 | 0) == (i22 | 0) ? i21 : i15;
    }
    i21 = i27 + 1 | 0;
    if ((i21 | 0) == (i24 | 0)) {
     i28 = i29;
     break;
    } else {
     i27 = i21;
     i15 = i29;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  i25 = i28;
  i26 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i7 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15HTMLBodyElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) != (HEAP32[__ZN7WebCore9HTMLNames14backgroundAttrE >> 2] | 0)) {
  if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames15marginwidthAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14leftmarginAttrE >> 2] | 0)) {
   i10 = i1 | 0;
   i11 = i3 | 0;
   __ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i10, i4, 93, i11);
   __ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i10, i4, 92, i11);
   STACKTOP = i5;
   return;
  }
  if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16marginheightAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13topmarginAttrE >> 2] | 0)) {
   i11 = i1 | 0;
   i10 = i3 | 0;
   __ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i11, i4, 91, i10);
   __ZN7WebCore11HTMLElement20addHTMLLengthToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i11, i4, 94, i10);
   STACKTOP = i5;
   return;
  }
  if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11bgcolorAttrE >> 2] | 0)) {
   __ZN7WebCore11HTMLElement19addHTMLColorToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i4, 23, i3 | 0);
   STACKTOP = i5;
   return;
  }
  if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8textAttrE >> 2] | 0)) {
   __ZN7WebCore11HTMLElement19addHTMLColorToStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringE(i1 | 0, i4, 1, i3 | 0);
   STACKTOP = i5;
   return;
  }
  if ((i9 | 0) != (HEAP32[__ZN7WebCore9HTMLNames16bgpropertiesAttrE >> 2] | 0)) {
   __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2, i3, i4);
   STACKTOP = i5;
   return;
  }
  if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 8 | 0) | 0)) {
   STACKTOP = i5;
   return;
  }
  __ZN7WebCore13StyledElement39addPropertyToPresentationAttributeStyleERNS_22MutableStylePropertiesENS_13CSSPropertyIDENS_10CSSValueIDE(i1 | 0, i4, 21, 328);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i6, i3 | 0);
 i3 = i6 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i6);
   i9 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringE(i9, i7 | 0);
   i10 = HEAP32[i7 >> 2] | 0;
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
   i10 = HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i12 = i10 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = i9 + 20 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   HEAP16[i8 >> 1] = ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(24) | 0) & 1) << 15 | 24;
   i11 = i8 + 4 | 0;
   HEAP32[i11 >> 2] = i9;
   __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i4, i8, 0);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i8 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore15HTMLBodyElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2);
 i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i7, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1 | 0, __ZN7WebCore9HTMLNames14backgroundAttrE) | 0);
 i1 = i6 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = HEAP32[i2 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i4, i2 | 0, i6, i5);
 if ((HEAP8[i4 + 8 | 0] & 1) != 0) {
  i5 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
  i4 = i2 + 24 | 0;
  HEAP32[i5 + 48 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 52 >> 2] = 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   HEAP32[i2 + 20 >> 2] = i5;
  } else {
   HEAP32[i6 + 52 >> 2] = i5;
  }
  HEAP32[i4 >> 2] = i5;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i6 = i2 << 12 ^ i2;
 i2 = i6 >>> 7 ^ i6;
 i6 = i2 << 2 ^ i2;
 i2 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i5;
  i10 = i4 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[HEAP32[i3 >> 2] >> 2] | 0) | 0) {
    i14 = 8;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 8) {
  HEAP32[i1 >> 2] = i10;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else if ((i14 | 0) == 6) {
  HEAP32[i1 >> 2] = (i8 | 0) != 0 ? i8 : i10;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 }
}
function __ZN7WebCore15HTMLBodyElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
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
   if ((HEAP8[H_BASE + 648 | 0] | 0) == 0) {
    i8 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i8);
    HEAP32[H_BASE + 640 >> 2] = i8;
    HEAP32[H_BASE + 648 >> 2] = 1;
    HEAP32[H_BASE + 652 >> 2] = 0;
    i9 = i8;
    break;
   } else {
    i9 = HEAP32[H_BASE + 640 >> 2] | 0;
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
 HEAP32[i6 >> 2] = H_BASE + 24;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore15HTMLBodyElement6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __Znwj(52) | 0;
 i4 = i3;
 i5 = i3;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i3 + 12 >> 2] = 8222;
 HEAP32[i3 + 16 >> 2] = 0;
 i6 = i3 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 648 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 640 >> 2] = i7;
    HEAP32[H_BASE + 648 >> 2] = 1;
    HEAP32[H_BASE + 652 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 640 >> 2] | 0;
    break;
   }
  } else {
   i8 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 0;
 HEAP32[i3 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i3 + 36 >> 2] = 0;
 HEAP32[i3 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i6 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
 HEAP32[i3 + 44 >> 2] = i6;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[i3 + 48 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 24;
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore15HTMLBodyElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 648 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 640 >> 2] = i6;
    HEAP32[H_BASE + 648 >> 2] = 1;
    HEAP32[H_BASE + 652 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 640 >> 2] | 0;
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
 HEAP32[i4 >> 2] = H_BASE + 24;
 return;
}
function __ZN7WebCore15HTMLBodyElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 648 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 640 >> 2] = i6;
    HEAP32[H_BASE + 648 >> 2] = 1;
    HEAP32[H_BASE + 652 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 640 >> 2] | 0;
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
 HEAP32[i4 >> 2] = H_BASE + 24;
 return;
}
function __ZN7WebCore15HTMLBodyElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i3, i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  return 0;
 }
 i2 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  return 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 i1 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i1 | 0) != -1) {
  __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i3, __ZN7WebCore9HTMLNames15marginwidthAttrE, i1);
 }
 i1 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i1 | 0) == -1) {
  return 0;
 }
 __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i3, __ZN7WebCore9HTMLNames16marginheightAttrE, i1);
 return 0;
}
function __ZN7WebCore15HTMLBodyElement10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i5, i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLBodyElement10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i5, i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLBodyElement9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i5, i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLBodyElement9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i5, i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLBodyElement12setScrollTopEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 63](i4, i6 | 0);
 i7 = HEAP32[i4 >> 2] | 0;
 d8 = +(i2 | 0) * +HEAPF32[i1 + 480 >> 2];
 i2 = ~~(d8 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1));
 HEAP32[i5 >> 2] = i7;
 HEAP32[i5 + 4 >> 2] = i2;
 __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i6, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15HTMLBodyElement13setScrollLeftEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 d7 = +(i2 | 0) * +HEAPF32[i1 + 480 >> 2];
 i2 = ~~(d7 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1));
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 63](i4, i6 | 0);
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i1;
 __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i6, i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15HTMLBodyElement23isPresentationAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14backgroundAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames15marginwidthAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames14leftmarginAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16marginheightAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames13topmarginAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11bgcolorAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8textAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames16bgpropertiesAttrE >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore15HTMLBodyElement12scrollHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 63](i3, i4 | 0);
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 d6 = +HEAPF32[i1 + 480 >> 2];
 d7 = d6 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 if (d7 == +1) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d7 > +1) + i4 | 0) / d7);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore15HTMLBodyElement9scrollTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 192 >> 2] & 63](i3, i4 | 0);
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 d6 = +HEAPF32[i1 + 480 >> 2];
 d7 = d6 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 if (d7 == +1) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d7 > +1) + i4 | 0) / d7);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore15HTMLBodyElement11scrollWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 63](i3, i4 | 0);
 i4 = HEAP32[i3 >> 2] | 0;
 d6 = +HEAPF32[i1 + 480 >> 2];
 d7 = d6 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 if (d7 == +1) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d7 > +1) + i4 | 0) / d7);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore15HTMLBodyElement10scrollLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0);
 i1 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 192 >> 2] & 63](i3, i4 | 0);
 i4 = HEAP32[i3 >> 2] | 0;
 d6 = +HEAPF32[i1 + 480 >> 2];
 d7 = d6 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i1);
 if (d7 == +1) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d7 > +1) + i4 | 0) / d7);
 STACKTOP = i2;
 return i5 | 0;
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
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore15HTMLBodyElement14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames14backgroundAttrE >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1 | 0, i2) | 0;
 return i3 | 0;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore15HTMLBodyElement13supportsFocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1 | 0, 0, 1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
 return i2 | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore15HTMLBodyElement7onfocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return __ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE(i2, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0) | 0;
}
function __ZN7WebCore15HTMLBodyElement7onerrorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return __ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE(i2, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0) | 0;
}
function __ZN7WebCore15HTMLBodyElement6onloadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return __ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE(i2, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0) | 0;
}
function __ZN7WebCore15HTMLBodyElement6onblurEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return __ZN7WebCore8Document31getWindowAttributeEventListenerERKN3WTF12AtomicStringE(i2, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0) | 0;
}
function vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
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
function iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
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
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
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
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
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
function vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15accessKeyActionEb(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
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
function vii___ZNK7WebCore11HTMLElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement5titleEv(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement11virtualFormEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement9draggableEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement8tabIndexEv(i1 | 0) | 0;
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
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
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
function __ZN7WebCore15HTMLBodyElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore15HTMLBodyElementD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore15HTMLBodyElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
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
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore15HTMLBodyElementD2Ev,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper
  ,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,__ZN7WebCore15HTMLBodyElementD0Ev,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore15HTMLBodyElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b2,vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,__ZN7WebCore15HTMLBodyElement10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,__ZN7WebCore15HTMLBodyElement9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,__ZN7WebCore15HTMLBodyElement9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper
  ,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,__ZN7WebCore15HTMLBodyElement10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,__ZN7WebCore15HTMLBodyElement13setScrollLeftEi,b2,__ZN7WebCore15HTMLBodyElement12setScrollTopEi,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZN7WebCore15HTMLBodyElement7onfocusEv,b3,__ZN7WebCore15HTMLBodyElement7onerrorEv,b3,__ZN7WebCore15HTMLBodyElement6onblurEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper
  ,b3,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZN7WebCore11HTMLElement15asFormNamedItemEv,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv
  ,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore7Element9isInRangeEv,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper,b3,__ZN7WebCore15HTMLBodyElement6onloadEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZN7WebCore15HTMLBodyElement12scrollHeightEv
  ,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,__ZN7WebCore15HTMLBodyElement9scrollTopEv,b3,ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper
  ,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,__ZN7WebCore15HTMLBodyElement10scrollLeftEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,__ZNK7WebCore15HTMLBodyElement13supportsFocusEv,b3,__ZN7WebCore15HTMLBodyElement11scrollWidthEv,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper,b3,__ZNK7WebCore11HTMLElement11isLabelableEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore15HTMLBodyElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b4,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b4,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b4,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b4,__ZN7WebCore15HTMLBodyElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b5,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b5,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b5,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b5,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b5,b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b6,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b6,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b6,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b6,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b6,iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b6,__ZNK7WebCore15HTMLBodyElement14isURLAttributeERKNS_9AttributeE,b6,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b6,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b6,__ZN7WebCore15HTMLBodyElement12insertedIntoERNS_13ContainerNodeE,b6,__ZNK7WebCore15HTMLBodyElement23isPresentationAttributeERKNS_13QualifiedNameE,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore15HTMLBodyElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE,b7,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames21onselectionchangeAttrE": __ZN7WebCore9HTMLNames21onselectionchangeAttrE, "__ZN7WebCore9HTMLNames14leftmarginAttrE": __ZN7WebCore9HTMLNames14leftmarginAttrE, "__ZN7WebCore9HTMLNames18onbeforeunloadAttrE": __ZN7WebCore9HTMLNames18onbeforeunloadAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames12ononlineAttrE": __ZN7WebCore9HTMLNames12ononlineAttrE, "__ZN7WebCore9HTMLNames12onunloadAttrE": __ZN7WebCore9HTMLNames12onunloadAttrE, "__ZN7WebCore9HTMLNames14onpopstateAttrE": __ZN7WebCore9HTMLNames14onpopstateAttrE, "__ZN7WebCore9HTMLNames12onresizeAttrE": __ZN7WebCore9HTMLNames12onresizeAttrE, "__ZN7WebCore9HTMLNames15marginwidthAttrE": __ZN7WebCore9HTMLNames15marginwidthAttrE, "__ZN7WebCore9HTMLNames11onfocusAttrE": __ZN7WebCore9HTMLNames11onfocusAttrE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore9HTMLNames14backgroundAttrE": __ZN7WebCore9HTMLNames14backgroundAttrE, "__ZN7WebCore9HTMLNames16onhashchangeAttrE": __ZN7WebCore9HTMLNames16onhashchangeAttrE, "__ZN7WebCore9HTMLNames12onscrollAttrE": __ZN7WebCore9HTMLNames12onscrollAttrE, "__ZN7WebCore9HTMLNames11bgcolorAttrE": __ZN7WebCore9HTMLNames11bgcolorAttrE, "__ZN7WebCore9HTMLNames13onofflineAttrE": __ZN7WebCore9HTMLNames13onofflineAttrE, "__ZN7WebCore9HTMLNames13topmarginAttrE": __ZN7WebCore9HTMLNames13topmarginAttrE, "__ZN7WebCore9HTMLNames16bgpropertiesAttrE": __ZN7WebCore9HTMLNames16bgpropertiesAttrE, "__ZN7WebCore9HTMLNames14onpagehideAttrE": __ZN7WebCore9HTMLNames14onpagehideAttrE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames14onpageshowAttrE": __ZN7WebCore9HTMLNames14onpageshowAttrE, "__ZN7WebCore9HTMLNames9alinkAttrE": __ZN7WebCore9HTMLNames9alinkAttrE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames10onblurAttrE": __ZN7WebCore9HTMLNames10onblurAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE, "__ZN7WebCore9HTMLNames13onstorageAttrE": __ZN7WebCore9HTMLNames13onstorageAttrE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore9HTMLNames16marginheightAttrE": __ZN7WebCore9HTMLNames16marginheightAttrE, "__ZN7WebCore9HTMLNames8textAttrE": __ZN7WebCore9HTMLNames8textAttrE, "__ZN7WebCore9HTMLNames8linkAttrE": __ZN7WebCore9HTMLNames8linkAttrE, "__ZN7WebCore9HTMLNames9vlinkAttrE": __ZN7WebCore9HTMLNames9vlinkAttrE, "__ZN7WebCore9HTMLNames10onloadAttrE": __ZN7WebCore9HTMLNames10onloadAttrE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15HTMLBodyElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore15HTMLBodyElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore15HTMLBodyElement9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore15HTMLBodyElement9scrollTopEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore15HTMLBodyElement6onloadEv","__ZN7WebCore15HTMLBodyElement13setScrollLeftEi","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZN7WebCore15HTMLBodyElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore15HTMLBodyElement7onfocusEv","__ZN7WebCore15HTMLBodyElement10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore15HTMLBodyElement12setScrollTopEi","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZN7WebCore15HTMLBodyElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore15HTMLBodyElement12scrollHeightEv","_memset","__ZNK7WebCore4Node22scriptExecutionContextEv","_strlen","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore15HTMLBodyElement7onerrorEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore15HTMLBodyElement10scrollLeftEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore15HTMLBodyElement6onblurEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore15HTMLBodyElement13supportsFocusEv","__ZN7WebCore15HTMLBodyElementD0Ev","__ZN7WebCore15HTMLBodyElementD2Ev","__ZN7WebCore15HTMLBodyElement11scrollWidthEv","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore15HTMLBodyElement6createERNS_8DocumentE","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore15HTMLBodyElement12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZNK7WebCore15HTMLBodyElement23isPresentationAttributeERKNS_13QualifiedNameE","_memcpy","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZNK7WebCore7Element9isInRangeEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore15HTMLBodyElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore15HTMLBodyElement9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore15HTMLBodyElement10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZNK7WebCore15HTMLBodyElement14isURLAttributeERKNS_9AttributeE","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

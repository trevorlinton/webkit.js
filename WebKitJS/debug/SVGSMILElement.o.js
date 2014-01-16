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
H_BASE = parentModule["_malloc"](992 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 992;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14SVGSMILElement9ConditionC1ENS1_4TypeENS0_10BeginOrEndERKN3WTF6StringES7_NS_8SMILTimeEi;
var __ZN7WebCore14SVGSMILElementD1Ev;
/* memory initializer */ allocate([119,104,101,110,78,111,116,65,99,116,105,118,101,0,0,0,110,101,118,101,114,0,0,0,97,99,99,101,115,115,107,101,121,40,0,0,0,0,0,0,101,110,100,0,0,0,0,0,98,101,103,105,110,0,0,0,114,101,112,101,97,116,0,0,114,101,112,101,97,116,40,0,105,110,100,101,102,105,110,105,116,101,0,0,0,0,0,0,102,114,101,101,122,101,0,0,109,115,0,0,0,0,0,0,109,105,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_vifii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_vifii"](index,a1,a2,a3,a4);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN7WebCore8SVGNames6setTagE=env.__ZN7WebCore8SVGNames6setTagE|0;
  var __ZN7WebCore8SVGNames7maxAttrE=env.__ZN7WebCore8SVGNames7maxAttrE|0;
  var __ZN7WebCore8SVGNames17attributeNameAttrE=env.__ZN7WebCore8SVGNames17attributeNameAttrE|0;
  var __ZN7WebCore8SVGNames7minAttrE=env.__ZN7WebCore8SVGNames7minAttrE|0;
  var __ZN7WebCore8SVGNames13repeatDurAttrE=env.__ZN7WebCore8SVGNames13repeatDurAttrE|0;
  var __ZN7WebCore8SMILTime15indefiniteValueE=env.__ZN7WebCore8SMILTime15indefiniteValueE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames15repeatCountAttrE=env.__ZN7WebCore8SVGNames15repeatCountAttrE|0;
  var __ZN7WebCore8SVGNames9beginAttrE=env.__ZN7WebCore8SVGNames9beginAttrE|0;
  var __ZN7WebCore8SMILTime15unresolvedValueE=env.__ZN7WebCore8SMILTime15unresolvedValueE|0;
  var __ZN7WebCore8SVGNames11restartAttrE=env.__ZN7WebCore8SVGNames11restartAttrE|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore8SVGNames7endAttrE=env.__ZN7WebCore8SVGNames7endAttrE|0;
  var __ZN7WebCore10XLinkNames8hrefAttrE=env.__ZN7WebCore10XLinkNames8hrefAttrE|0;
  var __ZN7WebCore8SVGNames7durAttrE=env.__ZN7WebCore8SVGNames7durAttrE|0;
  var __ZN7WebCore8SVGNames8fillAttrE=env.__ZN7WebCore8SVGNames8fillAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore14SVGSMILElementE=(H_BASE+168)|0;
  var __ZTVN7WebCore22ConditionEventListenerE=(H_BASE+120)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_vifii=env.invoke_vifii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _llvm_trap=env._llvm_trap;
  var _floor=env._floor;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SVGSMILElement14parseConditionERKN3WTF6StringENS0_10BeginOrEndE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 __ZNK3WTF6String15stripWhiteSpaceEv(i5, i2);
 i2 = i5 | 0;
 i22 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i22 | 0) == 0) {
   i23 = 0;
   i24 = 16;
  } else {
   i25 = (HEAP32[i22 + 16 >> 2] & 32 | 0) == 0;
   L3 : do {
    if (i25) {
     i26 = HEAP32[i22 + 8 >> 2] | 0;
     i27 = HEAP32[i22 + 4 >> 2] | 0;
     i28 = i26;
     i29 = 0;
     while (1) {
      if (i29 >>> 0 >= i27 >>> 0) {
       i30 = i26;
       i31 = i27;
       i32 = i28;
       i24 = 11;
       break L3;
      }
      if ((HEAP16[i26 + (i29 << 1) >> 1] | 0) == 43) {
       i33 = i29;
       i34 = i26;
       i35 = i27;
       i36 = i28;
       i24 = 9;
       break;
      } else {
       i29 = i29 + 1 | 0;
      }
     }
    } else {
     i29 = HEAP32[i22 + 8 >> 2] | 0;
     i28 = HEAP32[i22 + 4 >> 2] | 0;
     i27 = i29;
     i26 = 0;
     while (1) {
      if (i26 >>> 0 >= i28 >>> 0) {
       i30 = i27;
       i31 = i28;
       i32 = i29;
       i24 = 11;
       break L3;
      }
      if ((HEAP8[i29 + i26 | 0] | 0) == 43) {
       i33 = i26;
       i34 = i27;
       i35 = i28;
       i36 = i29;
       i24 = 9;
       break;
      } else {
       i26 = i26 + 1 | 0;
      }
     }
    }
   } while (0);
   do {
    if ((i24 | 0) == 9) {
     if ((i33 | 0) == -1) {
      i30 = i34;
      i31 = i35;
      i32 = i36;
      i24 = 11;
      break;
     }
     i26 = i7 | 0;
     HEAP32[i26 >> 2] = 0;
     i29 = i8 | 0;
     HEAPF64[i29 >> 3] = +0;
     d37 = +1;
     i38 = i33;
     i39 = i26;
     i40 = i29;
    }
   } while (0);
   if ((i24 | 0) == 11) {
    if (i25) {
     i29 = 0;
     while (1) {
      if (i29 >>> 0 >= i31 >>> 0) {
       i23 = i22;
       i24 = 16;
       break L1;
      }
      if ((HEAP16[i30 + (i29 << 1) >> 1] | 0) == 45) {
       i41 = i29;
       break;
      } else {
       i29 = i29 + 1 | 0;
      }
     }
    } else {
     i29 = 0;
     while (1) {
      if (i29 >>> 0 >= i31 >>> 0) {
       i23 = i22;
       i24 = 16;
       break L1;
      }
      if ((HEAP8[i32 + i29 | 0] | 0) == 45) {
       i41 = i29;
       break;
      } else {
       i29 = i29 + 1 | 0;
      }
     }
    }
    i29 = (i41 | 0) == -1;
    i25 = i7 | 0;
    HEAP32[i25 >> 2] = 0;
    i26 = i8 | 0;
    HEAPF64[i26 >> 3] = +0;
    if (i29) {
     i42 = i22;
     i43 = i25;
     i44 = i26;
     i24 = 18;
     break;
    } else {
     d37 = i29 ? +1 : +-1;
     i38 = i41;
     i39 = i25;
     i40 = i26;
    }
   }
   __ZNK3WTF6String9substringEjj(i10, i5, 0, i38);
   __ZNK3WTF6String15stripWhiteSpaceEv(i9, i10);
   i26 = i9 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i29 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = i25;
   do {
    if ((i29 | 0) != 0) {
     i25 = i29 | 0;
     i28 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i25 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 | 0;
     i25 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i28 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i26 = i29 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i25;
      break;
     }
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i12, i5, i38 + 1 | 0, -1);
   __ZNK3WTF6String15stripWhiteSpaceEv(i11, i12);
   i29 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i25 = i29 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   __ZN7WebCore14SVGSMILElement16parseOffsetValueERKN3WTF6StringE(i13, i11);
   d45 = +HEAPF64[i13 >> 3];
   HEAPF64[i40 >> 3] = d45;
   if (d45 == +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3]) {
    i46 = 1;
   } else {
    HEAPF64[i15 >> 3] = d37;
    __ZN7WebCoremlERKNS_8SMILTimeES2_(i14, i8, i15);
    HEAPF64[i40 >> 3] = +HEAPF64[i14 >> 3];
    i46 = 0;
   }
   i29 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i26 = i29 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i25;
      break;
     }
    }
   } while (0);
   if ((i46 | 0) == 0) {
    i47 = i39;
    i48 = i40;
    i24 = 47;
   } else {
    i49 = 0;
    i50 = i39;
   }
  }
 } while (0);
 if ((i24 | 0) == 16) {
  i39 = i7 | 0;
  HEAP32[i39 >> 2] = 0;
  i40 = i8 | 0;
  HEAPF64[i40 >> 3] = +0;
  i42 = i23;
  i43 = i39;
  i44 = i40;
  i24 = 18;
 }
 do {
  if ((i24 | 0) == 18) {
   if ((i42 | 0) == 0) {
    HEAP32[i43 >> 2] = i42;
    i47 = i43;
    i48 = i44;
    i24 = 47;
    break;
   }
   i40 = i42 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
   i40 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i42;
   if ((i40 | 0) == 0) {
    i47 = i43;
    i48 = i44;
    i24 = 47;
    break;
   }
   i39 = i40 | 0;
   i23 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    i47 = i43;
    i48 = i44;
    i24 = 47;
    break;
   } else {
    HEAP32[i39 >> 2] = i23;
    i47 = i43;
    i48 = i44;
    i24 = 47;
    break;
   }
  }
 } while (0);
 do {
  if ((i24 | 0) == 47) {
   i44 = HEAP32[i47 >> 2] | 0;
   if ((i44 | 0) == 0) {
    i49 = 0;
    i50 = i47;
    break;
   }
   i43 = HEAP32[i44 + 4 >> 2] | 0;
   if ((i43 | 0) == 0) {
    i49 = 0;
    i50 = i47;
    break;
   }
   L74 : do {
    if ((HEAP32[i44 + 16 >> 2] & 32 | 0) == 0) {
     i42 = HEAP32[i44 + 8 >> 2] | 0;
     i23 = 0;
     while (1) {
      if (i23 >>> 0 >= i43 >>> 0) {
       i24 = 56;
       break L74;
      }
      if ((HEAP16[i42 + (i23 << 1) >> 1] | 0) == 46) {
       i51 = i23;
       i24 = 57;
       break;
      } else {
       i23 = i23 + 1 | 0;
      }
     }
    } else {
     i23 = HEAP32[i44 + 8 >> 2] | 0;
     i42 = 0;
     while (1) {
      if (i42 >>> 0 >= i43 >>> 0) {
       i24 = 56;
       break L74;
      }
      if ((HEAP8[i23 + i42 | 0] | 0) == 46) {
       i51 = i42;
       i24 = 57;
       break;
      } else {
       i42 = i42 + 1 | 0;
      }
     }
    }
   } while (0);
   do {
    if ((i24 | 0) == 56) {
     i43 = i16 | 0;
     HEAP32[i43 >> 2] = 0;
     i52 = i43;
     i24 = 58;
    } else if ((i24 | 0) == 57) {
     i43 = i16 | 0;
     HEAP32[i43 >> 2] = 0;
     if ((i51 | 0) == -1) {
      i52 = i43;
      i24 = 58;
      break;
     }
     __ZNK3WTF6String9substringEjj(i17, i7, 0, i51);
     i44 = i17 | 0;
     i42 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     __ZNK3WTF6String9substringEjj(i18, i7, i51 + 1 | 0, -1);
     i44 = i18 | 0;
     i23 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     i39 = HEAP32[i43 >> 2] | 0;
     HEAP32[i43 >> 2] = i23;
     do {
      if ((i39 | 0) != 0) {
       i23 = i39 | 0;
       i40 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i40 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i39);
        break;
       } else {
        HEAP32[i23 >> 2] = i40;
        break;
       }
      }
     } while (0);
     i39 = HEAP32[i44 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i53 = i42;
      i54 = i43;
      break;
     }
     i40 = i39 | 0;
     i23 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      i53 = i42;
      i54 = i43;
      break;
     } else {
      HEAP32[i40 >> 2] = i23;
      i53 = i42;
      i54 = i43;
      break;
     }
    }
   } while (0);
   do {
    if ((i24 | 0) == 58) {
     i23 = HEAP32[i47 >> 2] | 0;
     if ((i23 | 0) == 0) {
      HEAP32[i52 >> 2] = i23;
      i53 = 0;
      i54 = i52;
      break;
     }
     i40 = i23 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     i40 = HEAP32[i52 >> 2] | 0;
     HEAP32[i52 >> 2] = i23;
     if ((i40 | 0) == 0) {
      i53 = 0;
      i54 = i52;
      break;
     }
     i23 = i40 | 0;
     i39 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      i53 = 0;
      i54 = i52;
      break;
     } else {
      HEAP32[i23 >> 2] = i39;
      i53 = 0;
      i54 = i52;
      break;
     }
    }
   } while (0);
   i39 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i39 | 0) == 0) {
     i55 = 0;
    } else {
     L109 : do {
      if ((HEAP32[i39 + 4 >> 2] | 0) == 0) {
       i56 = 0;
      } else {
       do {
        if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i39, H_BASE + 72 | 0, 7, 1) | 0) {
         i23 = HEAP32[i54 >> 2] | 0;
         if ((i23 | 0) == 0) {
          i24 = 92;
          break;
         }
         if (!(__ZNK3WTF10StringImpl8endsWithEt(i23, 41) | 0)) {
          i24 = 92;
          break;
         }
         i23 = HEAP32[i54 >> 2] | 0;
         if ((i23 | 0) == 0) {
          i57 = -8;
         } else {
          i57 = (HEAP32[i23 + 4 >> 2] | 0) - 8 | 0;
         }
         __ZNK3WTF6String9substringEjj(i19, i16, 7, i57);
         i23 = __ZNK3WTF6String12toUIntStrictEPbi(i19, i6, 10) | 0;
         i40 = HEAP32[i19 >> 2] | 0;
         do {
          if ((i40 | 0) != 0) {
           i8 = i40 | 0;
           i46 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
           if ((i46 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i40);
            break;
           } else {
            HEAP32[i8 >> 2] = i46;
            break;
           }
          }
         } while (0);
         if ((HEAP8[i6] & 1) == 0) {
          i56 = 0;
          break L109;
         }
         __ZN3WTF6StringC1EPKc(i20, H_BASE + 64 | 0);
         i40 = i20 | 0;
         i46 = HEAP32[i40 >> 2] | 0;
         HEAP32[i40 >> 2] = 0;
         i8 = HEAP32[i54 >> 2] | 0;
         HEAP32[i54 >> 2] = i46;
         do {
          if ((i8 | 0) != 0) {
           i46 = i8 | 0;
           i11 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
           if ((i11 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i8);
            break;
           } else {
            HEAP32[i46 >> 2] = i11;
            break;
           }
          }
         } while (0);
         i8 = HEAP32[i40 >> 2] | 0;
         if ((i8 | 0) == 0) {
          i58 = i23;
          i59 = 0;
          break;
         }
         i11 = i8 | 0;
         i46 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
         if ((i46 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i8);
          i58 = i23;
          i59 = 0;
          break;
         } else {
          HEAP32[i11 >> 2] = i46;
          i58 = i23;
          i59 = 0;
          break;
         }
        } else {
         i24 = 92;
        }
       } while (0);
       L135 : do {
        if ((i24 | 0) == 92) {
         do {
          if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i54 >> 2] | 0, H_BASE + 56 | 0) | 0)) {
           if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i54 >> 2] | 0, H_BASE + 48 | 0) | 0) {
            break;
           }
           i46 = HEAP32[i54 >> 2] | 0;
           if ((i46 | 0) == 0) {
            i58 = -1;
            i59 = 0;
            break L135;
           }
           i11 = __ZNK3WTF10StringImpl10startsWithEPKcjb(i46, H_BASE + 32 | 0, 10, 1) | 0;
           i58 = -1;
           i59 = i11 ? 2 : 0;
           break L135;
          }
         } while (0);
         if ((i53 | 0) == 0) {
          i56 = 0;
          break L109;
         }
         if ((HEAP32[i53 + 4 >> 2] | 0) == 0) {
          i56 = 0;
          break L109;
         } else {
          i58 = -1;
          i59 = 1;
         }
        }
       } while (0);
       i23 = i1 + 100 | 0;
       d37 = +HEAPF64[i48 >> 3];
       i40 = i21 | 0;
       HEAP32[i40 >> 2] = i59;
       i11 = i21 + 4 | 0;
       HEAP32[i11 >> 2] = i3;
       i46 = i21 + 8 | 0;
       HEAP32[i46 >> 2] = i53;
       if ((i53 | 0) != 0) {
        i8 = i53 | 0;
        HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
       }
       i8 = i21 + 12 | 0;
       i14 = HEAP32[i54 >> 2] | 0;
       HEAP32[i8 >> 2] = i14;
       if ((i14 | 0) != 0) {
        i15 = i14 | 0;
        HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
       }
       i15 = i21 + 16 | 0;
       HEAPF64[i15 >> 3] = d37;
       i14 = i21 + 24 | 0;
       HEAP32[i14 >> 2] = i58;
       i13 = i21 + 28 | 0;
       HEAP32[i13 >> 2] = 0;
       i12 = i21 + 32 | 0;
       HEAP32[i12 >> 2] = 0;
       i38 = i1 + 108 | 0;
       i5 = HEAP32[i38 >> 2] | 0;
       if ((i5 | 0) == (HEAP32[i1 + 104 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i23, i21);
       } else {
        i10 = HEAP32[i23 >> 2] | 0;
        HEAP32[i10 + (i5 * 40 & -1) >> 2] = HEAP32[i40 >> 2];
        HEAP32[i10 + (i5 * 40 & -1) + 4 >> 2] = HEAP32[i11 >> 2];
        i11 = HEAP32[i46 >> 2] | 0;
        HEAP32[i10 + (i5 * 40 & -1) + 8 >> 2] = i11;
        if ((i11 | 0) != 0) {
         i40 = i11 | 0;
         HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
        }
        i40 = HEAP32[i8 >> 2] | 0;
        HEAP32[i10 + (i5 * 40 & -1) + 12 >> 2] = i40;
        if ((i40 | 0) != 0) {
         i11 = i40 | 0;
         HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
        }
        HEAPF64[i10 + (i5 * 40 & -1) + 16 >> 3] = +HEAPF64[i15 >> 3];
        HEAP32[i10 + (i5 * 40 & -1) + 24 >> 2] = HEAP32[i14 >> 2];
        i14 = HEAP32[i13 >> 2] | 0;
        HEAP32[i10 + (i5 * 40 & -1) + 28 >> 2] = i14;
        if ((i14 | 0) != 0) {
         i15 = i14 + 8 | 0;
         HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
        }
        i15 = HEAP32[i12 >> 2] | 0;
        HEAP32[i10 + (i5 * 40 & -1) + 32 >> 2] = i15;
        if ((i15 | 0) != 0) {
         i5 = i15 + 4 | 0;
         HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
        }
        HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
       }
       i38 = HEAP32[i12 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i12 = i38 + 4 | 0;
         i5 = i12 | 0;
         i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
         if ((i15 | 0) != 0) {
          HEAP32[i5 >> 2] = i15;
          break;
         }
         i15 = i12 - 4 | 0;
         if ((i15 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
        }
       } while (0);
       i38 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i15 = i38 + 8 | 0;
         i12 = i15 | 0;
         i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
         HEAP32[i12 >> 2] = i5;
         if ((i5 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
        }
       } while (0);
       i38 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i13 = i38 | 0;
         i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
         if ((i15 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i38);
          break;
         } else {
          HEAP32[i13 >> 2] = i15;
          break;
         }
        }
       } while (0);
       i38 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i38 | 0) != 0) {
         i8 = i38 | 0;
         i15 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
         if ((i15 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i38);
          break;
         } else {
          HEAP32[i8 >> 2] = i15;
          break;
         }
        }
       } while (0);
       if (!((i59 | 0) == 0 & (i3 | 0) == 1)) {
        i56 = 1;
        break;
       }
       HEAP8[i1 + 113 | 0] = 1;
       i56 = 1;
      }
     } while (0);
     i43 = HEAP32[i54 >> 2] | 0;
     if ((i43 | 0) == 0) {
      i55 = i56;
      break;
     }
     i42 = i43 | 0;
     i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i43);
      i55 = i56;
      break;
     } else {
      HEAP32[i42 >> 2] = i44;
      i55 = i56;
      break;
     }
    }
   } while (0);
   if ((i53 | 0) == 0) {
    i49 = i55;
    i50 = i47;
    break;
   }
   i39 = i53 | 0;
   i44 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i44 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    i49 = i55;
    i50 = i47;
    break;
   } else {
    HEAP32[i39 >> 2] = i44;
    i49 = i55;
    i50 = i47;
    break;
   }
  }
 } while (0);
 i47 = HEAP32[i50 >> 2] | 0;
 do {
  if ((i47 | 0) != 0) {
   i50 = i47 | 0;
   i55 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
   if ((i55 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i47);
    break;
   } else {
    HEAP32[i50 >> 2] = i55;
    break;
   }
  }
 } while (0);
 i47 = HEAP32[i2 >> 2] | 0;
 if ((i47 | 0) == 0) {
  STACKTOP = i4;
  return i49 | 0;
 }
 i2 = i47 | 0;
 i55 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i55 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i47);
  STACKTOP = i4;
  return i49 | 0;
 } else {
  HEAP32[i2 >> 2] = i55;
  STACKTOP = i4;
  return i49 | 0;
 }
 return 0;
}
function __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, i48 = 0, d49 = +0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 16 | 0;
  i6 = i5 | 0;
  i7 = i1 - 16 + 8 | 0;
  i8 = i4;
  L3 : while (1) {
   i9 = i8;
   i10 = i2 - i9 | 0;
   i11 = i10 >> 4;
   switch (i11 | 0) {
   case 4:
    {
     i12 = 14;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i12 = 72;
     break L1;
     break;
    }
   case 3:
    {
     i12 = 6;
     break L1;
     break;
    }
   case 5:
    {
     i12 = 15;
     break L1;
     break;
    }
   case 2:
    {
     i12 = 4;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i10 | 0) < 112) {
    i12 = 21;
    break L1;
   }
   i13 = (i11 | 0) / 2 & -1;
   i14 = i8 + (i13 << 4) | 0;
   do {
    if ((i10 | 0) > 15984) {
     i15 = (i11 | 0) / 4 & -1;
     i16 = i8 + (i15 << 4) | 0;
     i17 = i15 + i13 | 0;
     i18 = i8 + (i17 << 4) | 0;
     i19 = __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i8, i16, i14, i18, 0) | 0;
     d20 = +HEAPF64[i6 >> 3];
     i21 = i18 | 0;
     d22 = +HEAPF64[i21 >> 3];
     if (d20 >= d22) {
      i23 = i19;
      i24 = i14 | 0;
      break;
     }
     i18 = i8 + (i17 << 4) + 8 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAPF64[i21 >> 3] = d20;
     HEAP32[i18 >> 2] = HEAP32[i7 >> 2];
     HEAPF64[i6 >> 3] = d22;
     HEAP32[i7 >> 2] = i17;
     d22 = +HEAPF64[i21 >> 3];
     i17 = i14 | 0;
     d20 = +HEAPF64[i17 >> 3];
     if (d22 >= d20) {
      i23 = i19 + 1 | 0;
      i24 = i17;
      break;
     }
     i25 = i8 + (i13 << 4) + 8 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     HEAPF64[i17 >> 3] = d22;
     HEAP32[i25 >> 2] = HEAP32[i18 >> 2];
     HEAPF64[i21 >> 3] = d20;
     HEAP32[i18 >> 2] = i26;
     d20 = +HEAPF64[i17 >> 3];
     i26 = i16 | 0;
     d22 = +HEAPF64[i26 >> 3];
     if (d20 >= d22) {
      i23 = i19 + 2 | 0;
      i24 = i17;
      break;
     }
     i16 = i8 + (i15 << 4) + 8 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     HEAPF64[i26 >> 3] = d20;
     HEAP32[i16 >> 2] = HEAP32[i25 >> 2];
     HEAPF64[i17 >> 3] = d22;
     HEAP32[i25 >> 2] = i15;
     d22 = +HEAPF64[i26 >> 3];
     i15 = i8 | 0;
     d20 = +HEAPF64[i15 >> 3];
     if (d22 >= d20) {
      i23 = i19 + 3 | 0;
      i24 = i17;
      break;
     }
     i25 = i8 + 8 | 0;
     i18 = HEAP32[i25 >> 2] | 0;
     HEAPF64[i15 >> 3] = d22;
     HEAP32[i25 >> 2] = HEAP32[i16 >> 2];
     HEAPF64[i26 >> 3] = d20;
     HEAP32[i16 >> 2] = i18;
     i23 = i19 + 4 | 0;
     i24 = i17;
    } else {
     i17 = i14 | 0;
     d20 = +HEAPF64[i17 >> 3];
     i19 = i8 | 0;
     d22 = +HEAPF64[i19 >> 3];
     d27 = +HEAPF64[i6 >> 3];
     i18 = d27 < d20;
     if (d20 >= d22) {
      if (!i18) {
       i23 = 0;
       i24 = i17;
       break;
      }
      i16 = i8 + (i13 << 4) + 8 | 0;
      i26 = HEAP32[i16 >> 2] | 0;
      HEAPF64[i17 >> 3] = d27;
      HEAP32[i16 >> 2] = HEAP32[i7 >> 2];
      HEAPF64[i6 >> 3] = d20;
      HEAP32[i7 >> 2] = i26;
      d28 = +HEAPF64[i17 >> 3];
      d29 = +HEAPF64[i19 >> 3];
      if (d28 >= d29) {
       i23 = 1;
       i24 = i17;
       break;
      }
      i26 = i8 + 8 | 0;
      i25 = HEAP32[i26 >> 2] | 0;
      HEAPF64[i19 >> 3] = d28;
      HEAP32[i26 >> 2] = HEAP32[i16 >> 2];
      HEAPF64[i17 >> 3] = d29;
      HEAP32[i16 >> 2] = i25;
      i23 = 2;
      i24 = i17;
      break;
     }
     i25 = i8 + 8 | 0;
     i16 = HEAP32[i25 >> 2] | 0;
     if (i18) {
      HEAPF64[i19 >> 3] = d27;
      HEAP32[i25 >> 2] = HEAP32[i7 >> 2];
      HEAPF64[i6 >> 3] = d22;
      HEAP32[i7 >> 2] = i16;
      i23 = 1;
      i24 = i17;
      break;
     }
     HEAPF64[i19 >> 3] = d20;
     i19 = i8 + (i13 << 4) + 8 | 0;
     HEAP32[i25 >> 2] = HEAP32[i19 >> 2];
     HEAPF64[i17 >> 3] = d22;
     HEAP32[i19 >> 2] = i16;
     d20 = +HEAPF64[i6 >> 3];
     if (d20 >= d22) {
      i23 = 1;
      i24 = i17;
      break;
     }
     HEAPF64[i17 >> 3] = d20;
     HEAP32[i19 >> 2] = HEAP32[i7 >> 2];
     HEAPF64[i6 >> 3] = d22;
     HEAP32[i7 >> 2] = i16;
     i23 = 2;
     i24 = i17;
    }
   } while (0);
   i13 = i8 | 0;
   d22 = +HEAPF64[i13 >> 3];
   d20 = +HEAPF64[i24 >> 3];
   do {
    if (d22 < d20) {
     i30 = i5;
     i31 = i23;
    } else {
     i11 = i5;
     while (1) {
      i32 = i11 - 16 | 0;
      if ((i8 | 0) == (i32 | 0)) {
       break;
      }
      i33 = i32 | 0;
      d34 = +HEAPF64[i33 >> 3];
      if (d34 < d20) {
       i12 = 52;
       break;
      } else {
       i11 = i32;
      }
     }
     if ((i12 | 0) == 52) {
      i12 = 0;
      i10 = i8 + 8 | 0;
      i17 = HEAP32[i10 >> 2] | 0;
      HEAPF64[i13 >> 3] = d34;
      i16 = i11 - 16 + 8 | 0;
      HEAP32[i10 >> 2] = HEAP32[i16 >> 2];
      HEAPF64[i33 >> 3] = d22;
      HEAP32[i16 >> 2] = i17;
      i30 = i32;
      i31 = i23 + 1 | 0;
      break;
     }
     i17 = i8 + 16 | 0;
     d27 = +HEAPF64[i6 >> 3];
     if (d22 < d27) {
      i35 = i17;
     } else {
      i16 = i17;
      while (1) {
       if ((i16 | 0) == (i5 | 0)) {
        i12 = 85;
        break L1;
       }
       i36 = i16 | 0;
       d37 = +HEAPF64[i36 >> 3];
       i38 = i16 + 16 | 0;
       if (d22 < d37) {
        break;
       } else {
        i16 = i38;
       }
      }
      i11 = i16 + 8 | 0;
      i17 = HEAP32[i11 >> 2] | 0;
      HEAPF64[i36 >> 3] = d27;
      HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
      HEAPF64[i6 >> 3] = d37;
      HEAP32[i7 >> 2] = i17;
      i35 = i38;
     }
     if ((i35 | 0) == (i5 | 0)) {
      i12 = 86;
      break L1;
     } else {
      i39 = i5;
      i40 = i35;
     }
     while (1) {
      d29 = +HEAPF64[i13 >> 3];
      i17 = i40;
      while (1) {
       i41 = i17 | 0;
       d42 = +HEAPF64[i41 >> 3];
       i43 = i17 + 16 | 0;
       if (d29 < d42) {
        i44 = i39;
        break;
       } else {
        i17 = i43;
       }
      }
      while (1) {
       i45 = i44 - 16 | 0;
       i46 = i45 | 0;
       d47 = +HEAPF64[i46 >> 3];
       if (d29 < d47) {
        i44 = i45;
       } else {
        break;
       }
      }
      if (i17 >>> 0 >= i45 >>> 0) {
       i8 = i17;
       continue L3;
      }
      i11 = i17 + 8 | 0;
      i10 = HEAP32[i11 >> 2] | 0;
      HEAPF64[i41 >> 3] = d47;
      i19 = i44 - 16 + 8 | 0;
      HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
      HEAPF64[i46 >> 3] = d42;
      HEAP32[i19 >> 2] = i10;
      i39 = i45;
      i40 = i43;
     }
    }
   } while (0);
   i13 = i8 + 16 | 0;
   L52 : do {
    if (i13 >>> 0 < i30 >>> 0) {
     i16 = i30;
     i10 = i13;
     i19 = i31;
     i11 = i14;
     while (1) {
      d22 = +HEAPF64[i11 >> 3];
      i25 = i10;
      while (1) {
       i48 = i25 | 0;
       d49 = +HEAPF64[i48 >> 3];
       i50 = i25 + 16 | 0;
       if (d49 < d22) {
        i25 = i50;
       } else {
        i51 = i16;
        break;
       }
      }
      while (1) {
       i52 = i51 - 16 | 0;
       i53 = i52 | 0;
       d54 = +HEAPF64[i53 >> 3];
       if (d54 < d22) {
        break;
       } else {
        i51 = i52;
       }
      }
      if (i25 >>> 0 > i52 >>> 0) {
       i55 = i25;
       i56 = i19;
       i57 = i11;
       break L52;
      }
      i17 = i25 + 8 | 0;
      i18 = HEAP32[i17 >> 2] | 0;
      HEAPF64[i48 >> 3] = d54;
      i26 = i51 - 16 + 8 | 0;
      HEAP32[i17 >> 2] = HEAP32[i26 >> 2];
      HEAPF64[i53 >> 3] = d49;
      HEAP32[i26 >> 2] = i18;
      i16 = i52;
      i10 = i50;
      i19 = i19 + 1 | 0;
      i11 = (i11 | 0) == (i25 | 0) ? i52 : i11;
     }
    } else {
     i55 = i13;
     i56 = i31;
     i57 = i14;
    }
   } while (0);
   do {
    if ((i55 | 0) == (i57 | 0)) {
     i58 = i56;
    } else {
     i14 = i57 | 0;
     d22 = +HEAPF64[i14 >> 3];
     i13 = i55 | 0;
     d20 = +HEAPF64[i13 >> 3];
     if (d22 >= d20) {
      i58 = i56;
      break;
     }
     i11 = i55 + 8 | 0;
     i19 = HEAP32[i11 >> 2] | 0;
     HEAPF64[i13 >> 3] = d22;
     i13 = i57 + 8 | 0;
     HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
     HEAPF64[i14 >> 3] = d20;
     HEAP32[i13 >> 2] = i19;
     i58 = i56 + 1 | 0;
    }
   } while (0);
   if ((i58 | 0) == 0) {
    i59 = __ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEbT0_S7_T_(i8, i55, 0) | 0;
    i19 = i55 + 16 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEbT0_S7_T_(i19, i1, 0) | 0) {
     i12 = 64;
     break;
    }
    if (i59) {
     i8 = i19;
     continue;
    }
   }
   i19 = i55;
   if ((i19 - i9 | 0) >= (i2 - i19 | 0)) {
    i12 = 68;
    break;
   }
   __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i8, i55, i3);
   i8 = i55 + 16 | 0;
  }
  if ((i12 | 0) == 64) {
   i12 = 0;
   if (i59) {
    i12 = 76;
    break;
   } else {
    i4 = i8;
    i1 = i55;
    continue;
   }
  } else if ((i12 | 0) == 68) {
   i12 = 0;
   __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i55 + 16 | 0, i1, i3);
   i4 = i8;
   i1 = i55;
   continue;
  }
 }
 if ((i12 | 0) == 14) {
  __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i8, i8 + 16 | 0, i8 + 32 | 0, i5, 0) | 0;
  return;
 } else if ((i12 | 0) == 21) {
  __ZNSt3__118__insertion_sort_3IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i8, i1, 0);
  return;
 } else if ((i12 | 0) == 72) {
  return;
 } else if ((i12 | 0) == 76) {
  return;
 } else if ((i12 | 0) == 85) {
  return;
 } else if ((i12 | 0) == 86) {
  return;
 } else if ((i12 | 0) == 6) {
  i5 = i8 + 16 | 0;
  d49 = +HEAPF64[i5 >> 3];
  i55 = i8 | 0;
  d54 = +HEAPF64[i55 >> 3];
  i4 = i1 - 16 | 0;
  d42 = +HEAPF64[i4 >> 3];
  i3 = d42 < d49;
  if (d49 >= d54) {
   if (!i3) {
    return;
   }
   i59 = i8 + 24 | 0;
   i58 = HEAP32[i59 >> 2] | 0;
   HEAPF64[i5 >> 3] = d42;
   HEAP32[i59 >> 2] = HEAP32[i7 >> 2];
   HEAPF64[i4 >> 3] = d49;
   HEAP32[i7 >> 2] = i58;
   d47 = +HEAPF64[i5 >> 3];
   d37 = +HEAPF64[i55 >> 3];
   if (d47 >= d37) {
    return;
   }
   i58 = i8 + 8 | 0;
   i56 = HEAP32[i58 >> 2] | 0;
   HEAPF64[i55 >> 3] = d47;
   HEAP32[i58 >> 2] = HEAP32[i59 >> 2];
   HEAPF64[i5 >> 3] = d37;
   HEAP32[i59 >> 2] = i56;
   return;
  }
  i56 = i8 + 8 | 0;
  i59 = HEAP32[i56 >> 2] | 0;
  if (i3) {
   HEAPF64[i55 >> 3] = d42;
   HEAP32[i56 >> 2] = HEAP32[i7 >> 2];
   HEAPF64[i4 >> 3] = d54;
   HEAP32[i7 >> 2] = i59;
   return;
  }
  HEAPF64[i55 >> 3] = d49;
  i55 = i8 + 24 | 0;
  HEAP32[i56 >> 2] = HEAP32[i55 >> 2];
  HEAPF64[i5 >> 3] = d54;
  HEAP32[i55 >> 2] = i59;
  d49 = +HEAPF64[i4 >> 3];
  if (d49 >= d54) {
   return;
  }
  HEAPF64[i5 >> 3] = d49;
  HEAP32[i55 >> 2] = HEAP32[i7 >> 2];
  HEAPF64[i4 >> 3] = d54;
  HEAP32[i7 >> 2] = i59;
  return;
 } else if ((i12 | 0) == 15) {
  i59 = i8 + 16 | 0;
  i4 = i8 + 32 | 0;
  i55 = i8 + 48 | 0;
  __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i8, i59, i4, i55, 0) | 0;
  i5 = i1 - 16 | 0;
  d54 = +HEAPF64[i5 >> 3];
  i56 = i55 | 0;
  d49 = +HEAPF64[i56 >> 3];
  if (d54 >= d49) {
   return;
  }
  i55 = i8 + 56 | 0;
  i3 = HEAP32[i55 >> 2] | 0;
  HEAPF64[i56 >> 3] = d54;
  HEAP32[i55 >> 2] = HEAP32[i7 >> 2];
  HEAPF64[i5 >> 3] = d49;
  HEAP32[i7 >> 2] = i3;
  d49 = +HEAPF64[i56 >> 3];
  i3 = i4 | 0;
  d54 = +HEAPF64[i3 >> 3];
  if (d49 >= d54) {
   return;
  }
  i4 = i8 + 40 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  HEAPF64[i3 >> 3] = d49;
  i58 = HEAP32[i55 >> 2] | 0;
  HEAP32[i4 >> 2] = i58;
  HEAPF64[i56 >> 3] = d54;
  HEAP32[i55 >> 2] = i5;
  i5 = i59 | 0;
  d54 = +HEAPF64[i5 >> 3];
  if (d49 >= d54) {
   return;
  }
  i59 = i8 + 24 | 0;
  i55 = HEAP32[i59 >> 2] | 0;
  HEAPF64[i5 >> 3] = d49;
  HEAP32[i59 >> 2] = i58;
  HEAPF64[i3 >> 3] = d54;
  HEAP32[i4 >> 2] = i55;
  i55 = i8 | 0;
  d54 = +HEAPF64[i55 >> 3];
  if (d49 >= d54) {
   return;
  }
  i4 = i8 + 8 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAPF64[i55 >> 3] = d49;
  HEAP32[i4 >> 2] = i58;
  HEAPF64[i5 >> 3] = d54;
  HEAP32[i59 >> 2] = i3;
  return;
 } else if ((i12 | 0) == 4) {
  i12 = i1 - 16 | 0;
  d54 = +HEAPF64[i12 >> 3];
  i1 = i8 | 0;
  d49 = +HEAPF64[i1 >> 3];
  if (d54 >= d49) {
   return;
  }
  i3 = i8 + 8 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAPF64[i1 >> 3] = d54;
  HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
  HEAPF64[i12 >> 3] = d49;
  HEAP32[i7 >> 2] = i8;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_v + 6;
}
function __ZN7WebCore14SVGSMILElement17connectConditionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 72 | 0;
 i12 = i1 + 112 | 0;
 if ((HEAP8[i12] & 1) != 0) {
  __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
 }
 HEAP8[i12] = 1;
 i12 = i1 + 108 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 + 100 | 0;
 i14 = i1 + 96 | 0;
 i15 = i4 | 0;
 i16 = i9 | 0;
 i17 = i10 | 0;
 i18 = i1 + 20 | 0;
 i19 = i5 | 0;
 i20 = i6 | 0;
 i21 = i3 | 0;
 i22 = i11 | 0;
 d23 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 i24 = 0;
 while (1) {
  i25 = HEAP32[i13 >> 2] | 0;
  i26 = i25 + (i24 * 40 & -1) | 0;
  i27 = HEAP32[i26 >> 2] | 0;
  L9 : do {
   if ((i27 | 0) == 1) {
    i28 = HEAP32[i18 >> 2] | 0;
    i29 = HEAP32[i25 + (i24 * 40 & -1) + 8 >> 2] | 0;
    do {
     if ((i29 | 0) == 0) {
      HEAP32[i21 >> 2] = 0;
     } else {
      if ((HEAP32[i29 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i29);
       break;
      } else {
       HEAP32[i21 >> 2] = i29;
       i30 = i29 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
    i29 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i28, i11) | 0;
    if ((i29 | 0) != 0) {
     i30 = i29 + 8 | 0;
     HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
    }
    i30 = i25 + (i24 * 40 & -1) + 28 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = i29;
    do {
     if ((i31 | 0) != 0) {
      i29 = i31 + 8 | 0;
      i32 = i29 | 0;
      i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i33;
      if ((i33 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i31 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i31 | 0) != 0) {
      i28 = i31 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i31);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i31 = HEAP32[i30 >> 2] | 0;
    if ((i31 | 0) == 0) {
     break;
    }
    do {
     if ((HEAP32[i31 + 12 >> 2] & 32 | 0) == 0) {
      HEAP32[i30 >> 2] = 0;
      i34 = i31;
     } else {
      i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 604 >> 2] & 255](i31) | 0;
      i28 = HEAP32[i30 >> 2] | 0;
      if (!i29) {
       HEAP32[i30 >> 2] = 0;
       if ((i28 | 0) == 0) {
        break L9;
       } else {
        i34 = i28;
        break;
       }
      }
      HEAP32[i7 >> 2] = i1;
      __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i28 + 116 | 0, i7, i7);
      if (+HEAPF64[i28 + 160 >> 3] >= d23) {
       break L9;
      }
      __ZN7WebCore14SVGSMILElement31createInstanceTimesFromSyncbaseEPS0_NS0_21NewOrExistingIntervalE(HEAP32[i7 >> 2] | 0, i28, 0);
      break L9;
     }
    } while (0);
    i30 = i34 + 8 | 0;
    i31 = i30 | 0;
    i28 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
   } else if ((i27 | 0) == 0) {
    i30 = HEAP32[i25 + (i24 * 40 & -1) + 8 >> 2] | 0;
    do {
     if ((i30 | 0) == 0) {
      i35 = 11;
     } else {
      if ((HEAP32[i30 + 4 >> 2] | 0) == 0) {
       i35 = 11;
       break;
      }
      i28 = HEAP32[i18 >> 2] | 0;
      if ((HEAP32[i30 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i30);
      } else {
       HEAP32[i19 >> 2] = i30;
       i31 = i30 | 0;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
      }
      HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
      i31 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i28, i6) | 0;
      i28 = HEAP32[i20 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i36 = i31;
       break;
      }
      i29 = i28 | 0;
      i33 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i33 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       i36 = i31;
       break;
      } else {
       HEAP32[i29 >> 2] = i33;
       i36 = i31;
       break;
      }
     }
    } while (0);
    if ((i35 | 0) == 11) {
     i35 = 0;
     i36 = HEAP32[i14 >> 2] | 0;
    }
    if ((i36 | 0) == 0) {
     break;
    }
    i30 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i30 + 4 >> 2] = 1;
    HEAP32[i30 + 8 >> 2] = 4;
    HEAP32[i30 >> 2] = H_BASE + 128;
    HEAP32[i30 + 12 >> 2] = i1;
    HEAP32[i30 + 16 >> 2] = i26;
    i31 = i25 + (i24 * 40 & -1) + 32 | 0;
    i33 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = i30;
    do {
     if ((i33 | 0) != 0) {
      i30 = i33 + 4 | 0;
      i29 = i30 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) != 0) {
       HEAP32[i29 >> 2] = i28;
       break;
      }
      i28 = i30 - 4 | 0;
      if ((i28 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
     }
    } while (0);
    i33 = i36 | 0;
    i28 = HEAP32[(HEAP32[i36 >> 2] | 0) + 20 >> 2] | 0;
    i30 = HEAP32[i25 + (i24 * 40 & -1) + 12 >> 2] | 0;
    do {
     if ((i30 | 0) == 0) {
      HEAP32[i15 >> 2] = 0;
     } else {
      if ((HEAP32[i30 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i30);
       break;
      } else {
       HEAP32[i15 >> 2] = i30;
       i29 = i30 | 0;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    i30 = HEAP32[i31 >> 2] | 0;
    HEAP32[i17 >> 2] = i30;
    if ((i30 | 0) != 0) {
     i29 = i30 + 4 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    FUNCTION_TABLE_iiiii[i28 & 7](i33, i9, i10, 0) | 0;
    i29 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i30 = i29 + 4 | 0;
      i32 = i30 | 0;
      i37 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      if ((i37 | 0) != 0) {
       HEAP32[i32 >> 2] = i37;
       break;
      }
      i37 = i30 - 4 | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 63](i37);
     }
    } while (0);
    i29 = HEAP32[i16 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
    i33 = i29 | 0;
    i28 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i29);
     break;
    } else {
     HEAP32[i33 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i24 = i24 + 1 | 0;
  if (i24 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
  STACKTOP = i3;
  return;
 }
 __ZNK3WTF6String15stripWhiteSpaceEv(i5, i2);
 if (HEAP8[H_BASE + 936 | 0] | 0) {
  i12 = HEAP32[H_BASE + 992 >> 2] | 0;
 } else {
  i2 = __Znwj(4) | 0;
  i13 = i2;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 80 | 0, 10);
  i14 = i4 | 0;
  i4 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i2 >> 2] = i4;
  HEAP32[H_BASE + 992 >> 2] = i13;
  HEAP8[H_BASE + 936 | 0] = 1;
  i12 = i13;
 }
 i13 = i5 | 0;
 L9 : do {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i13 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
   HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
  } else {
   i4 = HEAP32[i13 >> 2] | 0;
   L12 : do {
    if ((i4 | 0) == 0) {
     i15 = -1;
     i16 = 0;
     i17 = 21;
    } else {
     i2 = (HEAP32[i4 + 16 >> 2] & 32 | 0) == 0;
     L14 : do {
      if (i2) {
       i14 = HEAP32[i4 + 8 >> 2] | 0;
       i18 = HEAP32[i4 + 4 >> 2] | 0;
       i19 = i14;
       i20 = 0;
       while (1) {
        if (i20 >>> 0 >= i18 >>> 0) {
         i21 = -1;
         i22 = i14;
         i23 = i18;
         i24 = i19;
         break L14;
        }
        if ((HEAP16[i14 + (i20 << 1) >> 1] | 0) == 58) {
         i21 = i20;
         i22 = i14;
         i23 = i18;
         i24 = i19;
         break;
        } else {
         i20 = i20 + 1 | 0;
        }
       }
      } else {
       i20 = HEAP32[i4 + 8 >> 2] | 0;
       i19 = HEAP32[i4 + 4 >> 2] | 0;
       i18 = i20;
       i14 = 0;
       while (1) {
        if (i14 >>> 0 >= i19 >>> 0) {
         i21 = -1;
         i22 = i18;
         i23 = i19;
         i24 = i20;
         break L14;
        }
        if ((HEAP8[i20 + i14 | 0] | 0) == 58) {
         i21 = i14;
         i22 = i18;
         i23 = i19;
         i24 = i20;
         break;
        } else {
         i14 = i14 + 1 | 0;
        }
       }
      }
     } while (0);
     i14 = i21 + 1 | 0;
     if (i2) {
      i20 = i14;
      while (1) {
       if (i20 >>> 0 >= i23 >>> 0) {
        i15 = i21;
        i16 = i4;
        i17 = 21;
        break L12;
       }
       if ((HEAP16[i22 + (i20 << 1) >> 1] | 0) == 58) {
        i25 = i20;
        break;
       } else {
        i20 = i20 + 1 | 0;
       }
      }
     } else {
      i20 = i14;
      while (1) {
       if (i20 >>> 0 >= i23 >>> 0) {
        i15 = i21;
        i16 = i4;
        i17 = 21;
        break L12;
       }
       if ((HEAP8[i24 + i20 | 0] | 0) == 58) {
        i25 = i20;
        break;
       } else {
        i20 = i20 + 1 | 0;
       }
      }
     }
     i20 = (i21 | 0) == 2;
     if (!(i20 & (i25 | 0) == 5)) {
      i26 = i25;
      i27 = i20;
      i28 = i4;
      i17 = 40;
      break;
     }
     if ((HEAP32[i4 + 4 >> 2] | 0) >>> 0 <= 7 >>> 0) {
      i17 = 52;
      break;
     }
     __ZNK3WTF6String9substringEjj(i7, i5, 0, 2);
     d29 = +(((__ZNK3WTF6String12toUIntStrictEPbi(i7, i6, 10) | 0) * 3600 & -1) >>> 0 >>> 0);
     i20 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i14 = i20 | 0;
       i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i2 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i14 >> 2] = i2;
        break;
       }
      }
     } while (0);
     if ((HEAP8[i6] & 1) == 0) {
      HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
      break L9;
     }
     __ZNK3WTF6String9substringEjj(i8, i5, 3, 2);
     d30 = d29 + +(((__ZNK3WTF6String12toUIntStrictEPbi(i8, i6, 10) | 0) * 60 & -1) >>> 0 >>> 0);
     i20 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i2 = i20 | 0;
       i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i2 >> 2] = i14;
        break;
       }
      }
     } while (0);
     if ((HEAP8[i6] & 1) == 0) {
      HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
      break L9;
     }
     __ZNK3WTF6String9substringEjj(i9, i5, 6, -1);
     d29 = d30 + +__ZNK3WTF6String8toDoubleEPb(i9, i6);
     i20 = HEAP32[i9 >> 2] | 0;
     if ((i20 | 0) == 0) {
      d31 = d29;
      break;
     }
     i14 = i20 | 0;
     i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      d31 = d29;
      break;
     } else {
      HEAP32[i14 >> 2] = i2;
      d31 = d29;
      break;
     }
    }
   } while (0);
   if ((i17 | 0) == 21) {
    i26 = -1;
    i27 = (i15 | 0) == 2;
    i28 = i16;
    i17 = 40;
   }
   do {
    if ((i17 | 0) == 40) {
     if ((i28 | 0) == 0 | i27 & (i26 | 0) == -1 ^ 1) {
      i17 = 52;
      break;
     }
     if ((HEAP32[i28 + 4 >> 2] | 0) >>> 0 <= 4 >>> 0) {
      i17 = 52;
      break;
     }
     __ZNK3WTF6String9substringEjj(i10, i5, 0, 2);
     d29 = +(((__ZNK3WTF6String12toUIntStrictEPbi(i10, i6, 10) | 0) * 60 & -1) >>> 0 >>> 0);
     i4 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i2 = i4 | 0;
       i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i4);
        break;
       } else {
        HEAP32[i2 >> 2] = i14;
        break;
       }
      }
     } while (0);
     if ((HEAP8[i6] & 1) == 0) {
      HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
      break L9;
     }
     __ZNK3WTF6String9substringEjj(i11, i5, 3, -1);
     d30 = d29 + +__ZNK3WTF6String8toDoubleEPb(i11, i6);
     i4 = HEAP32[i11 >> 2] | 0;
     if ((i4 | 0) == 0) {
      d31 = d30;
      break;
     }
     i14 = i4 | 0;
     i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      d31 = d30;
      break;
     } else {
      HEAP32[i14 >> 2] = i2;
      d31 = d30;
      break;
     }
    }
   } while (0);
   if ((i17 | 0) == 52) {
    __ZN7WebCore14SVGSMILElement16parseOffsetValueERKN3WTF6StringE(i1, i5);
    break;
   }
   if ((HEAP8[i6] & 1) == 0) {
    HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
    break;
   } else {
    HEAPF64[i1 >> 3] = d31;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 | 0;
 i6 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i13 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL22constructQualifiedNameEPKNS_10SVGElementERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i16 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   L4 : do {
    if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
     i17 = HEAP32[i15 + 8 >> 2] | 0;
     i18 = 0;
     while (1) {
      if (i18 >>> 0 >= i16 >>> 0) {
       break L4;
      }
      if ((HEAP16[i17 + (i18 << 1) >> 1] | 0) == 58) {
       i19 = i18;
       i20 = 11;
       break;
      } else {
       i18 = i18 + 1 | 0;
      }
     }
    } else {
     i18 = HEAP32[i15 + 8 >> 2] | 0;
     i17 = 0;
     while (1) {
      if (i17 >>> 0 >= i16 >>> 0) {
       break L4;
      }
      if ((HEAP8[i18 + i17 | 0] | 0) == 58) {
       i19 = i17;
       i20 = 11;
       break;
      } else {
       i17 = i17 + 1 | 0;
      }
     }
    }
   } while (0);
   do {
    if ((i20 | 0) == 11) {
     if ((i19 | 0) == -1) {
      break;
     }
     i16 = i9 | 0;
     HEAP32[i16 >> 2] = 0;
     i17 = i10 | 0;
     HEAP32[i17 >> 2] = 0;
     i18 = i11 | 0;
     HEAP32[i18 >> 2] = 0;
     do {
      if (__ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri(i3, i9, i10, i18) | 0) {
       __ZNK7WebCore4Node18lookupNamespaceURIERKN3WTF6StringE(i12, i2 | 0, i9);
       i21 = i12 | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         i20 = 23;
        } else {
         if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
          i20 = 23;
          break;
         }
         i23 = HEAP32[i17 >> 2] | 0;
         do {
          if ((i23 | 0) == 0) {
           i24 = i5 | 0;
           HEAP32[i24 >> 2] = 0;
           i25 = i24;
          } else {
           if ((HEAP32[i23 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i23);
            i25 = i5 | 0;
            break;
           } else {
            i24 = i5 | 0;
            HEAP32[i24 >> 2] = i23;
            i26 = i23 | 0;
            HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
            i25 = i24;
            break;
           }
          }
         } while (0);
         i23 = i13 | 0;
         HEAP32[i23 >> 2] = HEAP32[i25 >> 2];
         i24 = HEAP32[i21 >> 2] | 0;
         do {
          if ((i24 | 0) == 0) {
           i26 = i6 | 0;
           HEAP32[i26 >> 2] = 0;
           i27 = i26;
          } else {
           if ((HEAP32[i24 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i24);
            i27 = i6 | 0;
            break;
           } else {
            i26 = i6 | 0;
            HEAP32[i26 >> 2] = i24;
            i28 = i24 | 0;
            HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
            i27 = i26;
            break;
           }
          }
         } while (0);
         i24 = i14 | 0;
         HEAP32[i24 >> 2] = HEAP32[i27 >> 2];
         __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i1, __ZN3WTF8nullAtomE, i13, i14);
         i26 = HEAP32[i24 >> 2] | 0;
         do {
          if ((i26 | 0) != 0) {
           i24 = i26 | 0;
           i28 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
           if ((i28 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i26);
            break;
           } else {
            HEAP32[i24 >> 2] = i28;
            break;
           }
          }
         } while (0);
         i26 = HEAP32[i23 >> 2] | 0;
         if ((i26 | 0) == 0) {
          break;
         }
         i28 = i26 | 0;
         i24 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
         if ((i24 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i26);
          break;
         } else {
          HEAP32[i28 >> 2] = i24;
          break;
         }
        }
       } while (0);
       if ((i20 | 0) == 23) {
        i22 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
        HEAP32[i1 >> 2] = i22;
        i24 = i22 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       }
       i24 = HEAP32[i21 >> 2] | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       i22 = i24 | 0;
       i28 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i22 >> 2] = i28;
        break;
       }
      } else {
       i28 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
       HEAP32[i1 >> 2] = i28;
       i22 = i28 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      }
     } while (0);
     i18 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i22 = i18 | 0;
       i28 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i22 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i18 = HEAP32[i16 >> 2] | 0;
     if ((i18 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i17 = i18 | 0;
     i28 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      STACKTOP = i4;
      return;
     } else {
      HEAP32[i17 >> 2] = i28;
      STACKTOP = i4;
      return;
     }
    }
   } while (0);
   if ((HEAP32[i15 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i15);
    i29 = i7 | 0;
   } else {
    i28 = i7 | 0;
    HEAP32[i28 >> 2] = i15;
    i17 = i15 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    i29 = i28;
   }
   i28 = i8 | 0;
   HEAP32[i28 >> 2] = HEAP32[i29 >> 2];
   __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i1, __ZN3WTF8nullAtomE, i8, __ZN3WTF8nullAtomE);
   i17 = HEAP32[i28 >> 2] | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i28 = i17 | 0;
   i18 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i28 >> 2] = i18;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i8 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEbT0_S7_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 switch (i2 - i1 >> 4 | 0) {
 case 0:
 case 1:
  {
   i4 = 1;
   return i4 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i1, i1 + 16 | 0, i1 + 32 | 0, i2 - 16 | 0, 0) | 0;
   i4 = 1;
   return i4 | 0;
  }
 case 5:
  {
   i3 = i1 + 16 | 0;
   i5 = i1 + 32 | 0;
   i6 = i1 + 48 | 0;
   __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i1, i3, i5, i6, 0) | 0;
   i7 = i2 - 16 | 0;
   d8 = +HEAPF64[i7 >> 3];
   i9 = i6 | 0;
   d10 = +HEAPF64[i9 >> 3];
   if (d8 >= d10) {
    i4 = 1;
    return i4 | 0;
   }
   i6 = i1 + 56 | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   HEAPF64[i9 >> 3] = d8;
   i12 = i2 - 16 + 8 | 0;
   HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
   HEAPF64[i7 >> 3] = d10;
   HEAP32[i12 >> 2] = i11;
   d10 = +HEAPF64[i9 >> 3];
   i11 = i5 | 0;
   d8 = +HEAPF64[i11 >> 3];
   if (d10 >= d8) {
    i4 = 1;
    return i4 | 0;
   }
   i5 = i1 + 40 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAPF64[i11 >> 3] = d10;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   HEAPF64[i9 >> 3] = d8;
   HEAP32[i6 >> 2] = i12;
   i12 = i3 | 0;
   d8 = +HEAPF64[i12 >> 3];
   if (d10 >= d8) {
    i4 = 1;
    return i4 | 0;
   }
   i3 = i1 + 24 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAPF64[i12 >> 3] = d10;
   HEAP32[i3 >> 2] = i7;
   HEAPF64[i11 >> 3] = d8;
   HEAP32[i5 >> 2] = i6;
   i6 = i1 | 0;
   d8 = +HEAPF64[i6 >> 3];
   if (d10 >= d8) {
    i4 = 1;
    return i4 | 0;
   }
   i5 = i1 + 8 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   HEAPF64[i6 >> 3] = d10;
   HEAP32[i5 >> 2] = i7;
   HEAPF64[i12 >> 3] = d8;
   HEAP32[i3 >> 2] = i11;
   i4 = 1;
   return i4 | 0;
  }
 case 2:
  {
   i11 = i2 - 16 | 0;
   d8 = +HEAPF64[i11 >> 3];
   i3 = i1 | 0;
   d10 = +HEAPF64[i3 >> 3];
   if (d8 >= d10) {
    i4 = 1;
    return i4 | 0;
   }
   i12 = i1 + 8 | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   HEAPF64[i3 >> 3] = d8;
   i3 = i2 - 16 + 8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
   HEAPF64[i11 >> 3] = d10;
   HEAP32[i3 >> 2] = i7;
   i4 = 1;
   return i4 | 0;
  }
 case 3:
  {
   i7 = i1 + 16 | 0;
   d10 = +HEAPF64[i7 >> 3];
   i3 = i1 | 0;
   d8 = +HEAPF64[i3 >> 3];
   i11 = i2 - 16 | 0;
   d13 = +HEAPF64[i11 >> 3];
   i12 = d13 < d10;
   if (d10 >= d8) {
    if (!i12) {
     i4 = 1;
     return i4 | 0;
    }
    i5 = i1 + 24 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAPF64[i7 >> 3] = d13;
    i9 = i2 - 16 + 8 | 0;
    HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
    HEAPF64[i11 >> 3] = d10;
    HEAP32[i9 >> 2] = i6;
    d14 = +HEAPF64[i7 >> 3];
    d15 = +HEAPF64[i3 >> 3];
    if (d14 >= d15) {
     i4 = 1;
     return i4 | 0;
    }
    i6 = i1 + 8 | 0;
    i9 = HEAP32[i6 >> 2] | 0;
    HEAPF64[i3 >> 3] = d14;
    HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
    HEAPF64[i7 >> 3] = d15;
    HEAP32[i5 >> 2] = i9;
    i4 = 1;
    return i4 | 0;
   }
   i9 = i1 + 8 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   if (i12) {
    HEAPF64[i3 >> 3] = d13;
    i12 = i2 - 16 + 8 | 0;
    HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
    HEAPF64[i11 >> 3] = d8;
    HEAP32[i12 >> 2] = i5;
    i4 = 1;
    return i4 | 0;
   }
   HEAPF64[i3 >> 3] = d10;
   i3 = i1 + 24 | 0;
   HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
   HEAPF64[i7 >> 3] = d8;
   HEAP32[i3 >> 2] = i5;
   d10 = +HEAPF64[i11 >> 3];
   if (d10 >= d8) {
    i4 = 1;
    return i4 | 0;
   }
   HEAPF64[i7 >> 3] = d10;
   i7 = i2 - 16 + 8 | 0;
   HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
   HEAPF64[i11 >> 3] = d8;
   HEAP32[i7 >> 2] = i5;
   i4 = 1;
   return i4 | 0;
  }
 default:
  {
   i5 = i1 + 32 | 0;
   i7 = i1 + 16 | 0;
   d8 = +HEAPF64[i7 >> 3];
   i11 = i1 | 0;
   d10 = +HEAPF64[i11 >> 3];
   i3 = i5 | 0;
   d13 = +HEAPF64[i3 >> 3];
   i9 = d13 < d8;
   do {
    if (d8 < d10) {
     i12 = i1 + 8 | 0;
     i6 = HEAP32[i12 >> 2] | 0;
     if (i9) {
      HEAPF64[i11 >> 3] = d13;
      i16 = i1 + 40 | 0;
      HEAP32[i12 >> 2] = HEAP32[i16 >> 2];
      HEAPF64[i3 >> 3] = d10;
      HEAP32[i16 >> 2] = i6;
      d17 = d10;
      break;
     }
     HEAPF64[i11 >> 3] = d8;
     i16 = i1 + 24 | 0;
     HEAP32[i12 >> 2] = HEAP32[i16 >> 2];
     HEAPF64[i7 >> 3] = d10;
     HEAP32[i16 >> 2] = i6;
     if (d13 >= d10) {
      d17 = d13;
      break;
     }
     HEAPF64[i7 >> 3] = d13;
     i12 = i1 + 40 | 0;
     HEAP32[i16 >> 2] = HEAP32[i12 >> 2];
     HEAPF64[i3 >> 3] = d10;
     HEAP32[i12 >> 2] = i6;
     d17 = d10;
    } else {
     if (!i9) {
      d17 = d13;
      break;
     }
     i6 = i1 + 24 | 0;
     i12 = HEAP32[i6 >> 2] | 0;
     HEAPF64[i7 >> 3] = d13;
     i16 = i1 + 40 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i6 >> 2] = i18;
     HEAPF64[i3 >> 3] = d8;
     HEAP32[i16 >> 2] = i12;
     if (d13 >= d10) {
      d17 = d8;
      break;
     }
     i12 = i1 + 8 | 0;
     i16 = HEAP32[i12 >> 2] | 0;
     HEAPF64[i11 >> 3] = d13;
     HEAP32[i12 >> 2] = i18;
     HEAPF64[i7 >> 3] = d10;
     HEAP32[i6 >> 2] = i16;
     d17 = d8;
    }
   } while (0);
   i7 = i1 + 48 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    i4 = 1;
    return i4 | 0;
   } else {
    i19 = i5;
    i20 = 0;
    i21 = i7;
    d22 = d17;
   }
   while (1) {
    i7 = i21 | 0;
    d17 = +HEAPF64[i7 >> 3];
    if (d17 < d22) {
     i5 = HEAP32[i21 + 8 >> 2] | 0;
     i11 = i19;
     i3 = i21;
     d8 = d22;
     while (1) {
      i23 = i11 | 0;
      HEAPF64[i3 >> 3] = d8;
      i24 = i11 + 8 | 0;
      HEAP32[i3 + 8 >> 2] = HEAP32[i24 >> 2];
      if ((i11 | 0) == (i1 | 0)) {
       break;
      }
      i9 = i11 - 16 | 0;
      d10 = +HEAPF64[i9 >> 3];
      if (d17 < d10) {
       i3 = i11;
       i11 = i9;
       d8 = d10;
      } else {
       break;
      }
     }
     HEAPF64[i23 >> 3] = d17;
     HEAP32[i24 >> 2] = i5;
     i11 = i20 + 1 | 0;
     if ((i11 | 0) == 8) {
      break;
     } else {
      i25 = i11;
     }
    } else {
     i25 = i20;
    }
    i11 = i21 + 16 | 0;
    if ((i11 | 0) == (i2 | 0)) {
     i4 = 1;
     i26 = 52;
     break;
    }
    i19 = i21;
    i20 = i25;
    i21 = i11;
    d22 = +HEAPF64[i7 >> 3];
   }
   if ((i26 | 0) == 52) {
    return i4 | 0;
   }
   i4 = (i21 + 16 | 0) == (i2 | 0);
   return i4 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = (i3 | 0) == 0 ? i1 + 136 | 0 : i1 + 148 | 0;
 if ((i3 | 0) == 1) {
  HEAP8[i1 + 113 | 0] = 0;
 }
 _memset(i6 | 0, 0, 20) | 0;
 i13 = i12 + 8 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  i14 = i12 | 0;
  i15 = i6 | 0;
  i16 = 0;
  while (1) {
   HEAPF64[i7 >> 3] = +HEAPF64[(HEAP32[i14 >> 2] | 0) + (i16 << 4) >> 3];
   __ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E3addINS_22IdentityHashTranslatorIS3_EERKddEENS_18HashTableAddResultINS_17HashTableIteratorIddS1_S3_S5_S5_EEEEOT0_OT1_(i8, i15, i7, i7);
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i16 = i9 | 0;
 HEAP32[i16 >> 2] = 0;
 i7 = i9 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i15 = i9 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i2, 59, 0, i9);
 L9 : do {
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   i17 = i12 | 0;
  } else {
   i9 = i10 | 0;
   d18 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
   i2 = i6 | 0;
   i8 = i11 | 0;
   i14 = i11 + 8 | 0;
   i19 = i12 + 4 | 0;
   i20 = i12 | 0;
   i21 = i6 + 8 | 0;
   i22 = 0;
   L12 : while (1) {
    __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i10, (HEAP32[i16 >> 2] | 0) + (i22 << 2) | 0);
    d23 = +HEAPF64[i9 >> 3];
    i24 = HEAP32[i9 >> 2] | 0;
    i25 = HEAP32[i9 + 4 >> 2] | 0;
    L14 : do {
     if (d23 == d18) {
      if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i22 >>> 0) {
       break L12;
      }
      __ZN7WebCore14SVGSMILElement14parseConditionERKN3WTF6StringENS0_10BeginOrEndE(i1, (HEAP32[i16 >> 2] | 0) + (i22 << 2) | 0, i3) | 0;
     } else {
      i26 = HEAP32[i2 >> 2] | 0;
      L18 : do {
       if ((i26 | 0) != 0) {
        i27 = HEAP32[i21 >> 2] | 0;
        i28 = i24;
        i29 = i25;
        i30 = _i64Add(i28, i29, ~0, ~i28) | 0;
        i31 = tempRet0;
        i32 = (i30 >>> 22 | i31 << 10) ^ i30;
        i30 = (i31 >>> 22 | 0 << 10) ^ i31;
        i31 = _i64Add(i32, i30, ~(i32 << 13 | 0 >>> 19), ~(i30 << 13 | i32 >>> 19)) | 0;
        i32 = tempRet0;
        i30 = ___muldi3((i31 >>> 8 | i32 << 24) ^ i31, (i32 >>> 8 | 0 << 24) ^ i32, 9, 0) | 0;
        i32 = tempRet0;
        i31 = (i30 >>> 15 | i32 << 17) ^ i30;
        i30 = (i32 >>> 15 | 0 << 17) ^ i32;
        i32 = _i64Add(i31, i30, ~(i31 << 27 | 0 >>> 5), ~(i30 << 27 | i31 >>> 5)) | 0;
        i31 = (i32 >>> 31 | tempRet0 << 1) ^ i32;
        i32 = i27 & i31;
        i30 = i26 + (i32 << 3) | 0;
        if ((HEAP32[i30 >> 2] | 0) == (i28 | 0) & (HEAP32[i30 + 4 >> 2] | 0) == (i29 | 0)) {
         i33 = i30;
        } else {
         i34 = (i31 >>> 23) + ~i31 | 0;
         i31 = i34 << 12 ^ i34;
         i34 = i31 >>> 7 ^ i31;
         i31 = i34 << 2 ^ i34;
         i34 = i31 >>> 20 ^ i31 | 1;
         i31 = 0;
         i35 = i32;
         d36 = +HEAPF64[i30 >> 3];
         while (1) {
          if (d36 == Infinity) {
           break L18;
          }
          i30 = (i31 | 0) == 0 ? i34 : i31;
          i32 = i30 + i35 & i27;
          i37 = i26 + (i32 << 3) | 0;
          if ((HEAP32[i37 >> 2] | 0) == (i28 | 0) & (HEAP32[i37 + 4 >> 2] | 0) == (i29 | 0)) {
           i33 = i37;
           break;
          } else {
           i31 = i30;
           i35 = i32;
           d36 = +HEAPF64[i37 >> 3];
          }
         }
        }
        if ((i33 | 0) != 0) {
         break L14;
        }
       }
      } while (0);
      HEAPF64[i8 >> 3] = d23;
      HEAP32[i14 >> 2] = 0;
      i26 = HEAP32[i13 >> 2] | 0;
      if ((i26 | 0) == (HEAP32[i19 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i12, i11);
       break;
      } else {
       i35 = HEAP32[i20 >> 2] | 0;
       HEAPF64[i35 + (i26 << 4) >> 3] = d23;
       HEAP32[i35 + (i26 << 4) + 8 >> 2] = HEAP32[i14 >> 2];
       HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
       break;
      }
     }
    } while (0);
    i25 = i22 + 1 | 0;
    if (i25 >>> 0 < (HEAP32[i15 >> 2] | 0) >>> 0) {
     i22 = i25;
    } else {
     i17 = i20;
     break L9;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i11 = HEAP32[i17 >> 2] | 0;
 __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i11, i11 + (HEAP32[i13 >> 2] << 4) | 0, i5);
 i5 = HEAP32[i15 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i13 = HEAP32[i16 >> 2] | 0;
  i11 = i13 + (i5 << 2) | 0;
  i5 = i13;
  while (1) {
   i13 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i17 = i13 | 0;
     i12 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i17 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i11 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i16 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i6 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E3addINS_22IdentityHashTranslatorIS3_EERKddEENS_18HashTableAddResultINS_17HashTableIteratorIddS1_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
    i12 = 0;
   } else {
    i13 = i10 << 1;
    i11 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i10 : i13;
    i12 = i10;
   }
   HEAP32[i9 >> 2] = i11;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = i11 - 1;
   i10 = __ZN3WTF10fastMallocEj(i11 << 3) | 0;
   if ((i11 | 0) > 0) {
    i13 = 0;
    while (1) {
     HEAPF64[i10 + (i13 << 3) >> 3] = Infinity;
     i13 = i13 + 1 | 0;
     if ((i13 | 0) >= (i11 | 0)) {
      break;
     }
    }
   }
   HEAP32[i7 >> 2] = i10;
   if ((i12 | 0) == 0) {
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
 i12 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i12, i11, ~0, ~i12) | 0;
 i13 = tempRet0;
 i16 = (i3 >>> 22 | i13 << 10) ^ i3;
 i3 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i16, i3, ~(i16 << 13 | 0 >>> 19), ~(i3 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i3 = ___muldi3((i13 >>> 8 | i16 << 24) ^ i13, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i13 = (i3 >>> 15 | i16 << 17) ^ i3;
 i3 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i13, i3, ~(i13 << 27 | 0 >>> 5), ~(i3 << 27 | i13 >>> 5)) | 0;
 i13 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 i16 = i13 & i8;
 i3 = i14 + (i16 << 3) | 0;
 d17 = +HEAPF64[i3 >> 3];
 do {
  if (d17 == Infinity) {
   i18 = i3;
   i19 = 16;
  } else {
   i20 = (i13 >>> 23) + ~i13 | 0;
   i21 = i20 << 12 ^ i20;
   i20 = i21 >>> 7 ^ i21;
   i21 = i20 << 2 ^ i20;
   i20 = i21 >>> 20 ^ i21 | 1;
   i21 = 0;
   i22 = 0;
   i23 = i16;
   i24 = i3;
   d25 = d17;
   while (1) {
    HEAPF64[tempDoublePtr >> 3] = d25;
    if ((HEAP32[tempDoublePtr >> 2] | 0) == (i12 | 0) & (HEAP32[tempDoublePtr + 4 >> 2] | 0) == (i11 | 0)) {
     i19 = 13;
     break;
    }
    i26 = d25 == -Infinity ? i24 : i22;
    i27 = (i21 | 0) == 0 ? i20 : i21;
    i28 = i27 + i23 & i8;
    i29 = i14 + (i28 << 3) | 0;
    d30 = +HEAPF64[i29 >> 3];
    if (d30 == Infinity) {
     i19 = 15;
     break;
    } else {
     i21 = i27;
     i22 = i26;
     i23 = i28;
     i24 = i29;
     d25 = d30;
    }
   }
   if ((i19 | 0) == 13) {
    i23 = i14 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i22 = i1;
    HEAP32[i22 >> 2] = i24;
    HEAP32[i22 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i19 | 0) == 15) {
    if ((i26 | 0) == 0) {
     i18 = i29;
     i19 = 16;
     break;
    }
    HEAPF64[i26 >> 3] = Infinity;
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i31 = i26;
    i32 = i23;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 16) {
  i31 = i18;
  i32 = i2 + 16 | 0;
 }
 HEAPF64[i31 >> 3] = +HEAPF64[i4 >> 3];
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 4 | 0;
 i19 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i32 >> 2] | 0) + i18 << 1 | 0) < (i19 | 0)) {
  i33 = i31;
  i34 = i19;
 } else {
  i26 = (i19 | 0) == 0;
  if (i26) {
   i35 = 8;
  } else {
   i29 = i19 << 1;
   i35 = (i18 * 6 & -1 | 0) < (i29 | 0) ? i19 : i29;
  }
  i29 = HEAP32[i7 >> 2] | 0;
  HEAP32[i4 >> 2] = i35;
  HEAP32[i15 >> 2] = i35 - 1;
  i15 = __ZN3WTF10fastMallocEj(i35 << 3) | 0;
  if ((i35 | 0) > 0) {
   i18 = 0;
   while (1) {
    HEAPF64[i15 + (i18 << 3) >> 3] = Infinity;
    i18 = i18 + 1 | 0;
    if ((i18 | 0) >= (i35 | 0)) {
     break;
    }
   }
  }
  HEAP32[i7 >> 2] = i15;
  if (i26) {
   i36 = 0;
  } else {
   i26 = i6 | 0;
   i15 = 0;
   i35 = 0;
   while (1) {
    i18 = i29 + (i15 << 3) | 0;
    d17 = +HEAPF64[i18 >> 3];
    if (d17 == Infinity | d17 == -Infinity) {
     i37 = i35;
    } else {
     __ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E16lookupForWritingINS_22IdentityHashTranslatorIS3_EEdEENSt3__14pairIPdbEERKT0_(i6, i2, i18);
     i14 = HEAP32[i26 >> 2] | 0;
     HEAPF64[i14 >> 3] = +HEAPF64[i18 >> 3];
     i37 = (i18 | 0) == (i31 | 0) ? i14 : i35;
    }
    i14 = i15 + 1 | 0;
    if ((i14 | 0) == (i19 | 0)) {
     i36 = i37;
     break;
    } else {
     i15 = i14;
     i35 = i37;
    }
   }
  }
  HEAP32[i32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i29);
  i33 = i36;
  i34 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i34 << 3) | 0;
 i34 = i1;
 HEAP32[i34 >> 2] = i33;
 HEAP32[i34 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, i40 = 0, d41 = +0, i42 = 0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i1 + 168 | 0;
 if (i2) {
  d19 = -Infinity;
 } else {
  d19 = +HEAPF64[i18 >> 3];
 }
 i20 = i1 + 160 | 0;
 i21 = i7 | 0;
 i22 = i6 | 0;
 d23 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 i24 = i1 + 156 | 0;
 i25 = i9 | 0;
 d26 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 i27 = i10 | 0;
 i28 = i8 | 0;
 i29 = i2 ^ 1;
 i30 = i12 | 0;
 i31 = i11 | 0;
 i32 = i14 | 0;
 i33 = i13 | 0;
 i34 = i1 + 113 | 0;
 i35 = i16 | 0;
 i36 = i17 | 0;
 i37 = i15 | 0;
 L4 : do {
  if (i2) {
   d38 = Infinity;
   d39 = d19;
   while (1) {
    i40 = +HEAPF64[i18 >> 3] > +HEAPF64[i20 >> 3];
    HEAPF64[i21 >> 3] = d39;
    __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i6, i1, 0, i7, i40);
    d41 = +HEAPF64[i22 >> 3];
    if (d41 == d23) {
     i42 = 31;
     break L4;
    }
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     HEAPF64[i25 >> 3] = d41;
     HEAPF64[i27 >> 3] = d26;
     __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i8, i1, i9, i10);
     d43 = +HEAPF64[i28 >> 3];
    } else {
     HEAPF64[i30 >> 3] = d41;
     __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i11, i1, 1, i12, 1);
     d44 = +HEAPF64[i31 >> 3];
     do {
      if (d41 < d26) {
       i40 = d44 < d26;
       if (!(d41 == d44 & i40 & d44 == d38)) {
        if (!(i40 & i29)) {
         d45 = d44;
         break;
        }
        if (d44 != +HEAPF64[i18 >> 3]) {
         d45 = d44;
         break;
        }
       }
       HEAPF64[i32 >> 3] = d41;
       __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i13, i1, 1, i14, 0);
       d45 = +HEAPF64[i33 >> 3];
      } else {
       d45 = d44;
      }
     } while (0);
     do {
      if (d45 == d23) {
       if ((HEAP32[i24 >> 2] | 0) == 0) {
        break;
       }
       if ((HEAP8[i34] & 1) == 0) {
        i42 = 31;
        break L4;
       }
      }
     } while (0);
     HEAPF64[i35 >> 3] = d41;
     HEAPF64[i36 >> 3] = d45;
     __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i15, i1, i16, i17);
     d43 = +HEAPF64[i37 >> 3];
    }
    if (d43 > +0 | i29) {
     d46 = d43;
     d47 = d41;
     i42 = 30;
     break L4;
    }
    if (d41 != +0 | d43 != +0) {
     d38 = d43;
     d39 = d43;
    } else {
     d46 = d43;
     d47 = d41;
     i42 = 30;
     break;
    }
   }
  } else {
   d39 = d19;
   while (1) {
    HEAPF64[i21 >> 3] = d39;
    __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i6, i1, 0, i7, 1);
    d38 = +HEAPF64[i22 >> 3];
    if (d38 == d23) {
     i42 = 31;
     break L4;
    }
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     HEAPF64[i25 >> 3] = d38;
     HEAPF64[i27 >> 3] = d26;
     __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i8, i1, i9, i10);
     d48 = +HEAPF64[i28 >> 3];
    } else {
     HEAPF64[i30 >> 3] = d38;
     __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i11, i1, 1, i12, 1);
     d44 = +HEAPF64[i31 >> 3];
     do {
      if (d44 < d26) {
       if (d44 != +HEAPF64[i18 >> 3]) {
        d49 = d44;
        break;
       }
       HEAPF64[i32 >> 3] = d38;
       __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i13, i1, 1, i14, 0);
       d49 = +HEAPF64[i33 >> 3];
      } else {
       d49 = d44;
      }
     } while (0);
     do {
      if (d49 == d23) {
       if ((HEAP32[i24 >> 2] | 0) == 0) {
        break;
       }
       if ((HEAP8[i34] & 1) == 0) {
        i42 = 31;
        break L4;
       }
      }
     } while (0);
     HEAPF64[i35 >> 3] = d38;
     HEAPF64[i36 >> 3] = d49;
     __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i15, i1, i16, i17);
     d48 = +HEAPF64[i37 >> 3];
    }
    if (d48 > +0 | i29) {
     d46 = d48;
     d47 = d38;
     i42 = 30;
     break L4;
    }
    if (d38 != +0 | d48 != +0) {
     d39 = d48;
    } else {
     d46 = d48;
     d47 = d38;
     i42 = 30;
     break;
    }
   }
  }
 } while (0);
 if ((i42 | 0) == 31) {
  HEAPF64[i3 >> 3] = d23;
  HEAPF64[i4 >> 3] = d23;
  STACKTOP = i5;
  return;
 } else if ((i42 | 0) == 30) {
  HEAPF64[i3 >> 3] = d47;
  HEAPF64[i4 >> 3] = d46;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14SVGSMILElement20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 20 | 0;
 i10 = i1 | 0;
 __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) | 0, i10);
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 684 >> 2] & 127](i1, 0);
  STACKTOP = i2;
  return;
 }
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 | 0;
 i13 = i6 | 0;
 i14 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i12, __ZN7WebCore10XLinkNames8hrefAttrE) | 0) >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 do {
  if ((i14 | 0) == 0) {
   i15 = 6;
  } else {
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i16 = HEAP32[i13 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i15 = 6;
    break;
   }
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    i15 = 6;
    break;
   }
   i17 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i6, HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0, i5, 0) | 0;
   i15 = 10;
  }
 } while (0);
 do {
  if ((i15 | 0) == 6) {
   i5 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i18 = 0;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
    i18 = 0;
    break;
   }
   i17 = i5;
   i15 = 10;
  }
 } while (0);
 do {
  if ((i15 | 0) == 10) {
   if ((i17 | 0) == 0) {
    i18 = 0;
    break;
   }
   i5 = HEAP32[i17 + 12 >> 2] | 0;
   if ((i5 & 32 | 0) == 0) {
    i18 = 0;
    break;
   }
   i18 = (i5 & 256 | 0) != 0 ? i17 : 0;
  }
 } while (0);
 if ((i18 | 0) != (HEAP32[i1 + 96 >> 2] | 0)) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 684 >> 2] & 127](i1, i18);
 }
 i1 = __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i18 | 0) == 0) {
   i17 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i15 = i3 | 0;
     HEAP32[i15 >> 2] = 0;
     i19 = i15;
    } else {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i17);
      i19 = i3 | 0;
      break;
     } else {
      i15 = i3 | 0;
      HEAP32[i15 >> 2] = i17;
      i5 = i17 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
      i19 = i15;
      break;
     }
    }
   } while (0);
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
   i15 = __ZNK7WebCore21SVGDocumentExtensions24isElementPendingResourceEPNS_7ElementERKN3WTF12AtomicStringE(i1, i12, i7) | 0;
   i5 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i17 = i5 | 0;
     i6 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i17 >> 2] = i6;
      break;
     }
    }
   } while (0);
   if (i15) {
    break;
   }
   i5 = HEAP32[i11 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   i5 = __ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i6 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i17 = i4 | 0;
     HEAP32[i17 >> 2] = 0;
     i20 = i17;
    } else {
     if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
      i20 = i4 | 0;
      break;
     } else {
      i17 = i4 | 0;
      HEAP32[i17 >> 2] = i6;
      i14 = i6 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      i20 = i17;
      break;
     }
    }
   } while (0);
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
   __ZN7WebCore21SVGDocumentExtensions18addPendingResourceERKN3WTF12AtomicStringEPNS_7ElementE(i5, i8, i12);
   i15 = HEAP32[i6 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i6 = i15 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  } else {
   __ZN7WebCore21SVGDocumentExtensions27addElementReferencingTargetEPNS_10SVGElementES2_(i1, i10, i18);
  }
 } while (0);
 i18 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i13 = i18 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i13 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i11 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i11 = i18 | 0;
 i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i18);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN7WebCore14SVGSMILElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[__ZN7WebCore8SVGNames9beginAttrE >> 2] | 0)) {
  i5 = i1 + 108 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
   i6 = i1 + 104 | 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i7 = HEAP32[i5 >> 2] | 0;
     i8 = i1 + 100 | 0;
     if ((i7 | 0) != 0) {
      i9 = HEAP32[i8 >> 2] | 0;
      i10 = i9 + (i7 * 40 & -1) | 0;
      i7 = i9;
      while (1) {
       __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i7);
       i7 = i7 + 40 | 0;
       if ((i7 | 0) == (i10 | 0)) {
        break;
       }
      }
      HEAP32[i5 >> 2] = 0;
     }
     i10 = HEAP32[i8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     HEAP32[i8 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
   } while (0);
   i6 = HEAP32[i1 + 48 >> 2] | 0;
   L15 : do {
    if ((i6 | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
    } else {
     i5 = HEAP32[i6 + 4 >> 2] | 0;
     if ((i5 & 1 | 0) == 0) {
      i12 = i5 >>> 1 & 134217727;
      i13 = i6 + 20 | 0;
     } else {
      i5 = i6 + 24 | 0;
      i12 = HEAP32[i5 + 8 >> 2] | 0;
      i13 = HEAP32[i5 >> 2] | 0;
     }
     if ((i12 | 0) == 0) {
      i11 = __ZN3WTF8nullAtomE;
      break;
     }
     i5 = HEAP32[__ZN7WebCore8SVGNames7endAttrE >> 2] | 0;
     i10 = i5 + 12 | 0;
     i7 = i5 + 16 | 0;
     i9 = 0;
     while (1) {
      i14 = i13 + (i9 << 3) | 0;
      i15 = HEAP32[i14 >> 2] | 0;
      if ((i15 | 0) == (i5 | 0)) {
       break;
      }
      if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
       if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
        break;
       }
      }
      i15 = i9 + 1 | 0;
      if (i15 >>> 0 < i12 >>> 0) {
       i9 = i15;
      } else {
       i11 = __ZN3WTF8nullAtomE;
       break L15;
      }
     }
     i11 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i9 << 3) + 4 | 0;
    }
   } while (0);
   __ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE(i1, i11 | 0, 1);
  }
  __ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE(i1, i3 | 0, 0);
  if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
   return;
  }
  __ZN7WebCore14SVGSMILElement17connectConditionsEv(i1);
  return;
 }
 if ((i4 | 0) != (HEAP32[__ZN7WebCore8SVGNames7endAttrE >> 2] | 0)) {
  __ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  return;
 }
 i2 = i1 + 108 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
  i4 = i1 + 104 | 0;
  do {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i11 = HEAP32[i2 >> 2] | 0;
    i13 = i1 + 100 | 0;
    if ((i11 | 0) != 0) {
     i14 = HEAP32[i13 >> 2] | 0;
     i12 = i14 + (i11 * 40 & -1) | 0;
     i11 = i14;
     while (1) {
      __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i11);
      i11 = i11 + 40 | 0;
      if ((i11 | 0) == (i12 | 0)) {
       break;
      }
     }
     HEAP32[i2 >> 2] = 0;
    }
    i12 = HEAP32[i13 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    HEAP32[i13 >> 2] = 0;
    HEAP32[i4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
   }
  } while (0);
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  L52 : do {
   if ((i4 | 0) == 0) {
    i16 = __ZN3WTF8nullAtomE;
   } else {
    i2 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i2 & 1 | 0) == 0) {
     i17 = i2 >>> 1 & 134217727;
     i18 = i4 + 20 | 0;
    } else {
     i2 = i4 + 24 | 0;
     i17 = HEAP32[i2 + 8 >> 2] | 0;
     i18 = HEAP32[i2 >> 2] | 0;
    }
    if ((i17 | 0) == 0) {
     i16 = __ZN3WTF8nullAtomE;
     break;
    }
    i2 = HEAP32[__ZN7WebCore8SVGNames9beginAttrE >> 2] | 0;
    i12 = i2 + 12 | 0;
    i11 = i2 + 16 | 0;
    i9 = 0;
    while (1) {
     i19 = i18 + (i9 << 3) | 0;
     i14 = HEAP32[i19 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      break;
     }
     if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
       break;
      }
     }
     i14 = i9 + 1 | 0;
     if (i14 >>> 0 < i17 >>> 0) {
      i9 = i14;
     } else {
      i16 = __ZN3WTF8nullAtomE;
      break L52;
     }
    }
    i16 = (i19 | 0) == 0 ? __ZN3WTF8nullAtomE : i18 + (i9 << 3) + 4 | 0;
   }
  } while (0);
  __ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE(i1, i16 | 0, 0);
 }
 __ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE(i1, i3 | 0, 1);
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  return;
 }
 __ZN7WebCore14SVGSMILElement17connectConditionsEv(i1);
 return;
}
function __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 + 112 | 0;
 if ((HEAP8[i8] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i8] = 0;
 i8 = i1 + 108 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 100 | 0;
 i10 = i1 + 96 | 0;
 i11 = i3 | 0;
 i12 = i7 | 0;
 i13 = i1 + 20 | 0;
 i14 = i4 | 0;
 i15 = i5 | 0;
 i16 = 0;
 while (1) {
  i17 = HEAP32[i9 >> 2] | 0;
  i18 = HEAP32[i17 + (i16 * 40 & -1) >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i19 = i17 + (i16 * 40 & -1) + 32 | 0;
    if ((HEAP32[i19 >> 2] | 0) == 0) {
     break;
    }
    i20 = HEAP32[i17 + (i16 * 40 & -1) + 8 >> 2] | 0;
    do {
     if ((i20 | 0) == 0) {
      i21 = 11;
     } else {
      if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
       i21 = 11;
       break;
      }
      i22 = HEAP32[i13 >> 2] | 0;
      if ((HEAP32[i20 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i20);
      } else {
       HEAP32[i14 >> 2] = i20;
       i23 = i20 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
      }
      HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
      i23 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i22, i5) | 0;
      i22 = HEAP32[i15 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i24 = i23;
       break;
      }
      i25 = i22 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       i24 = i23;
       break;
      } else {
       HEAP32[i25 >> 2] = i26;
       i24 = i23;
       break;
      }
     }
    } while (0);
    if ((i21 | 0) == 11) {
     i21 = 0;
     i24 = HEAP32[i10 >> 2] | 0;
    }
    do {
     if ((i24 | 0) != 0) {
      i20 = i24 | 0;
      i23 = HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] | 0;
      i26 = HEAP32[i17 + (i16 * 40 & -1) + 12 >> 2] | 0;
      do {
       if ((i26 | 0) == 0) {
        HEAP32[i11 >> 2] = 0;
       } else {
        if ((HEAP32[i26 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i26);
         break;
        } else {
         HEAP32[i11 >> 2] = i26;
         i25 = i26 | 0;
         HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
         break;
        }
       }
      } while (0);
      HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
      FUNCTION_TABLE_iiiii[i23 & 7](i20, i7, HEAP32[i19 >> 2] | 0, 0) | 0;
      i26 = HEAP32[i12 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      i25 = i26 | 0;
      i22 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i22 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i25 >> 2] = i22;
       break;
      }
     }
    } while (0);
    HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] = 0;
    i22 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    if ((i22 | 0) == 0) {
     i21 = 33;
     break;
    }
    i25 = i22 + 4 | 0;
    i22 = i25 | 0;
    i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    if ((i26 | 0) != 0) {
     HEAP32[i22 >> 2] = i26;
     i21 = 33;
     break;
    }
    i26 = i25 - 4 | 0;
    if ((i26 | 0) == 0) {
     i21 = 33;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
    i21 = 33;
   } else if ((i18 | 0) == 1) {
    i26 = HEAP32[i17 + (i16 * 40 & -1) + 28 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 33;
     break;
    }
    HEAP32[i6 >> 2] = i1;
    __ZN3WTF7HashSetIPN7WebCore14SVGSMILElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i26 + 116 | 0, i6) | 0;
    i21 = 33;
   } else {
    i21 = 33;
   }
  } while (0);
  do {
   if ((i21 | 0) == 33) {
    i21 = 0;
    i18 = i17 + (i16 * 40 & -1) + 28 | 0;
    i26 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    if ((i26 | 0) == 0) {
     break;
    }
    i18 = i26 + 8 | 0;
    i26 = i18 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    HEAP32[i26 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   }
  } while (0);
  i16 = i16 + 1 | 0;
  if (i16 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
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
function __ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i6, i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 688 >> 2] | 0;
 i7 = i1 + 48 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == 0) {
   i9 = __ZN3WTF8nullAtomE;
  } else {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 & 1 | 0) == 0) {
    i11 = i10 >>> 1 & 134217727;
    i12 = i8 + 20 | 0;
   } else {
    i10 = i8 + 24 | 0;
    i11 = HEAP32[i10 + 8 >> 2] | 0;
    i12 = HEAP32[i10 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   i10 = HEAP32[__ZN7WebCore8SVGNames17attributeNameAttrE >> 2] | 0;
   i13 = i10 + 12 | 0;
   i14 = i10 + 16 | 0;
   i15 = 0;
   while (1) {
    i16 = i12 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i10 | 0)) {
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
     i9 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i9 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i12 + (i15 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCoreL22constructQualifiedNameEPKNS_10SVGElementERKN3WTF6StringE(i4, i6, i9 | 0);
 FUNCTION_TABLE_vii[i2 & 127](i1, i4);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 i4 = __ZNK7WebCore10SVGElement15ownerSVGElementEv(i6) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 i6 = HEAP32[i4 + 272 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 208 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore17SMILTimeContainerD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP8[(HEAP32[i4 >> 2] | 0) + 48 | 0] = 1;
 i2 = HEAP32[i7 >> 2] | 0;
 L31 : do {
  if ((i2 | 0) == 0) {
   i18 = 31;
  } else {
   i7 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i7 & 1 | 0) == 0) {
    i19 = i7 >>> 1 & 134217727;
    i20 = i2 + 20 | 0;
   } else {
    i7 = i2 + 24 | 0;
    i19 = HEAP32[i7 + 8 >> 2] | 0;
    i20 = HEAP32[i7 >> 2] | 0;
   }
   if ((i19 | 0) == 0) {
    i18 = 31;
    break;
   }
   i7 = HEAP32[__ZN7WebCore8SVGNames9beginAttrE >> 2] | 0;
   i9 = i7 + 12 | 0;
   i6 = i7 + 16 | 0;
   i12 = 0;
   while (1) {
    i21 = i20 + (i12 << 3) | 0;
    i16 = HEAP32[i21 >> 2] | 0;
    if ((i16 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
      break;
     }
    }
    i16 = i12 + 1 | 0;
    if (i16 >>> 0 < i19 >>> 0) {
     i12 = i16;
    } else {
     i18 = 31;
     break L31;
    }
   }
   if ((i21 | 0) == 0) {
    i18 = 31;
   }
  }
 } while (0);
 do {
  if ((i18 | 0) == 31) {
   i21 = i1 + 136 | 0;
   HEAPF64[i5 >> 3] = +0;
   i19 = i5 + 8 | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = i1 + 144 | 0;
   i2 = HEAP32[i20 >> 2] | 0;
   if ((i2 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i21, i5);
    break;
   } else {
    i12 = HEAP32[i21 >> 2] | 0;
    HEAPF64[i12 + (i2 << 4) >> 3] = +0;
    HEAP32[i12 + (i2 << 4) + 8 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 114 | 0] & 1) != 0) {
  __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore17SMILTimeContainer22notifyIntervalsChangedEv(i5);
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 500 >> 2] & 63](i1);
 STACKTOP = i3;
 return 0;
}
function __ZN7WebCore14SVGSMILElement8progressENS_8SMILTimeEPS0_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 if ((HEAP8[i1 + 112 | 0] & 1) == 0) {
  __ZN7WebCore14SVGSMILElement17connectConditionsEv(i1);
 }
 i14 = i1 + 160 | 0;
 i15 = i14 | 0;
 d16 = +HEAPF64[i15 >> 3];
 d17 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 if (d16 >= d17) {
  HEAPF64[i1 + 200 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
  i18 = 0;
  STACKTOP = i5;
  return i18 | 0;
 }
 i19 = i2 | 0;
 if (+HEAPF64[i19 >> 3] < d16) {
  if ((HEAP32[i1 + 184 >> 2] | 0) == 2) {
   if ((i1 | 0) == (i3 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 672 >> 2] & 63](i1);
   }
   FUNCTION_TABLE_vifii[HEAP32[(HEAP32[i1 >> 2] | 0) + 696 >> 2] & 1](i1, +HEAPF32[i1 + 188 >> 2], HEAP32[i1 + 192 >> 2] | 0, i3);
   d20 = +HEAPF64[i15 >> 3];
  } else {
   d20 = d16;
  }
  HEAPF64[i1 + 200 >> 3] = d20;
  i18 = 0;
  STACKTOP = i5;
  return i18 | 0;
 }
 HEAPF64[i1 + 176 >> 3] = d16;
 i2 = i1 + 114 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  HEAP8[i2] = 0;
  __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
 }
 do {
  if (i4) {
   HEAPF64[i8 >> 3] = +HEAPF64[i19 >> 3];
   __ZN7WebCore14SVGSMILElement33seekToIntervalCorrespondingToTimeENS_8SMILTimeE(i1, i8);
   d16 = +HEAPF64[i19 >> 3];
   d20 = +HEAPF64[i15 >> 3];
   if (d16 >= d20) {
    d21 = d16;
    break;
   }
   HEAPF64[i1 + 200 >> 3] = d20;
   i18 = 0;
   STACKTOP = i5;
   return i18 | 0;
  } else {
   d21 = +HEAPF64[i19 >> 3];
  }
 } while (0);
 HEAP32[i9 >> 2] = 0;
 HEAPF64[i10 >> 3] = d21;
 d21 = +__ZNK7WebCore14SVGSMILElement34calculateAnimationPercentAndRepeatENS_8SMILTimeERj(i1, i10, i9);
 HEAPF64[i11 >> 3] = +HEAPF64[i19 >> 3];
 __ZN7WebCore14SVGSMILElement12checkRestartENS_8SMILTimeE(i1, i11);
 i11 = i1 + 184 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 d20 = +HEAPF64[i19 >> 3];
 d16 = +HEAPF64[i1 + 160 >> 3];
 if (d20 > d16) {
  i22 = 19;
 } else {
  if (d20 < d17 & d20 == d16) {
   i22 = 19;
  } else {
   i22 = 20;
  }
 }
 if ((i22 | 0) == 19) {
  if (d20 < +HEAPF64[i1 + 168 >> 3]) {
   i23 = 1;
  } else {
   i22 = 20;
  }
 }
 if ((i22 | 0) == 20) {
  i15 = (__ZNK7WebCore14SVGSMILElement4fillEv(i1) | 0) == 1;
  i23 = i15 ? 2 : 0;
 }
 HEAP32[i11 >> 2] = i23;
 d20 = +HEAPF64[i19 >> 3];
 do {
  if ((i23 | 0) == 1) {
   if ((__ZNK7WebCore14SVGSMILElement4fillEv(i1) | 0) == 1) {
    i24 = 1;
    break;
   }
   __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i7, i1);
   __ZN7WebCoreplERKNS_8SMILTimeES2_(i6, i14, i7);
   d16 = +HEAPF64[i6 >> 3];
   if (d20 < d16) {
    i24 = 1;
    break;
   }
   if (d20 < d17 & d20 == d16) {
    i24 = 1;
    break;
   }
   i25 = HEAP32[i11 >> 2] | 0;
   i22 = 26;
  } else {
   i25 = i23;
   i22 = 26;
  }
 } while (0);
 if ((i22 | 0) == 26) {
  i24 = (i25 | 0) == 2;
 }
 if (!((i1 | 0) != (i3 | 0) | i24 ^ 1)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 672 >> 2] & 63](i1);
 }
 if (i24) {
  if ((i10 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 692 >> 2] & 63](i1);
  }
  i25 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_vifii[HEAP32[(HEAP32[i1 >> 2] | 0) + 696 >> 2] & 1](i1, d21, i25, i3);
  HEAPF32[i1 + 188 >> 2] = d21;
  HEAP32[i1 + 192 >> 2] = i25;
 }
 do {
  if ((i10 | 0) == 1) {
   if ((HEAP32[i11 >> 2] | 0) == 1) {
    break;
   }
   __ZN7WebCore14SVGSMILElement19endedActiveIntervalEv(i1);
   if ((HEAP32[i11 >> 2] | 0) == 2) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 676 >> 2] & 127](i1, HEAP32[i1 + 96 >> 2] | 0);
  }
 } while (0);
 HEAPF64[i13 >> 3] = +HEAPF64[i19 >> 3];
 __ZNK7WebCore14SVGSMILElement25calculateNextProgressTimeENS_8SMILTimeE(i12, i1, i13);
 HEAPF64[i1 + 200 >> 3] = +HEAPF64[i12 >> 3];
 i18 = i24;
 STACKTOP = i5;
 return i18 | 0;
}
function __ZN7WebCore14SVGSMILElement20isSupportedAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 if (HEAP8[H_BASE + 928 | 0] | 0) {
  i3 = HEAP32[H_BASE + 984 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 984 >> 2] = i5;
  HEAP8[H_BASE + 928 | 0] = 1;
  i3 = i5;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 | 0, i3 | 0, __ZN7WebCore8SVGNames9beginAttrE, __ZN7WebCore8SVGNames9beginAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 16 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames7endAttrE, __ZN7WebCore8SVGNames7endAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 32 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames7durAttrE, __ZN7WebCore8SVGNames7durAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 48 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames13repeatDurAttrE, __ZN7WebCore8SVGNames13repeatDurAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 64 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames15repeatCountAttrE, __ZN7WebCore8SVGNames15repeatCountAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 80 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames7minAttrE, __ZN7WebCore8SVGNames7minAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 96 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames7maxAttrE, __ZN7WebCore8SVGNames7maxAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 112 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore8SVGNames17attributeNameAttrE, __ZN7WebCore8SVGNames17attributeNameAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 128 | 0, HEAP32[H_BASE + 984 >> 2] | 0, __ZN7WebCore10XLinkNames8hrefAttrE, __ZN7WebCore10XLinkNames8hrefAttrE);
  i6 = HEAP32[H_BASE + 984 >> 2] | 0;
 } else {
  i6 = i3;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i1;
  return i7 | 0;
 }
 i7 = (__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i6 | 0, i2) | 0) != 0;
 STACKTOP = i1;
 return i7 | 0;
}
function __ZN7WebCore14SVGSMILElement19svgAttributeChangedERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(__ZN7WebCore14SVGSMILElement20isSupportedAttributeERKNS_13QualifiedNameE(0, i2) | 0)) {
  __ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2);
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 L5 : do {
  if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames7durAttrE >> 2] | 0)) {
   HEAPF64[i1 + 216 >> 3] = +-1;
  } else {
   if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames13repeatDurAttrE >> 2] | 0)) {
    HEAPF64[i1 + 224 >> 3] = +-1;
    break;
   }
   if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames15repeatCountAttrE >> 2] | 0)) {
    HEAPF64[i1 + 232 >> 3] = +-1;
    break;
   }
   if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames7minAttrE >> 2] | 0)) {
    HEAPF64[i1 + 240 >> 3] = +-1;
    break;
   }
   if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames7maxAttrE >> 2] | 0)) {
    HEAPF64[i1 + 248 >> 3] = +-1;
    break;
   }
   if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames17attributeNameAttrE >> 2] | 0)) {
    i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 688 >> 2] | 0;
    i8 = i1 | 0;
    i9 = HEAP32[i1 + 48 >> 2] | 0;
    L22 : do {
     if ((i9 | 0) == 0) {
      i10 = __ZN3WTF8nullAtomE;
     } else {
      i11 = HEAP32[i9 + 4 >> 2] | 0;
      if ((i11 & 1 | 0) == 0) {
       i12 = i11 >>> 1 & 134217727;
       i13 = i9 + 20 | 0;
      } else {
       i11 = i9 + 24 | 0;
       i12 = HEAP32[i11 + 8 >> 2] | 0;
       i13 = HEAP32[i11 >> 2] | 0;
      }
      if ((i12 | 0) == 0) {
       i10 = __ZN3WTF8nullAtomE;
       break;
      }
      i11 = i7 + 12 | 0;
      i14 = i7 + 16 | 0;
      i15 = 0;
      while (1) {
       i16 = i13 + (i15 << 3) | 0;
       i17 = HEAP32[i16 >> 2] | 0;
       if ((i17 | 0) == (i7 | 0)) {
        break;
       }
       if ((HEAP32[i17 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
        if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
         break;
        }
       }
       i17 = i15 + 1 | 0;
       if (i17 >>> 0 < i12 >>> 0) {
        i15 = i17;
       } else {
        i10 = __ZN3WTF8nullAtomE;
        break L22;
       }
      }
      i10 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i15 << 3) + 4 | 0;
     }
    } while (0);
    __ZN7WebCoreL22constructQualifiedNameEPKNS_10SVGElementERKN3WTF6StringE(i4, i8, i10 | 0);
    FUNCTION_TABLE_vii[i2 & 127](i1, i4);
    __ZN7WebCore13QualifiedNameD1Ev(i4);
    break;
   }
   i9 = HEAP32[__ZN7WebCore10XLinkNames8hrefAttrE >> 2] | 0;
   do {
    if ((i7 | 0) != (i9 | 0)) {
     if ((HEAP32[i7 + 12 >> 2] | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
      if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
       break;
      }
     }
     if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
      break L5;
     }
     if ((i7 | 0) == (HEAP32[__ZN7WebCore8SVGNames9beginAttrE >> 2] | 0)) {
      i14 = HEAP32[i1 + 208 >> 2] | 0;
      if ((i14 | 0) == 0) {
       HEAPF64[i5 >> 3] = +0;
      } else {
       __ZNK7WebCore17SMILTimeContainer7elapsedEv(i5, i14);
      }
      __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i5);
      break L5;
     }
     if ((i7 | 0) != (HEAP32[__ZN7WebCore8SVGNames7endAttrE >> 2] | 0)) {
      break L5;
     }
     i14 = HEAP32[i1 + 208 >> 2] | 0;
     if ((i14 | 0) == 0) {
      HEAPF64[i6 >> 3] = +0;
     } else {
      __ZNK7WebCore17SMILTimeContainer7elapsedEv(i6, i14);
     }
     __ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE(i1, 0);
     break L5;
    }
   } while (0);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 500 >> 2] & 63](i1);
   __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i1 | 0);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 664 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SVGSMILElement16parseOffsetValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 __ZNK3WTF6String15stripWhiteSpaceEv(i5, i2);
 i2 = i5 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 33;
  } else {
   i12 = __ZNK3WTF10StringImpl8endsWithEt(i10, 104) | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   i14 = (i13 | 0) == 0;
   if (i12) {
    if (i14) {
     i15 = -1;
    } else {
     i15 = (HEAP32[i13 + 4 >> 2] | 0) - 1 | 0;
    }
    __ZNK3WTF6String9substringEjj(i6, i5, 0, i15);
    d16 = +__ZNK3WTF6String8toDoubleEPb(i6, i4) * +60 * +60;
    i12 = HEAP32[i6 >> 2] | 0;
    if ((i12 | 0) == 0) {
     d17 = d16;
     break;
    }
    i18 = i12 | 0;
    i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     d17 = d16;
     break;
    } else {
     HEAP32[i18 >> 2] = i19;
     d17 = d16;
     break;
    }
   }
   if (i14) {
    i11 = 33;
    break;
   }
   i14 = __ZNK3WTF10StringImpl8endsWithEPKcjb(i13, H_BASE + 112 | 0, 3, 1) | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   i19 = (i13 | 0) == 0;
   if (i14) {
    if (i19) {
     i20 = -3;
    } else {
     i20 = (HEAP32[i13 + 4 >> 2] | 0) - 3 | 0;
    }
    __ZNK3WTF6String9substringEjj(i7, i5, 0, i20);
    d16 = +__ZNK3WTF6String8toDoubleEPb(i7, i4) * +60;
    i14 = HEAP32[i7 >> 2] | 0;
    if ((i14 | 0) == 0) {
     d17 = d16;
     break;
    }
    i18 = i14 | 0;
    i12 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     d17 = d16;
     break;
    } else {
     HEAP32[i18 >> 2] = i12;
     d17 = d16;
     break;
    }
   }
   if (i19) {
    i11 = 33;
    break;
   }
   i19 = __ZNK3WTF10StringImpl8endsWithEPKcjb(i13, H_BASE + 104 | 0, 2, 1) | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   i12 = (i13 | 0) == 0;
   if (i19) {
    if (i12) {
     i21 = -2;
    } else {
     i21 = (HEAP32[i13 + 4 >> 2] | 0) - 2 | 0;
    }
    __ZNK3WTF6String9substringEjj(i8, i5, 0, i21);
    d16 = +__ZNK3WTF6String8toDoubleEPb(i8, i4) / +1e3;
    i19 = HEAP32[i8 >> 2] | 0;
    if ((i19 | 0) == 0) {
     d17 = d16;
     break;
    }
    i18 = i19 | 0;
    i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     d17 = d16;
     break;
    } else {
     HEAP32[i18 >> 2] = i14;
     d17 = d16;
     break;
    }
   }
   if (i12) {
    i11 = 33;
    break;
   }
   if (!(__ZNK3WTF10StringImpl8endsWithEt(i13, 115) | 0)) {
    i11 = 33;
    break;
   }
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i22 = -1;
   } else {
    i22 = (HEAP32[i13 + 4 >> 2] | 0) - 1 | 0;
   }
   __ZNK3WTF6String9substringEjj(i9, i5, 0, i22);
   d16 = +__ZNK3WTF6String8toDoubleEPb(i9, i4);
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    d17 = d16;
    break;
   }
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    d17 = d16;
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    d17 = d16;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 33) {
  d17 = +__ZNK3WTF6String8toDoubleEPb(i5, i4);
 }
 if ((HEAP8[i4] & 1) == 0) {
  HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 } else {
  HEAPF64[i1 >> 3] = d17;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SVGSMILElement31createInstanceTimesFromSyncbaseEPS0_NS0_21NewOrExistingIntervalE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i1 + 108 | 0;
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i14 = i1 + 100 | 0;
 i15 = i2 | 0;
 i16 = i2 + 160 | 0;
 i17 = i9 | 0;
 i18 = i1 + 208 | 0;
 i19 = i11 | 0;
 i20 = i1 + 136 | 0;
 i21 = i5 | 0;
 i22 = i5 + 8 | 0;
 i23 = i1 + 144 | 0;
 i24 = i1 + 140 | 0;
 i25 = i20 | 0;
 i26 = i6 | 0;
 i27 = i12 | 0;
 i28 = i1 + 148 | 0;
 i29 = i8 | 0;
 i30 = i8 + 8 | 0;
 i31 = i1 + 156 | 0;
 i32 = i1 + 152 | 0;
 i33 = i28 | 0;
 i34 = i2 + 168 | 0;
 i2 = i10 | 0;
 i35 = 0;
 while (1) {
  i36 = HEAP32[i14 >> 2] | 0;
  do {
   if ((HEAP32[i36 + (i35 * 40 & -1) >> 2] | 0) == 1) {
    if ((HEAP32[i36 + (i35 * 40 & -1) + 28 >> 2] | 0) != (i15 | 0)) {
     break;
    }
    i37 = i36 + (i35 * 40 & -1) + 16 | 0;
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i36 + (i35 * 40 & -1) + 12 >> 2] | 0, H_BASE + 56 | 0) | 0) {
     __ZN7WebCoreplERKNS_8SMILTimeES2_(i9, i16, i37);
     d38 = +HEAPF64[i17 >> 3];
    } else {
     __ZN7WebCoreplERKNS_8SMILTimeES2_(i10, i34, i37);
     d38 = +HEAPF64[i2 >> 3];
    }
    i37 = HEAP32[i18 >> 2] | 0;
    i39 = (i37 | 0) == 0;
    if ((HEAP32[i36 + (i35 * 40 & -1) + 4 >> 2] | 0) == 0) {
     if (i39) {
      HEAPF64[i19 >> 3] = +0;
     } else {
      __ZNK7WebCore17SMILTimeContainer7elapsedEv(i11, i37);
     }
     HEAPF64[i21 >> 3] = d38;
     HEAP32[i22 >> 2] = 0;
     i40 = HEAP32[i23 >> 2] | 0;
     if ((i40 | 0) == (HEAP32[i24 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i20, i5);
      i41 = HEAP32[i23 >> 2] | 0;
     } else {
      i42 = HEAP32[i25 >> 2] | 0;
      HEAPF64[i42 + (i40 << 4) >> 3] = d38;
      HEAP32[i42 + (i40 << 4) + 8 >> 2] = HEAP32[i22 >> 2];
      i40 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
      HEAP32[i23 >> 2] = i40;
      i41 = i40;
     }
     i40 = HEAP32[i25 >> 2] | 0;
     __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i40, i40 + (i41 << 4) | 0, i4);
     HEAPF64[i26 >> 3] = +HEAPF64[i19 >> 3];
     __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i6);
     break;
    } else {
     if (i39) {
      HEAPF64[i27 >> 3] = +0;
     } else {
      __ZNK7WebCore17SMILTimeContainer7elapsedEv(i12, i37);
     }
     HEAPF64[i29 >> 3] = d38;
     HEAP32[i30 >> 2] = 0;
     i37 = HEAP32[i31 >> 2] | 0;
     if ((i37 | 0) == (HEAP32[i32 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i28, i8);
      i43 = HEAP32[i31 >> 2] | 0;
     } else {
      i39 = HEAP32[i33 >> 2] | 0;
      HEAPF64[i39 + (i37 << 4) >> 3] = d38;
      HEAP32[i39 + (i37 << 4) + 8 >> 2] = HEAP32[i30 >> 2];
      i37 = (HEAP32[i31 >> 2] | 0) + 1 | 0;
      HEAP32[i31 >> 2] = i37;
      i43 = i37;
     }
     i37 = HEAP32[i33 >> 2] | 0;
     __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i37, i37 + (i43 << 4) | 0, i7);
     __ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE(i1, 0);
     break;
    }
   }
  } while (0);
  i35 = i35 + 1 | 0;
  if (i35 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SVGSMILElement19endedActiveIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 - 1 | 0;
 L1 : do {
  if ((i4 | 0) > -1) {
   i5 = i1 + 136 | 0;
   i6 = i3;
   i7 = i4;
   i8 = i3;
   while (1) {
    if (i8 >>> 0 <= i7 >>> 0) {
     break;
    }
    i9 = HEAP32[i5 >> 2] | 0;
    i10 = i9 + (i7 << 4) | 0;
    if ((HEAP32[i9 + (i7 << 4) + 8 >> 2] | 0) == 1) {
     i11 = i9 + (i6 << 4) | 0;
     i12 = i9 + (i8 << 4) | 0;
     do {
      if ((i7 | 0) == 2147483647) {
       if ((i8 | 0) == (i6 | 0)) {
        break;
       }
       i13 = i12;
       i14 = i9 + ((i12 - i11 >> 4) + 2147483647 << 4) | 0;
       while (1) {
        i15 = i13 - 16 | 0;
        i16 = i14 - 16 | 0;
        HEAPF64[i16 >> 3] = +HEAPF64[i15 >> 3];
        HEAP32[i14 - 16 + 8 >> 2] = HEAP32[i13 - 16 + 8 >> 2];
        if ((i15 | 0) == (i11 | 0)) {
         break;
        } else {
         i13 = i15;
         i14 = i16;
        }
       }
      } else {
       if ((i6 | 0) == (i8 | 0)) {
        break;
       } else {
        i17 = i11;
        i18 = i10;
       }
       while (1) {
        HEAPF64[i18 >> 3] = +HEAPF64[i17 >> 3];
        HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
        i14 = i17 + 16 | 0;
        if ((i14 | 0) == (i12 | 0)) {
         break;
        } else {
         i17 = i14;
         i18 = i18 + 16 | 0;
        }
       }
      }
     } while (0);
     i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i12;
     i19 = i12;
    } else {
     i19 = i8;
    }
    i12 = i7 - 1 | 0;
    if ((i12 | 0) > -1) {
     i6 = i7;
     i7 = i12;
     i8 = i19;
    } else {
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i19 = i1 + 156 | 0;
 i2 = HEAP32[i19 >> 2] | 0;
 i18 = i2 - 1 | 0;
 if ((i18 | 0) <= -1) {
  return;
 }
 i17 = i1 + 148 | 0;
 i1 = i2;
 i3 = i18;
 i18 = i2;
 while (1) {
  if (i18 >>> 0 <= i3 >>> 0) {
   i20 = 17;
   break;
  }
  i2 = HEAP32[i17 >> 2] | 0;
  i4 = i2 + (i3 << 4) | 0;
  if ((HEAP32[i2 + (i3 << 4) + 8 >> 2] | 0) == 1) {
   i8 = i2 + (i1 << 4) | 0;
   i7 = i2 + (i18 << 4) | 0;
   do {
    if ((i3 | 0) == 2147483647) {
     if ((i18 | 0) == (i1 | 0)) {
      break;
     }
     i6 = i7;
     i5 = i2 + ((i7 - i8 >> 4) + 2147483647 << 4) | 0;
     while (1) {
      i12 = i6 - 16 | 0;
      i10 = i5 - 16 | 0;
      HEAPF64[i10 >> 3] = +HEAPF64[i12 >> 3];
      HEAP32[i5 - 16 + 8 >> 2] = HEAP32[i6 - 16 + 8 >> 2];
      if ((i12 | 0) == (i8 | 0)) {
       break;
      } else {
       i6 = i12;
       i5 = i10;
      }
     }
    } else {
     if ((i1 | 0) == (i18 | 0)) {
      break;
     } else {
      i21 = i8;
      i22 = i4;
     }
     while (1) {
      HEAPF64[i22 >> 3] = +HEAPF64[i21 >> 3];
      HEAP32[i22 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
      i5 = i21 + 16 | 0;
      if ((i5 | 0) == (i7 | 0)) {
       break;
      } else {
       i21 = i5;
       i22 = i22 + 16 | 0;
      }
     }
    }
   } while (0);
   i7 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i7;
   i23 = i7;
  } else {
   i23 = i18;
  }
  i7 = i3 - 1 | 0;
  if ((i7 | 0) > -1) {
   i1 = i3;
   i3 = i7;
   i18 = i23;
  } else {
   i20 = 29;
   break;
  }
 }
 if ((i20 | 0) == 17) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 29) {
  return;
 }
}
function __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 if (HEAP8[H_BASE + 920 | 0] | 0) {
  i6 = HEAP32[H_BASE + 976 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 976 >> 2] = i8;
  HEAP8[H_BASE + 920 | 0] = 1;
  i6 = i8;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 L5 : do {
  if ((i8 | 0) != 0) {
   i7 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = i1;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i7 & i10;
   i11 = i8 + (i9 << 2) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i1 | 0)) {
    i13 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i10 = i11 << 12 ^ i11;
    i11 = i10 >>> 7 ^ i10;
    i10 = i11 << 2 ^ i11;
    i11 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i14 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      break L5;
     }
     i12 = (i10 | 0) == 0 ? i11 : i10;
     i15 = i12 + i14 & i7;
     i16 = i8 + (i15 << 2) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i1 | 0)) {
      i13 = i16;
      break;
     } else {
      i10 = i12;
      i14 = i15;
      i9 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i6 | 0, i3, i3);
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 i6 = HEAP32[i1 + 120 >> 2] | 0;
 i4 = i3 + (i6 << 2) | 0;
 L15 : do {
  if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
   L17 : do {
    if ((i6 | 0) == 0) {
     i18 = i3;
    } else {
     i13 = i3;
     while (1) {
      i8 = HEAP32[i13 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i18 = i13;
       break L17;
      }
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i4 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i4 | 0)) {
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    __ZN7WebCore14SVGSMILElement31createInstanceTimesFromSyncbaseEPS0_NS0_21NewOrExistingIntervalE(HEAP32[i19 >> 2] | 0, i1, 0);
    i13 = i19 + 4 | 0;
    if ((i13 | 0) == (i4 | 0)) {
     break L15;
    } else {
     i20 = i13;
    }
    while (1) {
     i13 = HEAP32[i20 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i20 + 4 | 0;
     if ((i13 | 0) == (i4 | 0)) {
      break L15;
     } else {
      i20 = i13;
     }
    }
    if ((i20 | 0) == (i4 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
  }
 } while (0);
 i20 = HEAP32[H_BASE + 976 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore14SVGSMILElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i20, i5) | 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
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
  i26 = __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
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
  i26 = __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, d20 = +0;
 i6 = (i3 | 0) == 0;
 i3 = i6 ? i2 + 136 | 0 : i2 + 148 | 0;
 i2 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  if (i6) {
   HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
   return;
  } else {
   HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
   return;
  }
 }
 d7 = +HEAPF64[i4 >> 3];
 i4 = i3 | 0;
 d8 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 i3 = i2;
 i9 = 0;
 L9 : while (1) {
  i10 = i3;
  while (1) {
   if (i10 >>> 0 <= 1 >>> 0) {
    i11 = 13;
    break L9;
   }
   i12 = (i10 - 1 | 0) >>> 1;
   i13 = i12 + i9 | 0;
   if (i2 >>> 0 <= i13 >>> 0) {
    i11 = 9;
    break L9;
   }
   i14 = HEAP32[i4 >> 2] | 0;
   i15 = i14 + (i13 << 4) | 0;
   d16 = +HEAPF64[i15 >> 3];
   if (d16 < d8 & d16 == d7) {
    i17 = i15;
    i18 = i14;
    break L9;
   }
   if (d7 < d16) {
    i10 = i12;
   } else {
    break;
   }
  }
  i14 = i12 + 1 | 0;
  i3 = i10 - i14 | 0;
  i9 = i14 + i9 | 0;
 }
 if ((i11 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if ((i11 | 0) == 13) {
   if (i2 >>> 0 > i9 >>> 0) {
    i3 = HEAP32[i4 >> 2] | 0;
    i17 = i3 + (i9 << 4) | 0;
    i18 = i3;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i9 = i17 - i18 >> 4;
 if (i2 >>> 0 <= i9 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (+HEAPF64[i18 + (i9 << 4) >> 3] < d7) {
  i19 = ((i9 | 0) < (i2 - 1 | 0)) + i9 | 0;
 } else {
  i19 = i9;
 }
 if (i2 >>> 0 <= i19 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 d16 = +HEAPF64[i18 + (i19 << 4) >> 3];
 if (!(d16 != d8 | i6 ^ 1)) {
  HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
  return;
 }
 if (d16 < d7) {
  if (i6) {
   HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
   return;
  } else {
   HEAPF64[i1 >> 3] = d8;
   return;
  }
 }
 if (d16 > d7) {
  HEAPF64[i1 >> 3] = d16;
  return;
 }
 if (i5) {
  HEAPF64[i1 >> 3] = d16;
  return;
 }
 i5 = i2 - 1 | 0;
 i9 = i19;
 while (1) {
  if ((i9 | 0) >= (i5 | 0)) {
   i11 = 38;
   break;
  }
  i19 = i9 + 1 | 0;
  if (i2 >>> 0 <= i19 >>> 0) {
   i11 = 35;
   break;
  }
  d20 = +HEAPF64[i18 + (i19 << 4) >> 3];
  if (d20 > d7) {
   i11 = 37;
   break;
  } else {
   i9 = i19;
  }
 }
 if ((i11 | 0) == 38) {
  if (i6) {
   HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
   return;
  } else {
   HEAPF64[i1 >> 3] = d8;
   return;
  }
 } else if ((i11 | 0) == 37) {
  HEAPF64[i1 >> 3] = d20;
  return;
 } else if ((i11 | 0) == 35) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore14SVGSMILElement33seekToIntervalCorrespondingToTimeENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i1 + 160 | 0;
 i11 = i9 | 0;
 i12 = i10 | 0;
 HEAPF64[i11 >> 3] = +HEAPF64[i12 >> 3];
 __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i8, i1, 0, i9, 0);
 i13 = i8 | 0;
 d14 = +HEAPF64[i13 >> 3];
 d15 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 if (d14 == d15) {
  STACKTOP = i3;
  return;
 }
 i16 = i1 + 168 | 0;
 i17 = i2 | 0;
 i2 = i4 | 0;
 i18 = i5 | 0;
 d19 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 i20 = i1 + 200 | 0;
 i21 = i20 | 0;
 i22 = i6 | 0;
 i23 = i7 | 0;
 d24 = d14;
 L4 : while (1) {
  d14 = +HEAPF64[i16 >> 3];
  d25 = +HEAPF64[i17 >> 3];
  do {
   if (d24 < d14) {
    if (d25 <= d24) {
     if (!(d25 < d19 & d25 == d24)) {
      i26 = 11;
      break;
     }
    }
    HEAPF64[i16 >> 3] = d24;
    HEAPF64[i2 >> 3] = +0;
    HEAPF64[i18 >> 3] = +0;
    __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 0, i4, i5);
    d27 = +HEAPF64[i2 >> 3];
    if (d27 == d15) {
     break;
    }
    if (d27 < d19) {
     if (d27 == +HEAPF64[i12 >> 3]) {
      break;
     }
    }
    HEAPF64[i12 >> 3] = d27;
    HEAPF64[i16 >> 3] = +HEAPF64[i18 >> 3];
    HEAPF64[i21 >> 3] = +HEAPF64[(d27 < +HEAPF64[i21 >> 3] ? i10 : i20) >> 3];
   } else {
    i26 = 11;
   }
  } while (0);
  do {
   if ((i26 | 0) == 11) {
    i26 = 0;
    if (d25 <= d14) {
     if (!(d25 < d19 & d25 == d14)) {
      i26 = 18;
      break L4;
     }
    }
    HEAPF64[i22 >> 3] = +0;
    HEAPF64[i23 >> 3] = +0;
    __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 0, i6, i7);
    d27 = +HEAPF64[i22 >> 3];
    if (d27 == d15) {
     break;
    }
    if (d27 < d19) {
     if (d27 == +HEAPF64[i12 >> 3]) {
      break;
     }
    }
    HEAPF64[i12 >> 3] = d27;
    HEAPF64[i16 >> 3] = +HEAPF64[i23 >> 3];
    HEAPF64[i21 >> 3] = +HEAPF64[(d27 < +HEAPF64[i21 >> 3] ? i10 : i20) >> 3];
   }
  } while (0);
  HEAPF64[i11 >> 3] = +HEAPF64[i12 >> 3];
  __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i8, i1, 0, i9, 0);
  d14 = +HEAPF64[i13 >> 3];
  if (d14 == d15) {
   i26 = 20;
   break;
  } else {
   d24 = d14;
  }
 }
 if ((i26 | 0) == 18) {
  STACKTOP = i3;
  return;
 } else if ((i26 | 0) == 20) {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i6 | 0;
 HEAPF64[i16 >> 3] = +0;
 i17 = i4 | 0;
 d18 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 do {
  if (+HEAPF64[i17 >> 3] == d18) {
   i19 = 6;
  } else {
   __ZNK7WebCore14SVGSMILElement3durEv(i7, i2);
   if (+HEAPF64[i7 >> 3] != d18) {
    i19 = 6;
    break;
   }
   __ZNK7WebCore14SVGSMILElement9repeatDurEv(i8, i2);
   if (+HEAPF64[i8 >> 3] != d18) {
    i19 = 6;
    break;
   }
   __ZNK7WebCore14SVGSMILElement11repeatCountEv(i9, i2);
   if (+HEAPF64[i9 >> 3] != d18) {
    i19 = 6;
    break;
   }
   __ZN7WebCoremiERKNS_8SMILTimeES2_(i10, i4, i3);
   d20 = +HEAPF64[i10 >> 3];
   HEAPF64[i16 >> 3] = d20;
   d21 = d20;
  }
 } while (0);
 do {
  if ((i19 | 0) == 6) {
   if (+HEAPF64[i17 >> 3] < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3]) {
    __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i12, i2);
    __ZN7WebCoremiERKNS_8SMILTimeES2_(i13, i4, i3);
    d18 = +HEAPF64[(+HEAPF64[i13 >> 3] < +HEAPF64[i12 >> 3] ? i13 : i12) >> 3];
    HEAPF64[i16 >> 3] = d18;
    d21 = d18;
    break;
   } else {
    __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i11, i2);
    d18 = +HEAPF64[i11 >> 3];
    HEAPF64[i16 >> 3] = d18;
    d21 = d18;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore14SVGSMILElement8minValueEv(i14, i2);
 __ZNK7WebCore14SVGSMILElement8maxValueEv(i15, i2);
 i2 = i14 | 0;
 d18 = +HEAPF64[i2 >> 3];
 i16 = i15 | 0;
 d20 = +HEAPF64[i16 >> 3];
 if (d18 <= d20) {
  d22 = d18;
  d23 = d20;
  i24 = d22 < d21;
  i25 = i24 ? i6 : i14;
  i26 = i25 | 0;
  d27 = +HEAPF64[i26 >> 3];
  i28 = d27 < d23;
  i29 = i28 ? i25 : i15;
  __ZN7WebCoreplERKNS_8SMILTimeES2_(i1, i3, i29);
  STACKTOP = i5;
  return;
 }
 HEAPF64[i2 >> 3] = +0;
 d20 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 HEAPF64[i16 >> 3] = d20;
 d22 = +0;
 d23 = d20;
 i24 = d22 < d21;
 i25 = i24 ? i6 : i14;
 i26 = i25 | 0;
 d27 = +HEAPF64[i26 >> 3];
 i28 = d27 < d23;
 i29 = i28 ? i25 : i15;
 __ZN7WebCoreplERKNS_8SMILTimeES2_(i1, i3, i29);
 STACKTOP = i5;
 return;
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
function __ZN7WebCore14SVGSMILElement20handleConditionEventEPNS_5EventEPNS0_9ConditionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 64 | 0;
 i11 = i2 + 72 | 0;
 i12 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i12 | 0) == 0) {
  HEAPF64[i9 >> 3] = +0;
 } else {
  __ZNK7WebCore17SMILTimeContainer7elapsedEv(i9, i12);
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  d13 = +HEAPF64[i9 >> 3];
  __ZN7WebCoreplERKNS_8SMILTimeES2_(i10, i9, i3 + 16 | 0);
  i12 = i1 + 136 | 0;
  d14 = +HEAPF64[i10 >> 3];
  HEAPF64[i5 >> 3] = d14;
  i10 = i5 + 8 | 0;
  HEAP32[i10 >> 2] = 0;
  i15 = i1 + 144 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  if ((i16 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i12, i5);
   i17 = HEAP32[i15 >> 2] | 0;
   i18 = i12 | 0;
  } else {
   i5 = i12 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAPF64[i12 + (i16 << 4) >> 3] = d14;
   HEAP32[i12 + (i16 << 4) + 8 >> 2] = HEAP32[i10 >> 2];
   i10 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
   HEAP32[i15 >> 2] = i10;
   i17 = i10;
   i18 = i5;
  }
  i5 = HEAP32[i18 >> 2] | 0;
  __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i5, i5 + (i17 << 4) | 0, i4);
  HEAPF64[i6 >> 3] = d13;
  __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i6);
  STACKTOP = i2;
  return;
 } else {
  __ZN7WebCoreplERKNS_8SMILTimeES2_(i11, i9, i3 + 16 | 0);
  i3 = i1 + 148 | 0;
  d13 = +HEAPF64[i11 >> 3];
  HEAPF64[i8 >> 3] = d13;
  i11 = i8 + 8 | 0;
  HEAP32[i11 >> 2] = 0;
  i9 = i1 + 156 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i1 + 152 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i3, i8);
   i19 = HEAP32[i9 >> 2] | 0;
   i20 = i3 | 0;
  } else {
   i8 = i3 | 0;
   i3 = HEAP32[i8 >> 2] | 0;
   HEAPF64[i3 + (i6 << 4) >> 3] = d13;
   HEAP32[i3 + (i6 << 4) + 8 >> 2] = HEAP32[i11 >> 2];
   i11 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i11;
   i19 = i11;
   i20 = i8;
  }
  i8 = HEAP32[i20 >> 2] | 0;
  __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i8, i8 + (i19 << 4) | 0, i7);
  __ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE(i1, 0);
  STACKTOP = i2;
  return;
 }
}
function __ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, i19 = 0;
 i5 = i2 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 | 0;
 d8 = +HEAPF64[i7 >> 3];
 i9 = i3 | 0;
 d10 = +HEAPF64[i9 >> 3];
 i11 = d10 < d6;
 do {
  if (d6 < d8) {
   i12 = i1 + 8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if (i11) {
    HEAPF64[i7 >> 3] = d10;
    i14 = i3 + 8 | 0;
    HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
    HEAPF64[i9 >> 3] = d8;
    HEAP32[i14 >> 2] = i13;
    i15 = 1;
    d16 = d8;
    break;
   }
   HEAPF64[i7 >> 3] = d6;
   i14 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
   HEAPF64[i5 >> 3] = d8;
   HEAP32[i14 >> 2] = i13;
   d17 = +HEAPF64[i9 >> 3];
   if (d17 >= d8) {
    i15 = 1;
    d16 = d17;
    break;
   }
   HEAPF64[i5 >> 3] = d17;
   i12 = i3 + 8 | 0;
   HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
   HEAPF64[i9 >> 3] = d8;
   HEAP32[i12 >> 2] = i13;
   i15 = 2;
   d16 = d8;
  } else {
   if (!i11) {
    i15 = 0;
    d16 = d10;
    break;
   }
   i13 = i2 + 8 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAPF64[i5 >> 3] = d10;
   i14 = i3 + 8 | 0;
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAPF64[i9 >> 3] = d6;
   HEAP32[i14 >> 2] = i12;
   d17 = +HEAPF64[i5 >> 3];
   d18 = +HEAPF64[i7 >> 3];
   if (d17 >= d18) {
    i15 = 1;
    d16 = d6;
    break;
   }
   i12 = i1 + 8 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   HEAPF64[i7 >> 3] = d17;
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   HEAPF64[i5 >> 3] = d18;
   HEAP32[i13 >> 2] = i14;
   i15 = 2;
   d16 = +HEAPF64[i9 >> 3];
  }
 } while (0);
 i11 = i4 | 0;
 d6 = +HEAPF64[i11 >> 3];
 if (d6 >= d16) {
  i19 = i15;
  return i19 | 0;
 }
 i14 = i3 + 8 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAPF64[i9 >> 3] = d6;
 i13 = i4 + 8 | 0;
 HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
 HEAPF64[i11 >> 3] = d16;
 HEAP32[i13 >> 2] = i3;
 d16 = +HEAPF64[i9 >> 3];
 d6 = +HEAPF64[i5 >> 3];
 if (d16 >= d6) {
  i19 = i15 + 1 | 0;
  return i19 | 0;
 }
 i3 = i2 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAPF64[i5 >> 3] = d16;
 HEAP32[i3 >> 2] = HEAP32[i14 >> 2];
 HEAPF64[i9 >> 3] = d6;
 HEAP32[i14 >> 2] = i2;
 d6 = +HEAPF64[i5 >> 3];
 d16 = +HEAPF64[i7 >> 3];
 if (d6 >= d16) {
  i19 = i15 + 2 | 0;
  return i19 | 0;
 }
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAPF64[i7 >> 3] = d6;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAPF64[i5 >> 3] = d16;
 HEAP32[i3 >> 2] = i1;
 i19 = i15 + 3 | 0;
 return i19 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZNK7WebCore14SVGSMILElement11repeatCountEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 232 | 0;
 d7 = +HEAPF64[i6 >> 3];
 d8 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 if (d7 >= d8 | d7 != +-1) {
  HEAPF64[i1 >> 3] = d7;
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i2 + 48 >> 2] | 0;
 L5 : do {
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
   i2 = HEAP32[__ZN7WebCore8SVGNames15repeatCountAttrE >> 2] | 0;
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
     break L5;
    }
   }
   i10 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i12 + (i15 << 3) + 4 | 0;
  }
 } while (0);
 i12 = i10 | 0;
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
  STACKTOP = i3;
  return;
 }
 if (HEAP8[H_BASE + 912 | 0] | 0) {
  i18 = i16;
  i19 = HEAP32[H_BASE + 968 >> 2] | 0;
 } else {
  i16 = __Znwj(4) | 0;
  i11 = i16;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 80 | 0, 10);
  i9 = i4 | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i16 >> 2] = i4;
  HEAP32[H_BASE + 968 >> 2] = i11;
  HEAP8[H_BASE + 912 | 0] = 1;
  i18 = HEAP32[i12 >> 2] | 0;
  i19 = i11;
 }
 if ((i18 | 0) == (HEAP32[i19 >> 2] | 0)) {
  HEAPF64[i1 >> 3] = d8;
  STACKTOP = i3;
  return;
 } else {
  d8 = +__ZNK3WTF6String8toDoubleEPb(i10 | 0, i5);
  d7 = (HEAP8[i5] & 1) != 0 & d8 > +0 ? d8 : +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
  HEAPF64[i6 >> 3] = d7;
  HEAPF64[i1 >> 3] = d7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 L1 : do {
  if ((HEAP8[i1 + 114 | 0] & 1) == 0) {
   i7 = i2 | 0;
   HEAPF64[i5 >> 3] = +HEAPF64[i7 >> 3];
   __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i4, i1, 0, i5, 1);
   d8 = +HEAPF64[i4 >> 3];
   d9 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
   if (d8 >= d9) {
    break;
   }
   i10 = i1 + 168 | 0;
   i11 = i10 | 0;
   d12 = +HEAPF64[i11 >> 3];
   d13 = +HEAPF64[i7 >> 3];
   do {
    if (d12 >= d13) {
     if (d12 < d9 & d12 == d13) {
      break;
     }
     if (d8 >= +HEAPF64[i1 + 160 >> 3]) {
      break L1;
     }
    }
   } while (0);
   i14 = i1 + 160 | 0;
   i15 = i14 | 0;
   d8 = +HEAPF64[i15 >> 3];
   HEAPF64[i11 >> 3] = d13;
   __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 0, i14, i10);
   d12 = +HEAPF64[i15 >> 3];
   if (!(d12 >= d9 | d12 != d8)) {
    break;
   }
   i15 = i1 + 184 | 0;
   L10 : do {
    if ((HEAP32[i15 >> 2] | 0) == 1) {
     d8 = +HEAPF64[i7 >> 3];
     if (d12 <= d8) {
      break;
     }
     if (d8 > d12) {
      i16 = 12;
     } else {
      if (d8 < d9 & d8 == d12) {
       i16 = 12;
      }
     }
     do {
      if ((i16 | 0) == 12) {
       if (d8 >= +HEAPF64[i1 + 168 >> 3]) {
        break;
       }
       HEAP32[i15 >> 2] = 1;
       break L10;
      }
     } while (0);
     i14 = (__ZNK7WebCore14SVGSMILElement4fillEv(i1) | 0) == 1;
     HEAP32[i15 >> 2] = i14 ? 2 : 0;
     __ZN7WebCore14SVGSMILElement19endedActiveIntervalEv(i1);
    }
   } while (0);
   __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, 1);
  } else {
   __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
  }
 } while (0);
 i16 = i1 + 208 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAPF64[i6 >> 3] = +0;
  HEAPF64[i1 + 200 >> 3] = +0;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore17SMILTimeContainer7elapsedEv(i6, i4);
 i4 = HEAP32[i16 >> 2] | 0;
 HEAPF64[i1 + 200 >> 3] = +HEAPF64[i6 >> 3];
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore17SMILTimeContainer22notifyIntervalsChangedEv(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SVGSMILElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = i1 | 0;
 __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i2);
 __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
 i3 = i1 + 208 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i4 = i1 + 96 | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) != 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] & 255](i1) | 0)) {
      break;
     }
     __ZN7WebCore17SMILTimeContainer10unscheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, HEAP32[i4 >> 2] | 0, i1 + 92 | 0);
    }
   } while (0);
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore17SMILTimeContainerD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = i1 + 156 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 148 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 152 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 144 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i1 + 136 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 108 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 100 | 0;
 if ((i6 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 + (i6 * 40 & -1) | 0;
  i6 = i4;
  while (1) {
   __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i6);
   i6 = i6 + 40 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 92 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i8);
  __ZN7WebCore10SVGElementD2Ev(i2);
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i1 + 92 | 0;
 __ZN7WebCore13QualifiedNameD1Ev(i8);
 __ZN7WebCore10SVGElementD2Ev(i2);
 return;
}
function __ZN7WebCore14SVGSMILElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = i1 | 0;
 __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i2);
 __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
 i3 = i1 + 208 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i4 = i1 + 96 | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) != 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] & 255](i1) | 0)) {
      break;
     }
     __ZN7WebCore17SMILTimeContainer10unscheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, HEAP32[i4 >> 2] | 0, i1 + 92 | 0);
    }
   } while (0);
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore17SMILTimeContainerD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = i1 + 156 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 148 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 152 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i1 + 144 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i1 + 136 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 108 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 100 | 0;
 if ((i6 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 + (i6 * 40 & -1) | 0;
  i6 = i4;
  while (1) {
   __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i6);
   i6 = i6 + 40 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 92 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i8);
  __ZN7WebCore10SVGElementD2Ev(i2);
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i8 = i1 + 92 | 0;
 __ZN7WebCore13QualifiedNameD1Ev(i8);
 __ZN7WebCore10SVGElementD2Ev(i2);
 return;
}
function __ZNSt3__118__insertion_sort_3IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, i20 = 0;
 i3 = i1 + 32 | 0;
 i4 = i1 + 16 | 0;
 d5 = +HEAPF64[i4 >> 3];
 i6 = i1 | 0;
 d7 = +HEAPF64[i6 >> 3];
 i8 = i3 | 0;
 d9 = +HEAPF64[i8 >> 3];
 i10 = d9 < d5;
 do {
  if (d5 < d7) {
   i11 = i1 + 8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if (i10) {
    HEAPF64[i6 >> 3] = d9;
    i13 = i1 + 40 | 0;
    HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
    HEAPF64[i8 >> 3] = d7;
    HEAP32[i13 >> 2] = i12;
    d14 = d7;
    break;
   }
   HEAPF64[i6 >> 3] = d5;
   i13 = i1 + 24 | 0;
   HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
   HEAPF64[i4 >> 3] = d7;
   HEAP32[i13 >> 2] = i12;
   if (d9 >= d7) {
    d14 = d9;
    break;
   }
   HEAPF64[i4 >> 3] = d9;
   i11 = i1 + 40 | 0;
   HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
   HEAPF64[i8 >> 3] = d7;
   HEAP32[i11 >> 2] = i12;
   d14 = d7;
  } else {
   if (!i10) {
    d14 = d9;
    break;
   }
   i12 = i1 + 24 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAPF64[i4 >> 3] = d9;
   i13 = i1 + 40 | 0;
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i12 >> 2] = i15;
   HEAPF64[i8 >> 3] = d5;
   HEAP32[i13 >> 2] = i11;
   if (d9 >= d7) {
    d14 = d5;
    break;
   }
   i11 = i1 + 8 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   HEAPF64[i6 >> 3] = d9;
   HEAP32[i11 >> 2] = i15;
   HEAPF64[i4 >> 3] = d7;
   HEAP32[i12 >> 2] = i13;
   d14 = d5;
  }
 } while (0);
 i4 = i1 + 48 | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 } else {
  i16 = i3;
  i17 = i4;
  d18 = d14;
 }
 while (1) {
  i4 = i17 | 0;
  d14 = +HEAPF64[i4 >> 3];
  if (d14 < d18) {
   i3 = HEAP32[i17 + 8 >> 2] | 0;
   i6 = i16;
   i8 = i17;
   d5 = d18;
   while (1) {
    i19 = i6 | 0;
    HEAPF64[i8 >> 3] = d5;
    i20 = i6 + 8 | 0;
    HEAP32[i8 + 8 >> 2] = HEAP32[i20 >> 2];
    if ((i6 | 0) == (i1 | 0)) {
     break;
    }
    i10 = i6 - 16 | 0;
    d7 = +HEAPF64[i10 >> 3];
    if (d14 < d7) {
     i8 = i6;
     i6 = i10;
     d5 = d7;
    } else {
     break;
    }
   }
   HEAPF64[i19 >> 3] = d14;
   HEAP32[i20 >> 2] = i3;
  }
  i6 = i17 + 16 | 0;
  if ((i6 | 0) == (i2 | 0)) {
   break;
  }
  i16 = i17;
  i17 = i6;
  d18 = +HEAPF64[i4 >> 3];
 }
 return;
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
     i15 = 13;
     break L7;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
     i7 = i2;
     i15 = 12;
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
   i15 = 10;
   break;
  } else {
   i1 = i12;
   i13 = i14;
   i2 = i16;
   i9 = i18;
  }
 }
 if ((i15 | 0) == 10) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 12) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 13) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 40 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 40 & -1) * 40 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + (i6 * 40 & -1) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 i2 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) + 12 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAPF64[i12 + (i6 * 40 & -1) + 16 >> 3] = +HEAPF64[i11 + 16 >> 3];
 HEAP32[i12 + (i6 * 40 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 i2 = HEAP32[i11 + 28 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) + 28 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i11 + 32 >> 2] | 0;
 HEAP32[i12 + (i6 * 40 & -1) + 32 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZNK7WebCore14SVGSMILElement7restartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if (!(HEAP8[H_BASE + 888 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 24 | 0, 5);
  i6 = i4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = i4;
  HEAP32[H_BASE + 944 >> 2] = i5;
  HEAP8[H_BASE + 888 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 896 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 8 | 0, 13);
  i4 = i3 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i5 >> 2] = i3;
  HEAP32[H_BASE + 952 >> 2] = i5;
  HEAP8[H_BASE + 896 | 0] = 1;
 }
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 L7 : do {
  if ((i5 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i8 = i1 >>> 1 & 134217727;
    i9 = i5 + 20 | 0;
   } else {
    i1 = i5 + 24 | 0;
    i8 = HEAP32[i1 + 8 >> 2] | 0;
    i9 = HEAP32[i1 >> 2] | 0;
   }
   if ((i8 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore8SVGNames11restartAttrE >> 2] | 0;
   i3 = i1 + 12 | 0;
   i4 = i1 + 16 | 0;
   i6 = 0;
   while (1) {
    i10 = i9 + (i6 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
      break;
     }
    }
    i11 = i6 + 1 | 0;
    if (i11 >>> 0 < i8 >>> 0) {
     i6 = i11;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L7;
    }
   }
   i7 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i6 << 3) + 4 | 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[HEAP32[H_BASE + 944 >> 2] >> 2] | 0)) {
  i12 = 2;
  STACKTOP = i2;
  return i12 | 0;
 }
 i12 = (i9 | 0) == (HEAP32[HEAP32[H_BASE + 952 >> 2] >> 2] | 0) | 0;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCore14SVGSMILElement12checkRestartENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZNK7WebCore14SVGSMILElement7restartEv(i1) | 0;
 if ((i8 | 0) == 2) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 | 0;
 i2 = i1 + 168 | 0;
 d10 = +HEAPF64[i2 >> 3];
 do {
  if (+HEAPF64[i9 >> 3] < d10) {
   if ((i8 | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   HEAPF64[i7 >> 3] = +HEAPF64[i1 + 160 >> 3];
   __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i6, i1, 0, i7, 0);
   d11 = +HEAPF64[i6 >> 3];
   d12 = +HEAPF64[i2 >> 3];
   if (d11 >= d12) {
    d13 = d12;
    break;
   }
   HEAPF64[i2 >> 3] = d11;
   __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, 1);
   d13 = +HEAPF64[i2 >> 3];
  } else {
   d13 = d10;
  }
 } while (0);
 d10 = +HEAPF64[i9 >> 3];
 do {
  if (d10 <= d13) {
   if (d10 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3] & d10 == d13) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i9 = i4 | 0;
 HEAPF64[i9 >> 3] = +0;
 i6 = i5 | 0;
 HEAPF64[i6 >> 3] = +0;
 __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 0, i4, i5);
 d13 = +HEAPF64[i9 >> 3];
 if (d13 == +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3]) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 160 | 0;
 i5 = i9 | 0;
 do {
  if (d13 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3]) {
   if (d13 != +HEAPF64[i5 >> 3]) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAPF64[i5 >> 3] = d13;
 HEAPF64[i2 >> 3] = +HEAPF64[i6 >> 3];
 __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, 0);
 i6 = i1 + 200 | 0;
 i1 = i6 | 0;
 HEAPF64[i1 >> 3] = +HEAPF64[(+HEAPF64[i5 >> 3] < +HEAPF64[i1 >> 3] ? i9 : i6) >> 3];
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E16lookupForWritingINS_22IdentityHashTranslatorIS3_EEdEENSt3__14pairIPdbEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 << 3) | 0;
 d9 = +HEAPF64[i3 >> 3];
 L1 : do {
  if (d9 == Infinity) {
   i10 = 0;
   i11 = i3;
  } else {
   i12 = (i7 >>> 23) + ~i7 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i8;
   i16 = i3;
   d17 = d9;
   while (1) {
    HEAPF64[tempDoublePtr >> 3] = d17;
    if ((HEAP32[tempDoublePtr >> 2] | 0) == (i2 | 0) & (HEAP32[tempDoublePtr + 4 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    i18 = d17 == -Infinity ? i16 : i13;
    i19 = (i14 | 0) == 0 ? i12 : i14;
    i20 = i19 + i15 & i5;
    i21 = i4 + (i20 << 3) | 0;
    d22 = +HEAPF64[i21 >> 3];
    if (d22 == Infinity) {
     i10 = i18;
     i11 = i21;
     break L1;
    } else {
     i13 = i18;
     i14 = i19;
     i15 = i20;
     i16 = i21;
     d17 = d22;
    }
   }
   HEAP32[i1 >> 2] = i16;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i10 | 0) != 0 ? i10 : i11;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore14SVGSMILElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 208 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAPF64[i3 >> 3] = +0;
 } else {
  __ZNK7WebCore17SMILTimeContainer7elapsedEv(i3, i10);
 }
 do {
  if ((HEAP8[i1 + 114 | 0] & 1) == 0) {
   i10 = i3 | 0;
   i11 = i1 + 168 | 0;
   if (+HEAPF64[i10 >> 3] >= +HEAPF64[i11 >> 3]) {
    i12 = i10;
    break;
   }
   i13 = i1 + 160 | 0;
   d14 = +HEAPF64[i13 >> 3];
   d15 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
   if (d14 >= d15) {
    i12 = i10;
    break;
   }
   HEAPF64[i5 >> 3] = d14;
   __ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb(i4, i1, 1, i5, 0);
   i16 = i4 | 0;
   d14 = +HEAPF64[i16 >> 3];
   if (d14 >= +HEAPF64[i11 >> 3]) {
    i12 = i10;
    break;
   }
   HEAPF64[i7 >> 3] = +HEAPF64[i13 >> 3];
   HEAPF64[i8 >> 3] = d14;
   __ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_(i6, i1, i7, i8);
   d14 = +HEAPF64[i6 >> 3];
   HEAPF64[i16 >> 3] = d14;
   if (d14 < d15) {
    if (d14 == +HEAPF64[i11 >> 3]) {
     i12 = i10;
     break;
    }
   }
   HEAPF64[i11 >> 3] = d14;
   __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, 1);
   i12 = i10;
  } else {
   __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
   i12 = i3 | 0;
  }
 } while (0);
 HEAPF64[i1 + 200 >> 3] = +HEAPF64[i12 >> 3];
 i12 = HEAP32[i9 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17SMILTimeContainer22notifyIntervalsChangedEv(i12);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14SVGSMILElement25calculateNextProgressTimeENS_8SMILTimeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 if ((HEAP32[i2 + 184 >> 2] | 0) != 1) {
  d10 = +HEAPF64[i2 + 160 >> 3];
  d11 = +HEAPF64[i3 >> 3];
  do {
   if (d10 <= d11) {
    if (d10 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3] & d10 == d11) {
     break;
    }
    HEAPF64[i1 >> 3] = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
    STACKTOP = i4;
    return;
   }
  } while (0);
  HEAPF64[i1 >> 3] = d10;
  STACKTOP = i4;
  return;
 }
 i12 = i6;
 _llvm_lifetime_start(8, 0, i12 | 0);
 __ZNK7WebCore14SVGSMILElement3durEv(i5, i2);
 d10 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 HEAPF64[i6 >> 3] = d10;
 d11 = +HEAPF64[(d10 < +HEAPF64[i5 >> 3] ? i6 : i5) >> 3];
 _llvm_lifetime_end(8, 0, i12 | 0);
 do {
  if (d11 != d10) {
   i12 = HEAP32[i2 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore8SVGNames6setTagE >> 2] | 0;
   if ((i12 | 0) == (i5 | 0)) {
    break;
   }
   if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
    if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
     break;
    }
   }
   HEAPF64[i9 >> 3] = +.025;
   __ZN7WebCoreplERKNS_8SMILTimeES2_(i1, i3, i9);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i8, i2);
 __ZN7WebCoreplERKNS_8SMILTimeES2_(i7, i2 + 160 | 0, i8);
 d11 = +HEAPF64[i7 >> 3];
 d13 = +HEAPF64[i2 + 168 >> 3];
 do {
  if (+HEAPF64[i3 >> 3] < d11) {
   if (!(d11 < d13 & d11 < d10)) {
    break;
   }
   HEAPF64[i1 >> 3] = d11;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAPF64[i1 >> 3] = d13;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14SVGSMILElement9repeatDurEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 224 | 0;
 d6 = +HEAPF64[i5 >> 3];
 d7 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 if (d6 >= d7 | d6 != +-1) {
  HEAPF64[i1 >> 3] = d6;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 L5 : do {
  if ((i8 | 0) == 0) {
   i9 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i10 = i2 >>> 1 & 134217727;
    i11 = i8 + 20 | 0;
   } else {
    i2 = i8 + 24 | 0;
    i10 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore8SVGNames13repeatDurAttrE >> 2] | 0;
   i12 = i2 + 12 | 0;
   i13 = i2 + 16 | 0;
   i14 = 0;
   while (1) {
    i15 = i11 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      break;
     }
    }
    i16 = i14 + 1 | 0;
    if (i16 >>> 0 < i10 >>> 0) {
     i14 = i16;
    } else {
     i9 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i9 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i11 + (i14 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i4, i9 | 0);
 d6 = +HEAPF64[i4 >> 3];
 if (d6 < +0) {
  i17 = 16;
 } else {
  if (d6 < d7 & d6 == +0) {
   i17 = 16;
  } else {
   d18 = d6;
  }
 }
 if ((i17 | 0) == 16) {
  d18 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 }
 HEAPF64[i5 >> 3] = d18;
 HEAPF64[i1 >> 3] = d18;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14SVGSMILElement3durEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 216 | 0;
 d6 = +HEAPF64[i5 >> 3];
 d7 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 if (d6 >= d7 | d6 != +-1) {
  HEAPF64[i1 >> 3] = d6;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 L5 : do {
  if ((i8 | 0) == 0) {
   i9 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i10 = i2 >>> 1 & 134217727;
    i11 = i8 + 20 | 0;
   } else {
    i2 = i8 + 24 | 0;
    i10 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore8SVGNames7durAttrE >> 2] | 0;
   i12 = i2 + 12 | 0;
   i13 = i2 + 16 | 0;
   i14 = 0;
   while (1) {
    i15 = i11 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      break;
     }
    }
    i16 = i14 + 1 | 0;
    if (i16 >>> 0 < i10 >>> 0) {
     i14 = i16;
    } else {
     i9 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i9 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i11 + (i14 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i4, i9 | 0);
 d6 = +HEAPF64[i4 >> 3];
 if (d6 < +0) {
  i17 = 16;
 } else {
  if (d6 < d7 & d6 == +0) {
   i17 = 16;
  } else {
   d18 = d6;
  }
 }
 if ((i17 | 0) == 16) {
  d18 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 }
 HEAPF64[i5 >> 3] = d18;
 HEAPF64[i1 >> 3] = d18;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 40 & -1) | 0;
 if (i2 >>> 0 > 107374182 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 40 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 40 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i2 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i6 + 12 >> 2] | 0;
   HEAP32[i7 + 12 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i2 = i8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   HEAPF64[i7 + 16 >> 3] = +HEAPF64[i6 + 16 >> 3];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   HEAP32[i7 + 28 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = HEAP32[i6 + 32 >> 2] | 0;
   HEAP32[i7 + 32 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i2 = i8 + 4 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i6);
   i2 = i6 + 40 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 40 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZNK7WebCore14SVGSMILElement8maxValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 248 | 0;
 d6 = +HEAPF64[i5 >> 3];
 d7 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 if (d6 >= d7 | d6 != +-1) {
  HEAPF64[i1 >> 3] = d6;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 L5 : do {
  if ((i8 | 0) == 0) {
   i9 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i10 = i2 >>> 1 & 134217727;
    i11 = i8 + 20 | 0;
   } else {
    i2 = i8 + 24 | 0;
    i10 = HEAP32[i2 + 8 >> 2] | 0;
    i11 = HEAP32[i2 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore8SVGNames7maxAttrE >> 2] | 0;
   i12 = i2 + 12 | 0;
   i13 = i2 + 16 | 0;
   i14 = 0;
   while (1) {
    i15 = i11 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      break;
     }
    }
    i16 = i14 + 1 | 0;
    if (i16 >>> 0 < i10 >>> 0) {
     i14 = i16;
    } else {
     i9 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i9 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i11 + (i14 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i4, i9 | 0);
 d6 = +HEAPF64[i4 >> 3];
 d17 = d6 == +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3] | d6 < +0 ? d7 : d6;
 HEAPF64[i5 >> 3] = d17;
 HEAPF64[i1 >> 3] = d17;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14SVGSMILElement8minValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 240 | 0;
 d6 = +HEAPF64[i5 >> 3];
 if (d6 >= +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3] | d6 != +-1) {
  HEAPF64[i1 >> 3] = d6;
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 L5 : do {
  if ((i7 | 0) == 0) {
   i8 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i9 = i2 >>> 1 & 134217727;
    i10 = i7 + 20 | 0;
   } else {
    i2 = i7 + 24 | 0;
    i9 = HEAP32[i2 + 8 >> 2] | 0;
    i10 = HEAP32[i2 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i8 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore8SVGNames7minAttrE >> 2] | 0;
   i11 = i2 + 12 | 0;
   i12 = i2 + 16 | 0;
   i13 = 0;
   while (1) {
    i14 = i10 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break;
     }
    }
    i15 = i13 + 1 | 0;
    if (i15 >>> 0 < i9 >>> 0) {
     i13 = i15;
    } else {
     i8 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i8 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE(i4, i8 | 0);
 d6 = +HEAPF64[i4 >> 3];
 d16 = d6 == +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3] | d6 < +0 ? +0 : d6;
 HEAPF64[i5 >> 3] = d16;
 HEAPF64[i1 >> 3] = d16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14SVGSMILElement34calculateAnimationPercentAndRepeatENS_8SMILTimeERj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i6;
 _llvm_lifetime_start(8, 0, i9 | 0);
 __ZNK7WebCore14SVGSMILElement3durEv(i5, i1);
 d10 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 HEAPF64[i6 >> 3] = d10;
 d11 = +HEAPF64[(d10 < +HEAPF64[i5 >> 3] ? i6 : i5) >> 3];
 _llvm_lifetime_end(8, 0, i9 | 0);
 HEAP32[i3 >> 2] = 0;
 if (d11 == d10) {
  HEAP32[i3 >> 2] = 0;
  d12 = +0;
  STACKTOP = i4;
  return +d12;
 }
 if (d11 >= d10 | d11 == +0) {
  HEAP32[i3 >> 2] = 0;
  d12 = +1;
  STACKTOP = i4;
  return +d12;
 }
 i9 = i1 + 160 | 0;
 __ZN7WebCoremiERKNS_8SMILTimeES2_(i7, i2, i9);
 __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i8, i1);
 d13 = +HEAPF64[i2 >> 3];
 i2 = i1 + 168 | 0;
 d14 = +HEAPF64[i2 >> 3];
 do {
  if (d13 <= d14) {
   if (d13 < d10 & d13 == d14) {
    break;
   }
   d15 = +HEAPF64[i7 >> 3];
   if (d15 > +HEAPF64[i8 >> 3]) {
    break;
   }
   HEAP32[i3 >> 2] = ~~(d15 / d11);
   d12 = +_fmod(+d15, +d11) / d11;
   STACKTOP = i4;
   return +d12;
  }
 } while (0);
 HEAP32[i3 >> 2] = ~~(+HEAPF64[i8 >> 3] / d11) - 1;
 d14 = (+HEAPF64[i2 >> 3] - +HEAPF64[i9 >> 3]) / d11;
 d11 = d14 - +Math_floor(d14);
 if (d11 < +1.1920928955078125e-7 | +1 - d11 < +1.1920928955078125e-7) {
  d12 = +1;
  STACKTOP = i4;
  return +d12;
 }
 d12 = d11;
 STACKTOP = i4;
 return +d12;
}
function __ZNK7WebCore14SVGSMILElement4fillEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(HEAP8[H_BASE + 904 | 0] | 0)) {
  i4 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 96 | 0, 6);
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[H_BASE + 960 >> 2] = i4;
  HEAP8[H_BASE + 904 | 0] = 1;
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i7 = i1 >>> 1 & 134217727;
    i8 = i4 + 20 | 0;
   } else {
    i1 = i4 + 24 | 0;
    i7 = HEAP32[i1 + 8 >> 2] | 0;
    i8 = HEAP32[i1 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    i6 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore8SVGNames8fillAttrE >> 2] | 0;
   i3 = i1 + 12 | 0;
   i5 = i1 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i8 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i7 >>> 0) {
     i9 = i11;
    } else {
     i6 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i6 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i8 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i8 = (HEAP32[i6 >> 2] | 0) == (HEAP32[HEAP32[H_BASE + 960 >> 2] >> 2] | 0) | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore14SVGSMILElement16setAttributeNameERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 208 | 0;
 i4 = i1 + 96 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i5 = 8;
  } else {
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    i5 = 8;
    break;
   }
   i6 = i1 + 92 | 0;
   i7 = i6 | 0;
   i8 = i2 | 0;
   if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
    i5 = 8;
    break;
   }
   i9 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 660 >> 2] & 255](i1) | 0) {
    __ZN7WebCore17SMILTimeContainer10unscheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, HEAP32[i4 >> 2] | 0, i6);
   }
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i6);
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 660 >> 2] & 255](i1) | 0)) {
    break;
   }
   __ZN7WebCore17SMILTimeContainer8scheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, HEAP32[i4 >> 2] | 0, i6);
  }
 } while (0);
 if ((i5 | 0) == 8) {
  i5 = i1 + 92 | 0;
  i3 = i2 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  __ZN7WebCore13QualifiedName5derefEv(i5);
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 676 >> 2] & 127](i1, i3);
 return;
}
function __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i3 | 0;
 HEAPF64[i5 >> 3] = +0;
 i6 = i4 | 0;
 HEAPF64[i6 >> 3] = +0;
 __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 1, i3, i4);
 d7 = +HEAPF64[i5 >> 3];
 d8 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 if (d7 == d8) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 160 | 0;
 d9 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 d10 = +HEAPF64[i5 >> 3];
 do {
  if (!(d7 >= d9 | d7 != d10)) {
   d11 = +HEAPF64[i6 >> 3];
   if (d11 >= d9) {
    break;
   }
   if (d11 != +HEAPF64[i1 + 168 >> 3]) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = i5 | 0;
 HEAPF64[i4 >> 3] = d7;
 HEAPF64[i1 + 168 >> 3] = +HEAPF64[i6 >> 3];
 __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, d10 != d8 | 0);
 i6 = i1 + 200 | 0;
 i3 = i6 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[(+HEAPF64[i4 >> 3] < +HEAPF64[i3 >> 3] ? i5 : i6) >> 3];
 i6 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17SMILTimeContainer22notifyIntervalsChangedEv(i6);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 __ZNK7WebCore14SVGSMILElement11repeatCountEv(i6, i2);
 __ZNK7WebCore14SVGSMILElement9repeatDurEv(i7, i2);
 i11 = i5;
 _llvm_lifetime_start(8, 0, i11 | 0);
 __ZNK7WebCore14SVGSMILElement3durEv(i4, i2);
 d12 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 HEAPF64[i5 >> 3] = d12;
 d13 = +HEAPF64[(d12 < +HEAPF64[i4 >> 3] ? i5 : i4) >> 3];
 HEAPF64[i8 >> 3] = d13;
 _llvm_lifetime_end(8, 0, i11 | 0);
 do {
  if (!(d13 >= d12 | d13 == +0)) {
   d14 = +HEAPF64[i7 >> 3];
   d15 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
   if (d14 == d15) {
    if (+HEAPF64[i6 >> 3] == d15) {
     break;
    }
   }
   __ZN7WebCoremlERKNS_8SMILTimeES2_(i9, i8, i6);
   HEAPF64[i10 >> 3] = d12;
   i11 = d12 < d14 ? i10 : i7;
   HEAPF64[i1 >> 3] = +HEAPF64[(+HEAPF64[i11 >> 3] < +HEAPF64[i9 >> 3] ? i11 : i9) >> 3];
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAPF64[i1 >> 3] = d13;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 4) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 4 << 4) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAPF64[i12 + (i6 << 4) >> 3] = +HEAPF64[i11 >> 3];
 HEAP32[i12 + (i6 << 4) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore14SVGSMILElement9ConditionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore14SVGSMILElement21beginByLinkActivationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 + 8 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAPF64[i5 >> 3] = +0;
  d7 = +0;
 } else {
  __ZNK7WebCore17SMILTimeContainer7elapsedEv(i5, i6);
  d7 = +HEAPF64[i5 >> 3];
 }
 i5 = i1 + 136 | 0;
 HEAPF64[i3 >> 3] = d7;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i8 = i1 + 144 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i5, i3);
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = i5 | 0;
 } else {
  i3 = i5 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  HEAPF64[i5 + (i9 << 4) >> 3] = d7;
  HEAP32[i5 + (i9 << 4) + 8 >> 2] = HEAP32[i6 >> 2];
  i6 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
  HEAP32[i8 >> 2] = i6;
  i10 = i6;
  i11 = i3;
 }
 i3 = HEAP32[i11 >> 2] | 0;
 __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i3, i3 + (i10 << 4) | 0, i2 | 0);
 HEAPF64[i4 >> 3] = d7;
 __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
   i3 = i1 | 0;
  } else {
   i4 = i1 | 0;
   __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i4);
   __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 684 >> 2] & 127](i1, 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 688 >> 2] & 127](i1, __ZN7WebCore7anyNameE);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 664 >> 2] & 63](i1);
   i5 = i1 + 208 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    i3 = i4;
    break;
   }
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore17SMILTimeContainerD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    i3 = i4;
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    i3 = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i3, i2);
 return;
}
function __ZN7WebCore14SVGSMILElement12addBeginTimeENS_8SMILTimeES1_NS_18SMILTimeWithOrigin6OriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 + 8 | 0;
 i7 = i5 + 24 | 0;
 i8 = i1 + 136 | 0;
 d9 = +HEAPF64[i3 >> 3];
 HEAPF64[i6 >> 3] = d9;
 i3 = i6 + 8 | 0;
 HEAP32[i3 >> 2] = i4;
 i4 = i1 + 144 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i8, i6);
  i11 = HEAP32[i4 >> 2] | 0;
  i12 = i8 | 0;
 } else {
  i6 = i8 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAPF64[i8 + (i10 << 4) >> 3] = d9;
  HEAP32[i8 + (i10 << 4) + 8 >> 2] = HEAP32[i3 >> 2];
  i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i3;
  i11 = i3;
  i12 = i6;
 }
 i6 = HEAP32[i12 >> 2] | 0;
 __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i6, i6 + (i11 << 4) | 0, i5 | 0);
 HEAPF64[i7 >> 3] = +HEAPF64[i2 >> 3];
 __ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE(i1, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14SVGSMILElement10addEndTimeENS_8SMILTimeES1_NS_18SMILTimeWithOrigin6OriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2 + 8 | 0;
 i6 = i1 + 148 | 0;
 d7 = +HEAPF64[i3 >> 3];
 HEAPF64[i5 >> 3] = d7;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i4;
 i4 = i1 + 156 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 152 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i6, i5);
  i9 = HEAP32[i4 >> 2] | 0;
  i10 = i6 | 0;
 } else {
  i5 = i6 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAPF64[i6 + (i8 << 4) >> 3] = d7;
  HEAP32[i6 + (i8 << 4) + 8 >> 2] = HEAP32[i3 >> 2];
  i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i3;
  i9 = i3;
  i10 = i5;
 }
 i5 = HEAP32[i10 >> 2] | 0;
 __ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_(i5, i5 + (i9 << 4) | 0, i2 | 0);
 __ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE(i1, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SVGSMILElement16setTargetElementEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 208 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 660 >> 2] & 255](i1) | 0)) {
    break;
   }
   i4 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i4 | 0) != 0) {
    __ZN7WebCore17SMILTimeContainer10unscheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, i4, i1 + 92 | 0);
   }
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore17SMILTimeContainer8scheduleEPNS_14SVGSMILElementEPNS_10SVGElementERKNS_13QualifiedNameE(HEAP32[i3 >> 2] | 0, i1, i2, i1 + 92 | 0);
  }
 } while (0);
 i3 = i1 + 96 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 676 >> 2] & 127](i1, i4);
  __ZN7WebCore14SVGSMILElement20disconnectConditionsEv(i1);
 }
 if ((HEAP32[i1 + 184 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 __ZN7WebCore14SVGSMILElement19endedActiveIntervalEv(i1);
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore14SVGSMILElement19resolveNextIntervalEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4 | 0;
 HEAPF64[i6 >> 3] = +0;
 i7 = i5 | 0;
 HEAPF64[i7 >> 3] = +0;
 __ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_(i1, 0, i4, i5);
 d8 = +HEAPF64[i6 >> 3];
 if (d8 == +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3]) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 160 | 0;
 i5 = i6 | 0;
 do {
  if (d8 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3]) {
   if (d8 != +HEAPF64[i5 >> 3]) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAPF64[i5 >> 3] = d8;
 HEAPF64[i1 + 168 >> 3] = +HEAPF64[i7 >> 3];
 if (i2) {
  __ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE(i1, 0);
  d9 = +HEAPF64[i5 >> 3];
 } else {
  d9 = d8;
 }
 i5 = i1 + 200 | 0;
 i1 = i5 | 0;
 HEAPF64[i1 >> 3] = +HEAPF64[(d9 < +HEAPF64[i1 >> 3] ? i6 : i5) >> 3];
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
function __ZNK7WebCore14SVGSMILElement14isContributingENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 184 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 1) {
   if ((__ZNK7WebCore14SVGSMILElement4fillEv(i1) | 0) == 1) {
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   }
   __ZNK7WebCore14SVGSMILElement17repeatingDurationEv(i5, i1);
   __ZN7WebCoreplERKNS_8SMILTimeES2_(i4, i1 + 160 | 0, i5);
   d9 = +HEAPF64[i2 >> 3];
   d10 = +HEAPF64[i4 >> 3];
   if (d9 < d10) {
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   }
   if (d9 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3] & d9 == d10) {
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   } else {
    i11 = HEAP32[i6 >> 2] | 0;
    break;
   }
  } else {
   i11 = i7;
  }
 } while (0);
 i8 = (i11 | 0) == 2;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore14SVGSMILElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0;
 __ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 176;
 i3 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
 HEAP32[i1 + 92 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 _memset(i1 + 96 | 0, 0, 18) | 0;
 HEAP8[i1 + 114 | 0] = 1;
 _memset(i1 + 116 | 0, 0, 44) | 0;
 d4 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 HEAPF64[i1 + 160 >> 3] = d4;
 HEAPF64[i1 + 168 >> 3] = d4;
 HEAPF64[i1 + 176 >> 3] = d4;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAPF32[i1 + 188 >> 2] = +0;
 HEAP32[i1 + 192 >> 2] = 0;
 _memset(i1 + 200 | 0, 0, 16) | 0;
 HEAPF64[i1 + 216 >> 3] = +-1;
 HEAPF64[i1 + 224 >> 3] = +-1;
 HEAPF64[i1 + 232 >> 3] = +-1;
 HEAPF64[i1 + 240 >> 3] = +-1;
 HEAPF64[i1 + 248 >> 3] = +-1;
 __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 4) | 0;
 if (i2 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAPF64[i7 >> 3] = +HEAPF64[i6 >> 3];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   i2 = i6 + 16 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function __ZN7WebCore14SVGSMILElement16addTimeDependentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 116 | 0, i4, i4);
 if (+HEAPF64[i1 + 160 >> 3] >= +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3]) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SVGSMILElement31createInstanceTimesFromSyncbaseEPS0_NS0_21NewOrExistingIntervalE(HEAP32[i4 >> 2] | 0, i1, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SVGSMILElement9ConditionC2ENS1_4TypeENS0_10BeginOrEndERKN3WTF6StringES7_NS_8SMILTimeEi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 16 >> 3] = +HEAPF64[i6 >> 3];
 HEAP32[i1 + 24 >> 2] = i7;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 return;
}
function __ZN7WebCore14SVGSMILElement9ConditionC1ENS1_4TypeENS0_10BeginOrEndERKN3WTF6StringES7_NS_8SMILTimeEi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 16 >> 3] = +HEAPF64[i6 >> 3];
 HEAP32[i1 + 24 >> 2] = i7;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 return;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
}
function __ZNK7WebCore14SVGSMILElement20determineActiveStateENS_8SMILTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, i5 = 0, i6 = 0;
 d3 = +HEAPF64[i2 >> 3];
 d4 = +HEAPF64[i1 + 160 >> 3];
 if (d3 > d4) {
  i5 = 3;
 } else {
  if (d3 < +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3] & d3 == d4) {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if (d3 < +HEAPF64[i1 + 168 >> 3]) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i5 = (__ZNK7WebCore14SVGSMILElement4fillEv(i1) | 0) == 1;
 i6 = i5 ? 2 : 0;
 return i6 | 0;
}
function __ZN7WebCore14SVGSMILElement5resetEv(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 676 >> 2] & 127](i1, HEAP32[i1 + 96 >> 2] | 0);
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP8[i1 + 114 | 0] = 1;
 d2 = +HEAPF64[__ZN7WebCore8SMILTime15unresolvedValueE >> 3];
 HEAPF64[i1 + 160 >> 3] = d2;
 HEAPF64[i1 + 168 >> 3] = d2;
 HEAPF64[i1 + 176 >> 3] = d2;
 HEAPF32[i1 + 188 >> 2] = +0;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAPF64[i1 + 200 >> 3] = +0;
 __ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv(i1);
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
function __ZNK7WebCore14SVGSMILElement14simpleDurationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZNK7WebCore14SVGSMILElement3durEv(i4, i2);
 d6 = +HEAPF64[__ZN7WebCore8SMILTime15indefiniteValueE >> 3];
 HEAPF64[i5 >> 3] = d6;
 HEAPF64[i1 >> 3] = +HEAPF64[(d6 < +HEAPF64[i4 >> 3] ? i5 : i4) >> 3];
 STACKTOP = i3;
 return;
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
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
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
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore22ConditionEventListenereqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) != 4 | (i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i3 | 0;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore14SVGSMILElement19removeTimeDependentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore14SVGSMILElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 116 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22ConditionEventListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore14SVGSMILElement20handleConditionEventEPNS_5EventEPNS0_9ConditionE(i3, 0, HEAP32[i1 + 16 >> 2] | 0);
 return;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function __ZN7WebCore14SVGSMILElement23clearResourceReferencesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21SVGDocumentExtensions35removeAllTargetReferencesForElementEPNS_10SVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1 | 0);
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore14SVGSMILElement7elapsedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAPF64[i1 >> 3] = +0;
  return;
 } else {
  __ZNK7WebCore17SMILTimeContainer7elapsedEv(i1, i3);
  return;
 }
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
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
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
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
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
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
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
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
function v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
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
function dynCall_vifii(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_vifii[i1 & 1](i2 | 0, +d3, i4 | 0, i5 | 0);
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
function __ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 92 >> 2] | 0) != (HEAP32[__ZN7WebCore7anyNameE >> 2] | 0) | 0;
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
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
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
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function __ZNK7WebCore14SVGSMILElement16nextProgressTimeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF64[i1 >> 3] = +HEAPF64[i2 + 200 >> 3];
 return;
}
function __ZN7WebCore10SVGElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement22attributeToPropertyMapEv() | 0;
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
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
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
function __ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZN7WebCore14SVGSMILElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGSMILElementD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE(i1, i2) {
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
function __ZNK7WebCore14SVGSMILElement10isInactiveEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 184 >> 2] | 0) == 0 | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore14SVGSMILElement8isFrozenEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 184 >> 2] | 0) == 2 | 0;
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
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
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
function __ZN7WebCore22ConditionEventListenerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b8(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13EventListener20wasCreatedFromMarkupEv(i1) {
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
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13EventListener18virtualisAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
function __ZNK7WebCore14SVGSMILElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
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
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
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
function __ZN7WebCore22ConditionEventListenerD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b0,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b0,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b0,__ZNK7WebCore10SVGElement14isFilterEffectEv,b0,ii___ZN7WebCore7Element7onerrorEv__wrapper,b0,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b0,__ZNK7WebCore4Node14customPseudoIdEv,b0,__ZNK7WebCore4Node21isMediaControlElementEv,b0,__ZNK7WebCore4Node19isFrameOwnerElementEv,b0,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b0,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b0,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b0,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b0,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper
  ,b0,__ZNK7WebCore7Element17isTextFormControlEv,b0,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b0,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b0,__ZNK7WebCore7Element6prefixEv,b0,__ZNK7WebCore7Element21isDisabledFormControlEv,b0,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b0,__ZNK7WebCore7Element12namespaceURIEv,b0,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b0,__ZNK7WebCore4Node22scriptExecutionContextEv,b0,__ZNK7WebCore7Element12isOutOfRangeEv,b0,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b0,__ZNK7WebCore4Node15isPluginElementEv,b0,__ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv,b0,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b0,__ZN7WebCore4Node11sheetLoadedEv
  ,b0,__ZNK7WebCore7Element23canContainRangeEndPointEv,b0,__ZNK7WebCore4Node20isInsertionPointNodeEv,b0,ii___ZN7WebCore7Element6onloadEv__wrapper,b0,__ZNK7WebCore7Element9isInRangeEv,b0,__ZNK7WebCore7Element20isFormControlElementEv,b0,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b0,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b0,__ZNK7WebCore13EventListener18virtualisAttributeEv,b0,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b0,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b0,__ZNK7WebCore7Element21isOptionalFormControlEv,b0,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b0,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b0,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b0,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv
  ,b0,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b0,__ZNK7WebCore10SVGElement14isGradientStopEv,b0,__ZNK7WebCore7Element18isFrameElementBaseEv,b0,__ZNK7WebCore4Node16nonRendererStyleEv,b0,__ZNK7WebCore10SVGElement15supportsMarkersEv,b0,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b0,__ZNK7WebCore7Element21isRequiredFormControlEv,b0,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b0,ii___ZN7WebCore7Element7onfocusEv__wrapper,b0,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b0,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b0,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b0,__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv,b0,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b0,__ZNK7WebCore10SVGElement13isTextContentEv
  ,b0,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b0,__ZNK7WebCore7Element12willValidateEv,b0,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b0,__ZN7WebCore7Element25isValidFormControlElementEv,b0,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b0,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b0,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b0,__ZNK7WebCore7Element19isSpinButtonElementEv,b0,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b0,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b0,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b0,__ZNK7WebCore4Node19isCharacterDataNodeEv,b0,__ZNK7WebCore7Element9localNameEv,b0,__ZNK7WebCore14SVGSMILElement13isSMILElementEv,b0,ii___ZN7WebCore4Node6toNodeEv__wrapper
  ,b0,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b0,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b0,ii___ZN7WebCore7Element6onblurEv__wrapper,b0,__ZNK7WebCore10SVGElement7isValidEv,b0,__ZNK7WebCore4Node15isMediaControlsEv,b0,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b0,__ZN7WebCore10SVGElement21supplementalTransformEv,b0,__ZNK7WebCore4Node15isAttributeNodeEv,b0,__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore14SVGSMILElement9ConditionC2ENS1_4TypeENS0_10BeginOrEndERKN3WTF6StringES7_NS_8SMILTimeEi,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv,b2,__ZN7WebCore7Element22visibilityStateChangedEv,b2,__ZN7WebCore22ConditionEventListenerD0Ev,b2,__ZN7WebCore14SVGSMILElement20buildPendingResourceEv,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b2,__ZN7WebCore14SVGSMILElementD0Ev,b2,__ZN7WebCore22ConditionEventListenerD1Ev,b2,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b2,__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv
  ,b2,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b2,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b2,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b2,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b2,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b2,vi___ZN7WebCore7Element4blurEv__wrapper,b2,__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv,b2,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b2,__ZN7WebCore14SVGSMILElementD2Ev,b2,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b2,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZNK7WebCore7Element6targetEv,b3,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b3,__ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE,b3,__ZN7WebCore14SVGSMILElement16setAttributeNameERKNS_13QualifiedNameE,b3,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b3,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,__ZN7WebCore14SVGSMILElement19svgAttributeChangedERKNS_13QualifiedNameE,b3,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b3,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper
  ,b3,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b3,vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b3,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b3,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b3,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b3,vii___ZN7WebCore7Element8setFocusEb__wrapper,b3,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b3,vii___ZN7WebCore7Element10setHoveredEb__wrapper
  ,b3,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,__ZN7WebCore14SVGSMILElement16setTargetElementEPNS_10SVGElementE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiii = [b4,b4,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b4,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore14SVGSMILElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b6,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b6,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b6,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b6,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b6,__ZN7WebCore22ConditionEventListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b6,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b6,viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper,b6,viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b7,v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_vifii = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b9,__ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE,b9,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b9,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b9,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b9,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b9,__ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE,b9,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b9,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b9,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b9,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b9,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b9,__ZN7WebCore22ConditionEventListenereqERKNS_13EventListenerE,b9,b9
  ,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b10,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifii: dynCall_vifii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifii": invoke_vifii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "_llvm_trap": _llvm_trap, "_floor": _floor, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames6setTagE": __ZN7WebCore8SVGNames6setTagE, "__ZN7WebCore8SVGNames7maxAttrE": __ZN7WebCore8SVGNames7maxAttrE, "__ZN7WebCore8SVGNames17attributeNameAttrE": __ZN7WebCore8SVGNames17attributeNameAttrE, "__ZN7WebCore8SVGNames7minAttrE": __ZN7WebCore8SVGNames7minAttrE, "__ZN7WebCore8SVGNames13repeatDurAttrE": __ZN7WebCore8SVGNames13repeatDurAttrE, "__ZN7WebCore8SMILTime15indefiniteValueE": __ZN7WebCore8SMILTime15indefiniteValueE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames15repeatCountAttrE": __ZN7WebCore8SVGNames15repeatCountAttrE, "__ZN7WebCore8SVGNames9beginAttrE": __ZN7WebCore8SVGNames9beginAttrE, "__ZN7WebCore8SMILTime15unresolvedValueE": __ZN7WebCore8SMILTime15unresolvedValueE, "__ZN7WebCore8SVGNames11restartAttrE": __ZN7WebCore8SVGNames11restartAttrE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore8SVGNames7endAttrE": __ZN7WebCore8SVGNames7endAttrE, "__ZN7WebCore10XLinkNames8hrefAttrE": __ZN7WebCore10XLinkNames8hrefAttrE, "__ZN7WebCore8SVGNames7durAttrE": __ZN7WebCore8SVGNames7durAttrE, "__ZN7WebCore8SVGNames8fillAttrE": __ZN7WebCore8SVGNames8fillAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vifii = Module["dynCall_vifii"] = asm["dynCall_vifii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore14SVGSMILElement12checkRestartENS_8SMILTimeE","__ZN7WebCore14SVGSMILElement20disconnectConditionsEv","_strlen","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZN7WebCore14SVGSMILElement33seekToIntervalCorrespondingToTimeENS_8SMILTimeE","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore14SVGSMILElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore14SVGSMILElement9repeatDurEv","__ZN7WebCore14SVGSMILElement16rendererIsNeededERKNS_11RenderStyleE","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore14SVGSMILElement8maxValueEv","__ZN7WebCore14SVGSMILElement19removeTimeDependentEPS0_","__ZNK7WebCore14SVGSMILElement17repeatingDurationEv","_memcpy","__ZN7WebCore14SVGSMILElement9ConditionD2Ev","__ZN7WebCore14SVGSMILElement11removedFromERNS_13ContainerNodeE","__ZNK7WebCore14SVGSMILElement3durEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore14SVGSMILElement16setAttributeNameERKNS_13QualifiedNameE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore14SVGSMILElement4fillEv","__ZN7WebCore14SVGSMILElement23clearResourceReferencesEv","__ZNK7WebCore14SVGSMILElement16findInstanceTimeENS0_10BeginOrEndENS_8SMILTimeEb","__ZN7WebCore14SVGSMILElement19svgAttributeChangedERKNS_13QualifiedNameE","__ZN7WebCore22ConditionEventListenerD0Ev","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZNK7WebCore14SVGSMILElement25calculateNextProgressTimeENS_8SMILTimeE","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore14SVGSMILElement20buildPendingResourceEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNSt3__17__sort4IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEjT0_S7_S7_S7_T_","__ZNK7WebCore14SVGSMILElement10isInactiveEv","__ZNK7WebCore14SVGSMILElement14simpleDurationEv","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN7WebCore14SVGSMILElement20handleConditionEventEPNS_5EventEPNS0_9ConditionE","__ZN3WTF9HashTableIPN7WebCore14SVGSMILElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore14SVGSMILElement12insertedIntoERNS_13ContainerNodeE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore14SVGSMILElement21hasValidAttributeNameEv","__ZNSt3__16__sortIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_","__ZNK7WebCore14SVGSMILElement15resolveIntervalEbRNS_8SMILTimeES2_","__ZNK7WebCore7Element12willValidateEv","__ZN3WTF7HashSetIPN7WebCore14SVGSMILElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore14SVGSMILElement19resolveNextIntervalEb","__ZNK7WebCore14SVGSMILElement14isContributingENS_8SMILTimeE","__ZN7WebCore14SVGSMILElement14parseConditionERKN3WTF6StringENS0_10BeginOrEndE","__ZN7WebCore14SVGSMILElementD0Ev","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore14SVGSMILElement34calculateAnimationPercentAndRepeatENS_8SMILTimeERj","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE","__ZN7WebCore22ConditionEventListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZNK7WebCore13EventListener18virtualisAttributeEv","__ZNK7WebCore7Element9isInRangeEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore14SVGSMILElement12addBeginTimeENS_8SMILTimeES1_NS_18SMILTimeWithOrigin6OriginE","__ZN7WebCore22ConditionEventListenerD1Ev","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv","__ZN7WebCore14SVGSMILElement15parseBeginOrEndERKN3WTF6StringENS0_10BeginOrEndE","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCore14SVGSMILElement16parseOffsetValueERKN3WTF6StringE","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZN3WTF6VectorIN7WebCore14SVGSMILElement9ConditionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore14SVGSMILElement8minValueEv","__ZNSt3__118__insertion_sort_3IRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEvT0_S7_T_","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore14SVGSMILElement16resolveActiveEndENS_8SMILTimeES1_","__ZNK7WebCore14SVGSMILElement7restartEv","__ZN7WebCore14SVGSMILElement14endListChangedENS_8SMILTimeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E3addINS_22IdentityHashTranslatorIS3_EERKddEENS_18HashTableAddResultINS_17HashTableIteratorIddS1_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore14SVGSMILElement8progressENS_8SMILTimeEPS0_b","_memset","__ZN7WebCore14SVGSMILElement20isSupportedAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN3WTF9HashTableIddNS_17IdentityExtractorENS_9FloatHashIdEENS_10HashTraitsIdEES5_E16lookupForWritingINS_22IdentityHashTranslatorIS3_EEdEENSt3__14pairIPdbEERKT0_","__ZN7WebCore14SVGSMILElement31notifyDependentsIntervalChangedENS0_21NewOrExistingIntervalE","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZN7WebCore14SVGSMILElement9ConditionC2ENS1_4TypeENS0_10BeginOrEndERKN3WTF6StringES7_NS_8SMILTimeEi","__ZNK7WebCore14SVGSMILElement8isFrozenEv","__ZN7WebCore14SVGSMILElement16beginListChangedENS_8SMILTimeE","__ZN7WebCore14SVGSMILElement10addEndTimeENS_8SMILTimeES1_NS_18SMILTimeWithOrigin6OriginE","__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore10SVGElement13isTextContentEv","__ZNK7WebCore10SVGElement7isValidEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore14SVGSMILElement20determineActiveStateENS_8SMILTimeE","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore14SVGSMILElement16addTimeDependentEPS0_","__ZN7WebCore14SVGSMILElement15parseClockValueERKN3WTF6StringE","__ZNK7WebCore14SVGSMILElement11repeatCountEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZN7WebCore22ConditionEventListenereqERKNS_13EventListenerE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore14SVGSMILElement17connectConditionsEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK7WebCore14SVGSMILElement13isSMILElementEv","__ZN7WebCore14SVGSMILElement5resetEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore14SVGSMILElement19endedActiveIntervalEv","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN7WebCore14SVGSMILElementD2Ev","__ZN7WebCore14SVGSMILElement20resolveFirstIntervalEv","__ZNSt3__127__insertion_sort_incompleteIRNS_6__lessIN7WebCore18SMILTimeWithOriginES3_EEPS3_EEbT0_S7_T_","__ZN3WTF6VectorIN7WebCore18SMILTimeWithOriginELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore14SVGSMILElement16setTargetElementEPNS_10SVGElementE","__ZN7WebCoreL22constructQualifiedNameEPKNS_10SVGElementERKN3WTF6StringE","__ZN7WebCore14SVGSMILElement21beginByLinkActivationEv","__ZN7WebCore14SVGSMILElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore14SVGSMILElement7elapsedEv","__ZNK7WebCore14SVGSMILElement16nextProgressTimeEv","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore14SVGSMILElement31createInstanceTimesFromSyncbaseEPS0_NS0_21NewOrExistingIntervalE","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

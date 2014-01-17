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
H_BASE = parentModule["_malloc"](752 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 752;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore7ElementD1Ev;
/* memory initializer */ allocate([111,110,0,0,0,0,0,0,111,118,101,114,115,101,116,0,101,109,112,116,121,0,0,0,102,105,116,0,0,0,0,0,117,110,100,101,102,105,110,101,100,0,0,0,0,0,0,0,102,97,108,115,101,0,0,0,116,114,117,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore15ScrollAlignment17alignBottomAlwaysE=env.__ZN7WebCore15ScrollAlignment17alignBottomAlwaysE|0;
  var __ZN7WebCore9HTMLNames10pseudoAttrE=env.__ZN7WebCore9HTMLNames10pseudoAttrE|0;
  var __ZN7WebCore8XMLNames8baseAttrE=env.__ZN7WebCore8XMLNames8baseAttrE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZTVN7WebCore19DatasetDOMStringMapE=env.__ZTVN7WebCore19DatasetDOMStringMapE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore9HTMLNames7forAttrE=env.__ZN7WebCore9HTMLNames7forAttrE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore8Document19s_globalTreeVersionE=env.__ZN7WebCore8Document19s_globalTreeVersionE|0;
  var __ZN7WebCore15ScrollAlignment14alignTopAlwaysE=env.__ZN7WebCore15ScrollAlignment14alignTopAlwaysE|0;
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZTVN7WebCore9ClassListE=env.__ZTVN7WebCore9ClassListE|0;
  var __ZN7WebCore9HTMLNames14spellcheckAttrE=env.__ZN7WebCore9HTMLNames14spellcheckAttrE|0;
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var __ZN7WebCore9HTMLNames8langAttrE=env.__ZN7WebCore9HTMLNames8langAttrE|0;
  var __ZN7WebCore9HTMLNames7srcAttrE=env.__ZN7WebCore9HTMLNames7srcAttrE|0;
  var __ZN7WebCore9HTMLNames13uiactionsAttrE=env.__ZN7WebCore9HTMLNames13uiactionsAttrE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames8labelTagE=env.__ZN7WebCore9HTMLNames8labelTagE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+744)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+752)|0;
  var __ZTVN7WebCore7ElementE=(H_BASE+72)|0;
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
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore7Element21classAttributeChangedERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = i1 + 20 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 320 >> 2] | 0;
 if ((i7 | 0) == 0 | (__ZNK7WebCore4Node18inRenderedDocumentEv(i5) | 0) ^ 1) {
  i8 = 0;
 } else {
  i8 = (HEAP32[i1 + 12 >> 2] & 98304) >>> 0 < 32768 >>> 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 82;
  } else {
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 82;
    break;
   }
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP32[i9 + 8 >> 2] | 0;
    i13 = 0;
    L15 : while (1) {
     i14 = HEAP16[i12 + (i13 << 1) >> 1] | 0;
     if ((i14 & 65535) >>> 0 >= 33 >>> 0) {
      i15 = i13;
      break;
     }
     switch (i14 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i15 = i13;
       break L15;
      }
     }
     i14 = i13 + 1 | 0;
     if (i14 >>> 0 < i11 >>> 0) {
      i13 = i14;
     } else {
      i15 = i14;
      break;
     }
    }
    if (i15 >>> 0 >= i11 >>> 0) {
     i10 = 82;
     break;
    }
   } else {
    i13 = HEAP32[i9 + 8 >> 2] | 0;
    i12 = 0;
    L9 : while (1) {
     i14 = HEAP8[i13 + i12 | 0] | 0;
     if ((i14 & 255) >>> 0 >= 33 >>> 0) {
      i16 = i12;
      break;
     }
     switch (i14 & 255) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i16 = i12;
       break L9;
      }
     }
     i14 = i12 + 1 | 0;
     if (i14 >>> 0 < i11 >>> 0) {
      i12 = i14;
     } else {
      i16 = i14;
      break;
     }
    }
    if (i16 >>> 0 >= i11 >>> 0) {
     i10 = 82;
     break;
    }
   }
   i12 = (HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0;
   i13 = i1 + 48 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore7Element23createUniqueElementDataEv(i1);
    i17 = HEAP32[i13 >> 2] | 0;
   } else {
    i17 = i14;
   }
   i14 = HEAP32[i17 + 12 >> 2] | 0;
   i18 = (i14 | 0) == 0;
   if (i18) {
    i19 = i17;
   } else {
    i20 = i14 + 4 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i19 = HEAP32[i13 >> 2] | 0;
   }
   __ZN7WebCore16SpaceSplitString3setERKN3WTF12AtomicStringEb(i19 + 12 | 0, i2, i12);
   i12 = (HEAP32[i13 >> 2] | 0) + 12 | 0;
   L27 : do {
    if (i8) {
     do {
      if (!i18) {
       i13 = i14 + 8 | 0;
       i20 = HEAP32[i13 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       i21 = i4 | 0;
       HEAP32[i21 >> 2] = -2147483648;
       if (i20 >>> 0 > 31 >>> 0) {
        __ZN3WTF9BitVector15resizeOutOfLineEj(i4, i20);
       }
       i22 = i12 | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       L35 : do {
        if ((i23 | 0) == 0) {
         i10 = 39;
        } else {
         i24 = HEAP32[i23 + 8 >> 2] | 0;
         if ((i24 | 0) == 0) {
          i10 = 39;
          break;
         }
         i25 = i7 + 28 | 0;
         i26 = i7 + 36 | 0;
         i27 = i14 + 12 | 0;
         i28 = 0;
         i29 = i23;
         i30 = i24;
         L38 : while (1) {
          if (i30 >>> 0 > i28 >>> 0) {
           i31 = 0;
           i32 = i29;
           i33 = i30;
          } else {
           i10 = 114;
           break;
          }
          while (1) {
           i34 = i32 + 12 + (i28 << 2) | 0;
           if (i31 >>> 0 >= i20 >>> 0) {
            break;
           }
           if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i31 >>> 0) {
            i10 = 52;
            break L38;
           }
           if ((HEAP32[i34 >> 2] | 0) == (HEAP32[i27 + (i31 << 2) >> 2] | 0)) {
            i35 = HEAP32[i21 >> 2] | 0;
            if ((i35 | 0) < 0) {
             i36 = i21;
            } else {
             i36 = (i35 << 1) + 4 | 0;
            }
            i35 = i36 + (i31 >>> 5 << 2) | 0;
            HEAP32[i35 >> 2] = HEAP32[i35 >> 2] | 1 << (i31 & 31);
            i35 = HEAP32[i22 >> 2] | 0;
            i37 = i35;
            i38 = HEAP32[i35 + 8 >> 2] | 0;
           } else {
            i37 = i32;
            i38 = i33;
           }
           if (i38 >>> 0 > i28 >>> 0) {
            i31 = i31 + 1 | 0;
            i32 = i37;
            i33 = i38;
           } else {
            i10 = 113;
            break L38;
           }
          }
          i35 = HEAP32[i34 >> 2] | 0;
          i39 = i35;
          i40 = HEAP32[i25 >> 2] | 0;
          L51 : do {
           if ((i40 | 0) != 0) {
            i41 = HEAP32[i26 >> 2] | 0;
            i42 = i35;
            i43 = i42 + ~(i42 << 15) | 0;
            i42 = (i43 >>> 10 ^ i43) * 9 & -1;
            i43 = i42 >>> 6 ^ i42;
            i42 = i43 + ~(i43 << 11) | 0;
            i43 = i42 >>> 16 ^ i42;
            i42 = i41 & i43;
            i44 = i40 + (i42 << 2) | 0;
            i45 = HEAP32[i44 >> 2] | 0;
            if ((i45 | 0) == (i39 | 0)) {
             i46 = i44;
            } else {
             i44 = (i43 >>> 23) + ~i43 | 0;
             i43 = i44 << 12 ^ i44;
             i44 = i43 >>> 7 ^ i43;
             i43 = i44 << 2 ^ i44;
             i44 = i43 >>> 20 ^ i43 | 1;
             i43 = 0;
             i47 = i42;
             i42 = i45;
             while (1) {
              if ((i42 | 0) == 0) {
               break L51;
              }
              i45 = (i43 | 0) == 0 ? i44 : i43;
              i48 = i45 + i47 & i41;
              i49 = i40 + (i48 << 2) | 0;
              i50 = HEAP32[i49 >> 2] | 0;
              if ((i50 | 0) == (i39 | 0)) {
               i46 = i49;
               break;
              } else {
               i43 = i45;
               i47 = i48;
               i42 = i50;
              }
             }
            }
            if ((i46 | 0) != 0) {
             i10 = 75;
             break L38;
            }
           }
          } while (0);
          i39 = i28 + 1 | 0;
          if (i39 >>> 0 < i24 >>> 0) {
           i28 = i39;
           i29 = i32;
           i30 = i33;
          } else {
           i10 = 39;
           break L35;
          }
         }
         if ((i10 | 0) == 75) {
          i51 = 1;
          i52 = HEAP32[i21 >> 2] | 0;
          break;
         } else if ((i10 | 0) == 52) {
          _WTFCrash();
         } else if ((i10 | 0) == 113) {
          _WTFCrash();
         } else if ((i10 | 0) == 114) {
          _WTFCrash();
         }
        }
       } while (0);
       L65 : do {
        if ((i10 | 0) == 39) {
         i22 = HEAP32[i21 >> 2] | 0;
         i23 = i7 + 28 | 0;
         i30 = i7 + 36 | 0;
         i29 = (i22 << 1) + 4 | 0;
         i28 = i14 + 12 | 0;
         if ((i22 | 0) < 0) {
          i24 = 0;
          L82 : while (1) {
           L84 : do {
            if ((1 << (i24 & 31) & HEAP32[i4 + (i24 >>> 5 << 2) >> 2] | 0) == 0) {
             if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i24 >>> 0) {
              break L82;
             }
             i26 = HEAP32[i28 + (i24 << 2) >> 2] | 0;
             i25 = i26;
             i27 = HEAP32[i23 >> 2] | 0;
             if ((i27 | 0) == 0) {
              break;
             }
             i39 = HEAP32[i30 >> 2] | 0;
             i40 = i26;
             i26 = i40 + ~(i40 << 15) | 0;
             i40 = (i26 >>> 10 ^ i26) * 9 & -1;
             i26 = i40 >>> 6 ^ i40;
             i40 = i26 + ~(i26 << 11) | 0;
             i26 = i40 >>> 16 ^ i40;
             i40 = i39 & i26;
             i35 = i27 + (i40 << 2) | 0;
             i42 = HEAP32[i35 >> 2] | 0;
             if ((i42 | 0) == (i25 | 0)) {
              i53 = i35;
             } else {
              i35 = (i26 >>> 23) + ~i26 | 0;
              i26 = i35 << 12 ^ i35;
              i35 = i26 >>> 7 ^ i26;
              i26 = i35 << 2 ^ i35;
              i35 = i26 >>> 20 ^ i26 | 1;
              i26 = 0;
              i47 = i40;
              i40 = i42;
              while (1) {
               if ((i40 | 0) == 0) {
                break L84;
               }
               i42 = (i26 | 0) == 0 ? i35 : i26;
               i43 = i42 + i47 & i39;
               i41 = i27 + (i43 << 2) | 0;
               i44 = HEAP32[i41 >> 2] | 0;
               if ((i44 | 0) == (i25 | 0)) {
                i53 = i41;
                break;
               } else {
                i26 = i42;
                i47 = i43;
                i40 = i44;
               }
              }
             }
             if ((i53 | 0) != 0) {
              i51 = 1;
              i52 = i22;
              break L65;
             }
            }
           } while (0);
           i40 = i24 + 1 | 0;
           if (i40 >>> 0 < i20 >>> 0) {
            i24 = i40;
           } else {
            i51 = 0;
            i52 = i22;
            break L65;
           }
          }
          _WTFCrash();
         } else {
          i24 = 0;
          L68 : while (1) {
           L70 : do {
            if ((1 << (i24 & 31) & HEAP32[i29 + (i24 >>> 5 << 2) >> 2] | 0) == 0) {
             if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i24 >>> 0) {
              break L68;
             }
             i40 = HEAP32[i28 + (i24 << 2) >> 2] | 0;
             i47 = i40;
             i26 = HEAP32[i23 >> 2] | 0;
             if ((i26 | 0) == 0) {
              break;
             }
             i25 = HEAP32[i30 >> 2] | 0;
             i27 = i40;
             i40 = i27 + ~(i27 << 15) | 0;
             i27 = (i40 >>> 10 ^ i40) * 9 & -1;
             i40 = i27 >>> 6 ^ i27;
             i27 = i40 + ~(i40 << 11) | 0;
             i40 = i27 >>> 16 ^ i27;
             i27 = i25 & i40;
             i39 = i26 + (i27 << 2) | 0;
             i35 = HEAP32[i39 >> 2] | 0;
             if ((i35 | 0) == (i47 | 0)) {
              i54 = i39;
             } else {
              i39 = (i40 >>> 23) + ~i40 | 0;
              i40 = i39 << 12 ^ i39;
              i39 = i40 >>> 7 ^ i40;
              i40 = i39 << 2 ^ i39;
              i39 = i40 >>> 20 ^ i40 | 1;
              i40 = 0;
              i44 = i27;
              i27 = i35;
              while (1) {
               if ((i27 | 0) == 0) {
                break L70;
               }
               i35 = (i40 | 0) == 0 ? i39 : i40;
               i43 = i35 + i44 & i25;
               i42 = i26 + (i43 << 2) | 0;
               i41 = HEAP32[i42 >> 2] | 0;
               if ((i41 | 0) == (i47 | 0)) {
                i54 = i42;
                break;
               } else {
                i40 = i35;
                i44 = i43;
                i27 = i41;
               }
              }
             }
             if ((i54 | 0) != 0) {
              i51 = 1;
              i52 = i22;
              break L65;
             }
            }
           } while (0);
           i27 = i24 + 1 | 0;
           if (i27 >>> 0 < i20 >>> 0) {
            i24 = i27;
           } else {
            i51 = 0;
            i52 = i22;
            break L65;
           }
          }
          _WTFCrash();
         }
        }
       } while (0);
       if ((i52 | 0) < 0) {
        i55 = i51;
        break L27;
       }
       __ZN3WTF9BitVector13OutOfLineBits7destroyEPS1_(i52 << 1);
       i55 = i51;
       break L27;
      }
     } while (0);
     i20 = HEAP32[i12 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i55 = 0;
      break;
     }
     i13 = HEAP32[i20 + 8 >> 2] | 0;
     i21 = i20 + 12 | 0;
     if ((i13 | 0) == 0) {
      i55 = 0;
      break;
     }
     i20 = i7 + 28 | 0;
     i22 = i7 + 36 | 0;
     i24 = 0;
     while (1) {
      i30 = HEAP32[i21 + (i24 << 2) >> 2] | 0;
      i23 = i30;
      i28 = HEAP32[i20 >> 2] | 0;
      L103 : do {
       if ((i28 | 0) != 0) {
        i29 = HEAP32[i22 >> 2] | 0;
        i27 = i30;
        i44 = i27 + ~(i27 << 15) | 0;
        i27 = (i44 >>> 10 ^ i44) * 9 & -1;
        i44 = i27 >>> 6 ^ i27;
        i27 = i44 + ~(i44 << 11) | 0;
        i44 = i27 >>> 16 ^ i27;
        i27 = i29 & i44;
        i40 = i28 + (i27 << 2) | 0;
        i47 = HEAP32[i40 >> 2] | 0;
        if ((i47 | 0) == (i23 | 0)) {
         i56 = i40;
        } else {
         i40 = (i44 >>> 23) + ~i44 | 0;
         i44 = i40 << 12 ^ i40;
         i40 = i44 >>> 7 ^ i44;
         i44 = i40 << 2 ^ i40;
         i40 = i44 >>> 20 ^ i44 | 1;
         i44 = 0;
         i26 = i27;
         i27 = i47;
         while (1) {
          if ((i27 | 0) == 0) {
           break L103;
          }
          i47 = (i44 | 0) == 0 ? i40 : i44;
          i25 = i47 + i26 & i29;
          i39 = i28 + (i25 << 2) | 0;
          i41 = HEAP32[i39 >> 2] | 0;
          if ((i41 | 0) == (i23 | 0)) {
           i56 = i39;
           break;
          } else {
           i44 = i47;
           i26 = i25;
           i27 = i41;
          }
         }
        }
        if ((i56 | 0) != 0) {
         i55 = 1;
         break L27;
        }
       }
      } while (0);
      i23 = i24 + 1 | 0;
      if (i23 >>> 0 < i13 >>> 0) {
       i24 = i23;
      } else {
       i55 = 0;
       break;
      }
     }
    } else {
     i55 = 0;
    }
   } while (0);
   if (i18) {
    i57 = i55;
    break;
   }
   i12 = i14 + 4 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i14);
    i57 = i55;
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    i57 = i55;
    break;
   }
  }
 } while (0);
 L117 : do {
  if ((i10 | 0) == 82) {
   i55 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i55 | 0) == 0) {
    i57 = 0;
    break;
   }
   i56 = HEAP32[i55 + 12 >> 2] | 0;
   L120 : do {
    if (i8) {
     i51 = i56 + 8 | 0;
     if ((i56 | 0) == 0) {
      HEAP32[i55 + 12 >> 2] = 0;
      i57 = 0;
      break L117;
     }
     i52 = HEAP32[i51 >> 2] | 0;
     i54 = i56 + 12 | 0;
     if ((i52 | 0) == 0) {
      HEAP32[i55 + 12 >> 2] = 0;
      i58 = 0;
      break;
     }
     i53 = HEAP32[i51 >> 2] | 0;
     i51 = i7 + 28 | 0;
     i4 = i7 + 36 | 0;
     i33 = 0;
     while (1) {
      if (i53 >>> 0 <= i33 >>> 0) {
       break;
      }
      i32 = HEAP32[i54 + (i33 << 2) >> 2] | 0;
      i46 = i32;
      i34 = HEAP32[i51 >> 2] | 0;
      L131 : do {
       if ((i34 | 0) != 0) {
        i38 = HEAP32[i4 >> 2] | 0;
        i37 = i32;
        i31 = i37 + ~(i37 << 15) | 0;
        i37 = (i31 >>> 10 ^ i31) * 9 & -1;
        i31 = i37 >>> 6 ^ i37;
        i37 = i31 + ~(i31 << 11) | 0;
        i31 = i37 >>> 16 ^ i37;
        i37 = i38 & i31;
        i36 = i34 + (i37 << 2) | 0;
        i2 = HEAP32[i36 >> 2] | 0;
        if ((i2 | 0) == (i46 | 0)) {
         i59 = i36;
        } else {
         i36 = (i31 >>> 23) + ~i31 | 0;
         i31 = i36 << 12 ^ i36;
         i36 = i31 >>> 7 ^ i31;
         i31 = i36 << 2 ^ i36;
         i36 = i31 >>> 20 ^ i31 | 1;
         i31 = 0;
         i19 = i37;
         i37 = i2;
         while (1) {
          if ((i37 | 0) == 0) {
           break L131;
          }
          i2 = (i31 | 0) == 0 ? i36 : i31;
          i17 = i2 + i19 & i38;
          i6 = i34 + (i17 << 2) | 0;
          i16 = HEAP32[i6 >> 2] | 0;
          if ((i16 | 0) == (i46 | 0)) {
           i59 = i6;
           break;
          } else {
           i31 = i2;
           i19 = i17;
           i37 = i16;
          }
         }
        }
        if ((i59 | 0) != 0) {
         i60 = 1;
         i10 = 98;
         break L120;
        }
       }
      } while (0);
      i46 = i33 + 1 | 0;
      if (i46 >>> 0 < i52 >>> 0) {
       i33 = i46;
      } else {
       i60 = 0;
       i10 = 98;
       break L120;
      }
     }
     _WTFCrash();
    } else {
     i60 = 0;
     i10 = 98;
    }
   } while (0);
   if ((i10 | 0) == 98) {
    HEAP32[i55 + 12 >> 2] = 0;
    if ((i56 | 0) == 0) {
     i57 = i60;
     break;
    } else {
     i58 = i60;
    }
   }
   i14 = i56 + 4 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i56);
    i57 = i58;
    break;
   } else {
    HEAP32[i14 >> 2] = i18;
    i57 = i58;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
   i58 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 52 >> 2] | 0;
   if ((i58 | 0) == 0) {
    break;
   }
   i60 = i58 + 8 | 0;
   i58 = HEAP32[i60 >> 2] | 0;
   HEAP32[i60 >> 2] = 0;
   if ((i58 | 0) == 0) {
    break;
   }
   i60 = i58 + 4 | 0;
   i10 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i58);
    break;
   } else {
    HEAP32[i60 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if (!i57) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 524288 | 0) != 0) {
  __ZN7WebCore7Element29detachAllAttrNodesFromElementEv(i1);
 }
 i7 = i2 + 48 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i1 + 48 | 0;
   i10 = i9;
   i11 = HEAP32[i9 >> 2] | 0;
  } else {
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i9 & 1073741824 | 0) == 0) {
    i12 = i9;
    i13 = i8;
   } else {
    __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i2);
    i9 = HEAP32[i7 >> 2] | 0;
    i12 = HEAP32[i9 + 4 >> 2] | 0;
    i13 = i9;
   }
   if ((i12 | 0) < 0) {
    __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore7anyNameE);
    i14 = HEAP32[i7 >> 2] | 0;
   } else {
    i14 = i13;
   }
   i9 = i1 + 48 | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i10 = i9;
    i11 = i15;
    break;
   }
   L13 : do {
    if ((i15 | 0) == 0) {
     i16 = __ZN3WTF8nullAtomE;
    } else {
     if ((HEAP32[i15 + 16 >> 2] | 0) == 0) {
      i16 = __ZN3WTF8nullAtomE;
      break;
     }
     i17 = HEAP32[i15 + 4 >> 2] | 0;
     if ((i17 & 1 | 0) == 0) {
      i18 = i17 >>> 1 & 134217727;
      i19 = i15 + 20 | 0;
     } else {
      i17 = i15 + 24 | 0;
      i18 = HEAP32[i17 + 8 >> 2] | 0;
      i19 = HEAP32[i17 >> 2] | 0;
     }
     if ((i18 | 0) == 0) {
      i16 = __ZN3WTF8nullAtomE;
      break;
     }
     i17 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i20 = i17 + 12 | 0;
     i21 = i17 + 16 | 0;
     i22 = 0;
     while (1) {
      i23 = i19 + (i22 << 3) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      if ((i24 | 0) == (i17 | 0)) {
       break;
      }
      if ((HEAP32[i24 + 12 >> 2] | 0) == (HEAP32[i20 >> 2] | 0)) {
       if ((HEAP32[i24 + 16 >> 2] | 0) == (HEAP32[i21 >> 2] | 0)) {
        break;
       }
      }
      i24 = i22 + 1 | 0;
      if (i24 >>> 0 < i18 >>> 0) {
       i22 = i24;
      } else {
       i16 = __ZN3WTF8nullAtomE;
       break L13;
      }
     }
     i16 = (i23 | 0) == 0 ? __ZN3WTF8nullAtomE : i19 + (i22 << 3) + 4 | 0;
    }
   } while (0);
   L29 : do {
    if ((HEAP32[i14 + 16 >> 2] | 0) == 0) {
     i25 = __ZN3WTF8nullAtomE;
    } else {
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     if ((i15 & 1 | 0) == 0) {
      i26 = i15 >>> 1 & 134217727;
      i27 = i14 + 20 | 0;
     } else {
      i15 = i14 + 24 | 0;
      i26 = HEAP32[i15 + 8 >> 2] | 0;
      i27 = HEAP32[i15 >> 2] | 0;
     }
     if ((i26 | 0) == 0) {
      i25 = __ZN3WTF8nullAtomE;
      break;
     }
     i15 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i21 = i15 + 12 | 0;
     i20 = i15 + 16 | 0;
     i17 = 0;
     while (1) {
      i28 = i27 + (i17 << 3) | 0;
      i24 = HEAP32[i28 >> 2] | 0;
      if ((i24 | 0) == (i15 | 0)) {
       break;
      }
      if ((HEAP32[i24 + 12 >> 2] | 0) == (HEAP32[i21 >> 2] | 0)) {
       if ((HEAP32[i24 + 16 >> 2] | 0) == (HEAP32[i20 >> 2] | 0)) {
        break;
       }
      }
      i24 = i17 + 1 | 0;
      if (i24 >>> 0 < i26 >>> 0) {
       i17 = i24;
      } else {
       i25 = __ZN3WTF8nullAtomE;
       break L29;
      }
     }
     i25 = (i28 | 0) == 0 ? __ZN3WTF8nullAtomE : i27 + (i17 << 3) + 4 | 0;
    }
   } while (0);
   i20 = HEAP32[i16 >> 2] | 0;
   i21 = (i20 | 0) == 0;
   if (i21) {
    if ((HEAP32[i25 >> 2] | 0) != 0) {
     i29 = 39;
    }
   } else {
    i29 = 39;
   }
   do {
    if ((i29 | 0) == 39) {
     if ((HEAP32[i6 >> 2] & 8388864 | 0) == 0) {
      break;
     }
     i15 = i25 | 0;
     i22 = HEAP32[i15 >> 2] | 0;
     if ((i20 | 0) == (i22 | 0)) {
      break;
     }
     i24 = i1 + 20 | 0;
     i30 = HEAP32[i24 >> 2] | 0;
     do {
      if (i21) {
       i31 = i22;
      } else {
       if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
        i31 = i22;
        break;
       }
       __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i30, i20, i1);
       i31 = HEAP32[i15 >> 2] | 0;
      }
     } while (0);
     do {
      if ((i31 | 0) != 0) {
       if ((HEAP32[i31 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i30, i31, i1);
      }
     } while (0);
     if ((HEAP32[i6 >> 2] & 256 | 0) == 0) {
      break;
     }
     i30 = HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] | 0;
     if ((HEAP8[i30 + 1576 | 0] & 1) == 0) {
      break;
     }
     __ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE(i1, i30, i16, i25, 1);
    }
   } while (0);
   i20 = HEAP32[i9 >> 2] | 0;
   L61 : do {
    if ((i20 | 0) == 0) {
     i32 = __ZN3WTF8nullAtomE;
    } else {
     i21 = HEAP32[i20 + 4 >> 2] | 0;
     if ((i21 & 268435456 | 0) == 0) {
      i32 = __ZN3WTF8nullAtomE;
      break;
     }
     if ((i21 & 1 | 0) == 0) {
      i33 = i21 >>> 1 & 134217727;
      i34 = i20 + 20 | 0;
     } else {
      i21 = i20 + 24 | 0;
      i33 = HEAP32[i21 + 8 >> 2] | 0;
      i34 = HEAP32[i21 >> 2] | 0;
     }
     if ((i33 | 0) == 0) {
      i32 = __ZN3WTF8nullAtomE;
      break;
     }
     i21 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
     i30 = i21 + 12 | 0;
     i15 = i21 + 16 | 0;
     i22 = 0;
     while (1) {
      i35 = i34 + (i22 << 3) | 0;
      i17 = HEAP32[i35 >> 2] | 0;
      if ((i17 | 0) == (i21 | 0)) {
       break;
      }
      if ((HEAP32[i17 + 12 >> 2] | 0) == (HEAP32[i30 >> 2] | 0)) {
       if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
        break;
       }
      }
      i17 = i22 + 1 | 0;
      if (i17 >>> 0 < i33 >>> 0) {
       i22 = i17;
      } else {
       i32 = __ZN3WTF8nullAtomE;
       break L61;
      }
     }
     i32 = (i35 | 0) == 0 ? __ZN3WTF8nullAtomE : i34 + (i22 << 3) + 4 | 0;
    }
   } while (0);
   i20 = HEAP32[i7 >> 2] | 0;
   L77 : do {
    if ((i20 | 0) == 0) {
     i36 = __ZN3WTF8nullAtomE;
    } else {
     i9 = HEAP32[i20 + 4 >> 2] | 0;
     if ((i9 & 268435456 | 0) == 0) {
      i36 = __ZN3WTF8nullAtomE;
      break;
     }
     if ((i9 & 1 | 0) == 0) {
      i37 = i9 >>> 1 & 134217727;
      i38 = i20 + 20 | 0;
     } else {
      i9 = i20 + 24 | 0;
      i37 = HEAP32[i9 + 8 >> 2] | 0;
      i38 = HEAP32[i9 >> 2] | 0;
     }
     if ((i37 | 0) == 0) {
      i36 = __ZN3WTF8nullAtomE;
      break;
     }
     i9 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
     i15 = i9 + 12 | 0;
     i30 = i9 + 16 | 0;
     i21 = 0;
     while (1) {
      i39 = i38 + (i21 << 3) | 0;
      i24 = HEAP32[i39 >> 2] | 0;
      if ((i24 | 0) == (i9 | 0)) {
       break;
      }
      if ((HEAP32[i24 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       if ((HEAP32[i24 + 16 >> 2] | 0) == (HEAP32[i30 >> 2] | 0)) {
        break;
       }
      }
      i24 = i21 + 1 | 0;
      if (i24 >>> 0 < i37 >>> 0) {
       i21 = i24;
      } else {
       i36 = __ZN3WTF8nullAtomE;
       break L77;
      }
     }
     i36 = (i39 | 0) == 0 ? __ZN3WTF8nullAtomE : i38 + (i21 << 3) + 4 | 0;
    }
   } while (0);
   i20 = HEAP32[i32 >> 2] | 0;
   i30 = (i20 | 0) == 0;
   if (i30) {
    if ((HEAP32[i36 >> 2] | 0) != 0) {
     i29 = 76;
    }
   } else {
    i29 = 76;
   }
   do {
    if ((i29 | 0) == 76) {
     if ((HEAP32[i6 >> 2] & 8388864 | 0) == 0) {
      break;
     }
     i15 = i36 | 0;
     i9 = HEAP32[i15 >> 2] | 0;
     if ((i20 | 0) == (i9 | 0)) {
      break;
     }
     i22 = i1 + 20 | 0;
     i24 = HEAP32[i22 >> 2] | 0;
     do {
      if (i30) {
       i40 = i9;
      } else {
       if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
        i40 = i9;
        break;
       }
       __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i24, i20, i1);
       i40 = HEAP32[i15 >> 2] | 0;
      }
     } while (0);
     do {
      if ((i40 | 0) != 0) {
       if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i24, i40, i1);
      }
     } while (0);
     if ((HEAP32[i6 >> 2] & 256 | 0) == 0) {
      break;
     }
     i24 = HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0;
     if ((HEAP8[i24 + 1576 | 0] & 1) == 0) {
      break;
     }
     __ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_(i1, i24, i32, i36);
    }
   } while (0);
   i20 = HEAP32[i7 >> 2] | 0;
   do {
    if ((HEAP32[i20 + 4 >> 2] & 1 | 0) == 0) {
     i29 = 96;
    } else {
     if ((HEAP32[i20 + 20 >> 2] | 0) != 0) {
      i29 = 96;
      break;
     }
     i30 = HEAP32[i20 + 8 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i41 = i20;
     } else {
      if (__ZNK7WebCore15StyleProperties15hasCSSOMWrapperEv(i30) | 0) {
       i29 = 96;
       break;
      }
      i41 = HEAP32[i7 >> 2] | 0;
     }
     __ZNK7WebCore17UniqueElementData17makeShareableCopyEv(i4, i41);
     i30 = HEAP32[i4 >> 2] | 0;
     i24 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i30;
     if ((i24 | 0) == 0) {
      i42 = i30;
      break;
     }
     i30 = i24 | 0;
     i15 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore11ElementData7destroyEv(i24);
      i29 = 96;
      break;
     } else {
      HEAP32[i30 >> 2] = i15;
      i29 = 96;
      break;
     }
    }
   } while (0);
   if ((i29 | 0) == 96) {
    i42 = HEAP32[i7 >> 2] | 0;
   }
   i20 = i1 + 48 | 0;
   do {
    if ((HEAP32[i42 + 4 >> 2] & 1 | 0) == 0) {
     if ((i42 | 0) != 0) {
      i15 = i42 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     }
     i15 = i20 | 0;
     i30 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i42;
     if ((i30 | 0) == 0) {
      break;
     }
     i15 = i30 | 0;
     i24 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore11ElementData7destroyEv(i30);
      break;
     } else {
      HEAP32[i15 >> 2] = i24;
      break;
     }
    } else {
     __ZNK7WebCore11ElementData14makeUniqueCopyEv(i5, i42);
     i24 = i20 | 0;
     i15 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = HEAP32[i5 >> 2];
     if ((i15 | 0) == 0) {
      break;
     }
     i24 = i15 | 0;
     i30 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore11ElementData7destroyEv(i15);
      break;
     } else {
      HEAP32[i24 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i30 = i20 | 0;
   i24 = HEAP32[i30 >> 2] | 0;
   i15 = HEAP32[i24 + 4 >> 2] | 0;
   if ((i15 & 1 | 0) == 0) {
    i43 = i15 >>> 1 & 134217727;
   } else {
    i43 = HEAP32[i24 + 32 >> 2] | 0;
   }
   if ((i43 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i9 = i1;
   i21 = 0;
   i17 = i24;
   i24 = i15;
   while (1) {
    i15 = (i24 & 1 | 0) == 0;
    if (i15) {
     i44 = i24 >>> 1 & 134217727;
    } else {
     i44 = HEAP32[i17 + 32 >> 2] | 0;
    }
    if (i44 >>> 0 <= i21 >>> 0) {
     i29 = 117;
     break;
    }
    if (i15) {
     i45 = i17 + 20 | 0;
    } else {
     i45 = HEAP32[i17 + 24 >> 2] | 0;
    }
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 308 >> 2] & 3](i1, i45 + (i21 << 3) | 0, i45 + (i21 << 3) + 4 | 0, 1);
    i15 = i21 + 1 | 0;
    if (i15 >>> 0 >= i43 >>> 0) {
     i29 = 128;
     break;
    }
    i46 = HEAP32[i30 >> 2] | 0;
    i21 = i15;
    i17 = i46;
    i24 = HEAP32[i46 + 4 >> 2] | 0;
   }
   if ((i29 | 0) == 117) {
    _WTFCrash();
   } else if ((i29 | 0) == 128) {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i11 | 0;
 i29 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i29 | 0) == 0) {
  __ZN7WebCore11ElementData7destroyEv(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i29;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL27checkForSiblingStyleChangesEPNS_7ElementENS_16SiblingCheckTypeES1_S1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = i1 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 32 | 0;
 if ((i7 & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i5) | 0;
   i10 = i9;
   i11 = HEAP32[i6 >> 2] | 0;
  } else {
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
    i10 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
    i11 = i7;
    break;
   } else {
    i10 = HEAP32[i8 + 36 >> 2] | 0;
    i11 = i7;
    break;
   }
  }
 } while (0);
 i7 = (i10 | 0) == 0;
 i8 = (i11 & 2048 | 0) == 0;
 do {
  if (i7) {
   if (i8) {
    return;
   }
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 4 | 0) != 0) {
    i12 = 16;
    break;
   }
   return;
  } else {
   if (i8) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 + 52 >> 2] & 2097152 | 0) == 0) {
    i12 = 16;
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i12 = 17;
   } else {
    i12 = 16;
   }
  }
 } while (0);
 if ((i12 | 0) == 16) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
  i12 = 17;
 }
 do {
  if ((i12 | 0) == 17) {
   if (!i7) {
    break;
   }
   return;
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 & 114688 | 0) == 0 | (i7 & 2048 | 0) == 0) {
   i13 = i7;
  } else {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 1024 | 0) != 0) {
    return;
   }
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 2048 | 0) == 0) {
    i13 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    return;
   }
  }
 } while (0);
 i7 = (i4 | 0) == 0;
 do {
  if (!((i13 & 33554432 | 0) == 0 | i7)) {
   i12 = i1 + 36 | 0;
   while (1) {
    i10 = HEAP32[i12 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i14 = 0;
     break;
    }
    if ((HEAP32[i10 + 12 >> 2] & 4 | 0) != 0) {
     i14 = i10;
     break;
    }
    i12 = i10 + 28 | 0;
   }
   i12 = (i14 | 0) == (i4 | 0);
   do {
    if (!i12) {
     i10 = i4 | 0;
     i8 = i4 + 12 | 0;
     i11 = i4 + 32 | 0;
     if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
      i15 = i11 | 0;
     } else {
      i15 = HEAP32[i11 >> 2] | 0;
     }
     i9 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i9 | 0) == 0) {
       i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 236 >> 2] & 255](i10) | 0;
      } else {
       if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
        i16 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i16 = HEAP32[i9 + 36 >> 2] | 0;
        break;
       }
      }
     } while (0);
     if ((i16 | 0) == 0) {
      break;
     }
     if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
      i17 = i11 | 0;
     } else {
      i17 = HEAP32[i11 >> 2] | 0;
     }
     i9 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i9 | 0) == 0) {
       i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 236 >> 2] & 255](i10) | 0;
      } else {
       if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
        i18 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i18 = HEAP32[i9 + 36 >> 2] | 0;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i18 + 52 >> 2] & 4194304 | 0) == 0) {
      break;
     }
     __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 32768);
    }
   } while (0);
   if ((i2 | 0) != 1) {
    break;
   }
   if (!(i12 & (i14 | 0) != 0)) {
    break;
   }
   i9 = i14 + 12 | 0;
   i11 = i14 + 32 | 0;
   if ((HEAP32[i9 >> 2] & 2048 | 0) == 0) {
    i19 = i11 | 0;
   } else {
    i19 = HEAP32[i11 >> 2] | 0;
   }
   i8 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 236 >> 2] & 255](i14) | 0;
    } else {
     if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
      i20 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i20 = HEAP32[i8 + 36 >> 2] | 0;
      break;
     }
    }
   } while (0);
   if ((i20 | 0) != 0) {
    if ((HEAP32[i9 >> 2] & 2048 | 0) == 0) {
     i21 = i11 | 0;
    } else {
     i21 = HEAP32[i11 >> 2] | 0;
    }
    i8 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i8 | 0) == 0) {
      i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 236 >> 2] & 255](i14) | 0;
     } else {
      if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
       i22 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i22 = HEAP32[i8 + 36 >> 2] | 0;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i22 + 52 >> 2] & 4194304 | 0) != 0) {
     break;
    }
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i14, 32768);
  }
 } while (0);
 i14 = (i3 | 0) == 0;
 do {
  if (!((HEAP32[i6 >> 2] & 67108864 | 0) == 0 | i14)) {
   i22 = i1 + 40 | 0;
   while (1) {
    i21 = HEAP32[i22 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i23 = 0;
     break;
    }
    if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
     i22 = i21 + 24 | 0;
    } else {
     i23 = i21;
     break;
    }
   }
   i22 = (i23 | 0) == (i3 | 0);
   do {
    if (!i22) {
     i21 = i3 | 0;
     i20 = i3 + 12 | 0;
     i19 = i3 + 32 | 0;
     if ((HEAP32[i20 >> 2] & 2048 | 0) == 0) {
      i24 = i19 | 0;
     } else {
      i24 = HEAP32[i19 >> 2] | 0;
     }
     i18 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 236 >> 2] & 255](i21) | 0;
      } else {
       if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
        i25 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i25 = HEAP32[i18 + 36 >> 2] | 0;
        break;
       }
      }
     } while (0);
     if ((i25 | 0) == 0) {
      break;
     }
     if ((HEAP32[i20 >> 2] & 2048 | 0) == 0) {
      i26 = i19 | 0;
     } else {
      i26 = HEAP32[i19 >> 2] | 0;
     }
     i18 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 236 >> 2] & 255](i21) | 0;
      } else {
       if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
        i27 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i27 = HEAP32[i18 + 36 >> 2] | 0;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i27 + 52 >> 2] & 8388608 | 0) == 0) {
      break;
     }
     __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i21, 32768);
    }
   } while (0);
   if (i2 >>> 0 >= 2 >>> 0) {
    break;
   }
   if (!(i22 & (i23 | 0) != 0)) {
    break;
   }
   i18 = i23 + 12 | 0;
   i19 = i23 + 32 | 0;
   if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
    i28 = i19 | 0;
   } else {
    i28 = HEAP32[i19 >> 2] | 0;
   }
   i20 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 236 >> 2] & 255](i23) | 0;
    } else {
     if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
      i29 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i29 = HEAP32[i20 + 36 >> 2] | 0;
      break;
     }
    }
   } while (0);
   if ((i29 | 0) != 0) {
    if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
     i30 = i19 | 0;
    } else {
     i30 = HEAP32[i19 >> 2] | 0;
    }
    i20 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i20 | 0) == 0) {
      i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 236 >> 2] & 255](i23) | 0;
     } else {
      if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
       i31 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i31 = HEAP32[i20 + 36 >> 2] | 0;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i31 + 52 >> 2] & 8388608 | 0) != 0) {
     break;
    }
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i23, 32768);
  }
 } while (0);
 i23 = HEAP32[i6 >> 2] | 0;
 if ((i23 & 134217728 | 0) == 0 | i7) {
  i32 = i23;
 } else {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i4 | 0, 32768);
  i32 = HEAP32[i6 >> 2] | 0;
 }
 do {
  if ((i32 & 2048 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 1024 | 0) == 0 | i7) {
    break;
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
  }
 } while (0);
 if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
  return;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 20 >> 2] & 2048 | 0) == 0 | i14) {
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 32768);
 return;
}
function __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 | 0;
 i4 = i1 + 12 | 0;
 i5 = (HEAP32[i4 >> 2] & 256 | 0) == 0;
 __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i3, i2) | 0;
 L1 : do {
  if ((HEAP32[i4 >> 2] & 2048 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 20 >> 2] & 16 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
    i7 = i1;
   } else {
    if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i6 | 0) | 0) + 20 >> 2] & 16 | 0) == 0) {
     i7 = i1;
    } else {
     break;
    }
   }
   while (1) {
    i6 = HEAP32[i7 + 16 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i8 = 10;
     } else {
      if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
       i8 = 10;
       break;
      }
      i9 = i6;
     }
    } while (0);
    if ((i8 | 0) == 10) {
     i8 = 0;
     i9 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    }
    if ((i9 | 0) == 0) {
     break L1;
    }
    i6 = i9 | 0;
    i10 = (__ZN7WebCore4Node14ensureRareDataEv(i6) | 0) + 20 | 0;
    HEAP32[i10 >> 2] = HEAP32[i10 >> 2] | 16;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i6, 49152);
    i7 = i9;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 12 >> 2] & 8388864 | 0) == 0) {
  return 0;
 }
 do {
  if ((HEAP32[i4 >> 2] & 2048 | 0) != 0) {
   i9 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 52 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i7 = i9 + 8 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i7 = i9 + 4 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if (i5) {
   if ((HEAP32[i4 >> 2] & 256 | 0) == 0) {
    i11 = 0;
    break;
   }
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   if ((HEAP8[i2 + 1576 | 0] & 1) == 0) {
    i11 = 0;
    break;
   }
   i11 = i2;
  } else {
   i11 = 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 i2 = (i3 | 0) == (i5 | 0) ? i3 : 0;
 i3 = i1 + 48 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 L34 : do {
  if ((i8 | 0) == 0) {
   i12 = __ZN3WTF8nullAtomE;
  } else {
   if ((HEAP32[i8 + 16 >> 2] | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i7 & 1 | 0) == 0) {
    i13 = i7 >>> 1 & 134217727;
    i14 = i8 + 20 | 0;
   } else {
    i7 = i8 + 24 | 0;
    i13 = HEAP32[i7 + 8 >> 2] | 0;
    i14 = HEAP32[i7 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 1680 >> 2] | 0;
   i9 = i7 + 12 | 0;
   i6 = i7 + 16 | 0;
   i10 = 0;
   while (1) {
    i15 = i14 + (i10 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
      break;
     }
    }
    i16 = i10 + 1 | 0;
    if (i16 >>> 0 < i13 >>> 0) {
     i10 = i16;
    } else {
     i12 = __ZN3WTF8nullAtomE;
     break L34;
    }
   }
   i12 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i10 << 3) + 4 | 0;
  }
 } while (0);
 i14 = i12 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   do {
    if ((i2 | 0) != 0) {
     i13 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
     do {
      if ((i13 | 0) == 0) {
       i17 = i15;
      } else {
       if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
        i17 = i15;
        break;
       }
       __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i13, i1);
       i17 = HEAP32[i14 >> 2] | 0;
      }
     } while (0);
     if ((i17 | 0) == 0) {
      break;
     }
     if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i17, i1);
    }
   } while (0);
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE(i1, i11, __ZN3WTF8nullAtomE, i12, 0);
  }
 } while (0);
 i12 = HEAP32[i3 >> 2] | 0;
 L63 : do {
  if ((i12 | 0) == 0) {
   i18 = __ZN3WTF8nullAtomE;
  } else {
   i17 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i17 & 268435456 | 0) == 0) {
    i18 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i17 & 1 | 0) == 0) {
    i19 = i17 >>> 1 & 134217727;
    i20 = i12 + 20 | 0;
   } else {
    i17 = i12 + 24 | 0;
    i19 = HEAP32[i17 + 8 >> 2] | 0;
    i20 = HEAP32[i17 >> 2] | 0;
   }
   if ((i19 | 0) == 0) {
    i18 = __ZN3WTF8nullAtomE;
    break;
   }
   i17 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i14 = i17 + 12 | 0;
   i15 = i17 + 16 | 0;
   i10 = 0;
   while (1) {
    i21 = i20 + (i10 << 3) | 0;
    i13 = HEAP32[i21 >> 2] | 0;
    if ((i13 | 0) == (i17 | 0)) {
     break;
    }
    if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
     if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
      break;
     }
    }
    i13 = i10 + 1 | 0;
    if (i13 >>> 0 < i19 >>> 0) {
     i10 = i13;
    } else {
     i18 = __ZN3WTF8nullAtomE;
     break L63;
    }
   }
   i18 = (i21 | 0) == 0 ? __ZN3WTF8nullAtomE : i20 + (i10 << 3) + 4 | 0;
  }
 } while (0);
 i20 = i18 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   do {
    if ((i2 | 0) != 0) {
     i19 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
     do {
      if ((i19 | 0) == 0) {
       i22 = i21;
      } else {
       if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
        i22 = i21;
        break;
       }
       __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i19, i1);
       i22 = HEAP32[i20 >> 2] | 0;
      }
     } while (0);
     if ((i22 | 0) == 0) {
      break;
     }
     if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i22, i1);
    }
   } while (0);
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_(i1, i11, __ZN3WTF8nullAtomE, i18);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  return 0;
 }
 i18 = HEAP32[i1 + 44 >> 2] | 0;
 i11 = HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0;
 do {
  if ((i18 | 0) != (i11 | 0)) {
   if ((HEAP32[i18 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
    return 0;
   }
   if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
    break;
   }
   return 0;
  }
 } while (0);
 if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
  return 0;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 L105 : do {
  if ((i11 | 0) == 0) {
   i23 = __ZN3WTF8nullAtomE;
  } else {
   i3 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i3 & 1 | 0) == 0) {
    i24 = i3 >>> 1 & 134217727;
    i25 = i11 + 20 | 0;
   } else {
    i3 = i11 + 24 | 0;
    i24 = HEAP32[i3 + 8 >> 2] | 0;
    i25 = HEAP32[i3 >> 2] | 0;
   }
   if ((i24 | 0) == 0) {
    i23 = __ZN3WTF8nullAtomE;
    break;
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0;
   i18 = i3 + 12 | 0;
   i22 = i3 + 16 | 0;
   i20 = 0;
   while (1) {
    i26 = i25 + (i20 << 3) | 0;
    i21 = HEAP32[i26 >> 2] | 0;
    if ((i21 | 0) == (i3 | 0)) {
     break;
    }
    if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
     if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i22 >> 2] | 0)) {
      break;
     }
    }
    i21 = i20 + 1 | 0;
    if (i21 >>> 0 < i24 >>> 0) {
     i20 = i21;
    } else {
     i23 = __ZN3WTF8nullAtomE;
     break L105;
    }
   }
   i23 = (i26 | 0) == 0 ? __ZN3WTF8nullAtomE : i25 + (i20 << 3) + 4 | 0;
  }
 } while (0);
 if ((HEAP32[i4 >> 2] & 256 | 0) == 0) {
  return 0;
 }
 i4 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 i25 = i23 | 0;
 i23 = HEAP32[i25 >> 2] | 0;
 if ((i4 | 0) == (i23 | 0)) {
  return 0;
 }
 do {
  if ((i4 | 0) == 0) {
   i27 = i23;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    i27 = i23;
    break;
   }
   __ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i2, i4, i1);
   i27 = HEAP32[i25 >> 2] | 0;
  }
 } while (0);
 if ((i27 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[i27 + 4 >> 2] | 0) == 0) {
  return 0;
 }
 __ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i2, i27, i1);
 return 0;
}
function __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 + 12 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] & 2048 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 16 | 0) == 0) {
    break;
   } else {
    i4 = i1;
   }
   while (1) {
    i5 = HEAP32[i4 + 16 >> 2] | 0;
    do {
     if ((i5 | 0) == 0) {
      i6 = 6;
     } else {
      if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
       i6 = 6;
       break;
      }
      i7 = i5;
     }
    } while (0);
    if ((i6 | 0) == 6) {
     i6 = 0;
     i7 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    }
    if ((i7 | 0) == 0) {
     break L1;
    }
    i5 = i7 | 0;
    i8 = (__ZN7WebCore4Node14ensureRareDataEv(i5) | 0) + 20 | 0;
    HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -17;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 49152);
    i4 = i7;
   }
  }
 } while (0);
 if ((HEAP32[i3 >> 2] & 2048 | 0) != 0) {
  i7 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 36 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 8388864 | 0) != 0) {
   i7 = HEAP32[i2 + 20 >> 2] | 0;
   do {
    if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
     i9 = 0;
    } else {
     i4 = HEAP32[i7 + 8 >> 2] | 0;
     if ((HEAP8[i4 + 1576 | 0] & 1) == 0) {
      i9 = 0;
      break;
     }
     i9 = i4;
    }
   } while (0);
   i4 = HEAP32[i1 + 20 >> 2] | 0;
   i6 = (i7 | 0) == (i4 | 0) ? i7 : 0;
   i5 = i1 + 48 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   L22 : do {
    if ((i8 | 0) == 0) {
     i10 = __ZN3WTF8nullAtomE;
    } else {
     if ((HEAP32[i8 + 16 >> 2] | 0) == 0) {
      i10 = __ZN3WTF8nullAtomE;
      break;
     }
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i11 & 1 | 0) == 0) {
      i12 = i11 >>> 1 & 134217727;
      i13 = i8 + 20 | 0;
     } else {
      i11 = i8 + 24 | 0;
      i12 = HEAP32[i11 + 8 >> 2] | 0;
      i13 = HEAP32[i11 >> 2] | 0;
     }
     if ((i12 | 0) == 0) {
      i10 = __ZN3WTF8nullAtomE;
      break;
     }
     i11 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i14 = i11 + 12 | 0;
     i15 = i11 + 16 | 0;
     i16 = 0;
     while (1) {
      i17 = i13 + (i16 << 3) | 0;
      i18 = HEAP32[i17 >> 2] | 0;
      if ((i18 | 0) == (i11 | 0)) {
       break;
      }
      if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
       if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
        break;
       }
      }
      i18 = i16 + 1 | 0;
      if (i18 >>> 0 < i12 >>> 0) {
       i16 = i18;
      } else {
       i10 = __ZN3WTF8nullAtomE;
       break L22;
      }
     }
     i10 = (i17 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i16 << 3) + 4 | 0;
    }
   } while (0);
   i4 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     do {
      if ((i6 | 0) != 0) {
       if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
        __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i6, i4, i1);
       }
       i8 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i6, i8, i1);
      }
     } while (0);
     if ((i9 | 0) == 0) {
      break;
     }
     __ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE(i1, i9, i10, __ZN3WTF8nullAtomE, 0);
    }
   } while (0);
   i4 = HEAP32[i5 >> 2] | 0;
   L50 : do {
    if ((i4 | 0) == 0) {
     i19 = __ZN3WTF8nullAtomE;
    } else {
     i16 = HEAP32[i4 + 4 >> 2] | 0;
     if ((i16 & 268435456 | 0) == 0) {
      i19 = __ZN3WTF8nullAtomE;
      break;
     }
     if ((i16 & 1 | 0) == 0) {
      i20 = i16 >>> 1 & 134217727;
      i21 = i4 + 20 | 0;
     } else {
      i16 = i4 + 24 | 0;
      i20 = HEAP32[i16 + 8 >> 2] | 0;
      i21 = HEAP32[i16 >> 2] | 0;
     }
     if ((i20 | 0) == 0) {
      i19 = __ZN3WTF8nullAtomE;
      break;
     }
     i16 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
     i8 = i16 + 12 | 0;
     i7 = i16 + 16 | 0;
     i15 = 0;
     while (1) {
      i22 = i21 + (i15 << 3) | 0;
      i14 = HEAP32[i22 >> 2] | 0;
      if ((i14 | 0) == (i16 | 0)) {
       break;
      }
      if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
       if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
        break;
       }
      }
      i14 = i15 + 1 | 0;
      if (i14 >>> 0 < i20 >>> 0) {
       i15 = i14;
      } else {
       i19 = __ZN3WTF8nullAtomE;
       break L50;
      }
     }
     i19 = (i22 | 0) == 0 ? __ZN3WTF8nullAtomE : i21 + (i15 << 3) + 4 | 0;
    }
   } while (0);
   i4 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     do {
      if ((i6 | 0) != 0) {
       if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
        __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i6, i4, i1);
       }
       i7 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i6, i7, i1);
      }
     } while (0);
     if ((i9 | 0) == 0) {
      break;
     }
     __ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_(i1, i9, i19, __ZN3WTF8nullAtomE);
    }
   } while (0);
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i1 + 44 >> 2] | 0;
   i15 = HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0;
   if ((i4 | 0) != (i15 | 0)) {
    if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i4 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
     break;
    }
   }
   if ((HEAP32[i6 + 32 >> 2] | 0) == 0) {
    break;
   }
   i15 = HEAP32[i5 >> 2] | 0;
   L84 : do {
    if ((i15 | 0) == 0) {
     i23 = __ZN3WTF8nullAtomE;
    } else {
     i4 = HEAP32[i15 + 4 >> 2] | 0;
     if ((i4 & 1 | 0) == 0) {
      i24 = i4 >>> 1 & 134217727;
      i25 = i15 + 20 | 0;
     } else {
      i4 = i15 + 24 | 0;
      i24 = HEAP32[i4 + 8 >> 2] | 0;
      i25 = HEAP32[i4 >> 2] | 0;
     }
     if ((i24 | 0) == 0) {
      i23 = __ZN3WTF8nullAtomE;
      break;
     }
     i4 = HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0;
     i7 = i4 + 12 | 0;
     i8 = i4 + 16 | 0;
     i16 = 0;
     while (1) {
      i26 = i25 + (i16 << 3) | 0;
      i14 = HEAP32[i26 >> 2] | 0;
      if ((i14 | 0) == (i4 | 0)) {
       break;
      }
      if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
       if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
        break;
       }
      }
      i14 = i16 + 1 | 0;
      if (i14 >>> 0 < i24 >>> 0) {
       i16 = i14;
      } else {
       i23 = __ZN3WTF8nullAtomE;
       break L84;
      }
     }
     i23 = (i26 | 0) == 0 ? __ZN3WTF8nullAtomE : i25 + (i16 << 3) + 4 | 0;
    }
   } while (0);
   if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i23 >> 2] | 0;
   i5 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
   if ((i15 | 0) == (i5 | 0)) {
    break;
   }
   do {
    if ((i15 | 0) == 0) {
     i27 = i5;
    } else {
     if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
      i27 = i5;
      break;
     }
     __ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i6, i15, i1);
     i27 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
    }
   } while (0);
   if ((i27 | 0) == 0) {
    break;
   }
   if ((HEAP32[i27 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i6, i27, i1);
  }
 } while (0);
 i27 = i1 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i27, i2);
 if ((HEAP32[i3 >> 2] & 2048 | 0) == 0) {
  return;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i27) | 0) + 20 >> 2] & 32 | 0) == 0) {
  return;
 }
 __ZN7WebCore21SVGDocumentExtensions33removeElementFromPendingResourcesEPNS_7ElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 return;
}
function __ZN7WebCore7Element16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_27AttributeModificationReasonE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] & 31](i1, i2, i3);
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 i9 = _i64Add(HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE >> 2] | 0, HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE + 4 >> 2] | 0, 1, 0) | 0;
 i10 = tempRet0;
 HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE >> 2] = i9;
 HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE + 4 >> 2] = i10;
 i11 = i8 + 720 | 0;
 HEAP32[i11 >> 2] = i9;
 HEAP32[i11 + 4 >> 2] = i10;
 i10 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 320 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (i11 | (__ZNK7WebCore4Node18inRenderedDocumentEv(i6) | 0) ^ 1) {
  i12 = 0;
 } else {
  i12 = (HEAP32[i1 + 12 >> 2] & 98304) >>> 0 < 32768 >>> 0;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) == (HEAP32[i9 + 1680 >> 2] | 0)) {
   i13 = i1 + 48 | 0;
   i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (i15) {
    i16 = i9;
   } else {
    i17 = i14 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
    i16 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
   }
   do {
    if ((HEAP32[i16 + 664 >> 2] | 0) == 0) {
     __ZNK3WTF12AtomicString5lowerEv(i5, i3);
     i18 = i5 | 0;
    } else {
     i17 = i5 | 0;
     i19 = HEAP32[i3 >> 2] | 0;
     HEAP32[i17 >> 2] = i19;
     if ((i19 | 0) == 0) {
      i18 = i17;
      break;
     }
     i20 = i19 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     i18 = i17;
    }
   } while (0);
   i17 = HEAP32[i18 >> 2] | 0;
   L14 : do {
    if ((i17 | 0) == (i14 | 0)) {
     i21 = 0;
     i22 = i14;
    } else {
     i20 = HEAP32[i13 >> 2] | 0;
     if ((i17 | 0) != 0) {
      i19 = i17 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     }
     i19 = i20 + 16 | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i17;
     do {
      if ((i20 | 0) != 0) {
       i19 = i20 | 0;
       i23 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i19 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i18 >> 2] | 0;
     if (!i12) {
      i21 = 0;
      i22 = i20;
      break;
     }
     L26 : do {
      if (!i15) {
       if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
        break;
       }
       i23 = i14;
       i19 = HEAP32[i10 + 8 >> 2] | 0;
       if ((i19 | 0) == 0) {
        break;
       }
       i24 = HEAP32[i10 + 16 >> 2] | 0;
       i25 = i14;
       i26 = i25 + ~(i25 << 15) | 0;
       i25 = (i26 >>> 10 ^ i26) * 9 & -1;
       i26 = i25 >>> 6 ^ i25;
       i25 = i26 + ~(i26 << 11) | 0;
       i26 = i25 >>> 16 ^ i25;
       i25 = i24 & i26;
       i27 = i19 + (i25 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == (i23 | 0)) {
        i29 = i27;
       } else {
        i27 = (i26 >>> 23) + ~i26 | 0;
        i26 = i27 << 12 ^ i27;
        i27 = i26 >>> 7 ^ i26;
        i26 = i27 << 2 ^ i27;
        i27 = i26 >>> 20 ^ i26 | 1;
        i26 = 0;
        i30 = i25;
        i25 = i28;
        while (1) {
         if ((i25 | 0) == 0) {
          break L26;
         }
         i28 = (i26 | 0) == 0 ? i27 : i26;
         i31 = i28 + i30 & i24;
         i32 = i19 + (i31 << 2) | 0;
         i33 = HEAP32[i32 >> 2] | 0;
         if ((i33 | 0) == (i23 | 0)) {
          i29 = i32;
          break;
         } else {
          i26 = i28;
          i30 = i31;
          i25 = i33;
         }
        }
       }
       if ((i29 | 0) != 0) {
        i21 = 1;
        i22 = i20;
        break L14;
       }
      }
     } while (0);
     L37 : do {
      if ((i20 | 0) != 0) {
       if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
        break;
       }
       i25 = i20;
       i30 = HEAP32[i10 + 8 >> 2] | 0;
       if ((i30 | 0) == 0) {
        break;
       }
       i26 = HEAP32[i10 + 16 >> 2] | 0;
       i23 = i20;
       i19 = i23 + ~(i23 << 15) | 0;
       i23 = (i19 >>> 10 ^ i19) * 9 & -1;
       i19 = i23 >>> 6 ^ i23;
       i23 = i19 + ~(i19 << 11) | 0;
       i19 = i23 >>> 16 ^ i23;
       i23 = i26 & i19;
       i24 = i30 + (i23 << 2) | 0;
       i27 = HEAP32[i24 >> 2] | 0;
       if ((i27 | 0) == (i25 | 0)) {
        i34 = i24;
       } else {
        i24 = (i19 >>> 23) + ~i19 | 0;
        i19 = i24 << 12 ^ i24;
        i24 = i19 >>> 7 ^ i19;
        i19 = i24 << 2 ^ i24;
        i24 = i19 >>> 20 ^ i19 | 1;
        i19 = 0;
        i33 = i23;
        i23 = i27;
        while (1) {
         if ((i23 | 0) == 0) {
          break L37;
         }
         i27 = (i19 | 0) == 0 ? i24 : i19;
         i31 = i27 + i33 & i26;
         i28 = i30 + (i31 << 2) | 0;
         i32 = HEAP32[i28 >> 2] | 0;
         if ((i32 | 0) == (i25 | 0)) {
          i34 = i28;
          break;
         } else {
          i19 = i27;
          i33 = i31;
          i23 = i32;
         }
        }
       }
       if ((i34 | 0) != 0) {
        i21 = 1;
        i22 = i20;
        break L14;
       }
      }
     } while (0);
     i21 = 0;
     i22 = i20;
    }
   } while (0);
   do {
    if ((i22 | 0) != 0) {
     i17 = i22 | 0;
     i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i17 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (i15) {
    i35 = i21;
    break;
   }
   i13 = i14 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i35 = i21;
    break;
   } else {
    HEAP32[i13 >> 2] = i17;
    i35 = i21;
    break;
   }
  } else {
   if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
    __ZN7WebCore7Element21classAttributeChangedERKN3WTF12AtomicStringE(i1, i3);
    i35 = 0;
    break;
   }
   if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
    i17 = (HEAP32[i1 + 48 >> 2] | 0) + 4 | 0;
    HEAP32[i17 >> 2] = (((HEAP32[i3 >> 2] | 0) == 0) << 28 | HEAP32[i17 >> 2] & -268435457) ^ 268435456;
    i35 = 0;
    break;
   }
   if ((i8 | 0) != (HEAP32[__ZN7WebCore9HTMLNames10pseudoAttrE >> 2] | 0) | i12 ^ 1) {
    i35 = 0;
    break;
   }
   i35 = (HEAP32[i1 + 12 >> 2] & 8388608 | 0) != 0;
  }
 } while (0);
 __ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE(i6, i2, i1);
 if (!(i35 | i11)) {
  i36 = HEAP32[i7 >> 2] | 0;
  i37 = i36 + 8 | 0;
  i38 = HEAP32[i37 >> 2] | 0;
  i39 = __ZNK7WebCore8Document21existingAXObjectCacheEv(i38) | 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i6, 32768);
 i36 = HEAP32[i7 >> 2] | 0;
 i37 = i36 + 8 | 0;
 i38 = HEAP32[i37 >> 2] | 0;
 i39 = __ZNK7WebCore8Document21existingAXObjectCacheEv(i38) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == (HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 1680 >> 2] | 0)) {
   i12 = i1 + 12 | 0;
   if ((HEAP32[i12 >> 2] & 8388864 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i3 >> 2] | 0;
   i14 = i4 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == (i15 | 0)) {
    break;
   }
   do {
    if ((i13 | 0) == 0) {
     i16 = i15;
    } else {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      i16 = i15;
      break;
     }
     __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i9, i13, i1);
     i16 = HEAP32[i14 >> 2] | 0;
    }
   } while (0);
   do {
    if ((i16 | 0) != 0) {
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i9, i16, i1);
    }
   } while (0);
   if ((HEAP32[i12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i14 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i14 + 1576 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE(i1, i14, i3, i4, 1);
  } else {
   if ((i11 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
    i14 = i1 + 12 | 0;
    if ((HEAP32[i14 >> 2] & 8388864 | 0) == 0) {
     break;
    }
    i13 = HEAP32[i3 >> 2] | 0;
    i15 = i4 | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    if ((i13 | 0) == (i17 | 0)) {
     break;
    }
    do {
     if ((i13 | 0) == 0) {
      i18 = i17;
     } else {
      if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
       i18 = i17;
       break;
      }
      __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i9, i13, i1);
      i18 = HEAP32[i15 >> 2] | 0;
     }
    } while (0);
    do {
     if ((i18 | 0) != 0) {
      if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i9, i18, i1);
     }
    } while (0);
    if ((HEAP32[i14 >> 2] & 256 | 0) == 0) {
     break;
    }
    i15 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
    if ((HEAP8[i15 + 1576 | 0] & 1) == 0) {
     break;
    }
    __ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_(i1, i15, i3, i4);
    break;
   }
   if ((i11 | 0) != (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
    break;
   }
   i15 = HEAP32[i1 + 44 >> 2] | 0;
   i13 = HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0;
   if ((i15 | 0) != (i13 | 0)) {
    if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
     break;
    }
   }
   if ((HEAP32[i9 + 32 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i3 >> 2] | 0;
   i15 = i4 | 0;
   i17 = HEAP32[i15 >> 2] | 0;
   if ((i13 | 0) == (i17 | 0)) {
    break;
   }
   do {
    if ((i13 | 0) == 0) {
     i19 = i17;
    } else {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      i19 = i17;
      break;
     }
     __ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i9, i13, i1);
     i19 = HEAP32[i15 >> 2] | 0;
    }
   } while (0);
   if ((i19 | 0) == 0) {
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i9, i19, i1);
  }
 } while (0);
 L46 : do {
  if ((HEAP32[i3 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
   i19 = i1 | 0;
   i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 320 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] | 0;
   i18 = i11;
   i16 = HEAP32[i9 + 48 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i9 + 56 >> 2] | 0;
   i9 = i11;
   i11 = i9 + ~(i9 << 15) | 0;
   i9 = (i11 >>> 10 ^ i11) * 9 & -1;
   i11 = i9 >>> 6 ^ i9;
   i9 = i11 + ~(i11 << 11) | 0;
   i11 = i9 >>> 16 ^ i9;
   i9 = i15 & i11;
   i13 = i16 + (i9 << 2) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    i20 = i13;
   } else {
    i13 = (i11 >>> 23) + ~i11 | 0;
    i11 = i13 << 12 ^ i13;
    i13 = i11 >>> 7 ^ i11;
    i11 = i13 << 2 ^ i13;
    i13 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i14 = i9;
    i9 = i17;
    while (1) {
     if ((i9 | 0) == 0) {
      break L46;
     }
     i17 = (i11 | 0) == 0 ? i13 : i11;
     i12 = i17 + i14 & i15;
     i21 = i16 + (i12 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i18 | 0)) {
      i20 = i21;
      break;
     } else {
      i11 = i17;
      i14 = i12;
      i9 = i22;
     }
    }
   }
   if ((i20 | 0) == 0) {
    break;
   }
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i19, 32768);
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 2) == 0) {
   HEAP32[i6 >> 2] = 0;
  } else {
   __ZN7WebCore29MutationObserverInterestGroup14createIfNeededERNS_4NodeENS_16MutationObserver12MutationTypeEhPKNS_13QualifiedNameE(i6, i1 | 0, 2, 32, i2);
   i20 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i20 | 0) == 0) {
    break;
   }
   __ZN7WebCore14MutationRecord16createAttributesERNS_7ElementERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, i1, i2, i3);
   __ZN7WebCore29MutationObserverInterestGroup21enqueueMutationRecordEN3WTF10PassRefPtrINS_14MutationRecordEEE(i20, i7);
   i10 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 4 | 0;
     i14 = i9 | 0;
     i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i14 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   i10 = HEAP32[i20 >> 2] | 0;
   if ((i10 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZdlPv(i20);
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = __ZNK7WebCore8Document4pageEv(i7) | 0;
 do {
  if ((i8 | 0) == 0) {
   i2 = HEAP32[i7 + 2204 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i23 = 0;
    break;
   }
   i23 = __ZNK7WebCore8Document4pageEv(i2) | 0;
  } else {
   i23 = i8;
  }
 } while (0);
 i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i23) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation21willModifyDOMAttrImplEPNS_19InstrumentingAgentsEPNS_7ElementERKN3WTF12AtomicStringES8_(i8, i1, i3, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 255](i1) | 0) {
  i14 = 0;
  STACKTOP = i6;
  return i14 | 0;
 }
 i15 = i1 | 0;
 i16 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i18 = i16 + 36 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = i9 | 0;
 HEAP32[i18 >> 2] = i5;
 i16 = (i5 | 0) == 0;
 if (!i16) {
  i19 = i5 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS_18PlatformMouseEventEiNS5_INS_4NodeEEE(i7, i3, i8, i2, i4, i9);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i18 = i9 + 8 | 0;
   i4 = i18 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 + 36 | 0;
   i18 = i17 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i17 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
  }
 } while (0);
 i9 = i7;
 i2 = i7 + 12 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 L22 : do {
  if ((i17 | 0) == 0) {
   i20 = 1;
  } else {
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    i20 = 1;
    break;
   }
   i18 = i1;
   i4 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i7 | 0) != 0) {
    i3 = i7 + 8 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   }
   if (FUNCTION_TABLE_iii[i4 & 31](i15, i10) | 0) {
    i21 = (HEAP8[i7 + 21 | 0] & 1) == 0;
   } else {
    i21 = 0;
   }
   i4 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i8 = i4 + 8 | 0;
     i3 = i8 | 0;
     i19 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i3 >> 2] = i19;
      break;
     }
     i19 = i8 - 8 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i4 + 56 >> 2] | 0)) {
     i19 = i7 + 56 | 0;
     if ((HEAP32[i19 >> 2] | 0) != 2) {
      break;
     }
     i8 = __ZN3WTF10fastMallocEj(128) | 0;
     i3 = i8;
     __ZN7WebCore10MouseEventC1Ev(i3);
     i22 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 96 | 0;
     i23 = (HEAP8[i7 + 16 | 0] & 1) != 0;
     i24 = (HEAP8[i7 + 17 | 0] & 1) != 0;
     i25 = HEAP32[i7 + 52 >> 2] | 0;
     i26 = i11 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) != 0) {
      i27 = i25 + 36 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     i27 = HEAP32[i19 >> 2] | 0;
     i19 = HEAP32[i7 + 64 >> 2] | 0;
     i25 = HEAP32[i7 + 68 >> 2] | 0;
     i28 = HEAP32[i7 + 72 >> 2] | 0;
     i29 = HEAP32[i7 + 76 >> 2] | 0;
     i30 = HEAP8[i7 + 60 | 0] | 0;
     i31 = HEAP16[i7 + 114 >> 1] | 0;
     i32 = i5 | 0;
     i33 = i12 | 0;
     HEAP32[i33 >> 2] = i32;
     if (!i16) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 56 >> 2] & 63](i32);
     }
     __ZN7WebCore10MouseEvent14initMouseEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE(i3, i22, i23, i24, i11, i27, i19, i25, i28, i29, (i30 & 1) != 0, (i30 & 2) != 0, (i30 & 4) != 0, (i30 & 8) != 0, i31, i12);
     i31 = HEAP32[i33 >> 2] | 0;
     if ((i31 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 60 >> 2] & 63](i31);
     }
     i31 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i26 = i31 + 36 | 0;
       i33 = i26 | 0;
       i30 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
       if ((i30 | 0) != 0) {
        HEAP32[i33 >> 2] = i30;
        break;
       }
       i30 = i26 - 36 | 0;
       if ((i30 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 44 >> 2] & 63](i30);
      }
     } while (0);
     if ((HEAP8[i7 + 21 | 0] & 1) == 0) {
      i31 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
      i30 = i13 | 0;
      i26 = i8;
      HEAP32[i30 >> 2] = i26;
      if ((i8 | 0) == 0) {
       i34 = i31;
       i35 = i30;
       i36 = i26;
       i37 = 1;
      } else {
       i38 = i31;
       i39 = i30;
       i40 = i26;
       i41 = 0;
       i42 = 42;
      }
     } else {
      HEAP8[i8 + 21 | 0] = 1;
      i26 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
      i30 = i13 | 0;
      i31 = i8;
      HEAP32[i30 >> 2] = i31;
      i38 = i26;
      i39 = i30;
      i40 = i31;
      i41 = (i8 | 0) == 0;
      i42 = 42;
     }
     if ((i42 | 0) == 42) {
      i31 = i8 + 8 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
      i34 = i38;
      i35 = i39;
      i36 = i40;
      i37 = i41;
     }
     FUNCTION_TABLE_iii[i34 & 31](i15, i13) | 0;
     i31 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i30 = i31 + 8 | 0;
       i26 = i30 | 0;
       i33 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i33 | 0) != 0) {
        HEAP32[i26 >> 2] = i33;
        break;
       }
       i33 = i30 - 8 | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
      }
     } while (0);
     if ((HEAP8[i8 + 21 | 0] & 1) == 0) {
      i43 = HEAP8[i8 + 20 | 0] & 1;
     } else {
      i43 = 1;
     }
     do {
      if (!i37) {
       i31 = i8 + 8 | 0;
       i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       if ((i33 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i36);
        break;
       } else {
        HEAP32[i31 >> 2] = i33;
        break;
       }
      }
     } while (0);
     if ((i43 | 0) != 0) {
      i20 = 0;
      break L22;
     }
    }
   } while (0);
   i20 = i21;
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i14 = i20;
  STACKTOP = i6;
  return i14 | 0;
 }
 i21 = i7 + 8 | 0;
 i43 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 if ((i43 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i9);
  i14 = i20;
  STACKTOP = i6;
  return i14 | 0;
 } else {
  HEAP32[i21 >> 2] = i43;
  i14 = i20;
  STACKTOP = i6;
  return i14 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 34;
}
function __ZN7WebCore7Element29detachAllAttrNodesFromElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = i1 + 12 | 0;
 L1 : do {
  if ((HEAP32[i2 >> 2] & 524288 | 0) == 0) {
   i3 = 0;
  } else {
   if (HEAP8[H_BASE + 688 | 0] | 0) {
    i4 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i5 = __ZN3WTF10fastMallocEj(20) | 0;
    i6 = i5;
    _memset(i5 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i6;
    HEAP8[H_BASE + 688 | 0] = 1;
    i4 = i6;
   }
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i7 = i1;
   i8 = i7 + ~(i7 << 15) | 0;
   i7 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i7 >>> 6 ^ i7;
   i7 = i8 + ~(i8 << 11) | 0;
   i8 = i7 >>> 16 ^ i7;
   if ((i5 | 0) == 0) {
    i3 = 0;
    break;
   }
   i7 = i6 & i8;
   i9 = i5 + (i7 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i1 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i8 = i9 << 12 ^ i9;
    i9 = i8 >>> 7 ^ i8;
    i8 = i9 << 2 ^ i9;
    i9 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i12 = i7;
    i7 = i10;
    while (1) {
     if ((i7 | 0) == 0) {
      i3 = 0;
      break L1;
     }
     i10 = (i8 | 0) == 0 ? i9 : i8;
     i13 = i10 + i12 & i6;
     i14 = i5 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i1 | 0)) {
      i11 = i14;
      break;
     } else {
      i8 = i10;
      i12 = i13;
      i7 = i15;
     }
    }
   }
   if ((i11 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i11 + 4 >> 2] | 0;
  }
 } while (0);
 i11 = i1 + 48 | 0;
 i4 = i3 | 0;
 i7 = i3 + 8 | 0;
 i3 = 0;
 while (1) {
  i12 = HEAP32[i11 >> 2] | 0;
  i8 = HEAP32[i12 + 4 >> 2] | 0;
  i5 = (i8 & 1 | 0) == 0;
  if (i5) {
   i16 = i8 >>> 1 & 134217727;
  } else {
   i16 = HEAP32[i12 + 32 >> 2] | 0;
  }
  if (i3 >>> 0 >= i16 >>> 0) {
   break;
  }
  if (i5) {
   i17 = i8 >>> 1 & 134217727;
  } else {
   i17 = HEAP32[i12 + 32 >> 2] | 0;
  }
  if (i17 >>> 0 <= i3 >>> 0) {
   i18 = 21;
   break;
  }
  if (i5) {
   i19 = i12 + 20 | 0;
  } else {
   i19 = HEAP32[i12 + 24 >> 2] | 0;
  }
  i12 = HEAP32[i7 >> 2] | 0;
  i5 = i19 + (i3 << 3) | 0;
  i8 = 0;
  while (1) {
   if (i8 >>> 0 >= i12 >>> 0) {
    break;
   }
   i20 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   if ((HEAP32[i20 + 48 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i18 = 28;
    break;
   } else {
    i8 = i8 + 1 | 0;
   }
  }
  do {
   if ((i18 | 0) == 28) {
    i18 = 0;
    if ((i20 | 0) == 0) {
     break;
    }
    i8 = i20 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    __ZN7WebCore4Attr26detachFromElementWithValueERKN3WTF12AtomicStringE(i20, i19 + (i3 << 3) + 4 | 0);
    i8 = i20 + 8 | 0;
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
  i3 = i3 + 1 | 0;
 }
 if ((i18 | 0) == 21) {
  _WTFCrash();
 }
 if (HEAP8[H_BASE + 688 | 0] | 0) {
  i21 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i18 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i18;
  _memset(i18 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i3;
  HEAP8[H_BASE + 688 | 0] = 1;
  i21 = i3;
 }
 i3 = HEAP32[i21 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = HEAP32[i21 + 4 >> 2] | 0;
  i22 = i18 << 3 | 0;
  i23 = 0;
  i24 = i18;
 } else {
  i18 = HEAP32[i21 + 8 >> 2] | 0;
  i20 = i1;
  i19 = i20 + ~(i20 << 15) | 0;
  i20 = (i19 >>> 10 ^ i19) * 9 & -1;
  i19 = i20 >>> 6 ^ i20;
  i20 = i19 + ~(i19 << 11) | 0;
  i19 = i20 >>> 16 ^ i20;
  i20 = i18 & i19;
  i4 = i3 + (i20 << 3) | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  L51 : do {
   if ((i7 | 0) == (i1 | 0)) {
    i25 = i4;
   } else {
    i17 = (i19 >>> 23) + ~i19 | 0;
    i16 = i17 << 12 ^ i17;
    i17 = i16 >>> 7 ^ i16;
    i16 = i17 << 2 ^ i17;
    i17 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i11 = i20;
    i8 = i7;
    while (1) {
     if ((i8 | 0) == 0) {
      i25 = 0;
      break L51;
     }
     i12 = (i16 | 0) == 0 ? i17 : i16;
     i5 = i12 + i11 & i18;
     i6 = i3 + (i5 << 3) | 0;
     i9 = HEAP32[i6 >> 2] | 0;
     if ((i9 | 0) == (i1 | 0)) {
      i25 = i6;
      break;
     } else {
      i16 = i12;
      i11 = i5;
      i8 = i9;
     }
    }
   }
  } while (0);
  i1 = HEAP32[i21 + 4 >> 2] | 0;
  i22 = (i25 | 0) == 0 ? i3 + (i1 << 3) | 0 : i25;
  i23 = i3;
  i24 = i1;
 }
 i1 = i21 | 0;
 i3 = i21 + 4 | 0;
 if ((i22 | 0) == (i23 + (i24 << 3) | 0)) {
  i26 = HEAP32[i2 >> 2] | 0;
  i27 = i26 & -524289;
  HEAP32[i2 >> 2] = i27;
  return;
 }
 i24 = HEAP32[i22 + 4 >> 2] | 0;
 if ((i24 | 0) != 0) {
  i23 = i24 + 8 | 0;
  i25 = HEAP32[i23 >> 2] | 0;
  i18 = i24 | 0;
  if ((i25 | 0) != 0) {
   i7 = HEAP32[i18 >> 2] | 0;
   i20 = i7 + (i25 << 2) | 0;
   i25 = i7;
   while (1) {
    i7 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i19 = i7 + 8 | 0;
      i4 = i19 | 0;
      i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i8;
      if ((i8 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     }
    } while (0);
    i25 = i25 + 4 | 0;
    if ((i25 | 0) == (i20 | 0)) {
     break;
    }
   }
   HEAP32[i23 >> 2] = 0;
  }
  i23 = HEAP32[i18 >> 2] | 0;
  if ((i23 | 0) != 0) {
   HEAP32[i18 >> 2] = 0;
   HEAP32[i24 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i23);
  }
  __ZN3WTF8fastFreeEPv(i24);
 }
 HEAP32[i22 >> 2] = -1;
 i22 = i21 + 16 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 i22 = i21 + 12 | 0;
 i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i21;
 i22 = HEAP32[i3 >> 2] | 0;
 if (!((i21 * 6 & -1 | 0) < (i22 | 0) & (i22 | 0) > 8)) {
  i26 = HEAP32[i2 >> 2] | 0;
  i27 = i26 & -524289;
  HEAP32[i2 >> 2] = i27;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_(i1, (i22 | 0) / 2 & -1, 0) | 0;
 i26 = HEAP32[i2 >> 2] | 0;
 i27 = i26 & -524289;
 HEAP32[i2 >> 2] = i27;
 return;
}
function __ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 __ZN7WebCore4Attr26detachFromElementWithValueERKN3WTF12AtomicStringE(i2, i3);
 i3 = i1 + 12 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] & 524288 | 0) == 0) {
   i4 = 0;
  } else {
   if (HEAP8[H_BASE + 688 | 0] | 0) {
    i5 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i6 = __ZN3WTF10fastMallocEj(20) | 0;
    i7 = i6;
    _memset(i6 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i7;
    HEAP8[H_BASE + 688 | 0] = 1;
    i5 = i7;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i8 = i1;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   if ((i6 | 0) == 0) {
    i4 = 0;
    break;
   }
   i8 = i7 & i9;
   i10 = i6 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i9 = i10 << 12 ^ i10;
    i10 = i9 >>> 7 ^ i9;
    i9 = i10 << 2 ^ i10;
    i10 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i13 = i8;
    i8 = i11;
    while (1) {
     if ((i8 | 0) == 0) {
      i4 = 0;
      break L1;
     }
     i11 = (i9 | 0) == 0 ? i10 : i9;
     i14 = i11 + i13 & i7;
     i15 = i6 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i1 | 0)) {
      i12 = i15;
      break;
     } else {
      i9 = i11;
      i13 = i14;
      i8 = i16;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i12 = i4 + 8 | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 i8 = i4 | 0;
 i4 = i2 + 48 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i5 >>> 0) {
   i17 = 47;
   break;
  }
  i18 = HEAP32[i8 >> 2] | 0;
  i19 = i18 + (i2 << 2) | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  i2 = i2 + 1 | 0;
  if ((HEAP32[i20 + 48 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   break;
  }
 }
 if ((i17 | 0) == 47) {
  return;
 }
 do {
  if ((i20 | 0) != 0) {
   i17 = i20 + 8 | 0;
   i4 = i17 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i20 = i18 + (i2 << 2) | 0;
 _memmove(i19 | 0, i20 | 0, (HEAP32[i8 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) - i20 | 0) | 0;
 i20 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i20;
 if ((i20 | 0) != 0) {
  return;
 }
 if (HEAP8[H_BASE + 688 | 0] | 0) {
  i21 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i20 = __ZN3WTF10fastMallocEj(20) | 0;
  i12 = i20;
  _memset(i20 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i12;
  HEAP8[H_BASE + 688 | 0] = 1;
  i21 = i12;
 }
 i12 = HEAP32[i21 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i20 = HEAP32[i21 + 4 >> 2] | 0;
  i22 = i20 << 3 | 0;
  i23 = 0;
  i24 = i20;
 } else {
  i20 = HEAP32[i21 + 8 >> 2] | 0;
  i8 = i1;
  i19 = i8 + ~(i8 << 15) | 0;
  i8 = (i19 >>> 10 ^ i19) * 9 & -1;
  i19 = i8 >>> 6 ^ i8;
  i8 = i19 + ~(i19 << 11) | 0;
  i19 = i8 >>> 16 ^ i8;
  i8 = i20 & i19;
  i2 = i12 + (i8 << 3) | 0;
  i18 = HEAP32[i2 >> 2] | 0;
  L37 : do {
   if ((i18 | 0) == (i1 | 0)) {
    i25 = i2;
   } else {
    i17 = (i19 >>> 23) + ~i19 | 0;
    i5 = i17 << 12 ^ i17;
    i17 = i5 >>> 7 ^ i5;
    i5 = i17 << 2 ^ i17;
    i17 = i5 >>> 20 ^ i5 | 1;
    i5 = 0;
    i4 = i8;
    i13 = i18;
    while (1) {
     if ((i13 | 0) == 0) {
      i25 = 0;
      break L37;
     }
     i9 = (i5 | 0) == 0 ? i17 : i5;
     i6 = i9 + i4 & i20;
     i7 = i12 + (i6 << 3) | 0;
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) == (i1 | 0)) {
      i25 = i7;
      break;
     } else {
      i5 = i9;
      i4 = i6;
      i13 = i10;
     }
    }
   }
  } while (0);
  i1 = HEAP32[i21 + 4 >> 2] | 0;
  i22 = (i25 | 0) == 0 ? i12 + (i1 << 3) | 0 : i25;
  i23 = i12;
  i24 = i1;
 }
 i1 = i21 | 0;
 i12 = i21 + 4 | 0;
 do {
  if ((i22 | 0) != (i23 + (i24 << 3) | 0)) {
   i25 = HEAP32[i22 + 4 >> 2] | 0;
   if ((i25 | 0) != 0) {
    i20 = i25 + 8 | 0;
    i18 = HEAP32[i20 >> 2] | 0;
    i8 = i25 | 0;
    if ((i18 | 0) != 0) {
     i19 = HEAP32[i8 >> 2] | 0;
     i2 = i19 + (i18 << 2) | 0;
     i18 = i19;
     while (1) {
      i19 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i13 = i19 + 8 | 0;
        i4 = i13 | 0;
        i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
        HEAP32[i4 >> 2] = i5;
        if ((i5 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
       }
      } while (0);
      i18 = i18 + 4 | 0;
      if ((i18 | 0) == (i2 | 0)) {
       break;
      }
     }
     HEAP32[i20 >> 2] = 0;
    }
    i2 = HEAP32[i8 >> 2] | 0;
    if ((i2 | 0) != 0) {
     HEAP32[i8 >> 2] = 0;
     HEAP32[i25 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i2);
    }
    __ZN3WTF8fastFreeEPv(i25);
   }
   HEAP32[i22 >> 2] = -1;
   i2 = i21 + 16 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = i21 + 12 | 0;
   i18 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i18;
   i2 = HEAP32[i12 >> 2] | 0;
   if (!((i18 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_(i1, (i2 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524289;
 return;
}
function __ZN7WebCore7Element21boundsInRootViewSpaceEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i2 | 0;
 i18 = i2 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0);
 i19 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i19 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 i18 = i6 | 0;
 HEAP32[i18 >> 2] = 0;
 i20 = i6 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i6 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i2 + 12 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 & 32 | 0) == 0) {
   i24 = 19;
  } else {
   i25 = i2 + 32 | 0;
   if ((i23 & 2048 | 0) == 0) {
    i26 = i25 | 0;
   } else {
    i26 = HEAP32[i25 >> 2] | 0;
   }
   if ((HEAP32[i26 >> 2] | 0) == 0) {
    i24 = 19;
    break;
   }
   _memset(i7 | 0, 0, 16) | 0;
   if (!(__ZN7WebCore10SVGElement14getBoundingBoxERNS_9FloatRectENS_12SVGLocatable19StyleUpdateStrategyE(i2, i9, 0) | 0)) {
    i24 = 21;
    break;
   }
   if ((HEAP32[i22 >> 2] & 2048 | 0) == 0) {
    i27 = i25 | 0;
   } else {
    i27 = HEAP32[i25 >> 2] | 0;
   }
   i25 = HEAP32[i27 >> 2] | 0;
   i28 = HEAP32[i8 >> 2] | 0;
   i29 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i28;
   HEAP32[i12 + 4 >> 2] = i29;
   d30 = (HEAP32[tempDoublePtr >> 2] = i28, +HEAPF32[tempDoublePtr >> 2]);
   d31 = d30 + +HEAPF32[i7 + 8 >> 2];
   d32 = +HEAPF32[i9 + 4 >> 2];
   HEAPF32[i11 + 8 >> 2] = d31;
   HEAPF32[i13 + 12 >> 2] = d32;
   d33 = d32 + +HEAPF32[i9 + 12 >> 2];
   HEAPF32[i11 + 16 >> 2] = d31;
   HEAPF32[i13 + 20 >> 2] = d33;
   HEAPF32[i11 + 24 >> 2] = d30;
   HEAPF32[i13 + 28 >> 2] = d33;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i10, i25, i13, 0, 0, 0);
   i25 = HEAP32[i21 >> 2] | 0;
   if ((i25 | 0) != (HEAP32[i20 >> 2] | 0)) {
    _memcpy((HEAP32[i18 >> 2] | 0) + (i25 << 5) | 0, i10 | 0, 32) | 0;
    i28 = i25 + 1 | 0;
    HEAP32[i21 >> 2] = i28;
    i34 = i28;
    break;
   }
   i28 = i25 + 1 | 0;
   i29 = HEAP32[i18 >> 2] | 0;
   do {
    if (i29 >>> 0 > i10 >>> 0) {
     i24 = 16;
    } else {
     if ((i29 + (i25 << 5) | 0) >>> 0 <= i10 >>> 0) {
      i24 = 16;
      break;
     }
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i28);
     i35 = HEAP32[i18 >> 2] | 0;
     i36 = i35 + (i10 - i29 >> 5 << 5) | 0;
     i37 = i35;
    }
   } while (0);
   if ((i24 | 0) == 16) {
    __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i28);
    i36 = i10;
    i37 = HEAP32[i18 >> 2] | 0;
   }
   i29 = HEAP32[i21 >> 2] | 0;
   _memcpy(i37 + (i29 << 5) | 0, i36 | 0, 32) | 0;
   i25 = i29 + 1 | 0;
   HEAP32[i21 >> 2] = i25;
   i34 = i25;
  }
 } while (0);
 do {
  if ((i24 | 0) == 19) {
   if ((__ZNK7WebCore4Node20renderBoxModelObjectEv(i17) | 0) == 0) {
    i24 = 21;
    break;
   }
   i36 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i17) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i36 >> 2] | 0) + 476 >> 2] & 31](i36 | 0, i6, 0);
   i24 = 21;
  }
 } while (0);
 if ((i24 | 0) == 21) {
  i34 = HEAP32[i21 >> 2] | 0;
 }
 do {
  if ((i34 | 0) == 0) {
   _memset(i1 | 0, 0, 16) | 0;
  } else {
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, HEAP32[i18 >> 2] | 0);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i14, i4);
   if ((HEAP32[i21 >> 2] | 0) >>> 0 > 1 >>> 0) {
    i24 = 1;
    while (1) {
     __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, (HEAP32[i18 >> 2] | 0) + (i24 << 5) | 0);
     __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i15, i5);
     __ZN7WebCore7IntRect5uniteERKS0_(i14, i15);
     i24 = i24 + 1 | 0;
     if (i24 >>> 0 >= (HEAP32[i21 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE(i16, i19 | 0, i14);
   i24 = i14;
   i28 = i16;
   HEAP32[i24 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i24 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i24 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i24 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
   i24 = i1;
   HEAP32[i24 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i24 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i24 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i24 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i21 >> 2] = 0;
  }
 } while (0);
 i21 = HEAP32[i18 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i18 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i21);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element21getBoundingClientRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i2 | 0;
 i15 = i2 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0);
 i16 = i4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i4 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i4 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i2 + 12 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i20 & 32 | 0) == 0) {
   i21 = 21;
  } else {
   i22 = (i20 & 2048 | 0) == 0;
   i23 = i2 + 32 | 0;
   if (i22) {
    i24 = i23 | 0;
   } else {
    i24 = HEAP32[i23 >> 2] | 0;
   }
   if ((HEAP32[i24 >> 2] | 0) == 0) {
    i21 = 21;
    break;
   }
   if (i22) {
    i25 = i23 | 0;
   } else {
    i25 = HEAP32[i23 >> 2] | 0;
   }
   i22 = HEAP32[i25 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 324 >> 2] & 255](i22) | 0) {
    i21 = 21;
    break;
   }
   _memset(i5 | 0, 0, 16) | 0;
   if (!(__ZN7WebCore10SVGElement14getBoundingBoxERNS_9FloatRectENS_12SVGLocatable19StyleUpdateStrategyE(i2, i7, 0) | 0)) {
    i21 = 23;
    break;
   }
   if ((HEAP32[i19 >> 2] & 2048 | 0) == 0) {
    i26 = i23 | 0;
   } else {
    i26 = HEAP32[i23 >> 2] | 0;
   }
   i23 = HEAP32[i26 >> 2] | 0;
   i22 = HEAP32[i6 >> 2] | 0;
   i27 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i22;
   HEAP32[i10 + 4 >> 2] = i27;
   d28 = (HEAP32[tempDoublePtr >> 2] = i22, +HEAPF32[tempDoublePtr >> 2]);
   d29 = d28 + +HEAPF32[i5 + 8 >> 2];
   d30 = +HEAPF32[i7 + 4 >> 2];
   HEAPF32[i9 + 8 >> 2] = d29;
   HEAPF32[i11 + 12 >> 2] = d30;
   d31 = d30 + +HEAPF32[i7 + 12 >> 2];
   HEAPF32[i9 + 16 >> 2] = d29;
   HEAPF32[i11 + 20 >> 2] = d31;
   HEAPF32[i9 + 24 >> 2] = d28;
   HEAPF32[i11 + 28 >> 2] = d31;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i8, i23, i11, 0, 0, 0);
   i23 = HEAP32[i18 >> 2] | 0;
   if ((i23 | 0) != (HEAP32[i17 >> 2] | 0)) {
    _memcpy((HEAP32[i16 >> 2] | 0) + (i23 << 5) | 0, i8 | 0, 32) | 0;
    i22 = i23 + 1 | 0;
    HEAP32[i18 >> 2] = i22;
    i32 = i22;
    break;
   }
   i22 = i23 + 1 | 0;
   i27 = HEAP32[i16 >> 2] | 0;
   do {
    if (i27 >>> 0 > i8 >>> 0) {
     i21 = 18;
    } else {
     if ((i27 + (i23 << 5) | 0) >>> 0 <= i8 >>> 0) {
      i21 = 18;
      break;
     }
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i22);
     i33 = HEAP32[i16 >> 2] | 0;
     i34 = i33 + (i8 - i27 >> 5 << 5) | 0;
     i35 = i33;
    }
   } while (0);
   if ((i21 | 0) == 18) {
    __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i22);
    i34 = i8;
    i35 = HEAP32[i16 >> 2] | 0;
   }
   i27 = HEAP32[i18 >> 2] | 0;
   _memcpy(i35 + (i27 << 5) | 0, i34 | 0, 32) | 0;
   i23 = i27 + 1 | 0;
   HEAP32[i18 >> 2] = i23;
   i32 = i23;
  }
 } while (0);
 do {
  if ((i21 | 0) == 21) {
   if ((__ZNK7WebCore4Node20renderBoxModelObjectEv(i14) | 0) == 0) {
    i21 = 23;
    break;
   }
   i34 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i14) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i34 >> 2] | 0) + 476 >> 2] & 31](i34 | 0, i4, 0);
   i21 = 23;
  }
 } while (0);
 if ((i21 | 0) == 23) {
  i32 = HEAP32[i18 >> 2] | 0;
 }
 if ((i32 | 0) == 0) {
  i32 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore10ClientRectC1Ev(i32);
  HEAP32[i1 >> 2] = i32;
 } else {
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i12, HEAP32[i16 >> 2] | 0);
  if ((HEAP32[i18 >> 2] | 0) >>> 0 > 1 >>> 0) {
   i32 = 1;
   while (1) {
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i13, (HEAP32[i16 >> 2] | 0) + (i32 << 5) | 0);
    __ZN7WebCore9FloatRect5uniteERKS0_(i12, i13);
    i32 = i32 + 1 | 0;
    if (i32 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  i32 = i2 + 32 | 0;
  if ((HEAP32[i19 >> 2] & 2048 | 0) == 0) {
   i36 = i32 | 0;
  } else {
   i36 = HEAP32[i32 >> 2] | 0;
  }
  __ZN7WebCore8Document52adjustFloatRectForScrollAndAbsoluteZoomAndFrameScaleERNS_9FloatRectERKNS_11RenderStyleE(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0, i12, HEAP32[(HEAP32[i36 >> 2] | 0) + 36 >> 2] | 0);
  i36 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore10ClientRectC1ERKNS_9FloatRectE(i36, i12);
  HEAP32[i1 >> 2] = i36;
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (i2 | 0) == -1;
 if ((i10 | 0) == 0) {
  if (i11) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i2, i5);
  STACKTOP = i6;
  return;
 }
 if (i11) {
  __ZN7WebCore7Element20addAttributeInternalERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i3, i4, i5);
  STACKTOP = i6;
  return;
 }
 i11 = i1 + 48 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 i14 = (i13 & 1 | 0) == 0;
 if (i14) {
  i15 = i13 >>> 1 & 134217727;
 } else {
  i15 = HEAP32[i12 + 32 >> 2] | 0;
 }
 if (i15 >>> 0 <= i2 >>> 0) {
  _WTFCrash();
 }
 if (i14) {
  i16 = i12 + 20 | 0;
 } else {
  i16 = HEAP32[i12 + 24 >> 2] | 0;
 }
 i15 = (i10 | 0) != (HEAP32[i16 + (i2 << 3) + 4 >> 2] | 0);
 i16 = (i5 | 0) != 0;
 if (i15 | i16 ^ 1) {
  if (i14) {
   i17 = i13 >>> 1 & 134217727;
  } else {
   i17 = HEAP32[i12 + 32 >> 2] | 0;
  }
  if (i17 >>> 0 <= i2 >>> 0) {
   _WTFCrash();
  }
  if (i14) {
   i18 = i12 + 20 | 0;
  } else {
   i18 = HEAP32[i12 + 24 >> 2] | 0;
  }
  i19 = i18 + (i2 << 3) | 0;
 } else {
  i19 = i3;
 }
 i3 = i7 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 HEAP32[i3 >> 2] = i18;
 i19 = i18 | 0;
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 if (!i16) {
  i19 = HEAP32[i11 >> 2] | 0;
  i18 = HEAP32[i19 + 4 >> 2] | 0;
  i12 = (i18 & 1 | 0) == 0;
  if (i12) {
   i20 = i18 >>> 1 & 134217727;
  } else {
   i20 = HEAP32[i19 + 32 >> 2] | 0;
  }
  if (i20 >>> 0 <= i2 >>> 0) {
   _WTFCrash();
  }
  if (i12) {
   i21 = i19 + 20 | 0;
  } else {
   i21 = HEAP32[i19 + 24 >> 2] | 0;
  }
  __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i1, i7, i21 + (i2 << 3) + 4 | 0, i4);
 }
 L51 : do {
  if (i15) {
   do {
    if (i16) {
     HEAP32[i8 >> 2] = 0;
    } else {
     __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i8, i1, i7);
     i21 = i8 | 0;
     i19 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     if ((i19 | 0) == 0) {
      break;
     }
     __ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringE(i19, i4);
     i21 = i19 + 8 | 0;
     i19 = i21 | 0;
     i12 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      i22 = 53;
      break L51;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      i22 = 52;
      break L51;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     i22 = 52;
     break L51;
    }
   } while (0);
   i21 = HEAP32[i11 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 40;
   } else {
    if ((HEAP32[i21 + 4 >> 2] & 1 | 0) == 0) {
     i22 = 40;
    } else {
     i23 = i21;
    }
   }
   if ((i22 | 0) == 40) {
    __ZN7WebCore7Element23createUniqueElementDataEv(i1);
    i23 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i23 + 32 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i21 = HEAP32[i23 + 24 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i19 = i12 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   }
   i19 = i21 + (i2 << 3) + 4 | 0;
   i21 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i12;
   if ((i21 | 0) == 0) {
    i22 = 52;
    break;
   }
   i12 = i21 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i22 = 52;
    break;
   } else {
    HEAP32[i12 >> 2] = i19;
    i22 = 52;
    break;
   }
  } else {
   i22 = 52;
  }
 } while (0);
 if ((i22 | 0) == 52) {
  if (!i16) {
   i22 = 53;
  }
 }
 do {
  if ((i22 | 0) == 53) {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 3](i1, i7, i4, 0);
   i16 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i2 = (HEAP32[i3 >> 2] | 0) + 12 | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i16 | 0) == 0) {
    break;
   }
   i9 = __ZNK7WebCore8Document4pageEv(i16) | 0;
   do {
    if ((i9 | 0) == 0) {
     i23 = HEAP32[i16 + 2204 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i24 = 0;
      break;
     }
     i24 = __ZNK7WebCore8Document4pageEv(i23) | 0;
    } else {
     i24 = i9;
    }
   } while (0);
   i9 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i24) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation20didModifyDOMAttrImplEPNS_19InstrumentingAgentsEPNS_7ElementERKN3WTF12AtomicStringES8_(i9, i1, i2, i4);
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 STACKTOP = i6;
 return;
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
function __ZNK7WebCore7Element24computeInheritedLanguageEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i4 | 0;
 i6 = i2 | 0;
 i2 = 0;
 while (1) {
  L3 : do {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
    if ((HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i6 | 0)) {
     i7 = 0;
     i8 = i2;
     break;
    }
    i9 = HEAP32[i6 + 1304 >> 2] | 0;
    if ((i9 | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
     HEAP32[i5 >> 2] = 0;
     i7 = 0;
     i8 = 0;
     break;
    }
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i9);
     i11 = HEAP32[i1 >> 2] | 0;
     i12 = i11;
     i13 = i11;
    } else {
     HEAP32[i1 >> 2] = i9;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i10 = HEAP32[i1 >> 2] | 0;
     i12 = i10;
     i13 = i10;
    }
    HEAP32[i5 >> 2] = i13;
    i10 = i9 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     i7 = i12;
     i8 = i12;
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     i7 = i12;
     i8 = i12;
     break;
    }
   } else {
    i11 = HEAP32[i6 + 48 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i7 = 0;
     i8 = i2;
     break;
    }
    i10 = HEAP32[i11 + 4 >> 2] | 0;
    i9 = (i10 & 1 | 0) == 0;
    if (i9) {
     i14 = i10 >>> 1 & 134217727;
     i15 = i11 + 20 | 0;
    } else {
     i16 = i11 + 24 | 0;
     i14 = HEAP32[i16 + 8 >> 2] | 0;
     i15 = HEAP32[i16 >> 2] | 0;
    }
    L10 : do {
     if ((i14 | 0) != 0) {
      i16 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
      i17 = i16 + 12 | 0;
      i18 = i16 + 16 | 0;
      i19 = 0;
      while (1) {
       i20 = i15 + (i19 << 3) | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       if ((i21 | 0) == (i16 | 0)) {
        break;
       }
       if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
        if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
         break;
        }
       }
       i21 = i19 + 1 | 0;
       if (i21 >>> 0 < i14 >>> 0) {
        i19 = i21;
       } else {
        break L10;
       }
      }
      if ((i20 | 0) == 0) {
       break;
      }
      i18 = HEAP32[i15 + (i19 << 3) + 4 >> 2] | 0;
      if ((i18 | 0) != 0) {
       i17 = i18 | 0;
       HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
      }
      HEAP32[i5 >> 2] = i18;
      if ((i2 | 0) == 0) {
       i7 = i18;
       i8 = i18;
       break L3;
      }
      i17 = i2 | 0;
      i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i2);
       i7 = i18;
       i8 = i18;
       break L3;
      } else {
       HEAP32[i17 >> 2] = i16;
       i7 = i18;
       i8 = i18;
       break L3;
      }
     }
    } while (0);
    if (i9) {
     i22 = i10 >>> 1 & 134217727;
     i23 = i11 + 20 | 0;
    } else {
     i18 = i11 + 24 | 0;
     i22 = HEAP32[i18 + 8 >> 2] | 0;
     i23 = HEAP32[i18 >> 2] | 0;
    }
    if ((i22 | 0) == 0) {
     i7 = 0;
     i8 = i2;
     break;
    }
    i18 = HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0;
    i16 = i18 + 12 | 0;
    i17 = i18 + 16 | 0;
    i21 = 0;
    while (1) {
     i24 = i23 + (i21 << 3) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == (i18 | 0)) {
      break;
     }
     if ((HEAP32[i25 + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      if ((HEAP32[i25 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
       break;
      }
     }
     i25 = i21 + 1 | 0;
     if (i25 >>> 0 < i22 >>> 0) {
      i21 = i25;
     } else {
      i7 = 0;
      i8 = i2;
      break L3;
     }
    }
    if ((i24 | 0) == 0) {
     i7 = 0;
     i8 = i2;
     break;
    }
    i17 = HEAP32[i23 + (i21 << 3) + 4 >> 2] | 0;
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
    HEAP32[i5 >> 2] = i17;
    if ((i2 | 0) == 0) {
     i7 = i17;
     i8 = i17;
     break;
    }
    i16 = i2 | 0;
    i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     i7 = i17;
     i8 = i17;
     break;
    } else {
     HEAP32[i16 >> 2] = i18;
     i7 = i17;
     i8 = i17;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i17 | 0) == 0) {
   i26 = 48;
   break;
  }
  if ((i7 | 0) == 0) {
   i6 = i17 | 0;
   i2 = i8;
  } else {
   i26 = 49;
   break;
  }
 }
 if ((i26 | 0) == 48) {
  STACKTOP = i3;
  return;
 } else if ((i26 | 0) == 49) {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i2 | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i2 = i1;
 i9 = i4 | 0;
 i10 = 0;
 i11 = 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = i6;
 L4 : while (1) {
  i6 = HEAP32[i12 + (i11 << 3) >> 2] | 0;
  do {
   if ((HEAP32[i6 + 16 >> 2] | 0) == 0) {
    i14 = HEAP32[i6 + 12 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i15 = i13;
     i16 = 7;
     break;
    }
    if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i14, H_BASE + 8 | 0, 2, 1) | 0) {
     i17 = i10;
     break;
    }
    i15 = HEAP32[i5 >> 2] | 0;
    i16 = 7;
   } else {
    i15 = i13;
    i16 = 7;
   }
  } while (0);
  L10 : do {
   if ((i16 | 0) == 7) {
    i16 = 0;
    if (i15 >>> 0 <= i11 >>> 0) {
     i16 = 8;
     break L4;
    }
    i6 = HEAP32[i7 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 376 >> 2] & 31](i1, i6 + (i11 << 3) | 0) | 0) {
      __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, i6 + (i11 << 3) + 4 | 0);
      i14 = __ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i4) | 0;
      i18 = HEAP32[i9 >> 2] | 0;
      if ((i18 | 0) == 0) {
       if (i14) {
        i17 = i10;
        break L10;
       } else {
        break;
       }
      }
      i19 = i18 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       if (i14) {
        i17 = i10;
        break L10;
       } else {
        break;
       }
      } else {
       HEAP32[i19 >> 2] = i20;
       if (i14) {
        i17 = i10;
        break L10;
       } else {
        break;
       }
      }
     }
    } while (0);
    if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i11 >>> 0) {
     i16 = 16;
     break L4;
    }
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 380 >> 2] & 31](i1, (HEAP32[i7 >> 2] | 0) + (i11 << 3) | 0) | 0) {
     i17 = i10;
     break;
    }
    do {
     if ((i11 | 0) != (i10 | 0)) {
      i6 = HEAP32[i5 >> 2] | 0;
      if (i6 >>> 0 <= i10 >>> 0) {
       i16 = 20;
       break L4;
      }
      i14 = HEAP32[i7 >> 2] | 0;
      i20 = i14 + (i10 << 3) | 0;
      if (i6 >>> 0 <= i11 >>> 0) {
       i16 = 22;
       break L4;
      }
      i6 = i14 + (i11 << 3) | 0;
      i19 = HEAP32[i6 >> 2] | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      __ZN7WebCore13QualifiedName5derefEv(i20 | 0);
      HEAP32[i20 >> 2] = HEAP32[i6 >> 2];
      i6 = HEAP32[i14 + (i11 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) != 0) {
       i20 = i6 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
      }
      i20 = i14 + (i10 << 3) + 4 | 0;
      i14 = HEAP32[i20 >> 2] | 0;
      HEAP32[i20 >> 2] = i6;
      if ((i14 | 0) == 0) {
       break;
      }
      i6 = i14 | 0;
      i20 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i6 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i17 = i10 + 1 | 0;
   }
  } while (0);
  i20 = i11 + 1 | 0;
  i21 = HEAP32[i5 >> 2] | 0;
  i22 = HEAP32[i7 >> 2] | 0;
  if (i20 >>> 0 < i21 >>> 0) {
   i10 = i17;
   i11 = i20;
   i12 = i22;
   i13 = i21;
  } else {
   i16 = 31;
   break;
  }
 }
 if ((i16 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 31) {
  i13 = i22 + (i21 << 3) | 0;
  if ((i21 | 0) == (i17 | 0)) {
   i8 = i17;
   HEAP32[i5 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
  i21 = i22 + (i17 << 3) | 0;
  while (1) {
   i22 = HEAP32[i21 + 4 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i12 = i22 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i12 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i21 | 0);
   i22 = i21 + 8 | 0;
   if ((i22 | 0) == (i13 | 0)) {
    i8 = i17;
    break;
   } else {
    i21 = i22;
   }
  }
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i3;
  return;
 } else if ((i16 | 0) == 20) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 22) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = (i5 | 0) == 1;
 L1 : do {
  if (i6) {
   if (!(__ZN7WebCore20WindowNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) | 0)) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i5 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i8 & 268435456 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i8 & 1 | 0) == 0) {
    i9 = i8 >>> 1 & 134217727;
    i10 = i5 + 20 | 0;
   } else {
    i8 = i5 + 24 | 0;
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i5 = i8 + 12 | 0;
   i11 = i8 + 16 | 0;
   i12 = 0;
   while (1) {
    i13 = i10 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
     if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      break;
     }
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i9 >>> 0) {
     i12 = i14;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i13 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i12 << 3) + 4 | 0;
  } else {
   i7 = __ZN3WTF8nullAtomE;
  }
 } while (0);
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i3 | 0) == (HEAP32[i7 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore12HTMLDocument21removeWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i3, i1);
  }
 } while (0);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i7 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore12HTMLDocument18addWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i4, i1);
  }
 } while (0);
 if (!(__ZN7WebCore22DocumentNameCollection29nodeMatchesIfIdAttributeMatchEPNS_7ElementE(i1) | 0)) {
  return;
 }
 L32 : do {
  if (i6) {
   if (!(__ZN7WebCore22DocumentNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) | 0)) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i4 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i7 & 268435456 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i7 & 1 | 0) == 0) {
    i16 = i7 >>> 1 & 134217727;
    i17 = i4 + 20 | 0;
   } else {
    i7 = i4 + 24 | 0;
    i16 = HEAP32[i7 + 8 >> 2] | 0;
    i17 = HEAP32[i7 >> 2] | 0;
   }
   if ((i16 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i4 = i7 + 12 | 0;
   i13 = i7 + 16 | 0;
   i9 = 0;
   while (1) {
    i18 = i17 + (i9 << 3) | 0;
    i11 = HEAP32[i18 >> 2] | 0;
    if ((i11 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i16 >>> 0) {
     i9 = i11;
    } else {
     i15 = __ZN3WTF8nullAtomE;
     break L32;
    }
   }
   i15 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i17 + (i9 << 3) + 4 | 0;
  } else {
   i15 = __ZN3WTF8nullAtomE;
  }
 } while (0);
 i17 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i17 | 0) == (HEAP32[i15 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore12HTMLDocument23removeDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i17, i1);
  }
 } while (0);
 i17 = HEAP32[i3 >> 2] | 0;
 if ((i17 | 0) == 0) {
  return;
 }
 if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
  return;
 }
 if ((i17 | 0) == (HEAP32[i15 >> 2] | 0)) {
  return;
 }
 __ZN7WebCore12HTMLDocument20addDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i17, i1);
 return;
}
function __ZN7WebCore7Element16setAttributeNodeEPNS_4AttrERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 17;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i8 = i3 + 48 | 0;
 __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i6, i2, i8);
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if ((i6 | 0) == (i3 | 0)) {
   HEAP32[i1 >> 2] = i3;
   i9 = i3 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  } else {
   if ((HEAP32[i3 + 44 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 10;
    HEAP32[i1 >> 2] = 0;
    break;
   }
   i9 = i2 + 48 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = 14;
    } else {
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i12 & 1073741824 | 0) == 0) {
      i13 = i12;
      i14 = i10;
     } else {
      __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i2);
      i12 = HEAP32[i9 >> 2] | 0;
      i13 = HEAP32[i12 + 4 >> 2] | 0;
      i14 = i12;
     }
     if ((i13 | 0) < 0) {
      __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore7anyNameE);
      i15 = HEAP32[i9 >> 2] | 0;
     } else {
      i15 = i14;
     }
     if ((i15 | 0) == 0) {
      i11 = 14;
      break;
     }
     if ((HEAP32[i15 + 4 >> 2] & 1 | 0) == 0) {
      i11 = 14;
     } else {
      i16 = i15;
     }
    }
   } while (0);
   if ((i11 | 0) == 14) {
    __ZN7WebCore7Element23createUniqueElementDataEv(i2);
    i16 = HEAP32[i9 >> 2] | 0;
   }
   if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
    i17 = 0;
   } else {
    i17 = (HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0;
   }
   i10 = __ZNK7WebCore11ElementData40findAttributeIndexByNameForAttributeNodeEPKNS_4AttrEb(i16, i3, i17) | 0;
   do {
    if ((i10 | 0) == -1) {
     i18 = i6;
    } else {
     i12 = (HEAP32[i16 + 32 >> 2] | 0) >>> 0 > i10 >>> 0;
     if ((i6 | 0) == 0) {
      if (i12) {
       __ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i8, (HEAP32[i16 + 24 >> 2] | 0) + (i10 << 3) + 4 | 0);
       i19 = i7 | 0;
       i20 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = 0;
       i18 = i20;
       break;
      } else {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } else {
      if (i12) {
       __ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE(i2, i6, (HEAP32[i16 + 24 >> 2] | 0) + (i10 << 3) + 4 | 0);
       i18 = i6;
       break;
      } else {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    }
   } while (0);
   __ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i2, i10, i8, __ZNK7WebCore4Attr5valueEv(i3) | 0, 0);
   __ZN7WebCore4Attr15attachToElementEPNS_7ElementE(i3, i2);
   __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i2 + 20 >> 2] | 0, i3 | 0);
   i9 = __ZN7WebCoreL28ensureAttrNodeListForElementEPNS_7ElementE(i2) | 0;
   i12 = i9 + 8 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   if ((i20 | 0) == (HEAP32[i9 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore4AttrEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i20 + 1 | 0);
    HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) >> 2] = i3;
    i19 = i3 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   } else {
    HEAP32[(HEAP32[i9 >> 2] | 0) + (i20 << 2) >> 2] = i3;
    i20 = i3 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i18 = i6 + 8 | 0;
 i6 = i18 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 do {
  if (__ZN7WebCore20WindowNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) | 0) {
   i5 = HEAP32[i1 + 48 >> 2] | 0;
   L3 : do {
    if ((i5 | 0) == 0) {
     i6 = __ZN3WTF8nullAtomE;
    } else {
     if ((HEAP32[i5 + 16 >> 2] | 0) == 0) {
      i6 = __ZN3WTF8nullAtomE;
      break;
     }
     i7 = HEAP32[i5 + 4 >> 2] | 0;
     if ((i7 & 1 | 0) == 0) {
      i8 = i7 >>> 1 & 134217727;
      i9 = i5 + 20 | 0;
     } else {
      i7 = i5 + 24 | 0;
      i8 = HEAP32[i7 + 8 >> 2] | 0;
      i9 = HEAP32[i7 >> 2] | 0;
     }
     if ((i8 | 0) == 0) {
      i6 = __ZN3WTF8nullAtomE;
      break;
     }
     i7 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i10 = i7 + 12 | 0;
     i11 = i7 + 16 | 0;
     i12 = 0;
     while (1) {
      i13 = i9 + (i12 << 3) | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      if ((i14 | 0) == (i7 | 0)) {
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
       i6 = __ZN3WTF8nullAtomE;
       break L3;
      }
     }
     i6 = (i13 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i12 << 3) + 4 | 0;
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
      break;
     }
     if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
      break;
     }
     __ZN7WebCore12HTMLDocument21removeWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
    }
   } while (0);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i5 | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore12HTMLDocument18addWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
  }
 } while (0);
 if (!(__ZN7WebCore22DocumentNameCollection31nodeMatchesIfNameAttributeMatchEPNS_7ElementE(i1) | 0)) {
  return;
 }
 L31 : do {
  if (__ZN7WebCore22DocumentNameCollection29nodeMatchesIfIdAttributeMatchEPNS_7ElementE(i1) | 0) {
   i6 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i16 = i9 >>> 1 & 134217727;
    i17 = i6 + 20 | 0;
   } else {
    i9 = i6 + 24 | 0;
    i16 = HEAP32[i9 + 8 >> 2] | 0;
    i17 = HEAP32[i9 >> 2] | 0;
   }
   if ((i16 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
    break;
   }
   i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
   i6 = i9 + 12 | 0;
   i13 = i9 + 16 | 0;
   i8 = 0;
   while (1) {
    i18 = i17 + (i8 << 3) | 0;
    i5 = HEAP32[i18 >> 2] | 0;
    if ((i5 | 0) == (i9 | 0)) {
     break;
    }
    if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      break;
     }
    }
    i5 = i8 + 1 | 0;
    if (i5 >>> 0 < i16 >>> 0) {
     i8 = i5;
    } else {
     i15 = __ZN3WTF8nullAtomE;
     break L31;
    }
   }
   i15 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i17 + (i8 << 3) + 4 | 0;
  } else {
   i15 = __ZN3WTF8nullAtomE;
  }
 } while (0);
 i17 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i17 | 0) == (HEAP32[i15 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore12HTMLDocument23removeDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i17, i1);
  }
 } while (0);
 i17 = HEAP32[i4 >> 2] | 0;
 if ((i17 | 0) == 0) {
  return;
 }
 if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
  return;
 }
 if ((i17 | 0) == (HEAP32[i15 >> 2] | 0)) {
  return;
 }
 __ZN7WebCore12HTMLDocument20addDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i17, i1);
 return;
}
function __ZNK7WebCore7Element7baseURIEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 104 | 0;
 i8 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore8XMLNames8baseAttrE) | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i10 = i8 | 0;
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i4, i5, i10);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL8protocolEv(i6, i4);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i11 = 10;
  } else {
   i6 = (HEAP32[i5 + 4 >> 2] | 0) == 0;
   i8 = i5 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    if (i6) {
     i11 = 10;
     break;
    }
   } else {
    HEAP32[i8 >> 2] = i9;
    if (i6) {
     i11 = 10;
     break;
    }
   }
   i6 = i4 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = i9;
   i9 = HEAP8[i4 + 4 | 0] | 0;
   i6 = i1 + 4 | 0;
   HEAP8[i6] = HEAP8[i6] & -4 | i9 & 1 | i9 & 2;
   HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
   HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
   HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
   HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
   HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
   HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
   HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
   HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
   HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   i5 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = i4 | 0;
    i6 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i1 >> 2] = i6;
    i6 = HEAP8[i4 + 4 | 0] | 0;
    i9 = i1 + 4 | 0;
    HEAP8[i9] = HEAP8[i9] & -4 | i6 & 1 | i6 & 2;
    HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
    HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
    HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
    HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
    HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
    HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
    HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
    HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
    HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
    HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 63](i7, i5 | 0);
   i5 = i7 | 0;
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    i6 = i4 | 0;
    i9 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i1 >> 2] = i9;
    i9 = HEAP8[i4 + 4 | 0] | 0;
    i6 = i1 + 4 | 0;
    HEAP8[i6] = HEAP8[i6] & -4 | i9 & 1 | i9 & 2;
    HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
    HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
    HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
    HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
    HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
    HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
    HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
    HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
    HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
    HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
    break;
   }
   __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i1, i7, i10);
   i9 = HEAP32[i5 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i5 = i9 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i10 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore7Element19webkitRegionOversetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0);
 if (!(HEAP8[H_BASE + 664 | 0] | 0)) {
  i8 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i6, H_BASE + 40 | 0, 9);
  i9 = i6 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i6;
  HEAP32[H_BASE + 712 >> 2] = i8;
  HEAP8[H_BASE + 664 | 0] = 1;
 }
 do {
  if (__ZNK7WebCore8Document17cssRegionsEnabledEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0) {
   i8 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
   i6 = i1 + 32 | 0;
   if (i8) {
    i10 = i6 | 0;
   } else {
    i10 = HEAP32[i6 >> 2] | 0;
   }
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   if (i8) {
    i12 = i6 | 0;
   } else {
    i12 = HEAP32[i6 >> 2] | 0;
   }
   i9 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i9 + 24 >> 2] & 32 | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   i13 = HEAP32[i9 + 100 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   if ((HEAP32[i13 + 28 >> 2] | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   if (i8) {
    i14 = i6 | 0;
   } else {
    i14 = HEAP32[i6 >> 2] | 0;
   }
   i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + 100 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   if ((HEAP32[i13 + 28 >> 2] | 0) == 0) {
    i11 = H_BASE + 712;
    break;
   }
   if (i8) {
    i15 = i6 | 0;
   } else {
    i15 = HEAP32[i6 >> 2] | 0;
   }
   do {
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     i16 = 0;
    } else {
     if (i8) {
      i17 = i6 | 0;
     } else {
      i17 = HEAP32[i6 >> 2] | 0;
     }
     i13 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i13 + 24 >> 2] & 32 | 0) == 0) {
      i16 = 0;
      break;
     }
     i9 = HEAP32[i13 + 100 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i16 = 0;
      break;
     }
     if ((HEAP32[i9 + 28 >> 2] | 0) == 0) {
      i16 = 0;
      break;
     }
     if (i8) {
      i18 = i6 | 0;
     } else {
      i18 = HEAP32[i6 >> 2] | 0;
     }
     i9 = HEAP32[(HEAP32[i18 >> 2] | 0) + 100 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i19 = 0;
     } else {
      i19 = HEAP32[i9 + 28 >> 2] | 0;
     }
     i16 = i19 | 0;
    }
   } while (0);
   i6 = __ZNK7WebCore12RenderRegion18regionOversetStateEv(i16) | 0;
   if ((i6 | 0) == 2) {
    if (HEAP8[H_BASE + 656 | 0] | 0) {
     i11 = H_BASE + 704;
     break;
    }
    i8 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 32 | 0, 3);
    i9 = i5 | 0;
    i13 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i8 >> 2] = i13;
    HEAP32[H_BASE + 704 >> 2] = i8;
    HEAP8[H_BASE + 656 | 0] = 1;
    i11 = H_BASE + 704;
    break;
   } else if ((i6 | 0) == 1) {
    if (HEAP8[H_BASE + 680 | 0] | 0) {
     i11 = H_BASE + 728;
     break;
    }
    i8 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 24 | 0, 5);
    i13 = i4 | 0;
    i9 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i8 >> 2] = i9;
    HEAP32[H_BASE + 728 >> 2] = i8;
    HEAP8[H_BASE + 680 | 0] = 1;
    i11 = H_BASE + 728;
    break;
   } else if ((i6 | 0) == 3) {
    if (HEAP8[H_BASE + 672 | 0] | 0) {
     i11 = H_BASE + 720;
     break;
    }
    i6 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 16 | 0, 7);
    i8 = i3 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i6 >> 2] = i9;
    HEAP32[H_BASE + 720 >> 2] = i6;
    HEAP8[H_BASE + 672 | 0] = 1;
    i11 = H_BASE + 720;
    break;
   } else {
    i11 = H_BASE + 712;
    break;
   }
  } else {
   i11 = H_BASE + 712;
  }
 } while (0);
 STACKTOP = i2;
 return HEAP32[i11 >> 2] | 0;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP8[i12] | 0;
  if ((i13 << 24 >> 24 | 0) == 0) {
   i14 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = i11;
   } else {
    i16 = i14;
    i17 = 6;
   }
  } else if ((i13 << 24 >> 24 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   i16 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   i17 = 6;
  }
  if ((i17 | 0) == 6) {
   i17 = 0;
   i14 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   i19 = i7 + (i10 * 12 & -1) + 4 | 0;
   i20 = (i13 & 255) + ((HEAP32[i16 + 16 >> 2] | 0) >>> 7) | 0;
   i21 = (i20 >>> 23) + ~i20 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = i20;
   i20 = 0;
   i23 = 0;
   L11 : while (1) {
    i24 = i22 & i18;
    i25 = i14 + (i24 * 12 & -1) | 0;
    i26 = HEAP8[i25 | 0] | 0;
    if ((i26 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i17 = 9;
      break;
     } else {
      i17 = 10;
     }
    } else if ((i26 << 24 >> 24 | 0) == (-1 | 0)) {
     i27 = i25;
    } else {
     i17 = 10;
    }
    do {
     if ((i17 | 0) == 10) {
      i17 = 0;
      if (i26 << 24 >> 24 != i13 << 24 >> 24) {
       i27 = i23;
       break;
      }
      if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == (i16 | 0)) {
       i28 = i25;
       break L11;
      } else {
       i27 = i23;
      }
     }
    } while (0);
    i26 = (i20 | 0) == 0 ? i21 : i20;
    i22 = i26 + i24 | 0;
    i20 = i26;
    i23 = i27;
   }
   if ((i17 | 0) == 9) {
    i17 = 0;
    i28 = (i23 | 0) != 0 ? i23 : i25;
   }
   i20 = i28 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i14 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP8[i28 | 0] = HEAP8[i12] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i28 + 8 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 8 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i11;
  }
  i22 = i10 + 1 | 0;
  if ((i22 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i22;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i7 + (i29 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i7 + (i29 * 12 & -1) + 4 >> 2] | 0;
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
  i2 = i29 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i29 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7 | 0;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SH_SN_SK_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_(i2, i8, 0) | 0;
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
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = i20;
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
  i27 = i2 + 16 | 0;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore7ElementENS_6OwnPtrINS_6VectorINS_6RefPtrINS2_4AttrEEELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSF_ISC_EEE18KeyValuePairTraitsESE_E9translateINS_12KeyValuePairIS4_SC_EERKS4_NS_10PassOwnPtrISB_EEEEvRT_OT0_OT1_(i26, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i27 >> 2] | 0) + i3 << 1 | 0) < (i13 | 0)) {
  i28 = i26;
  i29 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i30 = 8;
  } else {
   i27 = i13 << 1;
   i30 = (i3 * 6 & -1 | 0) < (i27 | 0) ? i13 : i27;
  }
  i27 = __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_(i2, i30, i26) | 0;
  i28 = i27;
  i29 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i29 << 3) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i6 = i3 | 0;
 i3 = HEAP8[i6] | 0;
 i10 = (i3 & 255) + ((HEAP32[i8 + 16 >> 2] | 0) >>> 7) | 0;
 i11 = (i10 >>> 23) + ~i10 | 0;
 i12 = i11 << 12 ^ i11;
 i11 = i12 >>> 7 ^ i12;
 i12 = i11 << 2 ^ i11;
 i11 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i13 = i10;
 i10 = 0;
 L7 : while (1) {
  i14 = i13 & i5;
  i15 = i9 + (i14 * 12 & -1) | 0;
  i16 = HEAP8[i15 | 0] | 0;
  if ((i16 << 24 >> 24 | 0) == 0) {
   if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   } else {
    i17 = 8;
   }
  } else if ((i16 << 24 >> 24 | 0) == (-1 | 0)) {
   i18 = i15;
  } else {
   i17 = 8;
  }
  do {
   if ((i17 | 0) == 8) {
    i17 = 0;
    if (i16 << 24 >> 24 != i3 << 24 >> 24) {
     i18 = i12;
     break;
    }
    if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == (i8 | 0)) {
     i17 = 10;
     break L7;
    } else {
     i18 = i12;
    }
   }
  } while (0);
  i16 = (i10 | 0) == 0 ? i11 : i10;
  i12 = i18;
  i13 = i16 + i14 | 0;
  i10 = i16;
 }
 if ((i17 | 0) == 10) {
  i17 = i9 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i15;
  HEAP32[i9 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i12 | 0) == 0) {
  i19 = i15;
  i20 = i3;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i12;
  i20 = HEAP8[i6] | 0;
 }
 HEAP8[i19 | 0] = i20;
 i20 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i19 + 4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i20;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i7 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 8 >> 2] = 0;
 i6 = i2 + 12 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i7;
 i6 = i2 + 4 | 0;
 i20 = HEAP32[i6 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i20 | 0)) {
  i21 = i19;
  i22 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i23 = 8;
  } else {
   i12 = i20 << 1;
   i23 = (i7 * 6 & -1 | 0) < (i12 | 0) ? i20 : i12;
  }
  i12 = __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i23, i19) | 0;
  i21 = i12;
  i22 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (HEAP32[i4 >> 2] | 0) + (i22 * 12 & -1) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i6;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL28ensureAttrNodeListForElementEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 HEAP32[i3 >> 2] = i1;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 524288 | 0) != 0) {
  if (HEAP8[H_BASE + 688 | 0] | 0) {
   i8 = HEAP32[H_BASE + 736 >> 2] | 0;
  } else {
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i10 = i9;
   _memset(i9 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 736 >> 2] = i10;
   HEAP8[H_BASE + 688 | 0] = 1;
   i8 = i10;
  }
  i10 = HEAP32[i8 + 8 >> 2] | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i8 = i1;
  i11 = i8 + ~(i8 << 15) | 0;
  i8 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i8 >>> 6 ^ i8;
  i8 = i11 + ~(i11 << 11) | 0;
  i11 = i8 >>> 16 ^ i8;
  if ((i9 | 0) == 0) {
   i12 = 0;
   STACKTOP = i2;
   return i12 | 0;
  }
  i8 = i11 & i10;
  i13 = i9 + (i8 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  L10 : do {
   if ((i14 | 0) == (i1 | 0)) {
    i15 = i13;
   } else {
    i16 = (i11 >>> 23) + ~i11 | 0;
    i17 = i16 << 12 ^ i16;
    i16 = i17 >>> 7 ^ i17;
    i17 = i16 << 2 ^ i16;
    i16 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i8;
    i19 = i14;
    while (1) {
     if ((i19 | 0) == 0) {
      i12 = 0;
      break;
     }
     i20 = (i17 | 0) == 0 ? i16 : i17;
     i21 = i20 + i18 & i10;
     i22 = i9 + (i21 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == (i1 | 0)) {
      i15 = i22;
      break L10;
     } else {
      i17 = i20;
      i18 = i21;
      i19 = i23;
     }
    }
    STACKTOP = i2;
    return i12 | 0;
   }
  } while (0);
  if ((i15 | 0) == 0) {
   i12 = 0;
   STACKTOP = i2;
   return i12 | 0;
  }
  i12 = HEAP32[i15 + 4 >> 2] | 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 HEAP32[i6 >> 2] = i7 | 524288;
 if (HEAP8[H_BASE + 688 | 0] | 0) {
  i24 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i6;
  HEAP8[H_BASE + 688 | 0] = 1;
  i24 = i6;
 }
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SH_SN_SK_EEEEOT0_OT1_(i4, i24 | 0, i3, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i7 = i5 + 8 | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  i24 = i5 | 0;
  if ((i3 | 0) != 0) {
   i6 = HEAP32[i24 >> 2] | 0;
   i15 = i6 + (i3 << 2) | 0;
   i3 = i6;
   while (1) {
    i6 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i1 = i6 + 8 | 0;
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i10;
      if ((i10 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
     }
    } while (0);
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i15 | 0)) {
     break;
    }
   }
   HEAP32[i7 >> 2] = 0;
  }
  i7 = HEAP32[i24 >> 2] | 0;
  if ((i7 | 0) != 0) {
   HEAP32[i24 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i12 = HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCore7Element10ensureAttrERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN7WebCoreL28ensureAttrNodeListForElementEPNS_7ElementE(i2) | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i3 | 0;
 i12 = 0;
 while (1) {
  if (i12 >>> 0 >= i10 >>> 0) {
   i13 = 3;
   break;
  }
  i14 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2] | 0;
  if ((HEAP32[i14 + 48 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
   i13 = 5;
   break;
  } else {
   i12 = i12 + 1 | 0;
  }
 }
 do {
  if ((i13 | 0) == 5) {
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) == 0) {
    i15 = i12;
    break;
   }
   i11 = i14 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    i15 = i12;
    break;
   } else {
    i16 = i12;
   }
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i1 | 0;
   HEAP32[i18 >> 2] = i17;
   STACKTOP = i4;
   return;
  } else if ((i13 | 0) == 3) {
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = 0;
   i15 = i12;
  }
 } while (0);
 __ZN7WebCore4Attr6createEPNS_7ElementERKNS_13QualifiedNameE(i6, i2, i3);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i6;
 do {
  if ((i14 | 0) != 0) {
   i6 = i14 + 8 | 0;
   i12 = i6 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 + 8 | 0;
   i6 = i3 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i2 + 20 >> 2] | 0, HEAP32[i15 >> 2] | 0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i7 + 4 >> 2] | 0)) {
  i14 = HEAP32[i15 >> 2] | 0;
  HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] = i14;
  if ((i14 | 0) != 0) {
   i3 = i14 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  }
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i16 = i15;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i17;
  STACKTOP = i4;
  return;
 }
 i3 = i2 + 1 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if (i14 >>> 0 > i5 >>> 0) {
   i13 = 21;
  } else {
   if ((i14 + (i2 << 2) | 0) >>> 0 <= i5 >>> 0) {
    i13 = 21;
    break;
   }
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore4AttrEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i3);
   i11 = HEAP32[i8 >> 2] | 0;
   i19 = i11 + (i5 - i14 >> 2 << 2) | 0;
   i20 = i11;
  }
 } while (0);
 if ((i13 | 0) == 21) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore4AttrEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i3);
  i19 = i5;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i19 >> 2] | 0;
 HEAP32[i20 + (HEAP32[i9 >> 2] << 2) >> 2] = i8;
 if ((i8 | 0) != 0) {
  i20 = i8 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i16 = i15;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i1 | 0;
 HEAP32[i18 >> 2] = i17;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Element9setActiveEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = i1 + 12 | 0;
 do {
  if ((HEAP32[i4 >> 2] & 1024 | 0) == 0) {
   if (i2) {
    i5 = i1 + 20 | 0;
    i6 = i1 | 0;
    i7 = i5;
    i8 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
    i9 = 6;
    break;
   } else {
    return;
   }
  } else {
   i5 = i1 + 20 | 0;
   if (!((__ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 1) | 0) ^ i2)) {
    return;
   }
   i10 = i1 | 0;
   i11 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
   if (i2) {
    i6 = i10;
    i7 = i5;
    i8 = i11;
    i9 = 6;
    break;
   }
   __ZN7WebCore20UserActionElementSet10clearFlagsEPNS_7ElementEj(i11, i1, 1);
   i12 = i10;
   i13 = i5;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  __ZN7WebCore20UserActionElementSet8setFlagsEPNS_7ElementEj(i8, i1, 1);
  i12 = i6;
  i13 = i7;
 }
 i7 = i1 + 32 | 0;
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  i14 = i7 | 0;
 } else {
  i14 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i14 >> 2] | 0) == 0) {
  return;
 }
 i14 = i12 + 32 | 0;
 if ((HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0) {
  i15 = i14 | 0;
 } else {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 236 >> 2] & 255](i12) | 0;
  } else {
   if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
    i16 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i16 = HEAP32[i14 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i16 + 52 >> 2] & 33554432 | 0) == 0) {
   if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
    i17 = 0;
    break;
   }
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i12) | 0) + 20 >> 2] & 128 | 0) == 0) {
    i17 = 0;
   } else {
    i9 = 23;
   }
  } else {
   i9 = 23;
  }
 } while (0);
 if ((i9 | 0) == 23) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i12, 32768);
  i17 = 1;
 }
 i12 = (HEAP32[i4 >> 2] & 2048 | 0) == 0;
 if (i12) {
  i18 = i7 | 0;
 } else {
  i18 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
  i19 = i17;
 } else {
  if (i12) {
   i20 = i7 | 0;
  } else {
   i20 = HEAP32[i7 >> 2] | 0;
  }
  i12 = __ZNK7WebCore12RenderObject5themeEv(HEAP32[i20 >> 2] | 0) | 0;
  if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
   i21 = i7 | 0;
  } else {
   i21 = HEAP32[i7 >> 2] | 0;
  }
  i19 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 1](i12, HEAP32[i21 >> 2] | 0, 2) | 0 | i17;
 }
 i17 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if (!((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 140 >> 2] & 255](i17) | 0) & i19 & i3)) {
  return;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0);
 i13 = (HEAP32[i4 >> 2] & 2048 | 0) == 0;
 if (i13) {
  i22 = i7 | 0;
 } else {
  i22 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  return;
 }
 if (i13) {
  i23 = i7 | 0;
 } else {
  i23 = HEAP32[i7 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i23 >> 2] | 0, 1);
 return;
}
function __ZN7WebCore7Element18parseAttributeNameERNS_13QualifiedNameERKN3WTF12AtomicStringES6_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = 0;
 if (__ZN7WebCore8Document18parseQualifiedNameERKN3WTF6StringERS2_S5_Ri(i3 | 0, i8, i9, i4) | 0) {
  i9 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = 0;
    i15 = i8;
   } else {
    if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i9);
     i15 = i7 | 0;
     break;
    } else {
     i8 = i7 | 0;
     HEAP32[i8 >> 2] = i9;
     i3 = i9 | 0;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
     i15 = i8;
     break;
    }
   }
  } while (0);
  i9 = i11 | 0;
  HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = 0;
    i16 = i7;
   } else {
    if ((HEAP32[i15 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i15);
     i16 = i6 | 0;
     break;
    } else {
     i7 = i6 | 0;
     HEAP32[i7 >> 2] = i15;
     i8 = i15 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i16 = i7;
     break;
    }
   }
  } while (0);
  i15 = i12 | 0;
  HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i10, i11, i12, i2);
  i2 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i15 = i2 | 0;
    i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i15 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i9 = i2 | 0;
    i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i9 >> 2] = i12;
     break;
    }
   }
  } while (0);
  if (__ZN7WebCore8Document30hasValidNamespaceForAttributesERKNS_13QualifiedNameE(i10) | 0) {
   i2 = i10 | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i1);
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i17 = 1;
  } else {
   HEAP32[i4 >> 2] = 14;
   i17 = 0;
  }
  __ZN7WebCore13QualifiedNameD1Ev(i10);
  i18 = i17;
 } else {
  i18 = 0;
 }
 i17 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i14 = i17 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i14 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return i18 | 0;
 }
 i13 = i17 | 0;
 i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i5;
  return i18 | 0;
 } else {
  HEAP32[i13 >> 2] = i10;
  STACKTOP = i5;
  return i18 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element21updateFocusAppearanceEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 72 | 0;
 i6 = i2 + 88 | 0;
 i7 = i1 | 0;
 if (!(__ZNK7WebCore4Node21isRootEditableElementEv(i7) | 0)) {
  i8 = i1 + 12 | 0;
  i9 = (HEAP32[i8 >> 2] & 2048 | 0) == 0;
  i10 = i1 + 32 | 0;
  if (i9) {
   i11 = i10 | 0;
  } else {
   i11 = HEAP32[i10 >> 2] | 0;
  }
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  if (i9) {
   i12 = i10 | 0;
  } else {
   i12 = HEAP32[i10 >> 2] | 0;
  }
  i9 = HEAP32[i12 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 228 >> 2] & 255](i9) | 0) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
   i13 = i10 | 0;
  } else {
   i13 = HEAP32[i10 >> 2] | 0;
  }
  i10 = HEAP32[i13 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 63](i6, i1 | 0);
  __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i10, i6, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE) | 0;
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i6 + 468 | 0;
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i10 >> 2] | 0) + 32 | 0) | 0) == (i1 | 0)) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((i1 | 0) == 0) {
   _memset(i5 | 0, 0, 12) | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 255](i7) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i5, i7);
    break;
   }
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i7;
   i13 = i1 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i5, i3, 1);
   i13 = HEAP32[i6 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i6 = i13 + 8 | 0;
   i13 = i6 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i4, i5, 1, 0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i1 = i5 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if (__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(HEAP32[i10 >> 2] | 0, i4) | 0) {
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i10 >> 2] | 0, i4, 6, 0, 0);
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(HEAP32[i10 >> 2] | 0, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, 1);
 }
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i7 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] & 256 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 + 20 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i9 + 680 >> 2] | 0) == (i1 | 0)) {
  STACKTOP = i4;
  return;
 }
 do {
  if (__ZNK7WebCore8Document21haveStylesheetsLoadedEv(i9) | 0) {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0);
   i10 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 348 >> 2] & 255](i1) | 0) {
    i11 = i10;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i11 = i1;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 344 >> 2] & 255](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 i9 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i9 | 0) == 0) {
  i12 = 0;
  i13 = 18;
 } else {
  if ((i1 | 0) != 0) {
   i10 = i1 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  i10 = HEAP32[i9 + 32 >> 2] | 0;
  i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
  i14 = i5 | 0;
  HEAP32[i14 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i10, i1, i5, i3) | 0;
  i3 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i14 = i3 + 4 | 0;
    i5 = i14 | 0;
    i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i5 >> 2] = i10;
     break;
    }
    i10 = i14 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   }
  } while (0);
  if (i15) {
   i12 = i6;
   i13 = 18;
  } else {
   i16 = i6;
  }
 }
 do {
  if ((i13 | 0) == 18) {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0);
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 348 >> 2] & 255](i1) | 0)) {
    i15 = (__ZN7WebCore4Node14ensureRareDataEv(i6) | 0) + 20 | 0;
    HEAP32[i15 >> 2] = HEAP32[i15 >> 2] | 2;
    i16 = i12;
    break;
   }
   if ((HEAP32[i7 >> 2] & 2048 | 0) != 0) {
    i15 = (__ZNK7WebCore4Node8rareDataEv(i6) | 0) + 20 | 0;
    HEAP32[i15 >> 2] = HEAP32[i15 >> 2] & -3;
   }
   i15 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i15 + 680 >> 2] | 0) == (i1 | 0)) {
    __ZN7WebCore8Document27cancelFocusAppearanceUpdateEv(i15);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 396 >> 2] & 63](i1, i2);
   i16 = i12;
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i16 + 8 | 0;
 i16 = i12 | 0;
 i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 3;
 } else {
  if ((HEAP32[i9 + 4 >> 2] & 1 | 0) == 0) {
   i10 = 3;
  } else {
   i11 = i9;
  }
 }
 if ((i10 | 0) == 3) {
  __ZN7WebCore7Element23createUniqueElementDataEv(i1);
  i11 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i11 + 32 | 0;
 i10 = i8;
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i11 + 24 | 0;
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i2 << 3) >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i6 | 0;
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i2 << 3) + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = (i3 | 0) != 0;
 do {
  if (!i13) {
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i1, i5, i6, __ZN3WTF8nullAtomE);
  }
 } while (0);
 __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i7, i1, i5);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE(i1, i7, (HEAP32[i9 >> 2] | 0) + (i2 << 3) + 4 | 0);
   i6 = i7 + 8 | 0;
   i3 = i6 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 i6 = i7 + (i2 << 3) | 0;
 i11 = HEAP32[i7 + (i2 << 3) + 4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i3 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
 __ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_(i7 + (i2 + 1 << 3) | 0, (HEAP32[i9 >> 2] | 0) + (HEAP32[i10 >> 2] << 3) | 0, i6);
 HEAP32[i8 >> 2] = (HEAP32[i10 >> 2] | 0) - 1;
 if (!i13) {
  __ZN7WebCore7Element18didRemoveAttributeERKNS_13QualifiedNameE(i1, i5);
 }
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i4;
  return;
 }
 i12 = i1 | 0;
 i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i13;
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element26ensureCachedHTMLCollectionENS_14CollectionTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZN7WebCore7Element20cachedHTMLCollectionENS_14CollectionTypeE(i2, i3) | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i1 >> 2] = i8;
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 if ((i3 | 0) == 15) {
  i9 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i10 = __ZN3WTF10fastMallocEj(88) | 0;
    i11 = i10;
    _memset(i10 | 0, 0, 88) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i11;
    if ((i10 | 0) == 0) {
     i12 = i11;
     break;
    }
    __ZN7WebCore17NodeListsNodeDataD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    i12 = HEAP32[i9 >> 2] | 0;
   } else {
    i12 = i8;
   }
  } while (0);
  __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_21HTMLOptionsCollectionENS_17HTMLSelectElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i6, i12, i2, 15);
  i12 = i6 | 0;
  i6 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == 13) {
  i6 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
  i12 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    i8 = __ZN3WTF10fastMallocEj(88) | 0;
    i9 = i8;
    _memset(i8 | 0, 0, 88) | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i9;
    if ((i8 | 0) == 0) {
     i13 = i9;
     break;
    }
    __ZN7WebCore17NodeListsNodeDataD2Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    i13 = HEAP32[i6 >> 2] | 0;
   } else {
    i13 = i12;
   }
  } while (0);
  __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_23HTMLTableRowsCollectionENS_16HTMLTableElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i5, i13, i2, 13);
  i13 = i5 | 0;
  i5 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i4;
  return;
 } else {
  i5 = (i3 | 0) == 19;
  i13 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    i6 = __ZN3WTF10fastMallocEj(88) | 0;
    i8 = i6;
    _memset(i6 | 0, 0, 88) | 0;
    i6 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i8;
    if ((i6 | 0) == 0) {
     i14 = i8;
     break;
    }
    __ZN7WebCore17NodeListsNodeDataD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    i14 = HEAP32[i13 >> 2] | 0;
   } else {
    i14 = i12;
   }
  } while (0);
  if (i5) {
   __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_26HTMLFormControlsCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i7, i14, i2, 19);
   i5 = i7 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i14, i2, i3);
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore7Element16removeShadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 56 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 20 | 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = __ZNK7WebCore8Document4pageEv(i7) | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = HEAP32[i7 + 2204 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = __ZNK7WebCore8Document4pageEv(i9) | 0;
    } else {
     i10 = i8;
    }
   } while (0);
   i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i10) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation21willPopShadowRootImplEPNS_19InstrumentingAgentsEPNS_7ElementEPNS_10ShadowRootE(i8, i1, i5);
  }
 } while (0);
 i10 = i5 | 0;
 __ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i10, 0);
 i8 = (__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 56 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i5 + 92 >> 2] = 0;
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore9TreeScope18setParentTreeScopeEPS0_(i5 + 44 | 0, (i4 | 0) == 0 ? 0 : i4 + 44 | 0);
 i4 = i1 | 0;
 HEAP32[i3 >> 2] = i4;
 i6 = i5 + 12 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 & 256 | 0) == 0) {
   if ((i8 & 2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 188 >> 2] & 63](i10, i4);
   __ZN7WebCore24ChildNodeRemovalNotifier31notifyDescendantRemovedFromTreeERNS_13ContainerNodeE(i3, i5 | 0);
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 188 >> 2] & 63](i10, i4);
   if ((HEAP32[i6 >> 2] & 2 | 0) != 0) {
    __ZN7WebCore24ChildNodeRemovalNotifier35notifyDescendantRemovedFromDocumentERNS_13ContainerNodeE(i3, i5 | 0);
   }
   i9 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i9 + 326 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i9);
  }
 } while (0);
 __ZN7WebCore18ContentDistributor22invalidateDistributionEPNS_7ElementE(i5 + 96 | 0, i1);
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore7Element20cachedHTMLCollectionENS_14CollectionTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 8 >> 2] | 0;
 i3 = i1 + 68 | 0;
 i5 = i2 & 255;
 i6 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i1 + 76 >> 2] | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  i9 = ((abort(16) | 0) >>> 7) + (i2 & 255) | 0;
  if ((i8 | 0) == 0) {
   i4 = 0;
   return i4 | 0;
  }
  i10 = (i9 >>> 23) + ~i9 | 0;
  i11 = i10 << 12 ^ i10;
  i10 = i11 >>> 7 ^ i11;
  i11 = i10 << 2 ^ i10;
  i10 = i11 >>> 20 ^ i11 | 1;
  i11 = i9;
  i9 = 0;
  L12 : while (1) {
   i12 = i11 & i7;
   i13 = i8 + (i12 * 12 & -1) | 0;
   i14 = HEAP8[i13 | 0] | 0;
   if ((i14 << 24 >> 24 | 0) == 0) {
    if ((HEAP32[i8 + (i12 * 12 & -1) + 4 >> 2] | 0) == 0) {
     i4 = 0;
     i15 = 28;
     break;
    } else {
     i15 = 8;
    }
   } else if ((i14 << 24 >> 24 | 0) != (-1 | 0)) {
    i15 = 8;
   }
   do {
    if ((i15 | 0) == 8) {
     i15 = 0;
     if (i14 << 24 >> 24 != i5 << 24 >> 24) {
      break;
     }
     if ((HEAP32[i8 + (i12 * 12 & -1) + 4 >> 2] | 0) == 0) {
      break L12;
     }
    }
   } while (0);
   i14 = (i9 | 0) == 0 ? i10 : i9;
   i11 = i14 + i12 | 0;
   i9 = i14;
  }
  if ((i15 | 0) == 28) {
   return i4 | 0;
  }
  if ((i13 | 0) == 0) {
   i4 = 0;
   return i4 | 0;
  }
  i4 = HEAP32[i8 + (i12 * 12 & -1) + 8 >> 2] | 0;
  return i4 | 0;
 }
 i12 = i6 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i8 + 2;
 i13 = HEAP32[i1 + 76 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = ((HEAP32[i6 + 16 >> 2] | 0) >>> 7) + (i2 & 255) | 0;
 L28 : do {
  if ((i1 | 0) == 0) {
   i16 = 0;
  } else {
   i2 = (i3 >>> 23) + ~i3 | 0;
   i9 = i2 << 12 ^ i2;
   i2 = i9 >>> 7 ^ i9;
   i9 = i2 << 2 ^ i2;
   i2 = i9 >>> 20 ^ i9 | 1;
   i9 = i3;
   i11 = 0;
   L30 : while (1) {
    i17 = i9 & i13;
    i18 = i1 + (i17 * 12 & -1) | 0;
    i10 = HEAP8[i18 | 0] | 0;
    if ((i10 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i1 + (i17 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i16 = 0;
      break L28;
     } else {
      i15 = 17;
     }
    } else if ((i10 << 24 >> 24 | 0) != (-1 | 0)) {
     i15 = 17;
    }
    do {
     if ((i15 | 0) == 17) {
      i15 = 0;
      if (i10 << 24 >> 24 != i5 << 24 >> 24) {
       break;
      }
      if ((HEAP32[i1 + (i17 * 12 & -1) + 4 >> 2] | 0) == (i6 | 0)) {
       break L30;
      }
     }
    } while (0);
    i10 = (i11 | 0) == 0 ? i2 : i11;
    i9 = i10 + i17 | 0;
    i11 = i10;
   }
   if ((i18 | 0) == 0) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i1 + (i17 * 12 & -1) + 8 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i4 = i16;
  return i4 | 0;
 } else {
  HEAP32[i12 >> 2] = i8;
  i4 = i16;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 + 20 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i4 | 0) == 0)) {
   i5 = __ZNK7WebCore8Document4pageEv(i4) | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = HEAP32[i4 + 2204 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i7 = 0;
      break;
     }
     i7 = __ZNK7WebCore8Document4pageEv(i6) | 0;
    } else {
     i7 = i5;
    }
   } while (0);
   i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation20didInsertDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i5, i2);
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 i3 = i7 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
   if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
    break;
   }
   i6 = i2;
   do {
    if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 180 >> 2] & 31](i2, i5) | 0) == 1) {
     i8 = i1 + 4 | 0;
     i9 = i1 + 12 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
      __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i10 + 1 | 0);
      HEAP32[(HEAP32[i8 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i2;
      HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     } else {
      HEAP32[(HEAP32[i8 >> 2] | 0) + (i10 << 2) >> 2] = i2;
      HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     }
    }
   } while (0);
   __ZN7WebCore26ChildNodeInsertionNotifier32notifyDescendantInsertedIntoTreeERNS_13ContainerNodeE(i1, i6);
  } else {
   __ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE(i1, i2);
  }
 } while (0);
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i5 = i1 + 4 | 0;
  i1 = 0;
  while (1) {
   i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 63](i9, HEAP32[i4 >> 2] | 0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i3 = i2 + 8 | 0;
 i2 = i3 - 8 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i4 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i7 + 8 | 0;
 i7 = i2 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E8reinsertEOSD_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 i11 = i19 + 4 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i25 = i1;
  i26 = i19 | 0;
  HEAP32[i26 >> 2] = i25;
  i27 = i2 + 4 | 0;
  i28 = HEAP32[i27 >> 2] | 0;
  HEAP32[i27 >> 2] = 0;
  HEAP32[i11 >> 2] = i28;
  return i19 | 0;
 }
 i1 = i10 + 8 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 i4 = i10 | 0;
 if ((i12 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i9 = i5 + (i12 << 2) | 0;
  i12 = i5;
  while (1) {
   i5 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 + 8 | 0;
     i6 = i8 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i12 = i12 + 4 | 0;
   if ((i12 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i10);
 i25 = HEAP32[i3 >> 2] | 0;
 i26 = i19 | 0;
 HEAP32[i26 >> 2] = i25;
 i27 = i2 + 4 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i11 >> 2] = i28;
 return i19 | 0;
}
function __ZN7WebCore7Element13addShadowRootEN3WTF10PassRefPtrINS_10ShadowRootEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = i1 | 0;
 i7 = __ZN7WebCore4Node14ensureRareDataEv(i6) | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i7 + 56 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i5 = i8 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i2 + 92 >> 2] = i1;
 i7 = i1 + 20 | 0;
 __ZN7WebCore9TreeScope18setParentTreeScopeEPS0_(i2 + 44 | 0, HEAP32[i7 >> 2] | 0);
 __ZN7WebCore18ContentDistributor23didShadowBoundaryChangeEPNS_7ElementE(i2 + 96 | 0, i1);
 HEAP32[i4 >> 2] = i1;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = i4 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i4, i2 | 0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = i10 + (i4 << 2) | 0;
  i4 = i10;
  while (1) {
   i10 = (HEAP32[i4 >> 2] | 0) + 8 | 0;
   i12 = i10 - 8 | 0;
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   do {
    if ((i14 | 0) < 1) {
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i11 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1);
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i6, 65536);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = __ZNK7WebCore8Document4pageEv(i6) | 0;
 do {
  if ((i7 | 0) == 0) {
   i5 = HEAP32[i6 + 2204 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = __ZNK7WebCore8Document4pageEv(i5) | 0;
  } else {
   i15 = i7;
  }
 } while (0);
 i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i15) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation21didPushShadowRootImplEPNS_19InstrumentingAgentsEPNS_7ElementEPNS_10ShadowRootE(i7, i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element18resetComputedStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 44 >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore4Node8rareDataEv(i2) | 0;
 i4 = i3;
 i5 = i3 + 44 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = i3 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -5;
 HEAP16[i4 + 18 >> 1] = 0;
 i4 = i1 + 36 | 0;
 while (1) {
  i1 = HEAP32[i4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i8 = 32;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i4 = i1 + 28 | 0;
  } else {
   i9 = i1;
   break;
  }
 }
 if ((i8 | 0) == 32) {
  return;
 }
 L18 : while (1) {
  if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) != 0) {
   i4 = __ZNK7WebCore4Node8rareDataEv(i9) | 0;
   i1 = i4;
   i6 = i4 + 44 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i3 | 0) != 0) {
     i6 = i3 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i3);
      __ZN3WTF8fastFreeEPv(i3);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i4 + 20 | 0;
   HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -5;
   HEAP16[i1 + 18 >> 1] = 0;
  }
  i3 = HEAP32[i9 + 36 >> 2] | 0;
  do {
   if ((i3 | 0) == 0) {
    if ((i9 | 0) == (i2 | 0)) {
     i8 = 28;
     break L18;
    }
    i7 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i10 = i7;
     break;
    }
    i7 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i9, i2) | 0;
    if ((i7 | 0) == 0) {
     i8 = 29;
     break L18;
    } else {
     i10 = i7;
    }
   } else {
    i10 = i3;
   }
  } while (0);
  if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
   i11 = i10;
  } else {
   i9 = i10;
   continue;
  }
  while (1) {
   if ((i11 | 0) == (i2 | 0)) {
    i8 = 30;
    break L18;
   }
   i3 = HEAP32[i11 + 28 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i2) | 0;
    if ((i1 | 0) == 0) {
     i8 = 31;
     break L18;
    } else {
     i12 = i1;
    }
   } else {
    i12 = i3;
   }
   if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
    i11 = i12;
   } else {
    i9 = i12;
    continue L18;
   }
  }
 }
 if ((i8 | 0) == 28) {
  return;
 } else if ((i8 | 0) == 29) {
  return;
 } else if ((i8 | 0) == 30) {
  return;
 } else if ((i8 | 0) == 31) {
  return;
 }
}
function __ZN7WebCore17UniqueElementData12addAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 24 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i5 + 4 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i3 = i8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 32 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) == (HEAP32[i1 + 28 >> 2] | 0)) {
   i9 = i8 + 1 | 0;
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if (i11 >>> 0 > i5 >>> 0) {
     i12 = 8;
    } else {
     if ((i11 + (i8 << 3) | 0) >>> 0 <= i5 >>> 0) {
      i12 = 8;
      break;
     }
     i13 = i9 + (i8 >>> 2) | 0;
     i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
     __ZN3WTF6VectorIN7WebCore9AttributeELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i14 >>> 0 > i9 >>> 0 ? i14 : i9);
     i14 = HEAP32[i10 >> 2] | 0;
     i15 = i14 + (i5 - i11 >> 3 << 3) | 0;
     i16 = i14;
    }
   } while (0);
   if ((i12 | 0) == 8) {
    i11 = i9 + (i8 >>> 2) | 0;
    i14 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
    __ZN3WTF6VectorIN7WebCore9AttributeELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i14 >>> 0 > i9 >>> 0 ? i14 : i9);
    i15 = i5;
    i16 = HEAP32[i10 >> 2] | 0;
   }
   i14 = HEAP32[i3 >> 2] | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   HEAP32[i16 + (i14 << 3) >> 2] = i11;
   i13 = i11 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 + (i14 << 3) + 4 >> 2] = i13;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   HEAP32[i14 + (i8 << 3) >> 2] = i13;
   i11 = i13 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i14 + (i8 << 3) + 4 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   i14 = i11 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i17 = i5 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i17);
  STACKTOP = i4;
  return;
 }
 i2 = i3 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i17 = i5 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i17);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  i17 = i5 | 0;
  __ZN7WebCore13QualifiedNameD1Ev(i17);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E8reinsertEOSD_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i13 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 8 | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    i3 = i1 | 0;
    if ((i10 | 0) != 0) {
     i6 = HEAP32[i3 >> 2] | 0;
     i2 = i6 + (i10 << 2) | 0;
     i10 = i6;
     while (1) {
      i6 = HEAP32[i10 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i4 = i6 + 8 | 0;
        i14 = i4 | 0;
        i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
        HEAP32[i14 >> 2] = i15;
        if ((i15 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
       }
      } while (0);
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i2 | 0)) {
       break;
      }
     }
     HEAP32[i11 >> 2] = 0;
    }
    i2 = HEAP32[i3 >> 2] | 0;
    if ((i2 | 0) != 0) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i2);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i13 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i13 = i2;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore7Element18dispatchWheelEventERKNS_18PlatformWheelEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 d8 = +HEAPF32[i2 + 32 >> 2];
 d9 = +HEAPF32[i2 + 36 >> 2];
 if (!(d8 != +0 | d9 != +0)) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 d11 = +HEAPF32[i2 + 44 >> 2];
 HEAPF32[i5 >> 2] = +HEAPF32[i2 + 40 >> 2];
 HEAPF32[i5 + 4 >> 2] = d11;
 HEAPF32[i6 >> 2] = d8;
 HEAPF32[i6 + 4 >> 2] = d9;
 i12 = (HEAP32[i2 + 48 >> 2] | 0) == 0 ? 2 : 0;
 i13 = i1 | 0;
 i14 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i1 = i14 + 36 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 i15 = (HEAP8[i2 + 52 | 0] & 1) != 0;
 d9 = +HEAPF64[i2 + 8 >> 3];
 i16 = __ZN3WTF10fastMallocEj(168) | 0;
 i17 = i4 | 0;
 HEAP32[i17 >> 2] = i14;
 __ZN7WebCore10WheelEventC1ERKNS_10FloatPointES3_jN3WTF10PassRefPtrINS_9DOMWindowEEERKNS_8IntPointESA_bbbbbd(i16, i5, i6, i12, i4, i2 + 24 | 0, i2 + 16 | 0, (i1 & 2 | 0) != 0, (i1 & 1 | 0) != 0, (i1 & 8 | 0) != 0, (i1 & 4 | 0) != 0, i15, d9);
 i15 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i17 = i15 + 36 | 0;
   i1 = i17 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i2 = i17 - 36 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
  }
 } while (0);
 i15 = i7 | 0;
 i2 = i16;
 HEAP32[i15 >> 2] = i2;
 i17 = (i16 | 0) == 0;
 if (!i17) {
  i1 = i16 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 if (__ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i13, i7) | 0) {
  i18 = (HEAP8[i16 + 21 | 0] & 1) == 0;
 } else {
  i18 = 0;
 }
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 8 | 0;
   i13 = i15 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i13 >> 2] = i1;
    break;
   }
   i1 = i15 - 8 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
  }
 } while (0);
 if (i17) {
  i10 = i18;
  STACKTOP = i3;
  return i10 | 0;
 }
 i17 = i16 + 8 | 0;
 i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i2);
  i10 = i18;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i17 >> 2] = i7;
  i10 = i18;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
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
function __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) == 3) {
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    break;
   }
   i5 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 64 | 0;
   i6 = 6;
  } else if ((i2 | 0) == 4) {
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    break;
   }
   i5 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 68 | 0;
   i6 = 6;
  }
 } while (0);
 do {
  if ((i6 | 0) == 6) {
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i7 | 0, 0) | 0;
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i5 = i1 | 0;
 i6 = i1 + 12 | 0;
 i7 = i1 + 32 | 0;
 if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i5) | 0;
  } else {
   if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
    i10 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i10 = HEAP32[i7 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) != 0) {
  if ((i2 | 0) == 0) {
   i8 = i10;
   STACKTOP = i3;
   return i8 | 0;
  }
  i7 = __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i10, i2) | 0;
  i8 = (i7 | 0) != 0 ? i7 : i10;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i6 >> 2] & 256 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i6 = (__ZN7WebCore4Node14ensureRareDataEv(i5) | 0) + 44 | 0;
 i5 = i6;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore8Document41styleForElementIgnoringPendingStylesheetsEPNS_7ElementE(i4, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
   i10 = HEAP32[i5 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i10 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i4;
  STACKTOP = i3;
  return i8 | 0;
 }
 i8 = __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i4, i2) | 0;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore17NodeListsNodeDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i7 = i2 + (i4 << 3) | 0;
    if ((HEAP32[i7 >> 2] | 0) != -1) {
     __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i6 = i7 | 0;
      i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i5 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i6 >> 2] = i5;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP8[i2 + (i1 * 12 & -1) | 0] | 0) != -1) {
     i4 = HEAP32[i2 + (i1 * 12 & -1) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = i4 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if (!(__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i2 | 0) | 0)) {
  HEAP32[i4 >> 2] = 5;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE(i1, i2);
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i8 = 6;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
    i8 = 6;
    break;
   }
   __ZNK3WTF12AtomicString5lowerEv(i6, i2);
  }
 } while (0);
 do {
  if ((i8 | 0) == 6) {
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i6 >> 2] = i4;
   if ((i4 | 0) == 0) {
    break;
   }
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  }
 } while (0);
 i2 = i1 + 48 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i8 = 19;
  } else {
   i4 = __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(i9, i6, 0) | 0;
   if ((i4 | 0) == -1) {
    i8 = 19;
    break;
   }
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i12 = (i11 & 1 | 0) == 0;
   if (i12) {
    i13 = i11 >>> 1 & 134217727;
   } else {
    i13 = HEAP32[i10 + 32 >> 2] | 0;
   }
   if (i13 >>> 0 <= i4 >>> 0) {
    _WTFCrash();
   }
   if (i12) {
    i14 = i10 + 20 | 0;
   } else {
    i14 = HEAP32[i10 + 24 >> 2] | 0;
   }
   i10 = HEAP32[i14 + (i4 << 3) >> 2] | 0;
   HEAP32[i7 >> 2] = i10;
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i15 = i4;
  }
 } while (0);
 if ((i8 | 0) == 19) {
  __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, __ZN3WTF8nullAtomE, i6, __ZN3WTF8nullAtomE);
  i15 = -1;
 }
 __ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i15, i7, i3, 0);
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore7Element12clientHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i5 = HEAP32[i6 + 1584 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP8[i6 + 2285 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i6 + 664 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore8Document4bodyEv(i6) | 0) == (i1 | 0)) {
    i8 = 7;
   }
  } else {
   if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
    i8 = 7;
   }
  }
 } while (0);
 if ((i8 | 0) == 7) {
  __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i5 + 116 >> 2] | 0);
  i8 = HEAP32[i3 + 4 >> 2] | 0;
  d9 = +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  d10 = d9;
  if (d9 == +1) {
   i7 = i8;
   STACKTOP = i2;
   return i7 | 0;
  }
  do {
   if (d9 > +1) {
    if ((i8 | 0) < 0) {
     i11 = i8 - 1 | 0;
     break;
    } else {
     i11 = i8 + 1 | 0;
     break;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  d9 = +(i11 | 0) / d10;
  d10 = d9 + (d9 < +0 ? +-.01 : +.01);
  if (d10 > +2147483647 | d10 < +-2147483648) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  }
  i7 = ~~d10;
  STACKTOP = i2;
  return i7 | 0;
 }
 i11 = __ZNK7WebCore4Node9renderBoxEv(i4) | 0;
 if ((i11 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i4 = __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i11) | 0;
 d10 = +HEAPF32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d9 = d10;
 if (d10 == +1) {
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if (d10 > +1) {
   if ((i4 | 0) < 0) {
    i12 = i4 - 1 | 0;
    break;
   } else {
    i12 = i4 + 1 | 0;
    break;
   }
  } else {
   i12 = i4;
  }
 } while (0);
 d10 = +(i12 | 0) / d9;
 d9 = d10 + (d10 < +0 ? +-.01 : +.01);
 if (d9 > +2147483647 | d9 < +-2147483648) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i7 = ~~d9;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore7Element11clientWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i5 = HEAP32[i6 + 1584 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP8[i6 + 2285 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i6 + 664 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore8Document4bodyEv(i6) | 0) == (i1 | 0)) {
    i8 = 7;
   }
  } else {
   if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
    i8 = 7;
   }
  }
 } while (0);
 if ((i8 | 0) == 7) {
  __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i5 + 116 >> 2] | 0);
  i8 = HEAP32[i3 >> 2] | 0;
  d9 = +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  d10 = d9;
  if (d9 == +1) {
   i7 = i8;
   STACKTOP = i2;
   return i7 | 0;
  }
  do {
   if (d9 > +1) {
    if ((i8 | 0) < 0) {
     i11 = i8 - 1 | 0;
     break;
    } else {
     i11 = i8 + 1 | 0;
     break;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  d9 = +(i11 | 0) / d10;
  d10 = d9 + (d9 < +0 ? +-.01 : +.01);
  if (d10 > +2147483647 | d10 < +-2147483648) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  }
  i7 = ~~d10;
  STACKTOP = i2;
  return i7 | 0;
 }
 i11 = __ZNK7WebCore4Node9renderBoxEv(i4) | 0;
 if ((i11 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i4 = __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i11) | 0;
 d10 = +HEAPF32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d9 = d10;
 if (d10 == +1) {
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if (d10 > +1) {
   if ((i4 | 0) < 0) {
    i12 = i4 - 1 | 0;
    break;
   } else {
    i12 = i4 + 1 | 0;
    break;
   }
  } else {
   i12 = i4;
  }
 } while (0);
 d10 = +(i12 | 0) / d9;
 d9 = d10 + (d10 < +0 ? +-.01 : +.01);
 if (d9 > +2147483647 | d9 < +-2147483648) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i7 = ~~d9;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore7Element9scrollTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
   if ((HEAP32[i6 + 664 >> 2] | 0) == 0) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i6);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i5 = HEAP32[i6 + 1584 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP8[i6 + 2285 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
  i1 = HEAP32[i5 + 116 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 63](i3, i1 | 0);
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  d8 = +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  d9 = d8;
  if (d8 == +1) {
   i7 = i1;
   STACKTOP = i2;
   return i7 | 0;
  }
  do {
   if (d8 > +1) {
    if ((i1 | 0) < 0) {
     i10 = i1 - 1 | 0;
     break;
    } else {
     i10 = i1 + 1 | 0;
     break;
    }
   } else {
    i10 = i1;
   }
  } while (0);
  d8 = +(i10 | 0) / d9;
  d9 = d8 + (d8 < +0 ? +-.01 : +.01);
  if (d9 > +2147483647 | d9 < +-2147483648) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  }
  i7 = ~~d9;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = __ZNK7WebCore4Node9renderBoxEv(i4) | 0;
 if ((i10 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 832 >> 2] & 255](i10) | 0;
 d9 = +HEAPF32[(HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d8 = d9;
 if (d9 == +1) {
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if (d9 > +1) {
   if ((i4 | 0) < 0) {
    i11 = i4 - 1 | 0;
    break;
   } else {
    i11 = i4 + 1 | 0;
    break;
   }
  } else {
   i11 = i4;
  }
 } while (0);
 d9 = +(i11 | 0) / d8;
 d8 = d9 + (d9 < +0 ? +-.01 : +.01);
 if (d8 > +2147483647 | d8 < +-2147483648) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i7 = ~~d8;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore7Element10scrollLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
   if ((HEAP32[i6 + 664 >> 2] | 0) == 0) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i6);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i5 = HEAP32[i6 + 1584 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP8[i6 + 2285 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 692 >> 2] | 0) == (i1 | 0)) {
  i1 = HEAP32[i5 + 116 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 63](i3, i1 | 0);
  i1 = HEAP32[i3 >> 2] | 0;
  d8 = +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  d9 = d8;
  if (d8 == +1) {
   i7 = i1;
   STACKTOP = i2;
   return i7 | 0;
  }
  do {
   if (d8 > +1) {
    if ((i1 | 0) < 0) {
     i10 = i1 - 1 | 0;
     break;
    } else {
     i10 = i1 + 1 | 0;
     break;
    }
   } else {
    i10 = i1;
   }
  } while (0);
  d8 = +(i10 | 0) / d9;
  d9 = d8 + (d8 < +0 ? +-.01 : +.01);
  if (d9 > +2147483647 | d9 < +-2147483648) {
   i7 = 0;
   STACKTOP = i2;
   return i7 | 0;
  }
  i7 = ~~d9;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = __ZNK7WebCore4Node9renderBoxEv(i4) | 0;
 if ((i10 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 828 >> 2] & 255](i10) | 0;
 d9 = +HEAPF32[(HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d8 = d9;
 if (d9 == +1) {
  i7 = i4;
  STACKTOP = i2;
  return i7 | 0;
 }
 do {
  if (d9 > +1) {
   if ((i4 | 0) < 0) {
    i11 = i4 - 1 | 0;
    break;
   } else {
    i11 = i4 + 1 | 0;
    break;
   }
  } else {
   i11 = i4;
  }
 } while (0);
 d9 = +(i11 | 0) / d8;
 d8 = d9 + (d9 < +0 ? +-.01 : +.01);
 if (d8 > +2147483647 | d8 < +-2147483648) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i7 = ~~d8;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore7Element10setHoveredEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 12 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 1024 | 0) == 0) {
   if (i2) {
    i4 = i1 | 0;
    i5 = (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
    i6 = 6;
    break;
   } else {
    return;
   }
  } else {
   i7 = i1 + 20 | 0;
   if (!((__ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 4) | 0) ^ i2)) {
    return;
   }
   i8 = i1 | 0;
   i9 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
   if (i2) {
    i4 = i8;
    i5 = i9;
    i6 = 6;
    break;
   }
   __ZN7WebCore20UserActionElementSet10clearFlagsEPNS_7ElementEj(i9, i1, 4);
   i10 = i8;
  }
 } while (0);
 if ((i6 | 0) == 6) {
  __ZN7WebCore20UserActionElementSet8setFlagsEPNS_7ElementEj(i5, i1, 4);
  i10 = i4;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (i4 & 2048 | 0) == 0;
 i8 = i1 + 32 | 0;
 if (i5) {
  i11 = i8 | 0;
 } else {
  i11 = HEAP32[i8 >> 2] | 0;
 }
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  if (i2) {
   return;
  }
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 32768);
  return;
 }
 if (i5) {
  i12 = i8 | 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] | 0) + 52 >> 2] & 16777216 | 0) == 0) {
  if ((i4 & 268435456 | 0) == 0) {
   i13 = i4;
  } else {
   i6 = 19;
  }
 } else {
  i6 = 19;
 }
 if ((i6 | 0) == 19) {
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 32768);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i10 = (i13 & 2048 | 0) == 0;
 if (i10) {
  i14 = i8 | 0;
 } else {
  i14 = HEAP32[i8 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
  return;
 }
 if (i10) {
  i15 = i8 | 0;
 } else {
  i15 = HEAP32[i8 >> 2] | 0;
 }
 i10 = __ZNK7WebCore12RenderObject5themeEv(HEAP32[i15 >> 2] | 0) | 0;
 if ((HEAP32[i3 >> 2] & 2048 | 0) == 0) {
  i16 = i8 | 0;
 } else {
  i16 = HEAP32[i8 >> 2] | 0;
 }
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 1](i10, HEAP32[i16 >> 2] | 0, 1) | 0;
 return;
}
function __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 i8 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
  i1 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 284 >> 2] & 63](i1, i7);
 }
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 + 36 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(64) | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore10FocusEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiNS5_INS_11EventTargetEEE(i8, i1, 0, 0, i4, 0, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
 }
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 36 | 0;
   i9 = i10 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i9 >> 2] = i4;
    break;
   }
   i4 = i10 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i8;
 __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i7, i6) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 i7 = i5 - 8 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element19normalizeAttributesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i6 & 1073741824 | 0) == 0) {
  i7 = i6;
  i8 = i5;
 } else {
  __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
  i5 = HEAP32[i4 >> 2] | 0;
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  i8 = i5;
 }
 if ((i7 | 0) < 0) {
  __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore7anyNameE);
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i8;
 }
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i10 = i8 >>> 1 & 134217727;
 } else {
  i10 = HEAP32[i9 + 32 >> 2] | 0;
 }
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i3 | 0;
 i7 = 0;
 i5 = i9;
 i9 = i8;
 while (1) {
  i8 = (i9 & 1 | 0) == 0;
  if (i8) {
   i11 = i9 >>> 1 & 134217727;
  } else {
   i11 = HEAP32[i5 + 32 >> 2] | 0;
  }
  if (i7 >>> 0 >= i11 >>> 0) {
   i12 = 31;
   break;
  }
  if (i8) {
   i13 = i9 >>> 1 & 134217727;
  } else {
   i13 = HEAP32[i5 + 32 >> 2] | 0;
  }
  if (i13 >>> 0 <= i7 >>> 0) {
   i12 = 20;
   break;
  }
  if (i8) {
   i14 = i5 + 20 | 0;
  } else {
   i14 = HEAP32[i5 + 24 >> 2] | 0;
  }
  __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i3, i1, i14 + (i7 << 3) | 0);
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    __ZN7WebCore4Node9normalizeEv(i8 | 0);
    i6 = i8 + 8 | 0;
    i15 = i6 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  i8 = HEAP32[i4 >> 2] | 0;
  i7 = i7 + 1 | 0;
  i5 = i8;
  i9 = HEAP32[i8 + 4 >> 2] | 0;
 }
 if ((i12 | 0) == 20) {
  _WTFCrash();
 } else if ((i12 | 0) == 31) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] & 524288 | 0) != 0) {
   if (HEAP8[H_BASE + 688 | 0] | 0) {
    i4 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i5 = __ZN3WTF10fastMallocEj(20) | 0;
    i6 = i5;
    _memset(i5 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i6;
    HEAP8[H_BASE + 688 | 0] = 1;
    i4 = i6;
   }
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i7 = i2;
   i8 = i7 + ~(i7 << 15) | 0;
   i7 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i7 >>> 6 ^ i7;
   i7 = i8 + ~(i8 << 11) | 0;
   i8 = i7 >>> 16 ^ i7;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i6 & i8;
   i9 = i5 + (i7 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i2 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i8 = i9 << 12 ^ i9;
    i9 = i8 >>> 7 ^ i8;
    i8 = i9 << 2 ^ i9;
    i9 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i12 = i7;
    i7 = i10;
    while (1) {
     if ((i7 | 0) == 0) {
      break L1;
     }
     i10 = (i8 | 0) == 0 ? i9 : i8;
     i13 = i10 + i12 & i6;
     i14 = i5 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i2 | 0)) {
      i11 = i14;
      break;
     } else {
      i8 = i10;
      i12 = i13;
      i7 = i15;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i12 = i7 | 0;
   i8 = HEAP32[i7 + 8 >> 2] | 0;
   i7 = i3 | 0;
   i5 = 0;
   while (1) {
    if (i5 >>> 0 >= i8 >>> 0) {
     i16 = 14;
     break;
    }
    i17 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i5 << 2) >> 2] | 0;
    if ((HEAP32[i17 + 48 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
     break;
    } else {
     i5 = i5 + 1 | 0;
    }
   }
   if ((i16 | 0) == 14) {
    HEAP32[i1 >> 2] = 0;
    return;
   }
   HEAP32[i1 >> 2] = i17;
   if ((i17 | 0) == 0) {
    return;
   }
   i5 = i17 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore7Element12hasAttributeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 48 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE(i1, i2);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i8 = 5;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
    i8 = 5;
    break;
   }
   __ZNK3WTF12AtomicString5lowerEv(i4, i2);
   i9 = 0;
   i10 = 1;
  }
 } while (0);
 do {
  if ((i8 | 0) == 5) {
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i1 | 0) == 0) {
    i9 = 1;
    i10 = 0;
    break;
   }
   i5 = i1 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   i9 = 1;
   i10 = 0;
  }
 } while (0);
 i2 = __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(i7, i4, 0) | 0;
 if ((i2 | 0) == -1) {
  i11 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  i5 = (i8 & 1 | 0) == 0;
  if (i5) {
   i12 = i8 >>> 1 & 134217727;
  } else {
   i12 = HEAP32[i7 + 32 >> 2] | 0;
  }
  if (i12 >>> 0 <= i2 >>> 0) {
   _WTFCrash();
   return 0;
  }
  if (i5) {
   i13 = i7 + 20 | 0;
  } else {
   i13 = HEAP32[i7 + 24 >> 2] | 0;
  }
  i11 = (i13 + (i2 << 3) | 0) != 0;
 }
 do {
  if (i9) {
   i2 = HEAP32[i4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i13 = i2 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i13 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (!i10) {
  i6 = i11;
  STACKTOP = i3;
  return i6 | 0;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i6 = i11;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i10 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  i6 = i11;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i4 >> 2] = i9;
  i6 = i11;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore13ContainerNode15childrenChangedERKNS0_11ChildChangeE(i1 | 0, i2);
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
   i3 = i1 | 0;
   i4 = i1 + 12 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i1 + 32 | 0;
   if ((i5 & 2048 | 0) == 0) {
    i7 = i6 | 0;
   } else {
    i7 = HEAP32[i6 >> 2] | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i3) | 0;
     i9 = i8;
     i10 = HEAP32[i4 >> 2] | 0;
    } else {
     if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
      i9 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
      i10 = i5;
      break;
     } else {
      i9 = HEAP32[i6 + 36 >> 2] | 0;
      i10 = i5;
      break;
     }
    }
   } while (0);
   i5 = (i10 & 2048 | 0) == 0;
   do {
    if ((i9 | 0) == 0) {
     if (i5) {
      i11 = i4;
      break L1;
     }
     if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 20 >> 2] & 4 | 0) == 0) {
      i11 = i4;
      break L1;
     }
    } else {
     if (i5) {
      i11 = i4;
      break L1;
     }
     if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 20 >> 2] & 4 | 0) == 0) {
      i11 = i4;
      break L1;
     }
     if ((HEAP32[i9 + 52 >> 2] & 2097152 | 0) == 0) {
      break;
     }
     if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
      i11 = i4;
      break L1;
     }
    }
   } while (0);
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i3, 32768);
   i11 = i4;
  } else {
   __ZN7WebCoreL27checkForSiblingStyleChangesEPNS_7ElementENS_16SiblingCheckTypeES1_S1_(i1, (HEAP32[i2 >> 2] | 0) == 1 ? 1 : 2, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0);
   i11 = i1 + 12 | 0;
  }
 } while (0);
 if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i11 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 56 >> 2] | 0;
 if ((i11 | 0) == 0) {
  return;
 }
 __ZN7WebCore18ContentDistributor22invalidateDistributionEPNS_7ElementE(i11 + 96 | 0, HEAP32[i11 + 92 >> 2] | 0);
 return;
}
function __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 i8 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
  i1 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 288 >> 2] & 63](i1, i7);
 }
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 + 36 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(64) | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore10FocusEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiNS5_INS_11EventTargetEEE(i8, i1, 0, 0, i4, 0, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
 }
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 36 | 0;
   i9 = i10 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i9 >> 2] = i4;
    break;
   }
   i4 = i10 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 63](i4);
  }
 } while (0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i8;
 __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i7, i6) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 i7 = i5 - 8 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element18getAttributeNodeNSERKN3WTF12AtomicStringES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 + 48 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i6, __ZN3WTF8nullAtomE, i4, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 L5 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
     if ((i4 & 1073741824 | 0) == 0) {
      break;
     }
     __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i2);
     break L5;
    }
   } while (0);
   if ((i4 | 0) >= 0) {
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i2, i6);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i7 & 1 | 0) == 0) {
  i8 = i7 >>> 1 & 134217727;
  i9 = i3 + 20 | 0;
 } else {
  i7 = i3 + 24 | 0;
  i8 = HEAP32[i7 + 8 >> 2] | 0;
  i9 = HEAP32[i7 >> 2] | 0;
 }
 L17 : do {
  if ((i8 | 0) == 0) {
   i10 = 19;
  } else {
   i7 = HEAP32[i6 >> 2] | 0;
   i3 = i7 + 12 | 0;
   i11 = i7 + 16 | 0;
   i12 = 0;
   while (1) {
    i13 = i9 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      break;
     }
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     i12 = i14;
    } else {
     i10 = 19;
     break L17;
    }
   }
   if ((i13 | 0) == 0) {
    i10 = 19;
    break;
   }
   __ZN7WebCore7Element10ensureAttrERKNS_13QualifiedNameE(i1, i2, i13 | 0);
  }
 } while (0);
 if ((i10 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7Element4blurEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
  i5 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -3;
 }
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i6 + 8 >> 2] | 0;
 if ((HEAP32[i7 + 680 >> 2] | 0) == (i1 | 0)) {
  __ZN7WebCore8Document27cancelFocusAppearanceUpdateEv(i7);
  i8 = HEAP32[i5 >> 2] | 0;
 } else {
  i8 = i6;
 }
 if ((__ZN7WebCore9TreeScope14focusedElementEv(i8) | 0) != (i1 | 0)) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = 0;
  __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i4, 0) | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i8 = i4 + 8 | 0;
  i4 = i8 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 32 >> 2] | 0;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i5;
 i4 = i5 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i8, 0, i3, 0) | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i3 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore7Element11isFocusableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] & 256 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 344 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 & 2048 | 0) == 0) {
   i5 = i4;
  } else {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 8 | 0) == 0) {
    i5 = HEAP32[i2 >> 2] | 0;
    break;
   }
   i6 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9canvasTagE >> 2] | 0) + 12 >> 2] | 0;
   i7 = i1;
   while (1) {
    if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) == (i6 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 16 >> 2] | 0;
   }
   i6 = (HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0;
   i8 = i7 + 32 | 0;
   if (i6) {
    i9 = i8 | 0;
   } else {
    i9 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if (i6) {
    i10 = i8 | 0;
   } else {
    i10 = HEAP32[i8 >> 2] | 0;
   }
   i3 = (HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0;
   return i3 | 0;
  }
 } while (0);
 i10 = (i5 & 2048 | 0) == 0;
 i5 = i1 + 32 | 0;
 if (i10) {
  i11 = i5 | 0;
 } else {
  i11 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (i10) {
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + 36 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 + 40 | 0;
  i17 = i16;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 & 6144;
  i20 = (i19 | 0) == 0;
  return i20 | 0;
 } else {
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + 36 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 + 40 | 0;
  i17 = i16;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 & 6144;
  i20 = (i19 | 0) == 0;
  return i20 | 0;
 }
 return 0;
}
function __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i1 + 20 | 0;
 } else {
  i7 = HEAP32[i1 + 24 >> 2] | 0;
 }
 do {
  if (i3) {
   __ZNK3WTF12AtomicString5lowerEv(i5, i2);
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  }
 } while (0);
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 & 1 | 0) == 0) {
  i10 = i9 >>> 1 & 134217727;
 } else {
  i10 = HEAP32[i1 + 32 >> 2] | 0;
 }
 L14 : do {
  if ((i10 | 0) == 0) {
   i11 = i3;
   i12 = 16;
  } else {
   i9 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i8 = i3;
   i13 = 0;
   while (1) {
    i14 = HEAP32[i7 + (i13 << 3) >> 2] | 0;
    if ((HEAP32[i14 + 8 >> 2] | 0) == (i9 | 0)) {
     if ((i6 | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
      i15 = i13;
      break L14;
     } else {
      i16 = i8;
     }
    } else {
     i16 = 1;
    }
    i14 = i13 + 1 | 0;
    if (i14 >>> 0 < i10 >>> 0) {
     i8 = i16;
     i13 = i14;
    } else {
     i11 = i16;
     i12 = 16;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 16) {
   if (!i11) {
    i15 = -1;
    break;
   }
   i15 = __ZNK7WebCore11ElementData32findAttributeIndexByNameSlowCaseERKN3WTF12AtomicStringEb(i1, i2, i3) | 0;
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return i15 | 0;
 }
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return i15 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i15 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = -1;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
     if ((i8 & 1073741824 | 0) == 0) {
      i9 = 5;
      break;
     }
     __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
    } else {
     i9 = 5;
    }
   } while (0);
   do {
    if ((i9 | 0) == 5) {
     if ((i8 | 0) >= 0) {
      break;
     }
     __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, i2);
    }
   } while (0);
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = -1;
    break;
   }
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
    i6 = -1;
    break;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   i8 = i10 + 12 | 0;
   i13 = i10 + 16 | 0;
   i14 = 0;
   while (1) {
    i15 = HEAP32[i12 + (i14 << 3) >> 2] | 0;
    if ((i15 | 0) == (i10 | 0)) {
     i6 = i14;
     break L1;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
      i6 = i14;
      break L1;
     }
    }
    i15 = i14 + 1 | 0;
    if (i15 >>> 0 < i11 >>> 0) {
     i14 = i15;
    } else {
     i6 = -1;
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i6, i2, i3, 0);
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
function __ZNK7WebCore7Element14hasAttributeNSERKN3WTF12AtomicStringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 48 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF8nullAtomE, i3, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
     if ((i3 & 1073741824 | 0) == 0) {
      break;
     }
     __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
     break L4;
    }
   } while (0);
   if ((i3 | 0) >= 0) {
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, i5);
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 & 1 | 0) == 0) {
  i8 = i6 >>> 1 & 134217727;
  i9 = i1 + 20 | 0;
 } else {
  i6 = i1 + 24 | 0;
  i8 = HEAP32[i6 + 8 >> 2] | 0;
  i9 = HEAP32[i6 >> 2] | 0;
 }
 L16 : do {
  if ((i8 | 0) == 0) {
   i10 = 0;
  } else {
   i6 = HEAP32[i5 >> 2] | 0;
   i1 = i6 + 12 | 0;
   i2 = i6 + 16 | 0;
   i11 = 0;
   while (1) {
    i12 = i9 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    if ((i13 | 0) == (i6 | 0)) {
     i10 = i12;
     break L16;
    }
    if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
     if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
      i10 = i12;
      break L16;
     }
    }
    i12 = i11 + 1 | 0;
    if (i12 >>> 0 < i8 >>> 0) {
     i11 = i12;
    } else {
     i10 = 0;
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 i7 = (i10 | 0) != 0;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return __ZN3WTF8nullAtomE | 0;
 }
 i5 = i2 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
   if ((i6 & 1073741824 | 0) == 0) {
    i7 = 5;
    break;
   }
   __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
  } else {
   i7 = 5;
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   if ((i6 | 0) >= 0) {
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, i2);
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3 >>> 1 & 134217727;
  i9 = i2 + 20 | 0;
 } else {
  i3 = i2 + 24 | 0;
  i8 = HEAP32[i3 + 8 >> 2] | 0;
  i9 = HEAP32[i3 >> 2] | 0;
 }
 if ((i8 | 0) == 0) {
  return __ZN3WTF8nullAtomE | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i3 + 12 | 0;
 i2 = i3 + 16 | 0;
 i1 = 0;
 while (1) {
  i10 = i9 + (i1 << 3) | 0;
  i6 = HEAP32[i10 >> 2] | 0;
  if ((i6 | 0) == (i3 | 0)) {
   i7 = 21;
   break;
  }
  if ((HEAP32[i6 + 12 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
    i7 = 22;
    break;
   }
  }
  i6 = i1 + 1 | 0;
  if (i6 >>> 0 < i8 >>> 0) {
   i1 = i6;
  } else {
   i7 = 20;
   break;
  }
 }
 if ((i7 | 0) == 20) {
  return __ZN3WTF8nullAtomE | 0;
 } else if ((i7 | 0) == 21) {
  i11 = (i10 | 0) == 0;
  i12 = i9 + (i1 << 3) + 4 | 0;
  i13 = i11 ? __ZN3WTF8nullAtomE : i12;
  return i13 | 0;
 } else if ((i7 | 0) == 22) {
  i11 = (i10 | 0) == 0;
  i12 = i9 + (i1 << 3) + 4 | 0;
  i13 = i11 ? __ZN3WTF8nullAtomE : i12;
  return i13 | 0;
 }
 return 0;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = i4 + 4 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i5 + 4 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 | 0;
     i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i7 >> 2] = i6;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i8 = i4 + 8 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i8;
    i5 = i5 + 8 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 3 << 3) | 0;
 while (1) {
  i2 = i5 - 8 | 0;
  i3 = i4 - 8 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  i6 = i8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i5 - 8 + 4 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i4 - 8 + 4 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i8;
     break;
    }
   }
  } while (0);
  __ZN7WebCore13QualifiedNameD1Ev(i2 | 0);
  if ((i2 | 0) == (i1 | 0)) {
   break;
  } else {
   i5 = i2;
   i4 = i3;
  }
 }
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_26HTMLFormControlsCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore26HTMLFormControlsCollection6createERNS_13ContainerNodeENS_14CollectionTypeE(i9, i3 | 0, i4);
  i4 = i9 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7Element21webkitMatchesSelectorERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   i8 = i1 + 20 | 0;
   i9 = __ZN7WebCore8Document18selectorQueryCacheEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = i5 | 0;
     HEAP32[i11 >> 2] = 0;
     i12 = i11;
    } else {
     if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i10);
      i12 = i5 | 0;
      break;
     } else {
      i11 = i5 | 0;
      HEAP32[i11 >> 2] = i10;
      i13 = i10 | 0;
      HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
      i12 = i11;
      break;
     }
    }
   } while (0);
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   i11 = __ZN7WebCore18SelectorQueryCache3addERKN3WTF12AtomicStringERNS_8DocumentERi(i9, i6, HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0, i3) | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 | 0;
     i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i10 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i11 | 0) == 0) {
    i15 = 0;
    STACKTOP = i4;
    return i15 | 0;
   }
   i15 = __ZNK7WebCore16SelectorDataList7matchesERNS_7ElementE(i11 | 0, i1) | 0;
   STACKTOP = i4;
   return i15 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = 12;
 i15 = 0;
 STACKTOP = i4;
 return i15 | 0;
}
function __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 2176 >> 2] | 0;
 i8 = i1 + 48 | 0;
 do {
  if ((i7 | 0) == 0) {
   __ZN7WebCore20ShareableElementData20createWithAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i5, i2);
   i9 = i8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore11ElementData7destroyEv(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  } else {
   __ZN7WebCore24DocumentSharedObjectPool40cachedShareableElementDataWithAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i4, i7, i2);
   i11 = i8 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = i9 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11ElementData7destroyEv(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1;
 i8 = i2 | 0;
 i2 = 0;
 while (1) {
  i7 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 308 >> 2] & 3](i1, i7 + (i2 << 3) | 0, i7 + (i2 << 3) + 4 | 0, 0);
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore14HTMLCollection6createERNS_13ContainerNodeENS_14CollectionTypeE(i9, i3 | 0, i4);
  i4 = i9 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_23HTMLTableRowsCollectionENS_16HTMLTableElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore23HTMLTableRowsCollection6createERNS_16HTMLTableElementENS_14CollectionTypeE(i9, i3, i4);
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_21HTMLOptionsCollectionENS_17HTMLSelectElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 HEAP8[i7 | 0] = i4;
 i10 = i7 + 4 | 0;
 i11 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i6, i2 + 68 | 0, i7, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  __ZN7WebCore21HTMLOptionsCollection6createERNS_17HTMLSelectElementENS_14CollectionTypeE(i9, i3, i4);
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore7Element21dispatchFocusOutEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i1 = i9 + 36 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = __ZN3WTF10fastMallocEj(64) | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore10FocusEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiNS5_INS_11EventTargetEEE(i1, i2, 1, 0, i5, 0, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 63](i6);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 36 | 0;
   i9 = i10 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i10 - 36 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 63](i5);
  }
 } while (0);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i1;
 __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i8, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 i8 = i6 - 8 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Element20dispatchFocusInEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i1 = i9 + 36 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = __ZN3WTF10fastMallocEj(64) | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore10FocusEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiNS5_INS_11EventTargetEEE(i1, i2, 1, 0, i5, 0, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 63](i6);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 36 | 0;
   i9 = i10 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i10 - 36 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 63](i5);
  }
 } while (0);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i1;
 __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i8, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 i8 = i6 - 8 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Element15removeAttributeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 48 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 12 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
   i7 = 5;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
    i7 = 5;
    break;
   }
   __ZNK3WTF12AtomicString5lowerEv(i4, i2);
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i4 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  }
 } while (0);
 i2 = __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(HEAP32[i5 >> 2] | 0, i4, 0) | 0;
 do {
  if ((i2 | 0) == -1) {
   i7 = i4 | 0;
   if ((HEAP32[i7 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0) + 12 >> 2] | 0)) {
    i10 = i7;
    break;
   }
   if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1073741824 | 0) == 0) {
    i10 = i7;
    break;
   }
   if ((HEAP32[i6 >> 2] & 8 | 0) == 0) {
    i10 = i7;
    break;
   }
   __ZN7WebCore13StyledElement30removeAllInlineStylePropertiesEv(i1);
   i10 = i7;
  } else {
   __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i2, 0);
   i10 = i4 | 0;
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i4 | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 4;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = HEAP32[i6 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   i9 = i10 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i6 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i2 + 4 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i8 = i10 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore7Element19removeAttributeNodeEPNS_4AttrERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 17;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 if ((HEAP32[i3 + 44 >> 2] | 0) != (i2 | 0)) {
  HEAP32[i4 >> 2] = 8;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i5 = i3 + 48 | 0;
 i6 = i2 + 48 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L9 : do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
     if ((i8 & 1073741824 | 0) == 0) {
      break;
     }
     __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i2);
     break L9;
    }
   } while (0);
   if ((i8 | 0) >= 0) {
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i2, i5);
  }
 } while (0);
 i5 = __ZNK7WebCore11ElementData40findAttributeIndexByNameForAttributeNodeEPKNS_4AttrEb(HEAP32[i6 >> 2] | 0, i3, 0) | 0;
 if ((i5 | 0) == -1) {
  HEAP32[i4 >> 2] = 8;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i7 = (i6 & 1 | 0) == 0;
 if (i7) {
  i9 = i6 >>> 1 & 134217727;
 } else {
  i9 = HEAP32[i4 + 32 >> 2] | 0;
 }
 if (i9 >>> 0 <= i5 >>> 0) {
  _WTFCrash();
 }
 if (i7) {
  i10 = i4 + 20 | 0;
 } else {
  i10 = HEAP32[i4 + 24 >> 2] | 0;
 }
 __ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE(i2, i3, i10 + (i5 << 3) + 4 | 0);
 __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i2, i5, 0);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore4Node14checkSetPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2, i3);
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 44 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i7 = 4;
  } else {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = 4;
    break;
   }
   HEAP32[i6 >> 2] = i1;
   i2 = i1 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i8 = 1;
   i9 = 0;
  }
 } while (0);
 if ((i7 | 0) == 4) {
  HEAP32[i6 >> 2] = 0;
  i8 = 0;
  i9 = 1;
 }
 i7 = i3 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, i6, i1 + 12 | 0, i1 + 16 | 0);
 i1 = i5 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i3);
 HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 do {
  if (i8) {
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i1 = i5 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (!i9) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i9 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element44clearStyleDerivedDataBeforeDetachingRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 i3 = i1 + 12 | 0;
 do {
  if (__ZNK7WebCore8Document17cssRegionsEnabledEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0) {
   if ((HEAP32[i3 >> 2] & 262144 | 0) == 0) {
    break;
   }
   i4 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadController33unregisterNamedFlowContentElementERNS_7ElementE(__ZN7WebCore10RenderView20flowThreadControllerEv(i4) | 0, i1);
  }
 } while (0);
 if ((HEAP32[i3 >> 2] & 2048 | 0) != 0) {
  i4 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -3;
 }
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i4 + 680 >> 2] | 0) == (i1 | 0)) {
  __ZN7WebCore8Document27cancelFocusAppearanceUpdateEv(i4);
 }
 __ZN7WebCore7Element24clearBeforePseudoElementEv(i1);
 __ZN7WebCore7Element23clearAfterPseudoElementEv(i1);
 if ((HEAP32[i3 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0;
 i1 = i3;
 i4 = i3 + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -9;
 i2 = i3 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP16[i1 + 18 >> 1] = 0;
 HEAP32[i4 >> 2] = i3 & -8069;
 return;
}
function __ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((HEAP32[i6 + 4 >> 2] & 1073741824 | 0) != 0) {
   i7 = (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0) + 12 | 0;
   do {
    if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
     i8 = HEAP32[i2 >> 2] | 0;
     i9 = HEAP32[i7 >> 2] | 0;
     i10 = 7;
    } else {
     i11 = HEAP32[i2 >> 2] | 0;
     i12 = HEAP32[i7 >> 2] | 0;
     if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
      i8 = i11;
      i9 = i12;
      i10 = 7;
      break;
     }
     if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i11, i12) | 0)) {
      break L4;
     }
    }
   } while (0);
   if ((i10 | 0) == 7) {
    if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(i8, i9) | 0)) {
     break;
    }
   }
   __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) >= 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i4, __ZN3WTF8nullAtomE, i2, __ZN3WTF8nullAtomE);
 __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, i4);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element12attrNodeListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 524288 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (HEAP8[H_BASE + 688 | 0] | 0) {
  i3 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i5;
  HEAP8[H_BASE + 688 | 0] = 1;
  i3 = i5;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i5 & i6;
 i7 = i4 + (i3 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L11 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i3;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i2 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L11;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element23hasEquivalentAttributesEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i5 & 1073741824 | 0) == 0) {
    i6 = i5;
   } else {
    __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
    i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
   }
   if ((i6 | 0) >= 0) {
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore7anyNameE);
  }
 } while (0);
 i1 = i2 + 48 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i4 & 1073741824 | 0) == 0) {
    i8 = i4;
    i9 = i6;
   } else {
    __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i2);
    i4 = HEAP32[i1 >> 2] | 0;
    i8 = HEAP32[i4 + 4 >> 2] | 0;
    i9 = i4;
   }
   if ((i8 | 0) >= 0) {
    i7 = i9;
    break;
   }
   __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore7anyNameE);
   i7 = HEAP32[i1 >> 2] | 0;
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == (i7 | 0)) {
  i10 = 1;
  return i10 | 0;
 }
 if ((i1 | 0) != 0) {
  i10 = __ZNK7WebCore11ElementData12isEquivalentEPKS0_(i1, i7) | 0;
  return i10 | 0;
 }
 if ((i7 | 0) == 0) {
  i10 = 1;
  return i10 | 0;
 }
 i10 = __ZNK7WebCore11ElementData12isEquivalentEPKS0_(i7, 0) | 0;
 return i10 | 0;
}
function __ZN7WebCore7Element13setScrollLeftEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i8 + 692 >> 2] | 0) == (i1 | 0)) {
   if ((HEAP32[i8 + 664 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i8);
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 i7 = HEAP32[i8 + 1584 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i8 + 2285 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 692 >> 2] | 0) == (i1 | 0)) {
  i1 = ~~+HEAPF32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  i8 = HEAP32[i7 + 116 >> 2] | 0;
  i7 = Math_imul(i1, i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 192 >> 2] & 63](i4, i8 | 0);
  i9 = Math_imul(HEAP32[i4 + 4 >> 2] | 0, i1) | 0;
  HEAP32[i5 >> 2] = i7;
  HEAP32[i5 + 4 >> 2] = i9;
  __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i8, i5);
  STACKTOP = i3;
  return;
 }
 i5 = __ZNK7WebCore4Node9renderBoxEv(i6) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 844 >> 2] & 63](i5, ~~(+(i2 | 0) * +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]));
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 4096 | 0) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
   i6 = 1;
  } else {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if ((i4 & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 255](i2) | 0) != 0) {
     i6 = 1;
     break;
    }
    i7 = HEAP32[i3 >> 2] | 0;
   } else {
    i7 = i4;
   }
   if ((i7 & 2048 | 0) == 0) {
    i8 = i7;
   } else {
    if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 64 >> 2] | 0) != 0) {
     i6 = 1;
     break;
    }
    i8 = HEAP32[i3 >> 2] | 0;
   }
   if ((i8 & 2048 | 0) == 0) {
    i9 = i8;
   } else {
    if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 68 >> 2] | 0) != 0) {
     i6 = 1;
     break;
    }
    i9 = HEAP32[i3 >> 2] | 0;
   }
   if ((i9 & 4194304 | 0) == 0) {
    i10 = i9;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 255](i2) | 0) {
     i6 = 1;
     break;
    }
    i10 = HEAP32[i3 >> 2] | 0;
   }
   if ((i10 & 2048 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 56 >> 2] | 0) != 0 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -4194305 | -i6 & 4194304;
 return;
}
function __ZN7WebCore7Element15detachAttributeEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 i9 = (i8 & 1 | 0) == 0;
 if (i9) {
  i10 = i8 >>> 1 & 134217727;
 } else {
  i10 = HEAP32[i7 + 32 >> 2] | 0;
 }
 if (i10 >>> 0 <= i3 >>> 0) {
  _WTFCrash();
 }
 if (i9) {
  i11 = i7 + 20 | 0;
 } else {
  i11 = HEAP32[i7 + 24 >> 2] | 0;
 }
 i7 = i11 + (i3 << 3) | 0;
 __ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE(i5, i2, i7);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i6, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i7, i11 + (i3 << 3) + 4 | 0);
  i7 = i6 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i12 = i6;
  __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i2, i3, 0);
  i13 = i1 | 0;
  HEAP32[i13 >> 2] = i12;
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE(i2, i5, i11 + (i3 << 3) + 4 | 0);
  i12 = i5;
  __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i2, i3, 0);
  i13 = i1 | 0;
  HEAP32[i13 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element12setScrollTopEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i8 + 692 >> 2] | 0) == (i1 | 0)) {
   if ((HEAP32[i8 + 664 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i8);
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 i7 = HEAP32[i8 + 1584 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i8 + 2285 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 692 >> 2] | 0) == (i1 | 0)) {
  i1 = ~~+HEAPF32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  i8 = HEAP32[i7 + 116 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 192 >> 2] & 63](i4, i8 | 0);
  i7 = Math_imul(i1, i2) | 0;
  HEAP32[i5 >> 2] = Math_imul(HEAP32[i4 >> 2] | 0, i1) | 0;
  HEAP32[i5 + 4 >> 2] = i7;
  __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i8, i5);
  STACKTOP = i3;
  return;
 }
 i5 = __ZNK7WebCore4Node9renderBoxEv(i6) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 848 >> 2] & 63](i5, ~~(+(i2 | 0) * +HEAPF32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]));
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element16createShadowRootERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 556 >> 2] & 255](i2) | 0) {
  __ZN7WebCore7Element25ensureUserAgentShadowRootEv(i2) | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 548 >> 2] & 255](i2) | 0)) {
  HEAP32[i3 >> 2] = 3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i7 = __Znwj(132) | 0;
 __ZN7WebCore10ShadowRootC1ERNS_8DocumentENS0_14ShadowRootTypeE(i7, i6, 1);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i7;
 __ZN7WebCore7Element13addShadowRootEN3WTF10PassRefPtrINS_10ShadowRootEEE(i2, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i3) | 0) + 56 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore7Element16dispatchKeyEventERKNS_21PlatformKeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(80) | 0;
 __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i6, i2, i5);
 i5 = i4 | 0;
 i2 = i6;
 HEAP32[i5 >> 2] = i2;
 i7 = (i6 | 0) == 0;
 if (!i7) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 if (__ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i4) | 0) {
  i9 = (HEAP8[i6 + 21 | 0] & 1) == 0;
 } else {
  i9 = 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i5 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 if (i7) {
  STACKTOP = i3;
  return i9 | 0;
 }
 i7 = i6 + 8 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i2);
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i7 >> 2] = i4;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element10offsetLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i4 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i1 | 0) | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 676 >> 2] & 63](i3, i4);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 + 36 >> 2] | 0;
 d6 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 if (d6 == +1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 i7 = i4 | 0;
 i4 = i3;
 d8 = d6;
 while (1) {
  i3 = HEAP32[i7 + 8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   d9 = +1;
   break;
  }
  i10 = HEAP32[i3 + 36 >> 2] | 0;
  d6 = +HEAPF32[(HEAP32[i10 + 24 >> 2] | 0) + 80 >> 2];
  if (d6 != d8) {
   i11 = 6;
   break;
  } else {
   i7 = i3;
   i4 = i10;
   d8 = d6;
  }
 }
 if ((i11 | 0) == 6) {
  d9 = +HEAPF32[(HEAP32[i4 + 8 >> 2] | 0) + 40 >> 2];
 }
 if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 768) {
  d12 = +HEAPF32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 8 >> 2] | 0) + 40 >> 2];
 } else {
  d12 = d9;
 }
 if (d12 == +1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d12 > +1) + i1 | 0) / d12);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore7Element9offsetTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i4 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i1 | 0) | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 680 >> 2] & 63](i3, i4);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 + 36 >> 2] | 0;
 d6 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 if (d6 == +1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 i7 = i4 | 0;
 i4 = i3;
 d8 = d6;
 while (1) {
  i3 = HEAP32[i7 + 8 >> 2] | 0;
  if ((i3 | 0) == 0) {
   d9 = +1;
   break;
  }
  i10 = HEAP32[i3 + 36 >> 2] | 0;
  d6 = +HEAPF32[(HEAP32[i10 + 24 >> 2] | 0) + 80 >> 2];
  if (d6 != d8) {
   i11 = 6;
   break;
  } else {
   i7 = i3;
   i4 = i10;
   d8 = d6;
  }
 }
 if ((i11 | 0) == 6) {
  d9 = +HEAPF32[(HEAP32[i4 + 8 >> 2] | 0) + 40 >> 2];
 }
 if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 768) {
  d12 = +HEAPF32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 8 >> 2] | 0) + 40 >> 2];
 } else {
  d12 = d9;
 }
 if (d12 == +1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = ~~(+((d12 > +1) + i1 | 0) / d12);
 STACKTOP = i2;
 return i5 | 0;
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
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore7ElementENS_6OwnPtrINS_6VectorINS_6RefPtrINS2_4AttrEEELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSF_ISC_EEE18KeyValuePairTraitsESE_E9translateINS_12KeyValuePairIS4_SC_EERKS4_NS_10PassOwnPtrISB_EEEEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i2 << 2) | 0;
  i2 = i5;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore7Element14getClientRectsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 i6 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i2 | 0) | 0;
 if ((i6 | 0) == 0) {
  i2 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore14ClientRectListC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 476 >> 2] & 31](i6 | 0, i4, 0);
 __ZN7WebCore8Document53adjustFloatQuadsForScrollAndAbsoluteZoomAndFrameScaleERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEERKNS_11RenderStyleE(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0, i4, HEAP32[i6 + 36 >> 2] | 0);
 i6 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore14ClientRectListC1ERKN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i6, i4);
 HEAP32[i1 >> 2] = i6;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element17removeAttributeNSERKN3WTF12AtomicStringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF8nullAtomE, i3, i2);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i3 & 1 | 0) == 0) {
    i6 = i3 >>> 1 & 134217727;
    i7 = i2 + 20 | 0;
   } else {
    i3 = i2 + 24 | 0;
    i6 = HEAP32[i3 + 8 >> 2] | 0;
    i7 = HEAP32[i3 >> 2] | 0;
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i5 >> 2] | 0;
   i8 = i3 + 12 | 0;
   i9 = i3 + 16 | 0;
   i10 = 0;
   while (1) {
    i11 = HEAP32[i7 + (i10 << 3) >> 2] | 0;
    if ((i11 | 0) == (i3 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i11 = i10 + 1 | 0;
    if (i11 >>> 0 < i6 >>> 0) {
     i10 = i11;
    } else {
     break L1;
    }
   }
   if ((i10 | 0) == -1) {
    break;
   }
   __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i10, 0);
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 do {
  if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 180 >> 2] & 31](i2, HEAP32[i1 >> 2] | 0) | 0) == 1) {
   i4 = i1 + 4 | 0;
   i5 = i1 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
    __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6 + 1 | 0);
    HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   } else {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i6 << 2) >> 2] = i2;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
  __ZN7WebCore26ChildNodeInsertionNotifier36notifyDescendantInsertedIntoDocumentERNS_13ContainerNodeE(i1, i2);
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore7Element6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
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
 HEAP32[i4 + 12 >> 2] = 8198;
 HEAP32[i4 + 16 >> 2] = 0;
 i7 = i4 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 752 | 0] | 0) == 0) {
    i8 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i8);
    HEAP32[H_BASE + 744 >> 2] = i8;
    HEAP32[H_BASE + 752 >> 2] = 1;
    HEAP32[H_BASE + 756 >> 2] = 0;
    i9 = i8;
    break;
   } else {
    i9 = HEAP32[H_BASE + 744 >> 2] | 0;
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
 HEAP32[i6 >> 2] = H_BASE + 80;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 + 44 >> 2] = i6;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i4 + 48 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore7Element25ensureUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 i5 = i1 | 0;
 do {
  if ((HEAP32[i4 >> 2] & 2048 | 0) != 0) {
   i6 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 56 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i7 = i6;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i8 = __Znwj(132) | 0;
 __ZN7WebCore10ShadowRootC1ERNS_8DocumentENS0_14ShadowRootTypeE(i8, i6, 0);
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i8;
 __ZN7WebCore7Element13addShadowRootEN3WTF10PassRefPtrINS_10ShadowRootEEE(i1, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i5) | 0) + 56 >> 2] | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 552 >> 2] & 63](i1, i10);
 i7 = i10;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore7Element20addAttributeInternalERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i1, i2, __ZN3WTF8nullAtomE, i3);
  i4 = i1 + 48 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 4;
  } else {
   if ((HEAP32[i5 + 4 >> 2] & 1 | 0) == 0) {
    i6 = 4;
   } else {
    i7 = i5;
   }
  }
  if ((i6 | 0) == 4) {
   __ZN7WebCore7Element23createUniqueElementDataEv(i1);
   i7 = HEAP32[i4 >> 2] | 0;
  }
  __ZN7WebCore17UniqueElementData12addAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, i2, i3);
  __ZN7WebCore7Element15didAddAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3);
  return;
 } else {
  i7 = i1 + 48 | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i6 = 8;
  } else {
   if ((HEAP32[i4 + 4 >> 2] & 1 | 0) == 0) {
    i6 = 8;
   } else {
    i8 = i4;
   }
  }
  if ((i6 | 0) == 8) {
   __ZN7WebCore7Element23createUniqueElementDataEv(i1);
   i8 = HEAP32[i7 >> 2] | 0;
  }
  __ZN7WebCore17UniqueElementData12addAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i8, i2, i3);
  return;
 }
}
function __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = -1;
  } else {
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i7 = i6 >>> 1 & 134217727;
    i8 = i4 + 20 | 0;
   } else {
    i6 = i4 + 24 | 0;
    i7 = HEAP32[i6 + 8 >> 2] | 0;
    i8 = HEAP32[i6 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    i5 = -1;
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   i9 = i6 + 12 | 0;
   i10 = i6 + 16 | 0;
   i11 = 0;
   while (1) {
    i12 = HEAP32[i8 + (i11 << 3) >> 2] | 0;
    if ((i12 | 0) == (i6 | 0)) {
     i5 = i11;
     break L1;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
      i5 = i11;
      break L1;
     }
    }
    i12 = i11 + 1 | 0;
    if (i12 >>> 0 < i7 >>> 0) {
     i11 = i12;
    } else {
     i5 = -1;
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE(i1, i5, i2, i3, 1);
 return;
}
function __ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 48 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return __ZN3WTF8nullAtomE | 0;
 }
 __ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE(i1, i2);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = (HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0;
 }
 i1 = __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(i4, i2, i5) | 0;
 if ((i1 | 0) == -1) {
  return __ZN3WTF8nullAtomE | 0;
 }
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = (i5 & 1 | 0) == 0;
 if (i2) {
  i6 = i5 >>> 1 & 134217727;
 } else {
  i6 = HEAP32[i4 + 32 >> 2] | 0;
 }
 if (i6 >>> 0 <= i1 >>> 0) {
  _WTFCrash();
  return 0;
 }
 if (i2) {
  i7 = i4 + 20 | 0;
  i8 = i7 + (i1 << 3) | 0;
  i9 = (i8 | 0) == 0;
  i10 = i7 + (i1 << 3) + 4 | 0;
  i11 = i9 ? __ZN3WTF8nullAtomE : i10;
  return i11 | 0;
 } else {
  i7 = HEAP32[i4 + 24 >> 2] | 0;
  i8 = i7 + (i1 << 3) | 0;
  i9 = (i8 | 0) == 0;
  i10 = i7 + (i1 << 3) + 4 | 0;
  i11 = i9 ? __ZN3WTF8nullAtomE : i10;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element22scrollIntoViewIfNeededEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = i1 + 12 | 0;
 i6 = i1 + 32 | 0;
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 63](i4, i1 | 0);
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 if (i2) {
  __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i6, i4, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE) | 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i6, i4, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE) | 0;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore7Element25webkitGetRegionFlowRangesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i3 = i2 + 20 | 0;
 if (!(__ZNK7WebCore8Document17cssRegionsEnabledEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0);
 i3 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i2 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i5 + 24 >> 2] & 32 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i5 + 100 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 + 28 >> 2] | 0) == 0) {
  return;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 100 >> 2] | 0) + 28 >> 2] | 0;
 if ((HEAP8[i4 + 160 | 0] & 1) == 0) {
  return;
 }
 __ZNK7WebCore12RenderRegion9getRangesERN3WTF6VectorINS1_6RefPtrINS_5RangeEEELj0ENS1_15CrashOnOverflowEEE(i4, i1);
 return;
}
function __ZN7WebCore7Element14scrollIntoViewEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = i1 + 12 | 0;
 i6 = i1 + 32 | 0;
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 63](i4, i1 | 0);
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 if (i2) {
  __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i6, i4, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, __ZN7WebCore15ScrollAlignment14alignTopAlwaysE) | 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i6, i4, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, __ZN7WebCore15ScrollAlignment17alignBottomAlwaysE) | 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore7Element19setBooleanAttributeERKNS_13QualifiedNameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (i3) {
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, __ZN3WTF9emptyAtomE);
  return;
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4 >>> 1 & 134217727;
  i6 = i3 + 20 | 0;
 } else {
  i4 = i3 + 24 | 0;
  i5 = HEAP32[i4 + 8 >> 2] | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 + 12 | 0;
 i3 = i4 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = HEAP32[i6 + (i7 << 3) >> 2] | 0;
  if ((i8 | 0) == (i4 | 0)) {
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    break;
   }
  }
  i8 = i7 + 1 | 0;
  if (i8 >>> 0 < i5 >>> 0) {
   i7 = i8;
  } else {
   i9 = 19;
   break;
  }
 }
 if ((i9 | 0) == 19) {
  return;
 }
 if ((i7 | 0) == -1) {
  return;
 }
 __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i7, 0);
 return;
}
function __ZN7WebCore7Element15didAddAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 3](i1, i2, i3, 0);
 i4 = i1 | 0;
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i5 | 0) == 0) {
  __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i4);
  return;
 }
 i2 = __ZNK7WebCore8Document4pageEv(i5) | 0;
 do {
  if ((i2 | 0) == 0) {
   i7 = HEAP32[i5 + 2204 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = __ZNK7WebCore8Document4pageEv(i7) | 0;
  } else {
   i8 = i2;
  }
 } while (0);
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i8) | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i4);
  return;
 }
 __ZN7WebCore24InspectorInstrumentation20didModifyDOMAttrImplEPNS_19InstrumentingAgentsEPNS_7ElementERKN3WTF12AtomicStringES8_(i2, i1, i6, i3);
 __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i4);
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
function __ZN7WebCore7Element18didRemoveAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 3](i1, i2, __ZN3WTF8nullAtomE, 0);
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i4 | 0) == 0) {
  __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i3);
  return;
 }
 i2 = __ZNK7WebCore8Document4pageEv(i4) | 0;
 do {
  if ((i2 | 0) == 0) {
   i6 = HEAP32[i4 + 2204 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = __ZNK7WebCore8Document4pageEv(i6) | 0;
  } else {
   i7 = i2;
  }
 } while (0);
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i3);
  return;
 }
 __ZN7WebCore24InspectorInstrumentation20didRemoveDOMAttrImplEPNS_19InstrumentingAgentsEPNS_7ElementERKN3WTF12AtomicStringE(i2, i1, i5);
 __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i3);
 return;
}
function __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames14spellcheckAttrE) | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i4 | 0) != (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i4, H_BASE + 64 | 0) | 0) {
    i2 = 1;
    i5 = 11;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 696 | 0) | 0) {
    i2 = 1;
    i5 = 8;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 56 | 0) | 0) {
    i2 = 0;
    i5 = 9;
    break;
   }
  }
  i1 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i3 | 0) | 0;
  if ((i1 | 0) == 0) {
   i2 = 1;
   i5 = 12;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i5 | 0) == 11) {
  return i2 | 0;
 } else if ((i5 | 0) == 8) {
  return i2 | 0;
 } else if ((i5 | 0) == 9) {
  return i2 | 0;
 } else if ((i5 | 0) == 12) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element16getAttributeNodeERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i2 + 48 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 __ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE(i2, i3);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = (HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0;
 }
 i4 = __ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb(i5, i3, i6) | 0;
 do {
  if ((i4 | 0) != -1) {
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   i3 = (i6 & 1 | 0) == 0;
   if (i3) {
    i7 = i6 >>> 1 & 134217727;
   } else {
    i7 = HEAP32[i5 + 32 >> 2] | 0;
   }
   if (i7 >>> 0 <= i4 >>> 0) {
    _WTFCrash();
   }
   if (i3) {
    i8 = i5 + 20 | 0;
   } else {
    i8 = HEAP32[i5 + 24 >> 2] | 0;
   }
   i3 = i8 + (i4 << 3) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element10ensureAttrERKNS_13QualifiedNameE(i1, i2, i3 | 0);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore7Element23createUniqueElementDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 48 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore17UniqueElementData6createEv(i3);
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  if ((i6 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i3 = i6 | 0;
  i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore11ElementData7destroyEv(i6);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i3 >> 2] = i7;
   STACKTOP = i2;
   return;
  }
 } else {
  __ZNK7WebCore11ElementData14makeUniqueCopyEv(i4, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  if ((i1 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i4 = i1 | 0;
  i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) == 0) {
   __ZN7WebCore11ElementData7destroyEv(i1);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i4 >> 2] = i5;
   STACKTOP = i2;
   return;
  }
 }
}
function __ZN7WebCore7ElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 __ZN7WebCore7Element16removeShadowRootEv(i1);
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 524288 | 0) == 0) {
  i4 = i3;
 } else {
  __ZN7WebCore7Element29detachAllAttrNodesFromElementEv(i1);
  i4 = HEAP32[i2 >> 2] | 0;
 }
 do {
  if ((i4 & 2048 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 32 | 0) == 0) {
    break;
   }
   __ZN7WebCore21SVGDocumentExtensions33removeElementFromPendingResourcesEPNS_7ElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
  }
 } while (0);
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11ElementData7destroyEv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 44 | 0);
 __ZN7WebCore13ContainerNodeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore7ElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 __ZN7WebCore7Element16removeShadowRootEv(i1);
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 524288 | 0) == 0) {
  i4 = i3;
 } else {
  __ZN7WebCore7Element29detachAllAttrNodesFromElementEv(i1);
  i4 = HEAP32[i2 >> 2] | 0;
 }
 do {
  if ((i4 & 2048 | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 32 | 0) == 0) {
    break;
   }
   __ZN7WebCore21SVGDocumentExtensions33removeElementFromPendingResourcesEPNS_7ElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
  }
 } while (0);
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11ElementData7destroyEv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 44 | 0);
 __ZN7WebCore13ContainerNodeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4 >>> 1 & 134217727;
  i6 = i3 + 20 | 0;
 } else {
  i4 = i3 + 24 | 0;
  i5 = HEAP32[i4 + 8 >> 2] | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 + 12 | 0;
 i3 = i4 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = HEAP32[i6 + (i7 << 3) >> 2] | 0;
  if ((i8 | 0) == (i4 | 0)) {
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    break;
   }
  }
  i8 = i7 + 1 | 0;
  if (i8 >>> 0 < i5 >>> 0) {
   i7 = i8;
  } else {
   i9 = 16;
   break;
  }
 }
 if ((i9 | 0) == 16) {
  return;
 }
 if ((i7 | 0) == -1) {
  return;
 }
 __ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE(i1, i7, 0);
 return;
}
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore7Element23getNonEmptyURLAttributeERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, i3) | 0);
 i3 = i5 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 3;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i7 = 3;
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i5);
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element24clearBeforePseudoElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 32 | 0;
  if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
   i5 = i4 | 0;
  } else {
   i5 = HEAP32[i4 >> 2] | 0;
  }
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i3 | 0);
  }
  HEAP32[i3 + 52 >> 2] = 0;
 }
 i3 = (__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 64 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1);
 return;
}
function __ZN7WebCore7Element23clearAfterPseudoElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 32 | 0;
  if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
   i5 = i4 | 0;
  } else {
   i5 = HEAP32[i4 >> 2] | 0;
  }
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i3 | 0);
  }
  HEAP32[i3 + 52 >> 2] = 0;
 }
 i3 = (__ZNK7WebCore4Node8rareDataEv(i2) | 0) + 68 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1);
 return;
}
function __ZN7WebCore7Element18didModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 3](i1, i2, i3, 0);
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 12 | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i4 | 0) == 0) {
  return;
 }
 i2 = __ZNK7WebCore8Document4pageEv(i4) | 0;
 do {
  if ((i2 | 0) == 0) {
   i6 = HEAP32[i4 + 2204 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = __ZNK7WebCore8Document4pageEv(i6) | 0;
  } else {
   i7 = i2;
  }
 } while (0);
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation20didModifyDOMAttrImplEPNS_19InstrumentingAgentsEPNS_7ElementERKN3WTF12AtomicStringES8_(i2, i1, i5, i3);
 return;
}
function __ZN7WebCore7Element9innerTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i6 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZNK7WebCore4Node11textContentEb(i1, i5, 1);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15rangeOfContentsERNS_4NodeE(i4, i5);
 i5 = i4 | 0;
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i1, HEAP32[i5 >> 2] | 0, 0, 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore7Element13scrollByUnitsEiNS_17ScrollGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i6 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i7 = i1 + 32 | 0;
 if (i6) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i6) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = i1;
 if (i6) {
  i10 = i7 | 0;
 } else {
  i10 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i7 >> 2] | 0) + 912 >> 2] & 1](i7, i2 >>> 31 ^ 1, i3, +(((i2 | 0) < 0 ? -i2 | 0 : i2) | 0), i5) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7Element8setFocusEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 1024 | 0) == 0) {
   if (i2) {
    i3 = i1 | 0;
    i4 = (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
    i5 = 6;
    break;
   } else {
    return;
   }
  } else {
   i6 = i1 + 20 | 0;
   if (!((__ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 8) | 0) ^ i2)) {
    return;
   }
   i7 = i1 | 0;
   i8 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0;
   if (i2) {
    i3 = i7;
    i4 = i8;
    i5 = 6;
    break;
   }
   __ZN7WebCore20UserActionElementSet10clearFlagsEPNS_7ElementEj(i8, i1, 8);
   i9 = i7;
  }
 } while (0);
 if ((i5 | 0) == 6) {
  __ZN7WebCore20UserActionElementSet8setFlagsEPNS_7ElementEj(i4, i1, 8);
  i9 = i3;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i9, 32768);
 return;
}
function __ZN7WebCore7Element9cloneNodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (i3) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 560 >> 2] & 63](i6, i2);
  i3 = i6 | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i6, i2);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 316 >> 2] & 63](i6, i2);
  __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i2 | 0, i6 | 0);
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 560 >> 2] & 63](i5, i2);
  i6 = i5 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i5, i2);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 316 >> 2] & 63](i5, i2);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element13scrollByPagesEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i1 + 32 | 0;
 if (i5) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i5) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i1;
 if (i5) {
  i9 = i6 | 0;
 } else {
  i9 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i6 >> 2] | 0) + 912 >> 2] & 1](i6, i2 >>> 31 ^ 1, 1, +(((i2 | 0) < 0 ? -i2 | 0 : i2) | 0), i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element13scrollByLinesEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i1 + 32 | 0;
 if (i5) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i5) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i1;
 if (i5) {
  i9 = i6 | 0;
 } else {
  i9 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i6 >> 2] | 0) + 912 >> 2] & 1](i6, i2 >>> 31 ^ 1, 0, +(((i2 | 0) < 0 ? -i2 | 0 : i2) | 0), i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element48clearHoverAndActiveStatusBeforeDetachingRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] & 1024 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if (__ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 4) | 0) {
  __ZN7WebCore8Document23hoveredElementDidDetachEPNS_7ElementE(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0, i1);
 }
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i2 >> 2] & 1024 | 0) != 0) {
   if (!(__ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 2) | 0)) {
    break;
   }
   __ZN7WebCore8Document29elementInActiveChainDidDetachEPNS_7ElementE(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0, i1);
  }
 } while (0);
 __ZN7WebCore20UserActionElementSet9didDetachEPNS_7ElementE((HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1);
 return;
}
function __ZN7WebCore7Element16styleForRendererEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 1048576 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 544 >> 2] & 63](i4, i2);
   i5 = i4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i4 + 320 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i4);
  i7 = HEAP32[i6 >> 2] | 0;
 } else {
  i7 = i5;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i1, i7, i2, 0, 0, 0, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1 | 0, i5, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1 | 0, i5, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1 | 0, i5, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1 | 0, i5, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 + 4 | 0;
 i4 = i6 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i6 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element13setChildIndexEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = __ZN7WebCore4Node14ensureRareDataEv(i3) | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i3) | 0;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 768 | 0) == 256) {
    i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i7 = HEAP32[i5 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i8 = i2 & 65535;
  i9 = i4 + 18 | 0;
  HEAP16[i9 >> 1] = i8;
  return;
 }
 i5 = i7 + 52 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 i8 = i2 & 65535;
 i9 = i4 + 18 | 0;
 HEAP16[i9 >> 1] = i8;
 return;
}
function __ZN7WebCore7Element20bindingsOffsetParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = __ZNK7WebCore12RenderObject12offsetParentEv(i2) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 20 >> 2] & 128 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i2;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 8388608 | 0) == 0) {
  i4 = i3;
  return i4 | 0;
 }
 i1 = (HEAP32[(__ZNK7WebCore4Node20containingShadowRootEv(i2) | 0) + 88 >> 2] & 4 | 0) == 0;
 i4 = i1 ? 0 : i3;
 return i4 | 0;
}
function __ZN7WebCore7Element12offsetHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 696 >> 2] & 255](i2) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZN7WebCore7Element11offsetWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 692 >> 2] & 255](i2) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZNK7WebCore7Element13hasAttributesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i5 & 1073741824 | 0) == 0) {
  i6 = i5;
  i7 = i3;
 } else {
  __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
  i3 = HEAP32[i2 >> 2] | 0;
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  i7 = i3;
 }
 if ((i6 | 0) < 0) {
  __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore7anyNameE);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 if ((i8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i7 & 1 | 0) == 0) {
  i9 = i7 >>> 1 & 134217727;
 } else {
  i9 = HEAP32[i8 + 32 >> 2] | 0;
 }
 i4 = (i9 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore7Element10clientLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 744 >> 2] & 255](i2 | 0) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZNK7WebCore7Element12renderRegionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i3 = i1 + 32 | 0;
 if (i2) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (i2) {
  i6 = i3 | 0;
 } else {
  i6 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 24 >> 2] & 32 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i4 + 100 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i6 + 28 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (i2) {
  i7 = i3 | 0;
 } else {
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[(HEAP32[i7 >> 2] | 0) + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i3 + 28 >> 2] | 0;
 }
 i5 = i8 | 0;
 return i5 | 0;
}
function __ZN7WebCore7Element9clientTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 736 >> 2] & 255](i2 | 0) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZN7WebCore7Element12scrollHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 840 >> 2] & 255](i2) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZN7WebCore7Element11scrollWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = __ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 836 >> 2] & 255](i2) | 0;
 d4 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 d5 = d4;
 if (d4 == +1) {
  i3 = i1;
  return i3 | 0;
 }
 do {
  if (d4 > +1) {
   if ((i1 | 0) < 0) {
    i6 = i1 - 1 | 0;
    break;
   } else {
    i6 = i1 + 1 | 0;
    break;
   }
  } else {
   i6 = i1;
  }
 } while (0);
 d4 = +(i6 | 0) / d5;
 d5 = d4 + (d4 < +0 ? +-.01 : +.01);
 if (d5 > +2147483647 | d5 < +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ~~d5;
 return i3 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4AttrEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore7Element24isJavaScriptURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 376 >> 2] & 31](i1, i2) | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, i2 + 4 | 0);
 i2 = __ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i4) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i4 >> 2] = i6;
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = (i2 & 1) << 4;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 16 >> 2] | 0;
  do {
   if ((i1 | 0) == 0) {
    i4 = 5;
   } else {
    if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
     i4 = 5;
     break;
    }
    i5 = i1;
   }
  } while (0);
  if ((i4 | 0) == 5) {
   i4 = 0;
   i5 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
  }
  if ((i5 | 0) == 0) {
   break;
  }
  i1 = i5 | 0;
  i6 = (__ZN7WebCore4Node14ensureRareDataEv(i1) | 0) + 20 | 0;
  HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -17 | i3;
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1, 49152);
  i2 = i5;
 }
 return;
}
function __ZN7WebCore7Element11updateLabelERNS_9TreeScopeERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  return;
 }
 do {
  if ((i5 | 0) == 0) {
   i6 = i4;
  } else {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    i6 = i4;
    break;
   }
   __ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i2, i5, i1);
   i6 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 if ((i6 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i2, i6, i1);
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
function __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = HEAP32[i3 + 1688 >> 2] | 0;
 if ((i4 | 0) != 0 & (i4 | 0) == (i1 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 8388608 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 284 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (__ZNK7WebCore20FlowThreadController42isContentElementRegisteredWithAnyNamedFlowERKNS_7ElementE(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[i3 + 1584 >> 2] | 0) | 0, i1) | 0) ^ 1;
 return i5 | 0;
}
function __ZNK7WebCore7Element15getURLAttributeERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, i3) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i6, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
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
function __ZN7WebCore7Element14setAttributeNSERKN3WTF12AtomicStringES4_S4_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 if (!(__ZN7WebCore7Element18parseAttributeNameERNS_13QualifiedNameERKN3WTF12AtomicStringES6_Ri(i7, i2, i3, i5) | 0)) {
  __ZN7WebCore13QualifiedNameD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i7, i4);
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i1 & 32 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i1 & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 608 >> 2] & 255](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore7Element34hasFlagsSetDuringStylingOfChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 503316480 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 20 >> 2] & 128 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 20 >> 2] & 256 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 20 >> 2] & 1024 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 20 >> 2] & 2048 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore7Element22setBeforePseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i3 + 64 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1);
 return;
}
function __ZN7WebCore7Element21setAfterPseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i3 + 68 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv(i1);
 return;
}
function __ZNK7WebCore7Element24spellcheckAttributeStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames14spellcheckAttrE) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  i3 = 2;
  return i3 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i1, H_BASE + 64 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 696 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 56 | 0) | 0;
 i3 = i1 ? 1 : 2;
 return i3 | 0;
}
function __ZNK7WebCore7Element10clientRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 } else {
  i6 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
  __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i4, i5, 1);
  __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE(i1, i6, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore7Element10screenRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 } else {
  i6 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
  __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i4, i5, 1);
  __ZNK7WebCore10ScrollView16contentsToScreenERKNS_7IntRectE(i1, i6, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore7Element7datasetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 48 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  i6 = i5 | 0;
  return i6 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore12DOMStringMapC2Ev(i4);
 HEAP32[i4 >> 2] = __ZTVN7WebCore19DatasetDOMStringMapE + 8;
 HEAP32[i4 + 8 >> 2] = i1;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i5 = i4;
  i6 = i5 | 0;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i5 | 0;
 return i6 | 0;
}
function __ZN7WebCore7Element21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 8192;
 i2 = i1 + 40 | 0;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   break;
  }
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i3 + 24 | 0;
  } else {
   i4 = i3;
   break;
  }
 }
 __ZN7WebCoreL27checkForSiblingStyleChangesEPNS_7ElementENS_16SiblingCheckTypeES1_S1_(i1, 0, i4, 0);
 i4 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 320 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolver16popParentElementEPNS_7ElementE(i4, i1);
 return;
}
function __ZNK7WebCore7Element6localeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK7WebCore7Element24computeInheritedLanguageEv(i3, i1);
 i1 = __ZN7WebCore8Document15getCachedLocaleERKN3WTF12AtomicStringE(i4, i3) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return i1 | 0;
 }
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return i1 | 0;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore7Element9classListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  i5 = i4 | 0;
  return i5 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 i6 = i3;
 HEAP32[i3 >> 2] = __ZTVN7WebCore9ClassListE + 8;
 HEAP32[i3 + 4 >> 2] = i1;
 HEAP32[i3 + 8 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i3 | 0) == 0) {
  i4 = i6;
  i5 = i4 | 0;
  return i5 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 return i5 | 0;
}
function __ZN7WebCore7Element12offsetParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = __ZNK7WebCore12RenderObject12offsetParentEv(i2) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 20 >> 2] & 128 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 return i4 | 0;
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
function __ZN7WebCore7Element28setUnsignedIntegralAttributeERKNS_13QualifiedNameEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3WTF12AtomicString6numberEj(i5, i3);
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element22updateNameForTreeScopeERNS_9TreeScopeERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
 return;
}
function __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3WTF12AtomicString6numberEi(i5, i3);
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore7Element40updateFocusAppearanceAfterAttachIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i2 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 | 0;
 if ((HEAP32[i2 >> 2] & 2 | 0) == 0) {
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 348 >> 2] & 255](i1) | 0) {
   i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i3 + 680 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   __ZN7WebCore8Document25updateFocusAppearanceSoonEb(i3, 0);
  }
 } while (0);
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -3;
 return;
}
function __ZN7WebCore7Element20updateIdForTreeScopeERNS_9TreeScopeERKN3WTF12AtomicStringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i2, i5, i1);
 return;
}
function __ZNK7WebCore7Element10attributesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 60 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  return i5 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = i1;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i5 = i4;
  return i5 | 0;
 }
 i4 = i1 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 i5 = HEAP32[i3 >> 2] | 0;
 return i5 | 0;
}
function __ZN7WebCore7Element24cloneElementWithChildrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 560 >> 2] & 63](i4, i2);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i4, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 316 >> 2] & 63](i4, i2);
 __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i2 | 0, i4 | 0);
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element33unregisterNamedFlowContentElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 20 | 0;
 if (!(__ZNK7WebCore8Document17cssRegionsEnabledEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] & 262144 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore20FlowThreadController33unregisterNamedFlowContentElementERNS_7ElementE(__ZN7WebCore10RenderView20flowThreadControllerEv(i3) | 0, i1);
 return;
}
function __ZNK7WebCore7Element24synchronizeAllAttributesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 & 1073741824 | 0) == 0) {
  i5 = i4;
 } else {
  __ZNK7WebCore13StyledElement33synchronizeStyleAttributeInternalEv(i1);
  i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 }
 if ((i5 | 0) >= 0) {
  return;
 }
 __ZNK7WebCore10SVGElement31synchronizeAnimatedSVGAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore7anyNameE);
 return;
}
function __ZN7WebCore7Element25setMinimumSizeForResizingERKNS_10LayoutSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
   if ((HEAP32[i2 >> 2] | 0) != 2147483647) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 2147483647) {
    break;
   }
   return;
  }
 } while (0);
 i1 = __ZN7WebCore4Node14ensureRareDataEv(i3) | 0;
 i3 = i2;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 + 28 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore7Element17setIsInsideRegionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
   if (i2) {
    i3 = i1 | 0;
    break;
   } else {
    return;
   }
  } else {
   i4 = i1 | 0;
   if ((HEAP32[(__ZNK7WebCore4Node8rareDataEv(i4) | 0) + 20 >> 2] & 4096 | 0) != 0 ^ i2) {
    i3 = i4;
    break;
   }
   return;
  }
 } while (0);
 i1 = (__ZN7WebCore4Node14ensureRareDataEv(i3) | 0) + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -4097 | (i2 & 1) << 12;
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
function __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 560 >> 2] & 63](i4, i2);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i4, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 316 >> 2] & 63](i4, i2);
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i3 = __ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0;
 i1 = i2;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i3 + 36 | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore13RenderElement9createForERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore7Element22previousElementSiblingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 5;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i1 + 24 | 0;
  } else {
   i3 = i1;
   i4 = 6;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  i5 = i3;
  return i5 | 0;
 } else if ((i4 | 0) == 5) {
  i5 = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore7Element18nextElementSiblingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 28 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i1 + 28 | 0;
  } else {
   i3 = i1;
   i4 = 5;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  i5 = i3;
  return i5 | 0;
 } else if ((i4 | 0) == 5) {
  i5 = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore7Element17firstElementChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 36 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 5;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i1 + 28 | 0;
  } else {
   i3 = i1;
   i4 = 6;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  i5 = i3;
  return i5 | 0;
 } else if ((i4 | 0) == 5) {
  i5 = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore7Element16lastElementChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 40 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i1 + 24 | 0;
  } else {
   i3 = i1;
   i4 = 5;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  i5 = i3;
  return i5 | 0;
 } else if ((i4 | 0) == 5) {
  i5 = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore7Element14getAttributeNSERKN3WTF12AtomicStringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF8nullAtomE, i3, i2);
 i2 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, i5) | 0;
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 STACKTOP = i4;
 return i2 | 0;
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
function __ZN7WebCore7Element27cancelFocusAppearanceUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
  i2 = (__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -3;
 }
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i2 + 680 >> 2] | 0) != (i1 | 0)) {
  return;
 }
 __ZN7WebCore8Document27cancelFocusAppearanceUpdateEv(i2);
 return;
}
function __ZNK7WebCore7Element17childElementCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = 0;
  i5 = i2;
 }
 while (1) {
  i2 = ((HEAP32[i5 + 12 >> 2] | 0) >>> 2 & 1) + i4 | 0;
  i1 = HEAP32[i5 + 28 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   break;
  } else {
   i4 = i2;
   i5 = i1;
  }
 }
 return i3 | 0;
}
function __ZNK7WebCore7Element22minimumSizeForResizingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 >> 2] = 2147483647;
  HEAP32[i1 + 4 >> 2] = 2147483647;
  return;
 } else {
  i3 = (__ZNK7WebCore4Node8rareDataEv(i2 | 0) | 0) + 28 | 0;
  i2 = i1;
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i2 + 4 >> 2] = i1;
  return;
 }
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
function __ZNK7WebCore7Element22savedLayerScrollOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i3 = (__ZNK7WebCore4Node8rareDataEv(i2 | 0) | 0) + 36 | 0;
  i2 = i1;
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i2 + 4 >> 2] = i1;
  return;
 }
}
function __ZN7WebCore7Element23removeAllEventListenersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore10ShadowRoot23removeAllEventListenersEv(i2);
 return;
}
function __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15EventDispatcher22dispatchSimulatedClickEPNS_7ElementEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1, i2, i3, i4);
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
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
function __ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 348 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 364 >> 2] & 255](i1) | 0) << 16 >> 16 > -1;
 return i3 | 0;
}
function __ZN7WebCore7Element20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -8193;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 320 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i2, i1);
 return;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore7Element28setContainsFullScreenElementEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 i1 = (__ZN7WebCore4Node14ensureRareDataEv(i3) | 0) + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -17 | (i2 & 1) << 4;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i3, 49152);
 return;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore7Element31clearTabIndexExplicitlyIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i2 = __ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0;
 HEAP16[i2 + 16 >> 1] = 0;
 i1 = i2 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
 return;
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
function __ZNK7WebCore7Element25containsFullScreenElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 16 | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 switch (i2 | 0) {
 case 1:
 case 3:
 case 8:
 case 7:
 case 4:
 case 5:
  {
   i3 = 1;
   break;
  }
 default:
  {
   i3 = 0;
  }
 }
 return i3 | 0;
}
function __ZNK7WebCore7Element19hasPendingResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 32 | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element17isInCanvasSubtreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 8 | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element14isInsideRegionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 4096 | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore7Element23webkitRequestFullScreenEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document27requestFullScreenForElementEPNS_7ElementEtNS0_19FullScreenCheckTypeE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1, i2 | 2, 0);
 return;
}
function __ZNK7WebCore7Element13supportsFocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 1 | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore7Element21setTabIndexExplicitlyEs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0;
 HEAP16[i3 + 16 >> 1] = i2;
 i2 = i3 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1;
 return;
}
function __ZNK7WebCore7Element15hasNamedNodeMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 60 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element19userAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 56 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element19beforePseudoElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 64 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element18regionOversetStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 24 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element18afterPseudoElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 68 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 return __ZNK7WebCore7Element14hasAttributeNSERKN3WTF12AtomicStringES4_(i1, i3 + 16 | 0, i3 + 12 | 0) | 0;
}
function __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i1, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i2 + 44 | 0, 0);
 return;
}
function __ZN7WebCore7Element20cloneDataFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element26cloneAttributesFromElementERKS0_(i1, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] & 63](i1, i2);
 return;
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
function __ZNK7WebCore7Element10shadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 56 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore7Element12setUIActionsERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames13uiactionsAttrE, i2);
 return;
}
function __ZNK7WebCore7Element8tabIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP16[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 16 >> 1] | 0;
 return i2 | 0;
}
function __ZN7WebCore7Element23webkitRequestFullscreenEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document27requestFullScreenForElementEPNS_7ElementEtNS0_19FullScreenCheckTypeE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1, 1, 0);
 return;
}
function __ZN7WebCore7Element20setIsInCanvasSubtreeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -9 | (i2 & 1) << 3;
 return;
}
function __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames10pseudoAttrE, i2);
 return;
}
function __ZNK7WebCore7Element28getUnsignedIntegralAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK3WTF6String6toUIntEPb(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, i2) | 0, 0) | 0;
}
function __ZN7WebCore7Element7onfocusEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0) | 0;
}
function __ZN7WebCore7Element7onerrorEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0) | 0;
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
function __ZN7WebCore7Element6onloadEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 212 | 0) | 0;
}
function __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1024;
 return;
}
function __ZN7WebCore7Element6onblurEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget25getAttributeEventListenerERKN3WTF12AtomicStringE(i1 | 0, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0) | 0;
}
function __ZNK7WebCore7Element32isUserActionElementInActiveChainEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 2) | 0;
}
function __ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 return;
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
function __ZNK7WebCore7Element20getIntegralAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK3WTF6String5toIntEPb(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, i2) | 0, 0) | 0;
}
function __ZNK7WebCore7Element26isUserActionElementHoveredEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 4) | 0;
}
function __ZNK7WebCore7Element26isUserActionElementFocusedEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 8) | 0;
}
function __ZNK7WebCore7Element25isUserActionElementActiveEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20UserActionElementSet8hasFlagsEPKNS_7ElementEj((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 696 | 0, i1, 1) | 0;
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore7Element16authorShadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 56 >> 2] | 0;
 return ((HEAP32[i2 + 88 >> 2] & 4 | 0) != 0 ? i2 : 0) | 0;
}
function __ZN7WebCore7Element18setAttributeNodeNSEPNS_4AttrERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore7Element16setAttributeNodeEPNS_4AttrERi(i1, i2, i3, i4);
 return;
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function __ZN7WebCore7Element27setChildrenAffectedByActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 128;
 return;
}
function __ZN7WebCore7Element25setChildrenAffectedByDragEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 256;
 return;
}
function __ZN7WebCore7Element24clearHasPendingResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -33;
 return;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore7Element23setStyleAffectedByEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 4;
 return;
}
function __ZN7WebCore7Element22setHasPendingResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 32;
 return;
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
function __ZN7WebCore7Element21setRegionOversetStateENS_18RegionOversetStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(__ZN7WebCore4Node14ensureRareDataEv(i1 | 0) | 0) + 24 >> 2] = i2;
 return;
}
function __ZNK7WebCore7Element49rareDataChildrenAffectedByBackwardPositionalRulesEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 2048 | 0) != 0 | 0;
}
function __ZNK7WebCore7Element48rareDataChildrenAffectedByForwardPositionalRulesEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 1024 | 0) != 0 | 0;
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
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function __ZN7WebCore7Element40setChildrenAffectedByDirectAdjacentRulesEPS0_(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 134217728;
 return;
}
function __ZNK7WebCore7Element14shadowPseudoIdEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames10pseudoAttrE) | 0;
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore7Element32rareDataChildrenAffectedByActiveEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 128 | 0) != 0 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore7Element9UIActionsEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames13uiactionsAttrE) | 0;
}
function __ZNK7WebCore7Element30rareDataChildrenAffectedByDragEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 256 | 0) != 0 | 0;
}
function __ZNK7WebCore7Element14imageSourceURLEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames7srcAttrE) | 0;
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function __ZN7WebCore7Element17didAffectSelectorEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 32768);
 return;
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZNK7WebCore7Element28rareDataStyleAffectedByEmptyEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 20 >> 2] & 4 | 0) != 0 | 0;
}
function __ZNK7WebCore7Element6pseudoEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames10pseudoAttrE) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore7Element20shouldUseInputMethodEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i1 | 0, 1) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element22nodeNamePreservingCaseEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13QualifiedName8toStringEv(i1, i2 + 44 | 0);
 return;
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
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i2 + 48 >> 2] & 31 | 0) != 22 | 0;
}
function __ZN7WebCore7Element14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element16isMouseFocusableEv(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 348 >> 2] & 255](i1) | 0;
}
function __ZNK7WebCore7Element18rareDataChildIndexEv(i1) {
 i1 = i1 | 0;
 return HEAPU16[(__ZNK7WebCore4Node8rareDataEv(i1 | 0) | 0) + 18 >> 1] | 0 | 0;
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element8nodeNameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13QualifiedName8toStringEv(i1, i2 + 44 | 0);
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore7Element9outerTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9innerTextEv(i1, i2);
 return;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
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
function __ZN7WebCore7Element22customStyleForRendererEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
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
function b1(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(1);
 return 0;
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function __ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
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
function __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZNK7WebCore7Element5titleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore7ElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7ElementD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN7WebCore7Element15accessKeyActionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1) {
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
function __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
function __ZN7WebCore7Element13focusDelegateEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element19willDetachRenderersEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element19willAttachRenderersEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element18didDetachRenderersEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element18didAttachRenderersEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element8nodeTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZN7WebCore7Element5styleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore7Element14imageSourceURLEv,b0,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b0,__ZN7WebCore7Element7onerrorEv,b0,__ZN7WebCore7Element11scrollWidthEv,b0,__ZNK7WebCore4Node21isMediaControlElementEv,b0,__ZNK7WebCore4Node19isFrameOwnerElementEv,b0,__ZN7WebCore7Element10scrollLeftEv,b0,__ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv,b0,__ZNK7WebCore7Element22isSpellCheckingEnabledEv,b0,__ZNK7WebCore7Element27matchesReadWritePseudoClassEv,b0,__ZNK7WebCore7Element17isTextFormControlEv,b0,__ZN7WebCore7Element20shouldUseInputMethodEv,b0,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b0,__ZNK7WebCore7Element6prefixEv
  ,b0,__ZNK7WebCore7Element21isDisabledFormControlEv,b0,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b0,__ZNK7WebCore7Element12namespaceURIEv,b0,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b0,__ZNK7WebCore4Node22scriptExecutionContextEv,b0,__ZNK7WebCore7Element12isOutOfRangeEv,b0,__ZNK7WebCore7Element8nodeTypeEv,b0,__ZNK7WebCore4Node15isPluginElementEv,b0,ii___ZN7WebCore4Node6toNodeEv__wrapper,b0,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b0,__ZN7WebCore4Node11sheetLoadedEv,b0,__ZNK7WebCore7Element23canContainRangeEndPointEv,b0,__ZNK7WebCore4Node20isInsertionPointNodeEv,b0,__ZN7WebCore7Element6onloadEv,b0,__ZNK7WebCore7Element9isInRangeEv
  ,b0,__ZNK7WebCore7Element20isFormControlElementEv,b0,__ZN7WebCore7Element13focusDelegateEv,b0,__ZNK7WebCore7Element18isFrameElementBaseEv,b0,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b0,__ZNK7WebCore7Element21isOptionalFormControlEv,b0,__ZNK7WebCore7Element25shouldAppearIndeterminateEv,b0,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b0,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b0,__ZNK7WebCore7Element13supportsFocusEv,b0,__ZNK7WebCore4Node16nonRendererStyleEv,b0,__ZNK7WebCore7Element21isRequiredFormControlEv,b0,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b0,__ZN7WebCore7Element7onfocusEv,b0,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b0,ii___ZN7WebCore4Node14toInputElementEv__wrapper
  ,b0,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b0,__ZNK7WebCore7Element12willValidateEv,b0,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b0,__ZN7WebCore7Element5styleEv,b0,__ZN7WebCore7Element25isValidFormControlElementEv,b0,__ZNK7WebCore7Element8tabIndexEv,b0,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b0,__ZN7WebCore7Element12scrollHeightEv,b0,__ZNK7WebCore7Element16isMouseFocusableEv,b0,__ZNK7WebCore4Node14customPseudoIdEv,b0,__ZNK7WebCore7Element19isSpinButtonElementEv,b0,__ZNK7WebCore7Element14shadowPseudoIdEv,b0,__ZNK7WebCore4Node19isCharacterDataNodeEv,b0,__ZNK7WebCore7Element9localNameEv,b0,__ZNK7WebCore7Element11isFocusableEv
  ,b0,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b0,__ZN7WebCore7Element6onblurEv,b0,__ZNK7WebCore4Node15isMediaControlsEv,b0,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b0,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b0,__ZN7WebCore7Element9scrollTopEv,b0,__ZNK7WebCore4Node15isAttributeNodeEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_iiiifi = [b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b2,__ZN7WebCore7Element20buildPendingResourceEv,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZN7WebCore7Element22visibilityStateChangedEv,b2,__ZN7WebCore7Element21finishParsingChildrenEv,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,__ZN7WebCore7Element19willAttachRenderersEv,b2,__ZN7WebCore7ElementD0Ev,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,__ZN7WebCore7Element19willDetachRenderersEv,b2,__ZN7WebCore7Element20mediaVolumeDidChangeEv
  ,b2,__ZN7WebCore7Element20beginParsingChildrenEv,b2,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b2,__ZN7WebCore7Element18didAttachRenderersEv,b2,__ZN7WebCore7Element4blurEv,b2,__ZN7WebCore7ElementD2Ev,b2,__ZN7WebCore7Element18didDetachRenderersEv,b2,__ZN7WebCore7Element23removeAllEventListenersEv,b2,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b2,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE,b3,__ZNK7WebCore7Element6targetEv,b3,__ZNK7WebCore7Element8nodeNameEv,b3,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b3,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b3,__ZN7WebCore7Element12setScrollTopEi,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,__ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE,b3,__ZNK7WebCore7Element5titleEv,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,__ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE,b3,__ZNK7WebCore7Element7baseURIEv,b3,__ZN7WebCore7Element15childrenChangedERKNS_13ContainerNode11ChildChangeE,b3,__ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE
  ,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,__ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv,b3,__ZN7WebCore7Element11removedFromERNS_13ContainerNodeE,b3,__ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,__ZN7WebCore7Element13setScrollLeftEi,b3,__ZN7WebCore7Element8setFocusEb,b3,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b3,__ZN7WebCore7Element10setHoveredEb,b3,__ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,__ZN7WebCore7Element22customStyleForRendererEv,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,__ZN7WebCore7Element15accessKeyActionEb
  ,b3,__ZN7WebCore7Element21updateFocusAppearanceEb,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore7Element14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,__ZN7WebCore7Element9cloneNodeEb,b5,__ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,__ZN7WebCore7Element5focusEbNS_14FocusDirectionE,b5,__ZN7WebCore7Element9setActiveEbb,b5,__ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE,b5,__ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b7,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE,b8,__ZN7WebCore7Element13computedStyleENS_8PseudoIdE,b8,__ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE,b8,__ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE,b8,__ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,__ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE,b8,__ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE,b8,__ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE,b8,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b8,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore7Element16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_27AttributeModificationReasonE,b9];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore15ScrollAlignment17alignBottomAlwaysE": __ZN7WebCore15ScrollAlignment17alignBottomAlwaysE, "__ZN7WebCore9HTMLNames10pseudoAttrE": __ZN7WebCore9HTMLNames10pseudoAttrE, "__ZN7WebCore8XMLNames8baseAttrE": __ZN7WebCore8XMLNames8baseAttrE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZTVN7WebCore19DatasetDOMStringMapE": __ZTVN7WebCore19DatasetDOMStringMapE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE": __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore9HTMLNames7forAttrE": __ZN7WebCore9HTMLNames7forAttrE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore8Document19s_globalTreeVersionE": __ZN7WebCore8Document19s_globalTreeVersionE, "__ZN7WebCore15ScrollAlignment14alignTopAlwaysE": __ZN7WebCore15ScrollAlignment14alignTopAlwaysE, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZTVN7WebCore9ClassListE": __ZTVN7WebCore9ClassListE, "__ZN7WebCore9HTMLNames14spellcheckAttrE": __ZN7WebCore9HTMLNames14spellcheckAttrE, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE, "__ZN7WebCore9HTMLNames8langAttrE": __ZN7WebCore9HTMLNames8langAttrE, "__ZN7WebCore9HTMLNames7srcAttrE": __ZN7WebCore9HTMLNames7srcAttrE, "__ZN7WebCore9HTMLNames13uiactionsAttrE": __ZN7WebCore9HTMLNames13uiactionsAttrE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames8labelTagE": __ZN7WebCore9HTMLNames8labelTagE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EERKS3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SH_SN_SK_EEEEOT0_OT1_","__ZNK7WebCore7Element14imageSourceURLEv","__ZN7WebCore7Element13scrollByLinesEi","__ZN7WebCore7Element21updateNameForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore7Element9clientTopEv","__ZN7WebCore7Element16setAttributeNodeEPNS_4AttrERi","__ZN7WebCore7Element22setBeforePseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE","__ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_","__ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE","__ZNK7WebCore7Element24spellcheckAttributeStateEv","__ZN7WebCore7Element13computedStyleENS_8PseudoIdE","__ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore17NodeListsNodeDataD2Ev","__ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE","__ZNK7WebCore7Element9UIActionsEv","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore7Element6targetEv","__ZN7WebCore7Element23setStyleAffectedByEmptyEv","__ZN7WebCore7Element6onloadEv","__ZN7WebCore7Element16dispatchKeyEventERKNS_21PlatformKeyboardEventE","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore7Element7onerrorEv","__ZN7WebCore7Element40setChildrenAffectedByDirectAdjacentRulesEPS0_","__ZNK7WebCore7Element16authorShadowRootEv","__ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE","__ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE","__ZN7WebCore7Element18resetComputedStyleEv","__ZN7WebCore7Element15didAddAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore7Element26isUserActionElementFocusedEv","__ZNK7WebCore7Element20synchronizeAttributeERKN3WTF12AtomicStringE","__ZNK7WebCore7Element8nodeNameEv","__ZNK7WebCore7Element8nodeTypeEv","__ZN7WebCore7Element14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element27setChildrenAffectedByActiveEv","__ZNK7WebCore7Element24computeInheritedLanguageEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore7Element22previousElementSiblingEv","__ZN7WebCore7Element11scrollWidthEv","__ZNK7WebCore7Element32isUserActionElementInActiveChainEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore7Element18didDetachRenderersEv","__ZNK7WebCore7Element32rareDataChildrenAffectedByActiveEv","__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_","__ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE","__ZN7WebCore7Element10scrollLeftEv","__ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore7Element18didModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element9scrollTopEv","__ZN7WebCore7Element21finishParsingChildrenEv","__ZN7WebCore7Element33unregisterNamedFlowContentElementEv","__ZN3WTF6VectorIN7WebCore9AttributeELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore7Element14scrollIntoViewEb","__ZNK7WebCore7Element22isSpellCheckingEnabledEv","__ZNK7WebCore7Element27matchesReadWritePseudoClassEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZNK7WebCore7Element19beforePseudoElementEv","__ZNK7WebCore7Element6pseudoEv","__ZN7WebCore7Element20dispatchFocusInEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE","__ZN7WebCore7Element24clearHasPendingResourcesEv","__ZN7WebCore7Element21classAttributeChangedERKN3WTF12AtomicStringE","__ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE","__ZN7WebCore7Element16createShadowRootERi","__ZN7WebCore7Element21webkitMatchesSelectorERKN3WTF6StringERi","__ZN7WebCore17UniqueElementData12addAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element14getClientRectsEv","__ZNK7WebCore7Element17isInCanvasSubtreeEv","__ZNK7WebCore7Element17childElementCountEv","__ZN7WebCore7Element20shouldUseInputMethodEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore7Element17setIsInsideRegionEb","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore7Element4blurEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZNK7WebCore7Element14getAttributeNSERKN3WTF12AtomicStringES4_","__ZN7WebCore7Element12attrIfExistsERKNS_13QualifiedNameE","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore7Element12setScrollTopEi","__ZN7WebCore7Element40updateFocusAppearanceAfterAttachIfNeededEv","__ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore7Element29detachAllAttrNodesFromElementEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore7Element10offsetLeftEv","__ZNK7WebCore7Element30rareDataChildrenAffectedByDragEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore7Element24synchronizeAllAttributesEv","__ZN7WebCore7Element21getBoundingClientRectEv","__ZN7WebCore7Element48clearHoverAndActiveStatusBeforeDetachingRendererEv","__ZNK7WebCore7Element15getURLAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZN7WebCore7Element40resetNeedsNodeRenderingTraversalSlowPathEv","__ZN3WTF11VectorMoverILb0EN7WebCore9AttributeEE15moveOverlappingEPS2_S4_S4_","__ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore7Element10clientRectEv","__ZNK7WebCore7Element19hasPendingResourcesEv","__ZN7WebCore7Element28setContainsFullScreenElementEb","__ZN7WebCore7Element9cloneNodeEb","__ZN7WebCore7Element25setChildrenAffectedByDragEv","__ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi","__ZN7WebCore7Element13addShadowRootEN3WTF10PassRefPtrINS_10ShadowRootEEE","__ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE","__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element28setUnsignedIntegralAttributeERKNS_13QualifiedNameEj","__ZN7WebCore7Element27cloneElementWithoutChildrenEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore7Element18setAttributeNodeNSEPNS_4AttrERi","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore7Element20cloneDataFromElementERKS0_","__ZN7WebCore7Element10clientLeftEv","__ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE","__ZNK7WebCore7Element15hasNamedNodeMapEv","__ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE","__ZN7WebCore7Element16removeShadowRootEv","__ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE","__ZNK7WebCore7Element18regionOversetStateEv","__ZNK7WebCore7Element28getUnsignedIntegralAttributeERKNS_13QualifiedNameE","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore7Element19webkitRegionOversetEv","__ZNK7WebCore7Element7baseURIEv","__ZN7WebCore7Element18parseAttributeNameERNS_13QualifiedNameERKN3WTF12AtomicStringES6_Ri","__ZN7WebCore7Element15detachAttributeEj","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore7Element15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN7WebCore11RenderStyleD2Ev","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore7Element19willAttachRenderersEv","__ZNK7WebCore7Element9isInRangeEv","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZN7WebCore7Element15removeAttributeERKN3WTF12AtomicStringE","__ZN7WebCore7Element13focusDelegateEv","__ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E8reinsertEOSD_","__ZNK7WebCore7Element13supportsFocusEv","__ZN7WebCore7Element20setAttributeInternalEjRKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE","__ZNK7WebCore7Element25containsFullScreenElementEv","__ZNK7WebCore7Element18nextElementSiblingEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element6localeEv","__ZNK7WebCore7Element10screenRectEv","__ZN7WebCore7Element12setUIActionsERKN3WTF12AtomicStringE","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_21HTMLOptionsCollectionENS_17HTMLSelectElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore7Element10shadowRootEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore7Element18didAttachRenderersEv","__ZNK7WebCore7Element25shouldAppearIndeterminateEv","__ZN7WebCore7Element20bindingsOffsetParentEv","__ZN7WebCore7Element20setIsInCanvasSubtreeEb","__ZNK7WebCore7Element18afterPseudoElementEv","__ZN7WebCore7ElementD0Ev","__ZN7WebCore7Element19removeAttributeNodeEPNS_4AttrERi","__ZN7WebCore7Element12clientHeightEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv","__ZN7WebCore7Element9outerTextEv","__ZNK7WebCore7Element10attributesEv","__ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE","__ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE","__ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element13scrollByPagesEi","__ZNK7WebCore7Element18rareDataChildIndexEv","__ZNK7WebCore7Element12hasAttributeERKN3WTF12AtomicStringE","__ZN7WebCore7Element23webkitRequestFullScreenEt","__ZN7WebCore7Element11removedFromERNS_13ContainerNodeE","__ZN7WebCore7Element9innerTextEv","__ZN7WebCore7Element26cloneAttributesFromElementERKS0_","__ZNK7WebCore7Element17firstElementChildEv","__ZN7WebCore7Element18getAttributeNodeNSERKN3WTF12AtomicStringES4_","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN3WTF9HashTableIPN7WebCore7ElementENS_12KeyValuePairIS3_NS_6OwnPtrINS_6VectorINS_6RefPtrINS1_4AttrEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS_7PtrHashIS3_EENS_7HashMapIS3_SC_SH_NS_10HashTraitsIS3_EENSJ_ISC_EEE18KeyValuePairTraitsESK_E6rehashEiPSD_","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_26HTMLFormControlsCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZNK7WebCore7Element20getIntegralAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element5focusEbNS_14FocusDirectionE","__ZN7WebCore7Element25setMinimumSizeForResizingERKNS_10LayoutSizeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZNK7WebCore7Element19userAgentShadowRootEv","__ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_23HTMLTableRowsCollectionENS_16HTMLTableElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore7Element6createERKNS_13QualifiedNameERNS_8DocumentE","_memset","__ZN7WebCore7Element62setContainsFullScreenElementOnAncestorsCrossingFrameBoundariesEb","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4AttrEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore7Element12offsetHeightEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","_memcpy","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZNK7WebCore7Element34hasFlagsSetDuringStylingOfChildrenEv","__ZN7WebCore7Element7onfocusEv","__ZN7WebCore17NodeListsNodeData19addCachedCollectionINS_14HTMLCollectionENS_7ElementEEEN3WTF10PassRefPtrIT_EERT0_NS_14CollectionTypeE","__ZN7WebCore7Element11offsetWidthEv","__ZNK7WebCore7Element49rareDataChildrenAffectedByBackwardPositionalRulesEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore7Element23clearAfterPseudoElementEv","__ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_","__ZN7WebCore7Element23removeAllEventListenersEv","__ZNK7WebCore7Element23hasEquivalentAttributesEPKS0_","__ZN7WebCore7Element22scrollIntoViewIfNeededEb","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore7Element22updateNameForTreeScopeERNS_9TreeScopeERKN3WTF12AtomicStringES6_","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore7Element22customStyleForRendererEv","__ZN7WebCore7Element21setRegionOversetStateENS_18RegionOversetStateE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore7Element25isUserActionElementActiveEv","__ZN7WebCore7Element13setScrollLeftEi","__ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE","__ZNK7WebCore7Element28rareDataStyleAffectedByEmptyEv","__ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri","__ZN7WebCore7Element20cachedHTMLCollectionENS_14CollectionTypeE","__ZN7WebCore7Element12offsetParentEv","__ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore7Element25ensureUserAgentShadowRootEv","__ZN7WebCore7Element14setAttributeNSERKN3WTF12AtomicStringES4_S4_Ri","__ZNK7WebCore7Element12renderRegionEv","__ZN7WebCore7Element19willDetachRenderersEv","__ZN7WebCore7Element18didRemoveAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element7datasetEv","__ZNK7WebCore7Element22nodeNamePreservingCaseEv","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element24clearBeforePseudoElementEv","__ZN7WebCore7Element17removeAttributeNSERKN3WTF12AtomicStringES4_","__ZN7WebCore7Element12attrNodeListEv","__ZN7WebCore7Element20beginParsingChildrenEv","__ZNK7WebCore7Element14hasAttributeNSERKN3WTF12AtomicStringES4_","__ZN7WebCore7Element44clearStyleDerivedDataBeforeDetachingRendererEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE","__ZN7WebCore7Element5styleEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element13scrollByUnitsEiNS_17ScrollGranularityE","__ZN7WebCore7Element25isValidFormControlElementEv","__ZNK7WebCore7Element8tabIndexEv","__ZN7WebCore7Element8setFocusEb","__ZN7WebCore7Element20addAttributeInternalERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_30SynchronizationOfLazyAttributeE","__ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore7ElementENS_6OwnPtrINS_6VectorINS_6RefPtrINS2_4AttrEEELj0ENS_15CrashOnOverflowEEEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSF_ISC_EEE18KeyValuePairTraitsESE_E9translateINS_12KeyValuePairIS4_SC_EERKS4_NS_10PassOwnPtrISB_EEEEvRT_OT0_OT1_","__ZN7WebCore7Element12scrollHeightEv","__ZN7WebCore7Element10setHoveredEb","__ZNK7WebCore7Element26isUserActionElementHoveredEv","__ZN7WebCore7Element10ensureAttrERKNS_13QualifiedNameE","__ZN7WebCore7Element19updateIdForDocumentERNS_12HTMLDocumentERKN3WTF12AtomicStringES6_NS0_42HTMLDocumentNamedItemMapsUpdatingConditionE","__ZNK7WebCore7Element5titleEv","__ZNK7WebCore7Element16isMouseFocusableEv","__ZN7WebCore7Element22setHasPendingResourcesEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore7Element25webkitGetRegionFlowRangesEv","__ZN7WebCore7Element21setAfterPseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE","__ZN7WebCoreL28ensureAttrNodeListForElementEPNS_7ElementE","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore7Element21boundsInRootViewSpaceEv","__ZN7WebCore7Element27cancelFocusAppearanceUpdateEv","__ZN7WebCore7Element26ensureCachedHTMLCollectionENS_14CollectionTypeE","__ZN7WebCore7Element23createUniqueElementDataEv","__ZN7WebCore7Element31clearTabIndexExplicitlyIfNeededEv","__ZNK7WebCore7Element14isInsideRegionEv","__ZNK7WebCore7Element24isJavaScriptURLAttributeERKNS_9AttributeE","__ZN7WebCore7Element17didAffectSelectorEi","__ZNK7WebCore7Element14shadowPseudoIdEv","__ZN7WebCore7Element9classListEv","__ZN7WebCore7Element15accessKeyActionEb","__ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv","__ZN7WebCore7Element23webkitRequestFullscreenEv","__ZN7WebCore7Element34detachAttrNodeFromElementWithValueEPNS_4AttrERKN3WTF12AtomicStringE","__ZN7WebCore7Element24cloneElementWithChildrenEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore7Element11updateLabelERNS_9TreeScopeERKN3WTF12AtomicStringES6_","__ZN7WebCoreL27checkForSiblingStyleChangesEPNS_7ElementENS_16SiblingCheckTypeES1_S1_","__ZN7WebCore7Element21setTabIndexExplicitlyEs","__ZN7WebCore7ElementD2Ev","__ZNK7WebCore7Element16lastElementChildEv","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore7Element19setBooleanAttributeERKNS_13QualifiedNameEb","__ZNK7WebCore11ElementData24findAttributeIndexByNameERKN3WTF12AtomicStringEb","__ZN7WebCore7Element21dispatchFocusOutEventERKN3WTF12AtomicStringENS1_10PassRefPtrIS0_EE","__ZNK7WebCore7Element11isFocusableEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore7Element22minimumSizeForResizingEv","__ZN7WebCore7Element19normalizeAttributesEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN7WebCore7Element11clientWidthEv","__ZN7WebCore7Element6onblurEv","__ZN7WebCore7Element9setActiveEbb","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZNK7WebCore7Element23getNonEmptyURLAttributeERKNS_13QualifiedNameE","__ZN7WebCore7Element20updateIdForTreeScopeERNS_9TreeScopeERKN3WTF12AtomicStringES6_","__ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","_memmove","__ZN7WebCore7Element16getAttributeNodeERKN3WTF12AtomicStringE","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore7Element18dispatchWheelEventERKNS_18PlatformWheelEventE","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZN7WebCore7Element23removeAttributeInternalEjNS0_30SynchronizationOfLazyAttributeE","__ZN7WebCore7Element13setChildIndexEj","__ZNK7WebCore7Element13hasAttributesEv","__ZN7WebCore7Element16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS0_27AttributeModificationReasonE","__ZN7WebCore7Element16styleForRendererEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZN7WebCore7Element21updateFocusAppearanceEb","__ZNK7WebCore7Element22savedLayerScrollOffsetEv","__ZN7WebCore7Element9offsetTopEv","__ZNK7WebCore7Element48rareDataChildrenAffectedByForwardPositionalRulesEv","__ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

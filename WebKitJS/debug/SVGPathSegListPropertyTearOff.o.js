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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
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
  var __ZTVN7WebCore15SVGListPropertyINS_14SVGPathSegListEEE=(H_BASE+56)|0;
  var __ZTVN7WebCore29SVGPathSegListPropertyTearOffE=(H_BASE+8)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore29SVGPathSegListPropertyTearOff28processIncomingListItemValueERKN3WTF6RefPtrINS_10SVGPathSegEEEPj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = i2 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = __ZN7WebCore14SVGPathElement13dPropertyInfoEv() | 0;
  i10 = HEAP32[i9 + 12 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 >> 2];
  i10 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i5) | 0;
  if ((i10 | 0) == 0) {
   i11 = 0;
  } else {
   i11 = HEAP32[i10 + 8 >> 2] | 0;
  }
  i12 = i11 | 0;
 } else {
  i12 = 0;
 }
 i11 = i1 + 24 | 0;
 i10 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 28 >> 2];
 if ((i10 | 0) != 0) {
  i1 = i10 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 12 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 + 8 | 0;
   i1 = i10 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  i13 = 1;
  STACKTOP = i4;
  return i13 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[HEAP32[i12 >> 2] >> 2] & 3](i12) | 0)) {
  i13 = 1;
  STACKTOP = i4;
  return i13 | 0;
 }
 i2 = (HEAP32[i11 >> 2] | 0) != (i12 | 0);
 i11 = HEAP32[i6 >> 2] | 0;
 i6 = (i11 | 0) == 0;
 if (!i6) {
  i10 = i11 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i12 + 52 | 0;
 i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] | 0;
 i7 = HEAP32[i12 + 8 >> 2] | 0;
 i1 = i12 | 0;
 i12 = 0;
 while (1) {
  if (i12 >>> 0 >= i7 >>> 0) {
   i14 = -1;
   break;
  }
  if ((i11 | 0) == (HEAP32[(HEAP32[i1 >> 2] | 0) + (i12 << 2) >> 2] | 0)) {
   i14 = i12;
   break;
  } else {
   i12 = i12 + 1 | 0;
  }
 }
 do {
  if (!i6) {
   i12 = i11 + 4 | 0;
   i1 = i12 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i12 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i11 = i2 | (i3 | 0) == 0;
 do {
  if (!i11) {
   if ((i14 | 0) == (HEAP32[i3 >> 2] | 0)) {
    i13 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 i10 = i6;
 i7 = HEAP32[i6 + 16 >> 2] | 0;
 i12 = i7 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 i5 = i1 + (i14 << 2) | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 4 | 0;
   i15 = i9 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i15 >> 2] = i16;
    break;
   }
   i16 = i9 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
  }
 } while (0);
 i8 = i1 + (i14 + 1 << 2) | 0;
 i1 = i7 + 8 | 0;
 _memmove(i5 | 0, i8 | 0, (HEAP32[i12 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) - i8 | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 if (i2) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i10);
 }
 if (i11) {
  i13 = 1;
  STACKTOP = i4;
  return i13 | 0;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 if (i14 >>> 0 >= i11 >>> 0) {
  i13 = 1;
  STACKTOP = i4;
  return i13 | 0;
 }
 HEAP32[i3 >> 2] = i11 - 1;
 i13 = 1;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff11replaceItemEN3WTF10PassRefPtrINS_10SVGPathSegEEEjRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i3 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  HEAP32[i5 >> 2] = 300;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i3 = i2 | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 8 >> 2] | 0) >>> 0 > i4 >>> 0) {
   i2 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i4 << 2) >> 2] | 0;
   i11 = (i2 | 0) == 0;
   if (!i11) {
    i12 = i2 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   HEAP32[i2 + 8 >> 2] = 2;
   i12 = i2 + 12 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 + 8 | 0;
     i14 = i12 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   if (i11) {
    break;
   }
   i13 = i2 + 4 | 0;
   i12 = i13 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
  }
 } while (0);
 i10 = i7 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = i15;
 __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE17replaceItemValuesERKN3WTF6RefPtrINS_10SVGPathSegEEEjRi(i8, i3, i7, i4, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 + 4 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = i5 + 4 | 0;
   i8 = i1 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i8 >> 2] = i4;
    break;
   }
   i4 = i1 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i5 + 4 | 0;
 i5 = i10 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
 i4 = i10 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE17replaceItemValuesERKN3WTF6RefPtrINS_10SVGPathSegEEEjRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((HEAP32[i2 + 8 >> 2] | 0) == 2) {
   i8 = 7;
  } else {
   i9 = i2 + 16 | 0;
   if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i8 = 1;
    break;
   }
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2, i3, i7) | 0)) {
    i10 = HEAP32[i3 >> 2] | 0;
    HEAP32[i1 >> 2] = i10;
    if ((i10 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i11 = i10 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    STACKTOP = i6;
    return;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   i9 = HEAP32[i11 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    HEAP32[i5 >> 2] = 1;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if (i9 >>> 0 <= i10 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i9 = HEAP32[i11 >> 2] | 0;
   i11 = i3 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i13 = i12 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = i9 + (i10 << 2) | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 4 | 0;
     i13 = i12 | 0;
     i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i13 >> 2] = i9;
      break;
     }
     i9 = i12 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i9 = i10 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = i8;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff10removeItemEjRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = i2 | 0;
 do {
  if ((HEAP32[i2 + 8 >> 2] | 0) == 2) {
   i6 = 7;
   i7 = 3;
  } else {
   i8 = i2 + 16 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
    i6 = 1;
    i7 = 3;
    break;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + (i3 << 2) >> 2] | 0;
   i12 = (i11 | 0) == 0;
   if (i12) {
    i13 = i9;
    i14 = i10;
   } else {
    i10 = i11 + 4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = HEAP32[i8 >> 2] | 0;
    i13 = i10;
    i14 = HEAP32[i10 >> 2] | 0;
   }
   i10 = i13 | 0;
   i8 = i14 + (i3 << 2) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i15 = i9 + 4 | 0;
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i15 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 15](i17);
    }
   } while (0);
   i9 = i14 + (i3 + 1 << 2) | 0;
   i17 = i13 + 8 | 0;
   _memmove(i8 | 0, i9 | 0, (HEAP32[i10 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) - i9 | 0) | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i5);
   if (i12) {
    i18 = 0;
    break;
   }
   HEAP32[i11 + 8 >> 2] = 2;
   i17 = i11 + 12 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i9 | 0) == 0) {
    i18 = i11;
    break;
   }
   i17 = i9 + 8 | 0;
   i9 = i17 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    i18 = i11;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i18 = i11;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i18 = i11;
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i4 >> 2] = i6;
  i18 = 0;
 }
 HEAP32[i1 >> 2] = i18;
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
    i12 = 9;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 11) {
  return i8 | 0;
 } else if ((i12 | 0) == 9) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOffD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i4 = i2 | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i8 = i5 + (i6 << 2) | 0;
  i6 = i5;
  while (1) {
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 + 4 | 0;
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff20clearContextAndRolesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = 0;
  i5 = i1;
  i6 = i3;
 }
 while (1) {
  if (i6 >>> 0 <= i4 >>> 0) {
   i7 = 3;
   break;
  }
  i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i4 << 2) >> 2] | 0;
  i8 = (i1 | 0) == 0;
  if (!i8) {
   i9 = i1 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 8 >> 2] = 2;
  i9 = i1 + 12 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  do {
   if ((i10 | 0) != 0) {
    i9 = i10 + 8 | 0;
    i11 = i9 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  do {
   if (!i8) {
    i10 = i1 + 4 | 0;
    i9 = i10 | 0;
    i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) != 0) {
     HEAP32[i9 >> 2] = i12;
     break;
    }
    i12 = i10 - 4 | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
   }
  } while (0);
  i1 = i4 + 1 | 0;
  if (i1 >>> 0 >= i3 >>> 0) {
   i7 = 19;
   break;
  }
  i8 = HEAP32[i2 >> 2] | 0;
  i4 = i1;
  i5 = i8;
  i6 = HEAP32[i8 + 8 >> 2] | 0;
 }
 if ((i7 | 0) == 3) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff5clearERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 16 | 0;
 if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 | 0;
 __ZN7WebCore29SVGPathSegListPropertyTearOff20clearContextAndRolesEv(i1);
 if ((HEAP32[i1 + 8 >> 2] | 0) == 2) {
  HEAP32[i2 >> 2] = 7;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + 4 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i5 = i2 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i2 | 0;
   if ((i6 | 0) != 0) {
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8 + (i6 << 2) | 0;
    i6 = i8;
    while (1) {
     i8 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i10 = i8 + 4 | 0;
       i11 = i10 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) != 0) {
        HEAP32[i11 >> 2] = i12;
        break;
       }
       i12 = i10 - 4 | 0;
       if ((i12 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
      }
     } while (0);
     i6 = i6 + 4 | 0;
     if ((i6 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i4);
 return;
}
function __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 i4 = i3 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 if ((i5 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i5 << 2) | 0;
  i5 = i7;
  while (1) {
   i7 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 + 4 | 0;
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i3);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOffD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED2Ev(i1 | 0);
 return;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff7getItemEjRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
   i2 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] | 0;
   if ((i2 | 0) == 0) {
    i6 = 0;
    break;
   }
   i7 = i2 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i6 = i2;
  } else {
   HEAP32[i4 >> 2] = 1;
   i6 = 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
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
function __ZNK7WebCore29SVGPathSegListPropertyTearOff10isReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 21 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 1;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
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
function __ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeENS_16ListModificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14SVGPathSegList12commitChangeEPNS_10SVGElementENS_16ListModificationE(HEAP32[i1 + 16 >> 2] | 0, HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 8 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGPathSegList12commitChangeEPNS_10SVGElementENS_16ListModificationE(HEAP32[i1 + 16 >> 2] | 0, HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 8 >> 2] | 0, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore29SVGPathSegListPropertyTearOff30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS2_INS_10SVGPathSegEEEEEEEPj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE12commitChangeENS_16ListModificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore29SVGPathSegListPropertyTearOff14contextElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 8 >> 2] | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCore29SVGPathSegListPropertyTearOff28processIncomingListItemValueERKN3WTF6RefPtrINS_10SVGPathSegEEEPj,b0,__ZN7WebCore29SVGPathSegListPropertyTearOff30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS2_INS_10SVGPathSegEEEEEEEPj,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore29SVGPathSegListPropertyTearOffD1Ev,b1,__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED0Ev,b1,__ZN7WebCore29SVGPathSegListPropertyTearOffD0Ev,b1,__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED1Ev,b1,__ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeEv,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE12commitChangeENS_16ListModificationE,b2,__ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeENS_16ListModificationE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore29SVGPathSegListPropertyTearOff10isReadOnlyEv,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE12commitChangeENS_16ListModificationE","_memset","__ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeENS_16ListModificationE","__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED1Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED2Ev","__ZN7WebCore29SVGPathSegListPropertyTearOff5clearERi","__ZN7WebCore29SVGPathSegListPropertyTearOff28processIncomingListItemValueERKN3WTF6RefPtrINS_10SVGPathSegEEEPj","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","_memcpy","__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEED0Ev","__ZNK7WebCore29SVGPathSegListPropertyTearOff14contextElementEv","__ZN7WebCore29SVGPathSegListPropertyTearOff7getItemEjRi","__ZN7WebCore15SVGListPropertyINS_14SVGPathSegListEE17replaceItemValuesERKN3WTF6RefPtrINS_10SVGPathSegEEEjRi","__ZN7WebCore29SVGPathSegListPropertyTearOff20clearContextAndRolesEv","__ZN7WebCore29SVGPathSegListPropertyTearOff30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS2_INS_10SVGPathSegEEEEEEEPj","__ZN7WebCore29SVGPathSegListPropertyTearOffD1Ev","__ZN7WebCore29SVGPathSegListPropertyTearOffD0Ev","_memmove","__ZNK7WebCore29SVGPathSegListPropertyTearOff10isReadOnlyEv","__ZN7WebCore29SVGPathSegListPropertyTearOff11replaceItemEN3WTF10PassRefPtrINS_10SVGPathSegEEEjRi","__ZN7WebCore29SVGPathSegListPropertyTearOff10removeItemEjRi","__ZN7WebCore29SVGPathSegListPropertyTearOff12commitChangeEv"]

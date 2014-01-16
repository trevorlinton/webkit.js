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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([99,105,116,101,0,0,0,0,116,121,112,101,0,0,0,0,9,0,0,0,0,0,0,0,119,104,105,116,101,45,115,112,97,99,101,58,112,114,101,0,65,112,112,108,101,45,116,97,98,45,115,112,97,110,0,0,160,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore28isNodeVisiblyContainedWithinEPNS_4NodeEPKNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 104 | 0;
 i16 = i3 + 120 | 0;
 i17 = i3 + 136 | 0;
 i18 = i3 + 152 | 0;
 i19 = i3 + 168 | 0;
 i20 = i3 + 184 | 0;
 i21 = i3 + 200 | 0;
 i22 = i3 + 216 | 0;
 i23 = i3 + 232 | 0;
 i24 = i3 + 80 | 0;
 HEAP32[i24 >> 2] = 0;
 if ((__ZNK7WebCore5Range11compareNodeEPNS_4NodeERi(i2, i1, i24) | 0) == 3) {
  i25 = 1;
  STACKTOP = i3;
  return i25 | 0;
 }
 __ZN7WebCore25visiblePositionBeforeNodeEPNS_4NodeE(i14, i1);
 i24 = i2 + 12 | 0;
 i26 = HEAP32[i24 >> 2] | 0;
 if ((i26 | 0) > -1) {
  i27 = i26;
 } else {
  i26 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i24 >> 2] = i26;
  i27 = i26;
 }
 i26 = i2 + 8 | 0;
 i28 = HEAP32[i26 >> 2] | 0;
 if ((i28 | 0) == 0) {
  i29 = i27;
 } else {
  i27 = i28 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
  i29 = HEAP32[i24 >> 2] | 0;
 }
 i27 = i12 | 0;
 HEAP32[i27 >> 2] = i28;
 HEAP32[i13 >> 2] = i29;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i16, i12, i13);
 i13 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i27 = i13 + 8 | 0;
   i12 = i27 | 0;
   i29 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, 1);
 i13 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i14, i15) | 0;
 i27 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i15 = i27 + 8 | 0;
   i29 = i15 | 0;
   i12 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i16 = i27 + 8 | 0;
   i15 = i16 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i14 = i27 + 8 | 0;
   i16 = i14 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 L30 : do {
  if (i13) {
   i27 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i1) | 0;
   i14 = i11 | 0;
   HEAP32[i14 >> 2] = i27;
   if ((i27 | 0) != 0) {
    i12 = i27 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i17, i11, (__ZNK7WebCore4Node9nodeIndexEv(i1) | 0) + 1 | 0, 0);
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 + 8 | 0;
     i27 = i14 | 0;
     i16 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i12 = i2 + 24 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) > -1) {
    i30 = i14;
   } else {
    i14 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i12 >> 2] = i14;
    i30 = i14;
   }
   i14 = HEAP32[i2 + 20 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i31 = i30;
   } else {
    i16 = i14 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i31 = HEAP32[i12 >> 2] | 0;
   }
   i16 = i9 | 0;
   HEAP32[i16 >> 2] = i14;
   HEAP32[i10 >> 2] = i31;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i18, i9, i10);
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 + 8 | 0;
     i27 = i16 | 0;
     i15 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i14 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i17, i18) | 0) < 0;
   i16 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i15 = i16 + 8 | 0;
     i27 = i15 | 0;
     i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i29;
     if ((i29 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i15 = i16 + 8 | 0;
     i29 = i15 | 0;
     i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     if (i14) {
      i25 = 1;
     } else {
      i32 = i12;
      break L30;
     }
     STACKTOP = i3;
     return i25 | 0;
    }
   } while (0);
   if (i14) {
    i25 = 1;
   } else {
    i32 = i12;
    break;
   }
   STACKTOP = i3;
   return i25 | 0;
  } else {
   i32 = i2 + 24 | 0;
  }
 } while (0);
 __ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE(i19, i1);
 i17 = HEAP32[i32 >> 2] | 0;
 if ((i17 | 0) > -1) {
  i33 = i17;
 } else {
  i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i32 >> 2] = i17;
  i33 = i17;
 }
 i17 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i34 = i33;
 } else {
  i33 = i17 + 8 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
  i34 = HEAP32[i32 >> 2] | 0;
 }
 i32 = i7 | 0;
 HEAP32[i32 >> 2] = i17;
 HEAP32[i8 >> 2] = i34;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i21, i7, i8);
 i8 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i32 = i8 + 8 | 0;
   i7 = i32 | 0;
   i34 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i21, 1);
 i8 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i19, i20) | 0;
 i32 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i20 = i32 + 8 | 0;
   i34 = i20 | 0;
   i7 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i21 = i32 + 8 | 0;
   i20 = i21 | 0;
   i7 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i19 = i32 + 8 | 0;
   i21 = i19 | 0;
   i7 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 L91 : do {
  if (i8) {
   i32 = HEAP32[i24 >> 2] | 0;
   if ((i32 | 0) > -1) {
    i35 = i32;
   } else {
    i32 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i24 >> 2] = i32;
    i35 = i32;
   }
   i32 = HEAP32[i26 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i36 = i35;
   } else {
    i19 = i32 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i36 = HEAP32[i24 >> 2] | 0;
   }
   i19 = i5 | 0;
   HEAP32[i19 >> 2] = i32;
   HEAP32[i6 >> 2] = i36;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i22, i5, i6);
   i32 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i19 = i32 + 8 | 0;
     i7 = i19 | 0;
     i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i32 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i1) | 0;
   i12 = i4 | 0;
   HEAP32[i12 >> 2] = i32;
   if ((i32 | 0) != 0) {
    i14 = i32 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i23, i4, __ZNK7WebCore4Node9nodeIndexEv(i1) | 0, 0);
   i14 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 + 8 | 0;
     i32 = i12 | 0;
     i19 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i14 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i22, i23) | 0) < 0;
   i12 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i19 = i12 + 8 | 0;
     i32 = i19 | 0;
     i21 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i19 = i12 + 8 | 0;
     i21 = i19 | 0;
     i32 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     if (i14) {
      i25 = 1;
     } else {
      break L91;
     }
     STACKTOP = i3;
     return i25 | 0;
    }
   } while (0);
   if (i14) {
    i25 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i25 | 0;
  }
 } while (0);
 i25 = i13 & i8;
 STACKTOP = i3;
 return i25 | 0;
}
function __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 88 | 0;
 i13 = i3 + 104 | 0;
 i14 = i1 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = i1 + 8 | 0;
 i17 = i16;
 switch (HEAP32[i17 >> 2] & 7 | 0) {
 case 4:
  {
   if ((__ZNK7WebCore8Position13containerNodeEv(i1) | 0) != (i2 | 0)) {
    STACKTOP = i3;
    return;
   }
   i18 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
   i19 = i7 | 0;
   HEAP32[i19 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i20 = i18 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i10, i7, (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0, 0);
   i7 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i19 = i7 + 8 | 0;
     i20 = i19 | 0;
     i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i7 = i10 | 0;
   i19 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i18 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i19;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 + 8 | 0;
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
   HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   i18 = HEAP32[i10 + 8 >> 2] | 0;
   i10 = HEAP32[i17 >> 2] & -8 | i18 & 7;
   HEAP32[i17 >> 2] = i10;
   HEAP8[i16] = i10 & 255 & -9 | i18 & 8;
   i18 = HEAP32[i7 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i7 = i18 + 8 | 0;
   i18 = i7 | 0;
   i10 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 case 3:
  {
   if ((__ZNK7WebCore8Position13containerNodeEv(i1) | 0) != (i2 | 0)) {
    STACKTOP = i3;
    return;
   }
   i7 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i18 = i7 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i9, i8, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, 0);
   i8 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 8 | 0;
     i18 = i10 | 0;
     i7 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i8 = i9 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i7 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   do {
    if ((i7 | 0) != 0) {
     i10 = i7 + 8 | 0;
     i18 = i10 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   i7 = HEAP32[i9 + 8 >> 2] | 0;
   i9 = HEAP32[i17 >> 2] & -8 | i7 & 7;
   HEAP32[i17 >> 2] = i9;
   HEAP8[i16] = i9 & 255 & -9 | i7 & 8;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i8 = i7 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 case 2:
  {
   if (!(__ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i15) | 0)) {
    STACKTOP = i3;
    return;
   }
   i8 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i7 = i8 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i12, i5, (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0, 0);
   i5 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 + 8 | 0;
     i7 = i9 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i5 = i12 | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i8 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i9;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 + 8 | 0;
     i7 = i9 | 0;
     i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   i8 = HEAP32[i12 + 8 >> 2] | 0;
   i12 = HEAP32[i17 >> 2] & -8 | i8 & 7;
   HEAP32[i17 >> 2] = i12;
   HEAP8[i16] = i12 & 255 & -9 | i8 & 8;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i5 = i8 + 8 | 0;
   i8 = i5 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i12 | 0) >= 1) {
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
 case 1:
  {
   if (!(__ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i15) | 0)) {
    STACKTOP = i3;
    return;
   }
   i15 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
   i5 = i4 | 0;
   HEAP32[i5 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i12 = i15 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i13, i4, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, 0);
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i5 = i4 + 8 | 0;
     i12 = i5 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   i4 = i13 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i5;
   do {
    if ((i15 | 0) != 0) {
     i5 = i15 + 8 | 0;
     i12 = i5 | 0;
     i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   i15 = HEAP32[i13 + 8 >> 2] | 0;
   i13 = HEAP32[i17 >> 2] & -8 | i15 & 7;
   HEAP32[i17 >> 2] = i13;
   HEAP8[i16] = i13 & 255 & -9 | i15 & 8;
   i15 = HEAP32[i4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i4 = i15 + 8 | 0;
   i15 = i4 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 case 0:
  {
   do {
    if ((__ZNK7WebCore8Position13containerNodeEv(i1) | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
     i4 = i1 + 4 | 0;
     i13 = HEAP32[i4 >> 2] | 0;
     if (i13 >>> 0 <= (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) >>> 0) {
      break;
     }
     __ZN7WebCore8Position12moveToOffsetEi(i1, (HEAP32[i4 >> 2] | 0) - 1 | 0);
     STACKTOP = i3;
     return;
    }
   } while (0);
   if (!(__ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, __ZNK7WebCore8Position13containerNodeEv(i1) | 0) | 0)) {
    STACKTOP = i3;
    return;
   }
   i4 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
   i13 = i6 | 0;
   HEAP32[i13 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i15 = i4 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i11, i6, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, 0);
   i2 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i13 = i2 + 8 | 0;
     i6 = i13 | 0;
     i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i2 = i11 | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i13;
   do {
    if ((i15 | 0) != 0) {
     i13 = i15 + 8 | 0;
     i14 = i13 | 0;
     i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   i1 = HEAP32[i11 + 8 >> 2] | 0;
   i11 = HEAP32[i17 >> 2] & -8 | i1 & 7;
   HEAP32[i17 >> 2] = i11;
   HEAP8[i16] = i11 & 255 & -9 | i1 & 8;
   i1 = HEAP32[i2 >> 2] | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i2 = i1 + 8 | 0;
   i1 = i2 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 default:
  {
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore40firstEditablePositionAfterPositionInRootERKNS_8PositionEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i7, i3);
 do {
  if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i2, i7) | 0) == -1) {
   i12 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   if (!i12) {
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i8, i3);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i8, 1);
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i14 = i13 + 8 | 0;
   i13 = i14 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   STACKTOP = i4;
   return;
  } else {
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 + 8 | 0;
   i14 = i16 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i7 = i9 | 0;
 i8 = i2 | 0;
 i16 = HEAP32[i8 >> 2] | 0;
 HEAP32[i7 >> 2] = i16;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i13 = i16 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i17 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i9 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 + 4 >> 2];
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i9 + 8 | 0;
 i16 = i2;
 i14 = HEAP32[i16 >> 2] & -8 | i13 & 7;
 HEAP32[i16 >> 2] = i14;
 HEAP8[i2] = i14 & 255 & -9 | i13 & 8;
 i13 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if ((HEAP32[i17 + 20 >> 2] | 0) == (i13 | 0)) {
   i18 = 32;
  } else {
   i14 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i13, HEAP32[i7 >> 2] | 0) | 0;
   if ((i14 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    i15 = i1 + 8 | 0;
    i19 = i15;
    i20 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = i20 & -8;
    HEAP8[i15] = i20 & 255 & -16;
    HEAP32[i1 + 12 >> 2] = 1;
    break;
   }
   i20 = i5 | 0;
   HEAP32[i20 >> 2] = i14;
   i15 = i14 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i5, 2);
   i15 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i20 = i15 + 8 | 0;
     i14 = i20 | 0;
     i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i15 = i10 | 0;
   i12 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i20 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i12;
   do {
    if ((i20 | 0) != 0) {
     i12 = i20 + 8 | 0;
     i19 = i12 | 0;
     i14 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   HEAP32[i8 >> 2] = HEAP32[i10 + 4 >> 2];
   i20 = HEAP32[i10 + 8 >> 2] | 0;
   i12 = HEAP32[i16 >> 2] & -8 | i20 & 7;
   HEAP32[i16 >> 2] = i12;
   HEAP8[i2] = i12 & 255 & -9 | i20 & 8;
   i20 = HEAP32[i15 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i18 = 32;
    break;
   }
   i12 = i20 + 8 | 0;
   i20 = i12 | 0;
   i14 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    i18 = 32;
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    i18 = 32;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   i18 = 32;
  }
 } while (0);
 L45 : do {
  if ((i18 | 0) == 32) {
   i10 = HEAP32[i7 >> 2] | 0;
   L47 : do {
    if ((i10 | 0) != 0) {
     i5 = i11 | 0;
     i13 = i11 + 4 | 0;
     i17 = i11 + 8 | 0;
     i12 = i6 | 0;
     i14 = i10;
     while (1) {
      __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0);
      i20 = (HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0;
      i19 = i14 + 32 | 0;
      if (i20) {
       i21 = i19 | 0;
      } else {
       i21 = HEAP32[i19 >> 2] | 0;
      }
      do {
       if ((HEAP32[i21 >> 2] | 0) == 0) {
        i22 = i14;
       } else {
        if (i20) {
         i23 = i19 | 0;
        } else {
         i23 = HEAP32[i19 >> 2] | 0;
        }
        i24 = HEAP32[i23 >> 2] | 0;
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 184 >> 2] & 1](i24) | 0)) {
         i22 = i14;
         break;
        }
        i22 = HEAP32[i14 + 16 >> 2] | 0;
       }
      } while (0);
      i19 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i22, 0, 1) | 0;
      i20 = HEAP32[i7 >> 2] | 0;
      if (i19) {
       i25 = i20;
       break;
      }
      i19 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i20, i3) | 0;
      i20 = HEAP32[i7 >> 2] | 0;
      if (!i19) {
       i25 = i20;
       break;
      }
      L65 : do {
       if ((i20 | 0) == 0) {
        i18 = 56;
       } else {
        do {
         if ((HEAP32[i20 + 12 >> 2] & 2 | 0) == 0) {
          i26 = i20;
         } else {
          if ((HEAP32[i20 + 36 >> 2] | 0) == 0) {
           i26 = i20;
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 132 >> 2] & 1](i20) | 0) {
           i18 = 56;
           break L65;
          }
          i26 = HEAP32[i7 >> 2] | 0;
         }
        } while (0);
        i19 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i26) | 0;
        HEAP32[i12 >> 2] = i19;
        if ((i19 | 0) != 0) {
         i24 = i19 + 8 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i11, i6, (__ZNK7WebCore4Node9nodeIndexEv(i26) | 0) + 1 | 0, 0);
        i24 = HEAP32[i12 >> 2] | 0;
        if ((i24 | 0) == 0) {
         i27 = 0;
         i28 = 1;
         break;
        }
        i19 = i24 + 8 | 0;
        i24 = i19 | 0;
        i29 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         i27 = 0;
         i28 = 1;
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         i27 = 0;
         i28 = 1;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
        i27 = 0;
        i28 = 1;
       }
      } while (0);
      if ((i18 | 0) == 56) {
       i18 = 0;
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i11, i9);
       i27 = 1;
       i28 = 0;
      }
      i20 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = 0;
      i19 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i20;
      do {
       if ((i19 | 0) != 0) {
        i20 = i19 + 8 | 0;
        i29 = i20 | 0;
        i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        HEAP32[i29 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
      i19 = HEAP32[i17 >> 2] | 0;
      i20 = HEAP32[i16 >> 2] & -8 | i19 & 7;
      HEAP32[i16 >> 2] = i20;
      HEAP8[i2] = i20 & 255 & -9 | i19 & 8;
      do {
       if (i27) {
        i19 = HEAP32[i5 >> 2] | 0;
        if ((i19 | 0) == 0) {
         break;
        }
        i20 = i19 + 8 | 0;
        i19 = i20 | 0;
        i24 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
        HEAP32[i19 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       }
      } while (0);
      do {
       if (i28) {
        i20 = HEAP32[i5 >> 2] | 0;
        if ((i20 | 0) == 0) {
         break;
        }
        i24 = i20 + 8 | 0;
        i20 = i24 | 0;
        i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        HEAP32[i20 >> 2] = i19;
        if ((i19 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i14 = HEAP32[i7 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break L47;
      }
     }
     if ((i25 | 0) == 0 | (i25 | 0) == (i3 | 0)) {
      break;
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i25, i3) | 0) {
      break;
     }
     HEAP32[i1 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     i14 = i1 + 8 | 0;
     i5 = i14;
     i17 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i17 & -8;
     HEAP8[i14] = i17 & 255 & -16;
     HEAP32[i1 + 12 >> 2] = 1;
     break L45;
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i9, 1);
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore40lastEditablePositionBeforePositionInRootERKNS_8PositionEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i7, i3);
 i12 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i2, i7) | 0) == 1;
 i13 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 + 8 | 0;
   i14 = i7 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (i12) {
  __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i8, i3);
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i8, 1);
  i12 = HEAP32[i8 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i8 = i12 + 8 | 0;
  i12 = i8 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  HEAP32[i12 >> 2] = i13;
  if ((i13 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  STACKTOP = i4;
  return;
 }
 i8 = i9 | 0;
 i13 = i2 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i16 = 0;
 } else {
  i7 = i12 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i16 = HEAP32[i13 >> 2] | 0;
 }
 i13 = i9 + 4 | 0;
 HEAP32[i13 >> 2] = HEAP32[i2 + 4 >> 2];
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i9 + 8 | 0;
 i12 = i2;
 i15 = HEAP32[i12 >> 2] & -8 | i7 & 7;
 HEAP32[i12 >> 2] = i15;
 HEAP8[i2] = i15 & 255 & -9 | i7 & 8;
 i7 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if ((HEAP32[i16 + 20 >> 2] | 0) == (i7 | 0)) {
   i17 = 29;
  } else {
   i15 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i7, HEAP32[i8 >> 2] | 0) | 0;
   if ((i15 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    i14 = i1 + 8 | 0;
    i18 = i14;
    i19 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = i19 & -8;
    HEAP8[i14] = i19 & 255 & -16;
    HEAP32[i1 + 12 >> 2] = 1;
    break;
   }
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 132 >> 2] & 1](i15) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i15);
    } else {
     i19 = i5 | 0;
     HEAP32[i19 >> 2] = i15;
     i14 = i15 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i5, 1);
     i14 = HEAP32[i19 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     i19 = i14 + 8 | 0;
     i14 = i19 | 0;
     i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i15 = i10 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i18 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i19;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 + 8 | 0;
     i14 = i19 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i10 + 4 >> 2];
   i18 = HEAP32[i10 + 8 >> 2] | 0;
   i19 = HEAP32[i12 >> 2] & -8 | i18 & 7;
   HEAP32[i12 >> 2] = i19;
   HEAP8[i2] = i19 & 255 & -9 | i18 & 8;
   i18 = HEAP32[i15 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i17 = 29;
    break;
   }
   i19 = i18 + 8 | 0;
   i18 = i19 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    i17 = 29;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i17 = 29;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i17 = 29;
  }
 } while (0);
 L42 : do {
  if ((i17 | 0) == 29) {
   i10 = HEAP32[i8 >> 2] | 0;
   L44 : do {
    if ((i10 | 0) != 0) {
     i5 = i11 | 0;
     i7 = i11 + 4 | 0;
     i16 = i11 + 8 | 0;
     i19 = i6 | 0;
     i20 = i10;
     while (1) {
      __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 8 >> 2] | 0);
      i18 = (HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0;
      i14 = i20 + 32 | 0;
      if (i18) {
       i21 = i14 | 0;
      } else {
       i21 = HEAP32[i14 >> 2] | 0;
      }
      do {
       if ((HEAP32[i21 >> 2] | 0) == 0) {
        i22 = i20;
       } else {
        if (i18) {
         i23 = i14 | 0;
        } else {
         i23 = HEAP32[i14 >> 2] | 0;
        }
        i24 = HEAP32[i23 >> 2] | 0;
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 184 >> 2] & 1](i24) | 0)) {
         i22 = i20;
         break;
        }
        i22 = HEAP32[i20 + 16 >> 2] | 0;
       }
      } while (0);
      i14 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i22, 0, 1) | 0;
      i18 = HEAP32[i8 >> 2] | 0;
      if (i14) {
       i25 = i18;
       break;
      }
      i14 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i18, i3) | 0;
      i18 = HEAP32[i8 >> 2] | 0;
      if (!i14) {
       i25 = i18;
       break;
      }
      L62 : do {
       if ((i18 | 0) == 0) {
        i17 = 53;
       } else {
        do {
         if ((HEAP32[i18 + 12 >> 2] & 2 | 0) == 0) {
          i26 = i18;
         } else {
          if ((HEAP32[i18 + 36 >> 2] | 0) == 0) {
           i26 = i18;
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 132 >> 2] & 1](i18) | 0) {
           i17 = 53;
           break L62;
          }
          i26 = HEAP32[i8 >> 2] | 0;
         }
        } while (0);
        i14 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i26) | 0;
        HEAP32[i19 >> 2] = i14;
        if ((i14 | 0) != 0) {
         i24 = i14 + 8 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i11, i6, __ZNK7WebCore4Node9nodeIndexEv(i26) | 0, 0);
        i24 = HEAP32[i19 >> 2] | 0;
        if ((i24 | 0) == 0) {
         i27 = 0;
         i28 = 1;
         break;
        }
        i14 = i24 + 8 | 0;
        i24 = i14 | 0;
        i29 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         i27 = 0;
         i28 = 1;
         break;
        }
        if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
         i27 = 0;
         i28 = 1;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
        i27 = 0;
        i28 = 1;
       }
      } while (0);
      if ((i17 | 0) == 53) {
       i17 = 0;
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i11, i9);
       i27 = 1;
       i28 = 0;
      }
      i18 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = 0;
      i14 = HEAP32[i8 >> 2] | 0;
      HEAP32[i8 >> 2] = i18;
      do {
       if ((i14 | 0) != 0) {
        i18 = i14 + 8 | 0;
        i29 = i18 | 0;
        i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        HEAP32[i29 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
       }
      } while (0);
      HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
      i14 = HEAP32[i16 >> 2] | 0;
      i18 = HEAP32[i12 >> 2] & -8 | i14 & 7;
      HEAP32[i12 >> 2] = i18;
      HEAP8[i2] = i18 & 255 & -9 | i14 & 8;
      do {
       if (i27) {
        i14 = HEAP32[i5 >> 2] | 0;
        if ((i14 | 0) == 0) {
         break;
        }
        i18 = i14 + 8 | 0;
        i14 = i18 | 0;
        i24 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
        HEAP32[i14 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
       }
      } while (0);
      do {
       if (i28) {
        i18 = HEAP32[i5 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        i24 = i18 + 8 | 0;
        i18 = i24 | 0;
        i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i14;
        if ((i14 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i20 = HEAP32[i8 >> 2] | 0;
      if ((i20 | 0) == 0) {
       break L44;
      }
     }
     if ((i25 | 0) == 0 | (i25 | 0) == (i3 | 0)) {
      break;
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i25, i3) | 0) {
      break;
     }
     HEAP32[i1 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     i20 = i1 + 8 | 0;
     i5 = i20;
     i16 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i16 & -8;
     HEAP8[i20] = i16 & 255 & -16;
     HEAP32[i1 + 12 >> 2] = 1;
     break L42;
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i9, 1);
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i9 + 8 | 0;
 i9 = i8 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22enclosingEmptyListItemERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i9) | 0;
  } else {
   i11 = i9 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i9) | 0;
   i12 = i9 + 8 | 0;
   i13 = i12 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    i10 = i11;
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    i10 = i11;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   i10 = i11;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, 1) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, 1) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 1](i10) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i10);
  } else {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = i10;
   i11 = i10 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i4, 1);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i11 + 8 | 0;
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
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 1](i10) | 0) {
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i8, i10);
  } else {
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = i10;
   i6 = i10 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i8, i3, 2);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 8 | 0;
   i6 = i4 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i8, 1);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i4 = i8 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 L40 : do {
  if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i1) | 0) {
   if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i7, i1) | 0)) {
    i16 = 0;
    break;
   }
   L43 : do {
    if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
     i17 = i10;
    } else {
     i3 = HEAP32[i10 + 36 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i17 = i10;
      break;
     }
     i8 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
     i12 = i8 + 12 | 0;
     i4 = i8 + 16 | 0;
     i6 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
     i9 = i6 + 12 | 0;
     i11 = i6 + 16 | 0;
     i14 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
     i13 = i14 + 12 | 0;
     i18 = i14 + 16 | 0;
     i19 = i3;
     L46 : while (1) {
      do {
       if ((HEAP32[i19 + 12 >> 2] & 4 | 0) != 0) {
        i3 = HEAP32[i19 + 44 >> 2] | 0;
        if ((i3 | 0) == (i8 | 0)) {
         break L46;
        }
        i20 = HEAP32[i3 + 12 >> 2] | 0;
        if ((i20 | 0) == (HEAP32[i12 >> 2] | 0)) {
         if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) | (i3 | 0) == (i6 | 0)) {
          break L46;
         }
        } else {
         if ((i3 | 0) == (i6 | 0)) {
          break L46;
         }
        }
        if ((i20 | 0) == (HEAP32[i9 >> 2] | 0)) {
         if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0) | (i3 | 0) == (i14 | 0)) {
          break L46;
         }
        } else {
         if ((i3 | 0) == (i14 | 0)) {
          break L46;
         }
        }
        if ((i20 | 0) != (HEAP32[i13 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
         break L46;
        }
       }
      } while (0);
      i3 = HEAP32[i19 + 28 >> 2] | 0;
      if ((i3 | 0) == 0) {
       i17 = i10;
       break L43;
      } else {
       i19 = i3;
      }
     }
     if ((i19 | 0) == 0) {
      i17 = i10;
     } else {
      i16 = 0;
      break L40;
     }
    }
   } while (0);
   L62 : while (1) {
    i18 = HEAP32[i17 + 28 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i21 = 0;
     break;
    }
    do {
     if ((HEAP32[i18 + 12 >> 2] & 4 | 0) != 0) {
      i13 = HEAP32[i18 + 44 >> 2] | 0;
      i14 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
      if ((i13 | 0) == (i14 | 0)) {
       i21 = i18;
       break L62;
      }
      i11 = HEAP32[i13 + 12 >> 2] | 0;
      if ((i11 | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
       if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
        i21 = i18;
        break L62;
       }
      }
      i14 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
      if ((i13 | 0) == (i14 | 0)) {
       i21 = i18;
       break L62;
      }
      if ((i11 | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
       if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
        i21 = i18;
        break L62;
       }
      }
      i14 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
      if ((i13 | 0) == (i14 | 0)) {
       i21 = i18;
       break L62;
      }
      if ((i11 | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
       i21 = i18;
       break L62;
      }
     }
    } while (0);
    if (__ZN7WebCore10isListItemEPKNS_4NodeE(i10) | 0) {
     i21 = 0;
     break;
    } else {
     i17 = i18;
    }
   }
   i16 = (i21 | 0) == 0 ? i10 : 0;
  } else {
   i16 = 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 + 8 | 0;
   i21 = i7 | 0;
   i17 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i15 = i16;
  STACKTOP = i2;
  return i15 | 0;
 }
 i5 = i10 + 8 | 0;
 i10 = i5 | 0;
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i15 = i16;
  STACKTOP = i2;
  return i15 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i15 = i16;
  STACKTOP = i2;
  return i15 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i15 = i16;
 STACKTOP = i2;
 return i15 | 0;
}
function __ZN7WebCore22positionOutsideTabSpanERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 12 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L3 : do {
    if ((i11 & 1 | 0) == 0) {
     i12 = i11;
     i13 = 19;
    } else {
     i14 = i9 + 16 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
        break;
       }
       i16 = HEAP32[i15 + 44 >> 2] | 0;
       i17 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
       if ((i16 | 0) != (i17 | 0)) {
        if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i16 + 16 >> 2] | 0) != (HEAP32[i17 + 16 >> 2] | 0)) {
         break;
        }
       }
       if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0)) {
        break;
       }
       do {
        if ((HEAP32[i10 >> 2] & 1 | 0) == 0) {
         i18 = 0;
        } else {
         i17 = HEAP32[i14 >> 2] | 0;
         if ((i17 | 0) == 0) {
          i18 = 0;
          break;
         }
         if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
          i18 = 0;
          break;
         }
         i16 = HEAP32[i17 + 44 >> 2] | 0;
         i19 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
         if ((i16 | 0) != (i19 | 0)) {
          if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
           i18 = 0;
           break;
          }
          if ((HEAP32[i16 + 16 >> 2] | 0) != (HEAP32[i19 + 16 >> 2] | 0)) {
           i18 = 0;
           break;
          }
         }
         if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i17, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0)) {
          i18 = 0;
          break;
         }
         i18 = HEAP32[i14 >> 2] | 0;
        }
       } while (0);
       i20 = i18 | 0;
       break L3;
      }
     } while (0);
     i12 = HEAP32[i10 >> 2] | 0;
     i13 = 19;
    }
   } while (0);
   if ((i13 | 0) == 19) {
    if ((i12 & 4 | 0) == 0) {
     break;
    }
    i10 = HEAP32[i9 + 44 >> 2] | 0;
    i11 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
    if ((i10 | 0) != (i11 | 0)) {
     if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
      break;
     }
    }
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i9, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0) {
     i20 = i9;
    } else {
     break;
    }
   }
   L32 : do {
    if ((i20 | 0) != 0) {
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i2, 1);
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i8, i20);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i8, 1);
     i11 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i7) | 0;
     i10 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i14 = i10 + 8 | 0;
       i15 = i14 | 0;
       i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
      }
     } while (0);
     i10 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i14 = i10 + 8 | 0;
       i17 = i14 | 0;
       i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       HEAP32[i17 >> 2] = i15;
       if ((i15 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
      }
     } while (0);
     i10 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i10 | 0) == 0) {
       i13 = 40;
      } else {
       i14 = i10 + 8 | 0;
       i15 = i14 | 0;
       i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        i13 = 40;
        break;
       }
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        i13 = 40;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
       if (!i11) {
        break L32;
       }
      }
     } while (0);
     if ((i13 | 0) == 40) {
      if (!i11) {
       break;
      }
     }
     i10 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i20) | 0;
     i14 = i5 | 0;
     HEAP32[i14 >> 2] = i10;
     if ((i10 | 0) != 0) {
      i17 = i10 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i5, (__ZNK7WebCore4Node9nodeIndexEv(i20) | 0) + 1 | 0, 0);
     i17 = HEAP32[i14 >> 2] | 0;
     if ((i17 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     i14 = i17 + 8 | 0;
     i17 = i14 | 0;
     i10 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      STACKTOP = i3;
      return;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     STACKTOP = i3;
     return;
    }
   } while (0);
   i14 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i20) | 0;
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i17 = i14 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, __ZNK7WebCore4Node9nodeIndexEv(i20) | 0, 0);
   i17 = HEAP32[i10 >> 2] | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i10 = i17 + 8 | 0;
   i17 = i10 | 0;
   i14 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i20 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i4 = i20 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i20 = HEAP32[i1 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i1 >> 2] = i20;
 HEAP8[i2] = i20 & 255 & -9 | HEAP8[i4] & 8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i2;
 HEAP8[i12] = i2 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i5, i4, 1);
 L5 : do {
  if (__ZNK7WebCore8Position13atStartOfTreeEv(i4) | 0) {
   i14 = i5 | 0;
   i15 = 35;
  } else {
   i10 = i6 | 0;
   i2 = i6 + 4 | 0;
   i11 = i6 + 8 | 0;
   i16 = i7 | 0;
   i17 = i5 | 0;
   i18 = i7 + 8 | 0;
   i19 = i18;
   i20 = i7 + 4 | 0;
   i21 = i5 + 8 | 0;
   i22 = i21;
   i23 = i5 + 4 | 0;
   L7 : while (1) {
    __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i6, i4, 1);
    i24 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i25 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = i24;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i26 = i24 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
    i25 = HEAP32[i11 >> 2] | 0;
    i24 = HEAP32[i13 >> 2] & -8 | i25 & 7;
    HEAP32[i13 >> 2] = i24;
    HEAP8[i12] = i24 & 255 & -9 | i25 & 8;
    i25 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i27 = i24 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    L19 : do {
     if (__ZNK7WebCore8Position11isCandidateEv(i4) | 0) {
      __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i4, 1);
      i25 = HEAP32[i16 >> 2] | 0;
      if ((i25 | 0) == (HEAP32[i17 >> 2] | 0)) {
       do {
        if ((HEAP8[i18] & 8) == 0) {
         i24 = HEAP32[i19 >> 2] & 7;
         if (!((i24 | 0) == 2 | (i24 | 0) == 4)) {
          i15 = 19;
          break;
         }
         i28 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
        } else {
         i15 = 19;
        }
       } while (0);
       if ((i15 | 0) == 19) {
        i15 = 0;
        i28 = HEAP32[i20 >> 2] | 0;
       }
       do {
        if ((HEAP8[i21] & 8) == 0) {
         i24 = HEAP32[i22 >> 2] & 7;
         if (!((i24 | 0) == 2 | (i24 | 0) == 4)) {
          i15 = 23;
          break;
         }
         i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
        } else {
         i15 = 23;
        }
       } while (0);
       if ((i15 | 0) == 23) {
        i15 = 0;
        i29 = HEAP32[i23 >> 2] | 0;
       }
       if ((i28 | 0) == (i29 | 0)) {
        i30 = ((HEAP32[i22 >> 2] ^ HEAP32[i19 >> 2]) & 7 | 0) != 0;
       } else {
        i30 = 1;
       }
       i31 = i30;
       i32 = HEAP32[i16 >> 2] | 0;
      } else {
       i31 = 1;
       i32 = i25;
      }
      do {
       if ((i32 | 0) != 0) {
        i24 = i32 + 8 | 0;
        i26 = i24 | 0;
        i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i27;
        if ((i27 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
        if (i31) {
         break L7;
        } else {
         break L19;
        }
       }
      } while (0);
      if (i31) {
       break L7;
      }
     }
    } while (0);
    if (__ZNK7WebCore8Position13atStartOfTreeEv(i4) | 0) {
     i14 = i17;
     i15 = 35;
     break L5;
    }
   }
   i16 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = i16;
   HEAP32[i1 + 4 >> 2] = HEAP32[i9 >> 2];
   i16 = HEAP32[i13 >> 2] | 0;
   i19 = i1 + 8 | 0;
   i22 = i19;
   i23 = HEAP32[i22 >> 2] & -8 | i16 & 7;
   HEAP32[i22 >> 2] = i23;
   HEAP8[i19] = i23 & 255 & -9 | i16 & 8;
   i33 = i17;
  }
 } while (0);
 if ((i15 | 0) == 35) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i15 = i1 + 8 | 0;
  i1 = i15;
  i13 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i13 & -8;
  HEAP8[i15] = i13 & 255 & -16;
  i33 = i14;
 }
 i14 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i33 = i14 + 8 | 0;
   i13 = i33 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i14 + 8 | 0;
 i14 = i8 | 0;
 i33 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i33;
 if ((i33 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i2;
 HEAP8[i12] = i2 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i5, i4, 1);
 L5 : do {
  if (__ZNK7WebCore8Position11atEndOfTreeEv(i4) | 0) {
   i14 = i5 | 0;
   i15 = 35;
  } else {
   i10 = i6 | 0;
   i2 = i6 + 4 | 0;
   i11 = i6 + 8 | 0;
   i16 = i7 | 0;
   i17 = i5 | 0;
   i18 = i7 + 8 | 0;
   i19 = i18;
   i20 = i7 + 4 | 0;
   i21 = i5 + 8 | 0;
   i22 = i21;
   i23 = i5 + 4 | 0;
   L8 : while (1) {
    __ZNK7WebCore8Position4nextENS_16PositionMoveTypeE(i6, i4, 1);
    i24 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i25 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = i24;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i26 = i24 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
    i25 = HEAP32[i11 >> 2] | 0;
    i24 = HEAP32[i13 >> 2] & -8 | i25 & 7;
    HEAP32[i13 >> 2] = i24;
    HEAP8[i12] = i24 & 255 & -9 | i25 & 8;
    i25 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i27 = i24 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    L20 : do {
     if (__ZNK7WebCore8Position11isCandidateEv(i4) | 0) {
      __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i4, 1);
      i25 = HEAP32[i16 >> 2] | 0;
      if ((i25 | 0) == (HEAP32[i17 >> 2] | 0)) {
       do {
        if ((HEAP8[i18] & 8) == 0) {
         i24 = HEAP32[i19 >> 2] & 7;
         if (!((i24 | 0) == 2 | (i24 | 0) == 4)) {
          i15 = 19;
          break;
         }
         i28 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
        } else {
         i15 = 19;
        }
       } while (0);
       if ((i15 | 0) == 19) {
        i15 = 0;
        i28 = HEAP32[i20 >> 2] | 0;
       }
       do {
        if ((HEAP8[i21] & 8) == 0) {
         i24 = HEAP32[i22 >> 2] & 7;
         if (!((i24 | 0) == 2 | (i24 | 0) == 4)) {
          i15 = 23;
          break;
         }
         i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
        } else {
         i15 = 23;
        }
       } while (0);
       if ((i15 | 0) == 23) {
        i15 = 0;
        i29 = HEAP32[i23 >> 2] | 0;
       }
       if ((i28 | 0) == (i29 | 0)) {
        i30 = ((HEAP32[i22 >> 2] ^ HEAP32[i19 >> 2]) & 7 | 0) != 0;
       } else {
        i30 = 1;
       }
       i31 = i30;
       i32 = HEAP32[i16 >> 2] | 0;
      } else {
       i31 = 1;
       i32 = i25;
      }
      do {
       if ((i32 | 0) != 0) {
        i24 = i32 + 8 | 0;
        i26 = i24 | 0;
        i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i27;
        if ((i27 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
        if (i31) {
         break L8;
        } else {
         break L20;
        }
       }
      } while (0);
      if (i31) {
       break L8;
      }
     }
    } while (0);
    if (__ZNK7WebCore8Position11atEndOfTreeEv(i4) | 0) {
     i14 = i17;
     i15 = 35;
     break L5;
    }
   }
   i16 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = i16;
   HEAP32[i1 + 4 >> 2] = HEAP32[i9 >> 2];
   i16 = HEAP32[i13 >> 2] | 0;
   i19 = i1 + 8 | 0;
   i22 = i19;
   i23 = HEAP32[i22 >> 2] & -8 | i16 & 7;
   HEAP32[i22 >> 2] = i23;
   HEAP8[i19] = i23 & 255 & -9 | i16 & 8;
   i33 = i17;
  }
 } while (0);
 if ((i15 | 0) == 35) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i15 = i1 + 8 | 0;
  i1 = i15;
  i13 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i13 & -8;
  HEAP8[i15] = i13 & 255 & -16;
  i33 = i14;
 }
 i14 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i33 = i14 + 8 | 0;
   i13 = i33 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i14 + 8 | 0;
 i14 = i8 | 0;
 i33 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i33;
 if ((i33 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18enclosingListChildEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i1);
  } else {
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i1;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i4, i3, 1);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 8 | 0;
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
 i3 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i4, 0) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = i1;
  } else {
   i4 = i6 + 8 | 0;
   i8 = i4 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    i9 = i1;
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    i9 = i1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   i9 = i1;
  }
 } while (0);
 L15 : while (1) {
  i1 = i9 + 16 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i5 = 0;
   i10 = 55;
   break;
  }
  i4 = HEAP32[i9 + 12 >> 2] | 0;
  i7 = (i4 & 4 | 0) == 0;
  do {
   if (!i7) {
    i8 = HEAP32[i9 + 44 >> 2] | 0;
    i11 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
    if ((i8 | 0) == (i11 | 0)) {
     i5 = i9;
     i10 = 52;
     break L15;
    }
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
     i5 = i9;
     i10 = 46;
     break L15;
    }
   }
  } while (0);
  L23 : do {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
    i10 = 27;
   } else {
    i11 = HEAP32[i6 + 44 >> 2] | 0;
    i8 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
    do {
     if ((i11 | 0) == (i8 | 0)) {
      i12 = 1;
     } else {
      i13 = HEAP32[i11 + 12 >> 2] | 0;
      if ((i13 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
       if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
        i12 = 1;
        break;
       }
      }
      i14 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
      if ((i11 | 0) == (i14 | 0)) {
       i12 = 1;
       break;
      }
      if ((i13 | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
       if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
        i12 = 1;
        break;
       }
      }
      i14 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
      if ((i11 | 0) == (i14 | 0)) {
       i12 = 1;
       break;
      }
      if ((i13 | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
       i10 = 27;
       break L23;
      }
      i12 = (HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0);
     }
    } while (0);
    i11 = (i9 | 0) == (i3 | 0);
    i8 = i12 & (i11 ^ 1);
    if (i8 | i11) {
     i5 = i8 ? i9 : 0;
     i10 = 44;
     break L15;
    }
   }
  } while (0);
  if ((i10 | 0) == 27) {
   i10 = 0;
   if ((i9 | 0) == (i3 | 0)) {
    i5 = 0;
    i10 = 50;
    break;
   }
  }
  i8 = i9 + 32 | 0;
  if ((i4 & 2048 | 0) == 0) {
   i15 = i8 | 0;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
  }
  i8 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if (i7) {
     i16 = i6;
     break;
    }
    i11 = HEAP32[i9 + 44 >> 2] | 0;
    i14 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
    if ((i11 | 0) == (i14 | 0)) {
     i5 = 0;
     i10 = 47;
     break L15;
    }
    i13 = HEAP32[i11 + 12 >> 2] | 0;
    if ((i13 | 0) == (HEAP32[i14 + 12 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
      i5 = 0;
      i10 = 49;
      break L15;
     }
    }
    i14 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
    if ((i11 | 0) == (i14 | 0)) {
     i5 = 0;
     i10 = 53;
     break L15;
    }
    if ((i13 | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     i16 = i6;
     break;
    }
    if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
     i5 = 0;
     i10 = 51;
     break L15;
    } else {
     i16 = i6;
    }
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 188 >> 2] & 1](i8) | 0) {
     i5 = 0;
     i10 = 48;
     break L15;
    }
    i16 = HEAP32[i1 >> 2] | 0;
   }
  } while (0);
  if ((i16 | 0) == 0) {
   i5 = 0;
   i10 = 45;
   break;
  } else {
   i9 = i16 | 0;
  }
 }
 if ((i10 | 0) == 44) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 45) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 46) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 47) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 48) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 49) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 50) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 51) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 52) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 53) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i10 | 0) == 55) {
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCoreL20lastInSpecialElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = __ZNK7WebCore4Node19rootEditableElementEv(__ZNK7WebCore8Position13containerNodeEv(i1) | 0) | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i11 = i6 | 0;
 i12 = i5 | 0;
 i13 = i4 | 0;
 i14 = i7 | 0;
 i15 = i3 | 0;
 i16 = 0;
 i17 = i9;
 while (1) {
  if ((__ZNK7WebCore4Node19rootEditableElementEv(i17) | 0) != (i8 | 0)) {
   i10 = 0;
   i18 = 45;
   break;
  }
  if (__ZN7WebCore16isSpecialElementEPKNS_4NodeE(i17) | 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1, 1);
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 132 >> 2] & 1](i17) | 0) {
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i6, i17);
    } else {
     HEAP32[i15 >> 2] = i17;
     i9 = i17 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i3, 2);
     i9 = HEAP32[i15 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i19 = i9 + 8 | 0;
     i9 = i19 | 0;
     i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
   i19 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     i9 = i20 | 0;
     i21 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i17 + 12 >> 2] | 0;
   L21 : do {
    if ((i19 & 4 | 0) == 0) {
     i18 = 33;
    } else {
     i20 = i17 + 32 | 0;
     if ((i19 & 2048 | 0) == 0) {
      i22 = i20 | 0;
     } else {
      i22 = HEAP32[i20 >> 2] | 0;
     }
     i20 = HEAP32[i22 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i18 = 33;
      break;
     }
     i21 = (HEAP32[i20 + 20 >> 2] & 768 | 0) == 256;
     if (i21) {
      i23 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i23 = HEAP32[i20 + 36 >> 2] | 0;
     }
     if ((HEAP32[i23 + 48 >> 2] & 31 | 0) != 6) {
      if (i21) {
       i24 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i24 = HEAP32[i20 + 36 >> 2] | 0;
      }
      if ((HEAP32[i24 + 48 >> 2] & 31 | 0) != 7) {
       i18 = 33;
       break;
      }
     }
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i5, 0);
     i20 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i7) | 0;
     i21 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i9 = i21 + 8 | 0;
       i25 = i9 | 0;
       i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
       if (i20) {
        i27 = 1;
        i28 = i17;
        break L21;
       } else {
        i18 = 33;
        break L21;
       }
      }
     } while (0);
     if (i20) {
      i27 = 1;
      i28 = i17;
     } else {
      i18 = 33;
     }
    }
   } while (0);
   if ((i18 | 0) == 33) {
    i18 = 0;
    i19 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i5) | 0;
    i27 = i19;
    i28 = i19 ? i17 : i16;
   }
   i19 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i9 = i21 | 0;
     i26 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i26 = i21 | 0;
     i9 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   if (i27) {
    i10 = i28;
    i18 = 46;
    break;
   } else {
    i29 = i28;
   }
  } else {
   i29 = i16;
  }
  i19 = HEAP32[i17 + 16 >> 2] | 0;
  if ((i19 | 0) == 0) {
   i10 = 0;
   i18 = 47;
   break;
  } else {
   i16 = i29;
   i17 = i19 | 0;
  }
 }
 if ((i18 | 0) == 45) {
  STACKTOP = i2;
  return i10 | 0;
 } else if ((i18 | 0) == 46) {
  STACKTOP = i2;
  return i10 | 0;
 } else if ((i18 | 0) == 47) {
  STACKTOP = i2;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCoreL21firstInSpecialElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = __ZNK7WebCore4Node19rootEditableElementEv(__ZNK7WebCore8Position13containerNodeEv(i1) | 0) | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i11 = i6 | 0;
 i12 = i5 | 0;
 i13 = i4 | 0;
 i14 = i7 | 0;
 i15 = i3 | 0;
 i16 = 0;
 i17 = i9;
 while (1) {
  if ((__ZNK7WebCore4Node19rootEditableElementEv(i17) | 0) != (i8 | 0)) {
   i10 = 0;
   i18 = 45;
   break;
  }
  if (__ZN7WebCore16isSpecialElementEPKNS_4NodeE(i17) | 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1, 1);
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 132 >> 2] & 1](i17) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i17);
    } else {
     HEAP32[i15 >> 2] = i17;
     i9 = i17 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i3, 1);
     i9 = HEAP32[i15 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i19 = i9 + 8 | 0;
     i9 = i19 | 0;
     i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
   i19 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     i9 = i20 | 0;
     i21 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i17 + 12 >> 2] | 0;
   L21 : do {
    if ((i19 & 4 | 0) == 0) {
     i18 = 33;
    } else {
     i20 = i17 + 32 | 0;
     if ((i19 & 2048 | 0) == 0) {
      i22 = i20 | 0;
     } else {
      i22 = HEAP32[i20 >> 2] | 0;
     }
     i20 = HEAP32[i22 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i18 = 33;
      break;
     }
     i21 = (HEAP32[i20 + 20 >> 2] & 768 | 0) == 256;
     if (i21) {
      i23 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i23 = HEAP32[i20 + 36 >> 2] | 0;
     }
     if ((HEAP32[i23 + 48 >> 2] & 31 | 0) != 6) {
      if (i21) {
       i24 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i24 = HEAP32[i20 + 36 >> 2] | 0;
      }
      if ((HEAP32[i24 + 48 >> 2] & 31 | 0) != 7) {
       i18 = 33;
       break;
      }
     }
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i5, 0);
     i20 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i7) | 0;
     i21 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i9 = i21 + 8 | 0;
       i25 = i9 | 0;
       i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
       if (i20) {
        i27 = 1;
        i28 = i17;
        break L21;
       } else {
        i18 = 33;
        break L21;
       }
      }
     } while (0);
     if (i20) {
      i27 = 1;
      i28 = i17;
     } else {
      i18 = 33;
     }
    }
   } while (0);
   if ((i18 | 0) == 33) {
    i18 = 0;
    i19 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i5) | 0;
    i27 = i19;
    i28 = i19 ? i17 : i16;
   }
   i19 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i9 = i21 | 0;
     i26 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i26 = i21 | 0;
     i9 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   if (i27) {
    i10 = i28;
    i18 = 46;
    break;
   } else {
    i29 = i28;
   }
  } else {
   i29 = i16;
  }
  i19 = HEAP32[i17 + 16 >> 2] | 0;
  if ((i19 | 0) == 0) {
   i10 = 0;
   i18 = 47;
   break;
  } else {
   i16 = i29;
   i17 = i19 | 0;
  }
 }
 if ((i18 | 0) == 45) {
  STACKTOP = i2;
  return i10 | 0;
 } else if ((i18 | 0) == 46) {
  STACKTOP = i2;
  return i10 | 0;
 } else if ((i18 | 0) == 47) {
  STACKTOP = i2;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore41adjustedSelectionStartForStyleComputationERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i5 | 0;
 i10 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i5 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i5 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 28 >> 2];
 i10 = HEAP32[i2 + 32 >> 2] | 0;
 i11 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i11;
 HEAP8[i13] = i11 & 255 & -9 | i10 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i4 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i11 = i1 + 8 | 0;
   i10 = i11;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i13 & -8;
   HEAP8[i11] = i13 & 255 & -16;
  } else {
   if ((HEAP32[i2 + 52 >> 2] | 0) == 1) {
    HEAP32[i1 >> 2] = i9;
    i13 = i9 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    HEAP32[i1 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
    i13 = HEAP32[i4 + 8 >> 2] | 0;
    i11 = i1 + 8 | 0;
    i10 = i11;
    i14 = HEAP32[i10 >> 2] & -8 | i13 & 7;
    HEAP32[i10 >> 2] = i14;
    HEAP8[i11] = i14 & 255 & -9 | i13 & 8;
    break;
   }
   if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0)) {
    i13 = i8 | 0;
    i14 = HEAP32[i5 >> 2] | 0;
    HEAP32[i13 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i11 = i14 + 8 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    HEAP32[i8 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
    i11 = HEAP32[i4 + 8 >> 2] | 0;
    i14 = i8 + 8 | 0;
    i10 = i14;
    i12 = HEAP32[i10 >> 2] & -8 | i11 & 7;
    HEAP32[i10 >> 2] = i12;
    HEAP8[i14] = i12 & 255 & -9 | i11 & 8;
    __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1, i8, 1);
    i11 = HEAP32[i13 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i13 = i11 + 8 | 0;
    i11 = i13 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    break;
   }
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i4, 0);
   i13 = i6 | 0;
   i12 = i7 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i14 = i11 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   i14 = HEAP32[i7 + 8 >> 2] | 0;
   i11 = i6 + 8 | 0;
   i10 = i11;
   i15 = HEAP32[i10 >> 2] & -8 | i14 & 7;
   HEAP32[i10 >> 2] = i15;
   HEAP8[i11] = i15 & 255 & -9 | i14 & 8;
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1, i6, 1);
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 8 | 0;
     i15 = i13 | 0;
     i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = i14 + 8 | 0;
   i14 = i13 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore23isAtUnsplittableElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
  i7 = i4 + 32 | 0;
  if (i6) {
   i8 = i7 | 0;
  } else {
   i8 = HEAP32[i7 >> 2] | 0;
  }
  do {
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    i9 = i4;
   } else {
    if (i6) {
     i10 = i7 | 0;
    } else {
     i10 = HEAP32[i7 >> 2] | 0;
    }
    i11 = HEAP32[i10 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 1](i11) | 0)) {
     i9 = i4;
     break;
    }
    i9 = HEAP32[i4 + 16 >> 2] | 0;
   }
  } while (0);
  i5 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i9, 0) | 0;
 }
 if ((i3 | 0) == (i5 | 0)) {
  i12 = 1;
  return i12 | 0;
 }
 L19 : do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i13 = 0;
  } else {
   i5 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i13 = 0;
    break;
   }
   if ((i5 | 0) == 0) {
    i4 = i9;
    while (1) {
     i10 = HEAP32[i4 + 12 >> 2] | 0;
     i7 = i4 + 32 | 0;
     if ((i10 & 2048 | 0) == 0) {
      i14 = i7 | 0;
     } else {
      i14 = HEAP32[i7 >> 2] | 0;
     }
     i7 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i7 | 0) == 0) {
       i6 = (i10 & 4 | 0) == 0;
       if (i6) {
        break;
       }
       i8 = HEAP32[i4 + 44 >> 2] | 0;
       i11 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
       if ((i8 | 0) == (i11 | 0)) {
        i13 = i4;
        break L19;
       }
       if ((HEAP32[i8 + 12 >> 2] | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         i13 = i4;
         break L19;
        }
       }
       if (i6) {
        break;
       }
       i6 = HEAP32[i4 + 44 >> 2] | 0;
       i11 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
       if ((i6 | 0) == (i11 | 0)) {
        i13 = i4;
        break L19;
       }
       if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
        i13 = i4;
        break L19;
       }
      } else {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 188 >> 2] & 1](i7) | 0) {
        i13 = i4;
        break L19;
       }
      }
     } while (0);
     if ((i4 | 0) == 0) {
      i13 = 0;
      break L19;
     }
     i7 = HEAP32[i4 + 16 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i13 = 0;
      break L19;
     } else {
      i4 = i7 | 0;
     }
    }
   } else {
    i15 = i9;
   }
   while (1) {
    if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i15, 0, 1) | 0) {
     i4 = HEAP32[i15 + 12 >> 2] | 0;
     i7 = i15 + 32 | 0;
     if ((i4 & 2048 | 0) == 0) {
      i16 = i7 | 0;
     } else {
      i16 = HEAP32[i7 >> 2] | 0;
     }
     i7 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i7 | 0) == 0) {
       i10 = (i4 & 4 | 0) == 0;
       if (i10) {
        break;
       }
       i11 = HEAP32[i15 + 44 >> 2] | 0;
       i6 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
       if ((i11 | 0) == (i6 | 0)) {
        i13 = i15;
        break L19;
       }
       if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
        if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
         i13 = i15;
         break L19;
        }
       }
       if (i10) {
        break;
       }
       i10 = HEAP32[i15 + 44 >> 2] | 0;
       i6 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
       if ((i10 | 0) == (i6 | 0)) {
        i13 = i15;
        break L19;
       }
       if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
        i13 = i15;
        break L19;
       }
      } else {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 188 >> 2] & 1](i7) | 0) {
        i13 = i15;
        break L19;
       }
      }
     } while (0);
     if ((i15 | 0) == (i5 | 0)) {
      i13 = 0;
      break L19;
     }
    }
    i7 = HEAP32[i15 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i13 = 0;
     break;
    } else {
     i15 = i7 | 0;
    }
   }
  }
 } while (0);
 i12 = (i3 | 0) == (i13 | 0);
 return i12 | 0;
}
function __ZN7WebCore30selectionForParagraphIterationERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 96 | 0;
 i8 = i3 + 112 | 0;
 i9 = i3 + 176 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2);
 i2 = i1 + 52 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 2) {
  i10 = 1;
 } else {
  i10 = HEAP32[i1 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 24 | 0, i10);
 if ((HEAP32[i2 >> 2] | 0) == 2) {
  i11 = 0;
 } else {
  i11 = HEAP32[i1 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 36 | 0, i11);
 i11 = __ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i5) | 0;
 L7 : do {
  if ((i11 | 0) != 0) {
   i2 = HEAP32[i4 >> 2] | 0;
   L9 : do {
    if ((i2 | 0) == 0) {
     if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i2, i11) | 0)) {
      break L7;
     }
    } else {
     i10 = i2 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     i10 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i2, i11) | 0;
     i12 = i2 + 8 | 0;
     i13 = i12 - 8 | 0;
     i14 = i12 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     do {
      if ((i15 | 0) < 1) {
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13);
       if (i10) {
        break L9;
       } else {
        break L7;
       }
      }
     } while (0);
     if (!i10) {
      break L7;
     }
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i5, 1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i6, i4, i7, 0);
   __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i6) | 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i6);
   i2 = HEAP32[i7 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i13 = i2 + 8 | 0;
   i2 = i13 | 0;
   i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i7 = __ZN7WebCore25isLastPositionBeforeTableERKNS_15VisiblePositionE(i4) | 0;
 i6 = i5 | 0;
 L21 : do {
  if ((i7 | 0) != 0) {
   i11 = HEAP32[i6 >> 2] | 0;
   L23 : do {
    if ((i11 | 0) == 0) {
     if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i11, i7) | 0)) {
      break L21;
     }
    } else {
     i13 = i11 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     i13 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i11, i7) | 0;
     i12 = i11 + 8 | 0;
     i2 = i12 - 8 | 0;
     i15 = i12 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i14;
     do {
      if ((i14 | 0) < 1) {
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i2);
       if (i13) {
        break L23;
       } else {
        break L21;
       }
      }
     } while (0);
     if (!i13) {
      break L21;
     }
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i9, i4, 1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i8, i9, i5, 0);
   __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i8) | 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i8);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i2 = i11 + 8 | 0;
   i11 = i2 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 8 | 0;
   i8 = i6 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i9 + 8 | 0;
 i9 = i4 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore30unsplittableElementForPositionERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 | 0;
 L1 : do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   L4 : do {
    if ((i3 | 0) == 0) {
     i5 = i4;
     L25 : while (1) {
      i6 = HEAP32[i5 + 12 >> 2] | 0;
      i7 = i5 + 32 | 0;
      if ((i6 & 2048 | 0) == 0) {
       i8 = i7 | 0;
      } else {
       i8 = HEAP32[i7 >> 2] | 0;
      }
      i7 = HEAP32[i8 >> 2] | 0;
      do {
       if ((i7 | 0) == 0) {
        if ((i6 & 4 | 0) == 0) {
         break;
        }
        i9 = HEAP32[i5 + 44 >> 2] | 0;
        i10 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
        if ((i9 | 0) == (i10 | 0)) {
         break L25;
        }
        i11 = HEAP32[i9 + 12 >> 2] | 0;
        if ((i11 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
         if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
          i12 = i5;
          break L4;
         }
        }
        i10 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
        if ((i9 | 0) == (i10 | 0)) {
         i12 = i5;
         break L4;
        }
        if ((i11 | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
         i12 = i5;
         break L4;
        }
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 188 >> 2] & 1](i7) | 0) {
         i12 = i5;
         break L4;
        }
       }
      } while (0);
      if ((i5 | 0) == 0) {
       break L1;
      }
      i7 = HEAP32[i5 + 16 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break L1;
      } else {
       i5 = i7 | 0;
      }
     }
     i13 = i5;
     return i13 | 0;
    } else {
     i7 = i4;
     while (1) {
      if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7, 0, 1) | 0) {
       i6 = HEAP32[i7 + 12 >> 2] | 0;
       i10 = i7 + 32 | 0;
       if ((i6 & 2048 | 0) == 0) {
        i14 = i10 | 0;
       } else {
        i14 = HEAP32[i10 >> 2] | 0;
       }
       i10 = HEAP32[i14 >> 2] | 0;
       do {
        if ((i10 | 0) == 0) {
         if ((i6 & 4 | 0) == 0) {
          break;
         }
         i9 = HEAP32[i7 + 44 >> 2] | 0;
         i11 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
         if ((i9 | 0) == (i11 | 0)) {
          i12 = i7;
          break L4;
         }
         i15 = HEAP32[i9 + 12 >> 2] | 0;
         if ((i15 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
          if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
           i12 = i7;
           break L4;
          }
         }
         i11 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
         if ((i9 | 0) == (i11 | 0)) {
          i12 = i7;
          break L4;
         }
         if ((i15 | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
          i12 = i7;
          break L4;
         }
        } else {
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 188 >> 2] & 1](i10) | 0) {
          i12 = i7;
          break L4;
         }
        }
       } while (0);
       if ((i7 | 0) == (i3 | 0)) {
        break L1;
       }
      }
      i10 = HEAP32[i7 + 16 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break L1;
      } else {
       i7 = i10 | 0;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == 0) {
    break;
   } else {
    i13 = i12;
   }
   return i13 | 0;
  }
 } while (0);
 i12 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  return i13 | 0;
 }
 i1 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
 i14 = i12 + 32 | 0;
 if (i1) {
  i16 = i14 | 0;
 } else {
  i16 = HEAP32[i14 >> 2] | 0;
 }
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   i17 = i12;
  } else {
   if (i1) {
    i18 = i14 | 0;
   } else {
    i18 = HEAP32[i14 >> 2] | 0;
   }
   i8 = HEAP32[i18 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 184 >> 2] & 1](i8) | 0)) {
    i17 = i12;
    break;
   }
   i17 = HEAP32[i12 + 16 >> 2] | 0;
  }
 } while (0);
 i13 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i17, 0) | 0;
 return i13 | 0;
}
function __ZN7WebCore45visiblePositionForIndexUsingCharacterIteratorEPNS_4NodeEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 192 | 0;
 i11 = i4 + 208 | 0;
 i12 = i4 + 216 | 0;
 i13 = i4 + 224 | 0;
 if ((i3 | 0) < 1) {
  do {
   if ((i2 | 0) == 0) {
    _memset(i6 | 0, 0, 12) | 0;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i2);
     break;
    }
    i14 = i5 | 0;
    HEAP32[i14 >> 2] = i2;
    i15 = i2 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 1);
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
    i14 = i15 + 8 | 0;
    i15 = i14 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, 1);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i14;
  if ((i14 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore5Range6createERNS_8DocumentE(i7, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i7, i2, i6);
 __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i9, i7, 0);
 __ZN7WebCore17CharacterIterator7advanceEi(i9, i3 - 1 | 0);
 __ZNK7WebCore17CharacterIterator5rangeEv(i12, i9);
 i3 = i12 | 0;
 i12 = HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0;
 i6 = i11 | 0;
 HEAP32[i6 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i2 = i12 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZNK7WebCore17CharacterIterator5rangeEv(i13, i9);
 i2 = i13 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 i12 = i13 + 24 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 if ((i8 | 0) > -1) {
  i17 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i13 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i12 >> 2] = i8;
  i17 = i8;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i10, i11, i17, 0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 0);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 + 8 | 0;
   i17 = i10 | 0;
   i11 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 8 | 0;
   i10 = i6 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12TextIteratorD1Ev(i9 + 12 | 0);
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 do {
  if ((i1 | 0) == 0) {
   _memset(i5 | 0, 0, 12) | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i5, i1);
    break;
   }
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i1;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i5, i4, 1);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 8 | 0;
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
 i4 = i5 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 L14 : do {
  if ((i2 | 0) == 1) {
   i6 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i5, 0) | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   if ((i6 | 0) == 0) {
    i10 = i8;
    i11 = 13;
    break;
   } else {
    i12 = i8;
   }
   while (1) {
    if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i12, 0, 1) | 0) {
     do {
      if ((i12 | 0) != 0) {
       i8 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
       i7 = i12 + 32 | 0;
       if (i8) {
        i13 = i7 | 0;
       } else {
        i13 = HEAP32[i7 >> 2] | 0;
       }
       if ((HEAP32[i13 >> 2] | 0) == 0) {
        break;
       }
       if (i8) {
        i14 = i7 | 0;
       } else {
        i14 = HEAP32[i7 >> 2] | 0;
       }
       if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 1024 | 0) != 0) {
        break;
       }
       if (i8) {
        i15 = i7 | 0;
       } else {
        i15 = HEAP32[i7 >> 2] | 0;
       }
       i7 = HEAP32[i15 >> 2] | 0;
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 172 >> 2] & 1](i7) | 0)) {
        i16 = i12;
        break L14;
       }
      }
     } while (0);
     if ((i12 | 0) == (i6 | 0)) {
      i16 = 0;
      break L14;
     }
    }
    i7 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i16 = 0;
     break;
    } else {
     i12 = i7 | 0;
    }
   }
  } else {
   i10 = i1;
   i11 = 13;
  }
 } while (0);
 L41 : do {
  if ((i11 | 0) == 13) {
   while (1) {
    i11 = 0;
    if ((i10 | 0) == 0) {
     i16 = 0;
     break L41;
    }
    i1 = (HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0;
    i12 = i10 + 32 | 0;
    if (i1) {
     i17 = i12 | 0;
    } else {
     i17 = HEAP32[i12 >> 2] | 0;
    }
    do {
     if ((HEAP32[i17 >> 2] | 0) != 0) {
      if (i1) {
       i18 = i12 | 0;
      } else {
       i18 = HEAP32[i12 >> 2] | 0;
      }
      if ((HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 1024 | 0) != 0) {
       break;
      }
      if (i1) {
       i19 = i12 | 0;
      } else {
       i19 = HEAP32[i12 >> 2] | 0;
      }
      i15 = HEAP32[i19 >> 2] | 0;
      i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 172 >> 2] & 1](i15) | 0;
      if (!i14) {
       i16 = i14 ? 0 : i10;
       break L41;
      }
     }
    } while (0);
    i12 = HEAP32[i10 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i16 = 0;
     break;
    } else {
     i10 = i12 | 0;
     i11 = 13;
    }
   }
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 + 8 | 0;
   i10 = i4 | 0;
   i19 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if ((i16 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i9 = i16;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore18enclosingTableCellERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i4 | 0) == 0) {
  i2 = i1;
  L8 : while (1) {
   i5 = HEAP32[i2 + 12 >> 2] | 0;
   i6 = i2 + 32 | 0;
   if ((i5 & 2048 | 0) == 0) {
    i7 = i6 | 0;
   } else {
    i7 = HEAP32[i6 >> 2] | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     if ((i5 & 4 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i2 + 44 >> 2] | 0;
     i9 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
     if ((i8 | 0) == (i9 | 0)) {
      i3 = i2;
      i10 = 34;
      break L8;
     }
     i11 = HEAP32[i8 + 12 >> 2] | 0;
     if ((i11 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
      if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
       i3 = i2;
       i10 = 35;
       break L8;
      }
     }
     i9 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
     if ((i8 | 0) == (i9 | 0)) {
      i3 = i2;
      i10 = 48;
      break L8;
     }
     if ((i11 | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
      i3 = i2;
      i10 = 45;
      break L8;
     }
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 188 >> 2] & 1](i6) | 0) {
      i3 = i2;
      i10 = 43;
      break L8;
     }
    }
   } while (0);
   if ((i2 | 0) == 0) {
    i3 = 0;
    i10 = 36;
    break;
   }
   i6 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i3 = 0;
    i10 = 44;
    break;
   } else {
    i2 = i6 | 0;
   }
  }
  if ((i10 | 0) == 34) {
   return i3 | 0;
  } else if ((i10 | 0) == 35) {
   return i3 | 0;
  } else if ((i10 | 0) == 36) {
   return i3 | 0;
  } else if ((i10 | 0) == 43) {
   return i3 | 0;
  } else if ((i10 | 0) == 44) {
   return i3 | 0;
  } else if ((i10 | 0) == 45) {
   return i3 | 0;
  } else if ((i10 | 0) == 48) {
   return i3 | 0;
  }
 } else {
  i12 = i1;
 }
 L34 : while (1) {
  if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i12, 0, 1) | 0) {
   i1 = HEAP32[i12 + 12 >> 2] | 0;
   i2 = i12 + 32 | 0;
   if ((i1 & 2048 | 0) == 0) {
    i13 = i2 | 0;
   } else {
    i13 = HEAP32[i2 >> 2] | 0;
   }
   i2 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     if ((i1 & 4 | 0) == 0) {
      break;
     }
     i7 = HEAP32[i12 + 44 >> 2] | 0;
     i6 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
     if ((i7 | 0) == (i6 | 0)) {
      i3 = i12;
      i10 = 41;
      break L34;
     }
     i5 = HEAP32[i7 + 12 >> 2] | 0;
     if ((i5 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
      if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
       i3 = i12;
       i10 = 42;
       break L34;
      }
     }
     i6 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
     if ((i7 | 0) == (i6 | 0)) {
      i3 = i12;
      i10 = 37;
      break L34;
     }
     if ((i5 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i3 = i12;
      i10 = 38;
      break L34;
     }
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 1](i2) | 0) {
      i3 = i12;
      i10 = 46;
      break L34;
     }
    }
   } while (0);
   if ((i12 | 0) == (i4 | 0)) {
    i3 = 0;
    i10 = 49;
    break;
   }
  }
  i2 = HEAP32[i12 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i10 = 39;
   break;
  } else {
   i12 = i2 | 0;
  }
 }
 if ((i10 | 0) == 37) {
  return i3 | 0;
 } else if ((i10 | 0) == 38) {
  return i3 | 0;
 } else if ((i10 | 0) == 39) {
  return i3 | 0;
 } else if ((i10 | 0) == 41) {
  return i3 | 0;
 } else if ((i10 | 0) == 42) {
  return i3 | 0;
 } else if ((i10 | 0) == 46) {
  return i3 | 0;
 } else if ((i10 | 0) == 49) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
 i5 = i4 + 32 | 0;
 if (i1) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = i4;
  } else {
   if (i1) {
    i8 = i5 | 0;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 1](i9) | 0)) {
    i7 = i4;
    break;
   }
   i7 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i7, i2) | 0;
 i7 = i4 | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i2 | 0) == 0) {
  i4 = i7;
  i8 = i7;
  L23 : while (1) {
   do {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i5 = HEAP32[i8 + 44 >> 2] | 0;
     i1 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i5 | 0) == (i1 | 0)) {
      i3 = i4;
      i10 = 32;
      break L23;
     }
     if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
      i3 = i4;
      i10 = 35;
      break L23;
     }
    }
   } while (0);
   i1 = HEAP32[i8 + 16 >> 2] | 0;
   i5 = i1 | 0;
   if ((i1 | 0) == 0) {
    i3 = i4;
    i10 = 36;
    break;
   }
   i1 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i5, 0, 1) | 0;
   i4 = i1 ? i5 : i4;
   i8 = i5;
  }
  if ((i10 | 0) == 32) {
   return i3 | 0;
  } else if ((i10 | 0) == 35) {
   return i3 | 0;
  } else if ((i10 | 0) == 36) {
   return i3 | 0;
  }
 } else if ((i2 | 0) == 1) {
  i2 = i7;
  i8 = i7;
  L35 : while (1) {
   do {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i4 = HEAP32[i8 + 44 >> 2] | 0;
     i5 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i4 | 0) == (i5 | 0)) {
      i3 = i2;
      i10 = 37;
      break L35;
     }
     if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
      i3 = i2;
      i10 = 38;
      break L35;
     }
    }
   } while (0);
   i5 = HEAP32[i8 + 16 >> 2] | 0;
   i4 = i5 | 0;
   if ((i5 | 0) == 0) {
    i3 = i2;
    i10 = 39;
    break;
   }
   i5 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i4, 0) | 0;
   i2 = i5 ? i4 : i2;
   i8 = i4;
  }
  if ((i10 | 0) == 37) {
   return i3 | 0;
  } else if ((i10 | 0) == 38) {
   return i3 | 0;
  } else if ((i10 | 0) == 39) {
   return i3 | 0;
  }
 } else {
  i8 = i7;
  L47 : while (1) {
   do {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i2 = HEAP32[i8 + 44 >> 2] | 0;
     i4 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i2 | 0) == (i4 | 0)) {
      i3 = i7;
      i10 = 41;
      break L47;
     }
     if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
      i3 = i7;
      i10 = 42;
      break L47;
     }
    }
   } while (0);
   i4 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i3 = i7;
    i10 = 43;
    break;
   } else {
    i8 = i4 | 0;
   }
  }
  if ((i10 | 0) == 41) {
   return i3 | 0;
  } else if ((i10 | 0) == 42) {
   return i3 | 0;
  } else if ((i10 | 0) == 43) {
   return i3 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore23indexForVisiblePositionERKNS_15VisiblePositionERN3WTF6RefPtrINS_13ContainerNodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i8;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i11 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i4 + 8 | 0;
 i8 = i1;
 i12 = HEAP32[i8 >> 2] & -8 | i11 & 7;
 HEAP32[i8 >> 2] = i12;
 HEAP8[i1] = i12 & 255 & -9 | i11 & 8;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = __ZNK7WebCore4Node20containingShadowRootEv(i11) | 0;
 do {
  if ((i1 | 0) == 0) {
   i11 = HEAP32[i12 + 692 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i8 = i11 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i2 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = i13 + 8 | 0;
   i13 = i11 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  } else {
   i11 = i1 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = i2 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i1;
   if ((i8 | 0) == 0) {
    break;
   }
   i11 = i8 + 8 | 0;
   i8 = i11 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, HEAP32[i2 >> 2] | 0);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i7, i4);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i5, i12, i6, i7);
 i12 = i5 | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 + 8 | 0;
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 + 8 | 0;
   i7 = i6 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i12 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i5, 1) | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = i12;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = i5 + 8 | 0;
 i5 = i10 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i9 = i12;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  i9 = i12;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 i9 = i12;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore13canMergeListsEPNS_7ElementES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i11 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 do {
  if ((i11 | 0) != (i1 | 0)) {
   if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i9, 0, 1) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i10, 0, 1) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = __ZNK7WebCore4Node19rootEditableElementEv(i9) | 0;
 if ((i1 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i10) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i9) | 0;
 i11 = i4 | 0;
 HEAP32[i11 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i2 = i1 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i6, i4, (__ZNK7WebCore4Node9nodeIndexEv(i9) | 0) + 1 | 0, 0);
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 8 | 0;
   i4 = i11 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i9 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i10) | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i2 = i9 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i7, i5, __ZNK7WebCore4Node9nodeIndexEv(i10) | 0, 0);
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 + 8 | 0;
   i5 = i11 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i10 = __ZN7WebCore17isVisiblyAdjacentERKNS_8PositionES2_(i6, i7) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 + 8 | 0;
   i2 = i7 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i8 = i10;
  STACKTOP = i3;
  return i8 | 0;
 }
 i6 = i11 + 8 | 0;
 i11 = i6 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i8 = i10;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i8 = i10;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i8 = i10;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore30isNonTableCellHTMLBlockElementEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0;
 if ((i4 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 do {
  if ((i2 & 16 | 0) != 0) {
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i5 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i5 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCore30stringWithRebalancedWhitespaceERKN3WTF6StringEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i6 = HEAP32[i2 + 8 >> 2] | 0;
    i7 = i2;
   } else {
    i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i6 = i8;
    i7 = HEAP32[i5 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 >>> 0 < 16 >>> 0 ? 16 : i8;
   do {
    if ((i9 | 0) == 0) {
     i10 = 0;
    } else {
     if ((i9 | 0) < 0) {
      _WTFCrash();
     } else {
      i10 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i9 << 1) | 0) | 0;
      break;
     }
    }
   } while (0);
   i9 = 0;
   while (1) {
    HEAP16[i10 + (i9 << 1) >> 1] = HEAP16[i6 + (i9 << 1) >> 1] | 0;
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
   if ((i8 | 0) == 0) {
    i11 = 0;
   } else {
    i9 = i4 ^ 1;
    if (i3) {
     i12 = 0;
     i13 = 0;
     while (1) {
      i14 = i10 + (i12 << 1) | 0;
      i15 = HEAP16[i14 >> 1] | 0;
      L23 : do {
       if ((i15 << 16 >> 16 | 0) == 160 | (i15 << 16 >> 16 | 0) == 32 | (i15 << 16 >> 16 | 0) == 10 | (i15 << 16 >> 16 | 0) == 9) {
        do {
         if (!(i13 | (i12 | 0) == 0)) {
          if (!((i12 + 1 | 0) != (i8 | 0) | i9)) {
           break;
          }
          HEAP16[i14 >> 1] = 32;
          i16 = 1;
          break L23;
         }
        } while (0);
        HEAP16[i14 >> 1] = 160;
        i16 = 0;
       } else {
        i16 = 0;
       }
      } while (0);
      i14 = i12 + 1 | 0;
      if (i14 >>> 0 < i8 >>> 0) {
       i12 = i14;
       i13 = i16;
      } else {
       i11 = i8;
       break;
      }
     }
    } else {
     i13 = 0;
     i12 = 0;
     while (1) {
      i14 = i10 + (i13 << 1) | 0;
      i15 = HEAP16[i14 >> 1] | 0;
      L32 : do {
       if ((i15 << 16 >> 16 | 0) == 160 | (i15 << 16 >> 16 | 0) == 32 | (i15 << 16 >> 16 | 0) == 10 | (i15 << 16 >> 16 | 0) == 9) {
        do {
         if (!i12) {
          if (!((i13 + 1 | 0) != (i8 | 0) | i9)) {
           break;
          }
          HEAP16[i14 >> 1] = 32;
          i17 = 1;
          break L32;
         }
        } while (0);
        HEAP16[i14 >> 1] = 160;
        i17 = 0;
       } else {
        i17 = 0;
       }
      } while (0);
      i14 = i13 + 1 | 0;
      if (i14 >>> 0 < i8 >>> 0) {
       i13 = i14;
       i12 = i17;
      } else {
       i11 = i8;
       break;
      }
     }
    }
   }
   i8 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i8 >> 2] = 2;
   HEAP32[i8 + 4 >> 2] = i11;
   HEAP32[i8 + 8 >> 2] = i10;
   HEAP32[i8 + 12 >> 2] = 0;
   HEAP32[i8 + 16 >> 2] = 1;
   __ZN3WTF8fastFreeEPv(0);
   HEAP32[i1 >> 2] = i8;
   return;
  }
 } while (0);
 i10 = __ZN3WTF10StringImpl5emptyEv() | 0;
 i11 = i10 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 HEAP32[i1 >> 2] = i10;
 if (1) {
  return;
 }
 return;
}
function __ZN7WebCore20createTabSpanElementERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i7, i2, __ZN7WebCore9HTMLNames7spanTagE, 0);
 i14 = i7 | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 48 | 0);
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames9classAttrE, i8);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 32 | 0);
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames9styleAttrE, i9);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 24 | 0);
   __ZN7WebCore8Document21createEditingTextNodeERKN3WTF6StringE(i10, i2, i11);
   i9 = i10 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = i5 | 0;
   i5 = HEAP32[i11 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i15 = i9;
    break;
   }
   i8 = i5 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i15 = i9;
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    i15 = i9;
    break;
   }
  } else {
   i15 = i3;
  }
 } while (0);
 i3 = i12 | 0;
 HEAP32[i3 >> 2] = i15;
 i15 = i13 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i7 | 0, i12, i15) | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 i3 = i15 + 8 | 0;
 i15 = i3 | 0;
 i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = i2 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = i2 + 20 | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | HEAP8[i4] & 8;
 i4 = i2 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = i2 + 32 | 0;
 i5 = i1 + 32 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = i2 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i5 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i5 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i3;
 HEAP8[i2] = i3 & -3 | HEAP8[i5] & 2;
 return i1 | 0;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore37positionAfterContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN7WebCoreL20lastInSpecialElementERKNS_8PositionE(i2) | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i9 = HEAP32[i2 + 8 >> 2] | 0;
  i8 = i1 + 8 | 0;
  i10 = i8;
  i11 = HEAP32[i10 >> 2] & -8 | i9 & 7;
  HEAP32[i10 >> 2] = i11;
  HEAP8[i8] = i11 & 255 & -9 | i9 & 8;
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i7) | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i6, i5, (__ZNK7WebCore4Node9nodeIndexEv(i7) | 0) + 1 | 0, 0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   i8 = i11 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i5 = i6 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i2 | 0;
  } else {
   i9 = __ZNK7WebCore4Node19rootEditableElementEv(i11) | 0;
   i8 = i2 | 0;
   if ((i9 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i8 >> 2] | 0) | 0)) {
    i12 = i8;
    break;
   }
   if ((i3 | 0) != 0) {
    HEAP32[i3 >> 2] = i7;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i1 >> 2] = i8;
   HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = i1 + 8 | 0;
   i10 = i9;
   i13 = HEAP32[i10 >> 2] & -8 | i8 & 7;
   HEAP32[i10 >> 2] = i13;
   HEAP8[i9] = i13 & 255 & -9 | i8 & 8;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i6 = HEAP32[i1 >> 2] & -8 | i12 & 7;
 HEAP32[i1 >> 2] = i6;
 HEAP8[i2] = i6 & 255 & -9 | i12 & 8;
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i12 + 8 | 0;
 i12 = i5 | 0;
 i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore38positionBeforeContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN7WebCoreL21firstInSpecialElementERKNS_8PositionE(i2) | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i9 = HEAP32[i2 + 8 >> 2] | 0;
  i8 = i1 + 8 | 0;
  i10 = i8;
  i11 = HEAP32[i10 >> 2] & -8 | i9 & 7;
  HEAP32[i10 >> 2] = i11;
  HEAP8[i8] = i11 & 255 & -9 | i9 & 8;
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i7) | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i6, i5, __ZNK7WebCore4Node9nodeIndexEv(i7) | 0, 0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   i8 = i11 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i5 = i6 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i2 | 0;
  } else {
   i9 = __ZNK7WebCore4Node19rootEditableElementEv(i11) | 0;
   i8 = i2 | 0;
   if ((i9 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i8 >> 2] | 0) | 0)) {
    i12 = i8;
    break;
   }
   if ((i3 | 0) != 0) {
    HEAP32[i3 >> 2] = i7;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i1 >> 2] = i8;
   HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = i1 + 8 | 0;
   i10 = i9;
   i13 = HEAP32[i10 >> 2] & -8 | i8 & 7;
   HEAP32[i10 >> 2] = i13;
   HEAP8[i9] = i13 & 255 & -9 | i8 & 8;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i6 = HEAP32[i1 >> 2] & -8 | i12 & 7;
 HEAP32[i1 >> 2] = i6;
 HEAP8[i2] = i6 & 255 & -9 | i12 & 8;
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i12 + 8 | 0;
 i12 = i5 | 0;
 i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
   if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0) == 0) {
    break;
   }
   do {
    if ((i2 | 0) == 0) {
     _memset(i6 | 0, 0, 12) | 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
      __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i6, i2);
      break;
     }
     i8 = i5 | 0;
     HEAP32[i8 >> 2] = i2;
     i9 = i2 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 2);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i8 = i9 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, 1);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i10 = i8 + 8 | 0;
   i8 = i10 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i10 = i6 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i7, i4, (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0, 0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i4 = i5 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i7, 1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25visiblePositionBeforeNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
   if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0) == 0) {
    break;
   }
   do {
    if ((i2 | 0) == 0) {
     _memset(i6 | 0, 0, 12) | 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i2);
      break;
     }
     i8 = i5 | 0;
     HEAP32[i8 >> 2] = i2;
     i9 = i2 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 1);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i8 = i9 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, 1);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i10 = i8 + 8 | 0;
   i8 = i10 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i2) | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i10 = i6 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i7, i4, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, 0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i4 = i5 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i7, 1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13enclosingListEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i1);
  } else {
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i1;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i4, i3, 1);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 8 | 0;
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
 i3 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i4, 0) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i8 = i4 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
 i4 = i6 + 12 | 0;
 i7 = i6 + 16 | 0;
 i8 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
 i9 = i8 + 12 | 0;
 i10 = i8 + 16 | 0;
 i11 = i1 + 16 | 0;
 L16 : while (1) {
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i5 = 0;
   i13 = 28;
   break;
  }
  i1 = i12 | 0;
  i14 = (HEAP32[i12 + 12 >> 2] & 4 | 0) == 0;
  do {
   if (!i14) {
    i15 = HEAP32[i1 + 44 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     i13 = 22;
     break L16;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
      i13 = 22;
      break L16;
     }
    }
    if (i14) {
     break;
    }
    i15 = HEAP32[i1 + 44 >> 2] | 0;
    if ((i15 | 0) == (i6 | 0)) {
     i13 = 22;
     break L16;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
     i13 = 22;
     break L16;
    }
   }
  } while (0);
  if ((i1 | 0) == (i3 | 0)) {
   i5 = 0;
   i13 = 25;
   break;
  } else {
   i11 = i12 + 16 | 0;
  }
 }
 if ((i13 | 0) == 28) {
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i13 | 0) == 22) {
  i5 = i12;
  STACKTOP = i2;
  return i5 | 0;
 } else if ((i13 | 0) == 25) {
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore23indexForVisiblePositionEPNS_4NodeERKNS_15VisiblePositionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i1);
 i1 = i8 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i8 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i8 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i2;
 HEAP8[i13] = i2 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i7, i8);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i5, i9, i6, i7);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 8 | 0;
   i8 = i7 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i1 = i9 + 8 | 0;
   i7 = i1 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 8 | 0;
   i1 = i6 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i9 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i5, i3) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i9 | 0;
 }
 i3 = i5 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i9 | 0;
 } else {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i4;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = (i1 | 0) == 0;
 i3 = i1 + 12 | 0;
 do {
  if (i2) {
   i4 = 5;
  } else {
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i4 = 7;
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i4 = 7;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
    i4 = 5;
   } else {
    i4 = 7;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 5) {
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i4 = 7;
    break;
   }
   i5 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 7;
   } else {
    i6 = i5;
   }
  }
 } while (0);
 L8 : do {
  if ((i4 | 0) == 7) {
   i3 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i3 | 0) != 0 | i2) {
    if ((i3 | 0) == 0) {
     i7 = 0;
    } else {
     i6 = i3;
     break;
    }
    return i7 | 0;
   } else {
    i8 = i1;
   }
   while (1) {
    i3 = HEAP32[i8 + 16 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i7 = 0;
     break;
    }
    i5 = HEAP32[i3 + 28 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i8 = i3 | 0;
    } else {
     i6 = i5;
     break L8;
    }
   }
   return i7 | 0;
  }
 } while (0);
 L17 : while (1) {
  i8 = i6 + 12 | 0;
  if ((HEAP32[i8 >> 2] & 2 | 0) == 0) {
   i7 = i6;
   i4 = 27;
   break;
  }
  i1 = i6 + 36 | 0;
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i7 = i6;
   i4 = 28;
   break;
  }
  i2 = i6;
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i6) | 0)) {
   i7 = i6;
   i4 = 23;
   break;
  }
  do {
   if ((HEAP32[i8 >> 2] & 2 | 0) != 0) {
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i6) | 0)) {
     break;
    }
    if ((HEAP32[i8 >> 2] & 2 | 0) == 0) {
     break;
    }
    i5 = HEAP32[i1 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i6 = i5;
     continue L17;
    }
   }
  } while (0);
  i1 = HEAP32[i6 + 28 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i9 = i6;
  } else {
   i6 = i1;
   continue;
  }
  while (1) {
   i1 = HEAP32[i9 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i7 = 0;
    i4 = 26;
    break L17;
   }
   i8 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = i1 | 0;
   } else {
    i6 = i8;
    continue L17;
   }
  }
 }
 if ((i4 | 0) == 23) {
  return i7 | 0;
 } else if ((i4 | 0) == 27) {
  return i7 | 0;
 } else if ((i4 | 0) == 26) {
  return i7 | 0;
 } else if ((i4 | 0) == 28) {
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore4Node19rootEditableElementEv(i1) | 0;
 i4 = 0;
 i5 = i1;
 L4 : while (1) {
  i1 = i5 + 12 | 0;
  i6 = i5 + 32 | 0;
  if ((HEAP32[i1 >> 2] & 2048 | 0) == 0) {
   i7 = i6 | 0;
  } else {
   i7 = HEAP32[i6 >> 2] | 0;
  }
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2] & 1](i6) | 0)) {
    i2 = i4;
    i8 = 30;
    break;
   }
   L13 : do {
    if ((HEAP32[i1 >> 2] & 2 | 0) != 0) {
     i6 = HEAP32[i5 + 36 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i9 = (i4 | 0) == (i5 | 0);
     i10 = i4 + 28 | 0;
     i11 = i6;
     while (1) {
      if ((i11 | 0) == (i4 | 0)) {
       if (i9) {
        break L13;
       }
       i6 = HEAP32[i10 >> 2] | 0;
       if ((i6 | 0) != 0) {
        i11 = i6;
        continue;
       }
       i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i5) | 0;
      } else {
       i6 = HEAP32[i11 + 12 >> 2] | 0;
       i13 = i11 + 32 | 0;
       if ((i6 & 2048 | 0) == 0) {
        i14 = i13 | 0;
       } else {
        i14 = HEAP32[i13 >> 2] | 0;
       }
       if ((HEAP32[i14 >> 2] | 0) != 0) {
        i2 = i4;
        i8 = 32;
        break L4;
       }
       if ((i6 & 2 | 0) != 0) {
        i6 = HEAP32[i11 + 36 >> 2] | 0;
        if ((i6 | 0) != 0) {
         i11 = i6;
         continue;
        }
       }
       if ((i11 | 0) == (i5 | 0)) {
        break L13;
       }
       i6 = HEAP32[i11 + 28 >> 2] | 0;
       if ((i6 | 0) != 0) {
        i11 = i6;
        continue;
       }
       i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i5) | 0;
      }
      if ((i12 | 0) == 0) {
       break;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   if ((i3 | 0) == (i5 | 0)) {
    i2 = i4;
    i8 = 31;
    break;
   }
  }
  i1 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 0;
   i8 = 29;
   break;
  } else {
   i4 = i5;
   i5 = i1 | 0;
  }
 }
 if ((i8 | 0) == 30) {
  return i2 | 0;
 } else if ((i8 | 0) == 31) {
  return i2 | 0;
 } else if ((i8 | 0) == 32) {
  return i2 | 0;
 } else if ((i8 | 0) == 29) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore25isLastPositionBeforeTableERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i1;
 HEAP8[i9] = i1 & 255 & -9 | i6 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i3, i4, 1);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = i5 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 i1 = (HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i5 + 32 | 0;
 if (i1) {
  i12 = i6 | 0;
 } else {
  i12 = HEAP32[i6 >> 2] | 0;
 }
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i13 = 19;
  } else {
   if (i1) {
    i14 = i6 | 0;
   } else {
    i14 = HEAP32[i6 >> 2] | 0;
   }
   i5 = HEAP32[i14 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 184 >> 2] & 1](i5) | 0)) {
    i13 = 19;
    break;
   }
   if (!(__ZNK7WebCore8Position29atFirstEditingPositionForNodeEv(i3) | 0)) {
    i13 = 19;
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   i15 = i5;
   i16 = i5;
  }
 } while (0);
 if ((i13 | 0) == 19) {
  i15 = 0;
  i16 = HEAP32[i4 >> 2] | 0;
 }
 if ((i16 | 0) == 0) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 i4 = i16 + 8 | 0;
 i16 = i4 | 0;
 i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i11 = i15;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i1;
 HEAP8[i9] = i1 & 255 & -9 | i6 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i3, i4, 1);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = i5 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 i1 = (HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0;
 i6 = i5 + 32 | 0;
 if (i1) {
  i12 = i6 | 0;
 } else {
  i12 = HEAP32[i6 >> 2] | 0;
 }
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i13 = 19;
  } else {
   if (i1) {
    i14 = i6 | 0;
   } else {
    i14 = HEAP32[i6 >> 2] | 0;
   }
   i5 = HEAP32[i14 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 184 >> 2] & 1](i5) | 0)) {
    i13 = 19;
    break;
   }
   if (!(__ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i3) | 0)) {
    i13 = 19;
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   i15 = i5;
   i16 = i5;
  }
 } while (0);
 if ((i13 | 0) == 19) {
  i15 = 0;
  i16 = HEAP32[i4 >> 2] | 0;
 }
 if ((i16 | 0) == 0) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 i4 = i16 + 8 | 0;
 i16 = i4 | 0;
 i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i11 = i15;
  STACKTOP = i2;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i11 = i15;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i5 & 4 | 0) == 0) {
   i6 = i3;
   i7 = i5;
  } else {
   i8 = HEAP32[i3 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i8 | 0) != (i9 | 0)) {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
     i6 = i3;
     i7 = i5;
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
     i6 = i3;
     i7 = i5;
     break;
    }
   }
   if (__ZNK7WebCore8Position29atFirstEditingPositionForNodeEv(i1) | 0) {
    i4 = 1;
    return i4 | 0;
   } else {
    i9 = HEAP32[i2 >> 2] | 0;
    i6 = i9;
    i7 = HEAP32[i9 + 12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i2 = (i7 & 2048 | 0) == 0;
 i5 = i6 + 32 | 0;
 if (i2) {
  i10 = i5 | 0;
 } else {
  i10 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i7 & 1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2) {
  i11 = i5 | 0;
 } else {
  i11 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i5 + 20 >> 2] & 768 | 0) == 256) {
  i12 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i12 = HEAP32[i5 + 36 >> 2] | 0;
 }
 i5 = HEAP32[i12 + 44 >> 2] & 7;
 if ((i5 | 0) == 4 | (i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i6 + 36 >> 2] | 0;
 i6 = (i1 | 0) == 0;
 if (i6) {
  i13 = 0;
 } else {
  i13 = HEAP32[i1 + 4 >> 2] | 0;
 }
 if (i5 >>> 0 >= i13 >>> 0 | i6) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i1 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i13 + 2;
 do {
  if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 > i5 >>> 0) {
   i12 = i1 + 8 | 0;
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i14 = (HEAP16[(HEAP32[i12 >> 2] | 0) + (i5 << 1) >> 1] | 0) == 10;
    break;
   } else {
    i14 = (HEAP8[(HEAP32[i12 >> 2] | 0) + i5 | 0] | 0) == 10;
    break;
   }
  } else {
   i14 = 0;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i4 = i14;
  return i4 | 0;
 } else {
  HEAP32[i6 >> 2] = i13;
  i4 = i14;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 16 >> 2] | 0;
   i4 = 9;
  } else {
   i5 = i2;
   while (1) {
    i6 = i5 + 12 | 0;
    if ((i5 | 0) != 0) {
     if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
      i7 = i5;
      break L1;
     }
     if ((HEAP32[i5 + 36 >> 2] | 0) == 0) {
      i3 = i5;
      i4 = 9;
      break L1;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0)) {
      i3 = i5;
      i4 = 9;
      break L1;
     }
    }
    if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
     i3 = i5;
     i4 = 9;
     break L1;
    }
    i6 = HEAP32[i5 + 40 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = i5;
     i4 = 9;
     break;
    } else {
     i5 = i6;
    }
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 9) {
   if ((i3 | 0) == 0) {
    i8 = 0;
   } else {
    i7 = i3;
    break;
   }
   return i8 | 0;
  }
 } while (0);
 L14 : while (1) {
  if ((HEAP32[i7 + 12 >> 2] & 2 | 0) == 0) {
   i8 = i7;
   i4 = 23;
   break;
  }
  if ((HEAP32[i7 + 36 >> 2] | 0) == 0) {
   i8 = i7;
   i4 = 24;
   break;
  }
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 132 >> 2] & 1](i7) | 0)) {
   i8 = i7;
   i4 = 26;
   break;
  }
  i3 = HEAP32[i7 + 24 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i2 = HEAP32[i7 + 16 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i8 = 0;
    i4 = 22;
    break;
   } else {
    i7 = i2 | 0;
    continue;
   }
  } else {
   i9 = i3;
  }
  while (1) {
   i3 = i9 + 12 | 0;
   if ((i9 | 0) != 0) {
    if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
     i7 = i9;
     continue L14;
    }
    if ((HEAP32[i9 + 36 >> 2] | 0) == 0) {
     i7 = i9;
     continue L14;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 132 >> 2] & 1](i9) | 0)) {
     i7 = i9;
     continue L14;
    }
   }
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i7 = i9;
    continue L14;
   }
   i3 = HEAP32[i9 + 40 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i7 = i9;
    continue L14;
   } else {
    i9 = i3;
   }
  }
 }
 if ((i4 | 0) == 23) {
  return i8 | 0;
 } else if ((i4 | 0) == 24) {
  return i8 | 0;
 } else if ((i4 | 0) == 22) {
  return i8 | 0;
 } else if ((i4 | 0) == 26) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore23visiblePositionForIndexEiPNS_13ContainerNodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i7, i3, i2, 0, 1);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i2 = i1 + 8 | 0;
  i3 = i2;
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9 & -8;
  HEAP8[i2] = i9 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 }
 i9 = i7 + 12 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) > -1) {
  i10 = i2;
 } else {
  i2 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i2;
  i10 = i2;
 }
 i2 = HEAP32[i7 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i11 = HEAP32[i9 >> 2] | 0;
 }
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i6 >> 2] = i11;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i8, i5, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 8 | 0;
   i5 = i9 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i8, 1);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   i6 = i8 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i1 = i7 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13nextCandidateERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = i4 + 4 | 0;
 i7 = i2 + 8 | 0;
 do {
  if ((HEAP8[i7] & 8) == 0) {
   i8 = HEAP32[i7 >> 2] & 7;
   if (!((i8 | 0) == 2 | (i8 | 0) == 4)) {
    i9 = 3;
    break;
   }
   i10 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
  } else {
   i9 = 3;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i6 >> 2] = 0;
  i11 = i4 + 8 | 0;
  i9 = 8;
 } else {
  i8 = __ZNK7WebCore13ContainerNode9childNodeEj(i5, i10) | 0;
  HEAP32[i6 >> 2] = i8;
  i6 = i4 + 8 | 0;
  if ((i8 | 0) == 0) {
   i11 = i6;
   i9 = 8;
  } else {
   i12 = 0;
   i13 = i6;
  }
 }
 L10 : do {
  if ((i9 | 0) == 8) {
   do {
    if ((HEAP8[i7] & 8) == 0) {
     i6 = HEAP32[i7 >> 2] & 7;
     if (!((i6 | 0) == 2 | (i6 | 0) == 4)) {
      break;
     }
     i12 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
     i13 = i11;
     break L10;
    }
   } while (0);
   i12 = HEAP32[i2 + 4 >> 2] | 0;
   i13 = i11;
  }
 } while (0);
 HEAP32[i13 >> 2] = i12;
 while (1) {
  if (__ZNK7WebCore16PositionIterator5atEndEv(i4) | 0) {
   i9 = 16;
   break;
  }
  __ZN7WebCore16PositionIterator9incrementEv(i4);
  if (__ZNK7WebCore16PositionIterator11isCandidateEv(i4) | 0) {
   i9 = 15;
   break;
  }
 }
 if ((i9 | 0) == 16) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i12 = i1 + 8 | 0;
  i13 = i12;
  i11 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i11 & -8;
  HEAP8[i12] = i11 & 255 & -16;
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 15) {
  __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17previousCandidateERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 i6 = i4 + 4 | 0;
 i7 = i2 + 8 | 0;
 do {
  if ((HEAP8[i7] & 8) == 0) {
   i8 = HEAP32[i7 >> 2] & 7;
   if (!((i8 | 0) == 2 | (i8 | 0) == 4)) {
    i9 = 3;
    break;
   }
   i10 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
  } else {
   i9 = 3;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 if ((HEAP32[i5 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i6 >> 2] = 0;
  i11 = i4 + 8 | 0;
  i9 = 8;
 } else {
  i8 = __ZNK7WebCore13ContainerNode9childNodeEj(i5, i10) | 0;
  HEAP32[i6 >> 2] = i8;
  i6 = i4 + 8 | 0;
  if ((i8 | 0) == 0) {
   i11 = i6;
   i9 = 8;
  } else {
   i12 = 0;
   i13 = i6;
  }
 }
 L10 : do {
  if ((i9 | 0) == 8) {
   do {
    if ((HEAP8[i7] & 8) == 0) {
     i6 = HEAP32[i7 >> 2] & 7;
     if (!((i6 | 0) == 2 | (i6 | 0) == 4)) {
      break;
     }
     i12 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
     i13 = i11;
     break L10;
    }
   } while (0);
   i12 = HEAP32[i2 + 4 >> 2] | 0;
   i13 = i11;
  }
 } while (0);
 HEAP32[i13 >> 2] = i12;
 while (1) {
  if (__ZNK7WebCore16PositionIterator7atStartEv(i4) | 0) {
   i9 = 16;
   break;
  }
  __ZN7WebCore16PositionIterator9decrementEv(i4);
  if (__ZNK7WebCore16PositionIterator11isCandidateEv(i4) | 0) {
   i9 = 15;
   break;
  }
 }
 if ((i9 | 0) == 15) {
  __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i4);
  STACKTOP = i3;
  return;
 } else if ((i9 | 0) == 16) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i9 = i1 + 8 | 0;
  i1 = i9;
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i4 & -8;
  HEAP8[i9] = i4 & 255 & -16;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i7 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i7 & 8;
 i7 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i10 = i1 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i1 = i2;
 i11 = HEAP32[i1 >> 2] & -8 | i10 & 7;
 HEAP32[i1 >> 2] = i11;
 HEAP8[i2] = i11 & 255 & -9 | i10 & 8;
 i10 = __ZN7WebCore16comparePositionsERKNS_8PositionES2_(i4, i5) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i4 = i7 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i5 + 8 | 0;
 i5 = i6 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i10 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 & 4 | 0) != 0) {
   i4 = i1 + 32 | 0;
   if ((i3 & 2048 | 0) == 0) {
    i5 = i4 | 0;
   } else {
    i5 = HEAP32[i4 >> 2] | 0;
   }
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    break;
   }
   if ((HEAP32[i4 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   i2 = i1;
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
 i3 = i1 + 12 | 0;
 i4 = i1 + 16 | 0;
 i6 = i5;
 L18 : while (1) {
  i5 = i6 | 0;
  i7 = HEAP32[i6 + 12 >> 2] | 0;
  i8 = (i7 & 4 | 0) == 0;
  do {
   if (!i8) {
    i9 = i6 + 32 | 0;
    if ((i7 & 2048 | 0) == 0) {
     i10 = i9 | 0;
    } else {
     i10 = HEAP32[i9 >> 2] | 0;
    }
    i9 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
       break;
      }
      if ((HEAP32[i9 + 24 >> 2] & 32 | 0) != 0) {
       break L18;
      }
     }
    } while (0);
    if (i8) {
     break;
    }
    i9 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i9 | 0) == (i1 | 0)) {
     break L18;
    }
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     break L18;
    }
   }
  } while (0);
  i5 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i2 = 0;
   i11 = 29;
   break;
  } else {
   i6 = i5;
  }
 }
 if ((i11 | 0) == 29) {
  return i2 | 0;
 }
 i2 = i6;
 return i2 | 0;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore10isListItemEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = i3 | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i4 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   i7 = HEAP32[i5 + 12 >> 2] | 0;
   do {
    if ((i7 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i2 = 1;
     } else {
      break;
     }
     return i2 | 0;
    }
   } while (0);
   i6 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   do {
    if ((i7 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i2 = 1;
     } else {
      break;
     }
     return i2 | 0;
    }
   } while (0);
   i6 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   if ((i7 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i3 = i1 + 32 | 0;
 if (i4) {
  i8 = i3 | 0;
 } else {
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i4) {
  i9 = i3 | 0;
 } else {
  i9 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 104 >> 2] & 1](i3) | 0;
 return i2 | 0;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if ((i3 | 0) == 1) {
   i7 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   }
   if ((i7 | 0) == 0) {
    i9 = i8;
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i10, 0, 1) | 0) {
     if (FUNCTION_TABLE_ii[i2 & 1](i10) | 0) {
      i6 = i10;
      i11 = 20;
      break;
     }
     if ((i10 | 0) == (i7 | 0)) {
      i6 = 0;
      i11 = 15;
      break;
     }
    }
    i8 = HEAP32[i10 + 16 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i6 = 0;
     i11 = 19;
     break;
    } else {
     i10 = i8 | 0;
    }
   }
   if ((i11 | 0) == 19) {
    return i6 | 0;
   } else if ((i11 | 0) == 20) {
    return i6 | 0;
   } else if ((i11 | 0) == 15) {
    return i6 | 0;
   }
  } else {
   i9 = i5;
  }
 } while (0);
 while (1) {
  if (FUNCTION_TABLE_ii[i2 & 1](i9) | 0) {
   i6 = i9;
   i11 = 16;
   break;
  }
  if ((i9 | 0) == 0) {
   i6 = 0;
   i11 = 13;
   break;
  }
  i5 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 0;
   i11 = 17;
   break;
  } else {
   i9 = i5 | 0;
  }
 }
 if ((i11 | 0) == 16) {
  return i6 | 0;
 } else if ((i11 | 0) == 17) {
  return i6 | 0;
 } else if ((i11 | 0) == 13) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i1;
 HEAP8[i9] = i1 & 255 & -9 | i6 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i3, i4, 1);
 i4 = __ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE(i3) | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 8 | 0;
   i1 = i3 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i2;
  return i4 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore17isVisiblyAdjacentERKNS_8PositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1, 1);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i6, i2, 1);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
 i2 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 8 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 8 | 0;
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return i2 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return i2 | 0;
}
function __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = (i5 | 0) == 0;
 i6 = i2 | 0;
 i2 = i1;
 L7 : while (1) {
  if (i3) {
   i7 = 6;
  } else {
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0) {
    i7 = 6;
   }
  }
  if ((i7 | 0) == 6) {
   i7 = 0;
   do {
    if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
     i1 = HEAP32[i2 + 44 >> 2] | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     if ((i1 | 0) == (i8 | 0)) {
      i4 = i2;
      i7 = 16;
      break L7;
     }
     if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
      i4 = i2;
      i7 = 17;
      break L7;
     }
    }
   } while (0);
   if ((i2 | 0) == (i5 | 0)) {
    i4 = 0;
    i7 = 14;
    break;
   }
  }
  i8 = HEAP32[i2 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i4 = 0;
   i7 = 18;
   break;
  } else {
   i2 = i8 | 0;
  }
 }
 if ((i7 | 0) == 14) {
  return i4 | 0;
 } else if ((i7 | 0) == 18) {
  return i4 | 0;
 } else if ((i7 | 0) == 17) {
  return i4 | 0;
 } else if ((i7 | 0) == 16) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore13isListElementEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i3) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZN7WebCore16isEmptyTableCellEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  i4 = (HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0;
  i5 = i3 + 32 | 0;
  if (i4) {
   i6 = i5 | 0;
  } else {
   i6 = HEAP32[i5 >> 2] | 0;
  }
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   break;
  }
  i1 = HEAP32[i3 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 0;
   i7 = 26;
   break;
  } else {
   i3 = i1 | 0;
  }
 }
 if ((i7 | 0) == 26) {
  return i2 | 0;
 }
 if (i4) {
  i8 = i5 | 0;
 } else {
  i8 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 20 >> 2] & 4096 | 0) == 0) {
   i9 = i5;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 1](i5) | 0) {
    i9 = i5;
    break;
   }
   i8 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i2 = 0;
   } else {
    i9 = i8 | 0;
    break;
   }
   return i2 | 0;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 188 >> 2] & 1](i9) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = HEAP32[i9 + 28 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i5 + 20 >> 2] & 4096 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 1](i5) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i5 + 16 >> 2] | 0) == 0;
 return i2 | 0;
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
function __ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
 do {
  if ((i6 | 0) != (i7 | 0)) {
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    i5 = 0;
    STACKTOP = i2;
    return i5 | 0;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    break;
   } else {
    i5 = 0;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 16 | 0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i1, i4) | 0) >> 2] | 0, H_BASE + 8 | 0) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i3;
  STACKTOP = i2;
  return i5 | 0;
 }
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i5 = i3;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i7 >> 2] = i1;
  i5 = i3;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
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
function __ZN7WebCore35isRenderedAsNonInlineTableImageOrHREPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = i3;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 1](i3) | 0) {
   if ((HEAP32[i3 + 20 >> 2] & 1024 | 0) == 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 1](i3) | 0;
 i4 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if (i1) {
   if ((i4 & 1024 | 0) == 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 if ((i4 & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i4 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZN7WebCore16comparePositionsERKNS_8PositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 i5 = __ZN7WebCore15commonTreeScopeEPNS_4NodeES1_(i4, __ZNK7WebCore8Position13containerNodeEv(i2) | 0) | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i5, __ZNK7WebCore8Position13containerNodeEv(i1) | 0) | 0;
 i7 = (i4 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i1) | 0);
 if (i7) {
  i8 = 0;
 } else {
  i8 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i1) | 0;
 }
 i1 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i5, __ZNK7WebCore8Position13containerNodeEv(i2) | 0) | 0;
 i5 = (i1 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i2) | 0);
 if (i5) {
  i9 = 0;
 } else {
  i9 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i2) | 0;
 }
 i2 = (i4 | 0) != (i1 | 0);
 i10 = i3 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i4, i8, i1, i9, i10) | 0;
 i6 = i11 << 16 >> 16 != 0 ? i11 << 16 >> 16 : i2 | i7 ? (i2 ^ 1) << 31 >> 31 : i5 & 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore16isSpecialElementEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 & 16 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i3 & 512 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i4 = i1 + 32 | 0;
 if ((i3 & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = (HEAP32[i4 + 20 >> 2] & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if ((HEAP32[i6 + 48 >> 2] & 31 | 0) == 6) {
  i2 = 1;
  return i2 | 0;
 }
 if (i5) {
  i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 7) {
  i2 = 1;
  return i2 | 0;
 }
 if (i5) {
  i8 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 48 >> 2] & 100663296 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (i5) {
  i9 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i9 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i2 = (HEAP32[i9 + 48 >> 2] & 29360128 | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i3 | 0) == 1) {
  i5 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i1, 0) | 0;
 } else {
  i5 = 0;
 }
 i3 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i3 | 0) == 0 | (i3 | 0) == (i4 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = (i5 | 0) == 0;
 i7 = 0;
 i8 = i3;
 while (1) {
  if (i1) {
   i9 = 7;
  } else {
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i8, 0, 1) | 0) {
    i9 = 7;
   } else {
    i10 = i7;
   }
  }
  if ((i9 | 0) == 7) {
   i9 = 0;
   i3 = FUNCTION_TABLE_ii[i2 & 1](i8) | 0;
   i11 = i3 ? i8 : i7;
   if ((i8 | 0) == (i5 | 0)) {
    i6 = i11;
    i9 = 12;
    break;
   } else {
    i10 = i11;
   }
  }
  i11 = HEAP32[i8 + 16 >> 2] | 0;
  i3 = i11 | 0;
  if ((i11 | 0) == 0 | (i3 | 0) == (i4 | 0)) {
   i6 = i10;
   i9 = 11;
   break;
  } else {
   i7 = i10;
   i8 = i3;
  }
 }
 if ((i9 | 0) == 11) {
  return i6 | 0;
 } else if ((i9 | 0) == 12) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore11isTableCellEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i1 + 32 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 188 >> 2] & 1](i3) | 0;
  return i5 | 0;
 }
 i3 = (i2 & 4 | 0) == 0;
 if (i3) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
 if ((i2 | 0) == (i4 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i3) {
    i5 = i6;
   } else {
    break;
   }
   return i5 | 0;
  } else {
   if (i3) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i5 | 0;
}
function __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i3 | 0) == 0) {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0);
 }
 i3 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
 i1 = i4 + 32 | 0;
 if (i3) {
  i6 = i1 | 0;
 } else {
  i6 = HEAP32[i1 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = i4;
  } else {
   if (i3) {
    i8 = i1 | 0;
   } else {
    i8 = HEAP32[i1 >> 2] | 0;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 1](i9) | 0)) {
    i7 = i4;
    break;
   }
   i7 = HEAP32[i4 + 16 >> 2] | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i5 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7, 0, 1) | 0;
  return i5 | 0;
 } else if ((i2 | 0) == 1) {
  i5 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i7, 0) | 0;
  return i5 | 0;
 } else {
  i5 = 0;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore20createTabSpanElementERNS_8DocumentERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i6, i2, i3);
 i3 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN7WebCore20createTabSpanElementERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i2 = i3 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 + 8 | 0;
 i5 = i7 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) != 0) {
   i4 = (i3 & 2048 | 0) == 0;
   i5 = i1 + 32 | 0;
   if (i4) {
    i6 = i5 | 0;
   } else {
    i6 = HEAP32[i5 >> 2] | 0;
   }
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    if ((i1 | 0) == 0) {
     i7 = 0;
    } else {
     break;
    }
    return i7 | 0;
   }
   if (i4) {
    i8 = i5 | 0;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
   }
   i5 = HEAP32[i8 >> 2] | 0;
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 568 >> 2] & 1](i5) | 0;
   return i7 | 0;
  }
 } while (0);
 i8 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 1](i1) | 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i2 >> 2] & 2 | 0) != 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    break;
   }
   i7 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0;
   return i7 | 0;
  }
 } while (0);
 i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) & 1 ^ 1;
 return i7 | 0;
}
function __ZN7WebCore22lowestEditableAncestorEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 L3 : while (1) {
  if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0) {
   i4 = 3;
   break;
  }
  do {
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) != 0) {
    i1 = HEAP32[i3 + 44 >> 2] | 0;
    i5 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i1 | 0) == (i5 | 0)) {
     i2 = 0;
     i4 = 11;
     break L3;
    }
    if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
     i2 = 0;
     i4 = 12;
     break L3;
    }
   }
  } while (0);
  i5 = HEAP32[i3 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i2 = 0;
   i4 = 13;
   break;
  } else {
   i3 = i5 | 0;
  }
 }
 if ((i4 | 0) == 3) {
  i2 = __ZNK7WebCore4Node19rootEditableElementEv(i3) | 0;
  return i2 | 0;
 } else if ((i4 | 0) == 11) {
  return i2 | 0;
 } else if ((i4 | 0) == 12) {
  return i2 | 0;
 } else if ((i4 | 0) == 13) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore24isRichlyEditablePositionERKNS_8PositionENS_12EditableTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = (HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0;
 i5 = i3 + 32 | 0;
 if (i1) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = i3;
  } else {
   if (i1) {
    i8 = i5 | 0;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 1](i9) | 0)) {
    i7 = i3;
    break;
   }
   i7 = HEAP32[i3 + 16 >> 2] | 0;
  }
 } while (0);
 if ((i2 | 0) == 1) {
  i4 = __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i7, 1) | 0;
  return i4 | 0;
 } else if ((i2 | 0) == 0) {
  i4 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7, 1, 1) | 0;
  return i4 | 0;
 } else {
  i4 = 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11tabSpanNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   if ((HEAP32[i1 + 12 >> 2] & 1 | 0) == 0) {
    i2 = 0;
    break;
   }
   i3 = i1 + 16 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i2 = 0;
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    i2 = 0;
    break;
   }
   i5 = HEAP32[i4 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
   if ((i5 | 0) != (i6 | 0)) {
    if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
     i2 = 0;
     break;
    }
    if ((HEAP32[i5 + 16 >> 2] | 0) != (HEAP32[i6 + 16 >> 2] | 0)) {
     i2 = 0;
     break;
    }
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0)) {
    i2 = 0;
    break;
   }
   i2 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i2 = 0;
    return i2 | 0;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore39positionOutsideContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((__ZN7WebCoreL21firstInSpecialElementERKNS_8PositionE(i2) | 0) != 0) {
  __ZN7WebCore38positionBeforeContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i1, i2, i3);
  return;
 }
 if ((__ZN7WebCoreL20lastInSpecialElementERKNS_8PositionE(i2) | 0) != 0) {
  __ZN7WebCore37positionAfterContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i1, i2, i3);
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i3 = HEAP32[i1 >> 2] & -8 | i4 & 7;
 HEAP32[i1 >> 2] = i3;
 HEAP8[i2] = i3 & 255 & -9 | i4 & 8;
 return;
}
function __ZN7WebCore14isTableElementEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = i1 + 32 | 0;
 if ((i3 & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = (HEAP32[i4 + 20 >> 2] & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if ((HEAP32[i6 + 48 >> 2] & 31 | 0) == 6) {
  i2 = 1;
  return i2 | 0;
 }
 if (i5) {
  i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i2 = (HEAP32[i7 + 48 >> 2] & 31 | 0) == 7;
 return i2 | 0;
}
function __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = (HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0;
 i5 = i3 + 32 | 0;
 if (i1) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = i3;
  } else {
   if (i1) {
    i8 = i5 | 0;
   } else {
    i8 = HEAP32[i5 >> 2] | 0;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 1](i9) | 0)) {
    i7 = i3;
    break;
   }
   i7 = HEAP32[i3 + 16 >> 2] | 0;
  }
 } while (0);
 i4 = __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i7, i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i2 = 0;
    return i2 | 0;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 48 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i2 + 332 >> 2] | 0) + 464 >> 2] | 0) + 112 >> 2] | 0;
 if ((i6 | 0) == 1) {
  __ZN7WebCore20HTMLParagraphElement6createERNS_8DocumentE(i5, i2);
  i7 = i5 | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 0) {
  __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i4, i2);
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20isTableStructureNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 i3 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 188 >> 2] & 1](i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 200 >> 2] & 1](i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 204 >> 2] & 1](i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 192 >> 2] & 1](i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1;
 i5 = i2;
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 do {
  if ((i6 | 0) != (i1 | 0)) {
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore7Element23hasEquivalentAttributesEPKS0_(i4, i5) | 0;
 return i3 | 0;
}
function __ZN7WebCore7isBlockEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1024 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 1](i4) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore20createTabSpanElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore20createTabSpanElementERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
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
function __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 1](i1) | 0) {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] & 2 | 0) != 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    break;
   }
   i2 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0;
   return i2 | 0;
  }
 } while (0);
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) & 1 ^ 1;
 return i2 | 0;
}
function __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i1) | 0, 1) | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
 return i3 | 0;
}
function __ZN7WebCore14isNodeRenderedEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i5 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i5 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i2 = (HEAP32[i5 + 40 >> 2] & 6144 | 0) == 0;
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
function __ZN7WebCore17createHTMLElementERNS_8DocumentERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF8nullAtomE, i3, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i1, i5, i2, 0, 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 32 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i4 + 24 >> 2] & 32 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore8isInlineEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i2 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 1024 | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((HEAP32[i4 + 12 >> 2] & 516 | 0) == 516) {
   break;
  }
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 6;
   break;
  } else {
   i4 = i2 | 0;
  }
 }
 if ((i5 | 0) == 6) {
  return i3 | 0;
 }
 i3 = i4;
 return i3 | 0;
}
function __ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = 0;
  i5 = i2;
 }
 while (1) {
  i2 = ((__ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i5) | 0) & 1) + i4 | 0;
  i1 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   break;
  } else {
   i4 = i2;
   i5 = i1 | 0;
  }
 }
 return i3 | 0;
}
function __ZN7WebCore22outermostEnclosingListEPNS_4NodeES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore13enclosingListEPNS_4NodeE(i1) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i3;
 }
 while (1) {
  i3 = __ZN7WebCore13enclosingListEPNS_4NodeE(i5 | 0) | 0;
  if ((i3 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
   i4 = i5;
   break;
  } else {
   i5 = i3;
  }
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
function __ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 1](i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore12isAtomicNodeEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore22nonBreakingSpaceStringEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 72 | 0] | 0) {
  i1 = HEAP32[H_BASE + 80 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(4) | 0;
  __ZN3WTF6StringC1EPKtj(i2, H_BASE + 64, 1);
  HEAP32[H_BASE + 80 >> 2] = i2;
  HEAP8[H_BASE + 72 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore26createUnorderedListElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore16HTMLUListElement6createERNS_8DocumentE(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24createOrderedListElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore16HTMLOListElement6createERNS_8DocumentE(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21createListItemElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore13HTMLLIElement6createERNS_8DocumentE(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18createBreakElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore13HTMLBRElement6createERNS_8DocumentE(i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i1, i3, i2, 0, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15highestAncestorEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i2 = i1 | 0;
  }
 }
 return i2 | 0;
}
function __ZN7WebCore38isFirstVisiblePositionInSpecialElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 return (__ZN7WebCoreL21firstInSpecialElementERKNS_8PositionE(i1) | 0) != 0 | 0;
}
function __ZN7WebCore37isLastVisiblePositionInSpecialElementERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 return (__ZN7WebCoreL20lastInSpecialElementERKNS_8PositionE(i1) | 0) != 0 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE","_strlen","__ZN7WebCore7isBlockEPKNS_4NodeE","__ZN7WebCoreL21firstInSpecialElementERKNS_8PositionE","__ZN7WebCore40firstEditablePositionAfterPositionInRootERKNS_8PositionEPNS_4NodeE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore39positionOutsideContainingSpecialElementERKNS_8PositionEPPNS_4NodeE","__ZN7WebCore16previousLeafNodeEPKNS_4NodeE","__ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE","__ZN7WebCore17isVisiblyAdjacentERKNS_8PositionES2_","__ZN7WebCore16isSpecialElementEPKNS_4NodeE","__ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE","__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE","__ZN7WebCore35isRenderedAsNonInlineTableImageOrHREPKNS_4NodeE","__ZN7WebCore41adjustedSelectionStartForStyleComputationERKNS_16VisibleSelectionE","__ZN7WebCore20createTabSpanElementERNS_8DocumentERKN3WTF6StringE","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZN7WebCore12isAtomicNodeEPKNS_4NodeE","__ZN7WebCore13nextCandidateERKNS_8PositionE","__ZN7WebCore13isListElementEPNS_4NodeE","__ZN7WebCore15highestAncestorEPNS_4NodeE","__ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE","__ZN7WebCore25isFirstPositionAfterTableERKNS_15VisiblePositionE","__ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE","__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE","__ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16isEmptyTableCellEPKNS_4NodeE","__ZN7WebCore23isAtUnsplittableElementERKNS_8PositionE","__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE","__ZN7WebCore17createHTMLElementERNS_8DocumentERKN3WTF12AtomicStringE","__ZN7WebCore11isTableCellEPKNS_4NodeE","__ZN7WebCore24isRichlyEditablePositionERKNS_8PositionENS_12EditableTypeE","__ZN7WebCore38isFirstVisiblePositionInSpecialElementERKNS_8PositionE","__ZN7WebCore10isListItemEPKNS_4NodeE","__ZN7WebCore13canMergeListsEPNS_7ElementES1_","__ZN7WebCore22lowestEditableAncestorEPNS_4NodeE","__ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCore14isNodeRenderedEPKNS_4NodeE","__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_","__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_","__ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE","__ZN7WebCore30selectionForParagraphIterationERKNS_16VisibleSelectionE","__ZN7WebCore14isTableElementEPNS_4NodeE","__ZN7WebCore37positionAfterContainingSpecialElementERKNS_8PositionEPPNS_4NodeE","__ZN7WebCore30stringWithRebalancedWhitespaceERKN3WTF6StringEbb","__ZN7WebCore12nextLeafNodeEPKNS_4NodeE","__ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE","__ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE","__ZN7WebCore13enclosingListEPNS_4NodeE","__ZN7WebCore18enclosingListChildEPNS_4NodeE","__ZN7WebCore38positionBeforeContainingSpecialElementERKNS_8PositionEPPNS_4NodeE","__ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE","__ZN7WebCore22nonBreakingSpaceStringEv","_memset","__ZN7WebCore40lastEditablePositionBeforePositionInRootERKNS_8PositionEPNS_4NodeE","__ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE","__ZN7WebCore22outermostEnclosingListEPNS_4NodeES1_","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore21createListItemElementERNS_8DocumentE","__ZN7WebCore37isLastVisiblePositionInSpecialElementERKNS_8PositionE","__ZN7WebCore23indexForVisiblePositionERKNS_15VisiblePositionERN3WTF6RefPtrINS_13ContainerNodeEEE","__ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE","__ZN7WebCore25visiblePositionBeforeNodeEPNS_4NodeE","__ZN7WebCore30isNonTableCellHTMLBlockElementEPKNS_4NodeE","__ZN7WebCore22enclosingAnchorElementERKNS_8PositionE","__ZN7WebCore11tabSpanNodeEPKNS_4NodeE","__ZN7WebCore20createTabSpanElementERNS_8DocumentE","__ZN7WebCore14caretMinOffsetEPKNS_4NodeE","__ZN7WebCore18createBreakElementERNS_8DocumentE","__ZN7WebCore20isTableStructureNodeEPKNS_4NodeE","__ZN7WebCore22positionOutsideTabSpanERKNS_8PositionE","__ZN7WebCore22enclosingEmptyListItemERKNS_15VisiblePositionE","__ZN7WebCore17previousCandidateERKNS_8PositionE","__ZN7WebCore24createOrderedListElementERNS_8DocumentE","__ZN7WebCore16isMailBlockquoteEPKNS_4NodeE","__ZN7WebCore25isLastPositionBeforeTableERKNS_15VisiblePositionE","__ZN7WebCore18isBlockFlowElementEPKNS_4NodeE","__ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE","__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE","__ZN7WebCore26createUnorderedListElementERNS_8DocumentE","__ZN7WebCore13isTabSpanNodeEPKNS_4NodeE","__ZN7WebCore28isNodeVisiblyContainedWithinEPNS_4NodeEPKNS_5RangeE","__ZN7WebCore45visiblePositionForIndexUsingCharacterIteratorEPNS_4NodeEi","__ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_","__ZN7WebCore16comparePositionsERKNS_8PositionES2_","__ZN7WebCore20createTabSpanElementERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE","__ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE","__ZN7WebCore23visiblePositionForIndexEiPNS_13ContainerNodeE","__ZN7WebCore23indexForVisiblePositionEPNS_4NodeERKNS_15VisiblePositionEb","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore18enclosingTableCellERKNS_8PositionE","__ZN7WebCore8isInlineEPKNS_4NodeE","_memcpy","__ZN7WebCoreL20lastInSpecialElementERKNS_8PositionE","__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE","__ZN7WebCore30unsplittableElementForPositionERKNS_8PositionE"]

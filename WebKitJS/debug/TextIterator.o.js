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
H_BASE = parentModule["_malloc"](312 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 312;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8BitStackC1Ev;
var __ZN7WebCore8BitStackD1Ev;
var __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE;
var __ZN7WebCore12TextIteratorD1Ev;
var __ZN7WebCore31SimplifiedBackwardsTextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE;
var __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE;
var __ZN7WebCore26BackwardsCharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE;
var __ZN7WebCore17WordAwareIteratorC1EPKNS_5RangeE;
var __ZN7WebCore17WordAwareIteratorD1Ev;
/* memory initializer */ allocate([64,99,111,108,108,97,116,105,111,110,61,115,101,97,114,99,104,0,0,0,0,0,0,0,105,109,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames8roleAttrE=env.__ZN7WebCore9HTMLNames8roleAttrE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var __ZN7WebCore9HTMLNames10listingTagE=env.__ZN7WebCore9HTMLNames10listingTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames8meterTagE=env.__ZN7WebCore9HTMLNames8meterTagE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames11progressTagE=env.__ZN7WebCore9HTMLNames11progressTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames9legendTagE=env.__ZN7WebCore9HTMLNames9legendTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 160 | 0;
 i12 = i6 + 168 | 0;
 i13 = i6 + 176 | 0;
 i14 = i6 + 184 | 0;
 i15 = i6 + 192 | 0;
 i16 = i6 + 200 | 0;
 i17 = i6 + 208 | 0;
 i18 = i6 + 216 | 0;
 i19 = i6 + 224 | 0;
 i20 = i6 + 232 | 0;
 i21 = i6 + 240 | 0;
 i22 = i6 + 256 | 0;
 i23 = i6 + 272 | 0;
 i24 = i6 + 288 | 0;
 i25 = i6 + 304 | 0;
 i26 = i6 + 312 | 0;
 i27 = i6 + 320 | 0;
 i28 = i6 + 328 | 0;
 i29 = i6 + 336 | 0;
 i30 = i6 + 344 | 0;
 i31 = i6 + 352 | 0;
 i32 = i6 + 360 | 0;
 i33 = i6 + 368 | 0;
 i34 = i6 + 376 | 0;
 i35 = i6 + 384 | 0;
 i36 = i6 + 392 | 0;
 __ZN7WebCore8Document11createRangeEv(i9, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i37 = i9 | 0;
 i9 = HEAP32[i37 >> 2] | 0;
 HEAP32[i37 >> 2] = 0;
 i37 = i4 + i3 | 0;
 __ZN7WebCore15rangeOfContentsERNS_4NodeE(i11, i2 | 0);
 i2 = i11 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i10, HEAP32[i2 >> 2] | 0, i5 & 1);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 + 52 >> 2] | 0;
 L7 : do {
  if ((i4 | i3 | 0) == 0) {
   do {
    if ((i5 | 0) != 0) {
     if ((HEAP8[i10 + 133 | 0] & 1) != 0) {
      break;
     }
     i38 = i10 + 52 | 0;
     i39 = 10;
     break L7;
    }
   } while (0);
   __ZNK7WebCore12TextIterator5rangeEv(i12, i10);
   i11 = i12 | 0;
   i2 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = i2 + 8 | 0;
   i40 = HEAP32[i11 >> 2] | 0;
   i41 = i13 | 0;
   HEAP32[i41 >> 2] = i40;
   if ((i40 | 0) != 0) {
    i42 = i40 + 8 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   }
   i42 = i14 | 0;
   HEAP32[i42 >> 2] = 0;
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i13, 0, i42);
   i42 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i41 = i42 + 8 | 0;
     i40 = i41 | 0;
     i43 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
     HEAP32[i40 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
    }
   } while (0);
   i42 = HEAP32[i11 >> 2] | 0;
   i41 = i15 | 0;
   HEAP32[i41 >> 2] = i42;
   if ((i42 | 0) != 0) {
    i43 = i42 + 8 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
   }
   i43 = i16 | 0;
   HEAP32[i43 >> 2] = 0;
   __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i15, 0, i43);
   i43 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i41 = i43 + 8 | 0;
     i42 = i41 | 0;
     i40 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i40;
     if ((i40 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 >> 2] = i9;
   i44 = i2;
   i45 = 0;
  } else {
   if ((i5 | 0) == 0) {
    i46 = 0;
    i39 = 151;
   } else {
    i38 = i10 + 52 | 0;
    i39 = 10;
   }
  }
 } while (0);
 do {
  if ((i39 | 0) == 10) {
   i5 = i10 + 133 | 0;
   i15 = i10 + 72 | 0;
   i16 = i17 | 0;
   i13 = i29 | 0;
   i14 = i30 | 0;
   i12 = i28 | 0;
   i43 = i10 + 68 | 0;
   i11 = i10 + 60 | 0;
   i41 = i10 + 76 | 0;
   i40 = i7 | 0;
   i42 = i8 | 0;
   i47 = i22 | 0;
   i48 = i23 | 0;
   i49 = i22 + 4 | 0;
   i50 = i23 + 4 | 0;
   i51 = i23 + 8 | 0;
   i52 = i22 + 8 | 0;
   i53 = i52;
   i54 = i24 | 0;
   i55 = i21 | 0;
   i56 = i25 | 0;
   i57 = i26 | 0;
   i58 = i18 | 0;
   i59 = i19 | 0;
   i60 = i20 | 0;
   i61 = 0;
   i62 = 0;
   i63 = 0;
   i64 = 0;
   while (1) {
    if ((HEAP8[i5] & 1) != 0) {
     i39 = 150;
     break;
    }
    i65 = HEAP32[i15 >> 2] | 0;
    __ZNK7WebCore12TextIterator5rangeEv(i17, i10);
    i66 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    do {
     if ((i61 | 0) != 0) {
      i67 = i61 | 0;
      i68 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
      if ((i68 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i61);
       __ZN3WTF8fastFreeEPv(i61);
      } else {
       HEAP32[i67 >> 2] = i68;
      }
      i68 = HEAP32[i16 >> 2] | 0;
      if ((i68 | 0) == 0) {
       break;
      }
      i67 = i68 | 0;
      i69 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
      if ((i69 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i68);
       __ZN3WTF8fastFreeEPv(i68);
       break;
      } else {
       HEAP32[i67 >> 2] = i69;
       break;
      }
     }
    } while (0);
    if ((i63 | 0) > (i3 | 0)) {
     i70 = 0;
    } else {
     i70 = (i65 + i63 | 0) >= (i3 | 0);
    }
    L49 : do {
     if ((i37 | 0) < (i63 | 0)) {
      i71 = 0;
     } else {
      i69 = (i37 | 0) <= (i65 + i63 | 0);
      if (!(i69 & (i65 | 0) == 1 & (HEAP32[i15 >> 2] | 0) != 0)) {
       i71 = i69;
       break;
      }
      i69 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i69 | 0) == 0) {
        i67 = HEAP32[i11 >> 2] | 0;
        i68 = HEAP32[i41 >> 2] | 0;
        if ((i68 | 0) == 0) {
         i71 = 1;
         break L49;
        }
        if ((HEAP32[i68 + 4 >> 2] | 0) >>> 0 <= i67 >>> 0) {
         i71 = 1;
         break L49;
        }
        i72 = i68 + 8 | 0;
        if ((HEAP32[i68 + 16 >> 2] & 32 | 0) == 0) {
         i73 = HEAP16[(HEAP32[i72 >> 2] | 0) + (i67 << 1) >> 1] | 0;
         break;
        } else {
         i73 = HEAPU8[(HEAP32[i72 >> 2] | 0) + i67 | 0] | 0;
         break;
        }
       } else {
        i73 = HEAP16[i69 >> 1] | 0;
       }
      } while (0);
      if (i73 << 16 >> 16 != 10) {
       i71 = 1;
       break;
      }
      __ZN7WebCore12TextIterator7advanceEv(i10);
      do {
       if ((HEAP32[i38 >> 2] | 0) != 0) {
        if ((HEAP8[i5] & 1) != 0) {
         break;
        }
        __ZNK7WebCore12TextIterator5rangeEv(i18, i10);
        i69 = HEAP32[i58 >> 2] | 0;
        HEAP32[i58 >> 2] = 0;
        i67 = HEAP32[i69 + 8 >> 2] | 0;
        HEAP32[i59 >> 2] = i67;
        if ((i67 | 0) != 0) {
         i72 = i67 + 8 | 0;
         HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
        }
        i72 = i69 + 12 | 0;
        i67 = HEAP32[i72 >> 2] | 0;
        if ((i67 | 0) > -1) {
         i74 = i67;
        } else {
         i67 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i69 + 16 >> 2] | 0) | 0) + 1 | 0;
         HEAP32[i72 >> 2] = i67;
         i74 = i67;
        }
        HEAP32[i60 >> 2] = 0;
        __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i66, i19, i74, i60);
        i67 = HEAP32[i59 >> 2] | 0;
        do {
         if ((i67 | 0) != 0) {
          i72 = i67 + 8 | 0;
          i68 = i72 | 0;
          i75 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
          HEAP32[i68 >> 2] = i75;
          if ((i75 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
         }
        } while (0);
        if ((i69 | 0) == 0) {
         i71 = 1;
         break L49;
        }
        i67 = i69 | 0;
        i72 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        if ((i72 | 0) == 0) {
         __ZN7WebCore5RangeD1Ev(i69);
         __ZN3WTF8fastFreeEPv(i69);
         i71 = 1;
         break L49;
        } else {
         HEAP32[i67 >> 2] = i72;
         i71 = 1;
         break L49;
        }
       }
      } while (0);
      i72 = i66 + 12 | 0;
      i67 = HEAP32[i72 >> 2] | 0;
      if ((i67 | 0) > -1) {
       i76 = i67;
      } else {
       i67 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i72 >> 2] = i67;
       i76 = i67;
      }
      i67 = HEAP32[i66 + 8 >> 2] | 0;
      if ((i67 | 0) == 0) {
       i77 = i76;
      } else {
       i75 = i67 + 8 | 0;
       HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
       i77 = HEAP32[i72 >> 2] | 0;
      }
      HEAP32[i40 >> 2] = i67;
      HEAP32[i42 >> 2] = i77;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i21, i7, i8);
      i67 = HEAP32[i40 >> 2] | 0;
      do {
       if ((i67 | 0) != 0) {
        i72 = i67 + 8 | 0;
        i75 = i72 | 0;
        i68 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
        HEAP32[i75 >> 2] = i68;
        if ((i68 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i21, 1);
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i23, i24, 0);
      i67 = HEAP32[i48 >> 2] | 0;
      HEAP32[i47 >> 2] = i67;
      if ((i67 | 0) == 0) {
       i78 = 0;
      } else {
       i72 = i67 + 8 | 0;
       HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
       i78 = HEAP32[i48 >> 2] | 0;
      }
      HEAP32[i49 >> 2] = HEAP32[i50 >> 2];
      i72 = HEAP32[i51 >> 2] | 0;
      i67 = HEAP32[i53 >> 2] & -8 | i72 & 7;
      HEAP32[i53 >> 2] = i67;
      HEAP8[i52] = i67 & 255 & -9 | i72 & 8;
      do {
       if ((i78 | 0) != 0) {
        i72 = i78 + 8 | 0;
        i67 = i72 | 0;
        i68 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        HEAP32[i67 >> 2] = i68;
        if ((i68 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
       }
      } while (0);
      i72 = HEAP32[i54 >> 2] | 0;
      do {
       if ((i72 | 0) != 0) {
        i68 = i72 + 8 | 0;
        i67 = i68 | 0;
        i75 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        HEAP32[i67 >> 2] = i75;
        if ((i75 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
       }
      } while (0);
      do {
       if ((HEAP32[i47 >> 2] | 0) != 0) {
        i72 = __ZNK7WebCore8Position13containerNodeEv(i22) | 0;
        HEAP32[i56 >> 2] = i72;
        if ((i72 | 0) != 0) {
         i68 = i72 + 8 | 0;
         HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        }
        i68 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i22) | 0;
        HEAP32[i57 >> 2] = 0;
        __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i66, i25, i68, i57);
        i68 = HEAP32[i56 >> 2] | 0;
        do {
         if ((i68 | 0) != 0) {
          i72 = i68 + 8 | 0;
          i75 = i72 | 0;
          i67 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
          HEAP32[i75 >> 2] = i67;
          if ((i67 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
         }
        } while (0);
        i68 = HEAP32[i47 >> 2] | 0;
        if ((i68 | 0) == 0) {
         break;
        }
        i69 = i68 + 8 | 0;
        i68 = i69 | 0;
        i72 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
        HEAP32[i68 >> 2] = i72;
        if ((i72 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
       }
      } while (0);
      i69 = HEAP32[i55 >> 2] | 0;
      if ((i69 | 0) == 0) {
       i71 = 1;
       break;
      }
      i72 = i69 + 8 | 0;
      i69 = i72 | 0;
      i68 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
      HEAP32[i69 >> 2] = i68;
      if ((i68 | 0) >= 1) {
       i71 = 1;
       break;
      }
      if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
       i71 = 1;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
      i71 = 1;
     }
    } while (0);
    do {
     if (i70) {
      HEAP32[i27 >> 2] = 0;
      i72 = HEAP32[i66 + 8 >> 2] | 0;
      if ((HEAP32[i72 + 12 >> 2] & 1 | 0) != 0) {
       HEAP32[i12 >> 2] = i72;
       if ((i72 | 0) != 0) {
        i68 = i72 + 8 | 0;
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
       }
       i68 = i66 + 12 | 0;
       i69 = HEAP32[i68 >> 2] | 0;
       if ((i69 | 0) > -1) {
        i79 = i69;
       } else {
        i69 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i68 >> 2] = i69;
        i79 = i69;
       }
       __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i28, i64 + i3 + i79 | 0, i27);
       i69 = HEAP32[i12 >> 2] | 0;
       if ((i69 | 0) == 0) {
        i80 = 1;
        break;
       }
       i68 = i69 + 8 | 0;
       i69 = i68 | 0;
       i67 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
       HEAP32[i69 >> 2] = i67;
       if ((i67 | 0) >= 1) {
        i80 = 1;
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        i80 = 1;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
       i80 = 1;
       break;
      }
      if ((i63 | 0) == (i3 | 0)) {
       HEAP32[i13 >> 2] = i72;
       if ((i72 | 0) != 0) {
        i68 = i72 + 8 | 0;
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
       }
       i68 = i66 + 12 | 0;
       i72 = HEAP32[i68 >> 2] | 0;
       if ((i72 | 0) > -1) {
        i81 = i72;
       } else {
        i72 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i68 >> 2] = i72;
        i81 = i72;
       }
       __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i29, i81, i27);
       i72 = HEAP32[i13 >> 2] | 0;
       if ((i72 | 0) == 0) {
        i80 = 1;
        break;
       }
       i68 = i72 + 8 | 0;
       i72 = i68 | 0;
       i67 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
       HEAP32[i72 >> 2] = i67;
       if ((i67 | 0) >= 1) {
        i80 = 1;
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        i80 = 1;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
       i80 = 1;
       break;
      } else {
       i68 = HEAP32[i66 + 20 >> 2] | 0;
       HEAP32[i14 >> 2] = i68;
       if ((i68 | 0) != 0) {
        i67 = i68 + 8 | 0;
        HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
       }
       i67 = i66 + 24 | 0;
       i68 = HEAP32[i67 >> 2] | 0;
       if ((i68 | 0) > -1) {
        i82 = i68;
       } else {
        i68 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 28 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i67 >> 2] = i68;
        i82 = i68;
       }
       __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i30, i82, i27);
       i68 = HEAP32[i14 >> 2] | 0;
       if ((i68 | 0) == 0) {
        i80 = 1;
        break;
       }
       i67 = i68 + 8 | 0;
       i68 = i67 | 0;
       i72 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
       HEAP32[i68 >> 2] = i72;
       if ((i72 | 0) >= 1) {
        i80 = 1;
        break;
       }
       if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
        i80 = 1;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
       i80 = 1;
       break;
      }
     } else {
      i80 = i62;
     }
    } while (0);
    if (i71) {
     i39 = 121;
     break;
    }
    i83 = i65 + i63 | 0;
    __ZN7WebCore12TextIterator7advanceEv(i10);
    if ((HEAP32[i38 >> 2] | 0) == 0) {
     i39 = 24;
     break;
    }
    i61 = i66;
    i62 = i80;
    i63 = i83;
    i64 = -i83 | 0;
   }
   if ((i39 | 0) == 150) {
    if (i62) {
     i84 = i61;
     i85 = i63;
    } else {
     i46 = i61;
     i39 = 151;
     break;
    }
   } else if ((i39 | 0) == 24) {
    if (i80) {
     i84 = i66;
     i85 = i83;
    } else {
     i46 = i66;
     i39 = 151;
     break;
    }
   } else if ((i39 | 0) == 121) {
    HEAP32[i31 >> 2] = 0;
    i14 = HEAP32[i66 + 8 >> 2] | 0;
    do {
     if ((HEAP32[i14 + 12 >> 2] & 1 | 0) == 0) {
      if ((i37 | 0) == (i63 | 0)) {
       i13 = i33 | 0;
       HEAP32[i13 >> 2] = i14;
       if ((i14 | 0) != 0) {
        i12 = i14 + 8 | 0;
        HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
       }
       i12 = i66 + 12 | 0;
       i55 = HEAP32[i12 >> 2] | 0;
       if ((i55 | 0) > -1) {
        i86 = i55;
       } else {
        i55 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i12 >> 2] = i55;
        i86 = i55;
       }
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i33, i86, i31);
       i55 = HEAP32[i13 >> 2] | 0;
       if ((i55 | 0) == 0) {
        break;
       }
       i13 = i55 + 8 | 0;
       i55 = i13 | 0;
       i12 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
       break;
      } else {
       i13 = HEAP32[i66 + 20 >> 2] | 0;
       i12 = i34 | 0;
       HEAP32[i12 >> 2] = i13;
       if ((i13 | 0) != 0) {
        i55 = i13 + 8 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
       }
       i55 = i66 + 24 | 0;
       i13 = HEAP32[i55 >> 2] | 0;
       if ((i13 | 0) > -1) {
        i87 = i13;
       } else {
        i13 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 28 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i55 >> 2] = i13;
        i87 = i13;
       }
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i34, i87, i31);
       i13 = HEAP32[i12 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       i12 = i13 + 8 | 0;
       i13 = i12 | 0;
       i55 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
       break;
      }
     } else {
      i12 = i32 | 0;
      HEAP32[i12 >> 2] = i14;
      if ((i14 | 0) != 0) {
       i55 = i14 + 8 | 0;
       HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
      }
      i55 = i66 + 12 | 0;
      i13 = HEAP32[i55 >> 2] | 0;
      if ((i13 | 0) > -1) {
       i88 = i13;
      } else {
       i13 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i66 + 16 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i55 >> 2] = i13;
       i88 = i13;
      }
      __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i32, i64 + i37 + i88 | 0, i31);
      i13 = HEAP32[i12 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i12 = i13 + 8 | 0;
      i13 = i12 | 0;
      i55 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    if (i80) {
     i84 = i66;
     i85 = i65 + i63 | 0;
    } else {
     i46 = i66;
     i39 = 151;
     break;
    }
   }
   do {
    if ((i4 | 0) != 0 & (i37 | 0) > (i85 | 0)) {
     HEAP32[i35 >> 2] = 0;
     i64 = HEAP32[i84 + 20 >> 2] | 0;
     i14 = i36 | 0;
     HEAP32[i14 >> 2] = i64;
     if ((i64 | 0) != 0) {
      i61 = i64 + 8 | 0;
      HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
     }
     i61 = i84 + 24 | 0;
     i64 = HEAP32[i61 >> 2] | 0;
     if ((i64 | 0) > -1) {
      i89 = i64;
     } else {
      i64 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i84 + 28 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i61 >> 2] = i64;
      i89 = i64;
     }
     __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i9, i36, i89, i35);
     i64 = HEAP32[i14 >> 2] | 0;
     if ((i64 | 0) == 0) {
      break;
     }
     i14 = i64 + 8 | 0;
     i64 = i14 | 0;
     i61 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     HEAP32[i64 >> 2] = i61;
     if ((i61 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 >> 2] = i9;
   i44 = i84;
   i45 = 0;
  }
 } while (0);
 if ((i39 | 0) == 151) {
  HEAP32[i1 >> 2] = 0;
  i44 = i46;
  i45 = i9;
 }
 i9 = i10 + 116 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = i10 + 108 | 0;
 i46 = HEAP32[i9 >> 2] | 0;
 if ((i46 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i46);
 }
 i46 = HEAP32[i10 + 76 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i9 = i46 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i46 = i10 + 24 | 0;
 if ((HEAP32[i46 >> 2] | 0) != 0) {
  HEAP32[i46 >> 2] = 0;
 }
 i46 = i10 + 16 | 0;
 i1 = HEAP32[i46 >> 2] | 0;
 if (!((i10 + 28 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  HEAP32[i46 >> 2] = 0;
  HEAP32[i10 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 do {
  if ((i44 | 0) != 0) {
   i1 = i44 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i44);
    __ZN3WTF8fastFreeEPv(i44);
    break;
   } else {
    HEAP32[i1 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((i45 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i44 = i45 | 0;
 i10 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i45);
  __ZN3WTF8fastFreeEPv(i45);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i44 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore12TextIterator14handleTextNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 24 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if ((HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + (i6 << 2) >> 2] & 1 << (i5 + 31 & 31) | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = i8;
 HEAP32[i1 + 96 >> 2] = i6;
 i6 = HEAP32[i8 + 44 >> 2] | 0;
 i10 = (i6 | 0) == 0;
 if (!i10) {
  i11 = i6 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i8 + 8 | 0;
 i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0;
 L16 : do {
  if (((HEAP32[i12 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
   if ((__ZNK7WebCore10RenderText16simpleLineLayoutEv(i9) | 0) == 0) {
    i13 = i8 + 48 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i1 + 84 >> 2] = i14;
    }
    i14 = i1 + 129 | 0;
    L77 : do {
     if ((HEAP8[i14] & 1) == 0) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 624 >> 2] & 1](i9) | 0)) {
       i15 = 0;
       break;
      }
      if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
       i15 = 0;
       break;
      }
      i16 = HEAP32[i8 + 72 >> 2] | 0;
      L81 : do {
       if ((i16 | 0) != 0) {
        if ((HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
         if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
          i15 = 1;
          break L77;
         }
        }
        i17 = i16 + 28 | 0;
        while (1) {
         i18 = HEAP32[i17 >> 2] | 0;
         if ((i18 | 0) == 0) {
          break L81;
         }
         if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
          break;
         } else {
          i17 = i18 + 16 | 0;
         }
        }
        i17 = i18;
        HEAP8[i14] = 1;
        i19 = i1 + 84 | 0;
        HEAP32[i1 + 88 >> 2] = HEAP32[i19 >> 2];
        HEAP32[i19 >> 2] = HEAP32[i18 + 48 >> 2];
        i19 = i1 + 112 | 0;
        do {
         if ((HEAP32[i19 >> 2] | 0) != 0) {
          i20 = i1 + 116 | 0;
          if ((HEAP32[i20 >> 2] | 0) != 0) {
           HEAP32[i20 >> 2] = 0;
          }
          i20 = i1 + 108 | 0;
          i21 = HEAP32[i20 >> 2] | 0;
          if ((i21 | 0) == 0) {
           break;
          }
          HEAP32[i20 >> 2] = 0;
          HEAP32[i19 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i21);
         }
        } while (0);
        HEAP32[i1 + 92 >> 2] = i17;
       }
      } while (0);
      HEAP8[i14] = 1;
      i15 = 1;
     } else {
      i15 = 0;
     }
    } while (0);
    do {
     if (!((HEAP32[i13 >> 2] | 0) != 0 | i10)) {
      if ((HEAP32[i6 + 4 >> 2] | 0) == 0 | i15) {
       break;
      }
      if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
        i22 = 0;
        break L16;
       }
      }
      HEAP8[i1 + 100 | 0] = 1;
      i22 = 1;
      break L16;
     }
    } while (0);
    i13 = HEAP32[i1 + 92 >> 2] | 0;
    i14 = (i13 | 0) == 0 ? i9 : i13;
    if ((HEAP8[i14 + 24 | 0] & 64) != 0) {
     i13 = i1 + 108 | 0;
     i16 = i1 + 112 | 0;
     do {
      if ((HEAP32[i16 >> 2] | 0) != 0) {
       i19 = i1 + 116 | 0;
       if ((HEAP32[i19 >> 2] | 0) != 0) {
        HEAP32[i19 >> 2] = 0;
       }
       i19 = i13 | 0;
       i21 = HEAP32[i19 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       HEAP32[i19 >> 2] = 0;
       HEAP32[i16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i21);
      }
     } while (0);
     i21 = HEAP32[i14 + 48 >> 2] | 0;
     HEAP32[i4 >> 2] = i21;
     i19 = i1 + 116 | 0;
     if ((i21 | 0) == 0) {
      i23 = HEAP32[i19 >> 2] | 0;
      i24 = i13 | 0;
     } else {
      i20 = i13 | 0;
      i25 = i4;
      i26 = i21;
      i21 = HEAP32[i19 >> 2] | 0;
      while (1) {
       if ((i21 | 0) == (HEAP32[i16 >> 2] | 0)) {
        i27 = i21 + 1 | 0;
        i28 = HEAP32[i20 >> 2] | 0;
        do {
         if (i28 >>> 0 > i4 >>> 0) {
          i29 = 135;
         } else {
          if ((i28 + (i21 << 2) | 0) >>> 0 <= i4 >>> 0) {
           i29 = 135;
           break;
          }
          __ZN3WTF6VectorIPN7WebCore13InlineTextBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i13, i27);
          i30 = HEAP32[i20 >> 2] | 0;
          i31 = i30 + (i25 - i28 >> 2 << 2) | 0;
          i32 = i30;
         }
        } while (0);
        if ((i29 | 0) == 135) {
         i29 = 0;
         __ZN3WTF6VectorIPN7WebCore13InlineTextBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i13, i27);
         i31 = i4;
         i32 = HEAP32[i20 >> 2] | 0;
        }
        HEAP32[i32 + (HEAP32[i19 >> 2] << 2) >> 2] = HEAP32[i31 >> 2];
       } else {
        HEAP32[(HEAP32[i20 >> 2] | 0) + (i21 << 2) >> 2] = i26;
       }
       i28 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
       HEAP32[i19 >> 2] = i28;
       i30 = HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] | 0;
       HEAP32[i4 >> 2] = i30;
       if ((i30 | 0) == 0) {
        i23 = i28;
        i24 = i20;
        break;
       } else {
        i26 = i30;
        i21 = i28;
       }
      }
     }
     i21 = HEAP32[i24 >> 2] | 0;
     HEAP32[i3 >> 2] = F_BASE_iii + 2;
     __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i21, i21 + (i23 << 2) | 0, i3);
     HEAP32[i1 + 120 >> 2] = 0;
     if ((HEAP32[i1 + 116 >> 2] | 0) == 0) {
      i33 = 0;
     } else {
      i33 = HEAP32[HEAP32[i24 >> 2] >> 2] | 0;
     }
     HEAP32[i1 + 84 >> 2] = i33;
    }
    __ZN7WebCore12TextIterator13handleTextBoxEv(i1);
    i22 = 1;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
     i22 = 1;
     break;
    }
   }
   i21 = i1 + 4 | 0;
   i26 = HEAP32[i21 >> 2] | 0;
   i20 = i6 + 4 | 0;
   i19 = i6 + 16 | 0;
   i13 = i6 + 8 | 0;
   i25 = i13;
   i16 = i13 | 0;
   i13 = i26;
   while (1) {
    if (i10) {
     i34 = 0;
    } else {
     i34 = HEAP32[i20 >> 2] | 0;
    }
    if (i13 >>> 0 >= i34 >>> 0) {
     break;
    }
    do {
     if (i10) {
      i35 = 0;
     } else {
      if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i13 >>> 0) {
       i35 = 0;
       break;
      }
      if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
       i35 = HEAP16[(HEAP32[i25 >> 2] | 0) + (i13 << 1) >> 1] | 0;
       break;
      } else {
       i35 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i13 | 0] | 0;
       break;
      }
     }
    } while (0);
    i27 = i35 & 65535;
    if (!((i27 | 0) == 32 | (i27 | 0) == 10)) {
     if (i10) {
      break;
     }
     if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i13 >>> 0) {
      break;
     }
     if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
      i36 = HEAP16[(HEAP32[i25 >> 2] | 0) + (i13 << 1) >> 1] | 0;
     } else {
      i36 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i13 | 0] | 0;
     }
     if (i36 << 16 >> 16 != 9) {
      break;
     }
    }
    i13 = i13 + 1 | 0;
   }
   i27 = i1 + 100 | 0;
   do {
    if ((HEAP8[i27] & 1) == 0) {
     i29 = 73;
    } else {
     i14 = HEAP16[i1 + 102 >> 1] | 0;
     if (i14 << 16 >> 16 == 0) {
      i29 = 73;
      break;
     }
     i28 = i14 & 65535;
     if ((i28 | 0) == 32 | (i28 | 0) == 10) {
      i29 = 73;
     } else {
      i37 = 1;
      i29 = 74;
     }
    }
   } while (0);
   if ((i29 | 0) == 73) {
    if (i13 >>> 0 > i26 >>> 0) {
     i37 = 0;
     i29 = 74;
    } else {
     i38 = i26;
    }
   }
   L167 : do {
    if ((i29 | 0) == 74) {
     if (i10) {
      i39 = 0;
     } else {
      i39 = HEAP32[i20 >> 2] | 0;
     }
     if ((i13 | 0) == (i39 | 0)) {
      HEAP8[i27] = 1;
      i22 = 1;
      break L16;
     }
     i28 = i1 + 102 | 0;
     do {
      if ((i26 | 0) == 0) {
       i14 = HEAP16[i28 >> 1] | 0;
       if (i14 << 16 >> 16 == 0) {
        if (i37) {
         break;
        } else {
         i38 = i13;
         break L167;
        }
       }
       i30 = i14 & 65535;
       if (!((i30 | 0) == 32 | (i30 | 0) == 10)) {
        break;
       }
       if (!i37) {
        i38 = i13;
        break L167;
       }
      }
     } while (0);
     i30 = HEAP32[i5 >> 2] | 0;
     HEAP8[i1 + 124 | 0] = 1;
     HEAP32[i1 + 52 >> 2] = i30;
     HEAP32[i1 + 56 >> 2] = 0;
     HEAP32[i1 + 60 >> 2] = i26;
     HEAP32[i1 + 64 >> 2] = i13;
     i30 = i1 + 104 | 0;
     HEAP16[i30 >> 1] = 32;
     HEAP32[i1 + 68 >> 2] = i30;
     HEAP32[i1 + 72 >> 2] = 1;
     HEAP8[i27] = 0;
     HEAP16[i28 >> 1] = 32;
     HEAP32[i21 >> 2] = i13;
     i22 = 0;
     break L16;
    }
   } while (0);
   L183 : do {
    if (i10) {
     i40 = i13;
    } else {
     i27 = i13;
     while (1) {
      if (i27 >>> 0 >= (HEAP32[i20 >> 2] | 0) >>> 0) {
       i40 = i27;
       break L183;
      }
      do {
       if ((HEAP32[i20 >> 2] | 0) >>> 0 > i27 >>> 0) {
        if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
         i41 = HEAP16[(HEAP32[i25 >> 2] | 0) + (i27 << 1) >> 1] | 0;
         break;
        } else {
         i41 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i27 | 0] | 0;
         break;
        }
       } else {
        i41 = 0;
       }
      } while (0);
      i17 = i41 & 65535;
      if ((i17 | 0) == 32 | (i17 | 0) == 10) {
       i40 = i27;
       break L183;
      }
      i27 = i27 + 1 | 0;
     }
    }
   } while (0);
   if (i10) {
    i42 = 0;
   } else {
    i42 = HEAP32[i20 >> 2] | 0;
   }
   if (i38 >>> 0 < i42 >>> 0) {
    __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, HEAP32[i5 >> 2] | 0, i8, i38, i40);
   }
   HEAP32[i21 >> 2] = i40;
   if (i10) {
    i43 = 0;
   } else {
    i43 = HEAP32[i20 >> 2] | 0;
   }
   i22 = (i40 | 0) == (i43 | 0);
  } else {
   i16 = i1 + 4 | 0;
   i25 = HEAP32[i16 >> 2] | 0;
   i19 = i1 + 100 | 0;
   do {
    if ((HEAP8[i19] & 1) != 0) {
     if ((HEAP32[i12 + 40 >> 2] & 6144 | 0) != 0) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 624 >> 2] & 1](i9) | 0)) {
       break;
      }
      i13 = HEAP32[i8 + 72 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
     }
     i13 = HEAP32[i5 >> 2] | 0;
     HEAP8[i1 + 124 | 0] = 1;
     HEAP32[i1 + 52 >> 2] = i13;
     HEAP32[i1 + 56 >> 2] = 0;
     HEAP32[i1 + 60 >> 2] = i25;
     HEAP32[i1 + 64 >> 2] = i25;
     i13 = i1 + 104 | 0;
     HEAP16[i13 >> 1] = 32;
     HEAP32[i1 + 68 >> 2] = i13;
     HEAP32[i1 + 72 >> 2] = 1;
     HEAP8[i19] = 0;
     HEAP16[i1 + 102 >> 1] = 32;
     i22 = 0;
     break L16;
    }
   } while (0);
   i19 = i1 + 129 | 0;
   do {
    if ((HEAP8[i19] & 1) == 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 624 >> 2] & 1](i9) | 0)) {
      break;
     }
     if ((HEAP32[i16 >> 2] | 0) != 0) {
      break;
     }
     i20 = HEAP32[i8 + 72 >> 2] | 0;
     L30 : do {
      if ((i20 | 0) == 0) {
       i29 = 33;
      } else {
       if ((HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
        if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
         break;
        }
       }
       i21 = i20 + 28 | 0;
       while (1) {
        i44 = HEAP32[i21 >> 2] | 0;
        if ((i44 | 0) == 0) {
         i29 = 33;
         break L30;
        }
        if ((HEAP32[i44 + 20 >> 2] & 768 | 0) == 256) {
         break;
        } else {
         i21 = i44 + 16 | 0;
        }
       }
       i21 = i44;
       HEAP8[i19] = 1;
       i13 = i1 + 84 | 0;
       HEAP32[i1 + 88 >> 2] = HEAP32[i13 >> 2];
       HEAP32[i13 >> 2] = HEAP32[i44 + 48 >> 2];
       i13 = i1 + 112 | 0;
       do {
        if ((HEAP32[i13 >> 2] | 0) != 0) {
         i27 = i1 + 116 | 0;
         if ((HEAP32[i27 >> 2] | 0) != 0) {
          HEAP32[i27 >> 2] = 0;
         }
         i27 = i1 + 108 | 0;
         i28 = HEAP32[i27 >> 2] | 0;
         if ((i28 | 0) == 0) {
          break;
         }
         HEAP32[i27 >> 2] = 0;
         HEAP32[i13 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i28);
        }
       } while (0);
       HEAP32[i1 + 92 >> 2] = i21;
       i29 = 33;
      }
     } while (0);
     if ((i29 | 0) == 33) {
      HEAP8[i19] = 1;
     }
     i20 = i1 + 92 | 0;
     i13 = HEAP32[i20 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i28 = HEAP32[i13 + 44 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i27 = HEAP32[i16 >> 2] | 0;
      __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, HEAP32[i5 >> 2] | 0, i13 | 0, i27, i27);
      HEAP32[i20 >> 2] = 0;
      HEAP32[i1 + 84 >> 2] = 0;
      i22 = 0;
      break L16;
     }
     i27 = i28 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     i13 = HEAP32[i16 >> 2] | 0;
     __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, HEAP32[i5 >> 2] | 0, HEAP32[i20 >> 2] | 0, i13, i13 + (HEAP32[i28 + 4 >> 2] | 0) | 0);
     HEAP32[i20 >> 2] = 0;
     HEAP32[i1 + 84 >> 2] = 0;
     i20 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      i22 = 0;
      break L16;
     } else {
      HEAP32[i27 >> 2] = i20;
      i22 = 0;
      break L16;
     }
    }
   } while (0);
   if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
     i22 = 0;
     break;
    }
   }
   if (i10) {
    i45 = 0;
   } else {
    i45 = HEAP32[i6 + 4 >> 2] | 0;
   }
   i16 = HEAP32[i5 >> 2] | 0;
   if ((i16 | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
    i46 = HEAP32[i1 + 44 >> 2] | 0;
   } else {
    i46 = 2147483647;
   }
   i19 = (i46 | 0) < (i45 | 0) ? i46 : i45;
   if ((i25 | 0) >= (i19 | 0)) {
    i22 = 1;
    break;
   }
   i20 = i16 + 32 | 0;
   if ((HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0) {
    i47 = i20 | 0;
   } else {
    i47 = HEAP32[i20 >> 2] | 0;
   }
   __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, i16, HEAP32[i47 >> 2] | 0, i25, i19);
   i22 = 1;
  }
 } while (0);
 if (i10) {
  i7 = i22;
  STACKTOP = i2;
  return i7 | 0;
 }
 i10 = i6 | 0;
 i47 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i47 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i7 = i22;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i10 >> 2] = i47;
  i7 = i22;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 4 | 0;
  i6 = i4;
  L3 : while (1) {
   i7 = i6;
   i8 = i2 - i7 | 0;
   i9 = i8 >> 2;
   switch (i9 | 0) {
   case 0:
   case 1:
    {
     i10 = 90;
     break L1;
     break;
    }
   case 5:
    {
     i10 = 15;
     break L1;
     break;
    }
   case 3:
    {
     i10 = 6;
     break L1;
     break;
    }
   case 2:
    {
     i10 = 4;
     break L1;
     break;
    }
   case 4:
    {
     i10 = 14;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i8 | 0) < 124) {
    i10 = 21;
    break L1;
   }
   i11 = (i9 | 0) / 2 & -1;
   i12 = i6 + (i11 << 2) | 0;
   do {
    if ((i8 | 0) > 3996) {
     i13 = (i9 | 0) / 4 & -1;
     i14 = i6 + (i13 << 2) | 0;
     i15 = i6 + (i13 + i11 << 2) | 0;
     i13 = __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i14, i12, i15, i3) | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0)) {
      i16 = i13;
      break;
     }
     i17 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0)) {
      i16 = i13 + 1 | 0;
      break;
     }
     i17 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i15 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0)) {
      i16 = i13 + 2 | 0;
      break;
     }
     i17 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i17;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i14 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
      i17 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i14 >> 2] = i17;
      i16 = i13 + 4 | 0;
      break;
     } else {
      i16 = i13 + 3 | 0;
      break;
     }
    } else {
     i13 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
     i17 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0;
     if (!i13) {
      if (!i17) {
       i16 = 0;
       break;
      }
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
       i16 = 1;
       break;
      }
      i13 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i13;
      i16 = 2;
      break;
     }
     i13 = HEAP32[i6 >> 2] | 0;
     if (i17) {
      HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      i16 = 1;
      break;
     }
     HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i13;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i13) | 0)) {
      i16 = 1;
      break;
     }
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i13;
     i16 = 2;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
     i18 = i5;
     i19 = i16;
    } else {
     i11 = i5;
     while (1) {
      i20 = i11 - 4 | 0;
      if ((i6 | 0) == (i20 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i20 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
       i10 = 66;
       break;
      } else {
       i11 = i20;
      }
     }
     if ((i10 | 0) == 66) {
      i10 = 0;
      i11 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i11;
      i18 = i20;
      i19 = i16 + 1 | 0;
      break;
     }
     i11 = i6 + 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0) {
      i21 = i11;
     } else {
      i9 = i11;
      while (1) {
       if ((i9 | 0) == (i5 | 0)) {
        i10 = 101;
        break L1;
       }
       i22 = i9 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0) {
        break;
       } else {
        i9 = i22;
       }
      }
      i11 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i11;
      i21 = i22;
     }
     if ((i21 | 0) == (i5 | 0)) {
      i10 = 102;
      break L1;
     } else {
      i23 = i5;
      i24 = i21;
     }
     while (1) {
      i11 = i24;
      while (1) {
       i25 = i11 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
        i26 = i23;
        break;
       } else {
        i11 = i25;
       }
      }
      while (1) {
       i26 = i26 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0)) {
        break;
       }
      }
      if (i11 >>> 0 >= i26 >>> 0) {
       i6 = i11;
       continue L3;
      }
      i8 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i26 >> 2];
      HEAP32[i26 >> 2] = i8;
      i23 = i26;
      i24 = i25;
     }
    }
   } while (0);
   i9 = i6 + 4 | 0;
   L52 : do {
    if (i9 >>> 0 < i18 >>> 0) {
     i8 = i18;
     i13 = i9;
     i17 = i19;
     i14 = i12;
     while (1) {
      i15 = i13;
      while (1) {
       i27 = i15 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        i15 = i27;
       } else {
        i28 = i8;
        break;
       }
      }
      while (1) {
       i28 = i28 - 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i28 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        break;
       }
      }
      if (i15 >>> 0 > i28 >>> 0) {
       i29 = i15;
       i30 = i17;
       i31 = i14;
       break L52;
      }
      i11 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i28 >> 2] = i11;
      i8 = i28;
      i13 = i27;
      i17 = i17 + 1 | 0;
      i14 = (i14 | 0) == (i15 | 0) ? i28 : i14;
     }
    } else {
     i29 = i9;
     i30 = i19;
     i31 = i12;
    }
   } while (0);
   do {
    if ((i29 | 0) == (i31 | 0)) {
     i32 = i30;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i31 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0)) {
      i32 = i30;
      break;
     }
     i12 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i31 >> 2] = i12;
     i32 = i30 + 1 | 0;
    }
   } while (0);
   if ((i32 | 0) == 0) {
    i33 = __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i6, i29, i3) | 0;
    i12 = i29 + 4 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i12, i1, i3) | 0) {
     i10 = 78;
     break;
    }
    if (i33) {
     i6 = i12;
     continue;
    }
   }
   i12 = i29;
   if ((i12 - i7 | 0) >= (i2 - i12 | 0)) {
    i10 = 82;
    break;
   }
   __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i6, i29, i3);
   i6 = i29 + 4 | 0;
  }
  if ((i10 | 0) == 78) {
   i10 = 0;
   if (i33) {
    i10 = 103;
    break;
   } else {
    i4 = i6;
    i1 = i29;
    continue;
   }
  } else if ((i10 | 0) == 82) {
   i10 = 0;
   __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i29 + 4 | 0, i1, i3);
   i4 = i6;
   i1 = i29;
   continue;
  }
 }
 if ((i10 | 0) == 90) {
  return;
 } else if ((i10 | 0) == 15) {
  i29 = i6 + 4 | 0;
  i4 = i6 + 8 | 0;
  i33 = i6 + 12 | 0;
  __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i29, i4, i33, i3) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i33 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i33 >> 2] | 0;
  HEAP32[i33 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i32;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i33 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i4 >> 2] | 0;
  i30 = HEAP32[i33 >> 2] | 0;
  HEAP32[i4 >> 2] = i30;
  HEAP32[i33 >> 2] = i32;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i30, HEAP32[i29 >> 2] | 0) | 0)) {
   return;
  }
  i30 = HEAP32[i29 >> 2] | 0;
  i32 = HEAP32[i4 >> 2] | 0;
  HEAP32[i29 >> 2] = i32;
  HEAP32[i4 >> 2] = i30;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i32, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i29 >> 2];
  HEAP32[i29 >> 2] = i32;
  return;
 } else if ((i10 | 0) == 6) {
  i32 = i6 + 4 | 0;
  i29 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i32 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i30 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i32 >> 2] | 0) | 0;
  if (!i29) {
   if (!i30) {
    return;
   }
   i29 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i29;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i32 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    return;
   }
   i29 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i32 >> 2] = i29;
   return;
  }
  i29 = HEAP32[i6 >> 2] | 0;
  if (i30) {
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i29;
   return;
  }
  HEAP32[i6 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i32 >> 2] = i29;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i29) | 0)) {
   return;
  }
  i29 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i29;
  return;
 } else if ((i10 | 0) == 101) {
  return;
 } else if ((i10 | 0) == 102) {
  return;
 } else if ((i10 | 0) == 103) {
  return;
 } else if ((i10 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i29 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i29;
  return;
 } else if ((i10 | 0) == 14) {
  __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i6 + 4 | 0, i6 + 8 | 0, i5, i3) | 0;
  return;
 } else if ((i10 | 0) == 21) {
  i10 = i6 + 8 | 0;
  i5 = i6 + 4 | 0;
  i29 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i32 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i10 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
  do {
   if (i29) {
    i30 = HEAP32[i6 >> 2] | 0;
    if (i32) {
     HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i30;
     break;
    }
    HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i5 >> 2] = i30;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i10 >> 2] | 0, i30) | 0)) {
     break;
    }
    i30 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i30;
   } else {
    if (!i32) {
     break;
    }
    i30 = HEAP32[i5 >> 2] | 0;
    i4 = HEAP32[i10 >> 2] | 0;
    HEAP32[i5 >> 2] = i4;
    HEAP32[i10 >> 2] = i30;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i4, HEAP32[i6 >> 2] | 0) | 0)) {
     break;
    }
    i4 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i5 >> 2] = i4;
   }
  } while (0);
  i5 = i6 + 12 | 0;
  if ((i5 | 0) == (i1 | 0)) {
   return;
  } else {
   i34 = i10;
   i35 = i5;
  }
  while (1) {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i35 >> 2] | 0, HEAP32[i34 >> 2] | 0) | 0) {
    i5 = HEAP32[i35 >> 2] | 0;
    i10 = i34;
    i32 = i35;
    while (1) {
     HEAP32[i32 >> 2] = HEAP32[i10 >> 2];
     if ((i10 | 0) == (i6 | 0)) {
      i36 = i6;
      break;
     }
     i29 = i10 - 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i5, HEAP32[i29 >> 2] | 0) | 0) {
      i32 = i10;
      i10 = i29;
     } else {
      i36 = i10;
      break;
     }
    }
    HEAP32[i36 >> 2] = i5;
   }
   i10 = i35 + 4 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i34 = i35;
    i35 = i10;
   }
  }
  return;
 }
}
function __ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i1 + 32 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  if (__ZN7WebCore11isTableCellEPKNS_4NodeE(i1) | 0) {
   i5 = 0;
   return i5 | 0;
  }
  i4 = i3;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 1](i3) | 0) {
    i6 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    if ((HEAP32[i6 + 20 >> 2] & 1024 | 0) == 0) {
     i5 = 1;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i6 = HEAP32[i3 + 20 >> 2] | 0;
  if ((i6 & 1024 | 0) != 0 | (i6 & 768 | 0) == 256) {
   i5 = 0;
   return i5 | 0;
  }
  if ((HEAP32[i3 + 24 >> 2] & 16 | 0) == 0) {
   i5 = 0;
   return i5 | 0;
  }
  if ((i6 & 64 | 0) != 0 | (i6 & 25165824 | 0) == 16777216) {
   i5 = 0;
   return i5 | 0;
  }
  do {
   if ((i6 & 128 | 0) == 0) {
    i7 = HEAP32[i3 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
     break;
    }
    i8 = HEAP32[i7 + 44 >> 2] | 0;
    i7 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i8 | 0) == (i7 | 0)) {
     i5 = 0;
     return i5 | 0;
    }
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
     i5 = 0;
    } else {
     break;
    }
    return i5 | 0;
   }
  } while (0);
  i5 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 1](i3) | 0) ^ 1;
  return i5 | 0;
 }
 i3 = (i2 & 4 | 0) == 0;
 if (i3) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5dlTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames10listingTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0;
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
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
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
 i1 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
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
function __ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 80 | 0;
 i11 = i5 + 88 | 0;
 i12 = i5 + 96 | 0;
 i13 = i5 + 104 | 0;
 i14 = i5 + 112 | 0;
 i15 = i5 + 200 | 0;
 i16 = i5 + 208 | 0;
 i17 = i5 + 360 | 0;
 i18 = i16 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i16 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i16 + 8 | 0;
 HEAP8[i20] = 1;
 i21 = i16 + 12 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i21, i2, 2);
 i22 = i16 + 145 | 0;
 i23 = i16 + 84 | 0;
 i24 = i16 + 64 | 0;
 L1 : do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   while (1) {
    if ((HEAP8[i22] & 1) != 0) {
     break L1;
    }
    if ((HEAP32[i23 >> 2] | 0) != 0) {
     break L1;
    }
    __ZN7WebCore12TextIterator7advanceEv(i21);
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore12SearchBufferC2ERKN3WTF6StringEj(i9, i3, i4);
 i3 = i9 + 29 | 0;
 do {
  if ((HEAP8[i3] & 1) != 0) {
   __ZNK7WebCore17CharacterIterator5rangeEv(i10, i16);
   i21 = i10 | 0;
   i25 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   __ZN7WebCore8Document11createRangeEv(i11, HEAP32[i25 + 4 >> 2] | 0);
   i21 = i11 | 0;
   i26 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i21 = HEAP32[i25 + 8 >> 2] | 0;
   i27 = i12 | 0;
   HEAP32[i27 >> 2] = i21;
   if ((i21 | 0) != 0) {
    i28 = i21 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i28 = i25 + 12 | 0;
   i21 = HEAP32[i28 >> 2] | 0;
   if ((i21 | 0) > -1) {
    i29 = i21;
   } else {
    i21 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i25 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i28 >> 2] = i21;
    i29 = i21;
   }
   i21 = i13 | 0;
   HEAP32[i21 >> 2] = 0;
   __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i26, i12, i29, i21);
   i21 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i27 = i21 + 8 | 0;
     i28 = i27 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i14, i26, 0);
   i21 = i14 + 79 | 0;
   i27 = i14 + 60 | 0;
   i30 = i14 + 48 | 0;
   L20 : do {
    if ((HEAP32[i30 >> 2] | 0) != 0) {
     i28 = i14 + 64 | 0;
     while (1) {
      if ((HEAP8[i21] & 1) != 0) {
       break L20;
      }
      __ZN7WebCore12SearchBuffer14prependContextEPKtj(i9, HEAP32[i27 >> 2] | 0, HEAP32[i28 >> 2] | 0);
      if ((HEAP8[i3] & 1) == 0) {
       break L20;
      }
      __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i14);
      if ((HEAP32[i30 >> 2] | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i30 = i14 + 24 | 0;
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   i30 = i14 + 16 | 0;
   i27 = HEAP32[i30 >> 2] | 0;
   if (!((i14 + 28 | 0) == (i27 | 0) | (i27 | 0) == 0)) {
    HEAP32[i30 >> 2] = 0;
    HEAP32[i14 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i27);
   }
   do {
    if ((i26 | 0) != 0) {
     i27 = i26 | 0;
     i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i26);
      __ZN3WTF8fastFreeEPv(i26);
      break;
     } else {
      HEAP32[i27 >> 2] = i30;
      break;
     }
    }
   } while (0);
   if ((i25 | 0) == 0) {
    break;
   }
   i26 = i25 | 0;
   i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i25);
    __ZN3WTF8fastFreeEPv(i25);
    break;
   } else {
    HEAP32[i26 >> 2] = i30;
    break;
   }
  }
 } while (0);
 L44 : do {
  if ((HEAP32[i24 >> 2] | 0) == 0) {
   i31 = 0;
   i32 = 0;
  } else {
   i14 = i16 + 80 | 0;
   i3 = i16 + 88 | 0;
   i29 = i16 + 72 | 0;
   i12 = (i4 & 8 | 0) == 0;
   i13 = i9 + 28 | 0;
   i11 = 0;
   i10 = 0;
   while (1) {
    if ((HEAP8[i22] & 1) != 0) {
     i31 = i11;
     i32 = i10;
     break L44;
    }
    i30 = HEAP32[i14 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i26 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i26 | 0) == 0) {
       i33 = 0;
      } else {
       if ((HEAP32[i26 + 16 >> 2] & 32 | 0) == 0) {
        i33 = HEAP32[i26 + 8 >> 2] | 0;
        break;
       } else {
        i33 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i26) | 0;
        break;
       }
      }
     } while (0);
     i34 = i33 + (HEAP32[i29 >> 2] << 1) | 0;
    } else {
     i34 = i30;
    }
    i26 = HEAP32[i19 >> 2] | 0;
    __ZN7WebCore17CharacterIterator7advanceEi(i16, __ZN7WebCore12SearchBuffer6appendEPKtj(i9, i34 + (i26 << 1) | 0, (HEAP32[i23 >> 2] | 0) - i26 | 0) | 0);
    i26 = i11;
    i27 = i10;
    L58 : while (1) {
     i21 = __ZN7WebCore12SearchBuffer6searchERj(i9, i15) | 0;
     if ((i21 | 0) == 0) {
      while (1) {
       if ((HEAP8[i20] & 1) == 0) {
        break L58;
       }
       if ((HEAP8[i13] & 1) != 0) {
        break L58;
       }
       HEAP8[i13] = 1;
       i28 = __ZN7WebCore12SearchBuffer6searchERj(i9, i15) | 0;
       if ((i28 | 0) != 0) {
        i35 = i28;
        break;
       }
      }
     } else {
      i35 = i21;
     }
     i28 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i15 >> 2] | 0) | 0;
     if (i12) {
      i31 = i35;
      i32 = i28;
      break L44;
     } else {
      i26 = i35;
      i27 = i28;
     }
    }
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     i31 = i26;
     i32 = i27;
     break;
    } else {
     i11 = i26;
     i10 = i27;
    }
   }
  }
 } while (0);
 __ZN7WebCore12SearchBufferD2Ev(i9);
 if ((i31 | 0) == 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = 0;
  __ZNK7WebCore5Range10cloneRangeERi(i6, i2, i9);
  i9 = i6 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = 0;
  __ZN7WebCore5Range8collapseEbRi(i6, (i4 & 8 | 0) != 0, i9);
  HEAP32[i1 >> 2] = i6;
  i6 = i16 + 128 | 0;
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
  }
  i6 = i16 + 120 | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i16 + 124 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
  i9 = HEAP32[i16 + 88 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i4 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i4;
     break;
    }
   }
  } while (0);
  i9 = i16 + 36 | 0;
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
  }
  i9 = i16 + 28 | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  if ((i16 + 40 | 0) == (i4 | 0) | (i4 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  HEAP32[i9 >> 2] = 0;
  HEAP32[i16 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i5;
  return;
 }
 i4 = i16 + 128 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i16 + 120 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i16 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i16 + 88 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = i16 + 36 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = i16 + 28 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 if (!((i16 + 40 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i16 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 HEAP8[i17 + 8 | 0] = 1;
 i6 = i17 + 12 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i6, i2, 2);
 i2 = i17 + 145 | 0;
 i16 = i17 + 84 | 0;
 i9 = i17 + 64 | 0;
 L108 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   while (1) {
    if ((HEAP8[i2] & 1) != 0) {
     break L108;
    }
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     break L108;
    }
    __ZN7WebCore12TextIterator7advanceEv(i6);
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCoreL17characterSubrangeERNS_17CharacterIteratorEii(i1, i17, i32, i31);
 i31 = i17 + 128 | 0;
 if ((HEAP32[i31 >> 2] | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
 }
 i31 = i17 + 120 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 if ((i32 | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
  HEAP32[i17 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i32);
 }
 i32 = HEAP32[i17 + 88 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i31 = i32 | 0;
   i1 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i31 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i32 = i17 + 36 | 0;
 if ((HEAP32[i32 >> 2] | 0) != 0) {
  HEAP32[i32 >> 2] = 0;
 }
 i32 = i17 + 28 | 0;
 i1 = HEAP32[i32 >> 2] | 0;
 if ((i17 + 40 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i32 >> 2] = 0;
 HEAP32[i17 + 32 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17WordAwareIterator7advanceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 8 | 0;
 i10 = i1 + 12 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   i11 = i1 + 16 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i11 = i9 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i12 = i1 + 20 | 0;
 i11 = i1 + 28 | 0;
 if ((HEAP8[i12] & 1) == 0) {
  __ZN7WebCore12TextIterator7advanceEv(i11);
 }
 HEAP8[i12] = 0;
 i13 = i1 + 161 | 0;
 i14 = i1 + 100 | 0;
 i15 = i1 + 80 | 0;
 L11 : do {
  if ((HEAP32[i15 >> 2] | 0) != 0) {
   while (1) {
    if ((HEAP8[i13] & 1) != 0) {
     break L11;
    }
    if ((HEAP32[i14 >> 2] | 0) != 0) {
     break L11;
    }
    __ZN7WebCore12TextIterator7advanceEv(i11);
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZNK7WebCore12TextIterator5rangeEv(i3, i11);
 i16 = i3 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 + 24 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i3;
 do {
  if ((i18 | 0) != 0) {
   i3 = i18 | 0;
   i19 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i18);
    __ZN3WTF8fastFreeEPv(i18);
    break;
   } else {
    HEAP32[i3 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i18);
    __ZN3WTF8fastFreeEPv(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i13] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i18 = i1 + 96 | 0;
 i19 = i1 + 104 | 0;
 i16 = i1 + 88 | 0;
 i3 = i1 + 16 | 0;
 i20 = i1 + 4 | 0;
 i1 = i9 | 0;
 i21 = i6 | 0;
 i22 = i5 | 0;
 i23 = i7 | 0;
 L35 : while (1) {
  i24 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  i25 = HEAP32[i18 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i26 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i27 = 0;
    } else {
     if ((HEAP32[i26 + 16 >> 2] & 32 | 0) == 0) {
      i27 = HEAP32[i26 + 8 >> 2] | 0;
      break;
     } else {
      i27 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i26) | 0;
      break;
     }
    }
   } while (0);
   i28 = i27 + (HEAP32[i16 >> 2] << 1) | 0;
  } else {
   i28 = i25;
  }
  i26 = HEAP16[i28 + (i24 << 1) >> 1] | 0;
  do {
   if ((i26 & 65535) >>> 0 < 128 >>> 0) {
    if ((i26 & 65535) >>> 0 >= 33 >>> 0) {
     break;
    }
    if (i26 << 16 >> 16 == 32 | (i26 - 9 & 65535) >>> 0 < 5 >>> 0) {
     i29 = 96;
     break L35;
    }
   } else {
    if ((_u_charDirection(i26 & 65535) | 0) == 9) {
     i29 = 93;
     break L35;
    }
   }
  } while (0);
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i26 = HEAP32[i18 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i24 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i24 | 0) == 0) {
      i30 = 0;
     } else {
      if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
       i30 = HEAP32[i24 + 8 >> 2] | 0;
       break;
      } else {
       i30 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i24) | 0;
       break;
      }
     }
    } while (0);
    i31 = i30 + (HEAP32[i16 >> 2] << 1) | 0;
   } else {
    i31 = i26;
   }
   HEAP32[i8 >> 2] = i31;
   HEAP32[i20 >> 2] = HEAP32[i14 >> 2];
  }
  __ZN7WebCore12TextIterator7advanceEv(i11);
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   i29 = 54;
   break;
  }
  if ((HEAP8[i13] & 1) != 0) {
   i29 = 54;
   break;
  }
  if ((HEAP32[i14 >> 2] | 0) == 0) {
   i29 = 54;
   break;
  }
  i24 = HEAP32[i18 >> 2] | 0;
  if ((i24 | 0) == 0) {
   i25 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i32 = 0;
    } else {
     if ((HEAP32[i25 + 16 >> 2] & 32 | 0) == 0) {
      i32 = HEAP32[i25 + 8 >> 2] | 0;
      break;
     } else {
      i32 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i25) | 0;
      break;
     }
    }
   } while (0);
   i33 = i32 + (HEAP32[i16 >> 2] << 1) | 0;
  } else {
   i33 = i24;
  }
  i25 = HEAP16[i33 >> 1] | 0;
  do {
   if ((i25 & 65535) >>> 0 < 128 >>> 0) {
    if ((i25 & 65535) >>> 0 >= 33 >>> 0) {
     break;
    }
    if (i25 << 16 >> 16 == 32 | (i25 - 9 & 65535) >>> 0 < 5 >>> 0) {
     i29 = 54;
     break L35;
    }
   } else {
    if ((_u_charDirection(i25 & 65535) | 0) == 9) {
     i29 = 54;
     break L35;
    }
   }
  } while (0);
  i25 = HEAP32[i3 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i24 = HEAP32[i8 >> 2] | 0;
   i26 = HEAP32[i20 >> 2] | 0;
   if (i26 >>> 0 > (HEAP32[i10 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i26);
    i34 = HEAP32[i3 >> 2] | 0;
   } else {
    i34 = 0;
   }
   if (i26 >>> 0 < i34 >>> 0) {
    i29 = 59;
    break;
   }
   i35 = HEAP32[i1 >> 2] | 0;
   if ((i26 | 0) != 0) {
    i36 = 0;
    while (1) {
     HEAP16[i35 + (i36 + i34 << 1) >> 1] = HEAP16[i24 + (i36 << 1) >> 1] | 0;
     i36 = i36 + 1 | 0;
     if (i36 >>> 0 >= i26 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i26;
   HEAP32[i8 >> 2] = 0;
   i37 = i26;
  } else {
   i37 = i25;
  }
  i36 = HEAP32[i18 >> 2] | 0;
  if ((i36 | 0) == 0) {
   i24 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i38 = 0;
     i39 = i37;
    } else {
     if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
      i38 = HEAP32[i24 + 8 >> 2] | 0;
      i39 = i37;
      break;
     } else {
      i35 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i24) | 0;
      i38 = i35;
      i39 = HEAP32[i3 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i40 = i38 + (HEAP32[i16 >> 2] << 1) | 0;
   i41 = i39;
  } else {
   i40 = i36;
   i41 = i37;
  }
  i24 = HEAP32[i14 >> 2] | 0;
  i25 = i41 + i24 | 0;
  if (i25 >>> 0 > (HEAP32[i10 >> 2] | 0) >>> 0) {
   __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
   i42 = HEAP32[i3 >> 2] | 0;
  } else {
   i42 = i41;
  }
  if (i25 >>> 0 < i42 >>> 0) {
   i29 = 72;
   break;
  }
  i26 = HEAP32[i1 >> 2] | 0;
  if ((i24 | 0) != 0) {
   i35 = 0;
   while (1) {
    HEAP16[i26 + (i35 + i42 << 1) >> 1] = HEAP16[i40 + (i35 << 1) >> 1] | 0;
    i35 = i35 + 1 | 0;
    if (i35 >>> 0 >= i24 >>> 0) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i25;
  HEAP32[i4 >> 2] = 0;
  i24 = HEAP32[i17 >> 2] | 0;
  __ZNK7WebCore12TextIterator5rangeEv(i6, i11);
  i35 = HEAP32[(HEAP32[i21 >> 2] | 0) + 20 >> 2] | 0;
  HEAP32[i22 >> 2] = i35;
  if ((i35 | 0) != 0) {
   i26 = i35 + 8 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  }
  __ZNK7WebCore12TextIterator5rangeEv(i7, i11);
  i26 = HEAP32[i23 >> 2] | 0;
  i35 = i26 + 24 | 0;
  i36 = HEAP32[i35 >> 2] | 0;
  if ((i36 | 0) > -1) {
   i43 = i36;
  } else {
   i36 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i26 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i35 >> 2] = i36;
   i43 = i36;
  }
  __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i24, i5, i43, i4);
  i24 = HEAP32[i23 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i36 = i24 | 0;
    i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    if ((i35 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i24);
     __ZN3WTF8fastFreeEPv(i24);
     break;
    } else {
     HEAP32[i36 >> 2] = i35;
     break;
    }
   }
  } while (0);
  i24 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i25 = i24 + 8 | 0;
    i35 = i25 | 0;
    i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
    HEAP32[i35 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
   }
  } while (0);
  i24 = HEAP32[i21 >> 2] | 0;
  if ((i24 | 0) == 0) {
   continue;
  }
  i25 = i24 | 0;
  i36 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
  if ((i36 | 0) == 0) {
   __ZN7WebCore5RangeD1Ev(i24);
   __ZN3WTF8fastFreeEPv(i24);
   continue;
  } else {
   HEAP32[i25 >> 2] = i36;
   continue;
  }
 }
 if ((i29 | 0) == 93) {
  STACKTOP = i2;
  return;
 } else if ((i29 | 0) == 96) {
  STACKTOP = i2;
  return;
 } else if ((i29 | 0) == 59) {
  _WTFCrash();
 } else if ((i29 | 0) == 54) {
  HEAP8[i12] = 1;
  STACKTOP = i2;
  return;
 } else if ((i29 | 0) == 72) {
  _WTFCrash();
 }
}
function __ZN7WebCore12TextIterator7advanceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = i1 + 133 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 72 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 80 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  i6 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i6 + 12 >> 2] & 2 | 0) == 0) {
   i7 = i6;
  } else {
   i8 = HEAP32[i6 + 40 >> 2] | 0;
   i7 = (i8 | 0) == 0 ? i6 : i8;
  }
  i8 = HEAP32[i7 + 16 >> 2] | 0;
  HEAP8[i1 + 124 | 0] = 1;
  HEAP32[i3 >> 2] = i8;
  HEAP32[i1 + 56 >> 2] = i7;
  HEAP32[i1 + 60 >> 2] = 1;
  HEAP32[i1 + 64 >> 2] = 1;
  i7 = i1 + 104 | 0;
  HEAP16[i7 >> 1] = 10;
  HEAP32[i1 + 68 >> 2] = i7;
  HEAP32[i4 >> 2] = 1;
  HEAP8[i1 + 100 | 0] = 0;
  HEAP16[i1 + 102 >> 1] = 10;
  HEAP8[i5] = 0;
  return;
 }
 i5 = i1 + 84 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i4 = i1 + 88 | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = i7;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i1 + 92 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i9 = 9;
  } else {
   i9 = 9;
  }
 } while (0);
 do {
  if ((i9 | 0) == 9) {
   __ZN7WebCore12TextIterator13handleTextBoxEv(i1);
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 i5 = i1 | 0;
 i4 = i1 + 48 | 0;
 i7 = i1 + 132 | 0;
 i8 = i1 + 40 | 0;
 i6 = i1 + 44 | 0;
 i10 = i1 + 8 | 0;
 i11 = i1 + 9 | 0;
 i12 = i1 + 4 | 0;
 i13 = i1 + 12 | 0;
 i14 = i1 + 129 | 0;
 i15 = i1 + 92 | 0;
 i16 = i1 + 12 | 0;
 L18 : while (1) {
  i17 = HEAP32[i5 >> 2] | 0;
  if ((i17 | 0) == 0) {
   i9 = 87;
   break;
  }
  if ((i17 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i9 = 91;
   break;
  }
  do {
   if ((HEAP8[i2] & 1) == 0) {
    if ((HEAP8[i7] & 1) == 0) {
     break;
    }
    if ((__ZN7WebCore22HTMLFormControlElement27enclosingFormControlElementEPNS_4NodeE(i17) | 0) == 0) {
     break;
    }
    HEAP8[i2] = 1;
   }
  } while (0);
  i17 = HEAP32[i5 >> 2] | 0;
  if ((i17 | 0) == (HEAP32[i8 >> 2] | 0)) {
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i9 = 19;
    break;
   }
  }
  i18 = i17 + 32 | 0;
  if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
   i19 = i18 | 0;
  } else {
   i19 = HEAP32[i18 >> 2] | 0;
  }
  i18 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    HEAP8[i10] = 1;
    HEAP8[i11] = 1;
   } else {
    if ((HEAP8[i10] & 1) != 0) {
     break;
    }
    do {
     if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 76 >> 2] & 1](i17) | 0) != 3) {
       i9 = 29;
       break;
      }
      HEAP8[i10] = (__ZN7WebCore12TextIterator14handleTextNodeEv(i1) | 0) & 1;
     } else {
      i9 = 29;
     }
    } while (0);
    do {
     if ((i9 | 0) == 29) {
      i9 = 0;
      if (__ZN7WebCore25isRendererReplacedElementEPNS_12RenderObjectE(i18) | 0) {
       HEAP8[i10] = (__ZN7WebCore12TextIterator21handleReplacedElementEv(i1) | 0) & 1;
       break;
      } else {
       __ZN7WebCore12TextIterator17handleNonTextNodeEv(i1) | 0;
       HEAP8[i10] = 1;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     i9 = 86;
     break L18;
    }
   }
  } while (0);
  i18 = HEAP32[i5 >> 2] | 0;
  do {
   if ((HEAP8[i11] & 1) == 0) {
    if ((HEAP32[i18 + 12 >> 2] & 2 | 0) == 0) {
     i9 = 35;
     break;
    }
    i17 = HEAP32[i18 + 36 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i17 | 0) == 0) {
     i9 = 38;
     break;
    }
    HEAP32[i5 >> 2] = i17;
    i20 = i17;
    i9 = 81;
   } else {
    i9 = 35;
   }
  } while (0);
  if ((i9 | 0) == 35) {
   i9 = 0;
   HEAP32[i12 >> 2] = 0;
   i9 = 38;
  }
  if ((i9 | 0) == 38) {
   i9 = 0;
   i17 = HEAP32[i18 + 28 >> 2] | 0;
   L56 : do {
    if ((i17 | 0) == 0) {
     i21 = HEAP32[i18 + 12 >> 2] | 0;
     if ((i21 & 2 | 0) == 0) {
      i9 = 41;
     } else {
      i22 = HEAP32[i18 + 36 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i9 = 41;
      } else {
       i23 = i22;
       i24 = i18;
       i25 = i21;
      }
     }
     if ((i9 | 0) == 41) {
      i9 = 0;
      i21 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i18) | 0;
      i22 = HEAP32[i5 >> 2] | 0;
      i23 = i21;
      i24 = i22;
      i25 = HEAP32[i22 + 12 >> 2] | 0;
     }
     i22 = (i23 | 0) == (HEAP32[i4 >> 2] | 0);
     do {
      if ((i25 & 4096 | 0) == 0) {
       i9 = 45;
      } else {
       if ((HEAP32[(HEAP32[i24 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i24 | 0)) {
        i9 = 45;
        break;
       }
       i26 = HEAP32[i24 + 92 >> 2] | 0;
      }
     } while (0);
     if ((i9 | 0) == 45) {
      i9 = 0;
      i26 = HEAP32[i24 + 16 >> 2] | 0;
     }
     i21 = i26 | 0;
     if ((i26 | 0) == 0) {
      i27 = 0;
      break;
     }
     if (i22) {
      i28 = i21;
     } else {
      i29 = i21;
      while (1) {
       if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i8 >> 2] | 0, i29) | 0) {
        i9 = 93;
        break L18;
       }
       i21 = HEAP32[i5 >> 2] | 0;
       i30 = i21 + 32 | 0;
       if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
        i31 = i30 | 0;
       } else {
        i31 = HEAP32[i30 >> 2] | 0;
       }
       i30 = (HEAP32[i31 >> 2] | 0) == 0;
       HEAP32[i5 >> 2] = i29;
       i21 = HEAP32[i13 >> 2] | 0;
       if ((i21 | 0) != 0) {
        HEAP32[i13 >> 2] = i21 - 1;
       }
       do {
        if ((HEAP32[i29 + 12 >> 2] & 4096 | 0) == 0) {
         i9 = 72;
        } else {
         if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i29 | 0)) {
          i9 = 72;
          break;
         }
         i32 = HEAP32[i29 + 92 >> 2] | 0;
        }
       } while (0);
       if ((i9 | 0) == 72) {
        i9 = 0;
        i32 = HEAP32[i29 + 16 >> 2] | 0;
       }
       if (!i30) {
        __ZN7WebCore12TextIterator8exitNodeEv(i1);
       }
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        i9 = 76;
        break L18;
       }
       i21 = HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] | 0;
       if ((i21 | 0) != 0 | (i32 | 0) == 0) {
        i27 = i21;
        break L56;
       } else {
        i29 = i32 | 0;
       }
      }
     }
     while (1) {
      i29 = HEAP32[i8 >> 2] | 0;
      if ((i28 | 0) == (i29 | 0)) {
       i9 = 84;
       break L18;
      }
      if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i29, i28) | 0) {
       i9 = 85;
       break L18;
      }
      i29 = HEAP32[i5 >> 2] | 0;
      i22 = i29 + 32 | 0;
      if ((HEAP32[i29 + 12 >> 2] & 2048 | 0) == 0) {
       i33 = i22 | 0;
      } else {
       i33 = HEAP32[i22 >> 2] | 0;
      }
      i22 = (HEAP32[i33 >> 2] | 0) == 0;
      HEAP32[i5 >> 2] = i28;
      i29 = HEAP32[i13 >> 2] | 0;
      if ((i29 | 0) != 0) {
       HEAP32[i13 >> 2] = i29 - 1;
      }
      do {
       if ((HEAP32[i28 + 12 >> 2] & 4096 | 0) == 0) {
        i9 = 58;
       } else {
        if ((HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i28 | 0)) {
         i9 = 58;
         break;
        }
        i34 = HEAP32[i28 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i9 | 0) == 58) {
       i9 = 0;
       i34 = HEAP32[i28 + 16 >> 2] | 0;
      }
      if (!i22) {
       __ZN7WebCore12TextIterator8exitNodeEv(i1);
      }
      if ((HEAP32[i3 >> 2] | 0) != 0) {
       i9 = 76;
       break L18;
      }
      i30 = HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] | 0;
      if ((i30 | 0) != 0 | (i34 | 0) == 0) {
       i27 = i30;
       break;
      } else {
       i28 = i34 | 0;
      }
     }
    } else {
     i27 = i17;
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i13 >> 2] = i17 - 1;
   }
   HEAP32[i5 >> 2] = i27;
   if ((i27 | 0) != 0) {
    i20 = i27;
    i9 = 81;
   }
  }
  if ((i9 | 0) == 81) {
   i9 = 0;
   __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i16, i20);
  }
  HEAP8[i10] = 0;
  HEAP8[i11] = 0;
  HEAP8[i14] = 0;
  HEAP32[i15 >> 2] = 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i9 = 95;
   break;
  }
 }
 if ((i9 | 0) == 19) {
  __ZN7WebCore12TextIterator23representNodeOffsetZeroEv(i1);
  HEAP32[i5 >> 2] = 0;
  return;
 } else if ((i9 | 0) == 76) {
  HEAP8[i10] = 1;
  HEAP8[i11] = 1;
  return;
 } else if ((i9 | 0) == 84) {
  return;
 } else if ((i9 | 0) == 85) {
  return;
 } else if ((i9 | 0) == 86) {
  return;
 } else if ((i9 | 0) == 87) {
  return;
 } else if ((i9 | 0) == 91) {
  return;
 } else if ((i9 | 0) == 93) {
  return;
 } else if ((i9 | 0) == 95) {
  return;
 }
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i2 = i1 + 79 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 i3 = i1 | 0;
 do {
  if ((HEAP8[i1 + 78 | 0] & 1) != 0) {
   if ((__ZN7WebCore22HTMLFormControlElement27enclosingFormControlElementEPNS_4NodeE(HEAP32[i3 >> 2] | 0) | 0) == 0) {
    break;
   }
   HEAP8[i2] = 1;
   return;
  }
 } while (0);
 i2 = i1 + 48 | 0;
 HEAP32[i2 >> 2] = 0;
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 76 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 40 | 0;
 i8 = i1 + 44 | 0;
 i9 = i1 + 4 | 0;
 i10 = i1 + 74 | 0;
 i11 = i1 + 52 | 0;
 i12 = i1 + 56 | 0;
 i13 = i1 + 60 | 0;
 i14 = i1 + 72 | 0;
 i15 = i1 + 9 | 0;
 i16 = i1 + 12 | 0;
 i17 = i1 + 32 | 0;
 i18 = i1 + 12 | 0;
 i19 = i16 | 0;
 L9 : while (1) {
  i20 = HEAP32[i3 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i21 = 88;
   break;
  }
  if ((HEAP8[i5] & 1) != 0) {
   i21 = 91;
   break;
  }
  do {
   if ((HEAP8[i6] & 1) == 0) {
    if ((i20 | 0) == (HEAP32[i7 >> 2] | 0)) {
     if ((HEAP32[i8 >> 2] | 0) == 0) {
      break;
     }
    }
    i22 = i20 + 32 | 0;
    if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
     i23 = i22 | 0;
    } else {
     i23 = HEAP32[i22 >> 2] | 0;
    }
    i22 = HEAP32[i23 >> 2] | 0;
    L22 : do {
     if ((i22 | 0) == 0) {
      i21 = 31;
     } else {
      i24 = i22 + 20 | 0;
      do {
       if ((HEAP32[i24 >> 2] & 768 | 0) == 256) {
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 76 >> 2] & 1](i20) | 0) != 3) {
         break;
        }
        if ((HEAP32[i24 >> 2] & 768 | 0) == 256) {
         i25 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i25 = HEAP32[i22 + 36 >> 2] | 0;
        }
        if ((HEAP32[i25 + 40 >> 2] & 6144 | 0) != 0) {
         break L22;
        }
        if ((HEAP32[i9 >> 2] | 0) <= 0) {
         break L22;
        }
        HEAP8[i6] = (__ZN7WebCore31SimplifiedBackwardsTextIterator14handleTextNodeEv(i1) | 0) & 1;
        break L22;
       }
      } while (0);
      i26 = i22;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 92 >> 2] & 1](i22) | 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 228 >> 2] & 1](i22) | 0)) {
        i21 = 31;
        break;
       }
      }
      if ((HEAP32[i24 >> 2] & 768 | 0) == 256) {
       i27 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i27 = HEAP32[i22 + 36 >> 2] | 0;
      }
      if ((HEAP32[i27 + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
      if ((HEAP32[i9 >> 2] | 0) <= 0) {
       break;
      }
      i26 = __ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 >> 2] | 0) | 0;
      i28 = HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] | 0;
      HEAP16[i10 >> 1] = 44;
      HEAP32[i2 >> 2] = i28;
      HEAP32[i11 >> 2] = i26;
      HEAP32[i12 >> 2] = i26 + 1;
      HEAP32[i13 >> 2] = i10;
      HEAP32[i4 >> 2] = 1;
      HEAP16[i14 >> 1] = 44;
      HEAP8[i6] = 1;
     }
    } while (0);
    if ((i21 | 0) == 31) {
     i21 = 0;
     __ZN7WebCore31SimplifiedBackwardsTextIterator17handleNonTextNodeEv(i1) | 0;
     HEAP8[i6] = 1;
    }
    if ((HEAP32[i2 >> 2] | 0) != 0) {
     i21 = 94;
     break L9;
    }
   }
  } while (0);
  do {
   if ((HEAP8[i15] & 1) == 0) {
    i20 = HEAP32[i3 >> 2] | 0;
    if ((HEAP32[i20 + 12 >> 2] & 2 | 0) == 0) {
     i21 = 37;
     break;
    }
    if ((HEAP32[i20 + 36 >> 2] | 0) == 0) {
     i21 = 37;
     break;
    }
    i22 = HEAP32[i20 + 40 >> 2] | 0;
    HEAP32[i3 >> 2] = i22;
    __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i16, i22);
    i21 = 64;
   } else {
    i21 = 37;
   }
  } while (0);
  L51 : do {
   if ((i21 | 0) == 37) {
    i21 = 0;
    L53 : do {
     if ((HEAP8[i6] & 1) == 0) {
      i22 = HEAP32[i3 >> 2] | 0;
      if ((HEAP32[i22 + 12 >> 2] & 1 | 0) != 0) {
       break;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 132 >> 2] & 1](i22) | 0)) {
       break;
      }
      i22 = HEAP32[i3 >> 2] | 0;
      if ((HEAP32[i22 + 16 >> 2] | 0) == 0) {
       break;
      }
      do {
       if ((HEAP32[i22 + 12 >> 2] & 2 | 0) != 0) {
        if ((HEAP32[i22 + 40 >> 2] | 0) == 0) {
         break;
        }
        if ((i22 | 0) != (HEAP32[i7 >> 2] | 0)) {
         break L53;
        }
        if ((HEAP32[i8 >> 2] | 0) != 0) {
         break L53;
        }
       }
      } while (0);
      __ZN7WebCore31SimplifiedBackwardsTextIterator8exitNodeEv(i1);
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       i21 = 46;
       break L9;
      }
     }
    } while (0);
    while (1) {
     i29 = HEAP32[i3 >> 2] | 0;
     i30 = i29 + 24 | 0;
     if ((HEAP32[i30 >> 2] | 0) != 0) {
      break;
     }
     do {
      if ((HEAP32[i29 + 12 >> 2] & 4096 | 0) == 0) {
       i21 = 51;
      } else {
       if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i29 | 0)) {
        i21 = 51;
        break;
       }
       i31 = HEAP32[i29 + 92 >> 2] | 0;
      }
     } while (0);
     if ((i21 | 0) == 51) {
      i21 = 0;
      i31 = HEAP32[i29 + 16 >> 2] | 0;
     }
     if ((i31 | 0) == 0) {
      break;
     }
     i22 = HEAP8[i5] & 1 | (i29 | 0) == (HEAP32[i17 >> 2] | 0);
     HEAP8[i5] = i22;
     if (i22 << 24 >> 24 != 0) {
      break;
     }
     HEAP32[i3 >> 2] = i31;
     i22 = HEAP32[i18 >> 2] | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i18 >> 2] = i22 - 1;
     }
     __ZN7WebCore31SimplifiedBackwardsTextIterator8exitNodeEv(i1);
     if ((HEAP32[i2 >> 2] | 0) != 0) {
      i21 = 57;
      break L9;
     }
    }
    i22 = HEAP32[i19 >> 2] | 0;
    if ((i22 | 0) != 0) {
     HEAP32[i19 >> 2] = i22 - 1;
    }
    i22 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = HEAP8[i5] & 1 | (i29 | 0) == (HEAP32[i17 >> 2] | 0);
      HEAP8[i5] = i24;
      if (i24 << 24 >> 24 != 0) {
       break;
      }
      HEAP32[i3 >> 2] = i22;
      __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i16, i22);
      i21 = 64;
      break L51;
     }
    } while (0);
    HEAP32[i3 >> 2] = 0;
    i32 = 0;
   }
  } while (0);
  L85 : do {
   if ((i21 | 0) == 64) {
    i21 = 0;
    i22 = HEAP32[i3 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i32 = 0;
     break;
    }
    i24 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i22) | 0;
    i20 = (HEAP32[i22 + 12 >> 2] & 2048 | 0) == 0;
    i26 = i22 + 32 | 0;
    if (i20) {
     i33 = i26 | 0;
    } else {
     i33 = HEAP32[i26 >> 2] | 0;
    }
    if ((HEAP32[i33 >> 2] | 0) == 0) {
     i32 = i24;
     break;
    }
    if (i20) {
     i34 = i26 | 0;
    } else {
     i34 = HEAP32[i26 >> 2] | 0;
    }
    if ((HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] & 768 | 0) != 256) {
     i32 = i24;
     break;
    }
    if (i20) {
     i35 = i26 | 0;
    } else {
     i35 = HEAP32[i26 >> 2] | 0;
    }
    i26 = HEAP32[i35 >> 2] | 0;
    i20 = i26 + 44 | 0;
    i22 = HEAP32[i20 >> 2] | 0;
    if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
     i36 = HEAP32[i22 + 8 >> 2] | 0;
     i37 = i22;
    } else {
     i28 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i22) | 0;
     i36 = i28;
     i37 = HEAP32[i20 >> 2] | 0;
    }
    i20 = HEAP32[i37 + 4 >> 2] | 0;
    if ((i20 | 0) <= (i24 | 0)) {
     i32 = i20;
     break;
    }
    i28 = (HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 | 0;
    i26 = i24;
    while (1) {
     i24 = HEAPU16[i36 + (i26 << 1) >> 1] | 0;
     if ((i24 | 0) == 10) {
      i22 = HEAP32[i28 >> 2] & 7;
      if (!((i22 | 0) == 4 | (i22 | 0) == 0)) {
       i32 = i26;
       break L85;
      }
     } else if ((i24 | 0) == 32 | (i24 | 0) == 9) {
      if (((HEAP32[i28 >> 2] & 7) - 1 | 0) >>> 0 <= 1 >>> 0) {
       i32 = i26;
       break L85;
      }
     } else {
      i32 = i26;
      break L85;
     }
     i24 = i26 + 1 | 0;
     if ((i24 | 0) < (i20 | 0)) {
      i26 = i24;
     } else {
      i32 = i20;
      break;
     }
    }
   }
  } while (0);
  HEAP32[i9 >> 2] = i32;
  HEAP8[i6] = 0;
  HEAP8[i15] = 0;
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i21 = 92;
   break;
  }
 }
 if ((i21 | 0) == 46) {
  HEAP8[i6] = 1;
  HEAP8[i15] = 1;
  return;
 } else if ((i21 | 0) == 57) {
  HEAP8[i6] = 1;
  HEAP8[i15] = 1;
  return;
 } else if ((i21 | 0) == 88) {
  return;
 } else if ((i21 | 0) == 91) {
  return;
 } else if ((i21 | 0) == 92) {
  return;
 } else if ((i21 | 0) == 94) {
  return;
 }
}
function __ZN7WebCore12SearchBufferC2ERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i1 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i2 = i14 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  i15 = HEAP32[i13 >> 2] | 0;
 }
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = i3;
 i14 = i1 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i16 = i1 + 12 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 1;
 i17 = i1 + 29 | 0;
 HEAP8[i17] = i3 >>> 1 & 1;
 i3 = i1 + 30 | 0;
 do {
  if ((i15 | 0) == 0) {
   i18 = 0;
   i19 = 0;
   i20 = 0;
  } else {
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i21 = HEAP32[i15 + 8 >> 2] | 0;
    i22 = i15;
   } else {
    i23 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i15) | 0;
    i21 = i23;
    i22 = HEAP32[i13 >> 2] | 0;
   }
   if ((i22 | 0) == 0) {
    i18 = 0;
    i19 = i21;
    i20 = 0;
    break;
   }
   i18 = HEAP32[i22 + 4 >> 2] | 0;
   i19 = i21;
   i20 = i22;
  }
 } while (0);
 i22 = 0;
 while (1) {
  if (i22 >>> 0 >= i18 >>> 0) {
   i24 = 0;
   break;
  }
  i21 = HEAP16[i19 + (i22 << 1) >> 1] | 0;
  if ((i21 - 12353 & 65535) >>> 0 < 86 >>> 0 | (i21 - 12449 & 65535) >>> 0 < 90 >>> 0 | (i21 - 12784 & 65535) >>> 0 < 16 >>> 0) {
   i24 = 1;
   break;
  }
  if (i21 << 16 >> 16 != -144 & (i21 + 154 & 65535) >>> 0 < 56 >>> 0) {
   i24 = 1;
   break;
  } else {
   i22 = i22 + 1 | 0;
  }
 }
 HEAP8[i3] = i24;
 i24 = i1 + 32 | 0;
 _memset(i24 | 0, 0, 24) | 0;
 do {
  if ((i20 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i11, i20, 1523, 39);
   i22 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
   if ((i22 | 0) == 0) {
    break;
   }
   i19 = i22 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i10, i11, 1524, 34);
   i20 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
   if ((i20 | 0) == 0) {
    break;
   }
   i18 = i20 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i9, i10, 8220, 34);
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
   if ((i11 | 0) == 0) {
    break;
   }
   i19 = i11 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i8, i9, 8216, 39);
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
   if ((i10 | 0) == 0) {
    break;
   }
   i18 = i10 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i7, i8, 8221, 34);
   i9 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
   if ((i9 | 0) == 0) {
    break;
   }
   i19 = i9 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i6, i7, 8217, 39);
   i8 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
   if ((i8 | 0) == 0) {
    break;
   }
   i18 = i8 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i5, i6, 173, 0);
   i7 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i5 >> 2];
   if ((i7 | 0) == 0) {
    break;
   }
   i19 = i7 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i25 = 8192;
   i26 = 0;
   i27 = 52;
  } else {
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   i18 = i6 << 3;
   i19 = i18 >>> 0 < 8192 >>> 0 ? 8192 : i18;
   if ((i19 | 0) == 0) {
    i28 = i6;
    break;
   }
   if ((i19 | 0) >= 0) {
    i25 = i19;
    i26 = i6;
    i27 = 52;
    break;
   }
   _WTFCrash();
  }
 } while (0);
 if ((i27 | 0) == 52) {
  i27 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 1) | 0;
  HEAP32[i16 >> 2] = i27 >>> 1;
  HEAP32[i14 >> 2] = __ZN3WTF10fastMallocEj(i27) | 0;
  i28 = i26;
 }
 HEAP32[i1 + 20 >> 2] = (HEAP32[i16 >> 2] | 0) >>> 2;
 do {
  if (!((HEAP32[i2 >> 2] & 2 | 0) == 0 | (i28 | 0) == 0)) {
   i16 = HEAP32[i13 >> 2] | 0;
   if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
    i29 = HEAP32[i16 + 8 >> 2] | 0;
   } else {
    i29 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i16) | 0;
   }
   i16 = HEAPU16[i29 >> 1] | 0;
   do {
    if ((i16 & 64512 | 0) == 55296 & i28 >>> 0 > 1 >>> 0) {
     i1 = HEAP32[i13 >> 2] | 0;
     if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
      i30 = HEAP32[i1 + 8 >> 2] | 0;
     } else {
      i30 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
     }
     i1 = HEAPU16[i30 + 2 >> 1] | 0;
     if ((i1 & 64512 | 0) != 56320) {
      i31 = i16;
      break;
     }
     i31 = (i16 << 10) - 56613888 + i1 | 0;
    } else {
     i31 = i16;
    }
   } while (0);
   if ((i31 | 0) < 256) {
    if ((HEAP8[H_BASE + 40 + i31 | 0] & 1) == 0) {
     break;
    }
   } else {
    if ((1 << ((_u_charType(i31) | 0) << 24 >> 24) & 1073311744 | 0) == 0) {
     break;
    }
   }
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -3;
   HEAP8[i17] = 0;
  }
 } while (0);
 i17 = __ZN7WebCoreL8searcherEv() | 0;
 i31 = _usearch_getCollator(i17) | 0;
 i30 = HEAP32[i2 >> 2] & 1;
 i2 = 2 - i30 | 0;
 if ((_ucol_getStrength(i31) | 0) != (i2 | 0)) {
  _ucol_setStrength(i31, i2);
  _usearch_reset(i17);
 }
 HEAP32[i12 >> 2] = 0;
 _usearch_setAttribute(i17, 2, i30 | 2, i12);
 i30 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i30 | 0) == 0) {
   i32 = 0;
  } else {
   if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
    i32 = HEAP32[i30 + 8 >> 2] | 0;
    break;
   } else {
    i32 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i30) | 0;
    break;
   }
  }
 } while (0);
 _usearch_setPattern(i17, i32, i28, i12);
 if ((HEAP8[i3] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i33 = 0;
   i34 = 0;
  } else {
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i35 = HEAP32[i3 + 8 >> 2] | 0;
    i36 = i3;
   } else {
    i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i3) | 0;
    i35 = i12;
    i36 = HEAP32[i13 >> 2] | 0;
   }
   if ((i36 | 0) == 0) {
    i33 = 0;
    i34 = i35;
    break;
   }
   i33 = HEAP32[i36 + 4 >> 2] | 0;
   i34 = i35;
  }
 } while (0);
 __ZN7WebCoreL19normalizeCharactersEPKtjRN3WTF6VectorItLj0ENS2_15CrashOnOverflowEEE(i34, i33, i24);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12TextIterator13handleTextBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  i5 = i4 + 32 | 0;
  if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
   i6 = i5 | 0;
  } else {
   i6 = HEAP32[i5 >> 2] | 0;
  }
  i7 = HEAP32[i6 >> 2] | 0;
 } else {
  i7 = i3;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
   if ((HEAP8[i1 + 130 | 0] & 1) != 0) {
    break;
   }
   HEAP32[i1 + 84 >> 2] = 0;
   return;
  }
 } while (0);
 i3 = HEAP32[i7 + 44 >> 2] | 0;
 i6 = (i3 | 0) == 0;
 if (!i6) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
  i9 = HEAP32[i1 + 44 >> 2] | 0;
 } else {
  i9 = -1;
 }
 i10 = i1 + 84 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L19 : do {
  if ((i11 | 0) == 0) {
   i12 = 70;
  } else {
   i13 = i7 + 24 | 0;
   i14 = i7 + 48 | 0;
   i15 = i1 + 100 | 0;
   i16 = i1 + 102 | 0;
   i17 = i1 + 120 | 0;
   i18 = i1 + 116 | 0;
   i19 = i1 + 108 | 0;
   i20 = i11;
   L21 : while (1) {
    i21 = HEAP32[i20 + 44 >> 2] | 0;
    i22 = i21 >>> 0 < i4 >>> 0 ? i4 : i21;
    i23 = (HEAP8[i13] & 64) == 0;
    do {
     if (i23) {
      i24 = HEAP32[i14 >> 2] | 0;
     } else {
      if ((HEAP32[i18 >> 2] | 0) == 0) {
       i24 = 0;
       break;
      }
      i24 = HEAP32[HEAP32[i19 >> 2] >> 2] | 0;
     }
    } while (0);
    if ((HEAP8[i15] & 1) == 0) {
     if ((i20 | 0) == (i24 | 0) & (i21 | 0) == (i22 | 0) & (i22 | 0) != 0) {
      i12 = 21;
     }
    } else {
     i12 = 21;
    }
    do {
     if ((i12 | 0) == 21) {
      i12 = 0;
      i25 = HEAP16[i16 >> 1] | 0;
      i26 = i25 & 65535;
      if ((i26 | 0) == 32 | (i26 | 0) == 10) {
       break;
      }
      if (i25 << 16 >> 16 != 0) {
       i12 = 23;
       break L21;
      }
     }
    } while (0);
    i27 = (HEAPU16[i20 + 48 >> 1] | 0) + i21 | 0;
    i28 = i9 >>> 0 < i27 >>> 0 ? i9 : i27;
    do {
     if (i23) {
      i29 = HEAP32[i20 + 40 >> 2] | 0;
     } else {
      i25 = (HEAP32[i17 >> 2] | 0) + 1 | 0;
      if (i25 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
       i29 = 0;
       break;
      }
      i29 = HEAP32[(HEAP32[i19 >> 2] | 0) + (i25 << 2) >> 2] | 0;
     }
    } while (0);
    if (i22 >>> 0 < i28 >>> 0) {
     break;
    }
    HEAP32[i10 >> 2] = i29;
    if ((HEAP8[i13] & 64) != 0) {
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    if ((i29 | 0) == 0) {
     i12 = 70;
     break L19;
    } else {
     i20 = i29;
    }
   }
   if ((i12 | 0) == 23) {
    do {
     if (!((HEAP32[i1 + 96 >> 2] | 0) != (i8 | 0) | (i22 | 0) == 0)) {
      i20 = i22 - 1 | 0;
      if (i6) {
       break;
      }
      i19 = HEAP32[i3 + 4 >> 2] | 0;
      if (i19 >>> 0 <= i20 >>> 0) {
       break;
      }
      i18 = (HEAP32[i3 + 16 >> 2] & 32 | 0) == 0;
      i14 = i3 + 8 | 0;
      if (i18) {
       i23 = HEAP32[i14 >> 2] | 0;
       i30 = HEAP16[i23 + (i20 << 1) >> 1] | 0;
       i31 = i23;
       i32 = i23;
      } else {
       i23 = HEAP32[i14 >> 2] | 0;
       i30 = HEAPU8[i23 + i20 | 0] | 0;
       i31 = i23;
       i32 = i23;
      }
      if (i30 << 16 >> 16 == 32) {
       i33 = i20;
       i34 = i31;
      } else {
       break;
      }
      while (1) {
       if ((i33 | 0) == 0) {
        i35 = 0;
        break;
       }
       i20 = i33 - 1 | 0;
       if (i19 >>> 0 <= i20 >>> 0) {
        i35 = i33;
        break;
       }
       if (i18) {
        i36 = HEAP16[i34 + (i20 << 1) >> 1] | 0;
        i37 = i34;
       } else {
        i36 = HEAPU8[i32 + i20 | 0] | 0;
        i37 = i32;
       }
       if (i36 << 16 >> 16 == 32) {
        i33 = i20;
        i34 = i37;
       } else {
        i35 = i33;
        break;
       }
      }
      __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, i8, i7 | 0, i35, i35 + 1 | 0);
      break L19;
     }
    } while (0);
    HEAP8[i1 + 124 | 0] = 1;
    HEAP32[i1 + 52 >> 2] = i8;
    HEAP32[i1 + 56 >> 2] = 0;
    HEAP32[i1 + 60 >> 2] = i22;
    HEAP32[i1 + 64 >> 2] = i22;
    i18 = i1 + 104 | 0;
    HEAP16[i18 >> 1] = 32;
    HEAP32[i1 + 68 >> 2] = i18;
    HEAP32[i1 + 72 >> 2] = 1;
    HEAP8[i15] = 0;
    HEAP16[i16 >> 1] = 32;
    break;
   }
   L64 : do {
    if (i6) {
     i38 = -1;
     i12 = 57;
    } else {
     i18 = HEAP32[i3 + 4 >> 2] | 0;
     i19 = HEAP32[i3 + 16 >> 2] | 0;
     do {
      if (i18 >>> 0 > i22 >>> 0) {
       i20 = i3 + 8 | 0;
       if ((i19 & 32 | 0) == 0) {
        i39 = HEAP16[(HEAP32[i20 >> 2] | 0) + (i22 << 1) >> 1] | 0;
       } else {
        i39 = HEAPU8[(HEAP32[i20 >> 2] | 0) + i22 | 0] | 0;
       }
       if (i39 << 16 >> 16 != 10) {
        break;
       }
       i20 = i22 + 1 | 0;
       HEAP8[i1 + 124 | 0] = 1;
       HEAP32[i1 + 52 >> 2] = i8;
       HEAP32[i1 + 56 >> 2] = 0;
       HEAP32[i1 + 60 >> 2] = i22;
       HEAP32[i1 + 64 >> 2] = i20;
       i23 = i1 + 104 | 0;
       HEAP16[i23 >> 1] = 32;
       HEAP32[i1 + 68 >> 2] = i23;
       HEAP32[i1 + 72 >> 2] = 1;
       HEAP8[i15] = 0;
       HEAP16[i16 >> 1] = 32;
       HEAP32[i5 >> 2] = i20;
       i40 = i20;
       break L64;
      }
     } while (0);
     if ((i19 & 32 | 0) == 0) {
      i20 = HEAP32[i3 + 8 >> 2] | 0;
      i23 = i22;
      while (1) {
       if (i23 >>> 0 >= i18 >>> 0) {
        i38 = -1;
        i12 = 57;
        break L64;
       }
       if ((HEAP16[i20 + (i23 << 1) >> 1] | 0) == 10) {
        i38 = i23;
        i12 = 57;
        break;
       } else {
        i23 = i23 + 1 | 0;
       }
      }
     } else {
      i23 = HEAP32[i3 + 8 >> 2] | 0;
      i20 = i22;
      while (1) {
       if (i20 >>> 0 >= i18 >>> 0) {
        i38 = -1;
        i12 = 57;
        break L64;
       }
       if ((HEAP8[i23 + i20 | 0] | 0) == 10) {
        i38 = i20;
        i12 = 57;
        break;
       } else {
        i20 = i20 + 1 | 0;
       }
      }
     }
    }
   } while (0);
   if ((i12 | 0) == 57) {
    i16 = (i38 | 0) == -1 | i38 >>> 0 > i28 >>> 0 ? i28 : i38;
    HEAP32[i5 >> 2] = i16;
    __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, i8, i7 | 0, i22, i16);
    i40 = HEAP32[i1 + 64 >> 2] | 0;
   }
   if (i40 >>> 0 < i27 >>> 0) {
    break;
   }
   do {
    if ((i29 | 0) == 0) {
     if (i6) {
      break;
     }
     i41 = i3 + 4 | 0;
     i12 = 63;
    } else {
     i41 = i29 + 44 | 0;
     i12 = 63;
    }
   } while (0);
   do {
    if ((i12 | 0) == 63) {
     if ((HEAP32[i41 >> 2] | 0) >>> 0 <= i28 >>> 0) {
      break;
     }
     HEAP8[i15] = 1;
    }
   } while (0);
   HEAP32[i10 >> 2] = i29;
   if ((HEAP8[i13] & 64) == 0) {
    break;
   }
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  }
 } while (0);
 do {
  if ((i12 | 0) == 70) {
   i29 = i1 + 88 | 0;
   i28 = HEAP32[i29 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = i28;
   HEAP32[i29 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore12TextIterator13handleTextBoxEv(i1);
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  return;
 }
}
function __ZNK7WebCore12SearchBuffer10isBadMatchEPKtj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((HEAP8[i1 + 30 | 0] & 1) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 44 | 0;
 __ZN7WebCoreL19normalizeCharactersEPKtjRN3WTF6VectorItLj0ENS2_15CrashOnOverflowEEE(i2, i3, i5);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i2 = i3 + (HEAP32[i1 + 40 >> 2] << 1) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i6 + (HEAP32[i1 + 52 >> 2] << 1) | 0;
 i1 = i6;
 i6 = i3;
 L4 : while (1) {
  i3 = i6;
  while (1) {
   if ((i3 | 0) == (i2 | 0)) {
    i7 = i2;
    i8 = 1;
    break;
   }
   i9 = HEAP16[i3 >> 1] | 0;
   if ((i9 - 12353 & 65535) >>> 0 < 86 >>> 0 | (i9 - 12449 & 65535) >>> 0 < 90 >>> 0 | (i9 - 12784 & 65535) >>> 0 < 16 >>> 0) {
    i7 = i3;
    i8 = 0;
    break;
   }
   if (i9 << 16 >> 16 != -144 & (i9 + 154 & 65535) >>> 0 < 56 >>> 0) {
    i7 = i3;
    i8 = 0;
    break;
   } else {
    i3 = i3 + 2 | 0;
   }
  }
  i3 = i1;
  while (1) {
   if ((i3 | 0) == (i5 | 0)) {
    i4 = 0;
    i10 = 34;
    break L4;
   }
   i11 = HEAP16[i3 >> 1] | 0;
   if ((i11 - 12353 & 65535) >>> 0 < 86 >>> 0 | (i11 - 12449 & 65535) >>> 0 < 90 >>> 0 | (i11 - 12784 & 65535) >>> 0 < 16 >>> 0) {
    break;
   }
   if (i11 << 16 >> 16 != -144 & (i11 + 154 & 65535) >>> 0 < 56 >>> 0) {
    break;
   } else {
    i3 = i3 + 2 | 0;
   }
  }
  if (i8) {
   i4 = 0;
   i10 = 32;
   break;
  }
  i9 = HEAPU16[i7 >> 1] | 0;
  if ((i9 | 0) == 12353 | (i9 | 0) == 12355 | (i9 | 0) == 12357 | (i9 | 0) == 12359 | (i9 | 0) == 12361 | (i9 | 0) == 12387 | (i9 | 0) == 12419 | (i9 | 0) == 12421 | (i9 | 0) == 12423 | (i9 | 0) == 12430 | (i9 | 0) == 12437 | (i9 | 0) == 12438 | (i9 | 0) == 12449 | (i9 | 0) == 12451 | (i9 | 0) == 12453 | (i9 | 0) == 12455 | (i9 | 0) == 12457 | (i9 | 0) == 12483 | (i9 | 0) == 12515 | (i9 | 0) == 12517 | (i9 | 0) == 12519 | (i9 | 0) == 12526 | (i9 | 0) == 12533 | (i9 | 0) == 12534 | (i9 | 0) == 12784 | (i9 | 0) == 12785 | (i9 | 0) == 12786 | (i9 | 0) == 12787 | (i9 | 0) == 12788 | (i9 | 0) == 12789 | (i9 | 0) == 12790 | (i9 | 0) == 12791 | (i9 | 0) == 12792 | (i9 | 0) == 12793 | (i9 | 0) == 12794 | (i9 | 0) == 12795 | (i9 | 0) == 12796 | (i9 | 0) == 12797 | (i9 | 0) == 12798 | (i9 | 0) == 12799 | (i9 | 0) == 65383 | (i9 | 0) == 65384 | (i9 | 0) == 65385 | (i9 | 0) == 65386 | (i9 | 0) == 65387 | (i9 | 0) == 65388 | (i9 | 0) == 65389 | (i9 | 0) == 65390 | (i9 | 0) == 65391) {
   i12 = 1;
  } else {
   i12 = 0;
  }
  i13 = i11 & 65535;
  if ((i13 | 0) == 12353 | (i13 | 0) == 12355 | (i13 | 0) == 12357 | (i13 | 0) == 12359 | (i13 | 0) == 12361 | (i13 | 0) == 12387 | (i13 | 0) == 12419 | (i13 | 0) == 12421 | (i13 | 0) == 12423 | (i13 | 0) == 12430 | (i13 | 0) == 12437 | (i13 | 0) == 12438 | (i13 | 0) == 12449 | (i13 | 0) == 12451 | (i13 | 0) == 12453 | (i13 | 0) == 12455 | (i13 | 0) == 12457 | (i13 | 0) == 12483 | (i13 | 0) == 12515 | (i13 | 0) == 12517 | (i13 | 0) == 12519 | (i13 | 0) == 12526 | (i13 | 0) == 12533 | (i13 | 0) == 12534 | (i13 | 0) == 12784 | (i13 | 0) == 12785 | (i13 | 0) == 12786 | (i13 | 0) == 12787 | (i13 | 0) == 12788 | (i13 | 0) == 12789 | (i13 | 0) == 12790 | (i13 | 0) == 12791 | (i13 | 0) == 12792 | (i13 | 0) == 12793 | (i13 | 0) == 12794 | (i13 | 0) == 12795 | (i13 | 0) == 12796 | (i13 | 0) == 12797 | (i13 | 0) == 12798 | (i13 | 0) == 12799 | (i13 | 0) == 65383 | (i13 | 0) == 65384 | (i13 | 0) == 65385 | (i13 | 0) == 65386 | (i13 | 0) == 65387 | (i13 | 0) == 65388 | (i13 | 0) == 65389 | (i13 | 0) == 65390 | (i13 | 0) == 65391) {
   if (!i12) {
    i4 = 1;
    i10 = 35;
    break;
   }
  } else {
   if (i12) {
    i4 = 1;
    i10 = 37;
    break;
   }
  }
  switch (i9 | 0) {
  case 12364:
  case 12366:
  case 12368:
  case 12370:
  case 12372:
  case 12374:
  case 12376:
  case 12378:
  case 12380:
  case 12382:
  case 12384:
  case 12386:
  case 12389:
  case 12391:
  case 12393:
  case 12400:
  case 12403:
  case 12406:
  case 12409:
  case 12412:
  case 12436:
  case 12460:
  case 12462:
  case 12464:
  case 12466:
  case 12468:
  case 12470:
  case 12472:
  case 12474:
  case 12476:
  case 12478:
  case 12480:
  case 12482:
  case 12485:
  case 12487:
  case 12489:
  case 12496:
  case 12499:
  case 12502:
  case 12505:
  case 12508:
  case 12532:
  case 12535:
  case 12536:
  case 12537:
  case 12538:
   {
    i14 = 1;
    break;
   }
  case 12401:
  case 12404:
  case 12407:
  case 12410:
  case 12413:
  case 12497:
  case 12500:
  case 12503:
  case 12506:
  case 12509:
   {
    i14 = 2;
    break;
   }
  default:
   {
    i14 = 0;
   }
  }
  switch (i13 | 0) {
  case 12401:
  case 12404:
  case 12407:
  case 12410:
  case 12413:
  case 12497:
  case 12500:
  case 12503:
  case 12506:
  case 12509:
   {
    i15 = 2;
    break;
   }
  case 12364:
  case 12366:
  case 12368:
  case 12370:
  case 12372:
  case 12374:
  case 12376:
  case 12378:
  case 12380:
  case 12382:
  case 12384:
  case 12386:
  case 12389:
  case 12391:
  case 12393:
  case 12400:
  case 12403:
  case 12406:
  case 12409:
  case 12412:
  case 12436:
  case 12460:
  case 12462:
  case 12464:
  case 12466:
  case 12468:
  case 12470:
  case 12472:
  case 12474:
  case 12476:
  case 12478:
  case 12480:
  case 12482:
  case 12485:
  case 12487:
  case 12489:
  case 12496:
  case 12499:
  case 12502:
  case 12505:
  case 12508:
  case 12532:
  case 12535:
  case 12536:
  case 12537:
  case 12538:
   {
    i15 = 1;
    break;
   }
  default:
   {
    i15 = 0;
   }
  }
  if ((i14 | 0) == (i15 | 0)) {
   i16 = i3;
   i17 = i7;
  } else {
   i4 = 1;
   i10 = 33;
   break;
  }
  while (1) {
   i18 = i16 + 2 | 0;
   i13 = i17 + 2 | 0;
   if ((i13 | 0) == (i2 | 0)) {
    i19 = i2;
    break;
   }
   i9 = HEAP16[i13 >> 1] | 0;
   if (((i9 & 65535) - 12441 | 0) >>> 0 >= 2 >>> 0) {
    i19 = i13;
    break;
   }
   if ((i18 | 0) == (i5 | 0)) {
    i4 = 1;
    i10 = 36;
    break L4;
   }
   i20 = HEAP16[i18 >> 1] | 0;
   if (((i20 & 65535) - 12441 | 0) >>> 0 < 2 >>> 0 & i9 << 16 >> 16 == i20 << 16 >> 16) {
    i16 = i18;
    i17 = i13;
   } else {
    i4 = 1;
    i10 = 39;
    break L4;
   }
  }
  if ((i18 | 0) == (i5 | 0)) {
   i1 = i18;
   i6 = i19;
   continue;
  }
  if (((HEAPU16[i18 >> 1] | 0) - 12441 | 0) >>> 0 < 2 >>> 0) {
   i4 = 1;
   i10 = 38;
   break;
  } else {
   i1 = i18;
   i6 = i19;
  }
 }
 if ((i10 | 0) == 38) {
  return i4 | 0;
 } else if ((i10 | 0) == 39) {
  return i4 | 0;
 } else if ((i10 | 0) == 34) {
  return i4 | 0;
 } else if ((i10 | 0) == 35) {
  return i4 | 0;
 } else if ((i10 | 0) == 36) {
  return i4 | 0;
 } else if ((i10 | 0) == 37) {
  return i4 | 0;
 } else if ((i10 | 0) == 32) {
  return i4 | 0;
 } else if ((i10 | 0) == 33) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore12TextIterator8exitNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 124 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2 | 0) == 0) {
  i7 = i6;
 } else {
  i8 = HEAP32[i6 + 40 >> 2] | 0;
  i7 = (i8 | 0) == 0 ? i6 : i8;
 }
 L7 : do {
  if ((HEAP32[i1 + 96 >> 2] | 0) != 0) {
   if (__ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE(i6) | 0) {
    i9 = i6;
   } else {
    break;
   }
   while (1) {
    i8 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i10 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i9) | 0;
     if ((i10 | 0) == 0) {
      break L7;
     } else {
      i11 = i10;
     }
    } else {
     i11 = i8;
    }
    i8 = i11 + 32 | 0;
    if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
     i12 = i8 | 0;
    } else {
     i12 = HEAP32[i8 >> 2] | 0;
    }
    if ((HEAP32[i12 >> 2] | 0) == 0) {
     i9 = i11;
    } else {
     break;
    }
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i10 = HEAP32[i8 + 12 >> 2] | 0;
   i13 = i8 + 32 | 0;
   if ((i10 & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   L23 : do {
    if ((i13 | 0) == 0) {
     i15 = 0;
    } else {
     if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
      i15 = 0;
      break;
     }
     L26 : do {
      if ((i10 & 4 | 0) != 0) {
       i16 = HEAP32[i8 + 44 >> 2] | 0;
       i17 = HEAP32[__ZN7WebCore9HTMLNames5h1TagE >> 2] | 0;
       do {
        if ((i16 | 0) != (i17 | 0)) {
         i18 = HEAP32[i16 + 12 >> 2] | 0;
         if ((i18 | 0) == (HEAP32[i17 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i17 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames5h2TagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames5h3TagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames5h4TagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames5h5TagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames5h6TagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) == (HEAP32[i19 + 12 >> 2] | 0)) {
          if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
           break;
          }
         }
         i19 = HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0;
         if ((i16 | 0) == (i19 | 0)) {
          break;
         }
         if ((i18 | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
          break L26;
         }
         if ((HEAP32[i16 + 16 >> 2] | 0) != (HEAP32[i19 + 16 >> 2] | 0)) {
          break L26;
         }
        }
       } while (0);
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 860 >> 2] & 3](i3, i13);
       i16 = HEAP32[i3 >> 2] | 0;
       if ((i16 << 1 | 0) >= (~~(+HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(HEAP32[i13 + 36 >> 2] | 0) | 0) + 12 >> 2] + +.5) | 0)) {
        i15 = 1;
        break L23;
       }
      }
     } while (0);
     i15 = 0;
    }
   } while (0);
   i13 = i1 + 102 | 0;
   if ((HEAP16[i13 >> 1] | 0) != 10) {
    i8 = HEAP32[i7 + 16 >> 2] | 0;
    HEAP8[i4] = 1;
    HEAP32[i1 + 52 >> 2] = i8;
    HEAP32[i1 + 56 >> 2] = i7;
    HEAP32[i1 + 60 >> 2] = 1;
    HEAP32[i1 + 64 >> 2] = 1;
    i8 = i1 + 104 | 0;
    HEAP16[i8 >> 1] = 10;
    HEAP32[i1 + 68 >> 2] = i8;
    HEAP32[i1 + 72 >> 2] = 1;
    HEAP8[i1 + 100 | 0] = 0;
    HEAP16[i13 >> 1] = 10;
    HEAP8[i1 + 80 | 0] = i15 & 1;
    break;
   }
   if (!i15) {
    break;
   }
   i8 = HEAP32[i7 + 16 >> 2] | 0;
   HEAP8[i4] = 1;
   HEAP32[i1 + 52 >> 2] = i8;
   HEAP32[i1 + 56 >> 2] = i7;
   HEAP32[i1 + 60 >> 2] = 1;
   HEAP32[i1 + 64 >> 2] = 1;
   i8 = i1 + 104 | 0;
   HEAP16[i8 >> 1] = 10;
   HEAP32[i1 + 68 >> 2] = i8;
   HEAP32[i1 + 72 >> 2] = 1;
   HEAP8[i1 + 100 | 0] = 0;
   HEAP16[i13 >> 1] = 10;
  }
 } while (0);
 i15 = i1 + 52 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i3 + 12 | 0;
 i14 = (HEAP32[i5 >> 2] & 2048 | 0) == 0;
 i11 = i3 + 32 | 0;
 if (i14) {
  i20 = i11 | 0;
 } else {
  i20 = HEAP32[i11 >> 2] | 0;
 }
 if ((HEAP32[i20 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (i14) {
  i21 = i11 | 0;
 } else {
  i21 = HEAP32[i11 >> 2] | 0;
 }
 i14 = HEAP32[i21 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 184 >> 2] & 1](i14) | 0)) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i22 = i11 | 0;
 } else {
  i22 = HEAP32[i11 >> 2] | 0;
 }
 do {
  if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] & 1024 | 0) == 0) {
   if ((HEAP8[i1 + 125 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i22 = HEAP32[i7 + 16 >> 2] | 0;
 HEAP8[i4] = 1;
 HEAP32[i15 >> 2] = i22;
 HEAP32[i1 + 56 >> 2] = i7;
 HEAP32[i1 + 60 >> 2] = 1;
 HEAP32[i1 + 64 >> 2] = 1;
 i7 = i1 + 104 | 0;
 HEAP16[i7 >> 1] = 32;
 HEAP32[i1 + 68 >> 2] = i7;
 HEAP32[i1 + 72 >> 2] = 1;
 HEAP8[i1 + 100 | 0] = 0;
 HEAP16[i1 + 102 >> 1] = 32;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12TextIterator29shouldRepresentNodeOffsetZeroEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 do {
  if ((HEAP8[i1 + 125 | 0] & 1) != 0) {
   i9 = HEAP32[i1 >> 2] | 0;
   i10 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
   i11 = i9 + 32 | 0;
   if (i10) {
    i12 = i11 | 0;
   } else {
    i12 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    break;
   }
   if (i10) {
    i13 = i11 | 0;
   } else {
    i13 = HEAP32[i11 >> 2] | 0;
   }
   i11 = HEAP32[i13 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 1](i11) | 0) {
    i14 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i14 | 0;
  }
 } while (0);
 if ((HEAP16[i1 + 102 >> 1] | 0) == 10) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 if ((HEAP8[i1 + 124 | 0] & 1) != 0) {
  i14 = 1;
  STACKTOP = i2;
  return i14 | 0;
 }
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i11 = i1 + 32 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == (i10 | 0)) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i12, i10) | 0)) {
  i14 = 1;
  STACKTOP = i2;
  return i14 | 0;
 }
 i10 = i1 + 36 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 i9 = HEAP32[i12 + 12 >> 2] | 0;
 i15 = (i9 & 2048 | 0) == 0;
 i16 = i12 + 32 | 0;
 if (i15) {
  i17 = i16 | 0;
 } else {
  i17 = HEAP32[i16 >> 2] | 0;
 }
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 if (i15) {
  i18 = i16 | 0;
 } else {
  i18 = HEAP32[i16 >> 2] | 0;
 }
 i17 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i17 + 20 >> 2] & 768 | 0) == 256) {
  i19 = HEAP32[(HEAP32[i17 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i19 = HEAP32[i17 + 36 >> 2] | 0;
 }
 if ((HEAP32[i19 + 40 >> 2] & 6144 | 0) != 0) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 if (i15) {
  i20 = i16 | 0;
 } else {
  i20 = HEAP32[i16 >> 2] | 0;
 }
 i19 = HEAP32[i20 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i19 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   if (i15) {
    i21 = i16 | 0;
   } else {
    i21 = HEAP32[i16 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i21 >> 2] | 0) + 56 >> 2] | 0) != 0) {
    break;
   }
   if ((i9 & 4 | 0) == 0) {
    i14 = 0;
    STACKTOP = i2;
    return i14 | 0;
   }
   i20 = HEAP32[i12 + 44 >> 2] | 0;
   i17 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i20 | 0) == (i17 | 0)) {
    break;
   }
   if ((HEAP32[i20 + 12 >> 2] | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
    i14 = 0;
    STACKTOP = i2;
    return i14 | 0;
   }
   if ((HEAP32[i20 + 16 >> 2] | 0) == (HEAP32[i17 + 16 >> 2] | 0)) {
    break;
   } else {
    i14 = 0;
   }
   STACKTOP = i2;
   return i14 | 0;
  }
 } while (0);
 i12 = HEAP32[i11 >> 2] | 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i22 = i1;
 } else {
  i1 = i12 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i22 = HEAP32[i10 >> 2] | 0;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i5, i6, i22, 0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 i22 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i5 = i22 + 8 | 0;
   i6 = i5 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i11 = i22 + 8 | 0;
   i5 = i11 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i13 >> 2] | 0;
 i13 = i3 | 0;
 HEAP32[i13 >> 2] = i22;
 if ((i22 | 0) != 0) {
  i11 = i22 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i8, i3, 1);
 i3 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = i3 + 8 | 0;
   i11 = i13 | 0;
   i22 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i8, 1);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i13 = i8 | 0;
   i22 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i4 | 0;
 i8 = i7 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i23 = 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    i23 = 0;
    break;
   }
   i23 = (__ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i4, i7) | 0) ^ 1;
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i4 = i8 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i14 = i23;
  STACKTOP = i2;
  return i14 | 0;
 }
 i3 = i7 + 8 | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  i14 = i23;
  STACKTOP = i2;
  return i14 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i14 = i23;
  STACKTOP = i2;
  return i14 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i14 = i23;
 STACKTOP = i2;
 return i14 | 0;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 switch (i2 - i1 >> 2 | 0) {
 case 0:
 case 1:
  {
   i4 = 1;
   return i4 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i1 + 4 | 0, i1 + 8 | 0, i2 - 4 | 0, i3) | 0;
   i4 = 1;
   return i4 | 0;
  }
 case 5:
  {
   i5 = i1 + 4 | 0;
   i6 = i1 + 8 | 0;
   i7 = i1 + 12 | 0;
   i8 = i2 - 4 | 0;
   __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i5, i6, i7, i3) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i8 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = i8;
   HEAP32[i7 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i8, HEAP32[i5 >> 2] | 0) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = i9;
   HEAP32[i6 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i9, HEAP32[i1 >> 2] | 0) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i9;
   i4 = 1;
   return i4 | 0;
  }
 case 2:
  {
   i9 = i2 - 4 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i5 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i5;
   i4 = 1;
   return i4 | 0;
  }
 case 3:
  {
   i5 = i1 + 4 | 0;
   i9 = i2 - 4 | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i6 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0;
   if (!i8) {
    if (!i6) {
     i4 = 1;
     return i4 | 0;
    }
    i8 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i8;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
     i4 = 1;
     return i4 | 0;
    }
    i8 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i5 >> 2] = i8;
    i4 = 1;
    return i4 | 0;
   }
   i8 = HEAP32[i1 >> 2] | 0;
   if (i6) {
    HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i8;
    i4 = 1;
    return i4 | 0;
   }
   HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, i8) | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i8;
   i4 = 1;
   return i4 | 0;
  }
 default:
  {
   i8 = i1 + 8 | 0;
   i9 = i1 + 4 | 0;
   i5 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i6 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i8 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
   do {
    if (i5) {
     i7 = HEAP32[i1 >> 2] | 0;
     if (i6) {
      HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
      HEAP32[i8 >> 2] = i7;
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i7;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i8 >> 2] | 0, i7) | 0)) {
      break;
     }
     i7 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i8 >> 2] = i7;
    } else {
     if (!i6) {
      break;
     }
     i7 = HEAP32[i9 >> 2] | 0;
     i10 = HEAP32[i8 >> 2] | 0;
     HEAP32[i9 >> 2] = i10;
     HEAP32[i8 >> 2] = i7;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, HEAP32[i1 >> 2] | 0) | 0)) {
      break;
     }
     i10 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i10;
    }
   } while (0);
   i9 = i1 + 12 | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i4 = 1;
    return i4 | 0;
   } else {
    i11 = i8;
    i12 = 0;
    i13 = i9;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i13 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
     i9 = HEAP32[i13 >> 2] | 0;
     i8 = i11;
     i6 = i13;
     while (1) {
      HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
      if ((i8 | 0) == (i1 | 0)) {
       i14 = i1;
       break;
      }
      i5 = i8 - 4 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i9, HEAP32[i5 >> 2] | 0) | 0) {
       i6 = i8;
       i8 = i5;
      } else {
       i14 = i8;
       break;
      }
     }
     HEAP32[i14 >> 2] = i9;
     i8 = i12 + 1 | 0;
     if ((i8 | 0) == 8) {
      break;
     } else {
      i15 = i8;
     }
    } else {
     i15 = i12;
    }
    i8 = i13 + 4 | 0;
    if ((i8 | 0) == (i2 | 0)) {
     i4 = 1;
     i16 = 52;
     break;
    } else {
     i11 = i13;
     i12 = i15;
     i13 = i8;
    }
   }
   if ((i16 | 0) == 52) {
    return i4 | 0;
   }
   i4 = (i13 + 4 | 0) == (i2 | 0);
   return i4 | 0;
  }
 }
 return 0;
}
function __ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 424 | 0;
 i4 = i3 | 0;
 i5 = i3 + 416 | 0;
 i6 = i4 + 12 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i6;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 100;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
   i10 = 4;
  } else {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
    i10 = 4;
    break;
   }
   i11 = HEAP32[i2 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i10 | 0) == 4) {
  i11 = HEAP32[i2 + 16 >> 2] | 0;
 }
 i4 = i11 | 0;
 HEAP32[i5 >> 2] = i4;
 L7 : do {
  if ((i11 | 0) != 0) {
   i12 = i5;
   i13 = i4;
   i14 = 0;
   i15 = 100;
   L9 : while (1) {
    if ((i14 | 0) == (i15 | 0)) {
     i16 = i15 + 1 | 0;
     i17 = HEAP32[i7 >> 2] | 0;
     do {
      if (i17 >>> 0 > i5 >>> 0) {
       i10 = 12;
      } else {
       if ((i17 + (i15 << 2) | 0) >>> 0 <= i5 >>> 0) {
        i10 = 12;
        break;
       }
       i18 = i12 - i17 >> 2;
       i19 = i16 + (i15 >>> 2) | 0;
       i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
       i19 = i20 >>> 0 > i16 >>> 0 ? i20 : i16;
       do {
        if (i15 >>> 0 < i19 >>> 0) {
         if (i19 >>> 0 > 100 >>> 0) {
          if (i19 >>> 0 > 1073741823 >>> 0) {
           i10 = 26;
           break L9;
          }
          i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
          HEAP32[i8 >> 2] = i20 >>> 2;
          i21 = __ZN3WTF10fastMallocEj(i20) | 0;
          HEAP32[i7 >> 2] = i21;
          i22 = i21;
         } else {
          HEAP32[i7 >> 2] = i6;
          HEAP32[i8 >> 2] = 100;
          i22 = i6;
         }
         i21 = i17;
         _memcpy(i22 | 0, i21 | 0, i15 << 2) | 0;
         if ((i6 | 0) == (i17 | 0) | (i17 | 0) == 0) {
          break;
         }
         if ((HEAP32[i7 >> 2] | 0) == (i17 | 0)) {
          HEAP32[i7 >> 2] = 0;
          HEAP32[i8 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i21);
        }
       } while (0);
       i19 = HEAP32[i7 >> 2] | 0;
       i23 = i19 + (i18 << 2) | 0;
       i24 = i19;
      }
     } while (0);
     if ((i10 | 0) == 12) {
      i10 = 0;
      i19 = i16 + (i15 >>> 2) | 0;
      i21 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
      i19 = i21 >>> 0 > i16 >>> 0 ? i21 : i16;
      do {
       if (i15 >>> 0 < i19 >>> 0) {
        if (i19 >>> 0 > 100 >>> 0) {
         if (i19 >>> 0 > 1073741823 >>> 0) {
          i10 = 15;
          break L9;
         }
         i21 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
         HEAP32[i8 >> 2] = i21 >>> 2;
         i20 = __ZN3WTF10fastMallocEj(i21) | 0;
         HEAP32[i7 >> 2] = i20;
         i25 = i20;
        } else {
         HEAP32[i7 >> 2] = i6;
         HEAP32[i8 >> 2] = 100;
         i25 = i6;
        }
        i20 = i17;
        _memcpy(i25 | 0, i20 | 0, i15 << 2) | 0;
        if ((i6 | 0) == (i17 | 0) | (i17 | 0) == 0) {
         break;
        }
        if ((HEAP32[i7 >> 2] | 0) == (i17 | 0)) {
         HEAP32[i7 >> 2] = 0;
         HEAP32[i8 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i20);
       }
      } while (0);
      i23 = i5;
      i24 = HEAP32[i7 >> 2] | 0;
     }
     HEAP32[i24 + (HEAP32[i9 >> 2] << 2) >> 2] = HEAP32[i23 >> 2];
     i26 = HEAP32[i9 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i7 >> 2] | 0) + (i14 << 2) >> 2] = i13;
     i26 = HEAP32[i9 >> 2] | 0;
    }
    i27 = i26 + 1 | 0;
    HEAP32[i9 >> 2] = i27;
    i17 = HEAP32[i5 >> 2] | 0;
    do {
     if ((HEAP32[i17 + 12 >> 2] & 4096 | 0) == 0) {
      i10 = 40;
     } else {
      if ((HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i17 | 0)) {
       i10 = 40;
       break;
      }
      i28 = HEAP32[i17 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i10 | 0) == 40) {
     i10 = 0;
     i28 = HEAP32[i17 + 16 >> 2] | 0;
    }
    i19 = i28 | 0;
    HEAP32[i5 >> 2] = i19;
    if ((i28 | 0) == 0) {
     i10 = 7;
     break;
    }
    i13 = i19;
    i14 = i27;
    i15 = HEAP32[i8 >> 2] | 0;
   }
   if ((i10 | 0) == 26) {
    _WTFCrash();
   } else if ((i10 | 0) == 15) {
    _WTFCrash();
   } else if ((i10 | 0) == 7) {
    if ((i27 | 0) == 0) {
     break;
    } else {
     i29 = 0;
     i30 = i27;
    }
    while (1) {
     i15 = i27 - i29 - 1 | 0;
     if (i30 >>> 0 <= i15 >>> 0) {
      break;
     }
     __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i1, HEAP32[(HEAP32[i7 >> 2] | 0) + (i15 << 2) >> 2] | 0);
     i15 = i29 + 1 | 0;
     if (i15 >>> 0 >= i27 >>> 0) {
      break L7;
     }
     i29 = i15;
     i30 = HEAP32[i9 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i1, i2);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == (i9 | 0) | (i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12SearchBuffer16isWordStartMatchEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i2 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAPU16[i8 + (i2 << 1) >> 1] | 0;
 do {
  if ((i9 & 63488 | 0) == 55296) {
   if ((i9 & 1024 | 0) == 0) {
    i10 = i2 + 1 | 0;
    if ((i10 | 0) >= (i6 | 0)) {
     i11 = i9;
     break;
    }
    i12 = HEAPU16[i8 + (i10 << 1) >> 1] | 0;
    if ((i12 & 64512 | 0) != 56320) {
     i11 = i9;
     break;
    }
    i11 = (i9 << 10) - 56613888 + i12 | 0;
    break;
   } else {
    if ((i2 | 0) <= 0) {
     i11 = i9;
     break;
    }
    i12 = HEAPU16[i8 + (i2 - 1 << 1) >> 1] | 0;
    if ((i12 & 64512 | 0) != 55296) {
     i11 = i9;
     break;
    }
    i11 = i9 - 56613888 + (i12 << 10) | 0;
    break;
   }
  } else {
   i11 = i9;
  }
 } while (0);
 L14 : do {
  if ((HEAP32[i1 + 4 >> 2] & 4 | 0) != 0) {
   i9 = i2 - 1 | 0;
   i12 = HEAPU16[i8 + (i9 << 1) >> 1] | 0;
   do {
    if ((i12 & 64512 | 0) == 56320 & (i9 | 0) > 0) {
     i10 = HEAPU16[i8 + (i2 - 2 << 1) >> 1] | 0;
     if ((i10 & 64512 | 0) != 55296) {
      i13 = i12;
      break;
     }
     i13 = i12 - 56613888 + (i10 << 10) | 0;
    } else {
     i13 = i12;
    }
   } while (0);
   if ((i11 | 0) < 256) {
    if ((HEAP8[H_BASE + 40 + i11 | 0] & 1) != 0) {
     i14 = 17;
    }
   } else {
    if ((1 << ((_u_charType(i11) | 0) << 24 >> 24) & 1073311744 | 0) != 0) {
     i14 = 17;
    }
   }
   if ((i14 | 0) == 17) {
    if ((i13 | 0) < 256) {
     if ((HEAP8[H_BASE + 40 + i13 | 0] & 1) == 0) {
      i4 = 1;
     } else {
      break;
     }
     return i4 | 0;
    } else {
     if ((1 << ((_u_charType(i13) | 0) << 24 >> 24) & 1073311744 | 0) == 0) {
      i4 = 1;
     } else {
      break;
     }
     return i4 | 0;
    }
   }
   if ((i11 - 65 | 0) >>> 0 >= 26 >>> 0) {
    if ((i11 - 48 | 0) >>> 0 < 10 >>> 0) {
     if ((i13 - 48 | 0) >>> 0 < 10 >>> 0) {
      break;
     } else {
      i4 = 1;
     }
     return i4 | 0;
    }
    do {
     if ((i13 | 0) < 256) {
      if ((HEAP8[H_BASE + 40 + i13 | 0] & 1) == 0) {
       break;
      } else {
       i4 = 1;
      }
      return i4 | 0;
     } else {
      if ((1 << ((_u_charType(i13) | 0) << 24 >> 24) & 1073311744 | 0) == 0) {
       break;
      } else {
       i4 = 1;
      }
      return i4 | 0;
     }
    } while (0);
    if ((i13 - 48 | 0) >>> 0 < 10 >>> 0) {
     i4 = 1;
    } else {
     break;
    }
    return i4 | 0;
   }
   if ((i13 - 65 | 0) >>> 0 >= 26 >>> 0) {
    i4 = 1;
    return i4 | 0;
   }
   i12 = i2 + 1 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((HEAP16[i9 + (i2 << 1) >> 1] & -1024) << 16 >> 16 == -10240 & (i12 | 0) < (i6 | 0)) {
    i15 = (HEAP16[i9 + (i12 << 1) >> 1] & -1024) << 16 >> 16 == -9216 ? i2 + 2 | 0 : i12;
   } else {
    i15 = i12;
   }
   do {
    if ((i15 | 0) < (i6 | 0)) {
     i12 = HEAPU16[i9 + (i15 << 1) >> 1] | 0;
     do {
      if ((i12 & 63488 | 0) == 55296) {
       if ((i12 & 1024 | 0) == 0) {
        i10 = i15 + 1 | 0;
        if ((i10 | 0) >= (i6 | 0)) {
         i16 = i12;
         break;
        }
        i17 = HEAPU16[i9 + (i10 << 1) >> 1] | 0;
        if ((i17 & 64512 | 0) != 56320) {
         i16 = i12;
         break;
        }
        i16 = (i12 << 10) - 56613888 + i17 | 0;
        break;
       } else {
        if ((i15 | 0) <= 0) {
         i16 = i12;
         break;
        }
        i17 = HEAPU16[i9 + (i15 - 1 << 1) >> 1] | 0;
        if ((i17 & 64512 | 0) != 55296) {
         i16 = i12;
         break;
        }
        i16 = i12 - 56613888 + (i17 << 10) | 0;
        break;
       }
      } else {
       i16 = i12;
      }
     } while (0);
     if ((i16 - 65 | 0) >>> 0 < 26 >>> 0 | (i16 - 48 | 0) >>> 0 < 10 >>> 0) {
      break L14;
     }
     if ((i16 | 0) < 256) {
      i18 = i16;
      break;
     }
     if ((1 << ((_u_charType(i16) | 0) << 24 >> 24) & 1073311744 | 0) == 0) {
      i4 = 1;
     } else {
      break L14;
     }
     return i4 | 0;
    } else {
     i18 = 0;
    }
   } while (0);
   if ((HEAP8[H_BASE + 40 + i18 | 0] & 1) == 0) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZN7WebCore4Font22isCJKIdeographOrSymbolEi(i11) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 i11 = i3 + i2 | 0;
 if (i11 >>> 0 > i2 >>> 0) {
  i3 = i11;
  while (1) {
   i18 = __ZN7WebCore21findNextWordFromIndexEPKtiib(HEAP32[i7 >> 2] | 0, HEAP32[i5 >> 2] | 0, i3, 0) | 0;
   if (i18 >>> 0 > i2 >>> 0) {
    i3 = i18;
   } else {
    i19 = i18;
    break;
   }
  }
 } else {
  i19 = i11;
 }
 i4 = (i19 | 0) == (i2 | 0);
 return i4 | 0;
}
function __ZN7WebCore12TextIterator21handleReplacedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 24 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if ((HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + (i4 << 2) >> 2] & 1 << (i3 + 31 & 31) | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = i4 + 32 | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = i6 + 20 | 0;
 if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
  i8 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i6 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i8 + 40 >> 2] & 6144 | 0) != 0) {
   if ((HEAP8[i1 + 130 | 0] & 1) == 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i8 = i1 + 100 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  i4 = HEAP32[i1 + 96 >> 2] | 0;
  i9 = HEAP32[i4 + 16 >> 2] | 0;
  HEAP8[i1 + 124 | 0] = 1;
  HEAP32[i1 + 52 >> 2] = i9;
  HEAP32[i1 + 56 >> 2] = i4;
  HEAP32[i1 + 60 >> 2] = 1;
  HEAP32[i1 + 64 >> 2] = 1;
  i4 = i1 + 104 | 0;
  HEAP16[i4 >> 1] = 32;
  HEAP32[i1 + 68 >> 2] = i4;
  HEAP32[i1 + 72 >> 2] = 1;
  HEAP8[i8] = 0;
  HEAP16[i1 + 102 >> 1] = 32;
  i5 = 0;
  return i5 | 0;
 }
 do {
  if ((HEAP8[i1 + 126 | 0] & 1) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 208 >> 2] & 1](i6) | 0)) {
    break;
   }
   i4 = __ZNK7WebCore17RenderTextControl22textFormControlElementEv(i6) | 0;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 732 >> 2] & 1](i4) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i4 = __ZNK7WebCore4Node20containingShadowRootEv(i9 | 0) | 0;
   HEAP32[i3 >> 2] = i4;
   __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i2, i4);
   HEAP32[i1 + 4 >> 2] = 0;
   i5 = 0;
   return i5 | 0;
  }
 } while (0);
 i2 = i1 + 124 | 0;
 HEAP8[i2] = 1;
 do {
  if (!((HEAP8[i1 + 131 | 0] & 1) == 0 | (i6 | 0) == 0)) {
   if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 >> 2] | 0;
   i9 = HEAP32[i4 + 16 >> 2] | 0;
   HEAP8[i2] = 1;
   HEAP32[i1 + 52 >> 2] = i9;
   HEAP32[i1 + 56 >> 2] = i4;
   HEAP32[i1 + 60 >> 2] = 0;
   HEAP32[i1 + 64 >> 2] = 1;
   i4 = i1 + 104 | 0;
   HEAP16[i4 >> 1] = -4;
   HEAP32[i1 + 68 >> 2] = i4;
   HEAP32[i1 + 72 >> 2] = 1;
   HEAP8[i8] = 0;
   HEAP16[i1 + 102 >> 1] = -4;
   HEAP8[i1 + 9 | 0] = 1;
   i5 = 1;
   return i5 | 0;
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i7 + 16 >> 2] | 0;
 if ((HEAP8[i1 + 125 | 0] & 1) != 0) {
  HEAP8[i2] = 1;
  HEAP32[i1 + 52 >> 2] = i3;
  HEAP32[i1 + 56 >> 2] = i7;
  HEAP32[i1 + 60 >> 2] = 0;
  HEAP32[i1 + 64 >> 2] = 1;
  i2 = i1 + 104 | 0;
  HEAP16[i2 >> 1] = 44;
  HEAP32[i1 + 68 >> 2] = i2;
  HEAP32[i1 + 72 >> 2] = 1;
  HEAP8[i8] = 0;
  HEAP16[i1 + 102 >> 1] = 44;
  i5 = 1;
  return i5 | 0;
 }
 HEAP32[i1 + 52 >> 2] = i3;
 HEAP32[i1 + 56 >> 2] = i7;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP32[i1 + 68 >> 2] = 0;
 do {
  if ((HEAP8[i1 + 134 | 0] & 1) != 0) {
   i7 = i6;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] & 1](i6) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 144 >> 2] & 1](i6) | 0)) {
    break;
   }
   i7 = HEAP32[i6 + 100 >> 2] | 0;
   i3 = i7;
   if ((i7 | 0) != 0) {
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i1 + 76 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i3;
   if ((i8 | 0) == 0) {
    i10 = i3;
   } else {
    i3 = i8 | 0;
    i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
    } else {
     HEAP32[i3 >> 2] = i2;
    }
    i10 = HEAP32[i7 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i10 + 4 | 0;
   i2 = HEAP32[i7 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP32[i1 + 72 >> 2] = i2;
   i3 = i2 - 1 | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) >>> 0 > i3 >>> 0) {
     i2 = i10 + 8 | 0;
     if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
      i11 = HEAP16[(HEAP32[i2 >> 2] | 0) + (i3 << 1) >> 1] | 0;
      break;
     } else {
      i11 = HEAPU8[(HEAP32[i2 >> 2] | 0) + i3 | 0] | 0;
      break;
     }
    } else {
     i11 = 0;
    }
   } while (0);
   HEAP16[i1 + 102 >> 1] = i11;
   i5 = 1;
   return i5 | 0;
  }
 } while (0);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP16[i1 + 102 >> 1] = 0;
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 160 | 0;
 i9 = i5 + 168 | 0;
 HEAP32[i6 >> 2] = 0;
 i10 = i6 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP8[i6 + 12 | 0] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, 32768);
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i7, i2, i4 ? i3 : i3 | 4);
 i3 = i7 + 133 | 0;
 i12 = i7 + 52 | 0;
 L1 : do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i13 = 0;
  } else {
   i14 = i7 + 68 | 0;
   i15 = i7 + 60 | 0;
   i16 = i7 + 72 | 0;
   i17 = i7 + 76 | 0;
   i18 = 0;
   while (1) {
    if ((HEAP8[i3] & 1) != 0) {
     i13 = i18;
     break L1;
    }
    i19 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i19 | 0) == 0) {
      i20 = HEAP32[i15 >> 2] | 0;
      i21 = HEAP32[i16 >> 2] | 0;
      i22 = HEAP32[i17 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      i23 = HEAP32[i22 + 4 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      if ((i21 + i20 | 0) >>> 0 > i23 >>> 0) {
       break;
      }
      if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
       __ZN3WTF13StringBuilder6appendEPKtj(i6, (HEAP32[i22 + 8 >> 2] | 0) + (i20 << 1) | 0, i21);
       break;
      } else {
       __ZN3WTF13StringBuilder6appendEPKhj(i6, (HEAP32[i22 + 8 >> 2] | 0) + i20 | 0, i21);
       break;
      }
     } else {
      __ZN3WTF13StringBuilder6appendEPKtj(i6, i19, HEAP32[i16 >> 2] | 0);
     }
    } while (0);
    i19 = (HEAP32[i16 >> 2] | 0) + i18 | 0;
    __ZN7WebCore12TextIterator7advanceEv(i7);
    if ((HEAP32[i12 >> 2] | 0) == 0) {
     i13 = i19;
     break;
    } else {
     i18 = i19;
    }
   }
  }
 } while (0);
 i12 = i7 + 116 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i7 + 108 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i7 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i7 + 76 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i3 | 0;
   i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i12 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i3 = i7 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i7 + 16 | 0;
 i18 = HEAP32[i3 >> 2] | 0;
 if (!((i7 + 28 | 0) == (i18 | 0) | (i18 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 do {
  if ((i13 | 0) == 0) {
   i18 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i18;
   if ((i18 | 0) == 0) {
    break;
   }
   i7 = i18 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  } else {
   __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i6);
    i18 = HEAP32[i10 >> 2] | 0;
    HEAP32[i8 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i24 = i18;
     i25 = 31;
    }
   } else {
    HEAP32[i8 >> 2] = i7;
    i24 = i7;
    i25 = 31;
   }
   if ((i25 | 0) == 31) {
    i7 = i24 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   do {
    if (i4) {
     __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i9, HEAP32[i2 + 4 >> 2] | 0, i8);
     i7 = HEAP32[i9 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i18 = i7 | 0;
     i3 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i18 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i3 = i8 | 0;
   i18 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i1 >> 2] = i18;
  }
 } while (0);
 i1 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i11 = i1 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i1 | 0;
 i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17CharacterIterator6stringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   if ((i3 | 0) < 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 1) | 0;
   i6 = i2 + 64 | 0;
   i7 = i2 + 145 | 0;
   i8 = i2 + 84 | 0;
   i9 = i2 + 4 | 0;
   i10 = i2 + 80 | 0;
   i11 = i2 + 88 | 0;
   i12 = i2 + 72 | 0;
   i13 = 0;
   i14 = i5 >>> 1;
   i15 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i3;
   L6 : while (1) {
    if ((HEAP32[i6 >> 2] | 0) == 0) {
     i16 = i13;
     i17 = i15;
     i18 = 24;
     break;
    }
    if ((HEAP8[i7] & 1) != 0) {
     i16 = i13;
     i17 = i15;
     i18 = 24;
     break;
    }
    i19 = HEAP32[i9 >> 2] | 0;
    i20 = (HEAP32[i8 >> 2] | 0) - i19 | 0;
    i21 = (i20 | 0) < (i5 | 0) ? i20 : i5;
    i20 = HEAP32[i10 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i22 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i22 | 0) == 0) {
       i23 = 0;
       i24 = i19;
      } else {
       if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
        i23 = HEAP32[i22 + 8 >> 2] | 0;
        i24 = i19;
        break;
       } else {
        i25 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i22) | 0;
        i23 = i25;
        i24 = HEAP32[i9 >> 2] | 0;
        break;
       }
      }
     } while (0);
     i26 = i23 + (HEAP32[i12 >> 2] << 1) | 0;
     i27 = i24;
    } else {
     i26 = i20;
     i27 = i19;
    }
    i22 = _llvm_uadd_with_overflow_i32(i13 | 0, i21 | 0) | 0;
    i25 = tempRet0;
    i28 = i22;
    do {
     if (i28 >>> 0 > i14 >>> 0) {
      i22 = i14 + 1 + (i14 >>> 2) | 0;
      i29 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
      i22 = i29 >>> 0 > i28 >>> 0 ? i29 : i28;
      if (i14 >>> 0 >= i22 >>> 0) {
       i30 = i15;
       i31 = i14;
       break;
      }
      if ((i22 | 0) < 0) {
       i18 = 16;
       break L6;
      }
      i29 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 1) | 0;
      i22 = i29 >>> 1;
      i32 = __ZN3WTF10fastMallocEj(i29) | 0;
      i29 = i32;
      i33 = i15;
      _memcpy(i32 | 0, i33 | 0, i13 << 1) | 0;
      if ((i15 | 0) == 0) {
       i30 = i29;
       i31 = i22;
       break;
      }
      i32 = (i29 | 0) == (i15 | 0);
      __ZN3WTF8fastFreeEPv(i33);
      i30 = i32 ? 0 : i29;
      i31 = i32 ? 0 : i22;
     } else {
      i30 = i15;
      i31 = i14;
     }
    } while (0);
    if (i25) {
     i18 = 20;
     break;
    }
    if ((i21 | 0) != 0) {
     i19 = 0;
     while (1) {
      HEAP16[i30 + (i19 + i13 << 1) >> 1] = HEAP16[i26 + (i19 + i27 << 1) >> 1] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i21 >>> 0) {
       break;
      }
     }
    }
    i19 = i5 - i21 | 0;
    __ZN7WebCore17CharacterIterator7advanceEi(i2, i21);
    if ((i19 | 0) > 0) {
     i13 = i28;
     i14 = i31;
     i15 = i30;
     i5 = i19;
    } else {
     i16 = i28;
     i17 = i30;
     i18 = 24;
     break;
    }
   }
   if ((i18 | 0) == 16) {
    _WTFCrash();
   } else if ((i18 | 0) == 24) {
    if ((i16 | 0) == 0) {
     i4 = i17;
     break;
    }
    i5 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i5 >> 2] = 2;
    HEAP32[i5 + 4 >> 2] = i16;
    HEAP32[i5 + 8 >> 2] = i17;
    HEAP32[i5 + 12 >> 2] = 0;
    HEAP32[i5 + 16 >> 2] = 1;
    __ZN3WTF8fastFreeEPv(0);
    HEAP32[i1 >> 2] = i5;
    return;
   } else if ((i18 | 0) == 20) {
    _WTFCrash();
   }
  }
 } while (0);
 i18 = __ZN3WTF10StringImpl5emptyEv() | 0;
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 HEAP32[i1 >> 2] = i18;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore12TextIterator29getLocationAndLengthFromRangeEPNS_4NodeEPKNS_5RangeERjS6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i4 >> 2] = 0;
 i11 = i2 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 do {
  if ((i12 | 0) != (i1 | 0)) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i12, i1) | 0) {
    break;
   } else {
    i13 = 0;
   }
   STACKTOP = i5;
   return i13 | 0;
  }
 } while (0);
 i12 = i2 + 20 | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != (i1 | 0)) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i14, i1) | 0) {
    break;
   } else {
    i13 = 0;
   }
   STACKTOP = i5;
   return i13 | 0;
  }
 } while (0);
 i14 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i15 = i7 | 0;
 HEAP32[i15 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i16 = i1 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = HEAP32[i11 >> 2] | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i1 = i16 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i2 + 12 | 0;
 i16 = HEAP32[i1 >> 2] | 0;
 if ((i16 | 0) > -1) {
  i17 = i16;
 } else {
  i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i16;
  i17 = i16;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i6, i14, i7, 0, i8, i17);
 i17 = i6 | 0;
 i6 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i11 = i17 + 8 | 0;
   i8 = i11 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 + 8 | 0;
   i11 = i15 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 HEAP32[i3 >> 2] = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i6, 0) | 0;
 i17 = HEAP32[i12 >> 2] | 0;
 i12 = i9 | 0;
 HEAP32[i12 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i15 = i17 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i2 + 24 | 0;
 i17 = HEAP32[i15 >> 2] | 0;
 if ((i17 | 0) > -1) {
  i18 = i17;
 } else {
  i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i15 >> 2] = i17;
  i18 = i17;
 }
 i17 = i10 | 0;
 HEAP32[i17 >> 2] = 0;
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i6, i9, i18, i17);
 i17 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i12 = i17 + 8 | 0;
   i18 = i12 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i17 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i6, 0) | 0;
 HEAP32[i4 >> 2] = i17 - (HEAP32[i3 >> 2] | 0);
 if ((i6 | 0) == 0) {
  i13 = 1;
  STACKTOP = i5;
  return i13 | 0;
 }
 i3 = i6 | 0;
 i17 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i17 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  i13 = 1;
  STACKTOP = i5;
  return i13 | 0;
 } else {
  HEAP32[i3 >> 2] = i17;
  i13 = 1;
  STACKTOP = i5;
  return i13 | 0;
 }
 return 0;
}
function __ZNK7WebCore12TextIterator5rangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 40 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
  i12 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i13 = i6 | 0;
  HEAP32[i13 >> 2] = i11;
  i14 = i11 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i14 = i2 + 44 | 0;
  i11 = HEAP32[i14 >> 2] | 0;
  i15 = HEAP32[i10 >> 2] | 0;
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = i15;
  if ((i15 | 0) == 0) {
   i16 = i11;
  } else {
   i17 = i15 + 8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i16 = HEAP32[i14 >> 2] | 0;
  }
  __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i12, i6, i11, i7, i16);
  i16 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i10 = i16 + 8 | 0;
    i7 = i10 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  i16 = HEAP32[i13 >> 2] | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i13 = i16 + 8 | 0;
  i16 = i13 | 0;
  i10 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
  HEAP32[i16 >> 2] = i10;
  if ((i10 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i13 = i2 + 56 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i18 = i9;
 } else {
  i9 = __ZNK7WebCore4Node9nodeIndexEv(i10) | 0;
  i10 = i2 + 60 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i9;
  i10 = i2 + 64 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i9;
  HEAP32[i13 >> 2] = 0;
  i18 = HEAP32[i8 >> 2] | 0;
 }
 i13 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i18;
 do {
  if ((i18 | 0) == 0) {
   i10 = HEAP32[i2 + 60 >> 2] | 0;
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = 0;
   i19 = i10;
   i20 = i16;
  } else {
   i16 = i18 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i16 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i2 + 60 >> 2] | 0;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i16;
   if ((i16 | 0) == 0) {
    i19 = i10;
    i20 = i11;
    break;
   }
   i7 = i16 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i19 = i10;
   i20 = i11;
  }
 } while (0);
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i13, i4, i19, i5, HEAP32[i2 + 64 >> 2] | 0);
 i2 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i20 = i2 + 8 | 0;
   i5 = i20 | 0;
   i19 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 8 | 0;
 i2 = i9 | 0;
 i20 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator17handleNonTextNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (HEAP8[i1 + 80 | 0] & 1) != 0;
 i5 = i3 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i3 + 32 | 0;
 if ((i6 & 2048 | 0) == 0) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((i6 & 4 | 0) == 0) {
    i9 = 16;
    break;
   }
   i8 = HEAP32[i3 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i8 | 0) == (i10 | 0)) {
    i11 = 1;
   } else {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     i9 = 16;
     break;
    }
    i11 = (HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0);
   }
   if (i4 | i11 ^ 1) {
    i12 = i11;
    i9 = 15;
   } else {
    i13 = i6;
    i9 = 13;
   }
  } else {
   if ((HEAP32[i7 + 20 >> 2] & 4096 | 0) == 0) {
    i9 = 16;
    break;
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 620 >> 2] & 1](i7) | 0;
   if (i10 | i4) {
    i12 = i10 ^ 1;
    i9 = 15;
    break;
   }
   i13 = HEAP32[i5 >> 2] | 0;
   i9 = 13;
  }
 } while (0);
 do {
  if ((i9 | 0) == 15) {
   if (!i12) {
    i9 = 16;
   }
  } else if ((i9 | 0) == 13) {
   if ((i13 & 8388608 | 0) == 0) {
    break;
   }
   i5 = __ZNK7WebCore4Node10shadowHostEv(i3) | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 208 >> 2] & 1](i5 | 0) | 0) != 0) {
    i9 = 16;
   }
  }
 } while (0);
 L19 : do {
  if ((i9 | 0) == 16) {
   i3 = HEAP32[i2 >> 2] | 0;
   L21 : do {
    if (__ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE(i3) | 0) {
     i13 = i3;
     while (1) {
      i12 = HEAP32[i13 + 28 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i13) | 0;
       if ((i5 | 0) == 0) {
        break L21;
       } else {
        i14 = i5;
       }
      } else {
       i14 = i12;
      }
      i12 = i14 + 32 | 0;
      if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
       i15 = i12 | 0;
      } else {
       i15 = HEAP32[i12 >> 2] | 0;
      }
      if ((HEAP32[i15 >> 2] | 0) == 0) {
       i13 = i14;
      } else {
       break L19;
      }
     }
    }
   } while (0);
   i3 = HEAP32[i2 >> 2] | 0;
   i13 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i16 = i13 | 0;
   } else {
    i16 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    return 1;
   }
   if (!(__ZN7WebCore11isTableCellEPKNS_4NodeE(i3) | 0)) {
    return 1;
   }
   i3 = i13;
   i12 = HEAP32[(HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   i13 = i12;
   if ((i12 | 0) == 0) {
    return 1;
   }
   if ((__ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i13, i3) | 0) != 0) {
    break;
   }
   if ((__ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i13, i3) | 0) != 0) {
    break;
   }
   return 1;
  }
 } while (0);
 i16 = __ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 >> 2] | 0) | 0;
 i14 = HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0;
 i2 = i16 + 1 | 0;
 i16 = i1 + 74 | 0;
 HEAP16[i16 >> 1] = 10;
 HEAP32[i1 + 48 >> 2] = i14;
 HEAP32[i1 + 52 >> 2] = i2;
 HEAP32[i1 + 56 >> 2] = i2;
 HEAP32[i1 + 60 >> 2] = i16;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP16[i1 + 72 >> 1] = 10;
 return 1;
}
function __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 i5 = i1 + 32 | 0;
 i6 = i1 + 36 | 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i1 + 108 | 0, 0, 16) | 0;
 HEAP8[i1 + 125 | 0] = i3 & 1;
 HEAP8[i1 + 126 | 0] = i3 >>> 1 & 1;
 HEAP8[i1 + 127 | 0] = i3 >>> 2 & 1;
 HEAP8[i1 + 128 | 0] = i3 >>> 5 & 1;
 HEAP8[i1 + 129 | 0] = 0;
 HEAP8[i1 + 130 | 0] = i3 >>> 3 & 1;
 HEAP8[i1 + 131 | 0] = i3 >>> 4 & 1;
 HEAP8[i1 + 132 | 0] = i3 >>> 6 & 1;
 HEAP8[i1 + 133 | 0] = 0;
 HEAP8[i1 + 134 | 0] = i3 >>> 7 & 1;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i7 = i2 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) > -1) {
  i9 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i8;
  i9 = i8;
 }
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 i7 = i2 + 24 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) > -1) {
  i11 = i10;
 } else {
  i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i10;
  i11 = i10;
 }
 HEAP32[i5 >> 2] = i3;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i1 + 40 >> 2] = i8;
 HEAP32[i1 + 44 >> 2] = i11;
 i9 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) == 0) {
  return;
 }
 __ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE(i4, i9);
 if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
  i12 = HEAP32[i6 >> 2] | 0;
 } else {
  i12 = 0;
 }
 HEAP32[i1 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP8[i1 + 9 | 0] = 0;
 L19 : do {
  if ((i8 | 0) == 0) {
   i13 = 0;
  } else {
   do {
    if ((i11 | 0) > -1) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 1](i8) | 0) {
      i14 = i8;
      break;
     }
     if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
      i14 = i8;
      break;
     }
     i12 = __ZNK7WebCore13ContainerNode9childNodeEj(i8, i11) | 0;
     if ((i12 | 0) == 0) {
      i14 = i8;
     } else {
      i13 = i12;
      break L19;
     }
    } else {
     i14 = i8;
    }
   } while (0);
   while (1) {
    i12 = HEAP32[i14 + 28 >> 2] | 0;
    if ((i12 | 0) != 0) {
     i13 = i12;
     break L19;
    }
    do {
     if ((HEAP32[i14 + 12 >> 2] & 4096 | 0) == 0) {
      i15 = 19;
     } else {
      if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i14 | 0)) {
       i15 = 19;
       break;
      }
      i16 = HEAP32[i14 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i15 | 0) == 19) {
     i15 = 0;
     i16 = HEAP32[i14 + 16 >> 2] | 0;
    }
    if ((i16 | 0) == 0) {
     i13 = 0;
     break;
    } else {
     i14 = i16 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 48 >> 2] = i13;
 HEAP8[i1 + 80 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP8[i1 + 124 | 0] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP8[i1 + 100 | 0] = 0;
 HEAP16[i1 + 102 >> 1] = 0;
 __ZN7WebCore12TextIterator7advanceEv(i1);
 return;
}
function __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 i5 = i1 + 32 | 0;
 i6 = i1 + 36 | 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i1 + 108 | 0, 0, 16) | 0;
 HEAP8[i1 + 125 | 0] = i3 & 1;
 HEAP8[i1 + 126 | 0] = i3 >>> 1 & 1;
 HEAP8[i1 + 127 | 0] = i3 >>> 2 & 1;
 HEAP8[i1 + 128 | 0] = i3 >>> 5 & 1;
 HEAP8[i1 + 129 | 0] = 0;
 HEAP8[i1 + 130 | 0] = i3 >>> 3 & 1;
 HEAP8[i1 + 131 | 0] = i3 >>> 4 & 1;
 HEAP8[i1 + 132 | 0] = i3 >>> 6 & 1;
 HEAP8[i1 + 133 | 0] = 0;
 HEAP8[i1 + 134 | 0] = i3 >>> 7 & 1;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i7 = i2 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) > -1) {
  i9 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i8;
  i9 = i8;
 }
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 i7 = i2 + 24 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) > -1) {
  i11 = i10;
 } else {
  i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i10;
  i11 = i10;
 }
 HEAP32[i5 >> 2] = i3;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i1 + 40 >> 2] = i8;
 HEAP32[i1 + 44 >> 2] = i11;
 i9 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) == 0) {
  return;
 }
 __ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE(i4, i9);
 if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
  i12 = HEAP32[i6 >> 2] | 0;
 } else {
  i12 = 0;
 }
 HEAP32[i1 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP8[i1 + 9 | 0] = 0;
 L19 : do {
  if ((i8 | 0) == 0) {
   i13 = 0;
  } else {
   do {
    if ((i11 | 0) > -1) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 1](i8) | 0) {
      i14 = i8;
      break;
     }
     if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
      i14 = i8;
      break;
     }
     i12 = __ZNK7WebCore13ContainerNode9childNodeEj(i8, i11) | 0;
     if ((i12 | 0) == 0) {
      i14 = i8;
     } else {
      i13 = i12;
      break L19;
     }
    } else {
     i14 = i8;
    }
   } while (0);
   while (1) {
    i12 = HEAP32[i14 + 28 >> 2] | 0;
    if ((i12 | 0) != 0) {
     i13 = i12;
     break L19;
    }
    do {
     if ((HEAP32[i14 + 12 >> 2] & 4096 | 0) == 0) {
      i15 = 19;
     } else {
      if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i14 | 0)) {
       i15 = 19;
       break;
      }
      i16 = HEAP32[i14 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i15 | 0) == 19) {
     i15 = 0;
     i16 = HEAP32[i14 + 16 >> 2] | 0;
    }
    if ((i16 | 0) == 0) {
     i13 = 0;
     break;
    } else {
     i14 = i16 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 48 >> 2] = i13;
 HEAP8[i1 + 80 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP8[i1 + 124 | 0] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 HEAP8[i1 + 100 | 0] = 0;
 HEAP16[i1 + 102 >> 1] = 0;
 __ZN7WebCore12TextIterator7advanceEv(i1);
 return;
}
function __ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 9 | 0;
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = 0;
 _memset(i1 | 0, 0, 10) | 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 i9 = i1 + 32 | 0;
 i10 = i1 + 36 | 0;
 i11 = i1 + 40 | 0;
 i12 = i1 + 44 | 0;
 i13 = i1 + 68 | 0;
 i14 = i1 + 72 | 0;
 i15 = i1 + 76 | 0;
 _memset(i9 | 0, 0, 46) | 0;
 HEAP8[i1 + 78 | 0] = i3 >>> 6 & 1;
 HEAP8[i1 + 79 | 0] = 0;
 HEAP8[i1 + 80 | 0] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i16 = HEAP32[i2 + 20 >> 2] | 0;
 i17 = i2 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) > -1) {
  i19 = i18;
 } else {
  i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 i18 = i2 + 24 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 if ((i17 | 0) > -1) {
  i20 = i17;
 } else {
  i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i18 >> 2] = i17;
  i20 = i17;
 }
 do {
  if ((i19 | 0) > -1 & ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 1](i3) | 0) ^ 1)) {
   i17 = i3 + 12 | 0;
   if ((HEAP32[i17 >> 2] & 2 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i3) | 0;
   }
   if ((i19 | 0) >= (i21 | 0)) {
    i22 = i19;
    i23 = i3;
    break;
   }
   if ((HEAP32[i17 >> 2] & 2 | 0) == 0) {
    i22 = 0;
    i23 = 0;
    break;
   }
   i22 = 0;
   i23 = __ZNK7WebCore13ContainerNode9childNodeEj(i3, i19) | 0;
  } else {
   i22 = i19;
   i23 = i3;
  }
 } while (0);
 do {
  if ((i20 | 0) > 0 & ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 164 >> 2] & 1](i16) | 0) ^ 1)) {
   i3 = i16 + 12 | 0;
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i16) | 0;
   }
   if ((i20 | 0) > (i24 | 0)) {
    i25 = i20;
    i26 = i16;
    break;
   }
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = __ZNK7WebCore13ContainerNode9childNodeEj(i16, i20 - 1 | 0) | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 164 >> 2] & 1](i27) | 0) {
    i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 168 >> 2] & 1](i27) | 0;
    i26 = i27;
    break;
   }
   if ((HEAP32[i27 + 12 >> 2] & 2 | 0) == 0) {
    i25 = 0;
    i26 = i27;
    break;
   }
   i25 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i27) | 0;
   i26 = i27;
  } else {
   i25 = i20;
   i26 = i16;
  }
 } while (0);
 HEAP32[i4 >> 2] = i26;
 __ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE(i8, i26);
 HEAP32[i5 >> 2] = i25;
 HEAP8[i6] = 0;
 HEAP8[i7] = (i25 | 0) == 0 | 0;
 HEAP32[i9 >> 2] = i23;
 HEAP32[i10 >> 2] = i22;
 HEAP32[i11 >> 2] = i26;
 HEAP32[i12 >> 2] = i25;
 HEAP32[i13 >> 2] = 0;
 HEAP16[i14 >> 1] = 10;
 HEAP8[i15] = 0;
 __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i1);
 return;
}
function __ZN7WebCore31SimplifiedBackwardsTextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 9 | 0;
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = 0;
 _memset(i1 | 0, 0, 10) | 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 i9 = i1 + 32 | 0;
 i10 = i1 + 36 | 0;
 i11 = i1 + 40 | 0;
 i12 = i1 + 44 | 0;
 i13 = i1 + 68 | 0;
 i14 = i1 + 72 | 0;
 i15 = i1 + 76 | 0;
 _memset(i9 | 0, 0, 46) | 0;
 HEAP8[i1 + 78 | 0] = i3 >>> 6 & 1;
 HEAP8[i1 + 79 | 0] = 0;
 HEAP8[i1 + 80 | 0] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i16 = HEAP32[i2 + 20 >> 2] | 0;
 i17 = i2 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) > -1) {
  i19 = i18;
 } else {
  i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 i18 = i2 + 24 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 if ((i17 | 0) > -1) {
  i20 = i17;
 } else {
  i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i18 >> 2] = i17;
  i20 = i17;
 }
 do {
  if ((i19 | 0) > -1 & ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 1](i3) | 0) ^ 1)) {
   i17 = i3 + 12 | 0;
   if ((HEAP32[i17 >> 2] & 2 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i3) | 0;
   }
   if ((i19 | 0) >= (i21 | 0)) {
    i22 = i19;
    i23 = i3;
    break;
   }
   if ((HEAP32[i17 >> 2] & 2 | 0) == 0) {
    i22 = 0;
    i23 = 0;
    break;
   }
   i22 = 0;
   i23 = __ZNK7WebCore13ContainerNode9childNodeEj(i3, i19) | 0;
  } else {
   i22 = i19;
   i23 = i3;
  }
 } while (0);
 do {
  if ((i20 | 0) > 0 & ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 164 >> 2] & 1](i16) | 0) ^ 1)) {
   i3 = i16 + 12 | 0;
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i16) | 0;
   }
   if ((i20 | 0) > (i24 | 0)) {
    i25 = i20;
    i26 = i16;
    break;
   }
   if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = __ZNK7WebCore13ContainerNode9childNodeEj(i16, i20 - 1 | 0) | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 164 >> 2] & 1](i27) | 0) {
    i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 168 >> 2] & 1](i27) | 0;
    i26 = i27;
    break;
   }
   if ((HEAP32[i27 + 12 >> 2] & 2 | 0) == 0) {
    i25 = 0;
    i26 = i27;
    break;
   }
   i25 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i27) | 0;
   i26 = i27;
  } else {
   i25 = i20;
   i26 = i16;
  }
 } while (0);
 HEAP32[i4 >> 2] = i26;
 __ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE(i8, i26);
 HEAP32[i5 >> 2] = i25;
 HEAP8[i6] = 0;
 HEAP8[i7] = (i25 | 0) == 0 | 0;
 HEAP32[i9 >> 2] = i23;
 HEAP32[i10 >> 2] = i22;
 HEAP32[i11 >> 2] = i26;
 HEAP32[i12 >> 2] = i25;
 HEAP32[i13 >> 2] = 0;
 HEAP16[i14 >> 1] = 10;
 HEAP8[i15] = 0;
 __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i1);
 return;
}
function __ZN7WebCore12TextIterator17handleNonTextNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (HEAP8[i1 + 128 | 0] & 1) != 0;
 i5 = i3 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i3 + 32 | 0;
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
   i8 = HEAP32[i3 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i8 | 0) == (i9 | 0)) {
    i10 = 1;
   } else {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
     break;
    }
    i10 = (HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0);
   }
   if (i4 | i10 ^ 1) {
    i11 = i10;
    i12 = 15;
   } else {
    i13 = i6;
    i12 = 13;
   }
  } else {
   if ((HEAP32[i7 + 20 >> 2] & 4096 | 0) == 0) {
    break;
   }
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 620 >> 2] & 1](i7) | 0;
   if (i9 | i4) {
    i11 = i9 ^ 1;
    i12 = 15;
    break;
   }
   i13 = HEAP32[i5 >> 2] | 0;
   i12 = 13;
  }
 } while (0);
 do {
  if ((i12 | 0) == 13) {
   if ((i13 & 8388608 | 0) == 0) {
    i12 = 16;
    break;
   }
   i5 = __ZNK7WebCore4Node10shadowHostEv(i3) | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 208 >> 2] & 1](i5 | 0) | 0) == 0) {
    i12 = 16;
   }
  } else if ((i12 | 0) == 15) {
   if (i11) {
    i12 = 16;
   }
  }
 } while (0);
 if ((i12 | 0) == 16) {
  i12 = HEAP32[i2 >> 2] | 0;
  i11 = HEAP32[i12 + 16 >> 2] | 0;
  HEAP8[i1 + 124 | 0] = 1;
  HEAP32[i1 + 52 >> 2] = i11;
  HEAP32[i1 + 56 >> 2] = i12;
  HEAP32[i1 + 60 >> 2] = 0;
  HEAP32[i1 + 64 >> 2] = 1;
  i12 = i1 + 104 | 0;
  HEAP16[i12 >> 1] = 10;
  HEAP32[i1 + 68 >> 2] = i12;
  HEAP32[i1 + 72 >> 2] = 1;
  HEAP8[i1 + 100 | 0] = 0;
  HEAP16[i1 + 102 >> 1] = 10;
  return 1;
 }
 do {
  if ((HEAP8[i1 + 125 | 0] & 1) != 0) {
   i12 = HEAP32[i2 >> 2] | 0;
   i11 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
   i3 = i12 + 32 | 0;
   if (i11) {
    i14 = i3 | 0;
   } else {
    i14 = HEAP32[i3 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    break;
   }
   if (i11) {
    i15 = i3 | 0;
   } else {
    i15 = HEAP32[i3 >> 2] | 0;
   }
   i3 = HEAP32[i15 >> 2] | 0;
   if ((HEAP32[i3 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i11 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i11 + 44 >> 2] | 0;
   i11 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
   if ((i3 | 0) != (i11 | 0)) {
    if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
     break;
    }
   }
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   HEAP8[i1 + 124 | 0] = 1;
   HEAP32[i1 + 52 >> 2] = i11;
   HEAP32[i1 + 56 >> 2] = i12;
   HEAP32[i1 + 60 >> 2] = 0;
   HEAP32[i1 + 64 >> 2] = 1;
   i12 = i1 + 104 | 0;
   HEAP16[i12 >> 1] = 32;
   HEAP32[i1 + 68 >> 2] = i12;
   HEAP32[i1 + 72 >> 2] = 1;
   HEAP8[i1 + 100 | 0] = 0;
   HEAP16[i1 + 102 >> 1] = 32;
   return 1;
  }
 } while (0);
 __ZN7WebCore12TextIterator23representNodeOffsetZeroEv(i1);
 return 1;
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator14handleTextNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 68 >> 2] = i3;
 i4 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = i4;
 if ((i3 | 0) == (HEAP32[i1 + 32 >> 2] | 0)) {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i6 = 0;
 }
 L8 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 624 >> 2] & 1](i5) | 0) {
   i3 = HEAP32[i4 + 56 >> 2] | 0;
   if ((i6 | 0) >= (i3 | 0)) {
    i7 = i5;
    i8 = i3;
    break;
   }
   i9 = i1 + 77 | 0;
   do {
    if ((HEAP8[i9] & 1) == 0) {
     if ((i3 | 0) >= (HEAP32[i1 + 4 >> 2] | 0)) {
      break;
     }
     HEAP8[i9] = 1;
     i7 = i5;
     i8 = i3;
     break L8;
    }
   } while (0);
   HEAP8[i9] = 0;
   i3 = HEAP32[i4 + 72 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i10 = 1;
    return i10 | 0;
   }
   i11 = i3 + 28 | 0;
   while (1) {
    i3 = HEAP32[i11 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i12 = 0;
     break;
    }
    if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
     i12 = i3;
     break;
    } else {
     i11 = i3 + 16 | 0;
    }
   }
   i7 = i12;
   i8 = 0;
  } else {
   i7 = i5;
   i8 = 0;
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i10 = 1;
  return i10 | 0;
 }
 i5 = HEAP32[i7 + 44 >> 2] | 0;
 i12 = (i5 | 0) == 0;
 do {
  if (i12) {
   i13 = 20;
  } else {
   i4 = i5 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
   if ((HEAP32[i7 + 48 >> 2] | 0) != 0 | i12) {
    i13 = 20;
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    i13 = 20;
   } else {
    i14 = 1;
   }
  }
 } while (0);
 do {
  if ((i13 | 0) == 20) {
   i7 = i1 + 4 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i11 = i1 + 56 | 0;
   HEAP32[i11 >> 2] = i4;
   i9 = i8 + i6 | 0;
   HEAP32[i7 >> 2] = i9;
   HEAP32[i1 + 48 >> 2] = HEAP32[i2 >> 2];
   i7 = i1 + 52 | 0;
   HEAP32[i7 >> 2] = i9;
   HEAP32[i1 + 64 >> 2] = i4 - i9;
   if (i12) {
    HEAP32[i1 + 60 >> 2] = i6 << 1;
    HEAP16[i1 + 72 >> 1] = 0;
    i10 = (HEAP8[i1 + 77 | 0] & 1) == 0;
    return i10 | 0;
   }
   if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
    HEAP32[i1 + 60 >> 2] = (HEAP32[i5 + 8 >> 2] | 0) + (i6 << 1);
    i15 = i4;
   } else {
    i4 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i5) | 0;
    i9 = HEAP32[i11 >> 2] | 0;
    HEAP32[i1 + 60 >> 2] = i4 + ((HEAP32[i7 >> 2] | 0) - i8 << 1);
    i15 = i9;
   }
   i9 = i15 - 1 | 0;
   if ((HEAP32[i5 + 4 >> 2] | 0) >>> 0 <= i9 >>> 0) {
    HEAP16[i1 + 72 >> 1] = 0;
    i14 = (HEAP8[i1 + 77 | 0] & 1) == 0;
    break;
   }
   i7 = i5 + 8 | 0;
   if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP16[(HEAP32[i7 >> 2] | 0) + (i9 << 1) >> 1] | 0;
   } else {
    i16 = HEAPU8[(HEAP32[i7 >> 2] | 0) + i9 | 0] | 0;
   }
   HEAP16[i1 + 72 >> 1] = i16;
   i14 = (HEAP8[i1 + 77 | 0] & 1) == 0;
  }
 } while (0);
 i1 = i5 | 0;
 i16 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i10 = i14;
  return i10 | 0;
 } else {
  HEAP32[i1 >> 2] = i16;
  i10 = i14;
  return i10 | 0;
 }
 return 0;
}
function __ZNK7WebCore31SimplifiedBackwardsTextIterator5rangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i10 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = i9;
  i12 = i9 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i12 = HEAP32[i2 + 52 >> 2] | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i13 = i9 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i10, i4, i12, i5, HEAP32[i2 + 56 >> 2] | 0);
  i5 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i8 = i5 + 8 | 0;
    i12 = i8 | 0;
    i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i4;
    if ((i4 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   }
  } while (0);
  i5 = HEAP32[i11 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i11 = i5 + 8 | 0;
  i5 = i11 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i11 = i2 + 32 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i8 | 0) == 0) {
   i12 = HEAP32[i2 + 36 >> 2] | 0;
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = 0;
   i14 = i12;
   i15 = i12;
   i16 = i10;
  } else {
   i10 = i8 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = i2 + 36 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i14 = i13;
    i15 = i13;
    i16 = i9;
    break;
   }
   i17 = i10 + 8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i14 = HEAP32[i12 >> 2] | 0;
   i15 = i13;
   i16 = i9;
  }
 } while (0);
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i5, i6, i15, i7, i14);
 i14 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i16 = i14 + 8 | 0;
   i7 = i16 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i14 + 8 | 0;
 i14 = i4 | 0;
 i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i16;
 if ((i16 | 0) >= 1) {
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
function __ZN7WebCore12TextIterator23representNodeOffsetZeroEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(__ZN7WebCore11isTableCellEPKNS_4NodeE(i3) | 0)) {
    break;
   }
   i5 = i4;
   i6 = HEAP32[(HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   i7 = i6;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i7, i5) | 0) == 0) {
    if ((__ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i7, i5) | 0) == 0) {
     break;
    }
   }
   if (!(__ZN7WebCore12TextIterator29shouldRepresentNodeOffsetZeroEv(i1) | 0)) {
    return;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i5 + 16 >> 2] | 0;
   HEAP8[i1 + 124 | 0] = 1;
   HEAP32[i1 + 52 >> 2] = i7;
   HEAP32[i1 + 56 >> 2] = i5;
   HEAP32[i1 + 60 >> 2] = 0;
   HEAP32[i1 + 64 >> 2] = 0;
   i5 = i1 + 104 | 0;
   HEAP16[i5 >> 1] = 9;
   HEAP32[i1 + 68 >> 2] = i5;
   HEAP32[i1 + 72 >> 2] = 1;
   HEAP8[i1 + 100 | 0] = 0;
   HEAP16[i1 + 102 >> 1] = 9;
   return;
  }
 } while (0);
 if (__ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE(HEAP32[i2 >> 2] | 0) | 0) {
  if (!(__ZN7WebCore12TextIterator29shouldRepresentNodeOffsetZeroEv(i1) | 0)) {
   return;
  }
  i4 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i4 + 16 >> 2] | 0;
  HEAP8[i1 + 124 | 0] = 1;
  HEAP32[i1 + 52 >> 2] = i3;
  HEAP32[i1 + 56 >> 2] = i4;
  HEAP32[i1 + 60 >> 2] = 0;
  HEAP32[i1 + 64 >> 2] = 0;
  i4 = i1 + 104 | 0;
  HEAP16[i4 >> 1] = 10;
  HEAP32[i1 + 68 >> 2] = i4;
  HEAP32[i1 + 72 >> 2] = 1;
  HEAP8[i1 + 100 | 0] = 0;
  HEAP16[i1 + 102 >> 1] = 10;
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i4 + 12 | 0;
 i5 = (HEAP32[i3 >> 2] & 2048 | 0) == 0;
 i7 = i4 + 32 | 0;
 if (i5) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  return;
 }
 if (i5) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 184 >> 2] & 1](i5) | 0)) {
  return;
 }
 if ((HEAP32[i3 >> 2] & 2048 | 0) == 0) {
  i10 = i7 | 0;
 } else {
  i10 = HEAP32[i7 >> 2] | 0;
 }
 do {
  if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 1024 | 0) == 0) {
   if ((HEAP8[i1 + 125 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 if (!(__ZN7WebCore12TextIterator29shouldRepresentNodeOffsetZeroEv(i1) | 0)) {
  return;
 }
 i10 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i10 + 16 >> 2] | 0;
 HEAP8[i1 + 124 | 0] = 1;
 HEAP32[i1 + 52 >> 2] = i2;
 HEAP32[i1 + 56 >> 2] = i10;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 i10 = i1 + 104 | 0;
 HEAP16[i10 >> 1] = 32;
 HEAP32[i1 + 68 >> 2] = i10;
 HEAP32[i1 + 72 >> 2] = 1;
 HEAP8[i1 + 100 | 0] = 0;
 HEAP16[i1 + 102 >> 1] = 32;
 return;
}
function __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i3;
 do {
  if ((HEAP8[i1 + 128 | 0] & 1) == 0) {
   if ((HEAP8[i1 + 127 | 0] & 1) != 0) {
    __ZNK7WebCore10RenderText41textWithoutConvertingBackslashToYenSymbolEv(i7, i8);
    i9 = 1;
    i10 = 0;
    break;
   }
   i11 = HEAP32[i3 + 44 >> 2] | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i9 = 1;
    i10 = 0;
    break;
   }
   i12 = i11 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i9 = 1;
   i10 = 0;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 628 >> 2] & 3](i7, i8);
   i9 = 0;
   i10 = 1;
  }
 } while (0);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i3 = i1 + 76 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if (i9) {
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (i10) {
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i7 = i9 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 52 >> 2] = i2;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = i4;
 HEAP32[i1 + 64 >> 2] = i5;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = i5 - i4;
 i4 = i5 - 1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = 0;
  i14 = i1 + 102 | 0;
  HEAP16[i14 >> 1] = i13;
  i15 = i1 + 100 | 0;
  HEAP8[i15] = 0;
  i16 = i1 + 124 | 0;
  HEAP8[i16] = 1;
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  i13 = 0;
  i14 = i1 + 102 | 0;
  HEAP16[i14 >> 1] = i13;
  i15 = i1 + 100 | 0;
  HEAP8[i15] = 0;
  i16 = i1 + 124 | 0;
  HEAP8[i16] = 1;
  STACKTOP = i6;
  return;
 }
 i3 = i5 + 8 | 0;
 if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
  i13 = HEAP16[(HEAP32[i3 >> 2] | 0) + (i4 << 1) >> 1] | 0;
  i14 = i1 + 102 | 0;
  HEAP16[i14 >> 1] = i13;
  i15 = i1 + 100 | 0;
  HEAP8[i15] = 0;
  i16 = i1 + 124 | 0;
  HEAP8[i16] = 1;
  STACKTOP = i6;
  return;
 } else {
  i13 = HEAPU8[(HEAP32[i3 >> 2] | 0) + i4 | 0] | 0;
  i14 = i1 + 102 | 0;
  HEAP16[i14 >> 1] = i13;
  i15 = i1 + 100 | 0;
  HEAP8[i15] = 0;
  i16 = i1 + 124 | 0;
  HEAP8[i16] = 1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore12SearchBuffer6searchERj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 28 | 0;
 do {
  if ((HEAP8[i7] & 1) == 0) {
   if ((i6 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i3;
   return i8 | 0;
  } else {
   if ((i6 | 0) == 0) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i9 = __ZN7WebCoreL8searcherEv() | 0;
 HEAP32[i4 >> 2] = 0;
 i10 = i1 + 8 | 0;
 _usearch_setText(i9, HEAP32[i10 >> 2] | 0, i6, i4);
 i11 = i1 + 24 | 0;
 _usearch_setOffset(i9, HEAP32[i11 >> 2] | 0, i4);
 i12 = _usearch_next(i9, i4) | 0;
 if (!((i12 | 0) > -1 & i12 >>> 0 < i6 >>> 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i13 = i1 + 20 | 0;
 i14 = i1 + 4 | 0;
 i15 = i12;
 while (1) {
  if ((HEAP8[i7] & 1) == 0) {
   i16 = HEAP32[i13 >> 2] | 0;
   if (i15 >>> 0 >= (i6 - i16 | 0) >>> 0) {
    i17 = 8;
    break;
   }
  }
  i18 = _usearch_getMatchedLength(i9) | 0;
  if (!(__ZNK7WebCore12SearchBuffer10isBadMatchEPKtj(i1, (HEAP32[i10 >> 2] | 0) + (i15 << 1) | 0, i18) | 0)) {
   if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
    i17 = 17;
    break;
   }
   if (__ZNK7WebCore12SearchBuffer16isWordStartMatchEjj(i1, i15, i18) | 0) {
    i17 = 17;
    break;
   }
  }
  i12 = _usearch_next(i9, i4) | 0;
  if ((i12 | 0) > -1 & i12 >>> 0 < i6 >>> 0) {
   i15 = i12;
  } else {
   i8 = 0;
   i17 = 22;
   break;
  }
 }
 if ((i17 | 0) == 8) {
  if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
   i19 = i16;
  } else {
   i14 = i15 - 1 | 0;
   i4 = HEAP32[i10 >> 2] | 0;
   if ((HEAP16[i4 + (i14 << 1) >> 1] & -1024) << 16 >> 16 == -9216 & (i14 | 0) > 0) {
    i9 = i15 - 2 | 0;
    i20 = (HEAP16[i4 + (i9 << 1) >> 1] & -1024) << 16 >> 16 == -10240 ? i9 : i14;
   } else {
    i20 = i14;
   }
   i14 = i6 - 1 | 0;
   i9 = i6 - (__ZN7WebCore30startOfLastWordBoundaryContextEPKti(i4, i20) | 0) | 0;
   i20 = i16 >>> 0 < i9 >>> 0 ? i9 : i16;
   i19 = i20 >>> 0 < i14 >>> 0 ? i20 : i14;
  }
  i14 = HEAP32[i10 >> 2] | 0;
  i20 = i6 - i19 | 0;
  _memcpy(i14 | 0, i14 + (i20 << 1) | 0, i19 << 1) | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i14 - (i20 >>> 0 < i14 >>> 0 ? i20 : i14);
  HEAP32[i5 >> 2] = i19;
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i17 | 0) == 22) {
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i17 | 0) == 17) {
  i17 = i15 + 1 | 0;
  i19 = i6 - i17 | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  _memmove(i14 | 0, i14 + (i17 << 1) | 0, i19 << 1 | 0) | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i14 - (i17 >>> 0 < i14 >>> 0 ? i17 : i14);
  HEAP32[i5 >> 2] = i19;
  HEAP32[i2 >> 2] = i6 - i15;
  i8 = i18;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCoreL17characterSubrangeERNS_17CharacterIteratorEii(i1, i2, i3, i4) {
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
 __ZN7WebCore17CharacterIterator7advanceEi(i2, i3);
 __ZNK7WebCore17CharacterIterator5rangeEv(i6, i2);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) > 1) {
  __ZN7WebCore17CharacterIterator7advanceEi(i2, i4 - 1 | 0);
 }
 __ZNK7WebCore17CharacterIterator5rangeEv(i7, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i6 + 8 >> 2] | 0;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i6 + 12 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) > -1) {
  i11 = i2;
 } else {
  i2 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i6 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i2;
  i11 = i2;
 }
 i2 = HEAP32[i7 + 20 >> 2] | 0;
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i12 = i2 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i7 + 24 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) > -1) {
  i13 = i2;
 } else {
  i2 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i7 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i12 >> 2] = i2;
  i13 = i2;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i4, i8, i11, i9, i13);
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i10 = i13 + 8 | 0;
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i13 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i3 = i13 + 8 | 0;
   i10 = i3 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator8exitNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (HEAP8[i1 + 80 | 0] & 1) != 0;
 i5 = i3 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i3 + 32 | 0;
 if ((i6 & 2048 | 0) == 0) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   if ((i6 & 4 | 0) == 0) {
    i9 = 16;
    break;
   }
   i8 = HEAP32[i3 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i8 | 0) == (i10 | 0)) {
    i11 = 1;
   } else {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     i9 = 16;
     break;
    }
    i11 = (HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0);
   }
   if (i4 | i11 ^ 1) {
    i12 = i11;
    i9 = 15;
   } else {
    i13 = i6;
    i9 = 13;
   }
  } else {
   if ((HEAP32[i7 + 20 >> 2] & 4096 | 0) == 0) {
    i9 = 16;
    break;
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 620 >> 2] & 1](i7) | 0;
   if (i10 | i4) {
    i12 = i10 ^ 1;
    i9 = 15;
    break;
   }
   i13 = HEAP32[i5 >> 2] | 0;
   i9 = 13;
  }
 } while (0);
 do {
  if ((i9 | 0) == 15) {
   if (!i12) {
    i9 = 16;
   }
  } else if ((i9 | 0) == 13) {
   if ((i13 & 8388608 | 0) == 0) {
    break;
   }
   i5 = __ZNK7WebCore4Node10shadowHostEv(i3) | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 208 >> 2] & 1](i5 | 0) | 0) != 0) {
    i9 = 16;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 16) {
   if (__ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE(HEAP32[i2 >> 2] | 0) | 0) {
    break;
   }
   i3 = HEAP32[i2 >> 2] | 0;
   i13 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    return;
   }
   if (!(__ZN7WebCore11isTableCellEPKNS_4NodeE(i3) | 0)) {
    return;
   }
   i3 = i13;
   i12 = HEAP32[(HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   i13 = i12;
   if ((i12 | 0) == 0) {
    return;
   }
   if ((__ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i13, i3) | 0) != 0) {
    break;
   }
   if ((__ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i13, i3) | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i14 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 74 | 0;
 HEAP16[i2 >> 1] = 10;
 HEAP32[i1 + 48 >> 2] = i14;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = i2;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP16[i1 + 72 >> 1] = 10;
 return;
}
function __ZNK7WebCore26BackwardsCharacterIterator5rangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 __ZNK7WebCore31SimplifiedBackwardsTextIterator5rangeEv(i4, i2 + 12 | 0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((HEAP32[i2 + 60 >> 2] | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i2 + 91 | 0] & 1) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 76 >> 2] | 0) < 2) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i4 + 8 >> 2] | 0;
 i10 = i4 + 24 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) > -1) {
  i12 = i11;
 } else {
  i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 - (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i8;
 i12 = (i8 | 0) == 0;
 if (!i12) {
  i10 = i8 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i3 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i5, i11 - 1 | 0, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 8 | 0;
   i5 = i2 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i8;
 if (!i12) {
  i12 = i8 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i6, i11, i12);
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i10 = i12 + 8 | 0;
 i12 = i10 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17CharacterIterator5rangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 __ZNK7WebCore12TextIterator5rangeEv(i4, i2 + 12 | 0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((HEAP32[i2 + 64 >> 2] | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i2 + 145 | 0] & 1) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 84 >> 2] | 0) < 2) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i4 + 8 >> 2] | 0;
 i10 = i4 + 12 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) > -1) {
  i12 = i11;
 } else {
  i11 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i11;
  i12 = i11;
 }
 i11 = (HEAP32[i2 + 4 >> 2] | 0) + i12 | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i8;
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i10 = i8 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i3 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i5, i11, i10);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 + 8 | 0;
   i5 = i12 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i8;
 if (!i2) {
  i2 = i8 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i6, i11 + 1 | 0, i2);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i10 = i2 + 8 | 0;
 i2 = i10 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25isRendererReplacedElementEPNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 92 >> 2] & 1](i1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 228 >> 2] & 1](i1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 112 >> 2] & 1](i1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i4 = i3;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 448 >> 2] & 1](i4) | 0) {
    i2 = 1;
    return i2 | 0;
   }
   i5 = HEAP32[i3 + 44 >> 2] | 0;
   i3 = HEAP32[__ZN7WebCore9HTMLNames9legendTagE >> 2] | 0;
   if ((i5 | 0) == (i3 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   i6 = HEAP32[i5 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
      i2 = 1;
     } else {
      break;
     }
     return i2 | 0;
    }
   } while (0);
   i3 = HEAP32[__ZN7WebCore9HTMLNames8meterTagE >> 2] | 0;
   if ((i5 | 0) == (i3 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   do {
    if ((i6 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
      i2 = 1;
     } else {
      break;
     }
     return i2 | 0;
    }
   } while (0);
   i3 = HEAP32[__ZN7WebCore9HTMLNames11progressTagE >> 2] | 0;
   if ((i5 | 0) == (i3 | 0)) {
    i2 = 1;
    return i2 | 0;
   }
   do {
    if ((i6 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
     if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
      i2 = 1;
     } else {
      break;
     }
     return i2 | 0;
    }
   } while (0);
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames8roleAttrE) | 0) >> 2] | 0, H_BASE + 32 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
}
function __ZN7WebCore12SearchBuffer6appendEPKtj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = i1 + 28 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 do {
  if ((HEAP8[i4] & 1) == 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i1 + 12 | 0;
   if ((i7 | 0) != (HEAP32[i8 >> 2] | 0)) {
    i9 = i7;
    i10 = i8;
    break;
   }
   i11 = HEAP32[i5 >> 2] | 0;
   i12 = i1 + 20 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   _memcpy(i11 | 0, i11 + (i7 - i13 << 1) | 0, i13 << 1) | 0;
   i13 = i1 + 24 | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - i7 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11 - (i12 >>> 0 < i11 >>> 0 ? i12 : i11);
   HEAP32[i6 >> 2] = i7;
   i9 = i7;
   i10 = i8;
  } else {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 + 24 >> 2] = 0;
   HEAP8[i4] = 0;
   i9 = 0;
   i10 = i1 + 12 | 0;
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 i10 = i1 - i9 | 0;
 i4 = i10 >>> 0 > i3 >>> 0 ? i3 : i10;
 i10 = i4 + i9 | 0;
 if (i10 >>> 0 > i1 >>> 0) {
  __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i10);
  i14 = HEAP32[i6 >> 2] | 0;
 } else {
  i14 = i9;
 }
 if (i10 >>> 0 < i14 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i6 >> 2] = i10;
  return i4 | 0;
 } else {
  i15 = 0;
 }
 while (1) {
  HEAP16[i5 + (i15 + i14 << 1) >> 1] = HEAP16[i2 + (i15 << 1) >> 1] | 0;
  i15 = i15 + 1 | 0;
  if (i15 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 HEAP32[i6 >> 2] = i10;
 i10 = HEAP32[i1 >> 2] | 0;
 i1 = 0;
 while (1) {
  i6 = i10 + (i1 + i9 << 1) | 0;
  i15 = HEAP16[i6 >> 1] | 0;
  i2 = i15 & 65535;
  if ((i2 | 0) == 1524 | (i2 | 0) == 8220 | (i2 | 0) == 8221) {
   i16 = 34;
  } else if ((i2 | 0) == 1523 | (i2 | 0) == 8216 | (i2 | 0) == 8217) {
   i16 = 39;
  } else if ((i2 | 0) == 173) {
   i16 = 0;
  } else {
   i16 = i15;
  }
  HEAP16[i6 >> 1] = i16;
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return i4 | 0;
}
function __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 do {
  if (i6) {
   i8 = HEAP32[i1 >> 2] | 0;
   if (i7) {
    HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i8;
    i9 = 1;
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, i8) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   i9 = 2;
  } else {
   if (!i7) {
    i9 = 0;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   i9 = 2;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0)) {
  i10 = i9;
  return i10 | 0;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0)) {
  i10 = i9 + 1 | 0;
  return i10 | 0;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
  i10 = i9 + 2 | 0;
  return i10 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i5;
 i10 = i9 + 3 | 0;
 return i10 | 0;
}
function __ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP8[i6 + 8 | 0] = 1;
 i7 = i6 + 12 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i7, i2, 0);
 i2 = i6 + 145 | 0;
 i8 = i6 + 84 | 0;
 i9 = i6 + 64 | 0;
 L1 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   while (1) {
    if ((HEAP8[i2] & 1) != 0) {
     break L1;
    }
    if ((HEAP32[i8 >> 2] | 0) != 0) {
     break L1;
    }
    __ZN7WebCore12TextIterator7advanceEv(i7);
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCoreL17characterSubrangeERNS_17CharacterIteratorEii(i1, i6, i3, i4);
 i4 = i6 + 128 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i6 + 120 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i6 + 88 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i6 + 36 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i6 + 28 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i6 + 40 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i6 + 32 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i2 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] & 66048 | 0) != 66048) {
    break;
   }
   i5 = i2 + 52 | 0;
   i6 = HEAP32[i5 + 4 >> 2] | 0;
   if ((HEAP32[i5 >> 2] | 0) < 1) {
    i7 = 1;
    __ZN7WebCore8BitStack4pushEb(i1, i7);
    return;
   }
   if ((i6 | 0) < 1) {
    i7 = 1;
   } else {
    break;
   }
   __ZN7WebCore8BitStack4pushEb(i1, i7);
   return;
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  __ZN7WebCore8BitStack4pushEb(i1, i7);
  return;
 }
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 12 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + (i6 << 2) >> 2] & 1 << (i2 + 31 & 31) | 0) == 0) {
  i7 = 0;
  __ZN7WebCore8BitStack4pushEb(i1, i7);
  return;
 }
 if (i3) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 1;
  __ZN7WebCore8BitStack4pushEb(i1, i7);
  return;
 }
 i8 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i8 & 768 | 0) == 256 | (i8 & 4096 | 0) != 0) {
  i7 = 1;
  __ZN7WebCore8BitStack4pushEb(i1, i7);
  return;
 }
 i8 = (HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 i7 = (i8 | 0) != 6 & (i8 | 0) != 2;
 __ZN7WebCore8BitStack4pushEb(i1, i7);
 return;
}
function __ZN7WebCore12SearchBuffer14prependContextEPKtj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP8[i1 + 28 | 0] = 0;
 i4 = i3 - 1 | 0;
 if ((HEAP16[i2 + (i4 << 1) >> 1] & -1024) << 16 >> 16 != -9216 | (i4 | 0) == 0) {
  i5 = i4;
 } else {
  i6 = i3 - 2 | 0;
  i5 = (HEAP16[i2 + (i6 << 1) >> 1] & -1024) << 16 >> 16 == -10240 ? i6 : i4;
 }
 i4 = __ZN7WebCore30startOfLastWordBoundaryContextEPKti(i2, i5) | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 24 | 0;
 i9 = i7 - (HEAP32[i8 >> 2] | 0) | 0;
 i10 = i3 - i4 | 0;
 i11 = i10 >>> 0 < i9 >>> 0 ? i10 : i9;
 i9 = i3 - i11 | 0;
 i3 = i1 + 16 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i12 = i11 + i10 | 0;
 if (i12 >>> 0 > i7 >>> 0) {
  __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i12);
  i13 = HEAP32[i3 >> 2] | 0;
 } else {
  i13 = i10;
 }
 if (i12 >>> 0 < i13 >>> 0) {
  _WTFCrash();
 }
 i10 = HEAP32[i5 >> 2] | 0;
 _memmove(i10 + (i11 << 1) | 0, i10 | 0, i13 << 1 | 0) | 0;
 if ((i11 | 0) != 0) {
  i13 = 0;
  while (1) {
   HEAP16[i10 + (i13 << 1) >> 1] = HEAP16[i2 + (i9 + i13 << 1) >> 1] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i11 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i3 >> 2] = i12;
 i12 = (HEAP32[i8 >> 2] | 0) + i11 | 0;
 HEAP32[i8 >> 2] = i12;
 do {
  if ((i4 | 0) == 0) {
   if ((i12 | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i1 + 29 | 0] = 0;
 return;
}
function __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i4, i1, i2 & 1);
 i2 = i4 + 133 | 0;
 i1 = i4 + 52 | 0;
 L1 : do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i5 = 0;
  } else {
   i6 = i4 + 72 | 0;
   i7 = 0;
   while (1) {
    if ((HEAP8[i2] & 1) != 0) {
     i5 = i7;
     break L1;
    }
    i8 = (HEAP32[i6 >> 2] | 0) + i7 | 0;
    __ZN7WebCore12TextIterator7advanceEv(i4);
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     i5 = i8;
     break;
    } else {
     i7 = i8;
    }
   }
  }
 } while (0);
 i1 = i4 + 116 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i4 + 108 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i4 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i4 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i1 = i2 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = i4 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i4 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i4 + 28 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i3;
  return i5 | 0;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCoreL8searcherEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 if (HEAP8[H_BASE + 304 | 0] | 0) {
  i6 = HEAP32[H_BASE + 312 >> 2] | 0;
  STACKTOP = i1;
  return i6 | 0;
 }
 HEAP32[i3 >> 2] = 0;
 i7 = __ZN7WebCore21currentSearchLocaleIDEv() | 0;
 __ZN3WTF13tryMakeStringIPKcS2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i2, i7, H_BASE + 8 | 0);
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i2 | 0) == 0) {
  _WTFCrash();
  return 0;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i4, 0);
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i5 + 8 | 0;
 }
 i5 = _usearch_open(H_BASE + 296, 1, H_BASE + 296, 1, i8, 0, i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[H_BASE + 312 >> 2] = i5;
 HEAP8[H_BASE + 304 | 0] = 1;
 i6 = i5;
 STACKTOP = i1;
 return i6 | 0;
}
function __ZN3WTF13tryMakeStringIPKcS2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = _strlen(i2 | 0) | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = _llvm_uadd_with_overflow_i32(i6 | 0, i7 | 0) | 0;
 i9 = i8;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if ((i9 | 0) == 0) {
   i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i8 | 0) == 0) {
    i10 = 10;
    break;
   }
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i12 = i8;
   i13 = 0;
   i10 = 9;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i10 = 10;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, i9 + 20 | 0);
   i8 = i5 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i10 = 10;
    break;
   }
   i8 = i11 + 20 | 0;
   HEAP32[i11 >> 2] = 2;
   HEAP32[i11 + 4 >> 2] = i9;
   HEAP32[i11 + 8 >> 2] = i8;
   HEAP32[i11 + 12 >> 2] = 0;
   HEAP32[i11 + 16 >> 2] = 32;
   i12 = i11;
   i13 = i8;
   i10 = 9;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else if ((i10 | 0) == 9) {
  _memcpy(i13 | 0, i2 | 0, i6) | 0;
  _memcpy(i13 + i6 | 0, i3 | 0, i7) | 0;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17WordAwareIteratorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 144 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 136 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 52 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 56 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17WordAwareIteratorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 144 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 136 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 52 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 56 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore26BackwardsCharacterIterator7advanceEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) < 1) {
  return;
 }
 i3 = i1 + 8 | 0;
 HEAP8[i3] = 0;
 i4 = i1 + 12 | 0;
 i5 = i1 + 76 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - i7 | 0;
 if ((i8 | 0) > (i2 | 0)) {
  HEAP32[i6 >> 2] = i7 + i2;
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i2;
  return;
 }
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i8;
 __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i4);
 i9 = i1 + 60 | 0;
 L8 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i10 = i1 + 91 | 0;
   i11 = i2 - i8 | 0;
   while (1) {
    if ((HEAP8[i10] & 1) != 0) {
     break L8;
    }
    i12 = HEAP32[i5 >> 2] | 0;
    if ((i12 | 0) == 0) {
     HEAP8[i3] = 1;
     i13 = i11;
    } else {
     if ((i11 | 0) < (i12 | 0)) {
      break;
     }
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i12;
     i13 = i11 - i12 | 0;
    }
    __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i4);
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     break L8;
    } else {
     i11 = i13;
    }
   }
   HEAP32[i6 >> 2] = i11;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i11;
   return;
  }
 } while (0);
 HEAP8[i3] = 1;
 HEAP32[i6 >> 2] = 0;
 return;
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator17handleFirstLetterERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i4 + 32 | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = i5;
 if ((i4 | 0) == (HEAP32[i1 + 32 >> 2] | 0)) {
  i7 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i7 = 0;
 }
 HEAP32[i2 >> 2] = i7;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 624 >> 2] & 1](i6) | 0)) {
  HEAP32[i3 >> 2] = 0;
  i8 = i6;
  return i8 | 0;
 }
 i7 = HEAP32[i5 + 56 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) >= (i7 | 0)) {
  HEAP32[i3 >> 2] = i7;
  i8 = i6;
  return i8 | 0;
 }
 i2 = i1 + 77 | 0;
 do {
  if ((HEAP8[i2] & 1) == 0) {
   if ((i7 | 0) >= (HEAP32[i1 + 4 >> 2] | 0)) {
    break;
   }
   HEAP8[i2] = 1;
   HEAP32[i3 >> 2] = i7;
   i8 = i6;
   return i8 | 0;
  }
 } while (0);
 HEAP8[i2] = 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i5 + 72 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i5 = i3 + 28 | 0;
 while (1) {
  i3 = HEAP32[i5 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i9 = 0;
   break;
  }
  if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
   i9 = i3;
   break;
  } else {
   i5 = i3 + 16 | 0;
  }
 }
 i8 = i9;
 return i8 | 0;
}
function __ZN7WebCore17CharacterIterator7advanceEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) < 1) {
  return;
 }
 i3 = i1 + 8 | 0;
 HEAP8[i3] = 0;
 i4 = i1 + 12 | 0;
 i5 = i1 + 84 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - i7 | 0;
 if ((i8 | 0) > (i2 | 0)) {
  HEAP32[i6 >> 2] = i7 + i2;
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i2;
  return;
 }
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i8;
 __ZN7WebCore12TextIterator7advanceEv(i4);
 i9 = i1 + 64 | 0;
 L8 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i10 = i1 + 145 | 0;
   i11 = i2 - i8 | 0;
   while (1) {
    if ((HEAP8[i10] & 1) != 0) {
     break L8;
    }
    i12 = HEAP32[i5 >> 2] | 0;
    if ((i12 | 0) == 0) {
     HEAP8[i3] = 1;
     i13 = i11;
    } else {
     if ((i11 | 0) < (i12 | 0)) {
      break;
     }
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i12;
     i13 = i11 - i12 | 0;
    }
    __ZN7WebCore12TextIterator7advanceEv(i4);
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     break L8;
    } else {
     i11 = i13;
    }
   }
   HEAP32[i6 >> 2] = i11;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i11;
   return;
  }
 } while (0);
 HEAP8[i3] = 1;
 HEAP32[i6 >> 2] = 0;
 return;
}
function __ZN7WebCore8BitStack4pushEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 >>> 5;
 i6 = i4 & 31;
 do {
  if ((i6 | 0) == 0) {
   i4 = i1 + 4 | 0;
   i7 = i1 + 12 | 0;
   if ((i5 | 0) != (HEAP32[i7 >> 2] | 0)) {
    i8 = i7;
    break;
   }
   i9 = i5 + 1 | 0;
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   if (i10 >>> 0 < i9 >>> 0) {
    i11 = i10 + 1 + (i10 >>> 2) | 0;
    i10 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
    __ZN3WTF6VectorIjLj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i4, i10 >>> 0 > i9 >>> 0 ? i10 : i9);
   }
   HEAP32[i7 >> 2] = i9;
   HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] = 0;
   i8 = i7;
  } else {
   i8 = i1 + 12 | 0;
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = (HEAP32[i1 + 4 >> 2] | 0) + (i5 << 2) | 0;
 i5 = 1 << i6;
 if (i2) {
  i12 = HEAP32[i8 >> 2] | i5;
  HEAP32[i8 >> 2] = i12;
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 } else {
  i12 = HEAP32[i8 >> 2] & ~i5;
  HEAP32[i8 >> 2] = i12;
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
}
function __ZN7WebCore12TextIterator25handleTextNodeFirstLetterEPNS_18RenderTextFragmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 72 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   do {
    if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
     if ((HEAP8[i1 + 130 | 0] & 1) != 0) {
      break;
     }
     return;
    }
   } while (0);
   i2 = i3 + 28 | 0;
   while (1) {
    i4 = HEAP32[i2 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break L1;
    }
    if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
     break;
    } else {
     i2 = i4 + 16 | 0;
    }
   }
   i2 = i4;
   HEAP8[i1 + 129 | 0] = 1;
   i5 = i1 + 84 | 0;
   HEAP32[i1 + 88 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = HEAP32[i4 + 48 >> 2];
   i5 = i1 + 112 | 0;
   do {
    if ((HEAP32[i5 >> 2] | 0) != 0) {
     i6 = i1 + 116 | 0;
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
     }
     i6 = i1 + 108 | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     HEAP32[i5 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   HEAP32[i1 + 92 >> 2] = i2;
  }
 } while (0);
 HEAP8[i1 + 129 | 0] = 1;
 return;
}
function __ZN7WebCore12SearchBufferD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = 0;
 _usearch_setPattern(__ZN7WebCoreL8searcherEv() | 0, H_BASE + 296, 1, i3);
 i3 = i1 + 52 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 40 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 32 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 16 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore12TextIterator4nodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore12TextIterator5rangeEv(i3, i1);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i5 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 1](i1) | 0) {
    i5 = i1;
    break;
   }
   i6 = i3 + 12 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) > -1) {
    i8 = i7;
   } else {
    i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i6 >> 2] = i7;
    i8 = i7;
   }
   if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = __ZNK7WebCore13ContainerNode9childNodeEj(i1, i8) | 0;
  }
 } while (0);
 i8 = i3 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  i4 = i5;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i8 >> 2] = i1;
  i4 = i5;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCoreL19normalizeCharactersEPKtjRN3WTF6VectorItLj0ENS2_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i3 + 8 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) >>> 0 < i2 >>> 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 >= i2 >>> 0) {
    break;
   }
   __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
  }
 } while (0);
 HEAP32[i6 >> 2] = i2;
 HEAP32[i5 >> 2] = 0;
 i7 = i3 | 0;
 i8 = _unorm_normalize(i1, i2, 4, 0, HEAP32[i7 >> 2] | 0, i2, i5) | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) >>> 0 < i8 >>> 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 >= i8 >>> 0) {
    break;
   }
   __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8);
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (-124 | 0) | (i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 _unorm_normalize(i1, i2, 4, 0, HEAP32[i7 >> 2] | 0, i8, i5) | 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIjLj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12TextIteratorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 116 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 108 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i1 + 28 | 0) == (i4 | 0) | (i4 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore12TextIteratorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 116 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 108 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 24 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i1 + 28 | 0) == (i4 | 0) | (i4 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore12TextIterator33shouldEmitSpaceBeforeAndAfterNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] & 2048 | 0) == 0;
 i5 = i2 + 32 | 0;
 if (i4) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if (i4) {
  i8 = i5 | 0;
 } else {
  i8 = HEAP32[i5 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 1](i4) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 if ((HEAP32[i3 >> 2] & 2048 | 0) == 0) {
  i9 = i5 | 0;
 } else {
  i9 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 1024 | 0) != 0) {
  i7 = 1;
  return i7 | 0;
 }
 i7 = (HEAP8[i1 + 125 | 0] & 1) != 0;
 return i7 | 0;
}
function __ZN7WebCore26BackwardsCharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 i4 = i1 + 12 | 0;
 __ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i4, i2, i3);
 i3 = i1 + 91 | 0;
 i2 = i1 + 76 | 0;
 i5 = i1 + 60 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 while (1) {
  if ((HEAP8[i3] & 1) != 0) {
   i6 = 9;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i6 = 8;
   break;
  }
  __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i4);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = 7;
   break;
  }
 }
 if ((i6 | 0) == 9) {
  return;
 } else if ((i6 | 0) == 8) {
  return;
 } else if ((i6 | 0) == 7) {
  return;
 }
}
function __ZN7WebCore26BackwardsCharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 i4 = i1 + 12 | 0;
 __ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i4, i2, i3);
 i3 = i1 + 91 | 0;
 i2 = i1 + 76 | 0;
 i5 = i1 + 60 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 while (1) {
  if ((HEAP8[i3] & 1) != 0) {
   i6 = 9;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i6 = 8;
   break;
  }
  __ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv(i4);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = 7;
   break;
  }
 }
 if ((i6 | 0) == 9) {
  return;
 } else if ((i6 | 0) == 8) {
  return;
 } else if ((i6 | 0) == 7) {
  return;
 }
}
function __ZN3WTF6VectorIPN7WebCore13InlineTextBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if ((i5 | 0) < 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 1) | 0;
 HEAP32[i3 >> 2] = i1 >>> 1;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 1) | 0;
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
function __ZN7WebCore17CharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 i4 = i1 + 12 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i4, i2, i3);
 i3 = i1 + 145 | 0;
 i2 = i1 + 84 | 0;
 i5 = i1 + 64 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 while (1) {
  if ((HEAP8[i3] & 1) != 0) {
   i6 = 6;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i6 = 7;
   break;
  }
  __ZN7WebCore12TextIterator7advanceEv(i4);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = 8;
   break;
  }
 }
 if ((i6 | 0) == 6) {
  return;
 } else if ((i6 | 0) == 8) {
  return;
 } else if ((i6 | 0) == 7) {
  return;
 }
}
function __ZN7WebCore17CharacterIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 i4 = i1 + 12 | 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i4, i2, i3);
 i3 = i1 + 145 | 0;
 i2 = i1 + 84 | 0;
 i5 = i1 + 64 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 while (1) {
  if ((HEAP8[i3] & 1) != 0) {
   i6 = 6;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i6 = 7;
   break;
  }
  __ZN7WebCore12TextIterator7advanceEv(i4);
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = 8;
   break;
  }
 }
 if ((i6 | 0) == 6) {
  return;
 } else if ((i6 | 0) == 8) {
  return;
 } else if ((i6 | 0) == 7) {
  return;
 }
}
function __ZNK7WebCore12TextIterator25appendTextToStringBuilderERN3WTF13StringBuilderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i2, i3, HEAP32[i1 + 72 >> 2] | 0);
  return;
 }
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 i4 = HEAP32[i1 + 72 >> 2] | 0;
 i5 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((i4 + i3 | 0) >>> 0 > i1 >>> 0) {
  return;
 }
 if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i2, (HEAP32[i5 + 8 >> 2] | 0) + (i3 << 1) | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, (HEAP32[i5 + 8 >> 2] | 0) + i3 | 0, i4);
  return;
 }
}
function __ZNK7WebCore12TextIterator11characterAtEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 72 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP16[i4 + (i2 << 1) >> 1] | 0;
  return i3 | 0;
 }
 i4 = (HEAP32[i1 + 60 >> 2] | 0) + i2 | 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP16[(HEAP32[i1 >> 2] | 0) + (i4 << 1) >> 1] | 0;
  return i3 | 0;
 } else {
  i3 = HEAPU8[(HEAP32[i1 >> 2] | 0) + i4 | 0] | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore17WordAwareIterator10charactersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  i2 = HEAP32[i1 + 8 >> 2] | 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i4 = HEAP32[i3 + 8 >> 2] | 0;
    break;
   } else {
    i4 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i3) | 0;
    break;
   }
  }
 } while (0);
 i2 = i4 + (HEAP32[i1 + 88 >> 2] << 1) | 0;
 return i2 | 0;
}
function __ZN7WebCore12TextIterator18hasVisibleTextNodeEPNS_10RenderTextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 624 >> 2] & 1](i2) | 0) {
   i1 = HEAP32[i2 + 72 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
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
function __ZN7WebCore31SimplifiedBackwardsTextIterator21handleReplacedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0;
 i2 = i1 + 74 | 0;
 HEAP16[i2 >> 1] = 44;
 HEAP32[i1 + 48 >> 2] = i4;
 HEAP32[i1 + 52 >> 2] = i3;
 HEAP32[i1 + 56 >> 2] = i3 + 1;
 HEAP32[i1 + 60 >> 2] = i2;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP16[i1 + 72 >> 1] = 44;
 return 1;
}
function __ZN7WebCore12TextIterator13emitCharacterEtPNS_4NodeES2_ii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 HEAP8[i1 + 124 | 0] = 1;
 HEAP32[i1 + 52 >> 2] = i3;
 HEAP32[i1 + 56 >> 2] = i4;
 HEAP32[i1 + 60 >> 2] = i5;
 HEAP32[i1 + 64 >> 2] = i6;
 i6 = i1 + 104 | 0;
 HEAP16[i6 >> 1] = i2;
 HEAP32[i1 + 68 >> 2] = i6;
 HEAP32[i1 + 72 >> 2] = 1;
 HEAP8[i1 + 100 | 0] = 0;
 HEAP16[i1 + 102 >> 1] = i2;
 return;
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator22advanceRespectingRangeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 | 0;
 i5 = i1 + 76 | 0;
 i6 = HEAP8[i5] & 1 | (HEAP32[i4 >> 2] | 0) == (HEAP32[i1 + 32 >> 2] | 0);
 HEAP8[i5] = i6;
 if (i6 << 24 >> 24 != 0) {
  i3 = 0;
  return i3 | 0;
 }
 HEAP32[i4 >> 2] = i2;
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
function __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5 + 32 | 0;
 if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 __ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii(i1, i2, HEAP32[i7 >> 2] | 0, i3, i4);
 return;
}
function __ZNK7WebCore8BitStack3topEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 12 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + (i4 << 2) >> 2] & 1 << (i2 + 31 & 31) | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore31SimplifiedBackwardsTextIterator13emitCharacterEtPNS_4NodeEii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i1 + 74 | 0;
 HEAP16[i6 >> 1] = i2;
 HEAP32[i1 + 48 >> 2] = i3;
 HEAP32[i1 + 52 >> 2] = i4;
 HEAP32[i1 + 56 >> 2] = i5;
 HEAP32[i1 + 60 >> 2] = i6;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP16[i1 + 72 >> 1] = i2;
 return;
}
function __ZN7WebCore17WordAwareIteratorC2EPKNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP8[i1 + 20 | 0] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1 + 28 | 0, i2, 0);
 __ZN7WebCore17WordAwareIterator7advanceEv(i1);
 return;
}
function __ZN7WebCore17WordAwareIteratorC1EPKNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP8[i1 + 20 | 0] = 1;
 HEAP32[i1 + 24 >> 2] = 0;
 __ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE(i1 + 28 | 0, i2, 0);
 __ZN7WebCore17WordAwareIterator7advanceEv(i1);
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
function __ZN7WebCore8BitStackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 16 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore8BitStackD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 16 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZNK7WebCore17WordAwareIterator6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i3 = HEAP32[i1 + 100 >> 2] | 0;
  return i3 | 0;
 } else {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  return i3 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore8BitStack3popEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = i1 - 1;
 return;
}
function __ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) >>> 0 < (HEAP32[i2 + 44 >> 2] | 0) >>> 0 | 0;
}
function __ZN7WebCore8BitStackC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i1 + 16;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore8BitStackC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i1 + 16;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore8BitStack4sizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 >> 2] | 0;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore8BitStackD2Ev,b0,__ZN7WebCore12TextIteratorD2Ev,b0,__ZN7WebCore8BitStackC2Ev,b0,__ZN7WebCore17WordAwareIteratorD2Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore17WordAwareIteratorC2EPKNS_5RangeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore26BackwardsCharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE,b3,__ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE,b3,__ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE,b3,__ZN7WebCore17CharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames8roleAttrE": __ZN7WebCore9HTMLNames8roleAttrE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE, "__ZN7WebCore9HTMLNames10listingTagE": __ZN7WebCore9HTMLNames10listingTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames8meterTagE": __ZN7WebCore9HTMLNames8meterTagE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames11progressTagE": __ZN7WebCore9HTMLNames11progressTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames9legendTagE": __ZN7WebCore9HTMLNames9legendTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12TextIterator4nodeEv","__ZN7WebCore12TextIterator33shouldEmitSpaceBeforeAndAfterNodeEPNS_4NodeE","__ZN7WebCore12TextIterator8exitNodeEv","__ZN3WTF6VectorIPN7WebCore13InlineTextBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore31SimplifiedBackwardsTextIterator13emitCharacterEtPNS_4NodeEii","__ZN7WebCore12TextIterator23representNodeOffsetZeroEv","__ZN7WebCore12TextIterator14handleTextNodeEv","__ZN7WebCore31SimplifiedBackwardsTextIterator17handleNonTextNodeEv","__ZN7WebCore12SearchBufferC2ERKN3WTF6StringEj","__ZNK7WebCore12TextIterator11characterAtEj","_strlen","__ZN7WebCore12TextIterator21handleReplacedElementEv","__ZN7WebCoreL21pushFullyClippedStateERNS_8BitStackEPNS_4NodeE","__ZN3WTF6VectorIjLj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12TextIteratorD2Ev","__ZN7WebCore31SimplifiedBackwardsTextIterator21handleReplacedElementEv","__ZN7WebCore12TextIterator25handleTextNodeFirstLetterEPNS_18RenderTextFragmentE","__ZN7WebCore12SearchBuffer6searchERj","__ZN7WebCore8BitStack3popEv","__ZNK7WebCore17CharacterIterator5rangeEv","__ZNK7WebCore31SimplifiedBackwardsTextIterator5rangeEv","__ZNK7WebCore12TextIterator5rangeEv","__ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_","__ZN7WebCore31SimplifiedBackwardsTextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE","__ZN7WebCoreL8searcherEv","__ZNK7WebCore17WordAwareIterator10charactersEv","__ZN7WebCore17CharacterIterator6stringEi","__ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib","__ZNK7WebCore12SearchBuffer10isBadMatchEPKtj","__ZN7WebCore31SimplifiedBackwardsTextIterator7advanceEv","__ZN7WebCore12TextIterator29shouldRepresentNodeOffsetZeroEv","__ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb","__ZN7WebCore31SimplifiedBackwardsTextIterator17handleFirstLetterERiS1_","_memcpy","__ZN7WebCore31SimplifiedBackwardsTextIterator14handleTextNodeEv","__ZN7WebCore8BitStackC2Ev","__ZN7WebCore12TextIterator18hasVisibleTextNodeEPNS_10RenderTextE","__ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb","__ZN7WebCore17WordAwareIteratorC2EPKNS_5RangeE","__ZN7WebCore12SearchBuffer6appendEPKtj","__ZN7WebCore8BitStack4pushEb","__ZN7WebCore26BackwardsCharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore8BitStackD2Ev","__ZN7WebCoreL36shouldEmitNewlinesBeforeAndAfterNodeEPNS_4NodeE","__ZNK7WebCore8BitStack3topEv","__ZN7WebCore12TextIterator8emitTextEPNS_4NodeEii","__ZN7WebCoreL17characterSubrangeERNS_17CharacterIteratorEii","__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_","__ZN7WebCore31SimplifiedBackwardsTextIterator8exitNodeEv","__ZN7WebCore12TextIterator29getLocationAndLengthFromRangeEPNS_4NodeEPKNS_5RangeERjS6_","__ZN7WebCoreL22setUpFullyClippedStackERNS_8BitStackEPNS_4NodeE","__ZN7WebCore17WordAwareIterator7advanceEv","__ZN7WebCore12TextIterator13emitCharacterEtPNS_4NodeES2_ii","_memset","__ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_","__ZNK7WebCore12SearchBuffer16isWordStartMatchEjj","__ZN7WebCore12SearchBufferD2Ev","__ZN7WebCore13findPlainTextEPKNS_5RangeERKN3WTF6StringEj","__ZN7WebCore12TextIterator17handleNonTextNodeEv","__ZN7WebCore12TextIterator8subrangeEPNS_5RangeEii","__ZNK7WebCore17WordAwareIterator6lengthEv","__ZN7WebCore17CharacterIterator7advanceEi","__ZN7WebCoreL19normalizeCharactersEPKtjRN3WTF6VectorItLj0ENS2_15CrashOnOverflowEEE","__ZN7WebCore12TextIterator8emitTextEPNS_4NodeEPNS_12RenderObjectEii","__ZN7WebCore25isRendererReplacedElementEPNS_12RenderObjectE","__ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_","__ZN7WebCore12SearchBuffer14prependContextEPKtj","__ZNK7WebCore26BackwardsCharacterIterator5rangeEv","__ZN7WebCore12TextIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE","__ZNK7WebCore12TextIterator25appendTextToStringBuilderERN3WTF13StringBuilderE","__ZN7WebCore12TextIterator13handleTextBoxEv","_memmove","__ZN7WebCore12TextIterator7advanceEv","__ZN7WebCore26BackwardsCharacterIterator7advanceEi","__ZN3WTF13tryMakeStringIPKcS2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore31SimplifiedBackwardsTextIterator22advanceRespectingRangeEPNS_4NodeE","__ZNK7WebCore8BitStack4sizeEv","__ZN7WebCore17WordAwareIteratorD2Ev","__ZN7WebCore17CharacterIteratorC2EPKNS_5RangeENS_20TextIteratorBehaviorE"]

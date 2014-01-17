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
var __ZN7WebCore17InsertListCommandC1ERNS_8DocumentENS0_4TypeE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17InsertListCommandE=(H_BASE+8)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17InsertListCommand16listifyParagraphERKNS_15VisiblePositionERKNS_13QualifiedNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 472 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 96 | 0;
 i17 = i5 + 112 | 0;
 i18 = i5 + 128 | 0;
 i19 = i5 + 144 | 0;
 i20 = i5 + 160 | 0;
 i21 = i5 + 176 | 0;
 i22 = i5 + 192 | 0;
 i23 = i5 + 200 | 0;
 i24 = i5 + 208 | 0;
 i25 = i5 + 216 | 0;
 i26 = i5 + 232 | 0;
 i27 = i5 + 240 | 0;
 i28 = i5 + 248 | 0;
 i29 = i5 + 256 | 0;
 i30 = i5 + 264 | 0;
 i31 = i5 + 280 | 0;
 i32 = i5 + 296 | 0;
 i33 = i5 + 312 | 0;
 i34 = i5 + 328 | 0;
 i35 = i5 + 344 | 0;
 i36 = i5 + 360 | 0;
 i37 = i5 + 368 | 0;
 i38 = i5 + 384 | 0;
 i39 = i5 + 400 | 0;
 i40 = i5 + 416 | 0;
 i41 = i5 + 432 | 0;
 i42 = i5 + 448 | 0;
 i43 = i5 + 456 | 0;
 i44 = i5 + 464 | 0;
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, i3, 2);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i11, i10, 2);
 i45 = i10 | 0;
 i46 = i11 | 0;
 do {
  if ((HEAP32[i45 >> 2] | 0) == 0) {
   i47 = 3;
  } else {
   if ((HEAP32[i46 >> 2] | 0) == 0) {
    i47 = 3;
    break;
   }
   i48 = i2 + 8 | 0;
   __ZN7WebCore21createListItemElementERNS_8DocumentE(i12, HEAP32[i48 >> 2] | 0);
   i49 = i12 | 0;
   i50 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = 0;
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i13, HEAP32[i48 >> 2] | 0);
   i49 = i13 | 0;
   i51 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = 0;
   i49 = i2 | 0;
   i52 = i14 | 0;
   i53 = i51 | 0;
   HEAP32[i52 >> 2] = i53;
   i54 = (i51 | 0) == 0;
   if (!i54) {
    i55 = i51 + 8 | 0;
    HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   }
   i55 = i15 | 0;
   HEAP32[i55 >> 2] = i50;
   i56 = (i50 | 0) == 0;
   if (!i56) {
    i57 = i50 + 8 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i49, i14, i15);
   i57 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i55 = i57 + 8 | 0;
     i58 = i55 | 0;
     i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     HEAP32[i58 >> 2] = i59;
     if ((i59 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   i57 = HEAP32[i52 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i55 = i57 + 8 | 0;
     i59 = i55 | 0;
     i58 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     HEAP32[i59 >> 2] = i58;
     if ((i58 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   i57 = i17 | 0;
   i52 = HEAP32[i45 >> 2] | 0;
   HEAP32[i57 >> 2] = i52;
   if ((i52 | 0) != 0) {
    i55 = i52 + 8 | 0;
    HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   }
   i55 = i10 + 4 | 0;
   HEAP32[i17 + 4 >> 2] = HEAP32[i55 >> 2];
   i52 = i10 + 8 | 0;
   i58 = i52;
   i59 = HEAP32[i58 >> 2] | 0;
   i60 = i17 + 8 | 0;
   i61 = i60;
   i62 = HEAP32[i61 >> 2] & -8 | i59 & 7;
   HEAP32[i61 >> 2] = i62;
   HEAP8[i60] = i62 & 255 & -9 | i59 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, 1);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i18, i10, 1);
   i59 = __ZN7WebCoreL21adjacentEnclosingListERKNS_15VisiblePositionES2_RKNS_13QualifiedNameE(i16, i18, i4) | 0;
   i62 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i60 = i62 + 8 | 0;
     i61 = i60 | 0;
     i63 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     HEAP32[i61 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
    }
   } while (0);
   i62 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i60 = i62 + 8 | 0;
     i63 = i60 | 0;
     i61 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i61;
     if ((i61 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
    }
   } while (0);
   i62 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i60 = i62 + 8 | 0;
     i61 = i60 | 0;
     i63 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     HEAP32[i61 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
    }
   } while (0);
   i62 = i20 | 0;
   i57 = HEAP32[i45 >> 2] | 0;
   HEAP32[i62 >> 2] = i57;
   if ((i57 | 0) != 0) {
    i60 = i57 + 8 | 0;
    HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
   }
   HEAP32[i20 + 4 >> 2] = HEAP32[i55 >> 2];
   i60 = HEAP32[i58 >> 2] | 0;
   i57 = i20 + 8 | 0;
   i63 = i57;
   i61 = HEAP32[i63 >> 2] & -8 | i60 & 7;
   HEAP32[i63 >> 2] = i61;
   HEAP8[i57] = i61 & 255 & -9 | i60 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i20, 1);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i21, i11, 1);
   i60 = __ZN7WebCoreL21adjacentEnclosingListERKNS_15VisiblePositionES2_RKNS_13QualifiedNameE(i19, i21, i4) | 0;
   i61 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i57 = i61 + 8 | 0;
     i63 = i57 | 0;
     i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i64;
     if ((i64 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   i61 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i57 = i61 + 8 | 0;
     i64 = i57 | 0;
     i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     HEAP32[i64 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   i61 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i57 = i61 + 8 | 0;
     i63 = i57 | 0;
     i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i64;
     if ((i64 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   i61 = (i59 | 0) == 0;
   do {
    if (i61) {
     if ((i60 | 0) != 0) {
      i62 = i24 | 0;
      HEAP32[i62 >> 2] = i50;
      if (!i56) {
       i57 = i50 + 8 | 0;
       HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
      }
      i57 = i8 | 0;
      HEAP32[i57 >> 2] = i60;
      i64 = i60 + 8 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i25, i8, 1);
      i64 = HEAP32[i57 >> 2] | 0;
      do {
       if ((i64 | 0) != 0) {
        i57 = i64 + 8 | 0;
        i63 = i57 | 0;
        i65 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
        HEAP32[i63 >> 2] = i65;
        if ((i65 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
       }
      } while (0);
      __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i24, i25);
      i64 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i64 | 0) != 0) {
        i57 = i64 + 8 | 0;
        i65 = i57 | 0;
        i63 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
        HEAP32[i65 >> 2] = i63;
        if ((i63 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
       }
      } while (0);
      i64 = HEAP32[i62 >> 2] | 0;
      if ((i64 | 0) == 0) {
       i66 = 0;
       break;
      }
      i57 = i64 + 8 | 0;
      i64 = i57 | 0;
      i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
      HEAP32[i64 >> 2] = i63;
      if ((i63 | 0) >= 1) {
       i66 = 0;
       break;
      }
      if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
       i66 = 0;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      i66 = 0;
      break;
     }
     __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i26, HEAP32[i48 >> 2] | 0, i4);
     i57 = i26 | 0;
     i63 = HEAP32[i57 >> 2] | 0;
     HEAP32[i57 >> 2] = 0;
     i57 = i27 | 0;
     HEAP32[i57 >> 2] = i50;
     if (!i56) {
      i64 = i50 + 8 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
     }
     i64 = i28 | 0;
     HEAP32[i64 >> 2] = i63;
     i65 = (i63 | 0) == 0;
     if (!i65) {
      i67 = i63 + 8 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i49, i27, i28);
     i67 = HEAP32[i64 >> 2] | 0;
     do {
      if ((i67 | 0) != 0) {
       i64 = i67 + 8 | 0;
       i68 = i64 | 0;
       i69 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
       HEAP32[i68 >> 2] = i69;
       if ((i69 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
      }
     } while (0);
     i67 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i67 | 0) != 0) {
       i62 = i67 + 8 | 0;
       i64 = i62 | 0;
       i69 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i69;
       if ((i69 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     L105 : do {
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i10, i11) | 0) {
       i67 = HEAP32[i45 >> 2] | 0;
       L107 : do {
        if ((i67 | 0) == 0) {
         if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i67) | 0)) {
          break L105;
         }
        } else {
         i57 = i67 + 8 | 0;
         HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
         i57 = __ZN7WebCore7isBlockEPKNS_4NodeE(i67) | 0;
         i62 = i67 + 8 | 0;
         i69 = i62 - 8 | 0;
         i64 = i62 | 0;
         i68 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
         HEAP32[i64 >> 2] = i68;
         do {
          if ((i68 | 0) < 1) {
           if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i69);
           if (i57) {
            break L107;
           } else {
            break L105;
           }
          }
         } while (0);
         if (!i57) {
          break L105;
         }
        }
       } while (0);
       i67 = i30 | 0;
       i69 = HEAP32[i45 >> 2] | 0;
       HEAP32[i67 >> 2] = i69;
       if ((i69 | 0) != 0) {
        i62 = i69 + 8 | 0;
        HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
       }
       HEAP32[i30 + 4 >> 2] = HEAP32[i55 >> 2];
       i62 = HEAP32[i58 >> 2] | 0;
       i69 = i30 + 8 | 0;
       i68 = i69;
       i64 = HEAP32[i68 >> 2] & -8 | i62 & 7;
       HEAP32[i68 >> 2] = i64;
       HEAP8[i69] = i64 & 255 & -9 | i62 & 8;
       __ZN7WebCore20CompositeEditCommand22insertBlockPlaceholderERKNS_8PositionE(i29, i49, i30);
       i62 = i29 | 0;
       i64 = HEAP32[i62 >> 2] | 0;
       HEAP32[i62 >> 2] = 0;
       i62 = HEAP32[i67 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i67 = i62 + 8 | 0;
         i69 = i67 | 0;
         i68 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         HEAP32[i69 >> 2] = i68;
         if ((i68 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
        }
       } while (0);
       i62 = i7 | 0;
       HEAP32[i62 >> 2] = i64;
       i67 = (i64 | 0) == 0;
       if (!i67) {
        i68 = i64 + 8 | 0;
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i32, i7, 1);
       i68 = HEAP32[i62 >> 2] | 0;
       do {
        if ((i68 | 0) != 0) {
         i62 = i68 + 8 | 0;
         i69 = i62 | 0;
         i70 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         HEAP32[i69 >> 2] = i70;
         if ((i70 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i31, i32, 1);
       i68 = i31 | 0;
       i62 = HEAP32[i68 >> 2] | 0;
       HEAP32[i68 >> 2] = 0;
       i70 = HEAP32[i45 >> 2] | 0;
       HEAP32[i45 >> 2] = i62;
       do {
        if ((i70 | 0) != 0) {
         i62 = i70 + 8 | 0;
         i69 = i62 | 0;
         i71 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         HEAP32[i69 >> 2] = i71;
         if ((i71 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
        }
       } while (0);
       HEAP32[i55 >> 2] = HEAP32[i31 + 4 >> 2];
       i70 = HEAP32[i31 + 8 >> 2] | 0;
       i62 = HEAP32[i58 >> 2] & -8 | i70 & 7;
       HEAP32[i58 >> 2] = i62;
       HEAP8[i52] = i62 & 255 & -9 | i70 & 8;
       i70 = i10 + 12 | 0;
       HEAP32[i70 >> 2] = HEAP32[i31 + 12 >> 2];
       i62 = HEAP32[i68 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i71 = i62 + 8 | 0;
         i69 = i71 | 0;
         i72 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         HEAP32[i69 >> 2] = i72;
         if ((i72 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
        }
       } while (0);
       i62 = HEAP32[i32 >> 2] | 0;
       do {
        if ((i62 | 0) != 0) {
         i68 = i62 + 8 | 0;
         i71 = i68 | 0;
         i72 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
         HEAP32[i71 >> 2] = i72;
         if ((i72 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
        }
       } while (0);
       i62 = HEAP32[i45 >> 2] | 0;
       if ((i62 | 0) != 0) {
        i68 = i62 + 8 | 0;
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
       }
       i68 = HEAP32[i46 >> 2] | 0;
       HEAP32[i46 >> 2] = i62;
       do {
        if ((i68 | 0) != 0) {
         i62 = i68 + 8 | 0;
         i72 = i62 | 0;
         i71 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
         HEAP32[i72 >> 2] = i71;
         if ((i71 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
        }
       } while (0);
       HEAP32[i11 + 4 >> 2] = HEAP32[i55 >> 2];
       i68 = HEAP32[i58 >> 2] | 0;
       i62 = i11 + 8 | 0;
       i71 = i62;
       i72 = HEAP32[i71 >> 2] & -8 | i68 & 7;
       HEAP32[i71 >> 2] = i72;
       HEAP8[i62] = i72 & 255 & -9 | i68 & 8;
       HEAP32[i11 + 12 >> 2] = HEAP32[i70 >> 2];
       if (i67) {
        break;
       }
       i68 = i64 + 8 | 0;
       i72 = i68 | 0;
       i62 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
       HEAP32[i72 >> 2] = i62;
       if ((i62 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     i68 = i34 | 0;
     i62 = HEAP32[i45 >> 2] | 0;
     HEAP32[i68 >> 2] = i62;
     if ((i62 | 0) != 0) {
      i72 = i62 + 8 | 0;
      HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
     }
     HEAP32[i34 + 4 >> 2] = HEAP32[i55 >> 2];
     i72 = HEAP32[i58 >> 2] | 0;
     i62 = i34 + 8 | 0;
     i71 = i62;
     i69 = HEAP32[i71 >> 2] & -8 | i72 & 7;
     HEAP32[i71 >> 2] = i69;
     HEAP8[i62] = i69 & 255 & -9 | i72 & 8;
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i33, i34, 1);
     i72 = HEAP32[i68 >> 2] | 0;
     do {
      if ((i72 | 0) != 0) {
       i68 = i72 + 8 | 0;
       i69 = i68 | 0;
       i62 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
       HEAP32[i69 >> 2] = i62;
       if ((i62 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     i72 = i33 | 0;
     i68 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(HEAP32[i72 >> 2] | 0) | 0;
     do {
      if ((i68 | 0) != 0) {
       if ((HEAP32[i68 + 12 >> 2] & 4 | 0) == 0) {
        break;
       }
       i62 = HEAP32[i68 + 44 >> 2] | 0;
       i69 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
       if ((i62 | 0) != (i69 | 0)) {
        if ((HEAP32[i62 + 12 >> 2] | 0) != (HEAP32[i69 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i62 + 16 >> 2] | 0) != (HEAP32[i69 + 16 >> 2] | 0)) {
         break;
        }
       }
       i69 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i68) | 0;
       i62 = i6 | 0;
       HEAP32[i62 >> 2] = i69;
       if ((i69 | 0) != 0) {
        i71 = i69 + 8 | 0;
        HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i35, i6, __ZNK7WebCore4Node9nodeIndexEv(i68) | 0, 0);
       i71 = HEAP32[i62 >> 2] | 0;
       do {
        if ((i71 | 0) != 0) {
         i62 = i71 + 8 | 0;
         i69 = i62 | 0;
         i73 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
         HEAP32[i69 >> 2] = i73;
         if ((i73 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
        }
       } while (0);
       i71 = i35 | 0;
       i64 = HEAP32[i71 >> 2] | 0;
       HEAP32[i71 >> 2] = 0;
       i67 = HEAP32[i72 >> 2] | 0;
       HEAP32[i72 >> 2] = i64;
       do {
        if ((i67 | 0) != 0) {
         i64 = i67 + 8 | 0;
         i70 = i64 | 0;
         i62 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
         HEAP32[i70 >> 2] = i62;
         if ((i62 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
        }
       } while (0);
       HEAP32[i33 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
       i67 = HEAP32[i35 + 8 >> 2] | 0;
       i64 = i33 + 8 | 0;
       i62 = i64;
       i70 = HEAP32[i62 >> 2] & -8 | i67 & 7;
       HEAP32[i62 >> 2] = i70;
       HEAP8[i64] = i70 & 255 & -9 | i67 & 8;
       i67 = HEAP32[i71 >> 2] | 0;
       if ((i67 | 0) == 0) {
        break;
       }
       i70 = i67 + 8 | 0;
       i67 = i70 | 0;
       i64 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       HEAP32[i67 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i70 - 8 | 0);
      }
     } while (0);
     i68 = i36 | 0;
     HEAP32[i68 >> 2] = i63;
     if (!i65) {
      i70 = i63 + 8 | 0;
      HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i49, i36, i33);
     i70 = HEAP32[i68 >> 2] | 0;
     do {
      if ((i70 | 0) != 0) {
       i68 = i70 + 8 | 0;
       i64 = i68 | 0;
       i67 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i67;
       if ((i67 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     i70 = i37 | 0;
     i65 = HEAP32[i45 >> 2] | 0;
     HEAP32[i70 >> 2] = i65;
     if ((i65 | 0) == 0) {
      i74 = 0;
     } else {
      i68 = i65 + 8 | 0;
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      i74 = HEAP32[i70 >> 2] | 0;
     }
     i68 = i37 + 4 | 0;
     HEAP32[i68 >> 2] = HEAP32[i55 >> 2];
     i65 = HEAP32[i58 >> 2] | 0;
     i67 = i37 + 8 | 0;
     i64 = i67;
     i62 = HEAP32[i64 >> 2] & -8 | i65 & 7;
     HEAP32[i64 >> 2] = i62;
     i73 = i62 & 255 & -9 | i65 & 8;
     HEAP8[i67] = i73;
     if ((HEAP32[i72 >> 2] | 0) == (i74 | 0)) {
      i65 = i33 + 8 | 0;
      do {
       if ((HEAP8[i65] & 8) == 0) {
        i62 = HEAP32[i65 >> 2] & 7;
        if (!((i62 | 0) == 2 | (i62 | 0) == 4)) {
         i47 = 159;
         break;
        }
        i62 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i33) | 0;
        i75 = i62;
        i76 = HEAP8[i67] | 0;
       } else {
        i47 = 159;
       }
      } while (0);
      if ((i47 | 0) == 159) {
       i75 = HEAP32[i33 + 4 >> 2] | 0;
       i76 = i73;
      }
      do {
       if ((i76 & 8) == 0) {
        i67 = HEAP32[i64 >> 2] & 7;
        if (!((i67 | 0) == 2 | (i67 | 0) == 4)) {
         i47 = 163;
         break;
        }
        i77 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i37) | 0;
       } else {
        i47 = 163;
       }
      } while (0);
      if ((i47 | 0) == 163) {
       i77 = HEAP32[i68 >> 2] | 0;
      }
      if ((i75 | 0) == (i77 | 0)) {
       i78 = ((HEAP32[i64 >> 2] ^ HEAP32[i65 >> 2]) & 7 | 0) == 0;
      } else {
       i78 = 0;
      }
      i79 = i78;
      i80 = HEAP32[i70 >> 2] | 0;
     } else {
      i79 = 0;
      i80 = i74;
     }
     do {
      if ((i80 | 0) != 0) {
       i73 = i80 + 8 | 0;
       i67 = i73 | 0;
       i62 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       HEAP32[i67 >> 2] = i62;
       if ((i62 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
      }
     } while (0);
     do {
      if (i79) {
       __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i63 + 20 >> 2] | 0) + 8 >> 2] | 0);
       __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i38, i3, 2);
       i70 = i38 | 0;
       i65 = HEAP32[i70 >> 2] | 0;
       HEAP32[i70 >> 2] = 0;
       i64 = HEAP32[i45 >> 2] | 0;
       HEAP32[i45 >> 2] = i65;
       do {
        if ((i64 | 0) != 0) {
         i65 = i64 + 8 | 0;
         i68 = i65 | 0;
         i73 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
         HEAP32[i68 >> 2] = i73;
         if ((i73 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
        }
       } while (0);
       HEAP32[i55 >> 2] = HEAP32[i38 + 4 >> 2];
       i64 = HEAP32[i38 + 8 >> 2] | 0;
       i71 = HEAP32[i58 >> 2] & -8 | i64 & 7;
       HEAP32[i58 >> 2] = i71;
       HEAP8[i52] = i71 & 255 & -9 | i64 & 8;
       HEAP32[i10 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
       i64 = HEAP32[i70 >> 2] | 0;
       do {
        if ((i64 | 0) != 0) {
         i71 = i64 + 8 | 0;
         i65 = i71 | 0;
         i73 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
         HEAP32[i65 >> 2] = i73;
         if ((i73 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
        }
       } while (0);
       __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i39, i10, 2);
       i64 = i39 | 0;
       i70 = HEAP32[i64 >> 2] | 0;
       HEAP32[i64 >> 2] = 0;
       i71 = HEAP32[i46 >> 2] | 0;
       HEAP32[i46 >> 2] = i70;
       do {
        if ((i71 | 0) != 0) {
         i70 = i71 + 8 | 0;
         i73 = i70 | 0;
         i65 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
         HEAP32[i73 >> 2] = i65;
         if ((i65 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i70 - 8 | 0);
        }
       } while (0);
       HEAP32[i11 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
       i71 = HEAP32[i39 + 8 >> 2] | 0;
       i70 = i11 + 8 | 0;
       i65 = i70;
       i73 = HEAP32[i65 >> 2] & -8 | i71 & 7;
       HEAP32[i65 >> 2] = i73;
       HEAP8[i70] = i73 & 255 & -9 | i71 & 8;
       HEAP32[i11 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
       i71 = HEAP32[i64 >> 2] | 0;
       if ((i71 | 0) == 0) {
        break;
       }
       i73 = i71 + 8 | 0;
       i71 = i73 | 0;
       i70 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
       HEAP32[i71 >> 2] = i70;
       if ((i70 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
      }
     } while (0);
     i73 = HEAP32[i72 >> 2] | 0;
     if ((i73 | 0) == 0) {
      i66 = i63;
      break;
     }
     i70 = i73 + 8 | 0;
     i73 = i70 | 0;
     i71 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
     HEAP32[i73 >> 2] = i71;
     if ((i71 | 0) >= 1) {
      i66 = i63;
      break;
     }
     if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
      i66 = i63;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i70 - 8 | 0);
     i66 = i63;
    } else {
     i70 = i22 | 0;
     HEAP32[i70 >> 2] = i50;
     if (!i56) {
      i71 = i50 + 8 | 0;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
     }
     i71 = i23 | 0;
     HEAP32[i71 >> 2] = i59;
     i73 = i59 + 8 | 0;
     HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i49, i22, i23);
     i73 = HEAP32[i71 >> 2] | 0;
     do {
      if ((i73 | 0) != 0) {
       i71 = i73 + 8 | 0;
       i65 = i71 | 0;
       i68 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
       HEAP32[i65 >> 2] = i68;
       if ((i68 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
      }
     } while (0);
     i73 = HEAP32[i70 >> 2] | 0;
     if ((i73 | 0) == 0) {
      i66 = 0;
      break;
     }
     i63 = i73 + 8 | 0;
     i73 = i63 | 0;
     i72 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
     HEAP32[i73 >> 2] = i72;
     if ((i72 | 0) >= 1) {
      i66 = 0;
      break;
     }
     if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
      i66 = 0;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
     i66 = 0;
    }
   } while (0);
   i52 = i9 | 0;
   HEAP32[i52 >> 2] = i53;
   if (!i54) {
    i58 = i51 + 8 | 0;
    HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i41, i9, 1);
   i58 = HEAP32[i52 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i52 = i58 + 8 | 0;
     i55 = i52 | 0;
     i48 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i40, i41, 1);
   __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i49, i10, i11, i40, 1, 1);
   i58 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i53 = i58 + 8 | 0;
     i52 = i53 | 0;
     i48 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i58 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i58 | 0) != 0) {
     i53 = i58 + 8 | 0;
     i48 = i53 | 0;
     i52 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i52;
     if ((i52 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   do {
    if ((i66 | 0) == 0) {
     if (!(__ZN7WebCore13canMergeListsEPNS_7ElementES1_(i59, i60) | 0)) {
      HEAP32[i1 >> 2] = 0;
      break;
     }
     i58 = i43 | 0;
     HEAP32[i58 >> 2] = i59;
     if (!i61) {
      i53 = i59 + 8 | 0;
      HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     }
     i53 = i44 | 0;
     HEAP32[i53 >> 2] = i60;
     if ((i60 | 0) != 0) {
      i52 = i60 + 8 | 0;
      HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i49, i43, i44);
     i52 = HEAP32[i53 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i53 = i52 + 8 | 0;
       i48 = i53 | 0;
       i55 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
      }
     } while (0);
     i52 = HEAP32[i58 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i70 = i52 + 8 | 0;
       i53 = i70 | 0;
       i55 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i70 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
    } else {
     i52 = i42 | 0;
     HEAP32[i52 >> 2] = i66;
     i58 = i66 + 8 | 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     __ZN7WebCore17InsertListCommand25mergeWithNeighboringListsEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i42);
     i58 = HEAP32[i52 >> 2] | 0;
     do {
      if ((i58 | 0) != 0) {
       i52 = i58 + 8 | 0;
       i70 = i52 | 0;
       i55 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
       HEAP32[i70 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     i58 = i66 + 8 | 0;
     i52 = i58 | 0;
     i55 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
    }
   } while (0);
   do {
    if (!i54) {
     i49 = i51 + 8 | 0;
     i60 = i49 | 0;
     i59 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     HEAP32[i60 >> 2] = i59;
     if ((i59 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   if (i56) {
    break;
   }
   i51 = i50 + 8 | 0;
   i54 = i51 | 0;
   i49 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
   HEAP32[i54 >> 2] = i49;
   if ((i49 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 if ((i47 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i46 = i1 + 8 | 0;
   i47 = i46 | 0;
   i66 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   HEAP32[i47 >> 2] = i66;
   if ((i66 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i45 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i45 = i1 + 8 | 0;
 i1 = i45 | 0;
 i46 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i46;
 if ((i46 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InsertListCommand25doApplyForSingleParagraphEbRKNS_13QualifiedNameEPNS_5RangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 456 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 96 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 128 | 0;
 i18 = i5 + 144 | 0;
 i19 = i5 + 152 | 0;
 i20 = i5 + 160 | 0;
 i21 = i5 + 168 | 0;
 i22 = i5 + 184 | 0;
 i23 = i5 + 200 | 0;
 i24 = i5 + 216 | 0;
 i25 = i5 + 232 | 0;
 i26 = i5 + 248 | 0;
 i27 = i5 + 264 | 0;
 i28 = i5 + 272 | 0;
 i29 = i5 + 280 | 0;
 i30 = i5 + 288 | 0;
 i31 = i5 + 296 | 0;
 i32 = i5 + 304 | 0;
 i33 = i5 + 312 | 0;
 i34 = i5 + 320 | 0;
 i35 = i5 + 384 | 0;
 i36 = i5 + 400 | 0;
 i37 = i5 + 416 | 0;
 i38 = i5 + 432 | 0;
 i39 = i5 + 440 | 0;
 i40 = i1 | 0;
 i41 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i41 | 0) != 0) {
   i42 = HEAP32[i41 + 8 >> 2] | 0;
   i43 = i41 + 8 | 0;
   HEAP32[i43 >> 2] = i42;
   if ((i42 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  }
 } while (0);
 i43 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i41) | 0;
 do {
  if ((i43 | 0) != 0) {
   i41 = __ZN7WebCore13enclosingListEPNS_4NodeE(i43) | 0;
   do {
    if ((i41 | 0) == 0) {
     i42 = __ZN7WebCore17InsertListCommand20fixOrphanedListChildEPNS_4NodeE(i1, i43) | 0;
     i44 = (i42 | 0) == 0;
     if (i44) {
      i45 = i11 | 0;
      HEAP32[i45 >> 2] = 0;
      i46 = i45;
     } else {
      i45 = i42 + 8 | 0;
      i47 = HEAP32[i45 >> 2] | 0;
      i48 = i11 | 0;
      HEAP32[i48 >> 2] = i42;
      HEAP32[i45 >> 2] = i47 + 2;
      i46 = i48;
     }
     __ZN7WebCore17InsertListCommand25mergeWithNeighboringListsEN3WTF10PassRefPtrINS_11HTMLElementEEE(i10, i1, i11);
     i48 = i10 | 0;
     i47 = HEAP32[i48 >> 2] | 0;
     HEAP32[i48 >> 2] = 0;
     do {
      if (!i44) {
       i48 = i42 + 8 | 0;
       i45 = i48 | 0;
       i49 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
      }
     } while (0);
     i42 = HEAP32[i46 >> 2] | 0;
     if ((i42 | 0) == 0) {
      i50 = i47;
      break;
     }
     i44 = i42 + 8 | 0;
     i42 = i44 | 0;
     i48 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      i50 = i47;
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      i50 = i47;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     i50 = i47;
    } else {
     i44 = i41 + 8 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     i50 = i41;
    }
   } while (0);
   i41 = HEAP32[i50 + 44 >> 2] | 0;
   i44 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i41 | 0) == (i44 | 0)) {
     i51 = 0;
     i52 = 22;
    } else {
     if ((HEAP32[i41 + 12 >> 2] | 0) != (HEAP32[i44 + 12 >> 2] | 0)) {
      i52 = 24;
      break;
     }
     i51 = (HEAP32[i41 + 16 >> 2] | 0) != (HEAP32[i44 + 16 >> 2] | 0);
     i52 = 22;
    }
   } while (0);
   do {
    if ((i52 | 0) == 22) {
     if (!(i51 | i2 ^ 1)) {
      i53 = 1;
      i54 = 0;
      break;
     }
     if (i51) {
      i52 = 24;
     } else {
      i55 = 0;
      i52 = 153;
     }
    }
   } while (0);
   do {
    if ((i52 | 0) == 24) {
     i44 = i50 | 0;
     if (!(__ZN7WebCore28isNodeVisiblyContainedWithinEPNS_4NodeEPKNS_5RangeE(i44, i4) | 0)) {
      i55 = 1;
      i52 = 153;
      break;
     }
     __ZN7WebCore25visiblePositionBeforeNodeEPNS_4NodeE(i12, i44);
     i41 = i4 + 12 | 0;
     i48 = HEAP32[i41 >> 2] | 0;
     if ((i48 | 0) > -1) {
      i56 = i48;
     } else {
      i48 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i41 >> 2] = i48;
      i56 = i48;
     }
     i48 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i48 | 0) == 0) {
      i57 = i56;
     } else {
      i42 = i48 + 8 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
      i57 = HEAP32[i41 >> 2] | 0;
     }
     i41 = i8 | 0;
     HEAP32[i41 >> 2] = i48;
     HEAP32[i9 >> 2] = i57;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i8, i9);
     i48 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i41 = i48 + 8 | 0;
       i42 = i41 | 0;
       i49 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 1);
     i48 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i12, i13) | 0;
     i47 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i41 = i47 + 8 | 0;
       i49 = i41 | 0;
       i42 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i41 = i47 + 8 | 0;
       i42 = i41 | 0;
       i49 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i41 = i47 + 8 | 0;
       i49 = i41 | 0;
       i42 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE(i15, i44);
     i47 = i4 + 24 | 0;
     i41 = HEAP32[i47 >> 2] | 0;
     if ((i41 | 0) > -1) {
      i58 = i41;
     } else {
      i41 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i47 >> 2] = i41;
      i58 = i41;
     }
     i41 = HEAP32[i4 + 20 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i59 = i58;
     } else {
      i42 = i41 + 8 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
      i59 = HEAP32[i47 >> 2] | 0;
     }
     i47 = i6 | 0;
     HEAP32[i47 >> 2] = i41;
     HEAP32[i7 >> 2] = i59;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i17, i6, i7);
     i41 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i41 | 0) != 0) {
       i47 = i41 + 8 | 0;
       i42 = i47 | 0;
       i49 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, 1);
     i41 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i15, i16) | 0;
     i47 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i49 = i47 + 8 | 0;
       i42 = i49 | 0;
       i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i49 = i47 + 8 | 0;
       i45 = i49 | 0;
       i42 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i49 = i47 + 8 | 0;
       i42 = i49 | 0;
       i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i18, HEAP32[i1 + 8 >> 2] | 0, i3);
     i47 = i18 | 0;
     i49 = HEAP32[i47 >> 2] | 0;
     HEAP32[i47 >> 2] = 0;
     i47 = i1 | 0;
     i45 = i19 | 0;
     HEAP32[i45 >> 2] = i49;
     i42 = (i49 | 0) == 0;
     if (!i42) {
      i60 = i49 + 8 | 0;
      HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
     }
     i60 = i20 | 0;
     HEAP32[i60 >> 2] = i44;
     i61 = (i50 | 0) == 0;
     if (!i61) {
      i62 = i50 + 8 | 0;
      HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i47, i19, i20, 1);
     i62 = HEAP32[i60 >> 2] | 0;
     do {
      if ((i62 | 0) != 0) {
       i60 = i62 + 8 | 0;
       i63 = i60 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      }
     } while (0);
     i62 = HEAP32[i45 >> 2] | 0;
     do {
      if ((i62 | 0) != 0) {
       i60 = i62 + 8 | 0;
       i64 = i60 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i22, i44);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i21, i22, 1);
     i62 = i21 | 0;
     i45 = HEAP32[i62 >> 2] | 0;
     i60 = (i45 | 0) == 0;
     if (!i60) {
      i63 = i45 + 8 | 0;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
     }
     i63 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i45) | 0;
     L104 : do {
      if ((i63 | 0) == 0) {
       i65 = 0;
      } else {
       i64 = i63;
       while (1) {
        if ((__ZN7WebCore13enclosingListEPNS_4NodeE(i64) | 0) == (i50 | 0)) {
         i65 = i64;
         break L104;
        }
        i66 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(HEAP32[i64 + 16 >> 2] | 0) | 0;
        if ((i66 | 0) == 0) {
         i65 = 0;
         break;
        } else {
         i64 = i66;
        }
       }
      }
     } while (0);
     do {
      if (!i60) {
       i63 = i45 + 8 | 0;
       i64 = i63 | 0;
       i66 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
      }
     } while (0);
     i45 = HEAP32[i62 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i60 = i45 + 8 | 0;
       i63 = i60 | 0;
       i66 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
      }
     } while (0);
     i45 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i62 = i45 + 8 | 0;
       i60 = i62 | 0;
       i66 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       HEAP32[i60 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     i45 = __ZN7WebCore18isBlockFlowElementEPKNS_4NodeE(i65) | 0;
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i24, i44);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i24, 1);
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i26, i44);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i26, 1);
     __ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE(i47, i23, i25, i49 | 0, i45 ? i65 : i44);
     i45 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i62 = i45 + 8 | 0;
       i66 = i62 | 0;
       i60 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       HEAP32[i66 >> 2] = i60;
       if ((i60 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     i45 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i62 = i45 + 8 | 0;
       i60 = i62 | 0;
       i66 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       HEAP32[i60 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     i45 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i62 = i45 + 8 | 0;
       i66 = i62 | 0;
       i60 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       HEAP32[i66 >> 2] = i60;
       if ((i60 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     i45 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i62 = i45 + 8 | 0;
       i60 = i62 | 0;
       i66 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       HEAP32[i60 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     do {
      if (!i61) {
       if ((HEAP32[i50 + 12 >> 2] & 256 | 0) == 0) {
        break;
       }
       i45 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
       i62 = i27 | 0;
       HEAP32[i62 >> 2] = i44;
       i66 = i50 + 8 | 0;
       HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
       FUNCTION_TABLE_viii[i45 & 7](i47, i27, 1);
       i45 = HEAP32[i62 >> 2] | 0;
       if ((i45 | 0) == 0) {
        break;
       }
       i62 = i45 + 8 | 0;
       i45 = i62 | 0;
       i66 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
      }
     } while (0);
     i47 = i29 | 0;
     HEAP32[i47 >> 2] = i49;
     if (!i42) {
      i44 = i49 + 8 | 0;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     __ZN7WebCore17InsertListCommand25mergeWithNeighboringListsEN3WTF10PassRefPtrINS_11HTMLElementEEE(i28, i1, i29);
     i44 = i28 | 0;
     i61 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     do {
      if (!i42) {
       i44 = i49 + 8 | 0;
       i62 = i44 | 0;
       i66 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
       HEAP32[i62 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
      }
     } while (0);
     i49 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i49 | 0) != 0) {
       i42 = i49 + 8 | 0;
       i44 = i42 | 0;
       i66 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i49 = (i61 | 0) == 0;
     do {
      if (!(i49 | i48 ^ 1)) {
       i47 = i30 | 0;
       HEAP32[i47 >> 2] = i61;
       i42 = i61 + 8 | 0;
       HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
       i42 = i31 | 0;
       HEAP32[i42 >> 2] = 0;
       __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i30, 0, i42);
       i42 = HEAP32[i47 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break;
       }
       i47 = i42 + 8 | 0;
       i42 = i47 | 0;
       i66 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     do {
      if (i49 | i41 ^ 1) {
       i67 = i61 | 0;
      } else {
       i48 = i32 | 0;
       i47 = i61 | 0;
       HEAP32[i48 >> 2] = i47;
       i66 = i61 + 8 | 0;
       HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
       do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 164 >> 2] & 31](i47) | 0) {
         i68 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 168 >> 2] & 31](i47) | 0;
        } else {
         if ((HEAP32[i61 + 12 >> 2] & 2 | 0) == 0) {
          i68 = 0;
          break;
         }
         i68 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i61 | 0) | 0;
        }
       } while (0);
       i66 = i33 | 0;
       HEAP32[i66 >> 2] = 0;
       __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i4, i32, i68, i66);
       i66 = HEAP32[i48 >> 2] | 0;
       if ((i66 | 0) == 0) {
        i67 = i47;
        break;
       }
       i42 = i66 + 8 | 0;
       i66 = i42 | 0;
       i44 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       HEAP32[i66 >> 2] = i44;
       if ((i44 | 0) >= 1) {
        i67 = i47;
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        i67 = i47;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
       i67 = i47;
      }
     } while (0);
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i36, i67);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i35, i36, 1);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i34, i35, 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i40, i34);
     __ZN7WebCore16VisibleSelectionD2Ev(i34);
     i41 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i41 | 0) != 0) {
       i42 = i41 + 8 | 0;
       i44 = i42 | 0;
       i66 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i66;
       if ((i66 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i41 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i41 | 0) != 0) {
       i42 = i41 + 8 | 0;
       i66 = i42 | 0;
       i44 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       HEAP32[i66 >> 2] = i44;
       if ((i44 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     if (i49) {
      i53 = 1;
      i54 = 1;
      break;
     }
     i41 = i61 + 8 | 0;
     i42 = i41 | 0;
     i44 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      i53 = 1;
      i54 = 1;
      break;
     }
     if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
      i53 = 1;
      i54 = 1;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     i53 = 1;
     i54 = 1;
    }
   } while (0);
   do {
    if ((i52 | 0) == 153) {
     if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
      i69 = 1;
     } else {
      i69 = HEAP32[i1 + 120 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i37, i1 + 96 | 0, i69);
     __ZN7WebCore17InsertListCommand18unlistifyParagraphERKNS_15VisiblePositionEPNS_11HTMLElementEPNS_4NodeE(i1, i37, i50, i43);
     i41 = HEAP32[i37 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i53 = 0;
      i54 = i55;
      break;
     }
     i44 = i41 + 8 | 0;
     i41 = i44 | 0;
     i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      i53 = 0;
      i54 = i55;
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      i53 = 0;
      i54 = i55;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     i53 = 0;
     i54 = i55;
    }
   } while (0);
   do {
    if ((i50 | 0) != 0) {
     i44 = i50 + 8 | 0;
     i42 = i44 | 0;
     i41 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i41;
     if ((i41 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    }
   } while (0);
   if ((i53 | 0) != 1 & (i54 | i2)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
  i70 = 1;
 } else {
  i70 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i39, i1 + 96 | 0, i70);
 __ZN7WebCore17InsertListCommand16listifyParagraphERKNS_15VisiblePositionERKNS_13QualifiedNameE(i38, i1, i39, i3);
 i3 = i38 | 0;
 i38 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 152 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i38;
 do {
  if ((i1 | 0) != 0) {
   i38 = i1 + 8 | 0;
   i3 = i38 | 0;
   i70 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i70;
   if ((i70 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i39 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i39 = i1 + 8 | 0;
 i1 = i39 | 0;
 i38 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i38;
 if ((i38 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InsertListCommand18unlistifyParagraphERKNS_15VisiblePositionEPNS_11HTMLElementEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 88 | 0;
 i13 = i5 + 104 | 0;
 i14 = i5 + 120 | 0;
 i15 = i5 + 136 | 0;
 i16 = i5 + 152 | 0;
 i17 = i5 + 168 | 0;
 i18 = i5 + 176 | 0;
 i19 = i5 + 184 | 0;
 i20 = i5 + 192 | 0;
 i21 = i5 + 200 | 0;
 i22 = i5 + 208 | 0;
 i23 = i5 + 216 | 0;
 i24 = i5 + 224 | 0;
 i25 = i5 + 232 | 0;
 i26 = i5 + 240 | 0;
 i27 = i5 + 248 | 0;
 i28 = i5 + 256 | 0;
 i29 = i5 + 264 | 0;
 i30 = i5 + 272 | 0;
 i31 = i5 + 280 | 0;
 i32 = i5 + 288 | 0;
 i33 = i5 + 304 | 0;
 i34 = i7 | 0;
 i35 = i7 + 4 | 0;
 i36 = i7 + 8 | 0;
 i37 = i36;
 i38 = i7 + 12 | 0;
 _memset(i7 | 0, 0, 12) | 0;
 HEAP32[i38 >> 2] = 1;
 i39 = i8 | 0;
 i40 = i8 + 4 | 0;
 i41 = i8 + 8 | 0;
 i42 = i41;
 i43 = i8 + 12 | 0;
 _memset(i8 | 0, 0, 12) | 0;
 HEAP32[i43 >> 2] = 1;
 do {
  if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
   i44 = 30;
  } else {
   i45 = HEAP32[i4 + 44 >> 2] | 0;
   i46 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
   if ((i45 | 0) != (i46 | 0)) {
    if ((HEAP32[i45 + 12 >> 2] | 0) != (HEAP32[i46 + 12 >> 2] | 0)) {
     i44 = 30;
     break;
    }
    if ((HEAP32[i45 + 16 >> 2] | 0) != (HEAP32[i46 + 16 >> 2] | 0)) {
     i44 = 30;
     break;
    }
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i4);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i10, 1);
   i46 = i9 | 0;
   i45 = HEAP32[i46 >> 2] | 0;
   HEAP32[i46 >> 2] = 0;
   i47 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i45;
   do {
    if ((i47 | 0) != 0) {
     i45 = i47 + 8 | 0;
     i48 = i45 | 0;
     i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   HEAP32[i35 >> 2] = HEAP32[i9 + 4 >> 2];
   i47 = HEAP32[i9 + 8 >> 2] | 0;
   i45 = HEAP32[i37 >> 2] & -8 | i47 & 7;
   HEAP32[i37 >> 2] = i45;
   HEAP8[i36] = i45 & 255 & -9 | i47 & 8;
   HEAP32[i38 >> 2] = HEAP32[i9 + 12 >> 2];
   i47 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i45 = i47 + 8 | 0;
     i49 = i45 | 0;
     i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   i47 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i46 = i47 + 8 | 0;
     i45 = i46 | 0;
     i48 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i12, i4);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
   i47 = i11 | 0;
   i46 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = 0;
   i48 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = i46;
   do {
    if ((i48 | 0) != 0) {
     i46 = i48 + 8 | 0;
     i45 = i46 | 0;
     i49 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   HEAP32[i40 >> 2] = HEAP32[i11 + 4 >> 2];
   i48 = HEAP32[i11 + 8 >> 2] | 0;
   i46 = HEAP32[i42 >> 2] & -8 | i48 & 7;
   HEAP32[i42 >> 2] = i46;
   HEAP8[i41] = i46 & 255 & -9 | i48 & 8;
   HEAP32[i43 >> 2] = HEAP32[i11 + 12 >> 2];
   i48 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i48 | 0) != 0) {
     i46 = i48 + 8 | 0;
     i49 = i46 | 0;
     i45 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   i48 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i48 | 0) != 0) {
     i47 = i48 + 8 | 0;
     i46 = i47 | 0;
     i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i50 = HEAP32[i4 + 24 >> 2] | 0;
   i51 = HEAP32[i4 + 28 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i44 | 0) == 30) {
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i13, i2, 2);
   i12 = i13 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i10 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i11;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i9 = i11 | 0;
     i48 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i35 >> 2] = HEAP32[i13 + 4 >> 2];
   i10 = HEAP32[i13 + 8 >> 2] | 0;
   i11 = HEAP32[i37 >> 2] & -8 | i10 & 7;
   HEAP32[i37 >> 2] = i11;
   HEAP8[i36] = i11 & 255 & -9 | i10 & 8;
   HEAP32[i38 >> 2] = HEAP32[i13 + 12 >> 2];
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i48 = i11 | 0;
     i9 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i14, i7, 2);
   i10 = i14 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i11 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = i12;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 8 | 0;
     i9 = i12 | 0;
     i48 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   HEAP32[i40 >> 2] = HEAP32[i14 + 4 >> 2];
   i11 = HEAP32[i14 + 8 >> 2] | 0;
   i12 = HEAP32[i42 >> 2] & -8 | i11 & 7;
   HEAP32[i42 >> 2] = i12;
   HEAP8[i41] = i12 & 255 & -9 | i11 & 8;
   HEAP32[i43 >> 2] = HEAP32[i14 + 12 >> 2];
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 8 | 0;
     i48 = i12 | 0;
     i9 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i15, i8, 0);
   i11 = i15 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = (i10 | 0) == 0;
   if (!i12) {
    i9 = i10 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i10) | 0;
   L62 : do {
    if ((i9 | 0) == 0) {
     i52 = 0;
    } else {
     i48 = i9;
     while (1) {
      if ((__ZN7WebCore13enclosingListEPNS_4NodeE(i48) | 0) == (i3 | 0)) {
       i52 = i48;
       break L62;
      }
      i47 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(HEAP32[i48 + 16 >> 2] | 0) | 0;
      if ((i47 | 0) == 0) {
       i52 = 0;
       break;
      } else {
       i48 = i47;
      }
     }
    }
   } while (0);
   do {
    if (!i12) {
     i9 = i10 + 8 | 0;
     i48 = i9 | 0;
     i47 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 8 | 0;
     i9 = i12 | 0;
     i47 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i16, i7, 0);
   i10 = i16 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = (i11 | 0) == 0;
   if (!i12) {
    i47 = i11 + 8 | 0;
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
   }
   i47 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(i11) | 0;
   L80 : do {
    if ((i47 | 0) == 0) {
     i53 = 0;
    } else {
     i9 = i47;
     while (1) {
      if ((__ZN7WebCore13enclosingListEPNS_4NodeE(i9) | 0) == (i3 | 0)) {
       i53 = i9;
       break L80;
      }
      i48 = __ZN7WebCore18enclosingListChildEPNS_4NodeE(HEAP32[i9 + 16 >> 2] | 0) | 0;
      if ((i48 | 0) == 0) {
       i53 = 0;
       break;
      } else {
       i9 = i48;
      }
     }
    }
   } while (0);
   do {
    if (!i12) {
     i47 = i11 + 8 | 0;
     i9 = i47 | 0;
     i48 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i50 = i53;
    i51 = i52;
    break;
   }
   i12 = i11 + 8 | 0;
   i11 = i12 | 0;
   i47 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    i50 = i53;
    i51 = i52;
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    i50 = i53;
    i51 = i52;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   i50 = i53;
   i51 = i52;
  }
 } while (0);
 i52 = i1 + 8 | 0;
 __ZN7WebCore18createBreakElementERNS_8DocumentE(i17, HEAP32[i52 >> 2] | 0);
 i53 = i17 | 0;
 i17 = HEAP32[i53 >> 2] | 0;
 HEAP32[i53 >> 2] = 0;
 i53 = (i17 | 0) == 0;
 if (!i53) {
  i16 = i17 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = i3 | 0;
 do {
  if ((__ZN7WebCore13enclosingListEPNS_4NodeE(i16) | 0) == 0) {
   i54 = i17 | 0;
  } else {
   __ZN7WebCore21createListItemElementERNS_8DocumentE(i18, HEAP32[i52 >> 2] | 0);
   i15 = i18 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i43 = i14 | 0;
   if (i53) {
    i41 = i19 | 0;
    HEAP32[i41 >> 2] = 0;
    i55 = i41;
   } else {
    i41 = i17 + 8 | 0;
    i42 = i41 - 8 | 0;
    i40 = i41 | 0;
    i13 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    HEAP32[i40 >> 2] = i13;
    do {
     if ((i13 | 0) < 1) {
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i42);
     }
    } while (0);
    i42 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i42 | 0) != 0) {
      i41 = i42 + 8 | 0;
      i13 = i41 | 0;
      i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i10;
      if ((i10 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    i42 = i19 | 0;
    HEAP32[i42 >> 2] = i17;
    i15 = i17 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i55 = i42;
   }
   i42 = i20 | 0;
   HEAP32[i42 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i15 = i14 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1 | 0, i19, i20);
   i15 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i42 = i15 + 8 | 0;
     i41 = i42 | 0;
     i10 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[i55 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i54 = i43;
    break;
   }
   i14 = i15 + 8 | 0;
   i15 = i14 | 0;
   i42 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i42;
   if ((i42 | 0) >= 1) {
    i54 = i43;
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i54 = i43;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i54 = i43;
  }
 } while (0);
 i55 = (i51 | 0) != 0;
 do {
  if ((i50 | 0) == 0 | i55 ^ 1) {
   i20 = HEAP32[i4 + 16 >> 2] | 0;
   i19 = i3 | 0;
   if ((i20 | 0) == (i19 | 0) & (i55 ^ 1)) {
    i18 = i30 | 0;
    HEAP32[i18 >> 2] = i54;
    if ((i54 | 0) != 0) {
     i52 = i54 + 8 | 0;
     HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
    }
    i52 = i31 | 0;
    HEAP32[i52 >> 2] = i16;
    if ((i3 | 0) != 0) {
     i14 = i3 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1 | 0, i30, i31);
    i14 = HEAP32[i52 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i52 = i14 + 8 | 0;
      i42 = i52 | 0;
      i15 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      HEAP32[i42 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     }
    } while (0);
    i14 = HEAP32[i18 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    i43 = i14 + 8 | 0;
    i14 = i43 | 0;
    i52 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i52;
    if ((i52 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    break;
   }
   i43 = i1 | 0;
   do {
    if ((i20 | 0) != (i19 | 0)) {
     i52 = i25 | 0;
     HEAP32[i52 >> 2] = i3;
     if ((i3 | 0) != 0) {
      i14 = i3 + 8 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i27, i43, i4, i16, 0);
     i14 = i27 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     i42 = i26 | 0;
     HEAP32[i42 >> 2] = i15;
     if ((i15 | 0) != 0) {
      i10 = i15 + 8 | 0;
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i43, i25, i26);
     i10 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i42 = i10 + 8 | 0;
       i15 = i42 | 0;
       i41 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i10 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i42 = i10 + 8 | 0;
       i41 = i42 | 0;
       i15 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
       HEAP32[i41 >> 2] = i15;
       if ((i15 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i10 = HEAP32[i52 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i14 = i10 + 8 | 0;
     i10 = i14 | 0;
     i42 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i19 = i28 | 0;
   HEAP32[i19 >> 2] = i54;
   if ((i54 | 0) != 0) {
    i20 = i54 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   i20 = i29 | 0;
   HEAP32[i20 >> 2] = i16;
   if ((i3 | 0) != 0) {
    i18 = i3 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i43, i28, i29, 1);
   i18 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i20 = i18 + 8 | 0;
     i14 = i20 | 0;
     i42 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i43 = i18 + 8 | 0;
   i18 = i43 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  } else {
   i43 = i1 | 0;
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = i3;
   i18 = (i3 | 0) == 0;
   if (!i18) {
    i42 = i3 + 8 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i22, i43, i51, i16, 0);
   __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i43, i21, i22);
   i42 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i14 = i42 + 8 | 0;
     i10 = i14 | 0;
     i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i42 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i19 = i42 + 8 | 0;
     i14 = i19 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i42 = i23 | 0;
   HEAP32[i42 >> 2] = i54;
   if ((i54 | 0) != 0) {
    i20 = i54 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   i20 = i24 | 0;
   HEAP32[i20 >> 2] = i16;
   if (!i18) {
    i19 = i3 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i43, i23, i24, 1);
   i19 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     i15 = i20 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i42 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i43 = i19 + 8 | 0;
   i19 = i43 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  }
 } while (0);
 i24 = i6 | 0;
 HEAP32[i24 >> 2] = i17;
 if (!i53) {
  i23 = i17 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i33, i6, 1);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i23 = i24 | 0;
   i3 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i32, i33, 1);
 i6 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i33 = i6 + 8 | 0;
   i24 = i33 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand14moveParagraphsERKNS_15VisiblePositionES3_S3_bb(i1 | 0, i7, i8, i32, 1, 1);
 i8 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i32 = i8 + 8 | 0;
   i7 = i32 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
  }
 } while (0);
 do {
  if ((i54 | 0) != 0) {
   i8 = i54 + 8 | 0;
   i32 = i8 | 0;
   i1 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if (!i53) {
   i54 = i17 + 8 | 0;
   i8 = i54 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
  }
 } while (0);
 i17 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i39 = i17 + 8 | 0;
   i53 = i39 | 0;
   i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i54;
   if ((i54 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i17 = HEAP32[i34 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i34 = i17 + 8 | 0;
 i17 = i34 | 0;
 i39 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 HEAP32[i17 >> 2] = i39;
 if ((i39 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17InsertListCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 568 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 96 | 0;
 i7 = i2 + 112 | 0;
 i8 = i2 + 176 | 0;
 i9 = i2 + 192 | 0;
 i10 = i2 + 208 | 0;
 i11 = i2 + 224 | 0;
 i12 = i2 + 240 | 0;
 i13 = i2 + 248 | 0;
 i14 = i2 + 264 | 0;
 i15 = i2 + 328 | 0;
 i16 = i2 + 336 | 0;
 i17 = i2 + 352 | 0;
 i18 = i2 + 368 | 0;
 i19 = i2 + 384 | 0;
 i20 = i2 + 400 | 0;
 i21 = i2 + 416 | 0;
 i22 = i2 + 480 | 0;
 i23 = i2 + 496 | 0;
 i24 = i2 + 560 | 0;
 i25 = i1 | 0;
 i26 = i1 + 72 | 0;
 i27 = i1 + 124 | 0;
 if ((HEAP32[i27 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i28 = HEAP32[i1 + 96 >> 2] | 0;
 i29 = (i28 | 0) == 0;
 do {
  if (i29) {
   i30 = 5;
  } else {
   i31 = i28 + 8 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) + 1 | 0;
   HEAP32[i31 >> 2] = i32;
   if ((HEAP32[i28 + 12 >> 2] & 256 | 0) != 0) {
    i30 = 5;
    break;
   }
   i31 = i28 + 8 | 0;
   i33 = 0;
   i34 = i32;
   i35 = i31;
   i36 = i31 | 0;
   i30 = 11;
  }
 } while (0);
 do {
  if ((i30 | 0) == 5) {
   i31 = HEAP32[i1 + 108 >> 2] | 0;
   do {
    if ((i31 | 0) == 0) {
     i37 = 1;
    } else {
     i32 = HEAP32[i31 + 8 >> 2] | 0;
     i38 = (HEAP32[i31 + 12 >> 2] & 256 | 0) != 0;
     i39 = i31 + 8 | 0;
     HEAP32[i39 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      i37 = i38;
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      i37 = i38;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
     i37 = i38;
    }
   } while (0);
   if (i29) {
    i40 = i37;
    i30 = 14;
    break;
   }
   i31 = i28 + 8 | 0;
   i38 = i31 | 0;
   i33 = i37;
   i34 = HEAP32[i38 >> 2] | 0;
   i35 = i31;
   i36 = i38;
   i30 = 11;
  }
 } while (0);
 do {
  if ((i30 | 0) == 11) {
   i37 = i34 - 1 | 0;
   HEAP32[i36 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    i40 = i33;
    i30 = 14;
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    i40 = i33;
    i30 = 14;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   if (i33) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i30 | 0) == 14) {
   if (i40) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i26) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i40 = i1 + 108 | 0;
 if ((HEAP32[i27 >> 2] | 0) == 2) {
  i41 = 0;
 } else {
  i41 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i40, i41);
 i41 = i1 + 96 | 0;
 if ((HEAP32[i27 >> 2] | 0) == 2) {
  i42 = 1;
 } else {
  i42 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i41, i42);
 do {
  if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i3, i4) | 0)) {
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, 2) | 0)) {
    break;
   }
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i6, i3, 1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i5, i4, i6, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i5);
   __ZN7WebCore16VisibleSelectionD2Ev(i5);
   i42 = HEAP32[i6 >> 2] | 0;
   if ((i42 | 0) == 0) {
    break;
   }
   i33 = i42 + 8 | 0;
   i42 = i33 | 0;
   i35 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   HEAP32[i42 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i6 = (HEAP32[i1 + 156 >> 2] | 0) == 0 ? __ZN7WebCore9HTMLNames5olTagE : __ZN7WebCore9HTMLNames5ulTagE;
 if ((HEAP32[i27 >> 2] | 0) == 2) {
  __ZN7WebCore30selectionForParagraphIterationERKNS_16VisibleSelectionE(i7, i26);
  i5 = i7 + 52 | 0;
  if ((HEAP32[i5 >> 2] | 0) == 2) {
   i43 = 1;
  } else {
   i43 = HEAP32[i7 + 48 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i7 + 24 | 0, i43);
  if ((HEAP32[i5 >> 2] | 0) == 2) {
   i44 = 0;
  } else {
   i44 = HEAP32[i7 + 48 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i7 + 36 | 0, i44);
  __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, i9, 2);
  __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i11, i8, 2);
  i44 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i10) | 0;
  i5 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i11 = i5 + 8 | 0;
    i43 = i11 | 0;
    i33 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
    HEAP32[i43 >> 2] = i33;
    if ((i33 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  do {
   if (i44) {
    i45 = 0;
    i46 = i10 | 0;
   } else {
    i5 = (__ZN7WebCore17InsertListCommand22selectionHasListOfTypeERKNS_16VisibleSelectionERKNS_13QualifiedNameE(0, i7, i6) | 0) ^ 1;
    __ZNK7WebCore16VisibleSelection10firstRangeEv(i12, i26);
    i11 = i12 | 0;
    i33 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    i11 = i13 | 0;
    i43 = i8 | 0;
    i35 = HEAP32[i43 >> 2] | 0;
    HEAP32[i11 >> 2] = i35;
    if ((i35 | 0) != 0) {
     i42 = i35 + 8 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
    }
    i42 = i13 + 4 | 0;
    i35 = i8 + 4 | 0;
    HEAP32[i42 >> 2] = HEAP32[i35 >> 2];
    i36 = i8 + 8 | 0;
    i34 = i36;
    i37 = HEAP32[i34 >> 2] | 0;
    i28 = i13 + 8 | 0;
    i29 = i28;
    i38 = HEAP32[i29 >> 2] & -8 | i37 & 7;
    HEAP32[i29 >> 2] = i38;
    HEAP8[i28] = i38 & 255 & -9 | i37 & 8;
    i37 = i13 + 12 | 0;
    i38 = i8 + 12 | 0;
    HEAP32[i37 >> 2] = HEAP32[i38 >> 2];
    i31 = i10 | 0;
    i39 = i10 + 4 | 0;
    i32 = i10 + 8 | 0;
    i47 = i32;
    i48 = i15 | 0;
    i49 = i9 | 0;
    i50 = i16 | 0;
    i51 = i16 + 4 | 0;
    i52 = i9 + 4 | 0;
    i53 = i16 + 8 | 0;
    i54 = i9 + 8 | 0;
    i55 = i54;
    i56 = i16 + 12 | 0;
    i57 = i9 + 12 | 0;
    i58 = i17 | 0;
    i59 = i17 + 4 | 0;
    i60 = i17 + 8 | 0;
    i61 = i17 + 12 | 0;
    i62 = i10 + 12 | 0;
    i63 = i18 | 0;
    i64 = i18 + 4 | 0;
    i65 = i18 + 8 | 0;
    i66 = i18 + 12 | 0;
    i67 = i1 + 120 | 0;
    i68 = i19 | 0;
    i69 = i19 + 4 | 0;
    i70 = i19 + 8 | 0;
    i71 = i19 + 12 | 0;
    i72 = i20 | 0;
    while (1) {
     if (__ZN7WebCore15inSameParagraphERKNS_15VisiblePositionES2_NS_27EditingBoundaryCrossingRuleE(i13, i10, 0) | 0) {
      i30 = 99;
      break;
     }
     i73 = HEAP32[i31 >> 2] | 0;
     i74 = (i73 | 0) == 0;
     if (!i74) {
      i75 = i73 + 8 | 0;
      HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
     }
     i75 = (HEAP32[i73 + 12 >> 2] & 256 | 0) == 0;
     do {
      if (!i74) {
       i76 = i73 + 8 | 0;
       i77 = i76 | 0;
       i78 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
       HEAP32[i77 >> 2] = i78;
       if ((i78 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i76 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i76 - 8 | 0);
      }
     } while (0);
     if (i75) {
      i79 = 1;
      break;
     }
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i14, i13, 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i14);
     __ZN7WebCore16VisibleSelectionD2Ev(i14);
     HEAP32[i48 >> 2] = 0;
     i73 = __ZN7WebCore23indexForVisiblePositionERKNS_15VisiblePositionERN3WTF6RefPtrINS_13ContainerNodeEEE(i9, i15) | 0;
     __ZN7WebCore17InsertListCommand25doApplyForSingleParagraphEbRKNS_13QualifiedNameEPNS_5RangeE(i1, i5, i6, i33);
     i74 = HEAP32[i49 >> 2] | 0;
     do {
      if ((i74 | 0) == 0) {
       i30 = 52;
      } else {
       if ((HEAP32[i74 + 12 >> 2] & 256 | 0) == 0) {
        i30 = 52;
        break;
       }
       i76 = HEAP32[i31 >> 2] | 0;
       if ((i76 | 0) == 0) {
        i30 = 52;
        break;
       }
       if ((HEAP32[i76 + 12 >> 2] & 256 | 0) == 0) {
        i30 = 52;
       } else {
        i30 = 69;
       }
      }
     } while (0);
     do {
      if ((i30 | 0) == 52) {
       i30 = 0;
       __ZN7WebCore23visiblePositionForIndexEiPNS_13ContainerNodeE(i16, i73, HEAP32[i48 >> 2] | 0);
       i74 = HEAP32[i50 >> 2] | 0;
       HEAP32[i50 >> 2] = 0;
       i75 = HEAP32[i49 >> 2] | 0;
       HEAP32[i49 >> 2] = i74;
       do {
        if ((i75 | 0) != 0) {
         i74 = i75 + 8 | 0;
         i76 = i74 | 0;
         i78 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
         HEAP32[i76 >> 2] = i78;
         if ((i78 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
        }
       } while (0);
       HEAP32[i52 >> 2] = HEAP32[i51 >> 2];
       i75 = HEAP32[i53 >> 2] | 0;
       i74 = HEAP32[i55 >> 2] & -8 | i75 & 7;
       HEAP32[i55 >> 2] = i74;
       HEAP8[i54] = i74 & 255 & -9 | i75 & 8;
       HEAP32[i57 >> 2] = HEAP32[i56 >> 2];
       i75 = HEAP32[i50 >> 2] | 0;
       do {
        if ((i75 | 0) != 0) {
         i74 = i75 + 8 | 0;
         i78 = i74 | 0;
         i76 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
         HEAP32[i78 >> 2] = i76;
         if ((i76 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i49 >> 2] | 0) == 0) {
        i80 = 1;
        break;
       }
       __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i17, i9, 2);
       i75 = HEAP32[i58 >> 2] | 0;
       HEAP32[i58 >> 2] = 0;
       i74 = HEAP32[i31 >> 2] | 0;
       HEAP32[i31 >> 2] = i75;
       do {
        if ((i74 | 0) != 0) {
         i75 = i74 + 8 | 0;
         i76 = i75 | 0;
         i78 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
         HEAP32[i76 >> 2] = i78;
         if ((i78 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
        }
       } while (0);
       HEAP32[i39 >> 2] = HEAP32[i59 >> 2];
       i74 = HEAP32[i60 >> 2] | 0;
       i75 = HEAP32[i47 >> 2] & -8 | i74 & 7;
       HEAP32[i47 >> 2] = i75;
       HEAP8[i32] = i75 & 255 & -9 | i74 & 8;
       HEAP32[i62 >> 2] = HEAP32[i61 >> 2];
       i74 = HEAP32[i58 >> 2] | 0;
       if ((i74 | 0) == 0) {
        i30 = 69;
        break;
       }
       i75 = i74 + 8 | 0;
       i74 = i75 | 0;
       i78 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
       HEAP32[i74 >> 2] = i78;
       if ((i78 | 0) >= 1) {
        i30 = 69;
        break;
       }
       if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
        i30 = 69;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
       i30 = 69;
      }
     } while (0);
     do {
      if ((i30 | 0) == 69) {
       i30 = 0;
       do {
        if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i13, i8) | 0) {
         if ((HEAP32[i27 >> 2] | 0) == 2) {
          i81 = 1;
         } else {
          i81 = HEAP32[i67 >> 2] | 0;
         }
         __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i41, i81);
         i73 = HEAP32[i63 >> 2] | 0;
         HEAP32[i63 >> 2] = 0;
         i75 = HEAP32[i43 >> 2] | 0;
         HEAP32[i43 >> 2] = i73;
         do {
          if ((i75 | 0) != 0) {
           i73 = i75 + 8 | 0;
           i78 = i73 | 0;
           i74 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
           HEAP32[i78 >> 2] = i74;
           if ((i74 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
          }
         } while (0);
         HEAP32[i35 >> 2] = HEAP32[i64 >> 2];
         i75 = HEAP32[i65 >> 2] | 0;
         i73 = HEAP32[i34 >> 2] & -8 | i75 & 7;
         HEAP32[i34 >> 2] = i73;
         HEAP8[i36] = i73 & 255 & -9 | i75 & 8;
         HEAP32[i38 >> 2] = HEAP32[i66 >> 2];
         i75 = HEAP32[i63 >> 2] | 0;
         if ((i75 | 0) == 0) {
          break;
         }
         i73 = i75 + 8 | 0;
         i75 = i73 | 0;
         i74 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
         HEAP32[i75 >> 2] = i74;
         if ((i74 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
        }
       } while (0);
       if ((HEAP32[i27 >> 2] | 0) == 2) {
        i82 = 1;
       } else {
        i82 = HEAP32[i67 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i41, i82);
       __ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE(i19, i20);
       i73 = HEAP32[i68 >> 2] | 0;
       HEAP32[i68 >> 2] = 0;
       i74 = HEAP32[i11 >> 2] | 0;
       HEAP32[i11 >> 2] = i73;
       do {
        if ((i74 | 0) != 0) {
         i73 = i74 + 8 | 0;
         i75 = i73 | 0;
         i78 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
         HEAP32[i75 >> 2] = i78;
         if ((i78 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
        }
       } while (0);
       HEAP32[i42 >> 2] = HEAP32[i69 >> 2];
       i74 = HEAP32[i70 >> 2] | 0;
       i73 = HEAP32[i29 >> 2] & -8 | i74 & 7;
       HEAP32[i29 >> 2] = i73;
       HEAP8[i28] = i73 & 255 & -9 | i74 & 8;
       HEAP32[i37 >> 2] = HEAP32[i71 >> 2];
       i74 = HEAP32[i68 >> 2] | 0;
       do {
        if ((i74 | 0) != 0) {
         i73 = i74 + 8 | 0;
         i78 = i73 | 0;
         i75 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
         HEAP32[i78 >> 2] = i75;
         if ((i75 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
        }
       } while (0);
       i74 = HEAP32[i72 >> 2] | 0;
       if ((i74 | 0) == 0) {
        i80 = 0;
        break;
       }
       i73 = i74 + 8 | 0;
       i74 = i73 | 0;
       i75 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
       HEAP32[i74 >> 2] = i75;
       if ((i75 | 0) >= 1) {
        i80 = 0;
        break;
       }
       if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
        i80 = 0;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
       i80 = 0;
      }
     } while (0);
     i73 = HEAP32[i48 >> 2] | 0;
     do {
      if ((i73 | 0) != 0) {
       i75 = i73 + 8 | 0;
       i74 = i75 | 0;
       i78 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
       HEAP32[i74 >> 2] = i78;
       if ((i78 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
      }
     } while (0);
     if ((i80 | 0) != 0) {
      i79 = i80;
      break;
     }
    }
    if ((i30 | 0) == 99) {
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i21, i9, 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i21);
     __ZN7WebCore16VisibleSelectionD2Ev(i21);
     __ZN7WebCore17InsertListCommand25doApplyForSingleParagraphEbRKNS_13QualifiedNameEPNS_5RangeE(i1, i5, i6, i33);
     if ((HEAP32[i27 >> 2] | 0) == 2) {
      i83 = 0;
     } else {
      i83 = HEAP32[i67 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i22, i40, i83);
     i48 = i22 | 0;
     i72 = HEAP32[i48 >> 2] | 0;
     HEAP32[i48 >> 2] = 0;
     i68 = HEAP32[i49 >> 2] | 0;
     HEAP32[i49 >> 2] = i72;
     do {
      if ((i68 | 0) != 0) {
       i72 = i68 + 8 | 0;
       i71 = i72 | 0;
       i37 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
       HEAP32[i71 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
      }
     } while (0);
     HEAP32[i52 >> 2] = HEAP32[i22 + 4 >> 2];
     i68 = HEAP32[i22 + 8 >> 2] | 0;
     i49 = HEAP32[i55 >> 2] & -8 | i68 & 7;
     HEAP32[i55 >> 2] = i49;
     HEAP8[i54] = i49 & 255 & -9 | i68 & 8;
     HEAP32[i57 >> 2] = HEAP32[i22 + 12 >> 2];
     i68 = HEAP32[i48 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i49 = i68 + 8 | 0;
       i67 = i49 | 0;
       i5 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       HEAP32[i67 >> 2] = i5;
       if ((i5 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i23, i8, i9, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i25, i23);
     __ZN7WebCore16VisibleSelectionD2Ev(i23);
     i79 = 1;
    }
    i68 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i68 | 0) != 0) {
      i48 = i68 + 8 | 0;
      i57 = i48 | 0;
      i54 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
     }
    } while (0);
    if ((i33 | 0) == 0) {
     i45 = i79;
     i46 = i31;
     break;
    }
    i68 = i33 | 0;
    i11 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i33);
     __ZN3WTF8fastFreeEPv(i33);
     i45 = i79;
     i46 = i31;
     break;
    } else {
     HEAP32[i68 >> 2] = i11;
     i45 = i79;
     i46 = i31;
     break;
    }
   }
  } while (0);
  i79 = HEAP32[i46 >> 2] | 0;
  do {
   if ((i79 | 0) != 0) {
    i46 = i79 + 8 | 0;
    i23 = i46 | 0;
    i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
   }
  } while (0);
  i79 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i79 | 0) != 0) {
    i9 = i79 + 8 | 0;
    i46 = i9 | 0;
    i25 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
    HEAP32[i46 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  i79 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i79 | 0) != 0) {
    i8 = i79 + 8 | 0;
    i9 = i8 | 0;
    i25 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore16VisibleSelectionD2Ev(i7);
  if ((i45 | 0) == 0) {
   i30 = 131;
  }
 } else {
  i30 = 131;
 }
 do {
  if ((i30 | 0) == 131) {
   __ZNK7WebCore16VisibleSelection10firstRangeEv(i24, i26);
   i45 = i24 | 0;
   __ZN7WebCore17InsertListCommand25doApplyForSingleParagraphEbRKNS_13QualifiedNameEPNS_5RangeE(i1, 0, i6, HEAP32[i45 >> 2] | 0);
   i7 = HEAP32[i45 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i45 = i7 | 0;
   i79 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   if ((i79 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i45 >> 2] = i79;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i1 = i4 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i6 + 8 | 0;
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17InsertListCommand22selectionHasListOfTypeERKNS_16VisibleSelectionERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i1 | 0;
 i5 = i1 + 16 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 48 | 0;
 i8 = i2 + 52 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 2) {
  i9 = 1;
 } else {
  i9 = HEAP32[i2 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i2 + 24 | 0, i9);
 i9 = i4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i4 + 4 | 0;
 i13 = i4 + 8 | 0;
 i14 = i13;
 i15 = (__ZN7WebCore13enclosingListEPNS_4NodeE(i10) | 0) == 0;
 do {
  if (!i11) {
   i16 = i10 + 8 | 0;
   i17 = i16 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 do {
  if (i15) {
   i19 = 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) == 2) {
    i20 = 0;
   } else {
    i20 = HEAP32[i2 + 48 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i2 + 36 | 0, i20);
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, i6, 1);
   i10 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i16 = i11 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   L22 : do {
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     i21 = 1;
    } else {
     i10 = i3 | 0;
     i11 = i7 | 0;
     i18 = i7 + 4 | 0;
     i16 = i7 + 8 | 0;
     i17 = i7 + 12 | 0;
     i22 = i4 + 12 | 0;
     while (1) {
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i5) | 0) {
       i21 = 1;
       break L22;
      }
      i23 = HEAP32[i9 >> 2] | 0;
      i24 = (i23 | 0) == 0;
      if (!i24) {
       i25 = i23 + 8 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
      }
      i25 = __ZN7WebCore13enclosingListEPNS_4NodeE(i23) | 0;
      do {
       if (!i24) {
        i26 = i23 + 8 | 0;
        i27 = i26 | 0;
        i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        HEAP32[i27 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
       }
      } while (0);
      if ((i25 | 0) == 0) {
       i21 = 0;
       break L22;
      }
      i23 = HEAP32[i25 + 44 >> 2] | 0;
      i24 = HEAP32[i10 >> 2] | 0;
      if ((i23 | 0) != (i24 | 0)) {
       if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
        i21 = 0;
        break L22;
       }
       if ((HEAP32[i23 + 16 >> 2] | 0) != (HEAP32[i24 + 16 >> 2] | 0)) {
        i21 = 0;
        break L22;
       }
      }
      __ZN7WebCore20startOfNextParagraphERKNS_15VisiblePositionE(i7, i4);
      i24 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = 0;
      i23 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = i24;
      do {
       if ((i23 | 0) != 0) {
        i24 = i23 + 8 | 0;
        i26 = i24 | 0;
        i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      HEAP32[i12 >> 2] = HEAP32[i18 >> 2];
      i23 = HEAP32[i16 >> 2] | 0;
      i25 = HEAP32[i14 >> 2] & -8 | i23 & 7;
      HEAP32[i14 >> 2] = i25;
      HEAP8[i13] = i25 & 255 & -9 | i23 & 8;
      HEAP32[i22 >> 2] = HEAP32[i17 >> 2];
      i23 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i23 | 0) != 0) {
        i25 = i23 + 8 | 0;
        i24 = i25 | 0;
        i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
       }
      } while (0);
      if ((HEAP32[i9 >> 2] | 0) == 0) {
       i21 = 1;
       break;
      }
     }
    }
   } while (0);
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i19 = i21;
    break;
   }
   i17 = i11 + 8 | 0;
   i11 = i17 | 0;
   i22 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    i19 = i21;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i19 = i21;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i19 = i21;
  }
 } while (0);
 i21 = HEAP32[i9 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i1;
  return i19 | 0;
 }
 i9 = i21 + 8 | 0;
 i21 = i9 | 0;
 i5 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i1;
  return i19 | 0;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return i19 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i1;
 return i19 | 0;
}
function __ZN7WebCoreL21adjacentEnclosingListERKNS_15VisiblePositionES2_RKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i2 + 4 | 0;
 i11 = i2 + 8 | 0;
 i2 = __ZN7WebCore22outermostEnclosingListEPNS_4NodeES1_(i8, 0) | 0;
 i12 = i2 | 0;
 do {
  if (!i9) {
   i13 = i8 + 8 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i8 = i5 | 0;
 i9 = i1 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i15 = i13 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i15 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + 8 | 0;
 i13 = i1;
 i14 = HEAP32[i13 >> 2] & -8 | i15 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i1] = i14 & 255 & -9 | i15 & 8;
 i15 = __ZN7WebCore18enclosingTableCellERKNS_8PositionE(i5) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i14 = i8 | 0;
   i1 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i5 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i10 >> 2];
 i10 = HEAP32[i11 >> 2] | 0;
 i11 = i6 + 8 | 0;
 i7 = i11;
 i8 = HEAP32[i7 >> 2] & -8 | i10 & 7;
 HEAP32[i7 >> 2] = i8;
 HEAP8[i11] = i8 & 255 & -9 | i10 & 8;
 i10 = __ZN7WebCore18enclosingTableCellERKNS_8PositionE(i6) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 8 | 0;
   i8 = i5 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i2 + 44 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == (i5 | 0)) {
   i17 = 23;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i18 = 1;
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i17 = 23;
   } else {
    i18 = 1;
   }
  }
 } while (0);
 do {
  if ((i17 | 0) == 23) {
   i5 = i2 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   i3 = (i6 | 0) == 0;
   if (!i3) {
    i11 = i6 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   do {
    if ((i15 | 0) == (i10 | 0) & ((__ZNK7WebCore4Node8containsEPKS0_(i5, i6) | 0) ^ 1)) {
     i11 = __ZN7WebCore13enclosingListEPNS_4NodeE(i5) | 0;
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = (i11 | 0) != (__ZN7WebCore13enclosingListEPNS_4NodeE(i8) | 0);
      break;
     }
     i7 = i8 + 8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     i7 = (i11 | 0) != (__ZN7WebCore13enclosingListEPNS_4NodeE(i8) | 0);
     i11 = i8 + 8 | 0;
     i8 = i11 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i1;
     if ((i1 | 0) >= 1) {
      i19 = i7;
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      i19 = i7;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     i19 = i7;
    } else {
     i19 = 1;
    }
   } while (0);
   if (i3) {
    i18 = i19;
    break;
   }
   i5 = i6 + 8 | 0;
   i7 = i5 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    i18 = i19;
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    i18 = i19;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   i18 = i19;
  }
 } while (0);
 i16 = i18 ? 0 : i12;
 STACKTOP = i4;
 return i16 | 0;
}
function __ZN7WebCore17InsertListCommand25mergeWithNeighboringListsEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i3 | 0;
 i10 = __ZNK7WebCore7Element22previousElementSiblingEv(i9) | 0;
 do {
  if (__ZN7WebCore13canMergeListsEPNS_7ElementES1_(i10, i9) | 0) {
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i12 = i10 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i9;
   if ((i3 | 0) != 0) {
    i13 = i3 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i2 | 0, i5, i6);
   i13 = HEAP32[i12 >> 2] | 0;
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
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i12 = i13 + 8 | 0;
   i13 = i12 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 28 | 0;
 while (1) {
  i16 = HEAP32[i6 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
  if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
   i6 = i16 + 28 | 0;
  } else {
   i17 = 19;
   break;
  }
 }
 do {
  if ((i17 | 0) == 19) {
   if ((HEAP32[i16 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   i6 = i16;
   i5 = i16 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i16;
   if (!(__ZN7WebCore13canMergeListsEPNS_7ElementES1_(i9, i5) | 0)) {
    HEAP32[i1 >> 2] = i3;
    i10 = i16 + 8 | 0;
    i12 = i10 | 0;
    i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i15;
    if ((i15 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = i9;
   i15 = i3 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   i15 = i8 | 0;
   HEAP32[i15 >> 2] = i5;
   i5 = i16 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i2 | 0, i7, i8);
   i5 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i15 = i5 + 8 | 0;
     i12 = i15 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i11 = i5 + 8 | 0;
     i15 = i11 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 >> 2] = i6;
   i5 = i3 + 8 | 0;
   i10 = i5 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
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
 } while (0);
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17InsertListCommand20fixOrphanedListChildEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 __ZN7WebCore26createUnorderedListElementERNS_8DocumentE(i4, HEAP32[i1 + 8 >> 2] | 0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i1 | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i4;
 i12 = (i4 | 0) == 0;
 if (!i12) {
  i13 = i4 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = i2;
 i14 = (i2 | 0) == 0;
 if (!i14) {
  i15 = i2 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i10, i5, i6, 1);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 + 8 | 0;
   i5 = i13 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i13 = i11 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = i2;
 if (!i14) {
  i15 = i2 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_viii[i6 & 7](i10, i7, 1);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 8 | 0;
   i6 = i11 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i2;
 if (!i14) {
  i14 = i2 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = i4;
 if (!i12) {
  i2 = i4 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i10, i8, i9);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 + 8 | 0;
   i8 = i14 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 8 | 0;
   i14 = i7 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (!i12) {
  i9 = i4 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 152 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 + 8 | 0;
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
 if (i12) {
  STACKTOP = i3;
  return i4 | 0;
 }
 i12 = i4 + 8 | 0;
 i1 = i12 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i3;
  return i4 | 0;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i4 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i3;
 return i4 | 0;
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
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
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
function __ZN7WebCore17InsertListCommand10insertListERNS_8DocumentENS0_4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(160) | 0;
 i5 = i4;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i5, i2);
 HEAP32[i4 >> 2] = H_BASE + 16;
 i2 = i4 + 152 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 + 156 >> 2] = i3;
 __ZN7WebCore20CompositeEditCommand5applyEv(i5);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i1 = i5 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore17InsertListCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore17InsertListCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
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
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17InsertListCommandC2ERNS_8DocumentENS0_4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i3;
 return;
}
function __ZN7WebCore17InsertListCommandC1ERNS_8DocumentENS0_4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i3;
 return;
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function __ZNK7WebCore17InsertListCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore17InsertListCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return 36;
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore17InsertListCommandD1Ev,b0,__ZN7WebCore17InsertListCommand7doApplyEv,b0,__ZN7WebCore17InsertListCommandD0Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b2,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b2,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b2,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b2,__ZNK7WebCore17InsertListCommand13editingActionEv,b2,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b2,__ZNK7WebCore17InsertListCommand20preservesTypingStyleEv,b2,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b3,__ZN7WebCore17InsertListCommandC2ERNS_8DocumentENS0_4TypeE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17InsertListCommand18unlistifyParagraphERKNS_15VisiblePositionEPNS_11HTMLElementEPNS_4NodeE","_strlen","__ZN7WebCore17InsertListCommandC2ERNS_8DocumentENS0_4TypeE","__ZN7WebCore17InsertListCommandD1Ev","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZNK7WebCore17InsertListCommand13editingActionEv","__ZN7WebCore17InsertListCommandD0Ev","__ZN7WebCoreL21adjacentEnclosingListERKNS_15VisiblePositionES2_RKNS_13QualifiedNameE","__ZN7WebCore17InsertListCommand25doApplyForSingleParagraphEbRKNS_13QualifiedNameEPNS_5RangeE","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZN7WebCore17InsertListCommand7doApplyEv","_memcpy","__ZNK7WebCore17InsertListCommand20preservesTypingStyleEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore17InsertListCommand10insertListERNS_8DocumentENS0_4TypeE","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","_memset","__ZN7WebCore17InsertListCommand20fixOrphanedListChildEPNS_4NodeE","__ZN7WebCore17InsertListCommand25mergeWithNeighboringListsEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore17InsertListCommand22selectionHasListOfTypeERKNS_16VisibleSelectionERKNS_13QualifiedNameE","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore17InsertListCommand16listifyParagraphERKNS_15VisiblePositionERKNS_13QualifiedNameE","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

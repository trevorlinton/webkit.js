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
H_BASE = parentModule["_malloc"](736 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 736;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13RenderCounterC1ERNS_8DocumentERKNS_14CounterContentE;
var __ZN7WebCore13RenderCounterD1Ev;
/* memory initializer */ allocate([108,105,115,116,45,105,116,101,109,0,0,0,0,0,0,0,82,101,110,100,101,114,67,111,117,110,116,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiiiifii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiiifii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiifiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiifiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames7menuTagE=env.__ZN7WebCore9HTMLNames7menuTagE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames6dirTagE=env.__ZN7WebCore9HTMLNames6dirTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13RenderCounterE=(H_BASE+40)|0;
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
  var invoke_fiiiifii=env.invoke_fiiiifii;
  var invoke_vif=env.invoke_vif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_fiiifiii=env.invoke_fiiifiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL19findPlaceForCounterEPNS_12RenderObjectERKN3WTF12AtomicStringEbRNS2_6RefPtrINS_11CounterNodeEEES9_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0;
 i6 = __ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE(i1) | 0;
 i7 = i1 + 20 | 0;
 if ((HEAP32[i7 >> 2] & 128 | 0) == 0) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i8 = 0;
 }
 i9 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i8 | 0, 0) | 0;
 L4 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   i8 = i9;
   while (1) {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i11 = i8;
     break;
    }
    i12 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i8, 0) | 0;
    if ((i12 | 0) == 0) {
     i10 = 0;
     break L4;
    } else {
     i8 = i12;
    }
   }
   L8 : while (1) {
    i13 = (HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0;
    i14 = i11 + 32 | 0;
    if (i13) {
     i15 = i14 | 0;
    } else {
     i15 = HEAP32[i14 >> 2] | 0;
    }
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     break;
    }
    i8 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i11, 0) | 0;
    if ((i8 | 0) == 0) {
     i10 = 0;
     break L4;
    } else {
     i16 = i8;
    }
    while (1) {
     if ((HEAP32[i16 + 12 >> 2] & 4 | 0) != 0) {
      i11 = i16;
      continue L8;
     }
     i8 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i16, 0) | 0;
     if ((i8 | 0) == 0) {
      i10 = 0;
      break L4;
     } else {
      i16 = i8;
     }
    }
   }
   if (i13) {
    i17 = i14 | 0;
   } else {
    i17 = HEAP32[i14 >> 2] | 0;
   }
   i10 = HEAP32[i17 >> 2] | 0;
  }
 } while (0);
 i17 = i10 | 0;
 i14 = i5 | 0;
 i5 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i13 = i5 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 0) {
  i18 = 0;
  return i18 | 0;
 }
 i10 = i1 + 4 | 0;
 i1 = 0;
 i5 = i6;
 i6 = i17;
 L33 : while (1) {
  i19 = i1;
  i17 = i6;
  while (1) {
   i20 = __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i17, i2, 0) | 0;
   i21 = (i20 | 0) != 0;
   if ((i5 | 0) == (i17 | 0)) {
    i22 = 25;
    break;
   }
   if (!i21) {
    i23 = i5;
    i24 = i19;
    i25 = i17;
    break;
   }
   do {
    if ((i19 | 0) == 0) {
     i16 = i20 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i26 = i20;
     i22 = 219;
    } else {
     if ((HEAP8[i20 + 4 | 0] & 1) == 0) {
      if ((HEAP32[i20 + 24 >> 2] | 0) != 0) {
       i26 = i19;
       i22 = 219;
       break;
      }
     }
     i16 = i20 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i16 = i19 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
     } else {
      HEAP32[i16 >> 2] = i13;
     }
     i13 = i17 + 20 | 0;
     i16 = HEAP32[i13 >> 2] | 0;
     if ((i16 & 128 | 0) == 0) {
      i27 = HEAP32[i17 + 4 >> 2] | 0;
     } else {
      i27 = 0;
     }
     if ((HEAP32[i27 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i11 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 232 >> 2] & 255](i27) | 0) != 0;
      i28 = i11;
      i29 = HEAP32[i13 >> 2] | 0;
     } else {
      i28 = 0;
      i29 = i16;
     }
     if ((i29 & 128 | 0) == 0) {
      i30 = HEAP32[i17 + 4 >> 2] | 0;
     } else {
      i30 = 0;
     }
     do {
      if (i28) {
       i31 = HEAP32[i30 + 52 >> 2] | 0;
      } else {
       i16 = HEAP32[i30 + 16 >> 2] | 0;
       if ((i16 | 0) == 0) {
        i31 = 0;
        break;
       }
       if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
        i31 = 0;
        break;
       }
       i31 = i16;
      }
     } while (0);
     i16 = i31 + 32 | 0;
     if ((HEAP32[i31 + 12 >> 2] & 2048 | 0) == 0) {
      i32 = i16 | 0;
     } else {
      i32 = HEAP32[i16 >> 2] | 0;
     }
     i33 = HEAP32[i32 >> 2] | 0;
     i34 = i20;
    }
   } while (0);
   if ((i22 | 0) == 219) {
    i22 = 0;
    i33 = __ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE(i17) | 0;
    i34 = i26;
   }
   if ((i33 | 0) == 0) {
    i35 = 0;
    i36 = i34;
    i22 = 240;
    break L33;
   } else {
    i19 = i34;
    i17 = i33;
   }
  }
  if ((i22 | 0) == 25) {
   i22 = 0;
   do {
    if (i21) {
     if ((HEAP8[i20 + 4 | 0] & 1) == 0) {
      i37 = (HEAP32[i20 + 24 >> 2] | 0) == 0;
     } else {
      i37 = 1;
     }
     if ((i19 | 0) != 0) {
      if (i37) {
       i22 = 30;
       break L33;
      }
      if (!i3) {
       i22 = 104;
       break L33;
      }
      i17 = i5 + 20 | 0;
      i16 = HEAP32[i17 >> 2] | 0;
      if ((i16 & 128 | 0) == 0) {
       i38 = HEAP32[i5 + 4 >> 2] | 0;
      } else {
       i38 = 0;
      }
      if ((HEAP32[i38 + 12 >> 2] & 1048580 | 0) == 1048580) {
       i13 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 232 >> 2] & 255](i38) | 0) != 0;
       i39 = i13;
       i40 = HEAP32[i17 >> 2] | 0;
      } else {
       i39 = 0;
       i40 = i16;
      }
      if ((i40 & 128 | 0) == 0) {
       i41 = HEAP32[i5 + 4 >> 2] | 0;
      } else {
       i41 = 0;
      }
      do {
       if (i39) {
        i42 = HEAP32[i41 + 52 >> 2] | 0;
       } else {
        i16 = HEAP32[i41 + 16 >> 2] | 0;
        if ((i16 | 0) == 0) {
         i42 = 0;
         break;
        }
        if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
         i42 = 0;
         break;
        }
        i42 = i16;
       }
      } while (0);
      i16 = HEAP32[i7 >> 2] | 0;
      if ((i16 & 128 | 0) == 0) {
       i43 = HEAP32[i10 >> 2] | 0;
      } else {
       i43 = 0;
      }
      if ((HEAP32[i43 + 12 >> 2] & 1048580 | 0) == 1048580) {
       i17 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 232 >> 2] & 255](i43) | 0) != 0;
       i44 = i17;
       i45 = HEAP32[i7 >> 2] | 0;
      } else {
       i44 = 0;
       i45 = i16;
      }
      if ((i45 & 128 | 0) == 0) {
       i46 = HEAP32[i10 >> 2] | 0;
      } else {
       i46 = 0;
      }
      do {
       if (i44) {
        i47 = HEAP32[i46 + 52 >> 2] | 0;
       } else {
        i16 = HEAP32[i46 + 16 >> 2] | 0;
        if ((i16 | 0) == 0) {
         i47 = 0;
         break;
        }
        if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
         i47 = 0;
         break;
        }
        i47 = i16;
       }
      } while (0);
      if ((i42 | 0) == (i47 | 0)) {
       i48 = i19;
       break;
      } else {
       i22 = 104;
       break L33;
      }
     }
     if (i37) {
      i22 = 116;
      break L33;
     }
     if (!i3) {
      i22 = 183;
      break L33;
     }
     i16 = i5 + 20 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 & 128 | 0) == 0) {
      i49 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i49 = 0;
     }
     if ((HEAP32[i49 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i13 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 232 >> 2] & 255](i49) | 0) != 0;
      i50 = i13;
      i51 = HEAP32[i16 >> 2] | 0;
     } else {
      i50 = 0;
      i51 = i17;
     }
     if ((i51 & 128 | 0) == 0) {
      i52 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i52 = 0;
     }
     do {
      if (i50) {
       i53 = HEAP32[i52 + 52 >> 2] | 0;
      } else {
       i17 = HEAP32[i52 + 16 >> 2] | 0;
       if ((i17 | 0) == 0) {
        i53 = 0;
        break;
       }
       if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
        i53 = 0;
        break;
       }
       i53 = i17;
      }
     } while (0);
     i17 = HEAP32[i7 >> 2] | 0;
     if ((i17 & 128 | 0) == 0) {
      i54 = HEAP32[i10 >> 2] | 0;
     } else {
      i54 = 0;
     }
     if ((HEAP32[i54 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i16 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 232 >> 2] & 255](i54) | 0) != 0;
      i55 = i16;
      i56 = HEAP32[i7 >> 2] | 0;
     } else {
      i55 = 0;
      i56 = i17;
     }
     if ((i56 & 128 | 0) == 0) {
      i57 = HEAP32[i10 >> 2] | 0;
     } else {
      i57 = 0;
     }
     do {
      if (i55) {
       i58 = HEAP32[i57 + 52 >> 2] | 0;
      } else {
       i17 = HEAP32[i57 + 16 >> 2] | 0;
       if ((i17 | 0) == 0) {
        i58 = 0;
        break;
       }
       if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
        i58 = 0;
        break;
       }
       i58 = i17;
      }
     } while (0);
     if ((i53 | 0) != (i58 | 0)) {
      i22 = 183;
      break L33;
     }
     i17 = i20 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i48 = i20;
    } else {
     i48 = i19;
    }
   } while (0);
   i23 = __ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE(i5) | 0;
   i24 = i48;
   i25 = i5;
  }
  if ((i24 | 0) == 0) {
   if ((HEAP32[i25 + 20 >> 2] & 128 | 0) == 0) {
    i59 = HEAP32[i25 + 4 >> 2] | 0;
   } else {
    i59 = 0;
   }
   i17 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i59 | 0, 0) | 0;
   L154 : do {
    if ((i17 | 0) == 0) {
     i60 = 0;
    } else {
     i16 = i17;
     while (1) {
      if ((HEAP32[i16 + 12 >> 2] & 4 | 0) != 0) {
       i61 = i16;
       break;
      }
      i13 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i16, 0) | 0;
      if ((i13 | 0) == 0) {
       i60 = 0;
       break L154;
      } else {
       i16 = i13;
      }
     }
     L158 : while (1) {
      i62 = (HEAP32[i61 + 12 >> 2] & 2048 | 0) == 0;
      i63 = i61 + 32 | 0;
      if (i62) {
       i64 = i63 | 0;
      } else {
       i64 = HEAP32[i63 >> 2] | 0;
      }
      if ((HEAP32[i64 >> 2] | 0) != 0) {
       break;
      }
      i16 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i61, 0) | 0;
      if ((i16 | 0) == 0) {
       i60 = 0;
       break L154;
      } else {
       i65 = i16;
      }
      while (1) {
       if ((HEAP32[i65 + 12 >> 2] & 4 | 0) != 0) {
        i61 = i65;
        continue L158;
       }
       i16 = __ZN7WebCore13NodeTraversal23previousIncludingPseudoEPKNS_4NodeES3_(i65, 0) | 0;
       if ((i16 | 0) == 0) {
        i60 = 0;
        break L154;
       } else {
        i65 = i16;
       }
      }
     }
     if (i62) {
      i66 = i63 | 0;
     } else {
      i66 = HEAP32[i63 >> 2] | 0;
     }
     i60 = HEAP32[i66 >> 2] | 0;
    }
   } while (0);
   i67 = i60 | 0;
  } else {
   i67 = __ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE(i25) | 0;
  }
  if ((i67 | 0) == 0) {
   i35 = 0;
   i36 = i24;
   i22 = 240;
   break;
  } else {
   i1 = i24;
   i5 = i23;
   i6 = i67;
  }
 }
 L175 : do {
  if ((i22 | 0) == 183) {
   i67 = HEAP32[i20 + 24 >> 2] | 0;
   if ((i67 | 0) != 0) {
    i6 = i67 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   i6 = i4 | 0;
   i23 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i67;
   do {
    if ((i23 | 0) != 0) {
     i67 = i23 | 0;
     i6 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i67 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i23 = i20 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i23 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i20;
   if ((i23 | 0) == 0) {
    i18 = 1;
    return i18 | 0;
   }
   i6 = i23 | 0;
   i67 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i67 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    i18 = 1;
    return i18 | 0;
   } else {
    HEAP32[i6 >> 2] = i67;
    i18 = 1;
    return i18 | 0;
   }
  } else if ((i22 | 0) == 30) {
   do {
    if (i3) {
     i67 = i5 + 20 | 0;
     i6 = HEAP32[i67 >> 2] | 0;
     if ((i6 & 128 | 0) == 0) {
      i68 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i68 = 0;
     }
     if ((HEAP32[i68 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i23 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 232 >> 2] & 255](i68) | 0) != 0;
      i69 = i23;
      i70 = HEAP32[i67 >> 2] | 0;
     } else {
      i69 = 0;
      i70 = i6;
     }
     if ((i70 & 128 | 0) == 0) {
      i71 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i71 = 0;
     }
     do {
      if (i69) {
       i72 = HEAP32[i71 + 52 >> 2] | 0;
      } else {
       i6 = HEAP32[i71 + 16 >> 2] | 0;
       if ((i6 | 0) == 0) {
        i72 = 0;
        break;
       }
       if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
        i72 = 0;
        break;
       }
       i72 = i6;
      }
     } while (0);
     i6 = HEAP32[i7 >> 2] | 0;
     if ((i6 & 128 | 0) == 0) {
      i73 = HEAP32[i10 >> 2] | 0;
     } else {
      i73 = 0;
     }
     if ((HEAP32[i73 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i67 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 232 >> 2] & 255](i73) | 0) != 0;
      i74 = i67;
      i75 = HEAP32[i7 >> 2] | 0;
     } else {
      i74 = 0;
      i75 = i6;
     }
     if ((i75 & 128 | 0) == 0) {
      i76 = HEAP32[i10 >> 2] | 0;
     } else {
      i76 = 0;
     }
     do {
      if (i74) {
       i77 = HEAP32[i76 + 52 >> 2] | 0;
      } else {
       i6 = HEAP32[i76 + 16 >> 2] | 0;
       if ((i6 | 0) == 0) {
        i77 = 0;
        break;
       }
       if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
        i77 = 0;
        break;
       }
       i77 = i6;
      }
     } while (0);
     if ((i72 | 0) != (i77 | 0)) {
      break;
     }
     i6 = HEAP32[i20 + 24 >> 2] | 0;
     if ((i6 | 0) != 0) {
      i67 = i6 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     }
     i67 = i4 | 0;
     i23 = HEAP32[i67 >> 2] | 0;
     HEAP32[i67 >> 2] = i6;
     do {
      if ((i23 | 0) != 0) {
       i6 = i23 | 0;
       i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) == 0) {
        __ZN7WebCore11CounterNodeD1Ev(i23);
        __ZN3WTF8fastFreeEPv(i23);
        break;
       } else {
        HEAP32[i6 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i23 = (HEAP32[i67 >> 2] | 0) != 0 ? i20 : 0;
     if ((i23 | 0) != 0) {
      i24 = i23 | 0;
      HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     }
     i24 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 | 0;
       i6 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i6 | 0) == 0) {
        __ZN7WebCore11CounterNodeD1Ev(i24);
        __ZN3WTF8fastFreeEPv(i24);
        break;
       } else {
        HEAP32[i23 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i35 = (HEAP32[i67 >> 2] | 0) != 0;
     i36 = i19;
     i22 = 240;
     break L175;
    }
   } while (0);
   i24 = i20 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i24 = i4 | 0;
   i6 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i20;
   do {
    if ((i6 | 0) != 0) {
     i24 = i6 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i24 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i6 = i19 | 0;
   i23 = HEAP32[i6 >> 2] | 0;
   do {
    if ((HEAP32[i19 + 24 >> 2] | 0) == (i20 | 0)) {
     HEAP32[i6 >> 2] = i23 + 1;
     i78 = i19;
    } else {
     i24 = i23 - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      i78 = 0;
      break;
     } else {
      HEAP32[i6 >> 2] = i24;
      i78 = 0;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i78;
   if ((i6 | 0) == 0) {
    i35 = 1;
    i36 = i78;
    i22 = 240;
    break;
   }
   i23 = i6 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    i35 = 1;
    i36 = i78;
    i22 = 240;
    break;
   } else {
    HEAP32[i23 >> 2] = i24;
    i35 = 1;
    i36 = i78;
    i22 = 240;
    break;
   }
  } else if ((i22 | 0) == 104) {
   i24 = HEAP32[i20 + 24 >> 2] | 0;
   if ((i24 | 0) != (HEAP32[i19 + 24 >> 2] | 0)) {
    i79 = i19;
    i80 = 0;
    break;
   }
   if ((i24 | 0) != 0) {
    i23 = i24 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = i4 | 0;
   i6 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i24;
   do {
    if ((i6 | 0) != 0) {
     i24 = i6 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i24 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i6 = i19 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i19;
   if ((i6 | 0) == 0) {
    i35 = 1;
    i36 = i19;
    i22 = 240;
    break;
   }
   i23 = i6 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    i35 = 1;
    i36 = i19;
    i22 = 240;
    break;
   } else {
    HEAP32[i23 >> 2] = i24;
    i35 = 1;
    i36 = i19;
    i22 = 240;
    break;
   }
  } else if ((i22 | 0) == 116) {
   do {
    if (i3) {
     i24 = i5 + 20 | 0;
     i23 = HEAP32[i24 >> 2] | 0;
     if ((i23 & 128 | 0) == 0) {
      i81 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i81 = 0;
     }
     if ((HEAP32[i81 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i6 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i81 >> 2] | 0) + 232 >> 2] & 255](i81) | 0) != 0;
      i82 = i6;
      i83 = HEAP32[i24 >> 2] | 0;
     } else {
      i82 = 0;
      i83 = i23;
     }
     if ((i83 & 128 | 0) == 0) {
      i84 = HEAP32[i5 + 4 >> 2] | 0;
     } else {
      i84 = 0;
     }
     do {
      if (i82) {
       i85 = HEAP32[i84 + 52 >> 2] | 0;
      } else {
       i23 = HEAP32[i84 + 16 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i85 = 0;
        break;
       }
       if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
        i85 = 0;
        break;
       }
       i85 = i23;
      }
     } while (0);
     i67 = HEAP32[i7 >> 2] | 0;
     if ((i67 & 128 | 0) == 0) {
      i86 = HEAP32[i10 >> 2] | 0;
     } else {
      i86 = 0;
     }
     if ((HEAP32[i86 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i23 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i86 >> 2] | 0) + 232 >> 2] & 255](i86) | 0) != 0;
      i87 = i23;
      i88 = HEAP32[i7 >> 2] | 0;
     } else {
      i87 = 0;
      i88 = i67;
     }
     if ((i88 & 128 | 0) == 0) {
      i89 = HEAP32[i10 >> 2] | 0;
     } else {
      i89 = 0;
     }
     do {
      if (i87) {
       i90 = HEAP32[i89 + 52 >> 2] | 0;
      } else {
       i67 = HEAP32[i89 + 16 >> 2] | 0;
       if ((i67 | 0) == 0) {
        i90 = 0;
        break;
       }
       if ((HEAP32[i67 + 12 >> 2] & 4 | 0) == 0) {
        i90 = 0;
        break;
       }
       i90 = i67;
      }
     } while (0);
     if ((i85 | 0) != (i90 | 0)) {
      break;
     }
     i67 = HEAP32[i20 + 24 >> 2] | 0;
     if ((i67 | 0) != 0) {
      i23 = i67 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     i23 = i4 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i67;
     do {
      if ((i24 | 0) != 0) {
       i67 = i24 | 0;
       i6 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       if ((i6 | 0) == 0) {
        __ZN7WebCore11CounterNodeD1Ev(i24);
        __ZN3WTF8fastFreeEPv(i24);
        break;
       } else {
        HEAP32[i67 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i24 = i20 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i24 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i20;
     do {
      if ((i24 | 0) != 0) {
       i6 = i24 | 0;
       i67 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       if ((i67 | 0) == 0) {
        __ZN7WebCore11CounterNodeD1Ev(i24);
        __ZN3WTF8fastFreeEPv(i24);
        break;
       } else {
        HEAP32[i6 >> 2] = i67;
        break;
       }
      }
     } while (0);
     i18 = (HEAP32[i23 >> 2] | 0) != 0;
     return i18 | 0;
    }
   } while (0);
   i24 = i20 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i24 = i4 | 0;
   i67 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i20;
   do {
    if ((i67 | 0) != 0) {
     i24 = i67 | 0;
     i6 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore11CounterNodeD1Ev(i67);
      __ZN3WTF8fastFreeEPv(i67);
      break;
     } else {
      HEAP32[i24 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i67 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i67 | 0) == 0) {
    i18 = 1;
    return i18 | 0;
   }
   i6 = i67 | 0;
   i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i67);
    __ZN3WTF8fastFreeEPv(i67);
    i18 = 1;
    return i18 | 0;
   } else {
    HEAP32[i6 >> 2] = i24;
    i18 = 1;
    return i18 | 0;
   }
  }
 } while (0);
 do {
  if ((i22 | 0) == 240) {
   if ((i36 | 0) == 0) {
    i18 = i35;
   } else {
    i79 = i36;
    i80 = i35;
    break;
   }
   return i18 | 0;
  }
 } while (0);
 i35 = i79 | 0;
 i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
 if ((i36 | 0) == 0) {
  __ZN7WebCore11CounterNodeD1Ev(i79);
  __ZN3WTF8fastFreeEPv(i79);
  i18 = i80;
  return i18 | 0;
 } else {
  HEAP32[i35 >> 2] = i36;
  i18 = i80;
  return i18 | 0;
 }
 return 0;
}
function __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 80 | 0;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 & 768 | 0) == 256) {
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = i1;
 L4 : do {
  if ((i15 & 524288 | 0) != 0) {
   if (HEAP8[H_BASE + 728 | 0] | 0) {
    i18 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i19 = __ZN3WTF10fastMallocEj(20) | 0;
    i20 = i19;
    _memset(i19 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i20;
    HEAP8[H_BASE + 728 | 0] = 1;
    i18 = i20;
   }
   i20 = HEAP32[i18 + 8 >> 2] | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i21 = i1;
   i22 = i21 + ~(i21 << 15) | 0;
   i21 = (i22 >>> 10 ^ i22) * 9 & -1;
   i22 = i21 >>> 6 ^ i21;
   i21 = i22 + ~(i22 << 11) | 0;
   i22 = i21 >>> 16 ^ i21;
   if ((i19 | 0) == 0) {
    break;
   }
   i21 = i20 & i22;
   i23 = i19 + (i21 << 3) | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   if ((i24 | 0) == (i1 | 0)) {
    i25 = i23;
   } else {
    i23 = (i22 >>> 23) + ~i22 | 0;
    i22 = i23 << 12 ^ i23;
    i23 = i22 >>> 7 ^ i22;
    i22 = i23 << 2 ^ i23;
    i23 = i22 >>> 20 ^ i22 | 1;
    i22 = 0;
    i26 = i21;
    i21 = i24;
    while (1) {
     if ((i21 | 0) == 0) {
      break L4;
     }
     i24 = (i22 | 0) == 0 ? i23 : i22;
     i27 = i24 + i26 & i20;
     i28 = i19 + (i27 << 3) | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     if ((i29 | 0) == (i1 | 0)) {
      i25 = i28;
      break;
     } else {
      i22 = i24;
      i26 = i27;
      i21 = i29;
     }
    }
   }
   if ((i25 | 0) == 0) {
    break;
   }
   i21 = HEAP32[i25 + 4 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i26 = HEAP32[i21 + 8 >> 2] | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i21 = HEAP32[i2 >> 2] | 0;
   i19 = HEAP32[i21 + 16 >> 2] | 0;
   i20 = i19 >>> 7;
   if ((i22 | 0) == 0) {
    break;
   }
   i23 = (i19 >>> 30) + ~i20 | 0;
   i19 = i23 << 12 ^ i23;
   i23 = i19 >>> 7 ^ i19;
   i19 = i23 << 2 ^ i23;
   i23 = i19 >>> 20 ^ i19 | 1;
   i19 = i20;
   i20 = 0;
   while (1) {
    i30 = i19 & i26;
    i31 = i22 + (i30 << 3) | 0;
    i29 = HEAP32[i31 >> 2] | 0;
    i27 = i29;
    if ((i27 | 0) == 0) {
     break L4;
    } else if ((i27 | 0) != (-1 | 0)) {
     if ((i29 | 0) == (i21 | 0)) {
      break;
     }
    }
    i29 = (i20 | 0) == 0 ? i23 : i20;
    i19 = i29 + i30 | 0;
    i20 = i29;
   }
   if ((i31 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i22 + (i30 << 3) + 4 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   } else {
    i16 = i20;
   }
   STACKTOP = i4;
   return i16 | 0;
  }
 } while (0);
 i30 = i5 | 0;
 i31 = i1 + 8 | 0;
 L29 : do {
  if ((HEAP32[i31 >> 2] | 0) == 0) {
   i32 = i17;
   i33 = i1;
  } else {
   i25 = i17;
   i18 = i1;
   i15 = i31;
   while (1) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 152 >> 2] & 255](i18) | 0)) {
     i32 = i25;
     i33 = i18;
     break L29;
    }
    i20 = HEAP32[i15 >> 2] | 0;
    i19 = i20 | 0;
    i23 = i20 + 8 | 0;
    if ((HEAP32[i23 >> 2] | 0) == 0) {
     i32 = i20;
     i33 = i19;
     break;
    } else {
     i25 = i20;
     i18 = i19;
     i15 = i23;
    }
   }
  }
 } while (0);
 i31 = i32 + 20 | 0;
 i15 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i15 & 128 | 0) == 0) {
   i18 = HEAP32[i32 + 4 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i34 = i15;
    i35 = 29;
    break;
   }
   if ((HEAP32[i18 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i34 = i15;
    i35 = 29;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 232 >> 2] & 255](i18) | 0) == 0) {
    i34 = HEAP32[i31 >> 2] | 0;
    i35 = 29;
    break;
   } else {
    i36 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i33) | 0;
    i35 = 31;
    break;
   }
  } else {
   i34 = i15;
   i35 = 29;
  }
 } while (0);
 do {
  if ((i35 | 0) == 29) {
   if ((i34 & 128 | 0) != 0) {
    i35 = 64;
    break;
   }
   i36 = HEAP32[i32 + 4 >> 2] | 0;
   i35 = 31;
  }
 } while (0);
 L44 : do {
  if ((i35 | 0) == 31) {
   if ((i36 | 0) == 0) {
    i35 = 64;
    break;
   }
   i32 = HEAP32[i1 + 36 >> 2] | 0;
   i34 = i32;
   i15 = (HEAP32[i32 + 52 >> 2] | 0) >>> 6 & 63;
   if ((i15 | 0) == 0) {
    i32 = i36 + 32 | 0;
    if ((HEAP32[i36 + 12 >> 2] & 2048 | 0) == 0) {
     i37 = i32 | 0;
    } else {
     i37 = HEAP32[i32 >> 2] | 0;
    }
    if ((HEAP32[i37 >> 2] | 0) != (i1 | 0)) {
     i35 = 64;
     break;
    }
   } else if (!((i15 | 0) == 3 | (i15 | 0) == 4)) {
    i35 = 64;
    break;
   }
   __ZNK7WebCore11RenderStyle20getCounterDirectivesERKN3WTF12AtomicStringE(i5, i34, i2);
   i34 = HEAP8[i30] & 1;
   do {
    if (i34 << 24 >> 24 == 0) {
     if ((HEAP8[i5 + 1 | 0] & 1) != 0) {
      break;
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0)) {
      i35 = 64;
      break L44;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 104 >> 2] & 255](i1) | 0) {
      if ((HEAP8[i1 + 128 | 0] & 1) == 0) {
       i38 = 0;
       i39 = 1;
       break L44;
      }
      i38 = 1;
      i39 = HEAP32[i1 + 116 >> 2] | 0;
      break L44;
     }
     if ((HEAP32[i14 >> 2] & 128 | 0) != 0) {
      i35 = 64;
      break L44;
     }
     i15 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i35 = 64;
      break L44;
     }
     i32 = HEAP32[i15 + 44 >> 2] | 0;
     i33 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
     do {
      if ((i32 | 0) != (i33 | 0)) {
       i31 = HEAP32[i32 + 12 >> 2] | 0;
       if ((i31 | 0) == (HEAP32[i33 + 12 >> 2] | 0)) {
        if ((HEAP32[i32 + 16 >> 2] | 0) == (HEAP32[i33 + 16 >> 2] | 0)) {
         break;
        }
       }
       i18 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
       if ((i32 | 0) == (i18 | 0)) {
        i38 = 1;
        i39 = 0;
        break L44;
       }
       if ((i31 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
        if ((HEAP32[i32 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
         i38 = 1;
         i39 = 0;
         break L44;
        }
       }
       i18 = HEAP32[__ZN7WebCore9HTMLNames7menuTagE >> 2] | 0;
       if ((i32 | 0) == (i18 | 0)) {
        i38 = 1;
        i39 = 0;
        break L44;
       }
       if ((i31 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
        if ((HEAP32[i32 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
         i38 = 1;
         i39 = 0;
         break L44;
        }
       }
       i18 = HEAP32[__ZN7WebCore9HTMLNames6dirTagE >> 2] | 0;
       if ((i32 | 0) == (i18 | 0)) {
        i38 = 1;
        i39 = 0;
        break L44;
       }
       if ((i31 | 0) != (HEAP32[i18 + 12 >> 2] | 0)) {
        i35 = 64;
        break L44;
       }
       if ((HEAP32[i32 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
        i38 = 1;
        i39 = 0;
        break L44;
       } else {
        i35 = 64;
        break L44;
       }
      }
     } while (0);
     i32 = HEAP8[i15 + 60 | 0] | 0;
     if ((i32 & 1) != 0) {
      i38 = 1;
      i39 = HEAP32[i15 + 52 >> 2] | 0;
      break L44;
     }
     if ((i32 & 2) == 0) {
      i38 = 1;
      i39 = 1;
      break L44;
     }
     if ((i32 & 4) != 0) {
      __ZN7WebCore16HTMLOListElement20recalculateItemCountEv(i15);
     }
     i38 = 1;
     i39 = HEAP32[i15 + 56 >> 2] | 0;
     break L44;
    }
   } while (0);
   i38 = i34 << 24 >> 24 != 0;
   i39 = (HEAP32[i5 + 8 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
  }
 } while (0);
 do {
  if ((i35 | 0) == 64) {
   if (i3) {
    i38 = 0;
    i39 = 0;
    break;
   } else {
    i16 = 0;
   }
   STACKTOP = i4;
   return i16 | 0;
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = 0;
 i35 = i7 | 0;
 HEAP32[i35 >> 2] = 0;
 __ZN7WebCore11CounterNode6createEPNS_13RenderElementEbi(i9, i17, i38, i39);
 i39 = i8 | 0;
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i39 >> 2] = i9;
 if (__ZN7WebCoreL19findPlaceForCounterEPNS_12RenderObjectERKN3WTF12AtomicStringEbRNS2_6RefPtrINS_11CounterNodeEEES9_(i1, i2, i38, i6, i7) | 0) {
  __ZN7WebCore11CounterNode11insertAfterEPS0_S1_RKN3WTF12AtomicStringE(HEAP32[i3 >> 2] | 0, i9, HEAP32[i35 >> 2] | 0, i2);
 }
 L95 : do {
  if ((HEAP32[i14 >> 2] & 524288 | 0) == 0) {
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i7 = i9;
   _memset(i9 | 0, 0, 20) | 0;
   if (HEAP8[H_BASE + 728 | 0] | 0) {
    i40 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i9 = __ZN3WTF10fastMallocEj(20) | 0;
    i6 = i9;
    _memset(i9 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i6;
    HEAP8[H_BASE + 728 | 0] = 1;
    i40 = i6;
   }
   HEAP32[i10 >> 2] = i1;
   i6 = i11 | 0;
   HEAP32[i6 >> 2] = i7;
   __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SM_EES4_NS_10PassOwnPtrISG_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SI_SK_SM_SQ_SN_EEEEOT0_OT1_(i12, i40 | 0, i10, i11);
   do {
    if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
     i9 = (HEAP32[i12 >> 2] | 0) + 4 | 0;
     i38 = HEAP32[i9 >> 2] | 0;
     i5 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     HEAP32[i9 >> 2] = i5;
     if ((i38 | 0) == 0) {
      break;
     }
     i5 = HEAP32[i38 >> 2] | 0;
     if ((i5 | 0) != 0) {
      __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i5, HEAP32[i38 + 4 >> 2] | 0);
     }
     __ZN3WTF8fastFreeEPv(i38);
    } else {
     i38 = HEAP32[i6 >> 2] | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     i5 = HEAP32[i38 >> 2] | 0;
     if ((i5 | 0) != 0) {
      __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i5, HEAP32[i38 + 4 >> 2] | 0);
     }
     __ZN3WTF8fastFreeEPv(i38);
    }
   } while (0);
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 524288;
   i41 = i7;
  } else {
   if (HEAP8[H_BASE + 728 | 0] | 0) {
    i42 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i6 = __ZN3WTF10fastMallocEj(20) | 0;
    i34 = i6;
    _memset(i6 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i34;
    HEAP8[H_BASE + 728 | 0] = 1;
    i42 = i34;
   }
   i34 = HEAP32[i42 + 8 >> 2] | 0;
   i6 = HEAP32[i42 >> 2] | 0;
   i38 = i1;
   i5 = i38 + ~(i38 << 15) | 0;
   i38 = (i5 >>> 10 ^ i5) * 9 & -1;
   i5 = i38 >>> 6 ^ i38;
   i38 = i5 + ~(i5 << 11) | 0;
   i5 = i38 >>> 16 ^ i38;
   if ((i6 | 0) == 0) {
    i41 = 0;
    break;
   }
   i38 = i34 & i5;
   i9 = i6 + (i38 << 3) | 0;
   i30 = HEAP32[i9 >> 2] | 0;
   if ((i30 | 0) == (i1 | 0)) {
    i43 = i9;
   } else {
    i9 = (i5 >>> 23) + ~i5 | 0;
    i5 = i9 << 12 ^ i9;
    i9 = i5 >>> 7 ^ i5;
    i5 = i9 << 2 ^ i9;
    i9 = i5 >>> 20 ^ i5 | 1;
    i5 = 0;
    i37 = i38;
    i38 = i30;
    while (1) {
     if ((i38 | 0) == 0) {
      i41 = 0;
      break L95;
     }
     i30 = (i5 | 0) == 0 ? i9 : i5;
     i36 = i30 + i37 & i34;
     i32 = i6 + (i36 << 3) | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     if ((i33 | 0) == (i1 | 0)) {
      i43 = i32;
      break;
     } else {
      i5 = i30;
      i37 = i36;
      i38 = i33;
     }
    }
   }
   if ((i43 | 0) == 0) {
    i41 = 0;
    break;
   }
   i41 = HEAP32[i43 + 4 >> 2] | 0;
  }
 } while (0);
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i13, i41 | 0, i2, i8);
 do {
  if ((HEAP8[i13 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i13 >> 2] | 0;
   i41 = HEAP32[i39 >> 2] | 0;
   if ((i41 | 0) != 0) {
    i43 = i41 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
   }
   i43 = i8 + 4 | 0;
   i8 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = i41;
   if ((i8 | 0) == 0) {
    i44 = i41;
    break;
   }
   i43 = i8 | 0;
   i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   if ((i42 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    i44 = i41;
    break;
   } else {
    HEAP32[i43 >> 2] = i42;
    i44 = i41;
    break;
   }
  } else {
   i44 = HEAP32[i39 >> 2] | 0;
  }
 } while (0);
 L138 : do {
  if ((HEAP32[i44 + 24 >> 2] | 0) == 0) {
   if (HEAP8[H_BASE + 728 | 0] | 0) {
    i45 = HEAP32[H_BASE + 736 >> 2] | 0;
   } else {
    i39 = __ZN3WTF10fastMallocEj(20) | 0;
    i13 = i39;
    _memset(i39 | 0, 0, 20) | 0;
    HEAP32[H_BASE + 736 >> 2] = i13;
    HEAP8[H_BASE + 728 | 0] = 1;
    i45 = i13;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 & 128 | 0) == 0) {
    i46 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i46 = 0;
   }
   if ((HEAP32[i46 + 12 >> 2] & 1048580 | 0) == 1048580) {
    i39 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 232 >> 2] & 255](i46) | 0) != 0;
    i47 = i39;
    i48 = HEAP32[i14 >> 2] | 0;
   } else {
    i47 = 0;
    i48 = i13;
   }
   if ((i48 & 128 | 0) == 0) {
    i49 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i49 = 0;
   }
   do {
    if (i47) {
     i50 = HEAP32[i49 + 52 >> 2] | 0;
    } else {
     i13 = HEAP32[i49 + 16 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i50 = 0;
      break;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
      i50 = 0;
      break;
     }
     i50 = i13;
    }
   } while (0);
   i13 = __ZN7WebCoreL14nextInPreOrderEPKNS_13RenderElementEPKNS_7ElementEb(i17, i50, 0) | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i39 = i45 + 8 | 0;
   i41 = i45 | 0;
   i42 = i2 | 0;
   i43 = i13;
   while (1) {
    i13 = i43 | 0;
    i8 = i43 + 20 | 0;
    i12 = HEAP32[i8 >> 2] | 0;
    L162 : do {
     if ((i12 & 524288 | 0) == 0) {
      i51 = 0;
     } else {
      i11 = HEAP32[i39 >> 2] | 0;
      i10 = HEAP32[i41 >> 2] | 0;
      i40 = i43;
      i38 = i40 + ~(i40 << 15) | 0;
      i40 = (i38 >>> 10 ^ i38) * 9 & -1;
      i38 = i40 >>> 6 ^ i40;
      i40 = i38 + ~(i38 << 11) | 0;
      i38 = i40 >>> 16 ^ i40;
      i40 = i11 & i38;
      i37 = i10 + (i40 << 3) | 0;
      if ((HEAP32[i37 >> 2] | 0) == (i13 | 0)) {
       i52 = i37;
      } else {
       i37 = (i38 >>> 23) + ~i38 | 0;
       i38 = i37 << 12 ^ i37;
       i37 = i38 >>> 7 ^ i38;
       i38 = i37 << 2 ^ i37;
       i37 = i38 >>> 20 ^ i38 | 1;
       i38 = 0;
       i5 = i40;
       while (1) {
        i40 = (i38 | 0) == 0 ? i37 : i38;
        i6 = i40 + i5 & i11;
        i34 = i10 + (i6 << 3) | 0;
        if ((HEAP32[i34 >> 2] | 0) == (i13 | 0)) {
         i52 = i34;
         break;
        } else {
         i38 = i40;
         i5 = i6;
        }
       }
      }
      i5 = HEAP32[i52 + 4 >> 2] | 0;
      i38 = HEAP32[i5 + 8 >> 2] | 0;
      i10 = HEAP32[i5 >> 2] | 0;
      i5 = HEAP32[i42 >> 2] | 0;
      i11 = HEAP32[i5 + 16 >> 2] | 0;
      i37 = i11 >>> 7;
      if ((i10 | 0) == 0) {
       i51 = 0;
       break;
      }
      i6 = (i11 >>> 30) + ~i37 | 0;
      i11 = i6 << 12 ^ i6;
      i6 = i11 >>> 7 ^ i11;
      i11 = i6 << 2 ^ i6;
      i6 = i11 >>> 20 ^ i11 | 1;
      i11 = i37;
      i37 = 0;
      while (1) {
       i53 = i11 & i38;
       i54 = i10 + (i53 << 3) | 0;
       i40 = HEAP32[i54 >> 2] | 0;
       i34 = i40;
       if ((i34 | 0) == 0) {
        i51 = 0;
        break L162;
       } else if ((i34 | 0) != (-1 | 0)) {
        if ((i40 | 0) == (i5 | 0)) {
         break;
        }
       }
       i40 = (i37 | 0) == 0 ? i6 : i37;
       i11 = i40 + i53 | 0;
       i37 = i40;
      }
      if ((i54 | 0) == 0) {
       i51 = 0;
       break;
      }
      i37 = HEAP32[i10 + (i53 << 3) + 4 >> 2] | 0;
      if ((i37 | 0) == 0) {
       i51 = 0;
       break;
      }
      if ((HEAP32[i37 + 24 >> 2] | 0) != 0) {
       i51 = 1;
       break;
      }
      if ((i12 & 128 | 0) == 0) {
       i55 = HEAP32[i43 + 4 >> 2] | 0;
      } else {
       i55 = 0;
      }
      if ((HEAP32[i55 + 12 >> 2] & 1048580 | 0) == 1048580) {
       i11 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 232 >> 2] & 255](i55) | 0) != 0;
       i56 = i11;
       i57 = HEAP32[i8 >> 2] | 0;
      } else {
       i56 = 0;
       i57 = i12;
      }
      if ((i57 & 128 | 0) == 0) {
       i58 = HEAP32[i43 + 4 >> 2] | 0;
      } else {
       i58 = 0;
      }
      do {
       if (i56) {
        i59 = HEAP32[i58 + 52 >> 2] | 0;
       } else {
        i11 = HEAP32[i58 + 16 >> 2] | 0;
        if ((i11 | 0) == 0) {
         i59 = 0;
         break;
        }
        if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
         i59 = 0;
         break;
        }
        i59 = i11;
       }
      } while (0);
      if ((i50 | 0) == (i59 | 0)) {
       if ((HEAP8[i37 + 4 | 0] & 1) != 0) {
        break L138;
       }
      }
      __ZN7WebCore11CounterNode11insertAfterEPS0_S1_RKN3WTF12AtomicStringE(i44, i37, HEAP32[i44 + 40 >> 2] | 0, i2);
      i51 = 1;
     }
    } while (0);
    i43 = __ZN7WebCoreL14nextInPreOrderEPKNS_13RenderElementEPKNS_7ElementEb(i43, i50, i51) | 0;
    if ((i43 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i44 | 0) != 0) {
   i51 = i44 | 0;
   i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   if ((i50 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i44);
    __ZN3WTF8fastFreeEPv(i44);
    break;
   } else {
    HEAP32[i51 >> 2] = i50;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i35 = i50 | 0;
   i51 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i50);
    __ZN3WTF8fastFreeEPv(i50);
    break;
   } else {
    HEAP32[i35 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i50 = HEAP32[i3 >> 2] | 0;
 if ((i50 | 0) == 0) {
  i16 = i44;
  STACKTOP = i4;
  return i16 | 0;
 }
 i3 = i50 | 0;
 i51 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i51 | 0) == 0) {
  __ZN7WebCore11CounterNodeD1Ev(i50);
  __ZN3WTF8fastFreeEPv(i50);
  i16 = i44;
  STACKTOP = i4;
  return i16 | 0;
 } else {
  HEAP32[i3 >> 2] = i51;
  i16 = i44;
  STACKTOP = i4;
  return i16 | 0;
 }
 return 0;
}
function __ZN7WebCore13RenderCounter23rendererSubtreeAttachedEPNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 220 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 & 128 | 0) != 0 | (i6 | 0) == 0) {
   i9 = i8;
   i10 = 7;
  } else {
   do {
    if ((HEAP32[i6 + 12 >> 2] & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 232 >> 2] & 255](i6) | 0) == 0) {
      break;
     }
     i9 = HEAP32[i7 >> 2] | 0;
     i10 = 7;
     break L4;
    }
   } while (0);
   i11 = HEAP32[i6 + 16 >> 2] | 0;
   i10 = 15;
  }
 } while (0);
 L10 : do {
  if ((i10 | 0) == 7) {
   do {
    if ((i9 & 128 | 0) == 0) {
     i6 = HEAP32[i5 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i12 = i9;
      break;
     }
     if ((HEAP32[i6 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i12 = i9;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 232 >> 2] & 255](i6) | 0) == 0) {
      i12 = HEAP32[i7 >> 2] | 0;
      break;
     } else {
      i11 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i1) | 0;
      i10 = 15;
      break L10;
     }
    } else {
     i12 = i9;
    }
   } while (0);
   if ((i12 & 128 | 0) != 0) {
    i10 = 20;
    break;
   }
   i11 = HEAP32[i5 >> 2] | 0;
   i10 = 15;
  }
 } while (0);
 do {
  if ((i10 | 0) == 15) {
   if ((i11 | 0) == 0) {
    i10 = 20;
    break;
   }
   i5 = i11 + 32 | 0;
   if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
    i13 = i5 | 0;
   } else {
    i13 = HEAP32[i5 >> 2] | 0;
   }
   if (!((HEAP32[i13 >> 2] | 0) == 0 | (i1 | 0) == 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 20) {
   if ((i1 | 0) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i13 = i3 | 0;
 i11 = i4 | 0;
 i5 = i1;
 while (1) {
  i12 = i5 + 20 | 0;
  if ((HEAP32[i12 >> 2] & 768 | 0) == 256) {
   i14 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i14 = HEAP32[i5 + 36 >> 2] | 0;
  }
  i9 = __ZNK7WebCore11RenderStyle17counterDirectivesEv(i14) | 0;
  L39 : do {
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    i6 = HEAP32[i7 >> 2] | 0;
    i8 = i9 + 4 | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    i16 = i6 + (i15 << 4) | 0;
    if ((HEAP32[i12 >> 2] & 524288 | 0) == 0) {
     if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
      break;
     }
     L44 : do {
      if ((i15 | 0) == 0) {
       i17 = i6;
      } else {
       i18 = i6;
       while (1) {
        i19 = HEAP32[i18 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i17 = i18;
         break L44;
        }
        i18 = i18 + 16 | 0;
        if ((i18 | 0) == (i16 | 0)) {
         break L39;
        }
       }
      }
     } while (0);
     if ((i17 | 0) == (i16 | 0)) {
      break;
     } else {
      i20 = i17;
     }
     while (1) {
      __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i5, i20 | 0, 0) | 0;
      i6 = i20 + 16 | 0;
      if ((i6 | 0) == (i16 | 0)) {
       break L39;
      } else {
       i21 = i6;
      }
      while (1) {
       i6 = HEAP32[i21 >> 2] | 0;
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        break;
       }
       i6 = i21 + 16 | 0;
       if ((i6 | 0) == (i16 | 0)) {
        break L39;
       } else {
        i21 = i6;
       }
      }
      if ((i21 | 0) == (i16 | 0)) {
       break L39;
      } else {
       i20 = i21;
      }
     }
    }
    if (HEAP8[H_BASE + 728 | 0] | 0) {
     i22 = HEAP32[H_BASE + 736 >> 2] | 0;
    } else {
     i6 = __ZN3WTF10fastMallocEj(20) | 0;
     i15 = i6;
     _memset(i6 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 736 >> 2] = i15;
     HEAP8[H_BASE + 728 | 0] = 1;
     i22 = i15;
    }
    i15 = HEAP32[i22 + 8 >> 2] | 0;
    i6 = HEAP32[i22 >> 2] | 0;
    i18 = i5;
    i19 = i18 + ~(i18 << 15) | 0;
    i18 = (i19 >>> 10 ^ i19) * 9 & -1;
    i19 = i18 >>> 6 ^ i18;
    i18 = i19 + ~(i19 << 11) | 0;
    i19 = i18 >>> 16 ^ i18;
    L60 : do {
     if ((i6 | 0) == 0) {
      i23 = 0;
     } else {
      i18 = i15 & i19;
      i24 = i6 + (i18 << 3) | 0;
      i25 = HEAP32[i24 >> 2] | 0;
      if ((i25 | 0) == (i5 | 0)) {
       i26 = i24;
      } else {
       i24 = (i19 >>> 23) + ~i19 | 0;
       i27 = i24 << 12 ^ i24;
       i24 = i27 >>> 7 ^ i27;
       i27 = i24 << 2 ^ i24;
       i24 = i27 >>> 20 ^ i27 | 1;
       i27 = 0;
       i28 = i18;
       i18 = i25;
       while (1) {
        if ((i18 | 0) == 0) {
         i23 = 0;
         break L60;
        }
        i25 = (i27 | 0) == 0 ? i24 : i27;
        i29 = i25 + i28 & i15;
        i30 = i6 + (i29 << 3) | 0;
        i31 = HEAP32[i30 >> 2] | 0;
        if ((i31 | 0) == (i5 | 0)) {
         i26 = i30;
         break;
        } else {
         i27 = i25;
         i28 = i29;
         i18 = i31;
        }
       }
      }
      if ((i26 | 0) == 0) {
       i23 = 0;
       break;
      }
      i23 = HEAP32[i26 + 4 >> 2] | 0;
     }
    } while (0);
    i6 = HEAP32[i7 >> 2] | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    i19 = i6 + (i15 << 4) | 0;
    L70 : do {
     if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
      i32 = i19;
     } else {
      if ((i15 | 0) == 0) {
       i32 = i6;
       break;
      } else {
       i33 = i6;
      }
      while (1) {
       i18 = HEAP32[i33 >> 2] | 0;
       if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
        i32 = i33;
        break L70;
       }
       i18 = i33 + 16 | 0;
       if ((i18 | 0) == (i19 | 0)) {
        i32 = i19;
        break;
       } else {
        i33 = i18;
       }
      }
     }
    } while (0);
    if ((i32 | 0) == (i16 | 0)) {
     break;
    }
    i6 = i23 + 8 | 0;
    i15 = i23 | 0;
    i8 = i32;
    while (1) {
     i7 = i8 | 0;
     i18 = HEAP32[i6 >> 2] | 0;
     i28 = HEAP32[i15 >> 2] | 0;
     i27 = i8 | 0;
     i24 = HEAP32[i27 >> 2] | 0;
     i31 = HEAP32[i24 + 16 >> 2] | 0;
     i29 = i31 >>> 7;
     L79 : do {
      if ((i28 | 0) == 0) {
       i10 = 59;
      } else {
       i25 = (i31 >>> 30) + ~i29 | 0;
       i30 = i25 << 12 ^ i25;
       i25 = i30 >>> 7 ^ i30;
       i30 = i25 << 2 ^ i25;
       i25 = i30 >>> 20 ^ i30 | 1;
       i30 = i29;
       i34 = 0;
       while (1) {
        i35 = i30 & i18;
        i36 = i28 + (i35 << 3) | 0;
        i37 = HEAP32[i36 >> 2] | 0;
        i38 = i37;
        if ((i38 | 0) == 0) {
         i10 = 59;
         break L79;
        } else if ((i38 | 0) != (-1 | 0)) {
         if ((i37 | 0) == (i24 | 0)) {
          break;
         }
        }
        i37 = (i34 | 0) == 0 ? i25 : i34;
        i30 = i37 + i35 | 0;
        i34 = i37;
       }
       if ((i36 | 0) == 0) {
        i10 = 59;
        break;
       }
       i34 = HEAP32[i28 + (i35 << 3) + 4 >> 2] | 0;
       if ((i34 | 0) == 0) {
        i10 = 59;
        break;
       }
       i30 = i34 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       HEAP32[i13 >> 2] = 0;
       HEAP32[i11 >> 2] = 0;
       __ZN7WebCoreL19findPlaceForCounterEPNS_12RenderObjectERKN3WTF12AtomicStringEbRNS2_6RefPtrINS_11CounterNodeEEES9_(i5, i7, (HEAP8[i34 + 4 | 0] & 1) != 0, i3, i4) | 0;
       i25 = HEAP32[i6 >> 2] | 0;
       i37 = HEAP32[i15 >> 2] | 0;
       i38 = HEAP32[i27 >> 2] | 0;
       i39 = HEAP32[i38 + 16 >> 2] | 0;
       i40 = i39 >>> 7;
       L89 : do {
        if ((i37 | 0) == 0) {
         i41 = 0;
        } else {
         i42 = (i39 >>> 30) + ~i40 | 0;
         i43 = i42 << 12 ^ i42;
         i42 = i43 >>> 7 ^ i43;
         i43 = i42 << 2 ^ i42;
         i42 = i43 >>> 20 ^ i43 | 1;
         i43 = i40;
         i44 = 0;
         while (1) {
          i45 = i43 & i25;
          i46 = i37 + (i45 << 3) | 0;
          i47 = HEAP32[i46 >> 2] | 0;
          i48 = i47;
          if ((i48 | 0) == 0) {
           i41 = 0;
           break L89;
          } else if ((i48 | 0) != (-1 | 0)) {
           if ((i47 | 0) == (i38 | 0)) {
            break;
           }
          }
          i47 = (i44 | 0) == 0 ? i42 : i44;
          i43 = i47 + i45 | 0;
          i44 = i47;
         }
         if ((i46 | 0) == 0) {
          i41 = 0;
          break;
         }
         i41 = HEAP32[i37 + (i45 << 3) + 4 >> 2] | 0;
        }
       } while (0);
       do {
        if ((i34 | 0) == (i41 | 0)) {
         i37 = HEAP32[i34 + 24 >> 2] | 0;
         i38 = HEAP32[i13 >> 2] | 0;
         if ((i38 | 0) == (i37 | 0)) {
          i25 = HEAP32[i34 + 28 >> 2] | 0;
          if ((HEAP32[i11 >> 2] | 0) == (i25 | 0)) {
           i49 = i25;
           break;
          }
         }
         if ((i37 | 0) != 0) {
          __ZN7WebCore11CounterNode11removeChildEPS0_(i37, i34);
         }
         if ((i38 | 0) == 0) {
          i10 = 74;
          break;
         }
         __ZN7WebCore11CounterNode11insertAfterEPS0_S1_RKN3WTF12AtomicStringE(i38, i34, HEAP32[i11 >> 2] | 0, i7);
         i10 = 74;
        } else {
         i10 = 74;
        }
       } while (0);
       if ((i10 | 0) == 74) {
        i10 = 0;
        i49 = HEAP32[i11 >> 2] | 0;
       }
       do {
        if ((i49 | 0) != 0) {
         i38 = i49 | 0;
         i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
         if ((i37 | 0) == 0) {
          __ZN7WebCore11CounterNodeD1Ev(i49);
          __ZN3WTF8fastFreeEPv(i49);
          break;
         } else {
          HEAP32[i38 >> 2] = i37;
          break;
         }
        }
       } while (0);
       i37 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i37 | 0) != 0) {
         i38 = i37 | 0;
         i25 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
         if ((i25 | 0) == 0) {
          __ZN7WebCore11CounterNodeD1Ev(i37);
          __ZN3WTF8fastFreeEPv(i37);
          break;
         } else {
          HEAP32[i38 >> 2] = i25;
          break;
         }
        }
       } while (0);
       i37 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) == 0) {
        __ZN7WebCore11CounterNodeD1Ev(i34);
        __ZN3WTF8fastFreeEPv(i34);
        break;
       } else {
        HEAP32[i30 >> 2] = i37;
        break;
       }
      }
     } while (0);
     if ((i10 | 0) == 59) {
      i10 = 0;
      __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i5, i7, 0) | 0;
     }
     i27 = i8 + 16 | 0;
     L129 : do {
      if ((i27 | 0) == (i19 | 0)) {
       i50 = i19;
      } else {
       i28 = i27;
       while (1) {
        i24 = HEAP32[i28 >> 2] | 0;
        if (!((i24 | 0) == (-1 | 0) | (i24 | 0) == 0)) {
         i50 = i28;
         break L129;
        }
        i24 = i28 + 16 | 0;
        if ((i24 | 0) == (i19 | 0)) {
         i50 = i19;
         break;
        } else {
         i28 = i24;
        }
       }
      }
     } while (0);
     if ((i50 | 0) == (i16 | 0)) {
      break;
     } else {
      i8 = i50;
     }
    }
   }
  } while (0);
  i5 = __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i5, i1) | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13RenderCounter20rendererStyleChangedEPNS_12RenderObjectEPKNS_11RenderStyleES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 & 128 | 0) == 0) {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = i5;
    i8 = 7;
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i7 = i5;
    i8 = 7;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 232 >> 2] & 255](i6) | 0) == 0) {
    i7 = HEAP32[i4 >> 2] | 0;
    i8 = 7;
    break;
   } else {
    i9 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i1) | 0;
    break;
   }
  } else {
   i7 = i5;
   i8 = 7;
  }
 } while (0);
 do {
  if ((i8 | 0) == 7) {
   if ((i7 & 128 | 0) == 0) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    break;
   } else {
    return;
   }
  }
 } while (0);
 if ((i9 | 0) == 0) {
  return;
 }
 i7 = i9 + 32 | 0;
 if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i7 | 0;
 } else {
  i10 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   i10 = __ZNK7WebCore11RenderStyle17counterDirectivesEv(i2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   do {
    if ((i3 | 0) != 0) {
     i7 = __ZNK7WebCore11RenderStyle17counterDirectivesEv(i3) | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i9 = i7 | 0;
     i5 = HEAP32[i9 >> 2] | 0;
     i6 = HEAP32[i7 + 4 >> 2] | 0;
     i11 = i5 + (i6 << 4) | 0;
     i12 = i10 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     i14 = i10 + 4 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     i16 = i13 + (i15 << 4) | 0;
     L30 : do {
      if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
       i17 = i13;
       i18 = i15;
      } else {
       L32 : do {
        if ((i6 | 0) == 0) {
         i19 = i5;
        } else {
         i20 = i5;
         while (1) {
          i21 = HEAP32[i20 >> 2] | 0;
          if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
           i19 = i20;
           break L32;
          }
          i21 = i20 + 16 | 0;
          if ((i21 | 0) == (i11 | 0)) {
           i17 = i13;
           i18 = i15;
           break L30;
          } else {
           i20 = i21;
          }
         }
        }
       } while (0);
       if ((i19 | 0) == (i11 | 0)) {
        i17 = i13;
        i18 = i15;
        break;
       }
       i20 = i10 + 8 | 0;
       i21 = i19;
       i22 = i13;
       L38 : while (1) {
        i23 = i21 | 0;
        do {
         if ((i22 | 0) == 0) {
          i24 = HEAP32[i14 >> 2] << 4 | 0;
         } else {
          i25 = HEAP32[i20 >> 2] | 0;
          i26 = HEAP32[i21 >> 2] | 0;
          i27 = HEAP32[i26 + 16 >> 2] | 0;
          i28 = i27 >>> 7;
          i29 = (i27 >>> 30) + ~i28 | 0;
          i27 = i29 << 12 ^ i29;
          i29 = i27 >>> 7 ^ i27;
          i27 = i29 << 2 ^ i29;
          i29 = i27 >>> 20 ^ i27 | 1;
          i27 = i28;
          i28 = 0;
          while (1) {
           i30 = i27 & i25;
           i31 = i22 + (i30 << 4) | 0;
           i32 = HEAP32[i31 >> 2] | 0;
           i33 = i32;
           if ((i33 | 0) == 0) {
            break;
           } else if ((i33 | 0) != (-1 | 0)) {
            if ((i32 | 0) == (i26 | 0)) {
             i8 = 30;
             break;
            }
           }
           i32 = (i28 | 0) == 0 ? i29 : i28;
           i27 = i32 + i30 | 0;
           i28 = i32;
          }
          if ((i8 | 0) == 30) {
           i8 = 0;
           if ((i31 | 0) != 0) {
            i24 = i31;
            break;
           }
          }
          i24 = i22 + (HEAP32[i14 >> 2] << 4) | 0;
         }
        } while (0);
        do {
         if ((i24 | 0) == (i16 | 0)) {
          i8 = 35;
         } else {
          if (__ZN7WebCoreeqERKNS_17CounterDirectivesES2_(i24 + 4 | 0, i21 + 4 | 0) | 0) {
           break;
          }
          __ZN7WebCore13RenderCounter18destroyCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringE(i1, i23);
          i8 = 35;
         }
        } while (0);
        if ((i8 | 0) == 35) {
         i8 = 0;
         __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i1, i23, 0) | 0;
        }
        i28 = i21 + 16 | 0;
        if ((i28 | 0) == (i11 | 0)) {
         break;
        } else {
         i34 = i28;
        }
        while (1) {
         i28 = HEAP32[i34 >> 2] | 0;
         if (!((i28 | 0) == (-1 | 0) | (i28 | 0) == 0)) {
          break;
         }
         i28 = i34 + 16 | 0;
         if ((i28 | 0) == (i11 | 0)) {
          break L38;
         } else {
          i34 = i28;
         }
        }
        if ((i34 | 0) == (i11 | 0)) {
         break;
        }
        i21 = i34;
        i22 = HEAP32[i12 >> 2] | 0;
       }
       i17 = HEAP32[i12 >> 2] | 0;
       i18 = HEAP32[i14 >> 2] | 0;
      }
     } while (0);
     i14 = i17 + (i18 << 4) | 0;
     L65 : do {
      if ((HEAP32[i10 + 12 >> 2] | 0) == 0) {
       i35 = i14;
      } else {
       if ((i18 | 0) == 0) {
        i35 = i17;
        break;
       } else {
        i36 = i17;
       }
       while (1) {
        i12 = HEAP32[i36 >> 2] | 0;
        if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
         i35 = i36;
         break L65;
        }
        i12 = i36 + 16 | 0;
        if ((i12 | 0) == (i14 | 0)) {
         i35 = i14;
         break;
        } else {
         i36 = i12;
        }
       }
      }
     } while (0);
     if ((i35 | 0) == (i16 | 0)) {
      return;
     }
     i12 = i7 + 8 | 0;
     i11 = i35;
     while (1) {
      i13 = i11 | 0;
      i15 = HEAP32[i9 >> 2] | 0;
      L76 : do {
       if ((i15 | 0) == 0) {
        i8 = 54;
       } else {
        i5 = HEAP32[i12 >> 2] | 0;
        i6 = HEAP32[i11 >> 2] | 0;
        i22 = HEAP32[i6 + 16 >> 2] | 0;
        i21 = i22 >>> 7;
        i20 = (i22 >>> 30) + ~i21 | 0;
        i22 = i20 << 12 ^ i20;
        i20 = i22 >>> 7 ^ i22;
        i22 = i20 << 2 ^ i20;
        i20 = i22 >>> 20 ^ i22 | 1;
        i22 = i21;
        i21 = 0;
        while (1) {
         i23 = i22 & i5;
         i37 = i15 + (i23 << 4) | 0;
         i28 = HEAP32[i37 >> 2] | 0;
         i27 = i28;
         if ((i27 | 0) == 0) {
          i8 = 54;
          break L76;
         } else if ((i27 | 0) != (-1 | 0)) {
          if ((i28 | 0) == (i6 | 0)) {
           break;
          }
         }
         i28 = (i21 | 0) == 0 ? i20 : i21;
         i22 = i28 + i23 | 0;
         i21 = i28;
        }
        if ((i37 | 0) == 0) {
         i8 = 54;
        }
       }
      } while (0);
      if ((i8 | 0) == 54) {
       i8 = 0;
       __ZN7WebCore13RenderCounter18destroyCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringE(i1, i13);
      }
      i15 = i11 + 16 | 0;
      L87 : do {
       if ((i15 | 0) == (i14 | 0)) {
        i38 = i14;
       } else {
        i21 = i15;
        while (1) {
         i22 = HEAP32[i21 >> 2] | 0;
         if (!((i22 | 0) == (-1 | 0) | (i22 | 0) == 0)) {
          i38 = i21;
          break L87;
         }
         i22 = i21 + 16 | 0;
         if ((i22 | 0) == (i14 | 0)) {
          i38 = i14;
          break;
         } else {
          i21 = i22;
         }
        }
       }
      } while (0);
      if ((i38 | 0) == (i16 | 0)) {
       break;
      } else {
       i11 = i38;
      }
     }
     return;
    }
   } while (0);
   if ((HEAP32[i4 >> 2] & 524288 | 0) == 0) {
    return;
   }
   __ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE(i1);
   return;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = __ZNK7WebCore11RenderStyle17counterDirectivesEv(i3) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 i38 = HEAP32[i4 + 4 >> 2] | 0;
 i37 = i3 + (i38 << 4) | 0;
 if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
  return;
 }
 L108 : do {
  if ((i38 | 0) == 0) {
   i39 = i3;
  } else {
   i4 = i3;
   while (1) {
    i35 = HEAP32[i4 >> 2] | 0;
    if (!((i35 | 0) == (-1 | 0) | (i35 | 0) == 0)) {
     i39 = i4;
     break L108;
    }
    i4 = i4 + 16 | 0;
    if ((i4 | 0) == (i37 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i39 | 0) == (i37 | 0)) {
  return;
 } else {
  i40 = i39;
 }
 L116 : while (1) {
  __ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i1, i40 | 0, 0) | 0;
  i39 = i40 + 16 | 0;
  if ((i39 | 0) == (i37 | 0)) {
   i8 = 85;
   break;
  } else {
   i41 = i39;
  }
  while (1) {
   i39 = HEAP32[i41 >> 2] | 0;
   if (!((i39 | 0) == (-1 | 0) | (i39 | 0) == 0)) {
    break;
   }
   i39 = i41 + 16 | 0;
   if ((i39 | 0) == (i37 | 0)) {
    i8 = 87;
    break L116;
   } else {
    i41 = i39;
   }
  }
  if ((i41 | 0) == (i37 | 0)) {
   i8 = 86;
   break;
  } else {
   i40 = i41;
  }
 }
 if ((i8 | 0) == 85) {
  return;
 } else if ((i8 | 0) == 86) {
  return;
 } else if ((i8 | 0) == 87) {
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_fiiiifii + 2;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_fiiifiii + 2;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 94;
}
function __ZNK7WebCore13RenderCounter12originalTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i2 + 68 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i2 + 8 | 0;
   while (1) {
    i13 = HEAP32[i12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i14 = 4;
     break;
    }
    i15 = i13 | 0;
    if ((HEAP32[i13 + 20 >> 2] & 128 | 0) == 0) {
     i16 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i14 = 9;
      break;
     }
     if ((HEAP32[i16 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i14 = 9;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 232 >> 2] & 255](i16) | 0) == 0) {
      i14 = 9;
      break;
     }
    }
    if ((((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 52 >> 2] | 0) >>> 6 & 63) - 3 | 0) >>> 0 < 2 >>> 0) {
     i14 = 11;
     break;
    } else {
     i12 = i13 + 8 | 0;
    }
   }
   if ((i14 | 0) == 4) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i3;
    return;
   } else if ((i14 | 0) == 9) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i3;
    return;
   } else if ((i14 | 0) == 11) {
    __ZN7WebCore11CounterNode11addRendererEPNS_13RenderCounterE(__ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb(i15, i2 + 56 | 0, 1) | 0, i2);
    i17 = HEAP32[i10 >> 2] | 0;
    break;
   }
  } else {
   i17 = i11;
  }
 } while (0);
 i11 = i17 + 4 | 0;
 do {
  if ((HEAP8[i11] & 1) == 0) {
   if ((HEAP32[i17 + 24 >> 2] | 0) == 0) {
    i14 = 14;
    break;
   }
   i18 = i17 + 12 | 0;
  } else {
   i14 = 14;
  }
 } while (0);
 if ((i14 | 0) == 14) {
  i18 = i17 + 8 | 0;
 }
 i14 = i2 + 60 | 0;
 __ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi(i4, HEAP32[i14 >> 2] | 0, HEAP32[i18 >> 2] | 0);
 i18 = i2 + 64 | 0;
 do {
  if ((HEAP32[i18 >> 2] | 0) != 0) {
   if ((HEAP8[i11] & 1) == 0) {
    i2 = HEAP32[i17 + 24 >> 2] | 0;
    i19 = (i2 | 0) == 0 ? i17 : i2;
   } else {
    i19 = i17;
   }
   i2 = HEAP32[i19 + 24 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   i15 = i7 | 0;
   i12 = i7 + 4 | 0;
   i13 = i9 | 0;
   i16 = i4 | 0;
   i20 = i5 | 0;
   i21 = i6 + 8 | 0;
   i22 = i6 + 4 | 0;
   i23 = i6 | 0;
   i24 = i19;
   i25 = i2;
   while (1) {
    __ZN7WebCore14listMarkerTextENS_14EListStyleTypeEi(i8, HEAP32[i14 >> 2] | 0, HEAP32[i24 + 12 >> 2] | 0);
    i2 = HEAP32[i18 >> 2] | 0;
    i26 = (i2 | 0) == 0;
    if (!i26) {
     i27 = i2 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
    }
    i27 = HEAP32[i10 >> 2] | 0;
    i28 = (i27 | 0) == 0;
    if (!i28) {
     i29 = i27 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
    }
    if (!i26) {
     i29 = i2 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
    }
    HEAP32[i15 >> 2] = i27;
    if (!i28) {
     i29 = i27 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
    }
    HEAP32[i12 >> 2] = i2;
    do {
     if (!i26) {
      i29 = i2 | 0;
      i30 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = i30 + 2;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i2);
       break;
      } else {
       HEAP32[i29 >> 2] = i30;
       break;
      }
     }
    } while (0);
    do {
     if (!i28) {
      i30 = i27 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i30 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i16 >> 2] | 0;
    HEAP32[i13 >> 2] = i27;
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
    }
    __ZN3WTFplINS_6StringENS_12AtomicStringES1_EENS_12StringAppendINS3_IT_T0_EET1_EERKS6_S7_(i6, i7, i9);
    __ZNK3WTF12StringAppendINS0_INS_6StringENS_12AtomicStringEEES1_EcvS1_Ev(i5, i6);
    i28 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    i27 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i28;
    do {
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i29 = i27 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i29 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i29 = i27 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i29 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i29 = i27 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i29 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i28 = i27 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i28 >> 2] = i29;
       break;
      }
     }
    } while (0);
    do {
     if (!i26) {
      i27 = i2 | 0;
      i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i2);
       break;
      } else {
       HEAP32[i27 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i2 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      i26 = i2 | 0;
      i29 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i2);
       break;
      } else {
       HEAP32[i26 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i2 = HEAP32[i25 + 24 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    } else {
     i24 = i25;
     i25 = i2;
    }
   }
  }
 } while (0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringENS_12AtomicStringEEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i11 = i2 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i15 = i3 | 0;
 i3 = HEAP32[i15 >> 2] | 0;
 i16 = (i3 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i18 = _llvm_uadd_with_overflow_i32(i14 + i10 | 0, i17 | 0) | 0;
 i17 = i18;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i19 = 11;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i19 = 11;
  }
 }
 do {
  if ((i19 | 0) == 11) {
   if (!i13) {
    if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i16) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i17 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i19 = 38;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i20 = i8;
     i21 = 0;
    } else {
     if (i17 >>> 0 > 4294967275 >>> 0) {
      i19 = 38;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i17 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i19 = 38;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i17;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i20 = i9;
     i21 = i8;
    }
   } while (0);
   if ((i19 | 0) == 38) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i22 = 0;
     i23 = 0;
    } else {
     i9 = HEAP32[i8 + 4 >> 2] | 0;
     i18 = HEAP32[i8 + 8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i22 = 0;
      i23 = i8;
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP8[i21 + i24 | 0] = HEAP8[i18 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i9 >>> 0) {
       break;
      }
     }
     i9 = HEAP32[i7 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i22 = 0;
      i23 = 0;
      break;
     }
     i22 = HEAP32[i9 + 4 >> 2] | 0;
     i23 = i9;
    }
   } while (0);
   i8 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i25 = i23;
    } else {
     i9 = HEAP32[i8 + 4 >> 2] | 0;
     i18 = HEAP32[i8 + 8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i25 = i23;
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP8[i21 + (i26 + i22) | 0] = HEAP8[i18 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i9 >>> 0) {
       break;
      }
     }
     i25 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   if ((i25 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = HEAP32[i25 + 4 >> 2] | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i28 + i27 | 0;
   i9 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i18 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP8[i21 + (i8 + i29) | 0] = HEAP8[i10 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i18 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i17 | 0) == 0) {
   i20 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i20 | 0) == 0) {
    i19 = 56;
    break;
   }
   i29 = i20 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   i30 = i20;
   i31 = 0;
  } else {
   if (i17 >>> 0 > 2147483637 >>> 0) {
    i19 = 56;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i17 << 1) + 20 | 0);
   i20 = i5 | 0;
   i29 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i29 | 0) == 0) {
    i19 = 56;
    break;
   }
   i20 = i29 + 20 | 0;
   HEAP32[i29 >> 2] = 2;
   HEAP32[i29 + 4 >> 2] = i17;
   HEAP32[i29 + 8 >> 2] = i20;
   HEAP32[i29 + 12 >> 2] = 0;
   HEAP32[i29 + 16 >> 2] = 0;
   i30 = i29;
   i31 = i20;
  }
 } while (0);
 if ((i19 | 0) == 56) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS_6StringENS_12AtomicStringEE7writeToEPt(i2, i31);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i2 = i33 + i32 | 0;
 i32 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i15 = HEAP32[i32 + 4 >> 2] | 0;
   if ((HEAP32[i32 + 16 >> 2] & 32 | 0) == 0) {
    i33 = HEAP32[i32 + 8 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i34 = 0;
    }
    while (1) {
     HEAP16[i31 + (i34 + i2 << 1) >> 1] = HEAP16[i33 + (i34 << 1) >> 1] | 0;
     i34 = i34 + 1 | 0;
     if (i34 >>> 0 >= i15 >>> 0) {
      break;
     }
    }
   } else {
    i33 = HEAP32[i32 + 8 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i35 = 0;
    }
    while (1) {
     HEAP16[i31 + (i35 + i2 << 1) >> 1] = HEAPU8[i33 + i35 | 0] | 0;
     i35 = i35 + 1 | 0;
     if (i35 >>> 0 >= i15 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i30;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 i9 = i10 >>> 7;
 i8 = (i10 >>> 30) + ~i9 | 0;
 i10 = i8 << 12 ^ i8;
 i8 = i10 >>> 7 ^ i10;
 i10 = i8 << 2 ^ i8;
 i8 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i14 = i11 & i6;
  i15 = i12 + (i14 << 3) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  if ((i17 | 0) == (-1 | 0)) {
   i18 = i15;
  } else if ((i17 | 0) == 0) {
   break;
  } else {
   if ((i16 | 0) == (i3 | 0)) {
    i19 = 13;
    break;
   } else {
    i18 = i10;
   }
  }
  i16 = (i9 | 0) == 0 ? i8 : i9;
  i10 = i18;
  i11 = i16 + i14 | 0;
  i9 = i16;
 }
 if ((i19 | 0) == 13) {
  i19 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i12 = i1;
  HEAP32[i12 >> 2] = i15;
  HEAP32[i12 + 4 >> 2] = i19;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i20 = i15;
  i21 = i3;
 } else {
  i3 = i10;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i20 = i10;
  i21 = HEAP32[i7 >> 2] | 0;
 }
 if ((i21 | 0) != 0) {
  i7 = i21 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i20 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i21;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 | 0;
   i7 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i21 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i4 = i10 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i20 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i4;
 i7 = i2 + 16 | 0;
 i10 = i2 + 4 | 0;
 i21 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i7 >> 2] | 0) + i4 << 1 | 0) < (i21 | 0)) {
  i22 = i20;
  i23 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i24 = 8;
   i25 = 0;
  } else {
   i3 = i21 << 1;
   i24 = (i4 * 6 & -1 | 0) < (i3 | 0) ? i21 : i3;
   i25 = i21;
  }
  i21 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 >> 2] = i24;
  HEAP32[i13 >> 2] = i24 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i24 << 3) | 0;
  if ((i25 | 0) == 0) {
   i26 = 0;
  } else {
   i24 = 0;
   i13 = 0;
   while (1) {
    i3 = i21 + (i24 << 3) | 0;
    i4 = HEAP32[i3 >> 2] | 0;
    if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
     i27 = i13;
    } else {
     i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i3) | 0;
     i27 = (i3 | 0) == (i20 | 0) ? i4 : i13;
    }
    i4 = i24 + 1 | 0;
    if ((i4 | 0) == (i25 | 0)) {
     i26 = i27;
     break;
    } else {
     i24 = i4;
     i13 = i27;
    }
   }
  }
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i21, i25);
  i22 = i26;
  i23 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i23 << 3) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 if (HEAP8[H_BASE + 728 | 0] | 0) {
  i2 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i3;
  _memset(i3 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i4;
  HEAP8[H_BASE + 728 | 0] = 1;
  i2 = i4;
 }
 i4 = i2 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  i9 = i1;
  i10 = i9 + ~(i9 << 15) | 0;
  i9 = (i10 >>> 10 ^ i10) * 9 & -1;
  i10 = i9 >>> 6 ^ i9;
  i9 = i10 + ~(i10 << 11) | 0;
  i10 = i9 >>> 16 ^ i9;
  i9 = i5 & i10;
  i11 = i3 + (i9 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  L8 : do {
   if ((i12 | 0) == (i1 | 0)) {
    i13 = i11;
   } else {
    i14 = (i10 >>> 23) + ~i10 | 0;
    i15 = i14 << 12 ^ i14;
    i14 = i15 >>> 7 ^ i15;
    i15 = i14 << 2 ^ i14;
    i14 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i16 = i9;
    i17 = i12;
    while (1) {
     if ((i17 | 0) == 0) {
      i13 = 0;
      break L8;
     }
     i18 = (i15 | 0) == 0 ? i14 : i15;
     i19 = i18 + i16 & i5;
     i20 = i3 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i1 | 0)) {
      i13 = i20;
      break;
     } else {
      i15 = i18;
      i16 = i19;
      i17 = i21;
     }
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  i6 = (i13 | 0) == 0 ? i3 + (i5 << 3) | 0 : i13;
  i7 = i3;
  i8 = i5;
 }
 i5 = i2 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  return;
 }
 i3 = i6 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i9 = HEAP32[i13 + 4 >> 2] | 0;
 i10 = i12 + (i9 << 3) | 0;
 L18 : do {
  if ((HEAP32[i13 + 12 >> 2] | 0) == 0) {
   i22 = i7;
   i23 = i8;
  } else {
   L20 : do {
    if ((i9 | 0) == 0) {
     i24 = i12;
    } else {
     i11 = i12;
     while (1) {
      i17 = HEAP32[i11 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i24 = i11;
       break L20;
      }
      i17 = i11 + 8 | 0;
      if ((i17 | 0) == (i10 | 0)) {
       i22 = i7;
       i23 = i8;
       break L18;
      } else {
       i11 = i17;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == (i10 | 0)) {
    i22 = i7;
    i23 = i8;
    break;
   } else {
    i25 = i24;
   }
   L25 : while (1) {
    __ZN7WebCoreL35destroyCounterNodeWithoutMapRemovalERKN3WTF12AtomicStringEPNS_11CounterNodeE(i25 | 0, HEAP32[i25 + 4 >> 2] | 0);
    i11 = i25 + 8 | 0;
    if ((i11 | 0) == (i10 | 0)) {
     break;
    } else {
     i26 = i11;
    }
    while (1) {
     i11 = HEAP32[i26 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i26 + 8 | 0;
     if ((i11 | 0) == (i10 | 0)) {
      break L25;
     } else {
      i26 = i11;
     }
    }
    if ((i26 | 0) == (i10 | 0)) {
     break;
    } else {
     i25 = i26;
    }
   }
   i22 = HEAP32[i4 >> 2] | 0;
   i23 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i6 | 0) != (i22 + (i23 << 3) | 0)) {
   i4 = i2 | 0;
   i26 = HEAP32[i3 >> 2] | 0;
   if ((i26 | 0) != 0) {
    i25 = HEAP32[i26 >> 2] | 0;
    if ((i25 | 0) != 0) {
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i25, HEAP32[i26 + 4 >> 2] | 0);
    }
    __ZN3WTF8fastFreeEPv(i26);
   }
   HEAP32[i6 >> 2] = -1;
   i26 = i2 + 16 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   i26 = i2 + 12 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i25;
   i26 = HEAP32[i5 >> 2] | 0;
   if (!((i25 * 6 & -1 | 0) < (i26 | 0) & (i26 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E6rehashEiPSI_(i4, (i26 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -524289;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SM_EES4_NS_10PassOwnPtrISG_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SI_SK_SM_SQ_SN_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E6rehashEiPSI_(i2, i8, 0) | 0;
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
   i14 = i8;
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
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i4, HEAP32[i3 + 4 >> 2] | 0);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E6rehashEiPSI_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E6rehashEiPSI_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
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
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = HEAP32[i17 >> 2] | 0;
    if ((i20 | 0) != 0) {
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i20, HEAP32[i17 + 4 >> 2] | 0);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) != 0) {
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i11, HEAP32[i1 + 4 >> 2] | 0);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCoreL14nextInPreOrderEPKNS_13RenderElementEPKNS_7ElementEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i4 = 0;
 }
 i1 = i4 | 0;
 i4 = i2 | 0;
 L4 : do {
  if (i3) {
   i2 = __ZN7WebCore13NodeTraversal35nextIncludingPseudoSkippingChildrenEPKNS_4NodeES3_(i1, i4) | 0;
   if ((i2 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i6 = i2;
   }
   while (1) {
    if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
     i7 = i6;
     break L4;
    }
    i2 = __ZN7WebCore13NodeTraversal35nextIncludingPseudoSkippingChildrenEPKNS_4NodeES3_(i6, i4) | 0;
    if ((i2 | 0) == 0) {
     i5 = 0;
     break;
    } else {
     i6 = i2;
    }
   }
   return i5 | 0;
  } else {
   i2 = __ZN7WebCore13NodeTraversal19nextIncludingPseudoEPKNS_4NodeES3_(i1, i4) | 0;
   if ((i2 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i8 = i2;
   }
   while (1) {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i7 = i8;
     break L4;
    }
    i2 = __ZN7WebCore13NodeTraversal19nextIncludingPseudoEPKNS_4NodeES3_(i8, i4) | 0;
    if ((i2 | 0) == 0) {
     i5 = 0;
     break;
    } else {
     i8 = i2;
    }
   }
   return i5 | 0;
  }
 } while (0);
 L20 : do {
  if (i3) {
   i8 = i7;
   L21 : while (1) {
    i1 = HEAP32[i8 + 12 >> 2] | 0;
    i6 = i8 + 32 | 0;
    if ((i1 & 2048 | 0) == 0) {
     i9 = i6 | 0;
    } else {
     i9 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     i10 = i6;
     i11 = i1;
     break L20;
    }
    i1 = __ZN7WebCore13NodeTraversal35nextIncludingPseudoSkippingChildrenEPKNS_4NodeES3_(i8, i4) | 0;
    if ((i1 | 0) == 0) {
     i5 = 0;
     i12 = 32;
     break;
    } else {
     i13 = i1;
    }
    while (1) {
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) != 0) {
      i8 = i13;
      continue L21;
     }
     i1 = __ZN7WebCore13NodeTraversal35nextIncludingPseudoSkippingChildrenEPKNS_4NodeES3_(i13, i4) | 0;
     if ((i1 | 0) == 0) {
      i5 = 0;
      i12 = 40;
      break L21;
     } else {
      i13 = i1;
     }
    }
   }
   if ((i12 | 0) == 40) {
    return i5 | 0;
   } else if ((i12 | 0) == 32) {
    return i5 | 0;
   }
  } else {
   i8 = i7;
   L34 : while (1) {
    i1 = HEAP32[i8 + 12 >> 2] | 0;
    i6 = i8 + 32 | 0;
    if ((i1 & 2048 | 0) == 0) {
     i14 = i6 | 0;
    } else {
     i14 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i14 >> 2] | 0) != 0) {
     i10 = i6;
     i11 = i1;
     break L20;
    }
    i1 = __ZN7WebCore13NodeTraversal19nextIncludingPseudoEPKNS_4NodeES3_(i8, i4) | 0;
    if ((i1 | 0) == 0) {
     i5 = 0;
     i12 = 34;
     break;
    } else {
     i15 = i1;
    }
    while (1) {
     if ((HEAP32[i15 + 12 >> 2] & 4 | 0) != 0) {
      break;
     }
     i1 = __ZN7WebCore13NodeTraversal19nextIncludingPseudoEPKNS_4NodeES3_(i15, i4) | 0;
     if ((i1 | 0) == 0) {
      i5 = 0;
      i12 = 31;
      break L34;
     } else {
      i15 = i1;
     }
    }
    if ((i15 | 0) == 0) {
     i5 = 0;
     i12 = 33;
     break;
    } else {
     i8 = i15;
    }
   }
   if ((i12 | 0) == 31) {
    return i5 | 0;
   } else if ((i12 | 0) == 33) {
    return i5 | 0;
   } else if ((i12 | 0) == 34) {
    return i5 | 0;
   }
  }
 } while (0);
 if ((i11 & 2048 | 0) == 0) {
  i16 = i10 | 0;
 } else {
  i16 = HEAP32[i10 >> 2] | 0;
 }
 i5 = HEAP32[i16 >> 2] | 0;
 return i5 | 0;
}
function __ZN7WebCore13RenderCounter18destroyCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 if (HEAP8[H_BASE + 728 | 0] | 0) {
  i6 = HEAP32[H_BASE + 736 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 736 >> 2] = i8;
  HEAP8[H_BASE + 728 | 0] = 1;
  i6 = i8;
 }
 i8 = HEAP32[i6 + 8 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = i1;
 i9 = i6 + ~(i6 << 15) | 0;
 i6 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i6 >>> 6 ^ i6;
 i6 = i9 + ~(i9 << 11) | 0;
 i9 = i6 >>> 16 ^ i6;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i8 & i9;
 i10 = i7 + (i6 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L8 : do {
  if ((i11 | 0) == (i1 | 0)) {
   i12 = i10;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = i6;
   i16 = i11;
   while (1) {
    if ((i16 | 0) == 0) {
     break;
    }
    i17 = (i14 | 0) == 0 ? i13 : i14;
    i18 = i17 + i15 & i8;
    i19 = i7 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i1 | 0)) {
     i12 = i19;
     break L8;
    } else {
     i14 = i17;
     i15 = i18;
     i16 = i20;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i12 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i1 >> 2] | 0;
 L21 : do {
  if ((i12 | 0) == 0) {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i8 = i7 << 3 | 0;
   i21 = i8;
   i22 = i8;
   i23 = i7;
  } else {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i8 + 16 >> 2] | 0;
   i6 = i11 >>> 7;
   i9 = (i11 >>> 30) + ~i6 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i6;
   i6 = 0;
   while (1) {
    i10 = i11 & i7;
    i24 = i12 + (i10 << 3) | 0;
    i16 = HEAP32[i24 >> 2] | 0;
    i15 = i16;
    if ((i15 | 0) == 0) {
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((i16 | 0) == (i8 | 0)) {
      i25 = 17;
      break;
     }
    }
    i16 = (i6 | 0) == 0 ? i9 : i6;
    i11 = i16 + i10 | 0;
    i6 = i16;
   }
   do {
    if ((i25 | 0) == 17) {
     if ((i24 | 0) == 0) {
      break;
     }
     i6 = HEAP32[i1 + 4 >> 2] | 0;
     i21 = i24;
     i22 = i12 + (i6 << 3) | 0;
     i23 = i6;
     break L21;
    }
   } while (0);
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = i12 + (i6 << 3) | 0;
   i21 = i11;
   i22 = i11;
   i23 = i6;
  }
 } while (0);
 if ((i21 | 0) == (i12 + (i23 << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCoreL35destroyCounterNodeWithoutMapRemovalERKN3WTF12AtomicStringEPNS_11CounterNodeE(i2, HEAP32[i21 + 4 >> 2] | 0);
 HEAP32[i4 >> 2] = i21;
 HEAP32[i4 + 4 >> 2] = i22;
 __ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i1, i5) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL35destroyCounterNodeWithoutMapRemovalERKN3WTF12AtomicStringEPNS_11CounterNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = __ZNK7WebCore11CounterNode14lastDescendantEv(i2) | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   i4 = i3;
   while (1) {
    if ((i4 | 0) == (i2 | 0)) {
     break;
    }
    i5 = __ZNK7WebCore11CounterNode18previousInPreOrderEv(i4) | 0;
    __ZN7WebCore11CounterNode11removeChildEPS0_(HEAP32[i4 + 24 >> 2] | 0, i4);
    if (HEAP8[H_BASE + 728 | 0] | 0) {
     i6 = HEAP32[H_BASE + 736 >> 2] | 0;
    } else {
     i7 = __ZN3WTF10fastMallocEj(20) | 0;
     i8 = i7;
     _memset(i7 | 0, 0, 20) | 0;
     HEAP32[H_BASE + 736 >> 2] = i8;
     HEAP8[H_BASE + 728 | 0] = 1;
     i6 = i8;
    }
    i8 = HEAP32[i4 + 16 >> 2] | 0;
    i7 = i8 | 0;
    i9 = HEAP32[i6 + 8 >> 2] | 0;
    i10 = HEAP32[i6 >> 2] | 0;
    i11 = i8;
    i8 = i11 + ~(i11 << 15) | 0;
    i11 = (i8 >>> 10 ^ i8) * 9 & -1;
    i8 = i11 >>> 6 ^ i11;
    i11 = i8 + ~(i8 << 11) | 0;
    i8 = i11 >>> 16 ^ i11;
    L10 : do {
     if ((i10 | 0) == 0) {
      i12 = 0;
     } else {
      i11 = i8 & i9;
      i13 = i10 + (i11 << 3) | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      if ((i14 | 0) == (i7 | 0)) {
       i15 = i13;
      } else {
       i13 = (i8 >>> 23) + ~i8 | 0;
       i16 = i13 << 12 ^ i13;
       i13 = i16 >>> 7 ^ i16;
       i16 = i13 << 2 ^ i13;
       i13 = i16 >>> 20 ^ i16 | 1;
       i16 = 0;
       i17 = i11;
       i11 = i14;
       while (1) {
        if ((i11 | 0) == 0) {
         i12 = 0;
         break L10;
        }
        i14 = (i16 | 0) == 0 ? i13 : i16;
        i18 = i14 + i17 & i9;
        i19 = i10 + (i18 << 3) | 0;
        i20 = HEAP32[i19 >> 2] | 0;
        if ((i20 | 0) == (i7 | 0)) {
         i15 = i19;
         break;
        } else {
         i16 = i14;
         i17 = i18;
         i11 = i20;
        }
       }
      }
      if ((i15 | 0) == 0) {
       i12 = 0;
       break;
      }
      i12 = HEAP32[i15 + 4 >> 2] | 0;
     }
    } while (0);
    __ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i12, i1) | 0;
    i7 = (i5 | 0) == 0;
    if (!i7) {
     i10 = i5 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    }
    i10 = i4 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN7WebCore11CounterNodeD1Ev(i4);
     __ZN3WTF8fastFreeEPv(i4);
    } else {
     HEAP32[i10 >> 2] = i9;
    }
    if (i7) {
     break L1;
    } else {
     i4 = i5;
    }
   }
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11CounterNode11removeChildEPS0_(i1, i2);
 return;
}
function __ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i9 = i1 + 12 | 0;
 i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i2;
 i9 = HEAP32[i6 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = (i9 | 0) / 2 & -1;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i9 | 0) != 0) {
  i2 = 0;
  while (1) {
   i5 = i10 + (i2 << 3) | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i4, i5) | 0;
   }
   i2 = i2 + 1 | 0;
   if ((i2 | 0) == (i9 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i10, i9);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 20 | 0;
 if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i3 = 0;
 }
 i4 = __ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv(i3 | 0) | 0;
 L4 : do {
  if ((i4 | 0) != 0) {
   i3 = i4;
   while (1) {
    if ((HEAP32[i3 + 12 >> 2] & 4 | 0) != 0) {
     i5 = i3;
     break;
    }
    i3 = __ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv(i3) | 0;
    if ((i3 | 0) == 0) {
     break L4;
    }
   }
   while (1) {
    i6 = (HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0;
    i7 = i5 + 32 | 0;
    if (i6) {
     i8 = i7 | 0;
    } else {
     i8 = HEAP32[i7 >> 2] | 0;
    }
    if ((HEAP32[i8 >> 2] | 0) != 0) {
     break;
    }
    i3 = __ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv(i5) | 0;
    if ((i3 | 0) == 0) {
     break L4;
    } else {
     i9 = i3;
    }
    while (1) {
     if ((HEAP32[i9 + 12 >> 2] & 4 | 0) != 0) {
      break;
     }
     i3 = __ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv(i9) | 0;
     if ((i3 | 0) == 0) {
      break L4;
     } else {
      i9 = i3;
     }
    }
    if ((i9 | 0) == 0) {
     break L4;
    } else {
     i5 = i9;
    }
   }
   if (i6) {
    i10 = i7 | 0;
   } else {
    i10 = HEAP32[i7 >> 2] | 0;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 | 0;
   return i12 | 0;
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 & 128 | 0) == 0) {
  i13 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i13 = 0;
 }
 if ((HEAP32[i13 + 12 >> 2] & 1048580 | 0) == 1048580) {
  i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 232 >> 2] & 255](i13) | 0) != 0;
  i14 = i7;
  i15 = HEAP32[i2 >> 2] | 0;
 } else {
  i14 = 0;
  i15 = i10;
 }
 if ((i15 & 128 | 0) == 0) {
  i16 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i16 = 0;
 }
 do {
  if (i14) {
   i1 = HEAP32[i16 + 52 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i11 = 0;
   } else {
    i17 = i1;
    break;
   }
   i12 = i11 | 0;
   return i12 | 0;
  } else {
   i1 = HEAP32[i16 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i11 = 0;
    i12 = i11 | 0;
    return i12 | 0;
   }
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i11 = 0;
   } else {
    i17 = i1;
    break;
   }
   i12 = i11 | 0;
   return i12 | 0;
  }
 } while (0);
 i16 = i17 + 32 | 0;
 if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
  i18 = i16 | 0;
 } else {
  i18 = HEAP32[i16 >> 2] | 0;
 }
 i11 = HEAP32[i18 >> 2] | 0;
 i12 = i11 | 0;
 return i12 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11CounterNodeD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = i16 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i15;
 i15 = i2 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringENS_12AtomicStringEEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i5 + 4 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringENS_12AtomicStringEEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = HEAP32[i1 + 4 >> 2] << 3 | 0;
   i8 = i7;
   i9 = i7;
  } else {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   i12 = i11 >>> 7;
   i13 = (i11 >>> 30) + ~i12 | 0;
   i11 = i13 << 12 ^ i13;
   i13 = i11 >>> 7 ^ i11;
   i11 = i13 << 2 ^ i13;
   i13 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i12 = 0;
   while (1) {
    i14 = i11 & i7;
    i15 = i6 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if ((i16 | 0) == (i10 | 0)) {
      i18 = 7;
      break;
     }
    }
    i16 = (i12 | 0) == 0 ? i13 : i12;
    i11 = i16 + i14 | 0;
    i12 = i16;
   }
   do {
    if ((i18 | 0) == 7) {
     if ((i15 | 0) == 0) {
      break;
     }
     i8 = i15;
     i9 = i6 + (HEAP32[i1 + 4 >> 2] << 3) | 0;
     break L1;
    }
   } while (0);
   i12 = i6 + (HEAP32[i1 + 4 >> 2] << 3) | 0;
   i8 = i12;
   i9 = i12;
  }
 } while (0);
 HEAP32[i4 >> 2] = i8;
 HEAP32[i4 + 4 >> 2] = i9;
 i9 = __ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i1, i5) | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN3WTF12StringAppendINS_6StringENS_12AtomicStringEE7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
     i7 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i8 = 0;
     }
     while (1) {
      HEAP16[i2 + (i8 << 1) >> 1] = HEAP16[i7 + (i8 << 1) >> 1] | 0;
      i8 = i8 + 1 | 0;
      if (i8 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i7 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i9 = 0;
     }
     while (1) {
      HEAP16[i2 + (i9 << 1) >> 1] = HEAPU8[i7 + i9 | 0] | 0;
      i9 = i9 + 1 | 0;
      if (i9 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = HEAP32[i6 + 4 >> 2] | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i10 = 0;
  }
  while (1) {
   HEAP16[i2 + (i10 + i5 << 1) >> 1] = HEAP16[i9 + (i10 << 1) >> 1] | 0;
   i10 = i10 + 1 | 0;
   if (i10 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i10 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i11 = 0;
  }
  while (1) {
   HEAP16[i2 + (i11 + i5 << 1) >> 1] = HEAPU8[i10 + i11 | 0] | 0;
   i11 = i11 + 1 | 0;
   if (i11 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTFplINS_6StringENS_12AtomicStringES1_EENS_12StringAppendINS3_IT_T0_EET1_EERKS6_S7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = (i6 | 0) == 0;
 if (!i2) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = (i7 | 0) == 0;
 if (!i3) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 if (!i2) {
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 do {
  if (!i3) {
   i1 = i7 | 0;
   i8 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i8 + 2;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i7 = i6 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore11CounterNodeD1Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i8 = i6 | 0;
    i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i8 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore13RenderCounterD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore11CounterNode14removeRendererEPNS_13RenderCounterE(i2, i1);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 }
}
function __ZN7WebCore13RenderCounterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore11CounterNode14removeRendererEPNS_13RenderCounterE(i2, i1);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore10RenderTextD2Ev(i5);
  return;
 }
}
function __ZN7WebCore13RenderCounterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore11CounterNode14removeRendererEPNS_13RenderCounterE(i2, i1);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10RenderTextD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13RenderCounterC2ERNS_8DocumentERKNS_14CounterContentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE(i1 | 0, i2, __ZN3WTF11emptyStringEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 56 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 4 >> 2];
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 i3 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 220 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore13RenderCounterC1ERNS_8DocumentERKNS_14CounterContentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE(i1 | 0, i2, __ZN3WTF11emptyStringEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 56 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 4 >> 2];
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 72 >> 2] = 0;
 i3 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 220 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore13RenderCounter10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore11CounterNode14removeRendererEPNS_13RenderCounterE(HEAP32[i1 + 68 >> 2] | 0, i1);
 i2 = i1 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i3 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
   if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
 return;
}
function __ZN7WebCore13RenderCounter23rendererRemovedFromTreeERNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 220 >> 2] | 0) == 0) {
  return;
 }
 i2 = __ZNK7WebCore12RenderObject13lastLeafChildEv(i1) | 0;
 i3 = (i2 | 0) == 0 ? i1 : i2;
 __ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE(i3);
 if ((i3 | 0) == (i1 | 0)) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i4 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i4) | 0;
  __ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE(i4);
  if ((i4 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13RenderCounter29computePreferredLogicalWidthsEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 __ZNK7WebCore13RenderCounter12originalTextEv(i4, i1);
 __ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE(i5, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10RenderText29computePreferredLogicalWidthsEf(i5, d2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13RenderCounter13updateCounterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 __ZNK7WebCore13RenderCounter12originalTextEv(i3, i1);
 __ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE(i4, i3);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10RenderText29computePreferredLogicalWidthsEf(i4, +0);
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
function fiiiifii___ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE__wrapper(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0);
}
function fiiifiii___ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE__wrapper(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0, i6 | 0, i7 | 0);
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
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore13RenderCounter15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 220 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 __ZN7WebCore10RenderText15willBeDestroyedEv(i1 | 0);
 return;
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return 0;
}
function viii___ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_fiiiifii(i1, i2, i3, i4, i5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiiifii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0);
}
function dynCall_fiiifiii(i1, i2, i3, i4, d5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiifiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0, i8 | 0);
}
function viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function vii___ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZN7WebCore10RenderText7setTextERKN3WTF6StringEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK7WebCore10RenderText14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore10RenderText16linesBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10RenderText16linesBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore10RenderText10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b4(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(4);
 return +0;
}
function b1(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
 return +0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText17previousCharacterEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText17previousCharacterEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i1 | 0);
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore10RenderText14isTextFragmentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14isTextFragmentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject16insertedIntoTreeEv(i1 | 0);
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZNK7WebCore10RenderText6lengthEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0;
}
function v___ZNK7WebCore12RenderObject14localTransformEv__wrapper() {
 __ZNK7WebCore12RenderObject14localTransformEv();
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 3](i2 | 0, +d3);
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function v___ZN7WebCore10RenderText13createTextBoxEv__wrapper() {
 __ZN7WebCore10RenderText13createTextBoxEv();
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13RenderCounter10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 24 | 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13RenderCounter9isCounterEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
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
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
}
function b10() {
 abort(10);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_fiiiifii = [b1,b1,fiiiifii___ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE__wrapper,b1];
  var FUNCTION_TABLE_vif = [b2,b2,__ZN7WebCore13RenderCounter29computePreferredLogicalWidthsEf,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b3,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b3,viiiii___ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b3];
  var FUNCTION_TABLE_fiiifiii = [b4,b4,fiiifiii___ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE__wrapper,b4];
  var FUNCTION_TABLE_vi = [b5,b5,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b5,__ZN7WebCore12RenderObject17updateFromElementEv,b5,__ZN7WebCore13RenderCounterD2Ev,b5,__ZN7WebCore13RenderCounter15willBeDestroyedEv,b5,vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper,b5,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b5,__ZN7WebCore13RenderCounterD0Ev,b5,vi___ZN7WebCore12RenderObject21willBeRemovedFromTreeEv__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_vii = [b6,b6,vii___ZNK7WebCore10RenderText16linesBoundingBoxEv__wrapper,b6,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,vii___ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b6,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b6,__ZNK7WebCore13RenderCounter12originalTextEv,b6,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b6,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b6,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b6,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b6,vii___ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE__wrapper,b6,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiiiiii = [b7,b7,__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b7];
  var FUNCTION_TABLE_ii = [b8,b8,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b8,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b8,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b8,__ZNK7WebCore13RenderCounter10renderNameEv,b8,__ZNK7WebCore12RenderObject10isRubyTextEv,b8,__ZNK7WebCore12RenderObject6isRubyEv,b8,__ZNK7WebCore12RenderObject7isImageEv,b8,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b8,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b8,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b8,__ZNK7WebCore12RenderObject8isWidgetEv,b8,__ZNK7WebCore12RenderObject11isTextFieldEv,b8,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b8,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper
  ,b8,__ZNK7WebCore12RenderObject9isSVGRootEv,b8,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b8,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b8,__ZNK7WebCore12RenderObject7isMeterEv,b8,__ZNK7WebCore12RenderObject14isSVGContainerEv,b8,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b8,__ZNK7WebCore10RenderText18canBeSelectionLeafEv,b8,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b8,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b8,__ZNK7WebCore12RenderObject7isQuoteEv,b8,__ZNK7WebCore12RenderObject10isListItemEv,b8,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b8,__ZNK7WebCore12RenderObject10isSVGImageEv,b8,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b8,__ZNK7WebCore12RenderObject15isDetailsMarkerEv
  ,b8,__ZNK7WebCore12RenderObject13lastChildSlowEv,b8,__ZNK7WebCore12RenderObject16isRenderTableColEv,b8,__ZNK7WebCore12RenderObject7isVideoEv,b8,__ZNK7WebCore12RenderObject10isProgressEv,b8,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b8,__ZNK7WebCore12RenderObject13isCombineTextEv,b8,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b8,__ZNK7WebCore12RenderObject5isWBREv,b8,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b8,__ZNK7WebCore10RenderText15canHaveChildrenEv,b8,__ZNK7WebCore12RenderObject7isFrameEv,b8,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b8,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b8,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b8,__ZNK7WebCore12RenderObject9isReplicaEv
  ,b8,__ZNK7WebCore13RenderCounter9isCounterEv,b8,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b8,ii___ZNK7WebCore10RenderText17previousCharacterEv__wrapper,b8,__ZNK7WebCore12RenderObject7isMediaEv,b8,__ZNK7WebCore12RenderObject10isSVGShapeEv,b8,__ZNK7WebCore12RenderObject14isRenderButtonEv,b8,__ZNK7WebCore12RenderObject11isSVGInlineEv,b8,__ZNK7WebCore12RenderObject10isRubyBaseEv,b8,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b8,__ZNK7WebCore12RenderObject8isCanvasEv,b8,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b8,__ZNK7WebCore12RenderObject10isMenuListEv,b8,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b8,__ZNK7WebCore12RenderObject14isTableCaptionEv,b8,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv
  ,b8,__ZNK7WebCore12RenderObject13isSliderThumbEv,b8,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b8,__ZNK7WebCore12RenderObject13isTextControlEv,b8,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b8,__ZNK7WebCore12RenderObject9isSVGTextEv,b8,__ZNK7WebCore12RenderObject10isTextAreaEv,b8,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b8,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b8,__ZNK7WebCore12RenderObject11isTableCellEv,b8,__ZNK7WebCore12RenderObject14firstChildSlowEv,b8,__ZNK7WebCore12RenderObject12isRenderGridEv,b8,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b8,__ZNK7WebCore12RenderObject9isListBoxEv,b8,__ZNK7WebCore12RenderObject9isSVGPathEv,b8,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv
  ,b8,__ZNK7WebCore12RenderObject13isRenderImageEv,b8,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b8,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b8,ii___ZNK7WebCore10RenderText14caretMinOffsetEv__wrapper,b8,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b8,__ZNK7WebCore12RenderObject10isTableRowEv,b8,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b8,__ZNK7WebCore12RenderObject10isFrameSetEv,b8,__ZNK7WebCore10RenderText6lengthEv,b8,__ZNK7WebCore12RenderObject10isFieldsetEv,b8,__ZNK7WebCore12RenderObject8isSliderEv,b8,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b8,ii___ZNK7WebCore10RenderText14caretMaxOffsetEv__wrapper,b8,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b8,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper
  ,b8,ii___ZNK7WebCore10RenderText14isTextFragmentEv__wrapper,b8,__ZNK7WebCore12RenderObject9isRubyRunEv,b8,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b8,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b8,__ZNK7WebCore12RenderObject14isRenderRegionEv,b8,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b8,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b8,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b8,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b8,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b8,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b8,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b8,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b8,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b8,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv
  ,b8,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b8,__ZNK7WebCore12RenderObject19virtualContinuationEv,b8,__ZNK7WebCore12RenderObject12isListMarkerEv,b8,__ZNK7WebCore12RenderObject7isEmptyEv,b8,__ZNK7WebCore12RenderObject7isTableEv,b8,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b8,__ZNK7WebCore12RenderObject14isTableSectionEv,b8,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viii = [b9,b9,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b9,viii___ZN7WebCore10RenderText7setTextERKN3WTF6StringEb__wrapper,b9,viii___ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b9,viii___ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b9,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b9,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b9,viii___ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE__wrapper,b9,viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b9,viii___ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b9,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b9,__ZN7WebCore13RenderCounterC2ERNS_8DocumentERKNS_14CounterContentE,b9,viii___ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE__wrapper,b9,b9,b9,b9
  ,b9,b9,b9];
  var FUNCTION_TABLE_v = [b10,b10,v___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b10,v___ZN7WebCore10RenderText13createTextBoxEv__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b11,iii___ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi__wrapper,b11,iii___ZNK7WebCore10RenderText10nextOffsetEi__wrapper,b11,iii___ZNK7WebCore10RenderText14previousOffsetEi__wrapper,b11,b11,b11,b11,b11,b11,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b13,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b13,viiii___ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper,b13,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b13,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b13,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_fiiiifii: dynCall_fiiiifii, dynCall_vif: dynCall_vif, dynCall_viiiii: dynCall_viiiii, dynCall_fiiifiii: dynCall_fiiifiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_fiiiifii": invoke_fiiiifii, "invoke_vif": invoke_vif, "invoke_viiiii": invoke_viiiii, "invoke_fiiifiii": invoke_fiiifiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7menuTagE": __ZN7WebCore9HTMLNames7menuTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames6dirTagE": __ZN7WebCore9HTMLNames6dirTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fiiiifii = Module["dynCall_fiiiifii"] = asm["dynCall_fiiiifii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_fiiifiii = Module["dynCall_fiiifiii"] = asm["dynCall_fiiifiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore13RenderCounter10renderNameEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK3WTF12StringAppendINS0_INS_6StringENS_12AtomicStringEEES1_EcvS1_Ev","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore10RenderText18canBeSelectionLeafEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore13RenderCounter19destroyCounterNodesEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCoreL14nextInPreOrderEPKNS_13RenderElementEPKNS_7ElementEb","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZN7WebCore13RenderCounter13updateCounterEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZN7WebCore13RenderCounterD2Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore13RenderCounter15willBeDestroyedEv","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore11CounterNodeEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i","__ZNK7WebCore12RenderObject13lastChildSlowEv","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore13RenderCounter12originalTextEv","__ZN7WebCore13RenderCounter23rendererSubtreeAttachedEPNS_12RenderObjectE","__ZN7WebCore13RenderCounter20rendererStyleChangedEPNS_12RenderObjectEPKNS_11RenderStyleES5_","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore13RenderCounterC2ERNS_8DocumentERKNS_14CounterContentE","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZN3WTF12StringAppendINS_6StringENS_12AtomicStringEE7writeToEPt","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore10RenderText15canHaveChildrenEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E3addINS_17HashMapTranslatorISQ_SM_EES4_NS_10PassOwnPtrISG_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SI_SK_SM_SQ_SN_EEEEOT0_OT1_","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringENS_12AtomicStringEEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCoreL15makeCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringEb","__ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCoreL35destroyCounterNodeWithoutMapRemovalERKN3WTF12AtomicStringEPNS_11CounterNodeE","__ZN7WebCoreL23previousSiblingOrParentEPKNS_12RenderObjectE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashMapINS_12AtomicStringENS_6RefPtrINS1_11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS8_EENSD_ISB_EEEEEEEENS_24KeyValuePairKeyExtractorISI_EENS_7PtrHashIS4_EENS7_IS4_SH_SM_NSD_IS4_EENSD_ISH_EEE18KeyValuePairTraitsESN_E6rehashEiPSI_","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject14firstChildSlowEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore13RenderCounterD0Ev","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN3WTFplINS_6StringENS_12AtomicStringES1_EENS_12StringAppendINS3_IT_T0_EET1_EERKS6_S7_","__ZN7WebCore13RenderCounter10invalidateEv","_strlen","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZN7WebCoreL19findPlaceForCounterEPNS_12RenderObjectERKN3WTF12AtomicStringEbRNS2_6RefPtrINS_11CounterNodeEEES9_","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore10RenderText6lengthEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore13RenderCounter9isCounterEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore13RenderCounter18destroyCounterNodeEPNS_12RenderObjectERKN3WTF12AtomicStringE","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZN3WTF7HashMapINS_12AtomicStringENS_6RefPtrIN7WebCore11CounterNodeEEENS_16AtomicStringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZN7WebCore13RenderCounter23rendererRemovedFromTreeERNS_12RenderObjectE","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","_memcpy","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZN7WebCore13RenderCounter29computePreferredLogicalWidthsEf","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv"]

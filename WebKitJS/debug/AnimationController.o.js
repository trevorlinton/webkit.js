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
H_BASE = parentModule["_malloc"](32 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 32;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26AnimationControllerPrivateC1ERNS_5FrameE;
var __ZN7WebCore26AnimationControllerPrivateD1Ev;
var __ZN7WebCore19AnimationControllerC1ERNS_5FrameE;
var __ZN7WebCore19AnimationControllerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZTVN7WebCore5TimerINS_26AnimationControllerPrivateEEE=(H_BASE+8)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore26AnimationControllerPrivate24fireEventsAndUpdateStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 136 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i1 + 148 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (i11) {
  i12 = (HEAP32[i1 + 160 >> 2] | 0) != 0;
 } else {
  i12 = 1;
 }
 HEAP32[i3 + 8 >> 2] = i10;
 HEAP32[i9 >> 2] = 0;
 i9 = i1 + 140 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i3 >> 2] = i13;
 HEAP32[i9 >> 2] = 0;
 i9 = i1 + 144 | 0;
 HEAP32[i3 + 4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = 0;
 i9 = i13 + (i10 * 24 & -1) | 0;
 if (!i11) {
  i11 = i4 | 0;
  i10 = i5 | 0;
  i14 = i6 | 0;
  i15 = i13;
  while (1) {
   i13 = HEAP32[i15 >> 2] | 0;
   i16 = i15 + 4 | 0;
   i17 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i18 = i13 | 0;
   i19 = HEAP32[i13 >> 2] | 0;
   i20 = HEAP32[i19 + 32 >> 2] | 0;
   i21 = i15 + 8 | 0;
   d22 = +HEAPF64[i15 + 16 >> 3];
   do {
    if ((HEAP32[i16 >> 2] | 0) == (HEAP32[i17 + 620 >> 2] | 0)) {
     if ((HEAP32[i13 + 12 >> 2] & 1048580 | 0) == 1048580) {
      i23 = FUNCTION_TABLE_ii[HEAP32[i19 + 232 >> 2] & 1](i18) | 0;
     } else {
      i23 = 0;
     }
     __ZN7WebCore13PseudoElement26pseudoElementNameForEventsENS_8PseudoIdE(i5, i23);
     i24 = __ZN3WTF10fastMallocEj(72) | 0;
     __ZN7WebCore15TransitionEventC1ERKN3WTF12AtomicStringERKNS1_6StringEdS7_(i24, i16, i21, d22, i5);
     HEAP32[i11 >> 2] = i24;
     FUNCTION_TABLE_iii[i20 & 1](i18, i4) | 0;
     i24 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i25 = i24 + 8 | 0;
       i26 = i25 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i27 | 0) != 0) {
        HEAP32[i26 >> 2] = i27;
        break;
       }
       i27 = i25 - 8 | 0;
       if ((i27 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 15](i27);
      }
     } while (0);
     i24 = HEAP32[i10 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i27 = i24 | 0;
     i25 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i27 >> 2] = i25;
      break;
     }
    } else {
     i25 = __ZN3WTF10fastMallocEj(64) | 0;
     __ZN7WebCore20WebKitAnimationEventC1ERKN3WTF12AtomicStringERKNS1_6StringEd(i25, i16, i21, d22);
     HEAP32[i14 >> 2] = i25;
     FUNCTION_TABLE_iii[i20 & 1](i18, i6) | 0;
     i25 = HEAP32[i14 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i27 = i25 + 8 | 0;
     i25 = i27 | 0;
     i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i25 >> 2] = i24;
      break;
     }
     i24 = i27 - 8 | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 15](i24);
    }
   } while (0);
   i15 = i15 + 24 | 0;
   if ((i15 | 0) == (i9 | 0)) {
    break;
   }
  }
 }
 i9 = i1 + 152 | 0;
 i15 = i1 + 160 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 L32 : do {
  if ((i14 | 0) != 0) {
   i6 = i9 | 0;
   i10 = 0;
   i11 = i14;
   while (1) {
    if (i11 >>> 0 <= i10 >>> 0) {
     break;
    }
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(HEAP32[(HEAP32[i6 >> 2] | 0) + (i10 << 2) >> 2] | 0, 49152);
    i4 = i10 + 1 | 0;
    if (i4 >>> 0 >= i14 >>> 0) {
     break L32;
    }
    i10 = i4;
    i11 = HEAP32[i15 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i14 = i1 + 156 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) != 0) {
   i1 = HEAP32[i15 >> 2] | 0;
   i11 = i9 | 0;
   if ((i1 | 0) != 0) {
    i10 = HEAP32[i11 >> 2] | 0;
    i6 = i10 + (i1 << 2) | 0;
    i1 = i10;
    while (1) {
     i10 = (HEAP32[i1 >> 2] | 0) + 8 | 0;
     i4 = i10 - 8 | 0;
     i5 = i10 | 0;
     i23 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i23;
     do {
      if ((i23 | 0) < 1) {
       if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i4);
      }
     } while (0);
     i1 = i1 + 4 | 0;
     if ((i1 | 0) == (i6 | 0)) {
      break;
     }
    }
    HEAP32[i15 >> 2] = 0;
   }
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i14 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 if (i12) {
  __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0);
 }
 __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEED1Ev(i3);
 i3 = i8 + 4 | 0;
 i8 = i3 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i8 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
 i7 = i3 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate28suspendAnimationsForDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, i27 = 0, i28 = 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 3) | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i10 = 28;
  } else {
   L3 : do {
    if ((i8 | 0) == 0) {
     i11 = i6;
     i10 = 5;
    } else {
     i12 = i6;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       i10 = 5;
       break L3;
      }
      i13 = i12 + 8 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       i14 = i6;
       i15 = i8;
       i16 = i4;
       break;
      } else {
       i12 = i13;
      }
     }
    }
   } while (0);
   do {
    if ((i10 | 0) == 5) {
     if ((i11 | 0) == (i9 | 0)) {
      i14 = i6;
      i15 = i8;
      i16 = i4;
      break;
     } else {
      i17 = i11;
     }
     L9 : while (1) {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
       __ZN7WebCore18CompositeAnimation17suspendAnimationsEv(HEAP32[i17 + 4 >> 2] | 0);
      }
      i12 = i17 + 8 | 0;
      if ((i12 | 0) == (i9 | 0)) {
       break;
      } else {
       i18 = i12;
      }
      while (1) {
       i12 = HEAP32[i18 >> 2] | 0;
       if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
        break;
       }
       i12 = i18 + 8 | 0;
       if ((i12 | 0) == (i9 | 0)) {
        break L9;
       } else {
        i18 = i12;
       }
      }
      if ((i18 | 0) == (i9 | 0)) {
       break;
      } else {
       i17 = i18;
      }
     }
     i14 = HEAP32[i5 >> 2] | 0;
     i15 = HEAP32[i7 >> 2] | 0;
     i16 = HEAP32[i3 >> 2] | 0;
    }
   } while (0);
   i12 = i14 + (i15 << 3) | 0;
   if ((i16 | 0) == 0) {
    i10 = 28;
    break;
   }
   L21 : do {
    if ((i15 | 0) == 0) {
     i19 = i14;
    } else {
     i13 = i14;
     while (1) {
      i20 = HEAP32[i13 >> 2] | 0;
      if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
       i19 = i13;
       break L21;
      }
      i20 = i13 + 8 | 0;
      if ((i20 | 0) == (i12 | 0)) {
       i10 = 28;
       break L1;
      } else {
       i13 = i20;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i12 | 0)) {
    i10 = 28;
    break;
   } else {
    i21 = i19;
    d22 = +-1;
   }
   L26 : while (1) {
    i13 = HEAP32[i21 + 4 >> 2] | 0;
    do {
     if ((HEAP8[i13 + 60 | 0] & 1) == 0) {
      if ((HEAP32[i13 + 20 >> 2] | 0) == 0) {
       if ((HEAP32[i13 + 40 >> 2] | 0) == 0) {
        d23 = d22;
        break;
       }
      }
      d24 = +__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i13);
      if (d24 != +-1) {
       d25 = d24 < d22 | d22 == +-1 ? d24 : d22;
      } else {
       d25 = d22;
      }
      if (d25 != +0) {
       d23 = d25;
      } else {
       d26 = d25;
       break L26;
      }
     } else {
      d23 = d22;
     }
    } while (0);
    i13 = i21 + 8 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     d26 = d23;
     break;
    } else {
     i27 = i13;
    }
    while (1) {
     i13 = HEAP32[i27 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i27 + 8 | 0;
     if ((i13 | 0) == (i12 | 0)) {
      d26 = d23;
      break L26;
     } else {
      i27 = i13;
     }
    }
    if ((i27 | 0) == (i12 | 0)) {
     d26 = d23;
     break;
    } else {
     i21 = i27;
     d22 = d23;
    }
   }
   if (d26 != +0) {
    i12 = i1 + 24 | 0;
    if (d26 < +0) {
     i28 = i12;
     break;
    }
    __ZN7WebCore9TimerBase5startEdd(i12, d26, +0);
    return;
   }
   i12 = i1 + 24 | 0;
   do {
    if (+HEAPF64[i1 + 32 >> 3] != +0) {
     if (+HEAPF64[i1 + 48 >> 3] == +0) {
      break;
     }
     return;
    }
   } while (0);
   __ZN7WebCore9TimerBase5startEdd(i12, +.025, +.025);
   return;
  }
 } while (0);
 if ((i10 | 0) == 28) {
  i28 = i1 + 24 | 0;
 }
 if (+HEAPF64[i1 + 32 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i28);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, i27 = 0, i28 = 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 3) | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i10 = 28;
  } else {
   L3 : do {
    if ((i8 | 0) == 0) {
     i11 = i6;
     i10 = 5;
    } else {
     i12 = i6;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       i10 = 5;
       break L3;
      }
      i13 = i12 + 8 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       i14 = i6;
       i15 = i8;
       i16 = i4;
       break;
      } else {
       i12 = i13;
      }
     }
    }
   } while (0);
   do {
    if ((i10 | 0) == 5) {
     if ((i11 | 0) == (i9 | 0)) {
      i14 = i6;
      i15 = i8;
      i16 = i4;
      break;
     } else {
      i17 = i11;
     }
     L9 : while (1) {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
       __ZN7WebCore18CompositeAnimation16resumeAnimationsEv(HEAP32[i17 + 4 >> 2] | 0);
      }
      i12 = i17 + 8 | 0;
      if ((i12 | 0) == (i9 | 0)) {
       break;
      } else {
       i18 = i12;
      }
      while (1) {
       i12 = HEAP32[i18 >> 2] | 0;
       if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
        break;
       }
       i12 = i18 + 8 | 0;
       if ((i12 | 0) == (i9 | 0)) {
        break L9;
       } else {
        i18 = i12;
       }
      }
      if ((i18 | 0) == (i9 | 0)) {
       break;
      } else {
       i17 = i18;
      }
     }
     i14 = HEAP32[i5 >> 2] | 0;
     i15 = HEAP32[i7 >> 2] | 0;
     i16 = HEAP32[i3 >> 2] | 0;
    }
   } while (0);
   i12 = i14 + (i15 << 3) | 0;
   if ((i16 | 0) == 0) {
    i10 = 28;
    break;
   }
   L21 : do {
    if ((i15 | 0) == 0) {
     i19 = i14;
    } else {
     i13 = i14;
     while (1) {
      i20 = HEAP32[i13 >> 2] | 0;
      if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
       i19 = i13;
       break L21;
      }
      i20 = i13 + 8 | 0;
      if ((i20 | 0) == (i12 | 0)) {
       i10 = 28;
       break L1;
      } else {
       i13 = i20;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i12 | 0)) {
    i10 = 28;
    break;
   } else {
    i21 = i19;
    d22 = +-1;
   }
   L26 : while (1) {
    i13 = HEAP32[i21 + 4 >> 2] | 0;
    do {
     if ((HEAP8[i13 + 60 | 0] & 1) == 0) {
      if ((HEAP32[i13 + 20 >> 2] | 0) == 0) {
       if ((HEAP32[i13 + 40 >> 2] | 0) == 0) {
        d23 = d22;
        break;
       }
      }
      d24 = +__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i13);
      if (d24 != +-1) {
       d25 = d24 < d22 | d22 == +-1 ? d24 : d22;
      } else {
       d25 = d22;
      }
      if (d25 != +0) {
       d23 = d25;
      } else {
       d26 = d25;
       break L26;
      }
     } else {
      d23 = d22;
     }
    } while (0);
    i13 = i21 + 8 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     d26 = d23;
     break;
    } else {
     i27 = i13;
    }
    while (1) {
     i13 = HEAP32[i27 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i27 + 8 | 0;
     if ((i13 | 0) == (i12 | 0)) {
      d26 = d23;
      break L26;
     } else {
      i27 = i13;
     }
    }
    if ((i27 | 0) == (i12 | 0)) {
     d26 = d23;
     break;
    } else {
     i21 = i27;
     d22 = d23;
    }
   }
   if (d26 != +0) {
    i12 = i1 + 24 | 0;
    if (d26 < +0) {
     i28 = i12;
     break;
    }
    __ZN7WebCore9TimerBase5startEdd(i12, d26, +0);
    return;
   }
   i12 = i1 + 24 | 0;
   do {
    if (+HEAPF64[i1 + 32 >> 3] != +0) {
     if (+HEAPF64[i1 + 48 >> 3] == +0) {
      break;
     }
     return;
    }
   } while (0);
   __ZN7WebCore9TimerBase5startEdd(i12, +.025, +.025);
   return;
  }
 } while (0);
 if ((i10 | 0) == 28) {
  i28 = i1 + 24 | 0;
 }
 if (+HEAPF64[i1 + 32 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i28);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = i3 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore18CompositeAnimationD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i13 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i21 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i21;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i13 << 1;
   i28 = (i21 * 6 & -1 | 0) < (i7 | 0) ? i13 : i7;
  }
  i7 = __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, d21 = +0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  d6 = +-1;
  return +d6;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i7 = i3;
  } else {
   i8 = i3;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i7 = i8;
     break L4;
    }
    i9 = i8 + 8 | 0;
    if ((i9 | 0) == (i5 | 0)) {
     d6 = +-1;
     break;
    } else {
     i8 = i9;
    }
   }
   return +d6;
  }
 } while (0);
 if ((i7 | 0) == (i5 | 0)) {
  d6 = +-1;
  return +d6;
 }
 if ((i2 | 0) == 1) {
  i10 = i7;
  i11 = 0;
  d12 = +-1;
 } else {
  i2 = i7;
  d13 = +-1;
  L14 : while (1) {
   i7 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP8[i7 + 60 | 0] & 1) == 0) {
     if ((HEAP32[i7 + 20 >> 2] | 0) == 0) {
      if ((HEAP32[i7 + 40 >> 2] | 0) == 0) {
       d14 = d13;
       break;
      }
     }
     d15 = +__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i7);
     if (d15 != +-1) {
      d16 = d15 < d13 | d13 == +-1 ? d15 : d13;
     } else {
      d16 = d13;
     }
     if (d16 != +0) {
      d14 = d16;
     } else {
      d6 = d16;
      i17 = 34;
      break L14;
     }
    } else {
     d14 = d13;
    }
   } while (0);
   i7 = i2 + 8 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    d6 = d14;
    i17 = 35;
    break;
   } else {
    i18 = i7;
   }
   while (1) {
    i7 = HEAP32[i18 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     break;
    }
    i7 = i18 + 8 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     d6 = d14;
     i17 = 41;
     break L14;
    } else {
     i18 = i7;
    }
   }
   if ((i18 | 0) == (i5 | 0)) {
    d6 = d14;
    i17 = 40;
    break;
   } else {
    i2 = i18;
    d13 = d14;
   }
  }
  if ((i17 | 0) == 34) {
   return +d6;
  } else if ((i17 | 0) == 35) {
   return +d6;
  } else if ((i17 | 0) == 40) {
   return +d6;
  } else if ((i17 | 0) == 41) {
   return +d6;
  }
 }
 L34 : while (1) {
  i18 = HEAP32[i10 + 4 >> 2] | 0;
  do {
   if ((HEAP8[i18 + 60 | 0] & 1) == 0) {
    if ((HEAP32[i18 + 20 >> 2] | 0) == 0) {
     if ((HEAP32[i18 + 40 >> 2] | 0) == 0) {
      d19 = d12;
      i20 = i11;
      break;
     }
    }
    d14 = +__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i18);
    if (d14 != +-1) {
     d21 = d14 < d12 | d12 == +-1 ? d14 : d12;
    } else {
     d21 = d12;
    }
    if (d21 != +0) {
     d19 = d21;
     i20 = i11;
     break;
    }
    i2 = HEAP32[i10 >> 2] | 0;
    if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
     i22 = HEAP32[i2 + 4 >> 2] | 0;
    } else {
     i22 = 0;
    }
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i22 | 0, 49152);
    d19 = d21;
    i20 = 1;
   } else {
    d19 = d12;
    i20 = i11;
   }
  } while (0);
  i18 = i10 + 8 | 0;
  if ((i18 | 0) == (i5 | 0)) {
   i17 = 19;
   break;
  } else {
   i23 = i18;
  }
  while (1) {
   i18 = HEAP32[i23 >> 2] | 0;
   if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
    break;
   }
   i18 = i23 + 8 | 0;
   if ((i18 | 0) == (i5 | 0)) {
    i17 = 19;
    break L34;
   } else {
    i23 = i18;
   }
  }
  if ((i23 | 0) == (i5 | 0)) {
   i17 = 31;
   break;
  } else {
   i10 = i23;
   i11 = i20;
   d12 = d19;
  }
 }
 do {
  if ((i17 | 0) == 19) {
   if (i20) {
    break;
   } else {
    d6 = d19;
   }
   return +d6;
  } else if ((i17 | 0) == 31) {
   if (i20) {
    break;
   } else {
    d6 = d19;
   }
   return +d6;
  }
 } while (0);
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 456 >> 2] | 0);
 d6 = d19;
 return +d6;
}
function __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore18CompositeAnimationD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore18CompositeAnimationD1Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 + 4 | 0;
   i10 = i4 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i10 >> 2] = i20;
    break;
   }
   i20 = i4 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 15](i20);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i20 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i20;
 i19 = i2 + 4 | 0;
 i4 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i10 = i4 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i10 | 0) ? i4 : i10;
  }
  i10 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i10;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore19AnimationController16updateAnimationsERNS_13RenderElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i8 + 1433 | 0] & 1) != 0) {
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP8[i3 + 24 | 0] | 0) < 0) {
   i9 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    i12 = 7;
    break;
   }
   i13 = HEAP32[i9 + 20 >> 2] | 0;
   if ((HEAP32[i13 + 108 >> 2] | 0) != 0) {
    i14 = i9;
    i15 = 1;
    break;
   }
   if ((HEAP32[i13 + 112 >> 2] | 0) == 0) {
    i10 = i9;
    i11 = 1;
    i12 = 7;
   } else {
    i14 = i9;
    i15 = 1;
   }
  } else {
   i10 = 0;
   i11 = 0;
   i12 = 7;
  }
 } while (0);
 do {
  if ((i12 | 0) == 7) {
   i9 = HEAP32[i4 >> 2] | 0;
   i13 = HEAP32[i9 + 20 >> 2] | 0;
   if ((HEAP32[i13 + 108 >> 2] | 0) != 0) {
    i14 = i10;
    i15 = i11;
    break;
   }
   if ((HEAP32[i13 + 112 >> 2] | 0) != 0) {
    i14 = i10;
    i15 = i11;
    break;
   }
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if (__ZNK7WebCore10RenderView8printingEv(HEAP32[i8 + 1584 >> 2] | 0) | 0) {
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i4 >> 2] | 0;
 i4 = i2 | 0;
 __ZN7WebCore18CompositeAnimation7animateERNS_13RenderElementEPNS_11RenderStyleERS3_(i6, __ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(HEAP32[i4 >> 2] | 0, i3) | 0, i3, i14, i8);
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) == 0) {
   if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 108 >> 2] | 0) != 0) {
    i12 = 16;
    break;
   }
   if (!i15) {
    break;
   }
   if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 108 >> 2] | 0) != 0) {
    i12 = 16;
   }
  } else {
   i12 = 16;
  }
 } while (0);
 if ((i12 | 0) == 16) {
  __ZN7WebCore26AnimationControllerPrivate31updateAnimationTimerForRendererEPNS_13RenderElementE(HEAP32[i4 >> 2] | 0, i3);
  __ZN7WebCore9FrameView17scheduleAnimationEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
 }
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == (i8 | 0)) {
   i16 = i8;
  } else {
   if ((HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    i16 = i6;
    break;
   }
   i3 = HEAP32[i6 + 20 >> 2] | 0;
   if (+HEAPF32[i3 + 4 >> 2] >= +1) {
    if ((HEAP32[(HEAP32[i3 + 72 >> 2] | 0) + 12 >> 2] | 0) == 0) {
     i16 = i6;
     break;
    }
   }
   __ZN7WebCore11RenderStyle9setZIndexEi(i6, 0);
   i16 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i16;
 i16 = i8 | 0;
 i1 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i16 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26AnimationControllerPrivateD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 200 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 180 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i9 = i5 + 4 | 0;
      i7 = i9 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = i8;
       break;
      }
      i8 = i9 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 160 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 152 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = (HEAP32[i3 >> 2] | 0) + 8 | 0;
   i8 = i5 - 8 | 0;
   i9 = i5 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   do {
    if ((i7 | 0) < 1) {
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 156 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEED1Ev(i1 + 140 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 80 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 | 0;
     i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore18CompositeAnimationD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i3 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore26AnimationControllerPrivateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 200 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 180 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i9 = i5 + 4 | 0;
      i7 = i9 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = i8;
       break;
      }
      i8 = i9 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 160 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 152 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = (HEAP32[i3 >> 2] | 0) + 8 | 0;
   i8 = i5 - 8 | 0;
   i9 = i5 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   do {
    if ((i7 | 0) < 1) {
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 156 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEED1Ev(i1 + 140 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 80 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 | 0;
     i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore18CompositeAnimationD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i3 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
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
function __ZN7WebCore26AnimationControllerPrivate18addEventToDispatchEN3WTF10PassRefPtrINS_7ElementEEERKNS1_12AtomicStringERKNS1_6StringEd(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = i1 + 140 | 0;
 i7 = i1 + 148 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 1 | 0;
 i10 = HEAP32[i1 + 144 >> 2] | 0;
 if (i10 >>> 0 < i9 >>> 0) {
  i11 = i10 + 1 + (i10 >>> 2) | 0;
  i10 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i10 >>> 0 > i9 >>> 0 ? i10 : i9);
 }
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = i6 + (i9 * 24 & -1) | 0;
   if ((i11 | 0) == (i9 | 0)) {
    break;
   }
   i13 = i6 + (i11 * 24 & -1) | 0;
   while (1) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = 0;
    HEAP32[i13 + 8 >> 2] = 0;
    i13 = i13 + 24 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 if ((i8 | 0) == -1) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i9 + (i8 * 24 & -1) | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 8 | 0;
   i10 = i2 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i9 + (i8 * 24 & -1) + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i9 + (i8 * 24 & -1) + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
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
 HEAPF64[i9 + (i8 * 24 & -1) + 16 >> 3] = d5;
 if (+HEAPF64[i1 + 88 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 return;
}
function __ZN3WTF7HashMapIPN7WebCore13RenderElementENS_6RefPtrINS1_18CompositeAnimationEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4takeERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  i10 = HEAP32[i3 >> 2] | 0;
  i3 = i10;
  i11 = i3 + ~(i3 << 15) | 0;
  i3 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i3 >>> 6 ^ i3;
  i3 = i11 + ~(i11 << 11) | 0;
  i11 = i3 >>> 16 ^ i3;
  i3 = i11 & i6;
  i12 = i5 + (i3 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L4 : do {
   if ((i13 | 0) == (i10 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i3;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L4;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i10 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i10 << 3) | 0 : i14;
  i8 = i5;
  i9 = i10;
 }
 i10 = i2 + 4 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i9 = i7 + 4 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if ((i7 | 0) != ((HEAP32[i4 >> 2] | 0) + (HEAP32[i10 >> 2] << 3) | 0)) {
   HEAP32[i7 >> 2] = -1;
   i9 = i2 + 16 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i2 + 12 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i5;
   i9 = HEAP32[i10 >> 2] | 0;
   if (!((i5 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2 | 0, (i9 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 return;
}
function __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
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
  L4 : do {
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
      break L4;
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
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 4 | 0;
   i12 = i6 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i12 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i8, (i7 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 24 & -1) | 0;
 if (i2 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i10;
   HEAPF64[i7 + 16 >> 3] = +HEAPF64[i6 + 16 >> 3];
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 + 8 | 0;
     i9 = i8 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i10 = i6 + 24 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 24 | 0;
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
function __ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 196 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 200 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + (i7 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
   i9 = i5;
  } else {
   L3 : do {
    if ((i7 | 0) == 0) {
     i10 = i5;
    } else {
     i11 = i5;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i12 = i11 + 4 | 0;
      if ((i12 | 0) == (i8 | 0)) {
       i9 = i5;
       break L1;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i8 | 0)) {
    i9 = i5;
    break;
   } else {
    i13 = i10;
   }
   L8 : while (1) {
    __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(HEAP32[i13 >> 2] | 0, 5, d2);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i8 | 0)) {
     break;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i8 | 0)) {
      break L8;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i8 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
   i9 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i15 = i1 + 216 | 0;
  HEAP8[i15] = 0;
  return;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i6 = 0;
  while (1) {
   i14 = HEAP32[i9 + (i6 << 2) >> 2] | 0;
   i13 = i14;
   do {
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i8 = i14 + 4 | 0;
     i10 = i8 | 0;
     i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i10 >> 2] = i5;
      break;
     }
     i5 = i8 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i9);
 _memset(i3 | 0, 0, 16) | 0;
 i15 = i1 + 216 | 0;
 HEAP8[i15] = 0;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate14styleAvailableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 176 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 180 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 188 >> 2] | 0) == 0) {
   i8 = i4;
  } else {
   L3 : do {
    if ((i6 | 0) == 0) {
     i9 = i4;
    } else {
     i10 = i4;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i11 = i10 + 4 | 0;
      if ((i11 | 0) == (i7 | 0)) {
       i8 = i4;
       break L1;
      } else {
       i10 = i11;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i7 | 0)) {
    i8 = i4;
    break;
   } else {
    i12 = i9;
   }
   L8 : while (1) {
    __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(HEAP32[i12 >> 2] | 0, 4, +-1);
    i10 = i12 + 4 | 0;
    if ((i10 | 0) == (i7 | 0)) {
     break;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 4 | 0;
     if ((i10 | 0) == (i7 | 0)) {
      break L8;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i7 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
   i8 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i5 = 0;
  while (1) {
   i13 = HEAP32[i8 + (i5 << 2) >> 2] | 0;
   i12 = i13;
   do {
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i7 = i13 + 4 | 0;
     i9 = i7 | 0;
     i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) != 0) {
      HEAP32[i9 >> 2] = i4;
      break;
     }
     i4 = i7 - 4 | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i8);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate27getAnimatedStyleForRendererEPNS_13RenderElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = i3;
 i8 = i2 + ~(i2 << 15) | 0;
 i2 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i2 >>> 6 ^ i2;
 i2 = i8 + ~(i8 << 11) | 0;
 i8 = i2 >>> 16 ^ i2;
 L5 : do {
  if ((i7 | 0) != 0) {
   i2 = i6 & i8;
   i9 = i7 + (i2 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i3 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i2;
    i2 = i10;
    while (1) {
     if ((i2 | 0) == 0) {
      break L5;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i3 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i2 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i2 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZNK7WebCore18CompositeAnimation16getAnimatedStyleEv(i5, i2);
   i2 = i5 | 0;
   i13 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   do {
    if ((i13 | 0) == 0) {
     i2 = HEAP32[i3 + 36 >> 2] | 0;
     if ((i2 | 0) == 0) {
      i17 = 0;
      break;
     }
     i12 = i2 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i17 = i2;
    } else {
     i17 = i13;
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i17 = HEAP32[i3 + 36 >> 2] | 0;
 HEAP32[i1 >> 2] = i17;
 if ((i17 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i17 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN7WebCore26AnimationControllerPrivate31updateAnimationTimerForRendererEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 L1 : do {
  if ((i4 | 0) == 0) {
   i7 = 0;
  } else {
   i5 = i3 & i6;
   i8 = i4 + (i5 << 3) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i10 = i8;
   } else {
    i8 = (i6 >>> 23) + ~i6 | 0;
    i11 = i8 << 12 ^ i8;
    i8 = i11 >>> 7 ^ i11;
    i11 = i8 << 2 ^ i8;
    i8 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i12 = i5;
    i5 = i9;
    while (1) {
     if ((i5 | 0) == 0) {
      i7 = 0;
      break L1;
     }
     i9 = (i11 | 0) == 0 ? i8 : i11;
     i13 = i9 + i12 & i3;
     i14 = i4 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i2 | 0)) {
      i10 = i14;
      break;
     } else {
      i11 = i9;
      i12 = i13;
      i5 = i15;
     }
    }
   }
   if ((i10 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i10 + 4 >> 2] | 0;
  }
 } while (0);
 do {
  if ((HEAP8[i7 + 60 | 0] & 1) == 0) {
   if ((HEAP32[i7 + 20 >> 2] | 0) == 0) {
    if ((HEAP32[i7 + 40 >> 2] | 0) == 0) {
     d16 = +0;
     break;
    }
   }
   d16 = +__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i7);
  } else {
   d16 = +0;
  }
 } while (0);
 i7 = i1 + 24 | 0;
 do {
  if (+HEAPF64[i1 + 32 >> 3] != +0) {
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    return;
   }
   if (+__ZNK7WebCore9TimerBase16nextFireIntervalEv(i7) > d16) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore9TimerBase5startEdd(i7, d16, +0);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZNK7WebCore19AnimationController24numberOfActiveAnimationsEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 i5 = i1 + (i4 << 3) | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i7 = i1;
  } else {
   i3 = i1;
   while (1) {
    i8 = HEAP32[i3 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i3;
     break L4;
    }
    i8 = i3 + 8 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = 0;
     break;
    } else {
     i3 = i8;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i7 | 0) == (i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = i7;
 i4 = 0;
 i3 = HEAP32[i7 >> 2] | 0;
 L13 : while (1) {
  if ((HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
   i9 = (__ZNK7WebCore18CompositeAnimation24numberOfActiveAnimationsEv(HEAP32[i1 + 4 >> 2] | 0) | 0) + i4 | 0;
  } else {
   i9 = i4;
  }
  i7 = i1 + 8 | 0;
  if ((i7 | 0) == (i5 | 0)) {
   i6 = i9;
   i10 = 19;
   break;
  } else {
   i11 = i7;
  }
  while (1) {
   i12 = HEAP32[i11 >> 2] | 0;
   i7 = i12;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i11 + 8 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    i6 = i9;
    i10 = 18;
    break L13;
   } else {
    i11 = i7;
   }
  }
  if ((i11 | 0) == (i5 | 0)) {
   i6 = i9;
   i10 = 15;
   break;
  } else {
   i1 = i11;
   i4 = i9;
   i3 = i12;
  }
 }
 if ((i10 | 0) == 19) {
  return i6 | 0;
 } else if ((i10 | 0) == 18) {
  return i6 | 0;
 } else if ((i10 | 0) == 15) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore26AnimationControllerPrivate30addToAnimationsWaitingForStyleEPNS_13AnimationBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = (i2 | 0) != 0;
 if (i8) {
  i9 = i2 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 196 | 0, i4) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i9 = i7 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i7 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i2;
 if (i8) {
  i8 = i2 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i6, i1 + 176 | 0, i5, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore26AnimationControllerPrivate24numberOfActiveAnimationsEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i7 = i3;
  } else {
   i1 = i3;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L4;
    }
    i8 = i1 + 8 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = 0;
     break;
    } else {
     i1 = i8;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i7 | 0) == (i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 } else {
  i9 = i7;
  i10 = 0;
 }
 L12 : while (1) {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
   i11 = (__ZNK7WebCore18CompositeAnimation24numberOfActiveAnimationsEv(HEAP32[i9 + 4 >> 2] | 0) | 0) + i10 | 0;
  } else {
   i11 = i10;
  }
  i7 = i9 + 8 | 0;
  if ((i7 | 0) == (i5 | 0)) {
   i6 = i11;
   i12 = 13;
   break;
  } else {
   i13 = i7;
  }
  while (1) {
   i7 = HEAP32[i13 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i13 + 8 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    i6 = i11;
    i12 = 15;
    break L12;
   } else {
    i13 = i7;
   }
  }
  if ((i13 | 0) == (i5 | 0)) {
   i6 = i11;
   i12 = 14;
   break;
  } else {
   i9 = i13;
   i10 = i11;
  }
 }
 if ((i12 | 0) == 15) {
  return i6 | 0;
 } else if ((i12 | 0) == 13) {
  return i6 | 0;
 } else if ((i12 | 0) == 14) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 176 | 0, i5) | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 4 | 0;
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if (!i7) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 196 | 0, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i1 + 216 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 24 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 24 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore26AnimationControllerPrivate39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i7 = i1 + ~(i1 << 15) | 0;
 i1 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i1 >>> 6 ^ i1;
 i1 = i7 + ~(i7 << 11) | 0;
 i7 = i1 >>> 16 ^ i1;
 if ((i6 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i1 = i5 & i7;
 i9 = i6 + (i1 << 3) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) == (i2 | 0)) {
   i11 = i9;
  } else {
   i12 = (i7 >>> 23) + ~i7 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i1;
   i15 = i10;
   while (1) {
    if ((i15 | 0) == 0) {
     i8 = 0;
     break;
    }
    i16 = (i13 | 0) == 0 ? i12 : i13;
    i17 = i16 + i14 & i5;
    i18 = i6 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i2 | 0)) {
     i11 = i18;
     break L4;
    } else {
     i13 = i16;
     i14 = i17;
     i15 = i19;
    }
   }
   return i8 | 0;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = __ZNK7WebCore18CompositeAnimation19isAnimatingPropertyENS_13CSSPropertyIDEbb(i2, i3, 1, i4) | 0;
 return i8 | 0;
}
function __ZNK7WebCore26AnimationControllerPrivate28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i7 = i1 + ~(i1 << 15) | 0;
 i1 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i1 >>> 6 ^ i1;
 i1 = i7 + ~(i7 << 11) | 0;
 i7 = i1 >>> 16 ^ i1;
 if ((i6 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i1 = i5 & i7;
 i9 = i6 + (i1 << 3) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) == (i2 | 0)) {
   i11 = i9;
  } else {
   i12 = (i7 >>> 23) + ~i7 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i1;
   i15 = i10;
   while (1) {
    if ((i15 | 0) == 0) {
     i8 = 0;
     break;
    }
    i16 = (i13 | 0) == 0 ? i12 : i13;
    i17 = i16 + i14 & i5;
    i18 = i6 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i2 | 0)) {
     i11 = i18;
     break L4;
    } else {
     i13 = i16;
     i14 = i17;
     i15 = i19;
    }
   }
   return i8 | 0;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = __ZNK7WebCore18CompositeAnimation19isAnimatingPropertyENS_13CSSPropertyIDEbb(i2, i3, 0, i4) | 0;
 return i8 | 0;
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
function __ZN7WebCore11RenderStyle9setZIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 64 >> 2] & 1 | 0) == 0) {
  i7 = i1;
 } else {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i8 = i1;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
   i1 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i6 >> 2] = i1;
   i8 = i1;
  }
  i1 = i8 + 64 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 + 60 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i1 = i5 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 HEAP32[i11 + 60 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i5, i1 | 0, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
   i4 = __ZN3WTF10fastMallocEj(64) | 0;
   __ZN7WebCore18CompositeAnimationC1EPNS_26AnimationControllerPrivateE(i4, i1);
   i2 = i6 + 4 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i7 | 0) == 0) {
    break;
   }
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore18CompositeAnimationD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 STACKTOP = i3;
 return HEAP32[i6 + 4 >> 2] | 0;
}
function __ZN7WebCore19AnimationController16cancelAnimationsEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashMapIPN7WebCore13RenderElementENS_6RefPtrINS1_18CompositeAnimationEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4takeERKS3_(i5, i6 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18CompositeAnimation13clearRendererEv(i4);
 i5 = (HEAP8[i4 + 60 | 0] & 1) != 0;
 i6 = i4 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 do {
  if ((i1 | 0) == 0) {
   __ZN7WebCore18CompositeAnimationD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
   if (i5) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i6 >> 2] = i1;
   if (i5) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5, 49152);
 STACKTOP = i3;
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
function __ZN7WebCore26AnimationControllerPrivate42addToAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if (i3) {
  HEAP8[i1 + 216 | 0] = 1;
 }
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i4 + 8 | 0, i1 + 196 | 0, i5, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate47removeFromAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 196 | 0, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i1 + 216 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate26addElementChangeToDispatchEN3WTF7PassRefINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i1 + 152 | 0;
 i5 = i1 + 160 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i1 + 156 >> 2] | 0)) {
  __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6 + 1 | 0);
  HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = HEAP32[i2 >> 2];
 } else {
  HEAP32[(HEAP32[i4 >> 2] | 0) + (i6 << 2) >> 2] = HEAP32[i2 >> 2];
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 if (+HEAPF64[i1 + 88 >> 3] != +0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19AnimationController21pauseTransitionAtTimeEPNS_13RenderElementERKN3WTF6StringEd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = __ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(i5, i2) | 0;
 if (!(__ZN7WebCore18CompositeAnimation21pauseTransitionAtTimeENS_13CSSPropertyIDEd(i1, __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0, d4) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i7 = 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i7 | 0, 49152);
 if (+HEAPF64[i5 + 88 >> 3] != +0) {
  i6 = 1;
  return i6 | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i5 + 80 | 0, +0, +0);
 i6 = 1;
 return i6 | 0;
}
function __ZN7WebCore26AnimationControllerPrivate35removeFromAnimationsWaitingForStyleEPNS_13AnimationBaseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 176 | 0, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate5clearEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashMapIPN7WebCore13RenderElementENS_6RefPtrINS1_18CompositeAnimationEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4takeERKS3_(i5, i1 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore18CompositeAnimation13clearRendererEv(i4);
 i5 = (HEAP8[i4 + 60 | 0] & 1) != 0;
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore18CompositeAnimationD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  i6 = i5;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i2;
  i6 = i5;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore26AnimationControllerPrivate21pauseTransitionAtTimeEPNS_13RenderElementERKN3WTF6StringEd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = __ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(i1, i2) | 0;
 if (!(__ZN7WebCore18CompositeAnimation21pauseTransitionAtTimeENS_13CSSPropertyIDEd(i6, __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i3) | 0, d4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i7 = 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i7 | 0, 49152);
 if (+HEAPF64[i1 + 88 >> 3] != +0) {
  i5 = 1;
  return i5 | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore19AnimationController20pauseAnimationAtTimeEPNS_13RenderElementERKN3WTF12AtomicStringEd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (!(__ZN7WebCore18CompositeAnimation20pauseAnimationAtTimeERKN3WTF12AtomicStringEd(__ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(i5, i2) | 0, i3, d4) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i7 = 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i7 | 0, 49152);
 if (+HEAPF64[i5 + 88 >> 3] != +0) {
  i6 = 1;
  return i6 | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i5 + 80 | 0, +0, +0);
 i6 = 1;
 return i6 | 0;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore26AnimationControllerPrivate20pauseAnimationAtTimeEPNS_13RenderElementERKN3WTF12AtomicStringEd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (!(__ZN7WebCore18CompositeAnimation20pauseAnimationAtTimeERKN3WTF12AtomicStringEd(__ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE(i1, i2) | 0, i3, d4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i6 = 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i6 | 0, 49152);
 if (+HEAPF64[i1 + 88 >> 3] != +0) {
  i5 = 1;
  return i5 | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 i5 = 1;
 return i5 | 0;
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
function __ZN7WebCore19AnimationControllerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(224) | 0;
 i4 = i3;
 _memset(i3 | 0, 0, 20) | 0;
 i5 = i3 + 24 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i3 + 68 >> 2] = i4;
 i5 = i3 + 72 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 6;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i3 + 80 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i3 + 124 >> 2] = i4;
 i5 = i3 + 128 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 2;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i3 + 136 >> 2] = i2;
 _memset(i3 + 140 | 0, 0, 24) | 0;
 HEAPF64[i3 + 168 >> 3] = +-1;
 _memset(i3 + 176 | 0, 0, 43) | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore19AnimationControllerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(224) | 0;
 i4 = i3;
 _memset(i3 | 0, 0, 20) | 0;
 i5 = i3 + 24 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i3 + 68 >> 2] = i4;
 i5 = i3 + 72 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 6;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i3 + 80 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i3 + 124 >> 2] = i4;
 i5 = i3 + 128 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 2;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i3 + 136 >> 2] = i2;
 _memset(i3 + 140 | 0, 0, 24) | 0;
 HEAPF64[i3 + 168 >> 3] = +-1;
 _memset(i3 + 176 | 0, 0, 43) | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate19animationTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 d3 = +__ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE(i1, 1);
 do {
  if (d3 != +0) {
   i2 = i1 + 24 | 0;
   if (d3 >= +0) {
    __ZN7WebCore9TimerBase5startEdd(i2, d3, +0);
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] == +0) {
    break;
   }
   __ZN7WebCore9TimerBase4stopEv(i2);
  } else {
   i2 = i1 + 24 | 0;
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    if (+HEAPF64[i1 + 48 >> 3] != +0) {
     break;
    }
   }
   __ZN7WebCore9TimerBase5startEdd(i2, +.025, +.025);
  }
 } while (0);
 __ZN7WebCore26AnimationControllerPrivate24fireEventsAndUpdateStyleEv(i1);
 return;
}
function __ZN7WebCore26AnimationControllerPrivateC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 | 0, 0, 20) | 0;
 i3 = i1 + 24 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 + 68 >> 2] = i1;
 i3 = i1 + 72 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 80 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 + 124 >> 2] = i1;
 i3 = i1 + 128 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = i2;
 _memset(i1 + 140 | 0, 0, 24) | 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 _memset(i1 + 176 | 0, 0, 43) | 0;
 return;
}
function __ZN7WebCore26AnimationControllerPrivateC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 | 0, 0, 20) | 0;
 i3 = i1 + 24 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 + 68 >> 2] = i1;
 i3 = i1 + 72 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 80 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 + 124 >> 2] = i1;
 i3 = i1 + 128 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = i2;
 _memset(i1 + 140 | 0, 0, 24) | 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 _memset(i1 + 176 | 0, 0, 43) | 0;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate20updateAnimationTimerENS_10SetChangedE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0;
 d3 = +__ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE(i1, i2);
 if (d3 == +0) {
  i2 = i1 + 24 | 0;
  do {
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    if (+HEAPF64[i1 + 48 >> 3] == +0) {
     break;
    }
    return;
   }
  } while (0);
  __ZN7WebCore9TimerBase5startEdd(i2, +.025, +.025);
  return;
 }
 i2 = i1 + 24 | 0;
 if (d3 >= +0) {
  __ZN7WebCore9TimerBase5startEdd(i2, d3, +0);
  return;
 }
 if (+HEAPF64[i1 + 32 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i2);
 return;
}
function __ZN7WebCore19AnimationController18endAnimationUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, d6 = +0;
 i2 = i1 + 4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0) {
  return;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 __ZN7WebCore26AnimationControllerPrivate14styleAvailableEv(i3);
 if ((HEAP8[i3 + 216 | 0] & 1) != 0) {
  return;
 }
 i1 = i3 + 168 | 0;
 d4 = +HEAPF64[i1 >> 3];
 if (d4 == +-1) {
  d5 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
  HEAPF64[i1 >> 3] = d5;
  d6 = d5;
 } else {
  d6 = d4;
 }
 __ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd(i3, d6);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate17suspendAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 217 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 i3 = i1 + 136 | 0;
 __ZN7WebCore26AnimationControllerPrivate28suspendAnimationsForDocumentEPNS_8DocumentE(i1, HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0);
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  while (1) {
   __ZN7WebCore26AnimationControllerPrivate17suspendAnimationsEv(HEAP32[HEAP32[i3 + 476 >> 2] >> 2] | 0);
   i3 = HEAP32[i3 + 56 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
  }
 }
 HEAP8[i2] = 1;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate16resumeAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 217 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 i3 = i1 + 136 | 0;
 __ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE(i1, HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0);
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  while (1) {
   __ZN7WebCore26AnimationControllerPrivate16resumeAnimationsEv(HEAP32[HEAP32[i3 + 476 >> 2] >> 2] | 0);
   i3 = HEAP32[i3 + 56 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
  }
 }
 HEAP8[i2] = 0;
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
function __ZN7WebCore26AnimationControllerPrivate18endAnimationUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0;
 __ZN7WebCore26AnimationControllerPrivate14styleAvailableEv(i1);
 if ((HEAP8[i1 + 216 | 0] & 1) != 0) {
  return;
 }
 i2 = i1 + 168 | 0;
 d3 = +HEAPF64[i2 >> 3];
 if (d3 == +-1) {
  d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
  HEAPF64[i2 >> 3] = d4;
  d5 = d4;
 } else {
  d5 = d3;
 }
 __ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd(i1, d5);
 return;
}
function __ZN7WebCore5TimerINS_26AnimationControllerPrivateEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 }
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
function __ZN7WebCore19AnimationController29startAnimationsIfNotSuspendedEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((HEAP8[i3 + 217 | 0] & 1) != 0) {
   if ((HEAP8[i3 + 218 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE(i3, i2);
 return;
}
function __ZN7WebCore19AnimationController17serviceAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if (+__ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE(i2, 1) < +0) {
  return;
 }
 __ZN7WebCore9FrameView17scheduleAnimationEv(__ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i2 + 136 >> 2] | 0) + 456 >> 2] | 0) | 0) | 0;
 return;
}
function __ZNK7WebCore19AnimationController39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore26AnimationControllerPrivate39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(HEAP32[i1 >> 2] | 0, i2, i3, i4) | 0;
}
function __ZN7WebCore26AnimationControllerPrivate29startAnimationsIfNotSuspendedEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if ((HEAP8[i1 + 217 | 0] & 1) != 0) {
   if ((HEAP8[i1 + 218 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE(i1, i2);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate27animationFrameCallbackFiredEv(i1) {
 i1 = i1 | 0;
 if (+__ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE(i1, 1) < +0) {
  return;
 }
 __ZN7WebCore9FrameView17scheduleAnimationEv(__ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 456 >> 2] | 0) | 0) | 0;
 return;
}
function __ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore26AnimationControllerPrivate28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(HEAP32[i1 >> 2] | 0, i2, i3, i4) | 0;
}
function __ZN7WebCore19AnimationController20beginAnimationUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAPF64[(HEAP32[i1 >> 2] | 0) + 168 >> 3] = +-1;
  i4 = HEAP32[i2 >> 2] | 0;
 } else {
  i4 = i3;
 }
 HEAP32[i2 >> 2] = i4 + 1;
 return;
}
function __ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0;
 i2 = i1 + 168 | 0;
 d3 = +HEAPF64[i2 >> 3];
 if (d3 != +-1) {
  d4 = d3;
  return +d4;
 }
 d3 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 HEAPF64[i2 >> 3] = d3;
 d4 = d3;
 return +d4;
}
function __ZN7WebCore19AnimationController27getAnimatedStyleForRendererEPNS_13RenderElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore26AnimationControllerPrivate27getAnimatedStyleForRendererEPNS_13RenderElementE(i1, HEAP32[i2 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore19AnimationController22notifyAnimationStartedEPNS_13RenderElementEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP8[i2 + 216 | 0] = 0;
 __ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd(i2, d3);
 return;
}
function __ZN7WebCore19AnimationControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore26AnimationControllerPrivateD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19AnimationControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore26AnimationControllerPrivateD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26AnimationControllerPrivate28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[i1 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore19AnimationController27resumeAnimationsForDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE(HEAP32[i1 >> 2] | 0, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore19AnimationController38supportsAcceleratedAnimationOfPropertyENS_13CSSPropertyIDE(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20CSSPropertyAnimation32animationOfPropertyIsAcceleratedENS_13CSSPropertyIDE(i1) | 0;
}
function __ZN7WebCore26AnimationControllerPrivate34updateStyleIfNeededDispatcherFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore26AnimationControllerPrivate24fireEventsAndUpdateStyleEv(i1);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate34startUpdateStyleIfNeededDispatcherEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 88 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 80 | 0, +0, +0);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate25receivedStartTimeResponseEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAP8[i1 + 216 | 0] = 0;
 __ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd(i1, d2);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore19AnimationController36setAllowsNewAnimationsWhileSuspendedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[(HEAP32[i1 >> 2] | 0) + 218 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore19AnimationController17suspendAnimationsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26AnimationControllerPrivate17suspendAnimationsEv(HEAP32[i1 >> 2] | 0);
 return;
}
function __ZN7WebCore19AnimationController16resumeAnimationsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26AnimationControllerPrivate16resumeAnimationsEv(HEAP32[i1 >> 2] | 0);
 return;
}
function __ZN7WebCore26AnimationControllerPrivate36setAllowsNewAnimationsWhileSuspendedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 218 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore19AnimationController33allowsNewAnimationsWhileSuspendedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 >> 2] | 0) + 218 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore5TimerINS_26AnimationControllerPrivateEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function __ZNK7WebCore19AnimationController11isSuspendedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 >> 2] | 0) + 217 | 0] & 1) != 0 | 0;
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
function __ZN7WebCore5TimerINS_26AnimationControllerPrivateEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_26AnimationControllerPrivateEED0Ev,b1,__ZN7WebCore26AnimationControllerPrivateD2Ev,b1,__ZN7WebCore5TimerINS_26AnimationControllerPrivateEE5firedEv,b1,__ZN7WebCore5TimerINS_26AnimationControllerPrivateEED1Ev,b1,__ZN7WebCore19AnimationControllerD2Ev,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore26AnimationControllerPrivate34updateStyleIfNeededDispatcherFiredEPNS_5TimerIS0_EE,b2,__ZN7WebCore19AnimationControllerC2ERNS_5FrameE,b2,__ZN7WebCore26AnimationControllerPrivate19animationTimerFiredEPNS_5TimerIS0_EE,b2,__ZN7WebCore26AnimationControllerPrivateC2ERNS_5FrameE,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore26AnimationControllerPrivate14styleAvailableEv","__ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore26AnimationControllerPrivate47removeFromAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseE","__ZNK7WebCore19AnimationController28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb","__ZN7WebCore5TimerINS_26AnimationControllerPrivateEED1Ev","__ZN7WebCore19AnimationController27resumeAnimationsForDocumentEPNS_8DocumentE","__ZN7WebCore19AnimationController20pauseAnimationAtTimeEPNS_13RenderElementERKN3WTF12AtomicStringEd","__ZN7WebCore26AnimationControllerPrivate36setAllowsNewAnimationsWhileSuspendedEb","__ZN7WebCore26AnimationControllerPrivate25receivedStartTimeResponseEd","__ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore26AnimationControllerPrivate24ensureCompositeAnimationEPNS_13RenderElementE","__ZN7WebCore19AnimationController17suspendAnimationsEv","__ZN7WebCore26AnimationControllerPrivate16resumeAnimationsEv","__ZN7WebCore19AnimationController22notifyAnimationStartedEPNS_13RenderElementEd","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore11RenderStyle9setZIndexEi","__ZN7WebCore19AnimationController27getAnimatedStyleForRendererEPNS_13RenderElementE","__ZN3WTF7HashSetINS_6RefPtrIN7WebCore13AnimationBaseEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZN7WebCore26AnimationControllerPrivate18addEventToDispatchEN3WTF10PassRefPtrINS_7ElementEEERKNS1_12AtomicStringERKNS1_6StringEd","__ZNK7WebCore26AnimationControllerPrivate39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb","__ZN7WebCore26AnimationControllerPrivateC2ERNS_5FrameE","__ZN7WebCore26AnimationControllerPrivate18endAnimationUpdateEv","__ZN7WebCore26AnimationControllerPrivate20pauseAnimationAtTimeEPNS_13RenderElementERKN3WTF12AtomicStringEd","__ZN7WebCore26AnimationControllerPrivate31updateAnimationTimerForRendererEPNS_13RenderElementE","__ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE","__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","_memset","__ZNK7WebCore19AnimationController11isSuspendedEv","__ZNK7WebCore19AnimationController39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb","__ZN7WebCore26AnimationControllerPrivate34updateStyleIfNeededDispatcherFiredEPNS_5TimerIS0_EE","__ZN7WebCore26AnimationControllerPrivate17startTimeResponseEd","__ZN7WebCore26AnimationControllerPrivate16updateAnimationsENS_10SetChangedE","__ZNK7WebCore26AnimationControllerPrivate28isRunningAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb","__ZN7WebCore26AnimationControllerPrivate21pauseTransitionAtTimeEPNS_13RenderElementERKN3WTF6StringEd","__ZNK7WebCore19AnimationController24numberOfActiveAnimationsEPNS_8DocumentE","__ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore26AnimationControllerPrivate27getAnimatedStyleForRendererEPNS_13RenderElementE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore26AnimationControllerPrivate24fireEventsAndUpdateStyleEv","__ZN7WebCore19AnimationControllerD2Ev","__ZN7WebCore26AnimationControllerPrivate34startUpdateStyleIfNeededDispatcherEv","__ZN3WTF6VectorIN7WebCore26AnimationControllerPrivate15EventToDispatchELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore26AnimationControllerPrivate28suspendAnimationsForDocumentEPNS_8DocumentE","__ZN7WebCore19AnimationController20beginAnimationUpdateEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore19AnimationController16resumeAnimationsEv","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore26AnimationControllerPrivateD2Ev","__ZN7WebCore26AnimationControllerPrivate26addElementChangeToDispatchEN3WTF7PassRefINS_7ElementEEE","__ZN7WebCore26AnimationControllerPrivate30addToAnimationsWaitingForStyleEPNS_13AnimationBaseE","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore19AnimationController18endAnimationUpdateEv","__ZN3WTF9HashTableIPN7WebCore13RenderElementENS_12KeyValuePairIS3_NS_6RefPtrINS1_18CompositeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF7HashMapIPN7WebCore13RenderElementENS_6RefPtrINS1_18CompositeAnimationEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4takeERKS3_","__ZN7WebCore19AnimationControllerC2ERNS_5FrameE","__ZN7WebCore26AnimationControllerPrivate35removeFromAnimationsWaitingForStyleEPNS_13AnimationBaseE","__ZN7WebCore19AnimationController21pauseTransitionAtTimeEPNS_13RenderElementERKN3WTF6StringEd","__ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore26AnimationControllerPrivate27animationFrameCallbackFiredEv","__ZN7WebCore26AnimationControllerPrivate42addToAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseEb","__ZN7WebCore26AnimationControllerPrivate20updateAnimationTimerENS_10SetChangedE","__ZN7WebCore26AnimationControllerPrivate27resumeAnimationsForDocumentEPNS_8DocumentE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore13AnimationBaseEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore19AnimationController17serviceAnimationsEv","__ZN7WebCore19AnimationController16cancelAnimationsEPNS_13RenderElementE","_memcpy","__ZN7WebCore26AnimationControllerPrivate29startAnimationsIfNotSuspendedEPNS_8DocumentE","__ZN7WebCore26AnimationControllerPrivate17suspendAnimationsEv","__ZNK7WebCore19AnimationController33allowsNewAnimationsWhileSuspendedEv","__ZN7WebCore26AnimationControllerPrivate5clearEPNS_13RenderElementE","__ZN7WebCore5TimerINS_26AnimationControllerPrivateEED0Ev","__ZN7WebCore19AnimationController36setAllowsNewAnimationsWhileSuspendedEb","__ZNK7WebCore26AnimationControllerPrivate24numberOfActiveAnimationsEPNS_8DocumentE","__ZN7WebCore19AnimationController38supportsAcceleratedAnimationOfPropertyENS_13CSSPropertyIDE","__ZN7WebCore5TimerINS_26AnimationControllerPrivateEE5firedEv","__ZN7WebCore26AnimationControllerPrivate19animationTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore19AnimationController16updateAnimationsERNS_13RenderElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore19AnimationController29startAnimationsIfNotSuspendedEPNS_8DocumentE"]

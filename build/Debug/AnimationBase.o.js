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
var Math_min = Math.min;
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iid(index,a1,a2) {
  try {
    return Module["dynCall_iid"](index,a1,a2);
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
  var __ZTVN7WebCore13AnimationBaseE=(H_BASE+8)|0;
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
  var invoke_vid=env.invoke_vid;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_iid=env.invoke_iid;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _fabs=env._fabs;
  var _floor=env._floor;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, d36 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 64 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  i10 = i1 + 8 | 0;
  if ((HEAP32[i10 >> 2] | 0) == 2) {
   __ZN7WebCore26AnimationControllerPrivate35removeFromAnimationsWaitingForStyleEPNS_13AnimationBaseE(HEAP32[i9 + 4 >> 2] | 0, i1);
  }
  HEAP32[i10 >> 2] = 0;
  HEAPF64[i1 + 16 >> 3] = +0;
  HEAPF64[i1 + 24 >> 3] = +-1;
  HEAPF64[i1 + 32 >> 3] = +0;
  HEAPF64[i1 + 48 >> 3] = +-1;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
  STACKTOP = i4;
  return;
 } else if ((i2 | 0) == 2) {
  i10 = i1 + 8 | 0;
  if ((HEAP32[i10 >> 2] | 0) == 2) {
   __ZN7WebCore26AnimationControllerPrivate35removeFromAnimationsWaitingForStyleEPNS_13AnimationBaseE(HEAP32[i9 + 4 >> 2] | 0, i1);
  }
  HEAP32[i10 >> 2] = 0;
  HEAPF64[i1 + 16 >> 3] = +0;
  i11 = i1 + 24 | 0;
  HEAPF64[i11 >> 3] = +-1;
  HEAPF64[i1 + 32 >> 3] = +0;
  HEAPF64[i1 + 48 >> 3] = +-1;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
  if (+HEAPF64[i11 >> 3] >= +0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i10 >> 2] | 0) == 6) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 1, +-1);
  STACKTOP = i4;
  return;
 } else if ((i2 | 0) == 12) {
  i10 = i1 + 8 | 0;
  if ((HEAP32[i10 >> 2] | 0) == 2) {
   __ZN7WebCore26AnimationControllerPrivate35removeFromAnimationsWaitingForStyleEPNS_13AnimationBaseE(HEAP32[i9 + 4 >> 2] | 0, i1);
  }
  HEAP32[i10 >> 2] = 11;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
  STACKTOP = i4;
  return;
 } else if ((i2 | 0) == 8) {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 3) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
  i10 = HEAP32[i8 >> 2] | 0;
  if ((i10 | 0) == 0) {
   d12 = +0;
  } else {
   d12 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i10 + 4 >> 2] | 0);
  }
  __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 5, d12);
  STACKTOP = i4;
  return;
 } else {
  i10 = i1 + 8 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i2 | 0) == 9) {
   if ((i11 - 4 | 0) >>> 0 >= 2 >>> 0) {
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] | 0;
   d12 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
   FUNCTION_TABLE_iid[i13 & 3](i1, d12 - +HEAPF64[i1 + 16 >> 3]) | 0;
   STACKTOP = i4;
   return;
  }
  switch (i11 | 0) {
  case 0:
   {
    if ((i2 | 0) == 10 | (i2 | 0) == 1) {
     HEAPF64[i1 + 32 >> 3] = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     HEAP32[i10 >> 2] = 1;
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i10 >> 2] = 6;
     STACKTOP = i4;
     return;
    }
    break;
   }
  case 1:
   {
    if ((i2 | 0) != 3) {
     HEAPF64[i1 + 24 >> 3] = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     HEAP32[i10 >> 2] = 7;
     STACKTOP = i4;
     return;
    }
    HEAP32[i10 >> 2] = 2;
    __ZN7WebCore26AnimationControllerPrivate30addToAnimationsWaitingForStyleEPNS_13AnimationBaseE(HEAP32[i9 + 4 >> 2] | 0, i1);
    i13 = HEAP32[i1 + 56 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i13 + 20 >> 2] & 128 | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i13 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = i14;
    i15 = i14 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    __ZN7WebCore26AnimationControllerPrivate26addElementChangeToDispatchEN3WTF7PassRefINS_7ElementEEE(i13, i5);
    STACKTOP = i4;
    return;
   }
  case 2:
   {
    if ((i2 | 0) != 4) {
     HEAPF64[i1 + 24 >> 3] = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     HEAP32[i10 >> 2] = 8;
     STACKTOP = i4;
     return;
    }
    HEAP32[i10 >> 2] = 3;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i1);
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1) | 0) {
     HEAP32[i10 >> 2] = 3;
     HEAP8[i1 + 12 | 0] = 0;
     i5 = HEAP32[i8 >> 2] | 0;
     if ((i5 | 0) == 0) {
      d16 = +0;
     } else {
      d16 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i5 + 4 >> 2] | 0);
     }
     __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 5, d16);
     STACKTOP = i4;
     return;
    } else {
     d16 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 3];
     if (d16 < +0) {
      d17 = +-0 - d16;
     } else {
      d17 = +0;
     }
     i5 = FUNCTION_TABLE_iid[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 3](i1, d17) | 0;
     __ZN7WebCore26AnimationControllerPrivate42addToAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseEb(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0, i1, i5);
     HEAP8[i1 + 12 | 0] = i5 & 1;
     STACKTOP = i4;
     return;
    }
    break;
   }
  case 3:
   {
    if ((i2 | 0) != 5) {
     d17 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     i5 = HEAP32[i8 >> 2] | 0;
     HEAPF64[i1 + 24 >> 3] = d17;
     i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
     if ((i5 | 0) == 0) {
      d18 = +0;
     } else {
      d18 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i5 + 4 >> 2] | 0);
     }
     FUNCTION_TABLE_vid[i13 & 15](i1, d18 - +HEAPF64[i1 + 16 >> 3]);
     HEAP32[i10 >> 2] = 9;
     STACKTOP = i4;
     return;
    }
    i13 = i1 + 16 | 0;
    do {
     if (+HEAPF64[i13 >> 3] <= +0) {
      HEAPF64[i13 >> 3] = d3;
      d18 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 3];
      if (d18 >= +0) {
       break;
      }
      HEAPF64[i13 >> 3] = d18 + d3;
     }
    } while (0);
    FUNCTION_TABLE_vid[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 15](i1, +0);
    i5 = HEAP32[i8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     d19 = +0;
    } else {
     d19 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i5 + 4 >> 2] | 0);
    }
    d18 = d19 - +HEAPF64[i13 >> 3];
    d19 = d18 < +0 ? +0 : d18;
    i13 = i1 + 40 | 0;
    d18 = +HEAPF64[i13 >> 3];
    if (d18 < +0 | d19 < d18) {
     d17 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
     if (d17 > +0) {
      d16 = d17 - +_fmod(+d19, +d17);
      d20 = d16;
      d21 = +HEAPF64[i13 >> 3];
     } else {
      d20 = +0;
      d21 = d18;
     }
     d22 = d19 + d20;
     d23 = d21;
    } else {
     d22 = d18;
     d23 = d18;
    }
    HEAP32[i10 >> 2] = d23 < +0 | d22 < d23 ? 4 : 5;
    i13 = HEAP32[i1 + 56 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i13 + 20 >> 2] & 128 | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    i5 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i13 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = i5;
    i15 = i5 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    __ZN7WebCore26AnimationControllerPrivate26addElementChangeToDispatchEN3WTF7PassRefINS_7ElementEEE(i13, i6);
    STACKTOP = i4;
    return;
   }
  case 4:
   {
    if ((i2 | 0) != 6) {
     d23 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     i6 = HEAP32[i8 >> 2] | 0;
     HEAPF64[i1 + 24 >> 3] = d23;
     i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
     if ((i6 | 0) == 0) {
      d24 = +0;
     } else {
      d24 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i6 + 4 >> 2] | 0);
     }
     FUNCTION_TABLE_vid[i13 & 15](i1, d24 - +HEAPF64[i1 + 16 >> 3]);
     HEAP32[i10 >> 2] = 10;
     STACKTOP = i4;
     return;
    }
    FUNCTION_TABLE_vid[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 15](i1, d3);
    i13 = HEAP32[i8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     d25 = +0;
    } else {
     d25 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i13 + 4 >> 2] | 0);
    }
    d24 = d25 - +HEAPF64[i1 + 16 >> 3];
    d25 = d24 < +0 ? +0 : d24;
    i13 = i1 + 40 | 0;
    d24 = +HEAPF64[i13 >> 3];
    if (d24 < +0 | d25 < d24) {
     d23 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
     if (d23 > +0) {
      d22 = d23 - +_fmod(+d25, +d23);
      d26 = d22;
      d27 = +HEAPF64[i13 >> 3];
     } else {
      d26 = +0;
      d27 = d24;
     }
     d28 = d25 + d26;
     d29 = d27;
    } else {
     d28 = d24;
     d29 = d24;
    }
    HEAP32[i10 >> 2] = d29 < +0 | d28 < d29 ? 4 : 5;
    STACKTOP = i4;
    return;
   }
  case 5:
   {
    if ((i2 | 0) != 7) {
     d29 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
     i13 = HEAP32[i8 >> 2] | 0;
     HEAPF64[i1 + 24 >> 3] = d29;
     i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
     if ((i13 | 0) == 0) {
      d30 = +0;
     } else {
      d30 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i13 + 4 >> 2] | 0);
     }
     FUNCTION_TABLE_vid[i6 & 15](i1, d30 - +HEAPF64[i1 + 16 >> 3]);
     HEAP32[i10 >> 2] = 10;
     STACKTOP = i4;
     return;
    }
    FUNCTION_TABLE_vid[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 15](i1, d3);
    HEAP32[i10 >> 2] = 11;
    i6 = i1 + 56 | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i15 = HEAP32[i1 + 60 >> 2] | 0;
    do {
     if ((HEAP8[i15 + 45 | 0] & 2) == 0) {
      i31 = 73;
     } else {
      i5 = (HEAP32[i15 + 44 >> 2] | 0) >>> 2 & 3;
      if (!((i5 | 0) == 1 | (i5 | 0) == 3)) {
       i31 = 73;
       break;
      }
      HEAP32[i10 >> 2] = 12;
      i32 = i13;
     }
    } while (0);
    if ((i31 | 0) == 73) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 15](i1);
     i32 = HEAP32[i6 >> 2] | 0;
    }
    if ((HEAP32[i32 + 20 >> 2] & 128 | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    i6 = HEAP32[i32 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i32 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
    HEAP32[i7 >> 2] = i6;
    i31 = i6 + 8 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    __ZN7WebCore26AnimationControllerPrivate26addElementChangeToDispatchEN3WTF7PassRefINS_7ElementEEE(i32, i7);
    STACKTOP = i4;
    return;
   }
  case 7:
   {
    d30 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
    i7 = i1 + 24 | 0;
    i32 = i1 + 16 | 0;
    HEAPF64[i32 >> 3] = +HEAPF64[i32 >> 3] + (d30 - +HEAPF64[i7 >> 3]);
    HEAPF64[i7 >> 3] = +-1;
    HEAP32[i10 >> 2] = 0;
    __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 1, +0);
    STACKTOP = i4;
    return;
   }
  case 6:
  case 9:
  case 8:
  case 10:
   {
    if ((i2 | 0) == 10) {
     if ((i11 | 0) == 6) {
      HEAP32[i10 >> 2] = 0;
      __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 10, d3);
      STACKTOP = i4;
      return;
     } else if ((i11 | 0) == 10) {
      d30 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i9 + 4 >> 2] | 0);
      i9 = HEAP32[i10 >> 2] | 0;
      i7 = i1 + 24 | 0;
      i32 = i1 + 16 | 0;
      HEAPF64[i32 >> 3] = +HEAPF64[i32 >> 3] + (d30 - +HEAPF64[i7 >> 3]);
      i33 = i9;
      i34 = i7;
     } else {
      HEAPF64[i1 + 16 >> 3] = +0;
      i33 = i11;
      i34 = i1 + 24 | 0;
     }
     HEAPF64[i34 >> 3] = +-1;
     if ((i33 | 0) == 8) {
      HEAP32[i10 >> 2] = 2;
      STACKTOP = i4;
      return;
     }
     HEAP32[i10 >> 2] = 3;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1) | 0) {
      i33 = HEAP32[i8 >> 2] | 0;
      if ((i33 | 0) == 0) {
       d35 = +0;
      } else {
       d35 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i33 + 4 >> 2] | 0);
      }
      __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 5, d35);
      HEAP8[i1 + 12 | 0] = 1;
      STACKTOP = i4;
      return;
     } else {
      i33 = HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] | 0;
      i34 = HEAP32[i8 >> 2] | 0;
      if ((i34 | 0) == 0) {
       d36 = +0;
      } else {
       d36 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i34 + 4 >> 2] | 0);
      }
      i34 = FUNCTION_TABLE_iid[i33 & 3](i1, d36 - +HEAPF64[i1 + 16 >> 3]) | 0;
      __ZN7WebCore26AnimationControllerPrivate42addToAnimationsWaitingForStartTimeResponseEPNS_13AnimationBaseEb(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0, i1, i34);
      HEAP8[i1 + 12 | 0] = i34 & 1;
      STACKTOP = i4;
      return;
     }
    } else if ((i2 | 0) == 5) {
     HEAP32[i10 >> 2] = 10;
     HEAPF64[i1 + 16 >> 3] = d3;
     i2 = i1 + 24 | 0;
     HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] + d3;
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i10 >> 2] = 9;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i1);
     STACKTOP = i4;
     return;
    }
    break;
   }
  default:
   {
    STACKTOP = i4;
    return;
   }
  }
 }
}
function __ZNK7WebCore13AnimationBase8progressEddPKNS_14TimingFunctionE(i1, d2, d3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 < 4 >>> 0) {
  d7 = +0;
  return +d7;
 }
 d8 = +HEAPF64[i1 + 24 >> 3];
 i9 = i1 + 16 | 0;
 d10 = +HEAPF64[i9 >> 3];
 do {
  if (d8 >= +0 | (i6 | 0) == 6) {
   d11 = d8 - d10;
  } else {
   if (d10 <= +0) {
    d11 = +0;
    break;
   }
   if ((i6 | 0) == 11) {
    d11 = +1;
    break;
   }
   i12 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i12 | 0) == 0) {
    d13 = +0;
    d14 = d10;
   } else {
    d15 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i12 + 4 >> 2] | 0);
    d13 = d15;
    d14 = +HEAPF64[i9 >> 3];
   }
   d11 = d13 - d14;
  }
 } while (0);
 i9 = i1 + 60 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 d14 = +HEAPF64[i1 + 32 >> 3];
 d13 = +HEAPF64[i1 + 16 >> 3];
 if (d13 > +0) {
  d16 = d14 * d13;
 } else {
  d16 = d14;
 }
 if (!((HEAP32[i5 >> 2] | 0) != 11 & d14 != +0)) {
  d7 = +1;
  return +d7;
 }
 if (!(d13 <= +0 | d11 < d16)) {
  i5 = ~~d13;
  if ((i5 & 1 | 0) != 0) {
   d7 = +1;
   return +d7;
  }
  d7 = d13 - +(i5 | 0) != +0 ? +1 : +0;
  return +d7;
 }
 d16 = d11 / d14;
 d14 = d16 < +0 ? +0 : d16;
 i5 = ~~d14;
 i6 = ~~d13;
 do {
  if (d13 != +-1) {
   if (d13 - +(i6 | 0) != +0) {
    i17 = i5;
    break;
   }
   i12 = i6 - 1 | 0;
   i17 = (i12 | 0) < (i5 | 0) ? i12 : i5;
  } else {
   i17 = i5;
  }
 } while (0);
 d13 = d14 - +(i17 | 0);
 i5 = HEAP32[i1 + 44 >> 2] & 3;
 if ((i5 | 0) == 1) {
  if ((i17 & 1 | 0) == 0) {
   d18 = d13;
  } else {
   i19 = 21;
  }
 } else if ((i5 | 0) == 3) {
  if ((i17 & 1 | 0) == 0) {
   i19 = 21;
  } else {
   d18 = d13;
  }
 } else if ((i5 | 0) == 2) {
  i19 = 21;
 } else {
  d18 = d13;
 }
 if ((i19 | 0) == 21) {
  d18 = +1 - d13;
 }
 if (d2 != +1 | d3 != +0) {
  d20 = (d18 - d3) * d2;
 } else {
  d20 = d18;
 }
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i1 + 40 >> 2] | 0;
   i17 = i5 + 4 | 0;
   i6 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i6 + 1;
   i17 = i5 + 4 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i17 >> 2] = i6;
    i21 = i5;
    break;
   }
   i6 = i17 - 4 | 0;
   if ((i6 | 0) == 0) {
    i21 = i5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   i21 = i5;
  } else {
   i21 = i4;
  }
 } while (0);
 i4 = HEAP32[i21 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d7 = d20;
  return +d7;
 } else if ((i4 | 0) == 2) {
  d18 = +(HEAP32[i21 + 12 >> 2] | 0);
  d2 = +Math_floor(d20 * d18);
  if ((HEAP8[i21 + 16 | 0] & 1) == 0) {
   d7 = d2 / d18;
   return +d7;
  } else {
   d3 = (d2 + +1) / d18;
   d7 = d3 < +1 ? d3 : +1;
   return +d7;
  }
 } else if ((i4 | 0) == 1) {
  d3 = +HEAPF64[i21 + 16 >> 3];
  d18 = +HEAPF64[i21 + 24 >> 3];
  d2 = d3 * +3;
  d13 = (+HEAPF64[i21 + 32 >> 3] - d3) * +3 - d2;
  d3 = +1 - d2 - d13;
  d14 = d18 * +3;
  d16 = (+HEAPF64[i21 + 40 >> 3] - d18) * +3 - d14;
  d18 = +1 - d14 - d16;
  d11 = +1 / (+HEAPF64[(HEAP32[i9 >> 2] | 0) + 32 >> 3] * +200);
  d10 = d3 * +3;
  d8 = d13 * +2;
  d15 = d20;
  i9 = 0;
  while (1) {
   d22 = d15 * (d2 + d15 * (d13 + d3 * d15)) - d20;
   if (+Math_abs(+d22) < d11) {
    d23 = d15;
    break;
   }
   d24 = d2 + d15 * (d8 + d10 * d15);
   if (+Math_abs(+d24) < +1e-6) {
    i19 = 34;
    break;
   }
   i21 = i9 + 1 | 0;
   if ((i21 | 0) < 8) {
    d15 = d15 - d22 / d24;
    i9 = i21;
   } else {
    i19 = 34;
    break;
   }
  }
  L61 : do {
   if ((i19 | 0) == 34) {
    if (d20 < +0) {
     d23 = +0;
     break;
    }
    if (d20 > +1) {
     d23 = +1;
     break;
    } else {
     d25 = +0;
     d26 = +1;
     d27 = d20;
    }
    while (1) {
     d15 = d27 * (d2 + d27 * (d13 + d3 * d27));
     if (+Math_abs(+(d15 - d20)) < d11) {
      d23 = d27;
      break L61;
     }
     i9 = d15 < d20;
     d15 = i9 ? d27 : d25;
     d10 = i9 ? d26 : d27;
     d8 = d15 + (d10 - d15) * +.5;
     if (d15 < d10) {
      d25 = d15;
      d26 = d10;
      d27 = d8;
     } else {
      d23 = d8;
      break;
     }
    }
   }
  } while (0);
  d7 = d23 * (d14 + d23 * (d16 + d18 * d23));
  return +d7;
 } else {
  d7 = +0;
  return +d7;
 }
 return +0;
}
function __ZN7WebCore13AnimationBase27fireAnimationEventsIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (!((i5 | 0) == 1 | (i5 | 0) == 4 | (i5 | 0) == 5)) {
  return;
 }
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i6 = (HEAP32[i4 >> 2] | 0) == 1;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  d8 = +0;
 } else {
  d8 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i7 + 4 >> 2] | 0);
 }
 do {
  if (i6) {
   if (d8 - +HEAPF64[i1 + 32 >> 3] < +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 3]) {
    break;
   }
   __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 3, +0);
  } else {
   d9 = d8 - +HEAPF64[i1 + 16 >> 3];
   d10 = d9 < +0 ? +0 : d9;
   d9 = +HEAPF64[i1 + 40 >> 3];
   if (!(d9 < +0 | d10 < d9)) {
    HEAP32[i4 >> 2] = 5;
    __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 7, d9);
    break;
   }
   i7 = i1 + 48 | 0;
   d9 = +HEAPF64[i7 >> 3];
   if (d9 < +0) {
    d11 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
    d12 = d10 + (d11 - +_fmod(+d10, +d11));
    HEAPF64[i7 >> 3] = d12;
    d13 = d12;
   } else {
    d13 = d9;
   }
   if (d10 < d13) {
    break;
   }
   d9 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
   HEAPF64[i7 >> 3] = d10 + (d9 - +_fmod(+d10, +d9));
   __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 6, d13);
  }
 } while (0);
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore18CompositeAnimationD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i5 >> 2] = i4;
 }
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 return;
}
function __ZNK7WebCore13AnimationBase14fractionalTimeEddd(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0;
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 d6 = +HEAPF64[i5 + 32 >> 3];
 if (d6 != +0) {
  d7 = d3 / d6;
 } else {
  d7 = +1;
 }
 d6 = d7 < +0 ? +0 : d7;
 i1 = ~~d6;
 d7 = +HEAPF64[i5 + 16 >> 3];
 i8 = ~~d7;
 do {
  if (d7 != +-1) {
   if (d7 - +(i8 | 0) != +0) {
    i9 = i1;
    break;
   }
   i10 = i8 - 1 | 0;
   i9 = (i10 | 0) < (i1 | 0) ? i10 : i1;
  } else {
   i9 = i1;
  }
 } while (0);
 d7 = d6 - +(i9 | 0);
 i1 = HEAP32[i5 + 44 >> 2] & 3;
 if ((i1 | 0) == 1) {
  if ((i9 & 1 | 0) == 0) {
   d11 = d7;
  } else {
   i12 = 9;
  }
 } else if ((i1 | 0) == 2) {
  i12 = 9;
 } else if ((i1 | 0) == 3) {
  if ((i9 & 1 | 0) == 0) {
   i12 = 9;
  } else {
   d11 = d7;
  }
 } else {
  d11 = d7;
 }
 if ((i12 | 0) == 9) {
  d11 = +1 - d7;
 }
 if (!(d2 != +1 | d4 != +0)) {
  d13 = d11;
  return +d13;
 }
 d13 = (d11 - d4) * d2;
 return +d13;
}
function __ZN7WebCore13AnimationBase26goIntoEndingOrLoopingStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +0;
 } else {
  d3 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i2 + 4 >> 2] | 0);
 }
 d4 = d3 - +HEAPF64[i1 + 16 >> 3];
 d3 = d4 < +0 ? +0 : d4;
 i2 = i1 + 40 | 0;
 d4 = +HEAPF64[i2 >> 3];
 if (!(d4 < +0 | d3 < d4)) {
  d5 = d4;
  d6 = d4;
  i7 = d6 < +0;
  i8 = d5 < d6;
  i9 = i7 | i8;
  i10 = i9 ? 4 : 5;
  i11 = i1 + 8 | 0;
  HEAP32[i11 >> 2] = i10;
  return;
 }
 d12 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
 if (d12 > +0) {
  d13 = d12 - +_fmod(+d3, +d12);
  d14 = d13;
  d15 = +HEAPF64[i2 >> 3];
 } else {
  d14 = +0;
  d15 = d4;
 }
 d5 = d3 + d14;
 d6 = d15;
 i7 = d6 < +0;
 i8 = d5 < d6;
 i9 = i7 | i8;
 i10 = i9 ? 4 : 5;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = i10;
 return;
}
function __ZNK7WebCore13AnimationBase18getTimeToNextEventERdRb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i4 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d5 = +0;
 } else {
  d5 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i4 + 4 >> 2] | 0);
 }
 d6 = d5 - +HEAPF64[i1 + 16 >> 3];
 d5 = d6 < +0 ? +0 : d6;
 i4 = i1 + 40 | 0;
 d6 = +HEAPF64[i4 >> 3];
 if (d6 < +0 | d5 < d6) {
  d7 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3];
  if (d7 > +0) {
   d8 = d7 - +_fmod(+d5, +d7);
   d9 = d8;
   d10 = +HEAPF64[i4 >> 3];
  } else {
   d9 = +0;
   d10 = d6;
  }
  d11 = d5 + d9;
  d12 = d9;
  d13 = d10;
 } else {
  d11 = d6;
  d12 = +0;
  d13 = d6;
 }
 HEAP8[i3] = (d13 < +0 | d11 < d13) & 1;
 HEAPF64[i2 >> 3] = d12;
 return;
}
function __ZN7WebCore13AnimationBase12freezeAtTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, d4 = +0, d5 = +0, i6 = 0;
 if ((HEAP32[i1 + 64 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 16 | 0;
 d4 = +HEAPF64[i3 >> 3];
 if (d4 != +0) {
  d5 = d4;
 } else {
  HEAP32[i1 + 8 >> 2] = 3;
  __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 5, +__ZN3WTF27monotonicallyIncreasingTimeEv());
  d5 = +HEAPF64[i3 >> 3];
 }
 d4 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 3];
 if (d4 < d2) {
  HEAPF64[i1 + 24 >> 3] = d5 + d2 - d4;
 } else {
  HEAPF64[i1 + 24 >> 3] = d5;
 }
 i3 = i1 + 56 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i6 | 0) | 0)) {
  return;
 }
 __ZN7WebCore20RenderBoxModelObject17suspendAnimationsEd(HEAP32[i3 >> 2] | 0, +HEAPF64[i1 + 24 >> 3]);
 return;
}
function __ZN7WebCore13AnimationBaseC2ERKNS_9AnimationEPNS_13RenderElementEPNS_18CompositeAnimationE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAPF64[i1 + 16 >> 3] = +0;
 _memset(i1 + 8 | 0, 0, 7) | 0;
 HEAPF64[i1 + 24 >> 3] = +-1;
 HEAPF64[i1 + 32 >> 3] = +0;
 i5 = i1 + 40 | 0;
 HEAPF64[i5 >> 3] = +-1;
 HEAPF64[i1 + 48 >> 3] = +-1;
 HEAP32[i1 + 56 >> 2] = i3;
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i6 = 0;
 } else {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i6 = HEAP32[i3 >> 2] | 0;
 }
 HEAP32[i1 + 64 >> 2] = i4;
 d8 = +HEAPF64[i6 + 16 >> 3];
 if (d8 <= +0) {
  return;
 }
 HEAPF64[i5 >> 3] = d8 * +HEAPF64[i6 + 32 >> 3];
 return;
}
function __ZN7WebCore13AnimationBase17timeToNextServiceEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, d4 = +0, i5 = 0, d6 = +0, d7 = +0;
 if (+HEAPF64[i1 + 24 >> 3] >= +0) {
  d2 = +-1;
  return +d2;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 1) {
  d4 = +HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 24 >> 3];
  i5 = HEAP32[i1 + 64 >> 2] | 0;
  if ((i5 | 0) == 0) {
   d6 = +0;
  } else {
   d6 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i5 + 4 >> 2] | 0);
  }
  d7 = d4 - (d6 - +HEAPF64[i1 + 32 >> 3]);
  d2 = d7 < +0 ? +0 : d7;
  return +d2;
 } else if ((i3 | 0) == 6 | (i3 | 0) == 0 | (i3 | 0) == 12) {
  d2 = +-1;
  return +d2;
 } else {
  __ZN7WebCore13AnimationBase27fireAnimationEventsIfNeededEv(i1);
  d2 = +0;
  return +d2;
 }
 return +0;
}
function __ZNK7WebCore13AnimationBase14getElapsedTimeEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0;
 d2 = +HEAPF64[i1 + 24 >> 3];
 do {
  if (d2 < +0) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == 6) {
    break;
   }
   i4 = i1 + 16 | 0;
   d5 = +HEAPF64[i4 >> 3];
   if (d5 <= +0) {
    d6 = +0;
    return +d6;
   }
   if ((i3 | 0) == 11) {
    d6 = +1;
    return +d6;
   }
   i3 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i3 | 0) == 0) {
    d7 = +0;
    d8 = d5;
   } else {
    d5 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i3 + 4 >> 2] | 0);
    d7 = d5;
    d8 = +HEAPF64[i4 >> 3];
   }
   d6 = d7 - d8;
   return +d6;
  }
 } while (0);
 d6 = d2 - +HEAPF64[i1 + 16 >> 3];
 return +d6;
}
function __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((i2 | 0) == 1) {
  i4 = 1;
 } else {
  i4 = (HEAP8[i3 + 60 | 0] & 1) != 0;
 }
 do {
  if (+HEAPF64[i1 + 24 >> 3] < +0) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if (!(i4 ^ (i3 | 0) == 6)) {
    i5 = i3;
    i6 = 8;
   }
  } else {
   if (!i4) {
    break;
   }
   i5 = HEAP32[i1 + 8 >> 2] | 0;
   i6 = 8;
  }
 } while (0);
 do {
  if ((i6 | 0) == 8) {
   if ((i5 | 0) == 6 | (i5 | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, i4 ? 11 : 10, +-1);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vid + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vid + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vid + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iid + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vid + 8;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 8;
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
function __ZN7WebCore13AnimationBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9AnimationD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore13AnimationBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore9AnimationD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore13AnimationBase24beginAnimationUpdateTimeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +0;
  return +d3;
 }
 d3 = +__ZN7WebCore26AnimationControllerPrivate24beginAnimationUpdateTimeEv(HEAP32[i2 + 4 >> 2] | 0);
 return +d3;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore13AnimationBase19setNeedsStyleRecalcEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 49152);
 return;
}
function __ZNK7WebCore13AnimationBase15animationsMatchEPKNS_9AnimationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9Animation15animationsMatchEPKS0_b(HEAP32[i1 + 60 >> 2] | 0, i2, 1) | 0;
}
function __ZNK7WebCore13AnimationBase16playStatePlayingEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + 44 >> 2] & 48 | 0) == 0 | 0;
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
function __ZNK7WebCore13AnimationBase8durationEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF64[(HEAP32[i1 + 60 >> 2] | 0) + 32 >> 3]);
}
function dynCall_iid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return FUNCTION_TABLE_iid[i1 & 3](i2 | 0, +d3) | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore13AnimationBase15affectsPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 15](i2 | 0, +d3);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore13AnimationBase20onAnimationIterationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function __ZN7WebCore13AnimationBase16onAnimationStartEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13AnimationBase14startAnimationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return 0;
}
function __ZN7WebCore13AnimationBase14setElapsedTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13AnimationBase14pauseAnimationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13AnimationBase14onAnimationEndEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore13AnimationBase16shouldFireEventsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13AnimationBase18overrideAnimationsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13AnimationBase10overriddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13AnimationBase12endAnimationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore13AnimationBase5pauseEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore13AnimationBase4playEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function b4(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(4);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vid = [b0,b0,__ZN7WebCore13AnimationBase14onAnimationEndEd,b0,__ZN7WebCore13AnimationBase20onAnimationIterationEd,b0,__ZN7WebCore13AnimationBase16onAnimationStartEd,b0,__ZN7WebCore13AnimationBase14pauseAnimationEd,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZN7WebCore13AnimationBase17timeToNextServiceEv,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv,b2,__ZN7WebCore13AnimationBaseD1Ev,b2,__ZN7WebCore13AnimationBaseD0Ev,b2,__ZN7WebCore13AnimationBase12endAnimationEv,b2,__ZN7WebCore13AnimationBase18overrideAnimationsEv,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore13AnimationBase10overriddenEv,b3,__ZNK7WebCore13AnimationBase16shouldFireEventsEv,b3,b3,b3];
  var FUNCTION_TABLE_iid = [b4,b4,__ZN7WebCore13AnimationBase14startAnimationEd,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore13AnimationBase15affectsPropertyENS_13CSSPropertyIDE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vid: dynCall_vid, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_iid: dynCall_iid, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vid": invoke_vid, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_iid": invoke_iid, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "_fabs": _fabs, "_floor": _floor, "___setErrNo": ___setErrNo, "_free": _free, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iid = Module["dynCall_iid"] = asm["dynCall_iid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13AnimationBase14startAnimationEd","__ZN7WebCore13AnimationBase14setElapsedTimeEd","__ZN7WebCore13AnimationBase14onAnimationEndEd","__ZN7WebCore13AnimationBase14pauseAnimationEd","__ZNK7WebCore13AnimationBase14getElapsedTimeEv","__ZN7WebCore13AnimationBase18overrideAnimationsEv","__ZN7WebCore13AnimationBase26goIntoEndingOrLoopingStateEv","_memset","__ZNK7WebCore13AnimationBase16shouldFireEventsEv","__ZNK7WebCore13AnimationBase24beginAnimationUpdateTimeEv","_memcpy","__ZN7WebCore13AnimationBase16onAnimationStartEd","__ZN7WebCore13AnimationBase5pauseEv","__ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv","__ZNK7WebCore13AnimationBase8durationEv","__ZNK7WebCore13AnimationBase15animationsMatchEPKNS_9AnimationE","__ZNK7WebCore13AnimationBase18getTimeToNextEventERdRb","__ZNK7WebCore13AnimationBase15affectsPropertyENS_13CSSPropertyIDE","__ZN7WebCore13AnimationBase12freezeAtTimeEd","__ZNK7WebCore13AnimationBase8progressEddPKNS_14TimingFunctionE","_strlen","__ZN7WebCore13AnimationBase20onAnimationIterationEd","__ZN7WebCore13AnimationBase27fireAnimationEventsIfNeededEv","__ZNK7WebCore13AnimationBase16playStatePlayingEv","__ZNK7WebCore13AnimationBase10overriddenEv","__ZN7WebCore13AnimationBaseD1Ev","__ZN7WebCore13AnimationBase19setNeedsStyleRecalcEPNS_7ElementE","__ZN7WebCore13AnimationBase4playEv","__ZN7WebCore13AnimationBaseD0Ev","__ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE","__ZN7WebCore13AnimationBase17timeToNextServiceEv","__ZN7WebCore13AnimationBase12endAnimationEv","__ZN7WebCore13AnimationBaseC2ERKNS_9AnimationEPNS_13RenderElementEPNS_18CompositeAnimationE","__ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd","__ZNK7WebCore13AnimationBase14fractionalTimeEddd"]

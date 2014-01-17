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
/* memory initializer */ allocate([59,0,0,0,53,0,0,0,34,0,0,0,48,0,0,0,96,0,0,0,95,0,0,0,96,0,0,0,95,0,0,0,98,0,0,0,97,0,0,0,98,0,0,0,97,0,0,0,165,0,0,0,82,0,0,0,165,0,0,0,82,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 192 | 0;
 i18 = i4 + 208 | 0;
 i19 = i4 + 224 | 0;
 i20 = i4 + 240 | 0;
 i21 = i4 + 256 | 0;
 i22 = i4 + 272 | 0;
 i23 = i4 + 288 | 0;
 i24 = i4 + 304 | 0;
 switch (i1 | 0) {
 case 285:
  {
   __ZN7WebCore15marginShorthandEv(i6);
   i25 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i25) {
      i26 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i26 = (HEAP32[i6 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i26 = HEAP32[i6 >> 2] | 0;
      break;
     } else {
      i26 = HEAP32[i6 >> 2] | 0;
      break;
     }
    } else {
     if (i25) {
      i26 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i26 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i26 = (HEAP32[i6 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i26 = (HEAP32[i6 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i26 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 284:
  {
   __ZN7WebCore15marginShorthandEv(i5);
   i26 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i26) {
      i28 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i28 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i28 = (HEAP32[i5 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i28 = (HEAP32[i5 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i26) {
      i28 = (HEAP32[i5 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i28 = (HEAP32[i5 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i28 = HEAP32[i5 >> 2] | 0;
      break;
     } else {
      i28 = HEAP32[i5 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i28 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 283:
  {
   __ZN7WebCore15marginShorthandEv(i7);
   i28 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i28) {
      i29 = HEAP32[i7 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i29 = (HEAP32[i7 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i29 = (HEAP32[i7 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i29 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i28) {
      i29 = HEAP32[i7 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i29 = (HEAP32[i7 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i29 = (HEAP32[i7 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i29 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i29 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 282:
  {
   __ZN7WebCore15marginShorthandEv(i8);
   i29 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i29) {
      i30 = (HEAP32[i8 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i30 = HEAP32[i8 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i30 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i30 = (HEAP32[i8 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i29) {
      i30 = (HEAP32[i8 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i30 = HEAP32[i8 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i30 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i30 = (HEAP32[i8 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i30 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 319:
  {
   __ZN7WebCore16paddingShorthandEv(i9);
   i30 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i30) {
      i31 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i31 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i31 = (HEAP32[i9 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i31 = (HEAP32[i9 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i30) {
      i31 = (HEAP32[i9 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i31 = (HEAP32[i9 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i31 = HEAP32[i9 >> 2] | 0;
      break;
     } else {
      i31 = HEAP32[i9 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i31 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 320:
  {
   __ZN7WebCore16paddingShorthandEv(i10);
   i31 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i31) {
      i32 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i32 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i32 = HEAP32[i10 >> 2] | 0;
      break;
     } else {
      i32 = HEAP32[i10 >> 2] | 0;
      break;
     }
    } else {
     if (i31) {
      i32 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i32 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i32 = (HEAP32[i10 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i32 = (HEAP32[i10 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i32 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 318:
  {
   __ZN7WebCore16paddingShorthandEv(i11);
   i32 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i32) {
      i33 = HEAP32[i11 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i33 = (HEAP32[i11 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i33 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i33 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i32) {
      i33 = HEAP32[i11 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i33 = (HEAP32[i11 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i33 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i33 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i33 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 317:
  {
   __ZN7WebCore16paddingShorthandEv(i12);
   i33 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i33) {
      i34 = (HEAP32[i12 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i34 = HEAP32[i12 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i34 = (HEAP32[i12 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i34 = (HEAP32[i12 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i33) {
      i34 = (HEAP32[i12 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i34 = HEAP32[i12 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i34 = (HEAP32[i12 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i34 = (HEAP32[i12 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i34 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 196:
  {
   if (HEAP8[H_BASE + 72 | 0] | 0) {
    i35 = HEAP32[H_BASE + 80 >> 2] | 0;
   } else {
    i34 = __Znwj(16) | 0;
    i12 = i34;
    HEAP32[i34 >> 2] = H_BASE + 8;
    HEAP32[i34 + 4 >> 2] = 0;
    HEAP32[i34 + 8 >> 2] = 4;
    HEAP32[i34 + 12 >> 2] = 33;
    HEAP32[H_BASE + 80 >> 2] = i12;
    HEAP8[H_BASE + 72 | 0] = 1;
    i35 = i12;
   }
   i12 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i12) {
      i36 = (HEAP32[i35 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i36 = (HEAP32[i35 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i36 = (HEAP32[i35 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i36 = (HEAP32[i35 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i12) {
      i36 = (HEAP32[i35 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i36 = (HEAP32[i35 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i36 = HEAP32[i35 >> 2] | 0;
      break;
     } else {
      i36 = HEAP32[i35 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i36 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 204:
  {
   if (HEAP8[H_BASE + 72 | 0] | 0) {
    i37 = HEAP32[H_BASE + 80 >> 2] | 0;
   } else {
    i36 = __Znwj(16) | 0;
    i35 = i36;
    HEAP32[i36 >> 2] = H_BASE + 8;
    HEAP32[i36 + 4 >> 2] = 0;
    HEAP32[i36 + 8 >> 2] = 4;
    HEAP32[i36 + 12 >> 2] = 33;
    HEAP32[H_BASE + 80 >> 2] = i35;
    HEAP8[H_BASE + 72 | 0] = 1;
    i37 = i35;
   }
   i35 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i35) {
      i38 = (HEAP32[i37 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i38 = (HEAP32[i37 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i38 = HEAP32[i37 >> 2] | 0;
      break;
     } else {
      i38 = HEAP32[i37 >> 2] | 0;
      break;
     }
    } else {
     if (i35) {
      i38 = (HEAP32[i37 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i38 = (HEAP32[i37 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i38 = (HEAP32[i37 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i38 = (HEAP32[i37 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i38 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 192:
  {
   if (HEAP8[H_BASE + 72 | 0] | 0) {
    i39 = HEAP32[H_BASE + 80 >> 2] | 0;
   } else {
    i38 = __Znwj(16) | 0;
    i37 = i38;
    HEAP32[i38 >> 2] = H_BASE + 8;
    HEAP32[i38 + 4 >> 2] = 0;
    HEAP32[i38 + 8 >> 2] = 4;
    HEAP32[i38 + 12 >> 2] = 33;
    HEAP32[H_BASE + 80 >> 2] = i37;
    HEAP8[H_BASE + 72 | 0] = 1;
    i39 = i37;
   }
   i37 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i37) {
      i40 = HEAP32[i39 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i40 = (HEAP32[i39 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i40 = (HEAP32[i39 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i40 = (HEAP32[i39 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i37) {
      i40 = HEAP32[i39 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i40 = (HEAP32[i39 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i40 = (HEAP32[i39 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i40 = (HEAP32[i39 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i40 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 188:
  {
   if (HEAP8[H_BASE + 72 | 0] | 0) {
    i41 = HEAP32[H_BASE + 80 >> 2] | 0;
   } else {
    i40 = __Znwj(16) | 0;
    i39 = i40;
    HEAP32[i40 >> 2] = H_BASE + 8;
    HEAP32[i40 + 4 >> 2] = 0;
    HEAP32[i40 + 8 >> 2] = 4;
    HEAP32[i40 + 12 >> 2] = 33;
    HEAP32[H_BASE + 80 >> 2] = i39;
    HEAP8[H_BASE + 72 | 0] = 1;
    i41 = i39;
   }
   i39 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i39) {
      i42 = (HEAP32[i41 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i42 = HEAP32[i41 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i42 = (HEAP32[i41 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i42 = (HEAP32[i41 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i39) {
      i42 = (HEAP32[i41 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i42 = HEAP32[i41 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i42 = (HEAP32[i41 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i42 = (HEAP32[i41 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i42 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 197:
  {
   __ZN7WebCore20borderColorShorthandEv(i13);
   i42 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i42) {
      i43 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i43 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i43 = (HEAP32[i13 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i43 = (HEAP32[i13 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i42) {
      i43 = (HEAP32[i13 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i43 = (HEAP32[i13 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i43 = HEAP32[i13 >> 2] | 0;
      break;
     } else {
      i43 = HEAP32[i13 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i43 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 205:
  {
   __ZN7WebCore20borderColorShorthandEv(i14);
   i43 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i43) {
      i44 = (HEAP32[i14 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i44 = (HEAP32[i14 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i44 = HEAP32[i14 >> 2] | 0;
      break;
     } else {
      i44 = HEAP32[i14 >> 2] | 0;
      break;
     }
    } else {
     if (i43) {
      i44 = (HEAP32[i14 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i44 = (HEAP32[i14 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i44 = (HEAP32[i14 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i44 = (HEAP32[i14 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i44 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 193:
  {
   __ZN7WebCore20borderColorShorthandEv(i15);
   i44 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i44) {
      i45 = HEAP32[i15 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i45 = (HEAP32[i15 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i45 = (HEAP32[i15 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i45 = (HEAP32[i15 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i44) {
      i45 = HEAP32[i15 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i45 = (HEAP32[i15 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i45 = (HEAP32[i15 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i45 = (HEAP32[i15 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i45 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 189:
  {
   __ZN7WebCore20borderColorShorthandEv(i16);
   i45 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i45) {
      i46 = (HEAP32[i16 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i46 = HEAP32[i16 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i46 = (HEAP32[i16 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i46 = (HEAP32[i16 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i45) {
      i46 = (HEAP32[i16 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i46 = HEAP32[i16 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i46 = (HEAP32[i16 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i46 = (HEAP32[i16 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i46 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 198:
  {
   __ZN7WebCore20borderStyleShorthandEv(i17);
   i46 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i46) {
      i47 = (HEAP32[i17 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i47 = (HEAP32[i17 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i47 = (HEAP32[i17 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i47 = (HEAP32[i17 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i46) {
      i47 = (HEAP32[i17 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i47 = (HEAP32[i17 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i47 = HEAP32[i17 >> 2] | 0;
      break;
     } else {
      i47 = HEAP32[i17 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i47 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 206:
  {
   __ZN7WebCore20borderStyleShorthandEv(i18);
   i47 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i47) {
      i48 = (HEAP32[i18 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i48 = (HEAP32[i18 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i48 = HEAP32[i18 >> 2] | 0;
      break;
     } else {
      i48 = HEAP32[i18 >> 2] | 0;
      break;
     }
    } else {
     if (i47) {
      i48 = (HEAP32[i18 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i48 = (HEAP32[i18 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i48 = (HEAP32[i18 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i48 = (HEAP32[i18 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i48 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 194:
  {
   __ZN7WebCore20borderStyleShorthandEv(i19);
   i48 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i48) {
      i49 = HEAP32[i19 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i49 = (HEAP32[i19 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i49 = (HEAP32[i19 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i49 = (HEAP32[i19 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i48) {
      i49 = HEAP32[i19 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i49 = (HEAP32[i19 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i49 = (HEAP32[i19 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i49 = (HEAP32[i19 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i49 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 190:
  {
   __ZN7WebCore20borderStyleShorthandEv(i20);
   i49 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i49) {
      i50 = (HEAP32[i20 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i50 = HEAP32[i20 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i50 = (HEAP32[i20 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i50 = (HEAP32[i20 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i49) {
      i50 = (HEAP32[i20 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i50 = HEAP32[i20 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i50 = (HEAP32[i20 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i50 = (HEAP32[i20 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i50 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 199:
  {
   __ZN7WebCore20borderWidthShorthandEv(i21);
   i50 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i50) {
      i51 = (HEAP32[i21 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i51 = (HEAP32[i21 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i51 = (HEAP32[i21 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i51 = (HEAP32[i21 >> 2] | 0) + 8 | 0;
      break;
     }
    } else {
     if (i50) {
      i51 = (HEAP32[i21 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i51 = (HEAP32[i21 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i51 = HEAP32[i21 >> 2] | 0;
      break;
     } else {
      i51 = HEAP32[i21 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i51 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 207:
  {
   __ZN7WebCore20borderWidthShorthandEv(i22);
   i51 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i51) {
      i52 = (HEAP32[i22 >> 2] | 0) + 12 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i52 = (HEAP32[i22 >> 2] | 0) + 12 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i52 = HEAP32[i22 >> 2] | 0;
      break;
     } else {
      i52 = HEAP32[i22 >> 2] | 0;
      break;
     }
    } else {
     if (i51) {
      i52 = (HEAP32[i22 >> 2] | 0) + 4 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i52 = (HEAP32[i22 >> 2] | 0) + 4 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i52 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
      break;
     } else {
      i52 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i52 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 195:
  {
   __ZN7WebCore20borderWidthShorthandEv(i23);
   i52 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i52) {
      i53 = HEAP32[i23 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i53 = (HEAP32[i23 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i53 = (HEAP32[i23 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i53 = (HEAP32[i23 >> 2] | 0) + 4 | 0;
      break;
     }
    } else {
     if (i52) {
      i53 = HEAP32[i23 >> 2] | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i53 = (HEAP32[i23 >> 2] | 0) + 8 | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i53 = (HEAP32[i23 >> 2] | 0) + 12 | 0;
      break;
     } else {
      i53 = (HEAP32[i23 >> 2] | 0) + 4 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i53 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 191:
  {
   __ZN7WebCore20borderWidthShorthandEv(i24);
   i53 = (i3 | 0) == 0;
   do {
    if ((i2 | 0) == 1) {
     if (i53) {
      i54 = (HEAP32[i24 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i54 = HEAP32[i24 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i54 = (HEAP32[i24 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i54 = (HEAP32[i24 >> 2] | 0) + 12 | 0;
      break;
     }
    } else {
     if (i53) {
      i54 = (HEAP32[i24 >> 2] | 0) + 8 | 0;
      break;
     }
     if ((i3 | 0) == 3) {
      i54 = HEAP32[i24 >> 2] | 0;
      break;
     } else if ((i3 | 0) == 2) {
      i54 = (HEAP32[i24 >> 2] | 0) + 4 | 0;
      break;
     } else {
      i54 = (HEAP32[i24 >> 2] | 0) + 12 | 0;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i54 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 275:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i55 = H_BASE + 64 | 0;
   } else {
    i55 = H_BASE + 68 | 0;
   }
   i27 = HEAP32[i55 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 276:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i56 = H_BASE + 60 | 0;
   } else {
    i56 = H_BASE + 56 | 0;
   }
   i27 = HEAP32[i56 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 313:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i57 = H_BASE + 48 | 0;
   } else {
    i57 = H_BASE + 52 | 0;
   }
   i27 = HEAP32[i57 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 314:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i58 = H_BASE + 44 | 0;
   } else {
    i58 = H_BASE + 40 | 0;
   }
   i27 = HEAP32[i58 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 311:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i59 = H_BASE + 32 | 0;
   } else {
    i59 = H_BASE + 36 | 0;
   }
   i27 = HEAP32[i59 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 case 312:
  {
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    i60 = H_BASE + 28 | 0;
   } else {
    i60 = H_BASE + 24 | 0;
   }
   i27 = HEAP32[i60 >> 2] | 0;
   STACKTOP = i4;
   return i27 | 0;
  }
 default:
  {
   i27 = i1;
   STACKTOP = i4;
   return i27 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore11CSSProperty29wrapValueInCommaSeparatedListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i3 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore12CSSValueListC1ENS_8CSSValue18ValueListSeparatorE(i3, 1);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i5 = i4 + 16 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
  i4 = i3 + 1 | 0;
  i6 = i4 + (i3 >>> 2) | 0;
  i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i7 >>> 0 > i4 >>> 0 ? i7 : i4);
  HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i1;
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i5 >> 2] = i9;
  return;
 } else {
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i3 << 2) >> 2] = i1;
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i5 >> 2] = i9;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 4 >>> 0) {
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
   HEAP32[i3 >> 2] = 4;
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
function __ZNK7WebCore21StylePropertyMetadata11shorthandIDEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1;
 i1 = HEAP16[i4 >> 1] | 0;
 if ((i1 & 1024) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore29matchingShorthandsForLonghandENS_13CSSPropertyIDE(i3, i1 & 1023);
 i1 = (HEAPU16[i4 >> 1] | 0) >>> 11 & 3;
 i4 = i3 + 8 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if (i6 >>> 0 <= i1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i8 + (i1 << 4) + 12 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 if ((i8 | 0) == 0) {
  i5 = i9;
  STACKTOP = i2;
  return i5 | 0;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 i5 = i9;
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
function __ZN7WebCore11CSSProperty24isDirectionAwarePropertyENS_13CSSPropertyIDE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (i1 | 0) {
 case 197:
 case 198:
 case 199:
 case 205:
 case 206:
 case 207:
 case 193:
 case 194:
 case 195:
 case 189:
 case 190:
 case 191:
 case 284:
 case 285:
 case 283:
 case 282:
 case 319:
 case 320:
 case 318:
 case 317:
 case 275:
 case 276:
 case 313:
 case 314:
 case 311:
 case 312:
  {
   i2 = 1;
   break;
  }
 default:
  {
   i2 = 0;
  }
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE","_memset","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore21StylePropertyMetadata11shorthandIDEv","_memcpy","__ZN7WebCore11CSSProperty29wrapValueInCommaSeparatedListEv","__ZN7WebCore11CSSProperty24isDirectionAwarePropertyENS_13CSSPropertyIDE"]

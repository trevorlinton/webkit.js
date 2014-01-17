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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16DOMMimeTypeArrayC1EPNS_5FrameE;
var __ZN7WebCore16DOMMimeTypeArrayD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore16DOMMimeTypeArrayE=(H_BASE+8)|0;
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
function __ZN7WebCore16DOMMimeTypeArray9namedItemERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = __ZNK7WebCore4Page10pluginDataEv(i7) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 + 24 | 0;
   i9 = i8 + 16 | 0;
   i10 = i3 | 0;
   i11 = 0;
   while (1) {
    if (i11 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     i12 = 16;
     break;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 * 20 & -1) >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) {
     break;
    } else {
     i11 = i11 + 1 | 0;
    }
   }
   if ((i12 | 0) == 16) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = HEAP32[i6 >> 2] | 0;
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i7 = i9;
   i13 = i5 | 0;
   HEAP32[i13 >> 2] = i8;
   __ZN7WebCore11DOMMimeTypeC1EN3WTF10PassRefPtrINS_10PluginDataEEEPNS_5FrameEj(i7, i5, i10, i11);
   i10 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore10PluginDataD2Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i7;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i10 = i9 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11 + 1;
   if ((i11 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i7);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i10 >> 2] = i11;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16DOMMimeTypeArray4itemEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = __ZNK7WebCore4Page10pluginDataEv(i7) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if ((HEAP32[i8 + 24 >> 2] | 0) >>> 0 <= i3 >>> 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = HEAP32[i6 >> 2] | 0;
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i10 = i9;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i8;
   __ZN7WebCore11DOMMimeTypeC1EN3WTF10PassRefPtrINS_10PluginDataEEEPNS_5FrameEj(i10, i5, i7, i3);
   i7 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i11 = i7 | 0;
     i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore10PluginDataD2Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i11 >> 2] = i8;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i10;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i7 = i9 + 8 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8 + 1;
   if ((i8 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i10);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10PluginInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 20 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore13MimeClassInfoD2Ev(i3);
   i3 = i3 + 20 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCore13MimeClassInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore10PluginDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 36 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i2 * 20 & -1) | 0;
  i2 = i5;
  while (1) {
   __ZN7WebCore13MimeClassInfoD2Ev(i2);
   i2 = i2 + 20 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 4 | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i6 >> 2] | 0;
  i5 = i2 + (i4 * 28 & -1) | 0;
  i4 = i2;
  while (1) {
   __ZN7WebCore10PluginInfoD2Ev(i4);
   i4 = i4 + 28 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore16DOMMimeTypeArray18canGetItemsForNameERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = __ZNK7WebCore4Page10pluginDataEv(i1) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3 + 24 | 0;
 i5 = i3 + 16 | 0;
 i3 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
   i4 = 0;
   i6 = 10;
   break;
  }
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 * 20 & -1) >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0) {
   i4 = 1;
   i6 = 8;
   break;
  } else {
   i2 = i2 + 1 | 0;
  }
 }
 if ((i6 | 0) == 8) {
  return i4 | 0;
 } else if ((i6 | 0) == 10) {
  return i4 | 0;
 }
 return 0;
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
function __ZNK7WebCore16DOMMimeTypeArray6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    break;
   }
   i4 = __ZNK7WebCore4Page10pluginDataEv(i1) | 0;
   if ((i4 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i4 + 24 >> 2] | 0;
  }
 } while (0);
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
function __ZNK7WebCore16DOMMimeTypeArray13getPluginDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = __ZNK7WebCore4Page10pluginDataEv(i1) | 0;
  }
 } while (0);
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore16DOMMimeTypeArrayD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16DOMMimeTypeArrayD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore16DOMMimeTypeArrayD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore16DOMMimeTypeArrayC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore16DOMMimeTypeArrayC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv(i1 | 0);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper,b0,__ZN7WebCore16DOMMimeTypeArrayD2Ev,b0,__ZN7WebCore16DOMMimeTypeArrayD0Ev,b0,vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper,b0,vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper,b0,vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper,b1,__ZN7WebCore16DOMMimeTypeArrayC2EPNS_5FrameE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","_memcpy","__ZN7WebCore16DOMMimeTypeArrayD2Ev","__ZN7WebCore16DOMMimeTypeArrayD0Ev","__ZNK7WebCore16DOMMimeTypeArray13getPluginDataEv","__ZNK7WebCore16DOMMimeTypeArray6lengthEv","_memset","__ZN7WebCore16DOMMimeTypeArray9namedItemERKN3WTF12AtomicStringE","__ZN7WebCore10PluginDataD2Ev","__ZN7WebCore16DOMMimeTypeArrayC2EPNS_5FrameE","__ZN7WebCore16DOMMimeTypeArray4itemEj","__ZN7WebCore13MimeClassInfoD2Ev","__ZN7WebCore10PluginInfoD2Ev","__ZN7WebCore16DOMMimeTypeArray18canGetItemsForNameERKN3WTF12AtomicStringE"]

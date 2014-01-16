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
H_BASE = parentModule["_malloc"](152 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 152;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9ClipboardC1ENS_21ClipboardAccessPolicyEN3WTF10PassOwnPtrINS_10PasteboardEEENS0_13ClipboardTypeEb;
var __ZN7WebCore9ClipboardD1Ev;
var __ZN7WebCore15DragImageLoaderC1EPNS_9ClipboardE;
/* memory initializer */ allocate([99,111,112,121,76,105,110,107,0,0,0,0,0,0,0,0,108,105,110,107,77,111,118,101,0,0,0,0,0,0,0,0,99,111,112,121,77,111,118,101,0,0,0,0,0,0,0,0,97,108,108,0,0,0,0,0,109,111,118,101,0,0,0,0,108,105,110,107,0,0,0,0,99,111,112,121,0,0,0,0,110,111,110,101,0,0,0,0,117,110,105,110,105,116,105,97,108,105,122,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15DragImageLoaderE=(H_BASE+112)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
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
function __ZNK7WebCore9Clipboard5filesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if (!((i5 | 0) == 4 | (i5 | 0) == 2)) {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  __ZN7WebCore8FileListC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP8[i2 + 12 | 0] & 1) != 0) {
   if ((HEAP8[i2 + 13 | 0] & 1) != 0) {
    break;
   }
   i5 = __ZN3WTF10fastMallocEj(20) | 0;
   __ZN7WebCore8FileListC1Ev(i5);
   HEAP32[i1 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore10Pasteboard13readFilenamesEv(i4, HEAP32[i2 + 8 >> 2] | 0);
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 i5 = i2;
 __ZN7WebCore8FileListC1Ev(i5);
 i6 = i4 + 8 | 0;
 i7 = i4 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   HEAP32[i1 >> 2] = i5;
  } else {
   i8 = i2 + 8 | 0;
   i9 = i2 + 16 | 0;
   i10 = i2 + 12 | 0;
   i11 = i8;
   i12 = i8;
   i8 = 0;
   while (1) {
    i13 = (HEAP32[i7 >> 2] | 0) + (i8 << 2) | 0;
    i14 = __ZN3WTF10fastMallocEj(80) | 0;
    __ZN7WebCore4FileC1ERKN3WTF6StringENS0_23ContentTypeLookupPolicyE(i14, i13, 1);
    i13 = HEAP32[i9 >> 2] | 0;
    if ((i13 | 0) == (HEAP32[i10 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i11, i13 + 1 | 0);
     HEAP32[(HEAP32[i12 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i14;
    } else {
     HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] = i14;
    }
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    i8 = i8 + 1 | 0;
    i15 = HEAP32[i6 >> 2] | 0;
    if (i8 >>> 0 >= i15 >>> 0) {
     break;
    }
   }
   HEAP32[i1 >> 2] = i5;
   if ((i15 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = i8 + (i15 << 2) | 0;
   i12 = i8;
   while (1) {
    i8 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i11 = i8 | 0;
      i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i11 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i12 = i12 + 4 | 0;
    if ((i12 | 0) == (i9 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9Clipboard12setDragImageEPNS_7ElementEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 if (((HEAP32[i1 + 4 >> 2] | 0) - 1 | 0) >>> 0 >= 2 >>> 0) {
  return;
 }
 do {
  if ((i2 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i6 & 16 | 0) == 0) {
    i5 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 0;
    break;
   }
   if ((i6 & 256 | 0) != 0) {
    i5 = 0;
    break;
   }
   i5 = HEAP32[i2 + 64 >> 2] | 0;
  }
 } while (0);
 i6 = i1 + 28 | 0;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = i4;
 i4 = i1 + 44 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i3 = i1 + 36 | 0;
 i7 = i3 | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i8, i6 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i3 | 0, i5 | 0);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  i3 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i3 | 0) == 0) {
    i6 = __ZN3WTF10fastMallocEj(8) | 0;
    i8 = i6;
    HEAP32[i6 >> 2] = H_BASE + 120;
    HEAP32[i6 + 4 >> 2] = i1;
    i6 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i8;
    if ((i6 | 0) == 0) {
     i9 = i8;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
    i9 = HEAP32[i4 >> 2] | 0;
   } else {
    i9 = i3;
   }
  } while (0);
  __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i7 >> 2] | 0, i9 | 0);
 }
 i9 = (i5 | 0) != 0 ? 0 : i2;
 if ((i9 | 0) != 0) {
  i2 = i9 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 40 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i9;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i2 = i9 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9Clipboard15updateDragImageEv(i1);
 return;
}
function __ZN7WebCore9ClipboardD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = i3;
   } else {
    __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i3 | 0);
    i4 = HEAP32[i2 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    } else {
     i5 = i4;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i1 + 36 | 0);
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5 | 0);
 return;
}
function __ZN7WebCore9ClipboardD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = i3;
   } else {
    __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i3 | 0);
    i4 = HEAP32[i2 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    } else {
     i5 = i4;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i1 + 36 | 0);
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5 | 0);
 return;
}
function __ZN7WebCore9Clipboard23setDestinationOperationENS_13DragOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (i2 & 20 | 0) != 0;
 i6 = i5 ^ 1;
 i7 = i2 & 1;
 do {
  if ((i7 | 0) == 0 | i6) {
   if ((i2 | 0) == -1) {
    i8 = H_BASE + 56 | 0;
    break;
   }
   i9 = (i2 & 2 | 0) == 0;
   if (!(i9 | i6)) {
    i8 = H_BASE + 24 | 0;
    break;
   }
   i10 = (i7 | 0) != 0 & (i9 ^ 1);
   if ((i2 & 21 | 0) != 0) {
    i8 = i10 | i5 ? i10 ? H_BASE + 8 | 0 : H_BASE + 64 | 0 : H_BASE + 80 | 0;
    break;
   }
   i8 = i9 ? H_BASE + 88 | 0 : H_BASE + 72 | 0;
  } else {
   i8 = (i2 & 2 | 0) != 0 | (i2 | 0) == -1 ? H_BASE + 56 | 0 : H_BASE + 40 | 0;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, i8);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9Clipboard18setSourceOperationENS_13DragOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (i2 & 20 | 0) != 0;
 i6 = i5 ^ 1;
 i7 = i2 & 1;
 do {
  if ((i7 | 0) == 0 | i6) {
   if ((i2 | 0) == -1) {
    i8 = H_BASE + 56 | 0;
    break;
   }
   i9 = (i2 & 2 | 0) == 0;
   if (!(i9 | i6)) {
    i8 = H_BASE + 24 | 0;
    break;
   }
   i10 = (i7 | 0) != 0 & (i9 ^ 1);
   if ((i2 & 21 | 0) != 0) {
    i8 = i10 | i5 ? i10 ? H_BASE + 8 | 0 : H_BASE + 64 | 0 : H_BASE + 80 | 0;
    break;
   }
   i8 = i9 ? H_BASE + 88 | 0 : H_BASE + 72 | 0;
  } else {
   i8 = (i2 & 2 | 0) != 0 | (i2 | 0) == -1 ? H_BASE + 56 | 0 : H_BASE + 40 | 0;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, i8);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9Clipboard15updateDragImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4;
 if ((HEAP8[i1 + 24 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i4 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i4 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i6 = HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i2;
    return;
   } else {
    i8 = __ZN7WebCore22createDragImageForNodeERNS_5FrameERNS_4NodeE(i6, i4 | 0) | 0;
    break;
   }
  } else {
   i4 = __ZN7WebCore11CachedImage5imageEv(i7) | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 1;
   i8 = __ZN7WebCore24createDragImageFromImageEPNS_5ImageENS_27ImageOrientationDescriptionE(i4, i3) | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore10Pasteboard12setDragImageEPvRKNS_8IntPointE(HEAP32[i1 + 8 >> 2] | 0, i8, i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9Clipboard20createForDragAndDropENS_21ClipboardAccessPolicyERKNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZN3WTF10fastMallocEj(48) | 0;
 __ZN7WebCore10Pasteboard20createForDragAndDropERKNS_8DragDataE(i7, i3);
 i9 = __ZNK7WebCore8DragData13containsFilesEv(i3) | 0;
 HEAP32[i8 >> 2] = 1;
 HEAP32[i8 + 4 >> 2] = i2;
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i7;
 HEAP8[i8 + 12 | 0] = 1;
 HEAP8[i8 + 13 | 0] = i9 & 1;
 HEAP32[i5 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8 + 16 | 0, i5);
 HEAP32[i6 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8 + 20 | 0, i6);
 HEAP8[i8 + 24 | 0] = 0;
 HEAP32[i8 + 28 >> 2] = 0;
 HEAP32[i8 + 32 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i8 + 36 | 0);
 HEAP32[i8 + 40 >> 2] = 0;
 HEAP32[i8 + 44 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL14dragOpFromIEOpERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 96 | 0) | 0) {
  i3 = -1;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 88 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 80 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 72 | 0) | 0) {
  i3 = 2;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 64 | 0) | 0) {
  i3 = 20;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 8 | 0) | 0) {
  i3 = 3;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i3 = 21;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 24 | 0) | 0) {
  i3 = 22;
  return i3 | 0;
 }
 i1 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 56 | 0) | 0;
 i3 = i1 ? -1 : 8;
 return i3 | 0;
}
function __ZN7WebCore9Clipboard21createForCopyAndPasteENS_21ClipboardAccessPolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = __ZN3WTF10fastMallocEj(48) | 0;
 if ((i2 | 0) == 2) {
  __ZN7WebCore10Pasteboard13createPrivateEv(i6);
 } else {
  __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i6);
 }
 HEAP32[i7 >> 2] = 1;
 HEAP32[i7 + 4 >> 2] = i2;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i6;
 HEAP8[i7 + 12 | 0] = 0;
 HEAP8[i7 + 13 | 0] = 0;
 HEAP32[i4 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7 + 16 | 0, i4);
 HEAP32[i5 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7 + 20 | 0, i5);
 HEAP8[i7 + 24 | 0] = 0;
 HEAP32[i7 + 28 >> 2] = 0;
 HEAP32[i7 + 32 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i7 + 36 | 0);
 HEAP32[i7 + 40 >> 2] = 0;
 HEAP32[i7 + 44 >> 2] = 0;
 HEAP32[i1 >> 2] = i7;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i7 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9Clipboard13setDropEffectERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i3 = i2 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 88 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 80 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 64 | 0) | 0) {
    break;
   }
   return;
  }
 } while (0);
 if (((HEAP32[i1 + 4 >> 2] | 0) - 2 | 0) >>> 0 >= 3 >>> 0) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 16 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore9Clipboard20createForDragAndDropEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = __ZN3WTF10fastMallocEj(48) | 0;
 __ZN7WebCore10Pasteboard20createForDragAndDropEv(i5);
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = 2;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i5;
 HEAP8[i6 + 12 | 0] = 1;
 HEAP8[i6 + 13 | 0] = 0;
 HEAP32[i3 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6 + 16 | 0, i3);
 HEAP32[i4 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6 + 20 | 0, i4);
 HEAP8[i6 + 24 | 0] = 0;
 HEAP32[i6 + 28 >> 2] = 0;
 HEAP32[i6 + 32 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i6 + 36 | 0);
 HEAP32[i6 + 40 >> 2] = 0;
 HEAP32[i6 + 44 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i6 | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9Clipboard15createDragImageERNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 28 | 0;
 i6 = i2;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = __ZN7WebCore11CachedImage5imageEv(i2) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 1;
  i7 = __ZN7WebCore24createDragImageFromImageEPNS_5ImageENS_27ImageOrientationDescriptionE(i6, i4) | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i7 = __ZN7WebCore22createDragImageForNodeERNS_5FrameERNS_4NodeE(i1, i4 | 0) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9ClipboardC2ENS_21ClipboardAccessPolicyEN3WTF10PassOwnPtrINS_10PasteboardEEENS0_13ClipboardTypeEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP8[i1 + 12 | 0] = (i4 | 0) != 0 | 0;
 HEAP8[i1 + 13 | 0] = i5 & 1;
 HEAP32[i7 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 16 | 0, i7);
 HEAP32[i8 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 20 | 0, i8);
 HEAP8[i1 + 24 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 36 | 0);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9ClipboardC1ENS_21ClipboardAccessPolicyEN3WTF10PassOwnPtrINS_10PasteboardEEENS0_13ClipboardTypeEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP8[i1 + 12 | 0] = (i4 | 0) != 0 | 0;
 HEAP8[i1 + 13 | 0] = i5 & 1;
 HEAP32[i7 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 16 | 0, i7);
 HEAP32[i8 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 20 | 0, i8);
 HEAP8[i1 + 24 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 36 | 0);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore9Clipboard16setEffectAllowedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 if ((__ZN7WebCoreL14dragOpFromIEOpERKN3WTF6StringE(i2) | 0) == 8) {
  return;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) != 2) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZNK7WebCore9Clipboard10dropEffectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 16 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 96 | 0) | 0) {
  HEAP32[i4 >> 2] = H_BASE + 88;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i4);
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
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
function __ZNK7WebCore9Clipboard7getDataERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if (!((i4 | 0) == 4 | (i4 | 0) == 2)) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 if ((HEAP8[i2 + 13 | 0] & 1) == 0) {
  __ZN7WebCore10Pasteboard10readStringERKN3WTF6StringE(i1, HEAP32[i2 + 8 >> 2] | 0, i3);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore9Clipboard7setDataERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != 2) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i1 + 13 | 0] & 1) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN7WebCore10Pasteboard11writeStringERKN3WTF6StringES4_(HEAP32[i1 + 8 >> 2] | 0, i2, i3) | 0;
 return i4 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 2;
}
function __ZNK7WebCore9Clipboard5typesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (((HEAP32[i2 + 4 >> 2] | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  __ZN7WebCore10Pasteboard5typesEv(i1, HEAP32[i2 + 8 >> 2] | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore9Clipboard13effectAllowedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore15DragImageLoader11stopLoadingERNS_20CachedResourceHandleINS_11CachedImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i2 >> 2] | 0, i1 | 0);
 return;
}
function __ZN7WebCore15DragImageLoader12startLoadingERNS_20CachedResourceHandleINS_11CachedImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i2 >> 2] | 0, i1 | 0);
 return;
}
function __ZN7WebCore15DragImageLoader6createEPNS_9ClipboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i3 >> 2] = H_BASE + 120;
 HEAP32[i3 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore9Clipboard9clearDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != 2) {
  return;
 }
 __ZN7WebCore10Pasteboard5clearERKN3WTF6StringE(HEAP32[i1 + 8 >> 2] | 0, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15DragImageLoader12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9Clipboard15updateDragImageEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZNK7WebCore9Clipboard15canSetDragImageEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return 0;
 } else {
  return ((HEAP32[i1 + 4 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0 | 0;
 }
 return 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore9Clipboard9clearDataEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != 2) {
  return;
 }
 __ZN7WebCore10Pasteboard5clearEv(HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore15DragImageLoaderC2EPNS_9ClipboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 120;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore15DragImageLoaderC1EPNS_9ClipboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 120;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function __ZNK7WebCore9Clipboard11canReadDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 return (i2 | 0) == 4 | (i2 | 0) == 2 | 0;
}
function __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9Clipboard20destinationOperationEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCoreL14dragOpFromIEOpERKN3WTF6StringE(i1 + 16 | 0) | 0;
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
function __ZNK7WebCore9Clipboard15sourceOperationEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCoreL14dragOpFromIEOpERKN3WTF6StringE(i1 + 20 | 0) | 0;
}
function __ZNK7WebCore9Clipboard12canReadTypesEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 4 >> 2] | 0) - 2 | 0) >>> 0 < 3 >>> 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function __ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore9Clipboard12canWriteDataEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) == 2 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore15DragImageLoaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore15DragImageLoaderD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore9ClipboardC2ENS_21ClipboardAccessPolicyEN3WTF10PassOwnPtrINS_10PasteboardEEENS0_13ClipboardTypeEb,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore9ClipboardD2Ev,b1,__ZN7WebCore15DragImageLoaderD1Ev,b1,__ZN7WebCore15DragImageLoaderD0Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b2,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b2,__ZN7WebCore15DragImageLoaderC2EPNS_9ClipboardE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore15DragImageLoader12imageChangedEPNS_11CachedImageEPKNS_7IntRectE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore9Clipboard15canSetDragImageEv","__ZNK7WebCore9Clipboard12canReadTypesEv","__ZN7WebCore15DragImageLoader11stopLoadingERNS_20CachedResourceHandleINS_11CachedImageEEE","__ZN7WebCore17CachedImageClient15willRenderImageEPNS_11CachedImageE","__ZNK7WebCore9Clipboard5typesEv","__ZN7WebCore15DragImageLoader12imageChangedEPNS_11CachedImageEPKNS_7IntRectE","__ZN7WebCore9Clipboard7setDataERKN3WTF6StringES4_","__ZNK7WebCore9Clipboard5filesEv","__ZNK7WebCore9Clipboard15createDragImageERNS_8IntPointE","__ZN7WebCore9Clipboard9clearDataERKN3WTF6StringE","__ZN7WebCore9Clipboard18setSourceOperationENS_13DragOperationE","__ZN7WebCore9Clipboard20createForDragAndDropEv","__ZNK7WebCore9Clipboard12canWriteDataEv","__ZN7WebCore15DragImageLoaderD0Ev","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZNK7WebCore9Clipboard10dropEffectEv","__ZN7WebCore9Clipboard9clearDataEv","__ZN7WebCore15DragImageLoader12startLoadingERNS_20CachedResourceHandleINS_11CachedImageEEE","_memset","__ZNK7WebCore9Clipboard20destinationOperationEv","__ZN7WebCore15DragImageLoaderC2EPNS_9ClipboardE","__ZNK7WebCore9Clipboard11canReadDataEv","__ZN7WebCore9Clipboard13setDropEffectERKN3WTF6StringE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore9Clipboard21createForCopyAndPasteENS_21ClipboardAccessPolicyE","__ZN7WebCore9Clipboard16setEffectAllowedERKN3WTF6StringE","__ZN7WebCore15DragImageLoader6createEPNS_9ClipboardE","__ZNK7WebCore9Clipboard15sourceOperationEv","__ZN7WebCore9Clipboard20createForDragAndDropENS_21ClipboardAccessPolicyERKNS_8DragDataE","__ZN7WebCore9Clipboard23setDestinationOperationENS_13DragOperationE","__ZN7WebCore9ClipboardD2Ev","__ZN7WebCore9ClipboardC2ENS_21ClipboardAccessPolicyEN3WTF10PassOwnPtrINS_10PasteboardEEENS0_13ClipboardTypeEb","__ZN7WebCore9Clipboard12setDragImageEPNS_7ElementEii","__ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE","__ZN7WebCoreL14dragOpFromIEOpERKN3WTF6StringE","__ZN7WebCore15DragImageLoaderD1Ev","_memcpy","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9Clipboard7getDataERKN3WTF6StringE","__ZN7WebCore9Clipboard15updateDragImageEv","__ZNK7WebCore9Clipboard13effectAllowedEv"]

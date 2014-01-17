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
var __ZN7WebCore13EmptyNodeListD1Ev;
var __ZN7WebCore13ChildNodeListC1ERNS_13ContainerNodeE;
var __ZN7WebCore13ChildNodeListD1Ev;
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
  var __ZTVN7WebCore13EmptyNodeListE=(H_BASE+8)|0;
  var __ZTVN7WebCore13ChildNodeListE=(H_BASE+56)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20CollectionIndexCacheINS_13ChildNodeListENS_4NodeEE6nodeAtERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 + 12 | 0;
 i5 = (HEAP8[i4] & 1) == 0;
 do {
  if (!i5) {
   if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  do {
   if (!i5) {
    i9 = HEAP32[i1 + 8 >> 2] | 0;
    i10 = i9 - i3 | 0;
    if (i10 >>> 0 >= i3 >>> 0) {
     break;
    }
    i11 = HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 40 >> 2] | 0;
    HEAP32[i7 >> 2] = i11;
    if ((i9 - 1 | 0) >>> 0 > i3 >>> 0) {
     i9 = i10 - 1 | 0;
     if ((i11 | 0) != 0 & (i9 | 0) != 0) {
      i10 = i9;
      i9 = i11;
      while (1) {
       i12 = HEAP32[i9 + 24 >> 2] | 0;
       i13 = i10 - 1 | 0;
       if ((i12 | 0) != 0 & (i13 | 0) != 0) {
        i10 = i13;
        i9 = i12;
       } else {
        i14 = i12;
        break;
       }
      }
     } else {
      i14 = i11;
     }
     HEAP32[i7 >> 2] = i14;
     i15 = i14;
    } else {
     i15 = i11;
    }
    HEAP32[i1 + 4 >> 2] = i3;
    i6 = i15;
    return i6 | 0;
   }
  } while (0);
  i15 = HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 36 >> 2] | 0;
  HEAP32[i7 >> 2] = i15;
  i14 = i1 + 4 | 0;
  HEAP32[i14 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i6 = i15;
   return i6 | 0;
  }
  if ((i15 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  } else {
   i16 = i15;
   i17 = 0;
  }
  while (1) {
   HEAP32[i14 >> 2] = i17;
   if (i17 >>> 0 >= i3 >>> 0) {
    i18 = i16;
    break;
   }
   i15 = HEAP32[i16 + 28 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i18 = 0;
    break;
   } else {
    i16 = i15;
    i17 = i17 + 1 | 0;
   }
  }
  HEAP32[i7 >> 2] = i18;
  i6 = i18;
  return i6 | 0;
 }
 i18 = i1 + 4 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 if (i17 >>> 0 >= i3 >>> 0) {
  if (i17 >>> 0 <= i3 >>> 0) {
   i6 = i8;
   return i6 | 0;
  }
  i16 = i17 - i3 | 0;
  if (i16 >>> 0 <= i3 >>> 0) {
   if ((i17 | 0) == (i3 | 0)) {
    i19 = i8;
   } else {
    i14 = i16;
    i16 = i8;
    while (1) {
     i15 = HEAP32[i16 + 24 >> 2] | 0;
     i9 = i14 - 1 | 0;
     if ((i15 | 0) != 0 & (i9 | 0) != 0) {
      i14 = i9;
      i16 = i15;
     } else {
      i19 = i15;
      break;
     }
    }
   }
   HEAP32[i7 >> 2] = i19;
   HEAP32[i18 >> 2] = i3;
   i6 = i19;
   return i6 | 0;
  }
  i19 = HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 36 >> 2] | 0;
  HEAP32[i7 >> 2] = i19;
  HEAP32[i18 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i6 = i19;
   return i6 | 0;
  } else {
   i20 = i19;
   i21 = 0;
  }
  while (1) {
   HEAP32[i18 >> 2] = i21;
   if (i21 >>> 0 >= i3 >>> 0) {
    i22 = i20;
    break;
   }
   i19 = HEAP32[i20 + 28 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i22 = 0;
    break;
   } else {
    i20 = i19;
    i21 = i21 + 1 | 0;
   }
  }
  HEAP32[i7 >> 2] = i22;
  i6 = i22;
  return i6 | 0;
 }
 do {
  if (i5) {
   i23 = i3 - i17 | 0;
  } else {
   i22 = HEAP32[i1 + 8 >> 2] | 0;
   i21 = i22 - i3 | 0;
   i20 = i3 - i17 | 0;
   if (i21 >>> 0 >= i20 >>> 0) {
    i23 = i20;
    break;
   }
   i20 = HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 40 >> 2] | 0;
   HEAP32[i7 >> 2] = i20;
   if ((i22 - 1 | 0) >>> 0 > i3 >>> 0) {
    i22 = i21 - 1 | 0;
    if ((i20 | 0) != 0 & (i22 | 0) != 0) {
     i21 = i22;
     i22 = i20;
     while (1) {
      i19 = HEAP32[i22 + 24 >> 2] | 0;
      i16 = i21 - 1 | 0;
      if ((i19 | 0) != 0 & (i16 | 0) != 0) {
       i21 = i16;
       i22 = i19;
      } else {
       i24 = i19;
       break;
      }
     }
    } else {
     i24 = i20;
    }
    HEAP32[i7 >> 2] = i24;
    i25 = i24;
   } else {
    i25 = i20;
   }
   HEAP32[i18 >> 2] = i3;
   i6 = i25;
   return i6 | 0;
  }
 } while (0);
 i25 = i8;
 i8 = 0;
 while (1) {
  if (i8 >>> 0 >= i23 >>> 0) {
   i26 = 17;
   break;
  }
  i3 = HEAP32[i25 + 28 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i26 = 16;
   break;
  } else {
   i25 = i3;
   i8 = i8 + 1 | 0;
  }
 }
 do {
  if ((i26 | 0) == 16) {
   HEAP32[i7 >> 2] = 0;
   i23 = i8 + i17 | 0;
   HEAP32[i18 >> 2] = i23;
   i27 = i23;
  } else if ((i26 | 0) == 17) {
   HEAP32[i7 >> 2] = i25;
   i23 = i8 + i17 | 0;
   HEAP32[i18 >> 2] = i23;
   if ((i25 | 0) == 0) {
    i27 = i23;
    break;
   } else {
    i6 = i25;
   }
   return i6 | 0;
  }
 } while (0);
 if (!i5) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP32[i1 + 8 >> 2] = i27 + 1;
 HEAP8[i4] = 1;
 i6 = 0;
 return i6 | 0;
}
function __ZNK7WebCore13ChildNodeList9namedItemERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
   i4 = i1;
  } else {
   i5 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(HEAP32[i1 + 20 >> 2] | 0, i2) | 0;
   if ((i5 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   }
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = (HEAP32[i5 + 16 >> 2] | 0) == (i7 | 0);
   if (i8) {
    i6 = i8 ? i5 | 0 : 0;
    return i6 | 0;
   }
   i5 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 20 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   }
   i9 = i8;
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = HEAP32[i5 + 4 >> 2] | 0;
    i12 = i11 * 24 & -1 | 0;
    i13 = 0;
    i14 = i11;
   } else {
    i11 = HEAP32[i5 + 8 >> 2] | 0;
    i15 = i8;
    i8 = i15 + ~(i15 << 15) | 0;
    i15 = (i8 >>> 10 ^ i8) * 9 & -1;
    i8 = i15 >>> 6 ^ i15;
    i15 = i8 + ~(i8 << 11) | 0;
    i8 = i15 >>> 16 ^ i15;
    i15 = i11 & i8;
    i16 = i10 + (i15 * 24 & -1) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    L17 : do {
     if ((i17 | 0) == (i9 | 0)) {
      i18 = i16;
     } else {
      i19 = (i8 >>> 23) + ~i8 | 0;
      i20 = i19 << 12 ^ i19;
      i19 = i20 >>> 7 ^ i20;
      i20 = i19 << 2 ^ i19;
      i19 = i20 >>> 20 ^ i20 | 1;
      i20 = 0;
      i21 = i15;
      i22 = i17;
      while (1) {
       if ((i22 | 0) == 0) {
        i18 = 0;
        break L17;
       }
       i23 = (i20 | 0) == 0 ? i19 : i20;
       i24 = i23 + i21 & i11;
       i25 = i10 + (i24 * 24 & -1) | 0;
       i26 = HEAP32[i25 >> 2] | 0;
       if ((i26 | 0) == (i9 | 0)) {
        i18 = i25;
        break;
       } else {
        i20 = i23;
        i21 = i24;
        i22 = i26;
       }
      }
     }
    } while (0);
    i9 = HEAP32[i5 + 4 >> 2] | 0;
    i12 = (i18 | 0) == 0 ? i10 + (i9 * 24 & -1) | 0 : i18;
    i13 = i10;
    i14 = i9;
   }
   if ((i12 | 0) == (i13 + (i14 * 24 & -1) | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) >>> 0 > 1 >>> 0) {
    i4 = i7;
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i12 = i4 + 36 | 0;
 while (1) {
  i27 = HEAP32[i12 >> 2] | 0;
  if ((i27 | 0) == 0) {
   i6 = 0;
   i28 = 27;
   break;
  }
  if ((HEAP32[i27 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i27 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i28 | 0) == 27) {
  return i6 | 0;
 }
 i12 = i2 | 0;
 i2 = i27;
 L36 : while (1) {
  i27 = HEAP32[i2 + 48 >> 2] | 0;
  do {
   if ((i27 | 0) == 0) {
    i29 = i2;
   } else {
    i4 = HEAP32[i27 + 16 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i29 = i2;
     break;
    }
    if ((i4 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i6 = i2;
     i28 = 30;
     break L36;
    } else {
     i29 = i2;
    }
   }
  } while (0);
  while (1) {
   i27 = HEAP32[i29 + 28 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i6 = 0;
    i28 = 31;
    break L36;
   }
   if ((HEAP32[i27 + 12 >> 2] & 4 | 0) == 0) {
    i29 = i27;
   } else {
    i2 = i27;
    continue L36;
   }
  }
 }
 if ((i28 | 0) == 30) {
  return i6 | 0;
 } else if ((i28 | 0) == 31) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore13EmptyNodeListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 i3 = __ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = i3 + 4 | 0;
 if (((HEAP32[i3 + 20 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) != 0) + ((HEAP32[i4 >> 2] | 0) != 0) + (HEAP32[i3 + 40 >> 2] | 0) + (HEAP32[i3 + 60 >> 2] | 0) + (HEAP32[i3 + 80 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 >> 2] | 0);
 } else {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i4 - 8 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore13EmptyNodeListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 i3 = __ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = i3 + 4 | 0;
 if (((HEAP32[i3 + 20 >> 2] | 0) + ((HEAP32[i3 >> 2] | 0) != 0) + ((HEAP32[i4 >> 2] | 0) != 0) + (HEAP32[i3 + 40 >> 2] | 0) + (HEAP32[i3 + 60 >> 2] | 0) + (HEAP32[i3 + 80 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 >> 2] | 0);
 } else {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i4 - 8 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore13ChildNodeListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 12 | 0;
 i3 = __ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = i3 | 0;
 if (((HEAP32[i3 + 20 >> 2] | 0) + ((HEAP32[i4 >> 2] | 0) != 0) + ((HEAP32[i3 + 4 >> 2] | 0) != 0) + (HEAP32[i3 + 40 >> 2] | 0) + (HEAP32[i3 + 60 >> 2] | 0) + (HEAP32[i3 + 80 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 >> 2] | 0);
 } else {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i4 - 8 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore13ChildNodeListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 12 | 0;
 i3 = __ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0;
 i4 = i3 | 0;
 if (((HEAP32[i3 + 20 >> 2] | 0) + ((HEAP32[i4 >> 2] | 0) != 0) + ((HEAP32[i3 + 4 >> 2] | 0) != 0) + (HEAP32[i3 + 40 >> 2] | 0) + (HEAP32[i3 + 60 >> 2] | 0) + (HEAP32[i3 + 80 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 >> 2] | 0);
 } else {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i4 - 8 | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 12;
}
function __ZNK7WebCore13ChildNodeList6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 28 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  i3 = HEAP32[i1 + 24 >> 2] | 0;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 36 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 24 >> 2] = 0;
  i5 = 0;
 } else {
  i6 = i4;
  i4 = 0;
  while (1) {
   if ((i4 | 0) == -1) {
    i7 = -1;
    break;
   }
   i8 = HEAP32[i6 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = i4;
    break;
   } else {
    i6 = i8;
    i4 = i4 + 1 | 0;
   }
  }
  i4 = i7 + 1 | 0;
  HEAP32[i1 + 24 >> 2] = i4;
  i5 = i4;
 }
 HEAP8[i2] = 1;
 i3 = i5;
 return i3 | 0;
}
function __ZNK7WebCore13ChildNodeList25collectionTraverseForwardERNS_4NodeEjRj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i1 = i2;
 i2 = 0;
 while (1) {
  HEAP32[i4 >> 2] = i2;
  if (i2 >>> 0 >= i3 >>> 0) {
   i5 = i1;
   i6 = 6;
   break;
  }
  i7 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i5 = 0;
   i6 = 5;
   break;
  } else {
   i1 = i7;
   i2 = i2 + 1 | 0;
  }
 }
 if ((i6 | 0) == 6) {
  return i5 | 0;
 } else if ((i6 | 0) == 5) {
  return i5 | 0;
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
function __ZNK7WebCore13ChildNodeList26collectionTraverseBackwardERNS_4NodeEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) != 0 & (i3 | 0) != 0) {
  i4 = i3;
  i5 = i2;
 } else {
  i6 = i2;
  return i6 | 0;
 }
 while (1) {
  i2 = HEAP32[i5 + 24 >> 2] | 0;
  i3 = i4 - 1 | 0;
  if ((i2 | 0) != 0 & (i3 | 0) != 0) {
   i4 = i3;
   i5 = i2;
  } else {
   i6 = i2;
   break;
  }
 }
 return i6 | 0;
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
function __ZN7WebCore13ChildNodeListC2ERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 12 >> 2] = i2;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 _memset(i1 + 16 | 0, 0, 13) | 0;
 return;
}
function __ZN7WebCore13ChildNodeListC1ERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 12 >> 2] = i2;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 _memset(i1 + 16 | 0, 0, 13) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore13ChildNodeList4itemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore20CollectionIndexCacheINS_13ChildNodeListENS_4NodeEE6nodeAtERKS1_j(i1 + 16 | 0, i1, i2) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore13ChildNodeList15invalidateCacheEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 return;
}
function __ZNK7WebCore13ChildNodeList15collectionFirstEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 36 >> 2] | 0;
}
function __ZN7WebCore13EmptyNodeListD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13EmptyNodeListD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13ChildNodeListD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13ChildNodeListD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore13ChildNodeList14collectionLastEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 40 >> 2] | 0;
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
function __ZNK7WebCore13EmptyNodeList9namedItemERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore13EmptyNodeList4itemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore13EmptyNodeList15isEmptyNodeListEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13ChildNodeList15isChildNodeListEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore8NodeList15isEmptyNodeListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8NodeList15isChildNodeListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8NodeList14isLiveNodeListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13EmptyNodeList6lengthEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13ChildNodeListD2Ev,b0,__ZN7WebCore13EmptyNodeListD2Ev,b0,__ZN7WebCore13EmptyNodeListD0Ev,b0,__ZN7WebCore13ChildNodeListD0Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13ChildNodeListC2ERNS_13ContainerNodeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore13EmptyNodeList6lengthEv,b2,__ZNK7WebCore8NodeList15isChildNodeListEv,b2,__ZNK7WebCore13ChildNodeList15isChildNodeListEv,b2,__ZNK7WebCore8NodeList14isLiveNodeListEv,b2,__ZNK7WebCore13EmptyNodeList15isEmptyNodeListEv,b2,__ZNK7WebCore8NodeList15isEmptyNodeListEv,b2,__ZNK7WebCore13ChildNodeList6lengthEv,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZNK7WebCore13EmptyNodeList4itemEj,b4,__ZNK7WebCore13ChildNodeList9namedItemERKN3WTF12AtomicStringE,b4,__ZNK7WebCore13EmptyNodeList9namedItemERKN3WTF12AtomicStringE,b4,__ZNK7WebCore13ChildNodeList4itemEj,b4,b4,b4,b4,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13ChildNodeListD2Ev","__ZN7WebCore13EmptyNodeListD2Ev","__ZNK7WebCore13EmptyNodeList4itemEj","__ZNK7WebCore13ChildNodeList15isChildNodeListEv","__ZNK7WebCore13ChildNodeList26collectionTraverseBackwardERNS_4NodeEj","__ZN7WebCore13ChildNodeListC2ERNS_13ContainerNodeE","__ZN7WebCore13EmptyNodeListD0Ev","__ZNK7WebCore13EmptyNodeList9namedItemERKN3WTF12AtomicStringE","__ZNK7WebCore13ChildNodeList4itemEj","__ZNK7WebCore8NodeList15isChildNodeListEv","_memset","__ZNK7WebCore8NodeList15isEmptyNodeListEv","_memcpy","__ZNK7WebCore13ChildNodeList6lengthEv","__ZN7WebCore20CollectionIndexCacheINS_13ChildNodeListENS_4NodeEE6nodeAtERKS1_j","__ZNK7WebCore13EmptyNodeList6lengthEv","__ZNK7WebCore13ChildNodeList25collectionTraverseForwardERNS_4NodeEjRj","__ZNK7WebCore8NodeList14isLiveNodeListEv","__ZNK7WebCore13ChildNodeList9namedItemERKN3WTF12AtomicStringE","_strlen","__ZNK7WebCore13ChildNodeList14collectionLastEv","__ZNK7WebCore13ChildNodeList15collectionFirstEv","__ZN7WebCore13ChildNodeList15invalidateCacheEv","__ZN7WebCore13ChildNodeListD0Ev","__ZNK7WebCore13EmptyNodeList15isEmptyNodeListEv"]

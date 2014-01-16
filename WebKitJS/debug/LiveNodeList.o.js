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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12LiveNodeListE=(H_BASE+8)|0;
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
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 & 3 | 0) == 1) {
   if ((HEAP32[i6 + 12 >> 2] & 256 | 0) == 0) {
    i7 = i6;
    break;
   }
   i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i7 = i6;
  }
 } while (0);
 i6 = i5 >>> 6 & 31;
 if ((i6 | 0) == 0) {
  HEAP32[i4 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i8 = i2;
   return i8 | 0;
  }
  i5 = i7 | 0;
  i9 = i1 + 36 | 0;
  i10 = i2;
  L10 : while (1) {
   i11 = HEAP32[i10 + 36 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = i10 | 0;
     if ((i12 | 0) == (i5 | 0)) {
      i8 = 0;
      i13 = 71;
      break L10;
     }
     i14 = HEAP32[i10 + 28 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i15 = i14;
      break;
     }
     i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i5) | 0;
     if ((i14 | 0) == 0) {
      i8 = 0;
      i13 = 72;
      break L10;
     } else {
      i15 = i14;
     }
    } else {
     i15 = i11;
    }
   } while (0);
   i11 = HEAP32[i15 + 12 >> 2] | 0;
   if ((i11 & 4 | 0) == 0) {
    i14 = i15;
    while (1) {
     if ((i14 | 0) == (i5 | 0)) {
      i8 = 0;
      i13 = 54;
      break L10;
     }
     i12 = HEAP32[i14 + 28 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i5) | 0;
      if ((i16 | 0) == 0) {
       i8 = 0;
       i13 = 55;
       break L10;
      } else {
       i17 = i16;
      }
     } else {
      i17 = i12;
     }
     i12 = HEAP32[i17 + 12 >> 2] | 0;
     if ((i12 & 4 | 0) == 0) {
      i14 = i17;
     } else {
      i18 = i17;
      i19 = i12;
      break;
     }
    }
   } else {
    i18 = i15;
    i19 = i11;
   }
   i14 = i18;
   i12 = HEAP32[i18 + 48 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i10 = i14;
    continue;
   }
   i16 = HEAP32[i12 + 12 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i10 = i14;
    continue;
   }
   i12 = HEAP32[i9 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i10 = i14;
    continue;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) == 0) {
    i10 = i14;
    continue;
   }
   if ((i19 & 8 | 0) == 0) {
    i10 = i14;
    continue;
   }
   if (!(__ZN7WebCore20SpaceSplitStringData11containsAllERS0_(i16, i12) | 0)) {
    i10 = i14;
    continue;
   }
   if ((i18 | 0) == 0) {
    i8 = 0;
    i13 = 59;
    break;
   }
   i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if (i12 >>> 0 < i3 >>> 0) {
    i10 = i14;
   } else {
    i8 = i14;
    i13 = 60;
    break;
   }
  }
  if ((i13 | 0) == 54) {
   return i8 | 0;
  } else if ((i13 | 0) == 55) {
   return i8 | 0;
  } else if ((i13 | 0) == 59) {
   return i8 | 0;
  } else if ((i13 | 0) == 60) {
   return i8 | 0;
  } else if ((i13 | 0) == 71) {
   return i8 | 0;
  } else if ((i13 | 0) == 72) {
   return i8 | 0;
  }
 } else if ((i6 | 0) == 3) {
  HEAP32[i4 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i8 = i2;
   return i8 | 0;
  }
  i6 = i1 + 40 | 0;
  i10 = i6;
  i18 = i6;
  i6 = i7 | 0;
  i19 = i1 + 44 | 0;
  i9 = i2;
  L71 : while (1) {
   i15 = HEAP32[i9 + 36 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i17 = i9 | 0;
     if ((i17 | 0) == (i6 | 0)) {
      i8 = 0;
      i13 = 69;
      break L71;
     }
     i5 = HEAP32[i9 + 28 >> 2] | 0;
     if ((i5 | 0) != 0) {
      i20 = i5;
      break;
     }
     i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i17, i6) | 0;
     if ((i5 | 0) == 0) {
      i8 = 0;
      i13 = 56;
      break L71;
     } else {
      i20 = i5;
     }
    } else {
     i20 = i15;
    }
   } while (0);
   i15 = HEAP32[i20 + 12 >> 2] | 0;
   if ((i15 & 4 | 0) == 0) {
    i11 = i20;
    while (1) {
     if ((i11 | 0) == (i6 | 0)) {
      i8 = 0;
      i13 = 68;
      break L71;
     }
     i5 = HEAP32[i11 + 28 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i6) | 0;
      if ((i17 | 0) == 0) {
       i8 = 0;
       i13 = 74;
       break L71;
      } else {
       i21 = i17;
      }
     } else {
      i21 = i5;
     }
     i5 = HEAP32[i21 + 12 >> 2] | 0;
     if ((i5 & 4 | 0) == 0) {
      i11 = i21;
     } else {
      i22 = i21;
      i23 = i5;
      break;
     }
    }
   } else {
    i22 = i20;
    i23 = i15;
   }
   i11 = i22;
   if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
    if ((i22 | 0) == 0) {
     i8 = 0;
     i13 = 70;
     break;
    }
   } else {
    if ((HEAP32[((i23 & 16 | 0) != 0 ? i19 : i10) >> 2] | 0) != (HEAP32[(HEAP32[i22 + 44 >> 2] | 0) + 12 >> 2] | 0)) {
     i9 = i11;
     continue;
    }
   }
   i5 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if (i5 >>> 0 < i3 >>> 0) {
    i9 = i11;
   } else {
    i8 = i11;
    i13 = 57;
    break;
   }
  }
  if ((i13 | 0) == 56) {
   return i8 | 0;
  } else if ((i13 | 0) == 57) {
   return i8 | 0;
  } else if ((i13 | 0) == 68) {
   return i8 | 0;
  } else if ((i13 | 0) == 69) {
   return i8 | 0;
  } else if ((i13 | 0) == 70) {
   return i8 | 0;
  } else if ((i13 | 0) == 74) {
   return i8 | 0;
  }
 } else {
  HEAP32[i4 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i8 = i2;
   return i8 | 0;
  }
  i9 = i7 | 0;
  i7 = i1;
  i22 = i2;
  L43 : while (1) {
   i2 = HEAP32[i22 + 36 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i10 = i22 | 0;
     if ((i10 | 0) == (i9 | 0)) {
      i8 = 0;
      i13 = 62;
      break L43;
     }
     i19 = HEAP32[i22 + 28 >> 2] | 0;
     if ((i19 | 0) != 0) {
      i24 = i19;
      break;
     }
     i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i9) | 0;
     if ((i19 | 0) == 0) {
      i8 = 0;
      i13 = 63;
      break L43;
     } else {
      i24 = i19;
     }
    } else {
     i24 = i2;
    }
   } while (0);
   if ((HEAP32[i24 + 12 >> 2] & 4 | 0) == 0) {
    i2 = i24;
    while (1) {
     if ((i2 | 0) == (i9 | 0)) {
      i8 = 0;
      i13 = 64;
      break L43;
     }
     i15 = HEAP32[i2 + 28 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i2, i9) | 0;
      if ((i19 | 0) == 0) {
       i8 = 0;
       i13 = 65;
       break L43;
      } else {
       i25 = i19;
      }
     } else {
      i25 = i15;
     }
     if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
      i2 = i25;
     } else {
      i26 = i25;
      break;
     }
    }
   } else {
    i26 = i24;
   }
   i2 = i26;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] & 7](i1, i2) | 0)) {
    i22 = i2;
    continue;
   }
   if ((i26 | 0) == 0) {
    i8 = 0;
    i13 = 66;
    break;
   }
   i15 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i15;
   if (i15 >>> 0 < i3 >>> 0) {
    i22 = i2;
   } else {
    i8 = i2;
    i13 = 67;
    break;
   }
  }
  if ((i13 | 0) == 62) {
   return i8 | 0;
  } else if ((i13 | 0) == 63) {
   return i8 | 0;
  } else if ((i13 | 0) == 64) {
   return i8 | 0;
  } else if ((i13 | 0) == 65) {
   return i8 | 0;
  } else if ((i13 | 0) == 66) {
   return i8 | 0;
  } else if ((i13 | 0) == 67) {
   return i8 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore12LiveNodeList15collectionFirstEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 & 3 | 0) == 1) {
   if ((HEAP32[i3 + 12 >> 2] & 256 | 0) == 0) {
    i4 = i3;
    break;
   }
   i4 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i4 = i3;
  }
 } while (0);
 i3 = i2 >>> 6 & 31;
 if ((i3 | 0) == 3) {
  i2 = i4 + 36 | 0;
  while (1) {
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = 0;
    i7 = 36;
    break;
   }
   i8 = HEAP32[i5 + 12 >> 2] | 0;
   if ((i8 & 4 | 0) == 0) {
    i2 = i5 + 28 | 0;
   } else {
    break;
   }
  }
  if ((i7 | 0) == 36) {
   return i6 | 0;
  }
  i2 = i1 + 40 | 0;
  i9 = i2;
  i10 = i2;
  i2 = i1 + 44 | 0;
  i11 = i4 | 0;
  i12 = i5;
  if ((HEAP32[i10 >> 2] | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
   i6 = i12;
   return i6 | 0;
  } else {
   i13 = i5;
   i14 = i12;
   i15 = i8;
  }
  L15 : while (1) {
   if ((HEAP32[((i15 & 16 | 0) != 0 ? i2 : i9) >> 2] | 0) == (HEAP32[(HEAP32[i13 + 44 >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = i14;
    i7 = 38;
    break;
   }
   i8 = HEAP32[i13 + 36 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     if ((i13 | 0) == (i11 | 0)) {
      i6 = 0;
      i7 = 39;
      break L15;
     }
     i12 = HEAP32[i13 + 28 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i16 = i12;
      break;
     }
     i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i13, i11) | 0;
     if ((i12 | 0) == 0) {
      i6 = 0;
      i7 = 40;
      break L15;
     } else {
      i16 = i12;
     }
    } else {
     i16 = i8;
    }
   } while (0);
   i8 = HEAP32[i16 + 12 >> 2] | 0;
   if ((i8 & 4 | 0) == 0) {
    i12 = i16;
    while (1) {
     if ((i12 | 0) == (i11 | 0)) {
      i6 = 0;
      i7 = 42;
      break L15;
     }
     i5 = HEAP32[i12 + 28 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i11) | 0;
      if ((i17 | 0) == 0) {
       i6 = 0;
       i7 = 43;
       break L15;
      } else {
       i18 = i17;
      }
     } else {
      i18 = i5;
     }
     i5 = HEAP32[i18 + 12 >> 2] | 0;
     if ((i5 & 4 | 0) == 0) {
      i12 = i18;
     } else {
      i19 = i18;
      i20 = i5;
      break;
     }
    }
   } else {
    i19 = i16;
    i20 = i8;
   }
   i12 = i19;
   if ((HEAP32[i10 >> 2] | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
    i6 = i12;
    i7 = 41;
    break;
   } else {
    i13 = i19;
    i14 = i12;
    i15 = i20;
   }
  }
  if ((i7 | 0) == 38) {
   return i6 | 0;
  } else if ((i7 | 0) == 39) {
   return i6 | 0;
  } else if ((i7 | 0) == 40) {
   return i6 | 0;
  } else if ((i7 | 0) == 41) {
   return i6 | 0;
  } else if ((i7 | 0) == 42) {
   return i6 | 0;
  } else if ((i7 | 0) == 43) {
   return i6 | 0;
  }
 } else if ((i3 | 0) == 0) {
  i6 = __ZN7WebCore20firstMatchingElementINS_13ClassNodeListEEEPNS_7ElementEPKT_RNS_13ContainerNodeE(i1, i4) | 0;
  return i6 | 0;
 } else {
  i3 = i4 + 36 | 0;
  while (1) {
   i21 = HEAP32[i3 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i6 = 0;
    i7 = 45;
    break;
   }
   if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
    i3 = i21 + 28 | 0;
   } else {
    break;
   }
  }
  if ((i7 | 0) == 45) {
   return i6 | 0;
  }
  i3 = i1;
  i20 = i4 | 0;
  i4 = i21;
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 7](i1, i4) | 0) {
   i6 = i4;
   return i6 | 0;
  } else {
   i22 = i21;
  }
  L49 : while (1) {
   i21 = HEAP32[i22 + 36 >> 2] | 0;
   do {
    if ((i21 | 0) == 0) {
     if ((i22 | 0) == (i20 | 0)) {
      i6 = 0;
      i7 = 47;
      break L49;
     }
     i4 = HEAP32[i22 + 28 >> 2] | 0;
     if ((i4 | 0) != 0) {
      i23 = i4;
      break;
     }
     i4 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i22, i20) | 0;
     if ((i4 | 0) == 0) {
      i6 = 0;
      i7 = 48;
      break L49;
     } else {
      i23 = i4;
     }
    } else {
     i23 = i21;
    }
   } while (0);
   if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
    i21 = i23;
    while (1) {
     if ((i21 | 0) == (i20 | 0)) {
      i6 = 0;
      i7 = 50;
      break L49;
     }
     i8 = HEAP32[i21 + 28 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i4 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i21, i20) | 0;
      if ((i4 | 0) == 0) {
       i6 = 0;
       i7 = 51;
       break L49;
      } else {
       i24 = i4;
      }
     } else {
      i24 = i8;
     }
     if ((HEAP32[i24 + 12 >> 2] & 4 | 0) == 0) {
      i21 = i24;
     } else {
      i25 = i24;
      break;
     }
    }
   } else {
    i25 = i23;
   }
   i21 = i25;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 7](i1, i21) | 0) {
    i6 = i21;
    i7 = 49;
    break;
   } else {
    i22 = i25;
   }
  }
  if ((i7 | 0) == 47) {
   return i6 | 0;
  } else if ((i7 | 0) == 48) {
   return i6 | 0;
  } else if ((i7 | 0) == 49) {
   return i6 | 0;
  } else if ((i7 | 0) == 50) {
   return i6 | 0;
  } else if ((i7 | 0) == 51) {
   return i6 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore12LiveNodeList26collectionTraverseBackwardERNS_7ElementEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = i1 + 32 | 0;
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[i4 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i6 + 12 >> 2] & 256 | 0) == 0) {
    i7 = i6;
    break;
   }
   i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i7 = i6;
  }
 } while (0);
 if (!((i2 | 0) != 0 & (i3 | 0) != 0)) {
  i8 = i2;
  return i8 | 0;
 }
 i6 = i1;
 i9 = i3;
 i3 = i2;
 L8 : while (1) {
  i2 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i10 = HEAP32[i3 + 16 >> 2] | 0;
   i11 = (i10 | 0) == (i7 | 0) ? 0 : i10 | 0;
  } else {
   i11 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i2) | 0;
  }
  L14 : do {
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i2 = i11;
    while (1) {
     if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
      i12 = i2;
      break L14;
     }
     i10 = HEAP32[i2 + 24 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i13 = HEAP32[i2 + 16 >> 2] | 0;
      i14 = (i13 | 0) == (i7 | 0) ? 0 : i13 | 0;
     } else {
      i14 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i10) | 0;
     }
     if ((i14 | 0) == 0) {
      i12 = 0;
      break;
     } else {
      i2 = i14;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i5 >> 2] | 0;
  do {
   if ((HEAP32[i4 >> 2] & 3 | 0) == 1) {
    if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
     i15 = i2;
     break;
    }
    i15 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    i15 = i2;
   }
  } while (0);
  if ((i12 | 0) == 0) {
   i8 = 0;
   i16 = 35;
   break;
  } else {
   i17 = i12;
  }
  while (1) {
   i18 = i17;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 7](i1, i18) | 0) {
    break;
   }
   i2 = HEAP32[i17 + 24 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i10 = HEAP32[i17 + 16 >> 2] | 0;
    i19 = (i10 | 0) == (i15 | 0) ? 0 : i10 | 0;
   } else {
    i19 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i2) | 0;
   }
   if ((i19 | 0) == 0) {
    i8 = 0;
    i16 = 34;
    break L8;
   } else {
    i20 = i19;
   }
   while (1) {
    if ((HEAP32[i20 + 12 >> 2] & 4 | 0) != 0) {
     break;
    }
    i2 = HEAP32[i20 + 24 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i10 = HEAP32[i20 + 16 >> 2] | 0;
     i21 = (i10 | 0) == (i15 | 0) ? 0 : i10 | 0;
    } else {
     i21 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i2) | 0;
    }
    if ((i21 | 0) == 0) {
     i8 = 0;
     i16 = 36;
     break L8;
    } else {
     i20 = i21;
    }
   }
   if ((i20 | 0) == 0) {
    i8 = 0;
    i16 = 33;
    break L8;
   } else {
    i17 = i20;
   }
  }
  i2 = i9 - 1 | 0;
  if ((i17 | 0) != 0 & (i2 | 0) != 0) {
   i9 = i2;
   i3 = i18;
  } else {
   i8 = i18;
   i16 = 32;
   break;
  }
 }
 if ((i16 | 0) == 35) {
  return i8 | 0;
 } else if ((i16 | 0) == 36) {
  return i8 | 0;
 } else if ((i16 | 0) == 32) {
  return i8 | 0;
 } else if ((i16 | 0) == 33) {
  return i8 | 0;
 } else if ((i16 | 0) == 34) {
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore12LiveNodeList14collectionLastEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = i1 + 32 | 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[i2 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i4 + 12 >> 2] & 256 | 0) == 0) {
    i5 = i4;
    break;
   }
   i5 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i5 = i4;
  }
 } while (0);
 i4 = __ZN7WebCore13NodeTraversal4lastEPKNS_13ContainerNodeE(i5) | 0;
 L5 : do {
  if ((i4 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = i4;
   while (1) {
    if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
     i6 = i7;
     break L5;
    }
    i8 = HEAP32[i7 + 24 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i9 = HEAP32[i7 + 16 >> 2] | 0;
     i10 = (i9 | 0) == (i5 | 0) ? 0 : i9 | 0;
    } else {
     i10 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i8) | 0;
    }
    if ((i10 | 0) == 0) {
     i6 = 0;
     break;
    } else {
     i7 = i10;
    }
   }
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[i2 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i10 + 12 >> 2] & 256 | 0) == 0) {
    i11 = i10;
    break;
   }
   i11 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i11 = i10;
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 i10 = i1;
 i2 = i6;
 L21 : while (1) {
  i6 = i2;
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] & 7](i1, i6) | 0) {
   i12 = i6;
   i13 = 28;
   break;
  }
  i6 = HEAP32[i2 + 24 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i3 = HEAP32[i2 + 16 >> 2] | 0;
   i14 = (i3 | 0) == (i11 | 0) ? 0 : i3 | 0;
  } else {
   i14 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i6) | 0;
  }
  if ((i14 | 0) == 0) {
   i12 = 0;
   i13 = 29;
   break;
  } else {
   i15 = i14;
  }
  while (1) {
   if ((HEAP32[i15 + 12 >> 2] & 4 | 0) != 0) {
    break;
   }
   i6 = HEAP32[i15 + 24 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i3 = HEAP32[i15 + 16 >> 2] | 0;
    i16 = (i3 | 0) == (i11 | 0) ? 0 : i3 | 0;
   } else {
    i16 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i6) | 0;
   }
   if ((i16 | 0) == 0) {
    i12 = 0;
    i13 = 31;
    break L21;
   } else {
    i15 = i16;
   }
  }
  if ((i15 | 0) == 0) {
   i12 = 0;
   i13 = 30;
   break;
  } else {
   i2 = i15;
  }
 }
 if ((i13 | 0) == 28) {
  return i12 | 0;
 } else if ((i13 | 0) == 29) {
  return i12 | 0;
 } else if ((i13 | 0) == 30) {
  return i12 | 0;
 } else if ((i13 | 0) == 31) {
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore20firstMatchingElementINS_13ClassNodeListEEEPNS_7ElementEPKT_RNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 36 | 0;
 while (1) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 0;
   i6 = 24;
   break;
  }
  if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i4 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i6 | 0) == 24) {
  return i5 | 0;
 }
 i3 = i2 | 0;
 i2 = i1 + 36 | 0;
 i1 = i4;
 i7 = i4;
 L7 : while (1) {
  i4 = i7;
  i8 = HEAP32[i1 + 48 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = HEAP32[i8 + 12 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i10 = HEAP32[i2 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) == 0) {
     break;
    }
    if ((HEAP32[i1 + 12 >> 2] & 8 | 0) == 0) {
     break;
    }
    if (__ZN7WebCore20SpaceSplitStringData11containsAllERS0_(i9, i10) | 0) {
     i5 = i4;
     i6 = 22;
     break L7;
    }
   }
  } while (0);
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    if ((i1 | 0) == (i3 | 0)) {
     i5 = 0;
     i6 = 26;
     break L7;
    }
    i8 = HEAP32[i1 + 28 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i11 = i8;
     break;
    }
    i8 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i1, i3) | 0;
    if ((i8 | 0) == 0) {
     i5 = 0;
     i6 = 27;
     break L7;
    } else {
     i11 = i8;
    }
   } else {
    i11 = i4;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i4 = i11;
   while (1) {
    if ((i4 | 0) == (i3 | 0)) {
     i5 = 0;
     i6 = 23;
     break L7;
    }
    i8 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i10 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i3) | 0;
     if ((i10 | 0) == 0) {
      i5 = 0;
      i6 = 25;
      break L7;
     } else {
      i12 = i10;
     }
    } else {
     i12 = i8;
    }
    if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
     i4 = i12;
    } else {
     i13 = i12;
     break;
    }
   }
  } else {
   i13 = i11;
  }
  i1 = i13;
  i7 = i13;
 }
 if ((i6 | 0) == 22) {
  return i5 | 0;
 } else if ((i6 | 0) == 23) {
  return i5 | 0;
 } else if ((i6 | 0) == 25) {
  return i5 | 0;
 } else if ((i6 | 0) == 26) {
  return i5 | 0;
 } else if ((i6 | 0) == 27) {
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore12LiveNodeList9namedItemERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
    i6 = i5;
    break;
   }
   i6 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i6 = i5;
  }
 } while (0);
 i5 = i6 | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] & 256 | 0) != 0) {
   i7 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(HEAP32[i6 + 20 >> 2] | 0, i2) | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 7](i1, i7) | 0)) {
    break;
   }
   i9 = i7 | 0;
   i7 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i9, i5) | 0;
   if (i7) {
    i8 = i7 ? i9 : 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i5 = i1 + 28 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  i6 = __ZNK7WebCore12LiveNodeList15collectionFirstEv(i1) | 0;
  if ((i6 | 0) == 0) {
   HEAP32[i1 + 24 >> 2] = 0;
   i10 = 0;
  } else {
   __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i1, i6, -1, i4) | 0;
   i6 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i1 + 24 >> 2] = i6;
   i10 = i6;
  }
  HEAP8[i5] = 1;
  i11 = i10;
 } else {
  i11 = HEAP32[i1 + 24 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = i1 + 16 | 0;
 i5 = i2 | 0;
 i2 = 0;
 L24 : while (1) {
  i6 = __ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE6nodeAtERKS1_j(i10, i1, i2) | 0;
  i4 = i6 | 0;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
    i9 = HEAP32[i6 + 48 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i7 = HEAP32[i9 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    if ((i7 | 0) == (HEAP32[i5 >> 2] | 0)) {
     i8 = i4;
     i12 = 24;
     break L24;
    }
   }
  } while (0);
  i4 = i2 + 1 | 0;
  if (i4 >>> 0 < i11 >>> 0) {
   i2 = i4;
  } else {
   i8 = 0;
   i12 = 22;
   break;
  }
 }
 if ((i12 | 0) == 22) {
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i12 | 0) == 24) {
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE6nodeAtERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = (HEAP8[i1 + 12 | 0] & 1) == 0;
 do {
  if (!i4) {
   if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  do {
   if (!i4) {
    i8 = i1 + 8 | 0;
    if (((HEAP32[i8 >> 2] | 0) - i3 | 0) >>> 0 >= i3 >>> 0) {
     break;
    }
    i9 = __ZNK7WebCore12LiveNodeList14collectionLastEv(i2) | 0;
    HEAP32[i6 >> 2] = i9;
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 - 1 | 0) >>> 0 > i3 >>> 0) {
     i8 = __ZNK7WebCore12LiveNodeList26collectionTraverseBackwardERNS_7ElementEj(i2, i9, i10 + ~i3 | 0) | 0;
     HEAP32[i6 >> 2] = i8;
     i11 = i8;
    } else {
     i11 = i9;
    }
    HEAP32[i1 + 4 >> 2] = i3;
    i5 = i11;
    return i5 | 0;
   }
  } while (0);
  i11 = __ZNK7WebCore12LiveNodeList15collectionFirstEv(i2) | 0;
  HEAP32[i6 >> 2] = i11;
  i4 = i1 + 4 | 0;
  HEAP32[i4 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i5 = i11;
   return i5 | 0;
  }
  if ((i11 | 0) == 0) {
   i5 = 0;
   return i5 | 0;
  }
  i9 = __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i2, i11, i3, i4) | 0;
  HEAP32[i6 >> 2] = i9;
  i5 = i9;
  return i5 | 0;
 } else {
  i9 = i1 + 4 | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  if (i4 >>> 0 < i3 >>> 0) {
   i5 = __ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE15nodeAfterCachedERKS1_j(i1, i2, i3) | 0;
   return i5 | 0;
  }
  if (i4 >>> 0 <= i3 >>> 0) {
   i5 = i7;
   return i5 | 0;
  }
  i1 = i4 - i3 | 0;
  if (i1 >>> 0 <= i3 >>> 0) {
   i4 = __ZNK7WebCore12LiveNodeList26collectionTraverseBackwardERNS_7ElementEj(i2, i7, i1) | 0;
   HEAP32[i6 >> 2] = i4;
   HEAP32[i9 >> 2] = i3;
   i5 = i4;
   return i5 | 0;
  }
  i4 = __ZNK7WebCore12LiveNodeList15collectionFirstEv(i2) | 0;
  HEAP32[i6 >> 2] = i4;
  HEAP32[i9 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i5 = i4;
   return i5 | 0;
  }
  i1 = __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i2, i4, i3, i9) | 0;
  HEAP32[i6 >> 2] = i1;
  i5 = i1;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE15nodeAfterCachedERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 do {
  if ((HEAP8[i6] & 1) == 0) {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
  } else {
   i8 = i1 + 8 | 0;
   i9 = i1 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if (((HEAP32[i8 >> 2] | 0) - i3 | 0) >>> 0 >= (i3 - i10 | 0) >>> 0) {
    i7 = i10;
    break;
   }
   i10 = __ZNK7WebCore12LiveNodeList14collectionLastEv(i2) | 0;
   i11 = i1 | 0;
   HEAP32[i11 >> 2] = i10;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 - 1 | 0) >>> 0 > i3 >>> 0) {
    i8 = __ZNK7WebCore12LiveNodeList26collectionTraverseBackwardERNS_7ElementEj(i2, i10, i12 + ~i3 | 0) | 0;
    HEAP32[i11 >> 2] = i8;
    i13 = i8;
   } else {
    i13 = i10;
   }
   HEAP32[i9 >> 2] = i3;
   i14 = i13;
   STACKTOP = i4;
   return i14 | 0;
  }
 } while (0);
 i13 = i1 | 0;
 i9 = i1 + 4 | 0;
 i10 = __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i2, HEAP32[i13 >> 2] | 0, i3 - i7 | 0, i5) | 0;
 HEAP32[i13 >> 2] = i10;
 i13 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) | 0;
 HEAP32[i9 >> 2] = i13;
 if ((i10 | 0) != 0) {
  i14 = i10;
  STACKTOP = i4;
  return i14 | 0;
 }
 if ((HEAP8[i6] & 1) != 0) {
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 }
 HEAP32[i1 + 8 >> 2] = i13 + 1;
 HEAP8[i6] = 1;
 i14 = 0;
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN7WebCore12LiveNodeListD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 __ZN7WebCore8Document18unregisterNodeListERNS_12LiveNodeListE(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 - 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore12LiveNodeListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 __ZN7WebCore8Document18unregisterNodeListERNS_12LiveNodeListE(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 - 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
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
function __ZNK7WebCore12LiveNodeList6lengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 if ((HEAP8[i4] & 1) != 0) {
  i5 = HEAP32[i1 + 24 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = __ZNK7WebCore12LiveNodeList15collectionFirstEv(i1) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 24 >> 2] = 0;
  i7 = 0;
 } else {
  __ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj(i1, i6, -1, i3) | 0;
  i6 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i1 + 24 >> 2] = i6;
  i7 = i6;
 }
 HEAP8[i4] = 1;
 i5 = i7;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
}
function __ZNK7WebCore12LiveNodeList8rootNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i1 + 32 >> 2] & 3 | 0) != 1) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12LiveNodeList4itemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE6nodeAtERKS1_j(i1 + 16 | 0, i1, i2) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore12LiveNodeList15invalidateCacheEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore12LiveNodeList14isLiveNodeListEv(i1) {
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12LiveNodeList6lengthEv,b0,__ZNK7WebCore12LiveNodeList14isLiveNodeListEv,b0,__ZNK7WebCore8NodeList15isChildNodeListEv,b0,__ZNK7WebCore8NodeList15isEmptyNodeListEv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_v = [b1,b1,v____cxa_pure_virtual__wrapper,b1];
  var FUNCTION_TABLE_iii = [b2,b2,__ZNK7WebCore12LiveNodeList9namedItemERKN3WTF12AtomicStringE,b2,__ZNK7WebCore12LiveNodeList4itemEj,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore12LiveNodeListD1Ev,b3,__ZN7WebCore12LiveNodeListD0Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZNK7WebCore12LiveNodeList14collectionLastEv","__ZNK7WebCore12LiveNodeList25collectionTraverseForwardERNS_7ElementEjRj","__ZNK7WebCore12LiveNodeList14isLiveNodeListEv","__ZN7WebCore20firstMatchingElementINS_13ClassNodeListEEEPNS_7ElementEPKT_RNS_13ContainerNodeE","__ZNK7WebCore12LiveNodeList9namedItemERKN3WTF12AtomicStringE","__ZNK7WebCore12LiveNodeList6lengthEv","__ZN7WebCore12LiveNodeListD1Ev","__ZNK7WebCore8NodeList15isChildNodeListEv","__ZNK7WebCore12LiveNodeList4itemEj","__ZNK7WebCore8NodeList15isEmptyNodeListEv","_memcpy","__ZNK7WebCore12LiveNodeList26collectionTraverseBackwardERNS_7ElementEj","__ZNK7WebCore12LiveNodeList8rootNodeEv","__ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE6nodeAtERKS1_j","__ZNK7WebCore12LiveNodeList15invalidateCacheEv","__ZNK7WebCore12LiveNodeList15collectionFirstEv","__ZN7WebCore20CollectionIndexCacheINS_12LiveNodeListENS_7ElementEE15nodeAfterCachedERKS1_j","__ZN7WebCore12LiveNodeListD0Ev"]

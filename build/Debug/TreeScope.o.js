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
var __ZN7WebCore9TreeScopeC1EPNS_13ContainerNodeEPNS_8DocumentE;
var __ZN7WebCore9TreeScopeC1EPNS_8DocumentE;
var __ZN7WebCore9TreeScopeC1Ev;
var __ZN7WebCore9TreeScopeD1Ev;
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
  var __ZN7WebCore9HTMLNames7forAttrE=env.__ZN7WebCore9HTMLNames7forAttrE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames8labelTagE=env.__ZN7WebCore9HTMLNames8labelTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore9TreeScopeE=(H_BASE+8)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+48)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+40)|0;
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
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9TreeScope10findAnchorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i2);
  i7 = i4 | 0;
 } else {
  i8 = i4 | 0;
  HEAP32[i8 >> 2] = i2;
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i7 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   do {
    if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
     i9 = 0;
    } else {
     i7 = HEAP32[i1 + 20 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i9 = 0;
      break;
     }
     i9 = __ZNK7WebCore18DocumentOrderedMap14getElementByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i7, i8, i1) | 0;
    }
   } while (0);
   i7 = i8 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
   } else {
    HEAP32[i7 >> 2] = i4;
   }
   if ((i9 | 0) == 0) {
    break;
   } else {
    i6 = i9;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 i9 = i1 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i8 = i1 + 36 | 0;
 while (1) {
  i10 = HEAP32[i8 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i6 = 0;
   i11 = 69;
   break;
  }
  i12 = HEAP32[i10 + 12 >> 2] | 0;
  if ((i12 & 4 | 0) == 0) {
   i8 = i10 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i11 | 0) == 69) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i8 = i1 | 0;
 i4 = i10;
 i10 = i12;
 L29 : while (1) {
  if ((i10 & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i11 = 30;
    break;
   }
  }
  i12 = HEAP32[i4 + 36 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    if ((i4 | 0) == (i8 | 0)) {
     i6 = 0;
     i11 = 72;
     break L29;
    }
    i7 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i13 = i7;
     break;
    }
    i7 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i8) | 0;
    if ((i7 | 0) == 0) {
     i6 = 0;
     i11 = 73;
     break L29;
    } else {
     i13 = i7;
    }
   } else {
    i13 = i12;
   }
  } while (0);
  if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i13;
   while (1) {
    if ((i12 | 0) == (i8 | 0)) {
     i6 = 0;
     i11 = 61;
     break L29;
    }
    i7 = HEAP32[i12 + 28 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i2 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i8) | 0;
     if ((i2 | 0) == 0) {
      i6 = 0;
      i11 = 62;
      break L29;
     } else {
      i14 = i2;
     }
    } else {
     i14 = i7;
    }
    if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
     i12 = i14;
    } else {
     i15 = i14;
     break;
    }
   }
  } else {
   i15 = i13;
  }
  i4 = i15;
  i10 = HEAP32[i15 + 12 >> 2] | 0;
 }
 if ((i11 | 0) == 30) {
  if ((i4 | 0) == 0) {
   i6 = 0;
   STACKTOP = i3;
   return i6 | 0;
  }
  i15 = i1 | 0;
  i1 = i4;
  L52 : while (1) {
   i4 = i1;
   i10 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0;
   i13 = HEAP32[(__ZNK7WebCore17HTMLAnchorElement4nameEv(i1) | 0) >> 2] | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   if (i10) {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i13, i14) | 0) {
     i6 = i4;
     i11 = 64;
     break;
    }
   } else {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(i13, i14) | 0) {
     i6 = i4;
     i11 = 74;
     break;
    }
   }
   i4 = HEAP32[i1 + 36 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     if ((i1 | 0) == (i15 | 0)) {
      i6 = 0;
      i11 = 75;
      break L52;
     }
     i14 = HEAP32[i1 + 28 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i16 = i14;
      break;
     }
     i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i1, i15) | 0;
     if ((i14 | 0) == 0) {
      i6 = 0;
      i11 = 76;
      break L52;
     } else {
      i16 = i14;
     }
    } else {
     i16 = i4;
    }
   } while (0);
   if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
    i4 = i16;
    while (1) {
     if ((i4 | 0) == (i15 | 0)) {
      i6 = 0;
      i11 = 58;
      break L52;
     }
     i14 = HEAP32[i4 + 28 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i15) | 0;
      if ((i13 | 0) == 0) {
       i6 = 0;
       i11 = 59;
       break L52;
      } else {
       i17 = i13;
      }
     } else {
      i17 = i14;
     }
     if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
      i4 = i17;
     } else {
      i18 = i17;
      break;
     }
    }
   } else {
    i18 = i16;
   }
   L70 : while (1) {
    if ((HEAP32[i18 + 12 >> 2] & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i18 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
    }
    i4 = HEAP32[i18 + 36 >> 2] | 0;
    do {
     if ((i4 | 0) == 0) {
      if ((i18 | 0) == (i15 | 0)) {
       i6 = 0;
       i11 = 65;
       break L52;
      }
      i14 = HEAP32[i18 + 28 >> 2] | 0;
      if ((i14 | 0) != 0) {
       i19 = i14;
       break;
      }
      i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i18, i15) | 0;
      if ((i14 | 0) == 0) {
       i6 = 0;
       i11 = 66;
       break L52;
      } else {
       i19 = i14;
      }
     } else {
      i19 = i4;
     }
    } while (0);
    if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
     i20 = i19;
    } else {
     i18 = i19;
     continue;
    }
    while (1) {
     if ((i20 | 0) == (i15 | 0)) {
      i6 = 0;
      i11 = 67;
      break L52;
     }
     i4 = HEAP32[i20 + 28 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i20, i15) | 0;
      if ((i14 | 0) == 0) {
       i6 = 0;
       i11 = 68;
       break L52;
      } else {
       i21 = i14;
      }
     } else {
      i21 = i4;
     }
     if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
      i20 = i21;
     } else {
      i18 = i21;
      continue L70;
     }
    }
   }
   if ((i18 | 0) == 0) {
    i6 = 0;
    i11 = 60;
    break;
   } else {
    i1 = i18;
   }
  }
  if ((i11 | 0) == 58) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 59) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 60) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 64) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 65) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 66) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 67) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 68) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 74) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 75) {
   STACKTOP = i3;
   return i6 | 0;
  } else if ((i11 | 0) == 76) {
   STACKTOP = i3;
   return i6 | 0;
  }
 } else if ((i11 | 0) == 61) {
  STACKTOP = i3;
  return i6 | 0;
 } else if ((i11 | 0) == 62) {
  STACKTOP = i3;
  return i6 | 0;
 } else if ((i11 | 0) == 72) {
  STACKTOP = i3;
  return i6 | 0;
 } else if ((i11 | 0) == 73) {
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore9TreeScope17labelElementForIdERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __Znwj(20) | 0;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[i5 >> 2] = i7;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i8 = i7 + 36 | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 12 >> 2] | 0;
   if ((i10 & 4 | 0) == 0) {
    i8 = i9 + 28 | 0;
   } else {
    i11 = 7;
    break;
   }
  }
  L12 : do {
   if ((i11 | 0) == 7) {
    i8 = i7 | 0;
    i12 = i9;
    i13 = i10;
    while (1) {
     if ((i13 & 16 | 0) != 0) {
      if ((HEAP32[(HEAP32[i12 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
     }
     i14 = HEAP32[i12 + 36 >> 2] | 0;
     do {
      if ((i14 | 0) == 0) {
       if ((i12 | 0) == (i8 | 0)) {
        break L12;
       }
       i15 = HEAP32[i12 + 28 >> 2] | 0;
       if ((i15 | 0) != 0) {
        i16 = i15;
        break;
       }
       i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i8) | 0;
       if ((i15 | 0) == 0) {
        break L12;
       } else {
        i16 = i15;
       }
      } else {
       i16 = i14;
      }
     } while (0);
     if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
      i14 = i16;
      while (1) {
       if ((i14 | 0) == (i8 | 0)) {
        break L12;
       }
       i15 = HEAP32[i14 + 28 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i8) | 0;
        if ((i17 | 0) == 0) {
         break L12;
        } else {
         i18 = i17;
        }
       } else {
        i18 = i15;
       }
       if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
        i14 = i18;
       } else {
        i19 = i18;
        break;
       }
      }
     } else {
      i19 = i16;
     }
     i12 = i19;
     i13 = HEAP32[i19 + 12 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = i7 | 0;
    i8 = i12;
    while (1) {
     i14 = i8;
     i15 = HEAP32[i8 + 48 >> 2] | 0;
     L36 : do {
      if ((i15 | 0) == 0) {
       i20 = __ZN3WTF8nullAtomE;
      } else {
       i17 = HEAP32[i15 + 4 >> 2] | 0;
       if ((i17 & 1 | 0) == 0) {
        i21 = i17 >>> 1 & 134217727;
        i22 = i15 + 20 | 0;
       } else {
        i17 = i15 + 24 | 0;
        i21 = HEAP32[i17 + 8 >> 2] | 0;
        i22 = HEAP32[i17 >> 2] | 0;
       }
       if ((i21 | 0) == 0) {
        i20 = __ZN3WTF8nullAtomE;
        break;
       }
       i17 = HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0;
       i23 = i17 + 12 | 0;
       i24 = i17 + 16 | 0;
       i25 = 0;
       while (1) {
        i26 = i22 + (i25 << 3) | 0;
        i27 = HEAP32[i26 >> 2] | 0;
        if ((i27 | 0) == (i17 | 0)) {
         break;
        }
        if ((HEAP32[i27 + 12 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
         if ((HEAP32[i27 + 16 >> 2] | 0) == (HEAP32[i24 >> 2] | 0)) {
          break;
         }
        }
        i27 = i25 + 1 | 0;
        if (i27 >>> 0 < i21 >>> 0) {
         i25 = i27;
        } else {
         i20 = __ZN3WTF8nullAtomE;
         break L36;
        }
       }
       i20 = (i26 | 0) == 0 ? __ZN3WTF8nullAtomE : i22 + (i25 << 3) + 4 | 0;
      }
     } while (0);
     i15 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(HEAP32[i5 >> 2] | 0, i15, i14, i1);
      }
     } while (0);
     i14 = HEAP32[i8 + 36 >> 2] | 0;
     do {
      if ((i14 | 0) == 0) {
       if ((i8 | 0) == (i13 | 0)) {
        break L12;
       }
       i15 = HEAP32[i8 + 28 >> 2] | 0;
       if ((i15 | 0) != 0) {
        i28 = i15;
        break;
       }
       i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i8, i13) | 0;
       if ((i15 | 0) == 0) {
        break L12;
       } else {
        i28 = i15;
       }
      } else {
       i28 = i14;
      }
     } while (0);
     if ((HEAP32[i28 + 12 >> 2] & 4 | 0) == 0) {
      i14 = i28;
      while (1) {
       if ((i14 | 0) == (i13 | 0)) {
        break L12;
       }
       i15 = HEAP32[i14 + 28 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i13) | 0;
        if ((i24 | 0) == 0) {
         break L12;
        } else {
         i29 = i24;
        }
       } else {
        i29 = i15;
       }
       if ((HEAP32[i29 + 12 >> 2] & 4 | 0) == 0) {
        i14 = i29;
       } else {
        i30 = i29;
        break;
       }
      }
     } else {
      i30 = i28;
     }
     L67 : while (1) {
      if ((HEAP32[i30 + 12 >> 2] & 16 | 0) != 0) {
       if ((HEAP32[(HEAP32[i30 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
      }
      i14 = HEAP32[i30 + 36 >> 2] | 0;
      do {
       if ((i14 | 0) == 0) {
        if ((i30 | 0) == (i13 | 0)) {
         break L12;
        }
        i15 = HEAP32[i30 + 28 >> 2] | 0;
        if ((i15 | 0) != 0) {
         i31 = i15;
         break;
        }
        i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i30, i13) | 0;
        if ((i15 | 0) == 0) {
         break L12;
        } else {
         i31 = i15;
        }
       } else {
        i31 = i14;
       }
      } while (0);
      if ((HEAP32[i31 + 12 >> 2] & 4 | 0) == 0) {
       i32 = i31;
      } else {
       i30 = i31;
       continue;
      }
      while (1) {
       if ((i32 | 0) == (i13 | 0)) {
        break L12;
       }
       i14 = HEAP32[i32 + 28 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i25 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i32, i13) | 0;
        if ((i25 | 0) == 0) {
         break L12;
        } else {
         i33 = i25;
        }
       } else {
        i33 = i14;
       }
       if ((HEAP32[i33 + 12 >> 2] & 4 | 0) == 0) {
        i32 = i33;
       } else {
        i30 = i33;
        continue L67;
       }
      }
     }
     if ((i30 | 0) == 0) {
      break;
     } else {
      i8 = i30;
     }
    }
   }
  } while (0);
  i34 = HEAP32[i5 >> 2] | 0;
  i35 = HEAP32[i3 >> 2] | 0;
 } else {
  i34 = i6;
  i35 = i2;
 }
 i4 = __ZNK7WebCore18DocumentOrderedMap29getElementByLabelForAttributeERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i34, i35, i1) | 0;
 return i4 | 0;
}
function __ZN7WebCore9TreeScopeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i3 = __Znwj(44) | 0;
  i4 = i3;
  HEAP32[i3 >> 2] = H_BASE + 16;
  _memset(i3 + 4 | 0, 0, 40) | 0;
  HEAP32[H_BASE + 40 >> 2] = i4;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i5 = i4;
 } else {
  i5 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 HEAP32[i2 + 20 >> 2] = i5;
 i5 = i1 + 40 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   __ZN7WebCore12DOMSelection14clearTreeScopeEv(i2);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 12 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 12 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 16 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) != 0) {
    break;
   }
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
    i3 = __Znwj(44) | 0;
    i6 = i3;
    HEAP32[i3 >> 2] = H_BASE + 16;
    _memset(i3 + 4 | 0, 0, 40) | 0;
    HEAP32[H_BASE + 40 >> 2] = i6;
    HEAP32[H_BASE + 48 >> 2] = 1;
    HEAP32[H_BASE + 52 >> 2] = 0;
    i7 = i6;
   } else {
    i7 = HEAP32[H_BASE + 40 >> 2] | 0;
   }
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 12 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 12 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 << 3) >> 2] | 0) != -1) {
       i3 = HEAP32[i6 + (i7 << 3) + 4 >> 2] | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i4);
       }
       __ZN3WTF8fastFreeEPv(i3);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i3 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        HEAP32[i3 >> 2] = 0;
       }
       i3 = i6 + (i7 * 24 & -1) + 12 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       HEAP32[i3 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i4);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i4 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i4 >> 2] | 0) != 0) {
        HEAP32[i4 >> 2] = 0;
       }
       i4 = i6 + (i7 * 24 & -1) + 12 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       HEAP32[i4 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i3);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i3 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        HEAP32[i3 >> 2] = 0;
       }
       i3 = i6 + (i7 * 24 & -1) + 12 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       HEAP32[i3 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i4);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i5 * 24 & -1) >> 2] | 0) != -1) {
      i7 = i1 + (i5 * 24 & -1) + 20 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i1 + (i5 * 24 & -1) + 12 | 0;
      i4 = HEAP32[i7 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i1 + (i5 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i4);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore9TreeScopeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i3 = __Znwj(44) | 0;
  i4 = i3;
  HEAP32[i3 >> 2] = H_BASE + 16;
  _memset(i3 + 4 | 0, 0, 40) | 0;
  HEAP32[H_BASE + 40 >> 2] = i4;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i5 = i4;
 } else {
  i5 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 HEAP32[i2 + 20 >> 2] = i5;
 i5 = i1 + 40 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   __ZN7WebCore12DOMSelection14clearTreeScopeEv(i2);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 12 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 12 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 16 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) != 0) {
    break;
   }
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
    i3 = __Znwj(44) | 0;
    i6 = i3;
    HEAP32[i3 >> 2] = H_BASE + 16;
    _memset(i3 + 4 | 0, 0, 40) | 0;
    HEAP32[H_BASE + 40 >> 2] = i6;
    HEAP32[H_BASE + 48 >> 2] = 1;
    HEAP32[H_BASE + 52 >> 2] = 0;
    i7 = i6;
   } else {
    i7 = HEAP32[H_BASE + 40 >> 2] | 0;
   }
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 15](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 12 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 12 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6);
  }
 } while (0);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 << 3) >> 2] | 0) != -1) {
       i3 = HEAP32[i6 + (i7 << 3) + 4 >> 2] | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i4);
       }
       __ZN3WTF8fastFreeEPv(i3);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i3 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        HEAP32[i3 >> 2] = 0;
       }
       i3 = i6 + (i7 * 24 & -1) + 12 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       HEAP32[i3 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i4);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i4 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i4 >> 2] | 0) != 0) {
        HEAP32[i4 >> 2] = 0;
       }
       i4 = i6 + (i7 * 24 & -1) + 12 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       HEAP32[i4 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i3);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i7 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i7 * 24 & -1) >> 2] | 0) != -1) {
       i3 = i6 + (i7 * 24 & -1) + 20 | 0;
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        HEAP32[i3 >> 2] = 0;
       }
       i3 = i6 + (i7 * 24 & -1) + 12 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       HEAP32[i3 >> 2] = 0;
       HEAP32[i6 + (i7 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i4);
      }
     } while (0);
     i7 = i7 + 1 | 0;
     if ((i7 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i5 * 24 & -1) >> 2] | 0) != -1) {
      i7 = i1 + (i5 * 24 & -1) + 20 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i1 + (i5 * 24 & -1) + 12 | 0;
      i4 = HEAP32[i7 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i1 + (i5 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i4);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZdlPv(i2);
 return;
}
function __ZNK7WebCore9TreeScope11getImageMapERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i1 + 28 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 L7 : do {
  if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
   i12 = HEAP32[i9 + 8 >> 2] | 0;
   i13 = HEAP32[i9 + 4 >> 2] | 0;
   i14 = 0;
   while (1) {
    if (i14 >>> 0 >= i13 >>> 0) {
     i15 = 11;
     break L7;
    }
    if ((HEAP16[i12 + (i14 << 1) >> 1] | 0) == 35) {
     i16 = i14;
     i15 = 10;
     break;
    } else {
     i14 = i14 + 1 | 0;
    }
   }
  } else {
   i14 = HEAP32[i9 + 8 >> 2] | 0;
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   i13 = 0;
   while (1) {
    if (i13 >>> 0 >= i12 >>> 0) {
     i15 = 11;
     break L7;
    }
    if ((HEAP8[i14 + i13 | 0] | 0) == 35) {
     i16 = i13;
     i15 = 10;
     break;
    } else {
     i13 = i13 + 1 | 0;
    }
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 10) {
   if ((i16 | 0) == -1) {
    i15 = 11;
    break;
   }
   __ZNK3WTF6String9substringEjj(i7, i2, i16 + 1 | 0, -1);
   i17 = 1;
   i18 = 0;
   i19 = i7 | 0;
  }
 } while (0);
 if ((i15 | 0) == 11) {
  i15 = i7 | 0;
  HEAP32[i15 >> 2] = i9;
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i17 = 0;
  i18 = 1;
  i19 = i15;
 }
 i15 = HEAP32[i19 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i9 = i15 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 do {
  if (i17) {
   i9 = HEAP32[i19 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i15 = i9 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (i18) {
   i17 = HEAP32[i19 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i7 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 do {
  if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
   i20 = 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
    i18 = HEAP32[i11 >> 2] | 0;
    if ((HEAP32[i19 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i19);
     i21 = i5 | 0;
    } else {
     i15 = i5 | 0;
     HEAP32[i15 >> 2] = i19;
     i16 = i19 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     i21 = i15;
    }
    i15 = HEAP32[i21 >> 2] | 0;
    i16 = __ZNK7WebCore18DocumentOrderedMap19getElementByMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i18, i15, i1) | 0;
    if ((i15 | 0) == 0) {
     i20 = i16;
     break;
    }
    i18 = i15 | 0;
    i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     i20 = i16;
     break;
    } else {
     HEAP32[i18 >> 2] = i17;
     i20 = i16;
     break;
    }
   }
   __ZNK3WTF6String5lowerEv(i8, i6);
   i16 = i8 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = i4 | 0;
     HEAP32[i18 >> 2] = 0;
     i22 = i18;
    } else {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i17);
      i22 = i4 | 0;
      break;
     } else {
      i18 = i4 | 0;
      HEAP32[i18 >> 2] = i17;
      i15 = i17 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      i22 = i18;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i22 >> 2] | 0;
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i15 = i18 | 0;
     i9 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i15 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i18 = __ZNK7WebCore18DocumentOrderedMap29getElementByLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(HEAP32[i11 >> 2] | 0, i17, i1) | 0;
   if ((i17 | 0) == 0) {
    i20 = i18;
    break;
   }
   i16 = i17 | 0;
   i9 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i20 = i18;
    break;
   } else {
    HEAP32[i16 >> 2] = i9;
    i20 = i18;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = i20;
  STACKTOP = i3;
  return i10 | 0;
 }
 i7 = i1 | 0;
 i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i10 = i20;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i7 >> 2] = i11;
  i10 = i20;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore15commonTreeScopeEPNS_4NodeES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 32 | 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i2 + 20 >> 2] | 0)) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i4 + 12 | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i7;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = 5;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCoreL14listTreeScopesEPNS_4NodeERN3WTF6VectorIPNS_9TreeScopeELj5ENS2_15CrashOnOverflowEEE(i1, i4);
 i4 = i5 + 12 | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i4;
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = 5;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCoreL14listTreeScopesEPNS_4NodeERN3WTF6VectorIPNS_9TreeScopeELj5ENS2_15CrashOnOverflowEEE(i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 i15 = i2;
 i16 = i5;
 while (1) {
  if ((i16 | 0) == 0 | (i15 | 0) == 0) {
   i17 = 10;
   break;
  }
  i18 = i16 - 1 | 0;
  if (i5 >>> 0 <= i18 >>> 0) {
   i17 = 6;
   break;
  }
  i19 = i15 - 1 | 0;
  if (i2 >>> 0 <= i19 >>> 0) {
   i17 = 8;
   break;
  }
  if ((HEAP32[i13 + (i18 << 2) >> 2] | 0) == (HEAP32[i14 + (i19 << 2) >> 2] | 0)) {
   i15 = i19;
   i16 = i18;
  } else {
   i17 = 10;
   break;
  }
 }
 if ((i17 | 0) == 10) {
  do {
   if ((i16 | 0) == (i5 | 0)) {
    i20 = 0;
   } else {
    if (i5 >>> 0 <= i16 >>> 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
    i18 = HEAP32[i13 + (i16 << 2) >> 2] | 0;
    if (i2 >>> 0 > i15 >>> 0) {
     i20 = (i18 | 0) != (HEAP32[i14 + (i15 << 2) >> 2] | 0) ? 0 : i18;
     break;
    } else {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   }
  } while (0);
  if ((i2 | 0) != 0) {
   HEAP32[i12 >> 2] = 0;
  }
  if ((i4 | 0) == (i14 | 0) | (i14 | 0) == 0) {
   i21 = i5;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
   i21 = HEAP32[i10 >> 2] | 0;
  }
  if ((i21 | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
  }
  i10 = HEAP32[i8 >> 2] | 0;
  if ((i7 | 0) == (i10 | 0) | (i10 | 0) == 0) {
   i6 = i20;
   STACKTOP = i3;
   return i6 | 0;
  }
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
  i6 = i20;
  STACKTOP = i3;
  return i6 | 0;
 } else if ((i17 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i17 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore9TreeScope20destroyTreeScopeDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i2 + (i5 * 24 & -1) >> 2] | 0) != -1) {
       i6 = i2 + (i5 * 24 & -1) + 20 | 0;
       if ((HEAP32[i6 >> 2] | 0) != 0) {
        HEAP32[i6 >> 2] = 0;
       }
       i6 = i2 + (i5 * 24 & -1) + 12 | 0;
       i7 = HEAP32[i6 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       HEAP32[i6 >> 2] = 0;
       HEAP32[i2 + (i5 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZdlPv(i3);
 }
 i3 = i1 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 * 24 & -1) >> 2] | 0) != -1) {
       i7 = i3 + (i5 * 24 & -1) + 20 | 0;
       if ((HEAP32[i7 >> 2] | 0) != 0) {
        HEAP32[i7 >> 2] = 0;
       }
       i7 = i3 + (i5 * 24 & -1) + 12 | 0;
       i6 = HEAP32[i7 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       HEAP32[i7 >> 2] = 0;
       HEAP32[i3 + (i5 * 24 & -1) + 16 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i6);
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZdlPv(i2);
 }
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
      i5 = i2 + (i4 * 24 & -1) + 20 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i2 + (i4 * 24 & -1) + 12 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      HEAP32[i5 >> 2] = 0;
      HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore13nodeFromPointEPNS_8DocumentEiiPNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 152 | 0;
 i12 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 i14 = HEAP32[i12 + 452 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 d15 = +HEAPF32[i12 + 480 >> 2];
 d16 = d15 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i12);
 i12 = i14 | 0;
 i17 = i14;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 192 >> 2] & 3](i6, i12);
 d15 = +(i2 | 0) * d16 + +(HEAP32[i6 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 192 >> 2] & 3](i7, i12);
 d18 = +(i3 | 0) * d16 + +(HEAP32[i7 + 4 >> 2] | 0);
 d16 = +_round(+d15);
 do {
  if (d16 < +2147483647) {
   if (d16 <= +-2147483648) {
    i19 = -2147483648;
    break;
   }
   i19 = ~~d16;
  } else {
   i19 = 2147483647;
  }
 } while (0);
 d16 = +_round(+d18);
 do {
  if (d16 < +2147483647) {
   if (d16 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d16;
  } else {
   i20 = 2147483647;
  }
 } while (0);
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i8, i12, 0);
 i12 = HEAP32[i8 >> 2] | 0;
 if ((i12 | 0) > (i19 | 0)) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 if (((HEAP32[i8 + 8 >> 2] | 0) + i12 | 0) <= (i19 | 0)) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 i12 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i12 | 0) > (i20 | 0)) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 if (((HEAP32[i8 + 12 >> 2] | 0) + i12 | 0) <= (i20 | 0)) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 HEAP32[i9 >> 2] = 262;
 HEAP32[i11 >> 2] = i19;
 HEAP32[i11 + 4 >> 2] = i20;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i10, i11);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[i1 + 1584 >> 2] | 0, i9, i10) | 0;
 if ((i4 | 0) != 0) {
  i9 = i10 + 88 | 0;
  i1 = i4;
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i1 + 4 >> 2] = i4;
 }
 i4 = HEAP32[i10 + 72 >> 2] | 0;
 __ZN7WebCore13HitTestResultD1Ev(i10);
 i13 = i4;
 STACKTOP = i5;
 return i13 | 0;
}
function __ZN7WebCoreL14listTreeScopesEPNS_4NodeERN3WTF6VectorIPNS_9TreeScopeELj5ENS2_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 4 | 0;
 i7 = i2 | 0;
 i8 = i4;
 i9 = i1;
 while (1) {
  i1 = HEAP32[i9 + 20 >> 2] | 0;
  HEAP32[i4 >> 2] = i1;
  i10 = HEAP32[i5 >> 2] | 0;
  if ((i10 | 0) == (HEAP32[i6 >> 2] | 0)) {
   i11 = i10 + 1 | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   do {
    if (i12 >>> 0 > i4 >>> 0) {
     i13 = 6;
    } else {
     if ((i12 + (i10 << 2) | 0) >>> 0 <= i4 >>> 0) {
      i13 = 6;
      break;
     }
     i14 = i11 + (i10 >>> 2) | 0;
     i15 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     __ZN3WTF6VectorIPN7WebCore9TreeScopeELj5ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
     i15 = HEAP32[i7 >> 2] | 0;
     i16 = i15 + (i8 - i12 >> 2 << 2) | 0;
     i17 = i15;
    }
   } while (0);
   if ((i13 | 0) == 6) {
    i13 = 0;
    i12 = i11 + (i10 >>> 2) | 0;
    i15 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
    __ZN3WTF6VectorIPN7WebCore9TreeScopeELj5ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
    i16 = i4;
    i17 = HEAP32[i7 >> 2] | 0;
   }
   HEAP32[i17 + (HEAP32[i5 >> 2] << 2) >> 2] = HEAP32[i16 >> 2];
  } else {
   HEAP32[(HEAP32[i7 >> 2] | 0) + (i10 << 2) >> 2] = i1;
  }
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i15 = __ZNK7WebCore4Node10shadowHostEv(i9) | 0;
  if ((i15 | 0) == 0) {
   break;
  } else {
   i9 = i15 | 0;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9TreeScope14focusedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = HEAP32[i2 + 680 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((__ZNK7WebCore8Document4pageEv(i2) | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i2) | 0) + 32 >> 2] | 0) + 4 >> 2] | 0;
   i6 = HEAP32[i2 + 332 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   } else {
    i7 = i5;
   }
   while (1) {
    i5 = i7 + 40 | 0;
    if ((__ZNK7WebCore9FrameTree6parentEv(i5) | 0) == (i6 | 0)) {
     break;
    }
    i8 = __ZNK7WebCore9FrameTree6parentEv(i5) | 0;
    if ((i8 | 0) == 0) {
     i4 = 0;
     i9 = 12;
     break;
    } else {
     i7 = i8;
    }
   }
   if ((i9 | 0) == 12) {
    return i4 | 0;
   }
   i6 = HEAP32[i7 + 448 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = 0;
   } else {
    i10 = i6 | 0;
    break;
   }
   return i4 | 0;
  } else {
   i10 = i3;
  }
 } while (0);
 i3 = (i2 | 0) == 0 ? 0 : i2 + 44 | 0;
 i2 = HEAP32[i10 + 20 >> 2] | 0;
 i7 = (i2 | 0) != (i1 | 0);
 if ((i2 | 0) == (i3 | 0) | i7 ^ 1) {
  i11 = i10;
  i12 = i7;
 } else {
  i7 = i2;
  while (1) {
   i2 = HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 92 >> 2] | 0;
   i10 = HEAP32[i2 + 20 >> 2] | 0;
   i9 = (i10 | 0) != (i1 | 0);
   if ((i10 | 0) == (i3 | 0) | i9 ^ 1) {
    i11 = i2;
    i12 = i9;
    break;
   } else {
    i7 = i10;
   }
  }
 }
 i4 = i12 ? 0 : i11;
 return i4 | 0;
}
function __ZNK7WebCore9TreeScope12getSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i1 + 332 >> 2] | 0) == 0) {
   i3 = 0;
   i4 = 12;
   break;
  }
  i5 = i2 + 40 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i3 = i6;
   i4 = 14;
   break;
  }
  i6 = i1 + 44 | 0;
  if ((((i1 | 0) == 0 ? 0 : i6) | 0) == (i2 | 0)) {
   i4 = 5;
   break;
  } else {
   i2 = i6;
  }
 }
 if ((i4 | 0) == 12) {
  return i3 | 0;
 } else if ((i4 | 0) == 14) {
  return i3 | 0;
 } else if ((i4 | 0) == 5) {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  __ZN7WebCore12DOMSelectionC1EPKNS_9TreeScopeE(i4, i2);
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i4;
  do {
   if ((i2 | 0) != 0) {
    i4 = i2 + 12 | 0;
    i6 = i4 | 0;
    i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i1 | 0) != 0) {
     HEAP32[i6 >> 2] = i1;
     break;
    }
    i1 = i4 - 12 | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1);
   }
  } while (0);
  i3 = HEAP32[i5 >> 2] | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore9TreeScope16elementFromPointEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = __ZN7WebCore13nodeFromPointEPNS_8DocumentEiiPNS_11LayoutPointE(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i2, i3, 0) | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  i6 = i5;
  return i6 | 0;
 } else {
  i7 = i4;
 }
 while (1) {
  if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
   i8 = i7;
   break;
  }
  i4 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 0;
   i9 = 9;
   break;
  } else {
   i7 = i4 | 0;
  }
 }
 if ((i9 | 0) == 9) {
  i6 = i5;
  return i6 | 0;
 }
 while (1) {
  if ((HEAP32[i8 + 20 >> 2] | 0) == (i1 | 0)) {
   i5 = i8;
   i9 = 10;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 8388608 | 0) == 0) {
   i5 = 0;
   i9 = 11;
   break;
  }
  i7 = __ZNK7WebCore4Node10shadowHostEv(i8) | 0;
  if ((i7 | 0) == 0) {
   i5 = 0;
   i9 = 8;
   break;
  } else {
   i8 = i7 | 0;
  }
 }
 if ((i9 | 0) == 10) {
  i6 = i5;
  return i6 | 0;
 } else if ((i9 | 0) == 11) {
  i6 = i5;
  return i6 | 0;
 } else if ((i9 | 0) == 8) {
  i6 = i5;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore9TreeScope18setParentTreeScopeEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 16 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) != 0) {
    break;
   }
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    i5 = i6;
    HEAP32[i6 >> 2] = H_BASE + 16;
    _memset(i6 + 4 | 0, 0, 40) | 0;
    HEAP32[H_BASE + 40 >> 2] = i5;
    HEAP32[H_BASE + 48 >> 2] = 1;
    HEAP32[H_BASE + 52 >> 2] = 0;
    i7 = i5;
   } else {
    i7 = HEAP32[H_BASE + 40 >> 2] | 0;
   }
   if ((i7 | 0) == (i4 | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 return;
}
function __ZN3WTF6VectorIPN7WebCore9TreeScopeELj5ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 5 >>> 0) {
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
   HEAP32[i3 >> 2] = 5;
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
function __ZN7WebCore9TreeScopeC2EPNS_13ContainerNodeEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 _memset(i1 + 16 | 0, 0, 20) | 0;
 __ZN7WebCore24IdTargetObserverRegistry6createEv(i5);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i5;
 HEAP32[i1 + 40 >> 2] = 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9TreeScopeC1EPNS_13ContainerNodeEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 _memset(i1 + 16 | 0, 0, 20) | 0;
 __ZN7WebCore24IdTargetObserverRegistry6createEv(i5);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i5;
 HEAP32[i1 + 40 >> 2] = 0;
 i5 = (HEAP32[i2 >> 2] | 0) + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __Znwj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[i4 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i5;
 }
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i8, i2, i3, i1);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore24IdTargetObserverRegistry23notifyObserversInternalERKN3WTF16AtomicStringImplE(i3, i2);
 return;
}
function __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = i2;
   while (1) {
    if ((HEAP32[i4 + 20 >> 2] | 0) == (i1 | 0)) {
     i3 = i4;
     break L1;
    }
    if ((HEAP32[i4 + 12 >> 2] & 8388608 | 0) == 0) {
     i3 = 0;
     break L1;
    }
    i5 = __ZNK7WebCore4Node10shadowHostEv(i4) | 0;
    if ((i5 | 0) == 0) {
     i3 = 0;
     break;
    } else {
     i4 = i5 | 0;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore9TreeScope11addImageMapERNS_14HTMLMapElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 28 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __Znwj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[i4 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i5;
 }
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i8, i3, i2 | 0, i1);
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
function __ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i4, i2, i3);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore24IdTargetObserverRegistry23notifyObserversInternalERKN3WTF16AtomicStringImplE(i3, i2);
 return;
}
function __ZN7WebCore9TreeScopeC2EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 24) | 0;
 __ZN7WebCore24IdTargetObserverRegistry6createEv(i4);
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9TreeScopeC1EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 24) | 0;
 __ZN7WebCore24IdTargetObserverRegistry6createEv(i4);
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9TreeScope18getAllElementsByIdERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore18DocumentOrderedMap18getAllElementsByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i2, i3, i1) | 0;
 return i4 | 0;
}
function __ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __Znwj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[i4 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i5;
 }
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i8, i2, i3, i1);
 return;
}
function __ZNK7WebCore9TreeScope16getElementByNameERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore18DocumentOrderedMap16getElementByNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i2, i3, i1) | 0;
 return i4 | 0;
}
function __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore18DocumentOrderedMap14getElementByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i2, i3, i1) | 0;
 return i4 | 0;
}
function __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i1;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = i5;
 if ((i5 | 0) == (i1 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore16TreeScopeAdopter18moveTreeToNewScopeEPNS_4NodeE(i4, i2);
 STACKTOP = i3;
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
function __ZN7WebCore9TreeScope14removeImageMapERNS_14HTMLMapElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 52 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i3, i1, i2 | 0);
 return;
}
function __ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i4, i2, i3);
 return;
}
function __ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(HEAP32[i1 + 32 >> 2] | 0, i2, i3 | 0, i1);
 return;
}
function __ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(HEAP32[i1 + 32 >> 2] | 0, i2, i3 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9TreeScope8refCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 8;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore9TreeScopeC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 4 | 0, 0, 40) | 0;
 return;
}
function __ZN7WebCore9TreeScopeC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 4 | 0, 0, 40) | 0;
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
function __ZN7WebCore9TreeScopeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TreeScopeD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore9TreeScope18clearDocumentScopeEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore9TreeScope17applyAuthorStylesEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZN7WebCore9TreeScope12dropChildrenEv(i1) {
 i1 = i1 | 0;
 return;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9TreeScopeD0Ev,b0,__ZN7WebCore9TreeScopeC2Ev,b0,__ZN7WebCore9TreeScopeD2Ev,b0,__ZN7WebCore9TreeScope12dropChildrenEv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9TreeScopeC2EPNS_8DocumentE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore9TreeScope17applyAuthorStylesEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore9TreeScopeC2EPNS_13ContainerNodeEPNS_8DocumentE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7forAttrE": __ZN7WebCore9HTMLNames7forAttrE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames8labelTagE": __ZN7WebCore9HTMLNames8labelTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore9TreeScope14focusedElementEv","__ZN7WebCore9TreeScope14addElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore9TreeScope16addElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore9TreeScopeC2Ev","__ZN7WebCore13nodeFromPointEPNS_8DocumentEiiPNS_11LayoutPointE","__ZNK7WebCore9TreeScope12getSelectionEv","__ZN7WebCore9TreeScopeD0Ev","__ZN7WebCore9TreeScopeC2EPNS_13ContainerNodeEPNS_8DocumentE","_memset","__ZN7WebCore15commonTreeScopeEPNS_4NodeES1_","_memcpy","__ZNK7WebCore9TreeScope16getElementByNameERKN3WTF12AtomicStringE","__ZN7WebCore9TreeScope14removeImageMapERNS_14HTMLMapElementE","__ZN7WebCore9TreeScope18clearDocumentScopeEv","__ZN7WebCore9TreeScope11addImageMapERNS_14HTMLMapElementE","__ZN7WebCore9TreeScope17labelElementForIdERKN3WTF12AtomicStringE","__ZN7WebCore9TreeScope12dropChildrenEv","__ZNK7WebCore9TreeScope8refCountEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore9TreeScope11getImageMapERKN3WTF6StringE","__ZN7WebCore9TreeScope19removeElementByNameERKN3WTF16AtomicStringImplERNS_7ElementE","__ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE","__ZNK7WebCore9TreeScope16elementFromPointEii","__ZN7WebCore9TreeScope11removeLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE","__ZN7WebCore9TreeScope8addLabelERKN3WTF16AtomicStringImplERNS_16HTMLLabelElementE","__ZN7WebCore9TreeScopeD2Ev","__ZN7WebCore9TreeScope17removeElementByIdERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore9TreeScopeC2EPNS_8DocumentE","__ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE","__ZN7WebCore9TreeScope20destroyTreeScopeDataEv","__ZNK7WebCore9TreeScope17applyAuthorStylesEv","__ZN3WTF6VectorIPN7WebCore9TreeScopeELj5ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore9TreeScope18getAllElementsByIdERKN3WTF12AtomicStringE","__ZN7WebCore9TreeScope10findAnchorERKN3WTF6StringE","__ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE","__ZN7WebCoreL14listTreeScopesEPNS_4NodeERN3WTF6VectorIPNS_9TreeScopeELj5ENS2_15CrashOnOverflowEEE","__ZN7WebCore9TreeScope18setParentTreeScopeEPS0_"]

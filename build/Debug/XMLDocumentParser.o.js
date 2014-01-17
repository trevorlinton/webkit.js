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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([69,120,99,101,115,115,105,118,101,32,110,111,100,101,32,110,101,115,116,105,110,103,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26CachedScriptSourceProviderE=(H_BASE+32)|0;
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i1 + 172 | 0;
 i5 = i4 | 0;
 __ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE(i3, HEAP32[i5 >> 2] | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = (((HEAP32[i6 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
 i7 = (HEAP8[i6 + 549 | 0] & 1) == 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i6, i1 + 28 | 0);
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i4 | 0, 0);
 i4 = i1 + 176 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i8 = (i6 | 0) == 0;
 do {
  if (i8) {
   HEAP32[i4 >> 2] = 0;
  } else {
   i9 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 8 | 0;
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i10 = __ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i6) | 0;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 do {
  if (i5) {
   __ZN7WebCore13ScriptElement18dispatchErrorEventEv(i10);
  } else {
   if (!i7) {
    break;
   }
   __ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE(i10, i3);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 31](i10);
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 8 | 0;
   i7 = i4 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 3) {
   if ((HEAP8[i1 + 166 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore17XMLDocumentParser13resumeParsingEv(i1);
  }
 } while (0);
 i10 = i1 + 4 | 0;
 i1 = i10 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  } else {
   HEAP32[i1 >> 2] = i4;
  }
 } while (0);
 do {
  if (!i8) {
   i4 = i6 + 8 | 0;
   i1 = i4 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i3 + 28 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 + 24 | 0);
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i8 = i4 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i4 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i6 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
 i10 = i3 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 8;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 8;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 14;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 6;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 6;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 12;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
}
function __ZN7WebCore17XMLDocumentParser21parseDocumentFragmentERKN3WTF6StringERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 1;
  STACKTOP = i5;
  return i9 | 0;
 }
 if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
  i9 = 1;
  STACKTOP = i5;
  return i9 | 0;
 }
 do {
  if ((i3 | 0) != 0) {
   i8 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
   if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i7, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
   i8 = i6 | 0;
   i10 = i7 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i8 >> 2] = i11;
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i2 | 0, i6);
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 + 8 | 0;
     i12 = i8 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i9 = 1;
    STACKTOP = i5;
    return i9 | 0;
   }
   i8 = i11 + 8 | 0;
   i11 = i8 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i9 = 1;
    STACKTOP = i5;
    return i9 | 0;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i9 = 1;
    STACKTOP = i5;
    return i9 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   i9 = 1;
   STACKTOP = i5;
   return i9 | 0;
  }
 } while (0);
 i6 = __ZN3WTF10fastMallocEj(292) | 0;
 i7 = i6;
 __ZN7WebCore17XMLDocumentParserC1ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i7, i2, i3, i4);
 i4 = __ZN7WebCore17XMLDocumentParser20appendFragmentSourceERKN3WTF6StringE(i7, i1) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 56 >> 2] & 31](i7);
 if ((i6 | 0) == 0) {
  i9 = i4;
  STACKTOP = i5;
  return i9 | 0;
 }
 i7 = i6 + 4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  i9 = i4;
  STACKTOP = i5;
  return i9 | 0;
 } else {
  HEAP32[i7 >> 2] = i1;
  i9 = i4;
  STACKTOP = i5;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore17XMLDocumentParser21clearCurrentNodeStackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((i3 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   }
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 156 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 144 | 0;
 i2 = i1 + 152 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i4 = i6 - 1 | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i3 | 0;
   i7 = i4;
   i8 = i6;
   while (1) {
    if (i8 >>> 0 <= i7 >>> 0) {
     i9 = 14;
     break;
    }
    i10 = (HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] | 0) + 8 | 0;
    i11 = i10 - 8 | 0;
    i12 = i10 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i13;
    do {
     if ((i13 | 0) < 1) {
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11);
     }
    } while (0);
    i7 = i7 - 1 | 0;
    i8 = HEAP32[i2 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
   if ((i9 | 0) == 14) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i8 | 0) != 0) {
    break;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i9 = i3 | 0;
 i3 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((i3 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    break;
   }
   i6 = i3 + 8 | 0;
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 148 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore17XMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 80 | 0;
 i6 = i3 + 88 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i4, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i1 + 162 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  if ((HEAP8[i1 + 163 | 0] & 1) == 0) {
   i8 = 7;
  }
 } else {
  i8 = 7;
 }
 if ((i8 | 0) == 7) {
  __ZN7WebCore15SegmentedString6appendERKS0_(i1 + 36 | 0, i4);
 }
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) <= 1) {
   if ((HEAP8[i5] & 1) != 0) {
    break;
   }
   if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
    __ZN7WebCore15SegmentedString6appendERKS0_(i1 + 216 | 0, i4);
    break;
   }
   __ZNK7WebCore15SegmentedString8toStringEv(i6, i4);
   __ZN7WebCore17XMLDocumentParser7doWriteERKN3WTF6StringE(i1, i6);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i7;
      break;
     }
    }
   } while (0);
   __ZN7WebCore11ImageLoader31dispatchPendingBeforeLoadEventsEv();
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i4 + 36 | 0);
 i6 = i4 + 44 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser9enterTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 140 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 88 | 0);
 __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i3, i7, i4);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 156 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 8 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 + 8 | 0;
   i3 = i7 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i6;
 i8 = i1 + 168 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = HEAP32[i1 + 16 >> 2] | 0;
   i11 = __Znwj(40) | 0;
   __ZN7WebCore9XMLErrorsC1EPNS_8DocumentE(i11, i10);
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i10 | 0) == 0) {
    i12 = i11;
    break;
   }
   i11 = HEAP32[i10 + 24 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = i11 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i10 + 20 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i14 = i11 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   __ZdlPv(i10);
   i12 = HEAP32[i8 >> 2] | 0;
  } else {
   i12 = i9;
  }
 } while (0);
 i9 = i4;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = i4;
 __ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcN3WTF12TextPositionE(i12, i2, i3, i7);
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i1 + 160 | 0] = 1;
 if ((i2 | 0) != 2) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17XMLDocumentParser15pushCurrentNodeEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != (i2 | 0)) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 144 | 0;
 i6 = i1 + 140 | 0;
 i7 = i1 + 152 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 148 >> 2] | 0)) {
  i9 = i8 + 1 | 0;
  i10 = i5 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  do {
   if (i11 >>> 0 > i6 >>> 0) {
    i12 = 7;
   } else {
    if ((i11 + (i8 << 2) | 0) >>> 0 <= i6 >>> 0) {
     i12 = 7;
     break;
    }
    __ZN3WTF6VectorIPN7WebCore13ContainerNodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i9);
    i13 = HEAP32[i10 >> 2] | 0;
    i14 = i13 + (i6 - i11 >> 2 << 2) | 0;
    i15 = i13;
   }
  } while (0);
  if ((i12 | 0) == 7) {
   __ZN3WTF6VectorIPN7WebCore13ContainerNodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i9);
   i14 = i6;
   i15 = HEAP32[i10 >> 2] | 0;
  }
  HEAP32[i15 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i14 >> 2];
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i8 << 2) >> 2] = HEAP32[i6 >> 2];
 }
 i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i8;
 HEAP32[i6 >> 2] = i2;
 if (i8 >>> 0 <= 5e3 >>> 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 7](i4, i1);
 __ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE(i1, 2, H_BASE + 8 | 0, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17XMLDocumentParser8exitTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 156 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 120 | 0;
 i7 = i1 + 128 | 0;
 __ZN3WTF6String8fromUTF8EPKhj(i3, HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore13CharacterData10appendDataERKN3WTF6StringERi(i5 | 0, i3, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 8 | 0;
   i6 = i4 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(32) | 0;
 i6 = i5;
 i7 = i2 | 0;
 i8 = __ZNK7WebCore20ResourceResponseBase3urlEv(i2 + 272 | 0) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i6, i8, i4);
 i4 = i5 + 24 | 0;
 HEAP32[i5 >> 2] = H_BASE + 40;
 HEAP32[i4 >> 2] = H_BASE + 60;
 i8 = i5 + 28 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i8, i7);
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = i6;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 7](i6) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 + 20 >> 2] = 1;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 24 | 0, i7);
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17XMLDocumentParser3endEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17XMLDocumentParser5doEndEv(i1);
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 3) {
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
  __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i1 + 16 >> 2] | 0, 0);
 } else {
  __ZN7WebCore9XMLErrors23insertErrorMessageBlockEv(HEAP32[i1 + 168 >> 2] | 0);
 }
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i1 | 0);
 }
 i2 = i1 + 16 | 0;
 __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(HEAP32[i2 >> 2] | 0, 1);
 __ZN7WebCore17XMLDocumentParser21clearCurrentNodeStackEv(i1);
 __ZN7WebCore8Document15finishedParsingEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 do {
  if ((i3 | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 152 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i6;
 HEAP32[i2 >> 2] = HEAP32[(HEAP32[i1 + 144 >> 2] | 0) + (i5 << 2) >> 2];
 if ((i4 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[i3 >> 2] = i5;
 return;
}
function __ZN3WTF6VectorIPN7WebCore13ContainerNodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 32 + 8 | 0;
 HEAP32[i2 >> 2] = H_BASE + 40;
 i1 = i2 + 24 | 0;
 HEAP32[i1 >> 2] = H_BASE + 60;
 i3 = i2 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i1);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 __ZN3JSC14SourceProviderD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore26CachedScriptSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = H_BASE + 60;
 i3 = i1 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 32 + 8 | 0;
 HEAP32[i2 >> 2] = H_BASE + 40;
 i1 = i2 + 24 | 0;
 HEAP32[i1 >> 2] = H_BASE + 60;
 i3 = i2 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i1);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 __ZN3JSC14SourceProviderD2Ev(i2);
 return;
}
function __ZN7WebCore26CachedScriptSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = H_BASE + 60;
 i3 = i1 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 4;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn28_N7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 - 292 + 264 | 0, 0);
 return;
}
function __ZN7WebCore17XMLDocumentParser6finishEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 165 | 0] & 1) == 0) {
  __ZN7WebCore17XMLDocumentParser3endEv(i1);
  return;
 } else {
  HEAP8[i1 + 167 | 0] = 1;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser6detachEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParser21clearCurrentNodeStackEv(i1);
 __ZN7WebCore14DocumentParser6detachEv(i1 | 0);
 return;
}
function __ZN7WebCore17XMLDocumentParser23insertErrorMessageBlockEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9XMLErrors23insertErrorMessageBlockEv(HEAP32[i1 + 168 >> 2] | 0);
 return;
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
}
function __ZN7WebCore17XMLDocumentParser12pauseParsingEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 188 | 0] & 1) != 0) {
  return;
 }
 HEAP8[i1 + 165 | 0] = 1;
 return;
}
function __ZNK7WebCore26CachedScriptSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12CachedScript6scriptEv(HEAP32[i1 + 28 >> 2] | 0) | 0;
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
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore17XMLDocumentParser19isWaitingForScriptsEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 172 >> 2] | 0) != 0 | 0;
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
function __ZN7WebCore17XMLDocumentParser6insertERKNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b0,__ZN7WebCore26CachedScriptSourceProviderD0Ev,b0,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b0,__ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev,b0,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b0,__ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev,b0,__ZN7WebCore26CachedScriptSourceProviderD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b1,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore26CachedScriptSourceProvider6sourceEv,b2,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore26CachedScriptSourceProviderD0Ev","__ZN7WebCore17XMLDocumentParser3endEv","__ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE","__ZN7WebCore17XMLDocumentParser8exitTextEv","_memset","__ZN7WebCore17XMLDocumentParser6insertERKNS_15SegmentedStringE","_memcpy","__ZN7WebCore17XMLDocumentParser21clearCurrentNodeStackEv","__ZNK7WebCore17XMLDocumentParser19isWaitingForScriptsEv","__ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN7WebCore17XMLDocumentParser9enterTextEv","__ZN7WebCore17XMLDocumentParser12pauseParsingEv","__ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev","__ZN3WTF6VectorIPN7WebCore13ContainerNodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZN7WebCore17XMLDocumentParser6detachEv","__ZThn28_N7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore26CachedScriptSourceProviderD1Ev","__ZN7WebCore17XMLDocumentParser6finishEv","__ZN7WebCore17XMLDocumentParser14popCurrentNodeEv","__ZN7WebCore17XMLDocumentParser15pushCurrentNodeEPNS_13ContainerNodeE","__ZN7WebCore17XMLDocumentParser21parseDocumentFragmentERKN3WTF6StringERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE","__ZN7WebCore17XMLDocumentParser23insertErrorMessageBlockEv","__ZNK7WebCore26CachedScriptSourceProvider6sourceEv","__ZN7WebCore17XMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE"]

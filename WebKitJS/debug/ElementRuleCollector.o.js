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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20MatchingUARulesScopeC1Ev;
var __ZN7WebCore20MatchingUARulesScopeD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE=env.__ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE|0;
  var __ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE=env.__ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE|0;
  var __ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE=env.__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE|0;
  var __ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE=env.__ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore20MatchingUARulesScope17m_matchingUARulesE=(H_BASE+40)|0;
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
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 4 | 0;
  i6 = i4;
  L3 : while (1) {
   i7 = i6;
   i8 = i2 - i7 | 0;
   i9 = i8 >> 2;
   switch (i9 | 0) {
   case 2:
    {
     i10 = 4;
     break L1;
     break;
    }
   case 3:
    {
     i10 = 6;
     break L1;
     break;
    }
   case 4:
    {
     i10 = 14;
     break L1;
     break;
    }
   case 5:
    {
     i10 = 15;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i10 = 93;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i8 | 0) < 124) {
    i10 = 21;
    break L1;
   }
   i11 = (i9 | 0) / 2 & -1;
   i12 = i6 + (i11 << 2) | 0;
   do {
    if ((i8 | 0) > 3996) {
     i13 = (i9 | 0) / 4 & -1;
     i14 = i6 + (i13 << 2) | 0;
     i15 = i6 + (i13 + i11 << 2) | 0;
     i13 = __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i6, i14, i12, i15, i3) | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0)) {
      i16 = i13;
      break;
     }
     i17 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0)) {
      i16 = i13 + 1 | 0;
      break;
     }
     i17 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i15 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0)) {
      i16 = i13 + 2 | 0;
      break;
     }
     i17 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i17;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i14 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
      i17 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i14 >> 2] = i17;
      i16 = i13 + 4 | 0;
      break;
     } else {
      i16 = i13 + 3 | 0;
      break;
     }
    } else {
     i13 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
     i17 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0;
     if (!i13) {
      if (!i17) {
       i16 = 0;
       break;
      }
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
       i16 = 1;
       break;
      }
      i13 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i13;
      i16 = 2;
      break;
     }
     i13 = HEAP32[i6 >> 2] | 0;
     if (i17) {
      HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      i16 = 1;
      break;
     }
     HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i13;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i13) | 0)) {
      i16 = 1;
      break;
     }
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i13;
     i16 = 2;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
     i18 = i5;
     i19 = i16;
    } else {
     i11 = i5;
     while (1) {
      i20 = i11 - 4 | 0;
      if ((i6 | 0) == (i20 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i20 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
       i10 = 66;
       break;
      } else {
       i11 = i20;
      }
     }
     if ((i10 | 0) == 66) {
      i10 = 0;
      i11 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i11;
      i18 = i20;
      i19 = i16 + 1 | 0;
      break;
     }
     i11 = i6 + 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0) {
      i21 = i11;
     } else {
      i9 = i11;
      while (1) {
       if ((i9 | 0) == (i5 | 0)) {
        i10 = 96;
        break L1;
       }
       i22 = i9 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0) {
        break;
       } else {
        i9 = i22;
       }
      }
      i11 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i11;
      i21 = i22;
     }
     if ((i21 | 0) == (i5 | 0)) {
      i10 = 97;
      break L1;
     } else {
      i23 = i5;
      i24 = i21;
     }
     while (1) {
      i11 = i24;
      while (1) {
       i25 = i11 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
        i26 = i23;
        break;
       } else {
        i11 = i25;
       }
      }
      while (1) {
       i26 = i26 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0)) {
        break;
       }
      }
      if (i11 >>> 0 >= i26 >>> 0) {
       i6 = i11;
       continue L3;
      }
      i8 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i26 >> 2];
      HEAP32[i26 >> 2] = i8;
      i23 = i26;
      i24 = i25;
     }
    }
   } while (0);
   i9 = i6 + 4 | 0;
   L52 : do {
    if (i9 >>> 0 < i18 >>> 0) {
     i8 = i18;
     i13 = i9;
     i17 = i19;
     i14 = i12;
     while (1) {
      i15 = i13;
      while (1) {
       i27 = i15 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        i15 = i27;
       } else {
        i28 = i8;
        break;
       }
      }
      while (1) {
       i28 = i28 - 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i28 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        break;
       }
      }
      if (i15 >>> 0 > i28 >>> 0) {
       i29 = i15;
       i30 = i17;
       i31 = i14;
       break L52;
      }
      i11 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i28 >> 2] = i11;
      i8 = i28;
      i13 = i27;
      i17 = i17 + 1 | 0;
      i14 = (i14 | 0) == (i15 | 0) ? i28 : i14;
     }
    } else {
     i29 = i9;
     i30 = i19;
     i31 = i12;
    }
   } while (0);
   do {
    if ((i29 | 0) == (i31 | 0)) {
     i32 = i30;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i31 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0)) {
      i32 = i30;
      break;
     }
     i12 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i31 >> 2] = i12;
     i32 = i30 + 1 | 0;
    }
   } while (0);
   if ((i32 | 0) == 0) {
    i33 = __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore8RuleDataES4_EPS4_EEbT0_S9_T_(i6, i29, i3) | 0;
    i12 = i29 + 4 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore8RuleDataES4_EPS4_EEbT0_S9_T_(i12, i1, i3) | 0) {
     i10 = 78;
     break;
    }
    if (i33) {
     i6 = i12;
     continue;
    }
   }
   i12 = i29;
   if ((i12 - i7 | 0) >= (i2 - i12 | 0)) {
    i10 = 82;
    break;
   }
   __ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_(i6, i29, i3);
   i6 = i29 + 4 | 0;
  }
  if ((i10 | 0) == 78) {
   i10 = 0;
   if (i33) {
    i10 = 99;
    break;
   } else {
    i4 = i6;
    i1 = i29;
    continue;
   }
  } else if ((i10 | 0) == 82) {
   i10 = 0;
   __ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_(i29 + 4 | 0, i1, i3);
   i4 = i6;
   i1 = i29;
   continue;
  }
 }
 if ((i10 | 0) == 21) {
  i29 = i6 + 8 | 0;
  i4 = i6 + 4 | 0;
  i33 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i32 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i29 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
  do {
   if (i33) {
    i30 = HEAP32[i6 >> 2] | 0;
    if (i32) {
     HEAP32[i6 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i29 >> 2] = i30;
     break;
    }
    HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i30;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i29 >> 2] | 0, i30) | 0)) {
     break;
    }
    i30 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i29 >> 2];
    HEAP32[i29 >> 2] = i30;
   } else {
    if (!i32) {
     break;
    }
    i30 = HEAP32[i4 >> 2] | 0;
    i31 = HEAP32[i29 >> 2] | 0;
    HEAP32[i4 >> 2] = i31;
    HEAP32[i29 >> 2] = i30;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i31, HEAP32[i6 >> 2] | 0) | 0)) {
     break;
    }
    i31 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i31;
   }
  } while (0);
  i4 = i6 + 12 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   return;
  } else {
   i34 = i29;
   i35 = i4;
  }
  while (1) {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i35 >> 2] | 0, HEAP32[i34 >> 2] | 0) | 0) {
    i4 = HEAP32[i35 >> 2] | 0;
    i29 = i34;
    i32 = i35;
    while (1) {
     HEAP32[i32 >> 2] = HEAP32[i29 >> 2];
     if ((i29 | 0) == (i6 | 0)) {
      i36 = i6;
      break;
     }
     i33 = i29 - 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i4, HEAP32[i33 >> 2] | 0) | 0) {
      i32 = i29;
      i29 = i33;
     } else {
      i36 = i29;
      break;
     }
    }
    HEAP32[i36 >> 2] = i4;
   }
   i29 = i35 + 4 | 0;
   if ((i29 | 0) == (i1 | 0)) {
    break;
   } else {
    i34 = i35;
    i35 = i29;
   }
  }
  return;
 } else if ((i10 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i35 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i35;
  return;
 } else if ((i10 | 0) == 6) {
  i35 = i6 + 4 | 0;
  i34 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i35 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i1 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i35 >> 2] | 0) | 0;
  if (!i34) {
   if (!i1) {
    return;
   }
   i34 = HEAP32[i35 >> 2] | 0;
   HEAP32[i35 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i34;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i35 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    return;
   }
   i34 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i35 >> 2];
   HEAP32[i35 >> 2] = i34;
   return;
  }
  i34 = HEAP32[i6 >> 2] | 0;
  if (i1) {
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i34;
   return;
  }
  HEAP32[i6 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i35 >> 2] = i34;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i34) | 0)) {
   return;
  }
  i34 = HEAP32[i35 >> 2] | 0;
  HEAP32[i35 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i34;
  return;
 } else if ((i10 | 0) == 14) {
  __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i6, i6 + 4 | 0, i6 + 8 | 0, i5, i3) | 0;
  return;
 } else if ((i10 | 0) == 15) {
  i34 = i6 + 4 | 0;
  i35 = i6 + 8 | 0;
  i1 = i6 + 12 | 0;
  __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i6, i34, i35, i1, i3) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
   return;
  }
  i36 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i36;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i1 >> 2] | 0, HEAP32[i35 >> 2] | 0) | 0)) {
   return;
  }
  i36 = HEAP32[i35 >> 2] | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAP32[i35 >> 2] = i5;
  HEAP32[i1 >> 2] = i36;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i5, HEAP32[i34 >> 2] | 0) | 0)) {
   return;
  }
  i5 = HEAP32[i34 >> 2] | 0;
  i36 = HEAP32[i35 >> 2] | 0;
  HEAP32[i34 >> 2] = i36;
  HEAP32[i35 >> 2] = i5;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i36, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i36 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i34 >> 2] = i36;
  return;
 } else if ((i10 | 0) == 93) {
  return;
 } else if ((i10 | 0) == 96) {
  return;
 } else if ((i10 | 0) == 97) {
  return;
 } else if ((i10 | 0) == 99) {
  return;
 }
}
function __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 328 >> 2] & 1](i5) | 0) >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   i8 = i4;
   i9 = HEAP32[i7 + 68 >> 2] | 0;
   i10 = HEAP32[i7 + 60 >> 2] | 0;
   i7 = i4;
   i11 = i7 + ~(i7 << 15) | 0;
   i7 = (i11 >>> 10 ^ i11) * 9 & -1;
   i11 = i7 >>> 6 ^ i7;
   i7 = i11 + ~(i11 << 11) | 0;
   i11 = i7 >>> 16 ^ i7;
   L4 : do {
    if ((i10 | 0) == 0) {
     i12 = 0;
    } else {
     i7 = i11 & i9;
     i13 = i10 + (i7 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i8 | 0)) {
      i15 = i13;
     } else {
      i13 = (i11 >>> 23) + ~i11 | 0;
      i16 = i13 << 12 ^ i13;
      i13 = i16 >>> 7 ^ i16;
      i16 = i13 << 2 ^ i13;
      i13 = i16 >>> 20 ^ i16 | 1;
      i16 = 0;
      i17 = i7;
      i7 = i14;
      while (1) {
       if ((i7 | 0) == 0) {
        i12 = 0;
        break L4;
       }
       i14 = (i16 | 0) == 0 ? i13 : i16;
       i18 = i14 + i17 & i9;
       i19 = i10 + (i18 << 3) | 0;
       i20 = HEAP32[i19 >> 2] | 0;
       if ((i20 | 0) == (i8 | 0)) {
        i15 = i19;
        break;
       } else {
        i16 = i14;
        i17 = i18;
        i7 = i20;
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
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i12, i2, i3);
    break;
   } else {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i12, i2, i3);
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[H_BASE + 40 | 0] & 1) == 0) {
   i12 = HEAP32[i5 + 20 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[HEAP32[i12 >> 2] >> 2] & 1](i12) | 0) {
    break;
   }
   return;
  }
 } while (0);
 i12 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = HEAP32[i12 + 16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i2 >> 2] | 0;
   i8 = i15;
   i10 = HEAP32[i4 + 8 >> 2] | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   i4 = i15;
   i15 = i4 + ~(i4 << 15) | 0;
   i4 = (i15 >>> 10 ^ i15) * 9 & -1;
   i15 = i4 >>> 6 ^ i4;
   i4 = i15 + ~(i15 << 11) | 0;
   i15 = i4 >>> 16 ^ i4;
   L25 : do {
    if ((i9 | 0) == 0) {
     i21 = 0;
    } else {
     i4 = i15 & i10;
     i11 = i9 + (i4 << 3) | 0;
     i7 = HEAP32[i11 >> 2] | 0;
     if ((i7 | 0) == (i8 | 0)) {
      i22 = i11;
     } else {
      i11 = (i15 >>> 23) + ~i15 | 0;
      i17 = i11 << 12 ^ i11;
      i11 = i17 >>> 7 ^ i17;
      i17 = i11 << 2 ^ i11;
      i11 = i17 >>> 20 ^ i17 | 1;
      i17 = 0;
      i16 = i4;
      i4 = i7;
      while (1) {
       if ((i4 | 0) == 0) {
        i21 = 0;
        break L25;
       }
       i7 = (i17 | 0) == 0 ? i11 : i17;
       i13 = i7 + i16 & i10;
       i20 = i9 + (i13 << 3) | 0;
       i18 = HEAP32[i20 >> 2] | 0;
       if ((i18 | 0) == (i8 | 0)) {
        i22 = i20;
        break;
       } else {
        i17 = i7;
        i16 = i13;
        i4 = i18;
       }
      }
     }
     if ((i22 | 0) == 0) {
      i21 = 0;
      break;
     }
     i21 = HEAP32[i22 + 4 >> 2] | 0;
    }
   } while (0);
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i21, i2, i3);
    break;
   } else {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i21, i2, i3);
    break;
   }
  }
 } while (0);
 L39 : do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 48 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i22 + 12 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i22 = i2 | 0;
   i8 = 0;
   i9 = i12;
   while (1) {
    if ((i9 | 0) == 0) {
     i23 = 0;
    } else {
     i23 = HEAP32[i9 + 8 >> 2] | 0;
    }
    if (i8 >>> 0 >= i23 >>> 0) {
     break L39;
    }
    i12 = HEAP32[i22 >> 2] | 0;
    if ((HEAP32[i9 + 8 >> 2] | 0) >>> 0 <= i8 >>> 0) {
     break;
    }
    i10 = HEAP32[i9 + 12 + (i8 << 2) >> 2] | 0;
    i15 = i10;
    i4 = HEAP32[i12 + 28 >> 2] | 0;
    i16 = HEAP32[i12 + 20 >> 2] | 0;
    i12 = i10;
    i10 = i12 + ~(i12 << 15) | 0;
    i12 = (i10 >>> 10 ^ i10) * 9 & -1;
    i10 = i12 >>> 6 ^ i12;
    i12 = i10 + ~(i10 << 11) | 0;
    i10 = i12 >>> 16 ^ i12;
    L50 : do {
     if ((i16 | 0) == 0) {
      i24 = 0;
     } else {
      i12 = i10 & i4;
      i17 = i16 + (i12 << 3) | 0;
      i11 = HEAP32[i17 >> 2] | 0;
      if ((i11 | 0) == (i15 | 0)) {
       i25 = i17;
      } else {
       i17 = (i10 >>> 23) + ~i10 | 0;
       i18 = i17 << 12 ^ i17;
       i17 = i18 >>> 7 ^ i18;
       i18 = i17 << 2 ^ i17;
       i17 = i18 >>> 20 ^ i18 | 1;
       i18 = 0;
       i13 = i12;
       i12 = i11;
       while (1) {
        if ((i12 | 0) == 0) {
         i24 = 0;
         break L50;
        }
        i11 = (i18 | 0) == 0 ? i17 : i18;
        i7 = i11 + i13 & i4;
        i20 = i16 + (i7 << 3) | 0;
        i14 = HEAP32[i20 >> 2] | 0;
        if ((i14 | 0) == (i15 | 0)) {
         i25 = i20;
         break;
        } else {
         i18 = i11;
         i13 = i7;
         i12 = i14;
        }
       }
      }
      if ((i25 | 0) == 0) {
       i24 = 0;
       break;
      }
      i24 = HEAP32[i25 + 4 >> 2] | 0;
     }
    } while (0);
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i24, i2, i3);
    } else {
     __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i24, i2, i3);
    }
    i8 = i8 + 1 | 0;
    i9 = HEAP32[(HEAP32[i21 >> 2] | 0) + 12 >> 2] | 0;
   }
   _WTFCrash();
  }
 } while (0);
 do {
  if ((HEAP32[i5 + 12 >> 2] & 512 | 0) != 0) {
   i24 = (HEAP32[i2 >> 2] | 0) + 80 | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i24, i2, i3);
    break;
   } else {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i24, i2, i3);
    break;
   }
  }
 } while (0);
 i24 = i2 | 0;
 do {
  if (__ZN7WebCore15SelectorChecker23matchesFocusPseudoClassEPKNS_7ElementE(i5) | 0) {
   i25 = (HEAP32[i24 >> 2] | 0) + 92 | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i25, i2, i3);
    break;
   } else {
    __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i25, i2, i3);
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i24 >> 2] | 0;
 i23 = HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0;
 i5 = i23;
 i6 = HEAP32[i25 + 48 >> 2] | 0;
 i21 = HEAP32[i25 + 40 >> 2] | 0;
 i25 = i23;
 i23 = i25 + ~(i25 << 15) | 0;
 i25 = (i23 >>> 10 ^ i23) * 9 & -1;
 i23 = i25 >>> 6 ^ i25;
 i25 = i23 + ~(i23 << 11) | 0;
 i23 = i25 >>> 16 ^ i25;
 L78 : do {
  if ((i21 | 0) == 0) {
   i26 = 0;
  } else {
   i25 = i23 & i6;
   i9 = i21 + (i25 << 3) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == (i5 | 0)) {
    i27 = i9;
   } else {
    i9 = (i23 >>> 23) + ~i23 | 0;
    i22 = i9 << 12 ^ i9;
    i9 = i22 >>> 7 ^ i22;
    i22 = i9 << 2 ^ i9;
    i9 = i22 >>> 20 ^ i22 | 1;
    i22 = 0;
    i15 = i25;
    i25 = i8;
    while (1) {
     if ((i25 | 0) == 0) {
      i26 = 0;
      break L78;
     }
     i8 = (i22 | 0) == 0 ? i9 : i22;
     i16 = i8 + i15 & i6;
     i4 = i21 + (i16 << 3) | 0;
     i10 = HEAP32[i4 >> 2] | 0;
     if ((i10 | 0) == (i5 | 0)) {
      i27 = i4;
      break;
     } else {
      i22 = i8;
      i15 = i16;
      i25 = i10;
     }
    }
   }
   if ((i27 | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i27 + 4 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i26, i2, i3);
 } else {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i26, i2, i3);
 }
 i26 = (HEAP32[i24 >> 2] | 0) + 104 | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i26, i2, i3);
  return;
 } else {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i26, i2, i3);
  return;
 }
}
function __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i1 | 0;
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i2 | 0;
 i2 = i1 + 48 | 0;
 i12 = i1 + 12 | 0;
 i13 = i1 + 44 | 0;
 i14 = i3 + 4 | 0;
 i3 = i6 | 0;
 i15 = i1 + 40 | 0;
 i16 = i4 + 4 | 0;
 i17 = i4 | 0;
 i4 = i1 + 28 | 0;
 i18 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
 i19 = i1 + 8 | 0;
 i20 = 0;
 L7 : while (1) {
  i21 = HEAP32[i11 >> 2] | 0;
  i22 = i21 + (i20 * 28 & -1) | 0;
  L9 : do {
   if ((HEAP8[i2] & 1) == 0) {
    i23 = 10;
   } else {
    i24 = (HEAP32[i19 >> 2] | 0) + 12 | 0;
    i25 = 0;
    while (1) {
     if (i25 >>> 0 >= 4 >>> 0) {
      i23 = 10;
      break L9;
     }
     i26 = HEAP32[i21 + (i20 * 28 & -1) + 12 + (i25 << 2) >> 2] | 0;
     if ((i26 | 0) == 0) {
      i23 = 10;
      break L9;
     }
     i27 = HEAP32[i24 >> 2] | 0;
     if ((HEAP8[i27 + (i26 & 4095) | 0] | 0) == 0) {
      break L9;
     }
     if ((HEAP8[i27 + (i26 >>> 16 & 4095) | 0] | 0) == 0) {
      break;
     } else {
      i25 = i25 + 1 | 0;
     }
    }
   }
  } while (0);
  if ((i23 | 0) == 10) {
   i23 = 0;
   i25 = HEAP32[i22 >> 2] | 0;
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
   i24 = HEAP32[(HEAP32[(HEAP32[HEAP32[i9 >> 2] >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i26 = HEAP32[i12 >> 2] | 0;
   i27 = i24 + 772 | 0;
   L18 : do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i7);
    } else {
     do {
      if ((i24 | 0) != 0) {
       i28 = __ZNK7WebCore8Document4pageEv(i24) | 0;
       do {
        if ((i28 | 0) == 0) {
         i29 = HEAP32[i24 + 2204 >> 2] | 0;
         if ((i29 | 0) == 0) {
          i30 = 0;
          break;
         }
         i30 = __ZNK7WebCore8Document4pageEv(i29) | 0;
        } else {
         i30 = i28;
        }
       } while (0);
       i28 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i30) | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation17willMatchRuleImplEPNS_19InstrumentingAgentsEPNS_9StyleRuleERNS_22InspectorCSSOMWrappersERNS_28DocumentStyleSheetCollectionE(i7, i28, i25, i26, i27);
       break L18;
      }
     } while (0);
     __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i7);
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieaSERKS0_(i6, i7) | 0;
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i7);
   HEAP32[i8 >> 2] = 0;
   L30 : do {
    if (__ZN7WebCore20ElementRuleCollector11ruleMatchesERKNS_8RuleDataERNS_8PseudoIdE(i1, i22, i8) | 0) {
     i27 = HEAP32[i13 >> 2] | 0;
     if ((i27 | 0) == 3) {
      break L7;
     }
     i26 = HEAP32[i25 + 8 >> 2] | 0;
     i24 = HEAP32[i26 + 4 >> 2] | 0;
     if ((i24 & 4 | 0) == 0) {
      i31 = i24 >>> 3;
     } else {
      i31 = HEAP32[i26 + 16 >> 2] | 0;
     }
     do {
      if ((i31 | 0) == 0) {
       if ((HEAP8[i14] & 1) != 0) {
        break;
       }
       if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
        break L30;
       }
       if ((HEAP32[i3 >> 2] | 0) == 0) {
        break L30;
       }
       __ZN7WebCore24InspectorInstrumentation16didMatchRuleImplERKNS_30InspectorInstrumentationCookieEb(i6, 0);
       break L30;
      }
     } while (0);
     do {
      if ((HEAP8[i15] & 1) != 0) {
       if ((HEAP32[i21 + (i20 * 28 & -1) + 8 >> 2] & 536870912 | 0) != 0) {
        break;
       }
       if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
        break L30;
       }
       if ((HEAP32[i3 >> 2] | 0) == 0) {
        break L30;
       }
       __ZN7WebCore24InspectorInstrumentation16didMatchRuleImplERKNS_30InspectorInstrumentationCookieEb(i6, 0);
       break L30;
      }
     } while (0);
     i26 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       if ((HEAP32[i4 >> 2] | 0) != 0) {
        break;
       }
       if ((i27 | 0) != 1) {
        if ((i26 | 0) >= 8) {
         i23 = 48;
         break L30;
        }
        i24 = (HEAP32[i18 >> 2] | 0) + 52 | 0;
        HEAP32[i24 >> 2] = HEAP32[i24 >> 2] | 4096 << i26 - 1 & 520192;
        i23 = 48;
        break L30;
       }
       if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
        break L30;
       }
       if ((HEAP32[i3 >> 2] | 0) == 0) {
        break L30;
       }
       __ZN7WebCore24InspectorInstrumentation16didMatchRuleImplERKNS_30InspectorInstrumentationCookieEb(i6, 0);
       break L30;
      }
     } while (0);
     i26 = HEAP32[i16 >> 2] | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     i26 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i26 >> 2] | 0) == -1) {
      HEAP32[i26 >> 2] = HEAP32[HEAP32[i16 >> 2] >> 2];
     }
     __ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE(i1, i22);
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP32[i3 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation16didMatchRuleImplERKNS_30InspectorInstrumentationCookieEb(i6, 1);
    } else {
     i23 = 48;
    }
   } while (0);
   do {
    if ((i23 | 0) == 48) {
     i23 = 0;
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP32[i3 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation16didMatchRuleImplERKNS_30InspectorInstrumentationCookieEb(i6, 0);
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
  }
  i21 = i20 + 1 | 0;
  if (i21 >>> 0 < i10 >>> 0) {
   i20 = i21;
  } else {
   i23 = 54;
   break;
  }
 }
 if ((i23 | 0) == 54) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE(i1, i22);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20ElementRuleCollector13matchAllRulesEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN7WebCore20ElementRuleCollector12matchUARulesEv(i1);
 if (i2) {
  __ZN7WebCore20ElementRuleCollector14matchUserRulesEb(i1, 0);
 }
 i8 = i1 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 48 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i12 & 536870912 | 0) == 0) {
      i13 = i11;
      i14 = i12;
     } else {
      __ZN7WebCore13StyledElement33rebuildPresentationAttributeStyleEv(i9);
      i12 = HEAP32[i10 >> 2] | 0;
      i13 = i12;
      i14 = HEAP32[i12 + 4 >> 2] | 0;
     }
     if ((i14 & 1 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i13 + 20 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i15 = HEAP32[i1 + 76 >> 2] | 0;
     HEAP32[i1 + 872 >> 2] = i15;
     i16 = i1 + 868 | 0;
     if ((HEAP32[i16 >> 2] | 0) == -1) {
      HEAP32[i16 >> 2] = i15;
     }
     __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i1 + 68 | 0, i12, 0, 3, 0);
    }
   } while (0);
   i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 564 >> 2] & 1](i10) | 0;
   if ((i11 | 0) != 0) {
    i10 = HEAP32[i1 + 76 >> 2] | 0;
    HEAP32[i1 + 872 >> 2] = i10;
    i12 = i1 + 868 | 0;
    if ((HEAP32[i12 >> 2] | 0) == -1) {
     HEAP32[i12 >> 2] = i10;
    }
    __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i1 + 68 | 0, i11, 0, 3, 0);
   }
   i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i11 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   i10 = __ZNK7WebCore11HTMLElement35directionalityIfhasDirAutoAttributeERb(i11, i7) | 0;
   if ((HEAP8[i7] & 1) == 0) {
    break;
   }
   i11 = i1 + 68 | 0;
   do {
    if ((i10 | 0) == 1) {
     if (HEAP8[H_BASE + 16 | 0] | 0) {
      i17 = HEAP32[H_BASE + 32 >> 2] | 0;
     } else {
      __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i5, 0);
      i12 = HEAP32[i5 >> 2] | 0;
      HEAP32[H_BASE + 32 >> 2] = i12;
      HEAP8[H_BASE + 16 | 0] = 1;
      i17 = i12;
     }
     i12 = HEAP32[i17 + 4 >> 2] | 0;
     if ((i12 & 4 | 0) == 0) {
      i18 = i12 >>> 3;
     } else {
      i18 = HEAP32[i17 + 16 >> 2] | 0;
     }
     if ((i18 | 0) != 0) {
      i19 = i17;
      break;
     }
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i17, 2, 304, 0) | 0;
     i19 = HEAP32[H_BASE + 32 >> 2] | 0;
    } else {
     if (HEAP8[H_BASE + 8 | 0] | 0) {
      i20 = HEAP32[H_BASE + 24 >> 2] | 0;
     } else {
      __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i6, 0);
      i12 = HEAP32[i6 >> 2] | 0;
      HEAP32[H_BASE + 24 >> 2] = i12;
      HEAP8[H_BASE + 8 | 0] = 1;
      i20 = i12;
     }
     i12 = HEAP32[i20 + 4 >> 2] | 0;
     if ((i12 & 4 | 0) == 0) {
      i21 = i12 >>> 3;
     } else {
      i21 = HEAP32[i20 + 16 >> 2] | 0;
     }
     if ((i21 | 0) != 0) {
      i19 = i20;
      break;
     }
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i20, 2, 305, 0) | 0;
     i19 = HEAP32[H_BASE + 24 >> 2] | 0;
    }
   } while (0);
   __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i11, i19 | 0, 0, 3, 0);
  }
 } while (0);
 if (!i2) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20ElementRuleCollector16matchAuthorRulesEb(i1, 0);
 i2 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i19 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   if ((HEAP32[i20 + 4 >> 2] & 4 | 0) == 0) {
    i22 = (HEAP32[i2 + 12 >> 2] & 8388608 | 0) == 0;
   } else {
    i22 = 0;
   }
   i19 = HEAP32[i1 + 76 >> 2] | 0;
   HEAP32[i1 + 872 >> 2] = i19;
   i21 = i1 + 868 | 0;
   if ((HEAP32[i21 >> 2] | 0) == -1) {
    HEAP32[i21 >> 2] = i19;
   }
   __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i1 + 68 | 0, i20, 0, 3, 0);
   if (i22) {
    break;
   }
   HEAP8[i1 + 884 | 0] = 0;
  }
 } while (0);
 if (!i3) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] & 32 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = __ZNK7WebCore10SVGElement27animatedSMILStylePropertiesEv(i3) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 HEAP32[i1 + 872 >> 2] = i3;
 i22 = i1 + 868 | 0;
 if ((HEAP32[i22 >> 2] | 0) == -1) {
  HEAP32[i22 >> 2] = i3;
 }
 __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i1 + 68 | 0, i8 | 0, 0, 3, 0);
 HEAP8[i1 + 884 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore8RuleDataES4_EPS4_EEbT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 switch (i2 - i1 >> 2 | 0) {
 case 5:
  {
   i4 = i1 + 4 | 0;
   i5 = i1 + 8 | 0;
   i6 = i1 + 12 | 0;
   i7 = i2 - 4 | 0;
   __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i1, i4, i5, i6, i3) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i7 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i7 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   HEAP32[i6 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i7, HEAP32[i4 >> 2] | 0) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i5 >> 2] = i7;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i9, HEAP32[i1 >> 2] | 0) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i4 >> 2] = i9;
   i8 = 1;
   return i8 | 0;
  }
 case 0:
 case 1:
  {
   i8 = 1;
   return i8 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i1, i1 + 4 | 0, i1 + 8 | 0, i2 - 4 | 0, i3) | 0;
   i8 = 1;
   return i8 | 0;
  }
 case 2:
  {
   i9 = i2 - 4 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i4 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i4;
   i8 = 1;
   return i8 | 0;
  }
 case 3:
  {
   i4 = i1 + 4 | 0;
   i9 = i2 - 4 | 0;
   i7 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i5 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
   if (!i7) {
    if (!i5) {
     i8 = 1;
     return i8 | 0;
    }
    i7 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i7;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
     i8 = 1;
     return i8 | 0;
    }
    i7 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i7;
    i8 = 1;
    return i8 | 0;
   }
   i7 = HEAP32[i1 >> 2] | 0;
   if (i5) {
    HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i9 >> 2] = i7;
    i8 = 1;
    return i8 | 0;
   }
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i4 >> 2] = i7;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, i7) | 0)) {
    i8 = 1;
    return i8 | 0;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i7;
   i8 = 1;
   return i8 | 0;
  }
 default:
  {
   i7 = i1 + 8 | 0;
   i9 = i1 + 4 | 0;
   i4 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i5 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i7 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
   do {
    if (i4) {
     i6 = HEAP32[i1 >> 2] | 0;
     if (i5) {
      HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
      HEAP32[i7 >> 2] = i6;
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i6;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i7 >> 2] | 0, i6) | 0)) {
      break;
     }
     i6 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i7 >> 2] = i6;
    } else {
     if (!i5) {
      break;
     }
     i6 = HEAP32[i9 >> 2] | 0;
     i10 = HEAP32[i7 >> 2] | 0;
     HEAP32[i9 >> 2] = i10;
     HEAP32[i7 >> 2] = i6;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, HEAP32[i1 >> 2] | 0) | 0)) {
      break;
     }
     i10 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i10;
    }
   } while (0);
   i9 = i1 + 12 | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i8 = 1;
    return i8 | 0;
   } else {
    i11 = i7;
    i12 = 0;
    i13 = i9;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i13 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
     i9 = HEAP32[i13 >> 2] | 0;
     i7 = i11;
     i5 = i13;
     while (1) {
      HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
      if ((i7 | 0) == (i1 | 0)) {
       i14 = i1;
       break;
      }
      i4 = i7 - 4 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i9, HEAP32[i4 >> 2] | 0) | 0) {
       i5 = i7;
       i7 = i4;
      } else {
       i14 = i7;
       break;
      }
     }
     HEAP32[i14 >> 2] = i9;
     i7 = i12 + 1 | 0;
     if ((i7 | 0) == 8) {
      break;
     } else {
      i15 = i7;
     }
    } else {
     i15 = i12;
    }
    i7 = i13 + 4 | 0;
    if ((i7 | 0) == (i2 | 0)) {
     i8 = 1;
     i16 = 43;
     break;
    } else {
     i11 = i13;
     i12 = i15;
     i13 = i7;
    }
   }
   if ((i16 | 0) == 43) {
    return i8 | 0;
   }
   i8 = (i13 + 4 | 0) == (i2 | 0);
   return i8 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore15SelectorChecker19checkExactAttributeEPKNS_7ElementEPKNS_11CSSSelectorERKNS_13QualifiedNameEPKN3WTF16AtomicStringImplE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = (i7 & 1 | 0) == 0;
 if (i8) {
  i9 = i7 >>> 1 & 134217727;
 } else {
  i9 = HEAP32[i5 + 32 >> 2] | 0;
 }
 if ((i9 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i10 = (HEAP32[i3 >> 2] | 0) + 12 | 0;
 } else {
  i10 = (HEAP32[i2 + 4 >> 2] | 0) + 20 | 0;
 }
 if (i8) {
  i11 = i7 >>> 1 & 134217727;
 } else {
  i11 = HEAP32[i5 + 32 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i2 = i7 >>> 1 & 134217727;
 i7 = i5 + 20 | 0;
 i1 = i3 | 0;
 i3 = i10 | 0;
 i10 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
 i9 = (i4 | 0) == 0;
 i12 = i5 + 24 | 0;
 i5 = i12;
 i13 = i12 + 8 | 0;
 if (i8) {
  if (i9) {
   i8 = 0;
   while (1) {
    if (i2 >>> 0 <= i8 >>> 0) {
     i14 = 55;
     break;
    }
    i12 = HEAP32[i1 >> 2] | 0;
    i15 = HEAP32[i7 + (i8 << 3) >> 2] | 0;
    if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i15 + 12 >> 2] | 0)) {
     if ((HEAP32[i12 + 8 >> 2] | 0) == (i10 | 0)) {
      i6 = 1;
      i14 = 47;
      break;
     }
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
      i6 = 1;
      i14 = 45;
      break;
     }
    }
    i15 = i8 + 1 | 0;
    if (i15 >>> 0 < i11 >>> 0) {
     i8 = i15;
    } else {
     i6 = 0;
     i14 = 52;
     break;
    }
   }
   if ((i14 | 0) == 45) {
    return i6 | 0;
   } else if ((i14 | 0) == 47) {
    return i6 | 0;
   } else if ((i14 | 0) == 52) {
    return i6 | 0;
   } else if ((i14 | 0) == 55) {
    _WTFCrash();
    return 0;
   }
  } else {
   i8 = 0;
   L64 : while (1) {
    if (i2 >>> 0 <= i8 >>> 0) {
     i14 = 56;
     break;
    }
    i15 = HEAP32[i1 >> 2] | 0;
    i12 = HEAP32[i7 + (i8 << 3) >> 2] | 0;
    do {
     if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
      if ((HEAP32[i15 + 8 >> 2] | 0) != (i10 | 0)) {
       if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
        break;
       }
      }
      if ((HEAP32[i7 + (i8 << 3) + 4 >> 2] | 0) == (i4 | 0)) {
       i6 = 1;
       i14 = 46;
       break L64;
      }
     }
    } while (0);
    i12 = i8 + 1 | 0;
    if (i12 >>> 0 < i11 >>> 0) {
     i8 = i12;
    } else {
     i6 = 0;
     i14 = 40;
     break;
    }
   }
   if ((i14 | 0) == 40) {
    return i6 | 0;
   } else if ((i14 | 0) == 46) {
    return i6 | 0;
   } else if ((i14 | 0) == 56) {
    _WTFCrash();
    return 0;
   }
  }
 } else {
  if (i9) {
   i9 = 0;
   while (1) {
    if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i9 >>> 0) {
     i14 = 53;
     break;
    }
    i8 = HEAP32[i1 >> 2] | 0;
    i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i9 << 3) >> 2] | 0;
    if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i7 + 12 >> 2] | 0)) {
     if ((HEAP32[i8 + 8 >> 2] | 0) == (i10 | 0)) {
      i6 = 1;
      i14 = 51;
      break;
     }
     if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
      i6 = 1;
      i14 = 41;
      break;
     }
    }
    i7 = i9 + 1 | 0;
    if (i7 >>> 0 < i11 >>> 0) {
     i9 = i7;
    } else {
     i6 = 0;
     i14 = 44;
     break;
    }
   }
   if ((i14 | 0) == 41) {
    return i6 | 0;
   } else if ((i14 | 0) == 44) {
    return i6 | 0;
   } else if ((i14 | 0) == 51) {
    return i6 | 0;
   } else if ((i14 | 0) == 53) {
    _WTFCrash();
    return 0;
   }
  } else {
   i9 = 0;
   L37 : while (1) {
    if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i9 >>> 0) {
     i14 = 54;
     break;
    }
    i7 = HEAP32[i5 >> 2] | 0;
    i8 = HEAP32[i1 >> 2] | 0;
    i2 = HEAP32[i7 + (i9 << 3) >> 2] | 0;
    do {
     if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
      if ((HEAP32[i8 + 8 >> 2] | 0) != (i10 | 0)) {
       if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
        break;
       }
      }
      if ((HEAP32[i7 + (i9 << 3) + 4 >> 2] | 0) == (i4 | 0)) {
       i6 = 1;
       i14 = 50;
       break L37;
      }
     }
    } while (0);
    i7 = i9 + 1 | 0;
    if (i7 >>> 0 < i11 >>> 0) {
     i9 = i7;
    } else {
     i6 = 0;
     i14 = 43;
     break;
    }
   }
   if ((i14 | 0) == 43) {
    return i6 | 0;
   } else if ((i14 | 0) == 50) {
    return i6 | 0;
   } else if ((i14 | 0) == 54) {
    _WTFCrash();
    return 0;
   }
  }
 }
 return 0;
}
function __ZN7WebCore20ElementRuleCollector29collectMatchingRulesForRegionERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 48 | 0;
 i8 = i4 + 56 | 0;
 i9 = i1 + 24 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i11 + 232 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i6 | 0;
 i14 = i6 + 4 | 0;
 i15 = i6 + 8 | 0;
 i16 = i2 + 4 | 0;
 i2 = i8 | 0;
 i17 = i8 + 4 | 0;
 i18 = 0;
 i19 = i11;
 i11 = i12;
 L7 : while (1) {
  if (i11 >>> 0 <= i18 >>> 0) {
   i20 = 5;
   break;
  }
  i21 = HEAP32[(HEAP32[i19 + 224 >> 2] | 0) + (i18 << 3) >> 2] | 0;
  i22 = HEAP32[i9 >> 2] | 0;
  i23 = i22 | 0;
  i24 = i22 | 0;
  i25 = i22 + 8 | 0;
  L10 : do {
   if ((HEAP32[i25 >> 2] | 0) == 0) {
    i26 = i23;
    i27 = i24;
   } else {
    i22 = i23;
    i28 = i24;
    i29 = i25;
    while (1) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 152 >> 2] & 1](i28) | 0)) {
      i26 = i22;
      i27 = i28;
      break L10;
     }
     i30 = HEAP32[i29 >> 2] | 0;
     i31 = i30 | 0;
     i32 = i30 + 8 | 0;
     if ((HEAP32[i32 >> 2] | 0) == 0) {
      i26 = i30;
      i27 = i31;
      break;
     } else {
      i22 = i30;
      i28 = i31;
      i29 = i32;
     }
    }
   }
  } while (0);
  i25 = i26 + 20 | 0;
  i24 = HEAP32[i25 >> 2] | 0;
  do {
   if ((i24 & 128 | 0) == 0) {
    i23 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i33 = i24;
     i20 = 15;
     break;
    }
    if ((HEAP32[i23 + 12 >> 2] & 1048580 | 0) != 1048580) {
     i33 = i24;
     i20 = 15;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 232 >> 2] & 1](i23) | 0) == 0) {
     i33 = HEAP32[i25 >> 2] | 0;
     i20 = 15;
     break;
    } else {
     i34 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i27) | 0;
     break;
    }
   } else {
    i33 = i24;
    i20 = 15;
   }
  } while (0);
  do {
   if ((i20 | 0) == 15) {
    i20 = 0;
    if ((i33 & 128 | 0) != 0) {
     i34 = 0;
     break;
    }
    i34 = HEAP32[i26 + 4 >> 2] | 0;
   }
  } while (0);
  i24 = i34;
  L26 : do {
   if (!((i21 | 0) == 0 | (i34 | 0) == 0)) {
    __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i5, HEAP32[(HEAP32[i34 + 20 >> 2] | 0) + 8 >> 2] | 0, 2);
    i25 = i21;
    while (1) {
     HEAP32[i13 >> 2] = i25;
     HEAP32[i14 >> 2] = i24;
     _memset(i15 | 0, 0, 27) | 0;
     HEAP32[i7 >> 2] = 0;
     if ((__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i5, i6, i7) | 0) == 0) {
      break;
     } else {
      i35 = i25;
     }
     while (1) {
      i36 = HEAP8[i35 + 2 | 0] | 0;
      i35 = i35 + 8 | 0;
      if ((i36 & 2) != 0) {
       break;
      }
     }
     i25 = (i36 & 1) != 0 ? 0 : i35;
     if ((i25 | 0) == 0) {
      break L26;
     }
    }
    i25 = HEAP32[i10 >> 2] | 0;
    if ((HEAP32[i25 + 232 >> 2] | 0) >>> 0 <= i18 >>> 0) {
     i20 = 23;
     break L7;
    }
    i23 = HEAP8[i16] & 1;
    HEAP32[i2 >> 2] = HEAP32[(HEAP32[i25 + 224 >> 2] | 0) + (i18 << 3) + 4 >> 2];
    HEAP8[i17] = i23;
    __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i8, i3);
   }
  } while (0);
  i24 = i18 + 1 | 0;
  if (i24 >>> 0 >= i12 >>> 0) {
   i20 = 30;
   break;
  }
  i21 = HEAP32[i10 >> 2] | 0;
  i18 = i24;
  i19 = i21;
  i11 = HEAP32[i21 + 232 >> 2] | 0;
 }
 if ((i20 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 23) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 30) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20ElementRuleCollector11ruleMatchesERKNS_8RuleDataERNS_8PseudoIdE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = i2 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) >= 0) {
  i11 = i8 | 0;
  __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i6, HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i1 + 44 >> 2] | 0);
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = (HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0) + ((HEAP32[i9 >> 2] & 8191) << 3);
  HEAP32[i7 + 4 >> 2] = i12;
  HEAP32[i7 + 8 >> 2] = 0;
  HEAP32[i7 + 12 >> 2] = 1;
  i12 = i7 + 16 | 0;
  _memset(i12 | 0, 0, 19) | 0;
  HEAP32[i7 + 20 >> 2] = HEAP32[i8 + 4 >> 2];
  i9 = i1 + 28 | 0;
  HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i7 + 24 >> 2] = HEAP32[i1 + 36 >> 2];
  HEAP32[i7 + 28 >> 2] = HEAP32[i1 + 32 >> 2];
  if ((__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i6, i7, i3) | 0) != 0) {
   i13 = 0;
   STACKTOP = i4;
   return i13 | 0;
  }
  i7 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    if ((i7 | 0) == (HEAP32[i3 >> 2] | 0)) {
     break;
    } else {
     i13 = 0;
    }
    STACKTOP = i4;
    return i13 | 0;
   }
  } while (0);
  i13 = 1;
  STACKTOP = i4;
  return i13 | 0;
 }
 if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i1 & 33554432 | 0) != 0) {
   if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((i1 & 16777216 | 0) == 0) {
    i13 = 1;
   } else {
    break;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i1 = i10 & 8191;
 i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0;
 i2 = i10 + (i1 << 3) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i2 >> 2] & 120 | 0) == 8) {
   i8 = HEAP32[i10 + (i1 << 3) + 4 >> 2] | 0;
   if ((i8 | 0) == (HEAP32[__ZN7WebCore7anyNameE >> 2] | 0)) {
    break;
   }
   i7 = HEAP32[i8 + 12 >> 2] | 0;
   i9 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
   do {
    if ((i7 | 0) != (i9 | 0)) {
     if ((i7 | 0) == (HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     } else {
      i13 = 0;
     }
     STACKTOP = i4;
     return i13 | 0;
    }
   } while (0);
   i7 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i7 | 0) == (i9 | 0)) {
    break;
   }
   if ((i7 | 0) == (HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 16 >> 2] | 0)) {
    break;
   } else {
    i13 = 0;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 __ZN7WebCore23SelectorCheckerFastPathC1EPKNS_11CSSSelectorEPKNS_7ElementE(i5, i2, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((((HEAP32[i3 >> 2] | 0) >>> 3 & 15) - 4 | 0) >>> 0 < 2 >>> 0) {
   i2 = i3 + 4 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   if (__ZN7WebCore15SelectorChecker19checkExactAttributeEPKNS_7ElementEPKNS_11CSSSelectorERKNS_13QualifiedNameEPKN3WTF16AtomicStringImplE(HEAP32[i5 + 4 >> 2] | 0, i3, i1 + 16 | 0, HEAP32[((HEAP8[i3 + 2 | 0] & 4) == 0 ? i2 | 0 : i1 + 4 | 0) >> 2] | 0) | 0) {
    break;
   } else {
    i13 = 0;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i13 = __ZNK7WebCore23SelectorCheckerFastPath7matchesEv(i5) | 0;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i2 | 0;
 i2 = i1 + 48 | 0;
 i10 = i1 + 44 | 0;
 i11 = i3 + 4 | 0;
 i3 = i1 + 40 | 0;
 i12 = i4 + 4 | 0;
 i13 = i4 | 0;
 i4 = i1 + 28 | 0;
 i14 = (HEAP32[i1 >> 2] | 0) + 4 | 0;
 i15 = i1 + 8 | 0;
 i16 = 0;
 L7 : while (1) {
  i17 = HEAP32[i9 >> 2] | 0;
  i18 = i17 + (i16 * 28 & -1) | 0;
  L9 : do {
   if ((HEAP8[i2] & 1) == 0) {
    i19 = 10;
   } else {
    i20 = (HEAP32[i15 >> 2] | 0) + 12 | 0;
    i21 = 0;
    while (1) {
     if (i21 >>> 0 >= 4 >>> 0) {
      i19 = 10;
      break L9;
     }
     i22 = HEAP32[i17 + (i16 * 28 & -1) + 12 + (i21 << 2) >> 2] | 0;
     if ((i22 | 0) == 0) {
      i19 = 10;
      break L9;
     }
     i23 = HEAP32[i20 >> 2] | 0;
     if ((HEAP8[i23 + (i22 & 4095) | 0] | 0) == 0) {
      break L9;
     }
     if ((HEAP8[i23 + (i22 >>> 16 & 4095) | 0] | 0) == 0) {
      break;
     } else {
      i21 = i21 + 1 | 0;
     }
    }
   }
  } while (0);
  if ((i19 | 0) == 10) {
   i19 = 0;
   i21 = HEAP32[i18 >> 2] | 0;
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
   HEAP32[i7 >> 2] = 0;
   L18 : do {
    if (__ZN7WebCore20ElementRuleCollector11ruleMatchesERKNS_8RuleDataERNS_8PseudoIdE(i1, i18, i7) | 0) {
     i20 = HEAP32[i10 >> 2] | 0;
     if ((i20 | 0) == 3) {
      break L7;
     }
     i22 = HEAP32[i21 + 8 >> 2] | 0;
     i23 = HEAP32[i22 + 4 >> 2] | 0;
     if ((i23 & 4 | 0) == 0) {
      i24 = i23 >>> 3;
     } else {
      i24 = HEAP32[i22 + 16 >> 2] | 0;
     }
     if ((i24 | 0) == 0) {
      if ((HEAP8[i11] & 1) == 0) {
       break;
      }
     }
     if ((HEAP8[i3] & 1) != 0) {
      if ((HEAP32[i17 + (i16 * 28 & -1) + 8 >> 2] & 536870912 | 0) == 0) {
       break;
      }
     }
     i22 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       if ((HEAP32[i4 >> 2] | 0) != 0) {
        break;
       }
       if (!((i20 | 0) != 1 & (i22 | 0) < 8)) {
        break L18;
       }
       i23 = (HEAP32[i14 >> 2] | 0) + 52 | 0;
       HEAP32[i23 >> 2] = HEAP32[i23 >> 2] | 4096 << i22 - 1 & 520192;
       break L18;
      }
     } while (0);
     i22 = HEAP32[i12 >> 2] | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     i22 = HEAP32[i13 >> 2] | 0;
     if ((HEAP32[i22 >> 2] | 0) == -1) {
      HEAP32[i22 >> 2] = HEAP32[HEAP32[i12 >> 2] >> 2];
     }
     __ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE(i1, i18);
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
  }
  i17 = i16 + 1 | 0;
  if (i17 >>> 0 < i8 >>> 0) {
   i16 = i17;
  } else {
   i19 = 33;
   break;
  }
 }
 if ((i19 | 0) == 33) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE(i1, i18);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20ElementRuleCollector27sortAndTransferMatchedRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i1 + 52 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = F_BASE_iii + 2;
 __ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_(i8, i8 + (i7 << 2) | 0, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 i5 = i3 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) != 1) {
  if (i8) {
   STACKTOP = i2;
   return;
  }
  i6 = i4 + 4 | 0;
  i4 = i1 + 68 | 0;
  i9 = i3 | 0;
  i10 = 0;
  i11 = i7;
  while (1) {
   i7 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i12 = i11;
    } else {
     if ((HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i10 << 2) >> 2] | 0) + 8 >> 2] & 67108864 | 0) == 0) {
      i12 = i11;
      break;
     }
     i13 = i7 + 52 | 0;
     HEAP32[i13 >> 2] = HEAP32[i13 >> 2] | 1048576;
     i12 = HEAP32[i5 >> 2] | 0;
    }
   } while (0);
   if (i12 >>> 0 <= i10 >>> 0) {
    i14 = 20;
    break;
   }
   i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i10 << 2) >> 2] | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   i15 = HEAP32[i7 + 8 >> 2] | 0;
   __ZN7WebCore13StyleResolver11MatchResult20addMatchedPropertiesERKNS_15StylePropertiesEPNS_9StyleRuleEjNS_21PropertyWhitelistTypeE(i4, HEAP32[i13 + 8 >> 2] | 0, i13, i15 >>> 27 & 3, (HEAP8[H_BASE + 40 | 0] & 1) != 0 ? 0 : i15 >>> 30);
   i15 = i10 + 1 | 0;
   i13 = HEAP32[i5 >> 2] | 0;
   if (i15 >>> 0 < i13 >>> 0) {
    i10 = i15;
    i11 = i13;
   } else {
    i14 = 28;
    break;
   }
  }
  if ((i14 | 0) == 20) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i14 | 0) == 28) {
   STACKTOP = i2;
   return;
  }
 }
 if (i8) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 56 | 0;
 i14 = i3 | 0;
 i3 = i1 + 64 | 0;
 i11 = i1 + 60 | 0;
 i1 = i8 | 0;
 i10 = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 while (1) {
  i9 = HEAP32[HEAP32[(HEAP32[i14 >> 2] | 0) + (i10 << 2) >> 2] >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i11 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i4 + 1 | 0);
   HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i9;
   if ((i9 | 0) != 0) {
    i12 = i9 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
  } else {
   HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 << 2) >> 2] = i9;
   if ((i9 | 0) != 0) {
    i12 = i9 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
  }
  i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i4;
  i10 = i10 + 1 | 0;
  if (i10 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 52 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(140) | 0;
   i6 = i5;
   HEAP32[i5 >> 2] = i5 + 12;
   HEAP32[i5 + 4 >> 2] = 32;
   HEAP32[i5 + 8 >> 2] = 0;
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i5 | 0) == 0) {
    i7 = i6;
    break;
   }
   i6 = i5 + 8 | 0;
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
   }
   i6 = i5 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if (!((i5 + 12 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   __ZN3WTF8fastFreeEPv(i5);
   i7 = HEAP32[i2 >> 2] | 0;
  } else {
   i7 = i1;
  }
 } while (0);
 i1 = i7 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i7 + 4 >> 2] | 0)) {
  HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] = HEAP32[i4 >> 2];
  i9 = HEAP32[i1 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 1 | 0;
 i8 = i7 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if (i6 >>> 0 > i4 >>> 0) {
   i11 = 12;
  } else {
   if ((i6 + (i2 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 12;
    break;
   }
   i12 = i5 + (i2 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIPKN7WebCore8RuleDataELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i13 >>> 0 > i5 >>> 0 ? i13 : i5);
   i13 = HEAP32[i8 >> 2] | 0;
   i14 = i13 + (i4 - i6 >> 2 << 2) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i11 | 0) == 12) {
  i11 = i5 + (i2 >>> 2) | 0;
  i2 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorIPKN7WebCore8RuleDataELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i2 >>> 0 > i5 >>> 0 ? i2 : i5);
  i14 = i4;
  i15 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i15 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i14 >> 2];
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = i9 + 1 | 0;
 HEAP32[i1 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 do {
  if (i6) {
   i8 = HEAP32[i1 >> 2] | 0;
   if (i7) {
    HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i8;
    i9 = 1;
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, i8) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   i9 = 2;
  } else {
   if (!i7) {
    i9 = 0;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   i9 = 2;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0)) {
  i10 = i9;
  return i10 | 0;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0)) {
  i10 = i9 + 1 | 0;
  return i10 | 0;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
  i10 = i9 + 2 | 0;
  return i10 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i5;
 i10 = i9 + 3 | 0;
 return i10 | 0;
}
function __ZN7WebCore20ElementRuleCollector14matchUserRulesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 4 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   i9 = i7 + 8 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
   }
   i9 = i7 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = i7 + 12 | 0;
   if ((i11 | 0) == (i10 | 0) | (i10 | 0) == 0) {
    i12 = i10;
   } else {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
    i12 = HEAP32[i9 >> 2] | 0;
   }
   if ((i12 | 0) != 0) {
    break;
   }
   HEAP32[i9 >> 2] = i11;
   HEAP32[i8 >> 2] = 32;
  }
 } while (0);
 i12 = i1 + 880 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i1 + 76 >> 2] | 0) - 1;
 HEAP32[i4 >> 2] = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2];
 HEAP8[i4 + 4 | 0] = i2 & 1;
 HEAP32[i5 >> 2] = i1 + 876;
 HEAP32[i5 + 4 >> 2] = i12;
 __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i4, i5);
 __ZN7WebCore20ElementRuleCollector29collectMatchingRulesForRegionERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i4, i5);
 __ZN7WebCore20ElementRuleCollector27sortAndTransferMatchedRulesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20ElementRuleCollector16matchAuthorRulesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   i8 = i6 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i6 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i9 | 0) | (i9 | 0) == 0) {
    i11 = i9;
   } else {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
    i11 = HEAP32[i8 >> 2] | 0;
   }
   if ((i11 | 0) != 0) {
    break;
   }
   HEAP32[i8 >> 2] = i10;
   HEAP32[i7 >> 2] = 32;
  }
 } while (0);
 i11 = i1 + 872 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i1 + 76 >> 2] | 0) - 1;
 if ((HEAP32[HEAP32[i1 >> 2] >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = HEAP32[HEAP32[i1 + 4 >> 2] >> 2];
 HEAP8[i4 + 4 | 0] = i2 & 1;
 HEAP32[i5 >> 2] = i1 + 868;
 HEAP32[i5 + 4 >> 2] = i11;
 __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i4, i5);
 __ZN7WebCore20ElementRuleCollector29collectMatchingRulesForRegionERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i4, i5);
 __ZN7WebCore20ElementRuleCollector27sortAndTransferMatchedRulesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20ElementRuleCollector19hasAnyMatchingRulesEPNS_7RuleSetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 4 | 0;
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    break;
   }
   i11 = i9 + 8 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i11 = i9 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = i9 + 12 | 0;
   if ((i13 | 0) == (i12 | 0) | (i12 | 0) == 0) {
    i14 = i12;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
    i14 = HEAP32[i11 >> 2] | 0;
   }
   if ((i14 | 0) != 0) {
    break;
   }
   HEAP32[i11 >> 2] = i13;
   HEAP32[i10 >> 2] = 32;
  }
 } while (0);
 HEAP32[i1 + 44 >> 2] = 3;
 HEAP32[i4 >> 2] = -1;
 HEAP32[i5 >> 2] = -1;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i6 + 4 >> 2] = i5;
 HEAP32[i7 >> 2] = i2;
 HEAP8[i7 + 4 | 0] = 0;
 __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i7, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i15 = (HEAP32[i6 + 8 >> 2] | 0) != 0;
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCore20ElementRuleCollector12matchUARulesEPNS_7RuleSetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   i8 = i6 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i6 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i9 | 0) | (i9 | 0) == 0) {
    i11 = i9;
   } else {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
    i11 = HEAP32[i8 >> 2] | 0;
   }
   if ((i11 | 0) != 0) {
    break;
   }
   HEAP32[i8 >> 2] = i10;
   HEAP32[i7 >> 2] = 32;
  }
 } while (0);
 i11 = i1 + 864 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i1 + 76 >> 2] | 0) - 1;
 HEAP32[i4 >> 2] = i1 + 860;
 HEAP32[i4 + 4 >> 2] = i11;
 HEAP32[i5 >> 2] = i2;
 HEAP8[i5 + 4 | 0] = 0;
 __ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i5, i4);
 __ZN7WebCore20ElementRuleCollector27sortAndTransferMatchedRulesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20ElementRuleCollector12matchUARulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP8[H_BASE + 40 | 0] = 1;
 if ((HEAP32[__ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE >> 2] | 0) != 0) {
  HEAP8[i1 + 884 | 0] = 0;
 }
 __ZN7WebCore20ElementRuleCollector12matchUARulesEPNS_7RuleSetE(i1, (HEAP8[i1 + 20 | 0] & 1) != 0 ? HEAP32[__ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE >> 2] | 0 : HEAP32[__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE >> 2] | 0);
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 664 >> 2] | 0) == 0) {
  __ZN7WebCore20ElementRuleCollector12matchUARulesEPNS_7RuleSetE(i1, HEAP32[__ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE >> 2] | 0);
  i4 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 } else {
  i4 = i3;
 }
 if ((HEAP8[i4 + 1579 | 0] & 1) == 0) {
  HEAP8[H_BASE + 40 | 0] = 0;
  return;
 }
 __ZN7WebCore20ElementRuleCollector12matchUARulesEPNS_7RuleSetE(i1, __ZN7WebCore21CSSDefaultStyleSheets15viewSourceStyleEv() | 0);
 HEAP8[H_BASE + 40 | 0] = 0;
 return;
}
function __ZN3WTF6VectorIPKN7WebCore8RuleDataELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 32 >>> 0) {
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
   HEAP32[i3 >> 2] = 32;
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore20ElementRuleCollector27collectMatchingRulesForListEPKN3WTF6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3, i4);
  return;
 } else {
  __ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE(i1, i2, i3, i4);
  return;
 }
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
function __ZN7WebCoreL12compareRulesEPKNS_8RuleDataES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 8 >> 2] & 16777215;
 i4 = HEAP32[i2 + 8 >> 2] & 16777215;
 if ((i3 | 0) == (i4 | 0)) {
  i5 = ((HEAP32[i1 + 4 >> 2] | 0) >>> 13 & 262143) >>> 0 < ((HEAP32[i2 + 4 >> 2] | 0) >>> 13 & 262143) >>> 0;
  return i5 | 0;
 } else {
  i5 = i3 >>> 0 < i4 >>> 0;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore20ElementRuleCollector16sortMatchedRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + (HEAP32[i4 + 8 >> 2] << 2) | 0;
 HEAP32[i3 >> 2] = F_BASE_iii + 2;
 __ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_(i1, i5, i3);
 STACKTOP = i2;
 return;
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
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore20MatchingUARulesScopeD2Ev(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 40 | 0] = 0;
 return;
}
function __ZN7WebCore20MatchingUARulesScopeD1Ev(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 40 | 0] = 0;
 return;
}
function __ZN7WebCore20MatchingUARulesScopeC2Ev(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 40 | 0] = 1;
 return;
}
function __ZN7WebCore20MatchingUARulesScopeC1Ev(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 40 | 0] = 1;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore20ElementRuleCollector15matchedRuleListEv(i1) {
 i1 = i1 | 0;
 return i1 + 56 | 0;
}
function __ZN7WebCore20ElementRuleCollector13matchedResultEv(i1) {
 i1 = i1 | 0;
 return i1 + 68 | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
  var FUNCTION_TABLE_iii = [b2,b2,__ZN7WebCoreL12compareRulesEPKNS_8RuleDataES2_,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore20MatchingUARulesScopeD2Ev,b3,__ZN7WebCore20MatchingUARulesScopeC2Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE": __ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE, "__ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE": __ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE, "__ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE": __ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE, "__ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE": __ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20ElementRuleCollector11ruleMatchesERKNS_8RuleDataERNS_8PseudoIdE","__ZN7WebCore20ElementRuleCollector16sortMatchedRulesEv","__ZN7WebCore20ElementRuleCollector13matchAllRulesEbb","__ZNK7WebCore20ElementRuleCollector15matchedRuleListEv","__ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb0EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE","__ZN7WebCore20ElementRuleCollector14matchUserRulesEb","__ZNSt3__17__sort4IRPFbPKN7WebCore8RuleDataES4_EPS4_EEjT0_S9_S9_S9_T_","__ZN7WebCore20ElementRuleCollector12matchUARulesEPNS_7RuleSetE","__ZN7WebCore20ElementRuleCollector16matchAuthorRulesEb","__ZN7WebCore20ElementRuleCollector19hasAnyMatchingRulesEPNS_7RuleSetE","__ZN7WebCore20ElementRuleCollector20collectMatchingRulesERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE","__ZN7WebCore20ElementRuleCollector13matchedResultEv","__ZN7WebCore20MatchingUARulesScopeD2Ev","_memset","_memcpy","__ZNSt3__16__sortIRPFbPKN7WebCore8RuleDataES4_EPS4_EEvT0_S9_T_","__ZN7WebCore20ElementRuleCollector27collectMatchingRulesForListEPKN3WTF6VectorINS_8RuleDataELj0ENS1_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIPKN7WebCore8RuleDataELj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCoreL12compareRulesEPKNS_8RuleDataES2_","__ZN7WebCore20MatchingUARulesScopeC2Ev","__ZN7WebCore20ElementRuleCollector12matchUARulesEv","_strlen","__ZN7WebCore15SelectorChecker19checkExactAttributeEPKNS_7ElementEPKNS_11CSSSelectorERKNS_13QualifiedNameEPKN3WTF16AtomicStringImplE","__ZN7WebCore20ElementRuleCollector14addMatchedRuleEPKNS_8RuleDataE","__ZN7WebCore20ElementRuleCollector29collectMatchingRulesForRegionERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE","__ZN7WebCore20ElementRuleCollector27sortAndTransferMatchedRulesEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13StyleRuleBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20ElementRuleCollector29doCollectMatchingRulesForListILb1EEEvPKN3WTF6VectorINS_8RuleDataELj0ENS2_15CrashOnOverflowEEERKNS_12MatchRequestERNS_13StyleResolver9RuleRangeE","__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore8RuleDataES4_EPS4_EEbT0_S9_T_"]

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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
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
  var __ZTVN7WebCore17StaticElementListE=env.__ZTVN7WebCore17StaticElementListE|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL21callHTMLAllCollectionEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i1 + 32 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 1) {
  i15 = -4;
  i16 = 0;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 i17 = HEAP32[i1 + 24 >> 2] | 0;
 i18 = HEAP32[i17 + 12 >> 2] | 0;
 i19 = i1 + 48 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i19 + 4 >> 2] | 0;
 if ((i14 | 0) == 2) {
  i14 = i5 | 0;
  HEAP32[i14 >> 2] = i20;
  HEAP32[i14 + 4 >> 2] = i21;
  i14 = i20;
  do {
   if ((i20 & 0 | 0) == 0 & (i21 & -1 | 0) == (-5 | 0)) {
    if ((HEAP8[(HEAP32[i14 >> 2] | 0) + 52 | 0] | 0) != 5) {
     i22 = 6;
     break;
    }
    i23 = i14;
   } else {
    i22 = 6;
   }
  } while (0);
  if ((i22 | 0) == 6) {
   i23 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i5, i1) | 0;
  }
  i5 = i23 + 12 | 0;
  i14 = HEAP32[i5 >> 2] | 0;
  if ((i14 | 0) == 0) {
   __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i23, i1);
   i23 = HEAP32[i5 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i24 = 0;
    i25 = 1;
   } else {
    i26 = i23;
    i22 = 9;
   }
  } else {
   i26 = i14;
   i22 = 9;
  }
  if ((i22 | 0) == 9) {
   i14 = i26 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   i24 = i26;
   i25 = 0;
  }
  i26 = HEAP32[i24 + 16 >> 2] | 0;
  L17 : do {
   if ((i26 & 32 | 0) == 0) {
    i14 = HEAP32[i24 + 8 >> 2] | 0;
    i23 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i22 = 29;
     break;
    }
    i5 = (HEAPU16[i14 >> 1] | 0) - 48 | 0;
    if (i5 >>> 0 > 9 >>> 0) {
     i22 = 29;
     break;
    }
    if ((i5 | 0) == 0 & i23 >>> 0 > 1 >>> 0) {
     i22 = 29;
     break;
    }
    i19 = i23 - 1 | 0;
    if ((i19 | 0) == 0) {
     i27 = i5;
     i22 = 27;
     break;
    } else {
     i28 = i14;
     i29 = i5;
     i30 = i19;
    }
    while (1) {
     if (i29 >>> 0 > 429496729 >>> 0) {
      i22 = 29;
      break L17;
     }
     i19 = i28 + 2 | 0;
     i5 = (HEAPU16[i19 >> 1] | 0) - 48 | 0;
     if (i5 >>> 0 > 9 >>> 0) {
      i22 = 29;
      break L17;
     }
     i14 = _llvm_uadd_with_overflow_i32(i5 | 0, i29 * 10 & -1 | 0) | 0;
     if (tempRet0) {
      i22 = 29;
      break L17;
     }
     i5 = i14;
     i14 = i30 - 1 | 0;
     if ((i14 | 0) == 0) {
      i27 = i5;
      i22 = 27;
      break;
     } else {
      i28 = i19;
      i29 = i5;
      i30 = i14;
     }
    }
   } else {
    i14 = HEAP32[i24 + 8 >> 2] | 0;
    i5 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i22 = 29;
     break;
    }
    i19 = (HEAPU8[i14] | 0) - 48 | 0;
    if (i19 >>> 0 > 9 >>> 0) {
     i22 = 29;
     break;
    }
    if ((i19 | 0) == 0 & i5 >>> 0 > 1 >>> 0) {
     i22 = 29;
     break;
    }
    i23 = i5 - 1 | 0;
    if ((i23 | 0) == 0) {
     i27 = i19;
     i22 = 27;
     break;
    } else {
     i31 = i14;
     i32 = i19;
     i33 = i23;
    }
    while (1) {
     if (i32 >>> 0 > 429496729 >>> 0) {
      i22 = 29;
      break L17;
     }
     i23 = i31 + 1 | 0;
     i19 = (HEAPU8[i23] | 0) - 48 | 0;
     if (i19 >>> 0 > 9 >>> 0) {
      i22 = 29;
      break L17;
     }
     i14 = _llvm_uadd_with_overflow_i32(i19 | 0, i32 * 10 & -1 | 0) | 0;
     if (tempRet0) {
      i22 = 29;
      break L17;
     }
     i19 = i14;
     i14 = i33 - 1 | 0;
     if ((i14 | 0) == 0) {
      i27 = i19;
      i22 = 27;
      break;
     } else {
      i31 = i23;
      i32 = i19;
      i33 = i14;
     }
    }
   }
  } while (0);
  do {
   if ((i22 | 0) == 27) {
    if ((i27 | 0) == -1) {
     i22 = 29;
     break;
    }
    i33 = HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0;
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i6, i1, i33, __ZNK7WebCore14HTMLCollection4itemEj(i18 | 0, i27) | 0);
    i33 = i6 | 0;
    i34 = HEAP32[i33 + 4 >> 2] | 0;
    i35 = HEAP32[i33 >> 2] | 0;
   }
  } while (0);
  do {
   if ((i22 | 0) == 29) {
    if ((i26 & 4 | 0) == 0) {
     __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i3, i1, i24);
     i36 = i3 | 0;
    } else {
     i6 = i3 | 0;
     HEAP32[i6 >> 2] = i24;
     i27 = i24 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     i36 = i6;
    }
    i6 = HEAP32[i36 >> 2] | 0;
    __ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE(i7, i1, i17, i6);
    i27 = i7 | 0;
    i33 = HEAP32[i27 >> 2] | 0;
    i32 = HEAP32[i27 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i34 = i32;
     i35 = i33;
     break;
    }
    i27 = i6 | 0;
    i31 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     i34 = i32;
     i35 = i33;
     break;
    } else {
     HEAP32[i27 >> 2] = i31;
     i34 = i32;
     i35 = i33;
     break;
    }
   }
  } while (0);
  if (i25) {
   i15 = i34;
   i16 = i35;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  }
  i25 = i24 | 0;
  i7 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i24);
   i15 = i34;
   i16 = i35;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  } else {
   HEAP32[i25 >> 2] = i7;
   i15 = i34;
   i16 = i35;
   STACKTOP = i2;
   return (tempRet0 = i15, i16) | 0;
  }
 }
 i35 = i8 | 0;
 HEAP32[i35 >> 2] = i20;
 HEAP32[i35 + 4 >> 2] = i21;
 i35 = i20;
 do {
  if ((i20 & 0 | 0) == 0 & (i21 & -1 | 0) == (-5 | 0)) {
   if ((HEAP8[(HEAP32[i35 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i22 = 43;
    break;
   }
   i37 = i35;
  } else {
   i22 = 43;
  }
 } while (0);
 if ((i22 | 0) == 43) {
  i37 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i8, i1) | 0;
 }
 i8 = i37 + 12 | 0;
 i35 = HEAP32[i8 >> 2] | 0;
 if ((i35 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i37, i1);
  i37 = HEAP32[i8 >> 2] | 0;
  if ((i37 | 0) == 0) {
   i38 = 0;
   i39 = 1;
  } else {
   i40 = i37;
   i22 = 46;
  }
 } else {
  i40 = i35;
  i22 = 46;
 }
 if ((i22 | 0) == 46) {
  i35 = i40 | 0;
  HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
  i38 = i40;
  i39 = 0;
 }
 do {
  if (((HEAP32[i13 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
   i40 = i1 + 56 | 0;
   i35 = HEAP32[i40 >> 2] | 0;
   i37 = HEAP32[i40 + 4 >> 2] | 0;
   i40 = i10 | 0;
   HEAP32[i40 >> 2] = i35;
   HEAP32[i40 + 4 >> 2] = i37;
   i40 = i35;
   if (!((i35 & 0 | 0) == 0 & (i37 & -1 | 0) == (-5 | 0))) {
    i22 = 55;
    break;
   }
   if ((HEAP8[(HEAP32[i40 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i22 = 55;
    break;
   }
   i37 = i40 + 12 | 0;
   i35 = HEAP32[i37 >> 2] | 0;
   if ((i35 | 0) == 0) {
    __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i40, i1);
    i40 = HEAP32[i37 >> 2] | 0;
    HEAP32[i9 >> 2] = i40;
    if ((i40 | 0) == 0) {
     break;
    } else {
     i41 = i40;
    }
   } else {
    HEAP32[i9 >> 2] = i35;
    i41 = i35;
   }
   i35 = i41 | 0;
   HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
  } else {
   HEAP32[i10 + 4 >> 2] = -4;
   HEAP32[i10 >> 2] = 0;
   i22 = 55;
  }
 } while (0);
 if ((i22 | 0) == 55) {
  __ZNK3JSC7JSValue19toWTFStringSlowCaseEPNS_9ExecStateE(i9, i10, i1);
 }
 i10 = HEAP32[i9 >> 2] | 0;
 L82 : do {
  if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
   i9 = HEAP32[i10 + 8 >> 2] | 0;
   i41 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i41 | 0) == 0) {
    i42 = -1;
    i22 = 74;
    break;
   }
   i13 = (HEAPU16[i9 >> 1] | 0) - 48 | 0;
   if (i13 >>> 0 > 9 >>> 0) {
    i43 = -1;
    i22 = 73;
    break;
   }
   if ((i13 | 0) == 0 & i41 >>> 0 > 1 >>> 0) {
    i43 = -1;
    i22 = 73;
    break;
   }
   i35 = i41 - 1 | 0;
   if ((i35 | 0) == 0) {
    i43 = i13;
    i22 = 73;
    break;
   } else {
    i44 = i13;
    i45 = i9;
    i46 = i35;
   }
   while (1) {
    if (i44 >>> 0 > 429496729 >>> 0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i35 = i45 + 2 | 0;
    i9 = (HEAPU16[i35 >> 1] | 0) - 48 | 0;
    if (i9 >>> 0 > 9 >>> 0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i44 * 10 & -1 | 0) | 0;
    if (tempRet0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i9 = i13;
    i13 = i46 - 1 | 0;
    if ((i13 | 0) == 0) {
     i43 = i9;
     i22 = 73;
     break;
    } else {
     i44 = i9;
     i45 = i35;
     i46 = i13;
    }
   }
  } else {
   i13 = HEAP32[i10 + 8 >> 2] | 0;
   i35 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i43 = -1;
    i22 = 73;
    break;
   }
   i9 = (HEAPU8[i13] | 0) - 48 | 0;
   if (i9 >>> 0 > 9 >>> 0) {
    i43 = -1;
    i22 = 73;
    break;
   }
   if ((i9 | 0) == 0 & i35 >>> 0 > 1 >>> 0) {
    i43 = -1;
    i22 = 73;
    break;
   }
   i41 = i35 - 1 | 0;
   if ((i41 | 0) == 0) {
    i43 = i9;
    i22 = 73;
    break;
   } else {
    i47 = i9;
    i48 = i13;
    i49 = i41;
   }
   while (1) {
    if (i47 >>> 0 > 429496729 >>> 0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i41 = i48 + 1 | 0;
    i13 = (HEAPU8[i41] | 0) - 48 | 0;
    if (i13 >>> 0 > 9 >>> 0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i9 = _llvm_uadd_with_overflow_i32(i13 | 0, i47 * 10 & -1 | 0) | 0;
    if (tempRet0) {
     i43 = -1;
     i22 = 73;
     break L82;
    }
    i13 = i9;
    i9 = i49 - 1 | 0;
    if ((i9 | 0) == 0) {
     i43 = i13;
     i22 = 73;
     break;
    } else {
     i47 = i13;
     i48 = i41;
     i49 = i9;
    }
   }
  }
 } while (0);
 if ((i22 | 0) == 73) {
  if ((i10 | 0) == 0) {
   i50 = i43;
  } else {
   i42 = i43;
   i22 = 74;
  }
 }
 do {
  if ((i22 | 0) == 74) {
   i43 = i10 | 0;
   i49 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i49 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i50 = i42;
    break;
   } else {
    HEAP32[i43 >> 2] = i49;
    i50 = i42;
    break;
   }
  }
 } while (0);
 do {
  if ((i50 | 0) == -1) {
   i51 = -4;
   i52 = 0;
  } else {
   do {
    if (i39) {
     i42 = i4 | 0;
     HEAP32[i42 >> 2] = 0;
     i53 = i42;
    } else {
     if ((HEAP32[i38 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i38);
      i53 = i4 | 0;
      break;
     } else {
      i42 = i4 | 0;
      HEAP32[i42 >> 2] = i38;
      i10 = i38 | 0;
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
      i53 = i42;
      break;
     }
    }
   } while (0);
   i42 = i11 | 0;
   HEAP32[i42 >> 2] = HEAP32[i53 >> 2];
   i10 = __ZNK7WebCore17HTMLAllCollection18namedItemWithIndexERKN3WTF12AtomicStringEj(i18, i11, i50) | 0;
   i22 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i42 = i22 | 0;
     i49 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
     if ((i49 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i42 >> 2] = i49;
      break;
     }
    }
   } while (0);
   if ((i10 | 0) == 0) {
    i51 = -4;
    i52 = 0;
    break;
   }
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i12, i1, HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0, i10);
   i22 = i12 | 0;
   i51 = HEAP32[i22 + 4 >> 2] | 0;
   i52 = HEAP32[i22 >> 2] | 0;
  }
 } while (0);
 if (i39) {
  i15 = i51;
  i16 = i52;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 i39 = i38 | 0;
 i12 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i38);
  i15 = i51;
  i16 = i52;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 } else {
  HEAP32[i39 >> 2] = i12;
  i15 = i51;
  i16 = i52;
  STACKTOP = i2;
  return (tempRet0 = i15, i16) | 0;
 }
 return 0;
}
function __ZN7WebCore19JSHTMLAllCollection4itemEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 + 32 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 1) {
   HEAP32[i6 + 4 >> 2] = -4;
   HEAP32[i6 >> 2] = 0;
   i9 = 6;
  } else {
   i10 = i3 + 48 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = i11;
   HEAP32[i10 + 4 >> 2] = i12;
   i10 = i11;
   if (!((i11 & 0 | 0) == 0 & (i12 & -1 | 0) == (-5 | 0))) {
    i9 = 6;
    break;
   }
   if ((HEAP8[(HEAP32[i10 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i9 = 6;
    break;
   }
   i13 = i10;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  i13 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i3) | 0;
 }
 i6 = i13 + 12 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i13, i3);
  i14 = HEAP32[i6 >> 2] | 0;
 } else {
  i14 = i10;
 }
 L12 : do {
  if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
   i10 = HEAP32[i14 + 8 >> 2] | 0;
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i13 = (HEAPU16[i10 >> 1] | 0) - 48 | 0;
   if (i13 >>> 0 > 9 >>> 0) {
    break;
   }
   if ((i13 | 0) == 0 & i6 >>> 0 > 1 >>> 0) {
    break;
   }
   i12 = i6 - 1 | 0;
   if ((i12 | 0) == 0) {
    i15 = i13;
    i9 = 26;
    break;
   } else {
    i16 = i10;
    i17 = i13;
    i18 = i12;
   }
   while (1) {
    if (i17 >>> 0 > 429496729 >>> 0) {
     break L12;
    }
    i12 = i16 + 2 | 0;
    i13 = (HEAPU16[i12 >> 1] | 0) - 48 | 0;
    if (i13 >>> 0 > 9 >>> 0) {
     break L12;
    }
    i10 = _llvm_uadd_with_overflow_i32(i13 | 0, i17 * 10 & -1 | 0) | 0;
    if (tempRet0) {
     break L12;
    }
    i13 = i10;
    i10 = i18 - 1 | 0;
    if ((i10 | 0) == 0) {
     i15 = i13;
     i9 = 26;
     break;
    } else {
     i16 = i12;
     i17 = i13;
     i18 = i10;
    }
   }
  } else {
   i10 = HEAP32[i14 + 8 >> 2] | 0;
   i13 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i12 = (HEAPU8[i10] | 0) - 48 | 0;
   if (i12 >>> 0 > 9 >>> 0) {
    break;
   }
   if ((i12 | 0) == 0 & i13 >>> 0 > 1 >>> 0) {
    break;
   }
   i6 = i13 - 1 | 0;
   if ((i6 | 0) == 0) {
    i15 = i12;
    i9 = 26;
    break;
   } else {
    i19 = i12;
    i20 = i10;
    i21 = i6;
   }
   while (1) {
    if (i19 >>> 0 > 429496729 >>> 0) {
     break L12;
    }
    i6 = i20 + 1 | 0;
    i10 = (HEAPU8[i6] | 0) - 48 | 0;
    if (i10 >>> 0 > 9 >>> 0) {
     break L12;
    }
    i12 = _llvm_uadd_with_overflow_i32(i10 | 0, i19 * 10 & -1 | 0) | 0;
    if (tempRet0) {
     break L12;
    }
    i10 = i12;
    i12 = i21 - 1 | 0;
    if ((i12 | 0) == 0) {
     i15 = i10;
     i9 = 26;
     break;
    } else {
     i19 = i10;
     i20 = i6;
     i21 = i12;
    }
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 26) {
   if ((i15 | 0) == -1) {
    break;
   }
   i21 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i3, i21, __ZNK7WebCore14HTMLCollection4itemEj(HEAP32[i2 + 12 >> 2] | 0, i15) | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i8 >> 2] | 0) == 1) {
   HEAP32[i7 + 4 >> 2] = -4;
   HEAP32[i7 >> 2] = 0;
   i9 = 33;
  } else {
   i15 = i3 + 48 | 0;
   i21 = HEAP32[i15 >> 2] | 0;
   i20 = HEAP32[i15 + 4 >> 2] | 0;
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = i21;
   HEAP32[i15 + 4 >> 2] = i20;
   i15 = i21;
   if (!((i21 & 0 | 0) == 0 & (i20 & -1 | 0) == (-5 | 0))) {
    i9 = 33;
    break;
   }
   if ((HEAP8[(HEAP32[i15 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i9 = 33;
    break;
   }
   i22 = i15;
  }
 } while (0);
 if ((i9 | 0) == 33) {
  i22 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i3) | 0;
 }
 i7 = i22 + 12 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i22, i3);
  i23 = HEAP32[i7 >> 2] | 0;
 } else {
  i23 = i9;
 }
 if ((HEAP32[i23 + 16 >> 2] & 4 | 0) == 0) {
  __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i5, i3, i23);
  i24 = i5 | 0;
 } else {
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = i23;
  i5 = i23 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  i24 = i9;
 }
 i9 = HEAP32[i24 >> 2] | 0;
 __ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE(i1, i3, i2, i9);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i9 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = HEAP32[i3 + 12 >> 2] | 0;
 i13 = (HEAP32[i4 + 16 >> 2] & 4 | 0) != 0 ? i4 : 0;
 do {
  if ((i13 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   i14 = 0;
  } else {
   if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i13);
    i14 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    i4 = i13 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
    i14 = i13;
    break;
   }
  }
 } while (0);
 i13 = i8 | 0;
 HEAP32[i13 >> 2] = i14;
 __ZNK7WebCore14HTMLCollection10namedItemsERKN3WTF12AtomicStringERNS1_6VectorINS1_3RefINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE(i12, i8, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  } else {
   i8 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
   if ((i7 | 0) == 1) {
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i8, HEAP32[HEAP32[i9 >> 2] >> 2] | 0);
    break;
   }
   i13 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i13 + 4 >> 2] = 0;
   i12 = i13 + 8 | 0;
   HEAP32[i12 >> 2] = 1;
   HEAP32[i13 >> 2] = __ZTVN7WebCore17StaticElementListE + 8;
   i14 = i13 + 12 | 0;
   HEAP32[i14 >> 2] = 0;
   i6 = i13 + 16 | 0;
   HEAP32[i6 >> 2] = 0;
   i4 = i13 + 20 | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = 0;
   i4 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i4;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i4;
   i4 = i13;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_8NodeListE(i1, i2, i8, i4);
   if ((i13 | 0) == 0) {
    break;
   }
   i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i4);
    break;
   } else {
    HEAP32[i12 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i1 = HEAP32[i9 >> 2] | 0;
  i7 = i1 + (i2 << 2) | 0;
  i2 = i1;
  while (1) {
   i1 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
   i3 = i1 - 8 | 0;
   i8 = i1 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3);
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i5 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 do {
  if ((HEAP8[i5 + 92 | 0] & 1) == 0) {
   i6 = 8;
  } else {
   i7 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 8;
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] & 3 | 0) != 0) {
    i6 = 8;
    break;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i6 = 8;
    break;
   }
   i9 = i8 | 0;
   i6 = 17;
  }
 } while (0);
 L10 : do {
  if ((i6 | 0) == 8) {
   i8 = i4;
   i7 = HEAP32[i5 + 12 >> 2] | 0;
   i10 = HEAP32[i5 + 4 >> 2] | 0;
   i11 = i4;
   i12 = i11 + ~(i11 << 15) | 0;
   i11 = (i12 >>> 10 ^ i12) * 9 & -1;
   i12 = i11 >>> 6 ^ i11;
   i11 = i12 + ~(i12 << 11) | 0;
   i12 = i11 >>> 16 ^ i11;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i7 & i12;
   i13 = i10 + (i11 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i8 | 0)) {
    i15 = i13;
   } else {
    i13 = (i12 >>> 23) + ~i12 | 0;
    i12 = i13 << 12 ^ i13;
    i13 = i12 >>> 7 ^ i12;
    i12 = i13 << 2 ^ i13;
    i13 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i16 = i11;
    i11 = i14;
    while (1) {
     if ((i11 | 0) == 0) {
      break L10;
     }
     i14 = (i12 | 0) == 0 ? i13 : i12;
     i17 = i14 + i16 & i7;
     i18 = i10 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i8 | 0)) {
      i15 = i18;
      break;
     } else {
      i12 = i14;
      i16 = i17;
      i11 = i19;
     }
    }
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] & 3 | 0) != 0) {
    break;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   i6 = 17;
  }
 } while (0);
 do {
  if ((i6 | 0) == 17) {
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i9;
   return;
  }
 } while (0);
 __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i3, i4);
 return;
}
function __ZN7WebCore19JSHTMLAllCollection9namedItemEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 do {
  if ((HEAP32[i3 + 32 >> 2] | 0) == 1) {
   HEAP32[i7 + 4 >> 2] = -4;
   HEAP32[i7 >> 2] = 0;
   i8 = 6;
  } else {
   i9 = i3 + 48 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP32[i9 + 4 >> 2] = i11;
   i9 = i10;
   if (!((i10 & 0 | 0) == 0 & (i11 & -1 | 0) == (-5 | 0))) {
    i8 = 6;
    break;
   }
   if ((HEAP8[(HEAP32[i9 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i8 = 6;
    break;
   }
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 6) {
  i12 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i7, i3) | 0;
 }
 i7 = i12 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i12, i3);
  i13 = HEAP32[i7 >> 2] | 0;
 } else {
  i13 = i8;
 }
 if ((HEAP32[i13 + 16 >> 2] & 4 | 0) == 0) {
  __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i5, i3, i13);
  i14 = i5 | 0;
 } else {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = i13;
  i5 = i13 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  i14 = i8;
 }
 i8 = HEAP32[i14 >> 2] | 0;
 __ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE(i6, i3, i2, i8);
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i6 + 4 >> 2] | 0) == -4) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  i8 = i6 | 0;
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  i3 = i1 | 0;
  HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i3 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19JSHTMLAllCollection18canGetItemsForNameEPN3JSC9ExecStateEPNS_17HTMLAllCollectionENS1_12PropertyNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[i2 + 16 >> 2] & 4 | 0) != 0 ? i2 : 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i7 = 0;
  } else {
   if ((HEAP32[i3 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i3);
    i7 = HEAP32[i4 >> 2] | 0;
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    i2 = i3 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i7 = i3;
    break;
   }
  }
 } while (0);
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i7;
 i7 = __ZNK7WebCore14HTMLCollection12hasNamedItemERKN3WTF12AtomicStringE(i6, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return i7 | 0;
 }
 i3 = i5 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i1;
  return i7 | 0;
 } else {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i1;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore19JSHTMLAllCollection10nameGetterEPN3JSC9ExecStateExxNS1_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 i4 = i5 | 0;
 __ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE(i4, i1, i2, HEAP32[i6 >> 2] | 0);
 i6 = i4 | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore19JSHTMLAllCollection11getCallDataEPN3JSC6JSCellERNS1_8CallDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i2 >> 2] = F_BASE_ii + 2;
 return 1;
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCoreL21callHTMLAllCollectionEPN3JSC9ExecStateE,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore17StaticElementListE": __ZTVN7WebCore17StaticElementListE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE","__ZN7WebCoreL13getNamedItemsEPN3JSC9ExecStateEPNS_19JSHTMLAllCollectionENS0_12PropertyNameE","__ZN7WebCoreL21callHTMLAllCollectionEPN3JSC9ExecStateE","__ZN7WebCore19JSHTMLAllCollection11getCallDataEPN3JSC6JSCellERNS1_8CallDataE","__ZN7WebCore19JSHTMLAllCollection4itemEPN3JSC9ExecStateE","_memset","__ZN7WebCore19JSHTMLAllCollection9namedItemEPN3JSC9ExecStateE","_memcpy","_strlen","__ZN7WebCore19JSHTMLAllCollection18canGetItemsForNameEPN3JSC9ExecStateEPNS_17HTMLAllCollectionENS1_12PropertyNameE","__ZN7WebCore19JSHTMLAllCollection10nameGetterEPN3JSC9ExecStateExxNS1_12PropertyNameE"]

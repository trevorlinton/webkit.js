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
H_BASE = parentModule["_malloc"](520 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 520;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore25InspectorDOMDebuggerAgentC1EPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE;
var __ZN7WebCore25InspectorDOMDebuggerAgentD1Ev;
/* memory initializer */ allocate([117,114,108,0,0,0,0,0,98,114,101,97,107,112,111,105,110,116,85,82,76,0,0,0,101,118,101,110,116,78,97,109,101,0,0,0,0,0,0,0,116,121,112,101,0,0,0,0,110,111,100,101,73,100,0,0,105,110,115,101,114,116,105,111,110,0,0,0,0,0,0,0,116,97,114,103,101,116,78,111,100,101,0,0,0,0,0,0,108,105,115,116,101,110,101,114,58,0,0,0,0,0,0,0,105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,58,0,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,68,79,77,32,98,114,101,97,107,112,111,105,110,116,32,116,121,112,101,58,32,0,0,0,110,111,100,101,45,114,101,109,111,118,101,100,0,0,0,0,97,116,116,114,105,98,117,116,101,45,109,111,100,105,102,105,101,100,0,0,0,0,0,0,115,117,98,116,114,101,101,45,109,111,100,105,102,105,101,100,0,0,0,0,0,0,0,0,69,118,101,110,116,32,110,97,109,101,32,105,115,32,101,109,112,116,121,0,0,0,0,0,68,79,77,68,101,98,117,103,103,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE=env.__ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+272)|0;
  var __ZTVN7WebCore25InspectorDOMDebuggerAgentE=(H_BASE+312)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+480)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = 1 << i3;
 i22 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   i23 = HEAP32[i22 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i14, HEAP32[__ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE >> 2] | 0);
   __ZN7WebCore17InspectorDOMAgent11resolveNodeEPNS_4NodeERKN3WTF6StringE(i13, i23, i2, i14);
   i23 = i13 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i23 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i23 = i5 | 0;
   __ZN3WTF6StringC1EPKc(i15, H_BASE + 80 | 0);
   i26 = i16 | 0;
   HEAP32[i26 >> 2] = i24;
   i25 = (i24 | 0) == 0;
   if (!i25) {
    i27 = i24 + 4 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   }
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i15, i16);
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i26 = i27 + 4 | 0;
     i28 = i26 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i28 >> 2] = i29;
      break;
     }
     i29 = i26 - 4 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 63](i29);
    }
   } while (0);
   i27 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 | 0;
     i26 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i29 >> 2] = i26;
      break;
     }
    }
   } while (0);
   if (i4) {
    i30 = i2;
   } else {
    i30 = __ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE(i2) | 0;
   }
   i27 = i1 + 40 | 0;
   i26 = i1 + 32 | 0;
   i29 = i30;
   while (1) {
    i28 = HEAP32[i27 >> 2] | 0;
    i31 = HEAP32[i26 >> 2] | 0;
    i32 = i29;
    i33 = i32 + ~(i32 << 15) | 0;
    i32 = (i33 >>> 10 ^ i33) * 9 & -1;
    i33 = i32 >>> 6 ^ i32;
    i32 = i33 + ~(i33 << 11) | 0;
    i33 = i32 >>> 16 ^ i32;
    L30 : do {
     if ((i31 | 0) == 0) {
      i34 = 0;
     } else {
      i32 = i33 & i28;
      i35 = i31 + (i32 << 3) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == (i29 | 0)) {
       i37 = i35;
      } else {
       i35 = (i33 >>> 23) + ~i33 | 0;
       i38 = i35 << 12 ^ i35;
       i35 = i38 >>> 7 ^ i38;
       i38 = i35 << 2 ^ i35;
       i35 = i38 >>> 20 ^ i38 | 1;
       i38 = 0;
       i39 = i32;
       i32 = i36;
       while (1) {
        if ((i32 | 0) == 0) {
         i34 = 0;
         break L30;
        }
        i36 = (i38 | 0) == 0 ? i35 : i38;
        i40 = i36 + i39 & i28;
        i41 = i31 + (i40 << 3) | 0;
        i42 = HEAP32[i41 >> 2] | 0;
        if ((i42 | 0) == (i29 | 0)) {
         i37 = i41;
         break;
        } else {
         i38 = i36;
         i39 = i40;
         i32 = i42;
        }
       }
      }
      if ((i37 | 0) == 0) {
       i34 = 0;
       break;
      }
      i34 = HEAP32[i37 + 4 >> 2] | 0;
     }
    } while (0);
    if ((i34 & i21 | 0) != 0) {
     break;
    }
    i31 = __ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE(i29) | 0;
    if ((i31 | 0) == 0) {
     break;
    } else {
     i29 = i31;
    }
   }
   __ZN3WTF6StringC1EPKc(i17, H_BASE + 64 | 0);
   __ZN9Inspector19InspectorBasicValue6createEb(i10, i4);
   i26 = i9 | 0;
   i27 = i10 | 0;
   i31 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i26 >> 2] = i31;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i17, i9);
   i31 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i26 = i31 + 4 | 0;
     i28 = i26 | 0;
     i33 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) != 0) {
      HEAP32[i28 >> 2] = i33;
      break;
     }
     i33 = i26 - 4 | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 63](i33);
    }
   } while (0);
   i31 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i33 = i31 + 4 | 0;
     i26 = i33 | 0;
     i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i26 >> 2] = i28;
      break;
     }
     i28 = i33 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
    }
   } while (0);
   i31 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i27 = i31 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i27 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if (i25) {
    i43 = i29;
    i44 = i23;
    break;
   }
   i31 = i24 + 4 | 0;
   i28 = i31 | 0;
   i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) != 0) {
    HEAP32[i28 >> 2] = i27;
    i43 = i29;
    i44 = i23;
    break;
   }
   i27 = i31 - 4 | 0;
   if ((i27 | 0) == 0) {
    i43 = i29;
    i44 = i23;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 63](i27);
   i43 = i29;
   i44 = i23;
  } else {
   i43 = i2;
   i44 = i5 | 0;
  }
 } while (0);
 i5 = __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(HEAP32[i22 >> 2] | 0, i43) | 0;
 __ZN3WTF6StringC1EPKc(i18, H_BASE + 56 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i5 | 0));
 i5 = i7 | 0;
 i43 = i8 | 0;
 i8 = HEAP32[i43 >> 2] | 0;
 HEAP32[i43 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i44, i18, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i8 = i5 | 0;
   i22 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i8 >> 2] = i22;
    break;
   }
   i22 = i5 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i7 = HEAP32[i43 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i43 = i7 + 4 | 0;
   i22 = i43 | 0;
   i5 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i22 >> 2] = i5;
    break;
   }
   i5 = i43 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 | 0;
   i5 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i18 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i19, H_BASE + 48 | 0);
 if ((i3 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i20, H_BASE + 208 | 0);
 } else if ((i3 | 0) == 1) {
  __ZN3WTF6StringC1EPKc(i20, H_BASE + 184 | 0);
 } else if ((i3 | 0) == 2) {
  __ZN3WTF6StringC1EPKc(i20, H_BASE + 168 | 0);
 } else {
  __ZN3WTF6StringC1EPKc(i20, H_BASE + 520 | 0);
 }
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i20);
 i3 = i11 | 0;
 i7 = i12 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i44, i19, i11);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 + 4 | 0;
   i44 = i3 | 0;
   i12 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i44 >> 2] = i12;
    break;
   }
   i12 = i3 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
  }
 } while (0);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 + 4 | 0;
   i12 = i7 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i11 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i20 = i11 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i19 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i19 = i11 | 0;
 i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i19 >> 2] = i3;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent22willSendXMLHttpRequestERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = 0;
 L1 : do {
  if ((HEAP8[i1 + 93 | 0] & 1) == 0) {
   i15 = HEAP32[i1 + 72 >> 2] | 0;
   i16 = HEAP32[i1 + 76 >> 2] | 0;
   i17 = i15 + (i16 << 2) | 0;
   if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
    i18 = 28;
    break;
   }
   L4 : do {
    if ((i16 | 0) == 0) {
     i19 = i15;
    } else {
     i20 = i15;
     while (1) {
      i21 = HEAP32[i20 >> 2] | 0;
      if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
       i19 = i20;
       break L4;
      }
      i21 = i20 + 4 | 0;
      if ((i21 | 0) == (i17 | 0)) {
       i18 = 28;
       break L1;
      } else {
       i20 = i21;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i17 | 0)) {
    i18 = 28;
    break;
   }
   i15 = i2 | 0;
   i16 = i19;
   while (1) {
    i20 = HEAP32[i15 >> 2] | 0;
    if ((i20 | 0) != 0) {
     i22 = i16 | 0;
     if ((__ZN3WTF10StringImpl4findEPS0_j(i20, HEAP32[i22 >> 2] | 0, 0) | 0) != -1) {
      break;
     }
    }
    i20 = i16 + 4 | 0;
    if ((i20 | 0) == (i17 | 0)) {
     i18 = 28;
     break L1;
    } else {
     i23 = i20;
    }
    while (1) {
     i20 = HEAP32[i23 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i23 + 4 | 0;
     if ((i20 | 0) == (i17 | 0)) {
      i18 = 28;
      break L1;
     } else {
      i23 = i20;
     }
    }
    if ((i23 | 0) == (i17 | 0)) {
     i18 = 28;
     break L1;
    } else {
     i16 = i23;
    }
   }
   i16 = HEAP32[i22 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i16;
   if ((i17 | 0) == 0) {
    i24 = i16;
    break;
   }
   i16 = i17 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i18 = 28;
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    i18 = 28;
    break;
   }
  } else {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 520 | 0);
   i15 = i9 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i17 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i16;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i15 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i18 = 28;
    break;
   }
   i20 = i17 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i18 = 28;
    break;
   } else {
    HEAP32[i20 >> 2] = i16;
    i18 = 28;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 28) {
  i24 = HEAP32[i14 >> 2] | 0;
 }
 do {
  if ((i24 | 0) != 0) {
   __ZN9Inspector15InspectorObject6createEv(i10);
   i18 = i10 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = i9 | 0;
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 16 | 0);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
   i22 = i4 | 0;
   i23 = i5 | 0;
   i19 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   HEAP32[i22 >> 2] = i19;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i18, i11, i4);
   i19 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i22 = i19 + 4 | 0;
     i16 = i22 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i16 >> 2] = i20;
      break;
     }
     i20 = i22 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
   } while (0);
   i19 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i15 = i19 + 4 | 0;
     i20 = i15 | 0;
     i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i20 >> 2] = i22;
      break;
     }
     i22 = i15 - 4 | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
    }
   } while (0);
   i19 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i23 = i19 | 0;
     i22 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i23 >> 2] = i22;
      break;
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 8 | 0);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i2);
   i19 = i6 | 0;
   i22 = i7 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   HEAP32[i19 >> 2] = i23;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i18, i12, i6);
   i23 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i19 = i23 + 4 | 0;
     i15 = i19 | 0;
     i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i15 >> 2] = i20;
      break;
     }
     i20 = i19 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
   } while (0);
   i23 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i18 = i23 + 4 | 0;
     i20 = i18 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i18 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   i23 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i22 = i23 | 0;
     i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i22 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i1 + 24 >> 2] | 0;
   i19 = i13 | 0;
   HEAP32[i19 >> 2] = i9;
   __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i23, 23, i13);
   i23 = HEAP32[i19 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i19 = i23 + 4 | 0;
   i23 = i19 | 0;
   i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i23 >> 2] = i22;
    break;
   }
   i22 = i19 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i14 = i13 | 0;
 i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i14 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent16didRemoveDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_(i2, i4) | 0;
 i1 = __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(HEAP32[i4 >> 2] | 0) | 0;
 i4 = __ZN3WTF18fastMallocGoodSizeEj(4) | 0;
 i8 = __ZN3WTF10fastMallocEj(i4) | 0;
 i9 = i8;
 if ((i8 | 0) != 0) {
  HEAP32[i9 >> 2] = i1;
 }
 i1 = i6;
 i8 = i7;
 i10 = i9;
 i9 = i4 >>> 2;
 i4 = 1;
 L7 : while (1) {
  i11 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i12 = 6;
   break;
  }
  i13 = i11;
  i11 = i10 + (i13 << 2) | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  HEAP32[i5 >> 2] = i14;
  if ((i4 | 0) == 0) {
   i12 = 8;
   break;
  }
  do {
   if ((i14 | 0) == 0) {
    i15 = i10;
    i16 = i9;
    i17 = i13;
   } else {
    __ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_(i2, i5) | 0;
    i18 = __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(HEAP32[i5 >> 2] | 0) | 0;
    HEAP32[i6 >> 2] = i18;
    if ((i13 | 0) == (i9 | 0)) {
     do {
      if (i10 >>> 0 > i6 >>> 0) {
       i12 = 14;
      } else {
       if ((i10 + (i9 << 2) | 0) >>> 0 <= i6 >>> 0) {
        i12 = 14;
        break;
       }
       i19 = i1 - i10 >> 2;
       i20 = i9 + 1 + (i9 >>> 2) | 0;
       i21 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
       i20 = i21 >>> 0 > i4 >>> 0 ? i21 : i4;
       do {
        if (i9 >>> 0 < i20 >>> 0) {
         if (i20 >>> 0 > 1073741823 >>> 0) {
          i12 = 21;
          break L7;
         }
         i21 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0;
         i22 = i21 >>> 2;
         i23 = __ZN3WTF10fastMallocEj(i21) | 0;
         i21 = i23;
         i24 = i10;
         _memcpy(i23 | 0, i24 | 0, i9 << 2) | 0;
         if ((i10 | 0) == 0) {
          i25 = i21;
          i26 = i22;
          break;
         }
         i23 = (i21 | 0) == (i10 | 0);
         __ZN3WTF8fastFreeEPv(i24);
         i25 = i23 ? 0 : i21;
         i26 = i23 ? 0 : i22;
        } else {
         i25 = i10;
         i26 = i9;
        }
       } while (0);
       i27 = i25 + (i19 << 2) | 0;
       i28 = i25;
       i29 = i26;
      }
     } while (0);
     do {
      if ((i12 | 0) == 14) {
       i12 = 0;
       i20 = i9 + 1 + (i9 >>> 2) | 0;
       i22 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
       i20 = i22 >>> 0 > i4 >>> 0 ? i22 : i4;
       if (i9 >>> 0 >= i20 >>> 0) {
        i27 = i6;
        i28 = i10;
        i29 = i9;
        break;
       }
       if (i20 >>> 0 > 1073741823 >>> 0) {
        i12 = 16;
        break L7;
       }
       i22 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0;
       i20 = i22 >>> 2;
       i23 = __ZN3WTF10fastMallocEj(i22) | 0;
       i22 = i23;
       i21 = i10;
       _memcpy(i23 | 0, i21 | 0, i9 << 2) | 0;
       if ((i10 | 0) == 0) {
        i27 = i6;
        i28 = i22;
        i29 = i20;
        break;
       }
       i23 = (i22 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i21);
       i27 = i6;
       i28 = i23 ? 0 : i22;
       i29 = i23 ? 0 : i20;
      }
     } while (0);
     HEAP32[i28 + (i9 << 2) >> 2] = HEAP32[i27 >> 2];
     i30 = i28;
     i31 = i29;
    } else {
     HEAP32[i11 >> 2] = i18;
     i30 = i10;
     i31 = i9;
    }
    i20 = __ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE(HEAP32[i5 >> 2] | 0) | 0;
    HEAP32[i7 >> 2] = i20;
    if ((i4 | 0) != (i31 | 0)) {
     HEAP32[i30 + (i4 << 2) >> 2] = i20;
     i15 = i30;
     i16 = i31;
     i17 = i4 + 1 | 0;
     break;
    }
    i20 = i4 + 1 | 0;
    do {
     if (i30 >>> 0 > i7 >>> 0) {
      i12 = 30;
     } else {
      if ((i30 + (i4 << 2) | 0) >>> 0 <= i7 >>> 0) {
       i12 = 30;
       break;
      }
      i23 = i8 - i30 >> 2;
      i22 = i20 + (i4 >>> 2) | 0;
      i21 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
      i22 = i21 >>> 0 > i20 >>> 0 ? i21 : i20;
      do {
       if (i4 >>> 0 < i22 >>> 0) {
        if (i22 >>> 0 > 1073741823 >>> 0) {
         i12 = 37;
         break L7;
        }
        i21 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
        i24 = i21 >>> 2;
        i32 = __ZN3WTF10fastMallocEj(i21) | 0;
        i21 = i32;
        i33 = i30;
        _memcpy(i32 | 0, i33 | 0, i4 << 2) | 0;
        if ((i30 | 0) == 0) {
         i34 = i21;
         i35 = i24;
         break;
        }
        i32 = (i21 | 0) == (i30 | 0);
        __ZN3WTF8fastFreeEPv(i33);
        i34 = i32 ? 0 : i21;
        i35 = i32 ? 0 : i24;
       } else {
        i34 = i30;
        i35 = i4;
       }
      } while (0);
      i36 = i34 + (i23 << 2) | 0;
      i37 = i34;
      i38 = i35;
     }
    } while (0);
    do {
     if ((i12 | 0) == 30) {
      i12 = 0;
      i18 = i20 + (i4 >>> 2) | 0;
      i22 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
      i18 = i22 >>> 0 > i20 >>> 0 ? i22 : i20;
      if (i4 >>> 0 >= i18 >>> 0) {
       i36 = i7;
       i37 = i30;
       i38 = i4;
       break;
      }
      if (i18 >>> 0 > 1073741823 >>> 0) {
       i12 = 32;
       break L7;
      }
      i22 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 2) | 0;
      i18 = i22 >>> 2;
      i19 = __ZN3WTF10fastMallocEj(i22) | 0;
      i22 = i19;
      i24 = i30;
      _memcpy(i19 | 0, i24 | 0, i4 << 2) | 0;
      if ((i30 | 0) == 0) {
       i36 = i7;
       i37 = i22;
       i38 = i18;
       break;
      }
      i19 = (i22 | 0) == (i30 | 0);
      __ZN3WTF8fastFreeEPv(i24);
      i36 = i7;
      i37 = i19 ? 0 : i22;
      i38 = i19 ? 0 : i18;
     }
    } while (0);
    HEAP32[i37 + (i4 << 2) >> 2] = HEAP32[i36 >> 2];
    i15 = i37;
    i16 = i38;
    i17 = i20;
   }
  } while (0);
  if ((i17 | 0) == 0) {
   i12 = 43;
   break;
  } else {
   i10 = i15;
   i9 = i16;
   i4 = i17;
  }
 }
 if ((i12 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 16) {
  _WTFCrash();
 } else if ((i12 | 0) == 21) {
  _WTFCrash();
 } else if ((i12 | 0) == 32) {
  _WTFCrash();
 } else if ((i12 | 0) == 37) {
  _WTFCrash();
 } else if ((i12 | 0) == 43) {
  if ((i15 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent26pauseOnNativeEventIfNeededEbRKN3WTF6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i2 ? H_BASE + 96 | 0 : H_BASE + 112 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i16 = 0;
  } else {
   i3 = i2 | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i17 + 2 | 0;
   HEAP32[i3 >> 2] = i17 + 4;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i16 = i2;
    break;
   } else {
    HEAP32[i3 >> 2] = i18;
    i16 = i2;
    break;
   }
  }
 } while (0);
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = i16;
 i18 = (i16 | 0) == 0;
 if (!i18) {
  i3 = i16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i8, i15, i9);
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i2 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  _WTFCrash();
 }
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if (!i18) {
   i8 = i16 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i8 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i16 = i1 + 92 | 0;
 L25 : do {
  if ((HEAP8[i16] & 1) == 0) {
   i18 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i1 + 60 >> 2] | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i2 = HEAP32[i8 + 16 >> 2] | 0;
   if (i2 >>> 0 > 127 >>> 0) {
    i19 = i2 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i8) | 0;
   }
   i8 = (i19 >>> 23) + ~i19 | 0;
   i2 = i8 << 12 ^ i8;
   i8 = i2 >>> 7 ^ i2;
   i2 = i8 << 2 ^ i8;
   i8 = i2 >>> 20 ^ i2 | 1;
   i2 = i19;
   i3 = 0;
   while (1) {
    i17 = i2 & i15;
    i20 = i18 + (i17 << 2) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = i21;
    if ((i22 | 0) == 0) {
     break L25;
    } else if ((i22 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i21, HEAP32[i9 >> 2] | 0) | 0) {
      break;
     }
    }
    i21 = (i3 | 0) == 0 ? i8 : i3;
    i2 = i21 + i17 | 0;
    i3 = i21;
   }
   if ((i20 | 0) != 0) {
    i23 = 28;
   }
  } else {
   HEAP8[i16] = 0;
   i23 = 28;
  }
 } while (0);
 do {
  if ((i23 | 0) == 28) {
   __ZN9Inspector15InspectorObject6createEv(i11);
   i16 = i11 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 32 | 0);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i10);
   i16 = i6 | 0;
   i19 = i7 | 0;
   i3 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i16 >> 2] = i3;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20 | 0, i12, i6);
   i3 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i16 = i3 + 4 | 0;
     i2 = i16 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i2 >> 2] = i8;
      break;
     }
     i8 = i16 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
    }
   } while (0);
   i3 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 + 4 | 0;
     i16 = i8 | 0;
     i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i16 >> 2] = i2;
      break;
     }
     i2 = i8 - 4 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
    }
   } while (0);
   i3 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i19 = i3 | 0;
     i2 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i19 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   if (i4) {
    i2 = i13 | 0;
    HEAP32[i2 >> 2] = i20;
    __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i3, 25, i13);
    i19 = HEAP32[i2 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    i2 = i19 + 4 | 0;
    i19 = i2 | 0;
    i8 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i19 >> 2] = i8;
     break;
    }
    i8 = i2 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
    break;
   } else {
    i8 = i14 | 0;
    HEAP32[i8 >> 2] = i20;
    __ZN7WebCore22InspectorDebuggerAgent28schedulePauseOnNextStatementEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i3, 25, i14);
    i3 = HEAP32[i8 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i8 = i3 + 4 | 0;
    i3 = i8 | 0;
    i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) != 0) {
     HEAP32[i3 >> 2] = i2;
     break;
    }
    i2 = i8 - 4 | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i9 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i14 | 0;
 i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i9 >> 2] = i13;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent17willRemoveDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE(i2) | 0;
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 i11 = i2;
 i12 = i11 + ~(i11 << 15) | 0;
 i11 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i11 >>> 6 ^ i11;
 i11 = i12 + ~(i12 << 11) | 0;
 i12 = i11 >>> 16 ^ i11;
 i11 = (i10 | 0) == 0;
 L1 : do {
  if (!i11) {
   i13 = i9 & i12;
   i14 = i10 + (i13 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == (i2 | 0)) {
    i16 = i14;
   } else {
    i14 = (i12 >>> 23) + ~i12 | 0;
    i17 = i14 << 12 ^ i14;
    i14 = i17 >>> 7 ^ i17;
    i17 = i14 << 2 ^ i14;
    i14 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i13;
    i13 = i15;
    while (1) {
     if ((i13 | 0) == 0) {
      break L1;
     }
     i15 = (i17 | 0) == 0 ? i14 : i17;
     i19 = i15 + i18 & i9;
     i20 = i10 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i2 | 0)) {
      i16 = i20;
      break;
     } else {
      i17 = i15;
      i18 = i19;
      i13 = i21;
     }
    }
   }
   if ((i16 | 0) == 0) {
    break;
   }
   if ((HEAP32[i16 + 4 >> 2] & 262148 | 0) == 0) {
    break;
   }
   __ZN9Inspector15InspectorObject6createEv(i4);
   i13 = i4 | 0;
   i18 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i2, 2, 0, i18);
   i13 = HEAP32[i1 + 24 >> 2] | 0;
   i17 = i5 | 0;
   HEAP32[i17 >> 2] = i18;
   __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i13, 24, i5);
   i13 = HEAP32[i17 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i17 = i13 + 4 | 0;
   i13 = i17 | 0;
   i18 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i13 >> 2] = i18;
    STACKTOP = i3;
    return;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i8;
 i4 = i5 + ~(i5 << 15) | 0;
 i5 = (i4 >>> 10 ^ i4) * 9 & -1;
 i4 = i5 >>> 6 ^ i5;
 i5 = i4 + ~(i4 << 11) | 0;
 i4 = i5 >>> 16 ^ i5;
 if (i11) {
  STACKTOP = i3;
  return;
 }
 i11 = i9 & i4;
 i5 = i10 + (i11 << 3) | 0;
 i16 = HEAP32[i5 >> 2] | 0;
 L29 : do {
  if ((i16 | 0) == (i8 | 0)) {
   i22 = i5;
  } else {
   i12 = (i4 >>> 23) + ~i4 | 0;
   i18 = i12 << 12 ^ i12;
   i12 = i18 >>> 7 ^ i18;
   i18 = i12 << 2 ^ i12;
   i12 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i17 = i11;
   i13 = i16;
   while (1) {
    if ((i13 | 0) == 0) {
     break;
    }
    i14 = (i18 | 0) == 0 ? i12 : i18;
    i21 = i14 + i17 & i9;
    i19 = i10 + (i21 << 3) | 0;
    i15 = HEAP32[i19 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     i22 = i19;
     break L29;
    } else {
     i18 = i14;
     i17 = i21;
     i13 = i15;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i22 + 4 >> 2] & 65537 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i6);
 i22 = i6 | 0;
 i6 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i2, 0, 0, i6);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i6;
 __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i2, 24, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i7 + 4 | 0;
 i7 = i1 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  } else if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_jEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(HEAP32[i1 + 20 >> 2] | 0, i2, i3) | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = __ZN7WebCoreL14domTypeForNameEPN3WTF6StringERKS1_(i2, i4) | 0;
 if ((i3 | 0) == -1) {
  STACKTOP = i5;
  return;
 }
 i4 = 1 << i3;
 i2 = i1 + 32 | 0;
 i10 = HEAP32[i1 + 40 >> 2] | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 i12 = i9;
 i13 = i12 + ~(i12 << 15) | 0;
 i12 = (i13 >>> 10 ^ i13) * 9 & -1;
 i13 = i12 >>> 6 ^ i12;
 i12 = i13 + ~(i13 << 11) | 0;
 i13 = i12 >>> 16 ^ i12;
 L7 : do {
  if ((i11 | 0) == 0) {
   i14 = 0;
  } else {
   i12 = i13 & i10;
   i15 = i11 + (i12 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == (i9 | 0)) {
    i17 = i15;
   } else {
    i15 = (i13 >>> 23) + ~i13 | 0;
    i18 = i15 << 12 ^ i15;
    i15 = i18 >>> 7 ^ i18;
    i18 = i15 << 2 ^ i15;
    i15 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i12;
    i12 = i16;
    while (1) {
     if ((i12 | 0) == 0) {
      i14 = 0;
      break L7;
     }
     i16 = (i18 | 0) == 0 ? i15 : i18;
     i20 = i16 + i19 & i10;
     i21 = i11 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i9 | 0)) {
      i17 = i21;
      break;
     } else {
      i18 = i16;
      i19 = i20;
      i12 = i22;
     }
    }
   }
   if ((i17 | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i17 + 4 >> 2] | 0;
  }
 } while (0);
 i17 = i14 & ~i4;
 HEAP32[i7 >> 2] = i17;
 do {
  if ((i17 | 0) == 0) {
   __ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_(i2, i6) | 0;
  } else {
   __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i2 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
  }
 } while (0);
 if ((i3 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i7 >> 2] & i4 << 16 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(HEAP32[i6 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i23 = i7;
 }
 while (1) {
  __ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb(i1, i23, i4, 0);
  i23 = __ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE(i23) | 0;
  if ((i23 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 112 | 0);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = (i8 | 0) == 0;
 if (!i3) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = (i7 | 0) == 0;
 if (!i10) {
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 if (!i3) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i7;
 if (!i10) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (!i3) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i14 = i7 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i5, i6);
 __ZN7WebCore25InspectorDOMDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i8 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i6 >> 2] = i2;
 i9 = i1 + 32 | 0;
 i10 = HEAP32[i1 + 40 >> 2] | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = i2;
 i13 = i12 + ~(i12 << 15) | 0;
 i12 = (i13 >>> 10 ^ i13) * 9 & -1;
 i13 = i12 >>> 6 ^ i12;
 i12 = i13 + ~(i13 << 11) | 0;
 i13 = i12 >>> 16 ^ i12;
 L1 : do {
  if ((i11 | 0) == 0) {
   i14 = 0;
  } else {
   i12 = i10 & i13;
   i15 = i11 + (i12 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == (i2 | 0)) {
    i17 = i15;
   } else {
    i15 = (i13 >>> 23) + ~i13 | 0;
    i18 = i15 << 12 ^ i15;
    i15 = i18 >>> 7 ^ i18;
    i18 = i15 << 2 ^ i15;
    i15 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i12;
    i12 = i16;
    while (1) {
     if ((i12 | 0) == 0) {
      i14 = 0;
      break L1;
     }
     i16 = (i18 | 0) == 0 ? i15 : i18;
     i20 = i16 + i19 & i10;
     i21 = i11 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i17 = i21;
      break;
     } else {
      i18 = i16;
      i19 = i20;
      i12 = i22;
     }
    }
   }
   if ((i17 | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i17 + 4 >> 2] | 0;
  }
 } while (0);
 i17 = i3 << 16;
 if (i4) {
  i23 = i14 | i17;
 } else {
  i23 = i14 & ~i17;
 }
 HEAP32[i7 >> 2] = i23;
 do {
  if ((i23 | 0) == 0) {
   __ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_(i9, i6) | 0;
   i24 = 0;
  } else {
   __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i9 | 0, i6, i7);
   i17 = HEAP32[i7 >> 2] | 0;
   if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
    i24 = i17;
    break;
   }
   HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = i17;
   i24 = i17;
  }
 } while (0);
 i8 = ~i24 & i3;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(HEAP32[i6 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i25 = i3;
 }
 while (1) {
  __ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb(i1, i25, i8, i4);
  i25 = __ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE(i25) | 0;
  if ((i25 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 96 | 0);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = (i8 | 0) == 0;
 if (!i3) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = (i7 | 0) == 0;
 if (!i10) {
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 if (!i3) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i7;
 if (!i10) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (!i3) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i14 = i7 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i5, i6);
 __ZN7WebCore25InspectorDOMDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i8 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 112 | 0);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = (i8 | 0) == 0;
 if (!i3) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = (i7 | 0) == 0;
 if (!i10) {
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 if (!i3) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i7;
 if (!i10) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (!i3) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i14 = i7 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i5, i6);
 __ZN7WebCore25InspectorDOMDebuggerAgent13setBreakpointEPN3WTF6StringERKS2_(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i8 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 96 | 0);
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = (i8 | 0) == 0;
 if (!i3) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = (i7 | 0) == 0;
 if (!i10) {
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 if (!i3) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i7;
 if (!i10) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (!i3) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i14 = i7 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i5, i6);
 __ZN7WebCore25InspectorDOMDebuggerAgent13setBreakpointEPN3WTF6StringERKS2_(i1, i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i2 = i8 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i8 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = __ZN7WebCore17InspectorDOMAgent10assertNodeEPN3WTF6StringEi(HEAP32[i1 + 20 >> 2] | 0, i2, i3) | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = __ZN7WebCoreL14domTypeForNameEPN3WTF6StringERKS1_(i2, i4) | 0;
 if ((i3 | 0) == -1) {
  STACKTOP = i5;
  return;
 }
 i4 = 1 << i3;
 i2 = i1 + 32 | 0;
 i10 = HEAP32[i1 + 40 >> 2] | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 i12 = i9;
 i13 = i12 + ~(i12 << 15) | 0;
 i12 = (i13 >>> 10 ^ i13) * 9 & -1;
 i13 = i12 >>> 6 ^ i12;
 i12 = i13 + ~(i13 << 11) | 0;
 i13 = i12 >>> 16 ^ i12;
 L7 : do {
  if ((i11 | 0) == 0) {
   i14 = 0;
  } else {
   i12 = i13 & i10;
   i15 = i11 + (i12 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == (i9 | 0)) {
    i17 = i15;
   } else {
    i15 = (i13 >>> 23) + ~i13 | 0;
    i18 = i15 << 12 ^ i15;
    i15 = i18 >>> 7 ^ i18;
    i18 = i15 << 2 ^ i15;
    i15 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i12;
    i12 = i16;
    while (1) {
     if ((i12 | 0) == 0) {
      i14 = 0;
      break L7;
     }
     i16 = (i18 | 0) == 0 ? i15 : i18;
     i20 = i16 + i19 & i10;
     i21 = i11 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i9 | 0)) {
      i17 = i21;
      break;
     } else {
      i18 = i16;
      i19 = i20;
      i12 = i22;
     }
    }
   }
   if ((i17 | 0) == 0) {
    i14 = 0;
    break;
   }
   i14 = HEAP32[i17 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = i14 | i4;
 __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_jEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i2 | 0, i6, i7);
 if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
 }
 if ((i3 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i3 = __ZN7WebCore17InspectorDOMAgent15innerFirstChildEPNS_4NodeE(HEAP32[i6 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i23 = i3;
 }
 while (1) {
  __ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb(i1, i23, i4, 1);
  i23 = __ZN7WebCore17InspectorDOMAgent16innerNextSiblingEPNS_4NodeE(i23) | 0;
  if ((i23 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent17willModifyDOMAttrEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 i8 = HEAP32[i1 + 32 >> 2] | 0;
 i9 = i2;
 i2 = i9 + ~(i9 << 15) | 0;
 i9 = (i2 >>> 10 ^ i2) * 9 & -1;
 i2 = i9 >>> 6 ^ i9;
 i9 = i2 + ~(i2 << 11) | 0;
 i2 = i9 >>> 16 ^ i9;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i7 & i2;
 i10 = i8 + (i9 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L4 : do {
  if ((i11 | 0) == (i6 | 0)) {
   i12 = i10;
  } else {
   i13 = (i2 >>> 23) + ~i2 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = i9;
   i16 = i11;
   while (1) {
    if ((i16 | 0) == 0) {
     break;
    }
    i17 = (i14 | 0) == 0 ? i13 : i14;
    i18 = i17 + i15 & i7;
    i19 = i8 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i6 | 0)) {
     i12 = i19;
     break L4;
    } else {
     i14 = i17;
     i15 = i18;
     i16 = i20;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i12 + 4 >> 2] & 131074 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i4);
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i6, 1, 0, i4);
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i6, 24, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent22didInvalidateStyleAttrEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 i8 = i2;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 & i9;
 i10 = i7 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L4 : do {
  if ((i11 | 0) == (i2 | 0)) {
   i12 = i10;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = i8;
   i16 = i11;
   while (1) {
    if ((i16 | 0) == 0) {
     break;
    }
    i17 = (i14 | 0) == 0 ? i13 : i14;
    i18 = i17 + i15 & i6;
    i19 = i7 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i2 | 0)) {
     i12 = i19;
     break L4;
    } else {
     i14 = i17;
     i15 = i18;
     i16 = i20;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i12 + 4 >> 2] & 131074 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i4);
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i2, 1, 0, i4);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i2, 24, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent17willInsertDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 i8 = i2;
 i9 = i8 + ~(i8 << 15) | 0;
 i8 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i8 >>> 6 ^ i8;
 i8 = i9 + ~(i9 << 11) | 0;
 i9 = i8 >>> 16 ^ i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 & i9;
 i10 = i7 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 L4 : do {
  if ((i11 | 0) == (i2 | 0)) {
   i12 = i10;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = i8;
   i16 = i11;
   while (1) {
    if ((i16 | 0) == 0) {
     break;
    }
    i17 = (i14 | 0) == 0 ? i13 : i14;
    i18 = i17 + i15 & i6;
    i19 = i7 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == (i2 | 0)) {
     i12 = i19;
     break L4;
    } else {
     i14 = i17;
     i15 = i18;
     i16 = i20;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i12 + 4 >> 2] & 65537 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i4);
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE(i1, i2, 0, 1, i4);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i2, 24, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i1 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 320;
 HEAP32[i1 + 12 >> 2] = H_BASE + 396;
 HEAP32[i1 + 16 >> 2] = H_BASE + 428;
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 76 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
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
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 56 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i9 = i6 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
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
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN9Inspector44InspectorDOMDebuggerBackendDispatcherHandlerD2Ev(i1 + 16 | 0);
 HEAP32[i2 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 320;
 HEAP32[i1 + 12 >> 2] = H_BASE + 396;
 HEAP32[i1 + 16 >> 2] = H_BASE + 428;
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 76 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
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
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 56 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 2) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i9 = i6 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
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
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN9Inspector44InspectorDOMDebuggerBackendDispatcherHandlerD2Ev(i1 + 16 | 0);
 HEAP32[i2 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 2 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 2) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 2) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 2) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN7WebCoreL14domTypeForNameEPN3WTF6StringERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 208 | 0) | 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 184 | 0) | 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 168 | 0) | 0) {
  i7 = 2;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 i6 = (i2 | 0) == 0;
 if (i6) {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = 0;
  i9 = i4;
  i10 = i5;
  i11 = i8;
 } else {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = i2;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i9 = i4;
  i10 = i5;
  i11 = i12;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 136 | 0, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
  return 0;
 }
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if (i6) {
  i7 = -1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = -1;
  STACKTOP = i3;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i1;
  i7 = -1;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent13hasBreakpointEPNS_4NodeEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = 1 << i3;
 i3 = i4 << 16;
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i2;
 i7 = i1 + ~(i1 << 15) | 0;
 i1 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i1 >>> 6 ^ i1;
 i1 = i7 + ~(i7 << 11) | 0;
 i7 = i1 >>> 16 ^ i1;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i3 | i4;
  i10 = i8 & i9;
  i11 = (i10 | 0) != 0;
  return i11 | 0;
 }
 i1 = i5 & i7;
 i12 = i6 + (i1 << 3) | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 L4 : do {
  if ((i13 | 0) == (i2 | 0)) {
   i14 = i12;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = i1;
   i18 = i13;
   while (1) {
    if ((i18 | 0) == 0) {
     i8 = 0;
     break;
    }
    i19 = (i16 | 0) == 0 ? i15 : i16;
    i20 = i19 + i17 & i5;
    i21 = i6 + (i20 << 3) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    if ((i22 | 0) == (i2 | 0)) {
     i14 = i21;
     break L4;
    } else {
     i16 = i19;
     i17 = i20;
     i18 = i22;
    }
   }
   i9 = i3 | i4;
   i10 = i8 & i9;
   i11 = (i10 | 0) != 0;
   return i11 | 0;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i8 = 0;
  i9 = i3 | i4;
  i10 = i8 & i9;
  i11 = (i10 | 0) != 0;
  return i11 | 0;
 }
 i8 = HEAP32[i14 + 4 >> 2] | 0;
 i9 = i3 | i4;
 i10 = i8 & i9;
 i11 = (i10 | 0) != 0;
 return i11 | 0;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent16didInsertDOMNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore17InspectorDOMAgent15innerParentNodeEPNS_4NodeE(i2) | 0;
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i6 = i3;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 L4 : do {
  if ((i5 | 0) == 0) {
   i8 = 0;
  } else {
   i6 = i7 & i4;
   i9 = i5 + (i6 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i3 | 0)) {
    i11 = i9;
   } else {
    i9 = (i7 >>> 23) + ~i7 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i6;
    i6 = i10;
    while (1) {
     if ((i6 | 0) == 0) {
      i8 = 0;
      break L4;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i4;
     i15 = i5 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i3 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i6 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i11 + 4 >> 2] | 0;
  }
 } while (0);
 i11 = (i8 >>> 16 | i8) & 1;
 if ((i11 | 0) == 0) {
  return;
 }
 __ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb(i1, i2, i11, 1);
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __Znwj(96) | 0;
 i9 = i8;
 HEAP32[i7 >> 2] = H_BASE + 256;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i8;
 HEAP32[i7 >> 2] = H_BASE + 280;
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i8 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i8 + 8 >> 2] = i2;
  } else {
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i8 + 8 >> 2] = i2;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i2 = i8 + 12 | 0;
 HEAP32[i7 >> 2] = H_BASE + 320;
 HEAP32[i2 >> 2] = H_BASE + 396;
 HEAP32[i8 + 16 >> 2] = H_BASE + 428;
 HEAP32[i8 + 20 >> 2] = i3;
 HEAP32[i8 + 24 >> 2] = i4;
 _memset(i8 + 28 | 0, 0, 66) | 0;
 HEAP32[i4 + 120 >> 2] = i2;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent13setBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, i1 + 52 | 0, i3, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 232 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 256;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 280;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
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
 i2 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = H_BASE + 320;
 HEAP32[i2 >> 2] = H_BASE + 396;
 HEAP32[i1 + 16 >> 2] = H_BASE + 428;
 HEAP32[i1 + 20 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = i4;
 _memset(i1 + 28 | 0, 0, 66) | 0;
 HEAP32[i4 + 120 >> 2] = i2;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgentC1EPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 256;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 280;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 488;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
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
 i2 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = H_BASE + 320;
 HEAP32[i2 >> 2] = H_BASE + 396;
 HEAP32[i1 + 16 >> 2] = H_BASE + 428;
 HEAP32[i1 + 20 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = i4;
 _memset(i1 + 28 | 0, 0, 66) | 0;
 HEAP32[i4 + 120 >> 2] = i2;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 __ZN9Inspector37InspectorDOMDebuggerBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_44InspectorDOMDebuggerBackendDispatcherHandlerE(i4, i3, i1 + 16 | 0);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i1 + 28 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 52 | 0, i3) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 232 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore25InspectorDOMDebuggerAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 68 >> 2] = 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1 + 92 | 0;
  HEAP8[i6] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 _memset(i3 | 0, 0, 16) | 0;
 i6 = i1 + 92 | 0;
 HEAP8[i6] = 0;
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i1 - 96 + 80 | 0;
 i1 = i5;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i5 + 72 | 0, i3, i3);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP8[i1 + 93 | 0] = 1;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i1 + 72 | 0, i3, i3);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP8[i1 + 93 | 0] = 1;
 STACKTOP = i2;
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
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = i1 - 96 + 80 | 0;
 i1 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i2 + 72 | 0, i3) | 0;
   return;
  }
 } while (0);
 HEAP8[i1 + 93 | 0] = 0;
 return;
}
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 96 + 84 | 0;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 68 >> 2] = 0;
 i1 = i2 + 32 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i2 + 92 | 0;
  i5 = i4;
  HEAP8[i5] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i1 | 0, 0, 16) | 0;
 i4 = i2 + 92 | 0;
 i5 = i4;
 HEAP8[i5] = 0;
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
function __ZN7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 72 | 0, i3) | 0;
   return;
  }
 } while (0);
 HEAP8[i1 + 93 | 0] = 0;
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 68 >> 2] = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 92 | 0;
  HEAP8[i4] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 i4 = i1 + 92 | 0;
 HEAP8[i4] = 0;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent7disableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 68 >> 2] = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 92 | 0;
  HEAP8[i4] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 i4 = i1 + 92 | 0;
 HEAP8[i4] = 0;
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 92 | 0;
  HEAP8[i4] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 i4 = i1 + 92 | 0;
 HEAP8[i4] = 0;
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_(i1 - 96 + 80 | 0, i2, i3);
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_(i1 - 96 + 80 | 0, i2, i3, i4);
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_(i1 - 96 + 80 | 0, i2, i3);
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_(i1 - 96 + 80 | 0, i2, i3);
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_(i1 - 96 + 80 | 0, i2, i3, i4);
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_(i1 - 96 + 80 | 0, i2, i3);
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent15discardBindingsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25InspectorDOMDebuggerAgent12discardAgentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 24 | 0;
 HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 84 | 0;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 68 >> 2] = i2;
 return;
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 80 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 84 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn16_N7WebCore25InspectorDOMDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i1 - 96 + 80 | 0);
 return;
}
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i1 - 96 + 84 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv(i1) {
 i1 = i1 | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 68 >> 2] = i1;
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
function __ZN7WebCore25InspectorDOMDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25InspectorDOMDebuggerAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgent8stepIntoEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 - 96 + 176 | 0] = 1;
 return;
}
function __ZThn12_N7WebCore25InspectorDOMDebuggerAgent8didPauseEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 - 96 + 176 | 0] = 0;
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore25InspectorDOMDebuggerAgent8stepIntoEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 92 | 0] = 1;
 return;
}
function __ZN7WebCore25InspectorDOMDebuggerAgent8didPauseEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 92 | 0] = 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv,b0,__ZN7WebCore25InspectorDOMDebuggerAgent12discardAgentEv,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,__ZN7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgent8didPauseEv,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN7WebCore25InspectorDOMDebuggerAgent29willDestroyFrontendAndBackendEv,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN7WebCore25InspectorDOMDebuggerAgent8stepIntoEv,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZN7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgent8stepIntoEv,b0,__ZN7WebCore25InspectorDOMDebuggerAgent8didPauseEv
  ,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv,b0,__ZN7WebCore25InspectorDOMDebuggerAgentD2Ev,b0,__ZThn16_N7WebCore25InspectorDOMDebuggerAgentD1Ev,b0,__ZThn16_N7WebCore25InspectorDOMDebuggerAgentD0Ev,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgentD0Ev,b0,__ZN7WebCore25InspectorDOMDebuggerAgentD0Ev,b0,__ZThn12_N7WebCore25InspectorDOMDebuggerAgentD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore25InspectorDOMDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b2,__ZN7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_,b2,__ZN7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_,b2,__ZN7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_,b2,__ZN7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_,b2,__ZN7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_,b2,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_,b2,__ZN7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3,v____cxa_pure_virtual__wrapper,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_,b5,__ZN7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_,b5,__ZN7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_,b5,__ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_,b5,__ZN7WebCore25InspectorDOMDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE,b5,b5,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE": __ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","_strlen","__ZN7WebCore25InspectorDOMDebuggerAgent17willRemoveDOMNodeEPNS_4NodeE","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_","__ZN7WebCore25InspectorDOMDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore25InspectorDOMDebuggerAgent13hasBreakpointEPNS_4NodeEi","__ZN7WebCore25InspectorDOMDebuggerAgent24updateSubtreeBreakpointsEPNS_4NodeEjb","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZThn12_N7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv","__ZN7WebCore25InspectorDOMDebuggerAgent22descriptionForDOMEventEPNS_4NodeEibPN9Inspector15InspectorObjectE","__ZN7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore25InspectorDOMDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore25InspectorDOMDebuggerAgent12discardAgentEv","__ZN7WebCore25InspectorDOMDebuggerAgent22willSendXMLHttpRequestERKN3WTF6StringE","__ZN7WebCore25InspectorDOMDebuggerAgent19removeDOMBreakpointEPN3WTF6StringEiRKS2_","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore25InspectorDOMDebuggerAgent16didRemoveDOMNodeEPNS_4NodeE","__ZN7WebCore25InspectorDOMDebuggerAgent18debuggerWasEnabledEv","_memset","__ZThn12_N7WebCore25InspectorDOMDebuggerAgent8didPauseEv","__ZN7WebCore25InspectorDOMDebuggerAgent26pauseOnNativeEventIfNeededEbRKN3WTF6StringEb","__ZN7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent31removeInstrumentationBreakpointEPN3WTF6StringERKS2_","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_jEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore25InspectorDOMDebuggerAgent15discardBindingsEv","__ZN7WebCore25InspectorDOMDebuggerAgent5clearEv","__ZN7WebCore25InspectorDOMDebuggerAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore25InspectorDOMDebuggerAgent22didInvalidateStyleAttrEPNS_4NodeE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent19removeXHRBreakpointEPN3WTF6StringERKS2_","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore25InspectorDOMDebuggerAgent8stepIntoEv","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv","__ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_","__ZN7WebCore25InspectorDOMDebuggerAgent13setBreakpointEPN3WTF6StringERKS2_","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore25InspectorDOMDebuggerAgent26setEventListenerBreakpointEPN3WTF6StringERKS2_","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZThn12_N7WebCore25InspectorDOMDebuggerAgent8stepIntoEv","__ZN7WebCore25InspectorDOMDebuggerAgent8didPauseEv","__ZThn12_N7WebCore25InspectorDOMDebuggerAgent19debuggerWasDisabledEv","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent28setInstrumentationBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_","__ZN7WebCore25InspectorDOMDebuggerAgentD2Ev","__ZN7WebCoreL14domTypeForNameEPN3WTF6StringERKS1_","__ZThn16_N7WebCore25InspectorDOMDebuggerAgentD1Ev","__ZN7WebCore25InspectorDOMDebuggerAgent16didInsertDOMNodeEPNS_4NodeE","__ZThn16_N7WebCore25InspectorDOMDebuggerAgentD0Ev","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore25InspectorDOMDebuggerAgent29removeEventListenerBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZThn12_N7WebCore25InspectorDOMDebuggerAgentD0Ev","__ZN7WebCore25InspectorDOMDebuggerAgent17willModifyDOMAttrEPNS_7ElementE","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore25InspectorDOMDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_","__ZThn16_N7WebCore25InspectorDOMDebuggerAgent16setDOMBreakpointEPN3WTF6StringEiRKS2_","__ZN7WebCore25InspectorDOMDebuggerAgentD0Ev","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore25InspectorDOMDebuggerAgent16setXHRBreakpointEPN3WTF6StringERKS2_","__ZThn12_N7WebCore25InspectorDOMDebuggerAgentD1Ev","__ZN7WebCore25InspectorDOMDebuggerAgent17willInsertDOMNodeEPNS_4NodeE","__ZN7WebCore25InspectorDOMDebuggerAgent7disableEv","__ZN7WebCore25InspectorDOMDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17InspectorDOMAgentEPNS_22InspectorDebuggerAgentE","__ZN3WTF7HashMapIPN7WebCore4NodeEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE6removeERKS3_"]

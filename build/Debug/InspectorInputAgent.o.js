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
H_BASE = parentModule["_malloc"](360 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 360;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19InspectorInputAgentC1EPNS_19InstrumentingAgentsEPNS_4PageE;
var __ZN7WebCore19InspectorInputAgentD1Ev;
/* memory initializer */ allocate([109,111,117,115,101,77,111,118,101,100,0,0,0,0,0,0,109,111,117,115,101,82,101,108,101,97,115,101,100,0,0,0,109,111,117,115,101,80,114,101,115,115,101,100,0,0,0,0,85,110,114,101,99,111,103,110,105,122,101,100,32,116,121,112,101,58,32,0,0,0,0,0,114,97,119,75,101,121,68,111,119,110,0,0,0,0,0,0,99,104,97,114,0,0,0,0,107,101,121,85,112,0,0,0,85,110,104,97,110,100,108,101,100,32,116,121,112,101,58,32,0,0,0,0,0,0,0,0,85,110,114,101,99,111,103,110,105,122,101,100,32,98,117,116,116,111,110,58,32,0,0,0,110,111,110,101,0,0,0,0,114,105,103,104,116,0,0,0,109,105,100,100,108,101,0,0,108,101,102,116,0,0,0,0,107,101,121,68,111,119,110,0,73,110,112,117,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14) {
  try {
    Module["dynCall_viiiiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+320)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+208)|0;
  var __ZTVN7WebCore19InspectorInputAgentE=(H_BASE+248)|0;
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
  var invoke_viiiiiiiiiiiiii=env.invoke_viiiiiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
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
function __ZN7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 48 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = i20 | 0;
 i22 = i20;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = i23 | 0;
 i25 = i23;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i26 = i3 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i26 >> 2] | 0, H_BASE + 40 | 0) | 0) {
   i27 = 6;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i26 >> 2] | 0, H_BASE + 24 | 0) | 0) {
    i27 = 7;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i26 >> 2] | 0, H_BASE + 8 | 0) | 0) {
    i27 = 5;
    break;
   }
   i3 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i28 = 0;
    } else {
     i29 = i3 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     i31 = i30 + 2 | 0;
     HEAP32[i29 >> 2] = i30 + 4;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      i28 = i3;
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      i28 = i3;
      break;
     }
    }
   } while (0);
   i3 = i16 | 0;
   HEAP32[i3 >> 2] = i28;
   i31 = (i28 | 0) == 0;
   if (!i31) {
    i29 = i28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i15, H_BASE + 56 | 0, i16);
   i29 = i15 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   i29 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i3 = i29 | 0;
     i32 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i3 >> 2] = i32;
      break;
     }
    }
   } while (0);
   if ((i30 | 0) == 0) {
    _WTFCrash();
   }
   i29 = i2 | 0;
   i32 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = i30;
   do {
    if ((i32 | 0) != 0) {
     i29 = i32 | 0;
     i3 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i29 >> 2] = i3;
      break;
     }
    }
   } while (0);
   if (i31) {
    STACKTOP = i10;
    return;
   }
   i32 = i28 | 0;
   i30 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    STACKTOP = i10;
    return;
   } else {
    HEAP32[i32 >> 2] = i30;
    STACKTOP = i10;
    return;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i6 >> 2] | 0;
 }
 do {
  if ((i8 | 0) == 0) {
   i34 = -1;
  } else {
   i6 = i8 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 184 | 0) | 0) {
    i34 = 0;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 176 | 0) | 0) {
    i34 = 1;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 168 | 0) | 0) {
    i34 = 2;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 160 | 0) | 0) {
    i34 = -1;
    break;
   }
   i28 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i28 | 0) == 0) {
     i35 = 0;
    } else {
     i6 = i28 | 0;
     i15 = HEAP32[i6 >> 2] | 0;
     i16 = i15 + 2 | 0;
     HEAP32[i6 >> 2] = i15 + 4;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      i35 = i28;
      break;
     } else {
      HEAP32[i6 >> 2] = i16;
      i35 = i28;
      break;
     }
    }
   } while (0);
   i28 = i14 | 0;
   HEAP32[i28 >> 2] = i35;
   i31 = (i35 | 0) == 0;
   if (!i31) {
    i16 = i35 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i13, H_BASE + 136 | 0, i14);
   i16 = i13 | 0;
   i6 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i16 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i28 = i16 | 0;
     i15 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i28 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((i6 | 0) == 0) {
    _WTFCrash();
   }
   i16 = i2 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i6;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     i28 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i16 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if (i31) {
    STACKTOP = i10;
    return;
   }
   i15 = i35 | 0;
   i6 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    STACKTOP = i10;
    return;
   } else {
    HEAP32[i15 >> 2] = i6;
    STACKTOP = i10;
    return;
   }
  }
 } while (0);
 i35 = i1 + 16 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i35 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
 HEAP32[i19 >> 2] = i4;
 HEAP32[i19 + 4 >> 2] = i5;
 __ZNK7WebCore6Widget25convertToContainingWindowERKNS_8IntPointE(i18, i1, i19);
 i19 = HEAP32[(HEAP32[i35 >> 2] | 0) + 20 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i19 >> 2] | 0) + 32 >> 2] | 0;
 HEAP32[i21 >> 2] = i4;
 HEAP32[i21 + 4 >> 2] = i5;
 i5 = i20 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 FUNCTION_TABLE_viii[i1 & 7](i25, i19, i22);
 i22 = HEAP32[i24 >> 2] | 0;
 i19 = HEAP32[i24 + 4 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i9 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  d37 = +__ZN3WTF11currentTimeEv();
 } else {
  d37 = +HEAPF64[i7 >> 3];
 }
 HEAP32[i23 >> 2] = i27;
 i7 = i23 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAPF64[i23 + 8 >> 3] = d37;
 if ((i33 & 8 | 0) == 0) {
  i38 = 0;
 } else {
  HEAP32[i7 >> 2] = 8;
  i38 = 8;
 }
 if ((i33 & 2 | 0) == 0) {
  i39 = i38;
 } else {
  i9 = i38 | 2;
  HEAP32[i7 >> 2] = i9;
  i39 = i9;
 }
 if ((i33 & 1 | 0) == 0) {
  i40 = i39;
 } else {
  i9 = i39 | 1;
  HEAP32[i7 >> 2] = i9;
  i40 = i9;
 }
 if ((i33 & 4 | 0) != 0) {
  HEAP32[i7 >> 2] = i40 | 4;
 }
 i40 = i23 + 16 | 0;
 i7 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i40 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i40 + 4 >> 2] = i7;
 i7 = i23 + 24 | 0;
 HEAP32[i7 >> 2] = i22;
 HEAP32[i7 + 4 >> 2] = i19;
 HEAP32[i23 + 32 >> 2] = i34;
 HEAP32[i23 + 36 >> 2] = i36;
 HEAP32[i23 + 40 >> 2] = 0;
 i36 = HEAP32[(HEAP32[(HEAP32[i35 >> 2] | 0) + 60 >> 2] | 0) + 472 >> 2] | 0;
 if ((i27 | 0) == 6) {
  __ZN7WebCore12EventHandler21handleMousePressEventERKNS_18PlatformMouseEventE(i36, i23) | 0;
  STACKTOP = i10;
  return;
 } else if ((i27 | 0) == 7) {
  __ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_18PlatformMouseEventE(i36, i23) | 0;
  STACKTOP = i10;
  return;
 } else if ((i27 | 0) == 5) {
  __ZN7WebCore12EventHandler20handleMouseMoveEventERKNS_18PlatformMouseEventEPNS_13HitTestResultEb(i36, i23, 0, 0) | 0;
  STACKTOP = i10;
  return;
 } else {
  i23 = HEAP32[i26 >> 2] | 0;
  do {
   if ((i23 | 0) == 0) {
    i41 = 0;
   } else {
    i26 = i23 | 0;
    i36 = HEAP32[i26 >> 2] | 0;
    i27 = i36 + 2 | 0;
    HEAP32[i26 >> 2] = i36 + 4;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     i41 = i23;
     break;
    } else {
     HEAP32[i26 >> 2] = i27;
     i41 = i23;
     break;
    }
   }
  } while (0);
  i23 = i12 | 0;
  HEAP32[i23 >> 2] = i41;
  i27 = (i41 | 0) == 0;
  if (!i27) {
   i26 = i41 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
  }
  __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i11, H_BASE + 112 | 0, i12);
  i12 = i11 | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i12 = HEAP32[i23 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i23 = i12 | 0;
    i26 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i23 >> 2] = i26;
     break;
    }
   }
  } while (0);
  if ((i11 | 0) == 0) {
   _WTFCrash();
  }
  i12 = i2 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = i11;
  do {
   if ((i2 | 0) != 0) {
    i11 = i2 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i11 >> 2] = i12;
     break;
    }
   }
  } while (0);
  if (i27) {
   STACKTOP = i10;
   return;
  }
  i27 = i41 | 0;
  i2 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i41);
   STACKTOP = i10;
   return;
  } else {
   HEAP32[i27 >> 2] = i2;
   STACKTOP = i10;
   return;
  }
 }
}
function __ZN7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 var i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i16 = i15 | 0;
 i17 = i15 + 8 | 0;
 i18 = i15 + 16 | 0;
 i19 = i15 + 64 | 0;
 i20 = i15 + 72 | 0;
 i21 = i15 + 80 | 0;
 i22 = i3 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i22 >> 2] | 0, H_BASE + 192 | 0) | 0) {
   i23 = 1;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i22 >> 2] | 0, H_BASE + 104 | 0) | 0) {
    i23 = 2;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i22 >> 2] | 0, H_BASE + 96 | 0) | 0) {
    i23 = 4;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i22 >> 2] | 0, H_BASE + 80 | 0) | 0) {
    i23 = 3;
    break;
   }
   i3 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i24 = 0;
    } else {
     i25 = i3 | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     i27 = i26 + 2 | 0;
     HEAP32[i25 >> 2] = i26 + 4;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      i24 = i3;
      break;
     } else {
      HEAP32[i25 >> 2] = i27;
      i24 = i3;
      break;
     }
    }
   } while (0);
   i3 = i17 | 0;
   HEAP32[i3 >> 2] = i24;
   i27 = (i24 | 0) == 0;
   if (!i27) {
    i25 = i24 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i16, H_BASE + 56 | 0, i17);
   i25 = i16 | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   i25 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i3 = i25 | 0;
     i28 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i3 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if ((i26 | 0) == 0) {
    _WTFCrash();
   }
   i25 = i2 | 0;
   i28 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = i26;
   do {
    if ((i28 | 0) != 0) {
     i25 = i28 | 0;
     i3 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i25 >> 2] = i3;
      break;
     }
    }
   } while (0);
   if (i27) {
    STACKTOP = i15;
    return;
   }
   i28 = i24 | 0;
   i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    STACKTOP = i15;
    return;
   } else {
    HEAP32[i28 >> 2] = i26;
    STACKTOP = i15;
    return;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i19, H_BASE + 360 | 0);
   i29 = 1;
   i30 = 0;
  } else {
   i24 = HEAP32[i6 >> 2] | 0;
   HEAP32[i19 >> 2] = i24;
   if ((i24 | 0) == 0) {
    i29 = 0;
    i30 = 1;
    break;
   }
   i2 = i24 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i29 = 0;
   i30 = 1;
  }
 } while (0);
 do {
  if ((i7 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i20, H_BASE + 360 | 0);
   i31 = 1;
   i32 = 0;
  } else {
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i20 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i31 = 0;
    i32 = 1;
    break;
   }
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i31 = 0;
   i32 = 1;
  }
 } while (0);
 do {
  if ((i8 | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i21, H_BASE + 360 | 0);
   i33 = 1;
   i34 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i21 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i33 = 0;
    i34 = 1;
    break;
   }
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i33 = 0;
   i34 = 1;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i9 >> 2] | 0;
 }
 if ((i10 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i10 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  i37 = 0;
 } else {
  i37 = HEAP32[i11 >> 2] | 0;
 }
 if ((i12 | 0) == 0) {
  i38 = 0;
 } else {
  i38 = HEAP8[i12] & 1;
 }
 if ((i13 | 0) == 0) {
  i39 = 0;
 } else {
  i39 = HEAP8[i13] & 1;
 }
 if ((i14 | 0) == 0) {
  i40 = 0;
 } else {
  i40 = HEAP8[i14] & 1;
 }
 if ((i4 | 0) == 0) {
  i41 = 0;
 } else {
  i41 = HEAP32[i4 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  d42 = +__ZN3WTF11currentTimeEv();
 } else {
  d42 = +HEAPF64[i5 >> 3];
 }
 HEAP32[i18 >> 2] = i23;
 HEAP32[i18 + 4 >> 2] = i41;
 HEAPF64[i18 + 8 >> 3] = d42;
 i41 = i18 + 16 | 0;
 i23 = i19 | 0;
 i19 = HEAP32[i23 >> 2] | 0;
 HEAP32[i41 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i5 = i19 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i18 + 20 | 0;
 i19 = i20 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP32[i5 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i4 = i20 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 24 | 0;
 i20 = i21 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 HEAP32[i4 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i14 = i21 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 HEAP32[i18 + 28 >> 2] = i35;
 HEAP32[i18 + 32 >> 2] = i36;
 HEAP32[i18 + 36 >> 2] = i37;
 HEAP8[i18 + 40 | 0] = i38;
 HEAP8[i18 + 41 | 0] = i39;
 HEAP8[i18 + 42 | 0] = i40;
 do {
  if (i33) {
   i40 = HEAP32[i20 >> 2] | 0;
   if ((i40 | 0) == 0) {
    break;
   }
   i39 = i40 | 0;
   i38 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i38 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i39 >> 2] = i38;
    break;
   }
  }
 } while (0);
 do {
  if (i34) {
   i33 = HEAP32[i20 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   i38 = i33 | 0;
   i39 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i38 >> 2] = i39;
    break;
   }
  }
 } while (0);
 do {
  if (i31) {
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i34 = i20 | 0;
   i39 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i34 >> 2] = i39;
    break;
   }
  }
 } while (0);
 do {
  if (i32) {
   i31 = HEAP32[i19 >> 2] | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   i39 = i31 | 0;
   i34 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i39 >> 2] = i34;
    break;
   }
  }
 } while (0);
 do {
  if (i29) {
   i19 = HEAP32[i23 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i32 = i19 | 0;
   i34 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i32 >> 2] = i34;
    break;
   }
  }
 } while (0);
 do {
  if (i30) {
   i29 = HEAP32[i23 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i34 = i29 | 0;
   i32 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i34 >> 2] = i32;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12EventHandler8keyEventERKNS_21PlatformKeyboardEventE(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 60 >> 2] | 0) + 472 >> 2] | 0, i18) | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i4 = i18 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i5 = i18 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i41 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i15;
  return;
 }
 i41 = i18 | 0;
 i1 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i18);
  STACKTOP = i15;
  return;
 } else {
  HEAP32[i41 >> 2] = i1;
  STACKTOP = i15;
  return;
 }
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
function __ZN7WebCore19InspectorInputAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 __ZN9Inspector31InspectorInputBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_38InspectorInputBackendDispatcherHandlerE(i4, i3, i1 + 12 | 0);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i1 + 20 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19InspectorInputAgentC2EPNS_19InstrumentingAgentsEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 216;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 328;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 328;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 256;
 HEAP32[i1 + 12 >> 2] = H_BASE + 292;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19InspectorInputAgentC1EPNS_19InstrumentingAgentsEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 216;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 328;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 328;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 256;
 HEAP32[i1 + 12 >> 2] = H_BASE + 292;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZThn12_N7WebCore19InspectorInputAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 - 24 + 12 | 0;
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 HEAP32[i2 + 12 >> 2] = H_BASE + 292;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN9Inspector38InspectorInputBackendDispatcherHandlerD2Ev(i2 + 12 | 0);
 HEAP32[i1 >> 2] = H_BASE + 216;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = i2;
  __ZdlPv(i7);
  return;
 }
 i3 = i1 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i7 = i2;
  __ZdlPv(i7);
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  i7 = i2;
  __ZdlPv(i7);
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viiiiiiiiiiiiii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_viiiiiiiiiiiiii + 4;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_viiiiiiiii + 4;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 2;
}
function __ZN7WebCore19InspectorInputAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 256;
 HEAP32[i1 + 12 >> 2] = H_BASE + 292;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN9Inspector38InspectorInputBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i1;
  __ZdlPv(i7);
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
}
function __ZThn12_N7WebCore19InspectorInputAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 24 + 12 | 0;
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 HEAP32[i2 + 12 >> 2] = H_BASE + 292;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN9Inspector38InspectorInputBackendDispatcherHandlerD2Ev(i2 + 12 | 0);
 HEAP32[i1 >> 2] = H_BASE + 216;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
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
function __ZN7WebCore19InspectorInputAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 256;
 HEAP32[i1 + 12 >> 2] = H_BASE + 292;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN9Inspector38InspectorInputBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 216;
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
function __ZN7WebCore19InspectorInputAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 256;
 HEAP32[i1 + 12 >> 2] = H_BASE + 292;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 __ZN9Inspector38InspectorInputBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 216;
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
function __ZThn12_N7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 __ZN7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_(i1 - 24 + 12 | 0, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14);
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
function dynCall_viiiiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 FUNCTION_TABLE_viiiiiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0, i15 | 0);
}
function __ZN7WebCore19InspectorInputAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZThn12_N7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_(i1 - 24 + 12 | 0, i2, i3, i4, i5, i6, i7, i8, i9);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
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
 HEAP32[i1 >> 2] = H_BASE + 216;
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
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
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
 HEAP32[i1 >> 2] = H_BASE + 216;
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
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 FUNCTION_TABLE_viiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 abort(1);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b5(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(5);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZN7WebCore19InspectorInputAgent29willDestroyFrontendAndBackendEv,b0,__ZN7WebCore19InspectorInputAgentD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZThn12_N7WebCore19InspectorInputAgentD1Ev,b0,__ZThn12_N7WebCore19InspectorInputAgentD0Ev,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN7WebCore19InspectorInputAgentD2Ev,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiiiiiii = [b1,b1,__ZN7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_,b1,__ZThn12_N7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore19InspectorInputAgentC2EPNS_19InstrumentingAgentsEPNS_4PageE,b3,__ZN7WebCore19InspectorInputAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_viiiiiiiii = [b5,b5,__ZN7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_,b5,__ZThn12_N7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_,b5,b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiiiiiiiiiiiii: dynCall_viiiiiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiiiiiiiiiiiii": invoke_viiiiiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore19InspectorInputAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore19InspectorInputAgentD0Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_","__ZThn12_N7WebCore19InspectorInputAgentD1Ev","_memset","__ZThn12_N7WebCore19InspectorInputAgentD0Ev","__ZN9Inspector18InspectorAgentBaseD1Ev","_memcpy","__ZN7WebCore19InspectorInputAgentC2EPNS_19InstrumentingAgentsEPNS_4PageE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore19InspectorInputAgentD2Ev","__ZN7WebCore19InspectorInputAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZThn12_N7WebCore19InspectorInputAgent18dispatchMouseEventEPN3WTF6StringERKS2_iiPKiPKdPS4_S7_","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore19InspectorInputAgent16dispatchKeyEventEPN3WTF6StringERKS2_PKiPKdPS4_SA_SA_S7_S7_S7_PKbSC_SC_"]

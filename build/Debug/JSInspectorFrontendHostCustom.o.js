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
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([99,104,101,99,107,98,111,120,0,0,0,0,0,0,0,0,115,117,98,77,101,110,117,0,115,101,112,97,114,97,116,111,114,0,0,0,0,0,0,0,115,117,98,73,116,101,109,115,0,0,0,0,0,0,0,0,99,104,101,99,107,101,100,0,101,110,97,98,108,101,100,0,105,100,0,0,0,0,0,0,116,121,112,101,0,0,0,0,108,97,98,101,108,0,0,0,117,110,107,110,111,119,110,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN3JSC7JSArray6s_infoE=env.__ZN3JSC7JSArray6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE14minGCThresholdE=(H_BASE+112)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCoreL24populateContextMenuItemsEPN3JSC9ExecStateEPNS0_7JSArrayERNS_11ContextMenuE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, d95 = +0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, d105 = +0, i106 = 0, i107 = 0, i108 = 0, i109 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 184 | 0;
 i26 = i4 + 192 | 0;
 i27 = i4 + 208 | 0;
 i28 = i4 + 240 | 0;
 i29 = i2 | 0;
 i30 = i2 | 0;
 i31 = i11;
 i32 = i10 | 0;
 i33 = i13 | 0;
 i34 = i9 | 0;
 i35 = i15 | 0;
 i36 = i8 | 0;
 i37 = i17 | 0;
 i38 = i7 | 0;
 i39 = i19 | 0;
 i40 = i6 | 0;
 i41 = i21 | 0;
 i42 = i5 | 0;
 i43 = i23 | 0;
 i44 = i14 + 4 | 0;
 i45 = i14;
 i46 = i25 | 0;
 i47 = i3 + 8 | 0;
 i48 = i3 + 4 | 0;
 i49 = i3 | 0;
 i50 = i3 | 0;
 i3 = i24 | 0;
 i51 = i24 + 4 | 0;
 i52 = i24 + 8 | 0;
 i53 = i24 + 12 | 0;
 i54 = i24 + 13 | 0;
 i55 = i24 + 16 | 0;
 i56 = i22 + 4 | 0;
 i57 = i22;
 i58 = i22 | 0;
 i59 = i12 + 4 | 0;
 i60 = i12;
 i61 = i26 + 8 | 0;
 i62 = i26 | 0;
 i63 = i26 + 4 | 0;
 i64 = i27 | 0;
 i65 = i27 + 4 | 0;
 i66 = i27 + 8 | 0;
 i67 = i27 + 12 | 0;
 i68 = i27 + 13 | 0;
 i69 = i27 + 16 | 0;
 i70 = i16 + 4 | 0;
 i71 = i16;
 i72 = i18 + 4 | 0;
 i73 = i18;
 i74 = i18;
 i75 = i1 + 16 | 0;
 i76 = i20 + 4 | 0;
 i77 = i20;
 i78 = i20;
 i79 = i28 | 0;
 i80 = i28 + 4 | 0;
 i81 = i28 + 8 | 0;
 i82 = i28 + 12 | 0;
 i83 = i28 + 13 | 0;
 i84 = i28 + 16 | 0;
 i85 = i16;
 i86 = i11 | 0;
 i87 = i2 + 4 | 0;
 i2 = 0;
 L1 : while (1) {
  i88 = HEAP8[(HEAP32[i29 >> 2] | 0) + 55 | 0] | 0;
  if ((i88 & 30) == 0) {
   i89 = 0;
  } else {
   i89 = HEAP32[(HEAP32[i87 >> 2] | 0) - 8 >> 2] | 0;
  }
  if (i2 >>> 0 >= i89 >>> 0) {
   i90 = 129;
   break;
  }
  L7 : do {
   switch (i88 & 31 | 0) {
   case 20:
   case 21:
    {
     i91 = HEAP32[i87 >> 2] | 0;
     if ((HEAP32[i91 - 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
      i90 = 18;
      break L7;
     }
     i92 = i91 + (i2 << 3) | 0;
     i93 = HEAP32[i92 + 4 >> 2] | 0;
     i94 = HEAP32[i92 >> 2] | 0;
     i90 = 16;
     break;
    }
   case 26:
   case 27:
    {
     i92 = HEAP32[i87 >> 2] | 0;
     if ((HEAP32[i92 - 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
      i90 = 18;
      break L7;
     }
     i91 = i92 + (i2 << 3) | 0;
     i93 = HEAP32[i91 + 4 >> 2] | 0;
     i94 = HEAP32[i91 >> 2] | 0;
     i90 = 16;
     break;
    }
   case 22:
   case 23:
    {
     i91 = HEAP32[i87 >> 2] | 0;
     if ((HEAP32[i91 - 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
      i90 = 18;
      break L7;
     }
     i92 = i91 + (i2 << 3) | 0;
     d95 = +HEAPF64[i92 >> 3];
     if (d95 != d95 | (tempDouble = +0, tempDouble != tempDouble)) {
      i90 = 18;
      break L7;
     }
     i93 = HEAP32[i92 + 4 >> 2] | 0;
     i94 = HEAP32[i92 >> 2] | 0;
     i90 = 16;
     break;
    }
   case 28:
   case 30:
   case 29:
   case 31:
    {
     i92 = HEAP32[i87 >> 2] | 0;
     if ((HEAP32[i92 - 4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
      i90 = 18;
      break L7;
     }
     i91 = i92 + 16 + (i2 << 3) | 0;
     i93 = HEAP32[i91 + 4 >> 2] | 0;
     i94 = HEAP32[i91 >> 2] | 0;
     i90 = 16;
     break;
    }
   case 0:
   case 1:
   case 3:
    {
     i90 = 18;
     break;
    }
   default:
    {
     i90 = 15;
     break L1;
    }
   }
  } while (0);
  do {
   if ((i90 | 0) == 16) {
    i90 = 0;
    if ((i94 & 0 | 0) == 0 & (i93 & -1 | 0) == (-6 | 0)) {
     i90 = 18;
     break;
    }
    HEAP32[i86 >> 2] = i94;
    HEAP32[i86 + 4 >> 2] = i93;
    i96 = i94;
   }
  } while (0);
  if ((i90 | 0) == 18) {
   i90 = 0;
   __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i11, i30, i1, i2);
   i96 = HEAP32[i31 >> 2] | 0;
  }
  i88 = i96;
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i10, i1, H_BASE + 96 | 0);
  i91 = HEAP32[i32 >> 2] | 0;
  HEAP32[i33 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i12, i88, i1, i13);
  do {
   if ((i91 | 0) != 0) {
    i92 = i91 | 0;
    i97 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
    if ((i97 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i92 >> 2] = i97;
     break;
    }
   }
  } while (0);
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i9, i1, H_BASE + 88 | 0);
  i91 = HEAP32[i34 >> 2] | 0;
  HEAP32[i35 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i14, i88, i1, i15);
  do {
   if ((i91 | 0) != 0) {
    i97 = i91 | 0;
    i92 = (HEAP32[i97 >> 2] | 0) - 2 | 0;
    if ((i92 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i97 >> 2] = i92;
     break;
    }
   }
  } while (0);
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i8, i1, H_BASE + 80 | 0);
  i91 = HEAP32[i36 >> 2] | 0;
  HEAP32[i37 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i16, i88, i1, i17);
  do {
   if ((i91 | 0) != 0) {
    i92 = i91 | 0;
    i97 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
    if ((i97 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i92 >> 2] = i97;
     break;
    }
   }
  } while (0);
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i7, i1, H_BASE + 72 | 0);
  i91 = HEAP32[i38 >> 2] | 0;
  HEAP32[i39 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i18, i88, i1, i19);
  do {
   if ((i91 | 0) != 0) {
    i97 = i91 | 0;
    i92 = (HEAP32[i97 >> 2] | 0) - 2 | 0;
    if ((i92 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i97 >> 2] = i92;
     break;
    }
   }
  } while (0);
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i6, i1, H_BASE + 64 | 0);
  i91 = HEAP32[i40 >> 2] | 0;
  HEAP32[i41 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i20, i88, i1, i21);
  do {
   if ((i91 | 0) != 0) {
    i92 = i91 | 0;
    i97 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
    if ((i97 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i92 >> 2] = i97;
     break;
    }
   }
  } while (0);
  __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i5, i1, H_BASE + 48 | 0);
  i91 = HEAP32[i42 >> 2] | 0;
  HEAP32[i43 >> 2] = i91;
  __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i22, i88, i1, i23);
  do {
   if ((i91 | 0) != 0) {
    i97 = i91 | 0;
    i92 = (HEAP32[i97 >> 2] | 0) - 2 | 0;
    if ((i92 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i91);
     break;
    } else {
     HEAP32[i97 >> 2] = i92;
     break;
    }
   }
  } while (0);
  do {
   if ((HEAP32[i44 >> 2] | 0) == -5) {
    i91 = HEAP32[i45 >> 2] | 0;
    if ((HEAP8[(HEAP32[i91 >> 2] | 0) + 52 | 0] | 0) != 5) {
     break;
    }
    i88 = i91 + 12 | 0;
    i92 = HEAP32[i88 >> 2] | 0;
    if ((i92 | 0) == 0) {
     __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i91, i1);
     i91 = HEAP32[i88 >> 2] | 0;
     if ((i91 | 0) == 0) {
      i98 = 0;
      i99 = 1;
     } else {
      i100 = i91;
      i90 = 47;
     }
    } else {
     i100 = i92;
     i90 = 47;
    }
    if ((i90 | 0) == 47) {
     i90 = 0;
     i92 = i100 | 0;
     HEAP32[i92 >> 2] = (HEAP32[i92 >> 2] | 0) + 2;
     i98 = i100;
     i99 = 0;
    }
    L67 : do {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i98, H_BASE + 32 | 0) | 0) {
      HEAP32[i46 >> 2] = 0;
      __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i24, 2, 5998, i25, 0);
      i92 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i92 | 0) != 0) {
        i91 = i92 | 0;
        i88 = (HEAP32[i91 >> 2] | 0) - 2 | 0;
        if ((i88 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i92);
         break;
        } else {
         HEAP32[i91 >> 2] = i88;
         break;
        }
       }
      } while (0);
      i92 = HEAP32[i47 >> 2] | 0;
      if ((i92 | 0) == (HEAP32[i48 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i49, i24);
      } else {
       i88 = HEAP32[i50 >> 2] | 0;
       HEAP32[i88 + (i92 * 28 & -1) >> 2] = HEAP32[i3 >> 2];
       HEAP32[i88 + (i92 * 28 & -1) + 4 >> 2] = HEAP32[i51 >> 2];
       i91 = HEAP32[i52 >> 2] | 0;
       HEAP32[i88 + (i92 * 28 & -1) + 8 >> 2] = i91;
       if ((i91 | 0) != 0) {
        i97 = i91 | 0;
        HEAP32[i97 >> 2] = (HEAP32[i97 >> 2] | 0) + 2;
       }
       HEAP8[i88 + (i92 * 28 & -1) + 12 | 0] = HEAP8[i53] & 1;
       HEAP8[i88 + (i92 * 28 & -1) + 13 | 0] = HEAP8[i54] & 1;
       __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i88 + (i92 * 28 & -1) + 16 | 0, i55);
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      __ZN7WebCore15ContextMenuItemD1Ev(i24);
     } else {
      L83 : do {
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i98, H_BASE + 24 | 0) | 0) {
        if ((HEAP32[i56 >> 2] | 0) != -5) {
         break;
        }
        i92 = HEAP32[i57 >> 2] | 0;
        i88 = i92;
        if ((HEAP32[(i92 & -65536) + 1048 >> 2] | 0) == 2) {
         i101 = i88 + 8 | 0;
        } else {
         i101 = (HEAP32[i88 >> 2] | 0) + 32 | 0;
        }
        i88 = HEAP32[i101 >> 2] | 0;
        if ((i88 | 0) == 0) {
         break;
        } else {
         i102 = i88;
        }
        while (1) {
         if ((i102 | 0) == (__ZN3JSC7JSArray6s_infoE | 0)) {
          break;
         }
         i102 = HEAP32[i102 + 4 >> 2] | 0;
         if ((i102 | 0) == 0) {
          break L83;
         }
        }
        __ZN7WebCore11ContextMenuC1Ev(i26);
        __ZN7WebCoreL24populateContextMenuItemsEPN3JSC9ExecStateEPNS0_7JSArrayERNS_11ContextMenuE(i1, HEAP32[i58 >> 2] | 0, i26);
        do {
         if ((HEAP32[i59 >> 2] | 0) == -5) {
          i88 = HEAP32[i60 >> 2] | 0;
          if ((HEAP8[(HEAP32[i88 >> 2] | 0) + 52 | 0] | 0) != 5) {
           i90 = 70;
           break;
          }
          i103 = i88;
         } else {
          i90 = 70;
         }
        } while (0);
        if ((i90 | 0) == 70) {
         i90 = 0;
         i103 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i12, i1) | 0;
        }
        if ((HEAP32[i103 + 12 >> 2] | 0) == 0) {
         __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i103, i1);
        }
        __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i27, 3, 5998, i103 + 12 | 0, i26);
        i88 = HEAP32[i47 >> 2] | 0;
        if ((i88 | 0) == (HEAP32[i48 >> 2] | 0)) {
         __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i49, i27);
        } else {
         i92 = HEAP32[i50 >> 2] | 0;
         HEAP32[i92 + (i88 * 28 & -1) >> 2] = HEAP32[i64 >> 2];
         HEAP32[i92 + (i88 * 28 & -1) + 4 >> 2] = HEAP32[i65 >> 2];
         i97 = HEAP32[i66 >> 2] | 0;
         HEAP32[i92 + (i88 * 28 & -1) + 8 >> 2] = i97;
         if ((i97 | 0) != 0) {
          i91 = i97 | 0;
          HEAP32[i91 >> 2] = (HEAP32[i91 >> 2] | 0) + 2;
         }
         HEAP8[i92 + (i88 * 28 & -1) + 12 | 0] = HEAP8[i67] & 1;
         HEAP8[i92 + (i88 * 28 & -1) + 13 | 0] = HEAP8[i68] & 1;
         __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i92 + (i88 * 28 & -1) + 16 | 0, i69);
         HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
        }
        __ZN7WebCore15ContextMenuItemD1Ev(i27);
        i88 = HEAP32[i61 >> 2] | 0;
        if ((i88 | 0) != 0) {
         i92 = HEAP32[i62 >> 2] | 0;
         i91 = i92 + (i88 * 28 & -1) | 0;
         i88 = i92;
         while (1) {
          __ZN7WebCore15ContextMenuItemD1Ev(i88);
          i88 = i88 + 28 | 0;
          if ((i88 | 0) == (i91 | 0)) {
           break;
          }
         }
         HEAP32[i61 >> 2] = 0;
        }
        i91 = HEAP32[i62 >> 2] | 0;
        if ((i91 | 0) == 0) {
         break L67;
        }
        HEAP32[i62 >> 2] = 0;
        HEAP32[i63 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i91);
        break L67;
       }
      } while (0);
      i91 = HEAP32[i70 >> 2] | 0;
      if ((i91 | 0) == -1) {
       i104 = HEAP32[i71 >> 2] | 0;
      } else {
       if (i91 >>> 0 < 4294967289 >>> 0) {
        d105 = +HEAPF64[i85 >> 3];
       } else {
        d105 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i16, i1);
       }
       i104 = __ZN3JSC7toInt32Ed(d105) | 0;
      }
      i91 = i104 + 5e3 | 0;
      i88 = (__ZN3WTF5equalEPKNS_10StringImplEPKh(i98, H_BASE + 8 | 0) | 0) & 1;
      do {
       if ((HEAP32[i59 >> 2] | 0) == -5) {
        i92 = HEAP32[i60 >> 2] | 0;
        if ((HEAP8[(HEAP32[i92 >> 2] | 0) + 52 | 0] | 0) != 5) {
         i90 = 93;
         break;
        }
        i106 = i92;
       } else {
        i90 = 93;
       }
      } while (0);
      if ((i90 | 0) == 93) {
       i90 = 0;
       i106 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i12, i1) | 0;
      }
      if ((HEAP32[i106 + 12 >> 2] | 0) == 0) {
       __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i106, i1);
      }
      __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i28, i88, i91, i106 + 12 | 0, 0);
      i92 = HEAP32[i72 >> 2] | 0;
      do {
       if ((i92 | 0) == (-1 | 0)) {
        i107 = (HEAP32[i74 >> 2] | 0) != 0;
        i90 = 106;
       } else if ((i92 | 0) != (-4 | 0)) {
        if (i92 >>> 0 < 4294967289 >>> 0) {
         d95 = +HEAPF64[i73 >> 3];
         i97 = d95 > +0;
         i107 = i97 | d95 < +0 & (i97 ^ 1);
         i90 = 106;
         break;
        }
        if ((i92 | 0) == (-2 | 0)) {
         i107 = (HEAP32[i74 >> 2] | 0) != 0;
         i90 = 106;
         break;
        } else if ((i92 | 0) != (-5 | 0)) {
         i107 = 0;
         i90 = 106;
         break;
        }
        i97 = HEAP32[i74 >> 2] | 0;
        i108 = HEAP32[i97 >> 2] | 0;
        if ((HEAP8[i108 + 52 | 0] | 0) == 5) {
         i107 = __ZNK3JSC8JSString9toBooleanEv(i97) | 0;
         i90 = 106;
         break;
        }
        if ((HEAP8[i108 + 53 | 0] & 1) == 0) {
         i107 = 1;
         i90 = 106;
         break;
        }
        i107 = (HEAP32[i108 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i75 >> 2] >> 2] | 0) + 4 >> 2] | 0);
        i90 = 106;
       }
      } while (0);
      if ((i90 | 0) == 106) {
       i90 = 0;
       __ZN7WebCore15ContextMenuItem10setEnabledEb(i28, i107);
      }
      i92 = HEAP32[i76 >> 2] | 0;
      do {
       if ((i92 | 0) == (-1 | 0)) {
        i109 = (HEAP32[i78 >> 2] | 0) != 0;
        i90 = 117;
       } else if ((i92 | 0) != (-4 | 0)) {
        if (i92 >>> 0 < 4294967289 >>> 0) {
         d95 = +HEAPF64[i77 >> 3];
         i91 = d95 > +0;
         i109 = i91 | d95 < +0 & (i91 ^ 1);
         i90 = 117;
         break;
        }
        if ((i92 | 0) == (-2 | 0)) {
         i109 = (HEAP32[i78 >> 2] | 0) != 0;
         i90 = 117;
         break;
        } else if ((i92 | 0) != (-5 | 0)) {
         i109 = 0;
         i90 = 117;
         break;
        }
        i91 = HEAP32[i78 >> 2] | 0;
        i88 = HEAP32[i91 >> 2] | 0;
        if ((HEAP8[i88 + 52 | 0] | 0) == 5) {
         i109 = __ZNK3JSC8JSString9toBooleanEv(i91) | 0;
         i90 = 117;
         break;
        }
        if ((HEAP8[i88 + 53 | 0] & 1) == 0) {
         i109 = 1;
         i90 = 117;
         break;
        }
        i109 = (HEAP32[i88 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i75 >> 2] >> 2] | 0) + 4 >> 2] | 0);
        i90 = 117;
       }
      } while (0);
      if ((i90 | 0) == 117) {
       i90 = 0;
       __ZN7WebCore15ContextMenuItem10setCheckedEb(i28, i109);
      }
      i92 = HEAP32[i47 >> 2] | 0;
      if ((i92 | 0) == (HEAP32[i48 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i49, i28);
      } else {
       i88 = HEAP32[i50 >> 2] | 0;
       HEAP32[i88 + (i92 * 28 & -1) >> 2] = HEAP32[i79 >> 2];
       HEAP32[i88 + (i92 * 28 & -1) + 4 >> 2] = HEAP32[i80 >> 2];
       i91 = HEAP32[i81 >> 2] | 0;
       HEAP32[i88 + (i92 * 28 & -1) + 8 >> 2] = i91;
       if ((i91 | 0) != 0) {
        i108 = i91 | 0;
        HEAP32[i108 >> 2] = (HEAP32[i108 >> 2] | 0) + 2;
       }
       HEAP8[i88 + (i92 * 28 & -1) + 12 | 0] = HEAP8[i82] & 1;
       HEAP8[i88 + (i92 * 28 & -1) + 13 | 0] = HEAP8[i83] & 1;
       __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i88 + (i92 * 28 & -1) + 16 | 0, i84);
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      __ZN7WebCore15ContextMenuItemD1Ev(i28);
     }
    } while (0);
    if (i99) {
     break;
    }
    i92 = i98 | 0;
    i88 = (HEAP32[i92 >> 2] | 0) - 2 | 0;
    if ((i88 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i98);
     break;
    } else {
     HEAP32[i92 >> 2] = i88;
     break;
    }
   }
  } while (0);
  i2 = i2 + 1 | 0;
 }
 if ((i90 | 0) == 15) {
  _WTFCrash();
 } else if ((i90 | 0) == 129) {
  STACKTOP = i4;
  return;
 }
}
function __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 12 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 3) | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   } else {
    i16 = i13;
    i17 = 0;
   }
   L8 : while (1) {
    i14 = HEAP32[i16 + 4 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      i18 = 11;
     } else {
      if ((HEAP32[i14 + 4 >> 2] | 0) == -6) {
       i18 = 11;
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] & 3 | 0) == 0) {
       i19 = i17;
      } else {
       i18 = 11;
      }
     }
    } while (0);
    do {
     if ((i18 | 0) == 11) {
      i18 = 0;
      i14 = i16 | 0;
      if ((i17 | 0) != (HEAP32[i6 >> 2] | 0)) {
       HEAP32[(HEAP32[i5 >> 2] | 0) + (i17 << 2) >> 2] = HEAP32[i14 >> 2];
       i15 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
       HEAP32[i7 >> 2] = i15;
       i19 = i15;
       break;
      }
      i15 = i17 + 1 | 0;
      i20 = HEAP32[i5 >> 2] | 0;
      do {
       if (i20 >>> 0 > i14 >>> 0) {
        i18 = 15;
       } else {
        if ((i20 + (i17 << 2) | 0) >>> 0 <= i14 >>> 0) {
         i18 = 15;
         break;
        }
        i21 = i16 - i20 >> 2;
        i22 = i15 + (i17 >>> 2) | 0;
        i23 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
        i22 = i23 >>> 0 > i15 >>> 0 ? i23 : i15;
        do {
         if (i17 >>> 0 < i22 >>> 0) {
          if (i22 >>> 0 > 4 >>> 0) {
           if (i22 >>> 0 > 1073741823 >>> 0) {
            i18 = 29;
            break L8;
           }
           i23 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
           HEAP32[i6 >> 2] = i23 >>> 2;
           i24 = __ZN3WTF10fastMallocEj(i23) | 0;
           HEAP32[i5 >> 2] = i24;
           i25 = i24;
          } else {
           HEAP32[i5 >> 2] = i4;
           HEAP32[i6 >> 2] = 4;
           i25 = i4;
          }
          i24 = i20;
          _memcpy(i25 | 0, i24 | 0, i17 << 2) | 0;
          if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
           break;
          }
          if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
           HEAP32[i5 >> 2] = 0;
           HEAP32[i6 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i24);
         }
        } while (0);
        i22 = HEAP32[i5 >> 2] | 0;
        i26 = i22 + (i21 << 2) | 0;
        i27 = i22;
       }
      } while (0);
      if ((i18 | 0) == 15) {
       i18 = 0;
       i22 = i15 + (i17 >>> 2) | 0;
       i24 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
       i22 = i24 >>> 0 > i15 >>> 0 ? i24 : i15;
       do {
        if (i17 >>> 0 < i22 >>> 0) {
         if (i22 >>> 0 > 4 >>> 0) {
          if (i22 >>> 0 > 1073741823 >>> 0) {
           i18 = 18;
           break L8;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
          HEAP32[i6 >> 2] = i24 >>> 2;
          i23 = __ZN3WTF10fastMallocEj(i24) | 0;
          HEAP32[i5 >> 2] = i23;
          i28 = i23;
         } else {
          HEAP32[i5 >> 2] = i4;
          HEAP32[i6 >> 2] = 4;
          i28 = i4;
         }
         i23 = i20;
         _memcpy(i28 | 0, i23 | 0, i17 << 2) | 0;
         if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
          break;
         }
         if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
          HEAP32[i5 >> 2] = 0;
          HEAP32[i6 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i23);
        }
       } while (0);
       i26 = i14;
       i27 = HEAP32[i5 >> 2] | 0;
      }
      HEAP32[i27 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i26 >> 2];
      i20 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
      HEAP32[i7 >> 2] = i20;
      i19 = i20;
     }
    } while (0);
    i20 = i16 + 8 | 0;
    if ((i20 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i29 = i20;
    }
    while (1) {
     i20 = HEAP32[i29 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i29 + 8 | 0;
     if ((i20 | 0) == (i12 | 0)) {
      i18 = 6;
      break L8;
     } else {
      i29 = i20;
     }
    }
    if ((i29 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i16 = i29;
     i17 = i19;
    }
   }
   if ((i18 | 0) == 29) {
    _WTFCrash();
   } else if ((i18 | 0) == 6) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = i1 | 0;
    i22 = i1 + 16 | 0;
    i15 = i1 + 8 | 0;
    i23 = 0;
    while (1) {
     i24 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i30 = HEAP32[i10 >> 2] | 0;
      i31 = i30 << 3 | 0;
      i32 = 0;
      i33 = i30;
     } else {
      i30 = HEAP32[i15 >> 2] | 0;
      i34 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      i35 = i34;
      i36 = i35 + ~(i35 << 15) | 0;
      i35 = (i36 >>> 10 ^ i36) * 9 & -1;
      i36 = i35 >>> 6 ^ i35;
      i35 = i36 + ~(i36 << 11) | 0;
      i36 = i35 >>> 16 ^ i35;
      i35 = i36 & i30;
      i37 = i24 + (i35 << 3) | 0;
      i38 = HEAP32[i37 >> 2] | 0;
      L62 : do {
       if ((i38 | 0) == (i34 | 0)) {
        i39 = i37;
       } else {
        i40 = (i36 >>> 23) + ~i36 | 0;
        i41 = i40 << 12 ^ i40;
        i40 = i41 >>> 7 ^ i41;
        i41 = i40 << 2 ^ i40;
        i40 = i41 >>> 20 ^ i41 | 1;
        i41 = 0;
        i42 = i35;
        i43 = i38;
        while (1) {
         if ((i43 | 0) == 0) {
          i39 = 0;
          break L62;
         }
         i44 = (i41 | 0) == 0 ? i40 : i41;
         i45 = i44 + i42 & i30;
         i46 = i24 + (i45 << 3) | 0;
         i47 = HEAP32[i46 >> 2] | 0;
         if ((i47 | 0) == (i34 | 0)) {
          i39 = i46;
          break;
         } else {
          i41 = i44;
          i42 = i45;
          i43 = i47;
         }
        }
       }
      } while (0);
      i34 = HEAP32[i10 >> 2] | 0;
      i31 = (i39 | 0) == 0 ? i24 + (i34 << 3) | 0 : i39;
      i32 = i24;
      i33 = i34;
     }
     do {
      if ((i31 | 0) != (i32 + (i33 << 3) | 0)) {
       i34 = i31 + 4 | 0;
       if ((HEAP32[i34 >> 2] | 0) != 0) {
        __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i34);
       }
       HEAP32[i31 >> 2] = -1;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       HEAP32[i3 >> 2] = i34;
       i30 = HEAP32[i10 >> 2] | 0;
       if (!((i34 * 6 & -1 | 0) < (i30 | 0) & (i30 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i20, (i30 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     i23 = i23 + 1 | 0;
     i48 = HEAP32[i7 >> 2] | 0;
     if (i23 >>> 0 >= i48 >>> 0) {
      break;
     }
    }
    if ((i48 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    break;
   } else if ((i18 | 0) == 18) {
    _WTFCrash();
   }
  }
 } while (0);
 i18 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (i18 | 0) | (i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 L1 : do {
  if ((i13 | 0) != 0) {
   i3 = HEAP32[i13 + 4 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     break L1;
    } else if ((i3 | 0) == 1) {
     i14 = i13 + 8 | 0;
     if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
      i15 = HEAP16[HEAP32[i14 >> 2] >> 1] | 0;
      if ((i15 & 65535) >>> 0 < 256 >>> 0) {
       i16 = i15 & 255;
      } else {
       break;
      }
     } else {
      i16 = HEAP8[HEAP32[i14 >> 2] | 0] | 0;
     }
     i14 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20932 + ((i16 & 255) << 2) >> 2] | 0;
     HEAP32[i1 + 4 >> 2] = (i14 | 0) == 0 ? -6 : -5;
     HEAP32[i1 >> 2] = i14;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i3 = i2 + 16 | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   i15 = i14 + 24 | 0;
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i14 + 36 | 0;
   i19 = i14 + 44 | 0;
   if ((HEAP32[i18 >> 2] | 0) >= (HEAP32[i19 >> 2] | 0)) {
    __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i15);
    i14 = (HEAP32[i18 >> 2] << 1) - 1 | 0;
    HEAP32[i19 >> 2] = (i14 | 0) > 3 ? i14 : 3;
   }
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i10, i15 | 0, i9, i6);
   i15 = i10 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) + 4 | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = 13;
    } else {
     if ((HEAP32[i19 + 4 >> 2] | 0) == -6) {
      i20 = 13;
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] & 3 | 0) != 0) {
      i20 = 13;
     }
    }
   } while (0);
   do {
    if ((i20 | 0) == 13) {
     HEAP8[i10 + 8 | 0] = 1;
     i19 = i5 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i21 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i18;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) == 0) {
      break;
     }
     __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i19);
    }
   } while (0);
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
   }
   do {
    if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
     i19 = HEAP32[i9 >> 2] | 0;
     i21 = (i19 | 0) == 0;
     if (!i21) {
      i18 = i19 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     i18 = HEAP32[(HEAP32[i3 >> 2] & -65536) + 1076 >> 2] | 0;
     L29 : do {
      if (i21) {
       i20 = 22;
      } else {
       i22 = HEAP32[i19 + 4 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         i20 = 22;
         break L29;
        } else if ((i22 | 0) == 1) {
         i23 = i19 + 8 | 0;
         if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
          i24 = HEAP16[HEAP32[i23 >> 2] >> 1] | 0;
          if ((i24 & 65535) >>> 0 < 256 >>> 0) {
           i25 = i24 & 255;
          } else {
           break;
          }
         } else {
          i25 = HEAP8[HEAP32[i23 >> 2] | 0] | 0;
         }
         i26 = HEAP32[i18 + 20932 + ((i25 & 255) << 2) >> 2] | 0;
         break L29;
        }
       } while (0);
       i22 = i7 | 0;
       HEAP32[i22 >> 2] = i19;
       i23 = i19 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
       i23 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i18, i7) | 0;
       i24 = HEAP32[i22 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i26 = i23;
        break;
       }
       i22 = i24 | 0;
       i27 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        i26 = i23;
        break;
       } else {
        HEAP32[i22 >> 2] = i27;
        i26 = i23;
        break;
       }
      }
     } while (0);
     if ((i20 | 0) == 22) {
      i26 = HEAP32[i18 + 20892 >> 2] | 0;
     }
     i23 = i12 | 0;
     if ((i26 | 0) == 0) {
      i28 = 0;
     } else {
      i27 = i26;
      i22 = (i27 & -65536) + 1060 | 0;
      i24 = i22 | 0;
      i29 = HEAP32[i24 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i30 = __ZN3JSC7WeakSet13findAllocatorEv(i22) | 0;
      } else {
       i30 = i29;
      }
      HEAP32[i24 >> 2] = HEAP32[i30 >> 2];
      i24 = i30;
      HEAP32[i24 >> 2] = i27;
      HEAP32[i24 + 4 >> 2] = -5;
      HEAP32[i30 + 8 >> 2] = 0;
      HEAP32[i30 + 12 >> 2] = 0;
      i28 = i30;
     }
     i24 = i8 | 0;
     HEAP32[i23 >> 2] = 0;
     i27 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i28;
     HEAP32[i24 >> 2] = i27;
     if ((i27 | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i24);
     }
     if ((HEAP32[i23 >> 2] | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i23);
     }
     if (i21) {
      break;
     }
     i23 = i19 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i31 = 0;
    } else {
     if ((HEAP32[i14 + 8 >> 2] & 3 | 0) != 0) {
      i31 = 0;
      break;
     }
     i31 = HEAP32[i14 >> 2] | 0;
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i31;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i31 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20892 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i4;
 return;
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 1](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  } else if ((i25 | 0) == 13) {
   _WTFCrash();
  } else if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 if ((i25 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i24 = HEAP32[i15 + 4 >> 2] | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i16 + 4 >> 2] = i24;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i15 = (i16 | 0) == 0;
  i21 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 1](i3, (i15 ? 0 : 0) | i16, (i15 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i21;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else {
  i25 = HEAP32[i13 + 8 >> 2] | 0;
  i24 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i24 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i15 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i25 & 1](i3, (i13 ? 0 : 0) | i24, (i13 ? -6 : -5) | 0, i21, i15, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i4;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i5 | 0;
 HEAP32[i16 >> 2] = 0;
 i5 = i15 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i3 | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i6);
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
  }
 } while (0);
 i16 = i2 + 12 | 0;
 i6 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i6;
 i16 = i2 + 4 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i6 << 1 | 0) < (i3 | 0)) {
  i29 = i15;
  i30 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i31 = 8;
  } else {
   i5 = i3 << 1;
   i31 = (i6 * 6 & -1 | 0) < (i5 | 0) ? i3 : i5;
  }
  i5 = __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i31, i15) | 0;
  i29 = i5;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = (i2 | 0) == 0;
 i10 = i8 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = -1;
 i11 = i8 + 24 | 0;
 HEAP32[i11 >> 2] = (i9 ? 0 : 0) | i2;
 HEAP32[i11 + 4 >> 2] = i9 ? -6 : -5;
 i9 = i2;
 while (1) {
  i2 = i9 | 0;
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) != 0) {
   if ((i13 | 0) != (HEAP32[i13 >> 2] | 0)) {
    i14 = 4;
    break;
   }
  }
  if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2 ? i9 + 8 | 0 : i12 + 32 | 0) >> 2] | 0) + 56 >> 2] & 1](i9, i3, i4, i8) | 0) {
   i14 = 9;
   break;
  }
  i12 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i14 = 17;
   break;
  }
  i12 = i2;
  if ((HEAPU8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i14 = 17;
   break;
  }
  i9 = i12;
 }
 if ((i14 | 0) == 4) {
  _WTFCrash();
 } else if ((i14 | 0) == 9) {
  i9 = HEAP32[i10 >> 2] | 0;
  if ((i9 | 0) == 1) {
   i10 = i8 + 8 | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   i2 = i1 | 0;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i2 + 4 >> 2] = i12;
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 4) {
   i12 = i8 + 8 | 0;
   i2 = HEAP32[i8 + 32 >> 2] | 0;
   i10 = (i2 | 0) == 0;
   i13 = FUNCTION_TABLE_iiiiiii[HEAP32[i12 >> 2] & 1](i3, (i10 ? 0 : 0) | i2, (i10 ? -6 : -5) | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0) | 0;
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = i13;
   HEAP32[i12 + 4 >> 2] = tempRet0;
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 2) {
   __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i8, i3);
   STACKTOP = i5;
   return;
  } else {
   i9 = HEAP32[i8 + 8 >> 2] | 0;
   i12 = HEAP32[i8 + 32 >> 2] | 0;
   i8 = (i12 | 0) == 0;
   i13 = HEAP32[i11 >> 2] | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   __ZN3JSC10Identifier4fromEPNS_9ExecStateEj(i7, i3, i4);
   i4 = i7 | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   i7 = FUNCTION_TABLE_iiiiiii[i9 & 1](i3, (i8 ? 0 : 0) | i12, (i8 ? -6 : -5) | 0, i13, i10, i6) | 0;
   i6 = i1 | 0;
   HEAP32[i6 >> 2] = i7;
   HEAP32[i6 + 4 >> 2] = tempRet0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i4 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
  }
 } else if ((i14 | 0) == 17) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore23JSInspectorFrontendHost15showContextMenuEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i3 + 32 | 0;
 if (((HEAP32[i8 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i9 = i3 + 48 | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i11 + 4 >> 2] = i10;
 i10 = __ZN7WebCore7toEventEN3JSC7JSValueE(i5) | 0;
 if (((HEAP32[i8 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
  i12 = HEAP32[i3 + 56 >> 2] | 0;
 } else {
  i12 = 0;
 }
 __ZN7WebCore11ContextMenuC1Ev(i6);
 __ZN7WebCoreL24populateContextMenuItemsEPN3JSC9ExecStateEPNS0_7JSArrayERNS_11ContextMenuE(i3, i12, i6);
 __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i7, i6 | 0);
 __ZN7WebCore21InspectorFrontendHost15showContextMenuEPNS_5EventERKN3WTF6VectorINS_15ContextMenuItemELj0ENS3_15CrashOnOverflowEEE(HEAP32[i2 + 12 >> 2] | 0, i10, i7);
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 i1 = i7 + 8 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 i2 = i7 | 0;
 if ((i10 | 0) != 0) {
  i12 = HEAP32[i2 >> 2] | 0;
  i3 = i12 + (i10 * 28 & -1) | 0;
  i10 = i12;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i10);
   i10 = i10 + 28 | 0;
   if ((i10 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = i6 + 8 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i2 = i6 | 0;
 if ((i7 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  i10 = i3 + (i7 * 28 & -1) | 0;
  i7 = i3;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i4;
 return;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 i2 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP8[i12 + (i6 * 28 & -1) + 12 | 0] = HEAP8[i11 + 12 | 0] & 1;
 HEAP8[i12 + (i6 * 28 & -1) + 13 | 0] = HEAP8[i11 + 13 | 0] & 1;
 __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i12 + (i6 * 28 & -1) + 16 | 0, i11 + 16 | 0);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i2 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   HEAP8[i7 + 12 | 0] = HEAP8[i6 + 12 | 0] & 1;
   HEAP8[i7 + 13 | 0] = HEAP8[i6 + 13 | 0] & 1;
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i7 + 16 | 0, i6 + 16 | 0);
   __ZN7WebCore15ContextMenuItemD1Ev(i6);
   i8 = i6 + 28 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 28 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 28 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 28 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 28 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  i5 = HEAP32[i8 + 8 >> 2] | 0;
  HEAP32[i9 + 8 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP8[i9 + 12 | 0] = HEAP8[i8 + 12 | 0] & 1;
  HEAP8[i9 + 13 | 0] = HEAP8[i8 + 13 | 0] & 1;
  __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i9 + 16 | 0, i8 + 16 | 0);
  i7 = i8 + 28 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 28 | 0;
  }
 }
 return;
}
function __ZN7WebCore23JSInspectorFrontendHost8platformEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 if (HEAP8[H_BASE + 120 | 0] | 0) {
  i5 = HEAP32[H_BASE + 136 >> 2] | 0;
 } else {
  i6 = __Znwj(4) | 0;
  HEAP32[i4 >> 2] = H_BASE + 104;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i4);
  HEAP32[H_BASE + 136 >> 2] = i6;
  HEAP8[H_BASE + 120 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i3, i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23JSInspectorFrontendHost4portEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 if (HEAP8[H_BASE + 128 | 0] | 0) {
  i5 = HEAP32[H_BASE + 144 >> 2] | 0;
 } else {
  i6 = __Znwj(4) | 0;
  HEAP32[i4 >> 2] = H_BASE + 104;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i4);
  HEAP32[H_BASE + 144 >> 2] = i6;
  HEAP8[H_BASE + 128 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i3, i5);
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
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore23JSInspectorFrontendHost20recordSettingChangedEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore23JSInspectorFrontendHost17recordActionTakenEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore23JSInspectorFrontendHost16recordPanelShownEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = -4;
 HEAP32[i1 >> 2] = 0;
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
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
function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(3);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_iiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3JSC7JSArray6s_infoE": __ZN3JSC7JSArray6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_","_strlen","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","__ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv","_memset","__ZN7WebCore23JSInspectorFrontendHost15showContextMenuEPN3JSC9ExecStateE","__ZNK3JSC8JSObject3getEPNS_9ExecStateEj","__ZN7WebCore23JSInspectorFrontendHost8platformEPN3JSC9ExecStateE","_memcpy","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore23JSInspectorFrontendHost17recordActionTakenEPN3JSC9ExecStateE","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN7WebCore23JSInspectorFrontendHost20recordSettingChangedEPN3JSC9ExecStateE","__ZN7WebCore23JSInspectorFrontendHost16recordPanelShownEPN3JSC9ExecStateE","__ZN7WebCoreL24populateContextMenuItemsEPN3JSC9ExecStateEPNS0_7JSArrayERNS_11ContextMenuE","__ZN7WebCore23JSInspectorFrontendHost4portEPN3JSC9ExecStateE"]

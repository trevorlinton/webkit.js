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
var __ZN7WebCore20FocusNavigationScopeC1EPNS_9TreeScopeE;
var __ZN7WebCore15FocusControllerC1ERNS_4PageE;
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
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
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
function __ZN7WebCore15FocusController27advanceFocusInDocumentOrderENS_14FocusDirectionEPNS_13KeyboardEventEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 104 | 0;
 i19 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i20 = i19;
 }
 i19 = HEAP32[i20 + 456 >> 2] | 0;
 i21 = i19 + 680 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i22 | 0;
 i24 = (HEAP8[(HEAP32[i20 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 do {
  if (i24 & (i22 | 0) == 0) {
   i25 = HEAP32[(HEAP32[i20 + 468 >> 2] | 0) + 56 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i26 = 0;
    break;
   }
   i27 = HEAP32[i25 + 8 >> 2] | 0;
   i28 = i25 + 8 | 0;
   HEAP32[i28 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    i26 = i25;
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    i26 = i25;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
   i26 = i25;
  } else {
   i26 = i23;
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i19);
 i23 = (i26 | 0) == 0 ? i19 | 0 : i26;
 while (1) {
  i22 = __ZN7WebCore22NodeRenderingTraversal13parentInScopeEPKNS_4NodeE(i23) | 0;
  if ((i22 | 0) == 0) {
   break;
  } else {
   i23 = i22;
  }
 }
 HEAP32[i9 >> 2] = HEAP32[i23 + 20 >> 2];
 i23 = __ZN7WebCore15FocusController36findFocusableElementAcrossFocusScopeENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i9, i26, i3) | 0;
 if ((i23 | 0) == 0) {
  i26 = i1 | 0;
  do {
   if (!i4) {
    if (!(__ZNK7WebCore6Chrome12canTakeFocusENS_14FocusDirectionE(HEAP32[(HEAP32[i26 >> 2] | 0) + 20 >> 2] | 0, i2) | 0)) {
     break;
    }
    i9 = i10 | 0;
    HEAP32[i9 >> 2] = 0;
    __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i19, i10, 0) | 0;
    i22 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i9 = i22 + 8 | 0;
      i25 = i9 | 0;
      i28 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i22 = i11 | 0;
    HEAP32[i22 >> 2] = 0;
    __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i11);
    i9 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i22 = i9 + 4 | 0;
      i28 = i22 | 0;
      i25 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) != 0) {
       HEAP32[i28 >> 2] = i25;
       break;
      }
      i25 = i22 - 4 | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
     }
    } while (0);
    __ZNK7WebCore6Chrome9takeFocusENS_14FocusDirectionE(HEAP32[(HEAP32[i26 >> 2] | 0) + 20 >> 2] | 0, i2);
    i29 = 1;
    STACKTOP = i5;
    return i29 | 0;
   }
  } while (0);
  i11 = HEAP32[(HEAP32[(HEAP32[i26 >> 2] | 0) + 60 >> 2] | 0) + 456 >> 2] | 0;
  while (1) {
   i26 = __ZN7WebCore22NodeRenderingTraversal13parentInScopeEPKNS_4NodeE(i11) | 0;
   if ((i26 | 0) == 0) {
    break;
   } else {
    i11 = i26;
   }
  }
  HEAP32[i12 >> 2] = HEAP32[i11 + 20 >> 2];
  i11 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i12, 0, i3) | 0;
  i12 = (i11 | 0) == 0;
  if (!i12) {
   i26 = i11 + 8 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  }
  i26 = i6 | 0;
  i10 = i7 | 0;
  L39 : do {
   if ((i2 | 0) == 1) {
    i4 = i11;
    while (1) {
     if ((i4 | 0) == 0) {
      i30 = 0;
      i31 = 1;
      break L39;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 120 >> 2] & 1](i4 | 0) | 0)) {
      i32 = i4;
      i33 = 37;
      break L39;
     }
     i9 = HEAP32[i4 + 52 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i34 = i4;
      i35 = 0;
      i33 = 38;
      break L39;
     }
     i25 = HEAP32[i9 + 456 >> 2] | 0;
     HEAP32[i26 >> 2] = (i25 | 0) == 0 ? 0 : i25 + 44 | 0;
     i25 = __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i6, 0, i3) | 0;
     if ((i25 | 0) == 0) {
      i34 = i4;
      i35 = 0;
      i33 = 38;
      break;
     } else {
      i4 = i25;
     }
    }
   } else {
    i4 = i11;
    while (1) {
     if ((i4 | 0) == 0) {
      i30 = 0;
      i31 = 1;
      break L39;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 120 >> 2] & 1](i4 | 0) | 0)) {
      i32 = i4;
      i33 = 37;
      break L39;
     }
     i25 = HEAP32[i4 + 52 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i32 = i4;
      i33 = 37;
      break L39;
     }
     i9 = HEAP32[i25 + 456 >> 2] | 0;
     HEAP32[i10 >> 2] = (i9 | 0) == 0 ? 0 : i9 + 44 | 0;
     i9 = __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i7, 0, i3) | 0;
     if ((i9 | 0) == 0) {
      i32 = i4;
      i33 = 37;
      break;
     } else {
      i4 = i9;
     }
    }
   }
  } while (0);
  if ((i33 | 0) == 37) {
   i34 = i32;
   i35 = (i32 | 0) == 0;
   i33 = 38;
  }
  if ((i33 | 0) == 38) {
   i32 = i34 + 8 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   i30 = i34;
   i31 = i35;
  }
  do {
   if (!i12) {
    i35 = i11 + 8 | 0;
    i34 = i35 | 0;
    i32 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
    HEAP32[i34 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   }
  } while (0);
  if (i31) {
   i36 = 0;
   i37 = i30;
   i33 = 88;
  } else {
   i38 = i30;
   i33 = 44;
  }
 } else {
  i30 = i23 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  i38 = i23;
  i33 = 44;
 }
 L60 : do {
  if ((i33 | 0) == 44) {
   if ((i38 | 0) == (HEAP32[i21 >> 2] | 0)) {
    i36 = 1;
    i37 = i38;
    i33 = 88;
    break;
   }
   i23 = i38 | 0;
   i30 = i38;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 120 >> 2] & 1](i23) | 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 124 >> 2] & 1](i23) | 0) {
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i38 >> 2] | 0) + 352 >> 2] & 1](i38, i3) | 0) {
       break;
      }
     }
     i31 = i38 + 52 | 0;
     if ((HEAP32[i31 >> 2] | 0) == 0) {
      i39 = i38;
      i40 = 0;
      break L60;
     }
     i11 = i13 | 0;
     HEAP32[i11 >> 2] = 0;
     __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i19, i13, 0) | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i11 = i12 + 8 | 0;
       i35 = i11 | 0;
       i32 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       HEAP32[i35 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
      }
     } while (0);
     i12 = HEAP32[i31 >> 2] | 0;
     i11 = i14 | 0;
     HEAP32[i11 >> 2] = i12;
     if ((i12 | 0) != 0) {
      i32 = i12 + 4 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     }
     __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i14);
     i32 = HEAP32[i11 >> 2] | 0;
     if ((i32 | 0) == 0) {
      i36 = 1;
      i37 = i38;
      i33 = 88;
      break L60;
     }
     i11 = i32 + 4 | 0;
     i32 = i11 | 0;
     i12 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i32 >> 2] = i12;
      i36 = 1;
      i37 = i38;
      i33 = 88;
      break L60;
     }
     i12 = i11 - 4 | 0;
     if ((i12 | 0) == 0) {
      i36 = 1;
      i37 = i38;
      i33 = 88;
      break L60;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
     i36 = 1;
     i37 = i38;
     i33 = 88;
     break L60;
    }
   } while (0);
   i12 = HEAP32[(HEAP32[i38 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((i12 | 0) != (i19 | 0)) {
     i11 = i15 | 0;
     HEAP32[i11 >> 2] = 0;
     __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i19, i15, 0) | 0;
     i32 = HEAP32[i11 >> 2] | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     i11 = i32 + 8 | 0;
     i32 = i11 | 0;
     i35 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i11 = HEAP32[i12 + 332 >> 2] | 0;
   i35 = i16 | 0;
   HEAP32[i35 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i32 = i11 + 4 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i16);
   i32 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i35 = i32 + 4 | 0;
     i11 = i35 | 0;
     i34 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i11 >> 2] = i34;
      break;
     }
     i34 = i35 - 4 | 0;
     if ((i34 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 1](i34);
    }
   } while (0);
   do {
    if (i24) {
     do {
      if ((i38 | 0) == 0) {
       HEAP32[i17 >> 2] = 0;
       HEAP32[i17 + 4 >> 2] = 0;
       i32 = i17 + 8 | 0;
       i12 = i32;
       i34 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = i34 & -8;
       HEAP8[i32] = i34 & 255 & -16;
      } else {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 132 >> 2] & 1](i23) | 0) {
        __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i17, i23);
        break;
       }
       i34 = i8 | 0;
       HEAP32[i34 >> 2] = i23;
       i32 = i38 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i17, i8, 1);
       i32 = HEAP32[i34 >> 2] | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       i34 = i32 + 8 | 0;
       i32 = i34 | 0;
       i12 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i18, i17, i17, 1, 0);
     i31 = i20 + 468 | 0;
     if (__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(HEAP32[i31 >> 2] | 0, i18) | 0) {
      __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i31 >> 2] | 0, i18, 6, 0, 0);
     }
     __ZN7WebCore16VisibleSelectionD2Ev(i18);
     i31 = HEAP32[i17 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i34 = i31 + 8 | 0;
     i31 = i34 | 0;
     i12 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 392 >> 2] & 1](i38, 0, i2);
   i36 = 1;
   i37 = i38;
   i33 = 88;
  }
 } while (0);
 do {
  if ((i33 | 0) == 88) {
   if ((i37 | 0) == 0) {
    i29 = i36;
   } else {
    i39 = i37;
    i40 = i36;
    break;
   }
   STACKTOP = i5;
   return i29 | 0;
  }
 } while (0);
 i36 = i39 + 8 | 0;
 i39 = i36 | 0;
 i37 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
 HEAP32[i39 >> 2] = i37;
 if ((i37 | 0) >= 1) {
  i29 = i40;
  STACKTOP = i5;
  return i29 | 0;
 }
 if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
  i29 = i40;
  STACKTOP = i5;
  return i29 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
 i29 = i40;
 STACKTOP = i5;
 return i29 | 0;
}
function __ZN7WebCore15FocusController29findFocusCandidateInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventERNS_14FocusCandidateE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 128 | 0;
 i11 = i7 + 136 | 0;
 i12 = i7 + 144 | 0;
 i13 = i7 + 192 | 0;
 i14 = i1 + 4 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = HEAP32[i1 + 456 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = HEAP32[i16 + 680 >> 2] | 0;
  }
 } while (0);
 i16 = i15 | 0;
 L5 : do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i17 = 0;
  } else {
   i18 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i17 = 0;
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    if ((HEAP32[i19 + 12 >> 2] & 4 | 0) != 0) {
     i17 = i19;
     break L5;
    }
    i18 = HEAP32[i19 + 28 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i17 = 0;
     break;
    } else {
     i19 = i18;
    }
   }
  }
 } while (0);
 HEAP32[i12 + 8 >> 2] = 0;
 i19 = i12 + 16 | 0;
 HEAP32[i19 >> 2] = -1;
 HEAP32[i19 + 4 >> 2] = 2147483647;
 _memset(i12 + 24 | 0, 0, 20) | 0;
 HEAP8[i12 + 44 | 0] = 1;
 HEAP8[i12 + 45 | 0] = 1;
 i19 = i12 + 28 | 0;
 i18 = i3;
 HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i19 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i19 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i19 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 HEAP32[i12 + 4 >> 2] = i16;
 HEAP32[i12 >> 2] = i16;
 if ((i17 | 0) == 0) {
  i20 = 0;
  i21 = i1;
 } else {
  i1 = i13 | 0;
  i16 = i13 + 8 | 0;
  i18 = i8;
  i19 = i13 + 44 | 0;
  i3 = i13 + 16 | 0;
  i22 = i13 + 45 | 0;
  i23 = i6 | 0;
  i24 = i6;
  i25 = i13;
  i26 = i6 + 28 | 0;
  i27 = i13 + 28 | 0;
  i28 = i8 + 8 | 0;
  i29 = i13 + 24 | 0;
  i30 = i6 + 24 | 0;
  i31 = i6 + 16 | 0;
  i32 = i8 + 12 | 0;
  i33 = i8 | 0;
  i34 = i8 + 4 | 0;
  i35 = i10 | 0;
  i36 = i10 + 4 | 0;
  i37 = i11 | 0;
  i38 = i11 + 4 | 0;
  i39 = i9 + 72 | 0;
  i40 = i13 + 36 | 0;
  i41 = i13 + 40 | 0;
  i42 = 0;
  i43 = i17;
  L13 : while (1) {
   i17 = i43;
   L15 : do {
    if ((i17 | 0) == (i15 | 0)) {
     i44 = i42;
    } else {
     do {
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i43 >> 2] | 0) + 352 >> 2] & 1](i17, i5) | 0)) {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 120 >> 2] & 1](i43) | 0) {
        break;
       }
       if (!(__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i43, i4) | 0)) {
        i44 = i42;
        break L15;
       }
      }
     } while (0);
     __ZN7WebCore14FocusCandidateC1EPNS_4NodeENS_14FocusDirectionE(i13, i43, i4);
     if ((HEAP32[i1 >> 2] | 0) == 0) {
      i44 = i42;
      break;
     }
     if (!(__ZN7WebCore16isValidCandidateENS_14FocusDirectionERKNS_14FocusCandidateERS1_(i4, i12, i13) | 0)) {
      i44 = i42;
      break;
     }
     i45 = i42 + 1 | 0;
     HEAP32[i16 >> 2] = i2;
     if ((__ZN7WebCore17frameOwnerElementERNS_14FocusCandidateE(i13) | 0) != 0) {
      if ((HEAP32[(__ZN7WebCore17frameOwnerElementERNS_14FocusCandidateE(i13) | 0) + 52 >> 2] | 0) == 0) {
       i44 = i45;
       break;
      }
      if ((HEAP32[i40 >> 2] | 0) < 1) {
       i44 = i45;
       break;
      }
      if ((HEAP32[i41 >> 2] | 0) < 1) {
       i44 = i45;
       break;
      }
     }
     if ((HEAP8[i19] & 1) != 0) {
      if (!(__ZN7WebCore21canBeScrolledIntoViewENS_14FocusDirectionERKNS_14FocusCandidateE(i4, i13) | 0)) {
       i44 = i45;
       break;
      }
     }
     __ZN7WebCore19distanceDataForNodeENS_14FocusDirectionERKNS_14FocusCandidateERS1_(i4, i12, i13);
     if ((HEAP32[i3 >> 2] | 0) == (-1 | 0) & (HEAP32[i3 + 4 >> 2] | 0) == 2147483647) {
      i44 = i45;
      break;
     }
     if ((HEAP8[i22] & 1) != 0) {
      if ((HEAP32[i29 >> 2] | 0) < 2) {
       i44 = i45;
       break;
      }
     }
     if ((HEAP32[i23 >> 2] | 0) == 0) {
      HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
      HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
      HEAP32[i24 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
      HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
      HEAP32[i24 + 16 >> 2] = HEAP32[i25 + 16 >> 2];
      HEAP32[i24 + 20 >> 2] = HEAP32[i25 + 20 >> 2];
      HEAP32[i24 + 24 >> 2] = HEAP32[i25 + 24 >> 2];
      HEAP32[i24 + 28 >> 2] = HEAP32[i25 + 28 >> 2];
      HEAP32[i24 + 32 >> 2] = HEAP32[i25 + 32 >> 2];
      HEAP32[i24 + 36 >> 2] = HEAP32[i25 + 36 >> 2];
      HEAP32[i24 + 40 >> 2] = HEAP32[i25 + 40 >> 2];
      HEAP16[i24 + 44 >> 1] = HEAP16[i25 + 44 >> 1] | 0;
      i44 = i45;
      break;
     }
     HEAP32[i18 >> 2] = HEAP32[i27 >> 2];
     HEAP32[i18 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
     HEAP32[i18 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
     HEAP32[i18 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
     __ZN7WebCore10LayoutRect9intersectERKS0_(i8, i26);
     do {
      if ((HEAP32[i28 >> 2] | 0) >= 1) {
       if ((HEAP32[i32 >> 2] | 0) < 1) {
        break;
       }
       if (__ZN7WebCore21areElementsOnSameLineERKNS_14FocusCandidateES2_(i6, i13) | 0) {
        break;
       }
       i46 = ((HEAP32[i28 >> 2] | 0) / 2 & -1) + (HEAP32[i33 >> 2] | 0) | 0;
       i47 = ((HEAP32[i32 >> 2] | 0) / 2 & -1) + (HEAP32[i34 >> 2] | 0) | 0;
       i48 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 472 >> 2] | 0;
       HEAP32[i35 >> 2] = i46;
       HEAP32[i36 >> 2] = i47;
       HEAP32[i37 >> 2] = 0;
       HEAP32[i38 >> 2] = 0;
       __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i9, i48, i10, 294, i11);
       if (__ZNK7WebCore4Node8containsEPKS0_(HEAP32[i1 >> 2] | 0, HEAP32[i39 >> 2] | 0) | 0) {
        HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
        HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
        HEAP32[i24 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
        HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
        HEAP32[i24 + 16 >> 2] = HEAP32[i25 + 16 >> 2];
        HEAP32[i24 + 20 >> 2] = HEAP32[i25 + 20 >> 2];
        HEAP32[i24 + 24 >> 2] = HEAP32[i25 + 24 >> 2];
        HEAP32[i24 + 28 >> 2] = HEAP32[i25 + 28 >> 2];
        HEAP32[i24 + 32 >> 2] = HEAP32[i25 + 32 >> 2];
        HEAP32[i24 + 36 >> 2] = HEAP32[i25 + 36 >> 2];
        HEAP32[i24 + 40 >> 2] = HEAP32[i25 + 40 >> 2];
        HEAP16[i24 + 44 >> 1] = HEAP16[i25 + 44 >> 1] | 0;
        __ZN7WebCore13HitTestResultD1Ev(i9);
        i44 = i45;
        break L15;
       } else {
        i48 = __ZNK7WebCore4Node8containsEPKS0_(HEAP32[i23 >> 2] | 0, HEAP32[i39 >> 2] | 0) | 0;
        __ZN7WebCore13HitTestResultD1Ev(i9);
        if (i48) {
         i44 = i45;
         break L15;
        } else {
         break;
        }
       }
      }
     } while (0);
     i48 = HEAP32[i29 >> 2] | 0;
     i47 = HEAP32[i30 >> 2] | 0;
     if ((i48 | 0) == (i47 | 0)) {
      i46 = HEAP32[i3 + 4 >> 2] | 0;
      i49 = HEAP32[i31 + 4 >> 2] | 0;
      if (!((i46 | 0) < (i49 | 0) | (i46 | 0) == (i49 | 0) & (HEAP32[i3 >> 2] | 0) >>> 0 < (HEAP32[i31 >> 2] | 0) >>> 0)) {
       i44 = i45;
       break;
      }
      HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
      HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
      HEAP32[i24 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
      HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
      HEAP32[i24 + 16 >> 2] = HEAP32[i25 + 16 >> 2];
      HEAP32[i24 + 20 >> 2] = HEAP32[i25 + 20 >> 2];
      HEAP32[i24 + 24 >> 2] = HEAP32[i25 + 24 >> 2];
      HEAP32[i24 + 28 >> 2] = HEAP32[i25 + 28 >> 2];
      HEAP32[i24 + 32 >> 2] = HEAP32[i25 + 32 >> 2];
      HEAP32[i24 + 36 >> 2] = HEAP32[i25 + 36 >> 2];
      HEAP32[i24 + 40 >> 2] = HEAP32[i25 + 40 >> 2];
      HEAP16[i24 + 44 >> 1] = HEAP16[i25 + 44 >> 1] | 0;
      i44 = i45;
      break;
     } else {
      if ((i48 | 0) <= (i47 | 0)) {
       i44 = i45;
       break;
      }
      HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
      HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
      HEAP32[i24 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
      HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
      HEAP32[i24 + 16 >> 2] = HEAP32[i25 + 16 >> 2];
      HEAP32[i24 + 20 >> 2] = HEAP32[i25 + 20 >> 2];
      HEAP32[i24 + 24 >> 2] = HEAP32[i25 + 24 >> 2];
      HEAP32[i24 + 28 >> 2] = HEAP32[i25 + 28 >> 2];
      HEAP32[i24 + 32 >> 2] = HEAP32[i25 + 32 >> 2];
      HEAP32[i24 + 36 >> 2] = HEAP32[i25 + 36 >> 2];
      HEAP32[i24 + 40 >> 2] = HEAP32[i25 + 40 >> 2];
      HEAP16[i24 + 44 >> 1] = HEAP16[i25 + 44 >> 1] | 0;
      i44 = i45;
      break;
     }
    }
   } while (0);
   do {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 120 >> 2] & 1](i43) | 0)) {
     if (__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i43, i4) | 0) {
      break;
     }
     i17 = HEAP32[i43 + 36 >> 2] | 0;
     do {
      if ((i17 | 0) == 0) {
       if ((i43 | 0) == (i2 | 0)) {
        break L13;
       }
       i47 = HEAP32[i43 + 28 >> 2] | 0;
       if ((i47 | 0) != 0) {
        i50 = i47;
        break;
       }
       i47 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i43, i2) | 0;
       if ((i47 | 0) == 0) {
        break L13;
       } else {
        i50 = i47;
       }
      } else {
       i50 = i17;
      }
     } while (0);
     if ((HEAP32[i50 + 12 >> 2] & 4 | 0) == 0) {
      i51 = i50;
     } else {
      i42 = i44;
      i43 = i50;
      continue L13;
     }
     while (1) {
      if ((i51 | 0) == (i2 | 0)) {
       break L13;
      }
      i17 = HEAP32[i51 + 28 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i45 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i51, i2) | 0;
       if ((i45 | 0) == 0) {
        break L13;
       } else {
        i52 = i45;
       }
      } else {
       i52 = i17;
      }
      if ((HEAP32[i52 + 12 >> 2] & 4 | 0) == 0) {
       i51 = i52;
      } else {
       i42 = i44;
       i43 = i52;
       continue L13;
      }
     }
    }
   } while (0);
   if ((i43 | 0) == (i2 | 0)) {
    break;
   }
   i17 = HEAP32[i43 + 28 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i45 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i43, i2) | 0;
    if ((i45 | 0) == 0) {
     break;
    } else {
     i53 = i45;
    }
   } else {
    i53 = i17;
   }
   if ((HEAP32[i53 + 12 >> 2] & 4 | 0) == 0) {
    i54 = i53;
   } else {
    i42 = i44;
    i43 = i53;
    continue;
   }
   while (1) {
    if ((i54 | 0) == (i2 | 0)) {
     break L13;
    }
    i17 = HEAP32[i54 + 28 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i45 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i54, i2) | 0;
     if ((i45 | 0) == 0) {
      break L13;
     } else {
      i55 = i45;
     }
    } else {
     i55 = i17;
    }
    if ((HEAP32[i55 + 12 >> 2] & 4 | 0) == 0) {
     i54 = i55;
    } else {
     i42 = i44;
     i43 = i55;
     continue L13;
    }
   }
  }
  i20 = i44;
  i21 = HEAP32[i14 >> 2] | 0;
 }
 if ((i21 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i44 = HEAP32[i21 + 456 >> 2] | 0;
 if ((i44 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i21 = (HEAP32[(__ZNK7WebCore8Document4pageEv(i44) | 0) + 1196 >> 2] | 0) + i20 | 0;
 HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0) | 0) + 1196 >> 2] = i21;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 do {
  if (i13) {
   i14 = 0;
   i15 = 1;
   i16 = 0;
  } else {
   i17 = i12 + 4 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i17 = HEAP32[i12 + 456 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i14 = 0;
    i15 = 1;
    i16 = 0;
    break;
   }
   i18 = i17 + 8 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i14 = HEAP32[i17 + 680 >> 2] | 0;
   i15 = 0;
   i16 = i17;
  }
 } while (0);
 L5 : do {
  if ((i14 | 0) == (i2 | 0)) {
   i19 = 1;
  } else {
   do {
    if ((i14 | 0) != 0) {
     i17 = i14 | 0;
     if (!(__ZNK7WebCore4Node21isRootEditableElementEv(i17) | 0)) {
      break;
     }
     i18 = __ZNK7WebCore4Node19rootEditableElementEv(i17) | 0;
     i17 = HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
     if ((i17 | 0) == 0 | (i18 | 0) == 0) {
      i19 = 0;
      break L5;
     }
     i20 = HEAP32[i17 + 464 >> 2] | 0;
     __ZN7WebCore15rangeOfContentsERNS_4NodeE(i6, i18 | 0);
     i18 = i6 | 0;
     i17 = __ZN7WebCore6Editor16shouldEndEditingEPNS_5RangeE(i20, HEAP32[i18 >> 2] | 0) | 0;
     i20 = HEAP32[i18 >> 2] | 0;
     if ((i20 | 0) == 0) {
      if (i17) {
       break;
      } else {
       i19 = 0;
       break L5;
      }
     }
     i18 = i20 | 0;
     i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i20);
      __ZN3WTF8fastFreeEPv(i20);
      if (i17) {
       break;
      } else {
       i19 = 0;
       break L5;
      }
     } else {
      HEAP32[i18 >> 2] = i21;
      if (i17) {
       break;
      } else {
       i19 = 0;
       break L5;
      }
     }
    }
   } while (0);
   i17 = i1 | 0;
   i21 = HEAP32[(HEAP32[i17 >> 2] | 0) + 72 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 188 >> 2] & 1](i21);
   i21 = i3 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   i20 = i2 | 0;
   L18 : do {
    if (!(i13 | (i18 | 0) == 0)) {
     if ((HEAP32[i12 + 456 >> 2] | 0) != (HEAP32[i18 + 456 >> 2] | 0)) {
      break;
     }
     i22 = HEAP32[i12 + 468 >> 2] | 0;
     if ((HEAP32[i22 + 84 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP8[(HEAP32[i12 + 36 >> 2] | 0) + 183 | 0] & 4) != 0) {
      break;
     }
     i23 = i22 + 32 | 0;
     i24 = HEAP32[i22 + 56 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i25 = HEAP32[i24 + 8 >> 2] | 0;
       i26 = i24 + 8 | 0;
       HEAP32[i26 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     if ((i24 | 0) == (i20 | 0)) {
      break;
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i24, i20) | 0) {
      break;
     }
     if ((__ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i24) | 0) == (i20 | 0)) {
      break;
     }
     i26 = __ZNK7WebCore12EventHandler14mousePressNodeEv(HEAP32[i18 + 472 >> 2] | 0) | 0;
     do {
      if ((i26 | 0) != 0) {
       i25 = i26 + 32 | 0;
       if ((HEAP32[i26 + 12 >> 2] & 2048 | 0) == 0) {
        i27 = i25 | 0;
       } else {
        i27 = HEAP32[i25 >> 2] | 0;
       }
       if ((HEAP32[i27 >> 2] | 0) == 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 172 >> 2] & 1](i26) | 0) {
        break;
       }
       i25 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i23) | 0;
       if ((i25 | 0) == 0) {
        break L18;
       }
       i28 = __ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i25 | 0) | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       if ((HEAP32[i28 + 12 >> 2] & 16 | 0) == 0) {
        break L18;
       }
       i25 = HEAP32[(HEAP32[i28 + 44 >> 2] | 0) + 12 >> 2] | 0;
       if ((i25 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i25 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break L18;
       }
      }
     } while (0);
     __ZN7WebCore14FrameSelection5clearEv(i22);
    }
   } while (0);
   if ((i2 | 0) == 0) {
    do {
     if (!i15) {
      i18 = i7 | 0;
      HEAP32[i18 >> 2] = 0;
      __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i16, i7, 0) | 0;
      i20 = HEAP32[i18 >> 2] | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      i18 = i20 + 8 | 0;
      i20 = i18 | 0;
      i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 72 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 192 >> 2] & 7](i18, 0);
    i19 = 1;
    break;
   }
   i18 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i23 = i18 + 8 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i23 = i18 + 680 | 0;
   L54 : do {
    if ((HEAP32[i23 >> 2] | 0) == (i2 | 0)) {
     i20 = HEAP32[(HEAP32[i17 >> 2] | 0) + 72 >> 2] | 0;
     i26 = HEAP32[(HEAP32[i20 >> 2] | 0) + 192 >> 2] | 0;
     i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 360 >> 2] & 1](i2) | 0;
     FUNCTION_TABLE_vii[i26 & 7](i20, i24);
     i29 = 1;
    } else {
     do {
      if ((i16 | 0) != (i18 | 0) & (i15 ^ 1)) {
       i24 = i8 | 0;
       HEAP32[i24 >> 2] = 0;
       __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i16, i8, 0) | 0;
       i20 = HEAP32[i24 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       i24 = i20 + 8 | 0;
       i20 = i24 | 0;
       i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
      }
     } while (0);
     i22 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       if ((HEAP32[i22 + 32 >> 2] | 0) != 0) {
        break;
       }
       i24 = i9 | 0;
       HEAP32[i24 >> 2] = 0;
       __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i9);
       i26 = HEAP32[i24 >> 2] | 0;
       if ((i26 | 0) == 0) {
        i29 = 0;
        break L54;
       }
       i24 = i26 + 4 | 0;
       i26 = i24 | 0;
       i20 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) != 0) {
        HEAP32[i26 >> 2] = i20;
        i29 = 0;
        break L54;
       }
       i20 = i24 - 4 | 0;
       if ((i20 | 0) == 0) {
        i29 = 0;
        break L54;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
       i29 = 0;
       break L54;
      }
     } while (0);
     i20 = i10 | 0;
     HEAP32[i21 >> 2] = 0;
     HEAP32[i20 >> 2] = i22;
     __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i10);
     i24 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i20 = i24 + 4 | 0;
       i26 = i20 | 0;
       i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) != 0) {
        HEAP32[i26 >> 2] = i25;
        break;
       }
       i25 = i20 - 4 | 0;
       if ((i25 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
      }
     } while (0);
     i24 = i2 + 8 | 0;
     i22 = HEAP32[i24 >> 2] | 0;
     i25 = i11 | 0;
     HEAP32[i25 >> 2] = i2;
     HEAP32[i24 >> 2] = i22 + 2;
     i22 = __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i18, i11, i4) | 0;
     i24 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i25 = i24 + 8 | 0;
       i20 = i25 | 0;
       i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     do {
      if (i22) {
       if ((HEAP32[i23 >> 2] | 0) != (i2 | 0)) {
        i30 = 1;
        break;
       }
       i24 = HEAP32[(HEAP32[i17 >> 2] | 0) + 72 >> 2] | 0;
       i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 192 >> 2] | 0;
       i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 360 >> 2] & 1](i2) | 0;
       FUNCTION_TABLE_vii[i25 & 7](i24, i26);
       i30 = 1;
      } else {
       i30 = 0;
      }
     } while (0);
     i22 = i2 + 8 | 0;
     i26 = i22 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      i29 = i30;
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      i29 = i30;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     i29 = i30;
    }
   } while (0);
   i17 = i18 + 8 | 0;
   i23 = i17 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    i19 = i29;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i19 = i29;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i19 = i29;
  }
 } while (0);
 do {
  if (!i15) {
   i29 = i16 + 8 | 0;
   i30 = i29 | 0;
   i2 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 if (i13) {
  STACKTOP = i5;
  return i19 | 0;
 }
 i13 = i12 + 4 | 0;
 i12 = i13 | 0;
 i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i12 >> 2] = i16;
  STACKTOP = i5;
  return i19 | 0;
 }
 i16 = i13 - 4 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i5;
  return i19 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
 STACKTOP = i5;
 return i19 | 0;
}
function __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 L1 : do {
  if ((i3 | 0) == 0) {
   i5 = i2 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = 0;
   i8 = i5;
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i6;
  } else {
   i6 = i3 + 12 | 0;
   L3 : do {
    if ((HEAP32[i6 >> 2] & 4 | 0) == 0) {
     i11 = 0;
    } else {
     i5 = i3;
     do {
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 352 >> 2] & 1](i5, i4) | 0)) {
       if ((__ZNK7WebCore7Element10shadowRootEv(i5) | 0) == 0) {
        break;
       }
       if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
        i11 = 0;
        break L3;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 576 >> 2] & 1](i3) | 0)) {
        i11 = 0;
        break L3;
       }
      }
     } while (0);
     i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 364 >> 2] & 1](i5) | 0;
     i13 = i12 << 16 >> 16;
     if (i12 << 16 >> 16 >= 0) {
      i11 = i13;
      break;
     }
     i12 = __ZN7WebCore22NodeRenderingTraversal11nextInScopeEPKNS_4NodeE(i3) | 0;
     if ((i12 | 0) == 0) {
      i11 = i13;
      break;
     } else {
      i14 = i12;
     }
     L11 : while (1) {
      i12 = i14 + 12 | 0;
      L13 : do {
       if ((HEAP32[i12 >> 2] & 4 | 0) != 0) {
        i15 = i14;
        i16 = i14;
        do {
         if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 352 >> 2] & 1](i15, i4) | 0)) {
          if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 352 >> 2] & 1](i15, i4) | 0) {
           break L13;
          }
          if ((__ZNK7WebCore7Element10shadowRootEv(i15) | 0) == 0) {
           break L13;
          }
          if ((HEAP32[i12 >> 2] & 16 | 0) == 0) {
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 576 >> 2] & 1](i14) | 0) {
           break L13;
          }
         }
        } while (0);
        if ((HEAP32[i12 >> 2] & 4 | 0) == 0) {
         i17 = i15;
         i18 = 53;
         break L11;
        }
        do {
         if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 352 >> 2] & 1](i15, i4) | 0)) {
          if ((__ZNK7WebCore7Element10shadowRootEv(i15) | 0) == 0) {
           break;
          }
          if ((HEAP32[i12 >> 2] & 16 | 0) == 0) {
           i17 = i15;
           i18 = 48;
           break L11;
          }
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 576 >> 2] & 1](i14) | 0)) {
           i17 = i15;
           i18 = 49;
           break L11;
          }
         }
        } while (0);
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 364 >> 2] & 1](i15) | 0) << 16 >> 16 > -1) {
         i17 = i15;
         i18 = 50;
         break L11;
        }
       }
      } while (0);
      i12 = __ZN7WebCore22NodeRenderingTraversal11nextInScopeEPKNS_4NodeE(i14) | 0;
      if ((i12 | 0) == 0) {
       i11 = i13;
       break L3;
      } else {
       i14 = i12;
      }
     }
     if ((i18 | 0) == 48) {
      STACKTOP = i1;
      return i17 | 0;
     } else if ((i18 | 0) == 49) {
      STACKTOP = i1;
      return i17 | 0;
     } else if ((i18 | 0) == 50) {
      STACKTOP = i1;
      return i17 | 0;
     } else if ((i18 | 0) == 53) {
      STACKTOP = i1;
      return i17 | 0;
     }
    }
   } while (0);
   i13 = __ZN7WebCore15FocusController28findElementWithExactTabIndexEPNS_4NodeEiPNS_13KeyboardEventENS_14FocusDirectionE(0, __ZN7WebCore22NodeRenderingTraversal11nextInScopeEPKNS_4NodeE(i3) | 0, i11, i4, 1) | 0;
   if ((i13 | 0) != 0) {
    i17 = i13;
    STACKTOP = i1;
    return i17 | 0;
   }
   if ((i11 | 0) == 0) {
    i17 = 0;
    STACKTOP = i1;
    return i17 | 0;
   }
   i13 = i2 | 0;
   i5 = HEAP32[i13 >> 2] | 0;
   i12 = HEAP32[i5 + 4 >> 2] | 0;
   if ((HEAP32[i6 >> 2] & 4 | 0) == 0) {
    i7 = 0;
    i8 = i13;
    i9 = i12;
    i10 = i5;
    break;
   }
   i16 = i3;
   do {
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 352 >> 2] & 1](i16, i4) | 0)) {
     if ((__ZNK7WebCore7Element10shadowRootEv(i16) | 0) == 0) {
      break;
     }
     if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
      i7 = 0;
      i8 = i13;
      i9 = i12;
      i10 = i5;
      break L1;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 576 >> 2] & 1](i3) | 0)) {
      i7 = 0;
      i8 = i13;
      i9 = i12;
      i10 = i5;
      break L1;
     }
    }
   } while (0);
   i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 364 >> 2] & 1](i16) | 0) << 16 >> 16;
   i8 = i13;
   i9 = i12;
   i10 = i5;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i19 = i10;
  } else {
   i3 = 0;
   i2 = i9;
   i11 = 32768;
   while (1) {
    i18 = i2 + 12 | 0;
    L51 : do {
     if ((HEAP32[i18 >> 2] & 4 | 0) == 0) {
      i20 = i11;
      i21 = i3;
     } else {
      i14 = i2;
      i6 = i2;
      do {
       if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 352 >> 2] & 1](i14, i4) | 0)) {
        if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 352 >> 2] & 1](i14, i4) | 0) {
         i20 = i11;
         i21 = i3;
         break L51;
        }
        if ((__ZNK7WebCore7Element10shadowRootEv(i14) | 0) == 0) {
         i20 = i11;
         i21 = i3;
         break L51;
        }
        if ((HEAP32[i18 >> 2] & 16 | 0) == 0) {
         break;
        }
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 576 >> 2] & 1](i2) | 0) {
         i20 = i11;
         i21 = i3;
         break L51;
        }
       }
      } while (0);
      i6 = i2;
      if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 364 >> 2] & 1](i14) | 0) << 16 >> 16 | 0) <= (i7 | 0)) {
       i20 = i11;
       i21 = i3;
       break;
      }
      if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 364 >> 2] & 1](i14) | 0) << 16 >> 16 | 0) >= (i11 | 0)) {
       i20 = i11;
       i21 = i3;
       break;
      }
      i20 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 364 >> 2] & 1](i14) | 0) << 16 >> 16;
      i21 = i14;
     }
    } while (0);
    i18 = __ZN7WebCore22NodeRenderingTraversal11nextInScopeEPKNS_4NodeE(i2) | 0;
    if ((i18 | 0) == 0) {
     break;
    } else {
     i3 = i21;
     i2 = i18;
     i11 = i20;
    }
   }
   if ((i21 | 0) == 0) {
    i19 = HEAP32[i8 >> 2] | 0;
    break;
   } else {
    i17 = i21;
    STACKTOP = i1;
    return i17 | 0;
   }
  }
 } while (0);
 i17 = __ZN7WebCore15FocusController28findElementWithExactTabIndexEPNS_4NodeEiPNS_13KeyboardEventENS_14FocusDirectionE(0, HEAP32[i19 + 4 >> 2] | 0, 0, i4, 1) | 0;
 STACKTOP = i1;
 return i17 | 0;
}
function __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i2 = i5 | 0;
  while (1) {
   i5 = __ZN7WebCore22NodeRenderingTraversal16lastChildInScopeEPKNS_4NodeE(i2) | 0;
   if ((i5 | 0) == 0) {
    i6 = i2;
    break;
   } else {
    i2 = i5;
   }
  }
 }
 i2 = (i3 | 0) != 0;
 L6 : do {
  if (i2) {
   i5 = __ZN7WebCore22NodeRenderingTraversal15previousInScopeEPKNS_4NodeE(i3) | 0;
   i7 = i3 + 12 | 0;
   if ((HEAP32[i7 >> 2] & 4 | 0) == 0) {
    i8 = i5;
    i9 = 0;
    break;
   }
   i10 = i3;
   do {
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 352 >> 2] & 1](i10, i4) | 0)) {
     if ((__ZNK7WebCore7Element10shadowRootEv(i10) | 0) == 0) {
      break;
     }
     if ((HEAP32[i7 >> 2] & 16 | 0) == 0) {
      i8 = i5;
      i9 = 0;
      break L6;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 576 >> 2] & 1](i3) | 0)) {
      i8 = i5;
      i9 = 0;
      break L6;
     }
    }
   } while (0);
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 364 >> 2] & 1](i10) | 0;
   i11 = i7 << 16 >> 16;
   if (i7 << 16 >> 16 >= 0) {
    i8 = i5;
    i9 = i11;
    break;
   }
   if ((i5 | 0) == 0) {
    i8 = 0;
    i9 = i11;
    break;
   } else {
    i12 = i5;
   }
   L15 : while (1) {
    i7 = i12 + 12 | 0;
    L17 : do {
     if ((HEAP32[i7 >> 2] & 4 | 0) != 0) {
      i13 = i12;
      i14 = i12;
      do {
       if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 352 >> 2] & 1](i13, i4) | 0)) {
        if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 352 >> 2] & 1](i13, i4) | 0) {
         break L17;
        }
        if ((__ZNK7WebCore7Element10shadowRootEv(i13) | 0) == 0) {
         break L17;
        }
        if ((HEAP32[i7 >> 2] & 16 | 0) == 0) {
         break;
        }
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 576 >> 2] & 1](i12) | 0) {
         break L17;
        }
       }
      } while (0);
      if ((HEAP32[i7 >> 2] & 4 | 0) == 0) {
       i15 = i13;
       i16 = 47;
       break L15;
      }
      do {
       if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 352 >> 2] & 1](i13, i4) | 0)) {
        if ((__ZNK7WebCore7Element10shadowRootEv(i13) | 0) == 0) {
         break;
        }
        if ((HEAP32[i7 >> 2] & 16 | 0) == 0) {
         i15 = i13;
         i16 = 48;
         break L15;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 576 >> 2] & 1](i12) | 0)) {
         i15 = i13;
         i16 = 49;
         break L15;
        }
       }
      } while (0);
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 364 >> 2] & 1](i13) | 0) << 16 >> 16 > -1) {
       i15 = i13;
       i16 = 50;
       break L15;
      }
     }
    } while (0);
    i7 = __ZN7WebCore22NodeRenderingTraversal15previousInScopeEPKNS_4NodeE(i12) | 0;
    if ((i7 | 0) == 0) {
     i8 = i5;
     i9 = i11;
     break L6;
    } else {
     i12 = i7;
    }
   }
   if ((i16 | 0) == 47) {
    STACKTOP = i1;
    return i15 | 0;
   } else if ((i16 | 0) == 48) {
    STACKTOP = i1;
    return i15 | 0;
   } else if ((i16 | 0) == 49) {
    STACKTOP = i1;
    return i15 | 0;
   } else if ((i16 | 0) == 50) {
    STACKTOP = i1;
    return i15 | 0;
   }
  } else {
   i8 = i6;
   i9 = 0;
  }
 } while (0);
 i12 = __ZN7WebCore15FocusController28findElementWithExactTabIndexEPNS_4NodeEiPNS_13KeyboardEventENS_14FocusDirectionE(0, i8, i9, i4, 2) | 0;
 if ((i12 | 0) != 0) {
  i15 = i12;
  STACKTOP = i1;
  return i15 | 0;
 }
 i12 = (i9 | 0) == 0 | i2 ^ 1 ? 32767 : i9;
 if ((i6 | 0) == 0) {
  i15 = 0;
  STACKTOP = i1;
  return i15 | 0;
 } else {
  i17 = i6;
  i18 = 0;
  i19 = 0;
 }
 while (1) {
  i6 = i17 + 12 | 0;
  L45 : do {
   if ((HEAP32[i6 >> 2] & 4 | 0) == 0) {
    i20 = i19;
    i21 = i18;
   } else {
    i9 = i17;
    i2 = i17;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0) {
      i16 = 32;
     } else {
      if ((__ZNK7WebCore7Element10shadowRootEv(i9) | 0) == 0) {
       i16 = 32;
       break;
      }
      if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
       i22 = 0;
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 576 >> 2] & 1](i17) | 0) {
       i16 = 32;
      } else {
       i22 = 0;
      }
     }
    } while (0);
    if ((i16 | 0) == 32) {
     i16 = 0;
     i22 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 364 >> 2] & 1](i9) | 0) << 16 >> 16;
    }
    L54 : do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0) {
      i16 = 43;
     } else {
      do {
       if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0)) {
        if ((__ZNK7WebCore7Element10shadowRootEv(i9) | 0) == 0) {
         break;
        }
        if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
         i16 = 43;
         break L54;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 576 >> 2] & 1](i17) | 0)) {
         i16 = 43;
         break L54;
        }
       }
      } while (0);
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0) {
       i20 = i19;
       i21 = i18;
       break L45;
      }
      if ((__ZNK7WebCore7Element10shadowRootEv(i9) | 0) == 0) {
       i20 = i19;
       i21 = i18;
       break L45;
      }
      if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
       i23 = 1;
      } else {
       i23 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 576 >> 2] & 1](i17) | 0) ^ 1;
      }
      if (!(i23 & (i22 | 0) < (i12 | 0) & (i22 | 0) > (i19 | 0))) {
       i20 = i19;
       i21 = i18;
       break L45;
      }
     }
    } while (0);
    if ((i16 | 0) == 43) {
     i16 = 0;
     if (!((i22 | 0) < (i12 | 0) & (i22 | 0) > (i19 | 0))) {
      i20 = i19;
      i21 = i18;
      break;
     }
    }
    i20 = i22;
    i21 = i9;
   }
  } while (0);
  i6 = __ZN7WebCore22NodeRenderingTraversal15previousInScopeEPKNS_4NodeE(i17) | 0;
  if ((i6 | 0) == 0) {
   i15 = i21;
   break;
  } else {
   i17 = i6;
   i18 = i21;
   i19 = i20;
  }
 }
 STACKTOP = i1;
 return i15 | 0;
}
function __ZN7WebCore15FocusController36findFocusableElementAcrossFocusScopeENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = (i2 | 0) == 1;
 do {
  if ((i4 | 0) != 0 & i13) {
   i14 = i4 + 12 | 0;
   if ((HEAP32[i14 >> 2] & 4 | 0) == 0) {
    i15 = 9;
    break;
   }
   i16 = i4;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 352 >> 2] & 1](i16, i5) | 0)) {
    i15 = 9;
    break;
   }
   if ((__ZNK7WebCore7Element10shadowRootEv(i16) | 0) == 0) {
    i15 = 9;
    break;
   }
   if ((HEAP32[i14 >> 2] & 16 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 576 >> 2] & 1](i4) | 0) {
     i15 = 9;
     break;
    }
   }
   i14 = __ZNK7WebCore7Element10shadowRootEv(i16) | 0;
   HEAP32[i9 >> 2] = (i14 | 0) == 0 ? 0 : i14 + 44 | 0;
   i14 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, 1, i9, 0, i5) | 0;
   if ((i14 | 0) != 0) {
    i17 = i14;
    break;
   }
   HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
   i18 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, 1, i10, i4, i5) | 0;
   i15 = 10;
  } else {
   i15 = 9;
  }
 } while (0);
 if ((i15 | 0) == 9) {
  HEAP32[i11 >> 2] = HEAP32[i3 >> 2];
  i18 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i11, i4, i5) | 0;
  i15 = 10;
 }
 L12 : do {
  if ((i15 | 0) == 10) {
   if ((i18 | 0) != 0) {
    i17 = i18;
    break;
   }
   i4 = i3 | 0;
   i11 = (i2 | 0) == 2;
   i10 = i12 | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   while (1) {
    i14 = HEAP32[i9 + 4 >> 2] | 0;
    i16 = HEAP32[i14 + 20 >> 2] | 0;
    do {
     if ((HEAP32[i14 + 12 >> 2] & 4096 | 0) == 0) {
      i15 = 15;
     } else {
      if ((HEAP32[i16 + 4 >> 2] | 0) != (i14 | 0)) {
       i15 = 15;
       break;
      }
      i19 = HEAP32[i14 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i15 | 0) == 15) {
     i15 = 0;
     i14 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 332 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i17 = 0;
      break L12;
     }
     i19 = HEAP32[i14 + 448 >> 2] | 0;
    }
    if ((i19 | 0) == 0) {
     i17 = 0;
     break L12;
    }
    i14 = i19 | 0;
    i20 = i14;
    while (1) {
     i21 = __ZN7WebCore22NodeRenderingTraversal13parentInScopeEPKNS_4NodeE(i20) | 0;
     if ((i21 | 0) == 0) {
      break;
     } else {
      i20 = i21;
     }
    }
    i16 = HEAP32[i20 + 20 >> 2] | 0;
    HEAP32[i4 >> 2] = i16;
    do {
     if (i11) {
      i21 = i19 + 12 | 0;
      if ((HEAP32[i21 >> 2] & 4 | 0) == 0) {
       break;
      }
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i19 >> 2] | 0) + 352 >> 2] & 1](i19, i5) | 0)) {
       break;
      }
      if ((__ZNK7WebCore7Element10shadowRootEv(i19) | 0) == 0) {
       break;
      }
      if ((HEAP32[i21 >> 2] & 16 | 0) == 0) {
       i17 = i19;
       break L12;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 576 >> 2] & 1](i19) | 0)) {
       i17 = i19;
       break L12;
      }
     }
    } while (0);
    HEAP32[i10 >> 2] = i16;
    i20 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i12, i14, i5) | 0;
    if ((i20 | 0) == 0) {
     i9 = i16;
    } else {
     i17 = i20;
     break;
    }
   }
  }
 } while (0);
 i12 = i7 | 0;
 i2 = i8 | 0;
 if (i13) {
  i13 = i17;
  while (1) {
   if ((i13 | 0) == 0) {
    i22 = 0;
    i15 = 39;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 120 >> 2] & 1](i13 | 0) | 0)) {
    i22 = i13;
    i15 = 40;
    break;
   }
   i19 = HEAP32[i13 + 52 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i22 = i13;
    i15 = 41;
    break;
   }
   i3 = HEAP32[i19 + 456 >> 2] | 0;
   HEAP32[i12 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
   i3 = __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i7, 0, i5) | 0;
   if ((i3 | 0) == 0) {
    i22 = i13;
    i15 = 42;
    break;
   } else {
    i13 = i3;
   }
  }
  if ((i15 | 0) == 39) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 40) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 41) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 42) {
   STACKTOP = i6;
   return i22 | 0;
  }
 } else {
  i13 = i17;
  while (1) {
   if ((i13 | 0) == 0) {
    i22 = 0;
    i15 = 37;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 120 >> 2] & 1](i13 | 0) | 0)) {
    i22 = i13;
    i15 = 38;
    break;
   }
   i17 = HEAP32[i13 + 52 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i22 = i13;
    i15 = 43;
    break;
   }
   i7 = HEAP32[i17 + 456 >> 2] | 0;
   HEAP32[i2 >> 2] = (i7 | 0) == 0 ? 0 : i7 + 44 | 0;
   i7 = __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i8, 0, i5) | 0;
   if ((i7 | 0) == 0) {
    i22 = i13;
    i15 = 44;
    break;
   } else {
    i13 = i7;
   }
  }
  if ((i15 | 0) == 37) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 38) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 43) {
   STACKTOP = i6;
   return i22 | 0;
  } else if ((i15 | 0) == 44) {
   STACKTOP = i6;
   return i22 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 88 | 0;
 i12 = i6 + 104 | 0;
 i13 = i6 + 120 | 0;
 if ((i2 | 0) == 0) {
  i14 = 0;
  STACKTOP = i6;
  return i14 | 0;
 }
 i15 = i7;
 i16 = i3;
 HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
  i17 = 4;
 } else {
  if ((HEAP32[i3 + 12 >> 2] | 0) < 1) {
   i17 = 4;
  }
 }
 if ((i17 | 0) == 4) {
  __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i8, i2, 0);
  HEAP32[i9 >> 2] = 0;
  __ZN7WebCore23virtualRectForDirectionENS_14FocusDirectionERKNS_10LayoutRectENS_10LayoutUnitE(i7, i4, i8, i9);
 }
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = 0;
 i8 = i10 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i17 = i10 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i3 = i10 + 16 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = 2147483647;
 _memset(i10 + 24 | 0, 0, 20) | 0;
 HEAP8[i10 + 44 | 0] = 1;
 i3 = i10 + 45 | 0;
 HEAP8[i3] = 1;
 __ZN7WebCore15FocusController29findFocusCandidateInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventERNS_14FocusCandidateE(i1, i2, i7, i4, i5, i10);
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i14 = __ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE(i2, i4) | 0;
  STACKTOP = i6;
  return i14 | 0;
 }
 i7 = __ZN7WebCore17frameOwnerElementERNS_14FocusCandidateE(i10) | 0;
 if ((i7 | 0) != 0) {
  if ((HEAP8[i3] & 1) != 0) {
   __ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i4) | 0;
   i14 = 1;
   STACKTOP = i6;
   return i14 | 0;
  }
  _memset(i11 | 0, 0, 16) | 0;
  i10 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i18 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
  } else {
   i18 = i10;
  }
  i10 = HEAP32[(HEAP32[i18 + 456 >> 2] | 0) + 680 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i18 = i10 | 0;
    if (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(i18, 0) | 0) {
     break;
    }
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i11, i18, 1);
   }
  } while (0);
  i10 = i7 + 52 | 0;
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0);
  if (__ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE(i1, HEAP32[(HEAP32[i10 >> 2] | 0) + 456 >> 2] | 0, i11, i4, i5) | 0) {
   i14 = 1;
   STACKTOP = i6;
   return i14 | 0;
  }
  __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i12, HEAP32[i9 >> 2] | 0, 1);
  i14 = __ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i12, i4, i5) | 0;
  STACKTOP = i6;
  return i14 | 0;
 }
 i12 = __ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(HEAP32[i9 >> 2] | 0, i4) | 0;
 i2 = (HEAP8[i3] & 1) != 0;
 if (!i12) {
  if (i2) {
   __ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE(HEAP32[i17 >> 2] | 0, i4) | 0;
   i14 = 1;
   STACKTOP = i6;
   return i14 | 0;
  } else {
   i17 = HEAP32[i8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 392 >> 2] & 1](i17, 0, i4);
   i14 = 1;
   STACKTOP = i6;
   return i14 | 0;
  }
 }
 if (i2) {
  __ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE(HEAP32[i9 >> 2] | 0, i4) | 0;
  i14 = 1;
  STACKTOP = i6;
  return i14 | 0;
 }
 _memset(i13 | 0, 0, 16) | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i19 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i19 = i2;
 }
 i2 = HEAP32[(HEAP32[i19 + 456 >> 2] | 0) + 680 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i19 = i2 | 0;
   if (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(i19, 0) | 0) {
    break;
   }
   __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i13, i19, 1);
  }
 } while (0);
 i14 = __ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE(i1, HEAP32[i9 >> 2] | 0, i13, i4, i5) | 0;
 STACKTOP = i6;
 return i14 | 0;
}
function __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 | 0;
 if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 10 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i2] = 1;
 i11 = (i9 | 0) == 0;
 if (!i11) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = (i12 | 0) == 0;
 if (!i10) {
  i13 = i12 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 do {
  if ((i13 | 0) != 0) {
   i8 = i13 + 4 | 0;
   i14 = i8 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i8 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 do {
  if (!i11) {
   if ((HEAP32[i9 + 452 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore14FrameSelection10setFocusedEb(HEAP32[i9 + 468 >> 2] | 0, 0);
   i13 = HEAP32[i9 + 456 >> 2] | 0;
   i15 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 32 | 0;
   i8 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i8, i15, 0, 0);
   i15 = i4 | 0;
   HEAP32[i15 >> 2] = i8;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i13, i4, i5);
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 60 >> 2] & 1](i13);
   }
   i13 = HEAP32[i15 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i15 = i13 + 8 | 0;
   i13 = i15 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i13 >> 2] = i8;
    break;
   }
   i8 = i15 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 do {
  if (i10) {
   __ZNK7WebCore6Chrome19focusedFrameChangedEPNS_5FrameE(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0, 0);
   HEAP8[i2] = 0;
  } else {
   do {
    if ((HEAP32[i12 + 452 >> 2] | 0) != 0) {
     if ((HEAP8[i1 + 9 | 0] & 1) == 0) {
      break;
     }
     __ZN7WebCore14FrameSelection10setFocusedEb(HEAP32[i12 + 468 >> 2] | 0, 1);
     i5 = HEAP32[i12 + 456 >> 2] | 0;
     i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 152 | 0;
     i8 = __ZN3WTF10fastMallocEj(56) | 0;
     __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i8, i4, 0, 0);
     i4 = i6 | 0;
     HEAP32[i4 >> 2] = i8;
     i8 = i7 | 0;
     HEAP32[i8 >> 2] = 0;
     __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i5, i6, i7);
     i5 = HEAP32[i8 >> 2] | 0;
     if ((i5 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 1](i5);
     }
     i5 = HEAP32[i4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i4 = i5 + 8 | 0;
     i5 = i4 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i5 >> 2] = i8;
      break;
     }
     i8 = i4 - 8 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
    }
   } while (0);
   __ZNK7WebCore6Chrome19focusedFrameChangedEPNS_5FrameE(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0, i12);
   HEAP8[i2] = 0;
   i8 = i12 + 4 | 0;
   i4 = i8 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i8 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 if (i11) {
  STACKTOP = i3;
  return;
 }
 i11 = i9 + 4 | 0;
 i9 = i11 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i9 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
 i12 = i11 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 1;
 if (i3) {
  HEAP32[i7 >> 2] = i14;
  i15 = __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i7, i4, i5) | 0;
 } else {
  HEAP32[i8 >> 2] = i14;
  i15 = __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i8, i4, i5) | 0;
 }
 if ((i15 | 0) == 0) {
  i16 = 0;
  STACKTOP = i6;
  return i16 | 0;
 }
 if (i3) {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 352 >> 2] & 1](i15, i5) | 0) {
   i16 = i15;
   STACKTOP = i6;
   return i16 | 0;
  }
  if ((__ZNK7WebCore7Element10shadowRootEv(i15) | 0) == 0) {
   i16 = i15;
   STACKTOP = i6;
   return i16 | 0;
  }
  do {
   if ((HEAP32[i15 + 12 >> 2] & 16 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 576 >> 2] & 1](i15) | 0) {
     i16 = i15;
    } else {
     break;
    }
    STACKTOP = i6;
    return i16 | 0;
   }
  } while (0);
  i3 = __ZNK7WebCore7Element10shadowRootEv(i15) | 0;
  HEAP32[i9 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
  i3 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, 1, i9, 0, i5) | 0;
  if ((i3 | 0) != 0) {
   i16 = i3;
   STACKTOP = i6;
   return i16 | 0;
  }
  HEAP32[i10 >> 2] = i14;
  i16 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, 1, i10, i15 | 0, i5) | 0;
  STACKTOP = i6;
  return i16 | 0;
 }
 i10 = i15 | 0;
 i3 = i15 + 12 | 0;
 i9 = i15;
 do {
  if ((HEAP32[i3 >> 2] & 4 | 0) != 0) {
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 352 >> 2] & 1](i15, i5) | 0)) {
    break;
   }
   if ((__ZNK7WebCore7Element10shadowRootEv(i15) | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 >> 2] & 16 | 0) != 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 576 >> 2] & 1](i15) | 0) {
     break;
    }
   }
   i4 = __ZNK7WebCore7Element10shadowRootEv(i15) | 0;
   HEAP32[i11 >> 2] = (i4 | 0) == 0 ? 0 : i4 + 44 | 0;
   i4 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i11, 0, i5) | 0;
   i16 = (i4 | 0) != 0 ? i4 : i15;
   STACKTOP = i6;
   return i16 | 0;
  }
 } while (0);
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 352 >> 2] & 1](i15, i5) | 0) {
  i16 = i15;
  STACKTOP = i6;
  return i16 | 0;
 }
 if ((__ZNK7WebCore7Element10shadowRootEv(i15) | 0) == 0) {
  i16 = i15;
  STACKTOP = i6;
  return i16 | 0;
 }
 do {
  if ((HEAP32[i3 >> 2] & 16 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 576 >> 2] & 1](i15) | 0) {
    i16 = i15;
   } else {
    break;
   }
   STACKTOP = i6;
   return i16 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore7Element10shadowRootEv(i15) | 0;
 HEAP32[i12 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 i3 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i12, 0, i5) | 0;
 if ((i3 | 0) != 0) {
  i16 = i3;
  STACKTOP = i6;
  return i16 | 0;
 }
 HEAP32[i13 >> 2] = i14;
 i16 = __ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i13, i10, i5) | 0;
 STACKTOP = i6;
 return i16 | 0;
}
function __ZN7WebCore15FocusController28findElementWithExactTabIndexEPNS_4NodeEiPNS_13KeyboardEventENS_14FocusDirectionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i5 | 0) == 1) {
  i5 = i2;
  L5 : while (1) {
   i1 = i5 + 12 | 0;
   L7 : do {
    if ((HEAP32[i1 >> 2] & 4 | 0) != 0) {
     i7 = i5;
     i8 = i5;
     do {
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 352 >> 2] & 1](i7, i4) | 0)) {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 352 >> 2] & 1](i7, i4) | 0) {
        break L7;
       }
       if ((__ZNK7WebCore7Element10shadowRootEv(i7) | 0) == 0) {
        break L7;
       }
       if ((HEAP32[i1 >> 2] & 16 | 0) == 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 576 >> 2] & 1](i5) | 0) {
        break L7;
       }
      }
     } while (0);
     L15 : do {
      if ((HEAP32[i1 >> 2] & 4 | 0) == 0) {
       i9 = 0;
      } else {
       do {
        if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 352 >> 2] & 1](i7, i4) | 0)) {
         if ((__ZNK7WebCore7Element10shadowRootEv(i7) | 0) == 0) {
          break;
         }
         if ((HEAP32[i1 >> 2] & 16 | 0) == 0) {
          i9 = 0;
          break L15;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 576 >> 2] & 1](i5) | 0)) {
          i9 = 0;
          break L15;
         }
        }
       } while (0);
       i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 364 >> 2] & 1](i7) | 0) << 16 >> 16;
      }
     } while (0);
     if ((i9 | 0) == (i3 | 0)) {
      i6 = i7;
      i10 = 33;
      break L5;
     }
    }
   } while (0);
   i1 = __ZN7WebCore22NodeRenderingTraversal11nextInScopeEPKNS_4NodeE(i5) | 0;
   if ((i1 | 0) == 0) {
    i6 = 0;
    i10 = 34;
    break;
   } else {
    i5 = i1;
   }
  }
  if ((i10 | 0) == 33) {
   return i6 | 0;
  } else if ((i10 | 0) == 34) {
   return i6 | 0;
  }
 } else {
  i5 = i2;
  L27 : while (1) {
   i2 = i5 + 12 | 0;
   L29 : do {
    if ((HEAP32[i2 >> 2] & 4 | 0) != 0) {
     i9 = i5;
     i1 = i5;
     do {
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0)) {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0) {
        break L29;
       }
       if ((__ZNK7WebCore7Element10shadowRootEv(i9) | 0) == 0) {
        break L29;
       }
       if ((HEAP32[i2 >> 2] & 16 | 0) == 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 576 >> 2] & 1](i5) | 0) {
        break L29;
       }
      }
     } while (0);
     L37 : do {
      if ((HEAP32[i2 >> 2] & 4 | 0) == 0) {
       i11 = 0;
      } else {
       do {
        if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 352 >> 2] & 1](i9, i4) | 0)) {
         if ((__ZNK7WebCore7Element10shadowRootEv(i9) | 0) == 0) {
          break;
         }
         if ((HEAP32[i2 >> 2] & 16 | 0) == 0) {
          i11 = 0;
          break L37;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 576 >> 2] & 1](i5) | 0)) {
          i11 = 0;
          break L37;
         }
        }
       } while (0);
       i11 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 364 >> 2] & 1](i9) | 0) << 16 >> 16;
      }
     } while (0);
     if ((i11 | 0) == (i3 | 0)) {
      i6 = i9;
      i10 = 35;
      break L27;
     }
    }
   } while (0);
   i2 = __ZN7WebCore22NodeRenderingTraversal15previousInScopeEPKNS_4NodeE(i5) | 0;
   if ((i2 | 0) == 0) {
    i6 = 0;
    i10 = 36;
    break;
   } else {
    i5 = i2;
   }
  }
  if ((i10 | 0) == 35) {
   return i6 | 0;
  } else if ((i10 | 0) == 36) {
   return i6 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore15FocusController25advanceFocusDirectionallyENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i10 = i9;
 }
 i9 = HEAP32[i10 + 456 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i10 = HEAP32[i9 + 680 >> 2] | 0;
 i12 = i9 | 0;
 if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i9 | 0)) {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i9);
 }
 i13 = i5;
 _memset(i13 | 0, 0, 16) | 0;
 do {
  if ((i10 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = i10 | 0;
   if (!(__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(i15, 0) | 0)) {
    i16 = __ZN7WebCore53scrollableEnclosingBoxOrParentFrameForNodeInDirectionENS_14FocusDirectionEPNS_4NodeE(i2, i15) | 0;
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i5, i15, 1);
    i14 = i16;
    break;
   }
   if ((HEAP32[i10 + 12 >> 2] & 16 | 0) == 0) {
    i14 = i12;
    break;
   }
   if ((HEAP32[(HEAP32[i15 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i14 = i12;
    break;
   }
   i15 = i10;
   i16 = __ZN7WebCore53scrollableEnclosingBoxOrParentFrameForNodeInDirectionENS_14FocusDirectionEPNS_4NodeE(i2, __ZNK7WebCore15HTMLAreaElement12imageElementEv(i15) | 0) | 0;
   __ZN7WebCore37virtualRectForAreaElementAndDirectionEPNS_15HTMLAreaElementENS_14FocusDirectionE(i6, i15, i2);
   i15 = i6;
   HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
   i14 = i16;
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 456 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[(__ZNK7WebCore8Document4pageEv(i9) | 0) + 1196 >> 2] = 0;
  }
 } while (0);
 i9 = i7;
 i6 = i14;
 while (1) {
  i14 = __ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i6, i5, i2, i3) | 0;
  __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i7, i6, 1);
  HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  i8 = __ZN7WebCore53scrollableEnclosingBoxOrParentFrameForNodeInDirectionENS_14FocusDirectionEPNS_4NodeE(i2, i6) | 0;
  if ((i8 | 0) == 0) {
   i11 = i14;
   i17 = 23;
   break;
  }
  if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i8 | 0)) {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i8);
  }
  if (i14) {
   i11 = 1;
   i17 = 22;
   break;
  } else {
   i6 = i8;
  }
 }
 if ((i17 | 0) == 22) {
  STACKTOP = i4;
  return i11 | 0;
 } else if ((i17 | 0) == 23) {
  STACKTOP = i4;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCoreL39dispatchEventsOnWindowAndFocusedElementEPNS_8DocumentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = __ZNK7WebCore8Document4pageEv(i1) | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP8[i8 + 98 | 0] & 1) == 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if (!i2) {
   i8 = HEAP32[i1 + 680 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 516 >> 2] | 0;
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = 0;
   FUNCTION_TABLE_vii[i9 & 7](i8, i4);
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 + 8 | 0;
   i8 = i10 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i10, i2 ? i4 + 152 | 0 : i4 + 32 | 0, 0, 0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i10;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i1, i5, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 1](i6);
 }
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i10 = i4 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i10 >> 2] = i5;
    break;
   }
   i5 = i4 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 if (!i2) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 + 680 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 512 >> 2] | 0;
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = 0;
 FUNCTION_TABLE_viii[i1 & 1](i2, i7, 0);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15FocusController19setContentIsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 11 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i3 = i1 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = i1 + 36 | 0;
 if (i2) {
  __ZNK7WebCore14ScrollableArea18contentAreaDidShowEv(i4);
 } else {
  __ZNK7WebCore14ScrollableArea18contentAreaDidHideEv(i4);
 }
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = i4;
 while (1) {
  i4 = HEAP32[i3 + 452 >> 2] | 0;
  L16 : do {
   if ((i4 | 0) != 0) {
    i1 = HEAP32[i4 + 636 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i5 = HEAP32[i1 >> 2] | 0;
    i6 = HEAP32[i1 + 4 >> 2] | 0;
    i7 = i5 + (i6 << 2) | 0;
    if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
     break;
    }
    L20 : do {
     if ((i6 | 0) == 0) {
      i8 = i5;
     } else {
      i1 = i5;
      while (1) {
       i9 = HEAP32[i1 >> 2] | 0;
       if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
        i8 = i1;
        break L20;
       }
       i1 = i1 + 4 | 0;
       if ((i1 | 0) == (i7 | 0)) {
        break L16;
       }
      }
     }
    } while (0);
    if ((i8 | 0) == (i7 | 0)) {
     break;
    } else {
     i10 = i8;
    }
    while (1) {
     i5 = HEAP32[i10 >> 2] | 0;
     if (i2) {
      __ZNK7WebCore14ScrollableArea18contentAreaDidShowEv(i5);
     } else {
      __ZNK7WebCore14ScrollableArea18contentAreaDidHideEv(i5);
     }
     i5 = i10 + 4 | 0;
     if ((i5 | 0) == (i7 | 0)) {
      break L16;
     } else {
      i11 = i5;
     }
     while (1) {
      i5 = HEAP32[i11 >> 2] | 0;
      if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
       break;
      }
      i5 = i11 + 4 | 0;
      if ((i5 | 0) == (i7 | 0)) {
       break L16;
      } else {
       i11 = i5;
      }
     }
     if ((i11 | 0) == (i7 | 0)) {
      break;
     } else {
      i10 = i11;
     }
    }
   }
  } while (0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore15FocusController51findFocusableElementDescendingDownIntoFrameDocumentENS_14FocusDirectionEPNS_7ElementEPNS_13KeyboardEventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i6 | 0;
 i9 = i7 | 0;
 L1 : do {
  if ((i2 | 0) == 1) {
   i10 = i3;
   while (1) {
    if ((i10 | 0) == 0) {
     i11 = 0;
     break L1;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 120 >> 2] & 1](i10 | 0) | 0)) {
     i11 = i10;
     break L1;
    }
    i12 = HEAP32[i10 + 52 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i11 = i10;
     break L1;
    }
    i13 = HEAP32[i12 + 456 >> 2] | 0;
    HEAP32[i8 >> 2] = (i13 | 0) == 0 ? 0 : i13 + 44 | 0;
    i13 = __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i6, 0, i4) | 0;
    if ((i13 | 0) == 0) {
     i11 = i10;
     break;
    } else {
     i10 = i13;
    }
   }
  } else {
   i10 = i3;
   while (1) {
    if ((i10 | 0) == 0) {
     i11 = 0;
     break L1;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 120 >> 2] & 1](i10 | 0) | 0)) {
     i11 = i10;
     break L1;
    }
    i13 = HEAP32[i10 + 52 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i11 = i10;
     break L1;
    }
    i12 = HEAP32[i13 + 456 >> 2] | 0;
    HEAP32[i9 >> 2] = (i12 | 0) == 0 ? 0 : i12 + 44 | 0;
    i12 = __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i7, 0, i4) | 0;
    if ((i12 | 0) == 0) {
     i11 = i10;
     break;
    } else {
     i10 = i12;
    }
   }
  }
 } while (0);
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore15FocusController10setFocusedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 9 | 0;
 if (!((HEAP8[i5] & 1) != 0 ^ i2)) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i5] = i2 & 1;
 i5 = i1 + 4 | 0;
 if (!i2) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
  } else {
   i7 = i6;
  }
  __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(HEAP32[i7 + 472 >> 2] | 0, 0);
 }
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i8 = i7 + 4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i1, i4);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 4 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 + 452 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14FrameSelection10setFocusedEb(HEAP32[i4 + 468 >> 2] | 0, i2);
 __ZN7WebCoreL39dispatchEventsOnWindowAndFocusedElementEPNS_8DocumentEb(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore15FocusController9setActiveEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv(i4);
   __ZN7WebCore9FrameView18updateControlTintsEv(i4);
  }
 } while (0);
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i6 = i5;
 }
 __ZN7WebCore14FrameSelection21pageActivationChangedEv(HEAP32[i6 + 468 >> 2] | 0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 9 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCoreL39dispatchEventsOnWindowAndFocusedElementEPNS_8DocumentEb(HEAP32[i6 + 456 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore15FocusController20findFocusableElementENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 1) {
  HEAP32[i7 >> 2] = i9;
  i10 = __ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i7, i4, i5) | 0;
  STACKTOP = i6;
  return i10 | 0;
 } else {
  HEAP32[i8 >> 2] = i9;
  i10 = __ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE(i1, i8, i4, i5) | 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore15FocusController15setInitialFocusENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 switch (i2 | 0) {
 case 5:
 case 6:
 case 3:
 case 4:
  {
   i4 = __ZN7WebCore15FocusController25advanceFocusDirectionallyENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3) | 0;
   break;
  }
 case 1:
 case 2:
  {
   i4 = __ZN7WebCore15FocusController27advanceFocusInDocumentOrderENS_14FocusDirectionEPNS_13KeyboardEventEb(i1, i2, i3, 1) | 0;
   break;
  }
 default:
  {
   i4 = 0;
  }
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i5 = i3;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[i5 + 456 >> 2] | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 switch (i2 | 0) {
 case 1:
 case 2:
  {
   i5 = __ZN7WebCore15FocusController27advanceFocusInDocumentOrderENS_14FocusDirectionEPNS_13KeyboardEventEb(i1, i2, i3, i4) | 0;
   return i5 | 0;
  }
 case 5:
 case 6:
 case 3:
 case 4:
  {
   i5 = __ZN7WebCore15FocusController25advanceFocusDirectionallyENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3) | 0;
   return i5 | 0;
  }
 default:
  {
   i5 = 0;
   return i5 | 0;
  }
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
function __ZNK7WebCore20FocusNavigationScope5ownerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   i3 = HEAP32[i2 + 92 >> 2] | 0;
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 448 >> 2] | 0;
 return i3 | 0;
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
function __ZN7WebCore20FocusNavigationScope22focusNavigationScopeOfEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 while (1) {
  i2 = __ZN7WebCore22NodeRenderingTraversal13parentInScopeEPKNS_4NodeE(i3) | 0;
  if ((i2 | 0) == 0) {
   break;
  } else {
   i3 = i2;
  }
 }
 HEAP32[i1 >> 2] = HEAP32[i3 + 20 >> 2];
 return;
}
function __ZN7WebCore20FocusNavigationScope33focusNavigationScopeOwnedByIFrameEPNS_21HTMLFrameOwnerElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 52 >> 2] | 0) + 456 >> 2] | 0;
 HEAP32[i1 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 return;
}
function __ZN7WebCore20FocusNavigationScope37focusNavigationScopeOwnedByShadowHostEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore7Element10shadowRootEv(i2) | 0;
 HEAP32[i1 >> 2] = (i3 | 0) == 0 ? 0 : i3 + 44 | 0;
 return;
}
function __ZNK7WebCore15FocusController18focusedOrMainFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15FocusControllerC2ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15FocusControllerC1ERNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore20FocusNavigationScopeC2EPNS_9TreeScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore20FocusNavigationScopeC1EPNS_9TreeScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
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
function __ZNK7WebCore20FocusNavigationScope8rootNodeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] | 0;
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
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15FocusControllerC2ERNS_4PageE,b1,__ZN7WebCore20FocusNavigationScopeC2EPNS_9TreeScopeE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15FocusControllerC2ERNS_4PageE","__ZN7WebCore15FocusController20nextFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE","__ZN7WebCore15FocusController10setFocusedEb","_strlen","__ZN7WebCore15FocusController29findFocusCandidateInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventERNS_14FocusCandidateE","__ZN7WebCore15FocusController25advanceFocusDirectionallyENS_14FocusDirectionEPNS_13KeyboardEventE","__ZN7WebCore15FocusController24previousFocusableElementENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE","__ZN7WebCore15FocusController27advanceFocusInDocumentOrderENS_14FocusDirectionEPNS_13KeyboardEventEb","__ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb","__ZNK7WebCore20FocusNavigationScope8rootNodeEv","__ZNK7WebCore15FocusController18focusedOrMainFrameEv","__ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE","_memset","__ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE","__ZN7WebCore15FocusController51findFocusableElementDescendingDownIntoFrameDocumentENS_14FocusDirectionEPNS_7ElementEPNS_13KeyboardEventE","__ZNK7WebCore20FocusNavigationScope5ownerEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCoreL39dispatchEventsOnWindowAndFocusedElementEPNS_8DocumentEb","__ZN7WebCore20FocusNavigationScope33focusNavigationScopeOwnedByIFrameEPNS_21HTMLFrameOwnerElementE","__ZN7WebCore15FocusController19setContentIsVisibleEb","__ZN7WebCore15FocusController15setInitialFocusENS_14FocusDirectionEPNS_13KeyboardEventE","__ZN7WebCore15FocusController9setActiveEb","__ZN7WebCore15FocusController28findElementWithExactTabIndexEPNS_4NodeEiPNS_13KeyboardEventENS_14FocusDirectionE","__ZN7WebCore15FocusController36advanceFocusDirectionallyInContainerEPNS_4NodeERKNS_10LayoutRectENS_14FocusDirectionEPNS_13KeyboardEventE","__ZN7WebCore15FocusController20findFocusableElementENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore15FocusController31findFocusableElementRecursivelyENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE","__ZN7WebCore20FocusNavigationScopeC2EPNS_9TreeScopeE","__ZN7WebCore20FocusNavigationScope37focusNavigationScopeOwnedByShadowHostEPNS_4NodeE","_memcpy","__ZN7WebCore15FocusController36findFocusableElementAcrossFocusScopeENS_14FocusDirectionENS_20FocusNavigationScopeEPNS_4NodeEPNS_13KeyboardEventE","__ZN7WebCore20FocusNavigationScope22focusNavigationScopeOfEPNS_4NodeE"]

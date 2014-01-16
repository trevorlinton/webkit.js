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
var __ZN7WebCore11EllipsisBoxC1ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiifffii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiifffii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
  var __ZTVN7WebCore11EllipsisBoxE=(H_BASE+8)|0;
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
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_viff=env.invoke_viff;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11EllipsisBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 d21 = +_round(+(+HEAPF32[i1 + 20 >> 2]));
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i22 = -2147483648;
    break;
   }
   i22 = ~~d21;
  } else {
   i22 = 2147483647;
  }
 } while (0);
 d21 = +_round(+(+HEAPF32[i1 + 24 >> 2]));
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i23 = -2147483648;
    break;
   }
   i23 = ~~d21;
  } else {
   i23 = 2147483647;
  }
 } while (0);
 i24 = (HEAP32[i5 >> 2] | 0) + i22 | 0;
 i22 = (HEAP32[i5 + 4 >> 2] | 0) + i23 | 0;
 do {
  if ((HEAP8[i1 + 36 | 0] & 1) != 0) {
   i23 = i1 + 16 | 0;
   i5 = HEAP32[i23 >> 2] | 0;
   i25 = __ZNK7WebCore15RenderBlockFlow11lineAtIndexEi(i5, (__ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i5, 0, 0) | 0) - 1 | 0) | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i25 + 44 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i25 = HEAP32[i5 + 16 >> 2] | 0;
   if ((HEAP32[i25 + 20 >> 2] & 768 | 0) == 256) {
    i26 = HEAP32[(HEAP32[i25 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i26 = HEAP32[i25 + 36 >> 2] | 0;
   }
   i25 = (HEAP32[i26 + 52 >> 2] & 134217728 | 0) != 0 ? i5 : 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i23 >> 2] | 0;
   i27 = (HEAP32[i5 + 20 >> 2] & 768 | 0) == 256;
   do {
    if ((HEAP32[i1 + 32 >> 2] & 1 | 0) == 0) {
     if (i27) {
      i28 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i28 = HEAP32[i5 + 36 >> 2] | 0;
      break;
     }
    } else {
     if (i27) {
      i29 = HEAP32[i5 + 8 >> 2] | 0;
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i29 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i28 = HEAP32[i29 + 36 >> 2] | 0;
       break;
      } else {
       i28 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i29) | 0;
       break;
      }
     } else {
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i28 = HEAP32[i5 + 36 >> 2] | 0;
       break;
      } else {
       i28 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i5) | 0;
       break;
      }
     }
    }
   } while (0);
   d21 = +(i24 | 0) + +HEAPF32[i1 + 28 >> 2] - +HEAPF32[i25 + 20 >> 2];
   do {
    if (d21 < +2147483647) {
     if (d21 <= +-2147483648) {
      i30 = -2147483648;
      break;
     }
     i30 = ~~d21;
    } else {
     i30 = 2147483647;
    }
   } while (0);
   i5 = (_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i28) | 0) + 4 >> 2])) | 0) + i22 | 0;
   d21 = +HEAPF32[i25 + 24 >> 2];
   i27 = HEAP32[i25 + 16 >> 2] | 0;
   i29 = (HEAP32[i27 + 20 >> 2] & 768 | 0) == 256;
   do {
    if ((HEAP32[i25 + 32 >> 2] & 1 | 0) == 0) {
     if (i29) {
      i31 = HEAP32[(HEAP32[i27 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i31 = HEAP32[i27 + 36 >> 2] | 0;
      break;
     }
    } else {
     if (i29) {
      i32 = HEAP32[i27 + 8 >> 2] | 0;
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i31 = HEAP32[i32 + 36 >> 2] | 0;
       break;
      } else {
       i31 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i32) | 0;
       break;
      }
     } else {
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i27 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i31 = HEAP32[i27 + 36 >> 2] | 0;
       break;
      } else {
       i31 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i27) | 0;
       break;
      }
     }
    }
   } while (0);
   d33 = +(i5 | 0) - (d21 + +(_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i31) | 0) + 4 >> 2])) | 0));
   do {
    if (d33 < +2147483647) {
     if (d33 <= +-2147483648) {
      i34 = -2147483648;
      break;
     }
     i34 = ~~d33;
    } else {
     i34 = 2147483647;
    }
   } while (0);
   i5 = HEAP32[(HEAP32[i25 >> 2] | 0) + 32 >> 2] | 0;
   HEAP32[i9 >> 2] = i30;
   HEAP32[i9 + 4 >> 2] = i34;
   HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
   if (!(FUNCTION_TABLE_iiiiiiii[i5 & 3](i25, i2, i3, i4, i9, i10, i11) | 0)) {
    break;
   }
   i5 = HEAP32[i23 >> 2] | 0;
   i27 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
   i29 = (HEAP32[i4 + 4 >> 2] | 0) - i34 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i4 >> 2] | 0) - i30;
   HEAP32[i12 + 4 >> 2] = i29;
   FUNCTION_TABLE_viii[i27 & 1](i5, i3, i12);
   i35 = 1;
   STACKTOP = i8;
   return i35 | 0;
  }
 } while (0);
 d33 = +HEAPF32[i1 + 28 >> 2];
 do {
  if (d33 < +2147483647) {
   if (d33 <= +-2147483648) {
    i36 = 0;
    i37 = -2147483648;
    break;
   }
   i36 = 0;
   i37 = ~~d33;
  } else {
   i36 = 0;
   i37 = 2147483647;
  }
 } while (0);
 i12 = HEAP32[i1 + 40 >> 2] | 0;
 HEAP32[i14 >> 2] = i24;
 HEAP32[i14 + 4 >> 2] = i22;
 i14 = i13 + 8 | 0;
 HEAP32[i14 >> 2] = i37;
 HEAP32[i14 + 4 >> 2] = i12 | i36;
 i36 = i1 + 16 | 0;
 i1 = HEAP32[i36 >> 2] | 0;
 i12 = (HEAP32[i1 + 20 >> 2] & 768 | 0) == 256;
 if (i12) {
  i38 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i38 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i38 + 40 >> 2] & 6144 | 0) == 0) {
   if (i12) {
    i39 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i39 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i39 + 44 >> 2] & 1920 | 0) == 0) {
    break;
   }
   __ZN7WebCore15HitTestLocation12rectForPointERKNS_11LayoutPointEjjjj(i19, i4 | 0, 0, 0, 0, 0);
   i14 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   i14 = i17 + 8 | 0;
   i37 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i16 + 8 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 12 >> 2] = i37;
   if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i15, i16) | 0)) {
    break;
   }
   i37 = HEAP32[i36 >> 2] | 0;
   i14 = HEAP32[(HEAP32[i37 >> 2] | 0) + 456 >> 2] | 0;
   i13 = (HEAP32[i4 + 4 >> 2] | 0) - i22 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i4 >> 2] | 0) - i24;
   HEAP32[i20 + 4 >> 2] = i13;
   FUNCTION_TABLE_viii[i14 & 1](i37, i3, i20);
   i37 = HEAP32[i36 >> 2] | 0;
   if ((HEAP32[i37 + 20 >> 2] & 128 | 0) == 0) {
    i40 = HEAP32[i37 + 4 >> 2] | 0;
   } else {
    i40 = 0;
   }
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i40 | 0, i2, i4, i15) | 0) {
    break;
   } else {
    i35 = 1;
   }
   STACKTOP = i8;
   return i35 | 0;
  }
 } while (0);
 i35 = 0;
 STACKTOP = i8;
 return i35 | 0;
}
function __ZN7WebCore11EllipsisBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 80 | 0;
 i14 = i6 + 88 | 0;
 i15 = i6 + 96 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 i17 = i1 + 16 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = (HEAP32[i18 + 20 >> 2] & 768 | 0) == 256;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 1 | 0) == 0) {
   if (i19) {
    i20 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i20 = HEAP32[i18 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i19) {
    i21 = HEAP32[i18 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i21 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i20 = HEAP32[i21 + 36 >> 2] | 0;
     break;
    } else {
     i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i21) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i20 = HEAP32[i18 + 36 >> 2] | 0;
     break;
    } else {
     i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i18) | 0;
     break;
    }
   }
  }
 } while (0);
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i20, 340);
 __ZNK7WebCore15GraphicsContext9fillColorEv(i8, i16);
 i18 = i7 | 0;
 do {
  if ((HEAP32[i18 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
   if ((HEAP8[i7 + 4 | 0] & 1) != 0 ^ (HEAP8[i8 + 4 | 0] & 1) != 0) {
    i22 = 15;
    break;
   }
   i23 = i20 + 24 | 0;
  } else {
   i22 = 15;
  }
 } while (0);
 if ((i22 | 0) == 15) {
  i8 = i20 + 24 | 0;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i16, i7, (HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  i23 = i8;
 }
 i8 = HEAP32[(HEAP32[i23 >> 2] | 0) + 60 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i24 = 0;
 } else {
  d25 = +(HEAP32[i8 + 4 >> 2] | 0);
  HEAPF32[i9 >> 2] = +(HEAP32[i8 >> 2] | 0);
  HEAPF32[i9 + 4 >> 2] = d25;
  i8 = HEAP32[i23 >> 2] | 0;
  i19 = HEAP32[i8 + 60 >> 2] | 0;
  __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i16, i9, +(HEAP32[i19 + 8 >> 2] | 0), i19 + 16 | 0, (HEAP32[i8 + 88 >> 2] | 0) >>> 17 & 1);
  i24 = 1;
 }
 i8 = __ZNK7WebCore11RenderStyle4fontEv(i20) | 0;
 do {
  if ((HEAP32[i1 + 48 >> 2] | 0) != 0) {
   __ZN7WebCore11EllipsisBox14paintSelectionEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_11RenderStyleERKNS_4FontE(i1, i16, i3, i20, i8);
   if ((HEAP32[i2 + 24 >> 2] & 2 | 0) == 0) {
    __ZNK7WebCore12RenderObject24selectionForegroundColorEv(i10, HEAP32[i17 >> 2] | 0);
    if ((HEAP8[i10 + 4 | 0] & 1) == 0) {
     break;
    }
   } else {
    HEAP32[i10 >> 2] = -16777216;
    HEAP8[i10 + 4 | 0] = 1;
   }
   if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i18 >> 2] | 0)) {
    if ((HEAP8[i7 + 4 | 0] & 1) != 0) {
     break;
    }
   }
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i16, i10, (HEAP32[(HEAP32[i23 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  }
 } while (0);
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i11, HEAP32[i17 >> 2] | 0, i8, i1 + 44 | 0, i20, 1, 0);
 d25 = +HEAPF32[i1 + 20 >> 2] + +(HEAP32[i3 >> 2] | 0);
 do {
  if (d25 < +2147483647) {
   if (d25 <= +-2147483648) {
    d26 = +-2147483648;
    break;
   }
   d26 = +(~~d25 | 0);
  } else {
   d26 = +2147483648;
  }
 } while (0);
 d25 = +HEAPF32[i1 + 24 >> 2] + +(HEAP32[i3 + 4 >> 2] | 0);
 d27 = d25 + +(_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i20) | 0) + 4 >> 2])) | 0);
 do {
  if (d27 < +2147483647) {
   if (d27 <= +-2147483648) {
    d28 = +-2147483648;
    break;
   }
   d28 = +(~~d27 | 0);
  } else {
   d28 = +2147483648;
  }
 } while (0);
 HEAPF32[i12 >> 2] = d26;
 HEAPF32[i12 + 4 >> 2] = d28;
 __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i16, i8, i11, i12, 0, -1);
 i12 = HEAP32[i11 + 32 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 4 | 0;
   i8 = i11 | 0;
   i17 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i8 >> 2] = i17;
    break;
   }
   i17 = i11 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
  }
 } while (0);
 __ZNK7WebCore15GraphicsContext9fillColorEv(i13, i16);
 if ((HEAP32[i18 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
  if ((HEAP8[i7 + 4 | 0] & 1) != 0 ^ (HEAP8[i13 + 4 | 0] & 1) != 0) {
   i22 = 38;
  }
 } else {
  i22 = 38;
 }
 if ((i22 | 0) == 38) {
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i16, i7, (HEAP32[(HEAP32[i23 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 }
 if (!i24) {
  i29 = i4 | 0;
  i30 = HEAP32[i29 >> 2] | 0;
  i31 = i14 | 0;
  HEAP32[i31 >> 2] = i30;
  i32 = i5 | 0;
  i33 = HEAP32[i32 >> 2] | 0;
  i34 = i15 | 0;
  HEAP32[i34 >> 2] = i33;
  __ZN7WebCore11EllipsisBox14paintMarkupBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_RKNS_11RenderStyleE(i1, i2, i3, i14, i15, i20);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore15GraphicsContext11clearShadowEv(i16);
 i29 = i4 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = i14 | 0;
 HEAP32[i31 >> 2] = i30;
 i32 = i5 | 0;
 i33 = HEAP32[i32 >> 2] | 0;
 i34 = i15 | 0;
 HEAP32[i34 >> 2] = i33;
 __ZN7WebCore11EllipsisBox14paintMarkupBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_RKNS_11RenderStyleE(i1, i2, i3, i14, i15, i20);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11EllipsisBox14paintMarkupBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_RKNS_11RenderStyleE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP8[i1 + 36 | 0] & 1) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = HEAP32[i1 + 16 >> 2] | 0;
 i13 = __ZNK7WebCore15RenderBlockFlow11lineAtIndexEi(i12, (__ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i12, 0, 0) | 0) - 1 | 0) | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = HEAP32[i13 + 44 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i13 = HEAP32[i12 + 16 >> 2] | 0;
 if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
  i14 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i14 = HEAP32[i13 + 36 >> 2] | 0;
 }
 i13 = (HEAP32[i14 + 52 >> 2] & 134217728 | 0) != 0 ? i12 : 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i3;
 i3 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 4 >> 2] = i3;
 d15 = +HEAPF32[i1 + 20 >> 2] + +HEAPF32[i1 + 28 >> 2] - +HEAPF32[i13 + 20 >> 2];
 do {
  if (d15 < +2147483647) {
   if (d15 <= +-2147483648) {
    i16 = -2147483648;
    break;
   }
   i16 = ~~d15;
  } else {
   i16 = 2147483647;
  }
 } while (0);
 d15 = +HEAPF32[i1 + 24 >> 2];
 d17 = d15 + +(_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i6) | 0) + 4 >> 2])) | 0);
 d15 = +HEAPF32[i13 + 24 >> 2];
 i6 = HEAP32[i13 + 16 >> 2] | 0;
 i1 = (HEAP32[i6 + 20 >> 2] & 768 | 0) == 256;
 do {
  if ((HEAP32[i13 + 32 >> 2] & 1 | 0) == 0) {
   if (i1) {
    i18 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i18 = HEAP32[i6 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i1) {
    i3 = HEAP32[i6 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i18 = HEAP32[i3 + 36 >> 2] | 0;
     break;
    } else {
     i18 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i3) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i18 = HEAP32[i6 + 36 >> 2] | 0;
     break;
    } else {
     i18 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i6) | 0;
     break;
    }
   }
  }
 } while (0);
 d19 = d17 - (d15 + +(_round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i18) | 0) + 4 >> 2])) | 0));
 do {
  if (d19 < +2147483647) {
   if (d19 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d19;
  } else {
   i20 = 2147483647;
  }
 } while (0);
 i18 = i8;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i16;
 i16 = i9 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i20;
 i20 = HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
 FUNCTION_TABLE_viiiii[i20 & 3](i13, i2, i9, i10, i11);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11EllipsisBox14paintSelectionEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_11RenderStyleERKNS_4FontE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 56 | 0;
 i14 = i6 + 96 | 0;
 i15 = i6 + 104 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, i4, 1);
 i16 = i1 + 16 | 0;
 __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i10, HEAP32[i16 >> 2] | 0);
 i17 = i10 + 4 | 0;
 if ((HEAP8[i17] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 i18 = i10 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if (i19 >>> 0 < 16777216 >>> 0) {
  STACKTOP = i6;
  return;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) == (i19 | 0)) {
   if ((HEAP8[i9 + 4 | 0] & 1) == 0) {
    break;
   }
   HEAP32[i18 >> 2] = __ZN7WebCore7makeRGBEiii(i19 >>> 16 & 255 ^ 255, i19 >>> 8 & 255 ^ 255, i19 & 255 ^ 255) | 0;
   HEAP8[i17] = 1;
  }
 } while (0);
 i17 = __ZN7WebCore9InlineBox4rootEv(i1 | 0) | 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i11, i17);
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i7, i17);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i17);
 i17 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 i8 = (i17 | 0) > 0 ? i17 : 0;
 i17 = i1 + 20 | 0;
 i7 = i3 | 0;
 i19 = i3 + 4 | 0;
 i3 = i11 | 0;
 d20 = +((HEAP32[i3 >> 2] | 0) + (HEAP32[i19 >> 2] | 0) | 0);
 d21 = +HEAPF32[i1 + 28 >> 2];
 HEAPF32[i12 >> 2] = +HEAPF32[i17 >> 2] + +(HEAP32[i7 >> 2] | 0);
 HEAPF32[i12 + 4 >> 2] = d20;
 HEAPF32[i12 + 8 >> 2] = d21;
 HEAPF32[i12 + 12 >> 2] = +(i8 | 0);
 __ZN7WebCore32alignSelectionRectToDevicePixelsERNS_9FloatRectE(i12);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i12);
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i13, HEAP32[i16 >> 2] | 0, i5, i1 + 44 | 0, i4, 1, 0);
 d21 = +HEAPF32[i17 >> 2] + +(HEAP32[i7 >> 2] | 0);
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i22 = -2147483648;
    break;
   }
   i22 = ~~d21;
  } else {
   i22 = 2147483647;
  }
 } while (0);
 d21 = +(HEAP32[i3 >> 2] | 0) + (+HEAPF32[i1 + 24 >> 2] + +(HEAP32[i19 >> 2] | 0));
 do {
  if (d21 < +2147483647) {
   if (d21 <= +-2147483648) {
    i23 = -2147483648;
    break;
   }
   i23 = ~~d21;
  } else {
   i23 = 2147483647;
  }
 } while (0);
 HEAP32[i15 >> 2] = i22;
 HEAP32[i15 + 4 >> 2] = i23;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i14, i15);
 __ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii(i2, i5, i13, i14, i8, i10, (HEAP32[(HEAP32[i4 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, 0, -1);
 i4 = HEAP32[i13 + 32 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 + 4 | 0;
   i10 = i13 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i13 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11EllipsisBox13selectionRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i2 | 0;
 i12 = i2 + 16 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (HEAP32[i13 + 20 >> 2] & 768 | 0) == 256;
 do {
  if ((HEAP32[i2 + 32 >> 2] & 1 | 0) == 0) {
   if (i14) {
    i15 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i15 = HEAP32[i13 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i14) {
    i16 = HEAP32[i13 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i15 = HEAP32[i16 + 36 >> 2] | 0;
     break;
    } else {
     i15 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i16) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i15 = HEAP32[i13 + 36 >> 2] | 0;
     break;
    } else {
     i15 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i13) | 0;
     break;
    }
   }
  }
 } while (0);
 i13 = __ZNK7WebCore11RenderStyle4fontEv(i15) | 0;
 i14 = __ZN7WebCore9InlineBox4rootEv(i11) | 0;
 __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i7, HEAP32[i12 >> 2] | 0, i13, i2 + 44 | 0, i15, 1, 0);
 i15 = ~~+HEAPF32[i2 + 20 >> 2];
 d17 = +HEAPF32[i2 + 24 >> 2];
 __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i10, i14);
 i2 = ~~(d17 + +(HEAP32[i10 >> 2] | 0));
 HEAP32[i9 >> 2] = i15;
 HEAP32[i9 + 4 >> 2] = i2;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i8, i9);
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i4, i14);
 __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i5, i14);
 i14 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i6, i13, i7, i8, (i14 | 0) > 0 ? i14 : 0, 0, -1);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i6);
 i6 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i6 + 4 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 18;
}
function __ZNK7WebCore11EllipsisBox9markupBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP8[i1 + 36 | 0] & 1) == 0) {
  return 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = __ZNK7WebCore15RenderBlockFlow11lineAtIndexEi(i2, (__ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i2, 0, 0) | 0) - 1 | 0) | 0;
 if ((i1 | 0) == 0) {
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i3 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  i4 = i3 + 48 | 0;
  i5 = i4 + 4 | 0;
  i6 = i5;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 & 134217728;
  i9 = (i8 | 0) != 0;
  i10 = i9 ? i2 : 0;
  return i10 | 0;
 } else {
  i3 = HEAP32[i1 + 36 >> 2] | 0;
  i4 = i3 + 48 | 0;
  i5 = i4 + 4 | 0;
  i6 = i5;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 & 134217728;
  i9 = (i8 | 0) != 0;
  i10 = i9 ? i2 : 0;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore11EllipsisBoxC2ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var d11 = +0, i12 = 0;
 d11 = +(+(i7 | 0));
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAPF32[i2 + 4 >> 2] = d11;
 HEAPF32[i1 + 28 >> 2] = +(i5 | 0);
 HEAP32[i1 + 32 >> 2] = i8 & 1 | (i9 & 1) << 11 | 16386;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 36 | 0] = (i10 | 0) != 0 | 0;
 HEAP32[i1 + 40 >> 2] = i6;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i12 = i1 + 48 | 0;
  HEAP32[i12 >> 2] = 0;
  return;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i12 = i1 + 48 | 0;
 HEAP32[i12 >> 2] = 0;
 return;
}
function __ZN7WebCore11EllipsisBoxC1ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var d11 = +0, i12 = 0;
 d11 = +(+(i7 | 0));
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = i2;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAPF32[i2 + 4 >> 2] = d11;
 HEAPF32[i1 + 28 >> 2] = +(i5 | 0);
 HEAP32[i1 + 32 >> 2] = i8 & 1 | (i9 & 1) << 11 | 16386;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 36 | 0] = (i10 | 0) != 0 | 0;
 HEAP32[i1 + 40 >> 2] = i6;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i12 = i1 + 48 | 0;
  HEAP32[i12 >> 2] = 0;
  return;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i12 = i1 + 48 | 0;
 HEAP32[i12 >> 2] = 0;
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
function __ZN7WebCore11EllipsisBoxD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
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
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZN7WebCore11EllipsisBoxD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
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
function fiifffii___ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb__wrapper(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb(i1 | 0, i2 | 0, +d3, +d4, +d5, i6 | 0, i7 | 0);
}
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function dynCall_fiifffii(i1, i2, i3, d4, d5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiifffii[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, i7 | 0, i8 | 0);
}
function iiiii___ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE(i1 | 0, i2 | 0) | 0;
}
function b11(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(11);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore9InlineBox9markDirtyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -257 | (i2 & 1) << 8;
 return;
}
function viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 __ZN7WebCore9InlineBox14adjustPositionEff(i1 | 0, +d2, +d3);
}
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return 0;
}
function vii___ZNK7WebCore9InlineBox10lineHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InlineBox10lineHeightEv(i1 | 0, i2 | 0);
}
function b6(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
 return +0;
}
function __ZN7WebCore9InlineBox14setConstructedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
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
function ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZNK7WebCore9InlineBox11isLineBreakEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 4096 | 0) != 0 | 0;
}
function vi___ZN7WebCore16InlineElementBox11extractLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16InlineElementBox11extractLineEv(i1 | 0);
}
function vi___ZN7WebCore16InlineElementBox10deleteLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16InlineElementBox10deleteLineEv(i1 | 0);
}
function vi___ZN7WebCore16InlineElementBox10attachLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16InlineElementBox10attachLineEv(i1 | 0);
}
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 3](i2 | 0, +d3, +d4);
}
function vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InlineBox14dirtyLineBoxesEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9InlineBox19calculateBoundariesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
 return 0;
}
function __ZN7WebCore11EllipsisBox14selectionStateEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 48 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZNK7WebCore11EllipsisBox6heightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 40 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore16InlineElementBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9InlineBox15clearTruncationEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function b5(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(5);
}
function __ZNK7WebCore9InlineBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
}
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0,__ZN7WebCore11EllipsisBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore9InlineBox19calculateBoundariesEv,b1,vii___ZNK7WebCore9InlineBox10lineHeightEv__wrapper,b1,__ZN7WebCore9InlineBox9markDirtyEb,b1];
  var FUNCTION_TABLE_iiiii = [b2,b2,iiiii___ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii__wrapper,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,__ZN7WebCore11EllipsisBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_,b3];
  var FUNCTION_TABLE_vi = [b4,b4,vi___ZN7WebCore16InlineElementBox10deleteLineEv__wrapper,b4,__ZN7WebCore11EllipsisBoxD0Ev,b4,vi___ZN7WebCore16InlineElementBox10attachLineEv__wrapper,b4,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b4,__ZN7WebCore9InlineBox15clearTruncationEv,b4,__ZN7WebCore11EllipsisBoxD1Ev,b4,vi___ZN7WebCore16InlineElementBox11extractLineEv__wrapper,b4,__ZN7WebCore9InlineBox14setConstructedEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viff = [b5,b5,viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper,b5];
  var FUNCTION_TABLE_fiifffii = [b6,b6,fiifffii___ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb__wrapper,b6];
  var FUNCTION_TABLE_ii = [b7,b7,__ZNK7WebCore9InlineBox15isRootInlineBoxEv,b7,ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper,b7,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b7,ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper,b7,__ZNK7WebCore16InlineElementBox18isInlineElementBoxEv,b7,__ZNK7WebCore9InlineBox11isLineBreakEv,b7,__ZNK7WebCore11EllipsisBox6heightEv,b7,__ZN7WebCore11EllipsisBox14selectionStateEv,b7,__ZNK7WebCore9InlineBox15isInlineFlowBoxEv,b7,__ZNK7WebCore9InlineBox15isInlineTextBoxEv,b7,__ZNK7WebCore9InlineBox6isLeafEv,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8];
  var FUNCTION_TABLE_v = [b9,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZNK7WebCore9InlineBox20virtualLogicalHeightEv,b10];
  var FUNCTION_TABLE_viiiiiiiiii = [b11,b11,__ZN7WebCore11EllipsisBoxC2ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_viff: dynCall_viff, dynCall_fiifffii: dynCall_fiifffii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_viff": invoke_viff, "invoke_fiifffii": invoke_fiifffii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore11EllipsisBox9markupBoxEv","__ZN7WebCore11EllipsisBox13selectionRectEv","_strlen","__ZNK7WebCore9InlineBox15isRootInlineBoxEv","__ZN7WebCore11EllipsisBoxD0Ev","__ZNK7WebCore11EllipsisBox6heightEv","__ZN7WebCore11EllipsisBoxC2ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZN7WebCore11EllipsisBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_","__ZN7WebCore9InlineBox15clearTruncationEv","_memset","__ZN7WebCore11EllipsisBoxD1Ev","__ZNK7WebCore16InlineElementBox18isInlineElementBoxEv","__ZNK7WebCore9InlineBox15isInlineFlowBoxEv","__ZNK7WebCore9InlineBox20virtualLogicalHeightEv","__ZNK7WebCore9InlineBox11isLineBreakEv","__ZN7WebCore9InlineBox14setConstructedEv","__ZN7WebCore11EllipsisBox14paintSelectionEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_11RenderStyleERKNS_4FontE","__ZN7WebCore11EllipsisBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZN7WebCore9InlineBox9markDirtyEb","__ZN7WebCore11EllipsisBox14paintMarkupBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_RKNS_11RenderStyleE","_memcpy","__ZN7WebCore11EllipsisBox14selectionStateEv","__ZNK7WebCore9InlineBox19calculateBoundariesEv","__ZNK7WebCore9InlineBox15isInlineTextBoxEv","__ZNK7WebCore9InlineBox6isLeafEv"]
